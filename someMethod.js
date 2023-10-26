console.log("Hy Buddy, How are you!");
const marks = [45, 67, 56, 89, 34, 40, 34];

const result = marks.some((number) => number < 40);
console.log(result);
if (result == true) {
  console.log("Some Students are fails");
} else {
  console.log("All Students Pass");
}
