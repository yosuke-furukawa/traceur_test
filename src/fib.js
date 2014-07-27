// fibonacci関数をgenerator関数を使って書く
// generator関数はfunction*で定義する
function* fibonacci(){
  // ES6の場合変数定義の基本はletにした方が良くなるはず...
  let fn1 = 1;
  let fn2 = 1;
  for (;;){
    let current = fn2;
    fn2 = fn1;
    fn1 = fn1 + current;
    // yieldで足しあわせた数を返す
    yield current;
  }
}

// for-ofによる繰り返し、generator関数はiterableなオブジェクトを返すので、
// iterableなオブジェクトを繰り返すには for-of文を使う
for (let seq of fibonacci()) {
  // 1000までいったらbreak, つまり1000までの数しかfibonacciを行わない
  if (seq > 1000) {
    break;
  }
  // #fibタグ以下に書く
  let element = document.querySelector('#fib');
  let p = document.createElement("p");
  p.innerHTML = seq;
  element.appendChild(p);
}
