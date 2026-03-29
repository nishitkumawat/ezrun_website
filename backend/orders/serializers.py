from rest_framework import serializers
from .models import Order


class OrderSerializer(serializers.ModelSerializer):
    total_amount = serializers.ReadOnlyField()

    class Meta:
        model = Order
        fields = [
            'order_id', 'name', 'phone', 'address', 'product',
            'quantity', 'amount', 'status', 'razorpay_payment_id',
            'razorpay_order_id', 'created_at', 'total_amount',
        ]
        read_only_fields = ['status', 'razorpay_payment_id', 'razorpay_order_id', 'created_at']


class CreateOrderSerializer(serializers.Serializer):
    name    = serializers.CharField(max_length=100)
    phone   = serializers.CharField(max_length=15)
    address = serializers.CharField()
    product = serializers.CharField(max_length=200, default='Solar Washing Motor Controller')
    quantity = serializers.IntegerField(min_value=1, max_value=10, default=1)
    amount  = serializers.DecimalField(max_digits=10, decimal_places=2)


class VerifyPaymentSerializer(serializers.Serializer):
    razorpay_payment_id = serializers.CharField()
    razorpay_order_id   = serializers.CharField()
    razorpay_signature  = serializers.CharField()
    order_id            = serializers.CharField()


class CODOrderSerializer(serializers.Serializer):
    name     = serializers.CharField(max_length=100)
    phone    = serializers.CharField(max_length=15)
    address  = serializers.CharField()
    product  = serializers.CharField(max_length=200, default='Solar Washing Motor Controller')
    quantity = serializers.IntegerField(min_value=1, max_value=10, default=1)
    amount   = serializers.DecimalField(max_digits=10, decimal_places=2)
