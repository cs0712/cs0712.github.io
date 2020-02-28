// build time:Sat Feb 29 2020 02:40:07 GMT+0800 (China Standard Time)
var tape=require("tape");var noop=require("../../../lib/util/noop");tape("test noop function",function(n){n.equal(typeof noop,"function","noop is a function");n.equal(noop(),undefined,"noop() returns nothing");n.end()});
//rebuild by neat 