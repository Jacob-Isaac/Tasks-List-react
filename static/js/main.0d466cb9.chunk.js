(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,function(t,e,n){},,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),s=n(9),a=n.n(s),i=(n(8),n(7)),r=n(4),u=n(3),d=(n(14),n(0)),l=function(t){var e=Object(c.useState)(""),n=Object(u.a)(e,2),o=n[0],s=n[1];return Object(d.jsxs)("form",{className:"section__form",onSubmit:function(e){e.preventDefault(),t.addNewTask(o.trim()),s("")},children:[Object(d.jsx)("input",{value:o,className:"section__form--input",placeholder:" Co jest do zrobienia?",onChange:function(t){return s(t.target.value)}}),Object(d.jsx)("button",{className:"section__form--button",children:"Dodaj zadanie"})]})},j=(n(16),function(t){return Object(d.jsx)("ul",{className:"section__list",children:t.tasks.map((function(e){return Object(d.jsxs)("li",{className:"section__list--item".concat(e.done&&t.hideOrShow?" section__list--hidden":""),children:[Object(d.jsx)("button",{className:"button button__remove",onClick:function(){return t.removeTasks(e.id)},children:"\ud83d\uddd1"}),Object(d.jsx)("button",{className:"button button__done",onClick:function(){return t.toggleTaskDone(e.id)},children:e.done?"\u2714":""}),Object(d.jsx)("span",{className:"content\n      ".concat(e.done?"content--decoration":""),children:e.content})]},e.id)}))})}),b=(n(17),function(t){return 0===t.tasks.length?null:Object(d.jsxs)("div",{className:"section__buttons",children:[Object(d.jsxs)("button",{onClick:t.toggleHideOrShow,className:"section__button ".concat(0===t.tasks.length?" section__button--hidden":""," ").concat(t.tasks.every((function(t){return!t.done}))?"disabled":""),children:[t.hideOrShow?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(d.jsx)("button",{className:"section__button ".concat(0===t.tasks.length?" section__button--hidden":""),disabled:t.tasks.every((function(t){return t.done})),onClick:t.setAllDone,children:"Uko\u0144cz wszystkie"})]})}),h=(n(18),function(t){var e=t.className,n=t.title,c=t.extraHeaderContent,o=t.taskContent;return Object(d.jsxs)("section",{className:"section",children:[Object(d.jsxs)("div",{className:e,children:[Object(d.jsx)("h2",{className:"section__header",children:n}),c]}),o]})});n(19);var f=function(){var t=Object(c.useState)(!1),e=Object(u.a)(t,2),n=e[0],o=e[1],s=Object(c.useState)([{id:1,content:"przej\u015b\u0107 na Reacta",done:!0},{id:2,content:"zje\u015b\u0107 kolacje",done:!1}]),a=Object(u.a)(s,2),f=a[0],O=a[1];return Object(d.jsxs)("main",{className:"container",children:[Object(d.jsx)("h1",{className:"container__header",children:"Lista zada\u0144"}),Object(d.jsx)(h,{className:"section__border",title:"Dodaj nowe zadanie",taskContent:Object(d.jsx)(l,{addNewTask:function(t){O((function(e){return""===t?Object(i.a)(e):[].concat(Object(i.a)(e),[{content:t,done:!1,id:0===e.length?1:e[e.length-1].id+1}])}))}})}),Object(d.jsx)(h,{className:"section__border section__flex",title:"Lista zada\u0144",extraHeaderContent:Object(d.jsx)(b,{tasks:f,hideOrShow:n,toggleHideOrShow:function(){o((function(t){return!t}))},setAllDone:function(){O((function(t){return t.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{done:!0})}))}))}}),taskContent:Object(d.jsx)(j,{tasks:f,hideOrShow:n,removeTasks:function(t){O((function(e){return e.filter((function(e){return e.id!==t}))}))},toggleTaskDone:function(t){O((function(e){return e.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{done:!e.done}):e}))}))}})})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),s(t),a(t)}))};a.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),O()}],[[20,1,2]]]);
//# sourceMappingURL=main.0d466cb9.chunk.js.map