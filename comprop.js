var x = 0;
var obj = {
  [x] : 'hello',
  [++x] : 'world',
  [x++*x++] : 'world1'
};
console.log(obj); // {0: 'hello', 1:'world'}
