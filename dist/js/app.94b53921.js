(function(t){function e(e){for(var r,n,s=e[0],c=e[1],d=e[2],l=0,u=[];l<s.length;l++)n=s[l],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(u.length)u.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,n=1;n<a.length;n++){var s=a[n];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},i={app:0},o=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"67e30979"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"d38367fe"}[t]+".css",i=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var d=o[s],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===r||l===i))return e()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){d=u[s],l=d.getAttribute("data-href");if(l===r||l===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[t],p.parentNode.removeChild(p),a(o)},p.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){n[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,a){r=i[t]=[e,a]}));e.push(r[2]=o);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var u=new Error;d=function(e){l.onerror=l.onload=null,clearTimeout(p);var a=i[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",u.name="ChunkLoadError",u.type=r,u.request=n,a[1](u)}i[t]=void 0}};var p=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=e,d=d.slice();for(var u=0;u<d.length;u++)e(d[u]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"046a":function(t,e,a){"use strict";a("c6e2")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("Navbar"),a("router-view")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:""}},[a("div",{staticClass:"logo d-flex align-center"},[a("h1",[a("router-link",{staticClass:"error--text",attrs:{to:"/"}},[t._v("Logo")])],1)]),a("v-spacer"),a("v-btn",{staticClass:"mr-2",attrs:{to:"/",text:""}},[a("span",[t._v("Home")])]),a("v-btn",{attrs:{to:"/cart",text:""}},[a("span",[t._v("Cart")])]),a("v-spacer"),a("v-btn",{staticClass:"mr-2",attrs:{text:""},on:{click:function(e){t.$vuetify.theme.dark=!t.$vuetify.theme.dark}}},[a("v-icon",[t._v("mdi-theme-light-dark")])],1),a("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-badge",{attrs:{bordered:"",overlap:"",color:"error",content:t.$store.getters.productsAdded.length?t.$store.getters.productsAdded.length:"0"}},[a("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",n,!1),r),[a("v-icon",[t._v("mdi-cart")])],1)],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Mini Cart")]),t.$store.getters.productsAdded.length?a("v-card-text",t._l(t.$store.getters.productsAdded,(function(e){return a("div",{key:e.id,staticClass:"item d-flex align-center mt-4"},[a("div",{staticClass:"img"},[a("v-img",{staticClass:"shrink mr-2 rounded-circle",attrs:{alt:"Product",src:e.image,transition:"scale-transition",rounded:"",width:"80",height:"80"}})],1),a("div",{staticClass:"details container container--fluid"},[a("div",{staticClass:"d-flex align-center justify-space-between "},[a("h3",{staticClass:"mb-0"},[t._v(t._s(e.title))]),a("p",{staticClass:"primary--text mb-0 font-weight-bold"},[t._v(" "+t._s("$"+e.price)+" "),a("v-btn",{staticClass:"ml-2",attrs:{fab:"",text:"",small:"",color:"error"},on:{click:function(a){return t.removeFromCart(e.id)}}},[a("v-icon",[t._v("mdi-close")])],1)],1)])])])})),0):a("v-card-text",[t._v("No Products Added")]),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",text:"",to:"/cart"},on:{click:function(e){t.dialog=!1}}},[t._v(" Check out ")]),a("v-spacer"),a("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")])],1)],1)],1)],1)},s=[],c={name:"Navbar",data:function(){return{dialog:!1}},methods:{removeFromCart:function(t){this.$store.commit("removeFromCart",t)}}},d=c,l=(a("046a"),a("2877")),u=a("6544"),p=a.n(u),m=a("40dc"),f=a("4ca6"),v=a("8336"),g=a("b0af"),h=a("99d9"),b=a("169a"),C=a("ce7e"),y=a("132d"),_=a("adda"),k=a("2fa4"),w=Object(l["a"])(d,o,s,!1,null,"e8ebd5fe",null),x=w.exports;p()(w,{VAppBar:m["a"],VBadge:f["a"],VBtn:v["a"],VCard:g["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VDialog:b["a"],VDivider:C["a"],VIcon:y["a"],VImg:_["a"],VSpacer:k["a"]});var A={name:"App",components:{Navbar:x},data:function(){return{}}},T=A,j=a("7496"),V=a("f6c4"),S=Object(l["a"])(T,n,i,!1,null,null,null),P=S.exports;p()(S,{VApp:j["a"],VMain:V["a"]});var $=a("f309");r["a"].use($["a"]);var E=new $["a"]({theme:{dark:!0}}),O=(a("d3b7"),a("8c4f")),q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Products",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},I=[],B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",t._l(t.$store.state.products,(function(e){return a("v-col",{key:e.id,attrs:{cols:"6",lg:"3",md:"4",sm:"6"}},[a("v-card",{attrs:{id:e.id}},[a("v-img",{attrs:{height:"250",src:e.image}}),a("v-card-title",[t._v(t._s(e.title))]),a("v-card-text",[a("div",{staticClass:"my-2 subtitle-1"},[t._v(" "+t._s("$"+e.price)+" • "+t._s(e.location)+" ")]),a("div",[t._v(" "+t._s(e.description)+" ")])]),a("v-divider",{staticClass:"mx-4"}),a("v-card-actions",[e.isAddedToCart?a("v-btn",{attrs:{color:"error",text:""},on:{click:function(a){return t.removeFromCart(e.id)}}},[t._v(" Remove ")]):a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){t.snackbar=!0,t.textProduct(e.title),t.addToCart(e.id)}}},[t._v(" Add To Cart ")])],1)],1)],1)})),1),a("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(e){var r=e.attrs;return[a("v-btn",t._b({attrs:{color:"error",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",r,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.productTitle)+" Added to Cart ")])],1)},F=[],M={name:"Products",data:function(){return{selection:1,snackbar:!1,productTitle:""}},methods:{textProduct:function(t){this.productTitle=t},addToCart:function(t){this.text=this.$store.commit("addToCart",t)},removeFromCart:function(t){this.$store.commit("removeFromCart",t)}}},N=M,L=a("62ad"),D=a("a523"),H=a("0fd9"),J=a("2db4"),R=Object(l["a"])(N,B,F,!1,null,null,null),K=R.exports;p()(R,{VBtn:v["a"],VCard:g["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:L["a"],VContainer:D["a"],VDivider:C["a"],VImg:_["a"],VRow:H["a"],VSnackbar:J["a"]});var Q={name:"Home",components:{Products:K}},U=Q,W=Object(l["a"])(U,q,I,!1,null,null,null),Y=W.exports;r["a"].use(O["a"]);var z=[{path:"/",name:"Home",component:Y},{path:"/cart",name:"Cart",component:function(){return a.e("about").then(a.bind(null,"b789"))}}],G=new O["a"]({routes:z}),X=G,Z=(a("4de4"),a("4160"),a("159b"),a("2f62"));r["a"].use(Z["a"]);var tt=new Z["a"].Store({state:{products:[{id:1,title:"Chicken Momo",price:200,location:"Italian, Cafe",description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",image:"https://cdn.vuetifyjs.com/images/cards/house.jpg",isAddedToCart:!1,qty:1},{id:2,title:"Spicy Mexican",price:150,location:"Italian, Cafe",description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",image:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",isAddedToCart:!1,qty:1},{id:3,title:"Break Fast",price:300,location:"Italian, Cafe",description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",image:"https://cdn.vuetifyjs.com/images/cards/road.jpg",isAddedToCart:!1,qty:1},{id:4,title:"Cafe Badilico",price:500,location:"Italian, Cafe",description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",image:"https://cdn.vuetifyjs.com/images/cards/cooking.png",isAddedToCart:!1,qty:1},{id:5,title:"Chicken Momo",price:200,location:"Italian, Cafe",description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",image:"https://cdn.vuetifyjs.com/images/cards/house.jpg",isAddedToCart:!1,qty:1},{id:6,title:"Spicy Mexican",price:150,location:"Italian, Cafe",description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",image:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",isAddedToCart:!1,qty:1},{id:7,title:"Break Fast",price:300,location:"Italian, Cafe",description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",image:"https://cdn.vuetifyjs.com/images/cards/road.jpg",isAddedToCart:!1,qty:1},{id:8,title:"Cafe Badilico",price:500,location:"Italian, Cafe",description:"Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",image:"https://cdn.vuetifyjs.com/images/cards/cooking.png",isAddedToCart:!1,qty:1}]},mutations:{calcQty:function(t,e){t.products.forEach((function(t){e.id===t.id&&(t.qty=e.qty)}))},addToCart:function(t,e){t.products.forEach((function(t){e===t.id&&(t.isAddedToCart=!0)}))},removeFromCart:function(t,e){t.products.forEach((function(t){e===t.id&&(t.isAddedToCart=!1)}))}},getters:{productsAdded:function(t){return t.products.filter((function(t){return t.isAddedToCart}))}},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({vuetify:E,router:X,store:tt,render:function(t){return t(P)}}).$mount("#app")},c6e2:function(t,e,a){}});
//# sourceMappingURL=app.94b53921.js.map