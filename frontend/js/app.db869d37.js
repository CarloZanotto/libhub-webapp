(function(e){function a(a){for(var s,r,n=a[0],l=a[1],c=a[2],d=0,u=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);h&&h(a);while(u.length)u.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,a=0;a<i.length;a++){for(var t=i[a],s=!0,r=1;r<t.length;r++){var n=t[r];0!==o[n]&&(s=!1)}s&&(i.splice(a--,1),e=l(l.s=t[0]))}return e}var s={},r={app:0},o={app:0},i=[];function n(e){return l.p+"js/"+({"books~chat~dashboard~libraries~tags~user":"books~chat~dashboard~libraries~tags~user","books~libraries~user":"books~libraries~user","books~libraries":"books~libraries",books:"books",libraries:"libraries",user:"user",chat:"chat",dashboard:"dashboard",tags:"tags"}[e]||e)+"."+{"books~chat~dashboard~libraries~tags~user":"056fef1b","books~libraries~user":"0daf3c6a","books~libraries":"3e9c2821",books:"c8d9043b",libraries:"9057cd55",user:"a3ae060e",chat:"8094cfd8",dashboard:"5685bf13",tags:"6b5be19b"}[e]+".js"}function l(a){if(s[a])return s[a].exports;var t=s[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var a=[],t={"books~chat~dashboard~libraries~tags~user":1,"books~libraries~user":1,"books~libraries":1,books:1,user:1,tags:1};r[e]?a.push(r[e]):0!==r[e]&&t[e]&&a.push(r[e]=new Promise((function(a,t){for(var s="css/"+({"books~chat~dashboard~libraries~tags~user":"books~chat~dashboard~libraries~tags~user","books~libraries~user":"books~libraries~user","books~libraries":"books~libraries",books:"books",libraries:"libraries",user:"user",chat:"chat",dashboard:"dashboard",tags:"tags"}[e]||e)+"."+{"books~chat~dashboard~libraries~tags~user":"4cfa8b2f","books~libraries~user":"d491990c","books~libraries":"c6fe3ff2",books:"c3b9d727",libraries:"31d6cfe0",user:"3bf3bb9a",chat:"31d6cfe0",dashboard:"31d6cfe0",tags:"96b7896c"}[e]+".css",o=l.p+s,i=document.getElementsByTagName("link"),n=0;n<i.length;n++){var c=i[n],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===s||d===o))return a()}var u=document.getElementsByTagName("style");for(n=0;n<u.length;n++){c=u[n],d=c.getAttribute("data-href");if(d===s||d===o)return a()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=a,h.onerror=function(a){var s=a&&a.target&&a.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=s,delete r[e],h.parentNode.removeChild(h),t(i)},h.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(h)})).then((function(){r[e]=0})));var s=o[e];if(0!==s)if(s)a.push(s[2]);else{var i=new Promise((function(a,t){s=o[e]=[a,t]}));a.push(s[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=n(e);var u=new Error;c=function(a){d.onerror=d.onload=null,clearTimeout(h);var t=o[e];if(0!==t){if(t){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",u.name="ChunkLoadError",u.type=s,u.request=r,t[1](u)}o[e]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(a)},l.m=e,l.c=s,l.d=function(e,a,t){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)l.d(t,s,function(a){return e[a]}.bind(null,s));return t},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=a,c=c.slice();for(var u=0;u<c.length;u++)a(c[u]);var h=d;i.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";t("85ec")},"0b28":function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"a",(function(){return n}));var s=t("bc3a"),r=t.n(s);const o="https://lib-hub-api.herokuapp.com/api/users/password-recovery/";async function i(e){console.log(e),await r.a.post(o+"username/"+e)}async function n(e,a,t){await r.a.post(`https://lib-hub-api.herokuapp.com/api/users/${e}/password-recovery/${t}`,a)}},"3d93":function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"d",(function(){return l})),t.d(a,"c",(function(){return c})),t.d(a,"b",(function(){return d}));var s=t("bc3a"),r=t.n(s),o=t("f121");const i=e=>`https://lib-hub-api.herokuapp.com/api/users/${e}/chats`;async function n(e,a,t){const s=await r.a.get(i(e)+"/"+a,Object(o["a"])(t));return s.data}async function l(e,a,t,s){await r.a.post(i(e)+"/"+a,t,Object(o["a"])(s))}async function c(e,a,t){const s=await r.a.post(i(e),a,Object(o["a"])(t));return s.data}async function d(e,a){const t=await r.a.get(i(e),Object(o["a"])(a));return t.data}},4160:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",{attrs:{fluid:""}},[t("chat-messages")],1)},r=[],o=t("9c9d"),i={name:"Chat",components:{ChatMessages:o["a"]},data(){return{chats:[]}},methods:{openChatForm(e){this.$store.commit("showChatForm",e)}},computed:{show_ChatForm:{get:function(){return this.$store.state.ChatForm},set:function(e){e?this.$store.commit("showChatForm",null):this.$store.commit("hideChatForm")}}},mounted:function(){this.chats=[{_id:"1",users:["Eugenio","Federico"],createdOn:"2020-12-17",newMessages:1},{_id:"2",users:["Eugenio","Sebastiano"],createdOn:"2020-12-18",newMessages:0},{_id:"3",users:["Eugenio","Carlo"],createdOn:"2020-12-19",newMessages:5}]}},n=i,l=t("2877"),c=t("6544"),d=t.n(c),u=t("a523"),h=Object(l["a"])(n,s,r,!1,null,null,null);a["default"]=h.exports;d()(h,{VContainer:u["a"]})},"4a93":function(e,a,t){e.exports=t.p+"img/logo-rounded.d4f5d8f7.png"},"56d7":function(e,a,t){"use strict";t.r(a);t("a79d");var s=t("2b0e"),r=t("bc3a"),o=t.n(r);let i={};const n=o.a.create(i);n.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),n.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e){e.axios=n,window.axios=n,Object.defineProperties(e.prototype,{axios:{get(){return n}},$axios:{get(){return n}}})},s["default"].use(Plugin);Plugin;var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-app",[t("router-view",{attrs:{name:"bar"}}),t("v-main",{attrs:{fluid:""}},[t("router-view")],1)],1)},c=[],d={name:"App",beforeCreate(){},data:()=>({})},u=d,h=(t("034f"),t("2877")),b=t("6544"),m=t.n(b),g=t("7496"),p=t("f6c4"),f=Object(h["a"])(u,l,c,!1,null,null,null),v=f.exports;m()(f,{VApp:g["a"],VMain:p["a"]});var w=t("8c4f"),k=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",{staticClass:"ma-2",attrs:{"align-content-lg":"",fluid:""}},[t("v-row",{staticClass:"d-flex justify-center"},[t("v-col",[t("about-us")],1),t("v-col",[t("v-card",{staticClass:"d-flex align-start mt-2 mr-5",attrs:{"elevation-5":""}},[t("signup-form")],1)],1)],1),t("v-row",{attrs:{justify:"center"}},[t("v-dialog",{attrs:{"max-width":"600px"},model:{value:e.showLoginDialog,callback:function(a){e.showLoginDialog=a},expression:"showLoginDialog"}},[t("log-in-form")],1)],1)],1)},y=[],_=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",[t("div",{staticClass:"transition-swing",class:["text-h2"]},[e._v("About Us")]),t("br"),e._v(" We are not going to abandon libhub. We have designed an ambitious project and since the beginning it was thought to be used by some members of the team who had the problem of huge home libraries. We already developed this main part and we could already use it for ourselves. We deem that some of the functionalities that we did not manage to develop, are still important to have a beautiful project that will go on our personal portfolio sites. We choose vuetify as a frontend framework not only because it had a huge quantity of components and consisted in a perfect material implementation, but also because it made it very easy to build a responsive web application. With not too much effort our site mobile support can become perfect and we can extend it even for tablet devices. Nonetheless, we think that a mobile application could be better and could make our project be reached by lots of users. We have again divided the team in two subtems, according to our commitments. One subteam will develop both a perfect responsive webapp, making it also a pwa, while the other one will develop an hybrid mobile application by using React Native. We think that having learnt vuejs will make it very easy to learn React. We also are thinking about developing a desktop application, which will be exactly the same of the web app by using Electron. Given a site, electron creates a desktop application that works on Windows, OSX and Linux, by creating a chromium instance that runs the site and supports also the node js libraries that would not work in a normal browser. By doing this we want to deliver to the user the possibility to have an offline support of the service, that uses a local sqlite3 database when the application is offline and synchronizes with the cloud mongodb when it comes back online. "),t("br"),t("br"),e._v(" If you want to have an awesome experince try to use the "),t("strong",[e._v(" superUser Account ")]),t("br"),e._v(" Username: "),t("strong",[e._v(" the_one ")]),t("br"),e._v(" Pass: "),t("strong",[e._v(" nsfw")])])},C=[],x={name:"AboutUs"},D=x,I=t("a523"),L=Object(h["a"])(D,_,C,!1,null,null,null),P=L.exports;m()(L,{VContainer:I["a"]});var V=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",[t("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(a){e.valid=a},expression:"valid"}},[t("v-text-field",{attrs:{id:"Username",rules:e.usernameRules,counter:23,label:"Username",required:""},model:{value:e.signup.username,callback:function(a){e.$set(e.signup,"username",a)},expression:"signup.username"}}),t("v-text-field",{attrs:{id:"name",label:"Name",required:""},model:{value:e.signup.name,callback:function(a){e.$set(e.signup,"name",a)},expression:"signup.name"}}),t("v-text-field",{attrs:{id:"surname",label:"Surname",required:""},model:{value:e.signup.surname,callback:function(a){e.$set(e.signup,"surname",a)},expression:"signup.surname"}}),t("v-text-field",{attrs:{id:"UserEmail",rules:e.emailRules,label:"E-mail",required:""},model:{value:e.signup.email,callback:function(a){e.$set(e.signup,"email",a)},expression:"signup.email"}}),t("v-text-field",{attrs:{"append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[e.passwordRules.required,e.passwordRules.min,e.passwordRules.max,e.passwordRules.valid],type:e.show1?"text":"password",name:"input-10-1",label:"Password",counter:"",hint:"At least 8 characters",required:""},on:{"click:append":function(a){e.show1=!e.show1}},model:{value:e.signup.password,callback:function(a){e.$set(e.signup,"password",a)},expression:"signup.password"}}),t("v-text-field",{attrs:{"append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[e.confirmPasswordRules.equal],type:e.show1?"text":"password",name:"input-10-1",label:"Confirm Password",counter:"",hint:"At least 8 characters",required:""},on:{"click:append":function(a){e.show1=!e.show1}},model:{value:e.confirmPassword,callback:function(a){e.confirmPassword=a},expression:"confirmPassword"}}),t("br"),t("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.validate}},[e._v(" Sign up ")]),t("v-btn",{staticClass:"float-right",attrs:{text:"",tile:""},on:{click:e.openLoginDialog}},[t("span",{staticClass:"mr-2"},[e._v("Login ")]),t("v-icon",[e._v("mdi-account-circle")])],1),t("br"),""!==e.error?t("v-alert",{staticClass:"mt-2",attrs:{dense:"",outlined:"",type:"error"}},[t("strong",[e._v(e._s(e.error))])]):e._e()],1),t("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialog,callback:function(a){e.dialog=a},expression:"dialog"}},[t("v-card",[t("v-card-title",{staticClass:"headline"},[e._v(" Veification Process ")]),t("v-card-text",[e._v("Check your email to verify your account")]),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(a){e.dialog=!1}}},[e._v(" Ok ")])],1)],1)],1)],1)},$=[],j=t("d706"),O={name:"SignupForm",data(){return{valid:!0,show1:!1,show2:!0,dialog:!1,error:"",signup:{password:"",username:"",email:"",name:"",surname:""},password:"",passwordRules:{required:e=>!!e||"Required.",min:e=>e.length>=8||"Min 8 characters",max:e=>e.length<=23||"Max 23 characters",valid:e=>/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,23}$/.test(e)||" password must contain at least an upper case, a lower case, a number and a special character"},confirmPassword:"",confirmPasswordRules:{equal:e=>e===this.signup.password||"Password must match"},username:"",usernameRules:[e=>!!e||"Username is required",e=>e&&e.length<=23||"Username must be less than 23 characters"],email:"",emailRules:[e=>!!e||"E-mail is required",e=>/.+@.+\..+/.test(e)||"E-mail must be valid"]}},methods:{async validate(){if(this.$refs.form.validate())try{await Object(j["b"])(this.signup),this.dialog=!0,this.error=""}catch(e){this.error=e.response.data.message}},openLoginDialog(){this.$store.commit("showLoginDialog")}}},B=O,S=t("0798"),F=t("8336"),E=t("b0af"),R=t("99d9"),M=t("169a"),U=t("4bd4"),T=t("132d"),A=t("2fa4"),q=t("8654"),N=Object(h["a"])(B,V,$,!1,null,null,null),z=N.exports;m()(N,{VAlert:S["a"],VBtn:F["a"],VCard:E["a"],VCardActions:R["a"],VCardText:R["c"],VCardTitle:R["d"],VContainer:I["a"],VDialog:M["a"],VForm:U["a"],VIcon:T["a"],VSpacer:A["a"],VTextField:q["a"]});var W=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-card",[t("v-card-title",[t("span",{staticClass:"headline"},[e._v("Login")])]),t("v-card-text",[t("v-form",{ref:"form",staticStyle:{height:"100%"},attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(a){e.valid=a},expression:"valid"}},[t("v-container",{attrs:{"fill-height":""}},[t("v-row",{attrs:{align:"center"}},[t("v-col",[t("v-text-field",{attrs:{id:"UserName",rules:e.usernameRules,counter:23,label:"Username",required:""},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}})],1)],1),t("v-row",{attrs:{align:"center"}},[t("v-col",[t("v-text-field",{attrs:{"append-icon":e.show1?"mdi-eye":"mdi-eye-off",passwordRules:[e.passwordRules.required,e.passwordRules.min],type:e.show1?"text":"password",name:"input-10-1",label:"Password",required:""},on:{"click:append":function(a){e.show1=!e.show1}},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}})],1)],1),t("v-row",{attrs:{align:"center"}},[t("v-col",[t("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.validate}},[e._v(" Log in ")]),t("v-btn",{staticClass:"float-right",attrs:{color:"primary"},on:{click:e.recover}},[e._v(" Recover Password ")])],1),t("v-col",{attrs:{cols:"12"}},[""!==e.errormessage?t("v-alert",{staticClass:"mt-2",attrs:{dense:"",outlined:"",type:"error"}},[t("strong",[e._v(e._s(e.errormessage))])]):e._e()],1)],1)],1)],1)],1),t("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialog,callback:function(a){e.dialog=a},expression:"dialog"}},[t("v-card",[t("v-card-title",{staticClass:"headline"},[e._v(" Change Password Process ")]),t("v-card-text",[e._v("Check your email to change your password ")]),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(a){e.dialog=!1}}},[e._v(" Ok ")])],1)],1)],1)],1)},H=[],J=t("0b28"),Z={name:"LogInForm",data(){return{valid:!0,show1:!1,show2:!0,dialog:!1,loading:!1,errormessage:"",password:"",passwordRules:{required:e=>!!e||"Required.",min:e=>e.length>=8||"Min 8 characters",emailMatch:()=>"The email and password you entered don't match"},username:"",usernameRules:[e=>!!e||"Username is required",e=>e&&e.length<=23||"Username must be less than 23 characters"]}},methods:{async validate(){if(this.$refs.form.validate(),this.username.localeCompare("the_one")||this.password.localeCompare("nsfw"))if(this.username.localeCompare("thatonehub")||this.password.localeCompare("nsfw")){if(!this.loading)try{this.loading=!0;const e=await Object(j["a"])({username:this.username,password:this.password});localStorage.setItem("accessToken",e.token),localStorage.setItem("user",JSON.stringify(e.user)),this.$store.commit("setUser",e.user),this.$store.commit("hideLoginDialog"),this.$router.push("/dash")}catch(e){this.errormessage="Invalid Username or Password"}finally{this.loading=!1}}else window.open("https://is.gd/I4J1rU");else window.open("https://matias.ma/nsfw/#_=")},async recover(){if(!this.loading)try{this.loading=!0,await Object(J["b"])(this.username),this.$store.commit("hideLoginDialog"),this.dialog=!0}catch(e){this.errormessage="Invalid Username or Password"}finally{this.loading=!1}}}},G=Z,K=t("62ad"),X=t("0fd9"),Y=Object(h["a"])(G,W,H,!1,null,null,null),Q=Y.exports;m()(Y,{VAlert:S["a"],VBtn:F["a"],VCard:E["a"],VCardActions:R["a"],VCardText:R["c"],VCardTitle:R["d"],VCol:K["a"],VContainer:I["a"],VDialog:M["a"],VForm:U["a"],VRow:X["a"],VSpacer:A["a"],VTextField:q["a"]});var ee={name:"Home",components:{SignupForm:z,AboutUs:P,LogInForm:Q},data:()=>({}),methods:{login(){this.router.push("/login")},hideLoginDialog(){this.$store.commit("hideLoginDialog")}},computed:{showLoginDialog:{get:function(){return this.$store.state.loginDialog},set:function(e){e?this.$store.commit("showLoginDialog"):this.$store.commit("hideLoginDialog")}}}},ae=ee,te=Object(h["a"])(ae,k,y,!1,null,null,null),se=te.exports;m()(te,{VCard:E["a"],VCol:K["a"],VContainer:I["a"],VDialog:M["a"],VRow:X["a"]});var re=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("v-app-bar",{attrs:{app:"",color:"#62000F"}},[s("div",{staticClass:"d-flex align-center"},[s("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Lib-hub Logo",contain:"",src:t("4a93"),transition:"scale-transition",width:"100"}})],1),s("v-spacer"),s("v-btn",{attrs:{text:"",tile:""},on:{click:e.openLoginDialog}},[s("span",{staticClass:"mr-2 button-white"},[e._v("Login ")]),s("v-icon",{attrs:{color:"white"}},[e._v("mdi-account-circle")])],1)],1)},oe=[],ie={name:"HomeBar",methods:{openLoginDialog(){this.$store.commit("showLoginDialog")}}},ne=ie,le=t("40dc"),ce=t("adda"),de=Object(h["a"])(ne,re,oe,!1,null,null,null),ue=de.exports;m()(de,{VAppBar:le["a"],VBtn:F["a"],VIcon:T["a"],VImg:ce["a"],VSpacer:A["a"]});var he=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("v-container",{attrs:{fluid:""}},[s("div",[s("v-row",{staticClass:"central-align-style"},[s("v-col",{staticStyle:{"align-contents":"center"}},[s("h1",{staticStyle:{color:"#ff1744"},domProps:{textContent:e._s(e.error_message)}},[e._v(" "+e._s(e.error_message)+" ")]),s("v-img",{attrs:{src:t("5b30"),"max-height":"500","max-width":"500"}})],1),s("v-col",[s("v-btn",{attrs:{color:"error","x-large":"",tile:"",elevation:"0"},on:{click:e.send_to_home}},[e._v("Return Home")])],1)],1)],1)])},be=[],me={name:"Error_page",data:()=>({error_message:""}),methods:{send_to_home(){this.$router.push("/")}},mounted(){this.error_message=this.$store.state.error_message}},ge=me,pe=Object(h["a"])(ge,he,be,!1,null,null,null),fe=pe.exports;m()(pe,{VBtn:F["a"],VCol:K["a"],VContainer:I["a"],VImg:ce["a"],VRow:X["a"]});var ve=t("fc14"),we=t("4160");s["default"].use(w["a"]);const ke=[{path:"/",name:"Home",components:{default:se,bar:ue}},{path:"/dash",name:"Dashboard",components:{default:()=>Promise.all([t.e("books~chat~dashboard~libraries~tags~user"),t.e("dashboard")]).then(t.bind(null,"3ddb")),bar:()=>Promise.all([t.e("books~chat~dashboard~libraries~tags~user"),t.e("dashboard")]).then(t.bind(null,"902b"))}},{path:"/libraries",name:"Libraries",components:{default:()=>Promise.all([t.e("books~chat~dashboard~libraries~tags~user"),t.e("books~libraries~user"),t.e("books~libraries"),t.e("libraries")]).then(t.bind(null,"c122")),bar:()=>Promise.all([t.e("books~chat~dashboard~libraries~tags~user"),t.e("books~libraries~user"),t.e("books~libraries"),t.e("libraries")]).then(t.bind(null,"902b"))}},{path:"/libraries/:lid/books",name:"Books",components:{default:()=>Promise.all([t.e("books~chat~dashboard~libraries~tags~user"),t.e("books~libraries~user"),t.e("books~libraries"),t.e("books")]).then(t.bind(null,"262d")),bar:()=>Promise.all([t.e("books~chat~dashboard~libraries~tags~user"),t.e("books~libraries~user"),t.e("books~libraries"),t.e("books")]).then(t.bind(null,"902b"))}},{path:"/libraries/:lid/tags",name:"Tags",components:{default:()=>Promise.all([t.e("books~chat~dashboard~libraries~tags~user"),t.e("tags")]).then(t.bind(null,"fee8")),bar:()=>Promise.all([t.e("books~chat~dashboard~libraries~tags~user"),t.e("tags")]).then(t.bind(null,"902b"))}},{path:"/friends",name:"Friends",components:{default:()=>Promise.all([t.e("books~chat~dashboard~libraries~tags~user"),t.e("books~libraries~user"),t.e("user")]).then(t.bind(null,"336f")),bar:()=>Promise.all([t.e("books~chat~dashboard~libraries~tags~user"),t.e("books~libraries~user"),t.e("user")]).then(t.bind(null,"2103"))}},{path:"/user",name:"User",components:{default:()=>Promise.all([t.e("books~chat~dashboard~libraries~tags~user"),t.e("books~libraries~user"),t.e("user")]).then(t.bind(null,"31b2")),bar:()=>Promise.all([t.e("books~chat~dashboard~libraries~tags~user"),t.e("books~libraries~user"),t.e("user")]).then(t.bind(null,"902b"))}},{path:"/chat",name:"Chat",components:{default:()=>Promise.all([t.e("books~chat~dashboard~libraries~tags~user"),t.e("chat")]).then(t.bind(null,"4160")),bar:()=>Promise.all([t.e("books~chat~dashboard~libraries~tags~user"),t.e("chat")]).then(t.bind(null,"902b"))}},{path:"/users/:uid/verification/:token",name:"Verification",components:{default:()=>Promise.all([t.e("books~chat~dashboard~libraries~tags~user"),t.e("chat")]).then(t.bind(null,"df19")),bar:()=>Promise.all([t.e("books~chat~dashboard~libraries~tags~user"),t.e("chat")]).then(t.bind(null,"fc14"))}},{path:"/user/:uid/password-recovery/:token",name:"RecoveryPassword",components:{default:()=>Promise.all([t.e("books~chat~dashboard~libraries~tags~user"),t.e("chat")]).then(t.bind(null,"19b2")),bar:()=>Promise.all([t.e("books~chat~dashboard~libraries~tags~user"),t.e("chat")]).then(t.bind(null,"fc14"))}},{path:"/error_page",name:"Error_page",components:{default:fe,bar:ve["default"]}},{path:"/test_component",name:"Test_component",components:{default:we["default"]}}],ye=new w["a"]({mode:"history",base:"/",routes:ke});var _e=ye,Ce=t("f309"),xe=t("95d5"),De=t.n(xe);s["default"].use(De.a),s["default"].use(Ce["a"]);var Ie=new Ce["a"]({}),Le=t("2f62");s["default"].use(Le["a"]);var Pe=new Le["a"].Store({state:{user:JSON.parse(localStorage.getItem("user"))||null,LibraryId:"",ChatID:"",BookId:"",model:null,tabs:[!0,!1,!1],error_message:"",isbn_obtained_from_image:"",loginDialog:!1,libraryDialog:!1,bookDialog:!1,InsertBookForm_Dialog:!1,InsertLibraryForm_Dialog:!1,chatDialog:!1,friend:{},libraries:[],books:[],book:{},chat:{},chatReceiver:""},mutations:{clearStore(e){e.user=null,e.LibraryId="",e.ChatID="",e.BookId="",e.model=null,e.tabs=[!0,!1,!1],e.error_message="",e.isbn_obtained_from_image="",e.loginDialog=!1,e.libraryDialog=!1,e.bookDialog=!1,e.InsertBookForm_Dialog=!1,e.InsertLibraryForm_Dialog=!1,e.ChatForm=!1,e.libraries=[],e.books=[],e.book={},e.chat={},e.chatReceiver=""},setUser(e,a){e.user=a},setLibraryId(e,a){e.LibraryId=a},setBookId(e,a){e.BookId=a},setErrorMessage(e,a){e.error_message=a},setIsbnObatinedFromImage(e,a){e.isbn_obtained_from_image=a},setLibraries(e,a){e.libraries=a},addLibrary(e,a){e.libraries.push(a)},setBooks(e,a){e.books=a},addBookToBooks(e,a){e.books.push(a)},setBook(e,a){e.book=a},showLoginDialog(e){e.loginDialog=!0},hideLoginDialog(e){e.loginDialog=!1},show_InsertBookForm_Dialog(e){e.InsertBookForm_Dialog=!0},hide_InsertBookForm_Dialog(e){e.InsertBookForm_Dialog=!1},show_InsertLibraryForm_Dialog(e){e.InsertLibraryForm_Dialog=!0},hide_InsertLibraryForm_Dialog(e){e.InsertLibraryForm_Dialog=!1},show_LibraryDetails_Dialog(e,a){null!=a&&(e.LibraryId=a),e.libraryDialog=!0},hide_LibraryDetails_Dialog(e){e.libraryDialog=!1},show_BookDetails_Dialog(e,a){null!=a&&(e.BookId=a),e.bookDialog=!0},hide_BookDetails_Dialog(e){e.bookDialog=!1},showChatDialog(e,a){e.ChatID=a.chatId,e.friend=a.friend,e.chatDialog=!0},hideChatDialog(e){e.chatDialog=!1}},getters:{getUser:e=>e.user,getFriend:e=>e.friend,getLibraries:e=>e.libraries,getLibraryId:e=>e.LibraryId,getBooks:e=>e.books,getBookId:e=>e.BookId,getBook:e=>e.book,getChat:e=>e.chat,getChatId:e=>e.ChatID,getChatReceiver:e=>e.chatReceiver},actions:{},modules:{}});s["default"].config.productionTip=!1,s["default"].use(Le["a"]),new s["default"]({router:_e,vuetify:Ie,store:Pe,render:e=>e(v)}).$mount("#app")},"5b30":function(e,a,t){e.exports=t.p+"img/jojo_doggo.76cbe0b9.png"},"85ec":function(e,a,t){},"9c9d":function(e,a,t){"use strict";var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-card",{attrs:{tile:""}},[t("v-toolbar",{attrs:{flat:"",dark:"",color:"#62000F"}},[t("v-btn",{attrs:{icon:"",dark:""},on:{click:function(a){return e.$store.commit("hideChatDialog")}}},[t("v-icon",[e._v("mdi-close")])],1),t("v-toolbar-title",[e._v(e._s(e.friend.username))])],1),t("v-card-text",[t("v-container",{attrs:{fluid:""}},[t("Chat",{staticClass:"py-2 px-1",attrs:{displayUsername:!1,displayTime:!1,avatar:e.displayAvatar,participants:e.handledPartecipants,myself:e.handledUser,messages:e.handledMessages,"on-type":e.onType,"on-message-submit":e.onMessageSubmit,placeholder:e.placeholder,colors:e.colors,"close-button-icon-size":e.closeButtonIconSize,"on-close":e.onClose,"submit-icon-size":e.submitIconSize,"load-more-messages":e.toLoad.length>0?e.loadMoreMessages:null,"async-mode":e.asyncMode,"scroll-bottom":e.scrollBottom,"display-header":e.displayHeader}})],1)],1)],1)},r=[],o=(t("ddb0"),t("8162")),i=(t("7e6d"),t("3d93")),n={name:"ChatMessages",components:{Chat:o["Chat"]},data(){return{loading:!1,visible:!0,messages_get:[],friend:{},placeholder:"send your message",colors:{message:{myself:{bg:"#62000F",text:"#fff"},others:{bg:"#fb4141",text:"#fff"},messagesDisplay:{bg:"#f0eeee"}},submitIcon:"#b91010"},submitIconSize:"30px",closeButtonIconSize:"20px",asyncMode:!1,toLoad:[],scrollBottom:{messageSent:!0,messageReceived:!1},displayHeader:!1,displayAvatar:{size:"small",hape:"circle"}}},methods:{onType:function(){},loadMoreMessages(e){setTimeout(()=>{e(this.toLoad),this.messages.unshift(...this.toLoad),this.toLoad=[]},1e3)},onMessageSubmit:async function(e){if(!1===this.loading)try{this.loading=!0;const a=this.$store.getters.getUser,t=this.$store.getters.getChatId;await Object(i["d"])(a._id,t,{text:e.content},localStorage.getItem("accessToken")),this.messages.push(e)}catch(a){}finally{this.loading=!1}},onClose(){this.visible=!1},async loadMessages(){const e=this.$store.getters.getUser,a=this.$store.getters.getChatId;if(null!==a)try{this.messages_get=await Object(i["a"])(e._id,a,localStorage.getItem("accessToken"))}catch(t){}}},computed:{handledUser(){const e=this.$store.getters.getUser;return{name:e.username,id:1,avatar:e.avatar||"/assets/user-default.jpg"}},handledPartecipants(){const e=this.$store.getters.getFriend;return[{name:e.username||null,id:2,avatar:e.avatar||"/assets/user-default.jpg"}]},handledMessages(){const e=this.$store.getters.getUser;let a=[];for(let t in this.messages_get.messages){let s={},r=new Date(this.messages_get.messages[t].date);s.participantId=this.messages_get.messages[t].author===e._id?1:2,s.myself=1===s.participantId,s.content=this.messages_get.messages[t].text,s.timestamp={year:r.getFullYear(),month:r.getMonth(),day:r.getDay(),hour:r.getHours(),minute:r.getMinutes(),second:r.getSeconds(),millisecond:r.getMilliseconds()},a.push(s)}return a}},async mounted(){await this.loadMessages(),this.friend=this.$store.getters.getFriend}},l=n,c=t("2877"),d=t("6544"),u=t.n(d),h=t("8336"),b=t("b0af"),m=t("99d9"),g=t("a523"),p=t("132d"),f=t("71d9"),v=t("2a7f"),w=Object(c["a"])(l,s,r,!1,null,null,null);a["a"]=w.exports;u()(w,{VBtn:h["a"],VCard:b["a"],VCardText:m["c"],VContainer:g["a"],VIcon:p["a"],VToolbar:f["a"],VToolbarTitle:v["a"]})},d706:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return n})),t.d(a,"c",(function(){return l}));var s=t("bc3a"),r=t.n(s);const o="https://lib-hub-api.herokuapp.com/api/users/";async function i(e){const a=await r.a.post(o+"login",e);return a.data}async function n(e){await r.a.post(o+"signup",e)}async function l(e,a){const t=await r.a.post(o+e+"/verify/"+a);return t.data}},f121:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));Object({NODE_ENV:"production",BASE_URL:"/"})["VUE_APP_API_HOSTNAME"];function s(e){return{headers:{Authorization:e}}}},fc14:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("v-app-bar",{attrs:{app:"",color:"#62000F"}},[s("div",{staticClass:"d-flex align-center"},[s("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Lib-hub Logo",contain:"",src:t("4a93"),transition:"scale-transition",width:"100"}})],1)])},r=[],o={name:"ErrorBar"},i=o,n=t("2877"),l=t("6544"),c=t.n(l),d=t("40dc"),u=t("adda"),h=Object(n["a"])(i,s,r,!1,null,null,null);a["default"]=h.exports;c()(h,{VAppBar:d["a"],VImg:u["a"]})}});
//# sourceMappingURL=app.db869d37.js.map