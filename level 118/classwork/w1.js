function sumNumbers(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}