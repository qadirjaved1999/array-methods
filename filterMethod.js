console.log("Hy Buddy, How are you!");
////////////////////// Condition One//////////////////
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = arr.filter((currentValue) => {
  return currentValue % 2 == 0;
});
console.log(newArray);
//////////////////////////////////////////////////////

////////////////////// Condition Two //////////////////
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArray = arr.filter((element) => element == 2 || element == 4);
// console.log(newArray);
/////////////////////////////////////////////////////////

////////////////////// Condition Three //////////////////////////////////////////
// const arr = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// const newArray = arr.filter(specifiStringFun);
// console.log(newArray);

// function specifiStringFun(str) {
//   return str.length >= 8;
// }
//////////////////////////////////////////////////////////////////////////////////

////////////////////// Condition Four //////////////////////////////////////////
// const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000];
// const checkPrice = prices.filter(
//   (element) => element >= 3000 && !Number.isNaN(element)
// );
// console.log(checkPrice);
////////////////////////////////////////////////////////////////////////////////

////////////////////// Condition Four //////////////////////////////////////////
// const languages = [
//   "JavaScript",
//   "Python",
//   "Ruby",
//   "C",
//   "C++",
//   "Swift",
//   "PHP",
//   "Java",
// ];
// function searchinArray(arr, query) {
//   function searchingFun(element) {
//     return element.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//   }
//   return arr.filter(searchingFun);
// }
// let newArr = searchinArray(languages, "p");
// console.log(newArr);
///////////////////////////////////////////////////////////////////////////////////
