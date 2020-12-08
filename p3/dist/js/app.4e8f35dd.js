(function(t){function e(e){for(var o,i,a=e[0],u=e[1],c=e[2],l=0,p=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==s[u]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},s={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o,s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("router-link",{attrs:{id:"titleLogo",to:"/",exact:""}},[t._v(" Mike's Notes ")]),n("nav",[n("ul",[n("li",t._l(t.links,(function(e){return n("router-link",{key:e,attrs:{to:t.paths[e],exact:""}},[t._v(t._s(e)+" ")])})),1)])])],1),n("router-view",{attrs:{subjects:t.subjects,notes:t.notes},on:{"update-subjects":function(e){return t.updateSubjectsNotes()}}})],1)},i=[],a=n("bc3a").create({baseURL:null!==(o=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL)&&void 0!==o?o:"http://e28-api.michaelkchen.me/",responseType:"json"}),u={name:"App",data:function(){return{subjects:[],notes:[],links:["Home","Favorites","Add a Subject"],paths:{Home:"/",Favorites:"/favorites","Add a Subject":"/new"}}},components:{},methods:{updateSubjectsNotes:function(){var t=this;a.get("subject").then((function(e){t.subjects=e.data.subject})),a.get("notes").then((function(e){t.notes=e.data.notes}))}},mounted:function(){this.updateSubjectsNotes()}},c=u,d=(n("5c0b"),n("2877")),l=Object(d["a"])(c,r,i,!1,null,null,null),p=l.exports,v=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("show-subjects",{attrs:{subjects:t.subjects,notes:t.notes}})],1)},f=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.subjects.slice().reverse(),(function(e){return n("div",{key:e.id,staticClass:"container"},[n("div",{staticClass:"subjects"},[n("router-link",{staticClass:"subjectTitle",attrs:{to:"/"+e.id,exact:""}},[t._v(" "+t._s(e.name)+" ")]),n("div",{staticClass:"subjectDescription"},[t._v(" "+t._s(e.description)+" ")])],1)])})),0)},_=[],j={name:"show-subjects",props:["subjects","notes"],data:function(){return{}}},h=j,g=Object(d["a"])(h,m,_,!1,null,null,null),N=g.exports,y={name:"",props:["subjects","notes"],components:{"show-subjects":N},data:function(){return{}}},w=y,S=Object(d["a"])(w,b,f,!1,null,null,null),x=S.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"center-align"},[t._v("Favorite Notes")]),t._l(t.notes.slice().reverse(),(function(e){return n("div",{key:e.id},[1==e.favorite?n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"notes"},[n("h5",[t._v(t._s(e.title))]),n("pre",[t._v(t._s(e.description))]),n("div",{staticClass:"timeInfo"},[t._v(" Created on: "+t._s(t._f("moment")(e.created_at,"MMMM Do YYYY, h:mm:ss a"))),n("br"),t._v(" Last Edited on: "+t._s(t._f("moment")(e.updated_at,"MMMM Do YYYY, h:mm:ss a"))+" ")])])])]):t._e()])}))],2)},$=[],A={name:"favorites-page",props:["subjects","notes"],components:{},data:function(){return{}}},O=A,C=Object(d["a"])(O,k,$,!1,null,null,null),M=C.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"center-align"},[t._v("Add New Subject")]),n("label",{attrs:{for:"title"}},[t._v("Name"),n("span",{staticStyle:{color:"red"}},[t._v("*")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newSubject.name,expression:"newSubject.name"}],attrs:{type:"text",id:"title"},domProps:{value:t.newSubject.name},on:{input:function(e){e.target.composing||t.$set(t.newSubject,"name",e.target.value)}}})]),n("label",{attrs:{for:"description"}},[t._v("Description"),n("span",{staticStyle:{color:"red"}},[t._v("*")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newSubject.description,expression:"newSubject.description"}],attrs:{type:"textarea",id:"description"},domProps:{value:t.newSubject.description},on:{input:function(e){e.target.composing||t.$set(t.newSubject,"description",e.target.value)}}})]),n("div",{staticClass:"center-align"},[n("button",{on:{click:t.addSubject}},[t._v("Add Note")]),n("ul",{staticStyle:{"list-style-type":"none",color:"red"}},t._l(t.errors,(function(e){return n("li",{key:e[0]},[t._v(" "+t._s(e[0])+" ")])})),0)]),t.subjectAdded?n("div",{staticClass:"center-align"},[n("h5",{staticStyle:{color:"green"}},[t._v("New Subject Added!")])]):t._e()])},P=[],Y={props:["subject"],components:{},data:function(){return{newSubject:{name:"",description:""},subjectAdded:"",errors:null}},methods:{addSubject:function(){var t=this;this.subjectAdded=!1,a.post("/subject",this.newSubject).then((function(e){e.data.errors?(t.errors=e.data.errors,console.log(e.data)):(t.$emit("update-subjects"),t.subjectAdded=!0,t.newSubject={},t.errors=null)}))}}},T=Y,D=Object(d["a"])(T,E,P,!1,null,null,null),F=D.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.subject?n("div",[n("div",{staticClass:"center-align"},[n("h2",[t._v(" "+t._s(t.subject.name)+" ")]),n("h5",[t._v(t._s(t.subject.description))])])]):t._e(),n("add-note",{attrs:{subject:t.subject,notes:t.notes},on:{"update-subjects":function(e){return t.updateSubjectsNotes()}}}),n("show-notes",{attrs:{subject:t.subject,notes:t.notes},on:{"update-subjects":function(e){return t.updateSubjectsNotes()}}})],1)},R=[],U=(n("4de4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.subject?n("div",{staticClass:"container notes"},[n("h3",{staticClass:"center-align",attrs:{id:"newNoteToggle"},on:{click:t.addnoteToggle}},[t._v("Add New Note")]),t.addnoteActive?n("div",[n("label",{attrs:{for:"title"}},[t._v("Title"),n("span",{staticStyle:{color:"red"}},[t._v("*")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newNote.title,expression:"newNote.title"}],attrs:{type:"text",id:"title"},domProps:{value:t.newNote.title},on:{input:function(e){e.target.composing||t.$set(t.newNote,"title",e.target.value)}}})]),n("label",{attrs:{for:"subject"}},[t._v("Subject"),n("span",{staticStyle:{color:"red"}},[t._v("*")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.subject.name,expression:"subject.name"}],attrs:{type:"text",id:"subject",disabled:""},domProps:{value:t.subject.name},on:{input:function(e){e.target.composing||t.$set(t.subject,"name",e.target.value)}}})]),n("label",{attrs:{for:"description"}},[t._v("Description"),n("span",{staticStyle:{color:"red"}},[t._v("*")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newNote.description,expression:"newNote.description"}],attrs:{type:"textarea",id:"description"},domProps:{value:t.newNote.description},on:{input:function(e){e.target.composing||t.$set(t.newNote,"description",e.target.value)}}})]),n("div",{staticClass:"center-align"},[n("button",{on:{click:t.addNote}},[t._v("Add Note")]),n("ul",{staticStyle:{"list-style-type":"none",color:"red"}},t._l(t.errors,(function(e){return n("li",{key:e[0]},[t._v(" "+t._s(e[0])+" ")])})),0)])]):t._e(),t.noteAdded?n("div",{staticClass:"center-align"},[n("h5",{staticStyle:{color:"green"}},[t._v("Note Added!")])]):t._e()]):t._e()])}),B=[],I=(n("b0c0"),{name:"add-note",props:["subject","notes","id"],data:function(){return{newNote:{title:"",subject:"",description:"",favorite:"0"},noteAdded:"",errors:null,addnoteActive:!1}},methods:{addnoteToggle:function(){this.noteAdded=!1,this.errors=null,0==this.addnoteActive?this.addnoteActive=!0:this.addnoteActive=!1},addNote:function(){var t=this;this.newNote.subject=this.subject.name,a.post("/notes",this.newNote).then((function(e){e.data.errors?(t.errors=e.data.errors,console.log(e.data)):(t.$emit("update-subjects"),t.newNote={},t.addnoteToggle(),t.noteAdded=!0)}))}}}),H=I,J=Object(d["a"])(H,U,B,!1,null,null,null),V=J.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.subject?n("div",t._l(t.notes.slice().reverse(),(function(e){return n("div",{key:e.id},[e.subject==t.subject.name?n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"notes"},[n("h5",[t._v(t._s(e.title))]),n("pre",[t._v(t._s(e.description))]),n("div",{staticClass:"timeInfo"},[t._v(" Created on: "+t._s(t._f("moment")(e.created_at,"MMMM Do YYYY, h:mm:ss a"))),n("br"),t._v(" Last Edited on: "+t._s(t._f("moment")(e.updated_at,"MMMM Do YYYY, h:mm:ss a"))+" ")]),n("div",{staticClass:"noteButtons"},[n("edit-note",{attrs:{note:e},on:{"update-subjects":function(e){return t.updateSubjectsNotes()}}}),n("toggle-favorite",{attrs:{note:e},on:{"update-subjects":function(e){return t.updateSubjectsNotes()}}}),n("delete-note",{attrs:{note:e},on:{"update-subjects":function(e){return t.updateSubjectsNotes()}}})],1)])])]):t._e()])})),0):t._e()])},z=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{on:{click:function(e){return t.editTF()}}},[t._v("Edit Note")]),t.edit?n("div",[n("label",{attrs:{for:"name"}},[t._v("Title"),n("span",{staticStyle:{color:"red"}},[t._v("*")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.updateNote.title,expression:"updateNote.title"}],attrs:{type:"text"},domProps:{value:t.updateNote.title},on:{input:function(e){e.target.composing||t.$set(t.updateNote,"title",e.target.value)}}})]),n("label",{attrs:{for:"subject"}},[t._v("Subject"),n("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.updateNote.subject,expression:"updateNote.subject"}],attrs:{type:"text",disabled:""},domProps:{value:t.updateNote.subject},on:{input:function(e){e.target.composing||t.$set(t.updateNote,"subject",e.target.value)}}})]),n("label",{attrs:{for:"description"}},[t._v("Description"),n("span",{staticStyle:{color:"red"}},[t._v("*")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.updateNote.description,expression:"updateNote.description"}],attrs:{id:"description"},domProps:{value:t.updateNote.description},on:{input:function(e){e.target.composing||t.$set(t.updateNote,"description",e.target.value)}}})]),n("button",{attrs:{id:"editSaveBtn"},on:{click:function(e){t.editTF(),t.editNote()}}},[t._v("Save Changes")])]):t._e(),n("ul",{staticStyle:{"list-style-type":"none",color:"red"}},t._l(t.errors,(function(e){return n("li",{key:e[0]},[t._v(" "+t._s(e[0])+" ")])})),0)])},K=[],Q={name:"edit-note",props:["note"],data:function(){return{updateNote:s["a"].util.extend({},this.note),errors:null,edit:!1}},methods:{editTF:function(){1==this.edit?this.edit=!1:this.edit=!0},editNote:function(){var t=this;a.put("/notes/"+this.updateNote.id,this.updateNote).then((function(e){e.data.errors?(t.errors=e.data.errors,console.log(e.data)):(t.errors=null,t.$emit("update-subjects"))}))}}},W=Q,X=Object(d["a"])(W,G,K,!1,null,null,null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{on:{click:t.deleteNote}},[t._v("Delete")]),n("ul",{staticStyle:{"list-style-type":"none",color:"red"}},t._l(t.errors,(function(e){return n("li",{key:e[0]},[t._v(" "+t._s(e[0])+" ")])})),0)])},et=[],nt={name:"delete-note",props:["note"],data:function(){return{updateNote:s["a"].util.extend({},this.note),errors:null}},methods:{deleteNote:function(){var t=this;a.delete("/notes/"+this.note.id,this.updateNote).then((function(e){e.data.errors?(t.errors=e.data.errors,console.log(e.data)):t.$emit("update-subjects")}))}}},ot=nt,st=Object(d["a"])(ot,tt,et,!1,null,null,null),rt=st.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[1==t.updateNote.favorite?n("div",[n("button",{on:{click:t.toggleFavorite}},[t._v("Remove from favorites")])]):n("div",[n("button",{on:{click:t.toggleFavorite}},[t._v("Add to favorites")])]),n("ul",{staticStyle:{"list-style-type":"none",color:"red"}},t._l(t.errors,(function(e){return n("li",{key:e[0]},[t._v(" "+t._s(e[0])+" ")])})),0)])},at=[],ut={name:"toggle-favorite",props:["note"],data:function(){return{updateNote:s["a"].util.extend({},this.note),errors:null}},methods:{toggleFavorite:function(){var t=this;this.updateNote=s["a"].util.extend({},this.note),1==this.updateNote.favorite?this.updateNote.favorite=0:this.updateNote.favorite=1,a.put("/notes/"+this.note.id,this.updateNote).then((function(e){e.data.errors?(t.errors=e.data.errors,console.log(e.data)):t.$emit("update-subjects")}))}}},ct=ut,dt=Object(d["a"])(ct,it,at,!1,null,null,null),lt=dt.exports,pt={name:"show-notes",props:["subject","notes","id"],components:{"edit-note":Z,"delete-note":rt,"toggle-favorite":lt},data:function(){return{}},computed:{},methods:{updateSubjectsNotes:function(){this.$emit("update-subjects")}}},vt=pt,bt=Object(d["a"])(vt,q,z,!1,null,null,null),ft=bt.exports,mt={name:"subject-page",props:["subjects","notes","id"],components:{"show-notes":ft,"add-note":V},data:function(){return{}},computed:{subject:function(){var t=this;return this.subjects.filter((function(e){return e.id==t.id}),this.id)[0]}},methods:{updateSubjectsNotes:function(){this.$emit("update-subjects")}}},_t=mt,jt=Object(d["a"])(_t,L,R,!1,null,null,null),ht=jt.exports;s["a"].config.productionTip=!1,s["a"].use(v["a"]);var gt=new v["a"]({mode:"history",routes:[{path:"/",component:x},{path:"/favorites",component:M},{path:"/new",component:F},{path:"/:id",component:ht,props:!0}]});new s["a"]({router:gt,render:function(t){return t(p)}}).$mount("#app"),s["a"].use(n("2ead"))},"5c0b":function(t,e,n){"use strict";n("c58b")},c58b:function(t,e,n){}});
//# sourceMappingURL=app.4e8f35dd.js.map