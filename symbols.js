var object = {};
{
  // このブロックでしか有効じゃない値でSymbolを作る
  var visible = Symbol();
  let invisivle = Symbol();
  // object自身は外から見えるが、symbolの値は同じsymbolでしか
  // 取れないためkeyにsymbolを使うと外から見えなくなる
  object[visible] = 42;
  // 42
  console.log(object[visible]);
}

// 42
console.log(object[visible]);

// {} invisbleな値が見えてないこと
console.log(object);
