(this["webpackJsonpshockwallet-web"]=this["webpackJsonpshockwallet-web"]||[]).push([[0],{1:function(e,t,n){"use strict";n.d(t,"c",(function(){return O})),n.d(t,"f",(function(){return v})),n.d(t,"i",(function(){return E})),n.d(t,"h",(function(){return _})),n.d(t,"e",(function(){return m})),n.d(t,"d",(function(){return P})),n.d(t,"g",(function(){return w})),n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return A}));var r=n(4),a=n(3),o=n.n(a),c=n(6),u=n(9),i=n(18),s=n.n(i),l=(n(13),n(71),function(e){try{return JSON.parse(e)}catch(t){return null}}(Object({NODE_ENV:"production",PUBLIC_URL:"/web-client",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PEERS)),p=l||["https://gun.shock.network:8765/gun"],d=function(e){return new Promise((function(t,n){setTimeout((function(){t(!0)}),e)}))},f=function(e){for(var t="",n=function(){var e=Math.floor(62*Math.random());return e<10?e:e<36?String.fromCharCode(e+55):String.fromCharCode(e+61)};t.length<e;)t+=n();return t},g=function(e){var t=Object(u.a)(e,2),n=t[0];return t[1]&&"_"!==n&&"#"!==n},b=function e(t){try{if(console.log("Incomplete Gun Response Check:",typeof t,t),null===t||void 0===t)return!0;if(Array.isArray(t))return!t.length||t.reduce((function(t,n){return t||e(n)}));if("object"===typeof t){if(!t||"number"===typeof t.err)return!0;var n=JSON.stringify(t);if(console.log(t,n),"{}"===n)return!0;var r=Object.entries(t).filter(g);if(console.log(r,null===r||void 0===r?void 0:r.length),!(null===r||void 0===r?void 0:r.length))return!0}return!1}catch(a){return console.warn("An error has occurred:",a),!0}},h=function(e){var t=e.path,n=e.gunPointer;return t.split("/").reduce((function(e,t){return e.get(t)}),n)},O=s()(p),v=function e(t){var n=t.path,r=void 0===n?"":n,a=t.retryDelay,u=void 0===a?500:a,i=t.retryLimit,s=void 0===i?3:i,l=t.retryCondition,p=void 0===l?b:l,f=t.gunPointer,g=void 0===f?O:f,v=t.method,E=void 0===v?"once":v,_=t._retryCount,m=void 0===_?0:_,P=t._fallbackResult;return new Promise((function(t){m>s?t(P):(m>0&&console.log("Retrying event:",r,"".concat(m,"/").concat(s)),h({path:r,gunPointer:g})[E](function(){var n=Object(c.a)(o.a.mark((function n(a){var c;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log(r+" Response:",a),!p||!p(a)){n.next=9;break}return n.next=4,d(u);case 4:return n.next=6,e({path:r,retryDelay:u,retryLimit:s,retryCondition:p,gunPointer:g,_retryCount:m+1,_fallbackResult:a});case 6:return c=n.sent,t(c),n.abrupt("return");case 9:t(a);case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()))}))},E=function(e){var t=e.path,n=void 0===t?"":t,r=e.data,a=void 0===r?{}:r,o=e.gunPointer,c=void 0===o?O:o;return new Promise((function(e,t){var r=h({path:n,gunPointer:c}).set(a,(function(t){console.log(a),e(r)}))}))},_=function(e){var t=e.path,n=void 0===t?"":t,r=e.gunPointer,a=void 0===r?O:r,o=e.callback;return h({path:n,gunPointer:a}).on((function(e){o(e)}))},m=function(){return new Promise((function(e,t){var n=f(10),a=f(10);O.user().create(n,a,(function(o){if(o.err)return console.error("An error has occurred while initializing a new user"),void t({field:"gundb",message:"An error has occurred while initializing a new user",_error:o.err,_event:o});e(Object(r.a)({},o,{alias:n,pass:a}))}))}))},P=function(e,t){return new Promise((function(n,r){O.user().auth(e,t,(function(e){n(e)}))}))},w=function(e){return O.user(e)},y="$$_SHOCKWALLET__ENCRYPTED__",A="$$__SHOCKWALLET__MSG__"},11:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return g})),n.d(t,"h",(function(){return b})),n.d(t,"i",(function(){return h})),n.d(t,"g",(function(){return O})),n.d(t,"f",(function(){return v}));var r=n(4),a=n(3),o=n.n(a),c=n(6),u=n(9),i=n(1),s={LOAD_USER_WALL:"wall/load",LOAD_USER_WALL_TOTAL_PAGES:"wall/loadTotalPages",RESET_USER_WALL:"wall/reset",UPDATE_WALL_POST:"wallPost/update",RESET_USER_DATA:"user/reset",LOAD_USER_DATA:"user/load",LOAD_USER_AVATAR:"avatar/load",UPDATE_USER_PROFILE:"user/update"},l=function(e){var t=Object(u.a)(e,2),n=t[0];return t[1]&&"_"!==n&&"#"!==n},p=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){var r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.c.user(e),t.next=3,Object(i.f)({path:"profileBinary/avatar",gunPointer:r});case 3:return a=t.sent,n({type:s.UPDATE_USER_PROFILE,data:{avatar:a}}),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){var r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.c.user(e),t.next=3,Object(i.f)({path:"profileBinary/header",gunPointer:r});case 3:return a=t.sent,n({type:s.UPDATE_USER_PROFILE,data:{header:a}}),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){var r,a,c,l,p,d,f,g,b;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.c.user(e),t.next=3,Promise.all([Object(i.f)({path:"Profile/bio",gunPointer:r}),Object(i.f)({path:"Profile/displayName",gunPointer:r}),Object(i.f)({path:"alias",gunPointer:r}),Object(i.f)({path:"Profile/lastSeenApp",gunPointer:r}),Object(i.f)({path:"Profile/lastSeenNode",gunPointer:r})]);case 3:return a=t.sent,c=Object(u.a)(a,5),l=c[0],p=c[1],d=c[2],f=c[3],g=c[4],b={bio:l,displayName:p,alias:d,lastSeenNode:g,lastSeenApp:f},console.log("User:",b),n({type:s.LOAD_USER_DATA,data:b}),t.abrupt("return",b);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){var a,p,d,f,g,b;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=i.c.user(e),p="posts",t.next=5,Object(i.f)({path:p,gunPointer:a,retryLimit:5,retryDelay:1e3});case 5:return d=t.sent,console.log("Posts:",d),f=Object.entries(null!==d&&void 0!==d?d:{}).filter(l),t.next=10,Promise.all(f.map(function(){var e=Object(c.a)(o.a.mark((function e(t,n){var s,d,f,g,b,h,O;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object(u.a)(t,1),d=s[0],e.next=3,Object(i.f)({path:"".concat(p,"/").concat(d),gunPointer:a,retryLimit:5,retryDelay:1e3});case 3:return f=e.sent,g="".concat(p,"/").concat(d,"/contentItems"),e.next=7,Object(i.f)({path:g,gunPointer:a,retryLimit:5,retryDelay:500});case 7:return b=e.sent,h=Object.entries(b).filter(l),e.next=11,Promise.all(h.map(function(){var e=Object(c.a)(o.a.mark((function e(t){var n,r,c,s,l,p,d,f,b,h,O,v,E,_;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(u.a)(t,1),r=n[0],e.next=3,Object(i.f)({path:"".concat(g,"/").concat(r,"/type"),gunPointer:a});case 3:if("text/paragraph"!==(c=e.sent)){e.next=9;break}return e.next=7,Object(i.f)({path:"".concat(g,"/").concat(r,"/text"),gunPointer:a});case 7:return s=e.sent,e.abrupt("return",{text:s,type:c});case 9:if("video/embedded"!==c){e.next=18;break}return e.next=12,Promise.all([Object(i.f)({path:"".concat(g,"/").concat(r,"/magnetURI"),gunPointer:a}),Object(i.f)({path:"".concat(g,"/").concat(r,"/width"),gunPointer:a}),Object(i.f)({path:"".concat(g,"/").concat(r,"/height"),gunPointer:a})]);case 12:return l=e.sent,p=Object(u.a)(l,3),d=p[0],f=p[1],b=p[2],e.abrupt("return",{magnetURI:d,width:f,height:b,type:c});case 18:if("image/embedded"!==c){e.next=27;break}return e.next=21,Promise.all([Object(i.f)({path:"".concat(g,"/").concat(r,"/magnetURI"),gunPointer:a}),Object(i.f)({path:"".concat(g,"/").concat(r,"/width"),gunPointer:a}),Object(i.f)({path:"".concat(g,"/").concat(r,"/height"),gunPointer:a})]);case 21:return h=e.sent,O=Object(u.a)(h,3),v=O[0],E=O[1],_=O[2],e.abrupt("return",{magnetURI:v,width:E,height:_,type:c});case 27:return e.abrupt("return",{text:"Unsupported media type",type:c});case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 11:return O=e.sent,e.abrupt("return",Object(r.a)({},null!==f&&void 0!==f?f:{},{id:d,contentItems:null!==O&&void 0!==O?O:[]}));case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 10:return g=t.sent,console.log("User wall",g),b=null===g||void 0===g?void 0:g.sort((function(e,t){return t.date-e.date})),n({type:s.LOAD_USER_WALL,data:{posts:b,page:0}}),t.abrupt("return",g);case 17:t.prev=17,t.t0=t.catch(0),console.error(t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(t){t({type:s.UPDATE_USER_PROFILE,data:e})}},h=function(e){return function(t){t({type:s.UPDATE_WALL_POST,data:e})}},O=function(){return function(e){e({type:s.RESET_USER_WALL})}},v=function(){return function(e){e({type:s.RESET_USER_DATA})}}},22:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(3),a=n.n(r),o=n(4),c=n(9),u=n(6),i=n(13),s=n.n(i),l=n(1),p={LOAD_PAYMENT_REQUEST:"paymentRequest/load",RESET_PAYMENT_REQUEST:"paymentRequest/reset"},d=function(e){var t=e.senderPair,n=e.recipientPublicKey,r=e.amount,i=e.metadata;return function(){var e=Object(u.a)(a.a.mark((function e(u){var d,f,g,b,h,O,v,E,_,m,P,w,y,A,j,S,R;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.d)(t.alias,t.pass);case 2:return g=e.sent,b=l.c.user(n),e.next=6,Object(l.f)({path:"epub",gunPointer:b});case 6:return h=e.sent,e.next=9,s.a.secret(h,g.sea);case 9:return O=e.sent,e.next=12,Object(l.f)({path:"currentOrderAddress",gunPointer:b});case 12:return v=e.sent,console.log("Order Address:",v),e.next=16,Promise.all([s.a.encrypt(l.b+r.toString(),O),s.a.encrypt(l.b+"Tipped user!",O)]);case 16:return E=e.sent,_=Object(c.a)(E,2),m=_[0],P=_[1],w=Object(o.a)({amount:l.a+m,from:g.sea.pub,memo:l.a+P,timestamp:Date.now()},i),console.log("Order:",w),e.next=24,Object(l.i)({path:"orderNodes/".concat(v),data:w});case 24:return y=e.sent,console.log("New Order:",y,y._["#"].split("/").slice(-1)[0]),A=y._["#"].split("/").slice(-1)[0],console.log("New Order ID:",A,"orderToResponse/".concat(A)),e.next=30,Object(l.f)({path:"orderToResponse/".concat(A),gunPointer:l.c.user(n),method:"on"});case 30:return e.next=32,Object(l.f)({path:"orderToResponse/".concat(A),gunPointer:l.c.user(n)});case 32:return j=e.sent,console.log("Encrypted Order:",j.response,null===(d=j.response)||void 0===d?void 0:d.toString()),e.next=36,s.a.decrypt(j.response.replace(l.a,""),O);case 36:if(S=e.sent,R={response:null===S||void 0===S||null===(f=S.replace)||void 0===f?void 0:f.call(S,l.b,""),type:j.type},console.log("[ORDER] Decrypted order:",R),"err"!==R.type){e.next=41;break}throw{field:"order",message:"An error has occurred while retrieving the order",data:R.response.replace(l.a,"")};case 41:return u({type:p.LOAD_PAYMENT_REQUEST,data:R.response.replace(l.a,"")}),e.abrupt("return",R.response.replace(l.a,""));case 43:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(){return function(e){e({type:p.RESET_PAYMENT_REQUEST})}}},35:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.text,n=void 0===t?"Loading...":t;return a.a.createElement("div",{className:"loading-wall"},a.a.createElement("div",{className:"loading-wall-icon"},a.a.createElement("span",{className:"loading-circle loading-circle-1"}),a.a.createElement("span",{className:"loading-circle loading-circle-2"}),a.a.createElement("span",{className:"loading-circle loading-circle-3"}),a.a.createElement("span",{className:"loading-circle loading-circle-4"}),a.a.createElement("span",{className:"loading-circle loading-circle-5"})),a.a.createElement("div",{className:"loading-wall-text"},n))}},36:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=36},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return i}));var r=n(3),a=n.n(r),o=n(6),c=n(1),u={LOAD_GUN_PAIR:"auth/loadPair"},i=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,o,i,s,l,p,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("shocknet/gun/alias"),r=localStorage.getItem("shocknet/gun/pass"),o=localStorage.getItem("shocknet/gun/pub"),i=localStorage.getItem("shocknet/gun/epub"),n&&r){e.next=19;break}return console.log("[Gun] Keypair not found, generating a new one..."),e.next=8,Object(c.e)();case 8:return s=e.sent,localStorage.setItem("shocknet/gun/alias",s.alias),localStorage.setItem("shocknet/gun/pass",s.pass),localStorage.setItem("shocknet/gun/pub",s.pub),l=c.c.user(s.pub),e.next=15,Object(c.f)({path:"epub",gunPointer:l});case 15:return p=e.sent,localStorage.setItem("shocknet/gun/epub",p),t({type:u.LOAD_GUN_PAIR,data:s}),e.abrupt("return");case 19:return console.log("[Gun] Keypair exists!"),d={pub:o,alias:n,epub:i,pass:r},console.log("[Gun] User Authenticated"),t({type:u.LOAD_GUN_PAIR,data:d}),e.abrupt("return",d);case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},46:function(e,t,n){e.exports=n(73)},55:function(e,t,n){},56:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(16),c=n.n(o),u=n(32),i=n(21),s=(n(55),n(5)),l=n(33),p=(n(56),n(35)),d=a.a.lazy((function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,453))}));var f=Object(s.h)((function(){return a.a.createElement("div",{className:"App"},a.a.createElement(r.Suspense,{fallback:a.a.createElement(p.a,null)},a.a.createElement(s.d,null,a.a.createElement(s.b,{path:"/user/:userId",component:d}),a.a.createElement(s.a,{to:"/user/qsgziGQS99sPUxV1CRwwRckn9cG6cJ3prbDsrbL7qko.oRbCaVKwJFQURWrS1pFhkfAzrkEvkQgBRIUz9uoWtrg"}))),a.a.createElement(l.a,{backgroundColor:"#3a4d67",effect:"solid"}))})),g=n(10),b=n(28),h=n(23),O=n(4),v=n(11),E={wall:{posts:[],page:-1,totalPages:0},profile:{}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.a.LOAD_USER_WALL:var n=t.data;return Object(O.a)({},e,{wall:Object(O.a)({},e.wall,{posts:[].concat(Object(h.a)(e.wall.posts),Object(h.a)(n.posts)),page:n.page})});case v.a.LOAD_USER_WALL_TOTAL_PAGES:var r=t.data;return console.log("Total pages:",r),Object(O.a)({},e,{wall:Object(O.a)({},e.wall,{totalPages:r})});case v.a.LOAD_USER_DATA:var a=t.data;return Object(O.a)({},e,{profile:a});case v.a.LOAD_USER_AVATAR:var o=t.data;return Object(O.a)({},e,{profile:Object(O.a)({},e.profile,{avatar:o})});case v.a.UPDATE_USER_PROFILE:var c=t.data;return Object(O.a)({},e,{profile:Object(O.a)({},e.profile,{},c)});case v.a.UPDATE_WALL_POST:var u=t.data;return Object(O.a)({},e,{wall:Object(O.a)({},e.wall,{posts:e.wall.posts.map((function(e){return u.postID===e.id?Object(O.a)({},e,{},u.data):e}))})});case v.a.RESET_USER_WALL:return Object(O.a)({},e,{wall:E.wall});default:return e}},m=n(38),P={pair:{}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.a.LOAD_GUN_PAIR:var n=t.data;return Object(O.a)({},e,{pair:n});default:return e}},y=n(22),A={paymentRequest:null},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.a.LOAD_PAYMENT_REQUEST:var n=t.data;return Object(O.a)({},e,{paymentRequest:n});case y.a.RESET_PAYMENT_REQUEST:return Object(O.a)({},e,{paymentRequest:null});default:return e}},S=Object(g.c)({user:_,auth:w,transaction:j}),R=window.__REDUX_DEVTOOLS_EXTENSION__?Object(g.e)(S,Object(g.d)(Object(g.a)(b.a),window.__REDUX_DEVTOOLS_EXTENSION__())):Object(g.e)(S,Object(g.a)(b.a));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(u.a,{store:R},a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a,{basename:"/web-client"},a.a.createElement(f,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,3]]]);
//# sourceMappingURL=main.d306ae46.chunk.js.map