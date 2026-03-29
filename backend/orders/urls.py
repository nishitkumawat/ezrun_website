from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_order, name='order-create'),
    path('verify/', views.verify_payment, name='order-verify'),
    path('cod/', views.cod_order, name='order-cod'),
    path('<str:order_id>/', views.order_status, name='order-status'),
]
