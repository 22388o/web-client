(this["webpackJsonpshockwallet-web"]=this["webpackJsonpshockwallet-web"]||[]).push([[13],{144:function(e,t,a){},539:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),s=a(6),r=a(8),l=a(0),i=a.n(l),u=a(117),o=a.n(u),b=a(116),p=a(33),d=a(12),m=a(1),f=a(280),O=a(118),v=a.n(O),j=(a(119),a(133)),h=a(34),k=(a(144),function(e){var t=e.icon,a=void 0===t?"link":t,n=e.text;return e.visible?i.a.createElement("div",{className:"notice-bar"},i.a.createElement("i",{className:"fas fa-".concat(a)}),n):null});t.default=function(e){var t,a=e.sharedPostId,n=e.sharerPublicKey,u=e.sharerUsername,O=e.sharerAvatar,E=e.sharedTimestamp,w=e.isOnlineNode,N=e.postID,g=e.postPublicKey,x=e.pinned,y=Object(p.b)(),C=Object(l.useState)(!0),I=Object(r.a)(C,2),P=I[0],K=I[1],V=Object(l.useState)(null),D=Object(r.a)(V,2),S=D[0],J=D[1],L=Object(l.useState)(null),A=Object(r.a)(L,2),T=A[0],U=A[1];Object(l.useEffect)((function(){Object(m.h)({path:"posts/".concat(a,"/tipCounter"),gunPointer:Object(m.g)(n),callback:function(e){y(Object(d.l)({postID:a,data:{tipCounter:e}}))}}),Object(m.h)({path:"posts/".concat(a,"/tipValue"),gunPointer:Object(m.g)(n),callback:function(e){y(Object(d.l)({postID:a,data:{tipValue:e}}))}})}),[y,a,n]);var q=Object(l.useCallback)(Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(Object(d.h)({publicKey:g,id:N}));case 2:t=e.sent,U(t);case 4:case"end":return e.stop()}}),e)}))),[y,N,g]),z=Object(l.useCallback)(Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(Object(d.g)({publicKey:g,id:N}));case 2:t=e.sent,J(t),K(!1),Object(j.a)([t],!1);case 6:case"end":return e.stop()}}),e)}))),[y,N,g]),B=Object(l.useCallback)(Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(K(!0),g){e.next=3;break}return e.abrupt("return");case 3:q(),z();case 5:case"end":return e.stop()}}),e)}))),[z,q,g]);return Object(l.useEffect)((function(){b.a.rebuild(),B()}),[B]),i.a.createElement("div",{className:"post shared-post"},i.a.createElement(k,{text:"Linked post",visible:x}),i.a.createElement("div",{className:"head"},i.a.createElement("div",{className:"user"},i.a.createElement("div",{className:"av",style:{backgroundImage:"url(".concat(O,")")}}),i.a.createElement("div",{className:"details"},i.a.createElement("p",null,u),i.a.createElement("p",null,o.a.utc(E).fromNow())))),i.a.createElement("div",{className:"shared-content"},P?i.a.createElement(h.a,{text:"Loading Post..."}):S&&T?i.a.createElement(f.default,{id:S.id,timestamp:S.date,avatar:T.avatar?"data:image/png;base64,".concat(T.avatar):v.a,tipCounter:S.tipCounter,tipValue:S.tipValue,publicKey:g,contentItems:S.contentItems,username:null!==(t=T.displayName)&&void 0!==t?t:T.alias,isOnlineNode:w,shared:!0,pinned:x}):null))}}}]);
//# sourceMappingURL=13.3772bce2.chunk.js.map