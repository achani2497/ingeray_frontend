(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50121be8"],{"0f4c":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("div",{staticClass:"padding-container"},[s("router-view")],1),s("footer-menu")],1)},r=[],o=s("428a"),a={components:{"footer-menu":o["a"]}},n=a,c=s("2877"),l=Object(c["a"])(n,i,r,!1,null,null,null);e["default"]=l.exports},"333a":function(t,e,s){var i={"./alquileres.jpg":"c3f9","./ambientacion.jpg":"e0c2","./asistencia-remota.jpg":"4c8e","./atencion.jpg":"36b6","./calculo-de-blindaje.jpg":"8b57","./digitalizacion.jpg":"ab22","./equipamiento.jpg":"e63a","./mantenimiento.jpg":"aabb","./puesta-en-valor.jpg":"1cbe","./servicio-tecnico.jpg":"5865"};function r(t){var e=o(t);return s(e)}function o(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id="333a"},"428a":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"padding-container py-10 flex flex-col gap-4",attrs:{id:"servicesFooter"}},[i("titles",{staticClass:"pl-4",attrs:{title:"Conozca más sobre nuestro",subtitle:"Prestaciones y servicios",fontSize:31}}),i("div",{staticClass:"grid grid-cols-4 grid-rows-2 gap-y-4 gap-8 mt-4"},[t._l(8,(function(e){return i("router-link",{key:e,staticClass:"servicio-container flex flex-col",attrs:{to:t.servicios[e-1].url}},[i("span",{staticClass:"pl-4 footer-menu-title"},[t._v(" "+t._s(t.servicios[e-1].nombreCorto)+" ")]),i("img",{staticClass:"shadow-lg",attrs:{src:t.servicios[e-1].miniBanner}})])})),t.supportIf?i("router-link",{staticClass:"servicio-container flex flex-col",attrs:{to:"/contacto"}},[i("span",{staticClass:"pl-4 footer-menu-title"},[t._v(" Atención Personalizada ")]),i("img",{staticClass:"shadow-lg",attrs:{src:s("36b6")}})]):t._e()],2)],1)},r=[],o=s("e3c1"),a={data(){return{servicios:[],supportIf:!0}},created(){this.showSupport(),this.setServices()},watch:{$route(t,e){this.show=!1,this.setServices()}},methods:{showSupport(){"servicios"!==this.$route.path.split("/")[1]?this.supportIf=!1:this.supportIf=!0},setServices(){if("servicios"===this.$route.path.split("/")[1]){let t=this.$route.path.split("/")[2],e=o.servicios.find(e=>e.url===t),i=e.exception,r=o.servicios.map(t=>({...t,miniBanner:s("333a")(`./${t.url}.jpg`)}));this.servicios=r.filter(t=>t.url!=i)}this.servicios=o.servicios.map(t=>({...t,miniBanner:s("333a")(`./${t.url}.jpg`)}))}}},n=a,c=(s("712a"),s("2877")),l=Object(c["a"])(n,i,r,!1,null,"7d08cc00",null);e["a"]=l.exports},"712a":function(t,e,s){"use strict";var i=s("b90c"),r=s.n(i);r.a},b90c:function(t,e,s){}}]);
//# sourceMappingURL=chunk-50121be8.c6cba0bf.js.map