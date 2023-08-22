/*// global scope
let a = 200;
const b = 400;
var c = 100;

console.log(a);
console.log(b);
console.log(c);

// local scope
{
  let a = 200;
  const b = 400;
  var c = 500; // This is not use letest javascript file
}
console.log(a); // 200
console.log(b); // 400
console.log(c); // akhane local scope ar value 500 print hoice karon var is a global scope.



function one() {
  const username1 = 'Jahir';

  function two() {
    const website = 'youtube';
    console.log(username1);// username1 variable akhane access kora jabe
  }

  // console.log(website); website variable akhan theke access kora jabena.
  two();
}

one();

if (true) {
  const username = 'Jahir';
  if (username === 'Jahir') {
    const website = ' youtube';
    console.log(username + website);
  }
  // console.log(website); // website variable akhan theke access kora jabena.
}
// console.log(username); // username variable akhan theke access kora jabena.
*/

// ====================interesting===========
console.log(addone(5)); // akhane ai function print kora jabe 

function addone(num) {
  return num + 1;
}



// addTwo(5);// Cannot access 'addTwo' before initialization
// function expression. variable ar onek power. variable function and json store kora jai
const addTwo = function (num) {
  return num + 2;
}

