(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),i=n.n(o),l=(n(14),n(3)),c=n(4),u=n(6),m=n(5),s=n(7);function f(e){return"string"===typeof e?new Date(Date.parse(e)):"number"===typeof e?new Date(e):e?void 0:new Date(Date.now())}function d(e,t){return function(e,t){var n=(e/1e3|0)/60|0,a=n/60|0,r=a/24|0;return r>365?(r/365|0)+" Years and "+r%365+" Days":r+" Days and "+a%24+" Hours"}(function(e,t){var n=f(e);return f(t)-n}(e,t))}n(16);var v=function(e){var t="",n=Date.now();t=e.reverse?d(n,e.to):d(e.from,e.to);var a=new Date(e.from),o=new Date(e.to);return r.a.createElement("div",{className:"Widget"},r.a.createElement("h2",{className:"title"},e.title),r.a.createElement("h3",null,t),e.reverse?r.a.createElement("div",null,r.a.createElement("p",null,"From ",a.toDateString()),r.a.createElement("p",null,"Until ",e.to?o.toLocaleString():"now!")):r.a.createElement("div",null,r.a.createElement("p",null,"Until ",e.to?o.toLocaleString():"now!")))},w=(n(18),function(e){var t=e.data.map(function(e){return r.a.createElement(v,{key:e.title,title:e.title,from:e.from,to:e.to,reverse:e.reverse})});return r.a.createElement("div",{className:"Widgets"},t)}),p=(n(20),[{title:"Age",from:"1993/07/25"},{title:"Intermittent Fasting",from:"2018/12/24",to:"2019/01/11 9:45"},{title:"Braces",from:"2018/12/23"},{title:"IELTS",to:"2020/05/17",reverse:!0}]),E=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Tick Tock - Time Tracker")),r.a.createElement("main",null,r.a.createElement(w,{data:p})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(22)}},[[8,2,1]]]);
//# sourceMappingURL=main.b0f24d57.chunk.js.map