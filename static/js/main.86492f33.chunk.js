(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{14:function(e,t,a){e.exports=a(24)},19:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(10),r=a.n(l),o=a(5),i=(a(19),function(e){var t=e.message;return c.a.createElement("h1",{className:"alert"},t)}),s=a(26),u=a(6),m=["9","8","7","6","5","4","3","2","1",".","0"],d=["/","*","+","-"],p=["nine","eight","seven","six","five","four","three","two","one","decimal","zero"],v=["divide","multiply","add","subtract","equals"],b=(a(20),function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(0),b=Object(o.a)(r,2),g=b[0],f=b[1],y=Object(n.useState)(null),h=Object(o.a)(y,2),E=h[0],O=h[1],N=Object(n.useState)(!1),j=Object(o.a)(N,2),k=j[0],w=j[1],C=function(e){e.preventDefault();var t=e.target.value,n=a[a.length-1];return""===a&&"0"===t?a:(0===a&&"0"!==t&&(l(a.toString().replace(a,"")+t),f(t)),0!==a&&"0"!==a&&"."!==n&&"."===t&&(l(a+t),f(t),O(1)),0!==a&&"0"!==a&&1===E&&"."===t&&l(a+t.replace(t,"")),0===a||"0"===a||"="===t||"."===t||"/"!==t&&"*"!==t&&"+"!==t&&"-"!==t||(l(a+t),f(t),O(0)),0!==a&&"0"!==a&&"="!==t&&"."!==t&&(l(a+t),f(t)),0!==a&&"0"!==a&&"/"===n&&"0"===t&&(l(a+t.replace(t,"")),f(t),w(!0),setTimeout((function(){w(!1)}),3e3)),0===a||"0"===a||"/"!==n&&"*"!==n&&"+"!==n&&"-"!==n||"="!==t?(0===a||"0"===a||"="===t||"."===t||"/"!==n&&"*"!==n&&"+"!==n||"/"!==t&&"*"!==t&&"+"!==t||(l(a.replace(n,"")+t),f(t)),void(0===a||"0"===a||"/"===n&&"*"===n&&"+"===n&&"-"===n||"="!==t||(l((1*Object(u.Big)(Object(s.a)(a)).toFixed(4)).toString()),f((1*Object(u.Big)(Object(s.a)(a)).toFixed(4)).toString())))):a.replace(n,""))};return c.a.createElement(n.Fragment,null,c.a.createElement("input",{id:"display",className:"expression",readOnly:!0,value:a,placeholder:"0"}),c.a.createElement("input",{className:"result",readOnly:!0,value:g,placeholder:"0"}),c.a.createElement("div",{className:"buttons-container"},c.a.createElement("div",{className:"clear-buttons"},c.a.createElement("button",{id:"clear",className:"button",type:"clear-all",value:"AC",onClick:function(){l(0),f(0),O(0)}},"AC"),c.a.createElement("button",{id:"clear-entry",className:"button",type:"clear-entry",value:"C",onClick:function(){var e=a[a.length-1];"-"===a[a.length-2]&&(e*=-1),l(a.replace(e,"")),f(0)}},"C")),c.a.createElement("div",{className:"digits"},m&&m.map((function(e,t){return c.a.createElement("button",{id:p[t],className:"button",key:t,type:"digitType",value:e,onClick:C},e)}))),c.a.createElement("div",{className:"operators"},d&&d.map((function(e,t){return c.a.createElement("button",{id:v[t],className:"button",key:t,type:"operatorType",value:e,onClick:C},e)}))),c.a.createElement("button",{id:"equals",className:"button",type:"equalsign",value:"=",onClick:C,memoryvalue:E},"="),k?c.a.createElement(i,{message:"Divide by 0 is not possible"}):null))});a(22);var g=function(){return c.a.createElement("div",{className:"app-container"},c.a.createElement(b,null))};a(23),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.86492f33.chunk.js.map