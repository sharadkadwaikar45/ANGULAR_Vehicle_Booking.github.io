"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[8592],{19602:function(a,e,r){r.d(e,{y:function(){return p}});var s=r(39490),t=r(28288),n=r(37716),i=r(38583);function o(a,e){1&a&&(n.ynx(0),n.TgZ(1,"div",1),n.Hsn(2),n.qZA(),n.TgZ(3,"div",2),n.Hsn(4,1),n.qZA(),n.BQk())}function f(a,e){1&a&&(n.TgZ(0,"div",4),n.Hsn(1,3),n.qZA()),2&a&&n.Q6J("@expandCollapse",void 0)}function d(a,e){if(1&a&&(n.ynx(0),n.Hsn(1,2),n.YNc(2,f,2,1,"div",3),n.BQk()),2&a){const a=n.oxw();n.xp6(2),n.Q6J("ngIf",a.expanded)}}const c=[[["","fuseCardFront",""]],[["","fuseCardBack",""]],"*",[["","fuseCardExpansion",""]]],u=["[fuseCardFront]","[fuseCardBack]","*","[fuseCardExpansion]"];let p=(()=>{class a{constructor(){this.expanded=!1,this.face="front",this.flippable=!1}get classList(){return{"fuse-card-expanded":this.expanded,"fuse-card-face-back":this.flippable&&"back"===this.face,"fuse-card-face-front":this.flippable&&"front"===this.face,"fuse-card-flippable":this.flippable}}ngOnChanges(a){"expanded"in a&&(this.expanded=(0,s.Ig)(a.expanded.currentValue)),"flippable"in a&&(this.flippable=(0,s.Ig)(a.flippable.currentValue))}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=n.Xpm({type:a,selectors:[["fuse-card"]],hostVars:2,hostBindings:function(a,e){2&a&&n.Tol(e.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["fuseCard"],features:[n.TTD],ngContentSelectors:u,decls:2,vars:2,consts:[[4,"ngIf"],[1,"fuse-card-front"],[1,"fuse-card-back"],["class","fuse-card-expansion",4,"ngIf"],[1,"fuse-card-expansion"]],template:function(a,e){1&a&&(n.F$t(c),n.YNc(0,o,5,0,"ng-container",0),n.YNc(1,d,3,1,"ng-container",0)),2&a&&(n.Q6J("ngIf",e.flippable),n.xp6(1),n.Q6J("ngIf",!e.flippable))},directives:[i.O5],styles:["fuse-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}fuse-card.fuse-card-flippable .fuse-card-front,fuse-card.fuse-card-flippable .fuse-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;backface-visibility:hidden}fuse-card.fuse-card-flippable .fuse-card-front,fuse-card.fuse-card-flippable .fuse-card-back{--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable .fuse-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}fuse-card.fuse-card-flippable .fuse-card-back{position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}\n"],encapsulation:2,data:{animation:t.L}}),a})()},15935:function(a,e,r){r.d(e,{y:function(){return s.y},J:function(){return i}});var s=r(19602),t=r(38583),n=r(37716);let i=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[[t.ez]]}),a})()},14485:function(a,e,r){r.d(e,{a:function(){return s}});class s{static isEmptyInputValue(a){return null==a||0===a.length}static mustMatch(a,e){return r=>{const s=r.get(a),t=r.get(e);if(!s||!t||(t.hasError("mustMatch")&&(delete t.errors.mustMatch,t.updateValueAndValidity()),this.isEmptyInputValue(t.value)||s.value===t.value))return null;const n={mustMatch:!0};return t.setErrors(n),n}}}}}]);