(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{107:function(e,t,a){e.exports=a(211)},210:function(e,t,a){"use strict";a.r(t);var n,r=a(15),c=a(23),s=a(94),o=a.n(s),u=a(47),E=a.n(u),i=a(101),l=a(11),d=a(29),T=a(48),p=Object(T.a)({namespace:"crassa",store:"products",initialState:{items:[]}}).extend({creators:function(e){var t=e.types,a=t.FETCH,n=t.FETCH_FULFILLED;return{getProducts:function(){return Object(l.a)({type:a},u.WAIT_FOR_ACTION,n)}}}}),L=Object(r.c)((n={routing:c.c},Object(l.a)(n,d.a.store,d.a.reducer),Object(l.a)(n,p.store,p.reducer),n)),_=a(25),m=a.n(_),F=a(102),O=a(14),C=a(6),P=a(16),A=a.n(P);a(143);var f,D,h=Object({NODE_ENV:"production",PUBLIC_URL:"/crassa-material-ui-template"}),y=h.REACT_APP_REST_API_LOCATION,I=void 0===y?"http://localhost:5000":y,b=h.REACT_APP_API_VERSION,N=void 0===b?"v1":b,v="".concat(I,"/api/").concat(N,"/");var U=function(){return f=A.a.CancelToken.source(),A.a.create({baseURL:v,cancelToken:f.token,mode:"no-cors"})};function j(e){return new Promise(function(t,a){H(e),U().get(e).then(function(e){t(e.data)}).catch(function(e){a(Object(C.a)({type:A.a.isCancel(e)?"cancel":"err"},e))})})}function H(e){D===e?void 0!==f&&f.cancel("Operation canceled due to new request."):D=e}var R=m.a.mark(S),g=p.types;function S(){var e;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(O.c)({type:g.FETCH_PENDING});case 3:return t.next=5,Object(O.b)(j,"products");case 5:return e=t.sent,t.next=8,Object(O.c)({type:g.FETCH_FULFILLED,payload:e});case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("getProducts err: ",t.t0);case 13:case"end":return t.stop()}},R,this,[[0,10]])}var w=[Object(O.d)(g.FETCH,S)],G=m.a.mark(k);function k(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)(Object(F.a)(w));case 2:case"end":return e.stop()}},G,this)}a.d(t,"history",function(){return M});var x=window.__PRELOADED_STATE__;delete window.__PRELOADED_STATE__;var M=o()(),V=Object(i.a)(),W=[V,Object(c.b)(M)],B=Object(r.d)(r.a.apply(void 0,W),Object(r.a)(E()())),Y=Object(r.e)(L,x||{},B);V.run(k);t.default=Y},211:function(e,t,a){"use strict";a.r(t);var n,r=a(2),c=a.n(r),s=a(63),o=a.n(s),u=a(90),E=a(30),i=a(61),l=a.n(i),d=a(11),T=a(276),p=a(23),L=a(37),_=a(38),m=a(44),F=a(39),O=a(45),C=function(e){function t(){return Object(L.a)(this,t),Object(m.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",right:0,left:0,top:0,bottom:0}},"Cargando...")}}]),t}(r.Component),P=Object(E.a)(function(){return Promise.all([a.e(0),a.e(2)]).then(a.bind(null,274))},Object(d.a)({LoadingComponent:function(){return c.a.createElement(C,null)},modules:["containers/Dashboard"]},"modules",["containers/Dashboard"])),A=Object(E.a)(function(){return Promise.all([a.e(0),a.e(5),a.e(3)]).then(a.bind(null,275))},Object(d.a)({LoadingComponent:function(){return c.a.createElement(C,null)},modules:["containers/Home"]},"modules",["containers/Home"])),f=a(97),D=a.n(f),h=(n=i.history,c.a.createElement(p.a,{history:n},c.a.createElement(P,{history:n},c.a.createElement(T.a,{component:A,exact:!0,path:"/crassa-material-ui-template"})))),y=function(){return c.a.createElement(D.a,{store:l.a},h)};var I=function(e){(0,o.a.hydrate)(c.a.createElement(u.AppContainer,{key:Math.random()},c.a.createElement(e,null)),document.getElementById("root"))};Object(E.b)().then(function(){I(y)}).catch(function(){I(y)})},212:function(e,t,a){"use strict";a.r(t);var n=a(37),r=a(38),c=a(44),s=a(39),o=a(45),u=a(2),E=a.n(u),i=a(60),l=a(28),d=a(99),T=a.n(d),p=a(46),L=a.n(p),_=a(59),m=a.n(_),F=a(20),O=a.n(F),C=a(100),P=a.n(C),A=a(6),f=a(51),D=a.n(f),h=a(62),y=a.n(h),I={typography:{useNextVariants:!0}},b={ligth:Object(A.a)({},I,{palette:{type:"light",primary:{main:D.a[500]},secondary:{main:y.a[500]}}}),dark:Object(A.a)({},I,{palette:{type:"dark",primary:{main:y.a[500]},secondary:{main:D.a[500]}}})},N=a(29);a.d(t,"sheetsRegistry",function(){return j});var v=L()(),U=new Map,j=new l.SheetsRegistry,H=O()(b.ligth),R=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={},H=O()(b[a.props.theme.style]),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)}},{key:"shouldComponentUpdate",value:function(e){var t=e.theme.style;return this.props.theme.style!==t&&(H=O()(b[t]),!0)}},{key:"render",value:function(){var e=this.props,t=e.store,a=e.children;return E.a.createElement(T.a,{generateClassName:v,registry:j},E.a.createElement(m.a,{sheetsManager:U,theme:H},E.a.createElement(i.a,{store:t},E.a.createElement(u.Fragment,null,E.a.createElement(P.a,null),a))))}}]),t}(u.Component);t.default=Object(i.b)(function(e){return{theme:e.theme}},{updateTheme:N.a.creators.updateTheme})(R)},29:function(e,t,a){"use strict";var n=a(6),r=a(48),c=a(49);t.a=Object(r.a)({namespace:"boilerplate",store:"theme",initialState:{style:"ligth"}}).extend({types:["UPDATE_THEME"],reducer:function(e,t,a){var r=a.types;return Object(c.a)(e,function(a){switch(t.type){case r.UPDATE_THEME:return localStorage.setItem("style",t.theme),Object(n.a)({},e,{style:t.theme});default:return void(a.style="undefined"!==typeof window&&localStorage.getItem("style")||e.style)}})},creators:function(e){var t=e.types.UPDATE_THEME;return{updateTheme:function(e){return{type:t,theme:e}}}}})},48:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(6),r=a(95),c=a.n(r),s=a(49);function o(e){var t=e.namespace,a=e.store,r=e.initialState,o=void 0===r?{}:r,u=e.creators,E=e.selectors;return new c.a({namespace:t,store:a,consts:{statuses:["NEW","LOADING","READY","SAVING","SAVED","DELETED","ERROR","CANCEL","EDITING"]},types:["REMOVE","UPDATE","FETCH","FETCH_PENDING","FETCH_FULFILLED","FETCH_FAILURE","FETCH_CANCEL","FETCH_FOR_PATH","FETCH_FOR_PATH_PENDING","FETCH_FOR_PATH_FULFILLED","FETCH_FOR_PATH_FAILURE","PUT","PUT_PENDING","PUT_FULFILLED","PUT_FAILURE","PUT_CANCEL","PUT","POST","POST_PENDING","POST_FULFILLED","POST_FAILURE","POST_CANCEL","DELETE","DELETE_PENDING","DELETE_FULFILLED","DELETE_FAILURE","DELETE_CANCEL","RESET","PATCH","PATCH_PENDING","PATCH_FULFILLED","PATCH_FAILURE","PATCH_CANCEL"],reducer:function(e,t,a){var r=a.types,c=a.statuses;return Object(s.a)(e,function(e){switch(t.type){case r.UPDATE:for(var a in e.status!==c.EDITING&&(e.status=c.EDITING),t.payload)e[a]=t.payload[a];return;case r.FETCH_PENDING:return void(e.status=c.LOADING);case r.FETCH_FULFILLED:for(var s in t.payload)e[s]=t.payload[s];return void(e.status=c.READY);case r.FETCH_FOR_PATH_FULFILLED:for(var u in t.dataForPath&&(e.dataForPath=t.dataForPath),t.payload)e[u]=t.payload[u];return void(e.status=c.READY);case r.FETCH_FOR_PATH_PENDING:case r.POST_PENDING:case r.PUT_PENDING:case r.PATCH_PENDING:case r.DELETE_PENDING:return void(e.status=c.SAVING);case r.POST_FULFILLED:case r.PUT_FULFILLED:case r.PATCH_FULFILLED:for(var E in e.status=c.SAVED,t.id&&(e.id=t.id),t.payload)e[E]=t.payload[E];return;case r.DELETE_FULFILLED:return void(e.status=c.DELETED);case r.FETCH_FOR_PATH_FAILURE:case r.FETCH_FAILURE:case r.PUT_FAILURE:case r.POST_FAILURE:case r.PATCH_FAILURE:case r.DELETE_FAILURE:return e.status=c.ERROR,void(e.error=t.error);case r.FETCH_CANCEL:case r.POST_CANCEL:case r.PUT_CANCEL:case r.DELETE_CANCEL:case r.PATCH_CANCEL:return void(e.status=c.CANCEL);case r.RESET:return Object(n.a)({},o,{status:c.NEW,error:null});default:return}})},selectors:E,creators:u,initialState:function(e){var t=e.statuses;return Object(n.a)({},o,{status:t.NEW,error:null})}})}},61:function(e,t,a){e.exports=a(210)},97:function(e,t,a){e.exports=a(212)}},[[107,6,4]]]);
//# sourceMappingURL=main.faf24d88.chunk.js.map