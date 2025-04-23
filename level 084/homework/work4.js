function findMin(a, b, c) {
    return (a < b && a < c) ? a : (b < c ? b : c);
}
console.log(findMin(10, 20, 15));  
console.log(findMin(5, 3, 7));     
console.log(findMin(-1, -5, -3)); 
  