(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{310:function(e,t,r){"use strict";var o=r(2),n=r(4),c=r(55),d=r(221),l=r(220),m=r(3),f=RangeError,v=String,x=Math.floor,k=n(l),y=n("".slice),h=n(1..toFixed),w=function(e,t,r){return 0===t?r:t%2==1?w(e,t-1,r*e):w(e*e,t/2,r)},_=function(data,e,t){for(var r=-1,o=t;++r<6;)o+=e*data[r],data[r]=o%1e7,o=x(o/1e7)},P=function(data,e){for(var t=6,r=0;--t>=0;)r+=data[t],data[t]=x(r/e),r=r%e*1e7},C=function(data){for(var e=6,s="";--e>=0;)if(""!==s||0===e||0!==data[e]){var t=v(data[e]);s=""===s?t:s+k("0",7-t.length)+t}return s};o({target:"Number",proto:!0,forced:m((function(){return"0.000"!==h(8e-5,3)||"1"!==h(.9,0)||"1.25"!==h(1.255,2)||"1000000000000000128"!==h(0xde0b6b3a7640080,0)}))||!m((function(){h({})}))},{toFixed:function(e){var t,r,o,n,l=d(this),m=c(e),data=[0,0,0,0,0,0],x="",h="0";if(m<0||m>20)throw new f("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return v(l);if(l<0&&(x="-",l=-l),l>1e-21)if(r=(t=function(e){for(var t=0,r=e;r>=4096;)t+=12,r/=4096;for(;r>=2;)t+=1,r/=2;return t}(l*w(2,69,1))-69)<0?l*w(2,-t,1):l/w(2,t,1),r*=4503599627370496,(t=52-t)>0){for(_(data,0,r),o=m;o>=7;)_(data,1e7,0),o-=7;for(_(data,w(10,o,1),0),o=t-1;o>=23;)P(data,1<<23),o-=23;P(data,1<<o),_(data,1,1),P(data,2),h=C(data)}else _(data,0,r),_(data,1<<-t,0),h=C(data)+k("0",m);return h=m>0?x+((n=h.length)<=m?"0."+k("0",m-n)+h:y(h,0,n-m)+"."+y(h,n-m)):x+h}})},315:function(e,t,r){"use strict";r.r(t);r(52),r(48),r(14);var o=r(5),n=(r(46),r(219),r(53),r(54),r(30),r(57),r(149),r(25),r(58),r(310),r(45)),c=r.n(n),d={data:function(){return{info:[],viaje:this.$route.params.id,access_token:"",linkForredirect:"",clientes:[],costUser:"",costGrueso:0,costSegundas:0,costPica:0,costMaduro:0,costGruesoPircing:"",costSegundasPircing:"",costPicaPircing:"",costMaduroPircing:""}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,d,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.a.setMask("#gruesoPrecio"),c.a.setMask("#segundaPrecio"),c.a.setMask("#maduroPrecio"),c.a.setMask("#picaPrecio"),r=e.$route.hash,e.linkForredirect=r,n=r.split("&"),d=n.find((function(element){return element.includes("access_token=")})),l=d.split("="),e.access_token=l[1],t.next=12,e.$sheets(l[1],"Viaje".concat(e.$route.params.id),"get");case 12:return t.sent.values.map(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(r,o){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o>0&&e.info.push({id:r[0],cliente:r[1],grueso:r[2],segundas:r[3],pica:r[4],maduro:r[5]});case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),t.next=16,e.$sheets(l[1],"clientes","get");case 16:t.sent.values.map((function(t,r){r>0&&e.clientes.push({id:t[0],nombre:t[1]})}));case 18:case"end":return t.stop()}}),t)})))()},methods:{makeCost:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,c,d,l,m,f,v,x,k;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=function(){return(n=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.replace(/\./g,"").replace(",","."),o=parseFloat(r).toFixed(2),e.abrupt("return",o);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)},r=function(e){return n.apply(this,arguments)},c=void 0!==e.costUser&&null!==e.costUser&&""!==e.costUser,d=0!==e.costGrueso||0!==e.costSegundas||0!==e.costPica||0!==e.costMaduro,t.t0=e.costGrueso>0,!t.t0){t.next=10;break}return t.next=8,r(e.costGruesoPircing);case 8:t.t1=t.sent,t.t0=t.t1>0;case 10:if(l=t.t0,t.t2=e.costSegundas>0,!t.t2){t.next=17;break}return t.next=15,r(e.costSegundasPircing);case 15:t.t3=t.sent,t.t2=t.t3>0;case 17:if(m=t.t2,t.t4=e.costPica>0,!t.t4){t.next=24;break}return t.next=22,r(e.costPicaPircing);case 22:t.t5=t.sent,t.t4=t.t5>0;case 24:if(f=t.t4,t.t6=e.costMaduro>0,!t.t6){t.next=31;break}return t.next=29,r(e.costMaduroPircing);case 29:t.t7=t.sent,t.t6=t.t7>0;case 31:if(v=t.t6,!c){t.next=53;break}if(!d){t.next=50;break}if(x=[],l&&x.push("Grueso"),m&&x.push("Segundas"),f&&x.push("Pica"),v&&x.push("Maduro"),!(x.length>0)){t.next=47;break}return t.next=42,e.$makeCobro(e.access_token,"Viaje".concat(e.viaje,"!B").concat(e.info.length+2,":append"),"post",[e.costUser,String(e.costGrueso),String(e.costSegundas),String(e.costPica),String(e.costMaduro)],e._data);case 42:k=t.sent,console.log(k),window.location.reload(),t.next=48;break;case 47:alert("Precio no válido para: "+x.join(", "));case 48:t.next=51;break;case 50:alert("Agregue la cantidad de platano vendida");case 51:t.next=54;break;case 53:alert("Elija usuario");case 54:case"end":return t.stop()}}),t)})))()},knowUserHaveTravel:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$findColumn(e.access_token,"Viaje".concat(e.viaje),e.costUser);case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))()}}},l=d,m=r(38),component=Object(m.a)(l,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"relative overflow-x-auto"},[t("button",{staticClass:"block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",attrs:{"data-modal-target":"authentication-modal","data-modal-toggle":"authentication-modal",type:"button"}},[e._v("\n      Agregar Compra\n    ")]),e._v(" "),t("div",{staticClass:"fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full",attrs:{id:"authentication-modal",tabindex:"-1","aria-hidden":"true"}},[t("div",{staticClass:"relative w-full max-w-md max-h-full"},[t("div",{staticClass:"relative bg-white rounded-lg shadow dark:bg-gray-700"},[t("button",{staticClass:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white",attrs:{type:"button","data-modal-hide":"authentication-modal"}},[t("svg",{staticClass:"w-3 h-3",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"}},[t("path",{attrs:{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"}})]),e._v(" "),t("span",{staticClass:"sr-only"},[e._v("Close modal")])]),e._v(" "),t("div",{staticClass:"px-6 py-6 lg:px-8"},[t("form",[t("div",{staticClass:"mb-6"},[t("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"countries"}},[e._v("Select an option")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.costUser,expression:"costUser"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{id:"countries"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.costUser=t.target.multiple?r:r[0]},function(t){return e.knowUserHaveTravel()}]}},e._l(e.clientes,(function(object,r){return t("option",{key:r,domProps:{value:object.nombre}},[e._v("\n                    "+e._s(object.nombre)+"\n                  ")])})),0)]),e._v(" "),t("div",{staticClass:"grid gap-6 mb-6 md:grid-cols-2"},[t("div",[t("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"grueso"}},[e._v("Grueso")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.costGrueso,expression:"costGrueso",modifiers:{number:!0}}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"number",id:"grueso",min:"0"},domProps:{value:e.costGrueso},on:{input:function(t){t.target.composing||(e.costGrueso=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),t("div",[t("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"gruesoPrecio"}},[e._v("Precio del Grueso")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.costGruesoPircing,expression:"costGruesoPircing"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"text",id:"gruesoPrecio",min:"0"},domProps:{value:e.costGruesoPircing},on:{input:function(t){t.target.composing||(e.costGruesoPircing=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"grid gap-6 mb-6 md:grid-cols-2"},[t("div",[t("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"segundas"}},[e._v("Segundas")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.costSegundas,expression:"costSegundas",modifiers:{number:!0}}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"number",id:"segundas",min:"0"},domProps:{value:e.costSegundas},on:{input:function(t){t.target.composing||(e.costSegundas=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),t("div",[t("div",[t("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"segundaPrecio"}},[e._v("Precio Segunda")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.costSegundasPircing,expression:"costSegundasPircing"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"text",id:"segundaPrecio",min:"0"},domProps:{value:e.costSegundasPircing},on:{input:function(t){t.target.composing||(e.costSegundasPircing=t.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"grid gap-6 mb-6 md:grid-cols-2"},[t("div",[t("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"picas"}},[e._v("Picas")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.costPica,expression:"costPica",modifiers:{number:!0}}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"number",id:"picas",min:"0"},domProps:{value:e.costPica},on:{input:function(t){t.target.composing||(e.costPica=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),t("div",[t("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"picaPrecio"}},[e._v("Precio Pica")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.costPicaPircing,expression:"costPicaPircing"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"text",id:"picaPrecio",min:"0"},domProps:{value:e.costPicaPircing},on:{input:function(t){t.target.composing||(e.costPicaPircing=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"grid gap-6 mb-6 md:grid-cols-2"},[t("div",[t("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"maduro"}},[e._v("Maduro")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.costMaduro,expression:"costMaduro",modifiers:{number:!0}}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"number",id:"maduro",min:"0"},domProps:{value:e.costMaduro},on:{input:function(t){t.target.composing||(e.costMaduro=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),t("div",[t("label",{staticClass:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",attrs:{for:"maduroPrecio"}},[e._v("Precio del Mduro")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.costMaduroPircing,expression:"costMaduroPircing"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"text",id:"maduroPrecio",min:"0"},domProps:{value:e.costMaduroPircing},on:{input:function(t){t.target.composing||(e.costMaduroPircing=t.target.value)}}})])]),e._v(" "),t("a",{staticClass:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",on:{click:function(t){return e.makeCost()}}},[e._v("\n                Submit\n              ")])])])])])]),e._v(" "),t("br"),e._v(" "),t("table",{staticClass:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},[e._m(0),e._v(" "),t("tbody",e._l(e.info,(function(object,r){return t("tr",{key:r,staticClass:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},[t("td",{staticClass:"px-6 py-4"},[e._v(e._s(object.cliente))]),e._v(" "),t("td",{staticClass:"px-6 py-4"},[e._v(e._s(object.grueso))]),e._v(" "),t("td",{staticClass:"px-6 py-4"},[e._v(e._s(object.segundas))]),e._v(" "),t("td",{staticClass:"px-6 py-4"},[e._v(e._s(object.pica))]),e._v(" "),t("td",{staticClass:"px-6 py-4"},[e._v(e._s(object.maduro))])])})),0)])])])}),[function(){var e=this,t=e._self._c;return t("thead",{staticClass:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[t("tr",[t("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[e._v("Cliente")]),e._v(" "),t("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[e._v("Grueso")]),e._v(" "),t("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[e._v("segundas")]),e._v(" "),t("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[e._v("picas")]),e._v(" "),t("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[e._v("maduro")])])])}],!1,null,null,null);t.default=component.exports}}]);