const customerOrders = [
    { orderId: 1, isDelivered: true },
    { orderId: 2, isDelivered: false },
    { orderId: 3, isDelivered: true }
];

const hasPendingDelivery = customerOrders.some(order => !order.isDelivered);
console.log(hasPendingDelivery); 