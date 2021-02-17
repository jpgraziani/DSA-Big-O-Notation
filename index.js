/* ========================================= */
// Measuring algorithm performance
/* ========================================= */

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

/*
console.log(sum([1,2,3]));
console.log(sum([1,2,3,4,5,6,7,8,9,10]));
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]));
*/




/* ========================================= */
// Constant time 01
/* ========================================= */

/*
Constant time O(1)
Constant time complexity is the "holy grail". No matter the size of your input, the algorithm will take the same amount of time to complete. Examples of O(1) algorithms are accessing an array item or performing basic arithmetic operations (e.g., adding 2 numbers). The following is an example of an algorithm with O(1) runtime complexity.
*/

function getRandomItem(array) {
  let ticks = 0;
  // Get a random number and access that element in the array
  const item = array[Math.floor(Math.random() * array.length)];
  ticks++;
  return {
      result: item,
      ticks: ticks
  };
}
/*
console.log(getRandomItem([1,2,3]));
console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]));
*/




/*
getRandomItem() finds a single random element in an array. Whether we pass it an array of size 10 or size 10 million, it doesn't effect the algorithm's running time. In both cases, the function must pick a random integer within a range, and then retrieve the item in the array at that index. Neither of these operations depends on input size.
*/

/* ========================================= */
// Logarithmic time O(log(n))
/* ========================================= */

/*

Logarithmic time complexity (O(log n)) is the next best thing after constant time. While logarithmic time complexity algorithms do take longer with larger inputs, running time increases slowly. For instance, if myLogRunTimeAlgo takes 1 second to complete with an input of size 10, when we increase our input by 10x to 100, the running time only grows to 2 seconds. When we increase the input size to 1000, the time only grows to 3 seconds.

It is also characteristic of logarithmic algorithms that they cut the problem size in half each round through.

The following function howManyLessThanNitems has logarithmic time complexity. It takes a sorted array of integers (arr) and a less than value (n) as arguments, and returns the number of elements from the array whose value is less than n. So howManyLessThanNitems([1, 2, 3, 4], 3) should be 2 because 1 and 2 are both less than 3.

*/

function howManyLessThanNitems(arr, n) {
  let ticks = 0;
  /* If the 1st element in the array is greater than `n`, return 0,
     because no items in the array are less than `n`. */
  if (!arr.length || arr[0] >= n) {
      ticks++;
      return 0;
  }

  let lowIndex = 0, highIndex = arr.length;

  while (highIndex > lowIndex) {
      // Find midpoint
      let midIndex = Math.floor((highIndex + lowIndex) / 2);
      /* If `midIndex` element is greater than `n`, that means all elements
         to the right of `midIndex` are also greater than `n`, so
         we only need to focus on elements to the left of `midIndex`.
         We set `highIndex` to the current value of `midIndex` so next time
         through the loop, we'll only look at the left half */
      if (arr[midIndex] >= n) {
          highIndex = midIndex;
          ticks++;
      }

      /* If the element to the right of `midIndex` is less than `n`, then we
         know that we need to check the items to the right of `midIndex`, so
         we set `lowIndex` to the current value of `midIndex`, so that next
         time through the loop we only look at the right side */
      else if (arr[midIndex + 1] < n) {
          lowIndex = midIndex;
          ticks++;
      }

      /* Otherwise, if the element to the right of `midIndex` is greater
         than or equal to `n`, we know that the item at `midIndex` is the last
         item that's less than `n`, so we return `midIndex +  1` to get the total
         number of items that are less than `n` */
      else {
          ticks++;
          return {
              result: midIndex + 1,
              ticks: ticks
          }
      }
  }
}
/*
console.log(howManyLessThanNitems([1,2,3], 2));
console.log(howManyLessThanNitems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100], 99 ));
*/




/*
If you execute this code you'll see how it performs with inputs of size 3, and 100. Each time through the while loop, we cut the size of the problem by half, so huge runtime does not increase by a whole lot although the size of the input may increases significantly. You should try running the program with an input of 1000 items in the array and analyze the runtime
*/

/* ========================================= */
// Linear time O(n)
/* ========================================= */
/*

Algorithms with linear time complexity (O(n)) have running times that are directly proportional to the size (n) of the input. Given input a and input b, where b is twice as large as a, it will take a linear algorithm 2 times as long to process b compared to a.

Some examples of linear complexity algorithms are summing the elements in an array and finding the minimum or maximum value in an array.

*/

function findMin(array){
  let min = array[0], ticks = 1;
  for (let i = 1; i < array.length; i++) {
      ticks++;
      if (array[i] < min) {
          min = array[i];
      }
  }
  return {
      result: min,
      ticks: ticks
  };
}

/*
console.log(findMin([1,2,3]));
console.log(findMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(findMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]));
*/



/* ========================================= */
// Polynomial time O(n^k)
/* ========================================= */

/*

An algorithm with polynomial time complexity has a running time that would be some input size n raised to some constant power k. The easiest way to understand polynomial time complexity is with nested loops. An algorithm that requires 2 levels of looping over an input would be O(n^2) while one requiring 3 levels of looping would be O(n^3). In both cases, we have polynomial time complexity.

The following hasDuplicates function has a polynomial time complexity of O(n^2):

*/

function hasDuplicates(array) {
  let ticks = 0, result = false;
  for (let i = 0; i < array.length; i++) {
      ticks++;
      for (let j = 0; j < array.length; j++) {
          ticks++;
          if (array[i] === array[j] && i !== j) {
              result = true;
          }
      }
  }
  return {
      result: result,
      ticks: ticks
  };
}

/*
console.log(hasDuplicates([1, 2, 2]));
console.log(hasDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]));
console.log(hasDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 99]));
*/

/*
Running this code, you can see the performance for inputs of size 3, 10, and 100. With an input of size 100, we're already > 10,000 ticks, so the time complexity is growing more quickly than the size of our input. If we double the input size, we quadruple the running time.
*/


/* ========================================= */
// Exponential time O(2^n)
/* ========================================= */

/*

Algorithms with exponential time complexity (O(2^n)) have running times that grow rapidly with any increase in input size. For an input of size 2, an exponential time algorithm will take 2^2 = 4 time. With an input of size 10, the same algorithm will take 2^10 = 1024 time, and with an input of size 100, it will take 2^100 = 1.26765060022823 * 1030 time. Yikes!

The following countTriangle is meant to count the number of points in a triangle that looks like this:

                          *
                         * *
                       * * * *
                   * * * * * * * *
           * * * * * * * * * * * * * * * *

*/

function countTriangle(layers) {
  let ticks = 1;
  let count = 0; // the number of dots we've counted so far
  let layer = 0; // the current layer we're on
  let lastLayer = 1; // the number of dots we counted in the previous layer
  while (layer < layers) {
      ticks++;
      let newLayer = 0; // the number of dots we've counted so far in the current layer
      for (let i = 0; i < lastLayer; i++) {
          ticks++;
          newLayer += 2;
      }
      lastLayer = newLayer;
      count += lastLayer;
      layer++;
  }
  return {
      result: count,
      ticks: ticks
  };
}

console.log(countTriangle(2));
console.log(countTriangle(4));
console.log(countTriangle(16));

/*
Running the code, you'll see performance for inputs of size 2, 4, and 16. While there are only 6 ticks with input size 2, at input size 16, we're at 65552 ticks!

In this algorithm, we count the number of dots in a triangle with a given number of layers. We start at the top layer of the triangle, which is the 0th layer and has 1 dot (or you can think of it as 2^0 = 1). As you move to the next layer, the number of dots increases by a power of 2. So, in the 1st layer, the dots you will count will be 2^1 = 2. In the 2nd layer, the number of dots will be 2^2 = 4. By the time you're at the nth layer, the number of dots would be 2^n. Therefore, as the input size increases, the number of operations to count the dots increases exponentially making the running time of this algorithm O(2^n).
*/