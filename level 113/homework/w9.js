const quantityOrders = [
    { orderId: 1, items: [{ title: "Book A", quantity: 2 }, { title: "Book B", quantity: 1 }] },
    { orderId: 2, items: [{ title: "Book C", quantity: 1 }, { title: "Book D", quantity: 1 }] }
];
quantityOrders.forEach(order => {
    const hasMultipleCopies = order.items.some(book => book.quantity > 1);
    console.log(`Order ${order.orderId} has multiple copies of at least one book: ${hasMultipleCopies}`);
});