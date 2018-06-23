// const h2o = require('html-to-object');
// var marked = require('marked');
// var fs = require('fs');
//
// var readMe = fs.readFileSync('README.md', 'utf-8');
// var markdownReadMe = marked(readMe);
//
// fs.writeFileSync('README.html', markdownReadMe);
//
// const results = h2o('README.html');
//
// console.log(results);
//
//
//  exports.results = results;

var MarkdownIt = require('markdown-it');
var md = new MarkdownIt();
var result = md.render('# markdown-it rulezz!');
const rendertmd = result.toString();
// // console.log(result);
//
// var obj = new Object();
//
// // "var1" というメンバに "hello" という値を登録
// obj.var1 = "hello";
//
// // "func" というメンバに関数オブジェクトを登録
// obj.func = function() {
//   console.log(result);
// }
//
// // console.log(obj.var1);
// obj.func();

// var ary = new Array("Tokyo", "Osaka");
// console.log(result.toString());
