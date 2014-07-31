var $__0 = ['hello', [', ', 'junk'], ['world']],
    a = $__0[0],
    b = $traceurRuntime.assertObject($__0[1])[0],
    c = $traceurRuntime.assertObject($__0[2])[0],
    d = $__0[3];
console.log(a + b + c);
var pt = {
  x: 123,
  y: 444
};
var $__0 = $traceurRuntime.assertObject(pt),
    x = $__0.x,
    y = $__0.y;
console.log(x, y);
