(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Yj9t:function(t,e,r){"use strict";r.r(e),r.d(e,"AuthModule",(function(){return A}));var n=r("ofXK"),o=r("tyNb"),i=r("3Pt+"),s=r("fXoL"),a=r("7Bak");function c(t,e){if(1&t&&(s.Vb(0,"div",11),s.Dc(1),s.Ub()),2&t){const t=s.hc();s.Cb(1),s.Fc(" ",t.formError," ")}}function d(t,e){1&t&&(s.Vb(0,"div"),s.Dc(1," Password is required. "),s.Ub())}function b(t,e){1&t&&(s.Vb(0,"div"),s.Dc(1," Password must be at least 10 characters long. "),s.Ub())}function l(t,e){1&t&&(s.Vb(0,"div"),s.Dc(1," Password strenght is low "),s.Ub())}function g(t,e){if(1&t&&(s.Vb(0,"div",12),s.Cc(1,d,2,0,"div",13),s.Cc(2,b,2,0,"div",13),s.Cc(3,l,2,0,"div",13),s.Ub()),2&t){const t=s.hc();s.Cb(1),s.nc("ngIf",t.f.password.errors.required),s.Cb(1),s.nc("ngIf",t.f.password.errors.minlength),s.Cb(1),s.nc("ngIf",t.f.password.errors.pattern)}}const u=function(){return["/auth/register"]};let m=(()=>{class t{constructor(t,e,r){this.router=t,this.formBuilder=e,this.auth=r,this.loginForm=new i.f({username:new i.d("",[i.r.required,i.r.minLength(5)]),password:new i.d("",[i.r.required,i.r.minLength(10),i.r.pattern("^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))).{8,32}$")])}),this.formError="",this.credentials={_id:"",username:"",email:"",password:"",confirmPassword:"",exp:0,iat:0}}ngOnInit(){}onSubmit(t){console.log(t)}get f(){return this.loginForm.controls}onLoginSubmit(){this.submitted=!0,this.formError="",this.loginForm.get("username").value&&this.loginForm.get("password").value||(this.formError="All fields are required, please try again "),this.loginForm.invalid?this.formError="Form is not valid":(console.log(this.credentials),this.formError="All good",this.credentials.username=this.loginForm.get("username").value,this.credentials.password=this.loginForm.get("password").value,this.doLogin())}doLogin(){this.auth.login(this.credentials).then(()=>this.router.navigateByUrl("/")).catch(t=>{this.formError=t})}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(o.b),s.Pb(i.c),s.Pb(a.a))},t.\u0275cmp=s.Jb({type:t,selectors:[["app-login"]],decls:18,vars:6,consts:[[1,"login-form",3,"formGroup","ngSubmit"],["role","alert",4,"ngIf"],[1,"txtb"],["for","username"],["type","username","id","username","formControlName","username","required",""],["for","Password"],["type","password","id","password","formControlName","password","required",""],["class","alert alert-danger",4,"ngIf"],["type","submit","value","Login",1,"logbtn",3,"disabled"],[1,"bottom-text"],["routerLinkActive","router-link-active",3,"routerLink"],["role","alert"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function(t,e){1&t&&(s.Vb(0,"form",0),s.dc("ngSubmit",(function(){return e.onLoginSubmit()})),s.Vb(1,"h1"),s.Dc(2,"Login"),s.Ub(),s.Cc(3,c,2,1,"div",1),s.Vb(4,"div",2),s.Vb(5,"label",3),s.Dc(6,"Username"),s.Ub(),s.Qb(7,"input",4),s.Ub(),s.Vb(8,"div",2),s.Vb(9,"label",5),s.Dc(10,"Password"),s.Ub(),s.Qb(11,"input",6),s.Ub(),s.Cc(12,g,4,3,"div",7),s.Qb(13,"input",8),s.Vb(14,"div",9),s.Dc(15," Don't have account? "),s.Vb(16,"a",10),s.Dc(17,"Register"),s.Ub(),s.Ub(),s.Ub()),2&t&&(s.nc("formGroup",e.loginForm),s.Cb(3),s.nc("ngIf",e.formError),s.Cb(9),s.nc("ngIf",e.submitted&&e.f.password.errors),s.Cb(1),s.nc("disabled",!e.loginForm.valid),s.Cb(3),s.nc("routerLink",s.oc(5,u)))},directives:[i.s,i.m,i.g,n.l,i.b,i.l,i.e,i.q,o.e,o.d],styles:['.login-form[_ngcontent-%COMP%]{width:360px;background:rgba(0,0,0,.38);height:580px;padding:80px 40px;border-radius:10px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.login-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:60px}.txtb[_ngcontent-%COMP%]{border-bottom:2px solid #adadad;position:relative;margin:30px 0}.txtb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:15px;color:#ddd;border:none;width:100%;outline:none;background:none;padding:0 5px;height:40px}.txtb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:attr(data-placeholder);position:absolute;top:50%;left:5px;color:#adadad;transform:translateY(-50%);z-index:-1;transition:.5s}.txtb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"";position:absolute;width:0;height:2px;background:linear-gradient(120deg,#3498db,#8e44ad);transition:.5s}.txtb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%]:before{top:-5px}.input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%]:after, .logbtn[_ngcontent-%COMP%]{width:100%}.logbtn[_ngcontent-%COMP%]{display:block;height:50px;border:none;background:linear-gradient(120deg,#3498db,#8e44ad,#3498db);background-size:200%;color:#fff;outline:none;cursor:pointer;transition:.5s}.logbtn[_ngcontent-%COMP%]:hover{background-position:100%}.bottom-text[_ngcontent-%COMP%]{margin-top:60px;text-align:center;font-size:13px}']}),t})();function f(t,e){if(1&t&&(s.Vb(0,"div",16),s.Dc(1),s.Ub()),2&t){const t=s.hc();s.Cb(1),s.Fc(" ",t.formError," ")}}function p(t,e){1&t&&(s.Vb(0,"div"),s.Dc(1," Username is required. "),s.Ub())}function h(t,e){1&t&&(s.Vb(0,"div"),s.Dc(1," Username must be at least 5 characters long. "),s.Ub())}function v(t,e){if(1&t&&(s.Vb(0,"div",17),s.Cc(1,p,2,0,"div",18),s.Cc(2,h,2,0,"div",18),s.Ub()),2&t){const t=s.hc();s.Cb(1),s.nc("ngIf",t.f.username.errors.required),s.Cb(1),s.nc("ngIf",t.f.username.errors.minlength)}}function C(t,e){1&t&&(s.Vb(0,"div"),s.Dc(1," Email is required "),s.Ub())}function w(t,e){1&t&&(s.Vb(0,"div"),s.Dc(1," Email must be a valid email address "),s.Ub())}function P(t,e){if(1&t&&(s.Vb(0,"div",17),s.Cc(1,C,2,0,"div",18),s.Cc(2,w,2,0,"div",18),s.Ub()),2&t){const t=s.hc();s.Cb(1),s.nc("ngIf",t.f.email.errors.required),s.Cb(1),s.nc("ngIf",t.f.email.errors.email)}}function x(t,e){1&t&&(s.Vb(0,"div"),s.Dc(1," Password is required. "),s.Ub())}function _(t,e){1&t&&(s.Vb(0,"div"),s.Dc(1," Password must be at least 10 characters long. "),s.Ub())}function M(t,e){1&t&&(s.Vb(0,"div"),s.Dc(1," Password strenght is low. "),s.Ub())}function U(t,e){if(1&t&&(s.Vb(0,"div",17),s.Cc(1,x,2,0,"div",18),s.Cc(2,_,2,0,"div",18),s.Cc(3,M,2,0,"div",18),s.Ub()),2&t){const t=s.hc();s.Cb(1),s.nc("ngIf",t.f.password.errors.required),s.Cb(1),s.nc("ngIf",t.f.password.errors.minlength),s.Cb(1),s.nc("ngIf",t.f.password.errors.pattern)}}function V(t,e){1&t&&(s.Vb(0,"div"),s.Dc(1," Password is required. "),s.Ub())}function O(t,e){1&t&&(s.Vb(0,"div"),s.Dc(1," Password must be at least 10 characters long. "),s.Ub())}function k(t,e){1&t&&(s.Vb(0,"div"),s.Dc(1," Password strenght is low. "),s.Ub())}function D(t,e){if(1&t&&(s.Vb(0,"div",17),s.Cc(1,V,2,0,"div",18),s.Cc(2,O,2,0,"div",18),s.Cc(3,k,2,0,"div",18),s.Ub()),2&t){const t=s.hc();s.Cb(1),s.nc("ngIf",t.f.confirmPassword.errors.required),s.Cb(1),s.nc("ngIf",t.f.confirmPassword.errors.minlength),s.Cb(1),s.nc("ngIf",t.f.confirmPassword.errors.pattern)}}const I=function(){return["/auth/login"]},F=[{path:"",component:m},{path:"login",component:m},{path:"register",component:(()=>{class t{constructor(t,e,r){this.router=t,this.formBuilder=e,this.auth=r,this.formError="",this.credentials={_id:"",username:"",email:"",password:"",confirmPassword:"",exp:0,iat:0},this.submitted=!1,this.strength={0:"Worst",1:"Bad",2:"Weak",3:"Good",4:"Strong"},this.meterValue=0}ngOnInit(){this.registerForm=new i.f({username:new i.d("",[i.r.required,i.r.minLength(5)]),email:new i.d("",[i.r.required,i.r.email]),password:new i.d("",[i.r.required,i.r.minLength(10),i.r.pattern("^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))).{8,32}$")]),confirmPassword:new i.d("",[i.r.required,i.r.minLength(10),i.r.pattern("^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))).{8,32}$")])}),this.passwordListener()}passwordListener(){let t=document.getElementById("password-strength-text");this.f.password.valueChanges.subscribe(e=>{let r=e,n=this.passwordValidates(r);this.meterValue=n,t.innerHTML=""!==r?"Strength: "+this.strength[n]:""})}passwordValidates(t){let e=0;return 8<=t.length&&t.length<=32&&(t.match(".*\\d.*")&&e++,t.match(".*[a-z].*")&&e++,t.match(".*[A-Z].*")&&e++,t.match(".*[*.!@#$%^&(){}[]:\"; '<>,.?/~`_+-=|\\].*")&&e++),e}get f(){return this.registerForm.controls}onSubmit(t){console.log(t)}onRegisterSubmit(){this.submitted=!0,this.formError="",this.registerForm.get("username").value&&this.registerForm.get("email").value&&this.registerForm.get("password").value&&this.registerForm.get("confirmPassword").value||(this.formError="All fields are required, please try again"),this.registerForm.invalid?this.formError="Form is invalid":this.registerForm.get("password").value!==this.registerForm.get("confirmPassword").value?this.formError="Password doesn't match":(this.formError="All good",this.credentials.username=this.registerForm.get("username").value,this.credentials.email=this.registerForm.get("email").value,this.credentials.password=this.registerForm.get("password").value,this.credentials.confirmPassword=this.registerForm.get("confirmPassword").value,this.doRegister())}doRegister(){this.auth.register(this.credentials).then(()=>this.router.navigateByUrl("/")).catch(t=>this.formError=t)}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(o.b),s.Pb(i.c),s.Pb(a.a))},t.\u0275cmp=s.Jb({type:t,selectors:[["app-register"]],decls:42,vars:10,consts:[[1,"login-form",3,"formGroup","ngSubmit"],["role","alert",4,"ngIf"],[1,"txtb"],["for","Username"],["type","text","id","username","name","username","formControlName","username","required",""],["class","alert alert-danger",4,"ngIf"],["for","Email"],["type","email","id","email","formControlName","email","required",""],["for","Password"],["type","password","id","password","formControlName","password","required",""],["max","4","id","password-strength-meter",3,"value"],["id","password-strength-text"],["type","password","id","confirmPassword","formControlName","confirmPassword","required",""],["type","submit","value","Register",1,"logbtn",3,"disabled"],[1,"bottom-text"],["routerLinkActive","router-link-active",3,"routerLink"],["role","alert"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function(t,e){1&t&&(s.Vb(0,"form",0),s.dc("ngSubmit",(function(){return e.onRegisterSubmit()})),s.Vb(1,"h1"),s.Dc(2,"Register"),s.Ub(),s.Cc(3,f,2,1,"div",1),s.Vb(4,"div",2),s.Vb(5,"label",3),s.Dc(6,"Username"),s.Ub(),s.Qb(7,"input",4),s.Cc(8,v,3,2,"div",5),s.Ub(),s.Vb(9,"div",2),s.Vb(10,"label",6),s.Dc(11,"Email"),s.Ub(),s.Qb(12,"input",7),s.Cc(13,P,3,2,"div",5),s.Ub(),s.Vb(14,"div",2),s.Vb(15,"label",8),s.Dc(16,"Password"),s.Ub(),s.Qb(17,"input",9),s.Cc(18,U,4,3,"div",5),s.Ub(),s.Vb(19,"div"),s.Vb(20,"div"),s.Dc(21,"At least one digit"),s.Ub(),s.Vb(22,"div"),s.Dc(23,"At least one lowercase character"),s.Ub(),s.Vb(24,"div"),s.Dc(25,"At least one uppercase character"),s.Ub(),s.Vb(26,"div"),s.Dc(27,"At least one special character"),s.Ub(),s.Vb(28,"div"),s.Dc(29,"At least 8 characters in length, but no more than 32"),s.Ub(),s.Qb(30,"meter",10),s.Qb(31,"p",11),s.Ub(),s.Vb(32,"div",2),s.Vb(33,"label",8),s.Dc(34,"Confirm Password"),s.Ub(),s.Qb(35,"input",12),s.Cc(36,D,4,3,"div",5),s.Ub(),s.Qb(37,"input",13),s.Vb(38,"div",14),s.Dc(39," Already have an account? "),s.Vb(40,"a",15),s.Dc(41,"Login"),s.Ub(),s.Ub(),s.Ub()),2&t&&(s.nc("formGroup",e.registerForm),s.Cb(3),s.nc("ngIf",e.formError),s.Cb(5),s.nc("ngIf",e.submitted&&e.f.username.errors),s.Cb(5),s.nc("ngIf",e.submitted&&e.f.email.errors),s.Cb(5),s.nc("ngIf",e.submitted&&e.f.password.errors),s.Cb(12),s.nc("value",e.meterValue),s.Cb(6),s.nc("ngIf",e.submitted&&e.f.confirmPassword.errors),s.Cb(1),s.nc("disabled",e.meterValue<3&&!e.registerForm.valid),s.Cb(3),s.nc("routerLink",s.oc(9,I)))},directives:[i.s,i.m,i.g,n.l,i.b,i.l,i.e,i.q,o.e,o.d],styles:['.login-form[_ngcontent-%COMP%]{width:50vh;color:var(--text);background:var(--bg-secondary);height:100vh;padding:80px 40px;border-radius:10px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.login-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:60px}.txtb[_ngcontent-%COMP%]{border-bottom:2px solid var(--border-color);position:relative;margin:30px 0}.txtb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:15px;color:var(--text);border:none;width:100%;outline:none;background:none;padding:0 5px;height:40px}.txtb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:attr(data-placeholder);position:absolute;top:50%;left:5px;color:#adadad;transform:translateY(-50%);z-index:-1;transition:.5s}.txtb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{content:"";position:absolute;width:0;height:2px;background:linear-gradient(120deg,#3498db,#8e44ad);transition:.5s}.txtb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%]:before{top:-5px}.input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + span[_ngcontent-%COMP%]:after, .logbtn[_ngcontent-%COMP%]{width:100%}.logbtn[_ngcontent-%COMP%]{display:block;height:50px;border:none;background:linear-gradient(120deg,#3498db,#8e44ad,#3498db);background-size:200%;color:var(--text);outline:none;cursor:pointer;transition:.5s}.logbtn[_ngcontent-%COMP%]:hover{background-position:100%}.bottom-text[_ngcontent-%COMP%]{margin-top:60px;text-align:center;font-size:13px}meter[_ngcontent-%COMP%]{margin:0 auto 1em;width:100%;height:.5em}meter[value="1"][_ngcontent-%COMP%]::-webkit-meter-optimum-value{background:red}meter[value="2"][_ngcontent-%COMP%]::-webkit-meter-optimum-value{background:#ff0}meter[value="3"][_ngcontent-%COMP%]::-webkit-meter-optimum-value{background:orange}meter[value="4"][_ngcontent-%COMP%]::-webkit-meter-optimum-value{background:green}meter[value="1"][_ngcontent-%COMP%]::-moz-meter-bar{background:red}meter[value="2"][_ngcontent-%COMP%]::-moz-meter-bar{background:#ff0}meter[value="3"][_ngcontent-%COMP%]::-moz-meter-bar{background:orange}meter[value="4"][_ngcontent-%COMP%]::-moz-meter-bar{background:green}']}),t})()}];let y=(()=>{class t{}return t.\u0275mod=s.Nb({type:t}),t.\u0275inj=s.Mb({factory:function(e){return new(e||t)},imports:[[o.f.forChild(F)],o.f]}),t})();var q=r("vvyD");let A=(()=>{class t{}return t.\u0275mod=s.Nb({type:t}),t.\u0275inj=s.Mb({factory:function(e){return new(e||t)},imports:[[n.c,y,q.a,i.h,i.p]]}),t})()}}]);