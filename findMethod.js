console.log("Hy Buddy, How are you!");
////////////////////////////////////////////////////////////////////////////
// const person = ["Qadir", "Javed", "Sunny", "Adnan", "Ali", "Tariq", "Salman"];
// const specificPerson = person.find((onePerson) => onePerson == "Sunny");
// console.log(specificPerson);
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// const age = [54, 67, 32, 32, 67, 89, 34];
// const exactAge = age.find((item) => item > 32);
// console.log(exactAge);
///////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
const boys = [
  {
    name: "Qadir javed",
    age: 23,
  },
  {
    name: "Afzal",
    age: 22,
  },
  {
    name: "Adnan Javed",
    age: 28,
  },
  {
    name: "Faisal Satar",
    age: 35,
  },
  {
    name: "Tariq Javed",
    age: 38,
  },
  {
    name: "Ali Khan",
    age: 5,
  },
];

const maturePerson = boys.find((boy) => boy.age > 25);
console.log("You are Mature and Responsible Person = ", maturePerson);
//////////////////////////////////////////////////////////////////////////////
