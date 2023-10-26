console.log("Hy Buddy, How are you!");
/////////////////////////////////////////////
// const arr = [2, 4, 6, 8, 10];
// const newArray = arr.every((item) => item < 11);
// console.log(newArray); //true
///////////////////////////////////////////////

/////////////////////////////////////////////////////////////
const array_1 = [1, 2, 3, 4, 5, 6];
const array_2 = [4, 5, 6];
// const array_2 = [6, 7, 8]; // false
const newArray = array_2.every((element) => array_1.includes(element));
console.log(newArray); //true
////////////////////////////////////////////////////////////////////
