(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a1ccfa3"],{"409e":function(t,e,s){"use strict";var o=s("b57e"),n=s.n(o);n.a},6753:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},t._l(t.categorias,(function(e,o){return s("div",{key:o,staticClass:"container"},[s("CustomPath",{attrs:{slavons:t.diagnosticoImagenesPath}}),s("titles",{attrs:{subtitle:e.nombreCategoria,fontSize:25}}),s("div",{staticClass:"subcategorias"},t._l(e.subcategorias,(function(t,e){return s("div",{key:e,staticClass:"tab"},[s("mask-redirect-button-vue",{attrs:{tabName:t.nombreProducto,buttonText:"Ver Equipos"}})],1)})),0)],1)})),0)},n=[],a=s("bdf5"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"flex flex-wrap"},t._l(t.slavons,(function(e,o){return s("li",{key:o},[s("router-link",{staticClass:"flex blue",attrs:{to:e.sectionUrl}},[t._v(t._s(e.sectionName)+" "),o<t.slavons.length-1?s("p",{staticClass:"px-2 text-black"},[t._v(" > ")]):t._e()])],1)})),0)},r=[],l={props:["slavons"]},c=l,u=s("2877"),d=Object(u["a"])(c,i,r,!1,null,null,null),m=d.exports;const h={data:function(){return{}},methods:{dameUnSlavon:function(t,e){return{sectionName:t,sectionUrl:e}}}};var v=s("3fa0"),f={mixins:[h],components:{CustomPath:m,MaskRedirectButtonVue:v["a"]},data:function(){return{lastScrollPosition:0,showNavbar:!1,categorias:a.categorias,basePath:[{sectionName:"Inicio",sectionUrl:"/"},{sectionName:"Productos",sectionUrl:"/productos"}]}},methods:{onScroll(){let t=window.innerWidth;if(t>650){var e=window.pageYOffset||document.documentElement.scrollTop;if(e<0)return;this.showNavbar=e>300,this.lastScrollPosition=e}},generameElPathCompleto(t,e){let s=this.dameUnSlavon(t,e),o=this.basePath;return o.push(s),o}},mounted(){window.addEventListener("scroll",this.onScroll)},destroyed(){window.removeEventListener("scroll",this.onScroll)},computed:{diagnosticoImagenesPath(){this.generameElPathCompleto("Diagnóstico por Imágenes","/productos")},veterinariaPath(){this.generameElPathCompleto("Division Veterinaria","/productos")}}},p=f,b=(s("409e"),Object(u["a"])(p,o,n,!1,null,"b76ee776",null));e["default"]=b.exports},b57e:function(t,e,s){}}]);
//# sourceMappingURL=chunk-6a1ccfa3.83838501.js.map