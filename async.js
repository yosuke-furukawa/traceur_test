function timeout(ms) {
  // Promiseのresolve関数を受け取る
  return new Promise((onFulfilled, onRejected) => {
    // 50%の確率でonFulfilled, onRejectedが呼ばれる
    setTimeout(() => Math.random() > 0.5 ?  onFulfilled() : onRejected(), ms);
  });
}

function log() {
  console.log('done');
}

function error() {
  console.log('error');
}

// Promiseをwrapしてthenの部分とcatchの部分を分割することができる
async function asyncLog() {
  await timeout(500);
  log();
}

async function asyncLogger() {
  await asyncLog().catch(error);
  done();
}

asyncLogger();
