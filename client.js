function* fibonacci(){
  let fn1 = 1;
  let fn2 = 1;
  while (1){
    let current = fn2;
    fn2 = fn1;
    fn1 = fn1 + current;
    yield current;
  }
}

for (let seq of fibonacci()) {
  if (seq > 1000) {
    break;
  }
  console.log(seq);
}

console.log("fin", seq);
