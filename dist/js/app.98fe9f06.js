(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],v=0,d=[];v<o.length;v++)s=o[v],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="AllAboard/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("8a23"),n=a.n(r);n.a},"1d1c":function(t,e,a){},"23a2":function(t,e,a){},"2cbe":function(t,e,a){"use strict";var r=a("e5b0"),n=a.n(r);n.a},4149:function(t,e,a){t.exports=a.p+"img/tesla0.5e59dfe2.jpg"},"509c":function(t,e,a){"use strict";var r=a("b027"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Header"),a("router-view"),a("Footer",{attrs:{id:"footer"}})],1)},i=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-navigation-drawer",{staticClass:"hidden-md-and-up",attrs:{app:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[r("v-list",[null==t.user?r("span",{staticClass:"hidden-sm-and-up"},[r("v-list-item",{attrs:{link:""}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-car")])],1),r("v-list-item-content",[t._v("My fleet")])],1),r("v-list-item",{attrs:{link:""}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-account")])],1),r("v-list-item-content",[t._v("My profile")])],1)],1):r("v-list-item",[r("v-btn",{attrs:{outlined:"",color:"black",rounded:""}},[r("v-icon",[t._v("mdi-account")]),t._v("Register / Login ")],1)],1),r("v-divider"),t._l(t.menuItems,(function(e){return r("v-list-item",{key:e.title,attrs:{link:""}},[r("v-list-item-content",[t._v(t._s(e.title))])],1)}))],2)],1),r("v-toolbar",{attrs:{color:"#181818","justify-center":"","align-center":""}},[r("v-toolbar-items",{staticClass:"hidden-md-and-up"},[r("v-app-bar-nav-icon",{attrs:{color:"white"},on:{click:function(e){t.sidebar=!t.sidebar}}})],1),r("v-flex",{attrs:{md1:"",xs1:"","offset-md1":""}},[r("v-img",{attrs:{width:"125px",src:a("c2fb")}})],1),r("v-spacer"),t._l(t.menuItems,(function(e){return r("v-toolbar-items",{key:e.title,staticClass:"hidden-sm-and-down"},[r("v-btn",{attrs:{text:"",color:"white"}},[t._v(t._s(e.title))])],1)})),r("v-spacer"),null!=t.user?r("span",{staticClass:"hidden-xs-only"},[r("v-btn",{attrs:{outlined:"",color:"white",rounded:""}},[r("v-icon",[t._v("mdi-car")]),t._v(" My fleet ")],1),r("v-btn",{attrs:{outlined:"",color:"white",rounded:""}},[r("v-icon",[t._v("mdi-account")]),t._v("My profile "),r("v-icon",[t._v("mdi-chevron-down")])],1)],1):r("span",{staticClass:"hidden-xs-only"},[r("v-btn",{attrs:{outlined:"",color:"white",rounded:""}},[r("v-icon",[t._v("mdi-account")]),t._v("Register / Login ")],1)],1),r("v-spacer",{staticClass:"hidden-sm-only"})],2)],1)},o=[],l={data:function(){return{user:null,sidebar:!1,menuItems:[{title:"Catalog",path:"/home",icon:"null"},{title:"Become our partner",path:"/signup",icon:"null"},{title:"Contact us",path:"/signup",icon:"null"},{title:"Customer service",path:"/signin",icon:"null"}]}}},c=l,u=a("2877"),v=a("6544"),d=a.n(v),m=a("5bc1"),f=a("8336"),p=a("ce7e"),x=a("0e8f"),b=a("132d"),g=a("adda"),h=a("8860"),_=a("da13"),y=a("5d23"),w=a("34c3"),V=a("f774"),C=a("2fa4"),j=a("71d9"),k=a("2a7f"),S=Object(u["a"])(c,s,o,!1,null,"33b9cf5d",null),O=S.exports;d()(S,{VAppBarNavIcon:m["a"],VBtn:f["a"],VDivider:p["a"],VFlex:x["a"],VIcon:b["a"],VImg:g["a"],VList:h["a"],VListItem:_["a"],VListItemContent:y["a"],VListItemIcon:w["a"],VNavigationDrawer:V["a"],VSpacer:C["a"],VToolbar:j["a"],VToolbarItems:k["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xs":""}},[a("v-layout",{staticClass:"text-color",attrs:{row:"",wrap:"","text-md-center":"","text-sm-center":""}},[a("v-flex",{attrs:{md3:"","ma-5":""}},[a("div",{attrs:{md3:"",sm4:""}},[a("v-flex",{staticClass:"text-color-title",attrs:{xs12:"",title:""}},[t._v("For customers")]),a("v-flex",{attrs:{xs12:""}},[t._v("Customer terms & conditions")]),a("v-flex",{attrs:{xs12:""}},[t._v("All Aboard Q & A")]),a("v-flex",{attrs:{xs12:""}},[t._v("Privacy & Cookie policy")]),a("v-flex",{attrs:{xs12:""}},[t._v("Customers data request form")])],1)]),a("v-flex",{attrs:{md3:"",sm4:""}},[a("div",{attrs:{md3:""}},[a("v-flex",{staticClass:"text-color-title",attrs:{xs12:"",title:""}},[t._v("Text")]),a("v-flex",{attrs:{xs12:""}},[t._v("Car dealer terms & conditions")]),a("v-flex",{attrs:{xs12:""}},[t._v("Our approved dealers (trade)")]),a("v-flex",{attrs:{xs12:""}},[t._v("Advertise with us")])],1)]),a("v-flex",{attrs:{md2:"",sm4:""}},[a("div",{attrs:{md3:""}},[a("v-flex",{staticClass:"text-color-title",attrs:{xs12:"",title:""}},[t._v("Others")]),a("v-flex",{attrs:{xs12:""}},[t._v("About us")]),a("v-flex",{attrs:{xs12:""}},[t._v("Sitemap")]),a("v-flex",{attrs:{xs12:""}},[t._v("Contact us")])],1)]),a("v-flex",{attrs:{md3:"",sm12:""}},[a("div",{attrs:{md3:""}},[a("v-flex",{staticClass:"text-color-title",attrs:{xs12:"",title:""}},[t._v("Tesla official parts distributor")]),a("v-flex",{attrs:{xs12:""}},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at aliquid qui nemo incidunt velit deleniti fugiat modi, vitae numquam culpa sequi quas et, consectetur, perspiciatis autem explicabo dolores voluptatem? ")])],1)])],1)],1)},F=[],I={},L=I,M=(a("b0dd"),a("a523")),T=a("a722"),q=Object(u["a"])(L,A,F,!1,null,"646d17fa",null),B=q.exports;d()(q,{VContainer:M["a"],VFlex:x["a"],VLayout:T["a"]});var E={name:"App",components:{Header:O,Footer:B},data:function(){return{}}},P=E,$=(a("034f"),a("7496")),N=Object(u["a"])(P,n,i,!1,null,null,null),D=N.exports;d()(N,{VApp:$["a"]});var R=a("9483");Object(R["a"])("".concat("AllAboard/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var H=a("8c4f"),J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{"fill-height":"","ma-0":"","pa-0":""}},[a("v-container",{attrs:{"grid-list-xs":"",fluid:"","ma-0":"","pa-0":""}},[a("Start"),a("Search",{attrs:{id:"background-search"}}),a("Square",{attrs:{id:"background-square"}}),a("Banner",{attrs:{id:"background-banner"}}),a("SocialMedia",{attrs:{id:"background-socialmedia"}})],1)],1)},Q=[],z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-img",{attrs:{"aspect-ratio":"16:9",src:a("4149")}},[r("v-container",{attrs:{"grid-list-md":"","fill-height":"",fluid:"","ma-0":"","pa-0":"",id:"intro"}},[r("v-layout",{attrs:{column:"","align-center":"","justify-center":"","ma-12":"","pt-12":""}},[r("v-flex",{attrs:{xs12:"","text-md-center":"","text-xs-center":"","text-sm-center":""}},[r("v-img",{attrs:{height:"200px",width:"500px",src:a("c2fb")}}),r("v-flex",{attrs:{"display-1":"","text-color-subtitle":""}},[t._v("Your Tesla parts distributor")])],1)],1)],1)],1)},X=[],Y={data:function(){return{}}},G=Y,K=(a("2cbe"),Object(u["a"])(G,z,X,!1,null,null,null)),U=K.exports;d()(K,{VContainer:M["a"],VFlex:x["a"],VImg:g["a"],VLayout:T["a"]});var W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xs":"","ma-0":"","pa-0":""}},[a("v-layout",{attrs:{column:"",wrap:"","align-center":""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":"","text-sm-center":"","text-xs-center":""}},[a("v-flex",{attrs:{md1:"","ma-0":"","mt-5":"","pa-0":"",sm12:"",cols:"12"}},[a("v-icon",{attrs:{color:"white",size:"90"}},[t._v("mdi-magnify")])],1),a("v-flex",{attrs:{md5:"",sm12:"","mr-5":"",cols:"12"}},[a("v-flex",{staticClass:"text-color-title",attrs:{"d-inline":"",xs12:"",headline:""}},[t._v("Search over 150,000 Tesla parts")]),a("br"),a("v-flex",{staticClass:"text-color-subtitle",attrs:{"d-inline":"",cols:"12"}},[t._v("Find the right parts and products you need for your Tesla vehicle(s)!")])],1),a("div",{attrs:{"sm-12":""}},[a("v-btn",{staticClass:"ma-2 sm-5",attrs:{color:"orange"}},[t._v("Search parts")]),a("v-btn",{staticClass:"ma-2 sm-5",attrs:{color:"orange"}},[t._v("Search products")])],1)],1),a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("div",{attrs:{"mb-5":""}},[a("span",{staticStyle:{color:"white","margin-right":"25px"},attrs:{"ma-5":"",sm12:"",cols12:""}},[t._v("Or browse by model:")]),a("v-btn",{attrs:{color:"grey",rounded:""}},[t._v("Model X")]),a("v-btn",{attrs:{color:"grey",rounded:""}},[t._v("Model S")]),a("v-btn",{attrs:{color:"grey",rounded:""}},[t._v("Model 3")]),a("v-btn",{attrs:{color:"grey",rounded:""}},[t._v("Roadster")])],1)])],1)],1)},Z=[],tt={},et=tt,at=(a("cb47"),Object(u["a"])(et,W,Z,!1,null,null,null)),rt=at.exports;d()(at,{VBtn:f["a"],VContainer:M["a"],VFlex:x["a"],VIcon:b["a"],VLayout:T["a"]});var nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-xs":"","ma-0":"","pa-0":""}},[r("v-layout",{attrs:{column:"",wrap:"","align-center":""}},[r("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[r("v-flex",{attrs:{"ma-2":"",sm10:"",md5:""}},[r("v-card",{attrs:{"elevation-20":"",height:"100%"}},[r("v-flex",{attrs:{xs12:"","offset-md4":"","offset-sm1":""}},[r("v-flex",{attrs:{xs10:"",md5:"",headline:"","mb-5":"","mt-5":""}},[t._v("Free text")]),r("v-flex",{attrs:{xs10:"","mb-5":""}},[t._v(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis beatae dolorem earum dolorum quae optio magni voluptates excepturi, architecto sint minima fuga voluptatibus, aut ipsam enim ex praesentium reiciendis nesciunt! ")]),r("v-btn",{staticClass:"margin-button",staticStyle:{color:"white"},attrs:{color:"black"}},[t._v("CTA text")])],1)],1)],1),r("v-flex",{attrs:{"ma-2":"",md5:"",sm10:""}},[r("v-card",{attrs:{"elevation-20":"",height:"100%"}},[r("v-img",{attrs:{"max-height":"280px","min-height":"280px","aspect-ratio":"16:9",src:a("6107")}})],1)],1)],1),r("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[r("v-flex",{attrs:{"ma-2":"",sm10:"",md5:""}},[r("v-card",{attrs:{height:"100%","elevation-20":""}},[r("v-img",{attrs:{"max-height":"280px","min-height":"280px","aspect-ratio":"16:9",src:a("6107")}})],1)],1),r("v-flex",{attrs:{"ma-2":"",sm10:"",md5:""}},[r("v-card",{attrs:{"elevation-20":"",height:"100%"}},[r("v-flex",{attrs:{md10:"","offset-md1":"","offset-sm1":"",sm12:""}},[r("v-flex",{attrs:{xs10:"",headline:"","mb-5":"","mt-5":""}},[t._v("Free text")]),r("v-flex",{attrs:{xs10:"","mb-5":""}},[t._v(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis beatae dolorem earum dolorum quae optio magni voluptates excepturi, architecto sint minima fuga voluptatibus, aut ipsam enim ex praesentium reiciendis nesciunt! ")]),r("v-btn",{staticClass:"margin-button",staticStyle:{color:"white"},attrs:{color:"black"}},[t._v("CTA text")])],1)],1)],1)],1)],1)],1)},it=[],st={},ot=st,lt=(a("509c"),a("b0af")),ct=Object(u["a"])(ot,nt,it,!1,null,null,null),ut=ct.exports;d()(ct,{VBtn:f["a"],VCard:lt["a"],VContainer:M["a"],VFlex:x["a"],VImg:g["a"],VLayout:T["a"]});var vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xs":""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-center":"","align-center":"","text-sm-center":"","text-md-left":""}},[a("v-flex",{attrs:{sm12:"",md4:"","ma-5":""}},[a("v-flex",{staticClass:"text-color-title",attrs:{xs12:"",headline:""}},[t._v("Does your fleet contain Tesla cars?")]),a("v-flex",{staticClass:"text-color-subtitle",attrs:{xs12:""}},[t._v("Become a customer and immediately start improving the efficiency of your fleet cars!")])],1),a("div",{attrs:{sm12:""}},[a("v-btn",{attrs:{color:"orange"}},[t._v("Find out more")])],1)],1)],1)},dt=[],mt={},ft=mt,pt=(a("849a"),Object(u["a"])(ft,vt,dt,!1,null,"d1967f26",null)),xt=pt.exports;d()(pt,{VBtn:f["a"],VContainer:M["a"],VFlex:x["a"],VLayout:T["a"]});var bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xs":""}},[a("v-divider",{attrs:{color:"grey"}}),a("v-layout",{attrs:{column:"",wrap:"","align-center":"","justify-center":""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",headline:"","white--text":"","mt-5":""}},[t._v(" Connect with us ")])],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("div",{staticStyle:{"margin-bottom":"20px"},attrs:{xs12:""}},[a("v-btn",{attrs:{color:"white",icon:"",outlined:""}},[a("v-icon",[t._v("mdi-facebook")])],1),a("v-btn",{attrs:{color:"white",icon:"",outlined:""}},[a("v-icon",[t._v("mdi-twitter")])],1),a("v-btn",{attrs:{color:"white",icon:"",outlined:""}},[a("v-icon",[t._v("mdi-linkedin")])],1),a("v-btn",{attrs:{color:"white",icon:"",outlined:""}},[a("v-icon",[t._v("mdi-youtube")])],1)],1)])],1),a("v-divider",{attrs:{color:"grey"}})],1)},gt=[],ht={},_t=ht,yt=Object(u["a"])(_t,bt,gt,!1,null,"16ede5ec",null),wt=yt.exports;d()(yt,{VBtn:f["a"],VContainer:M["a"],VDivider:p["a"],VFlex:x["a"],VIcon:b["a"],VLayout:T["a"]});var Vt={components:{Start:U,Search:rt,Square:ut,Banner:xt,SocialMedia:wt}},Ct=Vt,jt=(a("d027"),Object(u["a"])(Ct,J,Q,!1,null,null,null)),kt=jt.exports;d()(jt,{VContainer:M["a"]}),r["a"].use(H["a"]);var St=[{path:"/",component:kt,children:[{path:"/",component:void 0}]}],Ot=new H["a"]({mode:"history",base:"AllAboard/",routes:St}),At=Ot,Ft=a("2f62");r["a"].use(Ft["a"]);var It=new Ft["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Lt=a("f309");r["a"].use(Lt["a"]);var Mt=new Lt["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:At,store:It,vuetify:Mt,render:function(t){return t(D)}}).$mount("#app")},6107:function(t,e,a){t.exports=a.p+"img/part0.a55dbd55.png"},"849a":function(t,e,a){"use strict";var r=a("b3e0"),n=a.n(r);n.a},"8a23":function(t,e,a){},b027:function(t,e,a){},b0dd:function(t,e,a){"use strict";var r=a("23a2"),n=a.n(r);n.a},b3e0:function(t,e,a){},c2fb:function(t,e,a){t.exports=a.p+"img/logo_transparent.2e6ebd55.png"},cb47:function(t,e,a){"use strict";var r=a("1d1c"),n=a.n(r);n.a},d027:function(t,e,a){"use strict";var r=a("e9da"),n=a.n(r);n.a},e5b0:function(t,e,a){},e9da:function(t,e,a){}});
//# sourceMappingURL=app.98fe9f06.js.map