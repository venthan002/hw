// 1️⃣ Check if a number is positive or negative using +, -, *, /, %, ==, ===, &&, ||
let num = -5;

if (num > 0) {
  console.log(num + " is positive");
} else if (num < 0) {
  console.log(num + " is negative");
} else {
  console.log(num + " is zero");
}

// Example of logical operators && and ||
if (num > 0 && num % 2 === 0) {
  console.log(num + " is positive and even");
} else if (num > 0 || num % 2 === 0) {
  console.log(num + " is positive or even");
}

// 2️⃣ Switch to print days of the week
let day = 3;

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day number");
}
