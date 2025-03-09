!function(){"use strict";function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(s=o.key,n=void 0,"symbol"==typeof(n=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,r||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(s,"string"))?n:String(n)),o)}var s,n}function t(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[1107],{21107:function(r,o,s){s.r(o),s.d(o,{AuthForgotPasswordModule:function(){return J}});var n=s(63423),i=s(51095),a=s(98295),m=s(76627),u=s(49983),f=s(4885),l=s(15935),d=s(10588),c=s(44466),g=s(3679),p=s(68939),w=s(28288),h=s(37716),y=s(88951),Z=s(38583),v=s(98214),b=["forgotPasswordNgForm"];function x(e,r){if(1&e&&(h.TgZ(0,"fuse-alert",18),h._uU(1),h.qZA()),2&e){var t=h.oxw();h.Q6J("appearance","outline")("showIcon",!1)("type",t.alert.type)("@shake","error"===t.alert.type),h.xp6(1),h.hij(" ",t.alert.message," ")}}function A(e,r){1&e&&(h.TgZ(0,"mat-error"),h._uU(1," Email address is required "),h.qZA())}function P(e,r){1&e&&(h.TgZ(0,"mat-error"),h._uU(1," Please enter a valid email address "),h.qZA())}function q(e,r){1&e&&(h.TgZ(0,"span"),h._uU(1," Send reset link "),h.qZA())}function F(e,r){1&e&&h._UZ(0,"mat-progress-spinner",19),2&e&&h.Q6J("diameter",24)("mode","indeterminate")}var T,_=function(){return["/sign-in"]},k=[{path:"",component:(T=function(){function r(t,o){e(this,r),this._authService=t,this._formBuilder=o,this.alert={type:"success",message:""},this.showAlert=!1}return t(r,[{key:"ngOnInit",value:function(){this.forgotPasswordForm=this._formBuilder.group({email:["",[g.kI.required,g.kI.email]]})}},{key:"sendResetLink",value:function(){var e=this;this.forgotPasswordForm.invalid||(this.forgotPasswordForm.disable(),this.showAlert=!1,this._authService.forgotPassword(this.forgotPasswordForm.get("email").value).pipe((0,p.x)(function(){e.forgotPasswordForm.enable(),e.forgotPasswordNgForm.resetForm(),e.showAlert=!0})).subscribe(function(r){e.alert={type:"success",message:"Password reset sent! You'll receive an email if you are registered on our system."}},function(r){e.alert={type:"error",message:"Email does not found! Are you sure you are already a member?"}}))}}]),r}(),T.\u0275fac=function(e){return new(e||T)(h.Y36(y.e),h.Y36(g.qu))},T.\u0275cmp=h.Xpm({type:T,selectors:[["auth-forgot-password"]],viewQuery:function(e,r){var t;1&e&&h.Gf(b,5),2&e&&h.iGM(t=h.CRH())&&(r.forgotPasswordNgForm=t.first)},decls:27,vars:10,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-center","flex-auto","min-w-0"],[1,"flex","md:items-center","md:justify-center","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16"],[1,"w-full","max-w-120","sm:w-120","mx-auto","sm:mx-0"],[1,"mt-8","bg-card","shadow-md","rounded-xl","md:p-14","sm:p-10","p-6"],[1,"flex","justify-center"],["src","assets\\images\\logo\\systemlogo.png",2,"width","50%"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["forgotPasswordNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-small","w-full","mt-3",3,"disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","hover:underline",3,"routerLink"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[3,"diameter","mode"]],template:function(e,r){1&e&&(h.TgZ(0,"div",0),h.TgZ(1,"div",1),h.TgZ(2,"div",2),h.TgZ(3,"div",3),h.TgZ(4,"div",4),h._UZ(5,"img",5),h.qZA(),h.TgZ(6,"div",6),h._uU(7,"Forgot password?"),h.qZA(),h.TgZ(8,"div",7),h._uU(9,"Fill the form to reset your password"),h.qZA(),h.YNc(10,x,2,5,"fuse-alert",8),h.TgZ(11,"form",9,10),h.TgZ(13,"mat-form-field",11),h.TgZ(14,"mat-label"),h._uU(15,"Email address"),h.qZA(),h._UZ(16,"input",12),h.YNc(17,A,2,0,"mat-error",13),h.YNc(18,P,2,0,"mat-error",13),h.qZA(),h.TgZ(19,"button",14),h.NdJ("click",function(){return r.sendResetLink()}),h.YNc(20,q,2,0,"span",13),h.YNc(21,F,1,2,"mat-progress-spinner",15),h.qZA(),h.TgZ(22,"div",16),h.TgZ(23,"span"),h._uU(24,"Return to"),h.qZA(),h.TgZ(25,"a",17),h._uU(26,"sign in "),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA()),2&e&&(h.xp6(10),h.Q6J("ngIf",r.showAlert),h.xp6(1),h.Q6J("formGroup",r.forgotPasswordForm),h.xp6(5),h.Q6J("formControlName","email"),h.xp6(1),h.Q6J("ngIf",r.forgotPasswordForm.get("email").hasError("required")),h.xp6(1),h.Q6J("ngIf",r.forgotPasswordForm.get("email").hasError("email")),h.xp6(1),h.Q6J("disabled",r.forgotPasswordForm.disabled),h.xp6(1),h.Q6J("ngIf",!r.forgotPasswordForm.disabled),h.xp6(1),h.Q6J("ngIf",r.forgotPasswordForm.disabled),h.xp6(4),h.Q6J("routerLink",h.DdM(9,_)))},directives:[Z.O5,g._Y,g.JL,g.sg,a.KE,a.hX,u.Nt,g.Fj,g.JJ,g.u,i.lW,n.yS,v.W,a.TO,f.Ou],encapsulation:2,data:{animation:w.L}}),T)}],J=function(){var r=t(function r(){e(this,r)});return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=h.oAB({type:r}),r.\u0275inj=h.cJS({imports:[[n.Bz.forChild(k),i.ot,a.lN,m.Ps,u.c,f.Cq,l.J,d.fC,c.m]]}),r}()}}])}();