(this["webpackJsonpfront-pixabay-web"]=this["webpackJsonpfront-pixabay-web"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n(17),o=n.n(c),s=n(11),i=n(13),j=n(29),u=n(4),m="[auth] Login state finished",A="[auth] Login",g="[auth] Logout",d={checking:!0},h=Object(i.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(u.a)(Object(u.a)(Object(u.a)({},e),t.payload),{},{checking:!1});case m:return Object(u.a)(Object(u.a)({},e),{},{checking:!1});case g:return{checking:!1};default:return e}}}),b="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,l=Object(i.e)(h,b(Object(i.a)(j.a))),f=n(19),x=n(3),O=n(21),p=function(e){var t=e.isAuthenticated,n=e.component,r=Object(O.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(x.b,Object(u.a)(Object(u.a)({},r),{},{component:function(e){return t?Object(a.jsx)(n,Object(u.a)({},e)):Object(a.jsx)(x.a,{to:"/login"})}}))},w=function(e){var t=e.isAuthenticated,n=e.component,r=Object(O.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(x.b,Object(u.a)(Object(u.a)({},r),{},{component:function(e){return t?Object(a.jsx)(x.a,{to:"/"}):Object(a.jsx)(n,Object(u.a)({},e))}}))},v=n(12),G=n.n(v),D=n(15),P="https://pixabay-web.herokuapp.com/api",Y=function(e,t,n){var a="".concat(P,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},M=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(P,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},E=n(8),y=n.n(E),N=function(){return{type:m}},I=function(e){return{type:A,payload:e}},L=function(){return{type:g}},B=n(10),C=n(20),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),n=Object(B.a)(t,2),a=n[0],c=n[1],o=function(e){var t=e.target;c(Object(u.a)(Object(u.a)({},a),{},Object(C.a)({},t.name,t.value)))};return[a,o]},z=(n(41),"data:image/png;base64,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"),k=function(){var e=Object(s.b)(),t=H({loginEmail:"",loginPassword:""}),n=Object(B.a)(t,2),r=n[0],c=n[1],o=r.loginEmail,i=r.loginPassword,j=H({registerUsername:"",registerEmail:"",registerPassword:"",registerPassword2:""}),u=Object(B.a)(j,2),m=u[0],A=u[1],g=m.registerUsername,d=m.registerEmail,h=m.registerPassword,b=m.registerPassword2;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{src:z,alt:"pixabay logo"}),Object(a.jsx)("div",{className:"container login-container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(a.jsx)("h3",{children:"Login "}),Object(a.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=o,a=i,function(){var e=Object(D.a)(G.a.mark((function e(t){var r,c,o;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:if(c=e.sent,o=c.errors,400!==r.status){e.next=20;break}if(void 0===o){e.next=17;break}if(void 0===o.email){e.next=11;break}return e.abrupt("return",y.a.fire("Something gone wrong",o.email.msg,"error"));case 11:if(void 0===o.password){e.next=14;break}return e.abrupt("return",y.a.fire("Something gone wrong",o.password.msg,"error"));case 14:e.next=18;break;case 17:y.a.fire("Something gone wrong",c.msg,"error");case 18:e.next=24;break;case 20:y.a.fire({icon:"success",text:"Logged in",showConfirmButton:!1,timer:1e3}),localStorage.setItem("token",c.token),localStorage.setItem("token-imit-date",(new Date).getTime()),t(I({username:c.username,uid:c.uid}));case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",name:"loginEmail",value:o,onChange:c})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"loginPassword",value:i,onChange:c})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(a.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(a.jsx)("h3",{children:"Register"}),Object(a.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),h!==b)return y.a.fire("Something gone wrong","The passwords must be the same","error");var n,a,r;e((n=g,a=d,r=h,function(){var e=Object(D.a)(G.a.mark((function e(t){var c,o,s;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y("auth/register",{uname:n,email:a,password:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:if(o=e.sent,s=o.errors,400!==c.status){e.next=20;break}if(void 0===s){e.next=17;break}if(void 0===s.username){e.next=11;break}return e.abrupt("return",y.a.fire("Something gone wrong",s.username.msg,"error"));case 11:if(void 0===s.email){e.next=13;break}return e.abrupt("return",y.a.fire("Something gone wrong",s.email.msg,"error"));case 13:if(void 0===s.password){e.next=15;break}return e.abrupt("return",y.a.fire("Something gone wrong",s.password.msg,"error"));case 15:e.next=18;break;case 17:y.a.fire("Something gone wrong",o.msg,"error");case 18:e.next=23;break;case 20:localStorage.setItem("token",o.token),localStorage.setItem("token-imit-date",(new Date).getTime()),t(I({username:o.username,uid:o.uid}));case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Username",name:"registerUsername",value:g,onChange:A})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"email",className:"form-control",placeholder:"Email address",name:"registerEmail",value:d,onChange:A})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"registerPassword",value:h,onChange:A})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Repeat password",name:"registerPassword2",value:b,onChange:A})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Sign up"})})]})]})]})})]})},F=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).username;return Object(a.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(a.jsx)("h3",{children:t}),Object(a.jsx)("span",{className:"navbar-brand",children:Object(a.jsx)("img",{src:z,alt:"pixabay logo",className:"logo-navbar"})}),Object(a.jsxs)("button",{className:"btn btn-danger",onClick:function(){e((function(e){localStorage.clear(),e(L())}))},children:[Object(a.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(a.jsx)("span",{children:" Log out"})]})]})},R=function(e){var t=e.setCategory,n=Object(r.useState)(""),c=Object(B.a)(n,2),o=c[0],s=c[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),o.trim().length>0&&(t(o),s(""))},className:"md-form mt-0",children:Object(a.jsx)("input",{className:"form-control",type:"text",value:o,onChange:function(e){s(e.target.value)}})})},Q=function(){var e=Object(D.a)(G.a.mark((function e(t){var n,a,r,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"15310263-3c077b8973067ba768708060a",n="https://pixabay.com/api/?key=".concat("15310263-3c077b8973067ba768708060a","&per_page=",30,"&q=").concat(encodeURI(t),"&image_type=photo&lang=en"),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,c=r.hits,e.abrupt("return",c.map((function(e){return{url:e.largeImageURL,name:e.largeImageURL.split("/")[4],id:e.id}})));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e){var t=e.url,n=e.name;return Object(a.jsx)("div",{className:"img card animate__animated animate__fadeIn",children:Object(a.jsx)("img",{src:t,alt:n})})},X=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(B.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){Q(e).then((function(e){c({data:e,loading:!1})}))}),[e]),a}(t),c=n.data,o=n.loading;return Object(a.jsxs)("div",{className:"imageGrid",children:[Object(a.jsxs)("h3",{children:["Results of ",t]}),o&&Object(a.jsx)("p",{className:"animate__animated animate__flash",id:"loading",children:"Loading..."}),Object(a.jsx)("div",{className:"cardGrid",children:c.map((function(e){return Object(a.jsx)(T,Object(u.a)({},e),e.id)}))})]})},K=function(){var e=Object(r.useState)("homes"),t=Object(B.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)(R,{setCategory:c}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:Object(a.jsx)(X,{category:n})})]})},S=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(F,{}),Object(a.jsx)(K,{})]})},V=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).uid;return Object(r.useEffect)((function(){e(function(){var e=Object(D.a)(G.a.mark((function e(t){var n,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,400===n.status?(y.a.fire("Something gone wrong",a.msg,"error"),t(N())):(localStorage.setItem("token",a.token),localStorage.setItem("token-imit-date",(new Date).getTime()),t(I({username:a.username,uid:a.uid})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(a.jsx)(f.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(x.d,{children:[Object(a.jsx)(w,{exact:!0,path:"/login",component:k,isAuthenticated:!!t}),Object(a.jsx)(p,{exact:!0,path:"/",component:S,isAuthenticated:!!t}),Object(a.jsx)(x.a,{to:"/"})]})})})},U=function(){return Object(a.jsx)(s.a,{store:l,children:Object(a.jsx)(V,{})})};n(42);o.a.render(Object(a.jsx)(U,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.6c5118ea.chunk.js.map