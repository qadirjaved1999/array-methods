console.log("Hy Buddy, How are you!");
///////////////////////////////////////////////////////////////
// const arr = [
//   "b",
//   "c",
//   "d",
//   "a",
//   "e",
//   "g",
//   "f",
//   "p",
//   "q",
//   "x",
//   "z",
//   "y",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
// ];
// const sorted = arr.sort();
// console.log(sorted);
/////////////// This Method is Wrong on above 9///////////////////
// const arr = [8, 4, 6, 2, 7, 1, 9, 3, 10, 5];
// const sorted = arr.sort();
// console.log(sorted);
//////////////////////////////////////////////////////////////////

///////// This is Good Method for sorting to the Ascending order of the Array//////////
// const arr = [8, 4, 6, 2, 7, 1, 9, 3, 10, 5, 12, 14, 11, 18, 19, 16, 20, 15];
// const sorted = arr.sort((a, b) => (a > b ? 1 : -1));
// console.log(sorted);
///////////////////////////////////////////////////////////////////////////////////////

///////// This is Good Method for sorting to the Descending order of the Array//////////
const arr = [8, 4, 6, 2, 7, 1, 9, 3, 10, 5, 12, 14, 11, 18, 19, 16, 20, 15, 13];
const sorted = arr.sort((a, b) => (a < b ? 1 : -1));
console.log(sorted);
///////////////////////////////////////////////////////////////////////////////////////
