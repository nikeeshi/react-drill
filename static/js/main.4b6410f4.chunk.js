(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,n,t){e.exports=t(39)},33:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(15),c=t.n(o),i=(t(33),t(11)),l=t(7),u=t(14),d=function(e){var n=e.secretValue,t=Object(a.useState)(!1),o=Object(u.a)(t,2),c=o[0],i=o[1];return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return i(!0)}},"Reveal")," ",c?n:"*")};function m(){return Math.floor(1e4*Math.random())}var s=t(12),p=t(5),b=t(26),h=function(e){var n=e.children,t=Object(a.useState)(null),o=Object(u.a)(t,2),c=o[0],i=o[1];return Object(a.useEffect)(function(){setInterval(function(){return i(Object(b.a)(navigator.getGamepads()).find(function(e){return null!==e})||null)})},[]),r.a.createElement(r.a.Fragment,null,n(c))};function v(){var e=Object(s.a)(["\n        box-sizing: border-box;\n        height: 300px;\n        width: 300px;\n        position: relative;\n        border: 3px solid #73ad21;\n      "]);return v=function(){return e},e}function f(){var e=Object(s.a)(["\n        box-sizing: border-box;\n        height: 15px;\n        width: 15px;\n        position: absolute;\n        border: 3px solid black;\n        top: ","px;\n        left: ","px;\n      "]);return f=function(){return e},e}var E=function(e){var n=e.x,t=e.y;return Object(p.b)("div",{css:Object(p.a)(f(),t,n)})},g=[{component:function(){return r.a.createElement("div",null,"This is the root page!!!")},path:"/",name:"React drill"},{component:function(){return r.a.createElement("div",null,"Hoge")},path:"/hoge/",name:"Hoge"},{component:function(){return Object(p.b)("div",{css:Object(p.a)(v())},Object(p.b)(h,null,function(e){return Object(p.b)("div",null,e&&Object(p.b)(E,{x:(1+e.axes[0])/2*279,y:(1+e.axes[1])/2*279}),e&&Object(p.b)(E,{x:(1+e.axes[2])/2*279,y:(1+e.axes[3])/2*279}))}))},path:"/gamepad/",name:"Gamepad ditector"},{component:function(){var e=Object(a.useState)(m()),n=Object(u.a)(e,2),t=n[0],o=n[1];return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return o(m())}},"Generate random number")," ",r.a.createElement(d,{secretValue:t,key:t}))},path:"/randompicker/",name:"Random Picker"}],x=l.a.div.withConfig({displayName:"SideNav__SideNavContainer",componentId:"sc-8r6vfs-0"})(["background:darkblue;height:100vh;"]),j=l.a.a.withConfig({displayName:"SideNav__ExternalLink",componentId:"sc-8r6vfs-1"})(["padding:0 10px;color:white;:hover{text-decoration:underline dashed;}"]),w=Object(l.a)(i.b).withConfig({displayName:"SideNav__ReactRouterLink",componentId:"sc-8r6vfs-2"})(["padding:0 10px;color:white;text-decoration:none;:hover{text-decoration:underline;}"]),O=function(){return r.a.createElement(x,null,g.map(function(e){return"invisible"!==e.navigation&&r.a.createElement("div",{key:e.name},r.a.createElement(w,{to:e.path},e.name))}),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(j,{href:"https://github.com/nikeeshi/react-drill"},"Github")),r.a.createElement("div",null,r.a.createElement(j,{href:"http://nikeeshipro.hatenablog.com/"},"My blog")))};function k(){var e=Object(s.a)(["\n  display: flex;\n  width: 100%;\n"]);return k=function(){return e},e}var y=l.a.div(k()),N=l.a.div(function(e){return"flex:".concat(e.base)}),C=function(e){var n=e.children,t=e.className;return r.a.createElement(y,{className:t},r.a.Children.map(n,function(e){return r.a.isValidElement(e)&&e.type===S?e:r.a.createElement(S,null,e)}))},S=function(e){var n=e.children,t=e.base,a=void 0===t?1:t;return r.a.createElement(N,{base:a},n)},_=t(6),I=function(e){var n=e.pages;return r.a.createElement(r.a.Fragment,null,n.map(function(e){var n="/"===e.path;return r.a.createElement(_.a,{key:e.name,path:e.path,exact:n,component:e.component})}))},R=function(){return r.a.createElement(i.a,null,r.a.createElement(C,null,r.a.createElement(O,null),r.a.createElement(S,{base:3},r.a.createElement(I,{pages:g}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.4b6410f4.chunk.js.map