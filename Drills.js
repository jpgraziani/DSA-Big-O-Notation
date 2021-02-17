/*
===============================================
#1. What is the Bif O for this?
  1a. constant time 0(1)
  no matter the number of people in the room, you only have to yell  once.

  2a.
  linear time O(n)
  limit amount of people I can ask in the room.
===============================================
===============================================
#2 Even or Odd
  function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
  }

  constant time O(1)
  No matter input, it only goes through 1 operation
===============================================
===============================================
#3. Are you here?
  function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
  }

  Polynomial time O(n^2)
  nested 2 levels of for loops which exponentally increases time to complete
===============================================
===============================================
#4. Doubler
  function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
  }

  linear time O(n)
  Time it tales is preportional to the size of input
  eamples summing elements in an array, finding min and max value in array
===============================================
===============================================
#5. Naive search
  function naiveSearch(array, item) {
      for (let i = 0; i < array.length; i++) {
          if (array[i] === item) {
              return i;
          }
      }
  }
Linear time O(n)
Iterate through enitre array once to find the correct item
===============================================
===============================================
#6 Creating pairs
  function createPairs(arr) {
      for (let i = 0; i < arr.length; i++) {
          for(let j = i + 1; j < arr.length; j++) {
              console.log(arr[i] + ", " +  arr[j] );
          }
      }
  }

  Polynomial O(n^2) because there is a nested loop that would require 2 levels of looping over an input
===============================================
===============================================
#7 Compute the sequence
  What does the following algorithm do? What is its runtime complexity?
  function compute(num) {
      let result = [];
      for (let i = 1; i <= num; i++) {

          if (i === 1) {
              result.push(0);
          }
          else if (i === 2) {
              result.push(1);
          }
          else {
              result.push(result[i - 2] + result[i - 3]);
          }
      }
      return result;
  }

  The algorithm is computing a number where the results will be an array. It will loop through the array and if the index is equal to 1 it will push no results 0. If the index is equal to 2 it will push the first result 1. Or push the results of the array minus 2 location on the index.  Then it will return the result.

  Compute the sequence creates a fibonacci sequence up to num amount of numbers, O(n) because the run-time is depender on the input number-- the higher the input, the longer it will take. It increases linearly.

===============================================
===============================================
#8 An efficient search
In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
Random element O(1) - even though an array is inputted, it's runtime complexity is constant because it's independent of the input (no looping is happening).

It is also charactersic of logarithmic alogrithms that they cut teh problem size in half each round though

The Big O here is (O(log(n)) because the array though sorted, is the same array.

*/