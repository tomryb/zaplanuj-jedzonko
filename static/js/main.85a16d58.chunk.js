(this["webpackJsonpzaplanuj-jedzonko"]=this["webpackJsonpzaplanuj-jedzonko"]||[]).push([[0],{106:function(e,t,n){"use strict";(function(e,a){n.d(t,"a",(function(){return l}));var r=n(107),c=n(63),o=n.n(c),u={};if(window.__config)console.log("Taking config from XHR config file"),u=window.__config;else{console.warn('Missing "window" config object, will try to import dynamically from src/config directory');try{console.log("Importing config from local file \n\n"),console.log(e,a,o.a.resolve(a),o.a.resolve(e)),console.log("\n\n"),u=n(263)}catch(s){console.error("Cannot import config file")}}var l=r.a.getInstance(u)}).call(this,"/","/index.js")},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(47),r=function(){var e;return{getInstance:function(t){return e||(e=Object(a.a)({},t),window.__store=e),e}}}()},113:function(e,t,n){e.exports=n(273)},263:function(e,t,n){var a={};window.__config=a,e.exports=a},264:function(e,t,n){},265:function(e,t,n){},266:function(e,t,n){},267:function(e,t,n){},268:function(e,t,n){},269:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){},272:function(e,t,n){},273:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(40),o=n.n(c),u=n(25),l=n(106),s=n(16),i=n(47),E=n(26),f=(n(264),n(5)),m=n(46),d=n(44),p=n(9),S=n(31),_=Object(S.a)((function(e){return e.get(d.a)}),(function(e){return e.get(p.b.IS_TEMPLATE_WORKING)})),b=function(){var e=Object(s.useSelector)(_),t=Object(s.useDispatch)();return Object(a.useEffect)((function(){var e;e=!0,t(Object(m.a)(e))}),[]),{isLoading:null===e,isSuccess:!!e,isFailure:!e&&null!==e}},v=(n(265),function(e){return r.a.createElement("div",{className:"Logo ".concat(e.className)},r.a.createElement("span",{className:"Logo-word1"},"Zaplanuj"),r.a.createElement("span",{className:"Logo-word2"},"Jedzonko"))});v.defaultProps={className:""};var I=v,O=(n(266),function(e){return r.a.createElement("header",{className:"Header ".concat(e.className)},r.a.createElement(I,null))});O.defaultProps={className:""};var T=O,N=(n(267),function(e){return r.a.createElement(u.b,{to:"/".concat(e.url),className:"SidebarMenuItem ".concat(e.className)},e.name)});N.defaultProps={className:"",url:"/",name:"UZUPELNIJ NAME PLACEHOLDER"};var R=N,h=(n(268),function(e){return r.a.createElement("nav",{className:"Sidebar ".concat(e.className)},r.a.createElement(f.Route,null,r.a.createElement(R,{name:"Pulpit",url:"desktop"}),r.a.createElement(R,{name:"Przepisy",url:"recipes"})))});h.defaultProps={className:"",name:""};var w=h,j=(n(269),function(e){return r.a.createElement("main",{className:"Desktop ".concat(e.className)},r.a.createElement("h2",null,"NASZ PIEKNY Desktop"),r.a.createElement("input",{type:"text",placeholder:"kim ty jestes czlowieku"}),r.a.createElement("button",{type:"submit"},"ZAPISZSZZ"),r.a.createElement("div",null,"(to nie dziala, no problemo)"))});j.defaultProps={className:""};var C=j,P=n(30),g=n(45),A=n(6),L=function(e){return e.get(g.a)},k=Object(S.a)(L,(function(e){return e.get(A.b.IS_FETCHED)})),x=Object(S.a)(L,(function(e){return e.get(A.b.RECIPES)})),y=(n(270),function(e){var t=Object(s.useDispatch)();Object(a.useEffect)((function(){t(Object(P.a)("asd"))}),[]);var n=Object(s.useSelector)(k);console.log(n);var c,o=Object(s.useSelector)(x);return console.log(o),c=o?o.Recipes.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.nazwa),r.a.createElement("td",null,e.skladniki),r.a.createElement("td",null,e.przepis))})):null,r.a.createElement("div",{className:"RecipeList ".concat(e.className)},r.a.createElement("div",null,r.a.createElement("h3",null,e.name),r.a.createElement("button",{className:"add"},"+")),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"NAZWA"),r.a.createElement("th",null,"OPIS"),r.a.createElement("th",null,"AKCJE"))),r.a.createElement("tbody",null,c)))});y.defaultProps={className:"",name:"Lista przepis\xf3w"};var M=y,F=(n(271),function(e){return r.a.createElement("main",{className:"Plans ".concat(e.className)},"PLANS")});F.defaultProps={className:""};var W=F,K=(n(272),function(){return r.a.createElement("span",{className:"App__loader"},"Loading kurde bele...")}),G=function(){return r.a.createElement("div",{className:"HolyGrail"},r.a.createElement(T,null),r.a.createElement("div",{className:"HolyGrail-body"},r.a.createElement(f.Switch,null,r.a.createElement(f.Route,{exact:!0,path:"/"},r.a.createElement(C,null)),r.a.createElement(f.Route,{exact:!0,path:"/desktop"},r.a.createElement(C,null)),r.a.createElement(f.Route,{exact:!0,path:"/recipes"},r.a.createElement(M,null)),r.a.createElement(f.Route,{exact:!0,path:"/plans"},r.a.createElement(W,null))),r.a.createElement(w,null)))},H=function(){return r.a.createElement("span",{className:"App__failure"},"Cos sie zepsuo")},U=function(){var e=b(),t=e.isLoading,n=e.isSuccess,a=e.isFailure;return r.a.createElement("div",{className:"App"},t&&K(),n&&G(),a&&H())};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=document.getElementById("root");function z(){return r.a.createElement(s.Provider,{store:l.a},r.a.createElement(E.ConnectedRouter,{history:i.b},r.a.createElement(u.a,null,r.a.createElement(U,null))))}o.a.render(r.a.createElement(z,null),D),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},274:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),c=n(64),o=n(13),u=n(28),l=n.n(u),s=n(9),i=n(46),E=r.a.mark(m),f=[r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.c)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.e)(s.a.SET_IS_TEMPLATE_WORKING,m);case 2:case"end":return e.stop()}}),e)})));case 2:case"end":return e.stop()}}),e)}))];function m(e){var t;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.payload,n.prev=1,!l()(t,"value",!1)){n.next=11;break}return console.log("SAGA IS ALSO WORKING!"),n.next=7,Object(o.b)(2e3);case 7:return n.next=9,Object(o.d)(Object(i.b)());case 9:n.next=12;break;case 11:throw new Error("Something went terribly wrong :|");case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(1),console.log("Wild error appeared!",n.t0);case 17:case 18:case"end":return n.stop()}}),E,null,[[1,14]])}var d=n(6),p=n(30),S=r.a.mark(b),_=[r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.c)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.f)(d.a.RECIPES_FETCH,b);case 2:case"end":return e.stop()}}),e)})));case 2:case"end":return e.stop()}}),e)}))];function b(e){var t,n,a;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=e.payload,r.prev=1,console.log("loading"),!t){r.next=19;break}if(!t.apiKey){r.next=16;break}return r.next=8,fetch("/przepisy.json");case 8:return n=r.sent,r.next=11,n.json();case 11:return a=r.sent,r.next=14,Object(o.d)(Object(p.c)(a));case 14:r.next=17;break;case 16:throw Error("NO API KEY GIVEN");case 17:r.next=20;break;case 19:throw Error("NO PARAMS?");case 20:r.next=27;break;case 22:return r.prev=22,r.t0=r.catch(1),console.log(r.t0),r.next=27,Object(o.d)(Object(p.b)(r.t0));case 27:return r.prev=27,console.log("receipes tried to fetch"),r.finish(27);case 30:case"end":return r.stop()}}),S,null,[[1,22,27,30]])}t.default=function(e){return r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[].concat(Object(c.a)(f),Object(c.a)(_)),e.next=3,Object(o.a)(t.map(o.c));case 3:case"end":return e.stop()}}),e)}))}},30:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u}));var a=n(6),r=n(19),c=function(e){return Object(r.action)(a.a.RECIPES_FETCH_SUCCESS,{recipes:e})},o=function(e){return Object(r.action)(a.a.RECIPES_FETCH_FAILURE,{errors:e})},u=function(e){return Object(r.action)(a.a.RECIPES_FETCH,{apiKey:e})}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="TemplateModel"},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="RecipesModel"},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var a=n(19),r=n(9),c=function(e){return Object(a.action)(r.a.SET_IS_TEMPLATE_WORKING,{value:e})},o=function(){return Object(a.action)(r.a.SET_IS_TEMPLATE_WORKING_SUCCESS)}},47:function(e,t,n){"use strict";n.d(t,"b",(function(){return R}));var a=n(23),r=n(108),c=n(109),o=n(15),u=n(26),l=n(10),s=n(65),i=n(112),E=n(111),f=n(44),m=n(9),d=Object(o.fromJS)({[m.b.IS_TEMPLATE_WORKING]:null}),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.a.SET_IS_TEMPLATE_WORKING_SUCCESS:return e.set(m.b.IS_TEMPLATE_WORKING,!0);case m.a.SET_IS_TEMPLATE_WORKING_FAILURE:return e.set(m.b.IS_TEMPLATE_WORKING,!1);default:return e}},S=n(45),_=n(6),b=n(28),v=n.n(b),I=Object(o.fromJS)({[_.b.IS_FETCHED]:null,[_.b.RECIPES]:null}),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.a.RECIPES_FETCH_SUCCESS:var n=v()(t,["payload","recipes"],[]);return e.set(_.b.IS_FETCHED,!0).set(_.b.RECIPES,n);case _.a.RECIPES_FETCH_FAILURE:return e.set(_.b.IS_FETCHED,!1);default:return e}},T=function(e,t,n){var a=Object(i.a)({[f.a]:p,[S.a]:O},e);return a.router=Object(u.connectRouter)(t),Object(E.combineReducers)(a)},N=Object(s.b)({}),R=Object(l.a)();t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,l=n(274).default(t),i=[N];i.push(Object(u.routerMiddleware)(R));var E=[a.a.apply(void 0,i)],f="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:c.composeWithDevTools,m=T({},R),d=Object(a.d)(Object(r.a)(m),Object(o.fromJS)(e),f.apply(void 0,E));return d.runSaga=N.run,d.asyncReducers={},d.close=function(){return d.dispatch(s.a)},d.runSaga(l),d}},6:function(e,t,n){"use strict";var a,r;n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),function(e){e.IS_FETCHED="isFetched",e.RECIPES="recipes"}(a||(a={})),function(e){e.RECIPES_FETCH="RECIPES",e.RECIPES_FETCH_SUCCESS="RECIPES_SUCCESS",e.RECIPES_FETCH_FAILURE="RECIPES_FAILURE"}(r||(r={}))},9:function(e,t,n){"use strict";var a,r;n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),function(e){e.IS_TEMPLATE_WORKING="isTemplateWorking"}(a||(a={})),function(e){e.SET_IS_TEMPLATE_WORKING="SET_IS_TEMPLATE_WORKING",e.SET_IS_TEMPLATE_WORKING_SUCCESS="SET_IS_TEMPLATE_WORKING_SUCCESS",e.SET_IS_TEMPLATE_WORKING_FAILURE="SET_IS_TEMPLATE_WORKING_FAILURE"}(r||(r={}))}},[[113,1,2]]]);
//# sourceMappingURL=main.85a16d58.chunk.js.map