from django.db import models


class Order(models.Model):
    STATUS_CHOICES = [
        ('PENDING', 'Pending'),
        ('PAID', 'Paid'),
        ('FAILED', 'Failed'),
        ('COD', 'Cash on Delivery'),
        ('CANCELLED', 'Cancelled'),
    ]

    order_id            = models.CharField(max_length=20, unique=True, db_index=True)
    name                = models.CharField(max_length=100)
    phone               = models.CharField(max_length=15)
    address             = models.TextField()
    product             = models.CharField(max_length=200, default='Solar Washing Motor Controller')
    quantity            = models.PositiveIntegerField(default=1)
    amount              = models.DecimalField(max_digits=10, decimal_places=2)
    status              = models.CharField(max_length=15, choices=STATUS_CHOICES, default='PENDING', db_index=True)
    razorpay_payment_id = models.CharField(max_length=100, blank=True, null=True)
    razorpay_order_id   = models.CharField(max_length=100, blank=True, null=True)
    razorpay_signature  = models.CharField(max_length=200, blank=True, null=True)
    created_at          = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at          = models.DateTimeField(auto_now=True)
    ip_address          = models.GenericIPAddressField(blank=True, null=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.order_id} — {self.name} — {self.status}'

    @property
    def total_amount(self):
        return self.quantity * self.amount
