let arr = [1, 2, 3, 4];

function sum(accum, curr) {
  return accum + curr;
}

function sum2(accum, curr) {
  return accum + curr * curr;
}
function sum3(accum, curr) {
  return 0;
}

let reduce = function (arr, fn, init) {
  let result = init;
  for (let i = 0; i < arr.length; i++) {
    result = fn(result, arr[i]);
  }
  return result;
};

console.log(reduce(arr, sum, 0));
console.log(reduce(arr, sum2, 100));
console.log(reduce(arr, sum3, 25));
