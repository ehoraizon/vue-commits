(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{360:function(t,e,m){"use strict";m.r(e);var c=m(22).default.extend({name:"CommitComponent",props:{commit:{type:Object,default:null},isActive:{type:Boolean,default:!1}}}),o=m(106),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,m=t._self._c||e;return null!=t.commit?m("b-collapse",{attrs:{visible:t.isActive}},[m("b-list-group",{staticClass:"max-w-md"},[m("b-list-group-item",{staticClass:"d-flex align-items-center justify-around bg-[#ffac07]"},[m("b-avatar",{attrs:{variant:"info",src:t.commit.authorAvatar}}),t._v(" "),m("a",{staticClass:"mx-2",attrs:{href:t.commit.authorLink}},[t._v(" "+t._s(t.commit.authorName)+" ")]),t._v(" "),m("span",[t._v(" "+t._s(t.commit.authorDate)+" ")]),t._v(" "),m("b-badge",{staticClass:"bg-[#ff0c00]"},[t._v(" author ")])],1),t._v(" "),m("b-list-group-item",{staticClass:"d-flex align-items-center justify-around bg-[#ffac07]"},[m("b-avatar",{attrs:{variant:"info",src:t.commit.committerAvatar}}),t._v(" "),m("a",{staticClass:"mx-2",attrs:{href:t.commit.committerLink}},[t._v("\n        "+t._s(t.commit.committerName)+"\n      ")]),t._v(" "),m("span",[t._v(" "+t._s(t.commit.committerDate)+" ")]),t._v(" "),m("b-badge",{staticClass:"bg-[#ff0c00]"},[t._v(" committer ")])],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);