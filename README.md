# Array Reduce Transformation

This repository contains an implementation of a custom `reduce` function that mimics the behavior of JavaScript's `Array.reduce` method without using the built-in `Array.reduce` method.

## Overview

The `reduce` function takes three parameters:

1. `nums` - an array of integers.
2. `fn` - a reducer function that determines how to combine each element of the array with the accumulated result.
3. `init` - the initial value to start the accumulation with.

The `reduce` function processes each element in the `nums` array sequentially, applying the `fn` function to the accumulated result from the preceding element and the current element. The final result is then returned. If the length of the array is 0, the function returns `init`.

## Usage

### Example 1

```javascript
const nums = [1, 2, 3, 4];
const fn = function sum(accum, curr) { return accum + curr; };
const init = 0;
const result = reduce(nums, fn, init); // 10
console.log(result); // Output: 10
