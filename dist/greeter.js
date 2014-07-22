System.register("../greeter", [], function() {
  "use strict";
  var __moduleName = "../greeter";
  var Greeter = function Greeter(message) {
    this.message = message;
  };
  var $Greeter = Greeter;
  ($traceurRuntime.createClass)(Greeter, {greet: function() {
      var element = document.querySelector('#message');
      element.innerHTML = this.message;
    }}, {g: function(message) {
      return new $Greeter(message);
    }});
  ;
  var greeter = Greeter.g;
  greeter("hoge").greet();
  return {};
});
System.get("../greeter" + '');
