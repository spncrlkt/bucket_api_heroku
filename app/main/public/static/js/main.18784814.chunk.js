(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(38),c=n.n(l),u=(n(54),n(1)),i=n(12),o=n.n(i),s=n(39),m=n.n(s),f=n(40),p=n.n(f),d=n(41),E=n.n(d);function h(e){return e.children?r.a.createElement("button",Object.assign({},e,{className:E()(p.a.btn,e.cls)}),e.children):r.a.createElement("div",null)}var g=n(42),v=n.n(g);function b(e){return r.a.createElement("input",Object.assign({},e,{className:v.a.input}))}var _=n(21),O=n.n(_),j=O()({AUTH_LOGIN:null,AUTH_LOGOFF:null,VIEW_SET:null,PHR_LOAD:null,PHR_SELECT:null});var C={token:"null"!==sessionStorage.getItem("tkn")?sessionStorage.getItem("tkn"):null,email:"null"!==sessionStorage.getItem("email")?sessionStorage.getItem("email"):null};function S(e,t){switch(t.type){case j.AUTH_LOGIN:return P(e,{token:t.data.token,email:t.data.email});case j.AUTH_LOGOFF:return P(e,{token:null,email:null});default:return e}}var y=O()({PHRAGS:null,TAGS:null});function k(e,t){switch(t.type){case j.VIEW_SET:return t.data;default:return e}}function x(e,t){switch(t.type){case j.PHR_LOAD:return P(e,{items:t.data});case j.AUTH_LOGOFF:return P(e,{items:[]});case j.PHR_SELECT:return P(e,{selected:t.data});default:return e}}var w={auth:C,view:y.PHRAGS,phrags:{items:[],selected:null}};function A(e,t){return Object.assign({},{auth:S(e.auth,t),view:k(e.view,t),phrags:x(e.phrags,t)})}function P(e,t){return Object.assign({},e,t)}var T=function(e){return function(){return e.auth.token}},H=function(e){return function(){return e.auth.email}},I=function(e){return function(){return e.view}},L=function(e){return function(){return e.phrags.items}},N=function(e){return function(){var t=function(e){return function(){return e.phrags.selected}}(e)(),n=L(e)();return t?n.find(function(e){return e.id===t}):null}},R=function(e){return{token:T(e),currentView:I(e),allPhrags:L(e),selPhrag:N(e),curEmail:H(e)}},F=n(4),G=n.n(F);function B(e){var t=Object(a.useContext)(de),n=t.api,l=t.acts,c=t.select,i=Object(a.useState)(""),o=Object(u.a)(i,2),s=o[0],m=o[1],f=Object(a.useState)(""),p=Object(u.a)(f,2),d=p[0],E=p[1],g=c.curEmail();return r.a.createElement("div",{className:G.a.cntnr},g?r.a.createElement("div",null,r.a.createElement(h,{onClick:function(){return l.auth_logoff()}},"logoff"),r.a.createElement(h,{cls:G.a.btn1,onClick:function(){return e.setFull(!0)}},"fs"),r.a.createElement(h,{cls:G.a.btn1,onClick:function(){return l.view_set(y.PHRAGS)}},"phrags"),r.a.createElement(h,{cls:G.a.btn1,onClick:function(){return l.view_set(y.TAGS)}},"tags")):r.a.createElement("div",{className:G.a.form},r.a.createElement(b,{value:s,onChange:function(e){return m(e.target.value)},placeholder:"email",type:"email",name:"email",required:!0}),r.a.createElement(b,{value:d,onChange:function(e){return E(e.target.value)},placeholder:"pass",type:"password",name:"password",required:!0}),r.a.createElement("div",{className:G.a.button},r.a.createElement(h,{onClick:function(){return n.post("/auth/login",{email:s,password:d}).then(function(e){return l.auth_login(e.data.auth_token,e.data.user.email)})}},"login"))))}function D(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("p",null,"Register"),r.a.createElement(b,{value:n,onChange:function(e){return l(e.target.value)},placeholder:"Email address",type:"email",name:"email",required:!0}),r.a.createElement(b,{value:s,onChange:function(e){return m(e.target.value)},placeholder:"Password",type:"password",name:"password",required:!0}),r.a.createElement(h,{type:"submit",onClick:function(){return o.a.post("/auth/register",{email:n,password:s}).then(function(e){return console.log(e)})}},"reg"))}function U(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),l=n[0],c=n[1];return r.a.createElement("div",null,r.a.createElement("h2",{onClick:function(){return c(!l)}},"DEBUGGER MODE"),l&&r.a.createElement("div",null,r.a.createElement("p",null,"App Level Render Count (RC): ",e.dbgRC),r.a.createElement(D,null),r.a.createElement("pre",null,JSON.stringify(e.appState,null,2))))}function V(){var e=Object(a.useContext)(de),t=e.acts,n=e.select;return r.a.createElement("div",null,r.a.createElement("div",null,n.allPhrags().map(function(e){return r.a.createElement("div",{onClick:function(){return t.phr_select(e.id)},key:e.id},r.a.createElement("span",{style:{cursor:"pointer"}},e.text))})))}var W=n(43),M=n.n(W);function q(e){var t=Object(a.useContext)(de).api,n=Object(a.useState)(""),l=Object(u.a)(n,2),c=l[0],i=l[1],o=Object(a.useState)(null),s=Object(u.a)(o,2),m=s[0],f=s[1];Object(a.useEffect)(function(){e.selPhrag&&(i(e.selPhrag.text),f(e.selPhrag.id))},[e.selPhrag]);var p=Object(a.useState)(!1),d=Object(u.a)(p,2),E=d[0],g=d[1];return r.a.createElement("div",null,E?r.a.createElement("div",null,r.a.createElement(b,{value:c,onChange:function(e){return i(e.target.value)},type:"text",name:"text",required:!0}),r.a.createElement(h,{onClick:function(){return t.post("/phrag/update",{text:c,id:m}).then(function(e){i(c),t.fetchPhrags().then(function(){return g(!1)})})}},"update")):r.a.createElement("div",{onClick:function(){return g(!E)}},c),E&&r.a.createElement("div",{className:M.a.btn},r.a.createElement(h,{onClick:function(){return g(!E)}},"back")))}var z=n(44),J=n.n(z);function Y(e){var t=Object(a.useContext)(de).api,n=Object(a.useState)(""),l=Object(u.a)(n,2),c=l[0],i=l[1];return r.a.createElement("div",{className:J.a.flx},r.a.createElement(b,{value:c,onChange:function(e){return i(e.target.value)},type:"text",name:"text",required:!0}),r.a.createElement(h,{onClick:function(){return t.post("/phrag/add",{text:c}).then(function(e){i(""),t.fetchPhrags()})}},"add"))}var Z=n(5),Q=n.n(Z);function K(){var e=Object(a.useContext)(de).select;return r.a.createElement("div",null,r.a.createElement("div",{className:Q.a.window},r.a.createElement("div",{className:Q.a.left},r.a.createElement(Y,null),r.a.createElement(V,null)),r.a.createElement("div",{className:Q.a.right},r.a.createElement(q,{selPhrag:e.selPhrag()}))))}var X=n(45),$=n.n(X);function ee(){var e=Object(a.useContext)(de).api,t=Object(a.useState)(null),n=Object(u.a)(t,2),l=n[0],c=n[1],i=Object(a.useState)(""),o=Object(u.a)(i,2),s=o[0],m=o[1],f=Object(a.useState)(""),p=Object(u.a)(f,2),d=p[0],E=p[1],g=Object(a.useState)(null),v=Object(u.a)(g,2),_=v[0],O=v[1];return r.a.createElement("div",null,r.a.createElement("div",{style:{marginBottom:"20px"}},_&&_.map(function(e){return r.a.createElement(h,{style:{marginRight:"20px"}},e.emoji)})),r.a.createElement("div",{style:{marginBottom:"20px"}},r.a.createElement(h,{onClick:function(){e.get("/phrag/tag").then(function(e){return O(e.data.tags)})}},"fetch")),l&&r.a.createElement("div",null,r.a.createElement("div",{style:{marginBottom:"20px"}},r.a.createElement(h,{style:{marginRight:"20px"}},r.a.createElement("span",null,l)),r.a.createElement(b,{value:s,onChange:function(e){return m(e.target.value)},placeholder:"add a title",type:"input"}),r.a.createElement(b,{value:d,onChange:function(e){return E(e.target.value)},type:"input"})),r.a.createElement("div",{style:{marginBottom:"20px"}},r.a.createElement(h,{onClick:function(){e.post("/phrag/tag/add",{emoji:l,title:s,alts:d}).then(function(e){m(""),E(""),c(null)})}},"save"))),r.a.createElement($.a,{onEmojiClick:function(e,t){E(t.name.replace(/_/g," "));var n="0x".concat(e);try{c(String.fromCodePoint(n))}catch(a){console.error("WTF WTF WFT WFT")}}}))}var te=n(23),ne=n(46),ae=n(47),re=n(22),le=n(48),ce=n.n(le),ue=ie(ie(ie(["#5CE905","#2305e9","#8F05DA","#e905ce","#e91405","#D98805","#cbe905","#5CE905"])));function ie(e){var t=[],n=e[0],a=e[0],r=!0,l=!1,c=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done);r=!0){var o=u.value;o!==a&&(t.push(a),t.push(re.evaluate("".concat(a," | ").concat(o)).result.hex()),a=o)}}catch(s){l=!0,c=s}finally{try{r||null==i.return||i.return()}finally{if(l)throw c}}return t.push(re.evaluate("".concat(a," | ").concat(n)).result.hex()),t}function oe(e){return[].concat(Object(te.a)(e),Object(te.a)(e))}var se=oe(oe(ue)),me=function(e){var t=se.length,n=Math.floor(e*(t-1));return se[n]};function fe(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=(t[0],t[1],Object(a.useState)(0)),l=Object(u.a)(n,2),c=l[0],i=l[1],o=((new ae.Easer).using("in-out-bounce"),(new ne.AnimationTimer).duration("2s").on("tick",function(e){return i(e)}));return r.a.createElement("div",null,r.a.createElement("h1",{onClick:function(){return o.play()},className:ce.a.h1},r.a.createElement(pe,{clrs:se,tick:c,stop:.4,run_len:.55},"WELCOME 2.... PIMPY'S MIND PALACE")))}function pe(e){var t=Object(a.useState)(e.children.split("")),n=Object(u.a)(t,2),l=n[0],c=(n[1],l.length);return r.a.createElement("span",null,l&&l.map(function(t,n){return function(t,n,a){var l=a-e.stop/c*n,u=e.clrs[0];return l>0&&l<e.run_len?u=me(l/e.run_len):l>=e.run_len&&(u=e.clrs[e.clrs.length-1]),r.a.createElement("span",{key:n,style:{color:u}},t)}(t,n,e.tick)}))}var de=r.a.createContext(null),Ee=!1;c.a.render(r.a.createElement(function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],l=t[1],c=Object(a.useReducer)(A,w),i=Object(u.a)(c,2),s=i[0],f=i[1],p=R(s),d=function(e){return{auth_login:function(t,n){e({type:j.AUTH_LOGIN,data:{token:t,email:n}}),sessionStorage.setItem("tkn",t),sessionStorage.setItem("email",n)},auth_logoff:function(){e({type:j.AUTH_LOGOFF}),sessionStorage.setItem("tkn",null),sessionStorage.setItem("email",null)},view_set:function(t){return e({type:j.VIEW_SET,data:t})},phr_load:function(t){return e({type:j.PHR_LOAD,data:t})},phr_select:function(t){return e({type:j.PHR_SELECT,data:t})}}}(f),E=p.token(),h=E?{Authorization:"Bearer ".concat(E)}:{},g=o.a.create({headers:h});g.fetchPhrags=function(){return g.get("/phrag/").then(function(e){return d.phr_load(e.data.phrags)})};var v={api:g,acts:d,select:p};Object(a.useEffect)(function(){E?(l(n+1),g.fetchPhrags()):(l(n+1),d.phr_load([]))},[E]);var b=Object(a.useState)(!1),_=Object(u.a)(b,2),O=_[0],C=_[1];return r.a.createElement(de.Provider,{value:v},r.a.createElement(m.a,{enabled:O,onChange:function(e){return C(e)}},r.a.createElement("div",{className:Q.a.body},r.a.createElement("br",null),r.a.createElement(fe,null),E&&p.currentView()===y.PHRAGS&&r.a.createElement(K,null),E&&p.currentView()===y.TAGS&&r.a.createElement(ee,null),r.a.createElement(B,{isFull:O,setFull:C}),Ee&&r.a.createElement(U,{dbgRC:n,appState:s}))))},null),document.getElementById("root"))},4:function(e,t,n){e.exports={cntnr:"Account_cntnr__1HyuY",bumpLeft:"Account_bumpLeft__2zgM9",button:"Account_button__13h3l",btn1:"Account_btn1__cyIQk"}},40:function(e,t,n){e.exports={btn:"Button_btn__1uuCO"}},42:function(e,t,n){e.exports={input:"Input_input__8i3HE"}},43:function(e,t,n){e.exports={btn:"MutPhrag_btn__1j7_l"}},44:function(e,t,n){e.exports={flx:"NewPhrag_flx__2aEPO"}},48:function(e,t,n){e.exports={h1:"Hdr_h1__3TjoN"}},49:function(e,t,n){e.exports=n(112)},5:function(e,t,n){e.exports={body:"App_body__ZTvxg",window:"App_window__35LVr",left:"App_left__3HZV9",right:"App_right__1pmkn",error:"App_error__1umzI"}},54:function(e,t,n){}},[[49,1,2]]]);
//# sourceMappingURL=main.18784814.chunk.js.map