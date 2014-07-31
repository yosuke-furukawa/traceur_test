"use strict";
{
  var a = 10;
  let b = 20;
  const tmp = a;
  a = b;
  b = tmp;
}

// a = 20
console.log(a);
// b is not defined
console.log(b);
// tmp is not defined
console.log(tmp);
