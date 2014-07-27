var Greeter = function Greeter(message) {
  "use strict";
  this.message = message;
};
($traceurRuntime.createClass)(Greeter, {greet: function(message) {
    "use strict";
    var element = document.querySelector('#message');
    element.innerHTML = message || this.message;
  }}, {});
Greeter.prototype.greet.parameters = [[$traceurRuntime.type.string]];
var greeter = new Greeter('Hello, world!');
greeter.greet(123);
