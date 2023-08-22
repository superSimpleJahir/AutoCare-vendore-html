// function ar bitore jodi speret oprator use kora hoi tahole take rest oprator bole. rest and speret oprator difine korar jonne 3ti dot dite hoi jemon (...akhane parameter dite hobe) 

function calculateCartPrice(...price) {
  return price;
}
console.log(calculateCartPrice(100, 200, 500, 1000, 750,));//ai function return korbe akti array:return this value [ 100, 200, 500, 1000, 750 ]


function calculateCartPrice1(valu1, value2, ...price) {
  return price;
}
console.log(calculateCartPrice1(100, 200, 500, 1000, 750,));// akhon qution hocche price ar bitore ki value asbe [ 500, 1000, 750 ] dekha jache je valu1 valu2 ar jonne first 2 argument nia nice baki gula price ar jonne use kora hoice.


// function ar bitore object pass korar niom 
let user = {
  userName: 'jahir123',
  userid: 321
}
function handleobject(anyObject) {
  console.log(`Username is ${anyObject.userName} and id is${anyObject.userid}`);
}
handleobject(user);

// onno vabeo use kora jai 
function handleobject1(anyObject) {
  console.log(`Username is ${anyObject.userName} and id is${anyObject.userid}`);
}
handleobject1({
  userName: 'jahir123',
  userid: 321
}); // argument ar bitoreo object pass kora jai.

// aiti array ke function ar bitore pass kore value access korte chaile=>
const myNewArray = [100, 200, 400, 230];
function accessArray(getArray) {
  return getArray[1];
}
console.log(accessArray(myNewArray));

//another way to access array in function
function accessArray1(getArray) {
  return getArray[1];
}
console.log(accessArray1([100, 200, 400, 230]));