const nums = [10, 5, 2, 7, 19, 203];
const difference = nums.reduceRight((acc, num) => acc - num);
console.log(difference);