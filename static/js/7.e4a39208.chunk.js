(this["webpackJsonpshockwallet-web"]=this["webpackJsonpshockwallet-web"]||[]).push([[7],{150:function(e,t,a){"use strict";a.r(t);var c=a(9),n=a(0),o=a.n(n),l=a(119),i=a.n(l),r=a(33),s=a(32),m=a(258),u=a(255),d=a.n(u),p=a(14),b=(a(87),a(1)),f=function(e){var t=e.tipCounter,a=e.tipValue,c=e.zoomed;return a>0?o.a.createElement("div",{className:"ribbon-container",style:{opacity:c?0:1}},o.a.createElement("p",{className:"ribbon-title"},"Total Tips"),o.a.createElement("p",{className:"ribbon-value"},t," ",1===t?"Tip":"Tips")):null},v=function(e){var t=e.id,a=e.item,c=e.index,n=e.postId,l=e.tipValue,i=e.tipCounter;return o.a.createElement("div",{className:"media-container"},o.a.createElement("div",{className:"video-container",style:{cursor:"pointer"}},o.a.createElement("video",{className:"torrent-video torrent-video-".concat(n,"-").concat(t),"data-torrent":a.magnetURI,"data-file-key":c,controls:!0,"data-played":"false"}),o.a.createElement(f,{tipCounter:i,tipValue:l})))},E=a(473),O=(a(256),function(e){var t=e.id,a=e.item,l=e.index,i=e.postId,r=e.tipValue,s=e.tipCounter,m=Object(n.useState)(!1),u=Object(c.a)(m,2),d=u[0],p=u[1],b=Object(n.useState)(!1),v=Object(c.a)(b,2),O=v[0],g=v[1],j=Object(n.useState)(!0),N=Object(c.a)(j,2),k=N[0],y=N[1],C=Object(n.useState)(null),h=Object(c.a)(C,2),w=h[0],I=h[1],S=Object(n.useCallback)((function(e){if(clearTimeout(w),p(e),!e&&O){g(!1);var t=setTimeout((function(){y(!0)}),200);I(t)}e&&y(!1)}),[w,O]);return o.a.createElement("div",{className:"media-container"},o.a.createElement(E.a,{isZoomed:d,onZoomChange:S,overlayBgColorStart:"#16191c00",overlayBgColorEnd:"#16191c"},o.a.createElement("img",{className:"torrent-img torrent-img-".concat(i,"-").concat(t),alt:"Post Media","data-torrent":a.magnetURI,"data-file-key":l,style:{opacity:k?1:0}}),o.a.createElement("img",{className:"enlarged-img enlarged-img-".concat(i,"-").concat(t),alt:"Post Media","data-file-key":l,onLoad:function(){g(!0)},style:{opacity:O?1:0},src:decodeURIComponent(a.magnetURI.split("ws=")[1])}),o.a.createElement(f,{tipCounter:s,tipValue:r,zoomed:d})))}),g=a(24);t.default=function(e){var t=e.id,a=e.timestamp,l=e.avatar,u=e.tipCounter,f=e.tipValue,E=e.publicKey,j=e.openTipModal,N=e.contentItems,k=void 0===N?{}:N,y=e.username,C=e.isOnlineNode,h=Object(s.b)(),w=Object(m.useEmblaCarousel)({slidesToScroll:1,align:"center"}),I=Object(c.a)(w,2),S=I[0],T=I[1],x=Object(n.useState)(0),V=Object(c.a)(x,2),P=V[0],L=V[1],R=Object(n.useState)(0),U=Object(c.a)(R,2),A=U[0],D=U[1],M=function(e,a){var n=Object(c.a)(e,2),l=n[0],i=n[1];return"text/paragraph"===i.type?o.a.createElement("p",{key:l},i.text):"image/embedded"===i.type?o.a.createElement(O,{id:l,item:i,index:a,postId:t,tipCounter:u,tipValue:f,key:"".concat(t,"-").concat(a)}):"video/embedded"===i.type?o.a.createElement(v,{id:l,item:i,index:a,postId:t,tipCounter:u,tipValue:f,key:"".concat(t,"-").concat(a)}):null},z=Object(n.useCallback)((function(){T&&T.canScrollNext()&&T.scrollNext()}),[T]),B=Object(n.useCallback)((function(){T&&T.canScrollPrev()&&T.scrollPrev()}),[T]),J=Object(n.useCallback)((function(e){if(0!==P){var t=e.key;"ArrowRight"===t&&z(),"ArrowLeft"===t&&B()}}),[P,B,z]),Z=Object(n.useCallback)((function(){D(T.selectedScrollSnap())}),[T,D]);Object(n.useEffect)((function(){Object(b.h)({path:"posts/".concat(t,"/tipCounter"),gunPointer:Object(b.g)(E),callback:function(e){h(Object(p.k)({postID:t,data:{tipCounter:e}}))}}),Object(b.h)({path:"posts/".concat(t,"/tipValue"),gunPointer:Object(b.g)(E),callback:function(e){h(Object(p.k)({postID:t,data:{tipValue:e}}))}})}),[h,t,E]),Object(n.useEffect)((function(){if(T)return T.on("scroll",Z),L(T.scrollSnapList().length),window.addEventListener("keydown",J),function(){window.removeEventListener("keydown",J),T.off("scroll",Z)}}),[T,P,J,Z]);var K=Object(n.useCallback)((function(){C&&j({targetType:"post",postID:t})}),[t,C,j]);return Object(n.useEffect)((function(){r.a.rebuild()}),[]),o.a.createElement("div",{className:"post"},o.a.createElement("div",{className:"head"},o.a.createElement("div",{className:"user"},o.a.createElement(g.b,{className:"av",to:"/".concat(E),style:{backgroundImage:"url(".concat(l,")")}}),o.a.createElement("div",{className:"details"},o.a.createElement(g.b,{to:"/".concat(E)},y),o.a.createElement("p",null,i.a.utc(a).fromNow())))),o.a.createElement("div",{className:"content"},Object.entries(k).filter((function(e){var t=Object(c.a)(e,2);return t[0],"text/paragraph"===t[1].type})).map(M),o.a.createElement("div",{className:"media-content-carousel"},P>1?o.a.createElement("div",{className:"media-carousel-controls-container"},o.a.createElement("div",{className:"media-carousel-arrow fas fa-angle-left",onClick:B}),o.a.createElement("div",{className:"media-carousel-pages"},Array.from({length:P}).map((function(e,t){return o.a.createElement("div",{className:d()({"media-carousel-page":!0,"active-carousel-page":A===t}),onClick:function(){return null===T||void 0===T?void 0:T.scrollTo(t)}})}))),o.a.createElement("div",{className:"media-carousel-arrow fas fa-angle-right",onClick:z})):null,o.a.createElement("div",{className:"media-content-root",ref:S},o.a.createElement("div",{className:"media-content-container"},Object.entries(k).filter((function(e){var t=Object(c.a)(e,2);return t[0],"text/paragraph"!==t[1].type})).map(M))))),o.a.createElement("div",{className:"actions"},o.a.createElement("div",{className:"icon-tip-btn","data-tip":"Tip this post",onClick:K},o.a.createElement("div",{className:"tip-icon icon-thin-feed"}))))}},87:function(e,t,a){}}]);
//# sourceMappingURL=7.e4a39208.chunk.js.map