System.register("../client", [], function() {
  "use strict";
  var $__2 = $traceurRuntime.initGeneratorFunction(fibonacci);
  var __moduleName = "../client";
  function fibonacci() {
    var fn1,
        fn2,
        current;
    return $traceurRuntime.createGeneratorInstance(function($ctx) {
      while (true)
        switch ($ctx.state) {
          case 0:
            fn1 = 1;
            fn2 = 1;
            $ctx.state = 18;
            break;
          case 18:
            $ctx.state = (1) ? 9 : -2;
            break;
          case 9:
            $ctx.pushTry(7, null);
            $ctx.state = 10;
            break;
          case 10:
            throw undefined;
            $ctx.state = 12;
            break;
          case 12:
            $ctx.popTry();
            $ctx.state = 18;
            break;
          case 7:
            $ctx.popTry();
            current = $ctx.storedException;
            $ctx.state = 5;
            break;
          case 5:
            current = fn2;
            fn2 = fn1;
            fn1 = fn1 + current;
            $ctx.state = 6;
            break;
          case 6:
            $ctx.state = 2;
            return current;
          case 2:
            $ctx.maybeThrow();
            $ctx.state = 18;
            break;
          default:
            return $ctx.end();
        }
    }, $__2, this);
  }
  for (var $__0 = fibonacci()[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    try {
      throw undefined;
    } catch (seq) {
      {
        seq = $__1.value;
        {
          if (seq > 1000) {
            break;
          }
          console.log(seq);
        }
      }
    }
  }
  console.log("fin", seq);
  return {};
});
System.get("../client" + '');
