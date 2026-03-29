import hashlib
import hmac
import random
import string
import time

import razorpay
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Order
from .serializers import (
    CODOrderSerializer,
    CreateOrderSerializer,
    OrderSerializer,
    VerifyPaymentSerializer,
)


def generate_order_id():
    """Generate unique order ID: EZR + last 7 digits of timestamp + 2 random digits"""
    ts = str(int(time.time() * 1000))[-7:]
    rand = ''.join(random.choices(string.digits, k=2))
    return f'EZR{ts}{rand}'


def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        return x_forwarded_for.split(',')[0].strip()
    return request.META.get('REMOTE_ADDR')


@api_view(['POST'])
def create_order(request):
    """
    Create a new Razorpay order and save PENDING record to DB.
    POST /api/orders/create/
    """
    serializer = CreateOrderSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    data = serializer.validated_data
    order_id = generate_order_id()
    total_paise = int(float(data['amount']) * data['quantity'] * 100)

    # Create Razorpay order
    client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))
    rzp_order = client.order.create({
        'amount': total_paise,
        'currency': 'INR',
        'receipt': order_id,
        'notes': {
            'product': data['product'],
            'quantity': data['quantity'],
        },
    })

    # Save to DB
    order = Order.objects.create(
        order_id=order_id,
        name=data['name'],
        phone=data['phone'],
        address=data['address'],
        product=data['product'],
        quantity=data['quantity'],
        amount=data['amount'],
        razorpay_order_id=rzp_order['id'],
        ip_address=get_client_ip(request),
    )

    return Response({
        'order_id': order_id,
        'razorpay_order_id': rzp_order['id'],
        'razorpay_key': settings.RAZORPAY_KEY_ID,
        'amount': total_paise,
        'currency': 'INR',
        'name': data['name'],
        'phone': data['phone'],
    }, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def verify_payment(request):
    """
    Verify Razorpay payment signature and update order status.
    POST /api/orders/verify/
    """
    serializer = VerifyPaymentSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    data = serializer.validated_data

    try:
        order = Order.objects.get(order_id=data['order_id'])
    except Order.DoesNotExist:
        return Response({'error': 'Order not found'}, status=status.HTTP_404_NOT_FOUND)

    # Verify signature
    body = f"{data['razorpay_order_id']}|{data['razorpay_payment_id']}"
    expected_sig = hmac.new(
        settings.RAZORPAY_KEY_SECRET.encode('utf-8'),
        body.encode('utf-8'),
        hashlib.sha256,
    ).hexdigest()

    if expected_sig == data['razorpay_signature']:
        order.status = 'PAID'
        order.razorpay_payment_id = data['razorpay_payment_id']
        order.razorpay_signature = data['razorpay_signature']
        order.save(update_fields=['status', 'razorpay_payment_id', 'razorpay_signature', 'updated_at'])
        return Response({'status': 'PAID', 'order_id': order.order_id})
    else:
        order.status = 'FAILED'
        order.save(update_fields=['status', 'updated_at'])
        return Response({'status': 'FAILED', 'order_id': order.order_id},
                        status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def order_status(request, order_id):
    """
    Get order status by order ID.
    GET /api/orders/<order_id>/
    """
    try:
        order = Order.objects.only('order_id', 'status', 'name', 'product', 'quantity', 'amount', 'created_at').get(order_id=order_id)
    except Order.DoesNotExist:
        return Response({'error': 'Order not found'}, status=status.HTTP_404_NOT_FOUND)

    return Response(OrderSerializer(order).data)


@api_view(['POST'])
def cod_order(request):
    """
    Create a Cash on Delivery order (no Razorpay).
    POST /api/orders/cod/
    """
    serializer = CODOrderSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    data = serializer.validated_data
    order_id = generate_order_id()

    order = Order.objects.create(
        order_id=order_id,
        name=data['name'],
        phone=data['phone'],
        address=data['address'],
        product=data['product'],
        quantity=data['quantity'],
        amount=data['amount'],
        status='COD',
        ip_address=get_client_ip(request),
    )

    return Response({
        'order_id': order_id,
        'status': 'COD',
        'message': 'Cash on Delivery order created successfully.',
    }, status=status.HTTP_201_CREATED)
