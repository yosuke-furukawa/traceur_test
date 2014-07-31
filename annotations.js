// this.nameだけつける
var SimpleAnnotation = function(){
  this.name = 'Simple';
};

var NestedAnnotation = {
  // this.name と 引数を持つ
  Args: function(arg){
    this.name = 'Simple';
    this.arg = arg;
  }
};

// クラスにAnnotationを付ける
@SimpleAnnotation
class Foo {
  constructor() {
    // 値はannotationsプロパティから得る
    // [{ name: 'Simple' }]
    console.log(Foo.annotations);
  }
  // 引数 barを入れる
  @NestedAnnotation.Args("bar") 
  bar() {
  }
}

var foo = new Foo();
foo.bar();

// bar をprototypeから得る
// [ { name: 'Simple', arg: 'bar' } ]
console.log(Foo.prototype.bar.annotations);
