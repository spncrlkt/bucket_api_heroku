(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(36),l=n.n(u),c=(n(51),n(1)),o=n(12),i=n.n(o),s=n(37),m=n.n(s),f=n(38),p=n.n(f),d=n(39),h=n.n(d);function E(e){return e.children?r.a.createElement("button",Object.assign({},e,{className:h()(p.a.btn,e.cls)}),e.children):r.a.createElement("div",null)}var g=n(40),_=n.n(g);function b(e){return r.a.createElement("input",Object.assign({},e,{className:_.a.input}))}var v=n(5),O=n.n(v);function j(e){var t=Object(a.useContext)(ae),n=t.api,u=t.acts,l=t.select,o=Object(a.useState)(""),i=Object(c.a)(o,2),s=i[0],m=i[1],f=Object(a.useState)(""),p=Object(c.a)(f,2),d=p[0],h=p[1],g=l.curEmail();return r.a.createElement("div",{className:O.a.cntnr},g?r.a.createElement("div",null,r.a.createElement(E,{onClick:function(){return u.auth_logoff()}},"logoff"),r.a.createElement(E,{cls:O.a.btn1,onClick:function(){return e.setFull(!0)}},"beeg")):r.a.createElement("div",{className:O.a.form},r.a.createElement(b,{value:s,onChange:function(e){return m(e.target.value)},placeholder:"email",type:"email",name:"email",required:!0}),r.a.createElement(b,{value:d,onChange:function(e){return h(e.target.value)},placeholder:"pass",type:"password",name:"password",required:!0}),r.a.createElement("div",{className:O.a.button},r.a.createElement(E,{onClick:function(){return n.post("/auth/login",{email:s,password:d}).then(function(e){return u.auth_login(e.data.auth_token,e.data.user.email)})}},"login"))))}function k(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],u=t[1],l=Object(a.useState)(""),o=Object(c.a)(l,2),s=o[0],m=o[1];return r.a.createElement("div",null,r.a.createElement("p",null,"Register"),r.a.createElement("input",{value:n,onChange:function(e){return u(e.target.value)},placeholder:"Email address",type:"email",name:"email",required:!0}),r.a.createElement("input",{value:s,onChange:function(e){return m(e.target.value)},placeholder:"Password",type:"password",name:"password",required:!0}),r.a.createElement("button",{type:"submit",onClick:function(){return i.a.post("/auth/register",{email:n,password:s}).then(function(e){return console.log(e)})}},"Register"))}function C(){var e=Object(a.useContext)(ae),t=e.acts,n=e.select;return r.a.createElement("div",null,r.a.createElement("div",null,n.allPhrags().map(function(e){return r.a.createElement("div",{onClick:function(){return t.phr_select(e.id)},key:e.id},r.a.createElement("span",{style:{cursor:"pointer"}},e.text))})))}var P=n(41),S=n.n(P);function x(e){var t=Object(a.useContext)(ae).api,n=Object(a.useState)(""),u=Object(c.a)(n,2),l=u[0],o=u[1],i=Object(a.useState)(null),s=Object(c.a)(i,2),m=s[0],f=s[1];Object(a.useEffect)(function(){e.selPhrag&&(o(e.selPhrag.text),f(e.selPhrag.id))},[e.selPhrag]);var p=Object(a.useState)(!1),d=Object(c.a)(p,2),h=d[0],g=d[1];return r.a.createElement("div",null,h?r.a.createElement("div",null,r.a.createElement(b,{value:l,onChange:function(e){return o(e.target.value)},type:"text",name:"text",required:!0}),r.a.createElement(E,{onClick:function(){return t.post("/phrag/update",{text:l,id:m}).then(function(e){o(l),t.fetchPhrags().then(function(){return g(!1)})})}},"update")):r.a.createElement("div",{onClick:function(){return g(!h)}},l),h&&r.a.createElement("div",{className:S.a.btn},r.a.createElement(E,{onClick:function(){return g(!h)}},"back")))}var y=n(42),L=n.n(y);function w(e){var t=Object(a.useContext)(ae).api,n=Object(a.useState)(""),u=Object(c.a)(n,2),l=u[0],o=u[1];return r.a.createElement("div",{className:L.a.flx},r.a.createElement(b,{value:l,onChange:function(e){return o(e.target.value)},type:"text",name:"text",required:!0}),r.a.createElement(E,{onClick:function(){return t.post("/phrag/add",{text:l}).then(function(e){o(""),t.fetchPhrags()})}},"add"))}var A=n(22),H=n(43),N=n(44),I=n(21),T=n(45),F=n.n(T),R=U(U(U(["#5CE905","#2305e9","#8F05DA","#e905ce","#e91405","#D98805","#cbe905","#5CE905"])));function U(e){var t=[],n=e[0],a=e[0],r=!0,u=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done);r=!0){var i=c.value;i!==a&&(t.push(a),t.push(I.evaluate("".concat(a," | ").concat(i)).result.hex()),a=i)}}catch(s){u=!0,l=s}finally{try{r||null==o.return||o.return()}finally{if(u)throw l}}return t.push(I.evaluate("".concat(a," | ").concat(n)).result.hex()),t}function G(e){return[].concat(Object(A.a)(e),Object(A.a)(e))}var D=G(G(R)),q=function(e){var t=D.length,n=Math.floor(e*(t-1));return D[n]};function M(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=(t[0],t[1],Object(a.useState)(0)),u=Object(c.a)(n,2),l=u[0],o=u[1],i=((new N.Easer).using("in-out-bounce"),(new H.AnimationTimer).duration("2s").on("tick",function(e){return o(e)}));return r.a.createElement("div",null,r.a.createElement("h1",{onClick:function(){return i.play()},className:F.a.h1},r.a.createElement(B,{clrs:D,tick:l,stop:.4,run_len:.55},"WELCOME 2.... PIMPY'S MIND PALACE")))}function B(e){var t=Object(a.useState)(e.children.split("")),n=Object(c.a)(t,2),u=n[0],l=(n[1],u.length);return r.a.createElement("span",null,u&&u.map(function(t,n){return function(t,n,a){var u=a-e.stop/l*n,c=e.clrs[0];return u>0&&u<e.run_len?c=q(u/e.run_len):u>=e.run_len&&(c=e.clrs[e.clrs.length-1]),r.a.createElement("span",{key:n,style:{color:c}},t)}(t,n,e.tick)}))}var J={AUTH_LOGIN:"AUTH_LOGIN",AUTH_LOGOFF:"AUTH_LOGOFF",PHR_LOAD:"PHR_LOAD",PHR_SELECT:"PHR_SELECT"};function z(e,t){switch(t.type){case J.PHR_LOAD:return Y(e,{items:t.data});case J.AUTH_LOGOFF:return Y(e,{items:[]});case J.PHR_SELECT:return Y(e,{selected:t.data});default:return e}}function V(e,t){switch(t.type){case J.AUTH_LOGIN:return Y(e,{token:t.data.token,email:t.data.email});case J.AUTH_LOGOFF:return Y(e,{token:null,email:null});default:return e}}var Z={auth:{token:"null"!==sessionStorage.getItem("tkn")?sessionStorage.getItem("tkn"):null,email:"null"!==sessionStorage.getItem("email")?sessionStorage.getItem("email"):null},phrags:{items:[],selected:null}};function W(e,t){return Object.assign({},{auth:V(e.auth,t),phrags:z(e.phrags,t)})}function Y(e,t){return Object.assign({},e,t)}var K=function(e){return function(){return e.auth.token}},Q=function(e){return function(){return e.auth.email}},X=function(e){return function(){return e.phrags.items}},$=function(e){return function(){var t=function(e){return function(){return e.phrags.selected}}(e)(),n=X(e)();return t?n.find(function(e){return e.id===t}):null}},ee=function(e){return{token:K(e),allPhrags:X(e),selPhrag:$(e),curEmail:Q(e)}},te=n(6),ne=n.n(te),ae=r.a.createContext(null),re=!1;l.a.render(r.a.createElement(function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],u=t[1],l=Object(a.useState)(0),o=Object(c.a)(l,2),s=o[0],f=o[1],p=Object(a.useReducer)(W,Z),d=Object(c.a)(p,2),h=d[0],E=d[1],g=ee(h),_=function(e){return{auth_login:function(t,n){e({type:J.AUTH_LOGIN,data:{token:t,email:n}}),sessionStorage.setItem("tkn",t),sessionStorage.setItem("email",n)},auth_logoff:function(){e({type:J.AUTH_LOGOFF}),sessionStorage.setItem("tkn",null),sessionStorage.setItem("email",null)},phr_load:function(t){return e({type:J.PHR_LOAD,data:t})},phr_select:function(t){return e({type:J.PHR_SELECT,data:t})}}}(E),b=g.token(),v=b?{Authorization:"Bearer ".concat(b)}:{},O=i.a.create({headers:v});O.fetchPhrags=function(){return O.get("/phrag/").then(function(e){return _.phr_load(e.data.phrags)})};var P={api:O,acts:_,select:g};Object(a.useEffect)(function(){b?(f(s+1),O.fetchPhrags()):_.phr_load([])},[b]);var S=Object(a.useState)(!1),y=Object(c.a)(S,2),L=y[0],A=y[1];return r.a.createElement(ae.Provider,{value:P},r.a.createElement(m.a,{enabled:L,onChange:function(e){return A(e)}},r.a.createElement("div",{className:ne.a.body},r.a.createElement("br",null),r.a.createElement(M,null),b&&r.a.createElement("div",null,r.a.createElement("div",{className:ne.a.window},r.a.createElement("div",{className:ne.a.left},r.a.createElement(w,null),r.a.createElement(C,null)),r.a.createElement("div",{className:ne.a.right},r.a.createElement(x,{selPhrag:g.selPhrag()})))),r.a.createElement(j,{isFull:L,setFull:A}),re&&r.a.createElement("div",null,r.a.createElement("h2",{onClick:function(){return u(!n)}},"~~~~DEBUGGER MODE~~~~~"),n&&r.a.createElement("div",null,r.a.createElement("p",null,"App Level render count: ",s),r.a.createElement(k,null),r.a.createElement("pre",null,JSON.stringify(h,null,2)))))))},null),document.getElementById("root"))},38:function(e,t,n){e.exports={btn:"Button_btn__1uuCO"}},40:function(e,t,n){e.exports={input:"Input_input__8i3HE"}},41:function(e,t,n){e.exports={btn:"MutPhrag_btn__1j7_l"}},42:function(e,t,n){e.exports={flx:"NewPhrag_flx__2aEPO"}},45:function(e,t,n){e.exports={h1:"Hdr_h1__3TjoN"}},46:function(e,t,n){e.exports=n(107)},5:function(e,t,n){e.exports={cntnr:"Login_cntnr__Uc4O1",bumpLeft:"Login_bumpLeft__3eS_U",button:"Login_button__3PNqr",btn1:"Login_btn1__3xbHF"}},51:function(e,t,n){},6:function(e,t,n){e.exports={body:"App_body__ZTvxg",window:"App_window__35LVr",left:"App_left__3HZV9",right:"App_right__1pmkn",error:"App_error__1umzI"}}},[[46,1,2]]]);
//# sourceMappingURL=main.525f32df.chunk.js.map