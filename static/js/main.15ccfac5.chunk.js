(this.webpackJsonpapp1=this.webpackJsonpapp1||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),a=n.n(o),r=n(19),s=n.n(r),i=(n(26),n(12)),d=n(4),u=(n.p,n(27),n(28),n(7));function l(e){var t=Object(o.useState)(""),n=Object(d.a)(t,2),a=n[0],r=n[1],s=Object(o.useState)(""),i=Object(d.a)(s,2),l=i[0],j=i[1],b=Object(o.useState)(""),p=Object(d.a)(b,2),O=p[0],h=p[1];return Object(c.jsxs)("div",{children:[Object(c.jsxs)("select",{name:"",id:"roomType",placeholder:"\u05e1\u05d5\u05d2 \u05d4\u05d7\u05d3\u05e8",onChange:function(e){var t=e.target[e.target.selectedIndex].value;r(t)},children:[Object(c.jsx)("option",{value:"\u05d1\u05d7\u05e8",children:"\u05d1\u05d7\u05e8"}),Object(c.jsx)("option",{value:"\u05d7\u05d3\u05e8 \u05e9\u05d9\u05e0\u05d4",children:"\u05d7\u05d3\u05e8 \u05e9\u05d9\u05e0\u05d4"}),Object(c.jsx)("option",{value:"\u05d0\u05de\u05d1\u05d8\u05d9\u05d4/\u05e9\u05d9\u05e8\u05d5\u05ea\u05d9\u05dd",children:"\u05d0\u05de\u05d1\u05d8\u05d9\u05d4/\u05e9\u05d9\u05e8\u05d5\u05ea\u05d9\u05dd"}),Object(c.jsx)("option",{value:"\u05de\u05d8\u05d1\u05d7",children:"\u05de\u05d8\u05d1\u05d7"})]}),Object(c.jsx)("input",{type:"text",placeholder:"\u05e9\u05dd \u05d4\u05d7\u05d3\u05e8",maxlength:"5",onChange:function(e){j(e.target.value)}}),Object(c.jsx)("input",{type:"text",placeholder:"\u05e6\u05d1\u05e2 \u05d4\u05d7\u05d3\u05e8",onChange:function(e){h(e.target.value)}}),Object(c.jsx)(u.b,{to:"/",style:{textDecoration:"none",color:"white"},children:Object(c.jsx)("button",{onClick:function(){l.length>=1&&""!=a&&(void 0!=a||"\u05d1\u05d7\u05e8"!=a)?e.add(a,l,O):(e.updateMainRooms(),alert("error"))},children:"\u05e6\u05d5\u05e8"})})]})}n(34);function j(e){return Object(c.jsx)("div",{className:"room",style:{backgroundColor:e.color},children:Object(c.jsx)(u.b,{to:"/room".concat(e.name),style:{textDecoration:"none",color:"white"},onClick:function(){return e.class1()},children:e.name})})}var b=n(2);n(35);function p(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"\u05d0\u05e4\u05dc\u05d9\u05e7\u05e6\u05d9\u05d9\u05ea \u05d1\u05d9\u05ea \u05d7\u05db\u05dd"})})}n(36),n(37);function O(e){var t=Object(o.useState)(""),n=Object(d.a)(t,2),a=n[0],r=n[1];return Object(c.jsxs)("div",{className:e.class1,children:[Object(c.jsxs)("select",{name:"",id:"roomType",placeholder:"\u05e1\u05d5\u05d2 \u05d4\u05d7\u05d3\u05e8",onChange:function(e){var t=e.target[e.target.selectedIndex].value;r(t)},children:[Object(c.jsx)("option",{value:"\u05d1\u05d7\u05e8",children:"\u05d1\u05d7\u05e8"}),Object(c.jsx)("option",{value:"\u05de\u05d6\u05d2\u05df",children:"\u05de\u05d6\u05d2\u05df"}),Object(c.jsx)("option",{value:"\u05d3\u05d5\u05d3",children:"\u05d3\u05d5\u05d3"}),Object(c.jsx)("option",{value:"\u05de\u05e2\u05e8\u05db\u05ea \u05e1\u05d8\u05e8\u05d9\u05d0\u05d5",children:"\u05de\u05e2\u05e8\u05db\u05ea \u05e1\u05d8\u05e8\u05d9\u05d0\u05d5"}),Object(c.jsx)("option",{value:"\u05de\u05e0\u05d5\u05e8\u05d4",children:"\u05de\u05e0\u05d5\u05e8\u05d4"})]}),Object(c.jsx)("button",{onClick:function(){var t=!0;"\u05d3\u05d5\u05d3"==a&&"\u05d0\u05de\u05d1\u05d8\u05d9\u05d4/\u05e9\u05d9\u05e8\u05d5\u05ea\u05d9\u05dd"!=e.roomType&&(t=!1),e.productsArr.length>=5&&(t=!1),"\u05de\u05e2\u05e8\u05db\u05ea \u05e1\u05d8\u05e8\u05d9\u05d0\u05d5"==a&&e.productsArr.some((function(e){return"\u05de\u05e2\u05e8\u05db\u05ea \u05e1\u05d8\u05e8\u05d9\u05d0\u05d5"===e.nameP}))&&(t=!1),t?(e.addP(a,e.roomName),e.updateShowAddP(!1),e.updateShowProducts(!0)):(alert("error"),e.updateShowAddP(!1),e.updateShowProducts(!0))},children:"\u05d4\u05d5\u05e1\u05e3"})]})}function h(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"space"}),Object(c.jsxs)("h2",{children:[e.name," :\u05e9\u05dd \u05d4\u05d7\u05d3\u05e8"]}),Object(c.jsxs)("h3",{children:["\u05e1\u05d5\u05d2 \u05d4\u05d7\u05d3\u05e8: ",e.type1]}),Object(c.jsx)("button",{onClick:function(){e.updateShowAddP(!0),e.updateShowProducts(!1)},children:"\u05d4\u05d5\u05e1\u05e3 \u05de\u05d5\u05e6\u05e8"})]})}n(38);function x(e){var t=Object(o.useState)("red"),n=Object(d.a)(t,2);n[0],n[1];return Object(c.jsx)("div",{className:e.class2,children:Object(c.jsxs)("div",{className:"div1",children:["undefined"!==typeof e.products?e.products.map((function(t,n){return Object(c.jsxs)("div",{className:"space",children:[Object(c.jsx)("div",{className:"circle",style:{backgroundColor:t.onP}}),Object(c.jsx)("label",{onClick:function(){var c="red"==t.onP?"green":"red";e.updateOn(c,e.roomName,n)},children:t.nameP})]})})):"",Object(c.jsx)(u.b,{to:"/",style:{textDecoration:"none",color:"white"},children:Object(c.jsx)("button",{id:"back",onClick:function(){e.updateMainRooms()},children:"\u05d7\u05d6\u05e8\u05d4"})})]})})}var m=function(){var e=Object(o.useState)(!0),t=Object(d.a)(e,2),n=(t[0],t[1],Object(o.useState)("display1")),a=Object(d.a)(n,2),r=a[0],s=a[1],m=Object(o.useState)([]),f=Object(d.a)(m,2),v=f[0],y=f[1],g=Object(o.useState)("not-display"),S=Object(d.a)(g,2),P=S[0],w=S[1],C=Object(o.useState)("display1"),N=Object(d.a)(C,2),k=N[0],A=N[1],T=function(e,t,n){var c={type1:e,name:t,color:n,products:[]},o=[].concat(Object(i.a)(v),[c]);y(Object(i.a)(o)),s("display1")},D=function(e,t){var n={nameP:e,onP:"red"};v.forEach((function(e,c){if(e.name==t)return v[c].products.push(n),void y(Object(i.a)(v))}))},M=function(){s("not-display")},F=function(){s("display1")},I=function(e,t,n){v.forEach((function(c,o){if(c.name==t)return v[o].products[n].onP=e,void y(Object(i.a)(v))}))},R=function(e){w(e?"display1":"not-display")},E=function(e){A(e?"display1":"not-display")};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(p,{}),Object(c.jsx)("div",{className:"triangle-up"}),Object(c.jsx)("div",{className:"rectangle",children:Object(c.jsxs)(u.a,{children:[Object(c.jsxs)("div",{className:r,children:[Object(c.jsx)(u.b,{to:"/addroom",style:{textDecoration:"none",color:"white"},children:Object(c.jsx)("button",{onClick:function(){s("not-display")},children:"+ \u05d4\u05d5\u05e1\u05e3 \u05d7\u05d3\u05e8"})}),v.map((function(e){return Object(c.jsx)(j,{type1:e.type1,name:e.name,color:e.color,className:r,class1:M})}))]}),Object(c.jsxs)(b.c,{children:[Object(c.jsx)(b.a,{exact:!0,path:"/addroom",render:function(e){return Object(c.jsx)(l,{add:T,updateMainRooms:F})}}),v.map((function(e,t){return Object(c.jsx)(b.a,{exact:!0,path:"/room".concat(e.name),component:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(h,{type1:e.type1,name:e.name,color:e.color,updateShowAddP:R,updateShowProducts:E}),Object(c.jsx)(O,{roomName:e.name,roomType:e.type1,addP:D,class1:P,updateShowAddP:R,updateShowProducts:E,productsArr:e.products}),Object(c.jsx)(x,{products:v[t].products,updateOn:I,roomName:e.name,class2:k,updateMainRooms:F})]})}})}))]})]})})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),a(e),r(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),f()}},[[39,1,2]]]);
//# sourceMappingURL=main.15ccfac5.chunk.js.map