System.register("../fib", [], function() {
  "use strict";
  var $__0;
  var __moduleName = "../fib";
  var fibonacci = ($__0 = {}, Object.defineProperty($__0, Symbol.iterator, {
    value: function() {
      var pre = 0,
          cur = 1;
      return {next: function() {
          var $__3;
          ($__3 = [cur, pre + cur], pre = $__3[0], cur = $__3[1], $__3);
          return {
            done: false,
            value: cur
          };
        }};
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), $__0);
  for (var $__1 = fibonacci[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__2; !($__2 = $__1.next()).done; ) {
    var n = $__2.value;
    {
      if (n > 1000)
        break;
      console.log(n);
    }
  }
  return {};
});
System.get("../fib" + '');
