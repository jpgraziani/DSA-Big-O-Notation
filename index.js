/*
The following function is meant to sum (that is, add together) all the values in an array of numbers:

Instead of just having sum return an integer value for the result, we have it return an object with a .result property which will contain the sum, and a .ticks property that we can use to measure the number of operations done by our algorithm. This will allow us to generate data about how the running time changes with different input sizes.

Run the program in your local environment with the following set of input:
sum([1,2,3]);
sum([1,2,3,4,5,6,7,8,9,10]);
sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]);
*/
function sum(array) {
  let sum = 0, ticks=1;
  for (let i = 0; i < array.length; i++) {
      sum += array[i];
      ticks++;
  }
  return {result: sum, ticks};
}

console.log(sum([1,2,3]));
console.log(sum([1,2,3,4,5,6,7,8,9,10]));
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]));