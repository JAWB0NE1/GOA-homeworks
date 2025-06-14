const bookOrders = [
    { orderId: 1, items: [{ title: "Book A", price: 15 }, { title: "Book B", price: 12 }] },
    { orderId: 2, items: [{ title: "Book C", price: 8 }, { title: "Book D", price: 20 }] }
];
bookOrders.forEach(order => {
    const allExpensive = order.items.every(book => book.price > 10);
    console.log(`Order ${order.orderId} contains only expensive books: ${allExpensive}`);
});