class Greeter {
  constructor(message) {
    this.message = message;
  }

  static g(message) {
    return new Greeter(message);
  }


  greet() {
    let element = document.querySelector('#message');
    element.innerHTML = this.message;
  }
};

let greeter = Greeter.g;

greeter("hoge").greet();
