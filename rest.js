function push(array, ...items) {
  array.push(...items);
}
var list = [1, 2, 3];
push(list, 4, 5, 6);
console.log(list); //[1, 2, 3, 4, 5, 6]

function add(x, y) {
  return x + y;
}

var numbers = [4, 38];
console.log(add(...numbers)); // 42

var a = [1];
var b = [2, 3, 4];
var c = [6, 7];
var d = [0, ...a, ...b, 5, ...c];
console.log(d); // [0, 1, 2, 3, 4, 5, 6, 7];

