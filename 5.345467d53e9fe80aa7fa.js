(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1ajG":function(t,e,r){"use strict";r.d(e,"a",function(){return c});var o=r("fXoL"),n=r("IheW");let c=(()=>{class t{constructor(t){this.http=t,this.URL_API="https://pruebatecnicatevolvers.herokuapp.com/recovered"}getRecovereds(){return this.http.get(this.URL_API)}getRecovered(t){return this.http.get(this.URL_API+"/"+t)}createRecovered(t){return this.http.post(this.URL_API,t)}editRecovered(t,e){return console.log(t),this.http.put(this.URL_API+"/"+t,e)}deleteRecovered(t){return this.http.delete(this.URL_API+"/"+t)}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(n.a))},t.\u0275prov=o.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},bfZ0:function(t,e,r){"use strict";r.r(e),r.d(e,"ListRecoveredModule",function(){return a});var o=r("ofXK"),n=r("tyNb"),c=r("fXoL"),i=r("1ajG");function b(t,e){if(1&t){const t=c.Mb();c.Lb(0,"tr"),c.Lb(1,"td"),c.cc(2),c.Kb(),c.Lb(3,"td"),c.cc(4),c.Kb(),c.Lb(5,"td"),c.cc(6),c.Kb(),c.Lb(7,"td",8),c.Lb(8,"button",9),c.Sb("click",function(){c.Yb(t);const r=e.$implicit;return c.Ub().onEditar(r)}),c.cc(9,"Editar"),c.Kb(),c.Lb(10,"button",10),c.Sb("click",function(){c.Yb(t);const r=e.$implicit;return c.Ub().eliminar(r.id)}),c.cc(11,"Eliminar"),c.Kb(),c.Kb(),c.Kb()}if(2&t){const t=e.$implicit;c.yb(2),c.dc(t.id),c.yb(2),c.dc(t.name),c.yb(2),c.dc(t.age)}}const s=[{path:"",component:(()=>{class t{constructor(t,e){this.router=t,this.dbrecovered=e,this.navigationExtras={state:{value:null}}}ngOnInit(){this.getRecovered()}getRecovered(){this.dbrecovered.getRecovereds().subscribe(t=>{this.dbrecovered.recovereds=t},t=>console.log(t))}onEditar(t){this.navigationExtras.state.value=t,this.router.navigate(["editRecovered"],this.navigationExtras)}eliminar(t){return console.log(t),this.dbrecovered.deleteRecovered(t).subscribe(t=>{this.getRecovered(),alert("Dato eliminado")},t=>console.error(t))}}return t.\u0275fac=function(e){return new(e||t)(c.Ib(n.a),c.Ib(i.a))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-list-recovered"]],decls:16,vars:1,consts:[[1,"container","tabla"],[1,"row","justify-content-center"],[1,"col-7"],[1,"table-responsive"],[1,"table","table-hover"],["scope","col"],["scope","col",1,"d-none","d-sm-block"],[4,"ngFor","ngForOf"],["role","group",1,"btn-group","d-none","d-sm-block"],["type","button",1,"btn","btn-warning","m-1",3,"click"],["type","button",1,"btn","btn-danger","m-1",3,"click"]],template:function(t,e){1&t&&(c.Lb(0,"div",0),c.Lb(1,"div",1),c.Lb(2,"div",2),c.Lb(3,"div",3),c.Lb(4,"table",4),c.Lb(5,"thead"),c.Lb(6,"th",5),c.cc(7,"ID"),c.Kb(),c.Lb(8,"th",5),c.cc(9,"Nombre"),c.Kb(),c.Lb(10,"th",5),c.cc(11,"Age"),c.Kb(),c.Lb(12,"th",6),c.cc(13,"Accion"),c.Kb(),c.Kb(),c.Lb(14,"tbody"),c.bc(15,b,12,3,"tr",7),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb(),c.Kb()),2&t&&(c.yb(15),c.Vb("ngForOf",e.dbrecovered.recovereds))},directives:[o.h],styles:[".tabla[_ngcontent-%COMP%]{margin-bottom:150px}.table-responsive[_ngcontent-%COMP%]{margin-top:20px;padding:20px;border:1px solid #999;border-radius:3px}"]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},imports:[[n.c.forChild(s)],n.c]}),t})(),a=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},imports:[[o.b,d]]}),t})()}}]);