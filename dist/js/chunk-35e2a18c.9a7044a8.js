(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35e2a18c"],{"06da":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-col gap-4 pt-8 mb-8"},[a("titles",{attrs:{title:t.title,subtitle:"Galería",fontSize:25}}),a("div",{staticClass:"opcion-imagen opcion-activa",staticStyle:{"font-family":"'IngeTextBold', Arial, Helvetica, sans-serif"}},[t._v(" Imágenes Clinicas ")]),a("div",{staticClass:"flex flex-wrap gap-4 justify-around"},t._l(t.producto.zoomGallery.slice(0,t.imagesToShow),(function(e,o){return a("picture-zoom-button",{key:o,attrs:{sectionName:"/productos/humanos/"+t.sectionName+"/",imageName:e.baseImg,imageExtension:".png",imageWith:"240px"}})})),1),a("button",{staticClass:"contact-outline self-end px-6",on:{click:function(e){t.showAllImages=!t.showAllImages}}},[t._v(" "+t._s(t.buttonText)+" ")])],1)},s=[],i=a("d093"),c={props:["producto","title","sectionName"],components:{"picture-zoom-button":i["a"]},data(){return{showAllImages:!1}},computed:{imagesToShow(){return this.showAllImages?this.producto.zoomGallery.length:3},buttonText(){return this.showAllImages?"Ver Menos":"Ver Más"}}},n=c,r=(a("3760"),a("2877")),l=Object(r["a"])(n,o,s,!1,null,"2e223dde",null);e["a"]=l.exports},"2b20":function(t,e,a){},3760:function(t,e,a){"use strict";var o=a("2b20"),s=a.n(o);s.a},"3fbc":function(t,e,a){"use strict";var o=a("8c87"),s=a.n(o);s.a},"8c87":function(t,e,a){},d093:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"picture-zoom-button-container"},[o("div",{staticClass:"tab-content"},[o("img",{attrs:{src:a("216e")("./images"+t.sectionName+t.imageName+t.imageExtension),width:t.imageWith}}),o("div",{staticClass:"mask w-full h-full flex justify-center items-center"},[o("button",{staticClass:"contact-inge-button",attrs:{type:"button"},on:{click:function(e){t.showModal=!0}}},[t._v(" Ampliar ")])])]),t.showModal?o("modal",{attrs:{large:"md"},on:{close:function(e){t.showModal=!1}},scopedSlots:t._u([{key:"content",fn:function(){return[o("button",{staticClass:"absolute top-2 right-2 text-xl text-white",staticStyle:{"font-size":"60px"},attrs:{type:"button"},on:{click:function(e){t.showModal=!1}}},[o("span",[t._v("×")])]),o("img",{attrs:{src:a("216e")("./images"+t.sectionName+t.imageName+"-zoom"+t.imageExtension),alt:"imagen ampliada de rayos x"}})]},proxy:!0}],null,!1,1255761983)}):t._e()],1)},s=[],i={props:{sectionName:{type:String},imageName:{type:String},imageExtension:{type:String},imageWith:{type:String}},name:"picture-zoom-button",data:function(){return{showModal:!1,resourcesPath:"@/assets/images"}}},c=i,n=(a("3fbc"),a("2877")),r=Object(n["a"])(c,o,s,!1,null,"50aa1330",null);e["a"]=r.exports},dbde:function(t,e,a){},ee16:function(t,e,a){"use strict";var o=a("dbde"),s=a.n(o);s.a},fd62:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("product-template",{scopedSlots:t._u([{key:"productInfo",fn:function(){return[a("caracteristicas",{attrs:{datos:t.producto.caracteristicas}}),a("img",{staticClass:"galeria-caracteristicas",attrs:{src:t.getImgSource(),alt:"galeria-caracteristicas"}}),a("div",{staticClass:"contenedor-img-caracteristicas"},[a("p",{staticClass:"nombre-imagenes-caracteristicas"},[t._v("Interruptor Sensible")]),a("p",{staticClass:"nombre-imagenes-caracteristicas"},[t._v("Interfaces Múltiples")]),a("p",{staticClass:"nombre-imagenes-caracteristicas"},[t._v("Diseño antigolpes")]),a("p",{staticClass:"nombre-imagenes-caracteristicas"},[t._v("Pulsador Remoto")]),a("p",{staticClass:"nombre-imagenes-caracteristicas"},[t._v("Colimado Regulable")])]),a("especificaciones",{attrs:{datos:t.producto.especificaciones}}),a("zoom-gallery",{attrs:{producto:t.producto,title:t.producto.nombreCompleto,sectionName:"radioDigital"}}),a("documentos",{attrs:{brochures:t.producto.brochures}})]},proxy:!0}])},[t.showModal?a("modal",{attrs:{header:!1},scopedSlots:t._u([{key:"content",fn:function(){return[a("contact-form",{attrs:{producto:t.producto.nombreCompleto},on:{closeModal:function(e){t.showModal=!1}}})]},proxy:!0}],null,!1,3767326897)}):t._e()],1)},s=[],i=a("1477"),c=a("5807"),n=a("e85c"),r=a("c8dfe"),l=a("1d71"),u=a("b993"),m=a("2d0e"),p=a("06da"),d={props:["slug"],mixins:[i["a"]],components:{"product-template":l["a"],caracteristicas:c["a"],documentos:n["a"],especificaciones:r["a"],"banner-contacto":u["default"],"contact-form":m["a"],"zoom-gallery":p["a"]},data(){return{producto:"",showModal:!1}},beforeMount(){this.producto=this.getProductEquipment(this.slug)},methods:{getImgSource:function(){return a("e1f6")}}},f=d,g=(a("ee16"),a("2877")),b=Object(g["a"])(f,o,s,!1,null,"89ff6518",null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-35e2a18c.9a7044a8.js.map