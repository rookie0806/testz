(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{62:function(t,e,n){},63:function(t,e,n){},64:function(t,e,n){t.exports={navigation:"styles_navigation__2uQRf"}},66:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(14),o=n.n(r),c=n(25),i=n(5),u=n(9),l=n(24),s=(n(29),n(11)),f=n(32),d=n.n(f),h=n(30),v=n(10),m="SET_DATA",p="SET_TEXT";var g={};function b(t,e){var n=e.data;return Object(v.a)(Object(v.a)({},t),{},{data:n})}function x(t,e){var n=e.text;return Object(v.a)(Object(v.a)({},t),{},{text:n})}var j={getDATA:function(){return function(t,e){fetch("/crawl/getData/",{}).then((function(t){return t.json()})).then((function(e){t({type:m,data:e})})).catch((function(t){return console.log(t)}))}},getTEXT:function(){return function(t,e){fetch("/crawl/getToWrite/",{}).then((function(t){return t.json()})).then((function(e){t({type:p,text:e})})).catch((function(t){return console.log(t)}))}}},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return b(t,e);case p:return x(t,e);default:return t}},O=n(31),w=d()(),T=[h.a,Object(l.a)(w)];console.log(w);var E=Object(u.combineReducers)({data:y,i18nState:O.i18nState,router:Object(s.b)(w)}),M=function(t){return Object(u.createStore)(E,u.applyMiddleware.apply(void 0,T))}(),S=(n(62),n(8)),D=(n(63),n(36)),P=n(37),k=n(39),A=n(38),L=(n(64),n(3)),X=function(t,e){return Object(L.jsx)("div",{children:Object(L.jsx)("canvas",{})})},R=(n.p,function(t){Object(k.a)(n,t);var e=Object(A.a)(n);function n(){var t;Object(D.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={loading:!0,loading2:!0,idx:1,page:[1],maxpage:0},t.componentWillReceiveProps=function(e){t.props.data;e.data&&e.text&&t.draw(e.data,e.text)},t}return Object(P.a)(n,[{key:"draw",value:function(t,e){var n=document.getElementsByTagName("canvas")[0];n.width=document.body.clientWidth,n.height=window.innerHeight;for(var a=new Array,r=0;r<t.length;r++)a[r]=new Image,a[r].src=t[r].image;var o="",c=!0,i=n.getContext("2d");!function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","svg"),n=e.createSVGMatrix();t.getTransform=function(){return n};var a=[],r=t.save;t.save=function(){return a.push(n.translate(0,0)),r.call(t)};var o=t.restore;t.restore=function(){return n=a.pop(),o.call(t)};var c=t.scale;t.scale=function(e,a){return n=n.scaleNonUniform(e,a),c.call(t,e,a)};var i=t.rotate;t.rotate=function(e){return n=n.rotate(180*e/Math.PI),i.call(t,e)};var u=t.translate;t.translate=function(e,a){return n=n.translate(e,a),u.call(t,e,a)};var l=t.transform;t.transform=function(a,r,o,c,i,u){var s=e.createSVGMatrix();return s.a=a,s.b=r,s.c=o,s.d=c,s.e=i,s.f=u,n=n.multiply(s),l.call(t,a,r,o,c,i,u)};var s=t.setTransform;t.setTransform=function(e,a,r,o,c,i){return n.a=e,n.b=a,n.c=r,n.d=o,n.e=c,n.f=i,s.call(t,e,a,r,o,c,i)};var f=e.createSVGPoint();t.transformedPoint=function(t,e){return f.x=t,f.y=e,f.matrixTransform(n.inverse())}}(i);var u=i.scale,l=[],s=[],f=[],d=[],h=0,v=0,m=0;function p(){var r=i.transformedPoint(0,0),o=i.transformedPoint(n.width,n.height);if(i.clearRect(r.x,r.y,o.x-r.x,o.y-r.y),c){i.font="70px Calibri",i.fillText(e.text,0,70,1e3);for(var p=0;p<1e3;p++)for(var g=0;g<1e3;g++)if(255==i.getImageData(p,g,1,1).data[3]){l.push([p,g]),s.push(p),f.push(g);var b=O(1,t.length-1);d.push(b)}var x=Math.max.apply(null,s),j=Math.max.apply(null,f),y=Math.min.apply(null,f);h=document.body.clientHeight-(j*(3e3/x*(document.body.clientWidth/3168))+y*(3e3/x*(document.body.clientWidth/3168)))-50,c=!1,u=3e3/x*(document.body.clientWidth/3168),u,v=l[0][0]*u,m=l[0][1]*u}function O(t,e){return Math.floor(Math.random()*(e-t+1))+t}for(i.clearRect(r.x,r.y,o.x-r.x,o.y-r.y),p=0;p<l.length;p++)i.drawImage(a[d[p]],l[p][0]*u,l[p][1]*u+h/2,u,u)}n.addEventListener("dblclick",(function(){n.getBoundingClientRect();for(var e=i.transformedPoint(b,x),a=0;a<l.length;a++)e.x<l[a][0]*u+u&&e.x>l[a][0]*u&&e.y<l[a][1]*u+h/2+u&&e.y>l[a][1]*u+h/2&&window.open(t[d[a]].url,"_blank")}));var g,b=n.width/2,x=n.height/2;n.addEventListener("mousedown",(function(t){document.body.style.mozUserSelect=document.body.style.webkitUserSelect=document.body.style.userSelect="none",b=t.offsetX||t.pageX-n.offsetLeft,x=t.offsetY||t.pageY-n.offsetTop,g=i.transformedPoint(b,x),b-v,x-m,!1}),!1),n.addEventListener("mousemove",(function(t){if(b=t.offsetX||t.pageX-n.offsetLeft,x=t.offsetY||t.pageY-n.offsetTop,!0,g){var e=i.transformedPoint(b,x);i.translate(e.x-g.x,e.y-g.y),p(),clearTimeout(o)}}),!1),n.addEventListener("mouseup",(function(t){g=null}),!1);var j=function(t){var e=t.wheelDelta?t.wheelDelta/40:t.detail?-t.detail:0;return e&&function(t){var e=i.transformedPoint(b,x);i.translate(e.x,e.y);var n=Math.pow(1.1,t);n,i.scale(n,n),i.translate(-e.x,-e.y),p(),clearTimeout(o)}(e),clearTimeout(o),t.preventDefault()&&!1};n.addEventListener("DOMMouseScroll",j,!1),n.addEventListener("mousewheel",j,!1),p(),o=setTimeout(p,500)}},{key:"componentDidMount",value:function(){var t=this.props,e=t.getData;(0,t.getText)(),e()}},{key:"render",value:function(){return Object(L.jsx)(X,{})}}]),n}(a.Component)),W=Object(i.connect)((function(t,e){var n=t.data;return{data:n.data,text:n.text,location:t.router.location}}),(function(t,e){return{getData:function(){t(j.getDATA())},getText:function(){t(j.getTEXT())}}}))(R),_=function(t){return Object(L.jsx)(S.c,{children:Object(L.jsx)(S.a,{exact:!0,path:"/",component:W})})},I=Object(S.e)(Object(i.connect)()((function(t){return[Object(L.jsx)(_,{},1)]}))),C=function(t){return Object(L.jsx)(I,Object(v.a)({},t))},Y=Object(i.connect)((function(t,e){return{pathname:t.router.location.pathname}}))(C);o.a.render(Object(L.jsxs)(i.Provider,{store:M,children:[Object(L.jsxs)(c.a,{children:[Object(L.jsx)("title",{children:"0isohee.com"}),Object(L.jsx)("meta",{name:"description",content:"0isohee","data-react-helmet":"true"})]}),Object(L.jsx)(s.a,{history:w,children:Object(L.jsx)(Y,{})})]}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.fa76cfd2.chunk.js.map