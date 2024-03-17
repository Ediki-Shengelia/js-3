"use strict";

//1.
let testFnc1 = (...numbers) => {
  let numberSum = 0;
  for (let item of numbers) {
    numberSum += item;
  }
  return numberSum;
};
let result1 = testFnc1(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result1);

//3.

let array1 = [1, 2, 4, 6, 71, 99];

console.log(Math.max(...array1));

//4.
let testFnc2 = (number) => {
  if (number % 2 == 0) {
    return "this number is even";
  }
  return "this number is odd";
};

let result2 = testFnc2(7);
console.log(result2);

//5.
let array = [1, 2, 3, 4, 5];

for (let index = array.length - 1; index >= 0; index--) {
  console.log(array[index]);
}

//6.
let userInfo = (age) => {
  let userAge = age > 18 ? "სრულლოვანი" : "არასრულლოვანი";
  return userAge;
};
let result5=userInfo(19);
console.log(result5);
