let cartItems = ["Milk", "Bread", "Eggs"];
let prices = [3.5, 2.0, 5.0];
function addItem(item, price) {
  cartItems.unshift(item); 
  prices.unshift(price); 
  return { cartItems, prices }; 
}
function removeFirstItem() {
  cartItems.shift();
  prices.shift(); 
  return { cartItems, prices }; 
}
function replaceItem(index, newItem, newPrice) {
  cartItems.splice(index, 1, newItem);
  prices.splice(index, 1, newPrice); 
  return { cartItems, prices }; 
}
function createReceipt() {
  let receipt = cartItems.join(", ");
  return receipt;
}
function applyDiscount(discountPrice) {
  prices.fill(discountPrice);
  return prices; 
}
console.log("Initial cart:", { cartItems, prices });
console.log("Add item:", addItem("Butter", 4.5));
console.log("Remove first item:", removeFirstItem());
console.log("Replace item at index 1:", replaceItem(1, "Cheese", 6.0));
console.log("Create receipt:", createReceipt()); 
console.log("Apply discount to all items:", applyDiscount(2.0));