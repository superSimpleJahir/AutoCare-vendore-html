const newuser = {
  userName: 'Jahir',
  price: 999,

  welcomeMessag: function () {
    console.log(`${this.userName}, welcome to website`);
    // console.log(this);
  }
}
// newuser.welcomeMessag();
// newuser.userName = 'Mijan';
// newuser.welcomeMessag();
// console.log(this);

function chai() {
  let userName = 'jahir';
  // console.log(this.userName); //akhane this keyword kaj korbena
}
chai();

const jahir = function () {
  let userName = 'mijan';
  //console.log(this.userName); //akhane this keyword kaj korbena
}
jahir();

// This is array Function syntax. () => {} this is basic syntax array function
const arrayfunction = () => {
  let userName = 'jahir';
  //  console.log(this.userName);//akhane this keyword kaj korbena
}
arrayfunction();

const arrayfunction1 = (num1, num2) => {
  return num1 + num2;
}
// console.log(arrayfunction1(34, 5));

// implicib return array function jodi {} use kore taholr return keyword use korte hobe r jodi () use kore tahole return keyword use korte hobena
const arrayfunction2 = (num1, num2) => num1 + num2;
console.log(arrayfunction2(34, 5));//avabe likhle return keyword user korer dorkar hoina amnetei value return kore

const arrayfunction3 = (num1, num2) => (num1 + num2); //avabe likhle return keyword user korer dorkar hoina amnetei value return kore
console.log(arrayfunction3(34, 5));

// function ar bitore object use korte chaile 
const arrayfunction4 = () => ({ name: 'jahir', price: 666 })
console.log(arrayfunction4(34, 5));


const myarray = [2, 3, 45, 67, 86, 3];
myarray.forEach(() => { })