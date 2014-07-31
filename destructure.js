var [a, [b], [c], d] = ['hello', [', ', 'junk'], ['world']];

console.log(a + b + c); //hello, world (aに"hello", bに",", cに"world"が入ってる )

var pt = {x: 123, y: 444};
var {x, y} = pt;
console.log(x, y); // 123, 444
