(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Yj9t:function(t,e,n){"use strict";n.r(e),n.d(e,"AuthModule",(function(){return f}));var r=n("ofXK"),o=n("tyNb"),i=n("3Pt+"),s=n("fXoL"),a=n("7Bak");function c(t,e){if(1&t&&(s.Ub(0,"div",10),s.Cc(1),s.Tb()),2&t){const t=s.gc();s.Cb(1),s.Ec(" ",t.formError," ")}}const d=function(){return["/auth/register"]};let l=(()=>{class t{constructor(t,e,n){this.router=t,this.formBuilder=e,this.auth=n,this.loginForm=new i.f({username:new i.d("",[i.r.required,i.r.minLength(10)]),password:new i.d("",[i.r.required,i.r.minLength(10),i.r.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])}),this.formError="",this.credentials={_id:"",username:"",email:"",password:"",confirmPassword:"",exp:0,iat:0}}ngOnInit(){}onSubmit(t){console.log(t)}onLoginSubmit(){this.formError="",this.loginForm.get("username").value&&this.loginForm.get("password").value?(console.log(this.credentials),this.formError="All good",this.credentials.username=this.loginForm.get("username").value,this.credentials.password=this.loginForm.get("password").value,this.doLogin()):this.formError="All fields are required, please try again"}doLogin(){this.auth.login(this.credentials).then(()=>this.router.navigateByUrl("/")).catch(t=>{this.formError=t})}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(o.b),s.Ob(i.c),s.Ob(a.a))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-login"]],decls:17,vars:4,consts:[[1,"login-form",3,"formGroup","ngSubmit"],["role","alert",4,"ngIf"],[1,"txtb"],["for","username"],["type","username","id","username","formControlName","username","required",""],["for","Password"],["type","password","id","password","formControlName","password","required",""],["type","submit","value","Login",1,"logbtn"],[1,"bottom-text"],["routerLinkActive","router-link-active",3,"routerLink"],["role","alert"]],template:function(t,e){1&t&&(s.Ub(0,"form",0),s.cc("ngSubmit",(function(){return e.onLoginSubmit()})),s.Ub(1,"h1"),s.Cc(2,"Login"),s.Tb(),s.Bc(3,c,2,1,"div",1),s.Ub(4,"div",2),s.Ub(5,"label",3),s.Cc(6,"Username"),s.Tb(),s.Pb(7,"input",4),s.Tb(),s.Ub(8,"div",2),s.Ub(9,"label",5),s.Cc(10,"Password"),s.Tb(),s.Pb(11,"input",6),s.Tb(),s.Pb(12,"input",7),s.Ub(13,"div",8),s.Cc(14," Don't have account? "),s.Ub(15,"a",9),s.Cc(16,"Register"),s.Tb(),s.Tb(),s.Tb()),2&t&&(s.mc("formGroup",e.loginForm),s.Cb(3),s.mc("ngIf",e.formError),s.Cb(12),s.mc("routerLink",s.nc(3,d)))},directives:[i.s,i.m,i.g,r.l,i.b,i.l,i.e,i.q,o.e,o.d],styles:['.login-form[_ngcontent-%COMP%]{width:360px;background:rgba(0,0,0,.38);height:580px;padding:80px 40px;border-radius:10px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.login-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:60px}.txtb[_ngcontent-%COMP%]{border-bottom:2px solid #adadad;position:relative;margin:30px 0}.txtb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:15px;color:#ddd;border:none;width:100%;outline:none;background:none;padding:0 5px;height:40px}.txtb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:attr(data-placeholder);position:absolute;top:50%;left:5px;color:#adadad;transform:translateY(-50%);z-index:-1;transition:.5s}.txtb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"";position:absolute;width:0;height:2px;background:linear-gradient(120deg,#3498db,#8e44ad);transition:.5s}.txtb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%]:before{top:-5px}.input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%]:after, .logbtn[_ngcontent-%COMP%]{width:100%}.logbtn[_ngcontent-%COMP%]{display:block;height:50px;border:none;background:linear-gradient(120deg,#3498db,#8e44ad,#3498db);background-size:200%;color:#fff;outline:none;cursor:pointer;transition:.5s}.logbtn[_ngcontent-%COMP%]:hover{background-position:100%}.bottom-text[_ngcontent-%COMP%]{margin-top:60px;text-align:center;font-size:13px}']}),t})();function g(t,e){if(1&t&&(s.Ub(0,"div",13),s.Cc(1),s.Tb()),2&t){const t=s.gc();s.Cb(1),s.Ec(" ",t.formError," ")}}const b=function(){return["/auth/login"]},u=[{path:"",component:l},{path:"login",component:l},{path:"register",component:(()=>{class t{constructor(t,e,n){this.router=t,this.formBuilder=e,this.auth=n,this.formError="",this.credentials={_id:"",username:"",email:"",password:"",confirmPassword:"",exp:0,iat:0}}ngOnInit(){this.registerForm=new i.f({username:new i.d("",[i.r.required,i.r.minLength(10)]),email:new i.d("",[i.r.required,i.r.email]),password:new i.d("",[i.r.required,i.r.minLength(10),i.r.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),confirmPassword:new i.d("",[i.r.required,i.r.minLength(10)])})}onSubmit(t){console.log(t)}onRegisterSubmit(){this.formError="",this.registerForm.get("username").value&&this.registerForm.get("email").value&&this.registerForm.get("password").value&&this.registerForm.get("confirmPassword").value?this.registerForm.get("password").value!==this.registerForm.get("confirmPassword").value?this.formError="Password doesn't match":(this.formError="All good",this.credentials.username=this.registerForm.get("username").value,this.credentials.email=this.registerForm.get("email").value,this.credentials.password=this.registerForm.get("password").value,this.credentials.confirmPassword=this.registerForm.get("confirmPassword").value,this.doRegister()):this.formError="All fields are required, please try again"}doRegister(){this.auth.register(this.credentials).then(()=>this.router.navigateByUrl("/")).catch(t=>this.formError=t)}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(o.b),s.Ob(i.c),s.Ob(a.a))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-register"]],decls:25,vars:4,consts:[[1,"login-form",3,"formGroup","ngSubmit"],["role","alert",4,"ngIf"],[1,"txtb"],["for","Username"],["type","text","id","username","name","username","formControlName","username","required",""],["for","Email"],["type","email","id","email","formControlName","email","required",""],["for","Password"],["type","password","id","password","formControlName","password","required",""],["type","password","id","confirmPassword","formControlName","confirmPassword","required",""],["type","submit","value","Register",1,"logbtn"],[1,"bottom-text"],["routerLinkActive","router-link-active",3,"routerLink"],["role","alert"]],template:function(t,e){1&t&&(s.Ub(0,"form",0),s.cc("ngSubmit",(function(){return e.onRegisterSubmit()})),s.Ub(1,"h1"),s.Cc(2,"Register"),s.Tb(),s.Bc(3,g,2,1,"div",1),s.Ub(4,"div",2),s.Ub(5,"label",3),s.Cc(6,"Username"),s.Tb(),s.Pb(7,"input",4),s.Tb(),s.Ub(8,"div",2),s.Ub(9,"label",5),s.Cc(10,"Email"),s.Tb(),s.Pb(11,"input",6),s.Tb(),s.Ub(12,"div",2),s.Ub(13,"label",7),s.Cc(14,"Password"),s.Tb(),s.Pb(15,"input",8),s.Tb(),s.Ub(16,"div",2),s.Ub(17,"label",7),s.Cc(18,"Confirm Password"),s.Tb(),s.Pb(19,"input",9),s.Tb(),s.Pb(20,"input",10),s.Ub(21,"div",11),s.Cc(22," Already have an account? "),s.Ub(23,"a",12),s.Cc(24,"Login"),s.Tb(),s.Tb(),s.Tb()),2&t&&(s.mc("formGroup",e.registerForm),s.Cb(3),s.mc("ngIf",e.formError),s.Cb(20),s.mc("routerLink",s.nc(3,b)))},directives:[i.s,i.m,i.g,r.l,i.b,i.l,i.e,i.q,o.e,o.d],styles:['.login-form[_ngcontent-%COMP%]{width:50vh;color:var(--text);background:var(--bg-secondary);height:100vh;padding:80px 40px;border-radius:10px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.login-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:60px}.txtb[_ngcontent-%COMP%]{border-bottom:2px solid var(--border-color);position:relative;margin:30px 0}.txtb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:15px;color:var(--text);border:none;width:100%;outline:none;background:none;padding:0 5px;height:40px}.txtb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:attr(data-placeholder);position:absolute;top:50%;left:5px;color:#adadad;transform:translateY(-50%);z-index:-1;transition:.5s}.txtb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"";position:absolute;width:0;height:2px;background:linear-gradient(120deg,#3498db,#8e44ad);transition:.5s}.txtb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%]:before{top:-5px}.input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%]:after, .logbtn[_ngcontent-%COMP%]{width:100%}.logbtn[_ngcontent-%COMP%]{display:block;height:50px;border:none;background:linear-gradient(120deg,#3498db,#8e44ad,#3498db);background-size:200%;color:var(--text);outline:none;cursor:pointer;transition:.5s}.logbtn[_ngcontent-%COMP%]:hover{background-position:100%}.bottom-text[_ngcontent-%COMP%]{margin-top:60px;text-align:center;font-size:13px}']}),t})()}];let m=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},imports:[[o.f.forChild(u)],o.f]}),t})();var p=n("vvyD");let f=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},imports:[[r.c,m,p.a,i.h,i.p]]}),t})()}}]);