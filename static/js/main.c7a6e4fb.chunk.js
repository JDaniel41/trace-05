(this["webpackJsonptrace-05"]=this["webpackJsonptrace-05"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(4),a=c.n(s),r=(c(9),c(3)),l=c(0);var o=function(e){var t=e.currentText,c=e.indicatedSaved;return Object(l.jsx)("div",{className:"w-screen rounded-sm bg-yellow-600",children:Object(l.jsx)("button",{className:"w-full text-center p-5 text-xl font-bold",onClick:function(){localStorage.setItem("savedNotes",t),c()},children:"Save Notes"})})};var d=function(e){var t=e.statusText;return Object(l.jsx)("div",{className:"w-screen rounded-sm bg-yellow-600 ",children:Object(l.jsxs)("div",{className:"flex justify-between p-5 items-center",children:[Object(l.jsx)("h1",{className:"text-xl font-bold",children:"Jonathan's Notes App"}),Object(l.jsx)("h1",{className:"text-xl",children:t})]})})};var i=function(e){var t=e.onChange,c=e.text;return Object(l.jsx)("textarea",{onChange:function(e){t(e)},className:"w-full h-full p-5 rounded-sm bg-yellow-300 resize-none",value:c})};var u=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),u=Object(r.a)(a,2),j=u[0],x=u[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("savedNotes");s(e||"Enter Notes Here!"),x("Loaded!"),console.log(localStorage.getItem("savedNotes"))}),[]),Object(l.jsxs)("div",{className:"flex flex-col w-screen h-screen border-1 border-black",children:[Object(l.jsx)(d,{statusText:j}),Object(l.jsx)("div",{className:"h-full block",children:Object(l.jsx)(i,{onChange:function(e){s(e.target.value),x("Text is Unsaved")},text:c})}),Object(l.jsx)(o,{currentText:c,indicatedSaved:function(){x("Saved Text!")}})]})};a.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.c7a6e4fb.chunk.js.map