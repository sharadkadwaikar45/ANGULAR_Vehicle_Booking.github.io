!function(){"use strict";function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(n=i.key,s=void 0,"symbol"==typeof(s=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(n,"string"))?s:String(s)),i)}var n,s}function t(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[3333],{3333:function(e,i,n){n.r(i),n.d(i,{MaterialComponentsModule:function(){return u},routes:function(){return g}});var s=n(63423),r=n(51095),o=n(76627),l=n(44466),m=n(37716),p=n(38583);function d(e,t){if(1&e&&(m.ynx(0),m.TgZ(1,"a",15),m._UZ(2,"img",16),m.TgZ(3,"div",17),m.TgZ(4,"div",18),m._uU(5),m.qZA(),m.TgZ(6,"div",19),m._uU(7),m.qZA(),m.qZA(),m.qZA(),m.BQk()),2&e){var a=t.$implicit;m.xp6(1),m.Q6J("href","https://material.angular.io/components/"+a.id,m.LSH),m.xp6(1),m.Q6J("src","assets/images/ui/angular-material/scenes/"+a.id+".scene.png",m.LSH),m.xp6(3),m.Oqu(a.name),m.xp6(2),m.Oqu(a.summary)}}var c,g=[{path:"",component:(c=t(function e(){a(this,e),this.components=[{id:"autocomplete",name:"Autocomplete",summary:"Suggests relevant options as the user types.",exampleSpecs:{prefix:"autocomplete-"},additionalApiDocs:[{name:"Testing",path:"material-autocomplete-testing.html"}]},{id:"badge",name:"Badge",summary:"A small value indicator that can be overlaid on another object.",exampleSpecs:{prefix:"badge-"},additionalApiDocs:[{name:"Testing",path:"material-badge-testing.html"}]},{id:"bottom-sheet",name:"Bottom Sheet",summary:"A large interactive panel primarily for mobile devices.",exampleSpecs:{prefix:"bottom-sheet-"},additionalApiDocs:[{name:"Testing",path:"material-bottom-sheet-testing.html"}]},{id:"button",name:"Button",summary:"An interactive button with a range of presentation options.",exampleSpecs:{prefix:"button-",exclude:["button-toggle-"]},additionalApiDocs:[{name:"Testing",path:"material-button-testing.html"}]},{id:"button-toggle",name:"Button toggle",summary:"A groupable on/off toggle for enabling and disabling options.",exampleSpecs:{prefix:"button-toggle-"},additionalApiDocs:[{name:"Testing",path:"material-button-toggle-testing.html"}]},{id:"card",name:"Card",summary:"A styled container for pieces of itemized content.",exampleSpecs:{prefix:"card-"},additionalApiDocs:[{name:"Testing",path:"material-card-testing.html"}]},{id:"checkbox",name:"Checkbox",summary:"Captures boolean input with an optional indeterminate mode.",exampleSpecs:{prefix:"checkbox-"},additionalApiDocs:[{name:"Testing",path:"material-checkbox-testing.html"}]},{id:"chips",name:"Chips",summary:"Presents a list of items as a set of small, tactile entities.",exampleSpecs:{prefix:"chips-"},additionalApiDocs:[{name:"Testing",path:"material-chips-testing.html"}]},{id:"core",name:"Core",summary:"Reusable parts used by other components in the library.",exampleSpecs:{prefix:"core-"},additionalApiDocs:[{name:"Testing",path:"material-core-testing.html"}]},{id:"datepicker",name:"Datepicker",summary:"Captures dates, agnostic about their internal representation.",exampleSpecs:{prefix:"date"},additionalApiDocs:[{name:"Testing",path:"material-datepicker-testing.html"}]},{id:"dialog",name:"Dialog",summary:"A configurable modal that displays dynamic content.",exampleSpecs:{prefix:"dialog-"},additionalApiDocs:[{name:"Testing",path:"material-dialog-testing.html"}]},{id:"divider",name:"Divider",summary:"A vertical or horizontal visual divider.",exampleSpecs:{prefix:"divider-"},additionalApiDocs:[{name:"Testing",path:"material-divider-testing.html"}]},{id:"expansion",name:"Expansion Panel",summary:"A container which can be expanded to reveal more content.",exampleSpecs:{prefix:"expansion-"},additionalApiDocs:[{name:"Testing",path:"material-expansion-testing.html"}]},{id:"form-field",name:"Form field",summary:"Wraps input fields so they are displayed consistently.",exampleSpecs:{prefix:"form-field-"},additionalApiDocs:[{name:"Testing",path:"material-form-field-testing.html"}]},{id:"grid-list",name:"Grid list",summary:"A flexible structure for presenting content items in a grid.",exampleSpecs:{prefix:"grid-list-"},additionalApiDocs:[{name:"Testing",path:"material-grid-list-testing.html"}]},{id:"icon",name:"Icon",summary:"Renders a specified icon.",exampleSpecs:{prefix:"icon-"},additionalApiDocs:[{name:"Testing",path:"material-icon-testing.html"}]},{id:"input",name:"Input",summary:"Enables native inputs to be used within a Form field.",exampleSpecs:{prefix:"input-"},additionalApiDocs:[{name:"Testing",path:"material-input-testing.html"}]},{id:"list",name:"List",summary:"Presents conventional lists of items.",exampleSpecs:{prefix:"list-"},additionalApiDocs:[{name:"Testing",path:"material-list-testing.html"}]},{id:"menu",name:"Menu",summary:"A floating panel of nestable options.",exampleSpecs:{prefix:"menu-"},additionalApiDocs:[{name:"Testing",path:"material-menu-testing.html"}]},{id:"paginator",name:"Paginator",summary:"Controls for displaying paged data.",exampleSpecs:{prefix:"paginator-"},additionalApiDocs:[{name:"Testing",path:"material-paginator-testing.html"}]},{id:"progress-bar",name:"Progress bar",summary:"A linear progress indicator.",exampleSpecs:{prefix:"progress-bar-"},additionalApiDocs:[{name:"Testing",path:"material-progress-bar-testing.html"}]},{id:"progress-spinner",name:"Progress spinner",summary:"A circular progress indicator.",exampleSpecs:{prefix:"progress-spinner-"},additionalApiDocs:[{name:"Testing",path:"material-progress-spinner-testing.html"}]},{id:"radio",name:"Radio button",summary:"Allows the user to select one option from a group.",exampleSpecs:{prefix:"radio-"},additionalApiDocs:[{name:"Testing",path:"material-radio-testing.html"}]},{id:"ripple",name:"Ripples",overviewPath:"material/core/ripple/ripple.html",summary:"Directive for adding Material Design ripple effects",exampleSpecs:{prefix:"ripple-"}},{id:"select",name:"Select",summary:"Allows the user to select one or more options using a dropdown.",exampleSpecs:{prefix:"select-"},additionalApiDocs:[{name:"Testing",path:"material-select-testing.html"}]},{id:"sidenav",name:"Sidenav",summary:"A container for content that is fixed to one side of the screen.",exampleSpecs:{prefix:"sidenav-"},additionalApiDocs:[{name:"Testing",path:"material-sidenav-testing.html"}]},{id:"slide-toggle",name:"Slide toggle",summary:"Captures boolean values as a clickable and draggable switch.",exampleSpecs:{prefix:"slide-toggle-"},additionalApiDocs:[{name:"Testing",path:"material-slide-toggle-testing.html"}]},{id:"slider",name:"Slider",summary:"Allows the user to input a value by dragging along a slider.",exampleSpecs:{prefix:"slider-"},additionalApiDocs:[{name:"Testing",path:"material-slider-testing.html"}]},{id:"snack-bar",name:"Snackbar",summary:"Displays short actionable messages as an uninvasive alert.",exampleSpecs:{prefix:"snack-bar-"},additionalApiDocs:[{name:"Testing",path:"material-snack-bar-testing.html"}]},{id:"sort",name:"Sort header",summary:"Allows the user to configure how tabular data is sorted.",exampleSpecs:{prefix:"sort-"},additionalApiDocs:[{name:"Testing",path:"material-sort-testing.html"}]},{id:"stepper",name:"Stepper",summary:"Presents content as steps through which to progress.",exampleSpecs:{prefix:"stepper-"},additionalApiDocs:[{name:"Testing",path:"material-stepper-testing.html"}]},{id:"table",name:"Table",summary:"A configurable component for displaying tabular data.",exampleSpecs:{prefix:"table-"},additionalApiDocs:[{name:"Testing",path:"material-table-testing.html"}]},{id:"tabs",name:"Tabs",summary:"Only presents one view at a time from a provided set of views.",exampleSpecs:{prefix:"tab-"},additionalApiDocs:[{name:"Testing",path:"material-tabs-testing.html"}]},{id:"toolbar",name:"Toolbar",summary:"A container for top-level titles and controls.",exampleSpecs:{prefix:"toolbar-"},additionalApiDocs:[{name:"Testing",path:"material-toolbar-testing.html"}]},{id:"tooltip",name:"Tooltip",summary:"Displays floating content when an object is hovered.",exampleSpecs:{prefix:"tooltip-"},additionalApiDocs:[{name:"Testing",path:"material-tooltip-testing.html"}]},{id:"tree",name:"Tree",summary:"Presents hierarchical content as an expandable tree.",exampleSpecs:{prefix:"tree-"}}]}),c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=m.Xpm({type:c,selectors:[["material-components"]],decls:31,vars:3,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex","flex-shrink-0","items-center","mt-6","sm:mt-0","sm:ml-4"],["mat-flat-button","","href","https://material.angular.io/components/categories","target","_blank","rel","noreferrer",3,"color"],[1,"icon-size-5","mr-2",3,"svgIcon"],[1,"flex-auto","p-6","sm:p-10"],[1,"max-w-4xl","prose","prose-sm"],["href","https://material.angular.io/components/categories","rel","noreferrer","target","_blank",1,"link"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-4","xl:grid-cols-5","gap-10","mt-8"],[4,"ngFor","ngForOf"],["target","_blank","rel","noreferrer",1,"flex","flex-col","rounded-2xl","shadow","overflow-hidden","bg-card","hover:shadow-xl","transition-shadow","duration-200","ease-in-out",3,"href"],[1,"w-full","object-cover","border-b",3,"src"],[1,"py-4","px-5"],[1,"text-xl","font-semibold"],[1,"mt-1","text-secondary"]],template:function(e,t){1&e&&(m.TgZ(0,"div",0),m.TgZ(1,"div",1),m.TgZ(2,"div",2),m.TgZ(3,"div",3),m.TgZ(4,"div"),m.TgZ(5,"a",4),m._uU(6,"User Interface"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(7,"div",5),m.TgZ(8,"h2",6),m._uU(9," Angular Material Components "),m.qZA(),m.qZA(),m.qZA(),m.TgZ(10,"div",7),m.TgZ(11,"a",8),m._UZ(12,"mat-icon",9),m._uU(13," Official docs "),m.qZA(),m.qZA(),m.qZA(),m.TgZ(14,"div",10),m.TgZ(15,"div",11),m.TgZ(16,"p"),m._uU(17," Fuse uses "),m.TgZ(18,"a",12),m._uU(19,"Angular Material "),m.qZA(),m._uU(20," as its primary user interface library. It offers form controls, buttons, tabs, sidebars, icons, modals, tooltips, data tables and many more well tested and widely used components. "),m.qZA(),m.TgZ(21,"p"),m._uU(22," Even though Fuse doesn't follow Google's Material design specifications, Angular Material is one of the best Angular component libraries out there and since it's developed and maintained by Google itself, it offers the best compatibility and support for Angular. "),m.qZA(),m.TgZ(23,"p"),m._uU(24," Fuse is 100% compatible with all Angular Material components. "),m.qZA(),m.TgZ(25,"h2"),m._uU(26,"Component examples and API documentation"),m.qZA(),m.TgZ(27,"p"),m._uU(28," Following, you can find links to the official documentation. Click on the component you want to learn more about and it will redirect you to the related section of the official documentation. "),m.qZA(),m.qZA(),m.TgZ(29,"div",13),m.YNc(30,d,8,4,"ng-container",14),m.qZA(),m.qZA(),m.qZA()),2&e&&(m.xp6(11),m.Q6J("color","primary"),m.xp6(1),m.Q6J("svgIcon","heroicons_solid:external-link"),m.xp6(18),m.Q6J("ngForOf",t.components))},directives:[r.zs,o.Hw,p.sg],encapsulation:2}),c)}],u=function(){var e=t(function e(){a(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[s.Bz.forChild(g),r.ot,o.Ps,l.m]]}),e}()}}])}();