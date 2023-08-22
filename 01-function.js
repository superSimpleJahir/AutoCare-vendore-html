// basic function 

function sayMyName() {
  console.log('J');
  console.log('A');
  console.log('H');
  console.log('I');
  console.log('R');
}
sayMyName  // This is call function refarance 
sayMyName()  // This is call function execute 


// parameter and argument function
function twoNumberAdd(number1, number2) {
  // twoNumberAdd(number1,number2); number1,number2 this is call parameter
  console.log(number1 + number2);
}
let result = twoNumberAdd(3, 4); // akhane result ar bitore ki store hobe.
console.log(result); // console return korebe undefined;karon ai function kicui return korenai ai jonne result ar bitore kicui store hoinai.

function twoNumberMultiply(number1, number2) {
  return number1 * number2;
}
let multiply = twoNumberMultiply(3, 4); // akhane function theke return korce value jeta multiply variable a store hoice.

console.log(multiply);

function return1(a, b) {
  console.log(a - b);
  return a - b;
  console.log('jahir');// akane function theke return korar pore kono kicu execute kore na ja korar ta return ar upare kora lagbe ati rouls. Unreachable code detected.
}
return1(10, 3);

// akti function make korte hobe jekhane akti parameter thakbe je kono value pass korte parbe jodi kono value pass na kore tahole print korbe "Please Enter your user name". je kono value dile return korbe "argument + just logged in." 

function logginUserMessage(userName) {
  if (userName === undefined) {
    console.log('Please enter your user name.');
    return;
  }
  return `${userName} just logged in.`
}
console.log(logginUserMessage('jahir'));

function logginUserMessage1(userName) {
  if (!userName) {
    console.log('Please enter your user name.');
    return;
  }
  return `${userName} just logged in.`
}
console.log(logginUserMessage1());