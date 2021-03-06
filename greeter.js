// Greeterというモジュールを作り、読み込むとHello Worldと出るようにする
// classが定義できるようになるのはES6から
class Greeter {
  constructor(message) {
    this.message = message;
  }
  // greetメソッド
  greet(message : string) {
    // letという新しい変数定義
    // letを使うとblocking scopeといってこのblock内でしか有効じゃない
    let element = document.querySelector('#message');
    element.innerHTML = message || this.message;
  }
}
let greeter = new Greeter('Hello, world!');
greeter.greet(123);
