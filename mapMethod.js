console.log("Hy Buddy, How are you!");
/////////////////////////////// Syntax //////////////////////
// Array.map(function(currentValue, index, array), thisValue)
////////////////////////////////////////////////////////////

///////// Test All Parameters of function//////////////////
// const arr = [1, 2, 3, 4, 5, 6];
// arr.map(function (element, index, array) {
//   console.log("Element is = ", element);
//   console.log("This element Index is = ", index);
//   console.log("This is Original Array = ", array);
//   return element;
// }, 80);
////////////////////////////////////////////////////////////

//////////////// Method_1 ///////////////
const arr = [1, 2, 3, 4, 5, 6];
let newArray = arr.map((element) => {
  return element + 10;
  //   console.log(element + 10);
});
console.log(newArray);

///////////// Mwethod_2 ///////////////////
// const arr = [1, 2, 3, 4, 5, 6];
// const newArray = arr.map(myFunction);
// console.log(newArray);

// function myFunction(item) {
//   return item + 10;
// }

/////////// Without map how is it possible, but can not create a new array modify the original array /////////////////////
// const arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] + 10;
// }
// console.log(arr);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////// map is modify in the object means that Key pair value/////////////////////////////////////////////////////
// const arr = ["Qadir", "Adnan", "Tariq", "Ali"];
// const newObj = arr.map((value, index) => {
//   return { index: index, value: value + " " + "Javed" };
// });
// console.log(newObj);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
