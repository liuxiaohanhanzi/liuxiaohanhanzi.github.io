import{I as m,h as u,k as t}from"./chunk-IEXAPANU.js";import{a as l}from"./chunk-6HK65WVN.js";import{c}from"./chunk-OMJOB6V4.js";c();var y=(e,a,o,r)=>{let n,i="none";switch(a){case 0:n={opacity:[1,0]};break;case 1:n={opacity:[0,1]},i="block";break;case"bounceUpIn":n={begin(s){t(e,"block")},translateY:[{value:-60,duration:200},{value:10,duration:200},{value:-5,duration:200},{value:0,duration:200}],opacity:[0,1]},i="block";break;case"shrinkIn":n={begin(s){t(e,"block")},scale:[{value:1.1,duration:300},{value:1,duration:200}],opacity:1},i="block";break;case"slideRightIn":n={begin(s){t(e,"block")},translateX:["100%","0%"],opacity:[0,1]},i="block";break;case"slideRightOut":n={translateX:["0%","100%"],opacity:[1,0]};break;default:n=a,i=a.display;break}l(Object.assign({targets:e,duration:200,easing:"linear",begin(){r&&r()},complete(){t(e,i),o&&o()}},n)).play()},v=(e,a,o)=>{l({targets:typeof a=="number"&&typeof e!="number"?e.parentNode:document.scrollingElement,duration:500,easing:"easeInOutQuad",scrollTop:a||(typeof e=="number"?e:e?u(e)+document.documentElement.scrollTop-m:0),complete(){o&&o()}}).play()};export{y as a,v as b};
/*! For license information please see chunk-B66F3B3Z.js.LEGAL.txt */
