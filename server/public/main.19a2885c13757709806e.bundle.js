webpackJsonp([1],{0:function(l,n,u){l.exports=u("x35b")},"6GLz":function(l,n){function u(l){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+l+"'.")})}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="6GLz"},x35b:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("3j3K"),e={production:!0,apiPrefix:"api/",apiHost:"http://localhost:3000/"},i=function(){return function(){}}(),o=function(){return function(){this.title="app"}}(),s=u("2Je8"),r=u("KdFd"),_=function(){return function(){this.apiHost=e.apiHost,this.apiPrefix=e.apiPrefix}}(),a=function(){function l(l,n){this.http=l,this.configurationService=n,this.testEndpoint="test/",this.actionUrl=""+n.apiHost+n.apiPrefix}return l.prototype.getTests=function(){return this.http.get(this.actionUrl+this.testEndpoint)},l.prototype.postTest=function(l){return this.http.post(this.actionUrl+this.testEndpoint,l)},l.ctorParameters=function(){return[{type:r.c},{type:_}]},l}(),c=function(){function l(l){this.apiRequestsService=l,this.testValues={},this.testEntries=[]}return l.prototype.ngOnInit=function(){},l.prototype.getTests=function(){var l=this;this.apiRequestsService.getTests().subscribe(function(n){return l.testEntries=n})},l.prototype.onSubmit=function(){this.apiRequestsService.postTest(this.testValues).subscribe(function(l){return alert("Successfully added")})},l.ctorParameters=function(){return[{type:a}]},l}(),d=u("NVOs"),p=[[""]],g=t._5({encapsulation:0,styles:p,data:{}});function m(l){return t._26(0,[(l()(),t._8(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t._24(-1,null,["\n      "])),(l()(),t._8(2,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),t._24(3,null,["",""])),t._21(0,s.c,[]),(l()(),t._24(-1,null,["\n  "]))],null,function(l,n){l(n,3,0,t._25(n,3,0,t._20(n,4).transform(n.context.$implicit)))})}function f(l){return t._26(0,[(l()(),t._8(0,0,null,null,79,"div",[["class","row col s12"]],null,null,null,null,null)),(l()(),t._24(-1,null,["\n  "])),(l()(),t._8(2,0,null,null,63,"div",[["class","container col s6"]],null,null,null,null,null)),(l()(),t._24(-1,null,["\n    "])),(l()(),t._8(4,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t._24(-1,null,["Test mongoDB"])),(l()(),t._24(-1,null,["\n    "])),(l()(),t._8(7,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),t._24(-1,null,["Here it is possible to test the connection between client, server and database"])),(l()(),t._24(-1,null,["\n    "])),(l()(),t._8(10,0,null,null,54,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0,i=l.component;"submit"===n&&(e=!1!==t._20(l,12).onSubmit(u)&&e);"reset"===n&&(e=!1!==t._20(l,12).onReset()&&e);"submit"===n&&(e=!1!==i.onSubmit()&&e);return e},null,null)),t._6(11,16384,null,0,d.o,[],null,null),t._6(12,16384,[["finalForm",4]],0,d.j,[[8,null],[8,null]],null,null),t._22(2048,null,d.b,null,[d.j]),t._6(14,16384,null,0,d.i,[d.b],null,null),(l()(),t._24(-1,null,["\n      "])),(l()(),t._8(16,0,null,null,13,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t._24(-1,null,["\n        "])),(l()(),t._8(18,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),t._24(-1,null,["Name"])),(l()(),t._24(-1,null,["\n        "])),(l()(),t._8(21,0,null,null,7,"input",[["class","form-control"],["id","name"],["name","name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,i=l.component;"input"===n&&(e=!1!==t._20(l,22)._handleInput(u.target.value)&&e);"blur"===n&&(e=!1!==t._20(l,22).onTouched()&&e);"compositionstart"===n&&(e=!1!==t._20(l,22)._compositionStart()&&e);"compositionend"===n&&(e=!1!==t._20(l,22)._compositionEnd(u.target.value)&&e);"ngModelChange"===n&&(e=!1!==(i.testValues.name=u)&&e);return e},null,null)),t._6(22,16384,null,0,d.c,[t.G,t.k,[2,d.a]],null,null),t._6(23,16384,null,0,d.l,[],{required:[0,"required"]},null),t._22(1024,null,d.e,function(l){return[l]},[d.l]),t._22(1024,null,d.f,function(l){return[l]},[d.c]),t._6(26,671744,null,0,d.k,[[2,d.b],[2,d.e],[8,null],[2,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t._22(2048,null,d.g,null,[d.k]),t._6(28,16384,null,0,d.h,[d.g],null,null),(l()(),t._24(-1,null,["\n      "])),(l()(),t._24(-1,null,["\n\n      "])),(l()(),t._8(31,0,null,null,13,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t._24(-1,null,["\n        "])),(l()(),t._8(33,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(l()(),t._24(-1,null,["Email"])),(l()(),t._24(-1,null,["\n        "])),(l()(),t._8(36,0,null,null,7,"input",[["class","form-control"],["id","email"],["name","email"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,i=l.component;"input"===n&&(e=!1!==t._20(l,37)._handleInput(u.target.value)&&e);"blur"===n&&(e=!1!==t._20(l,37).onTouched()&&e);"compositionstart"===n&&(e=!1!==t._20(l,37)._compositionStart()&&e);"compositionend"===n&&(e=!1!==t._20(l,37)._compositionEnd(u.target.value)&&e);"ngModelChange"===n&&(e=!1!==(i.testValues.email=u)&&e);return e},null,null)),t._6(37,16384,null,0,d.c,[t.G,t.k,[2,d.a]],null,null),t._6(38,16384,null,0,d.l,[],{required:[0,"required"]},null),t._22(1024,null,d.e,function(l){return[l]},[d.l]),t._22(1024,null,d.f,function(l){return[l]},[d.c]),t._6(41,671744,null,0,d.k,[[2,d.b],[2,d.e],[8,null],[2,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t._22(2048,null,d.g,null,[d.k]),t._6(43,16384,null,0,d.h,[d.g],null,null),(l()(),t._24(-1,null,["\n      "])),(l()(),t._24(-1,null,["\n\n      "])),(l()(),t._8(46,0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t._24(-1,null,["\n        "])),(l()(),t._8(48,0,null,null,1,"label",[["for","type"]],null,null,null,null,null)),(l()(),t._24(-1,null,["Type"])),(l()(),t._24(-1,null,["\n        "])),(l()(),t._8(51,0,null,null,8,"input",[["class","form-control"],["id","type"],["name","type"],["required",""],["type","number"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0,i=l.component;"input"===n&&(e=!1!==t._20(l,52)._handleInput(u.target.value)&&e);"blur"===n&&(e=!1!==t._20(l,52).onTouched()&&e);"compositionstart"===n&&(e=!1!==t._20(l,52)._compositionStart()&&e);"compositionend"===n&&(e=!1!==t._20(l,52)._compositionEnd(u.target.value)&&e);"change"===n&&(e=!1!==t._20(l,53).onChange(u.target.value)&&e);"input"===n&&(e=!1!==t._20(l,53).onChange(u.target.value)&&e);"blur"===n&&(e=!1!==t._20(l,53).onTouched()&&e);"ngModelChange"===n&&(e=!1!==(i.testValues.type=u)&&e);return e},null,null)),t._6(52,16384,null,0,d.c,[t.G,t.k,[2,d.a]],null,null),t._6(53,16384,null,0,d.n,[t.G,t.k],null,null),t._6(54,16384,null,0,d.l,[],{required:[0,"required"]},null),t._22(1024,null,d.e,function(l){return[l]},[d.l]),t._22(1024,null,d.f,function(l,n){return[l,n]},[d.c,d.n]),t._6(57,671744,null,0,d.k,[[2,d.b],[2,d.e],[8,null],[2,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t._22(2048,null,d.g,null,[d.k]),t._6(59,16384,null,0,d.h,[d.g],null,null),(l()(),t._24(-1,null,["\n      "])),(l()(),t._24(-1,null,["\n\n      "])),(l()(),t._8(62,0,null,null,1,"button",[["class","btn btn-success"],["type","submit"]],null,null,null,null,null)),(l()(),t._24(-1,null,["Submit"])),(l()(),t._24(-1,null,["\n\n    "])),(l()(),t._24(-1,null,["\n  "])),(l()(),t._24(-1,null,["\n  "])),(l()(),t._8(67,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t._24(-1,null,["\n  "])),(l()(),t._8(69,0,null,null,4,"div",[["class","container col s6"]],null,null,null,null,null)),(l()(),t._24(-1,null,["\n    "])),(l()(),t._8(71,0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;"click"===n&&(t=!1!==e.getTests()&&t);return t},null,null)),(l()(),t._24(-1,null,["Get entries"])),(l()(),t._24(-1,null,["\n  "])),(l()(),t._24(-1,null,["\n  "])),(l()(),t._8(75,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t._24(-1,null,["\n  "])),(l()(),t._2(16777216,null,null,1,null,m)),t._6(78,802816,null,0,s.d,[t.Q,t.N,t.t],{ngForOf:[0,"ngForOf"]},null),(l()(),t._24(-1,null,["\n"])),(l()(),t._24(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,23,0,"");l(n,26,0,"name",u.testValues.name);l(n,38,0,"");l(n,41,0,"email",u.testValues.email);l(n,54,0,"");l(n,57,0,"type",u.testValues.type),l(n,78,0,u.testEntries)},function(l,n){l(n,10,0,t._20(n,14).ngClassUntouched,t._20(n,14).ngClassTouched,t._20(n,14).ngClassPristine,t._20(n,14).ngClassDirty,t._20(n,14).ngClassValid,t._20(n,14).ngClassInvalid,t._20(n,14).ngClassPending),l(n,21,0,t._20(n,23).required?"":null,t._20(n,28).ngClassUntouched,t._20(n,28).ngClassTouched,t._20(n,28).ngClassPristine,t._20(n,28).ngClassDirty,t._20(n,28).ngClassValid,t._20(n,28).ngClassInvalid,t._20(n,28).ngClassPending),l(n,36,0,t._20(n,38).required?"":null,t._20(n,43).ngClassUntouched,t._20(n,43).ngClassTouched,t._20(n,43).ngClassPristine,t._20(n,43).ngClassDirty,t._20(n,43).ngClassValid,t._20(n,43).ngClassInvalid,t._20(n,43).ngClassPending),l(n,51,0,t._20(n,54).required?"":null,t._20(n,59).ngClassUntouched,t._20(n,59).ngClassTouched,t._20(n,59).ngClassPristine,t._20(n,59).ngClassDirty,t._20(n,59).ngClassValid,t._20(n,59).ngClassInvalid,t._20(n,59).ngClassPending)})}t._3("app-test-component",c,function(l){return t._26(0,[(l()(),t._8(0,0,null,null,1,"app-test-component",[],null,null,null,f,g)),t._6(1,114688,null,0,c,[a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]);var h=[[""]],b=t._5({encapsulation:0,styles:h,data:{}});function v(l){return t._26(0,[(l()(),t._8(0,0,null,null,1,"app-test-component",[],null,null,null,f,g)),t._6(1,114688,null,0,c,[a],null,null),(l()(),t._24(-1,null,["\n"]))],function(l,n){l(n,1,0)},null)}var C=t._3("app-root",o,function(l){return t._26(0,[(l()(),t._8(0,0,null,null,1,"app-root",[],null,null,null,v,b)),t._6(1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),y=u("Qbdm"),q=u("Fzro"),k=t._4(i,[o],function(l){return t._18([t._19(512,t.i,t._0,[[8,[C]],[3,t.i],t.x]),t._19(5120,t.v,t._17,[[3,t.v]]),t._19(4608,s.f,s.e,[t.v]),t._19(4608,t.h,t.h,[]),t._19(5120,t.a,t._9,[]),t._19(5120,t.t,t._14,[]),t._19(5120,t.u,t._15,[]),t._19(4608,y.b,y.s,[s.b]),t._19(6144,t.J,null,[y.b]),t._19(4608,y.e,y.f,[]),t._19(5120,y.c,function(l,n,u,t){return[new y.k(l),new y.o(n),new y.n(u,t)]},[s.b,s.b,s.b,y.e]),t._19(4608,y.d,y.d,[y.c,t.z]),t._19(135680,y.m,y.m,[s.b]),t._19(4608,y.l,y.l,[y.d,y.m]),t._19(6144,t.H,null,[y.l]),t._19(6144,y.p,null,[y.m]),t._19(4608,t.O,t.O,[t.z]),t._19(4608,y.g,y.g,[s.b]),t._19(4608,y.i,y.i,[s.b]),t._19(4608,d.p,d.p,[]),t._19(4608,q.c,q.c,[]),t._19(4608,q.g,q.b,[]),t._19(5120,q.i,q.j,[]),t._19(4608,q.h,q.h,[q.c,q.g,q.i]),t._19(4608,q.f,q.a,[]),t._19(5120,q.d,q.k,[q.h,q.f]),t._19(4608,r.h,r.m,[s.b,t.C,r.k]),t._19(4608,r.n,r.n,[r.h,r.l]),t._19(5120,r.a,function(l){return[l]},[r.n]),t._19(4608,r.j,r.j,[]),t._19(6144,r.i,null,[r.j]),t._19(4608,r.g,r.g,[r.i]),t._19(6144,r.b,null,[r.g]),t._19(5120,r.f,r.o,[r.b,[2,r.a]]),t._19(4608,r.c,r.c,[r.f]),t._19(4608,_,_,[]),t._19(4608,a,a,[r.c,_]),t._19(512,s.a,s.a,[]),t._19(1024,t.l,y.q,[]),t._19(1024,t.b,function(l,n){return[y.r(l,n)]},[[2,y.h],[2,t.y]]),t._19(512,t.c,t.c,[[2,t.b]]),t._19(131584,t._7,t._7,[t.z,t._1,t.r,t.l,t.i,t.c]),t._19(2048,t.e,null,[t._7]),t._19(512,t.d,t.d,[t.e]),t._19(512,y.a,y.a,[[3,y.a]]),t._19(512,d.m,d.m,[]),t._19(512,d.d,d.d,[]),t._19(512,q.e,q.e,[]),t._19(512,r.e,r.e,[]),t._19(512,r.d,r.d,[]),t._19(512,i,i,[]),t._19(256,r.k,"XSRF-TOKEN",[]),t._19(256,r.l,"X-XSRF-TOKEN",[])])});e.production&&Object(t.U)(),Object(y.j)().bootstrapModuleFactory(k).catch(function(l){return console.log(l)})}},[0]);