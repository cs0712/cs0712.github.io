// build time:Sat Feb 29 2020 02:40:07 GMT+0800 (China Standard Time)
var attrState="data-pjax-state";module.exports=function(t){switch(t.tagName.toLowerCase()){case"a":if(!t.hasAttribute(attrState)){this.attachLink(t)}break;case"form":if(!t.hasAttribute(attrState)){this.attachForm(t)}break;default:throw"Pjax can only be applied on <a> or <form> submit"}};
//rebuild by neat 