webpackJsonp([1],{0:function(e,t,n){e.exports=n("NHnr")},G3BA:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("/5sW");n("EuXz"),n("qwQ3"),n("mJx5");function a(e){for(var t=null,n=[],o=location.search.substr(1).split("&"),a=0;a<o.length;a++)n=o[a].split("="),n[0]===e&&(t=decodeURIComponent(n[1]));return t}var r={name:"LlamaDecoder",data:function(){return{name:a("name"),accessGranted:!1,accessDenied:!1,entered:!1,step:0,fileNum:null,notesNum:null,projectName:null,loadText:"Loading...",xz12yk:a("xz12yk")}},created:function(){var e=this;setTimeout(function(){e.name&&417==e.xz12yk?e.accessGranted=!0:e.accessDenied=!0},3e3)},computed:{fname:function(){return this.name.split(" ")[0]||""},lname:function(){return this.name.split(" ")[1]||""},pid:function(){var e=this.fname?this.fname.charCodeAt():1,t=this.lname?this.lname.charCodeAt():1,n=new Date,o=parseFloat(n.getMonth(),10)+1,a=parseFloat(n.getDay(),10)+1,r=parseFloat(n.getFullYear(),10),i=this.notesNum,s=this.projectName?this.projectName.charCodeAt():1,c=this.fileNum;return Math.ceil(e*t/o*a/r*i*s-c)},recordFound:function(){return-1!==i.indexOf(this.pid)},redirect:function(){return"https://www.classyllama.com?p=".concat(this.pid)}},methods:{loadStep:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.step=-1,this.loadText=n||this.loadText,setTimeout(function(){e.bind(t)()},2e3)},step0:function(){this.fileNum=null,this.projectName=null,this.notesNum=null,this.step=0},step1:function(){this.step=1},step2:function(){var e=this;this.step=2,setTimeout(function(){e.recordFound&&(e.step=3)},4e3)},step4:function(){window.location.href=this.redirect}}},i=[7868],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"llama-decoder"},[e.entered?e._e():n("div",{staticClass:"text-center"},[n("h1",[n("span",{staticClass:"glitch",attrs:{"data-text":"Llama Nation"}},[e._v("Llama Nation")]),n("br"),e.name?n("span",[e._v("Agent "+e._s(e.name))]):e._e()]),e.accessGranted||e.accessDenied?e._e():n("p",[e._v("Verifying Access..."),n("br"),e._v(" ")]),e.accessGranted?n("p",[e._v("ACCESS GRANTED"),n("br"),n("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.entered=!0}}},[e._v("Enter")])]):e._e(),e.accessDenied?n("p",{staticClass:"text-danger"},[e._v("ACCESS DENIED"),n("br"),e._v(" ")]):e._e()]),e.entered?n("div",[n("form",[-1==e.step?n("div",[e._v(e._s(e.loadText))]):e._e(),0==e.step?n("div",[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.fileNum,expression:"fileNum"}],staticClass:"form-control",attrs:{required:"",type:"number",id:"file_num","aria-describedby":"file_num_help",placeholder:"Enter File #",autofocus:""},domProps:{value:e.fileNum},on:{input:function(t){t.target.composing||(e.fileNum=t.target.value)}}}),n("small",{staticClass:"form-text text-muted",attrs:{id:"file_num_help"}},[e._v("Found on the top of your mission briefing folder.")])]),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.projectName,expression:"projectName"}],staticClass:"form-control",attrs:{required:"",type:"text",id:"project_name","aria-describedby":"project_name_help",placeholder:"Enter Project Name"},domProps:{value:e.projectName},on:{input:function(t){t.target.composing||(e.projectName=t.target.value)}}}),n("small",{staticClass:"form-text text-muted",attrs:{id:"project_name_help"}},[e._v("Found on the top of your mission briefing folder.")])]),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-secondary btn-block",attrs:{disabled:!e.fileNum||!e.projectName,type:"submit"},on:{click:function(t){t.preventDefault(),e.loadStep(e.step1)}}},[e._v("Next")])])]):e._e(),1==e.step?n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.notesNum,expression:"notesNum"}],staticClass:"form-control",attrs:{required:"",type:"number",id:"notes_num","aria-describedby":"notes_num_help",placeholder:"Enter Confirmation Code",autofocus:""},domProps:{value:e.notesNum},on:{input:function(t){t.target.composing||(e.notesNum=t.target.value)}}}),n("small",{staticClass:"form-text text-muted",attrs:{id:"notes_num_help"}},[e._v("Found in Notes app of your mission-issued mobile device.")]),n("br"),n("button",{staticClass:"btn btn-secondary btn-block",attrs:{disabled:!e.notesNum,type:"submit"},on:{click:function(t){t.preventDefault(),e.loadStep(e.step2)}}},[e._v("Confirm")])]):e._e(),2==e.step?n("div",{staticClass:"form-group text-center"},[e.recordFound?n("p",[e._v("Confirmed. Scanning your network...")]):e._e(),e.recordFound?e._e():n("div",[n("p",[e._v("Confirmation code is invalid.")]),n("p",[n("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.loadStep(e.step0,"Loading...")}}},[e._v("Try again")])])])]):e._e(),3==e.step?n("div",{staticClass:"form-group text-center"},[e.recordFound?n("div",[n("h1",[e._v("Tracking source discovered!")]),n("p",[n("a",{attrs:{href:e.redirect},on:{click:function(t){t.preventDefault(),e.loadStep(e.step4,"Redirecting...")}}},[e._v("Reveal the suspected source")])])]):e._e(),e.recordFound?e._e():n("div",[n("p",[e._v("Unable to find any tracking source.")]),n("p",[n("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.loadStep(e.step0,"Loading...")}}},[e._v("Try again")])])])]):e._e()])]):e._e()])},c=[],l=n("XyMi");function u(e){n("ZhJl")}var d=!1,p=u,m="data-v-52dd4588",f=null,v=Object(l["a"])(r,s,c,d,p,m,f),h=v.exports,_={name:"app",components:{LlamaDecoder:h}},g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("llama-decoder")],1)},b=[];function N(e){n("G3BA")}var C=!1,x=N,y=null,k=null,j=Object(l["a"])(_,g,b,C,x,y,k),w=j.exports,D=n("ydGU");Object(D["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(w)}}).$mount("#app")},ZhJl:function(e,t){}},[0]);
//# sourceMappingURL=app.28fbecf9.js.map