(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1ee8"],{"7d16":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("h2",{staticClass:"center-align"},[t._v("Favorite Notes")]),t.favorites.length>0?s("div",t._l(t.notes.slice().reverse(),(function(e){return s("div",{key:e.id},t._l(t.favorites,(function(n){return s("div",{key:n.id},[e.id==n.note_id?s("div",[s("div",{staticClass:"container"},[s("div",{staticClass:"notes"},[s("h5",[t._v(t._s(e.title))]),s("pre",[t._v(t._s(e.description))]),s("div",{staticClass:"timeInfo"},[t._v(" Created on: "+t._s(t._f("moment")(e.created_at,"MMMM Do YYYY, h:mm:ss a"))),s("br"),t._v(" Last Edited on: "+t._s(t._f("moment")(e.updated_at,"MMMM Do YYYY, h:mm:ss a"))+" ")])])])]):t._e()])})),0)})),0):s("div",{staticClass:"center-align"},[s("p",[t._v("No favorites :(")])])])},a=[],i=s("1112"),o={name:"favorites-page",props:["subjects","notes"],components:{},data:function(){return{favorites:""}},mounted:function(){var t=this;i["a"].get("/notefavorite").then((function(e){e.data.errors?(t.errors=e.data.errors,console.log(e.data)):t.favorites=e.data.notefavorite}))}},r=o,d=s("2877"),c=Object(d["a"])(r,n,a,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0e1ee8.05d7b214.js.map