(this.webpackJsonpfood=this.webpackJsonpfood||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(16),r=c.n(s),o=(c(21),c(22),c(4)),i=c.n(o),l=c(5),d=c(3),j=c(6),m=c.n(j),b=(c.p,c(0)),u=function(e){var t=e.item.recipe,c=t.image,n=t.label,a=t.url;console.log(c,n,a);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"col-md-4 mx-auto  my-3 d-flex justify-content-center",children:Object(b.jsxs)("div",{class:"card",style:{width:"18rem"},children:[Object(b.jsx)("img",{src:c||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtFd1ExC-w6ezJzwqVDfcCB_SYgdt_qcmRusWUb0bC10SL2mks-DZR975xKcIH5GgpDMA&usqp=CAU",class:"card-img-top",alt:"..."}),Object(b.jsxs)("div",{class:"card-body d-flex flex-column justify-content-between",children:[Object(b.jsx)("h5",{class:"card-title text-center",children:n}),Object(b.jsx)("div",{className:" d-flex justify-content-center",children:Object(b.jsx)("a",{href:a,target:"_blank",class:"btn btn-primary mx-auto",children:"Go somewhere"})})]})]})})})},h=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(d.a)(s,2),o=r[0],j=r[1],h=Object(n.useState)(!1),x=Object(d.a)(h,2),f=x[0],O=x[1],p=function(){var e=Object(l.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),"15b2f974","d2b04a9014975e5dd5d71f3b223d7612",e.next=5,m.a.get("https://api.edamam.com/search?q=".concat(o,"&app_id=").concat("15b2f974","&app_key=").concat("d2b04a9014975e5dd5d71f3b223d7612"));case 5:c=e.sent,console.log(c.data),0!=c.data.hits.length?(a(c.data.hits),O(!1)):(O(!0),a("")),j("");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"text-center mt-5 text-capitalize text-shadow fw-bolder ms-3 h-100\r animate__animated animate__bounce",style:{color:"#20c997"},children:"search your favourit food \ud83d\ude0b"}),Object(b.jsx)("div",{className:"container mt-5",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-6  mx-auto",children:Object(b.jsxs)("form",{className:"row g-3",children:[Object(b.jsxs)("div",{className:"col-8  mx-auto form-floating",children:[Object(b.jsx)("input",{type:"text",class:"form-control",id:"floatingInput",placeholder:"food",onChange:function(e){return j(e.target.value)},value:o}),Object(b.jsx)("label",{for:"floatingInput",className:"ms-3",children:"Food Name"})]}),Object(b.jsx)("div",{className:"col-5  mx-auto",children:Object(b.jsx)("input",{type:"submit",value:"Search",class:"form-control btn btn-info","aria-label":"First name",onClick:p})})]})}),Object(b.jsx)("div",{className:"w-100"}),Object(b.jsx)("div",{className:"col-md-10  mx-auto my-5",children:Object(b.jsxs)("div",{className:"row",children:[f&&Object(b.jsx)("h1",{className:"d-inline py-3 my-3 text-center shadow-lg rounded-3 ",children:"Your Searching Food not here"}),c?c.map((function(e,t){return Object(b.jsx)(u,{item:e},t)})):Object(b.jsx)(b.Fragment,{children:!f&&Object(b.jsx)("h1",{className:"d-inline py-3 text-center shadow-lg rounded-3",children:"Search Your Favourit Food"})})]})})]})})]})};var x=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(h,{})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),f()}},[[43,1,2]]]);
//# sourceMappingURL=main.550cc296.chunk.js.map