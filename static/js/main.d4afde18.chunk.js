(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{34:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(23),s=c.n(n),a=c(8),i=c(2),b=(c(32),c(33),c(34),c(24)),j=c.n(b),r=c(3),l=function(e){return j()("navbar-item",{"is-active":e})},d=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(a.b,{to:"/",className:function(e){var t=e.isActive;return l(t)},children:"Home"}),Object(r.jsx)(a.b,{to:"/tabs",className:function(e){var t=e.isActive;return l(t)},children:"Tabs"})]})})}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(i.b,{})})})]})},o=function(){return Object(r.jsx)("h1",{className:"title",children:"Home page"})},x=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h=function(){var e,t=Object(i.s)().tabId;return Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:(null===(e=x.find((function(e){return e.id===t})))||void 0===e?void 0:e.content)||"Please select a tab"})},O=c(0),u=function(e){var t=e.tab,c=Object(O.useRef)(null),n=Object(i.s)().tabId===t.id?"is-active":"";return Object(r.jsx)("li",{ref:c,"data-cy":"Tab",className:n,children:Object(r.jsx)(a.b,{to:"".concat(t.id),children:t.title})})},m=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:x.length&&x.map((function(e){return Object(r.jsx)(u,{tab:e},e.id)}))})}),Object(r.jsx)(i.b,{})]})},v=function(){return Object(r.jsx)(i.a,{to:"/"})},f=function(){return Object(r.jsx)("h1",{className:"title",children:"Page not found"})};s.a.render(Object(r.jsx)(a.a,{children:Object(r.jsx)(i.e,{children:Object(r.jsxs)(i.c,{path:"/",element:Object(r.jsx)(d,{}),children:[Object(r.jsx)(i.c,{index:!0,element:Object(r.jsx)(o,{})}),Object(r.jsx)(i.c,{path:"tabs",element:Object(r.jsx)(m,{}),children:Object(r.jsx)(i.c,{path:":tabId?",element:Object(r.jsx)(h,{})})}),Object(r.jsx)(i.c,{path:"home",element:Object(r.jsx)(v,{})}),Object(r.jsx)(i.c,{path:"*",element:Object(r.jsx)(f,{})})]})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.d4afde18.chunk.js.map