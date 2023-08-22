/*তোমাকে এমন একটা ফাংশন বানাতে হবে যেটা একটি সংখ্যা ইনপুট নিবে। function টির নাম হবেঃ isInteger()। আউটপুট হিসেবে একটি boolean রিটার্ন করবেঃ সংখ্যাটি integer হলে true রিটার্ন করবে। অন্যথায় false রিটার্ন করবে। সংখ্যাটি integer হলে true রিটার্ন করবে।  vai tai to hosse. */

function isInteger(x) {
  if (typeof (x) !== 'number') {
    return 'Pleace enter number value..';
  }
  else {
    if (x % 1 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isInteger(2));

function isJavascriptFile(fileName) {
  if (typeof (fileName) !== 'string') {
    return `Pleace provide me a valid file name (string).`;
  }
  else {
    if (fileName.toLowerCase().endsWith('.js') === true) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(isJavascriptFile(232));