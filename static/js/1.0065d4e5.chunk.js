(this["webpackJsonpshockwallet-web"]=this["webpackJsonpshockwallet-web"]||[]).push([[1],{117:function(e,t,a){},276:function(e,t,a){"use strict";a.r(t);var n=a(8),c=a(0),r=a.n(c),i=a(114),o=a.n(i),l=a(112),s=a(32),u=a(341),d=a(284),m=a.n(d),p=a(25),b=a(132),f=a(13),v=a(16),j=a(1),E=a(277),O=function(e){var t=e.tipCounter,a=e.tipValue,n=e.zoomed;return a>0?r.a.createElement("div",{className:"ribbon-container",style:{opacity:n?0:1}},r.a.createElement("p",{className:"ribbon-title"},"Total Tips"),r.a.createElement("p",{className:"ribbon-value"},t," ",1===t?"Tip":"Tips")):null},h=(a(331),a(117),function(e){var t=e.id,a=e.item,i=e.index,o=e.postId,l=e.tipValue,s=e.tipCounter,u=Object(c.useRef)(),d=Object(c.useState)(!1),m=Object(n.a)(d,2),p=(m[0],m[1],Object(b.a)({trackVisibility:!0,delay:100,onEnter:function(){u.current&&u.current.play()},onLeave:function(){u.current&&u.current.pause()}}).observe);return r.a.createElement("div",{className:"media-container"},r.a.createElement("div",{className:"video-container",style:{cursor:"pointer"},ref:p},r.a.createElement("video",{className:"torrent-video torrent-video-".concat(o,"-").concat(t," torrent-video-").concat(o," video-js vjs-default-skin"),"data-torrent":a.magnetURI,"data-file-key":i,controls:!0,"data-played":"false",ref:u}),r.a.createElement(O,{tipCounter:s,tipValue:l})))}),y=a(538),g=(a(332),function(e){var t=e.id,a=e.item,i=e.index,o=e.postId,l=e.tipValue,s=e.tipCounter,u=Object(c.useState)(!1),d=Object(n.a)(u,2),m=d[0],p=d[1],b=Object(c.useState)(!1),f=Object(n.a)(b,2),v=f[0],j=f[1],E=Object(c.useState)(!0),h=Object(n.a)(E,2),g=h[0],k=h[1],w=Object(c.useState)(null),N=Object(n.a)(w,2),C=N[0],I=N[1],x=Object(c.useCallback)((function(e){if(clearTimeout(C),p(e),!e&&v){j(!1);var t=setTimeout((function(){k(!0)}),200);I(t)}e&&k(!1)}),[C,v]);return r.a.createElement("div",{className:"media-container"},r.a.createElement(y.a,{isZoomed:m,onZoomChange:x,overlayBgColorStart:"#16191c00",overlayBgColorEnd:"#16191c"},r.a.createElement("img",{className:"torrent-img torrent-img-".concat(o,"-").concat(t),alt:"Post Media","data-torrent":a.magnetURI,"data-file-key":i,src:decodeURIComponent(a.magnetURI.replace(/.*(ws=)/gi,"")),style:{opacity:g?1:0}}),r.a.createElement("img",{className:"enlarged-img enlarged-img-".concat(o,"-").concat(t),alt:"Post Media","data-file-key":i,onLoad:function(){j(!0)},style:{opacity:v?1:0},src:decodeURIComponent(a.magnetURI.replace(/.*(ws=)/gi,""))}),r.a.createElement(O,{tipCounter:s,tipValue:l,zoomed:m})))}),k=a(2),w=a.n(k),N=a(6),C="".concat("https://webtorrent.shock.network","/rtmpapi/api/streams/live"),I=function(e){e.id;var t=e.item,a=(e.index,e.postId,e.tipValue),i=e.tipCounter,o=e.hideRibbon,l=e.width,s=Object(c.useRef)(null),u=Object(b.a)({trackVisibility:!0,delay:100,unobserveOnEnter:!0}),d=u.inView,m=u.observe,p=Object(c.useState)(!1),f=Object(n.a)(p,2),v=f[0],j=f[1],h={width:"100%"};return l&&(h.width=l),Object(c.useEffect)((function(){if(t&&d){var e=null,a=function(){var e=Object(N.a)(w.a.mark((function e(){var a,c,r,i,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t.magnetURI.replace(/.*(\/live\/)/,"").split("/index.m3u8"),c=Object(n.a)(a,1),r=c[0],e.next=4,fetch("".concat(C,"/").concat(r));case 4:return i=e.sent,e.next=7,i.json();case 7:if(e.sent.isLive){e.next=10;break}return e.abrupt("return",!1);case 10:return(o=Object(E.a)(s.current,{autoplay:!0,muted:!0,aspectRatio:"16:9"})).src({src:t.magnetURI,type:"application/x-mpegURL"}),o.play(),e.abrupt("return",!0);case 16:return e.prev=16,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();return a().then((function(t){t?j(!0):e=setInterval(Object(N.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a();case 2:if(!t.sent){t.next=7;break}return j(!0),clearInterval(e),t.abrupt("return");case 7:case"end":return t.stop()}}),t)}))),1e4)})),function(){clearInterval(e)}}}),[t,d]),r.a.createElement("div",{className:"media-container w-100"},r.a.createElement("div",{className:"video-container w-100",style:{cursor:"pointer",width:"100%"}},!v&&r.a.createElement("p",null,"The streamer has disconnected."),r.a.createElement("div",{style:v?{width:"100%"}:{display:"none",width:"100%"},ref:m},r.a.createElement("video",{className:"video-js vjs-default-skin",ref:s,style:h,preload:"auto",controls:!0,muted:!0,autoPlay:!0})),!o&&r.a.createElement(O,{tipCounter:i,tipValue:a,zoomed:!1})))},x=a(135),S=a.n(x),V=function(e){var t=e.publicKey,a=e.id,i=e.username,o=e.pinned,s=e.contentItems,u=void 0===s?[]:s,d=Object(c.useState)(!1),m=Object(n.a)(d,2),p=m[0],b=m[1],f=Object(c.useMemo)((function(){var e=u.filter((function(e){return["image/embedded","video/embedded"].includes(e.type)})).map((function(e){return{url:decodeURIComponent(e.magnetURI.replace(/.*(ws=)/gi,"")),type:e.type.replace("/embedded","")}})),n=u.filter((function(e){return"text/paragraph"===e.type})).map((function(e){return e.text})).join("\n")||"View ".concat(i,"'s posts on ShockWallet"),c={title:"".concat(i," Post"),url:"https://".concat(window.location.host,"/").concat(t,"/post/").concat(a),type:"website",media:e,description:n},r=btoa(JSON.stringify(c));return"https://".concat(window.location.host,"/").concat(t,"/post/").concat(a,"?metadata=").concat(r)}),[u,i,t,a]),v=Object(c.useCallback)(Object(N.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator.share){e.next=3;break}return navigator.share({text:"Check out this post from ".concat(i," on ShockWallet!"),url:f}),e.abrupt("return");case 3:case"end":return e.stop()}}),e)}))),[i,f]),j=Object(c.useCallback)((function(){b(!0)}),[]),E=Object(c.useCallback)((function(){return p?"Post link copied!":"Share this post"}),[p]);if(Object(c.useEffect)((function(){l.a.rebuild();var e=setTimeout((function(){b(!1),l.a.rebuild()}),1e3);return function(){clearTimeout(e)}}),[p]),Object(c.useEffect)((function(){l.a.rebuild()}),[]),!navigator.share){var O="share-".concat(t,"-").concat(o?"pinned":"","-").concat(a);return r.a.createElement(S.a,{text:f,onCopy:j},r.a.createElement("div",{className:"share-btn-container"},r.a.createElement("div",{className:"share-btn","data-tip":E(),"data-for":O},r.a.createElement("i",{className:"fas fa-external-link-alt"})),r.a.createElement(l.a,{effect:"solid",backgroundColor:"#3a4d67",getContent:[E,30],id:O})))}return r.a.createElement("div",{className:"share-btn",onClick:v},r.a.createElement("i",{className:"fas fa-external-link-alt"}))},R=a(113);t.default=function(e){var t=e.id,a=e.timestamp,i=e.avatar,d=e.tipCounter,E=e.tipValue,O=e.publicKey,y=e.contentItems,k=void 0===y?{}:y,w=e.username,N=e.isOnlineNode,C=e.pinned,x=Object(s.b)(),S=Object(u.useEmblaCarousel)({slidesToScroll:1,align:"center",draggable:!1}),L=Object(n.a)(S,2),T=L[0],U=L[1],P=Object(b.a)({trackVisibility:!1,unobserveOnEnter:!0,onEnter:function(){var e={contentItems:k,id:t};Object(R.a)([e],!1)}}).observe,z=Object(c.useState)(0),A=Object(n.a)(z,2),J=A[0],K=A[1],M=Object(c.useState)(0),B=Object(n.a)(M,2),W=B[0],Z=B[1],D=Object(c.useState)(""),q=Object(n.a)(D,2),F=q[0],G=q[1],H=Object(c.useState)(0),Q=Object(n.a)(H,2),X=Q[0],Y=Q[1];Object(c.useEffect)((function(){var e=Object.values(k),t=e.find((function(e){return"video/embedded"===e.type&&"wasLive"===e.liveStatus})),a=e.find((function(e){return"stream/embedded"===e.type&&"live"===e.liveStatus})),n="";t&&(n="was Live"),a&&(n="is Live",a.viewersCounter&&Y(a.viewersCounter)),n&&G(n)}),[k,G]);var $=function(e,a){var c=Object(n.a)(e,2),i=c[0],o=c[1];return"text/paragraph"===o.type?r.a.createElement("p",{key:i},o.text):"image/embedded"===o.type?r.a.createElement(g,{id:i,item:o,index:a,postId:t,tipCounter:d,tipValue:E,key:"".concat(t,"-").concat(a)}):"video/embedded"===o.type?r.a.createElement(h,{id:i,item:o,index:a,postId:t,tipCounter:d,tipValue:E,key:"".concat(t,"-").concat(a)}):"stream/embedded"===o.type?r.a.createElement(I,{id:i,item:o,index:a,postId:t,tipCounter:d,tipValue:E,key:"".concat(t,"-").concat(a)}):null},_=Object(c.useCallback)((function(){U&&U.canScrollNext()&&U.scrollNext()}),[U]),ee=Object(c.useCallback)((function(){U&&U.canScrollPrev()&&U.scrollPrev()}),[U]),te=Object(c.useCallback)((function(e){if(0!==J){var t=e.key;"ArrowRight"===t&&_(),"ArrowLeft"===t&&ee()}}),[J,ee,_]),ae=Object(c.useCallback)((function(){Z(U.selectedScrollSnap())}),[U,Z]);Object(c.useEffect)((function(){Object(j.f)({path:"posts/".concat(t,"/tipsSet"),gunPointer:Object(j.g)(O),method:"load"}).then((function(e){var a=e?Object.values(e):[],n=a.length,c=n>0?a.reduce((function(e,t){return Number(t)+Number(e)})):0;x(Object(f.l)({postID:t,data:{tipValue:c,tipCounter:n}}))}))}),[x,t,O]),Object(c.useEffect)((function(){if(U)return U.on("scroll",ae),K(U.scrollSnapList().length),window.addEventListener("keydown",te),function(){window.removeEventListener("keydown",te),U.off("scroll",ae)}}),[U,J,te,ae]);var ne=Object(c.useCallback)((function(){N&&x(Object(v.c)({targetType:"tip",ackInfo:t}))}),[x,t,N]);return Object(c.useEffect)((function(){l.a.rebuild()}),[]),r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"user"},r.a.createElement(p.b,{className:"av",to:"/".concat(O),style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"username"},r.a.createElement(p.b,{to:"/otherUser/".concat(O)},w),F&&r.a.createElement("p",{className:"liveStatus"},F,r.a.createElement("i",{className:"fas fa-circle liveStatusIcon ".concat("Is Live"===F?"liveIcon":"")}),"Is Live"===F&&r.a.createElement("span",null," | ",X," watching"))),r.a.createElement("p",null,o.a.utc(a).fromNow()))),r.a.createElement(V,{publicKey:O,id:t,username:w,pinned:C,contentItems:k})),r.a.createElement("div",{className:"content",ref:P},Object.entries(k).filter((function(e){var t=Object(n.a)(e,2);return t[0],"text/paragraph"===t[1].type})).map($),r.a.createElement("div",{className:"media-content-carousel"},J>1?r.a.createElement("div",{className:"media-carousel-controls-container"},r.a.createElement("div",{className:"media-carousel-arrow fas fa-angle-left",onClick:ee}),r.a.createElement("div",{className:"media-carousel-pages"},Array.from({length:J}).map((function(e,t){return r.a.createElement("div",{className:m()({"media-carousel-page":!0,"active-carousel-page":W===t}),onClick:function(){return null===U||void 0===U?void 0:U.scrollTo(t)}})}))),r.a.createElement("div",{className:"media-carousel-arrow fas fa-angle-right",onClick:_})):null,r.a.createElement("div",{className:"media-content-root",ref:T},r.a.createElement("div",{className:"media-content-container"},Object.entries(k).filter((function(e){var t=Object(n.a)(e,2);return t[0],"text/paragraph"!==t[1].type})).map($))))),r.a.createElement("div",{className:"actions"},r.a.createElement("div",{className:"icon-tip-btn","data-tip":"Tip this post",onClick:ne},r.a.createElement("i",{className:"tip-icon icon-thin-feed"})),r.a.createElement(l.a,{backgroundColor:"#3a4d67",effect:"solid"})))}},287:function(e,t){},301:function(e,t){},331:function(e,t,a){}}]);
//# sourceMappingURL=1.0065d4e5.chunk.js.map