(function(e){function t(t){for(var r,i,a=t[0],c=t[1],l=t[2],u=0,d=[];u<a.length;u++)i=a[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var a=n[i];0!==s[a]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={app:0},s={app:0},o=[];function a(e){return c.p+"js/"+({seance:"seance"}[e]||e)+"."+{seance:"0184b6bb"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={seance:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="css/"+({seance:"seance"}[e]||e)+"."+{seance:"9cf14d0e"}[e]+".css",s=c.p+r,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var l=o[a],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===s))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){l=d[a],u=l.getAttribute("data-href");if(u===r||u===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete i[e],f.parentNode.removeChild(f),n(o)},f.href=s;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){i[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=a(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",d.name="ChunkLoadError",d.type=r,d.request=i,n[1](d)}s[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/engapp/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"04ba":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d1e78"),n("a899");var r=n("2b0e"),i=n("26b9"),s=n.n(i),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{class:e.$route.meta.applicationClass},[e.user?n("v-navigation-drawer",{attrs:{app:""},scopedSlots:e._u([{key:"append",fn:function(){return[n("div",{staticClass:"pa-2",attrs:{id:"build"},domProps:{innerHTML:e._s(e.build)}})]},proxy:!0}],null,!1,49418622),model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[e._v(" "+e._s(e.name)+" ")]),n("v-list-item-subtitle",[e._v(" "+e._s(e.user.name)+" ")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},e._l(e.menu,(function(t){return n("v-list-item",{key:t.name,attrs:{link:"",to:t.to},on:{click:function(t){e.drawer=!1}}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.name))])],1)],1)})),1),n("v-list",{attrs:{dense:"",nav:""}},[n("v-list-item",{attrs:{link:""},on:{click:e.logout}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-logout")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Déconnexion")])],1)],1)],1)],1):e._e(),e.user?n("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""}},[n("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),n("div",{staticClass:"d-flex align-center"},[n("router-link",{attrs:{to:"/"}},[n("v-img",{staticClass:"shrink mr-3",attrs:{contain:"",src:"img/logo1.png",transition:"scale-transition",width:"40"}})],1),n("div",[e._v(e._s(e.name))])],1),n("v-spacer")],1):e._e(),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("router-view"),n("vue-progress-bar"),n("v-snackbar",e._b({attrs:{"multi-line":"",timeout:"-1"},scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[n("v-btn",e._b({attrs:{text:"",color:"#00f500"},on:{click:function(t){return t.stopPropagation(),e.snackBtnFn(t)}}},"v-btn",r,!1),[e._v(" "+e._s(e.snackBtnText)+" ")]),n("v-btn",{staticClass:"ml-4",attrs:{icon:""},on:{click:function(t){e.snack=!1}}},[n("v-icon",[e._v("close")])],1)]}}]),model:{value:e.snack,callback:function(t){e.snack=t},expression:"snack"}},"v-snackbar",e.snackOpts,!1),[e._v(" "+e._s(e.snackText)+" ")])],1)],1)],1)},a=[],c=n("5530"),l=n("2f62"),u={data:function(){return{name:"Owlways",drawer:!1,menu:[{name:"Seances",to:"/",icon:"mdi-view-list"}],refreshing:!1,registration:null,snack:!1,snackOpts:{bottom:!0,right:!0},snackText:"",snackBtnText:"",snackBtnFn:null}},created:function(){var e=this;document.addEventListener("swUpdated",this.showRefreshUI,{once:!0}),navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",(function(){e.refreshing||(e.refreshing=!0,window.location.reload(!0))}))},mounted:function(){this.user&&this.$store.dispatch("loadSessions"),this.$store.commit("setVoices")},methods:{showRefreshUI:function(e){this.registration=e.detail,this.snackText="Nouvelle version disponible!",this.snackBtnText="Rafraîchir",this.snackBtnFn=this.refreshApp,this.snack=!0},refreshApp:function(){this.snack=!1,this.registration&&this.registration.waiting&&this.registration.waiting.postMessage("skipWaiting")},logout:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!window.navigator.onLine&&!n)return this.snackText="Vous êtes hors-ligne !\nPour vous reconnecter, vous devrez être en ligne.",this.snackBtnText="Se déconnecter",this.snackBtnFn=function(){t.snack=!1,t.logout(e,!0)},void(this.snack=!0);this.$store.dispatch("logout"),this.$router.push("/login"),this.drawer=!1}},computed:Object(c["a"])({build:function(){return"build #5b5a773"}},Object(l["b"])({user:"getUser"}))},d=u,f=(n("5c0b"),n("2877")),v=n("6544"),p=n.n(v),m=n("7496"),h=n("40dc"),g=n("5bc1"),b=n("8336"),w=n("a523"),x=n("ce7e"),k=n("132d"),_=n("adda"),y=n("8860"),C=n("da13"),S=n("5d23"),V=n("34c3"),O=n("f6c4"),I=n("f774"),E=n("2db4"),j=n("2fa4"),T=Object(f["a"])(d,o,a,!1,null,null,null),L=T.exports;p()(T,{VApp:m["a"],VAppBar:h["a"],VAppBarNavIcon:g["a"],VBtn:b["a"],VContainer:w["a"],VDivider:x["a"],VIcon:k["a"],VImg:_["a"],VList:y["a"],VListItem:C["a"],VListItemContent:S["a"],VListItemIcon:V["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"],VMain:O["a"],VNavigationDrawer:I["a"],VSnackbar:E["a"],VSpacer:j["a"]});var B=n("9483");Object(B["a"])("".concat("/engapp/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(e){console.log("Service worker has been registered."),setInterval((function(){e.update()}),36e5)},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("45fc"),n("d3b7");var A=n("8c4f"),P=(n("7db0"),n("bc3a")),$=n.n(P),N=$.a.create({baseURL:"/engapp/api"});N.interceptors.request.use((function(e){return pe.$Progress.start(),e})),N.interceptors.response.use((function(e){return pe.$Progress.finish(),e}));var U=N;r["a"].use(l["a"]);var F=new l["a"].Store({state:{online:window.navigator.onLine,user:null,sessions:[],current:{sessionIdx:null,exoIdx:null},voices:[]},mutations:{online:function(e,t){e.online=t},setUser:function(e,t){e.user=t,t?localStorage.setItem("user",JSON.stringify(t)):localStorage.removeItem("user")},setVoices:function(e){new Promise((function(e,t){var n,r=window.speechSynthesis;n=setInterval((function(){0!==r.getVoices().length&&(e(r.getVoices()),clearInterval(n))}),10)})).then((function(t){return e.voices=t}))},setSessions:function(e,t){e.sessions=t},setCurrentSession:function(e,t){e.current.sessionIdx=t},setCurrentExo:function(e,t){e.current.exoIdx=t},incCurrentExo:function(e){e.current.exoIdx=e.current.exoIdx+1},resetCurrent:function(e){e.current={sessionIdx:null,exoIdx:null}}},getters:{isOnline:function(e){return e.online},getVoices:function(e){return e.voices},getUser:function(e){var t;return!e.user&&(t=localStorage.getItem("user"))&&(e.user=JSON.parse(t)),e.user},getSession:function(e){return function(t){return e.sessions.find((function(e){return e.id==t}))}},getCurrentExoIdx:function(e){return e.current.exoIdx}},actions:{login:function(){var e=this;return new Promise((function(t,n){U.get("/login.json").then((function(e){return e.data})).then((function(n){e.commit("setUser",n),t(n)})).catch((function(){return n()}))}))},logout:function(){this.commit("setUser",null)},loadSessions:function(){var e=this;U.get("/sessions.json").then((function(e){return e.data})).then((function(t){e.commit("setSessions",t)}))}},modules:{}}),M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Seances")],1)},R=[],q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto"},[n("v-card-title",[e._v("Séances disponibles")]),n("v-divider"),n("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[e._v(" Seance ")]),n("th",{staticClass:"text-left"},[e._v(" Avancement ")])])]),n("tbody",e._l(e.sessions,(function(t){return n("tr",{key:t.id,staticClass:"seance",on:{click:function(n){return e.$router.push({name:"Seance",params:{id:t.id}})}}},[n("td",{staticClass:"text-left"},[e._v(e._s(t.title))]),n("td",{staticClass:"text-left"},[e._v("0/"+e._s(t.exercices.length))])])})),0)]},proxy:!0}])})],1)},D=[],z={name:"Sessions",methods:{},computed:Object(c["a"])({},Object(l["d"])(["sessions"]))},H=z,J=(n("bb46"),n("b0af")),W=n("99d9"),K=n("1f4f"),X=Object(f["a"])(H,q,D,!1,null,"72e3522d",null),G=X.exports;p()(X,{VCard:J["a"],VCardTitle:W["b"],VDivider:x["a"],VSimpleTable:K["a"]});var Q={name:"Home",components:{Seances:G}},Y=Q,Z=Object(f["a"])(Y,M,R,!1,null,null,null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("h1",{staticClass:"white--text mb-5"},[e._v("Owlways")]),n("v-img",{staticClass:"mx-auto logo",attrs:{contain:"",src:"img/logo1.png",position:"center 7px",height:"80",transition:"false"}}),n("v-card",{staticClass:"mx-auto",attrs:{elevation:"2","max-width":"400"}},[n("v-card-title",[e._v("Connexion élève")]),n("v-divider"),n("v-card-text",[n("v-form",{ref:"form",attrs:{"lazy-validation":e.lazy},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{rules:e.loginRules,label:"Identifiant",required:""},model:{value:e.login,callback:function(t){e.login=t},expression:"login"}}),n("v-text-field",{attrs:{rules:e.passwordRules,label:"Mot de passe",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-btn",{staticClass:"mt-5",attrs:{disabled:!e.canLogin,color:"success"},on:{click:e.validate}},[e._v(" "+e._s(e.connexionBtnText)+" ")])],1)],1)],1)],1)},ne=[],re=(n("ac1f"),n("5319"),{data:function(){return{valid:!0,login:"",loginRules:[function(e){return!!e||"Identifiant requis"}],password:"",passwordRules:[function(e){return!!e||"Mot de passe requis"}],lazy:!1}},methods:{validate:function(){var e=this;this.$refs.form.validate(),this.$store.dispatch("login").then((function(t){e.$store.dispatch("loadSessions"),e.$router.replace("/")}))}},computed:Object(c["a"])({canLogin:function(){return this.valid&&this.isOnline},connexionBtnText:function(){return this.isOnline?"CONNEXION":"En attente de reseau..."}},Object(l["b"])(["isOnline"]))}),ie=re,se=n("4bd4"),oe=n("8654"),ae=Object(f["a"])(ie,te,ne,!1,null,null,null),ce=ae.exports;p()(ae,{VBtn:b["a"],VCard:J["a"],VCardText:W["a"],VCardTitle:W["b"],VDivider:x["a"],VForm:se["a"],VImg:_["a"],VTextField:oe["a"]}),r["a"].use(A["a"]);var le=[{path:"/",name:"Home",component:ee},{path:"/login",name:"Login",component:ce,meta:{noAuth:!0,applicationClass:"application-bg"}},{path:"/seance/:id",name:"Seance",props:!0,component:function(){return n.e("seance").then(n.bind(null,"918c"))}}],ue=new A["a"]({base:"/engapp/",scrollBehavior:function(e,t,n){return e.hash?{selector:e.hash}:n||{x:0,y:0}},routes:le});ue.beforeEach((function(e,t,n){var r=F.getters.getUser,i=!e.matched.some((function(e){return e.meta.noAuth}));i&&!r?n({name:"Login"}):n()}));var de=ue,fe=(n("5363"),n("f309"));r["a"].use(fe["a"]);var ve=new fe["a"]({icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,window.addEventListener("online",(function(){return F.commit("online",!0)})),window.addEventListener("offline",(function(){return F.commit("online",!1)})),r["a"].use(s.a,{color:"#75baff",thickness:"3px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},autoRevert:!0,autoFinish:!1});var pe=t["default"]=new r["a"]({router:de,store:F,vuetify:ve,render:function(e){return e(L)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},a899:function(e,t,n){},bb46:function(e,t,n){"use strict";n("04ba")}});
//# sourceMappingURL=app.c7d73ffe.js.map