(this["webpackJsonpshockwallet-web"]=this["webpackJsonpshockwallet-web"]||[]).push([[6,7],{150:function(e,t,a){"use strict";a.r(t);var c=a(9),n=a(0),l=a.n(n),r=a(119),o=a.n(r),i=a(33),s=a(32),u=a(258),m=a(255),d=a.n(m),p=a(14),b=(a(87),a(1)),f=function(e){var t=e.tipCounter,a=e.tipValue,c=e.zoomed;return a>0?l.a.createElement("div",{className:"ribbon-container",style:{opacity:c?0:1}},l.a.createElement("p",{className:"ribbon-title"},"Total Tips"),l.a.createElement("p",{className:"ribbon-value"},t," ",1===t?"Tip":"Tips")):null},v=function(e){var t=e.id,a=e.item,c=e.index,n=e.postId,r=e.tipValue,o=e.tipCounter;return l.a.createElement("div",{className:"media-container"},l.a.createElement("div",{className:"video-container",style:{cursor:"pointer"}},l.a.createElement("video",{className:"torrent-video torrent-video-".concat(n,"-").concat(t),"data-torrent":a.magnetURI,"data-file-key":c,controls:!0,"data-played":"false"}),l.a.createElement(f,{tipCounter:o,tipValue:r})))},O=a(473),j=(a(256),function(e){var t=e.id,a=e.item,r=e.index,o=e.postId,i=e.tipValue,s=e.tipCounter,u=Object(n.useState)(!1),m=Object(c.a)(u,2),d=m[0],p=m[1],b=Object(n.useState)(!1),v=Object(c.a)(b,2),j=v[0],E=v[1],g=Object(n.useState)(!0),N=Object(c.a)(g,2),k=N[0],y=N[1],h=Object(n.useState)(null),C=Object(c.a)(h,2),w=C[0],I=C[1],S=Object(n.useCallback)((function(e){if(clearTimeout(w),p(e),!e&&j){E(!1);var t=setTimeout((function(){y(!0)}),200);I(t)}e&&y(!1)}),[w,j]);return l.a.createElement("div",{className:"media-container"},l.a.createElement(O.a,{isZoomed:d,onZoomChange:S,overlayBgColorStart:"#16191c00",overlayBgColorEnd:"#16191c"},l.a.createElement("img",{className:"torrent-img torrent-img-".concat(o,"-").concat(t),alt:"Post Media","data-torrent":a.magnetURI,"data-file-key":r,style:{opacity:k?1:0}}),l.a.createElement("img",{className:"enlarged-img enlarged-img-".concat(o,"-").concat(t),alt:"Post Media","data-file-key":r,onLoad:function(){E(!0)},style:{opacity:j?1:0},src:decodeURIComponent(a.magnetURI.split("ws=")[1])}),l.a.createElement(f,{tipCounter:s,tipValue:i,zoomed:d})))}),E=a(24);t.default=function(e){var t=e.id,a=e.timestamp,r=e.avatar,m=e.tipCounter,f=e.tipValue,O=e.publicKey,g=e.openTipModal,N=e.contentItems,k=void 0===N?{}:N,y=e.username,h=e.isOnlineNode,C=Object(s.b)(),w=Object(u.useEmblaCarousel)({slidesToScroll:1,align:"center"}),I=Object(c.a)(w,2),S=I[0],x=I[1],P=Object(n.useState)(0),T=Object(c.a)(P,2),V=T[0],D=T[1],L=Object(n.useState)(0),A=Object(c.a)(L,2),K=A[0],M=A[1],R=function(e,a){var n=Object(c.a)(e,2),r=n[0],o=n[1];return"text/paragraph"===o.type?l.a.createElement("p",{key:r},o.text):"image/embedded"===o.type?l.a.createElement(j,{id:r,item:o,index:a,postId:t,tipCounter:m,tipValue:f,key:"".concat(t,"-").concat(a)}):"video/embedded"===o.type?l.a.createElement(v,{id:r,item:o,index:a,postId:t,tipCounter:m,tipValue:f,key:"".concat(t,"-").concat(a)}):null},U=Object(n.useCallback)((function(){x&&x.canScrollNext()&&x.scrollNext()}),[x]),z=Object(n.useCallback)((function(){x&&x.canScrollPrev()&&x.scrollPrev()}),[x]),B=Object(n.useCallback)((function(e){if(0!==V){var t=e.key;"ArrowRight"===t&&U(),"ArrowLeft"===t&&z()}}),[V,z,U]),J=Object(n.useCallback)((function(){M(x.selectedScrollSnap())}),[x,M]);Object(n.useEffect)((function(){Object(b.h)({path:"posts/".concat(t,"/tipCounter"),gunPointer:Object(b.g)(O),callback:function(e){C(Object(p.k)({postID:t,data:{tipCounter:e}}))}}),Object(b.h)({path:"posts/".concat(t,"/tipValue"),gunPointer:Object(b.g)(O),callback:function(e){C(Object(p.k)({postID:t,data:{tipValue:e}}))}})}),[C,t,O]),Object(n.useEffect)((function(){if(x)return x.on("scroll",J),D(x.scrollSnapList().length),window.addEventListener("keydown",B),function(){window.removeEventListener("keydown",B),x.off("scroll",J)}}),[x,V,B,J]);var Z=Object(n.useCallback)((function(){h&&g({targetType:"post",postID:t})}),[t,h,g]);return Object(n.useEffect)((function(){i.a.rebuild()}),[]),l.a.createElement("div",{className:"post"},l.a.createElement("div",{className:"head"},l.a.createElement("div",{className:"user"},l.a.createElement(E.b,{className:"av",to:"/".concat(O),style:{backgroundImage:"url(".concat(r,")")}}),l.a.createElement("div",{className:"details"},l.a.createElement(E.b,{to:"/".concat(O)},y),l.a.createElement("p",null,o.a.utc(a).fromNow())))),l.a.createElement("div",{className:"content"},Object.entries(k).filter((function(e){var t=Object(c.a)(e,2);return t[0],"text/paragraph"===t[1].type})).map(R),l.a.createElement("div",{className:"media-content-carousel"},V>1?l.a.createElement("div",{className:"media-carousel-controls-container"},l.a.createElement("div",{className:"media-carousel-arrow fas fa-angle-left",onClick:z}),l.a.createElement("div",{className:"media-carousel-pages"},Array.from({length:V}).map((function(e,t){return l.a.createElement("div",{className:d()({"media-carousel-page":!0,"active-carousel-page":K===t}),onClick:function(){return null===x||void 0===x?void 0:x.scrollTo(t)}})}))),l.a.createElement("div",{className:"media-carousel-arrow fas fa-angle-right",onClick:U})):null,l.a.createElement("div",{className:"media-content-root",ref:S},l.a.createElement("div",{className:"media-content-container"},Object.entries(k).filter((function(e){var t=Object(c.a)(e,2);return t[0],"text/paragraph"!==t[1].type})).map(R))))),l.a.createElement("div",{className:"actions"},l.a.createElement("div",{className:"icon-tip-btn","data-tip":"Tip this post",onClick:Z},l.a.createElement("div",{className:"tip-icon icon-thin-feed"}))))}},471:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a.n(c),l=a(7),r=a(9),o=a(0),i=a.n(o),s=a(119),u=a.n(s),m=a(33),d=a(32),p=a(14),b=a(1),f=a(150),v=a(254),O=a.n(v),j=(a(87),a(259)),E=a(35);t.default=function(e){var t,a=e.sharedPostId,c=e.sharerPublicKey,s=e.sharerUsername,v=e.sharerAvatar,g=e.sharedTimestamp,N=e.isOnlineNode,k=e.postID,y=e.postPublicKey,h=e.openTipModal,C=Object(d.b)(),w=Object(o.useState)(!0),I=Object(r.a)(w,2),S=I[0],x=I[1],P=Object(o.useState)(null),T=Object(r.a)(P,2),V=T[0],D=T[1],L=Object(o.useState)(null),A=Object(r.a)(L,2),K=A[0],M=A[1];Object(o.useEffect)((function(){Object(b.h)({path:"posts/".concat(a,"/tipCounter"),gunPointer:Object(b.g)(c),callback:function(e){C(Object(p.k)({postID:a,data:{tipCounter:e}}))}}),Object(b.h)({path:"posts/".concat(a,"/tipValue"),gunPointer:Object(b.g)(c),callback:function(e){C(Object(p.k)({postID:a,data:{tipValue:e}}))}})}),[C,a,c]);var R=Object(o.useCallback)(Object(l.a)(n.a.mark((function e(){var t,a,c,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x(!0),y){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Promise.all([Object(p.b)({publicKey:y,includeAvatar:!0}),Object(p.e)({id:k,gunPointer:Object(b.g)(y)})]);case 5:t=e.sent,a=Object(r.a)(t,2),c=a[0],l=a[1],M(c),D(l),x(!1),Object(j.a)([l],!1);case 13:case"end":return e.stop()}}),e)}))),[k,y]);return Object(o.useEffect)((function(){m.a.rebuild(),R()}),[R]),i.a.createElement("div",{className:"post shared-post"},i.a.createElement("div",{className:"head"},i.a.createElement("div",{className:"user"},i.a.createElement("div",{className:"av",style:{backgroundImage:"url(".concat(v,")")}}),i.a.createElement("div",{className:"details"},i.a.createElement("p",null,s),i.a.createElement("p",null,u.a.utc(g).fromNow())))),i.a.createElement("div",{className:"shared-content"},S?i.a.createElement(E.a,{text:"Loading Post..."}):V&&K?i.a.createElement(f.default,{id:V.id,timestamp:V.date,avatar:K.avatar?"data:image/png;base64,".concat(K.avatar):O.a,tipCounter:V.tipCounter,tipValue:V.tipValue,publicKey:y,openTipModal:h,contentItems:V.contentItems,username:null!==(t=K.displayName)&&void 0!==t?t:K.alias,isOnlineNode:N}):null))}},87:function(e,t,a){}}]);
//# sourceMappingURL=6.d00bbffc.chunk.js.map