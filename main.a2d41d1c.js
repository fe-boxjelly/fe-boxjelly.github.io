(self.webpackChunkreact_web_pro=self.webpackChunkreact_web_pro||[]).push([[179],{SCUH:function(e,t,n){"use strict";n("n3sI");var r=n("iX+y"),a=n("q1tI"),l=n("i8i4"),c=n("Zo9U"),o=n("Wgwc"),i=n.n(o),u=(n("pHGr"),n("55Ip")),m=n("Ty5D"),s=(n("dNgL"),n("W9HT")),p=function(){return a.createElement("div",{style:{display:"flex",height:"100vh",alignItems:"center",justifyContent:"center"}},a.createElement(s.Z,{size:"large"}))},f=n("Gp+3"),d=n("nTdd"),h=n("dgVW"),E=n("6YUz"),g=n("gB+k"),Z=n("rWTV"),y=n("WxZX"),b=n("lts9"),v=(n("+6jo"),n("Ol7k")),k=(n("Jmwx"),n("BMrR")),x=n("Vadf"),C=(n("S4x+"),n("TElU")),w=n("OeXR"),O=n("9yl3"),N=n("01LJ"),z=function e(t){return t.filter((function(e){return e.path&&e.name})).map((function(t){return t.childRoutes&&t.childRoutes.find((function(e){return e.path&&e.name}))?a.createElement(C.Z.SubMenu,{key:t.path,title:a.createElement("div",null,!!t.icon&&t.icon,a.createElement("span",null,t.name))},e(t.childRoutes)):a.createElement(C.Z.Item,{key:t.path},a.createElement(u.rU,{to:t.path},a.createElement("span",null,!!t.icon&&t.icon,a.createElement("span",null,t.name))))}))},D=(0,w.Pi)((function(e){var t=e.routes,n=(0,m.TH)().pathname,r=(0,N.C)().globalStore,l=(0,a.useState)([]),c=(0,x.Z)(l,2),o=c[0],i=c[1];(0,a.useEffect)((function(){var e=n.split("/").splice(1);i(e.map((function(t,n){return"/".concat(e.slice(0,n+1).join("/"))})))}),[]);var s=(0,a.useMemo)((function(){var e=n.split("/").splice(1);return e.map((function(t,n){return"/".concat(e.slice(0,n+1).join("/"))}))}),[n]);return a.createElement(v.Z.Sider,{trigger:null,collapsible:!0,collapsed:r.collapsed,className:"main-left-slider"},a.createElement(u.rU,{to:"/"},a.createElement(k.Z,{type:"flex",align:"middle",className:"main-logo"},a.createElement(O.Z,{twoToneColor:"#13e367"}),!r.collapsed&&a.createElement("span",{className:"app-name"},r.appTitle))),a.createElement(C.Z,{mode:"inline",theme:"dark",style:{paddingLeft:0,marginBottom:0},className:"main-menu",openKeys:o,onOpenChange:function(e){i(e)},selectedKeys:s},z(t)))})),L=(n("1Uoa"),n("w4uE")),P=(n("rO+z"),n("kPKH")),R=n("lH3M"),U=n("z5C5"),I=n("hbLo"),j=n("SMXw"),S=a.createElement(C.Z,null,a.createElement(C.Z.Item,{key:"0"},a.createElement(R.Z,null),"  Profile"),a.createElement(C.Z.Divider,null),a.createElement(C.Z.Item,{key:"1"},a.createElement(u.rU,{to:"/login"},a.createElement(U.Z,null),"  Log Out"))),T=(0,w.Pi)((function(){var e=(0,N.C)().globalStore;return a.createElement(v.Z.Header,{className:"main-header"},a.createElement(k.Z,{type:"flex",style:{paddingRight:20}},a.createElement(P.Z,{style:{flex:1}},a.createElement("span",{className:"trigger",onClick:e.toggleCollapsed},e.collapsed?a.createElement(I.Z,null):a.createElement(j.Z,null))),a.createElement(P.Z,null,a.createElement(L.Z,{overlay:S,trigger:["click","hover"],placement:"bottom"},a.createElement("div",{className:"user-info"},a.createElement("span",{className:"user-img"}),a.createElement("span",{className:"user-name"},e.userInfo.loginName))))))})),A=[{path:"/",component:function(e){var t=e.children;return a.createElement(a.Fragment,null,t)},childRoutes:[{path:"/login",name:"Login",component:(0,a.lazy)((function(){return Promise.all([n.e(874),n.e(216),n.e(25)]).then(n.bind(n,"XkzD"))}))},{path:"/",component:function(e){var t=e.route,n=e.children;return a.createElement(v.Z,{className:"main-layout"},a.createElement(D,{routes:t.childRoutes}),a.createElement(v.Z,{className:"main-layout-right"},a.createElement(T,null),a.createElement(v.Z.Content,{className:"main-layout-content"},n)))},childRoutes:[{path:"/home",name:"Home",icon:a.createElement(f.Z,null),component:(0,a.lazy)((function(){return n.e(346).then(n.bind(n,"7UUm"))}))},{path:"/candidates",name:"Candidates",icon:a.createElement(d.Z,null),component:(0,a.lazy)((function(){return Promise.all([n.e(874),n.e(216),n.e(571)]).then(n.bind(n,"I3Bx"))}))},{path:"/projects",name:"Projects",icon:a.createElement(h.Z,null)},{path:"/assessment",name:"Assessment",icon:a.createElement(E.Z,null)},{path:"/review",name:"Review",icon:a.createElement(g.Z,null)},{path:"/export",name:"Export",icon:a.createElement(Z.Z,null)},{path:"/exception",name:"Exception",icon:a.createElement(y.Z,null),childRoutes:[{path:"/exception/403",name:"403",icon:a.createElement(b.Z,null),component:(0,a.lazy)((function(){return Promise.all([n.e(874),n.e(929)]).then(n.bind(n,"rpCK"))}))},{path:"/exception/404",name:"404",exact:!0,icon:a.createElement(b.Z,null),component:(0,a.lazy)((function(){return Promise.all([n.e(874),n.e(609)]).then(n.bind(n,"0tPr"))}))},{path:"/exception/500",name:"500",icon:a.createElement(b.Z,null),component:(0,a.lazy)((function(){return Promise.all([n.e(874),n.e(859)]).then(n.bind(n,"bozm"))}))}]},{path:"/",exact:!0,redirect:"/login"},{path:"*",exact:!0,redirect:"/exception/404"}]}]}],H=function e(t){return Array.isArray(t)?a.createElement(m.rs,null,t.map((function(t,n){return t.redirect?a.createElement(m.l_,{key:t.path||n,exact:t.exact,strict:t.strict,from:t.path,to:t.redirect}):a.createElement(m.AW,{key:t.path||n,path:t.path,exact:t.exact,strict:t.strict,render:function(){var n=e(t.childRoutes);return t.component?a.createElement(a.Suspense,{fallback:a.createElement(p,null)},a.createElement(t.component,{route:t},n)):n}})}))):null},M=function(){return a.createElement(u.UT,null,H(A))};i().locale("zh-cn");var J=function(){return a.createElement(r.ZP,{locale:c.Z},a.createElement(M,null))};l.render(a.createElement(J,null),document.getElementById("app"))},"4DgR":function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r,a,l=n("FDAq"),c=n("79Ja"),o=n("k6Di"),i=n("fjcN"),u=n("2vnA"),m=(r=(0,c.Z)((function e(){(0,o.Z)(this,e),(0,l.Z)(this,"loading",a,this)})),a=(0,i.Z)(r.prototype,"loading",[u.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),r)},JLlM:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r,a,l,c,o,i,u=n("FDAq"),m=n("k6Di"),s=n("79Ja"),p=n("fjcN"),f=n("2vnA"),d=(r=f.aD.bound,a=f.aD.bound,l=function(){function e(){(0,m.Z)(this,e),(0,u.Z)(this,"appTitle",c,this),(0,u.Z)(this,"collapsed",o,this),(0,u.Z)(this,"userInfo",i,this)}return(0,s.Z)(e,[{key:"toggleCollapsed",value:function(){this.collapsed=!this.collapsed}},{key:"setData",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object.entries(t).forEach((function(t){e[t[0]]=t[1]}))}}]),e}(),c=(0,p.Z)(l.prototype,"appTitle",[f.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"Fast Feedback"}}),o=(0,p.Z)(l.prototype,"collapsed",[f.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),i=(0,p.Z)(l.prototype,"userInfo",[f.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{loginName:"admin"}}}),(0,p.Z)(l.prototype,"toggleCollapsed",[r],Object.getOwnPropertyDescriptor(l.prototype,"toggleCollapsed"),l.prototype),(0,p.Z)(l.prototype,"setData",[a],Object.getOwnPropertyDescriptor(l.prototype,"setData"),l.prototype),l)},"01LJ":function(e,t,n){"use strict";n.d(t,{C:function(){return o}});var r=n("q1tI"),a={},l=n("LCbk");l.keys().forEach((function(e){var t=e.match(/([a-zA-Z0-9].*)$/)[1],n=l(e).default;a[t]=new n}));var c=r.createContext(a);function o(){return r.useContext(c)}},LCbk:function(e,t,n){var r={"./commonStore":"4DgR","./globalStore":"JLlM"};function a(e){var t=l(e);return n(t)}function l(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=l,e.exports=a,a.id="LCbk"}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[874,216],(function(){return t("l47f"),t("SCUH")})),e.O()}]);