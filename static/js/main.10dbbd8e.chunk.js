(this.webpackJsonpreact_demo_app=this.webpackJsonpreact_demo_app||[]).push([[0],{110:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),a=n(16),r=n.n(a),o=(n(76),n(54)),s=n(55),l=n(64),j=n(63),d=(n(77),n(23)),p=n(8),x=n(27),h=n(22),b=n.n(h),m=n(122),O=n(123),u=n(134),g=n(124),f=n(125),v=n(132),y=n(65),w=n(2),C=Object(m.a)((function(t){return{card:{backgroundColor:"white",marginTop:"50px",marginLeft:"10px",marginRight:"10px",padding:"0",maxHeight:"100%"},mainContainer:{minHeight:"calc(100vh - 131px)",maxWidth:"1150px",padding:"0 15px",display:"flex"},commentCard:{backgroundColor:"white",marginTop:"50px",marginLeft:"10px",marginRight:"10px",padding:"0",maxHeight:"100%",border:"1px solid black"}}}));function k(){var t=C(),e=Object(p.g)().id,n=Object(c.useState)({id:"",title:"",body:""}),i=Object(x.a)(n,2),a=i[0],r=i[1],o=Object(c.useState)([]),s=Object(x.a)(o,2),l=s[0],j=s[1];Object(c.useEffect)((function(){b.a.get("https://jsonplaceholder.typicode.com/posts/".concat(e)).then((function(t){r(t.data)})),b.a.get("https://jsonplaceholder.typicode.com/posts/".concat(e,"/comments")).then((function(t){j(t.data)}))}));return Object(w.jsxs)(g.a,{component:"main",className:t.mainContainer,children:[Object(w.jsx)(f.a,{}),Object(w.jsx)(v.a,{sx:{width:"100%"},children:Object(w.jsxs)(O.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[Object(w.jsx)(y.a,{className:t.card,children:Object(w.jsxs)(O.a,{container:!0,wrap:"nowrap",spacing:2,children:[Object(w.jsx)(O.a,{item:!0,children:Object(w.jsx)(u.a,{alt:"Remy Sharp",style:{width:"70px",height:"70px",marginLeft:"15px",marginTop:"7px"}})}),Object(w.jsxs)(O.a,{justifyContent:"left",item:!0,xs:!0,zeroMinWidth:!0,children:[Object(w.jsx)("h4",{style:{margin:"10px ",textAlign:"left"},children:a.title}),Object(w.jsx)("p",{style:{textAlign:"left"},children:a.body})]})]})}),Object(w.jsx)("div",{style:{padding:14},children:Object(w.jsx)(y.a,{style:{padding:"40px 20px"},children:Object(w.jsx)(w.Fragment,{children:(null===l||void 0===l?void 0:l.length)>0&&l.map((function(t,e){var n=t.body;return Object(w.jsxs)(O.a,{container:!0,wrap:"nowrap",spacing:2,children:[Object(w.jsx)(O.a,{item:!0,children:Object(w.jsx)(u.a,{alt:"Remy Sharp"})}),Object(w.jsxs)(O.a,{justifyContent:"left",item:!0,xs:!0,zeroMinWidth:!0,children:[Object(w.jsx)("h4",{style:{margin:0,textAlign:"left"},children:"Comment"}),Object(w.jsx)("p",{style:{textAlign:"left"},children:n})]})]},e)}))})})})]})})]})}var S=n(126),N=n(127),L=n(128),R=n(129),A=n(62),F=n.n(A),T=n(31),H=n(61),_=n.n(H),B=Object(m.a)((function(t){return{card:{backgroundColor:"gray",marginTop:"50px",marginLeft:"10px",marginRight:"10px",padding:"25px",borderRadius:"25px",maxHeight:"100%"},avtarIcon:{margin:"0 auto",width:"140px",height:"140px"},mainContainer:{minHeight:"calc(100vh - 131px)",maxWidth:"1150px",padding:"0 15px",display:"flex"}}}));function I(t){var e=B(),n=(Object(p.f)(),Object(c.useState)([])),i=Object(x.a)(n,2),a=i[0],r=i[1];Object(c.useEffect)((function(){b.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){return r(t.data)}))}),[]);return Object(w.jsx)(v.a,{sx:{width:"100%"},children:Object(w.jsxs)(g.a,{component:"main",className:e.mainContainer,children:[Object(w.jsx)(f.a,{}),Object(w.jsx)(O.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:Object(w.jsx)(w.Fragment,{children:(null===a||void 0===a?void 0:a.length)>0&&a.map((function(t,n){var c=t.title,i=t.body,o=t.id;return Object(w.jsx)(O.a,{item:!0,md:3,xs:12,sm:6,children:Object(w.jsx)("div",{style:{height:"400px"},children:Object(w.jsxs)(S.a,{className:e.card,children:[Object(w.jsx)(u.a,{alt:"logo",className:e.avtarIcon}),Object(w.jsxs)(N.a,{children:[Object(w.jsx)(L.a,{gutterBottom:!0,variant:"h5",component:"div",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:c}),Object(w.jsx)(L.a,{variant:"body2",color:"text.secondary",style:{textOverflow:"ellipsis",display:"-webkit-box",webkitLineClamp:"3",webkitBoxOrient:"vertical",overflow:"hidden"},title:i,children:i})]}),Object(w.jsxs)(R.a,{style:{float:"right"},children:[Object(w.jsx)("div",{children:Object(w.jsx)(_.a,{onClick:function(t){return function(t){window.open("post/".concat(t),"_blank")}(o)}})}),Object(w.jsx)("div",{children:Object(w.jsx)(F.a,{onClick:function(t){return function(t,e){b.a.delete("https://jsonplaceholder.typicode.com/posts/".concat(e)).then((function(t){var n=a.filter((function(t){return t.id!==e}));r(n)})),T.NotificationManager.success("Data delete successfully")}(0,o)}})})]})]},n)})},n)}))})})]})})}function M(t){return Object(w.jsx)(d.a,{children:Object(w.jsxs)(p.c,{children:[Object(w.jsx)(p.a,{path:"/",exact:!0,component:I}),Object(w.jsx)(p.a,{path:"/post/:id",component:k})]})})}var W=n(130),D=n(131);function E(){Object(p.f)();return Object(w.jsx)(W.a,{position:"static",children:Object(w.jsxs)(D.a,{children:[Object(w.jsx)(L.a,{variant:"title",color:"inherit",children:"React Demo Application"}),Object(w.jsx)(L.a,{variant:"h6",style:{flexGrow:1}})]})})}n(107);var z=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(T.NotificationContainer,{}),Object(w.jsx)(E,{}),Object(w.jsx)(M,{})]})}}]),n}(c.Component),J=z,P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,136)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),a(t),r(t)}))};r.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(J,{})}),document.getElementById("root")),P()},76:function(t,e,n){},77:function(t,e,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.10dbbd8e.chunk.js.map