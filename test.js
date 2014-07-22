"use strict";
let koa = require('koa');
let app = koa();
let serve = require('koa-static');

// logger

app.use(function *(next){
  let start = new Date;
  yield next;
  let ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// response

app.use(serve('.'));

app.listen(3000);

