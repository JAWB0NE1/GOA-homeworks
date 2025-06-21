const customerOrders = [
  {
    orderId: 101,
    customerId: 1,
    items: [
      { title: 'JavaScript Basics', price: 15, quantity: 1 },
      { title: 'Advanced CSS', price: 25, quantity: 2 }
    ],
    shippingAddress: '123 Library Ln',
    isDelivered: true
  },
  {
    orderId: 102,
    customerId: 2,
    items: [],
    shippingAddress: '456 Book Rd',
    isDelivered: false
  },
  {
    orderId: 103,
    customerId: 3,
    items: [
      { title: 'React in Depth', price: 35, quantity: 1 },
      { title: 'Node.js for Beginners', price: 20, quantity: 1 }
    ],
    shippingAddress: '789 Reader Ave',
    isDelivered: true
  }
];

const allOrdersHaveItems = customerOrders.every(order => order.items.length > 0);
console.log('All orders have items:', allOrdersHaveItems);

const hasPendingDelivery = customerOrders.some(order => order.isDelivered === false);
console.log('Has pending delivery:', hasPendingDelivery);

customerOrders.forEach(order => {
  console.log(`Processing Order ID: ${order.orderId}`);
  order.items.forEach(item => {
    console.log(` - ${item.title} (Quantity: ${item.quantity})`);
  });
  const allExpensive = order.items.every(item => item.price > 10);
  console.log(`Order ${order.orderId} contains only expensive books: ${allExpensive}`);
  const hasMultipleCopies = order.items.some(item => item.quantity > 1);
  console.log(`Order ${order.orderId} has multiple copies of at least one book: ${hasMultipleCopies}`);
});