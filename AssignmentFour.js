//----------------------------------
// LESSON 4 ALGORITHMS
//----------------------------------

// ---------- QUESTION 1 ----------
// Create a function called 'convertTemp' that takes 1 temperature parameter in celsius and return the temperature in Fahrenheit.  Log both the input and output values

// EXAMPLE LOG:
//    console.log("Q1 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));
// EXAMPLE OUTPUT:
//    Q1 convertTemp: 0 32

// Call convertTemp with several different celsius temperatures

// PUT YOUR CODE HERE
const convertTemp = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

let celsius1 = 0;
let celsius2 = 25;
let celsius3 = 100;

console.log("Q1 convertTemp: ", celsius1, convertTemp(celsius1));
console.log("Q1 convertTemp: ", celsius2, convertTemp(celsius2));
console.log("Q1 convertTemp: ", celsius3, convertTemp(celsius3));

// ---------- QUESTION 2 ----------
// Create a function called 'reverseString' that takes 1 string parameter and returns the reverseString.  Use a for loop.  Log both the input and output values.

// EXAMPLE LOG:
//    console.log("Q2 reverseString: ", inputString, reverseString(inputString));
// EXAMPLE OUTPUT:
//    Q2 reverseString: HelloWorld dlroWolleH

// Call reverseString with several different strings.  Make sure it works for an empty string.

// PUT YOUR CODE HERE
const reverseString = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

let inputStr1 = "HelloWorld";
let inputStr2 = "Code The Dream";
let inputStr3 = "";

console.log("Q2 reverseString: ", inputStr1, reverseString(inputStr1));
console.log("Q2 reverseString: ", inputStr2, reverseString(inputStr2));
console.log(
  "Q2 reverseString: ",
  `"${inputStr3}"`,
  `"${reverseString(inputStr3)}"`,
);

// ---------- QUESTION 3 ----------
// Let's make a useful math problem - create a tip calculator!  Create a function named tipCalculator that takes two parameters - billTotal and tipPercentage.   Return the total bill amount

// EXAMPLE LOG:
//    console.log("Q3 tipCalculator: ", tipCalculator (20, .20));
// EXAMPLE OUTPUT:
//    Q3 tipCalculator: 50 0.2 60

// PUT YOUR CODE HERE

const tipCalculator = (billTotal, tipPercentage) => {
  const tipAmount = billTotal * tipPercentage;
  return billTotal + tipAmount;
};

console.log("Q3 tipCalculator: ", 20, 0.2, tipCalculator(20, 0.2));
console.log("Q3 tipCalculator: ", 50, 0.15, tipCalculator(50, 0.15));

// ---------- QUESTION 4 ----------
// Create two variables named 'num1' and 'num2' and assign them integer values. Create a function called 'multiplyThese' that takes 2 parameters and returns the product  of the two parameters (as a reminder, a product is the resulting number when two numbers are multiplied together).

// EXAMPLE LOG:
//    console.log("Q4: ", num1, num2, multiplyThese(num1, num2));
// EXAMPLE OUTPUT:
//    Q4 multiplyThese: 10 10 100

// PUT YOUR CODE HERE
let num1 = 10;
let num2 = 10;

const multiplyThese = (a, b) => {
  return a * b;
};

console.log("Q4 multiplyThese: ", num1, num2, multiplyThese(num1, num2));

// ---------- QUESTION 5 ----------
// Create a function called 'getAverage' that takes 2 parameters and returns their average.  NOTE: In some programming languages, the types of numbers you use in equations can affect what type of number (integer/floating point) you get as a result.  We suggest using 2.0 instead of 2 as you're calculating the average.

// EXAMPLE LOG:
//    console.log("Q5 getAverage: ", 3, 6, getAverage(3.0, 6.0));
// EXAMPLE OUTPUT:
//    Q5 getAverage: 3 6 4.5

// PUT YOUR CODE HERE
const getAverage = (a, b) => {
  return (a + b) / 2.0;
};

console.log("Q5 getAverage: ", 3, 6, getAverage(3.0, 6.0));
console.log("Q5 getAverage: ", 10, 15, getAverage(10.0, 15.0));

// ---------- QUESTION 6 ----------
// Create a function named 'isPrime' that returns true or false based on whether the number is prime or not.
// Hint: Prime numbers are numbers that are divisible by any number from 2 up to the square root of the number.  0 and 1 are not prime numbers. Wikipedia has a handy list of the first 1,000 prime numbers in an article called "List of prime numbers."
// Make sure you test several prime and non prime numbers along with 0 and 1.

// EXAMPLE LOG:
//   console.log("Q6 isPrime: ", number, isPrime(number));
// EXAMPLE OUTPUT:
//   Q6 isPrime: 12 false

// PUT YOUR CODE HERE
const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log("Q6 isPrime: ", 0, isPrime(0));
console.log("Q6 isPrime: ", 1, isPrime(1));
console.log("Q6 isPrime: ", 7, isPrime(7));
console.log("Q6 isPrime: ", 12, isPrime(12));

// ---------- QUESTION 7 ----------
// Using the 'isPrime' function created in the previous question, create another function named 'getPrimesUpTo' that takes an integer as an input and returns an array of all primes up to and including the input number.
// Be sure to include several test cases

// EXAMPLE LOG:
//   console.log("Q7 getPrimesUpTo: ", number, getPrimesUpTo(number));
// EXAMPLE OUTPUT:
//   Q7 getPrimesUpTo: 13 [2,3,5,7,11,13]

// PUT YOUR CODE HERE
const getPrimesUpTo = (limit) => {
  let primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
};

console.log("Q7 getPrimesUpTo: ", 13, getPrimesUpTo(13));
console.log("Q7 getPrimesUpTo: ", 20, getPrimesUpTo(20));

// ---------- QUESTION 8 ----------
// Now, we're going to write several functions that calculate a student's grade.
// First, write a function named 'calculateAverage' that takes an input array of scores and calculates a student's average based on those scores.
// Check all of the grades in the array and ignore any values that are not in the range 0 - 100.
// Also, make sure that an empty array or no valid values in the array do not result in an error (hint: watch out for dividing by zero)

// EXAMPLE LOG:
//   console.log("Q8 calculateAverage: ", calculateAverage(scores));
// EXAMPLE OUTPUT:
//   Q8 calculateAverage: 85  // input array let scores = [90, 80, 85];

// PUT YOUR CODE HERE
const calculateAverage = (scores) => {
  if (!scores || scores.length === 0) return 0;

  let validSum = 0;
  let validCount = 0;

  for (let i = 0; i < scores.length; i++) {
    if (typeof scores[i] === "number" && scores[i] >= 0 && scores[i] <= 100) {
      validSum += scores[i];
      validCount++;
    }
  }

  if (validCount === 0) return 0;
  return validSum / validCount;
};

let testScores = [90, 80, 85, 105, -5];
console.log("Q8 calculateAverage: ", calculateAverage(testScores));

// ---------- QUESTION 9 ----------
// Now, create a function - getLetterGrade(average) - that takes a grade average and returns a letter grade based on the following scale.  Make sure you test with several averages.
// A: 90–100
// B: 80–89
// C: 70–79
// D: 60–69
// F: below 60
// NOTE: Averages like 75.5 are fine to compare directly, but if calculateAverage ever returns a long decimal
// (e.g. 97.66666666666667), it's good practice to round it before displaying it to a user.
// Look up the .toFixed() method and consider using it when you log your average in Question 11.

// EXAMPLE LOG:
//   console.log("Q9 getLetterGrade: ", getLetterGrade(95));
// EXAMPLE OUTPUT:
//   Q9 getLetterGrade(95): A

// PUT YOUR CODE HERE
const getLetterGrade = (average) => {
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";
  return "F";
};

console.log("Q9 getLetterGrade: ", getLetterGrade(95));
console.log("Q9 getLetterGrade: ", getLetterGrade(82));
console.log("Q9 getLetterGrade: ", getLetterGrade(55));

// ---------- QUESTION 10 ----------
// Create a 3rd function named - passed(letterGrade) - that returns true if a student's grade is A, B or C, false otherwise.  Handle unexpected input values other than A,B,C,D or F.

// EXAMPLE LOG:
//   console.log("Q10 passed('A'): ", passed('A'));
// EXAMPLE OUTPUT:
//   Q10 passed('A''): true

// PUT YOUR CODE HERE
const passed = (letterGrade) => {
  if (letterGrade === "A" || letterGrade === "B" || letterGrade === "C") {
    return true;
  } else if (letterGrade === "D" || letterGrade === "F") {
    return false;
  }
  return false;
};

console.log("Q10 passed('A'): ", passed("A"));
console.log("Q10 passed('D'): ", passed("D"));
console.log("Q10 passed('Z'): ", passed("Z"));

// ---------- QUESTION 11 ----------
// Create a function named printClassResult (className, student, scores) that utilizes all three functions to output information on a student.
// Print yes if they have passed and no if they did not.

// EXAMPLE LOG:
//   console.log("Q11: ", printClassResult ("History 101", "Yuki Kawamura", [60, 70, 85, 87]));
// EXAMPLE OUTPUT:
//   Q11: History 101 - Student: Yuki Kawamura, Average: 75.5, Grade: C, Passed: yes

// PUT YOUR CODE HERE
const printClassResult = (className, student, scores) => {
  const avg = calculateAverage(scores);
  const letter = getLetterGrade(avg);
  const isPassing = passed(letter) ? "yes" : "no";

  const formattedAvg = Number.isInteger(avg) ? avg : avg.toFixed(1);

  return `${className} - Student: ${student}, Average: ${formattedAvg}, Grade: ${letter}, Passed: ${isPassing}`;
};

console.log(
  "Q11: ",
  printClassResult("History 101", "Yuki Kawamura", [60, 70, 85, 87]),
);

// ---------------------------------------------------------------
// A NOTE BEFORE QUESTIONS 12 - 14: FUNCTIONS AS VALUES
// ---------------------------------------------------------------
// So far, every function you've written has been \*called\* directly, like multiplyThese(2, 3).
// But in JavaScript, a function is also just a value — like a number or a string — which means
// you can store it in a variable, put it in an array, or hand it to ANOTHER function as an argument.
//
// A function that is passed into another function to be run later is called a "callback."
// Callbacks are everywhere in JavaScript — they're how you tell code what to do when a button is
// clicked, when data finishes loading, or when a timer runs out.
//
// Before jumping into callbacks, let's warm up with the idea of functions as values.

// ---------- QUESTION 12 ----------
// Create a simple function called 'sayHello' that logs "Hello!" to the console.
// Then, WITHOUT calling sayHello() yourself, pass it directly into setTimeout so that it runs
// automatically after 1 second (1000 milliseconds).
// Notice that you are passing the function itself (sayHello), not the result of calling it (sayHello()).

// EXAMPLE CALL:
//   setTimeout(sayHello, 1000);

// EXAMPLE OUTPUT (after about 1 second):
//   Q12: Hello!

// PUT YOUR CODE HERE
const sayHello = () => {
  console.log("Q12: Hello!");
};

setTimeout(sayHello, 1000);

// ---------- QUESTION 13 ----------
// Now, let's see how to use a callback.  First, create a function that simulates pushing a button.  Name the function buttonPushed and log the message "The button was pushed!" in the function.

// EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
//    buttonPushed();

// EXAMPLE OUTPUT: (we're using this function in the next question as well)
//   Q13, Q14: The button was pushed!

// PUT YOUR CODE HERE
const buttonPushed = () => {
  console.log("Q13, Q14: The button was pushed!");
};

buttonPushed();

// ---------- QUESTION 14 ----------
// Now, create a function called simulateButtonPush that takes a function as a parameter, and calls
// that function inside of it. Then pass the buttonPushed function (created in Question 12) into it.
// This is the same pattern you just used with setTimeout — simulateButtonPush doesn't know or care
// what buttonPushed does, it just knows it received a function and that its job is to call it.

// EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
//    simulateButtonPush(buttonPushed);

// EXAMPLE OUTPUT:
//   Q13, Q14: The button was pushed!

// PUT YOUR CODE HERE
const simulateButtonPush = (callback) => {
  callback();
};

simulateButtonPush(buttonPushed);

// ---------- GITHUB TASK ----------
// This week, you merged your lesson-3 branch into the main branch of your practice GitHub repository.
// - Confirm that your main branch contains the \`index.html\` file from Lesson 3.
// - Then, from GitHub's web editor, copy the link to the main branch of the repository and paste it into the "second link to assignment field" in your assignment submission form.
// NO CODE FOR THIS SECTION
