function combineArrays(str, ...arrays) {
  const combinedElements = arrays.flat(); 
  return [str, ...combinedElements];     
}
console.log(combineArrays("Start", [1, 2], ["a", "b"], [true, false]));