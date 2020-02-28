// build time:Sat Feb 29 2020 02:40:07 GMT+0800 (China Standard Time)
var forEachEls=require("../foreach-els");module.exports=function(e,o,r,n){o=typeof o==="string"?o.split(" "):o;o.forEach(function(o){forEachEls(e,function(e){e.addEventListener(o,r,n)})})};
//rebuild by neat 