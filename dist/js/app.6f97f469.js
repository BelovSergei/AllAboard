(function(t){function e(e){for(var s,i,n=e[0],c=e[1],l=e[2],d=0,v=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},o=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"007c":function(t,e,a){"use strict";var s=a("f9de"),r=a.n(s);r.a},"034f":function(t,e,a){"use strict";var s=a("8a23"),r=a.n(s);r.a},"1d1c":function(t,e,a){},"2cbe":function(t,e,a){"use strict";var s=a("e5b0"),r=a.n(s);r.a},4149:function(t,e,a){t.exports=a.p+"img/tesla0.5e59dfe2.jpg"},"509c":function(t,e,a){"use strict";var s=a("b027"),r=a.n(s);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Header"),a("router-view"),a("Footer",{attrs:{id:"footer"}})],1)},o=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-navigation-drawer",{staticClass:"hidden-md-and-up",attrs:{app:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[s("v-list",[null==t.user?s("span",{staticClass:"hidden-sm-and-up"},[s("v-list-item",{attrs:{link:""}},[s("v-list-item-icon",[s("v-icon",[t._v("mdi-car")])],1),s("v-list-item-content",[t._v("My fleet")])],1),s("v-list-item",{attrs:{link:""}},[s("v-list-item-icon",[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[t._v("My profile")])],1)],1):s("v-list-item",[s("v-btn",{attrs:{outlined:"",color:"black",rounded:""}},[s("v-icon",[t._v("mdi-account")]),t._v("Register / Login ")],1)],1),s("v-divider"),t._l(t.menuItems,(function(e){return s("v-list-item",{key:e.title,attrs:{link:""}},[s("v-list-item-content",[t._v(t._s(e.title))])],1)}))],2)],1),s("v-toolbar",{attrs:{color:"#181818","justify-center":"","align-center":""}},[s("v-toolbar-items",{staticClass:"hidden-md-and-up"},[s("v-app-bar-nav-icon",{attrs:{color:"white"},on:{click:function(e){t.sidebar=!t.sidebar}}})],1),s("v-flex",{attrs:{md1:"",xs1:"","offset-md1":""}},[s("v-img",{attrs:{width:"125px",src:a("c2fb")}})],1),s("v-spacer"),t._l(t.menuItems,(function(e){return s("v-toolbar-items",{key:e.title,staticClass:"hidden-sm-and-down"},[s("v-btn",{attrs:{text:"",color:"white"}},[t._v(t._s(e.title))])],1)})),s("v-spacer"),null!=t.user?s("span",{staticClass:"hidden-xs-only"},[s("v-btn",{attrs:{outlined:"",color:"white",rounded:""}},[s("v-icon",[t._v("mdi-car")]),t._v(" My fleet ")],1),s("v-btn",{attrs:{outlined:"",color:"white",rounded:""}},[s("v-icon",[t._v("mdi-account")]),t._v("My profile "),s("v-icon",[t._v("mdi-chevron-down")])],1)],1):s("span",{staticClass:"hidden-xs-only"},[s("v-btn",{attrs:{outlined:"",color:"white",rounded:""}},[s("v-icon",[t._v("mdi-account")]),t._v("Register / Login ")],1)],1),s("v-spacer",{staticClass:"hidden-sm-only"})],2)],1)},n=[],c={data:function(){return{user:null,sidebar:!1,menuItems:[{title:"Catalog",path:"/home",icon:"null"},{title:"Become our partner",path:"/signup",icon:"null"},{title:"Contact us",path:"/signup",icon:"null"},{title:"Customer service",path:"/signin",icon:"null"}]}}},l=c,u=a("2877"),d=a("6544"),v=a.n(d),m=a("5bc1"),f=a("8336"),p=a("ce7e"),b=a("0e8f"),g=a("132d"),h=a("adda"),x=a("8860"),_=a("da13"),C=a("5d23"),y=a("34c3"),w=a("f774"),V=a("2fa4"),j=a("71d9"),S=a("2a7f"),k=Object(u["a"])(l,i,n,!1,null,"33b9cf5d",null),O=k.exports;v()(k,{VAppBarNavIcon:m["a"],VBtn:f["a"],VDivider:p["a"],VFlex:b["a"],VIcon:g["a"],VImg:h["a"],VList:x["a"],VListItem:_["a"],VListItemContent:C["a"],VListItemIcon:y["a"],VNavigationDrawer:w["a"],VSpacer:V["a"],VToolbar:j["a"],VToolbarItems:S["a"]});var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xs":""}},[a("v-row",{staticClass:"text-color text-md-center text-sm-center text-center"},[a("v-col",{attrs:{md:"3",cols:"12"}},[a("div",{attrs:{md:"3",sm:"12",cols:"12"}},[a("v-col",{staticClass:"text-color-title title",attrs:{cols:"12"}},[t._v("For customers")]),a("v-col",{attrs:{cols:"12"}},[t._v("Customer terms & conditions")]),a("v-col",{attrs:{cols:"12"}},[t._v("All Aboard Q & A")]),a("v-col",{attrs:{cols:"12"}},[t._v("Privacy & Cookie policy")]),a("v-col",{attrs:{cols:"12"}},[t._v("Customers data request form")])],1)]),a("v-col",{attrs:{md:"3",sm:"6",cols:"12"}},[a("div",{attrs:{md:"3",cols:"12"}},[a("v-col",{staticClass:"text-color-title title",attrs:{cols:"12"}},[t._v("Text")]),a("v-col",{attrs:{cols:"12"}},[t._v("Car dealer terms & conditions")]),a("v-col",{attrs:{cols:"12"}},[t._v("Our approved dealers (trade)")]),a("v-col",{attrs:{cols:"12"}},[t._v("Advertise with us")])],1)]),a("v-col",{attrs:{md:"2",sm:"6",cols:"12"}},[a("div",{attrs:{md:"3"}},[a("v-col",{staticClass:"text-color-title title",attrs:{cols:"12"}},[t._v("Others")]),a("v-col",{attrs:{cols:"12"}},[t._v("About us")]),a("v-col",{attrs:{cols:"12"}},[t._v("Sitemap")]),a("v-col",{attrs:{cols:"12"}},[t._v("Contact us")])],1)]),a("v-col",{attrs:{md:"3",sm:"12"}},[a("div",{attrs:{md:"3"}},[a("v-col",{staticClass:"text-color-title title",attrs:{cols:"12"}},[t._v("Tesla official parts distributor")]),a("v-col",{attrs:{cols:"12"}},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at aliquid qui nemo incidunt velit deleniti fugiat modi, vitae numquam culpa sequi quas et, consectetur, perspiciatis autem explicabo dolores voluptatem? ")])],1)])],1)],1)},T=[],A={},M=A,q=(a("007c"),a("62ad")),F=a("a523"),B=a("0fd9"),L=Object(u["a"])(M,I,T,!1,null,"b5de07d4",null),E=L.exports;v()(L,{VCol:q["a"],VContainer:F["a"],VRow:B["a"]});var P={name:"App",components:{Header:O,Footer:E},data:function(){return{}}},$=P,R=(a("034f"),a("7496")),N=Object(u["a"])($,r,o,!1,null,null,null),D=N.exports;v()(N,{VApp:R["a"]});var z=a("9483");Object(z["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var H=a("8c4f"),J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{"fill-height":"","ma-0":"","pa-0":""}},[a("v-container",{attrs:{"grid-list-xs":"",fluid:"","ma-0":"","pa-0":""}},[a("Start"),a("Search",{attrs:{id:"background-search"}}),a("Square",{attrs:{id:"background-square"}}),a("Banner",{attrs:{id:"background-banner"}}),a("SocialMedia",{attrs:{id:"background-socialmedia"}})],1)],1)},Q=[],Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-img",{attrs:{"aspect-ratio":"16:9",src:a("4149")}},[s("v-container",{staticClass:"grid-list-md grid-list-xs fill-height ma-0 pa-0 align-start ",attrs:{id:"intro"}},[s("v-row",{staticClass:"align-center text-center justify-center mx-auto"},[s("v-col",{staticClass:"text-md-center text-center"},[s("v-img",{staticClass:"ma-auto imgSize",attrs:{src:a("c2fb")}}),s("v-col",{staticClass:"display-1 text-color-subtitle hidden-xs-only"},[t._v("Your Tesla parts distributor")]),s("v-col",{staticClass:"title text-color-subtitle hidden-sm-and-up"},[t._v("Your Tesla parts distributor")])],1)],1)],1)],1)},X=[],G={data:function(){return{}}},K=G,U=(a("2cbe"),Object(u["a"])(K,Y,X,!1,null,null,null)),W=U.exports;v()(U,{VCol:q["a"],VContainer:F["a"],VImg:h["a"],VRow:B["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xs":"","ma-0":"","pa-0":""}},[a("v-col",{staticClass:"align-center"},[a("v-row",{staticClass:"align-center justify-center text-sm-center text-center md6"},[a("v-col",{staticClass:"md1 ma-0 mt-5 pa-0 sm12 cols12",attrs:{cols:"12",md:"1",sm:"cols=12"}},[a("v-icon",{attrs:{color:"white",size:"90"}},[t._v("mdi-magnify")])],1),a("v-col",{attrs:{cols:"12",md:"5"}},[a("v-col",{staticClass:"d-inline-flex cols12 headline text-color-title"},[t._v("Search over 150,000 Tesla parts")]),a("br"),a("v-col",{staticClass:"text-color-subtitle d-inline-flex"},[t._v(" Find the right parts and products you need for your Tesla vehicle(s)! ")])],1),a("div",{staticClass:"sm-12",attrs:{cols:"12"}},[a("v-btn",{staticClass:"ma-2 sm-5",attrs:{color:"orange"}},[t._v("Search parts")]),a("v-btn",{staticClass:"ma-2 sm-5",attrs:{color:"orange"}},[t._v("Search products")])],1)],1),a("v-row",{staticClass:"row align-center justify-center"},[a("div",{staticClass:"mb-5",attrs:{cols:"12"}},[a("span",{staticClass:"ma-5 sm12 cols12",staticStyle:{color:"white","margin-right":"25px"},attrs:{sm:"cols=12",cols:"12"}},[t._v("Or browse by model:")]),a("div",{attrs:{cols:"12",sm:"cols=12"}},[a("v-btn",{attrs:{color:"grey",rounded:""}},[t._v("Model X")]),a("v-btn",{attrs:{color:"grey",rounded:""}},[t._v("Model S")]),a("v-btn",{attrs:{color:"grey",rounded:""}},[t._v("Model 3")]),a("v-btn",{attrs:{color:"grey",rounded:""}},[t._v("Roadster")])],1)])])],1)],1)},tt=[],et={},at=et,st=(a("cb47"),Object(u["a"])(at,Z,tt,!1,null,null,null)),rt=st.exports;v()(st,{VBtn:f["a"],VCol:q["a"],VContainer:F["a"],VIcon:g["a"],VRow:B["a"]});var ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"grid-list-xs":"","ma-0":"","pa-0":""}},[s("v-row",{staticClass:"column wrap align-center"},[s("v-row",{staticClass:"align-center justify-center"},[s("v-col",{staticClass:"ma-2",attrs:{cols:"12",sm:"10",md:"5"}},[s("v-card",{attrs:{"elevation-20":"",height:"100%"}},[s("v-col",{staticClass:"offset-md-2 offset-sm-1",attrs:{cols:"12"}},[s("v-col",{staticClass:"headline mb-5 mt-5",attrs:{cols:"10",md:"5"}},[t._v("Free text")]),s("v-col",{staticClass:"mb-5",attrs:{cols:"10"}},[t._v(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis beatae dolorem earum dolorum quae optio magni voluptates excepturi, architecto sint minima fuga voluptatibus, aut ipsam enim ex praesentium reiciendis nesciunt! ")]),s("v-btn",{staticClass:"margin-button",staticStyle:{color:"white"},attrs:{color:"black"}},[t._v("CTA text")])],1)],1)],1),s("v-col",{staticClass:"ma-2",attrs:{cols:"12",md:"5",sm:"10"}},[s("v-card",{staticClass:"elevation-20",attrs:{height:"100%"}},[s("v-img",{attrs:{"max-height":"280px","min-height":"280px","aspect-ratio":"16:9",src:a("6107")}})],1)],1)],1),s("v-row",{staticClass:"justify-center"},[s("v-col",{staticClass:"ma-2",attrs:{cols:"12",sm:"10",md:"5"}},[s("v-card",{staticClass:"elevation-20",attrs:{height:"100%"}},[s("v-img",{attrs:{"max-height":"280px","min-height":"280px","aspect-ratio":"16:9",src:a("6107")}})],1)],1),s("v-col",{staticClass:"ma-2",attrs:{cols:"12",sm:"10",md:"5"}},[s("v-card",{attrs:{"elevation-20":"",height:"100%"}},[s("v-col",{staticClass:"offset-md-1 offset-sm-1",attrs:{md:"10",sm:"12"}},[s("v-col",{staticClass:" headline mb-5 mt-5",attrs:{cols:"10"}},[t._v("Free text")]),s("v-col",{staticClass:"mb-5",attrs:{cols:"10"}},[t._v(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis beatae dolorem earum dolorum quae optio magni voluptates excepturi, architecto sint minima fuga voluptatibus, aut ipsam enim ex praesentium reiciendis nesciunt! ")]),s("v-btn",{staticClass:"margin-button",staticStyle:{color:"white"},attrs:{color:"black"}},[t._v("CTA text")])],1)],1)],1)],1)],1)],1)},it=[],nt={},ct=nt,lt=(a("509c"),a("b0af")),ut=Object(u["a"])(ct,ot,it,!1,null,null,null),dt=ut.exports;v()(ut,{VBtn:f["a"],VCard:lt["a"],VCol:q["a"],VContainer:F["a"],VImg:h["a"],VRow:B["a"]});var vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xs":""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-center":"","align-center":"","text-sm-center":"","text-md-left":""}},[a("v-flex",{attrs:{sm12:"",md4:"","ma-5":""}},[a("v-flex",{staticClass:"text-color-title",attrs:{xs12:"",headline:""}},[t._v("Does your fleet contain Tesla cars?")]),a("v-flex",{staticClass:"text-color-subtitle",attrs:{xs12:""}},[t._v("Become a customer and immediately start improving the efficiency of your fleet cars!")])],1),a("div",{attrs:{sm12:""}},[a("v-btn",{attrs:{color:"orange"}},[t._v("Find out more")])],1)],1)],1)},mt=[],ft={},pt=ft,bt=(a("849a"),a("a722")),gt=Object(u["a"])(pt,vt,mt,!1,null,"d1967f26",null),ht=gt.exports;v()(gt,{VBtn:f["a"],VContainer:F["a"],VFlex:b["a"],VLayout:bt["a"]});var xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xs":""}},[a("v-divider",{attrs:{color:"grey"}}),a("v-layout",{attrs:{column:"",wrap:"","align-center":"","justify-center":""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",headline:"","white--text":"","mt-5":""}},[t._v(" Connect with us ")])],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("div",{staticStyle:{"margin-bottom":"20px"},attrs:{xs12:""}},[a("v-btn",{attrs:{color:"white",icon:"",outlined:""}},[a("v-icon",[t._v("mdi-facebook")])],1),a("v-btn",{attrs:{color:"white",icon:"",outlined:""}},[a("v-icon",[t._v("mdi-twitter")])],1),a("v-btn",{attrs:{color:"white",icon:"",outlined:""}},[a("v-icon",[t._v("mdi-linkedin")])],1),a("v-btn",{attrs:{color:"white",icon:"",outlined:""}},[a("v-icon",[t._v("mdi-youtube")])],1)],1)])],1),a("v-divider",{attrs:{color:"gray"}})],1)},_t=[],Ct={},yt=Ct,wt=Object(u["a"])(yt,xt,_t,!1,null,"731cb520",null),Vt=wt.exports;v()(wt,{VBtn:f["a"],VContainer:F["a"],VDivider:p["a"],VFlex:b["a"],VIcon:g["a"],VLayout:bt["a"]});var jt={components:{Start:W,Search:rt,Square:dt,Banner:ht,SocialMedia:Vt}},St=jt,kt=(a("d027"),Object(u["a"])(St,J,Q,!1,null,null,null)),Ot=kt.exports;v()(kt,{VContainer:F["a"]}),s["a"].use(H["a"]);var It=[{path:"/",component:Ot,children:[{path:"/",component:void 0}]}],Tt=new H["a"]({mode:"history",base:"/",routes:It}),At=Tt,Mt=a("2f62");s["a"].use(Mt["a"]);var qt=new Mt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Ft=a("f309");s["a"].use(Ft["a"]);var Bt=new Ft["a"]({});s["a"].config.productionTip=!1,new s["a"]({router:At,store:qt,vuetify:Bt,render:function(t){return t(D)}}).$mount("#app")},6107:function(t,e,a){t.exports=a.p+"img/part0.a55dbd55.png"},"849a":function(t,e,a){"use strict";var s=a("b3e0"),r=a.n(s);r.a},"8a23":function(t,e,a){},b027:function(t,e,a){},b3e0:function(t,e,a){},c2fb:function(t,e,a){t.exports=a.p+"img/logo_transparent.2e6ebd55.png"},cb47:function(t,e,a){"use strict";var s=a("1d1c"),r=a.n(s);r.a},d027:function(t,e,a){"use strict";var s=a("e9da"),r=a.n(s);r.a},e5b0:function(t,e,a){},e9da:function(t,e,a){},f9de:function(t,e,a){}});
//# sourceMappingURL=app.6f97f469.js.map