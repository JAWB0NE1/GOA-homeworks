const customerOrders = [
    { orderId: 1, items: ["Laptop", "Mouse"] },
    { orderId: 2, items: ["Keyboard"] },
    { orderId: 3, items: [] }
];
const allOrdersHaveItems = customerOrders.every(order => order.items.length > 0);
console.log(allOrdersHaveItems); 