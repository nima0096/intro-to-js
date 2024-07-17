// OPERATORS
// ARITHMETIC OPERATORS
const a = 4;
const b = 3;
const c = 10;
const d = 12;

console.log(a < b);
console.log(a > b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a === b);
console.log(a > b && d > c);
console.log(a > b && c > d);
console.log(a + b !== c + d);
console.log(a > b || d > c);
console.log(a > b || d < c);
console.log(a + b !== d + c);

// condition
// if else
let age = 1;
if (age >= 18) {
  console.log("you are eligibile to vote");
} else {
  console.log("you are not eligibile to vote");
}
let num = 100;
if (num % 2 == 0) {
  console.log(num, " tegsh too bish");
}
// exe
let num2 = 15;
if (num2 % 3 == 0 && num2 % 5 == 0) {
  console.log("fizz buzz");
} else if (num2 % 5 == 0) {
  console.log("buzz");
} else if (num2 % 3 == 0) {
  console.log("fizz");
} else {
  console.log("no fizz buzz");
}

function fizzBuzzGame(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("fizz buzz");
  } else if (num % 5 == 0) {
    console.log("buzz");
  } else if (num % 3 == 0) {
    console.log("fizz");
  } else {
    console.log("no fizz buzz");
  }
}

fizzBuzzGame(10);
fizzBuzzGame(9);
fizzBuzzGame(30);
fizzBuzzGame(2);

// homework1
const cityname = "ulaanbaatar";
console.log(cityname);
// homework2
const productName = "Airpods Pro2";
let price = 250;
let discount = 37.6;
let currentPrice = price * (1 - discount / 100);
{
  console.log(
    "Wallmart delguurt " +
      productName +
      " buteegdehuun " +
      price +
      "$" +
      " baisnaas " +
      discount +
      "%" +
      " hyamdarch " +
      currentPrice +
      "$" +
      " bolloo. "
  );
}
// homework3
//   const number1 = 10;
//   const number2 = 15;
//   const sum = number1 + number2;
//   console.log(number1 + "+" + number2 + "=" + sum);
// while and for
//   let i = 1;
//   while (i <= 5) {
//     console.log(i);
//     i++;
//   }

let i = 1;
let sum = 0;
while (i < 10) {
  sum = sum + i;
  console.log("i", i, "sum", sum);
  i = i + 1;
}
// homework4
function calculateProblems(count) {
  const problemserHour = 2;
  const totalHours = count * problemserHour;
  console.log("I study for" + totalHours + "to solve" + count + "problems");
}
calculateProblems(6);
// homework5
function printFavoriteFood(name, food) {
  console.log(name + "loves" + food);
}
printFavoriteFood("Nima", "Pizza");

function printWheather(cityName, wheather) {
  console.log("Today" + wheather + "at" + cityName);
}

const cityName = "LA";
const wheather = "90 F";
printWheather(cityName, wheather);

//homework6
function calculateArea(width, height) {
  const area = width * height;
  return area;
}
let area = calculateArea(10, 20);
console.log("Area:" + area);
//homework7
function calculateVolume(width, height, depth) {
  const area = width * height * depth;
  return area;
}
const volume = (10, 20, 30);
console.log("Volume is" + area);
//homework8
function printTicketInfo(eventName, ticketPrice, discount) {
  return (
    "The ticket price for" +
    eventName +
    "is" +
    ticketPrice +
    "$, but if you buy now you will get " +
    discount +
    "% discount"
  );
}

const ticketInfo = printTicketInfo("Taylor Swift's concert", 50, 20);
console.log(ticketInfo);
