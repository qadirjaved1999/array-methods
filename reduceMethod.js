console.log("Hy Buddy, How are you!");
///////////////////////////////////////////////////////////////////////
// const marks = [78, 89, 90, 70, 60, 58];
// const result = marks.reduce((total, currentValue) => total + currentValue);
// console.log("Your Total Marks = ", result);
///////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// const numbers = [1800, 50, 300, 20, 100];
// const difference = numbers.reduce(
//   (accumulator, currentValue) => accumulator - currentValue
// );
// console.log("Your Difference = ", difference);
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
const expenses = [1800, 2000, 3000, 5000, 500];
const salary = 15000;
let remainig = expenses.reduce(
  (total, currentValue) => total - currentValue,
  salary
);
console.log(remainig);
//////////////////////////////////////////////////////////////////////
