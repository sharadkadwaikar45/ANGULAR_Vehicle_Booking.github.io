!function(){"use strict";function t(e,r){return(t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(e,r)}function e(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var a,i=n(t);if(e){var o=n(this).constructor;a=Reflect.construct(i,arguments,o)}else a=i.apply(this,arguments);return r(this,a)}}function r(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(a=n.key,i=void 0,"symbol"==typeof(i=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(a,"string"))?i:String(i)),n)}var a,i}function i(t,e,r){return e&&a(t.prototype,e),r&&a(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[7462],{12178:function(r,n,a){a.d(n,{pW:function(){return h},Cv:function(){return A}});var s,c=a(37716),u=a(38583),m=a(72458),l=a(39490),d=a(46237),g=a(75319),p=a(22759),Z=a(45435),f=["primaryValueBar"],b=(0,m.pj)(function(){return i(function t(e){o(this,t),this._elementRef=e})}(),"primary"),v=new c.OlP("mat-progress-bar-location",{providedIn:"root",factory:function(){var t=(0,c.f3M)(u.K0),e=t?t.location:null;return{getPathname:function(){return e?e.pathname+e.search:""}}}}),x=0,h=((s=function(r){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&t(e,r)}(a,r);var n=e(a);function a(t,e,r,i){var s;o(this,a),(s=n.call(this,t))._ngZone=e,s._animationMode=r,s._isNoopAnimation=!1,s._value=0,s._bufferValue=0,s.animationEnd=new c.vpe,s._animationEndSubscription=g.w.EMPTY,s.mode="determinate",s.progressbarId="mat-progress-bar-"+x++;var u=i?i.getPathname().split("#")[0]:"";return s._rectangleFillValue="url('".concat(u,"#").concat(s.progressbarId,"')"),s._isNoopAnimation="NoopAnimations"===r,s}return i(a,[{key:"value",get:function(){return this._value},set:function(t){this._value=T((0,l.su)(t)||0)}},{key:"bufferValue",get:function(){return this._bufferValue},set:function(t){this._bufferValue=T(t||0)}},{key:"_primaryTransform",value:function(){return{transform:"scale3d(".concat(this.value/100,", 1, 1)")}}},{key:"_bufferTransform",value:function(){return"buffer"===this.mode?{transform:"scale3d(".concat(this.bufferValue/100,", 1, 1)")}:null}},{key:"ngAfterViewInit",value:function(){var t=this;this._ngZone.runOutsideAngular(function(){var e=t._primaryValueBar.nativeElement;t._animationEndSubscription=(0,p.R)(e,"transitionend").pipe((0,Z.h)(function(t){return t.target===e})).subscribe(function(){("determinate"===t.mode||"buffer"===t.mode)&&t._ngZone.run(function(){return t.animationEnd.next({value:t.value})})})})}},{key:"ngOnDestroy",value:function(){this._animationEndSubscription.unsubscribe()}}]),a}(b)).\u0275fac=function(t){return new(t||s)(c.Y36(c.SBq),c.Y36(c.R0b),c.Y36(d.Qb,8),c.Y36(v,8))},s.\u0275cmp=c.Xpm({type:s,selectors:[["mat-progress-bar"]],viewQuery:function(t,e){var r;1&t&&c.Gf(f,5),2&t&&c.iGM(r=c.CRH())&&(e._primaryValueBar=r.first)},hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-progress-bar"],hostVars:4,hostBindings:function(t,e){2&t&&(c.uIk("aria-valuenow","indeterminate"===e.mode||"query"===e.mode?null:e.value)("mode",e.mode),c.ekj("_mat-animation-noopable",e._isNoopAnimation))},inputs:{color:"color",mode:"mode",value:"value",bufferValue:"bufferValue"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[c.qOj],decls:10,vars:4,consts:[["aria-hidden","true"],["width","100%","height","4","focusable","false",1,"mat-progress-bar-background","mat-progress-bar-element"],["x","4","y","0","width","8","height","4","patternUnits","userSpaceOnUse",3,"id"],["cx","2","cy","2","r","2"],["width","100%","height","100%"],[1,"mat-progress-bar-buffer","mat-progress-bar-element",3,"ngStyle"],[1,"mat-progress-bar-primary","mat-progress-bar-fill","mat-progress-bar-element",3,"ngStyle"],["primaryValueBar",""],[1,"mat-progress-bar-secondary","mat-progress-bar-fill","mat-progress-bar-element"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.O4$(),c.TgZ(1,"svg",1),c.TgZ(2,"defs"),c.TgZ(3,"pattern",2),c._UZ(4,"circle",3),c.qZA(),c.qZA(),c._UZ(5,"rect",4),c.qZA(),c.kcU(),c._UZ(6,"div",5),c._UZ(7,"div",6,7),c._UZ(9,"div",8),c.qZA()),2&t&&(c.xp6(3),c.Q6J("id",e.progressbarId),c.xp6(2),c.uIk("fill",e._rectangleFillValue),c.xp6(1),c.Q6J("ngStyle",e._bufferTransform()),c.xp6(1),c.Q6J("ngStyle",e._primaryTransform()))},directives:[u.PC],styles:['.mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:"";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n'],encapsulation:2,changeDetection:0}),s);function T(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return Math.max(e,Math.min(r,t))}var A=function(){var t=i(function t(){o(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[u.ez,m.BQ],m.BQ]}),t}()},57462:function(t,e,r){r.r(e),r.d(e,{FinanceModule:function(){return P}});var n,a=r(63423),s=r(51095),c=r(1769),u=r(76627),m=r(33935),l=r(12178),d=r(11494),g=r(32789),p=r(34256),Z=r(44466),f=r(79765),b=r(46782),v=r(37716),x=r(26215),h=r(93342),T=r(91841),A=((n=function(){function t(e){o(this,t),this._httpClient=e,this._data=new x.X(null)}return i(t,[{key:"data$",get:function(){return this._data.asObservable()}},{key:"getData",value:function(){var t=this;return this._httpClient.get("api/dashboards/finance").pipe((0,h.b)(function(e){t._data.next(e)}))}}]),t}()).\u0275fac=function(t){return new(t||n)(v.LFG(T.eN))},n.\u0275prov=v.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n),_=r(38583),q=["recentTransactionsTable"];function y(t,e){1&t&&(v.TgZ(0,"th",89),v._uU(1," Transaction ID "),v.qZA())}function U(t,e){if(1&t&&(v.TgZ(0,"td",90),v.TgZ(1,"span",91),v._uU(2),v.qZA(),v.qZA()),2&t){var r=e.$implicit;v.xp6(2),v.hij(" ",r.transactionId," ")}}function w(t,e){1&t&&(v.TgZ(0,"th",89),v._uU(1," Date "),v.qZA())}function k(t,e){if(1&t&&(v.TgZ(0,"td",90),v.TgZ(1,"span",92),v._uU(2),v.ALo(3,"date"),v.qZA(),v.qZA()),2&t){var r=e.$implicit;v.xp6(2),v.hij(" ",v.xi3(3,1,r.date,"MMM dd, y")," ")}}function S(t,e){1&t&&(v.TgZ(0,"th",89),v._uU(1," Name "),v.qZA())}function Q(t,e){if(1&t&&(v.TgZ(0,"td",90),v.TgZ(1,"span",92),v._uU(2),v.qZA(),v.qZA()),2&t){var r=e.$implicit;v.xp6(2),v.hij(" ",r.name," ")}}function I(t,e){1&t&&(v.TgZ(0,"th",89),v._uU(1," Amount "),v.qZA())}function D(t,e){if(1&t&&(v.TgZ(0,"td",90),v.TgZ(1,"span",93),v._uU(2),v.ALo(3,"currency"),v.qZA(),v.qZA()),2&t){var r=e.$implicit;v.xp6(2),v.hij(" ",v.xi3(3,1,r.amount,"USD")," ")}}function J(t,e){1&t&&(v.TgZ(0,"th",89),v._uU(1," Status "),v.qZA())}var O=function(t,e){return{"bg-red-200 text-red-800 dark:bg-red-600 dark:text-red-50":t,"bg-green-200 text-green-800 dark:bg-green-600 dark:text-green-50":e}};function M(t,e){if(1&t&&(v.TgZ(0,"td",90),v.TgZ(1,"span",94),v.TgZ(2,"span",95),v._uU(3),v.qZA(),v.qZA(),v.qZA()),2&t){var r=e.$implicit;v.xp6(1),v.Q6J("ngClass",v.WLB(2,O,"pending"===r.status,"completed"===r.status)),v.xp6(2),v.Oqu(r.status)}}function B(t,e){1&t&&(v.TgZ(0,"td",96),v.TgZ(1,"button",97),v._uU(2,"See all transactions"),v.qZA(),v.qZA())}function C(t,e){1&t&&v._UZ(0,"tr",98)}function j(t,e){1&t&&v._UZ(0,"tr",99)}function E(t,e){1&t&&v._UZ(0,"tr",100)}var Y=function(){return["recentOrdersTableFooter"]},F=[{path:"",component:function(){var t=function(){function t(e){o(this,t),this._financeService=e,this.recentTransactionsDataSource=new g.by,this.recentTransactionsTableColumns=["transactionId","date","name","amount","status"],this._unsubscribeAll=new f.xQ}return i(t,[{key:"ngOnInit",value:function(){var t=this;this._financeService.data$.pipe((0,b.R)(this._unsubscribeAll)).subscribe(function(e){t.data=e,t.recentTransactionsDataSource.data=e.recentTransactions,t._prepareChartData()})}},{key:"ngAfterViewInit",value:function(){this.recentTransactionsDataSource.sort=this.recentTransactionsTableMatSort}},{key:"ngOnDestroy",value:function(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}},{key:"trackByFn",value:function(t,e){return e.id||t}},{key:"_prepareChartData",value:function(){this.accountBalanceOptions={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",width:"100%",height:"100%",type:"area",sparkline:{enabled:!0}},colors:["#A3BFFA","#667EEA"],fill:{colors:["#CED9FB","#AECDFD"],opacity:.5,type:"solid"},series:this.data.accountBalance.series,stroke:{curve:"straight",width:2},tooltip:{followCursor:!0,theme:"dark",x:{format:"MMM dd, yyyy"},y:{formatter:function(t){return t+"%"}}},xaxis:{type:"datetime"}}}}]),t}();return t.\u0275fac=function(e){return new(e||t)(v.Y36(A))},t.\u0275cmp=v.Xpm({type:t,selectors:[["finance"]],viewQuery:function(t,e){var r;(1&t&&v.Gf(q,5,d.YE),2&t)&&(v.iGM(r=v.CRH())&&(e.recentTransactionsTableMatSort=r.first))},decls:309,vars:96,consts:[[1,"flex","flex-col","flex-auto","w-full"],[1,"flex","flex-wrap","w-full","max-w-screen-xl","mx-auto","p-6","md:p-8"],[1,"flex","items-center","justify-between","w-full"],[1,"text-3xl","font-semibold","tracking-tight","leading-8"],[1,"font-medium","tracking-tight","text-secondary"],[1,"flex","items-center","ml-6"],["mat-stroked-button","",1,"hidden","sm:inline-flex"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["mat-stroked-button","",1,"hidden","sm:inline-flex","ml-3"],["mat-flat-button","",1,"hidden","sm:inline-flex","ml-3",3,"color"],[1,"sm:hidden"],["mat-icon-button","",3,"matMenuTriggerFor"],[3,"svgIcon"],["actionsMenu","matMenu"],["mat-menu-item",""],[1,"grid","grid-cols-1","xl:grid-cols-2","gap-8","w-full","mt-8"],[1,"grid","gap-8","sm:grid-flow-col","xl:grid-flow-row"],[1,"relative","flex","flex-col","flex-auto","p-6","pr-3","pb-3","bg-card","rounded-2xl","shadow","overflow-hidden"],[1,"absolute","bottom-0","right-0","w-24","h-24","-m-6"],[1,"icon-size-24","opacity-25","text-green-500","dark:text-green-400",3,"svgIcon"],[1,"flex","items-center"],[1,"flex","flex-col"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate"],[1,"text-green-600","font-medium","text-sm"],[1,"ml-auto","-mt-2"],["previousStatementMenu","matMenu"],[1,"icon-size-5","mr-3",3,"svgIcon"],[1,"my-2"],[1,"flex","flex-row","flex-wrap","mt-4","-mx-6"],[1,"flex","flex-col","mx-6","my-3"],[1,"text-sm","font-medium","leading-none","text-secondary"],[1,"mt-2","font-medium","text-3xl","leading-none"],[1,"icon-size-24","opacity-25","text-red-500","dark:text-red-400",3,"svgIcon"],[1,"text-red-600","font-medium","text-sm"],["currentStatementMenu","matMenu"],[1,"flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","flex-col","p-6","pb-4"],[1,"flex","items-center","justify-between"],[1,"mr-4","text-lg","font-medium","tracking-tight","leading-6","truncate"],[1,"text-secondary","font-medium"],["mat-button","",1,"h-6","min-h-6","px-2","rounded-full","bg-hover",3,"matMenuTriggerFor"],[1,"font-medium","text-sm","text-secondary"],["accountBalanceMenu","matMenu"],[1,"flex","items-start","mt-6","mr-2"],[1,"font-semibold","text-3xl","md:text-5xl","tracking-tighter"],[1,"font-medium","text-sm","text-secondary","leading-none"],[1,"flex","flex-col","ml-8","md:ml-16"],[1,"flex","flex-col","flex-auto"],[1,"flex-auto","w-full","h-full",3,"chart","colors","fill","series","stroke","tooltip","xaxis"],[1,"grid","grid-cols-1","xl:grid-cols-3","gap-8","w-full","mt-8"],[1,"xl:col-span-2","flex","flex-col","flex-auto","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"p-6"],[1,"overflow-x-auto","mx-6"],["mat-table","","matSort","",1,"w-full","bg-transparent",3,"dataSource","trackBy"],["recentTransactionsTable",""],["matColumnDef","transactionId"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","date"],["matColumnDef","name"],["matColumnDef","amount"],["matColumnDef","status"],["matColumnDef","recentOrdersTableFooter"],["class","py-6 px-0 border-0","mat-footer-cell","","colspan","6",4,"matFooterCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["class","order-row h-16","mat-row","",4,"matRowDef","matRowDefColumns"],["class","h-16 border-0","mat-footer-row","",4,"matFooterRowDef"],[1,"flex","flex-col","flex-auto","p-6","bg-card","rounded-2xl","shadow"],[1,"ml-auto","-mt-2","-mr-2"],["budgetMenu","matMenu"],[1,"mt-6"],[1,"my-8","space-y-8"],[1,"flex","items-center","justify-center","w-14","h-14","rounded","bg-red-100","text-red-800","dark:bg-red-600","dark:text-red-50"],[1,"text-current",3,"svgIcon"],[1,"flex-auto","ml-4","leading-none"],[1,"text-sm","font-medium","text-secondary"],[1,"mt-2","font-medium","text-2xl"],[1,"mt-3","rounded-full",3,"color","mode","value"],[1,"flex","items-end","justify-end","min-w-18","mt-auto","ml-6"],[1,"text-lg","leading-none"],[1,"text-green-600","icon-size-4","ml-1",3,"svgIcon"],[1,"flex","items-center","justify-center","w-14","h-14","rounded","bg-indigo-100","text-indigo-800","dark:bg-indigo-600","dark:text-indigo-50"],[1,"mt-3","rounded-full",3,"mode","value"],[1,"text-red-600","icon-size-4","ml-1",3,"svgIcon"],[1,"flex","items-center","justify-center","w-14","h-14","rounded","bg-teal-100","text-teal-800","dark:bg-teal-600","dark:text-teal-50"],[1,"mt-3","text-md","text-secondary"],[1,"flex","items-center","mt-auto"],["mat-stroked-button","",1,"mt-2"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"pr-6","font-medium","text-sm","text-secondary","whitespace-nowrap"],[1,"pr-6","whitespace-nowrap"],[1,"pr-6","font-medium","whitespace-nowrap"],[1,"inline-flex","items-center","font-bold","text-xs","px-2.5","py-0.5","rounded-full","tracking-wide","uppercase",3,"ngClass"],[1,"leading-relaxed","whitespace-nowrap"],["mat-footer-cell","","colspan","6",1,"py-6","px-0","border-0"],["mat-stroked-button",""],["mat-header-row",""],["mat-row","",1,"order-row","h-16"],["mat-footer-row","",1,"h-16","border-0"]],template:function(t,e){if(1&t&&(v.TgZ(0,"div",0),v.TgZ(1,"div",1),v.TgZ(2,"div",2),v.TgZ(3,"div"),v.TgZ(4,"h2",3),v._uU(5,"Finance dashboard"),v.qZA(),v.TgZ(6,"div",4),v._uU(7,"Keep track of your financial status"),v.qZA(),v.qZA(),v.TgZ(8,"div",5),v.TgZ(9,"button",6),v._UZ(10,"mat-icon",7),v.TgZ(11,"span",8),v._uU(12,"Reports"),v.qZA(),v.qZA(),v.TgZ(13,"button",9),v._UZ(14,"mat-icon",7),v.TgZ(15,"span",8),v._uU(16,"Settings"),v.qZA(),v.qZA(),v.TgZ(17,"button",10),v._UZ(18,"mat-icon",7),v.TgZ(19,"span",8),v._uU(20,"Export"),v.qZA(),v.qZA(),v.TgZ(21,"div",11),v.TgZ(22,"button",12),v._UZ(23,"mat-icon",13),v.qZA(),v.TgZ(24,"mat-menu",null,14),v.TgZ(26,"button",15),v._uU(27,"Export"),v.qZA(),v.TgZ(28,"button",15),v._uU(29,"Reports"),v.qZA(),v.TgZ(30,"button",15),v._uU(31,"Settings"),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.TgZ(32,"div",16),v.TgZ(33,"div",17),v.TgZ(34,"div",18),v.TgZ(35,"div",19),v._UZ(36,"mat-icon",20),v.qZA(),v.TgZ(37,"div",21),v.TgZ(38,"div",22),v.TgZ(39,"div",23),v._uU(40,"Previous Statement"),v.qZA(),v.TgZ(41,"div",24),v._uU(42),v.qZA(),v.qZA(),v.TgZ(43,"div",25),v.TgZ(44,"button",12),v._UZ(45,"mat-icon",7),v.qZA(),v.TgZ(46,"mat-menu",null,26),v.TgZ(48,"button",15),v.TgZ(49,"span",21),v._UZ(50,"mat-icon",27),v.TgZ(51,"span"),v._uU(52,"View statement"),v.qZA(),v.qZA(),v.qZA(),v.TgZ(53,"button",15),v.TgZ(54,"span",21),v._UZ(55,"mat-icon",27),v.TgZ(56,"span"),v._uU(57,"Spending breakdown"),v.qZA(),v.qZA(),v.qZA(),v.TgZ(58,"button",15),v.TgZ(59,"span",21),v._UZ(60,"mat-icon",27),v.TgZ(61,"span"),v._uU(62,"Tax breakdown"),v.qZA(),v.qZA(),v.qZA(),v._UZ(63,"mat-divider",28),v.TgZ(64,"button",15),v.TgZ(65,"span",21),v._UZ(66,"mat-icon",27),v.TgZ(67,"span"),v._uU(68,"Print statement"),v.qZA(),v.qZA(),v.qZA(),v.TgZ(69,"button",15),v.TgZ(70,"span",21),v._UZ(71,"mat-icon",27),v.TgZ(72,"span"),v._uU(73,"Email statement"),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.TgZ(74,"div",29),v.TgZ(75,"div",30),v.TgZ(76,"div",31),v._uU(77,"Card Limit"),v.qZA(),v.TgZ(78,"div",32),v._uU(79),v.ALo(80,"currency"),v.qZA(),v.qZA(),v.TgZ(81,"div",30),v.TgZ(82,"div",31),v._uU(83,"Spent"),v.qZA(),v.TgZ(84,"div",32),v._uU(85),v.ALo(86,"currency"),v.qZA(),v.qZA(),v.TgZ(87,"div",30),v.TgZ(88,"div",31),v._uU(89,"Minimum"),v.qZA(),v.TgZ(90,"div",32),v._uU(91),v.ALo(92,"currency"),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.TgZ(93,"div",18),v.TgZ(94,"div",19),v._UZ(95,"mat-icon",33),v.qZA(),v.TgZ(96,"div",21),v.TgZ(97,"div",22),v.TgZ(98,"div",23),v._uU(99,"Current Statement"),v.qZA(),v.TgZ(100,"div",34),v._uU(101),v.qZA(),v.qZA(),v.TgZ(102,"div",25),v.TgZ(103,"button",12),v._UZ(104,"mat-icon",7),v.qZA(),v.TgZ(105,"mat-menu",null,35),v.TgZ(107,"button",15),v.TgZ(108,"span",21),v._UZ(109,"mat-icon",27),v.TgZ(110,"span"),v._uU(111,"View statement"),v.qZA(),v.qZA(),v.qZA(),v.TgZ(112,"button",15),v.TgZ(113,"span",21),v._UZ(114,"mat-icon",27),v.TgZ(115,"span"),v._uU(116,"Spending breakdown"),v.qZA(),v.qZA(),v.qZA(),v.TgZ(117,"button",15),v.TgZ(118,"span",21),v._UZ(119,"mat-icon",27),v.TgZ(120,"span"),v._uU(121,"Tax breakdown"),v.qZA(),v.qZA(),v.qZA(),v._UZ(122,"mat-divider",28),v.TgZ(123,"button",15),v.TgZ(124,"span",21),v._UZ(125,"mat-icon",27),v.TgZ(126,"span"),v._uU(127,"Print statement"),v.qZA(),v.qZA(),v.qZA(),v.TgZ(128,"button",15),v.TgZ(129,"span",21),v._UZ(130,"mat-icon",27),v.TgZ(131,"span"),v._uU(132,"Email statement"),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.TgZ(133,"div",29),v.TgZ(134,"div",30),v.TgZ(135,"div",31),v._uU(136,"Card Limit"),v.qZA(),v.TgZ(137,"div",32),v._uU(138),v.ALo(139,"currency"),v.qZA(),v.qZA(),v.TgZ(140,"div",30),v.TgZ(141,"div",31),v._uU(142,"Spent"),v.qZA(),v.TgZ(143,"div",32),v._uU(144),v.ALo(145,"currency"),v.qZA(),v.qZA(),v.TgZ(146,"div",30),v.TgZ(147,"div",31),v._uU(148,"Minimum"),v.qZA(),v.TgZ(149,"div",32),v._uU(150),v.ALo(151,"currency"),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.TgZ(152,"div",36),v.TgZ(153,"div",37),v.TgZ(154,"div",38),v.TgZ(155,"div",22),v.TgZ(156,"div",39),v._uU(157,"Account Balance"),v.qZA(),v.TgZ(158,"div",40),v._uU(159,"Monthly balance growth and avg. monthly income"),v.qZA(),v.qZA(),v.TgZ(160,"div",8),v.TgZ(161,"button",41),v.TgZ(162,"span",42),v._uU(163,"12 months"),v.qZA(),v.qZA(),v.TgZ(164,"mat-menu",null,43),v.TgZ(166,"button",15),v._uU(167,"3 months"),v.qZA(),v.TgZ(168,"button",15),v._uU(169,"6 months"),v.qZA(),v.TgZ(170,"button",15),v._uU(171,"9 months"),v.qZA(),v.TgZ(172,"button",15),v._uU(173,"12 months"),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.TgZ(174,"div",44),v.TgZ(175,"div",22),v.TgZ(176,"div",45),v._uU(177),v.qZA(),v.TgZ(178,"div",46),v._uU(179,"Average Monthly Growth"),v.qZA(),v.qZA(),v.TgZ(180,"div",47),v.TgZ(181,"div",45),v._uU(182),v.ALo(183,"currency"),v.qZA(),v.TgZ(184,"div",46),v._uU(185,"Average Monthly Income"),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.TgZ(186,"div",48),v._UZ(187,"apx-chart",49),v.qZA(),v.qZA(),v.qZA(),v.TgZ(188,"div",50),v.TgZ(189,"div",51),v.TgZ(190,"div",52),v.TgZ(191,"div",39),v._uU(192,"Recent transactions"),v.qZA(),v.TgZ(193,"div",40),v._uU(194,"1 pending, 4 completed"),v.qZA(),v.qZA(),v.TgZ(195,"div",53),v.TgZ(196,"table",54,55),v.ynx(198,56),v.YNc(199,y,2,0,"th",57),v.YNc(200,U,3,1,"td",58),v.BQk(),v.ynx(201,59),v.YNc(202,w,2,0,"th",57),v.YNc(203,k,4,4,"td",58),v.BQk(),v.ynx(204,60),v.YNc(205,S,2,0,"th",57),v.YNc(206,Q,3,1,"td",58),v.BQk(),v.ynx(207,61),v.YNc(208,I,2,0,"th",57),v.YNc(209,D,4,4,"td",58),v.BQk(),v.ynx(210,62),v.YNc(211,J,2,0,"th",57),v.YNc(212,M,4,5,"td",58),v.BQk(),v.ynx(213,63),v.YNc(214,B,3,0,"td",64),v.BQk(),v.YNc(215,C,1,0,"tr",65),v.YNc(216,j,1,0,"tr",66),v.YNc(217,E,1,0,"tr",67),v.qZA(),v.qZA(),v.qZA(),v.TgZ(218,"div",68),v.TgZ(219,"div",21),v.TgZ(220,"div",22),v.TgZ(221,"div",39),v._uU(222,"Budget"),v.qZA(),v.TgZ(223,"div",40),v._uU(224,"Monthly budget summary"),v.qZA(),v.qZA(),v.TgZ(225,"div",69),v.TgZ(226,"button",12),v._UZ(227,"mat-icon",7),v.qZA(),v.TgZ(228,"mat-menu",null,70),v.TgZ(230,"button",15),v._uU(231,"Expenses breakdown"),v.qZA(),v.TgZ(232,"button",15),v._uU(233,"Savings breakdown"),v.qZA(),v.TgZ(234,"button",15),v._uU(235,"Bills breakdown"),v.qZA(),v._UZ(236,"mat-divider",28),v.TgZ(237,"button",15),v.TgZ(238,"span",21),v._UZ(239,"mat-icon",27),v.TgZ(240,"span"),v._uU(241,"Print budget summary"),v.qZA(),v.qZA(),v.qZA(),v.TgZ(242,"button",15),v.TgZ(243,"span",21),v._UZ(244,"mat-icon",27),v.TgZ(245,"span"),v._uU(246,"Email budget summary"),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.TgZ(247,"div",71),v._uU(248," Last month; you had "),v.TgZ(249,"strong"),v._uU(250,"223"),v.qZA(),v._uU(251," expense transactions, "),v.TgZ(252,"strong"),v._uU(253,"12"),v.qZA(),v._uU(254," savings entries and "),v.TgZ(255,"strong"),v._uU(256,"4"),v.qZA(),v._uU(257," bills. "),v.qZA(),v.TgZ(258,"div",72),v.TgZ(259,"div",22),v.TgZ(260,"div",21),v.TgZ(261,"div",73),v._UZ(262,"mat-icon",74),v.qZA(),v.TgZ(263,"div",75),v.TgZ(264,"div",76),v._uU(265,"Expenses"),v.qZA(),v.TgZ(266,"div",77),v._uU(267),v.ALo(268,"currency"),v.qZA(),v._UZ(269,"mat-progress-bar",78),v.qZA(),v.TgZ(270,"div",79),v.TgZ(271,"div",80),v._uU(272,"2.6%"),v.qZA(),v._UZ(273,"mat-icon",81),v.qZA(),v.qZA(),v.qZA(),v.TgZ(274,"div",22),v.TgZ(275,"div",21),v.TgZ(276,"div",82),v._UZ(277,"mat-icon",74),v.qZA(),v.TgZ(278,"div",75),v.TgZ(279,"div",76),v._uU(280,"Savings"),v.qZA(),v.TgZ(281,"div",77),v._uU(282),v.ALo(283,"currency"),v.qZA(),v._UZ(284,"mat-progress-bar",83),v.qZA(),v.TgZ(285,"div",79),v.TgZ(286,"div",80),v._uU(287,"12.7%"),v.qZA(),v._UZ(288,"mat-icon",84),v.qZA(),v.qZA(),v.qZA(),v.TgZ(289,"div",22),v.TgZ(290,"div",21),v.TgZ(291,"div",85),v._UZ(292,"mat-icon",74),v.qZA(),v.TgZ(293,"div",75),v.TgZ(294,"div",76),v._uU(295,"Bills"),v.qZA(),v.TgZ(296,"div",77),v._uU(297),v.ALo(298,"currency"),v.qZA(),v._UZ(299,"mat-progress-bar",83),v.qZA(),v.TgZ(300,"div",79),v.TgZ(301,"div",80),v._uU(302,"105.7%"),v.qZA(),v._UZ(303,"mat-icon",84),v.qZA(),v.qZA(),v.TgZ(304,"div",86),v._uU(305,"Exceeded your personal limit! Be careful next month."),v.qZA(),v.qZA(),v.qZA(),v.TgZ(306,"div",87),v.TgZ(307,"button",88),v._uU(308," Download Summary "),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.qZA(),v.qZA()),2&t){var r=v.MAs(25),n=v.MAs(47),a=v.MAs(106),i=v.MAs(165),o=v.MAs(229);v.xp6(10),v.Q6J("svgIcon","heroicons_solid:document-report"),v.xp6(4),v.Q6J("svgIcon","heroicons_solid:cog"),v.xp6(3),v.Q6J("color","primary"),v.xp6(1),v.Q6J("svgIcon","heroicons_solid:save"),v.xp6(4),v.Q6J("matMenuTriggerFor",r),v.xp6(1),v.Q6J("svgIcon","heroicons_outline:dots-vertical"),v.xp6(13),v.Q6J("svgIcon","heroicons_outline:check-circle"),v.xp6(6),v.hij(" Paid on ",e.data.previousStatement.date," "),v.xp6(2),v.Q6J("matMenuTriggerFor",n),v.xp6(1),v.Q6J("svgIcon","heroicons_solid:dots-vertical"),v.xp6(5),v.Q6J("svgIcon","heroicons_solid:credit-card"),v.xp6(5),v.Q6J("svgIcon","heroicons_solid:cash"),v.xp6(5),v.Q6J("svgIcon","heroicons_solid:receipt-tax"),v.xp6(6),v.Q6J("svgIcon","heroicons_solid:printer"),v.xp6(5),v.Q6J("svgIcon","heroicons_solid:mail"),v.xp6(8),v.Oqu(v.xi3(80,65,e.data.previousStatement.limit,"USD")),v.xp6(6),v.Oqu(v.xi3(86,68,e.data.previousStatement.spent,"USD")),v.xp6(6),v.Oqu(v.xi3(92,71,e.data.previousStatement.minimum,"USD")),v.xp6(4),v.Q6J("svgIcon","heroicons_outline:exclamation-circle"),v.xp6(6),v.hij(" Must be paid before ",e.data.currentStatement.date," "),v.xp6(2),v.Q6J("matMenuTriggerFor",a),v.xp6(1),v.Q6J("svgIcon","heroicons_solid:dots-vertical"),v.xp6(5),v.Q6J("svgIcon","heroicons_solid:credit-card"),v.xp6(5),v.Q6J("svgIcon","heroicons_solid:cash"),v.xp6(5),v.Q6J("svgIcon","heroicons_solid:receipt-tax"),v.xp6(6),v.Q6J("svgIcon","heroicons_solid:printer"),v.xp6(5),v.Q6J("svgIcon","heroicons_solid:mail"),v.xp6(8),v.Oqu(v.xi3(139,74,e.data.currentStatement.limit,"USD")),v.xp6(6),v.Oqu(v.xi3(145,77,e.data.currentStatement.spent,"USD")),v.xp6(6),v.Oqu(v.xi3(151,80,e.data.currentStatement.minimum,"USD")),v.xp6(11),v.Q6J("matMenuTriggerFor",i),v.xp6(16),v.hij("",e.data.accountBalance.growRate,"%"),v.xp6(5),v.Oqu(v.xi3(183,83,e.data.accountBalance.ami,"USD")),v.xp6(5),v.Q6J("chart",e.accountBalanceOptions.chart)("colors",e.accountBalanceOptions.colors)("fill",e.accountBalanceOptions.fill)("series",e.accountBalanceOptions.series)("stroke",e.accountBalanceOptions.stroke)("tooltip",e.accountBalanceOptions.tooltip)("xaxis",e.accountBalanceOptions.xaxis),v.xp6(9),v.Q6J("dataSource",e.recentTransactionsDataSource)("trackBy",e.trackByFn),v.xp6(19),v.Q6J("matHeaderRowDef",e.recentTransactionsTableColumns),v.xp6(1),v.Q6J("matRowDefColumns",e.recentTransactionsTableColumns),v.xp6(1),v.Q6J("matFooterRowDef",v.DdM(95,Y)),v.xp6(9),v.Q6J("matMenuTriggerFor",o),v.xp6(1),v.Q6J("svgIcon","heroicons_solid:dots-vertical"),v.xp6(12),v.Q6J("svgIcon","heroicons_solid:printer"),v.xp6(5),v.Q6J("svgIcon","heroicons_solid:mail"),v.xp6(18),v.Q6J("svgIcon","heroicons_outline:credit-card"),v.xp6(5),v.Oqu(v.xi3(268,86,e.data.budget.expenses,"USD")),v.xp6(2),v.Q6J("color","warn")("mode","determinate")("value",100*e.data.budget.expenses/e.data.budget.expensesLimit),v.xp6(4),v.Q6J("svgIcon","heroicons_solid:arrow-narrow-down"),v.xp6(4),v.Q6J("svgIcon","heroicons_outline:cash"),v.xp6(5),v.Oqu(v.xi3(283,89,e.data.budget.savings,"USD")),v.xp6(2),v.Q6J("mode","determinate")("value",100*e.data.budget.savings/e.data.budget.savingsGoal),v.xp6(4),v.Q6J("svgIcon","heroicons_solid:arrow-narrow-up"),v.xp6(4),v.Q6J("svgIcon","heroicons_outline:light-bulb"),v.xp6(5),v.Oqu(v.xi3(298,92,e.data.budget.bills,"USD")),v.xp6(2),v.Q6J("mode","determinate")("value",100*e.data.budget.bills/e.data.budget.billsLimit),v.xp6(4),v.Q6J("svgIcon","heroicons_solid:arrow-narrow-up")}},directives:[s.lW,u.Hw,m.p6,m.VK,m.OP,c.d,p.x,g.BZ,d.YE,g.w1,g.fO,g.Dz,g.mD,g.as,g.nj,g.Ke,l.pW,g.ge,d.nU,g.ev,_.mk,g.yh,g.XQ,g.Gk,g.Q2],pipes:[_.H9,_.uU],encapsulation:2,changeDetection:0}),t}(),resolve:{data:function(){var t=function(){function t(e){o(this,t),this._financeService=e}return i(t,[{key:"resolve",value:function(t,e){return this._financeService.getData()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(v.LFG(A))},t.\u0275prov=v.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}],P=function(){var t=i(function t(){o(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=v.oAB({type:t}),t.\u0275inj=v.cJS({imports:[[a.Bz.forChild(F),s.ot,c.t,u.Ps,m.Tx,l.Cv,d.JX,g.p0,p.X,Z.m]]}),t}()}}])}();