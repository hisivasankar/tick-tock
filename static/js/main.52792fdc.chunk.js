(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),i=n.n(o),l=(n(13),n(3)),c=n(4),u=n(6),m=n(5),s=n(7);function f(e){return"string"===typeof e?new Date(Date.parse(e)):"number"===typeof e?new Date(e):e?void 0:new Date(Date.now())}function d(e,t){return function(e,t){var n=(e/1e3|0)/60|0,a=n/60|0,r=a/24|0;return r>365?(r/365|0)+" Years and "+r%365+" Days":r+" Days and "+a%24+" Hours"}(function(e,t){var n=f(e);return f(t)-n}(e,t))}n(15);var v=function(e){var t="",n=Date.now();t=e.reverse?d(n,e.to):d(e.from,e.to);var a=new Date(e.from),o=new Date(e.to);return r.a.createElement("div",{className:"Widget"},r.a.createElement("h2",{className:"title"},e.title),r.a.createElement("h3",null,t),e.reverse?r.a.createElement("div",null,r.a.createElement("p",null,"Until ",e.to?o.toLocaleString():"now!")):r.a.createElement("div",null,r.a.createElement("p",null,"From ",a.toDateString()),r.a.createElement("p",null,"Until ",e.to?o.toLocaleString():"now!")))},w=(n(17),function(e){var t=e.data.map(function(e){return r.a.createElement(v,{key:e.title,title:e.title,from:e.from,to:e.to,reverse:e.reverse})});return r.a.createElement("div",{className:"Widgets"},t)}),p=(n(19),[{title:"Age",from:"1993/07/25"},{title:"Intermittent Fasting",from:"2018/12/24",to:"2019/01/11 9:45"},{title:"Braces",from:"2018/12/23"},{title:"Judgement Day",to:"2020/06/10 9:00",reverse:!0},{title:"Covishield 1st Dose Vaccination",from:"2021/05/20 2:40 PM"},{title:"Vegetarian Diet Experiment",from:"2020/4/01",to:"2021/5/01"}]),E=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Tick Tock - Time Tracker")),r.a.createElement("main",null,r.a.createElement(w,{data:p})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.52792fdc.chunk.js.map