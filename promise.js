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

// onFulfilledが出たらdone、onRejectedだったらerrorと表示する
timeout(100).then(log).catch(error)

