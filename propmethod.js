var object = {
  value: 42,
  //直接toString()って書ける
  toString() {
    return this.value;
  }
};
console.log(object);
