(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, license, author, description, homepage, bugs, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"darts-scoreboard-ng\",\"version\":\"2.4.5\",\"license\":\"MIT\",\"author\":{\"name\":\"Viktor Hajer\",\"email\":\"viktor.hajer@gmail.com\"},\"description\":\"See Readme\",\"homepage\":\"https://github.com/viktorhajer/darts-scoreboard-ng#readme\",\"bugs\":{\"url\":\"https://github.com/viktorhajer/darts-scoreboard-ng/issues\"},\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build\",\"eslint\":\"eslint src/**/*.ts\"},\"private\":false,\"dependencies\":{\"@angular/animations\":\"~9.0.0\",\"@angular/cdk\":\"^9.0.0\",\"@angular/common\":\"~9.0.0\",\"@angular/compiler\":\"~9.0.0\",\"@angular/core\":\"~9.0.0\",\"@angular/forms\":\"~9.0.0\",\"@angular/material\":\"^9.0.0\",\"@angular/platform-browser\":\"~9.0.0\",\"@angular/platform-browser-dynamic\":\"~9.0.0\",\"@angular/router\":\"~9.0.0\",\"@types/d3\":\"^7.1.0\",\"d3\":\"^7.3.0\",\"rxjs\":\"~6.5.4\",\"tslib\":\"^1.10.0\",\"zone.js\":\"~0.10.2\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.900.1\",\"@angular/cli\":\"~9.0.1\",\"@angular/compiler-cli\":\"~9.0.0\",\"@angular/language-service\":\"~9.0.0\",\"@types/node\":\"12.12.47\",\"@typescript-eslint/eslint-plugin\":\"^2.19.2\",\"@typescript-eslint/eslint-plugin-tslint\":\"^2.19.2\",\"@typescript-eslint/parser\":\"^2.19.2\",\"eslint\":\"^6.8.0\",\"ts-node\":\"~8.3.0\",\"tslint\":\"~5.18.0\",\"typescript\":\"~3.7.5\"}}");

/***/ }),

/***/ "./src/app/app-game-types.ts":
/*!***********************************!*\
  !*** ./src/app/app-game-types.ts ***!
  \***********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
const routes = [
    {
        path: 'x01',
        data: { name: 'Classic X01', color: '#009688', icon: 'emoji_food_beverage', bot: true }
    },
    {
        path: 'cricket',
        data: { name: 'Ultimate Cricket', color: '#0a756b', icon: 'sports_cricket' }
    },
    {
        path: 'around-clock',
        data: { name: 'Around The Clock', color: '#0f5851', icon: 'cached', bot: true }
    },
    {
        path: 'shanghai',
        data: { name: 'Shanghai, Halve It', color: '#0f5851', icon: 'emoji_symbols' }
    },
    {
        path: 'fives',
        data: { name: 'Fives', color: '#009688', icon: 'add_box' }
    },
    {
        path: 'hare-and-hound',
        data: { name: 'Hare and Hound', color: '#0a756b', icon: 'cruelty_free' }
    },
    {
        path: 'knockout',
        data: { name: 'Knockout', color: '#009688', icon: 'sports_mma' }
    },
    {
        path: 'killer',
        data: { name: 'Killer', color: '#0a756b', icon: 'gps_fixed' }
    },
    {
        path: 'capture-the-flag',
        data: { name: 'Capture the Flag', color: '#0a756b', icon: 'flag' }
    },
    {
        path: 'duel',
        data: { name: 'Duel', color: '#0a756b', icon: 'emoji_events' }
    },
    {
        path: 'imitator',
        data: { name: 'Imitator', color: '#0a756b', icon: 'group' }
    },
    {
        path: 'scam',
        data: { name: 'Scam', color: '#0a756b', icon: 'group_work', bot: true }
    }
];


/***/ }),

/***/ "./src/app/app-routing.ts":
/*!********************************!*\
  !*** ./src/app/app-routing.ts ***!
  \********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _shared_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/menu/menu.component */ "./src/app/shared/components/menu/menu.component.ts");
/* harmony import */ var _x01_x01_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./x01/x01.module */ "./src/app/x01/x01.module.ts");
/* harmony import */ var _cricket_cricket_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cricket/cricket.module */ "./src/app/cricket/cricket.module.ts");
/* harmony import */ var _aroundclock_around_clock_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aroundclock/around-clock.module */ "./src/app/aroundclock/around-clock.module.ts");
/* harmony import */ var _shanghai_shanghai_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shanghai/shanghai.module */ "./src/app/shanghai/shanghai.module.ts");
/* harmony import */ var _killer_killer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./killer/killer.module */ "./src/app/killer/killer.module.ts");
/* harmony import */ var _fives_fives_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fives/fives.module */ "./src/app/fives/fives.module.ts");
/* harmony import */ var _hare_and_hound_hare_and_hound_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hare-and-hound/hare-and-hound.module */ "./src/app/hare-and-hound/hare-and-hound.module.ts");
/* harmony import */ var _knockout_knockout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./knockout/knockout.module */ "./src/app/knockout/knockout.module.ts");
/* harmony import */ var _capture_the_flag_capture_the_flag_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./capture-the-flag/capture-the-flag.module */ "./src/app/capture-the-flag/capture-the-flag.module.ts");
/* harmony import */ var _imitator_imitator_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./imitator/imitator.module */ "./src/app/imitator/imitator.module.ts");
/* harmony import */ var _scam_scam_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scam/scam.module */ "./src/app/scam/scam.module.ts");
/* harmony import */ var _duel_duel_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./duel/duel.module */ "./src/app/duel/duel.module.ts");













const routes = [
    {
        path: '',
        component: _shared_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__["MenuComponent"]
    },
    {
        path: 'x01',
        loadChildren: () => _x01_x01_module__WEBPACK_IMPORTED_MODULE_1__["X01Module"]
    },
    {
        path: 'cricket',
        loadChildren: () => _cricket_cricket_module__WEBPACK_IMPORTED_MODULE_2__["CricketModule"]
    },
    {
        path: 'around-clock',
        loadChildren: () => _aroundclock_around_clock_module__WEBPACK_IMPORTED_MODULE_3__["AroundClockModule"]
    },
    {
        path: 'shanghai',
        loadChildren: () => _shanghai_shanghai_module__WEBPACK_IMPORTED_MODULE_4__["ShanghaiModule"]
    },
    {
        path: 'fives',
        loadChildren: () => _fives_fives_module__WEBPACK_IMPORTED_MODULE_6__["FivesModule"]
    },
    {
        path: 'hare-and-hound',
        loadChildren: () => _hare_and_hound_hare_and_hound_module__WEBPACK_IMPORTED_MODULE_7__["HareAndHoundModule"]
    },
    {
        path: 'knockout',
        loadChildren: () => _knockout_knockout_module__WEBPACK_IMPORTED_MODULE_8__["KnockoutModule"]
    },
    {
        path: 'killer',
        loadChildren: () => _killer_killer_module__WEBPACK_IMPORTED_MODULE_5__["KillerModule"]
    },
    {
        path: 'capture-the-flag',
        loadChildren: () => _capture_the_flag_capture_the_flag_module__WEBPACK_IMPORTED_MODULE_9__["CaptureTheFlagModule"]
    },
    {
        path: 'duel',
        loadChildren: () => _duel_duel_module__WEBPACK_IMPORTED_MODULE_12__["DuelModule"]
    },
    {
        path: 'imitator',
        loadChildren: () => _imitator_imitator_module__WEBPACK_IMPORTED_MODULE_10__["ImitatorModule"]
    },
    {
        path: 'scam',
        loadChildren: () => _scam_scam_module__WEBPACK_IMPORTED_MODULE_11__["ScamModule"]
    },
    {
        path: '**', redirectTo: ''
    }
];


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route-animation */ "./src/app/route-animation.ts");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~services/sound.service */ "./src/app/shared/services/sound.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const _c0 = ["audioElement"];
function AppComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(applicationStateService, soundService) {
        this.applicationStateService = applicationStateService;
        this.soundService = soundService;
        document.addEventListener('touchmove', (event) => {
            if (event.scale !== 1) {
                event.preventDefault();
            }
        }, { passive: false });
    }
    ngAfterViewInit() {
        this.soundService.audioElement = this.audioElementRef.nativeElement;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_3__["SoundService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.audioElementRef = _t.first);
    } }, decls: 13, vars: 5, consts: [["audioElement", ""], ["outlet", "outlet"], [1, "theme-chooser"], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-icon-button", "", 3, "color", "click"], ["class", "xmas-background", 4, "ngIf"], [1, "xmas-background"], ["src", "data:image/jpeg;base64,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", "alt", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "audio", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() { return ctx.applicationStateService.toggleColorTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "invert_colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_9_listener() { return ctx.applicationStateService.toggleDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "track_changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_12_Template, 2, 0, "div", 5);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("xmas", ctx.applicationStateService.settings.theme === 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", _r1 && _r1.isActivated && _r1.activatedRoute);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.applicationStateService.settings.details ? "accent" : "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.applicationStateService.settings.theme === 100);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".theme-chooser[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n}\n\n.xmas-background[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1000;\n}\n\n.xmas-background[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXERldmVsb3BtZW50XFxkYXJ0cy1zY29yZWJvYXJkLW5nL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRjs7QURDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhlbWUtY2hvb3NlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4ueG1hcy1iYWNrZ3JvdW5kIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMTAwMDtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCIudGhlbWUtY2hvb3NlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4ueG1hcy1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IC0xMDAwO1xufVxuLnhtYXMtYmFja2dyb3VuZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"], data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: 'app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]]
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationStateService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_3__["SoundService"] }]; }, { audioElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['audioElement']
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing */ "./src/app/app-routing.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_6__["routes"]), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_6__["routes"]), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/aroundclock/around-clock.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/aroundclock/around-clock.component.ts ***!
  \*******************************************************/
/*! exports provided: AroundClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroundClockComponent", function() { return AroundClockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~models/playground.model */ "./src/app/shared/models/playground.model.ts");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-animation */ "./src/app/route-animation.ts");
/* harmony import */ var _models_around_clock_state_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/around-clock.state.model */ "./src/app/aroundclock/models/around-clock.state.model.ts");
/* harmony import */ var _models_around_clock_settings_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/around-clock.settings.model */ "./src/app/aroundclock/models/around-clock.settings.model.ts");
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/bot.service */ "./src/app/shared/services/bot.service.ts");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~services/sound.service */ "./src/app/shared/services/sound.service.ts");
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~services/statistics.service */ "./src/app/shared/services/statistics.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");























function AroundClockComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r126.settings.toggleJump(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Enable Jump ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r128.settings.togglePunishment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Punishment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r129.settings.toggleSaboteur(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Saboteur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r130.settings.togglePromoter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Promoter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r131.settings.toggleTreeLives(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Tree Lives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r132.settings.toggleFiveLives(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Five Lives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r133.settings.toggleSevenLives(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Seven Lives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r134.settings.toggleTenLives(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Ten Lives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r135.settings.toggleFirstDeath(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " First Death ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r136.settings.togglePalFirst(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Pal First ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r137.settings.setFavorite(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Field's order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r138.settings.setStyle(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Ascending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r139.settings.setStyle(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Descending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r140.settings.setStyle(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Clockwise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r141.settings.setStyle(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Anticlockwise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r142.settings.setStyle(8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " TripleClock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r143.settings.setStyle(9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " ZoneClock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r144.settings.setStyle(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Random ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r145.settings.setStyle(6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Random11 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r146.settings.setStyle(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Recurrence ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r147.settings.setStyle(7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Pirate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Around The Clock")("playground", ctx_r121.playground)("rules", "The object of this popular game is to be the first player to hit every number on the board " + "from 1-20. The numbers must be hit in order, and players alternate after three throws. The player " + "must hit each number in turn and cannot proceed until to the next number until the number is hit. " + "The winner is the player who hist all the numbers in order first.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r121.settings.jump ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r121.settings.punishment ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r121.settings.saboteur ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r121.settings.promoter ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r121.settings.life === 3 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r121.settings.life === 5 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r121.settings.life === 7 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r121.settings.life === 10 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r121.settings.firstDeath ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r121.settings.palFirst ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r121.settings.style == 0 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r121.settings.style == 4 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r121.settings.style == 1 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r121.settings.style == 2 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r121.settings.style == 8 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r121.settings.style == 9 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r121.settings.style == 3 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r121.settings.style == 6 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r121.settings.style == 5 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r121.settings.style == 7 ? "primary" : "");
} }
function AroundClockComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 8);
} if (rf & 2) {
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r122.playground);
} }
function AroundClockComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r149 = ctx.$implicit;
    const i_r150 = ctx.index;
    const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player\n        ", i_r150 === ctx_r148.game.actualPlayerIndex ? "highlighted" : "", "\n        ", ctx_r148.settings.life !== 0 && player_r149.isInactive() ? "inactive" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r149)("scoreDisplayed", false)("lifeDisplayed", ctx_r148.settings.life !== 0)("hasContent", false);
} }
function AroundClockComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_div_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r152); const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r151.toggleHiddenInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AroundClockComponent_div_4_div_3_Template, 2, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r123.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", ctx_r123.hiddenInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r123.getDistanceFromRandom());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r123.game.players);
} }
function AroundClockComponent_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 8);
} if (rf & 2) {
    const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r124.playground);
} }
function AroundClockComponent_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 8);
} if (rf & 2) {
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r125.playground);
} }
class AroundClockComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super(application, game, route, dialogService, soundService, botService, statisticsService, 'around-clock', 2);
        this.hiddenInfo = true;
        this.settings = new _models_around_clock_settings_model__WEBPACK_IMPORTED_MODULE_4__["AroundClockSettings"]();
    }
    calculatePoints(player, fieldIndex, score, scoreReal) {
        const state = this.getPlayerState(player);
        const originalMulti = this.multiplier;
        const targetedField = this.getFieldIndex(state.actFieldIndex) === fieldIndex;
        const hasChanges = this.handlePromoterSaboteur(player, scoreReal, originalMulti, targetedField);
        if (hasChanges && score != 0) {
            player.throwsHistory[player.throwsHistory.length - 1].score = 0;
        }
        if (!hasChanges && targetedField) {
            // last throw
            if (state.actFieldIndex >= this.settings.fields.length - this.multiplier) {
                this.multiplier = this.multiplier === 1 ? 1 : this.settings.fields.length - (state.actFieldIndex + 1);
            }
            state.increaseActFieldIndex(this.settings.jump ? this.multiplier : 1);
            if (state.actFieldIndex >= this.settings.fields.length) {
                state.actFieldIndex = this.settings.fields.length;
            }
        }
        player.score++;
    }
    checkPlayerState(player) {
        const state = this.getPlayerState(player);
        if ((this.settings.fields.length - 1) < state.actFieldIndex) {
            player.setWin();
        }
        else if (this.game.isTheLastThrow()) {
            if (this.settings.punishment || this.settings.life !== 0) {
                let multi = 0;
                for (let i = 0; i < 3; i++) {
                    const t = player.throwsHistory[player.throwsHistory.length - i - 1];
                    multi += t.score;
                }
                if (multi === 0) {
                    if (this.settings.punishment) {
                        state.decreaseActFieldIndex();
                    }
                    if (this.settings.life !== 0) {
                        this.soundService.no();
                        player.life--;
                    }
                }
            }
            this.game.nextPlayer();
        }
        if (this.settings.firstDeath) {
            const activePlayers = this.game.players.filter(p => !p.isInactive());
            if (activePlayers.length < this.game.players.length) {
                this.getTheBestPlayers().forEach(p => p.setWin(true));
            }
        }
        if (this.settings.life !== 0 && this.game.players.length > 1) {
            const activePlayers = this.game.players.filter(p => !p.isInactive());
            if (activePlayers.length === 1) {
                activePlayers[0].setWin(true);
            }
            else if (!!activePlayers.length) {
                while (this.game.getActualPlayer().isInactive()) {
                    this.game.nextPlayer();
                }
            }
        }
    }
    botThrow() {
        const state = this.getPlayerState(this.game.getActualPlayer());
        const target = this.getFieldIndex(state.actFieldIndex);
        const index = this.botService.calculateTarget(target);
        if (target === index && this.botService.isDoublePoint()) {
            this.doublePoint();
        }
        else if (target === index && this.botService.isTriplePoint()) {
            this.triplePoint();
        }
        setTimeout(() => {
            this.throwNumber([this.isFieldEnabled(index) ? _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(index) : 0,
                _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(index)]);
        }, _services_bot_service__WEBPACK_IMPORTED_MODULE_5__["PLAYER_DELAY"]);
    }
    getDistanceFromRandom() {
        if (this.settings.style === 3) {
            const bullPos = this.settings.fields.findIndex(f => f === 20);
            const playerPos = this.getPlayerState(this.game.getActualPlayer()).actFieldIndex;
            const diff = bullPos - playerPos;
            return diff >= 0 ? diff + '' : '';
        }
        return '';
    }
    toggleHiddenInfo() {
        this.hiddenInfo = !this.hiddenInfo;
    }
    isFieldEnabled(fieldIndex) {
        return this.game.players.some(p => this.getFieldIndex(this.getPlayerState(p).actFieldIndex) === fieldIndex);
    }
    isPrimaryField(fieldIndex) {
        return fieldIndex === this.getFieldIndex(this.getPlayerState(this.game.getActualPlayer()).actFieldIndex);
    }
    isSecondaryField(fieldIndex) {
        if (!this.isPrimaryField(fieldIndex)) {
            return this.game.players.filter(p => p !== this.game.getActualPlayer())
                .some(p => fieldIndex === this.getFieldIndex(this.getPlayerState(p).actFieldIndex));
        }
        return false;
    }
    getFieldNote(fieldIndex) {
        const owners = this.game.players
            .filter(p => this.getFieldIndex(this.getPlayerState(p).actFieldIndex) === fieldIndex).map(p => p.name.substr(0, 1));
        return !!owners.length ? owners.join(',') : '';
    }
    getFieldNoteBottom(fieldIndex) {
        const owners = this.game.players
            .filter(p => this.getFieldIndex(this.getPlayerState(p).actFieldIndex) === fieldIndex);
        const actualOwn = owners.some(p => p.name === this.game.getActualPlayer().name);
        if (actualOwn) {
            const length = this.settings.fields.length - 1 - this.getPlayerState(this.game.getActualPlayer()).actFieldIndex;
            return length + '';
        }
        return !actualOwn && !!owners.length && (this.settings.promoter || this.settings.saboteur) ? (this.settings.promoter ? '▲' : '▼') : '';
    }
    customReset() {
        this.game.players.forEach(player => {
            player.life = this.settings.life;
            player.state = new _models_around_clock_state_model__WEBPACK_IMPORTED_MODULE_3__["AroundClockState"]();
        });
        this.settings.setStyle();
    }
    decoratePlayerStat(player) {
        return player.name;
    }
    getTheBestPlayers() {
        const activePlayers = this.game.players.filter(p => !p.isInactive());
        let max = 0;
        activePlayers.forEach(p => {
            const index = this.getPlayerState(p).actFieldIndex;
            max = index > max ? index : max;
        });
        return activePlayers.filter(p => this.getPlayerState(p).actFieldIndex === max);
    }
    getFieldIndex(index) {
        return this.settings.fields[index];
    }
    handlePromoterSaboteur(player, scoreReal, originalMulti, targetedField) {
        let hasChanges = false;
        if ((this.settings.saboteur || this.settings.promoter) && scoreReal !== 0) {
            const realFieldIndex = scoreReal === 25 ? 20 : scoreReal - 1;
            this.game.players.filter(p => p.id !== player.id).forEach(otherPlayer => {
                const otherPlayerState = this.getPlayerState(otherPlayer);
                if (this.getFieldIndex(otherPlayerState.actFieldIndex) === realFieldIndex && (!targetedField || (this.settings.palFirst && otherPlayerState.actFieldIndex != 0))) {
                    if (this.settings.saboteur) {
                        otherPlayerState.decreaseActFieldIndex(this.settings.jump ? originalMulti : 1);
                    }
                    else {
                        otherPlayerState.increaseActFieldIndex(this.settings.jump ? originalMulti : 1);
                        if (otherPlayerState.actFieldIndex >= this.settings.fields.length) {
                            otherPlayerState.actFieldIndex = this.settings.fields.length - 1;
                        }
                    }
                    hasChanges = true;
                }
            });
        }
        return hasChanges;
    }
}
AroundClockComponent.ɵfac = function AroundClockComponent_Factory(t) { return new (t || AroundClockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_10__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_5__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"])); };
AroundClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AroundClockComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "click"], [3, "playground"], [1, "player_container"], [1, "hidden-info", 3, "click"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "scoreDisplayed", "lifeDisplayed", "hasContent"]], template: function AroundClockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AroundClockComponent_app_settings_1_Template, 51, 23, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AroundClockComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AroundClockComponent_div_4_Template, 4, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AroundClockComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AroundClockComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_17__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_18__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_19__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_20__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AroundClockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './around-clock.component.html',
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationStateService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_10__["SoundService"] }, { type: _services_bot_service__WEBPACK_IMPORTED_MODULE_5__["BotService"] }, { type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/aroundclock/around-clock.module.ts":
/*!****************************************************!*\
  !*** ./src/app/aroundclock/around-clock.module.ts ***!
  \****************************************************/
/*! exports provided: AroundClockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroundClockModule", function() { return AroundClockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _around_clock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./around-clock.component */ "./src/app/aroundclock/around-clock.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






class AroundClockModule {
}
AroundClockModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AroundClockModule });
AroundClockModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AroundClockModule_Factory(t) { return new (t || AroundClockModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: '', component: _around_clock_component__WEBPACK_IMPORTED_MODULE_2__["AroundClockComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AroundClockModule, { declarations: [_around_clock_component__WEBPACK_IMPORTED_MODULE_2__["AroundClockComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AroundClockModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: '', component: _around_clock_component__WEBPACK_IMPORTED_MODULE_2__["AroundClockComponent"] }
                    ])
                ],
                declarations: [_around_clock_component__WEBPACK_IMPORTED_MODULE_2__["AroundClockComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/aroundclock/models/around-clock.settings.model.ts":
/*!*******************************************************************!*\
  !*** ./src/app/aroundclock/models/around-clock.settings.model.ts ***!
  \*******************************************************************/
/*! exports provided: AroundClockSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroundClockSettings", function() { return AroundClockSettings; });
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground.model */ "./src/app/shared/models/playground.model.ts");

class AroundClockSettings {
    constructor() {
        this.style = 0;
        this.jump = true;
        this.firstDeath = true;
        this.punishment = true;
        this.life = 0;
        this.promoter = false;
        this.saboteur = true;
        this.palFirst = false;
        this.fields = AroundClockSettings.getBaseFields();
    }
    setStyle(style) {
        if (!!style || style === 0) {
            this.style = style;
        }
        switch (this.style) {
            case 1:
                this.fields = AroundClockSettings.getClockFields();
                break;
            case 2:
                this.fields = AroundClockSettings.getAnticlockFields();
                break;
            case 3:
                this.fields = AroundClockSettings.getRandom();
                break;
            case 4:
                this.fields = [...AroundClockSettings.getBaseFields().reverse().slice(1), 20];
                break;
            case 5:
                this.fields = AroundClockSettings.getRecurrence();
                break;
            case 6:
                this.fields = AroundClockSettings.getRandom(11);
                break;
            case 7:
                this.fields = AroundClockSettings.getPirate();
                break;
            case 8:
                this.fields = AroundClockSettings.getTripleClockFields();
                break;
            case 9:
                this.fields = AroundClockSettings.getZoneClockFields();
                break;
            default:
                this.fields = AroundClockSettings.getBaseFields();
        }
    }
    toggleFirstDeath() {
        this.firstDeath = !this.firstDeath;
    }
    togglePalFirst() {
        this.palFirst = !this.palFirst;
    }
    toggleJump() {
        this.jump = !this.jump;
    }
    togglePunishment() {
        this.punishment = !this.punishment;
    }
    toggleTreeLives() {
        this.life = this.life === 3 ? 0 : 3;
    }
    toggleFiveLives() {
        this.life = this.life === 5 ? 0 : 5;
    }
    toggleSevenLives() {
        this.life = this.life === 7 ? 0 : 7;
    }
    toggleTenLives() {
        this.life = this.life === 10 ? 0 : 10;
    }
    toggleSaboteur() {
        this.saboteur = !this.saboteur;
        if (this.saboteur) {
            this.promoter = false;
        }
    }
    togglePromoter() {
        this.promoter = !this.promoter;
        if (this.promoter) {
            this.saboteur = false;
        }
    }
    setFavorite() {
        this.style = 9;
        this.jump = true;
        this.firstDeath = true;
        this.punishment = true;
        this.life = 10;
        this.promoter = false;
        this.saboteur = true;
        this.palFirst = true;
        this.fields = AroundClockSettings.getZoneClockFields();
    }
    static getBaseFields() {
        return [...Array(_models_playground_model__WEBPACK_IMPORTED_MODULE_0__["FIELDS_COUNT"]).keys()];
    }
    static getClockFields() {
        return [0, 17, 3, 12, 5, 9, 14, 1, 16, 2, 18, 6, 15, 7, 10, 13, 8, 11, 4, 19, 20];
    }
    static getAnticlockFields() {
        return [4, 11, 8, 13, 10, 7, 15, 6, 18, 2, 16, 1, 14, 9, 5, 12, 3, 17, 0, 19, 20];
    }
    static getTripleClockFields() {
        return [0, 12, 14, 2, 15, 13, 4, 17, 5, 1, 18, 7, 8, 19, 3, 9, 16, 6, 10, 11, 20];
    }
    static getZoneClockFields() {
        return [0, 12, 17, 9, 3, 1, 5, 2, 14, 15, 16, 7, 18, 10, 6, 20, 13, 19, 8, 4, 11];
    }
    static getRandom(size) {
        let fields = AroundClockSettings.getBaseFields();
        if (!size) {
            size = fields.length;
        }
        const randomFields = [];
        for (let i = (size - 1); i >= 0; i--) {
            const random = Math.floor(Math.random() * fields.length);
            randomFields.push(fields[random]);
            fields = [...fields.slice(0, random), ...fields.slice(random + 1)];
        }
        return randomFields;
    }
    static getPirate() {
        let fields = AroundClockSettings.getRandom();
        for (let i = 0; i < 4; i++) {
            const random = Math.floor(Math.random() * fields.length);
            if (fields[random] === 20) {
                i--;
            }
            else {
                fields[random] = 20;
            }
        }
        return fields;
    }
    static getRecurrence() {
        let fields = AroundClockSettings.getBaseFields();
        const randomFields = [];
        for (let i = (fields.length - 1); i >= 0; i--) {
            const random = Math.floor(Math.random() * fields.length);
            randomFields.push(fields[random]);
        }
        return randomFields;
    }
}


/***/ }),

/***/ "./src/app/aroundclock/models/around-clock.state.model.ts":
/*!****************************************************************!*\
  !*** ./src/app/aroundclock/models/around-clock.state.model.ts ***!
  \****************************************************************/
/*! exports provided: AroundClockState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AroundClockState", function() { return AroundClockState; });
/* harmony import */ var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground-state.model */ "./src/app/shared/models/playground-state.model.ts");

class AroundClockState extends _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__["PlaygroundState"] {
    constructor() {
        super();
        this.actFieldIndex = 0;
    }
    increaseActFieldIndex(value) {
        this.actFieldIndex += value ? value : 1;
    }
    decreaseActFieldIndex(value = 1) {
        this.actFieldIndex -= value;
        if (this.actFieldIndex < 0) {
            this.actFieldIndex = 0;
        }
    }
    clone() {
        const state = new AroundClockState();
        state.actFieldIndex = this.actFieldIndex;
        return state;
    }
}


/***/ }),

/***/ "./src/app/capture-the-flag/capture-the-flag.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/capture-the-flag/capture-the-flag.component.ts ***!
  \****************************************************************/
/*! exports provided: CaptureTheFlagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptureTheFlagComponent", function() { return CaptureTheFlagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~models/playground.model */ "./src/app/shared/models/playground.model.ts");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-animation */ "./src/app/route-animation.ts");
/* harmony import */ var _models_capture_the_flag_state_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/capture-the-flag.state.model */ "./src/app/capture-the-flag/models/capture-the-flag.state.model.ts");
/* harmony import */ var _models_capture_the_flag_settings_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/capture-the-flag.settings.model */ "./src/app/capture-the-flag/models/capture-the-flag.settings.model.ts");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/sound.service */ "./src/app/shared/services/sound.service.ts");
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~services/bot.service */ "./src/app/shared/services/bot.service.ts");
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~services/statistics.service */ "./src/app/shared/services/statistics.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");




















function CaptureTheFlagComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureTheFlagComponent_app_settings_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r236); const ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r235.settings.randomCity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "City (5) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureTheFlagComponent_app_settings_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r236); const ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r237.settings.randomCountry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Country (10) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureTheFlagComponent_app_settings_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r236); const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r238.settings.randomContinent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Continent (20) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureTheFlagComponent_app_settings_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r236); const ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r239.settings.toggleNoScore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Capture the Flag")("playground", ctx_r230.playground)("rules", "N\u00F6vekv\u0151 sorrendben j\u00F6nnek a mez\u0151k, a j\u00E1t\u00E9kosoknak el kell foglalni \u0151ket. Ez t\u00F6rt\u00E9nhet \u00FAgy," + " hogy h\u00E1romszor eltal\u00E1lja a j\u00E1t\u00E9kos vagy dob egyetlen dupla bullt. Ha a j\u00E1t\u00E9kos elfoglalta a mez\u0151t, " + "akkor No score eset\u00E9n 1 pontot kap, egy\u00E9bk\u00E9nt megkapja a mez\u0151 \u00E9rt\u00E9k\u00E9t \u00E9s megny\u00EDlik a k\u00F6vetkez\u0151 mez\u0151." + "A j\u00E1t\u00E9k a bull mez\u0151 elfoglal\u00E1s\u00E1ig tart. A v\u00E9g\u00E9n az nyer, akinek a legt\u00F6bb pontja van. D\u00F6ntetlen " + "lehets\u00E9ges.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r230.settings.style === 0 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r230.settings.style === 1 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r230.settings.style === 2 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r230.settings.noScore ? "primary" : "");
} }
function CaptureTheFlagComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 7);
} if (rf & 2) {
    const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r231.playground);
} }
function CaptureTheFlagComponent_div_4_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r244 = ctx.$implicit;
    const player_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("field ", ctx_r243.isActiveField(field_r244) ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r244 === 20 ? "B" : field_r244 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r243.getFieldValue(player_r241, field_r244));
} }
function CaptureTheFlagComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CaptureTheFlagComponent_div_4_div_1_div_3_Template, 4, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r241 = ctx.$implicit;
    const i_r242 = ctx.index;
    const ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r242 === ctx_r240.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r241);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r240.settings.fields);
} }
function CaptureTheFlagComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CaptureTheFlagComponent_div_4_div_1_Template, 4, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r232.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r232.game.players);
} }
function CaptureTheFlagComponent_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 7);
} if (rf & 2) {
    const ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r233.playground);
} }
function CaptureTheFlagComponent_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 7);
} if (rf & 2) {
    const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r234.playground);
} }
class CaptureTheFlagComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super(application, game, route, dialogService, soundService, botService, statisticsService, 'ctf');
        this.settings = new _models_capture_the_flag_settings_model__WEBPACK_IMPORTED_MODULE_4__["CaptureTheFlagSettings"]();
    }
    calculatePoints(player, fieldIndex, score) {
        const state = this.getPlayerState(player);
        if (this.isActiveField(fieldIndex)) {
            state.increaseFieldCount(fieldIndex, this.multiplier);
            if (state.getFieldCount(fieldIndex) >= 3) {
                player.score += this.settings.noScore ? 1 : score;
                this.checkWinner(player);
                this.game.actualFieldIndex++;
            }
        }
        else if (fieldIndex === 20) {
            state.increaseFieldCount(this.settings.fields[this.game.actualFieldIndex], 3);
            player.score += this.settings.noScore ? 1 : this.settings.fields[this.game.actualFieldIndex] + 1;
            this.checkWinner(player);
            this.game.actualFieldIndex++;
        }
    }
    checkPlayerState(player) {
        if (this.game.actualFieldIndex === this.settings.fields.length) {
            this.game.players.forEach(p => p.setWin(this.game.isTheBestPlayer(p)));
        }
        else if (this.game.isTheLastThrow()) {
            this.game.nextPlayer();
        }
    }
    getFieldValue(player, fieldIndex) {
        const fieldCount = this.getPlayerState(player).getFieldCount(fieldIndex);
        if (fieldCount === 0) {
            return '○○○';
        }
        else {
            let str = '';
            for (let i = 0; i < Math.min(fieldCount, 3); i++) {
                str += '●';
            }
            for (let i = fieldCount; i < 3; i++) {
                str += '○';
            }
            return str;
        }
    }
    customReset() {
        this.game.actualFieldIndex = 0;
        this.game.players.forEach(player => player.state = new _models_capture_the_flag_state_model__WEBPACK_IMPORTED_MODULE_3__["CaptureTheFlagState"]());
        if (this.settings.style === 0) {
            this.settings.randomCity();
        }
        else if (this.settings.style === 1) {
            this.settings.randomCountry();
        }
        else {
            this.settings.randomContinent();
        }
    }
    customSettingsValidation() {
        return this.settings.fields.length > 0;
    }
    isActiveField(fieldIndex) {
        return this.settings.fields[this.game.actualFieldIndex] === fieldIndex;
    }
    isFieldEnabled(fieldIndex) {
        return fieldIndex === 20 || this.settings.fields.indexOf(fieldIndex) === this.game.actualFieldIndex;
    }
    isPrimaryField(fieldIndex) {
        return this.isFieldEnabled(fieldIndex);
    }
    getFieldNote(fieldIndex) {
        const player = this.game.players.find(player => this.getPlayerState(player).getFieldCount(fieldIndex) >= 3);
        return player ? player.name : '';
    }
    getTheFinalResult() {
        let winners = this.game.players.filter(p => p.win);
        if (!winners.length) {
            return [];
        }
        let max = winners[0].score;
        winners.forEach(p => {
            max = p.score > max ? p.score : max;
        });
        winners = winners.filter(p => p.score === max).map(p => p.clone());
        const losers = this.game.players.filter(p => !winners.some(w => w.id === p.id)).map(p => {
            const c = p.clone();
            c.win = false;
            return c;
        });
        return [...winners, ...losers];
    }
    getGameConfig() {
        return this.settings.fields.length + '';
    }
    checkWinner(player) {
        let total = this.settings.fields.length;
        const sum = player.score;
        if (!this.settings.noScore) {
            total = this.settings.fields.reduce((a, b) => a + b, 0);
        }
        if (sum > Math.floor(total / 2)) {
            player.setWin(true);
        }
    }
}
CaptureTheFlagComponent.ɵfac = function CaptureTheFlagComponent_Factory(t) { return new (t || CaptureTheFlagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"])); };
CaptureTheFlagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaptureTheFlagComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], [3, "playground"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player"], [1, "field-set"], [1, "small"]], template: function CaptureTheFlagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CaptureTheFlagComponent_app_settings_1_Template, 9, 7, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CaptureTheFlagComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CaptureTheFlagComponent_div_4_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CaptureTheFlagComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CaptureTheFlagComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaptureTheFlagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './capture-the-flag.component.html',
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"] }, { type: _services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"] }, { type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/capture-the-flag/capture-the-flag.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/capture-the-flag/capture-the-flag.module.ts ***!
  \*************************************************************/
/*! exports provided: CaptureTheFlagModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptureTheFlagModule", function() { return CaptureTheFlagModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _capture_the_flag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./capture-the-flag.component */ "./src/app/capture-the-flag/capture-the-flag.component.ts");






class CaptureTheFlagModule {
}
CaptureTheFlagModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CaptureTheFlagModule });
CaptureTheFlagModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CaptureTheFlagModule_Factory(t) { return new (t || CaptureTheFlagModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: '', component: _capture_the_flag_component__WEBPACK_IMPORTED_MODULE_3__["CaptureTheFlagComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CaptureTheFlagModule, { declarations: [_capture_the_flag_component__WEBPACK_IMPORTED_MODULE_3__["CaptureTheFlagComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaptureTheFlagModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: '', component: _capture_the_flag_component__WEBPACK_IMPORTED_MODULE_3__["CaptureTheFlagComponent"] }
                    ])
                ],
                declarations: [_capture_the_flag_component__WEBPACK_IMPORTED_MODULE_3__["CaptureTheFlagComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/capture-the-flag/models/capture-the-flag.settings.model.ts":
/*!****************************************************************************!*\
  !*** ./src/app/capture-the-flag/models/capture-the-flag.settings.model.ts ***!
  \****************************************************************************/
/*! exports provided: CaptureTheFlagSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptureTheFlagSettings", function() { return CaptureTheFlagSettings; });
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground.model */ "./src/app/shared/models/playground.model.ts");

class CaptureTheFlagSettings {
    constructor() {
        this.noScore = false;
        this.fields = [];
        this.noScore = false;
        this.randomCountry();
    }
    randomCity() {
        this.style = 0;
        this.fields = CaptureTheFlagSettings.getRandom(5);
        this.fields[this.fields.length] = 20;
    }
    randomCountry() {
        this.style = 1;
        this.fields = CaptureTheFlagSettings.getRandom(10);
        this.fields[this.fields.length] = 20;
    }
    randomContinent() {
        this.style = 2;
        this.fields = CaptureTheFlagSettings.getRandom(20);
        this.fields[this.fields.length] = 20;
    }
    toggleNoScore() {
        this.noScore = !this.noScore;
    }
    static getBaseFields() {
        return [...Array(_models_playground_model__WEBPACK_IMPORTED_MODULE_0__["FIELDS_COUNT"]).keys()];
    }
    static getRandom(size) {
        let fields = CaptureTheFlagSettings.getBaseFields();
        if (!size) {
            size = fields.length;
        }
        const randomFields = [];
        for (let i = (size - 1); i >= 0; i--) {
            const random = Math.floor(Math.random() * fields.length);
            if (fields[random] === 20) {
                i++;
            }
            else {
                randomFields.push(fields[random]);
                fields = [...fields.slice(0, random), ...fields.slice(random + 1)];
            }
        }
        return randomFields.sort((a, b) => Number(a) - Number(b));
    }
}


/***/ }),

/***/ "./src/app/capture-the-flag/models/capture-the-flag.state.model.ts":
/*!*************************************************************************!*\
  !*** ./src/app/capture-the-flag/models/capture-the-flag.state.model.ts ***!
  \*************************************************************************/
/*! exports provided: CaptureTheFlagState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptureTheFlagState", function() { return CaptureTheFlagState; });
/* harmony import */ var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground-state.model */ "./src/app/shared/models/playground-state.model.ts");

class CaptureTheFlagState extends _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__["PlaygroundState"] {
    constructor() {
        super();
        this.fieldCount = [];
        this.actFieldIndex = 0;
    }
    getFieldCount(field) {
        return this.getFieldValue(this.fieldCount, field).value;
    }
    increaseFieldCount(field, value) {
        this.getFieldValue(this.fieldCount, field).value += value;
    }
    getActFieldIndex() {
        return this.actFieldIndex;
    }
    increaseActFieldIndex() {
        this.actFieldIndex++;
    }
    clone() {
        const state = new CaptureTheFlagState();
        state.actFieldIndex = this.actFieldIndex;
        this.fieldCount.forEach(fv => state.fieldCount.push(fv.clone()));
        return state;
    }
}


/***/ }),

/***/ "./src/app/cricket/cricket.component.ts":
/*!**********************************************!*\
  !*** ./src/app/cricket/cricket.component.ts ***!
  \**********************************************/
/*! exports provided: CricketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CricketComponent", function() { return CricketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~models/playground.model */ "./src/app/shared/models/playground.model.ts");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-animation */ "./src/app/route-animation.ts");
/* harmony import */ var _models_cricet_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/cricet.settings.model */ "./src/app/cricket/models/cricet.settings.model.ts");
/* harmony import */ var _models_cricet_state_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/cricet.state.model */ "./src/app/cricket/models/cricet.state.model.ts");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/sound.service */ "./src/app/shared/services/sound.service.ts");
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~services/bot.service */ "./src/app/shared/services/bot.service.ts");
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~services/statistics.service */ "./src/app/shared/services/statistics.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");





















function CricketComponent_app_settings_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const i_r89 = ctx.index; const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r90.settings.setNumber(i_r89); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const numb_r88 = ctx.$implicit;
    const i_r89 = ctx.index;
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r87.settings.isFieldAllowed(i_r89) ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r88 === 21 ? "B" : numb_r88, " ");
} }
function CricketComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CricketComponent_app_settings_1_button_3_Template, 2, 2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.settings.upper(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Upper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.settings.lower(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lower");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r95.settings.left(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r96.settings.right(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.settings.odd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Odd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.settings.even(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Even");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r99.settings.prime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r100.settings.notPrime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Not prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r101.settings.randomize(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Random 05");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r102.settings.randomize(10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Random 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r103.settings.randomize(15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Random 15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r104.settings.small(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r105.settings.high(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r106.settings.star(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r107.settings.cross(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cross");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r108.settings.all(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r109.settings.setStyle(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Classic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r110.settings.setStyle(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cut-Throat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.settings.setStyle(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "No Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r112.settings.setStyle(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Black Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Ultimate Cricket")("playground", ctx_r82.playground)("rules", "The objective shall be to 'own' or 'close' certain numbers on the board, and to achieve " + "the highest point score. The player or team to do so first, shall be the winner.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r82.settings.getNumbers());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r82.settings.style == 1 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r82.settings.style == 2 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r82.settings.style == 3 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r82.settings.style == 4 ? "primary" : "");
} }
function CricketComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 10);
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r83.playground);
} }
function CricketComponent_div_4_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r117 = ctx.$implicit;
    const player_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("field ", ctx_r116.isActiveField(player_r114, field_r117) && ctx_r116.settings.isBlackOutGame() ? "active" : "", " ", !ctx_r116.isFieldDoneForPlayer(player_r114, field_r117) ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r117 === 20 ? "B" : field_r117 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r116.getFieldValue(player_r114, field_r117));
} }
function CricketComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_div_4_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120); const player_r114 = ctx.$implicit; const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r119.changePlayerToDisplay(player_r114); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CricketComponent_div_4_div_1_div_3_Template, 4, 6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r114 = ctx.$implicit;
    const i_r115 = ctx.index;
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r115 === ctx_r113.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r113.settings.fields);
} }
function CricketComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CricketComponent_div_4_div_1_Template, 4, 5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r84.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r84.game.players);
} }
function CricketComponent_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 10);
} if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r85.playground);
} }
function CricketComponent_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 10);
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r86.playground);
} }
class CricketComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super(application, game, route, dialogService, soundService, botService, statisticsService, 'cricket');
        this.settings = new _models_cricet_settings_model__WEBPACK_IMPORTED_MODULE_3__["CricketSettings"]();
    }
    calculatePoints(player, fieldIndex, score) {
        if (this.settings.fields.indexOf(fieldIndex) !== -1 && !this.isFieldClosed(fieldIndex)) {
            const playerFieldCount = this.getPlayerState(player).getFieldCount(fieldIndex);
            if (!this.settings.isBlackOutGame() ||
                this.settings.fields[this.getPlayerState(player).getActFieldIndex()] === fieldIndex ||
                this.isFieldDoneForPlayer(player, fieldIndex)) {
                if (this.isFieldClosedForOthers(player, fieldIndex) && (playerFieldCount + this.multiplier) > 3) {
                    this.getPlayerState(player).setFieldCount(fieldIndex, 3);
                }
                else {
                    let multiplier = this.multiplier;
                    if (playerFieldCount < 3 && (playerFieldCount + this.multiplier) >= 3) {
                        multiplier = (playerFieldCount + this.multiplier) % 3;
                    }
                    this.getPlayerState(player).setFieldCount(fieldIndex, playerFieldCount + this.multiplier);
                    this.multiplier = multiplier;
                }
            }
            if (this.isFieldDoneForPlayer(player, fieldIndex)) {
                if (this.settings.isBlackOutGame()) {
                    if (this.settings.fields[this.getPlayerState(player).getActFieldIndex()] === fieldIndex) {
                        this.getPlayerState(player).increaseActFieldIndex();
                    }
                }
                this.punishPlayers(fieldIndex);
            }
        }
    }
    checkPlayerState(player) {
        this.game.players.forEach(p => p.score = this.getPlayerTotal(p));
        const punishStyle = this.settings.isPunishGame() || this.settings.isBlackOutGame();
        this.game.players.forEach(p => p.setWin(this.isPlayerDone(p) &&
            ((!punishStyle && this.game.isTheBestPlayer(p)) || (punishStyle && this.game.isTheWorstPlayer(p)))));
        if (this.game.isTheLastThrow()) {
            this.game.nextPlayer();
        }
    }
    getFieldValue(player, fieldIndex) {
        const score = this.getPunishScore(player, fieldIndex);
        const punishStyle = this.settings.isPunishGame() || this.settings.isBlackOutGame();
        const playerFieldCount = this.getPlayerState(player).getFieldCount(fieldIndex);
        let str = '';
        if (punishStyle && score !== 0) {
            str += score;
        }
        if (playerFieldCount === 0 && str.length === 0) {
            return '○';
        }
        else if (playerFieldCount > 3 && !punishStyle && !this.settings.isNoScoreGame()) {
            return this.getFieldScore(player, fieldIndex) + '';
        }
        else if (playerFieldCount === 3 || ((punishStyle || this.settings.isNoScoreGame()) && playerFieldCount > 3)) {
            str += '●●●';
        }
        else {
            for (let i = 0; i < playerFieldCount; i++) {
                str += '●';
            }
        }
        return str;
    }
    isActiveField(player, fieldIndex) {
        return this.settings.fields[this.getPlayerState(player).getActFieldIndex()] === fieldIndex;
    }
    isFieldDoneForPlayer(player, fieldIndex) {
        return this.getPlayerState(player).getFieldCount(fieldIndex) >= 3;
    }
    isFieldEnabled(fieldIndex) {
        if (this.settings.isNoScoreGame()) {
            return this.settings.fields.indexOf(fieldIndex) !== -1 && !this.isFieldDoneForPlayer(this.getPlayerToDisplay(), fieldIndex);
        }
        return this.settings.fields.indexOf(fieldIndex) !== -1 && !this.isFieldClosed(fieldIndex);
    }
    isPrimaryField(fieldIndex) {
        return this.isFieldEnabled(fieldIndex) &&
            !this.isFieldDoneForPlayer(this.getPlayerToDisplay(), fieldIndex);
    }
    isSecondaryField(fieldIndex) {
        return this.isFieldEnabled(fieldIndex) &&
            this.isFieldDoneForPlayer(this.getPlayerToDisplay(), fieldIndex);
    }
    getFieldNote(fieldIndex) {
        if (this.isPrimaryField(fieldIndex)) {
            const playerFieldCount = this.getPlayerState(this.getPlayerToDisplay()).getFieldCount(fieldIndex);
            const remaining = ''.padStart(3 - playerFieldCount, '●');
            return remaining + '\n' + this.game.players.filter(p => this.isFieldDoneForPlayer(p, fieldIndex))
                .map(p => p.name.substr(0, 1)).join(',').toUpperCase();
        }
        else if (this.isSecondaryField(fieldIndex)) {
            return this.game.players.filter(p => !this.isFieldDoneForPlayer(p, fieldIndex))
                .map(p => p.name.substr(0, 1)).join(',').toUpperCase();
        }
        return '';
    }
    customReset() {
        this.game.players.forEach(player => player.state = new _models_cricet_state_model__WEBPACK_IMPORTED_MODULE_4__["CricketState"]());
    }
    customSettingsValidation() {
        return this.settings.fields.length > 0;
    }
    changePlayerToDisplay(player) {
        this.playerToDisplay = player;
        setTimeout(() => this.playerToDisplay = null, 1500);
    }
    decoratePlayerStat(player) {
        return player.name;
    }
    getGameConfig() {
        return this.settings.fields.length + ',' + this.settings.style;
    }
    getPlayerToDisplay() {
        return !!this.playerToDisplay ? this.playerToDisplay : this.game.getActualPlayer();
    }
    getPlayerTotal(player) {
        let total = 0;
        if (this.settings.isPunishGame() || this.settings.isBlackOutGame()) {
            total = this.getPlayerTotalForPunishGame(player);
        }
        else if (this.settings.isScoreGame()) {
            total = this.getPlayerTotalForScoreGame(player);
        }
        return total;
    }
    getPlayerTotalForScoreGame(player) {
        let total = 0;
        this.settings.fields.forEach(fieldIndex => {
            if (this.isFieldDoneForPlayer(player, fieldIndex)) {
                total += (this.getPlayerState(player).getFieldCount(fieldIndex) - 3) * _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex);
            }
        }, this);
        return total;
    }
    getPlayerTotalForPunishGame(player) {
        let total = 0;
        this.settings.fields.forEach(fieldIndex => {
            total += this.getPlayerState(player).getPunishCount(fieldIndex) * _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex);
        }, this);
        return total;
    }
    punishPlayers(fieldIndex) {
        this.game.players.forEach(player => {
            if (!this.isFieldDoneForPlayer(player, fieldIndex)) {
                this.getPlayerState(player).setPunishCount(fieldIndex, this.getPlayerState(player).getPunishCount(fieldIndex) + this.multiplier);
            }
        }, this);
    }
    getFieldScore(player, fieldIndex) {
        if (this.isFieldDoneForPlayer(player, fieldIndex)) {
            return (this.getPlayerState(player).getFieldCount(fieldIndex) - 3) * _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex);
        }
        return 0;
    }
    getPunishScore(player, fieldIndex) {
        return this.getPlayerState(player).getPunishCount(fieldIndex) * _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex);
    }
    isFieldClosed(fieldIndex) {
        let closed = true;
        this.game.players.forEach(player => {
            closed = closed && this.isFieldDoneForPlayer(player, fieldIndex);
        }, this);
        return closed;
    }
    isFieldClosedForOthers(player, fieldIndex) {
        let closed = true;
        this.game.players.forEach(p => {
            if (p.id !== player.id) {
                closed = closed && this.isFieldDoneForPlayer(p, fieldIndex);
            }
        }, this);
        return closed;
    }
    isPlayerDone(player) {
        let done = true;
        this.settings.fields.forEach(fieldIndex => {
            done = done && this.isFieldDoneForPlayer(player, fieldIndex);
        });
        return done;
    }
}
CricketComponent.ɵfac = function CricketComponent_Factory(t) { return new (t || CricketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"])); };
CricketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CricketComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "click"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], [3, "playground"], [1, "player_container"], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "player"], [1, "field-set"], [3, "class", 4, "ngFor", "ngForOf"], [1, "small"]], template: function CricketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CricketComponent_app_settings_1_Template, 48, 8, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CricketComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CricketComponent_div_4_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CricketComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CricketComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_17__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_18__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_19__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CricketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './cricket.component.html',
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"] }, { type: _services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"] }, { type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cricket/cricket.module.ts":
/*!*******************************************!*\
  !*** ./src/app/cricket/cricket.module.ts ***!
  \*******************************************/
/*! exports provided: CricketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CricketModule", function() { return CricketModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cricket_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cricket.component */ "./src/app/cricket/cricket.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






class CricketModule {
}
CricketModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CricketModule });
CricketModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CricketModule_Factory(t) { return new (t || CricketModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: '', component: _cricket_component__WEBPACK_IMPORTED_MODULE_2__["CricketComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CricketModule, { declarations: [_cricket_component__WEBPACK_IMPORTED_MODULE_2__["CricketComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CricketModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: '', component: _cricket_component__WEBPACK_IMPORTED_MODULE_2__["CricketComponent"] }
                    ])
                ],
                declarations: [_cricket_component__WEBPACK_IMPORTED_MODULE_2__["CricketComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cricket/models/cricet.settings.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/cricket/models/cricet.settings.model.ts ***!
  \*********************************************************/
/*! exports provided: CricketSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CricketSettings", function() { return CricketSettings; });
class CricketSettings {
    constructor() {
        this.fields = [14, 15, 16, 17, 18, 19, 20];
        this.numbs = [];
        this.style = 2;
        let defaultSet = false;
        for (let i = 0; i < 21; i++) {
            this.numbs[i] = defaultSet;
            if (i === 13) {
                defaultSet = true;
            }
        }
        this.initFields();
    }
    randomize(maxField) {
        for (let i = 0; i < this.numbs.length; i++) {
            this.numbs[i] = false;
        }
        while (this.numbs.filter(n => !!n).length !== maxField) {
            this.numbs[Math.floor(Math.random() * 21)] = true;
        }
        this.numbs[this.numbs.length - 1] = true;
        this.initFields();
    }
    all() {
        this.setAllowedField([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]);
    }
    small() {
        this.setAllowedField([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21]);
    }
    high() {
        this.setAllowedField([11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]);
    }
    star() {
        this.setAllowedField([20, 9, 14, 13, 4, 16, 7, 2, 15, 21]);
    }
    cross() {
        this.setAllowedField([20, 3, 11, 6, 21]);
    }
    upper() {
        this.setAllowedField([14, 9, 12, 5, 20, 1, 18, 4, 13, 21]);
    }
    lower() {
        this.setAllowedField([10, 15, 2, 17, 3, 19, 7, 16, 8, 21]);
    }
    left() {
        this.setAllowedField([12, 9, 14, 11, 8, 16, 7, 5, 19, 21]);
    }
    right() {
        this.setAllowedField([1, 18, 4, 13, 6, 10, 15, 2, 17, 21]);
    }
    odd() {
        this.setAllowedField([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]);
    }
    even() {
        this.setAllowedField([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21]);
    }
    prime() {
        this.setAllowedField([2, 3, 5, 7, 11, 13, 17, 19, 21]);
    }
    notPrime() {
        this.setAllowedField([1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21]);
    }
    getNumbers() {
        const numbers = [];
        for (let i = 0; i < 21; i++) {
            numbers[i] = (i + 1);
        }
        return numbers;
    }
    isFieldAllowed(field) {
        return !!this.numbs[field];
    }
    setNumber(i) {
        this.numbs[i] = !this.numbs[i];
        this.initFields();
    }
    setStyle(style) {
        this.style = style;
    }
    initFields() {
        this.fields = [];
        for (let i = 0; i < 21; i++) {
            if (this.numbs[i]) {
                this.fields.push(i);
            }
        }
    }
    isScoreGame() {
        return this.style === 1;
    }
    isPunishGame() {
        return this.style === 2;
    }
    isNoScoreGame() {
        return this.style === 3;
    }
    isBlackOutGame() {
        return this.style === 4;
    }
    setAllowedField(fields) {
        for (let i = 0; i < this.numbs.length; i++) {
            this.numbs[i] = false;
        }
        fields.forEach(f => this.numbs[f - 1] = true);
        this.initFields();
    }
}


/***/ }),

/***/ "./src/app/cricket/models/cricet.state.model.ts":
/*!******************************************************!*\
  !*** ./src/app/cricket/models/cricet.state.model.ts ***!
  \******************************************************/
/*! exports provided: CricketState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CricketState", function() { return CricketState; });
/* harmony import */ var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground-state.model */ "./src/app/shared/models/playground-state.model.ts");

class CricketState extends _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__["PlaygroundState"] {
    constructor() {
        super();
        this.fieldCount = [];
        this.punishCount = [];
        this.actFieldIndex = 0;
    }
    getFieldCount(fieldIndex) {
        return this.getFieldValue(this.fieldCount, fieldIndex).value;
    }
    setFieldCount(fieldIndex, value) {
        this.getFieldValue(this.fieldCount, fieldIndex).value = value;
    }
    getPunishCount(fieldIndex) {
        return this.getFieldValue(this.punishCount, fieldIndex).value;
    }
    setPunishCount(fieldIndex, value) {
        this.getFieldValue(this.punishCount, fieldIndex).value = value;
    }
    getActFieldIndex() {
        return this.actFieldIndex;
    }
    increaseActFieldIndex() {
        this.actFieldIndex++;
    }
    clone() {
        const state = new CricketState();
        state.actFieldIndex = this.actFieldIndex;
        this.fieldCount.forEach(fv => state.fieldCount.push(fv.clone()));
        this.punishCount.forEach(fv => state.punishCount.push(fv.clone()));
        return state;
    }
}


/***/ }),

/***/ "./src/app/duel/duel.component.ts":
/*!****************************************!*\
  !*** ./src/app/duel/duel.component.ts ***!
  \****************************************/
/*! exports provided: DuelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuelComponent", function() { return DuelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~models/playground.model */ "./src/app/shared/models/playground.model.ts");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-animation */ "./src/app/route-animation.ts");
/* harmony import */ var _models_duel_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/duel.settings.model */ "./src/app/duel/models/duel.settings.model.ts");
/* harmony import */ var _models_duel_state_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/duel.state.model */ "./src/app/duel/models/duel.state.model.ts");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/sound.service */ "./src/app/shared/services/sound.service.ts");
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~services/bot.service */ "./src/app/shared/services/bot.service.ts");
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~services/statistics.service */ "./src/app/shared/services/statistics.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");
























function DuelComponent_app_settings_1_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r303); const i_r301 = ctx.index; const ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r302.settings.setNumber(i_r301); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const numb_r300 = ctx.$implicit;
    const i_r301 = ctx.index;
    const ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r299.settings.isFieldAllowed(i_r301) ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r300 === 21 ? "B" : numb_r300, " ");
} }
function DuelComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Life limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DuelComponent_app_settings_1_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r304.settings.startPoint = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DuelComponent_app_settings_1_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r306 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r306.settings.targetPoint = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Punishment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DuelComponent_app_settings_1_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r307.settings.punishment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r308.settings.toggleHandOver(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Hand Over");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DuelComponent_app_settings_1_button_23_Template, 2, 2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r309.settings.upper(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Upper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r310.settings.lower(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lower");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r311.settings.left(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r312 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r312.settings.right(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r313.settings.odd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Odd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r314.settings.even(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Even");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r315.settings.prime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r316.settings.notPrime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Not prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r317 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r317.settings.randomize(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Random 05");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r318.settings.randomize(10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Random 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r319.settings.randomize(15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Random 15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r320 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r320.settings.small(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r321.settings.high(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r322.settings.star(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r323.settings.cross(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Cross");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const ctx_r324 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r324.settings.all(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Duel")("playground", ctx_r294.playground)("rules", "....");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r294.settings.startPoint);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r294.settings.targetPoint);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r294.settings.punishment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r294.settings.handover ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r294.settings.getNumbers());
} }
function DuelComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 13);
} if (rf & 2) {
    const ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r295.playground);
} }
function DuelComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r326 = ctx.$implicit;
    const i_r327 = ctx.index;
    const ctx_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player ", i_r327 === ctx_r325.game.actualPlayerIndex ? "highlighted" : "", " ", ctx_r325.isInactive(player_r326) ? "inactive" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r326)("hasContent", false);
} }
function DuelComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DuelComponent_div_4_div_1_Template, 2, 6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r296.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r296.game.players);
} }
function DuelComponent_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 13);
} if (rf & 2) {
    const ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r297.playground);
} }
function DuelComponent_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 13);
} if (rf & 2) {
    const ctx_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r298.playground);
} }
class DuelComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super(application, game, route, dialogService, soundService, botService, statisticsService, 'duel', 2);
        this.settings = new _models_duel_settings_model__WEBPACK_IMPORTED_MODULE_3__["DuelSettings"]();
    }
    calculatePoints(player, fieldIndex, score) {
        const state = this.getPlayerState(player);
        const actualScore = score * this.multiplier;
        if (score === 0) {
            player.score -= this.settings.punishment;
        }
        else if (state.ownFields.some(i => i === fieldIndex)) {
            player.score += actualScore;
        }
        else if (this.isSecondaryField(fieldIndex)) {
            player.score -= actualScore;
            if (this.settings.handover) {
                const player = this.game.players.find(p => p != this.game.getActualPlayer() && this.getPlayerState(p).ownFields.some(i => i === fieldIndex));
                if (player) {
                    player.score += actualScore;
                }
            }
        }
        else {
            state.ownFields.push(fieldIndex);
        }
    }
    checkPlayerState(player) {
        this.game.players.forEach(p => p.setWin(p.score >= this.settings.targetPoint));
        const activePlayers = this.game.players.filter(p => !this.isInactive(p));
        if (activePlayers.length === 1) {
            activePlayers[0].setWin(true);
        }
        if (!activePlayers) {
            player.setWin(true);
        }
        else {
            if (this.game.isTheLastThrow()) {
                this.game.nextPlayer();
            }
            while (this.isInactive(this.game.getActualPlayer())) {
                this.game.nextPlayer();
            }
        }
    }
    isInactive(player) {
        return player.score <= 0;
    }
    isPrimaryField(fieldIndex) {
        const state = this.getPlayerState(this.game.getActualPlayer());
        return state.ownFields.some(i => i === fieldIndex);
    }
    isSecondaryField(fieldIndex) {
        return !this.settings.isFieldAllowed(fieldIndex) ||
            this.game.players.some(p => p != this.game.getActualPlayer() && this.getPlayerState(p).ownFields.some(i => i === fieldIndex));
    }
    getFieldNote(fieldIndex) {
        const player = this.game.players.find(p => this.getPlayerState(p).ownFields.some(i => i === fieldIndex));
        if (player) {
            return player.name.substr(0, 1).toUpperCase();
        }
        return '';
    }
    customReset() {
        this.game.players.forEach(player => {
            player.state = new _models_duel_state_model__WEBPACK_IMPORTED_MODULE_4__["DuelState"]();
            player.score = this.settings.startPoint;
        });
    }
    getGameConfig() {
        return this.settings.fields.length + ',' + this.settings.targetPoint + ',' + this.settings.startPoint;
    }
}
DuelComponent.ɵfac = function DuelComponent_Factory(t) { return new (t || DuelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"])); };
DuelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DuelComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "title", "playground", "rules"], [1, "field-set"], ["appearance", "outline", 1, "big"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "click"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], [3, "playground"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]], template: function DuelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DuelComponent_app_settings_1_Template, 57, 8, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DuelComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DuelComponent_div_4_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DuelComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DuelComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_19__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_20__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_21__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_22__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DuelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './duel.component.html',
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"] }, { type: _services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"] }, { type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/duel/duel.module.ts":
/*!*************************************!*\
  !*** ./src/app/duel/duel.module.ts ***!
  \*************************************/
/*! exports provided: DuelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuelModule", function() { return DuelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _duel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./duel.component */ "./src/app/duel/duel.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






class DuelModule {
}
DuelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DuelModule });
DuelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DuelModule_Factory(t) { return new (t || DuelModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: '', component: _duel_component__WEBPACK_IMPORTED_MODULE_2__["DuelComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DuelModule, { declarations: [_duel_component__WEBPACK_IMPORTED_MODULE_2__["DuelComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DuelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: '', component: _duel_component__WEBPACK_IMPORTED_MODULE_2__["DuelComponent"] }
                    ])
                ],
                declarations: [_duel_component__WEBPACK_IMPORTED_MODULE_2__["DuelComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/duel/models/duel.settings.model.ts":
/*!****************************************************!*\
  !*** ./src/app/duel/models/duel.settings.model.ts ***!
  \****************************************************/
/*! exports provided: DuelSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuelSettings", function() { return DuelSettings; });
/* harmony import */ var _cricket_models_cricet_settings_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../cricket/models/cricet.settings.model */ "./src/app/cricket/models/cricet.settings.model.ts");

class DuelSettings extends _cricket_models_cricet_settings_model__WEBPACK_IMPORTED_MODULE_0__["CricketSettings"] {
    constructor() {
        super();
        this.star();
        this.startPoint = 30;
        this.targetPoint = 200;
        this.punishment = 10;
        this.handover = true;
    }
    star() {
        this.setAllowedField([20, 1, 4, 13, 6, 15, 2, 3, 19, 16, 8, 14, 9]);
    }
    cross() {
        this.setAllowedField([5, 20, 18, 4, 6, 10, 2, 17, 7, 16, 11, 14]);
    }
    toggleHandOver() {
        this.handover = !this.handover;
    }
}


/***/ }),

/***/ "./src/app/duel/models/duel.state.model.ts":
/*!*************************************************!*\
  !*** ./src/app/duel/models/duel.state.model.ts ***!
  \*************************************************/
/*! exports provided: DuelState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuelState", function() { return DuelState; });
/* harmony import */ var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground-state.model */ "./src/app/shared/models/playground-state.model.ts");

class DuelState extends _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__["PlaygroundState"] {
    constructor() {
        super();
        this.ownFields = [];
    }
    clone() {
        const state = new DuelState();
        state.ownFields = [...this.ownFields];
        return state;
    }
}


/***/ }),

/***/ "./src/app/fives/fives.component.ts":
/*!******************************************!*\
  !*** ./src/app/fives/fives.component.ts ***!
  \******************************************/
/*! exports provided: FivesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivesComponent", function() { return FivesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~models/playground.model */ "./src/app/shared/models/playground.model.ts");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-animation */ "./src/app/route-animation.ts");
/* harmony import */ var _models_fives_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/fives.settings.model */ "./src/app/fives/models/fives.settings.model.ts");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/sound.service */ "./src/app/shared/services/sound.service.ts");
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/bot.service */ "./src/app/shared/services/bot.service.ts");
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~services/statistics.service */ "./src/app/shared/services/statistics.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");




















function FivesComponent_app_settings_1_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FivesComponent_app_settings_1_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198); const divider_r196 = ctx.$implicit; const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r197.settings.setDivider(divider_r196); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const divider_r196 = ctx.$implicit;
    const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r194.settings.divider === divider_r196 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](divider_r196);
} }
function FivesComponent_app_settings_1_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FivesComponent_app_settings_1_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r201); const limit_r199 = ctx.$implicit; const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r200.settings.setLimit(limit_r199); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const limit_r199 = ctx.$implicit;
    const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r195.settings.limit === limit_r199 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](limit_r199);
} }
function FivesComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FivesComponent_app_settings_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r203); const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r202.settings.toggleNoCheat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " No Cheat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FivesComponent_app_settings_1_button_8_Template, 2, 2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FivesComponent_app_settings_1_button_12_Template, 2, 2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Fives")("playground", ctx_r189.playground)("rules", "The idea of the game to throw three darts into the board, in turn, to score a number that " + "is divisible by five. The higher the number you score, the more points you can score. For every five " + "scored, one point is awarded. E.g. if a player scores fifteen then he or she gains three points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r189.settings.noCheat ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r189.settings.getSelectableDividers());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r189.settings.getSelectableLimits());
} }
function FivesComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 8);
} if (rf & 2) {
    const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r190.playground);
} }
function FivesComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r205 = ctx.$implicit;
    const i_r206 = ctx.index;
    const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r206 === ctx_r204.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r205)("hasContent", false);
} }
function FivesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FivesComponent_div_4_div_1_Template, 2, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r191.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r191.game.players);
} }
function FivesComponent_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 8);
} if (rf & 2) {
    const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r192.playground);
} }
function FivesComponent_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 8);
} if (rf & 2) {
    const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r193.playground);
} }
class FivesComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super(application, game, route, dialogService, soundService, botService, statisticsService, 'fives');
        this.settings = new _models_fives_settings_model__WEBPACK_IMPORTED_MODULE_3__["FivesSettings"]();
    }
    calculatePoints(player, fieldIndex, score) {
        if (this.game.isTheLastThrow()) {
            let sum = 0;
            for (let i = 0; i < 3; i++) {
                const t = player.throwsHistory[player.throwsHistory.length - i - 1];
                sum += t.score * t.multi;
            }
            if (sum % this.settings.divider === 0) {
                if (this.settings.noCheat && player.throwsHistory[player.throwsHistory.length - 1].score === 0 && sum !== 0) {
                    sum = 0;
                }
                player.score -= (sum / this.settings.divider);
            }
        }
    }
    checkPlayerState(player) {
        this.game.players.forEach(p => p.setWin(p.score <= 0));
        if (this.game.isTheLastThrow()) {
            this.game.nextPlayer();
        }
    }
    isPrimaryField(fieldIndex) {
        if (this.game.actualThrow === 2) {
            const mod = this.settings.divider - (this.game.getActualPlayer().getThrowsTotal() % this.settings.divider);
            let max = mod + this.settings.divider;
            const all = [mod];
            while (max <= 20) {
                all.push(max);
                max += this.settings.divider;
            }
            return all.some(f => f === fieldIndex + 1);
        }
        return false;
    }
    customReset() {
        this.game.players.forEach(player => player.score = this.settings.limit);
    }
    getGameConfig() {
        return this.settings.divider + ',' + this.settings.limit;
    }
}
FivesComponent.ɵfac = function FivesComponent_Factory(t) { return new (t || FivesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_8__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_9__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_10__["StatisticsService"])); };
FivesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FivesComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], [3, "playground"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]], template: function FivesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FivesComponent_app_settings_1_Template, 13, 6, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FivesComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FivesComponent_div_4_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FivesComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FivesComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FivesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './fives.component.html',
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationStateService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_8__["SoundService"] }, { type: _services_bot_service__WEBPACK_IMPORTED_MODULE_9__["BotService"] }, { type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_10__["StatisticsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/fives/fives.module.ts":
/*!***************************************!*\
  !*** ./src/app/fives/fives.module.ts ***!
  \***************************************/
/*! exports provided: FivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivesModule", function() { return FivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fives_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fives.component */ "./src/app/fives/fives.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






class FivesModule {
}
FivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FivesModule });
FivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FivesModule_Factory(t) { return new (t || FivesModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: '', component: _fives_component__WEBPACK_IMPORTED_MODULE_2__["FivesComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FivesModule, { declarations: [_fives_component__WEBPACK_IMPORTED_MODULE_2__["FivesComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: '', component: _fives_component__WEBPACK_IMPORTED_MODULE_2__["FivesComponent"] }
                    ])
                ],
                declarations: [_fives_component__WEBPACK_IMPORTED_MODULE_2__["FivesComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/fives/models/fives.settings.model.ts":
/*!******************************************************!*\
  !*** ./src/app/fives/models/fives.settings.model.ts ***!
  \******************************************************/
/*! exports provided: FivesSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivesSettings", function() { return FivesSettings; });
class FivesSettings {
    constructor() {
        this.divider = 5;
        this.limit = 20;
        this.noCheat = true;
    }
    getSelectableDividers() {
        return [3, 4, 5, 6, 7, 8, 10];
    }
    getSelectableLimits() {
        return [10, 20, 30, 50, 100];
    }
    setDivider(value) {
        this.divider = value;
    }
    setLimit(value) {
        this.limit = value;
    }
    toggleNoCheat() {
        this.noCheat = !this.noCheat;
    }
}


/***/ }),

/***/ "./src/app/hare-and-hound/hare-and-hound.component.ts":
/*!************************************************************!*\
  !*** ./src/app/hare-and-hound/hare-and-hound.component.ts ***!
  \************************************************************/
/*! exports provided: HareAndHoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HareAndHoundComponent", function() { return HareAndHoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~models/playground.model */ "./src/app/shared/models/playground.model.ts");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-animation */ "./src/app/route-animation.ts");
/* harmony import */ var _models_hare_and_hound_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/hare-and-hound.settings.model */ "./src/app/hare-and-hound/models/hare-and-hound.settings.model.ts");
/* harmony import */ var _models_hare_and_hound_state_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/hare-and-hound.state.model */ "./src/app/hare-and-hound/models/hare-and-hound.state.model.ts");
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/statistics.service */ "./src/app/shared/services/statistics.service.ts");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~services/sound.service */ "./src/app/shared/services/sound.service.ts");
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~services/bot.service */ "./src/app/shared/services/bot.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");





















function HareAndHoundComponent_app_settings_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HareAndHoundComponent_app_settings_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r215); const start_r213 = ctx.$implicit; const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r214.settings.setHoundStart(start_r213 - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const start_r213 = ctx.$implicit;
    const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r212.settings.houndStartIndex + 1 === start_r213 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](start_r213);
} }
function HareAndHoundComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hound start position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HareAndHoundComponent_app_settings_1_button_3_Template, 2, 2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Hare and Hound")("playground", ctx_r207.playground)("rules", "The frist player is the hare, and his opponent is the hound in pursuit. The hare must travel " + "clockwise around the board starting at 20. The hare wins by returning to 20 before the hound catches " + "up with him. The hound usually starts from either 12 or 5, depending on the preference of the " + "players. The hound wins by overtaking the hare.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r207.settings.getSelectableHoundStart());
} }
function HareAndHoundComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 8);
} if (rf & 2) {
    const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r208.playground);
} }
function HareAndHoundComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r217 = ctx.$implicit;
    const i_r218 = ctx.index;
    const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r218 === ctx_r216.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r217)("hasContent", false);
} }
function HareAndHoundComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HareAndHoundComponent_div_4_div_1_Template, 2, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r209.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r209.game.players);
} }
function HareAndHoundComponent_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 8);
} if (rf & 2) {
    const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r210.playground);
} }
function HareAndHoundComponent_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 8);
} if (rf & 2) {
    const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r211.playground);
} }
class HareAndHoundComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super(application, game, route, dialogService, soundService, botService, statisticsService, 'hare-hound', 2, 2);
        this.settings = new _models_hare_and_hound_settings_model__WEBPACK_IMPORTED_MODULE_3__["HareAndHoundSettings"]();
    }
    calculatePoints(player, fieldIndex, score) {
        const state = this.getPlayerState(player);
        if (this.isFieldEnabled(fieldIndex, state.actFieldIndex)) {
            state.increaseActFieldIndex(this.multiplier);
            if (state.actFieldIndex >= (_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["FIELDS_COUNT"] - 1)) {
                state.actFieldIndex = state.actFieldIndex - (_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["FIELDS_COUNT"] - 1);
            }
            player.score -= this.multiplier;
        }
    }
    checkPlayerState(player) {
        player.setWin((this.isHare() && player.score <= 0) ||
            (!this.isHare() &&
                (player.score + this.settings.getHareStartIndex()) <= this.game.players.find(p => this.isHare(p)).score));
        if (!player.win && this.game.isTheLastThrow()) {
            this.game.nextPlayer();
        }
    }
    isFieldEnabled(fieldIndex, actFieldIndex) {
        if (!actFieldIndex) {
            actFieldIndex = this.getPlayerState(this.game.getActualPlayer()).actFieldIndex;
        }
        return fieldIndex === this.getFieldIndex(actFieldIndex);
    }
    isPrimaryField(fieldIndex) {
        return this.isFieldEnabled(fieldIndex);
    }
    isSecondaryField(fieldIndex) {
        if (!this.isFieldEnabled(fieldIndex)) {
            return this.game.players.some(p => fieldIndex === this.getFieldIndex(this.getPlayerState(p).actFieldIndex));
        }
        return false;
    }
    getFieldNote(fieldIndex) {
        const owners = this.game.players
            .filter(p => this.getFieldIndex(this.getPlayerState(p).actFieldIndex) === fieldIndex)
            .map(p => p.name.substr(0, 1));
        return !!owners.length ? owners.join(',') : '';
    }
    getFieldIcon(fieldIndex) {
        if (!this.isPrimaryField(fieldIndex) && !this.isSecondaryField(fieldIndex)) {
            return '';
        }
        return (this.isHare() && this.isPrimaryField(fieldIndex) || (this.isSecondaryField(fieldIndex) && !this.isHare())) ? 'favorite' : 'directions_run';
    }
    customReset() {
        this.game.players.forEach((player, index) => {
            player.score = _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["FIELDS_COUNT"] - 1;
            if (index === 0) {
                player.state = new _models_hare_and_hound_state_model__WEBPACK_IMPORTED_MODULE_4__["HareAndHoundState"](this.settings.getHareStartIndex());
            }
            else {
                player.state = new _models_hare_and_hound_state_model__WEBPACK_IMPORTED_MODULE_4__["HareAndHoundState"](0);
            }
        });
    }
    decoratePlayerStat(player) {
        return player.name + _services_statistics_service__WEBPACK_IMPORTED_MODULE_5__["STAT_NAME_SEPARATOR"] + `${this.isHare(player) ? '0' : '1'}`;
    }
    getGameConfig() {
        return (20 - _models_hare_and_hound_settings_model__WEBPACK_IMPORTED_MODULE_3__["HareAndHoundSettings"].getBaseFields().indexOf(this.settings.houndStartIndex)) + '';
    }
    getFieldIndex(index) {
        return this.settings.getFields()[index];
    }
    isHare(player) {
        if (!player) {
            player = this.game.getActualPlayer();
        }
        return this.game.players.map(p => p.id).indexOf(player.id) === 0;
    }
}
HareAndHoundComponent.ɵfac = function HareAndHoundComponent_Factory(t) { return new (t || HareAndHoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_10__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_11__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_5__["StatisticsService"])); };
HareAndHoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HareAndHoundComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], [3, "playground"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]], template: function HareAndHoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HareAndHoundComponent_app_settings_1_Template, 4, 4, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HareAndHoundComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HareAndHoundComponent_div_4_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HareAndHoundComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HareAndHoundComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HareAndHoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './hare-and-hound.component.html',
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationStateService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_10__["SoundService"] }, { type: _services_bot_service__WEBPACK_IMPORTED_MODULE_11__["BotService"] }, { type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_5__["StatisticsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/hare-and-hound/hare-and-hound.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/hare-and-hound/hare-and-hound.module.ts ***!
  \*********************************************************/
/*! exports provided: HareAndHoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HareAndHoundModule", function() { return HareAndHoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _hare_and_hound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hare-and-hound.component */ "./src/app/hare-and-hound/hare-and-hound.component.ts");






class HareAndHoundModule {
}
HareAndHoundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HareAndHoundModule });
HareAndHoundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HareAndHoundModule_Factory(t) { return new (t || HareAndHoundModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: '', component: _hare_and_hound_component__WEBPACK_IMPORTED_MODULE_3__["HareAndHoundComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HareAndHoundModule, { declarations: [_hare_and_hound_component__WEBPACK_IMPORTED_MODULE_3__["HareAndHoundComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HareAndHoundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: '', component: _hare_and_hound_component__WEBPACK_IMPORTED_MODULE_3__["HareAndHoundComponent"] }
                    ])
                ],
                declarations: [_hare_and_hound_component__WEBPACK_IMPORTED_MODULE_3__["HareAndHoundComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/hare-and-hound/models/hare-and-hound.settings.model.ts":
/*!************************************************************************!*\
  !*** ./src/app/hare-and-hound/models/hare-and-hound.settings.model.ts ***!
  \************************************************************************/
/*! exports provided: HareAndHoundSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HareAndHoundSettings", function() { return HareAndHoundSettings; });
class HareAndHoundSettings {
    constructor() {
        this.houndStartIndex = 13;
        this.hareStartIndex = 19;
    }
    getSelectableHoundStart() {
        return [7, 16, 8, 11, 14, 9, 12, 5];
    }
    setHoundStart(value) {
        this.houndStartIndex = value;
    }
    getFields() {
        const index = HareAndHoundSettings.getBaseFields().indexOf(this.houndStartIndex);
        return [...HareAndHoundSettings.getBaseFields().slice(index), ...HareAndHoundSettings.getBaseFields().slice(0, index)];
    }
    getHareStartIndex() {
        return this.getFields().indexOf(this.hareStartIndex);
    }
    static getBaseFields() {
        return [19, 0, 17, 3, 12, 5, 9, 14, 1, 16, 2, 18, 6, 15, 7, 10, 13, 8, 11, 4];
    }
}


/***/ }),

/***/ "./src/app/hare-and-hound/models/hare-and-hound.state.model.ts":
/*!*********************************************************************!*\
  !*** ./src/app/hare-and-hound/models/hare-and-hound.state.model.ts ***!
  \*********************************************************************/
/*! exports provided: HareAndHoundState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HareAndHoundState", function() { return HareAndHoundState; });
/* harmony import */ var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground-state.model */ "./src/app/shared/models/playground-state.model.ts");

class HareAndHoundState extends _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__["PlaygroundState"] {
    constructor(actFieldIndex) {
        super();
        this.actFieldIndex = actFieldIndex;
    }
    increaseActFieldIndex(value) {
        this.actFieldIndex += value ? value : 1;
    }
    decreaseActFieldIndex() {
        this.actFieldIndex--;
        if (this.actFieldIndex < 0) {
            this.actFieldIndex = 0;
        }
    }
    clone() {
        return new HareAndHoundState(this.actFieldIndex);
    }
}


/***/ }),

/***/ "./src/app/imitator/imitator.component.ts":
/*!************************************************!*\
  !*** ./src/app/imitator/imitator.component.ts ***!
  \************************************************/
/*! exports provided: ImitatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImitatorComponent", function() { return ImitatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~models/playground.model */ "./src/app/shared/models/playground.model.ts");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-animation */ "./src/app/route-animation.ts");
/* harmony import */ var _models_imitator_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/imitator.settings.model */ "./src/app/imitator/models/imitator.settings.model.ts");
/* harmony import */ var _models_imitator_state_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/imitator.state.model */ "./src/app/imitator/models/imitator.state.model.ts");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/sound.service */ "./src/app/shared/services/sound.service.ts");
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~services/bot.service */ "./src/app/shared/services/bot.service.ts");
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~services/statistics.service */ "./src/app/shared/services/statistics.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");




















function ImitatorComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Number of Round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r251.settings.setRound(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r253.settings.setRound(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r254.settings.setRound(10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r255.settings.setRound(15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 15 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r256.settings.setRound(20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 20 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Imitator")("playground", ctx_r246.playground)("rules", "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r246.settings.round === 3 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r246.settings.round === 5 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r246.settings.round === 10 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r246.settings.round === 15 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r246.settings.round === 20 ? "primary" : "");
} }
function ImitatorComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 8);
} if (rf & 2) {
    const ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r247.playground)("reversRound", ctx_r247.settings.round);
} }
function ImitatorComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r258 = ctx.$implicit;
    const i_r259 = ctx.index;
    const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r259 === ctx_r257.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r258)("hasContent", false);
} }
function ImitatorComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImitatorComponent_div_4_div_1_Template, 2, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r248.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r248.game.players);
} }
function ImitatorComponent_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 12);
} if (rf & 2) {
    const ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r249.playground);
} }
function ImitatorComponent_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 12);
} if (rf & 2) {
    const ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r250.playground);
} }
class ImitatorComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super(application, game, route, dialogService, soundService, botService, statisticsService, 'imitator');
        this.nextEnabled = false;
        this.settings = new _models_imitator_settings_model__WEBPACK_IMPORTED_MODULE_3__["ImitatorSettings"]();
    }
    calculatePoints(player, fieldIndex, score) {
        const state = this.getPlayerState(player);
        if (this.game.actualThrow === 1) {
            state.punished = fieldIndex !== state.actFieldIndex;
        }
        else if (this.game.actualThrow === 2) {
            const newScore = state.punished && score === 0 ? 25 : score;
            player.score += (state.punished ? newScore * -1 : newScore) * this.multiplier;
        }
        else {
            this.game.nextPlayer();
            const newFieldIndex = score === 0 ? Math.floor(Math.random() * 20) : fieldIndex;
            this.getPlayerState(this.game.getActualPlayer()).actFieldIndex = newFieldIndex;
        }
    }
    isPrimaryField(fieldIndex) {
        return this.game.actualThrow === 0 && this.getPlayerState(this.game.getActualPlayer()).actFieldIndex === fieldIndex;
    }
    checkPlayerState(player) {
        if (this.game.isTheLastPlayer(player) && (this.game.round + 1) === this.settings.round && this.game.actualThrow === 2) {
            this.game.players.forEach(p => p.setWin(this.game.isTheBestPlayer(p)));
        }
    }
    customReset() {
        this.game.players.forEach(player => player.state = new _models_imitator_state_model__WEBPACK_IMPORTED_MODULE_4__["ImitatorState"]());
    }
    getGameConfig() {
        return this.settings.round + '';
    }
}
ImitatorComponent.ɵfac = function ImitatorComponent_Factory(t) { return new (t || ImitatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"])); };
ImitatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImitatorComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", "reversRound", 4, "ngIf"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground", 4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], [3, "playground", "reversRound"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"], [3, "playground"]], template: function ImitatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImitatorComponent_app_settings_1_Template, 13, 8, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImitatorComponent_app_game_toolbar_3_Template, 1, 2, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImitatorComponent_div_4_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ImitatorComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ImitatorComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImitatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './imitator.component.html',
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"] }, { type: _services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"] }, { type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/imitator/imitator.module.ts":
/*!*********************************************!*\
  !*** ./src/app/imitator/imitator.module.ts ***!
  \*********************************************/
/*! exports provided: ImitatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImitatorModule", function() { return ImitatorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _imitator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imitator.component */ "./src/app/imitator/imitator.component.ts");






class ImitatorModule {
}
ImitatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ImitatorModule });
ImitatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ImitatorModule_Factory(t) { return new (t || ImitatorModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', component: _imitator_component__WEBPACK_IMPORTED_MODULE_3__["ImitatorComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImitatorModule, { declarations: [_imitator_component__WEBPACK_IMPORTED_MODULE_3__["ImitatorComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImitatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        { path: '', component: _imitator_component__WEBPACK_IMPORTED_MODULE_3__["ImitatorComponent"] }
                    ])
                ],
                declarations: [_imitator_component__WEBPACK_IMPORTED_MODULE_3__["ImitatorComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/imitator/models/imitator.settings.model.ts":
/*!************************************************************!*\
  !*** ./src/app/imitator/models/imitator.settings.model.ts ***!
  \************************************************************/
/*! exports provided: ImitatorSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImitatorSettings", function() { return ImitatorSettings; });
class ImitatorSettings {
    constructor() {
        this.round = 5;
    }
    setRound(r) {
        this.round = r;
    }
}


/***/ }),

/***/ "./src/app/imitator/models/imitator.state.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/imitator/models/imitator.state.model.ts ***!
  \*********************************************************/
/*! exports provided: ImitatorState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImitatorState", function() { return ImitatorState; });
/* harmony import */ var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground-state.model */ "./src/app/shared/models/playground-state.model.ts");

class ImitatorState extends _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__["PlaygroundState"] {
    constructor() {
        super();
        this.actFieldIndex = Math.floor(Math.random() * 20);
        this.punished = false;
    }
    clone() {
        const state = new ImitatorState();
        state.actFieldIndex = this.actFieldIndex;
        state.punished = this.punished;
        return state;
    }
}


/***/ }),

/***/ "./src/app/killer/killer.component.ts":
/*!********************************************!*\
  !*** ./src/app/killer/killer.component.ts ***!
  \********************************************/
/*! exports provided: KillerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KillerComponent", function() { return KillerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~models/playground.model */ "./src/app/shared/models/playground.model.ts");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-animation */ "./src/app/route-animation.ts");
/* harmony import */ var _models_killer_state_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/killer.state.model */ "./src/app/killer/models/killer.state.model.ts");
/* harmony import */ var _models_killer_settings_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/killer.settings.model */ "./src/app/killer/models/killer.settings.model.ts");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/sound.service */ "./src/app/shared/services/sound.service.ts");
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~services/bot.service */ "./src/app/shared/services/bot.service.ts");
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~services/statistics.service */ "./src/app/shared/services/statistics.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");
























function KillerComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Life limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KillerComponent_app_settings_1_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r179); const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r178.settings.numberOfLives = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KillerComponent_app_settings_1_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r179); const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r180.settings.boardingLimit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KillerComponent_app_settings_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r179); const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r181.settings.toggleSuicide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Suicide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Killer")("playground", ctx_r173.playground)("rules", "Firstly each player draws lots i.e. a number between 1 - 20. Each player is then given " + "between 3 & 5 lives. The objective of this game is for each thrower to first hit their own number " + "three times to gain status of KILLER. Once they have achieved this they then can throw for their " + "opponents number in any order they wish. Every time a KILLER status player hits an opponents " + "number the opponent loses a life. KILLERS can also commit SUICIDE by hitting their own number's " + "triple. The winner of this game is the player that remains alive.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r173.settings.numberOfLives);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r173.settings.boardingLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r173.settings.suicide ? "primary" : "");
} }
function KillerComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 10);
} if (rf & 2) {
    const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r174.playground);
} }
function KillerComponent_div_4_div_1_ng_container_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Boarding: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const player_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r186.getPlayerState(player_r183).boarding);
} }
function KillerComponent_div_4_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Field: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Life: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, KillerComponent_div_4_div_1_ng_container_2_ng_container_11_Template, 4, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const player_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r185.getPlayerField(player_r183));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", player_r183.life, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r185.getPlayerState(player_r183).killer);
} }
function KillerComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KillerComponent_div_4_div_1_ng_container_2_Template, 12, 3, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r183 = ctx.$implicit;
    const i_r184 = ctx.index;
    const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player ", i_r184 === ctx_r182.game.actualPlayerIndex ? "highlighted" : "", " ", player_r183.isInactive() ? "inactive" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r183)("scoreDisplayed", false)("highlighted", ctx_r182.getPlayerState(player_r183).killer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r182.getPlayerField(player_r183) !== "0");
} }
function KillerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KillerComponent_div_4_div_1_Template, 3, 8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r175.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r175.game.players);
} }
function KillerComponent_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 10);
} if (rf & 2) {
    const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r176.playground);
} }
function KillerComponent_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 10);
} if (rf & 2) {
    const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r177.playground);
} }
const DANGER_ZONE_ICON = 'sentiment_very_dissatisfied';
class KillerComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super(application, game, route, dialogService, soundService, botService, statisticsService, 'killer', 2);
        this.settings = new _models_killer_settings_model__WEBPACK_IMPORTED_MODULE_4__["KillerSettings"]();
        this.nextEnabled = false;
        this.zeroEnabled = false;
        this.multiEnabled = false;
    }
    calculatePoints(player, fieldIndex, score) {
        const state = this.getPlayerState(player);
        if (this.game.round === 0) {
            state.actField = fieldIndex;
            player.score = score;
            if (this.game.isActualPlayerTheLast()) {
                this.nextEnabled = true;
                this.zeroEnabled = true;
                this.multiEnabled = true;
            }
        }
        else {
            if (state.killer) {
                if (this.settings.suicide && fieldIndex === state.actField && this.multiplier > 1) {
                    player.life = 0;
                    this.extraEndingMsg = 'SUICIDE!!!';
                }
                else if (fieldIndex === state.actField) {
                    player.life = Number(player.life) + Number(this.multiplier);
                    if (player.life > this.settings.numberOfLives) {
                        player.life = this.settings.numberOfLives;
                    }
                }
                else {
                    this.game.players.filter(p => p.id !== player.id && !p.isInactive()).forEach(p => {
                        const s = this.getPlayerState(p);
                        if (fieldIndex === s.actField) {
                            p.life -= this.multiplier;
                            this.soundService.no();
                            if (p.life < 0) {
                                p.life = 0;
                            }
                        }
                    });
                }
            }
            else if (fieldIndex === state.actField) {
                state.boarding -= this.multiplier;
                if (state.boarding <= 0) {
                    state.boarding = 0;
                }
                state.killer = state.boarding === 0;
            }
        }
    }
    checkPlayerState(player) {
        if (this.game.round !== 0) {
            const activePlayers = this.game.players.filter(p => !p.isInactive());
            this.game.players.forEach(p => p.setWin(1 === activePlayers.length && !p.isInactive()));
        }
        if (this.game.round === 0 || this.game.isTheLastThrow()) {
            this.game.nextPlayer();
        }
        while (this.game.getActualPlayer().isInactive()) {
            this.game.nextPlayer();
        }
    }
    isFieldEnabled(fieldIndex) {
        if (this.game.round === 0) {
            return fieldIndex !== 20 && !this.getAllEnabledFields().some(f => f === fieldIndex);
        }
        return this.getAllEnabledFields().some(f => f === fieldIndex);
    }
    isPrimaryField(fieldIndex) {
        if (this.game.round === 0) {
            return this.isFieldEnabled(fieldIndex);
        }
        const state = this.getPlayerState(this.game.getActualPlayer());
        if (state.killer) {
            return this.isFieldEnabled(fieldIndex) && !this.isSecondaryField(fieldIndex);
        }
        return state.actField === fieldIndex;
    }
    isSecondaryField(fieldIndex) {
        const state = this.getPlayerState(this.game.getActualPlayer());
        if (state.killer) {
            return state.actField === fieldIndex;
        }
        return false;
    }
    getFieldIcon(fieldIndex) {
        if (this.game.players.some(p => {
            const state = this.getPlayerState(p);
            return !p.isInactive() && p.life <= 3 && state.actField === fieldIndex;
        })) {
            return DANGER_ZONE_ICON;
        }
        return '';
    }
    getFieldNote(fieldIndex) {
        const owner = this.game.players.find(p => p.state.actField === fieldIndex);
        if (owner) {
            const shortName = owner.name.substr(0, 1);
            const boarding = owner.state.boarding;
            if (owner.state.killer) {
                return `${shortName}: ${owner.life}`;
            }
            return `${shortName}: ${boarding + ' - ' + owner.life}`;
        }
        return '';
    }
    getPlayerField(player) {
        const fieldIndex = this.getPlayerState(player).actField;
        return fieldIndex === 20 ? 'B' : (fieldIndex + 1) + '';
    }
    customReset() {
        this.game.players.forEach(player => {
            player.state = new _models_killer_state_model__WEBPACK_IMPORTED_MODULE_3__["KillerState"](this.settings.boardingLimit);
            player.life = this.settings.numberOfLives;
        });
    }
    customSettingsValidation() {
        return this.settings.numberOfLives > 0 && this.settings.boardingLimit > 0;
    }
    decoratePlayerStat(player) {
        return player.name;
    }
    getGameConfig() {
        return this.settings.boardingLimit + ',' + this.settings.numberOfLives;
    }
    getAllEnabledFields() {
        return this.game.players.filter(p => !p.isInactive())
            .map(p => this.getPlayerState(p).actField);
    }
}
KillerComponent.ɵfac = function KillerComponent_Factory(t) { return new (t || KillerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"])); };
KillerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KillerComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "title", "playground", "rules"], [1, "field-set"], ["appearance", "outline", 1, "big"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], [3, "playground"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "scoreDisplayed", "highlighted"], [4, "ngIf"], [1, "score"], [1, "clear"], [1, "line"]], template: function KillerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KillerComponent_app_settings_1_Template, 15, 6, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KillerComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KillerComponent_div_4_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, KillerComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, KillerComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_19__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_20__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_21__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_22__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KillerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './killer.component.html',
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"] }, { type: _services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"] }, { type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/killer/killer.module.ts":
/*!*****************************************!*\
  !*** ./src/app/killer/killer.module.ts ***!
  \*****************************************/
/*! exports provided: KillerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KillerModule", function() { return KillerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _killer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./killer.component */ "./src/app/killer/killer.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






class KillerModule {
}
KillerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: KillerModule });
KillerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function KillerModule_Factory(t) { return new (t || KillerModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: '', component: _killer_component__WEBPACK_IMPORTED_MODULE_2__["KillerComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](KillerModule, { declarations: [_killer_component__WEBPACK_IMPORTED_MODULE_2__["KillerComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KillerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: '', component: _killer_component__WEBPACK_IMPORTED_MODULE_2__["KillerComponent"] }
                    ])
                ],
                declarations: [_killer_component__WEBPACK_IMPORTED_MODULE_2__["KillerComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/killer/models/killer.settings.model.ts":
/*!********************************************************!*\
  !*** ./src/app/killer/models/killer.settings.model.ts ***!
  \********************************************************/
/*! exports provided: KillerSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KillerSettings", function() { return KillerSettings; });
class KillerSettings {
    constructor() {
        this.suicide = false;
        this.numberOfLives = 7;
        this.boardingLimit = 3;
    }
    toggleSuicide() {
        this.suicide = !this.suicide;
    }
}


/***/ }),

/***/ "./src/app/killer/models/killer.state.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/killer/models/killer.state.model.ts ***!
  \*****************************************************/
/*! exports provided: KillerState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KillerState", function() { return KillerState; });
/* harmony import */ var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground-state.model */ "./src/app/shared/models/playground-state.model.ts");

class KillerState extends _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__["PlaygroundState"] {
    constructor(boarding = 3) {
        super();
        this.boarding = boarding;
        this.actField = -1;
        this.killer = false;
    }
    clone() {
        const state = new KillerState(this.boarding);
        state.actField = this.actField;
        state.killer = this.killer;
        return state;
    }
}


/***/ }),

/***/ "./src/app/knockout/knockout.component.ts":
/*!************************************************!*\
  !*** ./src/app/knockout/knockout.component.ts ***!
  \************************************************/
/*! exports provided: KnockoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnockoutComponent", function() { return KnockoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~models/playground.model */ "./src/app/shared/models/playground.model.ts");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-animation */ "./src/app/route-animation.ts");
/* harmony import */ var _models_knockout_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/knockout.settings.model */ "./src/app/knockout/models/knockout.settings.model.ts");
/* harmony import */ var _models_knockout_state_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/knockout.state.model */ "./src/app/knockout/models/knockout.state.model.ts");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/sound.service */ "./src/app/shared/services/sound.service.ts");
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~services/bot.service */ "./src/app/shared/services/bot.service.ts");
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~services/statistics.service */ "./src/app/shared/services/statistics.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");























function KnockoutComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Life limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KnockoutComponent_app_settings_1_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r225); const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r224.settings.numberOfLives = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KnockoutComponent_app_settings_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r225); const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r226.settings.toggleKiller(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Below the belt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Knockout")("playground", ctx_r219.playground)("rules", "The player selected to throw first must throw as many points as possible. The player next in " + "line then must throw a higher score than the player throwing before him, if he fails to throw a " + "higher score a ring is put around their score, once you have 3 rings next to your name, you drop " + "out of the game.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r219.settings.numberOfLives);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r219.settings.killer ? "primary" : "");
} }
function KnockoutComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 11);
} if (rf & 2) {
    const ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r220.playground)("info", ctx_r220.getInfo());
} }
function KnockoutComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r228 = ctx.$implicit;
    const i_r229 = ctx.index;
    const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player ", i_r229 === ctx_r227.game.actualPlayerIndex ? "highlighted" : "", " ", player_r228.isInactive() ? "inactive" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r228)("scoreDisplayed", true)("lifeDisplayed", true)("hasContent", false);
} }
function KnockoutComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KnockoutComponent_div_4_div_1_Template, 2, 8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r221.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r221.game.players);
} }
function KnockoutComponent_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 15);
} if (rf & 2) {
    const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r222.playground);
} }
function KnockoutComponent_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 15);
} if (rf & 2) {
    const ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r223.playground);
} }
class KnockoutComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super(application, game, route, dialogService, soundService, botService, statisticsService, 'knockout', 2);
        this.settings = new _models_knockout_settings_model__WEBPACK_IMPORTED_MODULE_3__["KnockoutSettings"]();
    }
    calculatePoints(player, fieldIndex, score) {
        player.score = player.getThrowsTotal();
    }
    checkPlayerState(player) {
        if (this.game.isTheLastThrow()) {
            const score = this.getPlayerState(player).score;
            if (score > player.getThrowsTotal()) {
                player.life--;
                this.soundService.no();
            }
            else if (this.settings.killer && score !== 0 && score === player.getThrowsTotal()
                && player.throwsHistory[player.throwsHistory.length - 1].score !== 0) {
                this.game.getPreviousPlayer().life--;
                this.soundService.no();
            }
            this.getPlayerState(this.game.getNextPlayer()).score = player.getThrowsTotal();
            const activePlayers = this.game.getActivePlayers();
            this.game.players.forEach(p => p.setWin(1 === activePlayers.length && !p.isInactive()));
            this.game.nextPlayer();
        }
        while (this.game.getActualPlayer().isInactive()) {
            this.game.nextPlayer();
        }
    }
    customReset() {
        this.game.players.forEach(player => {
            player.state = new _models_knockout_state_model__WEBPACK_IMPORTED_MODULE_4__["KnockoutState"]();
            player.life = this.settings.numberOfLives;
        });
    }
    customSettingsValidation() {
        return this.settings.numberOfLives > 0;
    }
    getInfo() {
        const player = this.game.getActualPlayer();
        const state = this.getPlayerState(player);
        return (state.score ? state.score : 0) - (this.game.actualThrow === 0 ? 0 : player.score);
    }
    decoratePlayerStat(player) {
        return player.name;
    }
}
KnockoutComponent.ɵfac = function KnockoutComponent_Factory(t) { return new (t || KnockoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"])); };
KnockoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KnockoutComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", "info", 4, "ngIf"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground", 4, "ngIf"], [3, "title", "playground", "rules"], [1, "field-set"], ["appearance", "outline", 1, "big"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 1, "button", "medium", 3, "color", "click"], [3, "playground", "info"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "scoreDisplayed", "lifeDisplayed", "hasContent"], [3, "playground"]], template: function KnockoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KnockoutComponent_app_settings_1_Template, 11, 5, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KnockoutComponent_app_game_toolbar_3_Template, 1, 2, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KnockoutComponent_div_4_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, KnockoutComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, KnockoutComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_19__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_20__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_21__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KnockoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './knockout.component.html',
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"] }, { type: _services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"] }, { type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/knockout/knockout.module.ts":
/*!*********************************************!*\
  !*** ./src/app/knockout/knockout.module.ts ***!
  \*********************************************/
/*! exports provided: KnockoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnockoutModule", function() { return KnockoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _knockout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./knockout.component */ "./src/app/knockout/knockout.component.ts");






class KnockoutModule {
}
KnockoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: KnockoutModule });
KnockoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function KnockoutModule_Factory(t) { return new (t || KnockoutModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: '', component: _knockout_component__WEBPACK_IMPORTED_MODULE_3__["KnockoutComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](KnockoutModule, { declarations: [_knockout_component__WEBPACK_IMPORTED_MODULE_3__["KnockoutComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KnockoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: '', component: _knockout_component__WEBPACK_IMPORTED_MODULE_3__["KnockoutComponent"] }
                    ])
                ],
                declarations: [_knockout_component__WEBPACK_IMPORTED_MODULE_3__["KnockoutComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/knockout/models/knockout.settings.model.ts":
/*!************************************************************!*\
  !*** ./src/app/knockout/models/knockout.settings.model.ts ***!
  \************************************************************/
/*! exports provided: KnockoutSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnockoutSettings", function() { return KnockoutSettings; });
class KnockoutSettings {
    constructor() {
        this.numberOfLives = 5;
        this.killer = true;
    }
    toggleKiller() {
        this.killer = !this.killer;
    }
}


/***/ }),

/***/ "./src/app/knockout/models/knockout.state.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/knockout/models/knockout.state.model.ts ***!
  \*********************************************************/
/*! exports provided: KnockoutState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnockoutState", function() { return KnockoutState; });
/* harmony import */ var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground-state.model */ "./src/app/shared/models/playground-state.model.ts");

class KnockoutState extends _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__["PlaygroundState"] {
    constructor(score = 0) {
        super();
        this.score = score;
    }
    clone() {
        return new KnockoutState(this.score);
    }
}


/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");








const materialImports = [
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"]
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [materialImports,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"]], exports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: materialImports,
                exports: materialImports,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/route-animation.ts":
/*!************************************!*\
  !*** ./src/app/route-animation.ts ***!
  \************************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ], { optional: true })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
    ]),
]);


/***/ }),

/***/ "./src/app/scam/models/scam.settings.model.ts":
/*!****************************************************!*\
  !*** ./src/app/scam/models/scam.settings.model.ts ***!
  \****************************************************/
/*! exports provided: ScamSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScamSettings", function() { return ScamSettings; });
/* harmony import */ var _cricket_models_cricet_settings_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../cricket/models/cricet.settings.model */ "./src/app/cricket/models/cricet.settings.model.ts");

class ScamSettings extends _cricket_models_cricet_settings_model__WEBPACK_IMPORTED_MODULE_0__["CricketSettings"] {
    constructor() {
        super();
        this.stopper = false;
        this.punishment = true;
        this.reverse = false;
        this.punishmentValue = 25;
        this.style = 1;
        this.all();
    }
    toggleStopper() {
        this.stopper = !this.stopper;
    }
    toggleReverse() {
        this.reverse = !this.reverse;
    }
    togglePunishment() {
        this.punishment = !this.punishment;
    }
}


/***/ }),

/***/ "./src/app/scam/scam.component.ts":
/*!****************************************!*\
  !*** ./src/app/scam/scam.component.ts ***!
  \****************************************/
/*! exports provided: ScamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScamComponent", function() { return ScamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~models/playground.model */ "./src/app/shared/models/playground.model.ts");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-animation */ "./src/app/route-animation.ts");
/* harmony import */ var _models_scam_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/scam.settings.model */ "./src/app/scam/models/scam.settings.model.ts");
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~services/bot.service */ "./src/app/shared/services/bot.service.ts");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/sound.service */ "./src/app/shared/services/sound.service.ts");
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~services/statistics.service */ "./src/app/shared/services/statistics.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");





















function ScamComponent_app_settings_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269); const i_r267 = ctx.index; const ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r268.settings.setNumber(i_r267); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const numb_r266 = ctx.$implicit;
    const i_r267 = ctx.index;
    const ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r265.settings.isFieldAllowed(i_r267) ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r266 === 21 ? "B" : numb_r266, " ");
} }
function ScamComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScamComponent_app_settings_1_button_3_Template, 2, 2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r270.settings.upper(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Upper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r272.settings.lower(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lower");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r273.settings.left(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r274.settings.right(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const ctx_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r275.settings.odd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Odd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r276.settings.even(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Even");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r277.settings.prime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r278.settings.notPrime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Not prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r279.settings.randomize(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Random 05");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r280.settings.randomize(10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Random 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r281.settings.randomize(15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Random 15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r282.settings.small(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r283.settings.high(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r284.settings.star(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const ctx_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r285.settings.cross(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cross");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r286.settings.all(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r287.settings.setStyle(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Classic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r288.settings.toggleStopper(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Stopper ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r289.settings.setStyle(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "No Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271); const ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r290.settings.togglePunishment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Punish(25) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Scam")("playground", ctx_r260.playground)("rules", "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r260.settings.getNumbers());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r260.settings.style == 1 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r260.settings.stopper ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r260.settings.style == 3 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r260.settings.punishment ? "primary" : "");
} }
function ScamComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 10);
} if (rf & 2) {
    const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r261.playground);
} }
function ScamComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r292 = ctx.$implicit;
    const i_r293 = ctx.index;
    const ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r293 === ctx_r291.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r292)("hasContent", false)("highlighted", ctx_r291.settings.stopper && ctx_r291.game.isTheFirstPlayer(player_r292))("scoreDisplayed", !ctx_r291.settings.stopper || !ctx_r291.game.isTheFirstPlayer(player_r292));
} }
function ScamComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScamComponent_div_4_div_1_Template, 2, 7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r262.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r262.game.players);
} }
function ScamComponent_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 10);
} if (rf & 2) {
    const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r263.playground);
} }
function ScamComponent_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 10);
} if (rf & 2) {
    const ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r264.playground);
} }
class ScamComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super(application, game, route, dialogService, soundService, botService, statisticsService, 'scam', 2);
        this.settings = new _models_scam_settings_model__WEBPACK_IMPORTED_MODULE_3__["ScamSettings"]();
    }
    calculatePoints(player, fieldIndex, score) {
        if (!!this.game.numbs[fieldIndex]) {
            if (this.settings.stopper && this.game.isTheFirstPlayer(player)) {
                this.game.numbs[fieldIndex] = 0;
            }
            else if (this.settings.stopper) {
                player.score += (this.settings.isNoScoreGame() ? 1 : score) * this.multiplier * (this.settings.reverse ? -1 : 1);
            }
            else {
                player.score += (this.settings.isNoScoreGame() ? 1 : score) * this.multiplier * (this.settings.reverse ? -1 : 1);
                this.game.numbs[fieldIndex] = 0;
            }
        }
        else if (this.settings.punishment && ((this.settings.stopper && !this.game.isTheFirstPlayer(player)) || !this.settings.stopper)) {
            const newScore = score === 0 ? this.settings.punishmentValue : score;
            const scr = (this.settings.isNoScoreGame() ? 1 : newScore) * this.multiplier;
            player.score -= scr;
        }
    }
    checkPlayerState(player) {
        if (!this.game.numbs.some(n => n)) {
            const bests = this.game.getTheBestPlayers();
            this.game.players.forEach(p => p.setWin(bests.some(b => b.name === p.name)));
        }
        if (this.game.isTheLastThrow()) {
            this.game.nextPlayer();
        }
    }
    isPrimaryField(fieldIndex) {
        return this.settings.punishment && !!this.game.numbs[fieldIndex];
    }
    isFieldEnabled(fieldIndex) {
        return this.settings.punishment || !!this.game.numbs[fieldIndex];
    }
    customReset() {
        this.game.numbs = this.settings.numbs.map(i => i ? 1 : 0);
        this.settings.fields.forEach(f => this.settings.numbs[f] = true);
    }
    getGameConfig() {
        return this.settings.fields.length + '';
    }
    botThrow() {
        let fields = [...Array(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["FIELDS_COUNT"]).keys()];
        if (this.settings.reverse) {
            fields.reverse();
        }
        fields = fields.filter(index => this.game.numbs[index]).slice(-4).slice(0, 3);
        const index = this.botService.calculateMultiTarget(fields);
        if (this.botService.isDoublePoint()) {
            this.doublePoint();
        }
        else if (this.botService.isTriplePoint()) {
            this.triplePoint();
        }
        setTimeout(() => {
            this.throwNumber([this.isFieldEnabled(index) ? _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(index) : 0,
                _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(index)]);
        }, _services_bot_service__WEBPACK_IMPORTED_MODULE_4__["PLAYER_DELAY_FAST"]);
    }
}
ScamComponent.ɵfac = function ScamComponent_Factory(t) { return new (t || ScamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_4__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_10__["StatisticsService"])); };
ScamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScamComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "click"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], [3, "playground"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent", "highlighted", "scoreDisplayed"]], template: function ScamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScamComponent_app_settings_1_Template, 48, 8, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScamComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ScamComponent_div_4_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ScamComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ScamComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './scam.component.html',
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"] }, { type: _services_bot_service__WEBPACK_IMPORTED_MODULE_4__["BotService"] }, { type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_10__["StatisticsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/scam/scam.module.ts":
/*!*************************************!*\
  !*** ./src/app/scam/scam.module.ts ***!
  \*************************************/
/*! exports provided: ScamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScamModule", function() { return ScamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _scam_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scam.component */ "./src/app/scam/scam.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






class ScamModule {
}
ScamModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ScamModule });
ScamModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ScamModule_Factory(t) { return new (t || ScamModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: '', component: _scam_component__WEBPACK_IMPORTED_MODULE_2__["ScamComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScamModule, { declarations: [_scam_component__WEBPACK_IMPORTED_MODULE_2__["ScamComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScamModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: '', component: _scam_component__WEBPACK_IMPORTED_MODULE_2__["ScamComponent"] }
                    ])
                ],
                declarations: [_scam_component__WEBPACK_IMPORTED_MODULE_2__["ScamComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shanghai/models/shanghai.settings.model.ts":
/*!************************************************************!*\
  !*** ./src/app/shanghai/models/shanghai.settings.model.ts ***!
  \************************************************************/
/*! exports provided: ShanghaiSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShanghaiSettings", function() { return ShanghaiSettings; });
class ShanghaiSettings {
    constructor() {
        this.numbs = [];
        this.fields = [];
        this.noScore = false;
        this.halveIt = true;
        let defaultSet = true;
        for (let i = 0; i < 21; i++) {
            this.numbs[i] = defaultSet;
            if (i === 19) {
                defaultSet = false;
            }
        }
        this.initFields();
    }
    randomize() {
        for (let i = 0; i < this.numbs.length; i++) {
            this.numbs[i] = false;
        }
        for (let i = 0; i < 8; i++) {
            let rand = Math.floor(Math.random() * 21);
            while (this.numbs[rand]) {
                rand = Math.floor(Math.random() * 21);
            }
            this.numbs[rand] = true;
        }
        this.initFields();
    }
    toggleNoScore() {
        this.noScore = !this.noScore;
    }
    toggleHalveIt() {
        this.halveIt = !this.halveIt;
    }
    getNumbers() {
        const numbers = [];
        for (let i = 0; i < 21; i++) {
            numbers[i] = (i + 1);
        }
        return numbers;
    }
    setNumber(i) {
        this.numbs[i] = !this.numbs[i];
        this.initFields();
    }
    initFields() {
        this.fields = [];
        for (let i = 0; i < 21; i++) {
            if (this.numbs[i]) {
                this.fields.push(i);
            }
        }
    }
}


/***/ }),

/***/ "./src/app/shanghai/models/shanghai.state.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/shanghai/models/shanghai.state.model.ts ***!
  \*********************************************************/
/*! exports provided: ShanghaiState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShanghaiState", function() { return ShanghaiState; });
/* harmony import */ var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground-state.model */ "./src/app/shared/models/playground-state.model.ts");

class ShanghaiState extends _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__["PlaygroundState"] {
    constructor() {
        super();
        this.fieldCount = [];
        this.fieldScore = [];
    }
    getFieldCount(field) {
        return this.getFieldValue(this.fieldCount, field).value;
    }
    increaseFieldCount(field, value) {
        this.getFieldValue(this.fieldCount, field).value += value;
    }
    getFieldScore(field) {
        return this.getFieldValue(this.fieldScore, field).value;
    }
    increaseFieldScore(field, value) {
        this.getFieldValue(this.fieldScore, field).value += value;
    }
    clone() {
        const state = new ShanghaiState();
        this.fieldCount.forEach(fv => state.fieldCount.push(fv.clone()));
        this.fieldScore.forEach(fv => state.fieldScore.push(fv.clone()));
        return state;
    }
}


/***/ }),

/***/ "./src/app/shanghai/shanghai.component.ts":
/*!************************************************!*\
  !*** ./src/app/shanghai/shanghai.component.ts ***!
  \************************************************/
/*! exports provided: ShanghaiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShanghaiComponent", function() { return ShanghaiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~models/playground.model */ "./src/app/shared/models/playground.model.ts");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-animation */ "./src/app/route-animation.ts");
/* harmony import */ var _models_shanghai_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/shanghai.settings.model */ "./src/app/shanghai/models/shanghai.settings.model.ts");
/* harmony import */ var _models_shanghai_state_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/shanghai.state.model */ "./src/app/shanghai/models/shanghai.state.model.ts");
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/statistics.service */ "./src/app/shared/services/statistics.service.ts");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~services/sound.service */ "./src/app/shared/services/sound.service.ts");
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~services/bot.service */ "./src/app/shared/services/bot.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");
/* harmony import */ var _components_number_plate_shanghai_number_plate_shanghai_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~components/number-plate-shanghai/number-plate-shanghai.component */ "./src/app/shared/components/number-plate-shanghai/number-plate-shanghai.component.ts");






















function ShanghaiComponent_app_settings_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r162); const i_r160 = ctx.index; const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r161.settings.setNumber(i_r160); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const numb_r159 = ctx.$implicit;
    const i_r160 = ctx.index;
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r158.settings.numbs[i_r160] ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r159 === 21 ? "B" : numb_r159, " ");
} }
function ShanghaiComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShanghaiComponent_app_settings_1_button_3_Template, 2, 2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r163.settings.randomize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Randomize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r165.settings.toggleNoScore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r166.settings.toggleHalveIt(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Halve It ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Shanghai / Halve It")("playground", ctx_r153.playground)("rules", " Players start by throwing at the number 1 on the board. The object is to hit a single," + "treble and double (in any order). This first player to hit a single, treble and double wins. If no" + "player achieves this on number 1, the play moves to number 2 and so on until someone wins.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r153.settings.getNumbers());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r153.settings.noScore ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r153.settings.halveIt ? "primary" : "");
} }
function ShanghaiComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 11);
} if (rf & 2) {
    const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r154.playground);
} }
function ShanghaiComponent_div_4_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r171 = ctx.$implicit;
    const player_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("field ", ctx_r170.isActiveField(field_r171) ? "active" : "", " ", ctx_r170.isFieldDoneForPlayer(field_r171) ? "" : "highlighted", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r171 === 20 ? "B" : field_r171 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r170.getFieldValue(player_r168, field_r171));
} }
function ShanghaiComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShanghaiComponent_div_4_div_1_div_3_Template, 4, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r168 = ctx.$implicit;
    const i_r169 = ctx.index;
    const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r169 === ctx_r167.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r167.settings.fields);
} }
function ShanghaiComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShanghaiComponent_div_4_div_1_Template, 4, 5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r155.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r155.game.players);
} }
function ShanghaiComponent_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 11);
} if (rf & 2) {
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r156.playground);
} }
function ShanghaiComponent_app_number_plate_shanghai_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-shanghai", 17);
} if (rf & 2) {
    const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r157.playground)("actualIndex", ctx_r157.getActualFieldIndex());
} }
class ShanghaiComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super(application, game, route, dialogService, soundService, botService, statisticsService, 'shanghai');
        this.settings = new _models_shanghai_settings_model__WEBPACK_IMPORTED_MODULE_3__["ShanghaiSettings"]();
    }
    calculatePoints(player, fieldIndex, score) {
        const state = this.getPlayerState(player);
        if (this.isActiveField(fieldIndex)) {
            state.increaseFieldCount(fieldIndex, 1);
            state.increaseFieldScore(fieldIndex, this.multiplier);
            if (this.settings.noScore) {
                player.score += this.multiplier;
            }
            else {
                player.score += score * this.multiplier;
            }
        }
    }
    checkPlayerState(player) {
        // Shanghai rule
        if (this.game.isTheLastThrow()) {
            let multi = 1;
            const fieldIndex = this.settings.fields[this.game.round];
            for (let i = 0; i < 3; i++) {
                const t = player.throwsHistory[player.throwsHistory.length - i - 1];
                if (t.score === _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex)) {
                    multi *= (t.multi + 1);
                }
            }
            if (multi === 1 && this.settings.halveIt) {
                player.score = Math.round(player.score / 2);
            }
            player.setWin(multi === 24);
            if (player.win) {
                this.extraEndingMsg = 'SHANGHAI!!!';
            }
        }
        const gameEnded = (this.game.round === (this.settings.fields.length - 1))
            && this.game.isActualPlayerTheLast() && this.game.isTheLastThrow();
        if (gameEnded) {
            this.game.players.forEach(p => p.setWin(this.game.isTheBestPlayer(p)));
        }
        else if (this.game.isTheLastThrow()) {
            this.game.nextPlayer();
        }
    }
    getFieldValue(player, fieldIndex) {
        const fieldCount = this.getPlayerState(player).getFieldCount(fieldIndex);
        if (fieldCount === 0) {
            return '○○○';
        }
        else {
            let str = '' + this.getPlayerState(player).getFieldScore(fieldIndex) * _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex);
            for (let i = 0; i < fieldCount; i++) {
                str += '●';
            }
            for (let i = fieldCount; i < 3; i++) {
                str += '○';
            }
            return str;
        }
    }
    customReset() {
        this.game.players.forEach(player => player.state = new _models_shanghai_state_model__WEBPACK_IMPORTED_MODULE_4__["ShanghaiState"]());
    }
    customSettingsValidation() {
        return this.settings.fields.length > 0;
    }
    isActiveField(fieldIndex) {
        return this.settings.fields[this.game.round] === fieldIndex;
    }
    isFieldDoneForPlayer(fieldIndex) {
        return this.settings.fields.indexOf(fieldIndex) < this.game.round;
    }
    isFieldEnabled(fieldIndex) {
        return this.settings.fields.indexOf(fieldIndex) === this.game.round;
    }
    getActualFieldIndex() {
        return this.settings.fields[this.game.round];
    }
    isPrimaryField(fieldIndex) {
        return this.isFieldEnabled(fieldIndex);
    }
    getTheFinalResult() {
        let winners = this.game.players.filter(p => p.win);
        if (!winners.length) {
            return [];
        }
        let max = winners[0].score;
        winners.forEach(p => {
            max = p.score > max ? p.score : max;
        });
        winners = winners.filter(p => p.score === max).map(p => p.clone());
        const losers = this.game.players.filter(p => !winners.some(w => w.id === p.id)).map(p => {
            const c = p.clone();
            c.win = false;
            return c;
        });
        return [...winners, ...losers];
    }
    decoratePlayerStat(player) {
        return player.name + _services_statistics_service__WEBPACK_IMPORTED_MODULE_5__["STAT_NAME_SEPARATOR"] + player.score + ((player.win && this.extraEndingMsg) ? ('/s') : '');
    }
    getGameConfig() {
        return this.settings.fields.length + ',' + (this.settings.halveIt ? '1' : '0');
    }
}
ShanghaiComponent.ɵfac = function ShanghaiComponent_Factory(t) { return new (t || ShanghaiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_10__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_11__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_5__["StatisticsService"])); };
ShanghaiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShanghaiComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground", "actualIndex", 4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "click"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], [3, "playground"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player"], [1, "field-set"], [1, "small"], [3, "playground", "actualIndex"]], template: function ShanghaiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShanghaiComponent_app_settings_1_Template, 11, 6, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShanghaiComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShanghaiComponent_div_4_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShanghaiComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ShanghaiComponent_app_number_plate_shanghai_6_Template, 1, 2, "app-number-plate-shanghai", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_17__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__["NumberPlateComponent"], _components_number_plate_shanghai_number_plate_shanghai_component__WEBPACK_IMPORTED_MODULE_19__["NumberPlateShanghaiComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShanghaiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './shanghai.component.html',
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationStateService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_10__["SoundService"] }, { type: _services_bot_service__WEBPACK_IMPORTED_MODULE_11__["BotService"] }, { type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_5__["StatisticsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shanghai/shanghai.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shanghai/shanghai.module.ts ***!
  \*********************************************/
/*! exports provided: ShanghaiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShanghaiModule", function() { return ShanghaiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shanghai_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shanghai.component */ "./src/app/shanghai/shanghai.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






class ShanghaiModule {
}
ShanghaiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShanghaiModule });
ShanghaiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShanghaiModule_Factory(t) { return new (t || ShanghaiModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: '', component: _shanghai_component__WEBPACK_IMPORTED_MODULE_2__["ShanghaiComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShanghaiModule, { declarations: [_shanghai_component__WEBPACK_IMPORTED_MODULE_2__["ShanghaiComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShanghaiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: '', component: _shanghai_component__WEBPACK_IMPORTED_MODULE_2__["ShanghaiComponent"] }
                    ])
                ],
                declarations: [_shanghai_component__WEBPACK_IMPORTED_MODULE_2__["ShanghaiComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






function ConfirmDialogComponent_mat_dialog_content_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.data.content);
} }
class ConfirmDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    cancel() {
        this.dialogRef.close(false);
    }
    confirm() {
        this.dialogRef.close(true);
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["ng-component"]], decls: 10, vars: 4, consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], ["class", "body-2", 4, "ngIf"], ["mat-raised-button", "", 3, "color", "click"], [1, "body-2"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ConfirmDialogComponent_mat_dialog_content_4_Template, 3, 1, "mat-dialog-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_6_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_8_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.data.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "secondary");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"]], styles: [".dialog-container[_ngcontent-%COMP%] {\n  width: 50vw;\n  text-align: center;\n}\n.dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvRDpcXERldmVsb3BtZW50XFxkYXJ0cy1zY29yZWJvYXJkLW5nL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGNvbmZpcm0tZGlhbG9nXFxjb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxtQkFBQTtBQ0FKO0FER0U7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctY29udGFpbmVyIHtcclxuICB3aWR0aDogNTB2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5zdWJ0aXRsZS0xIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgbWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICBtYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xyXG4gIH1cclxufVxyXG4iLCIuZGlhbG9nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MHZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGlhbG9nLWNvbnRhaW5lciAuc3VidGl0bGUtMSB7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfirmDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: 'confirm-dialog.component.html',
                styleUrls: ['confirm-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/dialog/dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/dialog/dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");







function DialogComponent_mat_dialog_content_4_div_3_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DialogComponent_mat_dialog_content_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DialogComponent_mat_dialog_content_4_div_3_mat_icon_3_Template, 2, 0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("winner", player_r5.win);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", i_r6 + 1, ". ", player_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", player_r5.win);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](player_r5.score);
} }
function DialogComponent_mat_dialog_content_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DialogComponent_mat_dialog_content_4_div_3_Template, 6, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.data.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.data.players);
} }
class DialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    close() {
        this.dialogRef.close();
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["ng-component"]], decls: 8, vars: 4, consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], ["class", "body-2", 4, "ngIf"], ["mat-raised-button", "", 3, "mat-dialog-close", "color"], [1, "body-2"], ["class", "score-line", 3, "winner", 4, "ngFor", "ngForOf"], [1, "score-line"], ["color", "warn", 4, "ngIf"], ["color", "warn"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DialogComponent_mat_dialog_content_4_Template, 4, 2, "mat-dialog-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.data.content || !!ctx.data.players.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true)("color", "primary");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: [".dialog-container[_ngcontent-%COMP%] {\n  width: 70vw;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-size: 50px;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   .score-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n}\n.dialog-container[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 30px;\n  padding: 0;\n  margin: 0;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxkaWFsb2dcXGRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FKO0FER0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNESjtBREtFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDSEo7QURNRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDSko7QURPRTtFQUNFLG1CQUFBO0FDTEo7QURRRTtFQUNFLDZCQUFBO0VBQ0Esc0JBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDcwdnc7XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5zdWJ0aXRsZS0xIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLnNjb3JlLWxpbmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5wbGF5ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBtYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIG1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XHJcbiAgfVxyXG59XHJcbiIsIi5kaWFsb2ctY29udGFpbmVyIHtcbiAgd2lkdGg6IDcwdnc7XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtaWNvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5kaWFsb2ctY29udGFpbmVyIC5zdWJ0aXRsZS0xIHtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5kaWFsb2ctY29udGFpbmVyIC5zY29yZS1saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmRpYWxvZy1jb250YWluZXIgLnBsYXllciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMzBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: 'dialog.component.html',
                styleUrls: ['dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/game-history-dialog/game-history-dialog.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/game-history-dialog/game-history-dialog.component.ts ***!
  \****************************************************************************************/
/*! exports provided: GameHistoryDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameHistoryDialogComponent", function() { return GameHistoryDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~services/statistics.service */ "./src/app/shared/services/statistics.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








function GameHistoryDialogComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stat_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 7, stat_r12.s, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 10, ctx_r11.getDuration(stat_r12), "mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r12.g);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r12.c);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r12.r + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.getPlayers(stat_r12.w));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.getPlayers(stat_r12.l));
} }
class GameHistoryDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        data.statistics.sort((a, b) => new Date(b.s).getTime() - new Date(a.s).getTime());
    }
    getDuration(stat) {
        return new Date(new Date(stat.f).getTime() - new Date(stat.s).getTime());
    }
    getPlayers(players) {
        return players.map(p => {
            const pna = p.split(_services_statistics_service__WEBPACK_IMPORTED_MODULE_2__["STAT_NAME_SEPARATOR"]);
            let result = pna[0];
            if (pna.length === 2) {
                result += '(' + pna[1] + ')';
            }
            return result;
        });
    }
    close() {
        this.dialogRef.close();
    }
    getAppVersion() {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appVersion ? _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appVersion : '';
    }
}
GameHistoryDialogComponent.ɵfac = function GameHistoryDialogComponent_Factory(t) { return new (t || GameHistoryDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
GameHistoryDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameHistoryDialogComponent, selectors: [["ng-component"]], decls: 27, vars: 4, consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], [1, "body-2"], ["cellpadding", "0", "cellspacing", "0", 1, "statistics-table"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "mat-dialog-close", "color"]], template: function GameHistoryDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-dialog-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Round");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Winner(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Loser(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, GameHistoryDialogComponent_tr_23_Template, 17, 13, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("v", ctx.getAppVersion(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.statistics);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true)("color", "primary");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: space-between;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n.dialog-container[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%] {\n  height: 85vh;\n  max-height: unset !important;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 0 1rem 0;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.2rem;\n  font-weight: normal;\n  font-size: 13px;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS1oaXN0b3J5LWRpYWxvZy9EOlxcRGV2ZWxvcG1lbnRcXGRhcnRzLXNjb3JlYm9hcmQtbmcvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZ2FtZS1oaXN0b3J5LWRpYWxvZ1xcZ2FtZS1oaXN0b3J5LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS1oaXN0b3J5LWRpYWxvZy9nYW1lLWhpc3RvcnktZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0RKO0FESUU7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0FDRko7QURLRTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtBQ0hKO0FETUU7RUFDRSxrQkFBQTtBQ0pKO0FETUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNKTjtBRE1NO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDSlI7QURPTTtFQUNFLGdCQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9nYW1lLWhpc3RvcnktZGlhbG9nL2dhbWUtaGlzdG9yeS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWNvbnRhaW5lciB7XHJcblxyXG4gIC5zdWJ0aXRsZS0xIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIG1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XHJcbiAgfVxyXG5cclxuICAubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogODV2aDtcclxuICAgIG1heC1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBtYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxuICAgIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuXHJcbiAgICAgIHRoLCB0ZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGg6Zmlyc3QtY2hpbGQsIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5kaWFsb2ctY29udGFpbmVyIC5zdWJ0aXRsZS0xIHtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XG59XG4uZGlhbG9nLWNvbnRhaW5lciAubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgaGVpZ2h0OiA4NXZoO1xuICBtYXgtaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAwIDFyZW0gMDtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctY29udGVudCB0YWJsZSB0aCwgLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHRhYmxlIHRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctY29udGVudCB0YWJsZSB0aDpmaXJzdC1jaGlsZCwgLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameHistoryDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: 'game-history-dialog.component.html',
                styleUrls: ['game-history-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/game-statistics-dialog/game-statistics-dialog.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/game-statistics-dialog/game-statistics-dialog.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: GameStatisticsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameStatisticsDialogComponent", function() { return GameStatisticsDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






function GameStatisticsDialogComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stat_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r10.n);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r10.w);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r10.l);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r10.l + stat_r10.w);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r9.getRatio(stat_r10), " %");
} }
class GameStatisticsDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        data.statistics.sort((a, b) => this.getRatio(b) - this.getRatio(a));
    }
    getRatio(stat) {
        return Math.round(stat.w / (stat.w + stat.l) * 100);
    }
    close() {
        this.dialogRef.close();
    }
}
GameStatisticsDialogComponent.ɵfac = function GameStatisticsDialogComponent_Factory(t) { return new (t || GameStatisticsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
GameStatisticsDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameStatisticsDialogComponent, selectors: [["ng-component"]], decls: 21, vars: 3, consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], [1, "body-2"], ["cellpadding", "0", "cellspacing", "0", 1, "statistics-table"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "mat-dialog-close", "color"]], template: function GameStatisticsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-dialog-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Wins");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Loses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, GameStatisticsDialogComponent_tr_17_Template, 11, 5, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.statistics);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true)("color", "primary");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: [".dialog-container[_ngcontent-%COMP%] {\n  width: 73vw;\n}\n.dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  height: 64vh;\n  overflow-y: scroll;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 0 1rem 0;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.2rem;\n  font-weight: normal;\n  font-size: 13px;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS1zdGF0aXN0aWNzLWRpYWxvZy9EOlxcRGV2ZWxvcG1lbnRcXGRhcnRzLXNjb3JlYm9hcmQtbmcvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZ2FtZS1zdGF0aXN0aWNzLWRpYWxvZ1xcZ2FtZS1zdGF0aXN0aWNzLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS1zdGF0aXN0aWNzLWRpYWxvZy9nYW1lLXN0YXRpc3RpY3MtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLDZCQUFBO0VBQ0Esc0JBQUE7QUNBSjtBREdFO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0FDRko7QURJSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0ZOO0FESU07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNGUjtBREtNO0VBQ0UsZ0JBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2dhbWUtc3RhdGlzdGljcy1kaWFsb2cvZ2FtZS1zdGF0aXN0aWNzLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctY29udGFpbmVyIHtcclxuICB3aWR0aDogNzN2dztcclxuXHJcbiAgLnN1YnRpdGxlLTEge1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICBtYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgbWF0LWRpYWxvZy1jb250ZW50IHtcclxuXHJcbiAgICBoZWlnaHQ6IDY0dmg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG5cclxuICAgICAgdGgsIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aDpmaXJzdC1jaGlsZCwgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmRpYWxvZy1jb250YWluZXIge1xuICB3aWR0aDogNzN2dztcbn1cbi5kaWFsb2ctY29udGFpbmVyIC5zdWJ0aXRsZS0xIHtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHtcbiAgaGVpZ2h0OiA2NHZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWNvbnRlbnQgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDAgMXJlbSAwO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHRhYmxlIHRoLCAuZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWNvbnRlbnQgdGFibGUgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHRhYmxlIHRoOmZpcnN0LWNoaWxkLCAuZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWNvbnRlbnQgdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameStatisticsDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: 'game-statistics-dialog.component.html',
                styleUrls: ['game-statistics-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/game-toolbar/game-toolbar.component.ts ***!
  \**************************************************************************/
/*! exports provided: GameToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameToolbarComponent", function() { return GameToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");







class GameToolbarComponent {
    constructor(route, application, dialogService) {
        this.route = route;
        this.application = application;
        this.dialogService = dialogService;
    }
    quit() {
        this.showConfirmation('Are you sure you want to navigate away from this page?', () => {
            this.route.navigate(['/']);
            this.playground.game.resetScore();
            this.playground.multiplier = 1;
            this.playground.extraEndingMsg = '';
        });
    }
    newGame() {
        this.showConfirmation('Are you sure you want to start a new game?', () => {
            this.playground.newGame(true);
        });
    }
    showSettings() {
        this.showConfirmation('Are you sure you want to navigate to the settings page?', () => {
            this.playground.reset();
            this.playground.settingsOpen = true;
        });
    }
    undo() {
        this.playground.undo();
    }
    getInfo() {
        return this.info || this.info === 0 ? this.info : this.getRound();
    }
    showConfirmation(content, callback) {
        if (this.playground.gameHistory.length) {
            this.dialogService.openConfirmDialog('Confirmation', content)
                .afterClosed().subscribe(data => {
                if (data) {
                    callback();
                }
            });
        }
        else {
            callback();
        }
    }
    getRound() {
        const round = this.playground.game.round;
        return this.reversRound ? (this.reversRound - round) : (round + 1);
    }
}
GameToolbarComponent.ɵfac = function GameToolbarComponent_Factory(t) { return new (t || GameToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"])); };
GameToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameToolbarComponent, selectors: [["app-game-toolbar"]], inputs: { playground: "playground", reversRound: "reversRound", info: "info" }, decls: 16, vars: 3, consts: [[1, "toolbar"], ["mat-raised-button", "", 3, "click"], [1, "round-info"], [1, "theme-chooser"], ["mat-icon-button", "", "color", "primary", 3, "click"]], template: function GameToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_1_listener() { return ctx.newGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_4_listener() { return ctx.undo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "undo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_10_listener() { return ctx.quit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_13_listener() { return ctx.showSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "build");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getInfo(), "\n");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".toolbar[_ngcontent-%COMP%] {\n  display: flex;\n}\n.toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 2px 2px 0 2px;\n  flex: 1;\n  height: 60px;\n}\n.round-info[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 50px;\n  left: 0;\n  font-size: 10em;\n  opacity: 0.1;\n  width: 30vw;\n  line-height: 150px;\n  text-align: center;\n}\n.round-info.detailed[_ngcontent-%COMP%] {\n  width: 30vw;\n}\n.theme-chooser[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10b29sYmFyL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxnYW1lLXRvb2xiYXJcXGdhbWUtdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10b29sYmFyL2dhbWUtdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBRENFO0VBQ0UscUJBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQ0NKO0FER0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FERUU7RUFDRSxXQUFBO0FDQUo7QURJQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2dhbWUtdG9vbGJhci9nYW1lLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMnB4IDJweCAwIDJweDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucm91bmQtaW5mbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNTBweDtcclxuICBsZWZ0OiAwO1xyXG4gIGZvbnQtc2l6ZTogMTBlbTtcclxuICBvcGFjaXR5OiAwLjE7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgbGluZS1oZWlnaHQ6IDE1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgJi5kZXRhaWxlZCB7XHJcbiAgICB3aWR0aDogMzB2dztcclxuICB9XHJcbn1cclxuXHJcbi50aGVtZS1jaG9vc2VyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDc1cHg7XHJcbn1cclxuXHJcbiIsIi50b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi50b29sYmFyIGJ1dHRvbiB7XG4gIG1hcmdpbjogMnB4IDJweCAwIDJweDtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ucm91bmQtaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MHB4O1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDEwZW07XG4gIG9wYWNpdHk6IDAuMTtcbiAgd2lkdGg6IDMwdnc7XG4gIGxpbmUtaGVpZ2h0OiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJvdW5kLWluZm8uZGV0YWlsZWQge1xuICB3aWR0aDogMzB2dztcbn1cblxuLnRoZW1lLWNob29zZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNzVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-toolbar',
                templateUrl: './game-toolbar.component.html',
                styleUrls: ['./game-toolbar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationStateService"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] }]; }, { playground: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], reversRound: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], info: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/game-type-statistics-dialog/game-type-statistics-dialog.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/shared/components/game-type-statistics-dialog/game-type-statistics-dialog.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: GameTypeStatisticsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameTypeStatisticsDialogComponent", function() { return GameTypeStatisticsDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






function GameTypeStatisticsDialogComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stat_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r14.count);
} }
class GameTypeStatisticsDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        data.statistics.sort((a, b) => b.count - a.count);
    }
    close() {
        this.dialogRef.close();
    }
}
GameTypeStatisticsDialogComponent.ɵfac = function GameTypeStatisticsDialogComponent_Factory(t) { return new (t || GameTypeStatisticsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
GameTypeStatisticsDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameTypeStatisticsDialogComponent, selectors: [["ng-component"]], decls: 15, vars: 3, consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], [1, "body-2"], ["cellpadding", "0", "cellspacing", "0", 1, "statistics-table"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "mat-dialog-close", "color"]], template: function GameTypeStatisticsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Most Popular Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-dialog-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Game title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, GameTypeStatisticsDialogComponent_tr_11_Template, 5, 2, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.statistics);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true)("color", "primary");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: [".dialog-container[_ngcontent-%COMP%] {\n  width: 73vw;\n}\n.dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  height: 64vh;\n  overflow-y: scroll;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 0 1rem 0;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.2rem;\n  font-weight: normal;\n  font-size: 13px;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10eXBlLXN0YXRpc3RpY3MtZGlhbG9nL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxnYW1lLXR5cGUtc3RhdGlzdGljcy1kaWFsb2dcXGdhbWUtdHlwZS1zdGF0aXN0aWNzLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10eXBlLXN0YXRpc3RpY3MtZGlhbG9nL2dhbWUtdHlwZS1zdGF0aXN0aWNzLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBRENFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0FDQUo7QURHRTtFQUVFLFlBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FESUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNGTjtBRElNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRlI7QURLTTtFQUNFLGdCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9nYW1lLXR5cGUtc3RhdGlzdGljcy1kaWFsb2cvZ2FtZS10eXBlLXN0YXRpc3RpY3MtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1jb250YWluZXIge1xyXG4gIHdpZHRoOiA3M3Z3O1xyXG5cclxuICAuc3VidGl0bGUtMSB7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIG1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XHJcbiAgfVxyXG5cclxuICBtYXQtZGlhbG9nLWNvbnRlbnQge1xyXG5cclxuICAgIGhlaWdodDogNjR2aDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcblxyXG4gICAgICB0aCwgdGQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoOmZpcnN0LWNoaWxkLCB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuZGlhbG9nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA3M3Z3O1xufVxuLmRpYWxvZy1jb250YWluZXIgLnN1YnRpdGxlLTEge1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWNvbnRlbnQge1xuICBoZWlnaHQ6IDY0dmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctY29udGVudCB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMCAxcmVtIDA7XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWNvbnRlbnQgdGFibGUgdGgsIC5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctY29udGVudCB0YWJsZSB0ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWNvbnRlbnQgdGFibGUgdGg6Zmlyc3QtY2hpbGQsIC5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctY29udGVudCB0YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameTypeStatisticsDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: 'game-type-statistics-dialog.component.html',
                styleUrls: ['game-type-statistics-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/menu/menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/menu/menu.component.ts ***!
  \**********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_game_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app-game-types */ "./src/app/app-game-types.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~services/statistics.service */ "./src/app/shared/services/statistics.service.ts");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");










const _c0 = function (a0) { return [a0]; };
function MenuComponent_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const g_r49 = ctx.$implicit;
    const i_r50 = ctx.index;
    const k_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("gameSelectBox ", "menu-button-" + k_r47 + "" + i_r50, " ", g_r49.data.bot ? "hasBot" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "/" + g_r49.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r49.data.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r49.data.name);
} }
function MenuComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_div_4_button_1_Template, 5, 9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const k_r47 = ctx.$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r46.getGameList().slice(k_r47 * 3, k_r47 * 3 + 3));
} }
const _c1 = function () { return [0, 1, 2, 3]; };
class MenuComponent {
    constructor(router, dialog, statisticsService, applicationStateService) {
        this.router = router;
        this.dialog = dialog;
        this.statisticsService = statisticsService;
        this.applicationStateService = applicationStateService;
    }
    randomGame() {
        const random = Math.floor(Math.random() * _app_game_types__WEBPACK_IMPORTED_MODULE_1__["routes"].length);
        this.router.navigate(['/' + _app_game_types__WEBPACK_IMPORTED_MODULE_1__["routes"][random].path]);
    }
    getGameList() {
        return _app_game_types__WEBPACK_IMPORTED_MODULE_1__["routes"].filter(r => !!r.data);
    }
    openGameTypeStatistics() {
        this.dialog.openGameTypeStatistics(this.statisticsService.getGameTypeStatistics());
        // this.statisticsService.printStatistics();
    }
    openGameStatistics() {
        this.dialog.openGameHistory(this.statisticsService.getGameStatistics());
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_4__["StatisticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["ng-component"]], decls: 12, vars: 4, consts: [["id", "menu_title"], [3, "click"], ["id", "menu"], ["class", "button-line", 4, "ngFor", "ngForOf"], [1, "version"], ["mat-icon-button", "", 3, "color", "click"], [1, "button-line"], ["mat-raised-button", "", 3, "routerLink", "class", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "routerLink"], [1, "title"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_h1_click_1_listener() { return ctx.randomGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select Game!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MenuComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_6_listener() { return ctx.openGameTypeStatistics(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_9_listener() { return ctx.openGameStatistics(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "history");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["#menu_title[_ngcontent-%COMP%] {\n  padding: 50px;\n  text-align: center;\n  cursor: pointer;\n}\n\n#menu[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n\n#menu[_ngcontent-%COMP%]   .button-line[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n#menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%] {\n  height: 180px;\n  width: 180px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0;\n  padding-top: 15px;\n}\n\n#menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  width: 60px;\n  height: 60px;\n}\n\n#menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  white-space: pre;\n  text-align: left;\n  padding: 10px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  line-height: 25px;\n  letter-spacing: 1px;\n  font-weight: normal;\n  width: calc(100% - 20px);\n}\n\n#menu[_ngcontent-%COMP%]   .hasBot[_ngcontent-%COMP%]:after {\n  content: \"B\";\n  position: relative;\n  top: 66px;\n  right: -44px;\n  margin: -4px;\n}\n\n.version[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS9EOlxcRGV2ZWxvcG1lbnRcXGRhcnRzLXNjb3JlYm9hcmQtbmcvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0VKOztBRENFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NOOztBREVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FDQU47O0FESUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21lbnVfdGl0bGUge1xuICBwYWRkaW5nOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNtZW51IHtcbiAgd2lkdGg6IDEwMHZ3O1xuXG4gIC5idXR0b24tbGluZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuZ2FtZVNlbGVjdEJveCB7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG5cbiAgICBtYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgfVxuICB9XG5cbiAgLmhhc0JvdDphZnRlciB7XG4gICAgY29udGVudDogJ0InO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDY2cHg7XG4gICAgcmlnaHQ6IC00NHB4O1xuICAgIG1hcmdpbjogLTRweDtcbiAgfVxufVxuLnZlcnNpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDVweDtcbn1cbiIsIiNtZW51X3RpdGxlIHtcbiAgcGFkZGluZzogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNtZW51IHtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuI21lbnUgLmJ1dHRvbi1saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jbWVudSAuZ2FtZVNlbGVjdEJveCB7XG4gIGhlaWdodDogMTgwcHg7XG4gIHdpZHRoOiAxODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuI21lbnUgLmdhbWVTZWxlY3RCb3ggbWF0LWljb24ge1xuICBmb250LXNpemU6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4jbWVudSAuZ2FtZVNlbGVjdEJveCAudGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xufVxuI21lbnUgLmhhc0JvdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiQlwiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNjZweDtcbiAgcmlnaHQ6IC00NHB4O1xuICBtYXJnaW46IC00cHg7XG59XG5cbi52ZXJzaW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiA1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] }, { type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_4__["StatisticsService"] }, { type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/number-plate-shanghai/number-plate-shanghai.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/number-plate-shanghai/number-plate-shanghai.component.ts ***!
  \********************************************************************************************/
/*! exports provided: NumberPlateShanghaiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberPlateShanghaiComponent", function() { return NumberPlateShanghaiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






function NumberPlateShanghaiComponent_div_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateShanghaiComponent_div_2_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const j_r55 = ctx.$implicit; const k_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.throwNumber(j_r55 + k_r53 * 3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r55 = ctx.$implicit;
    const k_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", j_r55 + k_r53 * 3, " ");
} }
const _c0 = function () { return [1, 2, 3]; };
function NumberPlateShanghaiComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NumberPlateShanghaiComponent_div_2_button_1_Template, 2, 1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return [0, 1, 2]; };
class NumberPlateShanghaiComponent {
    constructor(game, application) {
        this.game = game;
        this.application = application;
    }
    next() {
        this.playground.skip();
    }
    win() {
        const score = this.actualIndex + 1;
        this.playground.throwNumber([score, score]);
        this.playground.doublePoint();
        this.playground.throwNumber([score, score]);
        this.playground.triplePoint();
        this.playground.throwNumber([score, score]);
    }
    throwNumber(count) {
        const score = this.actualIndex + 1;
        switch (count) {
            case 1:
                this.playground.throwNumber([score, score]);
                this.playground.skip();
                break;
            case 2:
                this.playground.throwNumber([score, score]);
                this.playground.throwNumber([score, score]);
                this.playground.skip();
                break;
            case 3:
                this.playground.throwNumber([score, score]);
                this.playground.throwNumber([score, score]);
                this.playground.throwNumber([score, score]);
                break;
            case 4:
                this.playground.throwNumber([score, score]);
                this.playground.triplePoint();
                this.playground.throwNumber([score, score]);
                this.playground.skip();
                break;
            case 5:
                this.playground.doublePoint();
                this.playground.throwNumber([score, score]);
                this.playground.triplePoint();
                this.playground.throwNumber([score, score]);
                this.playground.skip();
                break;
            case 6:
                this.playground.triplePoint();
                this.playground.throwNumber([score, score]);
                this.playground.triplePoint();
                this.playground.throwNumber([score, score]);
                this.playground.skip();
                break;
            case 7:
                this.playground.throwNumber([score, score]);
                this.playground.triplePoint();
                this.playground.throwNumber([score, score]);
                this.playground.triplePoint();
                this.playground.throwNumber([score, score]);
                break;
            case 8:
                this.playground.doublePoint();
                this.playground.throwNumber([score, score]);
                this.playground.triplePoint();
                this.playground.throwNumber([score, score]);
                this.playground.triplePoint();
                this.playground.throwNumber([score, score]);
                break;
            case 9:
                this.playground.triplePoint();
                this.playground.throwNumber([score, score]);
                this.playground.triplePoint();
                this.playground.throwNumber([score, score]);
                this.playground.triplePoint();
                this.playground.throwNumber([score, score]);
                break;
        }
    }
}
NumberPlateShanghaiComponent.ɵfac = function NumberPlateShanghaiComponent_Factory(t) { return new (t || NumberPlateShanghaiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationStateService"])); };
NumberPlateShanghaiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NumberPlateShanghaiComponent, selectors: [["app-number-plate-shanghai"]], inputs: { actualIndex: "actualIndex", playground: "playground" }, decls: 8, vars: 2, consts: [[1, "side-right"], [1, "numbers"], ["class", "button-line", 4, "ngFor", "ngForOf"], [1, "button-line"], ["mat-raised-button", "", 1, "number", "next", 3, "click"], ["mat-raised-button", "", 1, "number", 3, "click"], ["mat-raised-button", "", "class", "number", 3, "click", 4, "ngFor", "ngForOf"]], template: function NumberPlateShanghaiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NumberPlateShanghaiComponent_div_2_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateShanghaiComponent_Template_button_click_4_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateShanghaiComponent_Template_button_click_6_listener() { return ctx.win(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Shanghai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".side-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: row wrap;\n  height: 90vh;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  margin: 0.1vw;\n  font-size: calc(11px + 0.8vw + 0.8vh);\n  height: 20vw;\n  width: 20vw;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 5px;\n  font-size: 30px;\n}\n.side-right[_ngcontent-%COMP%]   .number.next[_ngcontent-%COMP%] {\n  width: 40vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlLXNoYW5naGFpL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxudW1iZXItcGxhdGUtc2hhbmdoYWlcXG51bWJlci1wbGF0ZS1zaGFuZ2hhaS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlLXNoYW5naGFpL251bWJlci1wbGF0ZS1zaGFuZ2hhaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQUY7QURFRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUo7QURFSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDQU47QURHSTtFQUNFLFdBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL251bWJlci1wbGF0ZS1zaGFuZ2hhaS9udW1iZXItcGxhdGUtc2hhbmdoYWkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZS1yaWdodCB7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGhlaWdodDogOTB2aDtcclxuXHJcbiAgLm51bWJlciB7XHJcbiAgICBtYXJnaW46IDAuMXZ3O1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDExcHggKyAwLjh2dyArIDAuOHZoKTtcclxuICAgIGhlaWdodDogMjB2dztcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDEwcHg7XHJcbiAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYubmV4dCB7XHJcbiAgICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuc2lkZS1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBoZWlnaHQ6IDkwdmg7XG59XG4uc2lkZS1yaWdodCAubnVtYmVyIHtcbiAgbWFyZ2luOiAwLjF2dztcbiAgZm9udC1zaXplOiBjYWxjKDExcHggKyAwLjh2dyArIDAuOHZoKTtcbiAgaGVpZ2h0OiAyMHZ3O1xuICB3aWR0aDogMjB2dztcbn1cbi5zaWRlLXJpZ2h0IC5udW1iZXIgbWF0LWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uc2lkZS1yaWdodCAubnVtYmVyLm5leHQge1xuICB3aWR0aDogNDB2dztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberPlateShanghaiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-number-plate-shanghai',
                templateUrl: './number-plate-shanghai.component.html',
                styleUrls: ['./number-plate-shanghai.component.scss']
            }]
    }], function () { return [{ type: _services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }, { type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationStateService"] }]; }, { actualIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], playground: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NumberPlateVisualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberPlateVisualComponent", function() { return NumberPlateVisualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~models/playground.model */ "./src/app/shared/models/playground.model.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









const ARC_WIDTH = 0.295;
class NumberPlateVisualComponent {
    constructor(game, application) {
        this.game = game;
        this.application = application;
        this.numbers = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
        this.ngUnsubscribeHasChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.drawTable();
        this.playground.hasChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribeHasChange))
            .subscribe(flag => this.drawTable());
    }
    ngOnDestroy() {
        this.ngUnsubscribeHasChange.next();
        this.ngUnsubscribeHasChange.complete();
    }
    next() {
        this.playground.skip();
        this.drawTable();
    }
    drawTable() {
        d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#darts-table-plate svg').remove();
        const svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#darts-table-plate').append('svg').attr('width', '100%')
            .attr('height', '100%').attr('viewBox', '0 0 330 330');
        const numbers = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
        const bullIndex = this.getFieldIndex(25);
        this.drawArc(svg, 0, 165, 0, Math.PI * 4, 'field-inactive', 0, -1, 1);
        this.drawArc(svg, 0, 19, 0, Math.PI * 4, 'field-color-m', 25, bullIndex, 1);
        this.drawArc(svg, 20, 49, 0, Math.PI * 4, 'field-color', 25, bullIndex, 1);
        for (let i = 0; i < numbers.length; i++) {
            const fieldIndex = this.getFieldIndex(numbers[i]);
            const colorSlice = 'field-color';
            const colorSliceMulti = 'field-color-m';
            const startAngle = i * Math.PI / 10 - ARC_WIDTH / 2;
            const endAngle = startAngle + ARC_WIDTH;
            // this.drawArc(svg, 30, 74, startAngle, endAngle, colorSlice, numbers[i], fieldIndex, 1);
            this.drawArc(svg, 50, 84, startAngle, endAngle, colorSliceMulti, numbers[i], fieldIndex, 3);
            this.drawArc(svg, 85, 119, startAngle, endAngle, colorSlice, numbers[i], fieldIndex, 1);
            this.drawArc(svg, 120, 144, startAngle, endAngle, colorSliceMulti, numbers[i], fieldIndex, 2);
            this.drawText(svg, numbers[i] + '', i * 18 - 2, 170, 3, numbers[i], fieldIndex, 1, 'number-text' + ' ' + this.getNumberColor(fieldIndex));
            if (!!this.playground.getFieldNote(fieldIndex)) {
                this.drawText(svg, this.playground.getFieldNote(fieldIndex), i * 18 - 2, 170, 14, numbers[i], fieldIndex, 1, 'field-note');
            }
        }
        this.drawText(svg, '25', 0, 165, 127, 25, bullIndex, 1, 'number-text' + ' ' + this.getNumberColor(bullIndex));
        this.drawText(svg, '50', 0, 165, 158.5, 25, bullIndex, 2, 'number-text' + ' ' + this.getNumberColor(bullIndex));
        if (!!this.playground.getFieldNote(bullIndex)) {
            this.drawText(svg, this.playground.getFieldNote(bullIndex), 0, 165, 193, 25, bullIndex, 1, 'field-note');
        }
        this.drawText(svg, '2x', 0, 165, 28, 20, 19, 2, 'number-text smaller' + ' ' + this.getNumberColor(19));
        this.drawText(svg, '1x', 0, 165, 58, 20, 19, 1, 'number-text smaller' + ' ' + this.getNumberColor(19));
        this.drawText(svg, '3x', 0, 165, 92, 20, 19, 3, 'number-text smaller' + ' ' + this.getNumberColor(19));
    }
    getNumberColor(fieldIndex) {
        if (this.playground.isPrimaryField(fieldIndex)) {
            return 'primary';
        }
        else if (this.playground.isSecondaryField(fieldIndex)) {
            return 'accent';
        }
        else if (!this.playground.isFieldEnabled(fieldIndex)) {
            return 'disabled';
        }
        return '';
    }
    isNumberDisabled(fieldIndex) {
        return !this.playground.isFieldEnabled(fieldIndex) && !this.getNumberColor(fieldIndex);
    }
    throwNumber(fieldIndex, multi) {
        if (!this.isNumberDisabled(fieldIndex)) {
            if (multi === 2) {
                this.playground.doublePoint();
            }
            if (multi === 3) {
                this.playground.triplePoint();
            }
            this.playground.throwNumber([this.playground.isFieldEnabled(fieldIndex) ? _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex) : 0,
                _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex)]);
        }
        this.drawTable();
    }
    drawText(svg, text, rotate, x, y, field, fieldIndex, multi, className) {
        svg.append('text')
            .attr('x', x)
            .attr('y', y)
            .attr('dy', '1em')
            .attr('text-anchor', 'middle')
            .attr('transform', 'rotate(' + rotate + ', 165, 165)')
            .attr('class', className)
            .text(text)
            .on('click', () => this.throwNumber(fieldIndex, multi));
    }
    drawArc(svg, innerRadius, outerRadius, startAngle, endAngle, styleClass, field, fieldIndex, multi) {
        svg
            .append('path')
            .attr('transform', 'translate(165, 165)')
            .attr('d', d3__WEBPACK_IMPORTED_MODULE_2__["arc"]()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .startAngle(startAngle)
            .endAngle(endAngle))
            .attr('class', styleClass + ' ' + this.getNumberColor(fieldIndex))
            .on('click', () => this.throwNumber(fieldIndex, multi));
    }
    getFieldIndex(field) {
        return field === 25 ? 20 : field - 1;
    }
}
NumberPlateVisualComponent.ɵfac = function NumberPlateVisualComponent_Factory(t) { return new (t || NumberPlateVisualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationStateService"])); };
NumberPlateVisualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NumberPlateVisualComponent, selectors: [["app-number-plate-visual"]], inputs: { playground: "playground" }, decls: 4, vars: 1, consts: [[1, "side-right_visual"], ["id", "darts-table-plate"], ["mat-raised-button", "", 1, "number", 3, "disabled", "click"]], template: function NumberPlateVisualComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateVisualComponent_Template_button_click_2_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playground.nextEnabled);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: [".side-right_visual {\n  width: 98vw;\n  top: 85px;\n  right: 0;\n  position: absolute;\n}\n.side-right_visual #darts-table-plate {\n  width: 100%;\n}\n.side-right_visual button {\n  margin-right: 15px;\n  width: 120px;\n  height: 100px;\n  position: absolute;\n  right: 0px;\n  top: -70px;\n}\n.side-right_visual .number-text, .side-right_visual .field-note {\n  font-family: sans-serif;\n  font-weight: bold;\n  font-size: 11px;\n}\n.side-right_visual .number-text.disabled, .side-right_visual .field-note.disabled {\n  opacity: 0.3;\n}\n.side-right_visual .number-text.smaller, .side-right_visual .field-note.smaller {\n  font-size: 8px;\n}\n.side-right_visual .field-note {\n  font-size: 6px;\n}\n.side-right_visual path, .side-right_visual text {\n  cursor: pointer;\n}\n.side-right_visual .field-color.disabled, .side-right_visual .field-color-m.disabled {\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlLXZpc3VhbC9EOlxcRGV2ZWxvcG1lbnRcXGRhcnRzLXNjb3JlYm9hcmQtbmcvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbnVtYmVyLXBsYXRlLXZpc3VhbFxcbnVtYmVyLXBsYXRlLXZpc3VhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlLXZpc3VhbC9udW1iZXItcGxhdGUtdmlzdWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0FKO0FER0U7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0RKO0FER0k7RUFDRSxZQUFBO0FDRE47QURJSTtFQUNFLGNBQUE7QUNGTjtBRE1FO0VBQ0UsY0FBQTtBQ0pKO0FET0U7RUFDRSxlQUFBO0FDTEo7QURTSTtFQUNFLFlBQUE7QUNQTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL251bWJlci1wbGF0ZS12aXN1YWwvbnVtYmVyLXBsYXRlLXZpc3VhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlLXJpZ2h0X3Zpc3VhbCB7XHJcbiAgd2lkdGg6IDk4dnc7XHJcbiAgdG9wOiA4NXB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgI2RhcnRzLXRhYmxlLXBsYXRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgdG9wOiAtNzBweDtcclxuICB9XHJcblxyXG4gIC5udW1iZXItdGV4dCwgLmZpZWxkLW5vdGUge1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgfVxyXG5cclxuICAgICYuc21hbGxlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZpZWxkLW5vdGUge1xyXG4gICAgZm9udC1zaXplOiA2cHg7XHJcbiAgfVxyXG5cclxuICBwYXRoLCB0ZXh0IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5maWVsZC1jb2xvciwgLmZpZWxkLWNvbG9yLW0ge1xyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnNpZGUtcmlnaHRfdmlzdWFsIHtcbiAgd2lkdGg6IDk4dnc7XG4gIHRvcDogODVweDtcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5zaWRlLXJpZ2h0X3Zpc3VhbCAjZGFydHMtdGFibGUtcGxhdGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5zaWRlLXJpZ2h0X3Zpc3VhbCBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IC03MHB4O1xufVxuLnNpZGUtcmlnaHRfdmlzdWFsIC5udW1iZXItdGV4dCwgLnNpZGUtcmlnaHRfdmlzdWFsIC5maWVsZC1ub3RlIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDExcHg7XG59XG4uc2lkZS1yaWdodF92aXN1YWwgLm51bWJlci10ZXh0LmRpc2FibGVkLCAuc2lkZS1yaWdodF92aXN1YWwgLmZpZWxkLW5vdGUuZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjM7XG59XG4uc2lkZS1yaWdodF92aXN1YWwgLm51bWJlci10ZXh0LnNtYWxsZXIsIC5zaWRlLXJpZ2h0X3Zpc3VhbCAuZmllbGQtbm90ZS5zbWFsbGVyIHtcbiAgZm9udC1zaXplOiA4cHg7XG59XG4uc2lkZS1yaWdodF92aXN1YWwgLmZpZWxkLW5vdGUge1xuICBmb250LXNpemU6IDZweDtcbn1cbi5zaWRlLXJpZ2h0X3Zpc3VhbCBwYXRoLCAuc2lkZS1yaWdodF92aXN1YWwgdGV4dCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zaWRlLXJpZ2h0X3Zpc3VhbCAuZmllbGQtY29sb3IuZGlzYWJsZWQsIC5zaWRlLXJpZ2h0X3Zpc3VhbCAuZmllbGQtY29sb3ItbS5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNDtcbn0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberPlateVisualComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-number-plate-visual',
                templateUrl: './number-plate-visual.component.html',
                styleUrls: ['./number-plate-visual.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"] }, { type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationStateService"] }]; }, { playground: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/number-plate/number-plate.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/number-plate/number-plate.component.ts ***!
  \**************************************************************************/
/*! exports provided: NumberPlateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberPlateComponent", function() { return NumberPlateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~models/playground.model */ "./src/app/shared/models/playground.model.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");








function NumberPlateComponent_ng_container_1_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.playground.getFieldIcon(i_r19 - 1));
} }
function NumberPlateComponent_ng_container_1_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.playground.getFieldNote(i_r19 - 1));
} }
function NumberPlateComponent_ng_container_1_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.playground.getFieldNoteBottom(i_r19 - 1));
} }
function NumberPlateComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_ng_container_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const i_r19 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.throwNumber(i_r19 - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NumberPlateComponent_ng_container_1_mat_icon_3_Template, 2, 1, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NumberPlateComponent_ng_container_1_p_4_Template, 2, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NumberPlateComponent_ng_container_1_p_5_Template, 2, 1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r19 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r15.getNumberColor(i_r19 - 1))("disabled", ctx_r15.isNumberDisabled(i_r19 - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r19, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.playground.getFieldIcon(i_r19 - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.playground.getFieldNote(i_r19 - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.playground.getFieldNoteBottom(i_r19 - 1));
} }
function NumberPlateComponent_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.playground.getFieldIcon(20));
} }
function NumberPlateComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.playground.getFieldNote(20));
} }
function NumberPlateComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.playground.getFieldNoteBottom(20));
} }
class NumberPlateComponent {
    constructor(game, application) {
        this.game = game;
        this.application = application;
    }
    getNumbers() {
        const numbers = [];
        for (let i = 1; i <= 20; i++) {
            numbers[i - 1] = i;
        }
        return numbers;
    }
    getNumberColor(fieldIndex) {
        if (this.playground.isPrimaryField(fieldIndex)) {
            return 'primary';
        }
        else if (this.playground.isSecondaryField(fieldIndex)) {
            return 'accent';
        }
        return '';
    }
    isNumberDisabled(fieldIndex) {
        return !this.playground.isFieldEnabled(fieldIndex) && !this.getNumberColor(fieldIndex);
    }
    throwNumber(fieldIndex) {
        this.playground.throwNumber([this.playground.isFieldEnabled(fieldIndex) ? _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex) : 0,
            _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex)]);
    }
}
NumberPlateComponent.ɵfac = function NumberPlateComponent_Factory(t) { return new (t || NumberPlateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationStateService"])); };
NumberPlateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NumberPlateComponent, selectors: [["app-number-plate"]], inputs: { playground: "playground" }, decls: 15, vars: 14, consts: [[1, "side-right"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "number", 3, "color", "disabled", "click"], [4, "ngIf"], ["class", "field-note", 4, "ngIf"], ["class", "field-note-bottom", 4, "ngIf"], ["mat-raised-button", "", 1, "number", 3, "disabled", "click"], [1, "field-note"], [1, "field-note-bottom"]], template: function NumberPlateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NumberPlateComponent_ng_container_1_Template, 6, 6, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_2_listener() { return ctx.throwNumber(20); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Bull ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NumberPlateComponent_mat_icon_4_Template, 2, 1, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NumberPlateComponent_p_5_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NumberPlateComponent_p_6_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_7_listener() { return ctx.playground.doublePoint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "2x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_9_listener() { return ctx.playground.triplePoint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "3x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_11_listener() { return ctx.playground.skip(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_13_listener() { return ctx.playground.throwNumber([0, 0]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getNumbers());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.getNumberColor(20))("disabled", ctx.isNumberDisabled(20));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playground.getFieldIcon(20));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playground.getFieldNote(20));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playground.getFieldNoteBottom(20));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.playground.multiplier === 2 ? "primary" : "")("disabled", !ctx.playground.multiEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.playground.multiplier === 3 ? "primary" : "")("disabled", !ctx.playground.multiEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playground.nextEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playground.zeroEnabled);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: [".side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  float: left;\n  margin: 0.1vw;\n  font-size: calc(11px + 0.8vw + 0.8vh);\n  height: 19.4vh;\n  width: 15.3vw;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 5px;\n  font-size: 30px;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .field-note[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 7px;\n  font-size: 12px;\n  width: 13vw;\n  overflow: hidden;\n  word-break: normal;\n  white-space: pre-line;\n  line-height: 16px;\n  text-align: right;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .field-note-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 7px;\n  font-size: 14px;\n  width: 13vw;\n  overflow: hidden;\n  word-break: normal;\n  white-space: pre-line;\n  line-height: 16px;\n  text-align: left;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.side-right.detailed[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  width: 13.7vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxudW1iZXItcGxhdGVcXG51bWJlci1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlL251bWJlci1wbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0FKO0FERUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0FOO0FER0k7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRE47QURJSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGTjtBRE1FO0VBQ0UsWUFBQTtBQ0pKO0FEUUk7RUFDRSxhQUFBO0FDTk4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9udW1iZXItcGxhdGUvbnVtYmVyLXBsYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtcmlnaHQge1xyXG4gIC5udW1iZXIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDAuMXZ3O1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDExcHggKyAwLjh2dyArIDAuOHZoKTtcclxuICAgIGhlaWdodDogMTkuNHZoO1xyXG4gICAgd2lkdGg6IDE1LjN2dztcclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmllbGQtbm90ZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICByaWdodDogN3B4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHdpZHRoOiAxM3Z3O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB3b3JkLWJyZWFrOiBub3JtYWw7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC5maWVsZC1ub3RlLWJvdHRvbSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiA3cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgd2lkdGg6IDEzdnc7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5udW1iZXI6ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuXHJcbiAgJi5kZXRhaWxlZCB7XHJcbiAgICAubnVtYmVyIHtcclxuICAgICAgd2lkdGg6IDEzLjd2dztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnNpZGUtcmlnaHQgLm51bWJlciB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAuMXZ3O1xuICBmb250LXNpemU6IGNhbGMoMTFweCArIDAuOHZ3ICsgMC44dmgpO1xuICBoZWlnaHQ6IDE5LjR2aDtcbiAgd2lkdGg6IDE1LjN2dztcbn1cbi5zaWRlLXJpZ2h0IC5udW1iZXIgbWF0LWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uc2lkZS1yaWdodCAubnVtYmVyIC5maWVsZC1ub3RlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiA3cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDEzdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uc2lkZS1yaWdodCAubnVtYmVyIC5maWVsZC1ub3RlLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA3cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEzdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zaWRlLXJpZ2h0IC5udW1iZXI6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4uc2lkZS1yaWdodC5kZXRhaWxlZCAubnVtYmVyIHtcbiAgd2lkdGg6IDEzLjd2dztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberPlateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-number-plate',
                templateUrl: './number-plate.component.html',
                styleUrls: ['./number-plate.component.scss']
            }]
    }], function () { return [{ type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }, { type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationStateService"] }]; }, { playground: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/player-score/player-score.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/player-score/player-score.component.ts ***!
  \**************************************************************************/
/*! exports provided: PlayerScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerScoreComponent", function() { return PlayerScoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





function PlayerScoreComponent_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "offline_bolt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerScoreComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!ctx_r39.player.getThrowsTotal() ? "0" : ctx_r39.player.getThrowsTotal());
} }
function PlayerScoreComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
} }
function PlayerScoreComponent_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "application.settings.details"]);
} }
function PlayerScoreComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
} }
function PlayerScoreComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r43.player.score);
} }
function PlayerScoreComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Life: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r44.player.life);
} }
function PlayerScoreComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Life: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Score: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r45.player.life, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r45.player.score, " ");
} }
const _c0 = ["*"];
class PlayerScoreComponent {
    constructor(application) {
        this.application = application;
        this.hasContent = true;
        this.scoreDisplayed = true;
        this.lifeDisplayed = false;
        this.highlighted = false;
    }
}
PlayerScoreComponent.ɵfac = function PlayerScoreComponent_Factory(t) { return new (t || PlayerScoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationStateService"])); };
PlayerScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerScoreComponent, selectors: [["app-player-score"]], inputs: { player: "player", hasContent: "hasContent", scoreDisplayed: "scoreDisplayed", lifeDisplayed: "lifeDisplayed", highlighted: "highlighted" }, ngContentSelectors: _c0, decls: 20, vars: 14, consts: [[1, "player_info"], [1, "name"], [4, "ngIf"], [1, "shoots"], [1, "shoot"], ["class", "shoot total", 4, "ngIf"], [1, "clear"], ["class", "line", 4, "ngIf"], ["class", "line-space", 4, "ngIf"], ["class", "score", 4, "ngIf"], [1, "shoot", "total"], [1, "line"], [1, "line-space"], [1, "score"]], template: function PlayerScoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayerScoreComponent_mat_icon_2_Template, 2, 0, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PlayerScoreComponent_div_11_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlayerScoreComponent_div_13_Template, 1, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PlayerScoreComponent_14_Template, 1, 0, undefined, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PlayerScoreComponent_div_15_Template, 1, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PlayerScoreComponent_div_16_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PlayerScoreComponent_div_17_Template, 4, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PlayerScoreComponent_div_18_Template, 7, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("player_info_visual", !ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.highlighted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.player.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!ctx.player.throws[0] ? "-" : ctx.player.throws[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!ctx.player.throws[1] ? "-" : ctx.player.throws[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!ctx.player.throws[2] ? "-" : ctx.player.throws[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scoreDisplayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasContent && ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scoreDisplayed || ctx.lifeDisplayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scoreDisplayed && !ctx.lifeDisplayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.scoreDisplayed && ctx.lifeDisplayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scoreDisplayed && ctx.lifeDisplayed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".player_info {\n  padding: 1vw;\n}\n.player_info.player_info_visual {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.player_info.player_info_visual .name {\n  margin-right: 10px;\n  width: 110px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.player_info.player_info_visual .score {\n  margin-left: 20px;\n  width: 150px;\n  text-align: right;\n}\n.player_info .line {\n  margin: 1vw 0;\n}\n.player_info .line-space {\n  margin: 1.5vw 0;\n}\n.player_info .small {\n  font-size: calc(0.6vw + 0.5vh);\n  font-weight: bold;\n}\n.player_info .name {\n  font-size: calc(5px + 1vw);\n  display: flex;\n  align-items: center;\n}\n.player_info .name mat-icon {\n  margin-right: 10px;\n  font-size: calc(20px + 1vw);\n}\n.player_info .shoots {\n  display: flex;\n  justify-content: flex-end;\n}\n.player_info .shoots .shoot {\n  margin: 0.1vw;\n  border-radius: 0.5vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 3vw;\n  height: 3vw;\n  font-size: calc(6px + 1vw);\n}\n.player_info .shoots .shoot.total {\n  margin-left: 10px;\n}\n.player_info .score {\n  font-size: 3.2vw;\n  letter-spacing: 0.5vw;\n  font-weight: bold;\n  float: right;\n}\n.player_info .score label {\n  font-size: 1vw;\n  letter-spacing: 0.2vw;\n}\n.player_info .note {\n  font-size: 2vw;\n  margin-right: 10px;\n  float: right;\n}\n.player_info .note label {\n  font-size: 1.5vw;\n}\n.player_info .field-set {\n  display: flex;\n  flex-flow: row wrap;\n}\n.player_info .field {\n  font-size: calc(0.7vw + 0.7vh);\n  width: 70px;\n  opacity: 0.4;\n}\n.player_info .field.highlighted, .player_info .field.active {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNjb3JlL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxwbGF5ZXItc2NvcmVcXHBsYXllci1zY29yZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNjb3JlL3BsYXllci1zY29yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ047QURDSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ047QURHRTtFQUNFLGFBQUE7QUNESjtBRElFO0VBQ0UsZUFBQTtBQ0ZKO0FES0U7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FDSEo7QURNRTtFQUNFLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDSko7QURLSTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7QUNITjtBRE9FO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDTEo7QURPSTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ0xOO0FET007RUFDRSxpQkFBQTtBQ0xSO0FEVUU7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDUko7QURVSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ1JOO0FEWUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDVko7QURZSTtFQUNFLGdCQUFBO0FDVk47QURhRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ1hKO0FEYUU7RUFDRSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWEo7QURhSTtFQUNFLFVBQUE7QUNYTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BsYXllci1zY29yZS9wbGF5ZXItc2NvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheWVyX2luZm8ge1xyXG4gIHBhZGRpbmc6IDF2dztcclxuXHJcbiAgJi5wbGF5ZXJfaW5mb192aXN1YWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcbiAgICAuc2NvcmUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5saW5lIHtcclxuICAgIG1hcmdpbjogMXZ3IDA7XHJcbiAgfVxyXG5cclxuICAubGluZS1zcGFjZSB7XHJcbiAgICBtYXJnaW46IDEuNXZ3IDA7XHJcbiAgfVxyXG5cclxuICAuc21hbGwge1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDAuNnZ3ICsgMC41dmgpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAubmFtZSB7XHJcbiAgICBmb250LXNpemU6IGNhbGMoNXB4ICsgMXZ3KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgMXZ3KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zaG9vdHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgLnNob290IHtcclxuICAgICAgbWFyZ2luOiAwLjF2dztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC41dnc7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB3aWR0aDogM3Z3O1xyXG4gICAgICBoZWlnaHQ6IDN2dztcclxuICAgICAgZm9udC1zaXplOiBjYWxjKDZweCArIDF2dyk7XHJcblxyXG4gICAgICAmLnRvdGFsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNjb3JlIHtcclxuICAgIGZvbnQtc2l6ZTogMy4ydnc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41dnc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ydnc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubm90ZSB7XHJcbiAgICBmb250LXNpemU6IDIuMHZ3O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgIH1cclxuICB9XHJcbiAgLmZpZWxkLXNldCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICB9XHJcbiAgLmZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjd2dyArIDAuN3ZoKTtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG5cclxuICAgICYuaGlnaGxpZ2h0ZWQsICYuYWN0aXZlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnBsYXllcl9pbmZvIHtcbiAgcGFkZGluZzogMXZ3O1xufVxuLnBsYXllcl9pbmZvLnBsYXllcl9pbmZvX3Zpc3VhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wbGF5ZXJfaW5mby5wbGF5ZXJfaW5mb192aXN1YWwgLm5hbWUge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ucGxheWVyX2luZm8ucGxheWVyX2luZm9fdmlzdWFsIC5zY29yZSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnBsYXllcl9pbmZvIC5saW5lIHtcbiAgbWFyZ2luOiAxdncgMDtcbn1cbi5wbGF5ZXJfaW5mbyAubGluZS1zcGFjZSB7XG4gIG1hcmdpbjogMS41dncgMDtcbn1cbi5wbGF5ZXJfaW5mbyAuc21hbGwge1xuICBmb250LXNpemU6IGNhbGMoMC42dncgKyAwLjV2aCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBsYXllcl9pbmZvIC5uYW1lIHtcbiAgZm9udC1zaXplOiBjYWxjKDVweCArIDF2dyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGxheWVyX2luZm8gLm5hbWUgbWF0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgMXZ3KTtcbn1cbi5wbGF5ZXJfaW5mbyAuc2hvb3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5wbGF5ZXJfaW5mbyAuc2hvb3RzIC5zaG9vdCB7XG4gIG1hcmdpbjogMC4xdnc7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDN2dztcbiAgaGVpZ2h0OiAzdnc7XG4gIGZvbnQtc2l6ZTogY2FsYyg2cHggKyAxdncpO1xufVxuLnBsYXllcl9pbmZvIC5zaG9vdHMgLnNob290LnRvdGFsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ucGxheWVyX2luZm8gLnNjb3JlIHtcbiAgZm9udC1zaXplOiAzLjJ2dztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXZ3O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnBsYXllcl9pbmZvIC5zY29yZSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBsZXR0ZXItc3BhY2luZzogMC4ydnc7XG59XG4ucGxheWVyX2luZm8gLm5vdGUge1xuICBmb250LXNpemU6IDJ2dztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4ucGxheWVyX2luZm8gLm5vdGUgbGFiZWwge1xuICBmb250LXNpemU6IDEuNXZ3O1xufVxuLnBsYXllcl9pbmZvIC5maWVsZC1zZXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuLnBsYXllcl9pbmZvIC5maWVsZCB7XG4gIGZvbnQtc2l6ZTogY2FsYygwLjd2dyArIDAuN3ZoKTtcbiAgd2lkdGg6IDcwcHg7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5wbGF5ZXJfaW5mbyAuZmllbGQuaGlnaGxpZ2h0ZWQsIC5wbGF5ZXJfaW5mbyAuZmllbGQuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerScoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player-score',
                templateUrl: './player-score.component.html',
                styleUrls: ['./player-score.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationStateService"] }]; }, { player: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hasContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scoreDisplayed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lifeDisplayed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], highlighted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/player-settings/player-settings.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/player-settings/player-settings.component.ts ***!
  \********************************************************************************/
/*! exports provided: PlayerSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerSettingsComponent", function() { return PlayerSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");










function PlayerSettingsComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r32, " ");
} }
function PlayerSettingsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerSettingsComponent_div_13_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const player_r33 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.playground.removePlayer(player_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "remove_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r33.name);
} }
class PlayerSettingsComponent {
    constructor(application) {
        this.application = application;
        this.storedPlayers = [];
        this.storedPlayers = this.application.getStoredPlayers();
    }
    getOptions() {
        return this.storedPlayers.filter(o => this.playground.game.players
            .map(p => p.name).indexOf(o) === -1);
    }
    addPlayer(playerNameInput) {
        this.playground.addPlayer(playerNameInput);
        this.storedPlayers = this.application.getStoredPlayers();
    }
    playerSelected(event, playerNameInput) {
        this.playground.addPlayer(event.option);
        this.storedPlayers = this.application.getStoredPlayers();
        playerNameInput.value = '';
        playerNameInput.blur();
    }
}
PlayerSettingsComponent.ɵfac = function PlayerSettingsComponent_Factory(t) { return new (t || PlayerSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationStateService"])); };
PlayerSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerSettingsComponent, selectors: [["app-player-settings"]], inputs: { playground: "playground" }, decls: 14, vars: 5, consts: [[1, "add-player"], ["appearance", "outline", 1, "big"], ["type", "text", "matInput", "", "placeholder", "Enter name", 3, "disabled", "matAutocomplete"], ["playerNameInput", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 3, "disabled", "click"], [1, "player-table"], ["class", "player-row", 4, "ngFor", "ngForOf"], [3, "value"], [1, "player-row"], [1, "player-name"], ["mat-icon-button", "", 3, "click"]], template: function PlayerSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Player name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function PlayerSettingsComponent_Template_mat_autocomplete_optionSelected_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.playerSelected($event, _r28); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PlayerSettingsComponent_mat_option_8_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerSettingsComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.addPlayer(_r28); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlayerSettingsComponent_div_13_Template, 6, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playground.canAddPlayer())("matAutocomplete", _r29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getOptions());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playground.canAddPlayer());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.playground.game.players);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: [".add-player[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.player-table[_ngcontent-%COMP%] {\n  width: 60.8vw;\n}\n\n.player-table[_ngcontent-%COMP%]   .player-row[_ngcontent-%COMP%] {\n  height: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n  font-weight: bold;\n  border-radius: 6px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNldHRpbmdzL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxwbGF5ZXItc2V0dGluZ3NcXHBsYXllci1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNldHRpbmdzL3BsYXllci1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FEQUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNldHRpbmdzL3BsYXllci1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtcGxheWVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucGxheWVyLXRhYmxlICB7XHJcbiAgd2lkdGg6IDYwLjh2dztcclxuICAucGxheWVyLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG59XHJcbiIsIi5hZGQtcGxheWVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnBsYXllci10YWJsZSB7XG4gIHdpZHRoOiA2MC44dnc7XG59XG4ucGxheWVyLXRhYmxlIC5wbGF5ZXItcm93IHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player-settings',
                templateUrl: './player-settings.component.html',
                styleUrls: ['./player-settings.component.scss']
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationStateService"] }]; }, { playground: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/settings/settings.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/settings/settings.component.ts ***!
  \******************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~components/player-settings/player-settings.component */ "./src/app/shared/components/player-settings/player-settings.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






const _c0 = ["*"];
class SettingsComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    openRules() {
        this.dialogService.openDialog(this.title, this.rules);
    }
    openStatistics() {
        this.dialogService.openGameStatisticsDialog(this.playground.getGameStatistics());
    }
    openHistory() {
        this.dialogService.openGameHistory(this.playground.getGameHistory());
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], inputs: { playground: "playground", title: "title", rules: "rules" }, ngContentSelectors: _c0, decls: 22, vars: 2, consts: [[1, "settings"], [3, "playground"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "button", "big", 3, "click"], ["mat-raised-button", "", 1, "button", "big", 3, "click"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Players");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-player-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_11_listener() { return ctx.openStatistics(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Player rank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_13_listener() { return ctx.openHistory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Game history");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_15_listener() { return ctx.openRules(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_18_listener() { return ctx.playground.newGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_20_listener() { return ctx.playground.quit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx.playground);
    } }, directives: [_components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_2__["PlayerSettingsComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".settings {\n  padding: 2vh 2vw;\n  width: 100%;\n}\n.settings h2 {\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  margin-left: 5px;\n}\n.settings mat-divider {\n  clear: both;\n  margin: 5px 0;\n}\n.settings .field-set {\n  display: flex;\n  justify-content: space-between;\n}\n.settings .button, .settings mat-form-field {\n  margin: 3px;\n  height: 45px;\n}\n.settings .button.big, .settings mat-form-field.big {\n  width: 30.4vw;\n}\n.settings .button.medium, .settings mat-form-field.medium {\n  width: 20.2vw;\n}\n.settings .button.shortmedium, .settings mat-form-field.shortmedium {\n  width: 15vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2V0dGluZ3MvRDpcXERldmVsb3BtZW50XFxkYXJ0cy1zY29yZWJvYXJkLW5nL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHNldHRpbmdzXFxzZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURFRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDQUo7QURHRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0RKO0FESUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FESUk7RUFDRSxhQUFBO0FDRk47QURLSTtFQUNFLGFBQUE7QUNITjtBRE1JO0VBQ0UsV0FBQTtBQ0pOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3Mge1xyXG4gIHBhZGRpbmc6IDJ2aCAydnc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGgyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcblxyXG4gIG1hdC1kaXZpZGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICB9XHJcblxyXG4gIC5maWVsZC1zZXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIC5idXR0b24sIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG5cclxuICAgICYuYmlnIHtcclxuICAgICAgd2lkdGg6IDMwLjR2dztcclxuICAgIH1cclxuXHJcbiAgICAmLm1lZGl1bSB7XHJcbiAgICAgIHdpZHRoOiAyMC4ydnc7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zaG9ydG1lZGl1bSB7XHJcbiAgICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuc2V0dGluZ3Mge1xuICBwYWRkaW5nOiAydmggMnZ3O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZXR0aW5ncyBoMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5zZXR0aW5ncyBtYXQtZGl2aWRlciB7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDVweCAwO1xufVxuLnNldHRpbmdzIC5maWVsZC1zZXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uc2V0dGluZ3MgLmJ1dHRvbiwgLnNldHRpbmdzIG1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAzcHg7XG4gIGhlaWdodDogNDVweDtcbn1cbi5zZXR0aW5ncyAuYnV0dG9uLmJpZywgLnNldHRpbmdzIG1hdC1mb3JtLWZpZWxkLmJpZyB7XG4gIHdpZHRoOiAzMC40dnc7XG59XG4uc2V0dGluZ3MgLmJ1dHRvbi5tZWRpdW0sIC5zZXR0aW5ncyBtYXQtZm9ybS1maWVsZC5tZWRpdW0ge1xuICB3aWR0aDogMjAuMnZ3O1xufVxuLnNldHRpbmdzIC5idXR0b24uc2hvcnRtZWRpdW0sIC5zZXR0aW5ncyBtYXQtZm9ybS1maWVsZC5zaG9ydG1lZGl1bSB7XG4gIHdpZHRoOiAxNXZ3O1xufSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"] }]; }, { playground: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rules: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/models/application-settings.model.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/models/application-settings.model.ts ***!
  \*************************************************************/
/*! exports provided: ApplicationSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationSettings", function() { return ApplicationSettings; });
class ApplicationSettings {
    constructor() {
        this.theme = 0;
        this.details = 0;
    }
}


/***/ }),

/***/ "./src/app/shared/models/field-value.model.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/models/field-value.model.ts ***!
  \****************************************************/
/*! exports provided: FieldValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldValue", function() { return FieldValue; });
class FieldValue {
    constructor(field, value) {
        this.field = field;
        this.value = value;
    }
    clone() {
        return new FieldValue(this.field, this.value);
    }
}


/***/ }),

/***/ "./src/app/shared/models/game-statistics.model.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/models/game-statistics.model.ts ***!
  \********************************************************/
/*! exports provided: GameStatistics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameStatistics", function() { return GameStatistics; });
class GameStatistics {
}


/***/ }),

/***/ "./src/app/shared/models/player.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/player.model.ts ***!
  \***********************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
class Player {
    constructor(id, name = '') {
        this.id = id;
        this.name = name;
        this.score = 0;
        this.throws = [];
        this.win = false;
        this.winDateTime = 0;
        this.first = true;
        this.life = 1;
    }
    setWin(win = true) {
        this.win = win;
        this.winDateTime = win ? new Date().getTime() : 0;
    }
    getThrowsTotal() {
        return this.throws.reduce((a, b) => a + b, 0);
    }
    addThrowHistory(thr) {
        this.throwsHistory.push(thr);
    }
    isInactive() {
        return this.life <= 0;
    }
    reset() {
        this.score = 0;
        this.throws = [];
        this.throwsHistory = [];
        this.win = false;
        this.winDateTime = 0;
        this.first = true;
    }
    clone() {
        const player = new Player(this.id, this.name);
        player.score = this.score;
        player.life = this.life;
        player.throws = [];
        this.throws.forEach(t => {
            player.throws.push(t);
        });
        player.throwsHistory = this.throwsHistory;
        player.win = this.win;
        player.winDateTime = this.winDateTime;
        player.first = this.first;
        player.throwsHistory = [];
        this.throwsHistory.forEach(throws => {
            player.throwsHistory.push(throws.clone());
        });
        if (this.state) {
            player.state = this.state.clone();
        }
        return player;
    }
}


/***/ }),

/***/ "./src/app/shared/models/playground-state.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/models/playground-state.model.ts ***!
  \*********************************************************/
/*! exports provided: PlaygroundState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundState", function() { return PlaygroundState; });
/* harmony import */ var _field_value_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field-value.model */ "./src/app/shared/models/field-value.model.ts");

class PlaygroundState {
    getFieldValue(list, fieldIndex) {
        const filtered = list.filter(f => f.field === fieldIndex);
        if (filtered.length === 0) {
            list.push(new _field_value_model__WEBPACK_IMPORTED_MODULE_0__["FieldValue"](fieldIndex, 0));
        }
        return list.filter(f => f.field === fieldIndex)[0];
    }
    isInactive() {
        return false;
    }
}


/***/ }),

/***/ "./src/app/shared/models/playground.model.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/models/playground.model.ts ***!
  \***************************************************/
/*! exports provided: FIELDS_COUNT, Playground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELDS_COUNT", function() { return FIELDS_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Playground", function() { return Playground; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _player_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.model */ "./src/app/shared/models/player.model.ts");
/* harmony import */ var _throw_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./throw.model */ "./src/app/shared/models/throw.model.ts");
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~services/statistics.service */ "./src/app/shared/services/statistics.service.ts");
/* harmony import */ var _models_game_statistics_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~models/game-statistics.model */ "./src/app/shared/models/game-statistics.model.ts");
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/bot.service */ "./src/app/shared/services/bot.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");








const FIELDS_COUNT = 21;
const MAXIMUM_NUMBER_OF_PLAYERS = 6;
class Playground {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService, gameName, minimumNumberOfPlayers = 1, maximumNumberOfPlayers) {
        this.application = application;
        this.game = game;
        this.route = route;
        this.dialogService = dialogService;
        this.soundService = soundService;
        this.botService = botService;
        this.statisticsService = statisticsService;
        this.gameName = gameName;
        this.minimumNumberOfPlayers = minimumNumberOfPlayers;
        this.maximumNumberOfPlayers = maximumNumberOfPlayers;
        this.throwEnabled = true;
        this.settingsOpen = true;
        this.nextEnabled = true;
        this.zeroEnabled = true;
        this.multiEnabled = true;
        this.playground = this;
        this.hasChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](Date.now());
    }
    static getFieldValueFromIndex(fieldIndex) {
        return fieldIndex === 20 ? 25 : fieldIndex + 1;
    }
    ngOnInit() {
        this.settingsOpen = true;
        this.extraEndingMsg = '';
    }
    throwNumber(args) {
        const score = args[0];
        const scoreReal = args[1];
        if (this.throwEnabled) {
            this.saveGameInHistory();
            this.throwEnabled = false;
            if (score === 25 && this.multiplier === 3) {
                this.multiplier = 1;
            }
            const actualPlayer = this.game.getActualPlayer();
            const fieldIndex = score === 25 ? 20 : score - 1;
            actualPlayer.addThrowHistory(new _throw_model__WEBPACK_IMPORTED_MODULE_2__["Throw"](score, this.multiplier, this.game.actualThrow));
            if (this.game.actualThrow === 0) {
                actualPlayer.throws = [];
            }
            actualPlayer.throws[this.game.actualThrow] = score * this.multiplier;
            this.game.actualThrow++;
            this.calculatePoints(actualPlayer, fieldIndex, score, scoreReal);
            this.checkPlayerState(actualPlayer);
            let gameEnded = false;
            this.multiplier = 1;
            const winners = this.game.players.filter(p => p.win);
            if (winners.length > 0) {
                if ((this.game.victoryFirst || this.game.getNumberOfPlayers() - winners.length <= 1) || !this.game.victoryFirst) {
                    const content = this.extraEndingMsg ? this.extraEndingMsg : 'Round: #' + (this.game.round + 1);
                    this.finishStatistics();
                    this.dialogService.openDialog('Game Over!', content, this.getTheFinalResult());
                    this.newGame(true);
                    gameEnded = true;
                }
                else {
                    while (this.game.getActualPlayer().win) {
                        this.game.nextPlayer();
                    }
                }
            }
            const activePlayers = this.game.players.filter(p => !this.getPlayerState(p) || !this.getPlayerState(p).isInactive());
            if (!activePlayers.length) {
                const content = this.extraEndingMsg ? this.extraEndingMsg : 'Round: #' + (this.game.round + 1);
                this.finishStatistics();
                this.dialogService.openDialog('Game Over!', content, this.getTheFinalResult());
                this.newGame(true);
                gameEnded = true;
            }
            this.throwEnabled = true;
            if (!gameEnded && this.game.getActualPlayer().name.toLowerCase().indexOf(_services_bot_service__WEBPACK_IMPORTED_MODULE_5__["PLAYER_NAME"]) !== -1) {
                this.botThrow();
            }
        }
    }
    getPlayerState(player) {
        return player.state;
    }
    canAddPlayer() {
        return this.game.getNumberOfPlayers() < MAXIMUM_NUMBER_OF_PLAYERS;
    }
    addPlayer(name) {
        if (!!name.value.trim().length && !this.game.players.some(p => p.name === name.value)) {
            this.game.players.push(new _player_model__WEBPACK_IMPORTED_MODULE_1__["Player"](Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(), name.value));
            this.application.storePlayer(name.value);
        }
        name.value = '';
    }
    removePlayer(player) {
        this.game.players = this.game.players.filter(p => p !== player);
    }
    newGame(rotate = false) {
        this.settingsOpen = !this.playerSettingsValidation() || !this.customSettingsValidation();
        if (!this.playerSettingsValidation()) {
            let msg = 'Number of players are incorrect.';
            if (this.minimumNumberOfPlayers) {
                msg += ` (minimum: ${this.minimumNumberOfPlayers}`;
            }
            if (this.maximumNumberOfPlayers) {
                msg += (this.minimumNumberOfPlayers ? ', ' : ' (') + `maximum: ${this.maximumNumberOfPlayers}).`;
            }
            else {
                msg += this.minimumNumberOfPlayers ? ').' : '.';
            }
            this.dialogService.openErrorDialog('Error!', msg);
        }
        else if (this.settingsOpen) {
            this.dialogService.openErrorDialog('Error!', 'Settings is incorrect.');
        }
        if (rotate) {
            this.game.rotatePlayers();
        }
        this.reset();
        this.hasChanges.next(Date.now());
    }
    triplePoint() {
        this.multiplier = this.multiplier === 3 ? 1 : 3;
    }
    doublePoint() {
        this.multiplier = this.multiplier === 2 ? 1 : 2;
    }
    undo() {
        if (this.gameHistory.length > 0) {
            this.game = this.gameHistory.pop();
            this.hasChanges.next(Date.now());
        }
    }
    skip() {
        const actThrow = this.game.actualThrow;
        this.throwNumber([0, 0]);
        if (actThrow !== 2) {
            this.skip();
        }
    }
    reset() {
        this.gameHistory = [];
        this.game.resetScore();
        this.multiplier = 1;
        this.extraEndingMsg = '';
        this.game.actualFieldIndex = 0;
        this.customReset();
        this.startStatistics();
    }
    quit() {
        this.reset();
        this.route.navigate(['/']);
    }
    customSettingsValidation() {
        return true;
    }
    isFieldEnabled(fieldIndex) {
        return true;
    }
    isPrimaryField(fieldIndex) {
        return false;
    }
    isSecondaryField(fieldIndex) {
        return false;
    }
    getFieldIcon(fieldIndex) {
        return '';
    }
    getFieldNote(fieldIndex) {
        return '';
    }
    getFieldNoteBottom(fieldIndex) {
        return '';
    }
    decoratePlayerStat(player) {
        return player.name + _services_statistics_service__WEBPACK_IMPORTED_MODULE_3__["STAT_NAME_SEPARATOR"] + player.score;
    }
    getGameConfig() {
        return '';
    }
    botThrow() {
    }
    getGameStatistics() {
        const statistics = this.statisticsService.getGameStatistics(this.playground.gameName);
        const players = [];
        statistics.forEach(stat => {
            this.parseStatistics(stat, 'l', players);
            this.parseStatistics(stat, 'w', players);
        });
        return players;
    }
    getGameHistory() {
        return this.statisticsService.getGameStatistics(this.playground.gameName);
    }
    getTheFinalResult() {
        let winners = this.game.players.filter(p => p.win);
        winners = winners.sort((p1, p2) => p1.winDateTime < p2.winDateTime ? -1 : 1)
            .slice(0, 1).map(p => p.clone());
        const losers = this.game.players.filter(p => !winners.some(w => w.id === p.id))
            .map(p => {
            const c = p.clone();
            c.win = false;
            return c;
        });
        return [...winners, ...losers];
    }
    startStatistics() {
        this.gameStatistics = new _models_game_statistics_model__WEBPACK_IMPORTED_MODULE_4__["GameStatistics"]();
        this.gameStatistics.s = new Date().toISOString();
        this.gameStatistics.g = this.gameName;
    }
    finishStatistics() {
        this.gameStatistics.f = new Date().toISOString();
        this.gameStatistics.w = this.game.players.filter(p => p.win).map(p => this.decoratePlayerStat(p));
        this.gameStatistics.l = this.game.players.filter(p => !p.win).map(p => this.decoratePlayerStat(p));
        this.gameStatistics.r = this.game.round;
        this.gameStatistics.c = this.getGameConfig();
        this.statisticsService.saveStatistics(this.gameStatistics);
    }
    parseStatistics(stat, field, players) {
        stat[field].forEach(p => {
            const name = p.split(_services_statistics_service__WEBPACK_IMPORTED_MODULE_3__["STAT_NAME_SEPARATOR"])[0];
            let player = players.find(pl => pl.n === name);
            if (!player) {
                player = { n: name, w: 0, l: 0 };
                players.push(player);
            }
            player[field]++;
        });
    }
    playerSettingsValidation() {
        const players = [];
        this.game.players.forEach(player => {
            if (player.name.length !== 0) {
                players.push(player);
            }
        });
        this.game.players = players;
        return players.length >= this.minimumNumberOfPlayers &&
            (!this.maximumNumberOfPlayers || players.length <= this.maximumNumberOfPlayers);
    }
    saveGameInHistory() {
        this.gameHistory.push(this.game.clone());
    }
}
Playground.ɵfac = function Playground_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinvalidFactory"](); };
Playground.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({ type: Playground });


/***/ }),

/***/ "./src/app/shared/models/throw.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/throw.model.ts ***!
  \**********************************************/
/*! exports provided: Throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Throw", function() { return Throw; });
class Throw {
    constructor(score, multi, order) {
        this.score = score;
        this.multi = multi;
        this.order = order;
        this.field = this.score === 25 ? 'B' : this.score + '';
    }
    clone() {
        return new Throw(this.score, this.multi, this.order);
    }
}


/***/ }),

/***/ "./src/app/shared/services/application-state.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/application-state.service.ts ***!
  \**************************************************************/
/*! exports provided: ApplicationStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationStateService", function() { return ApplicationStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_application_settings_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~models/application-settings.model */ "./src/app/shared/models/application-settings.model.ts");



const APPLICATION_KEY = 'ApplicationSettings';
const PLAYER_KEY = 'Players';
const THEMES = ['light-theme', 'light-theme-blue', 'dark-theme', 'dark-red'];
class ApplicationStateService {
    constructor() {
        this.settings = new _models_application_settings_model__WEBPACK_IMPORTED_MODULE_1__["ApplicationSettings"]();
        const data = localStorage.getItem(APPLICATION_KEY);
        if (data) {
            this.settings = JSON.parse(data);
        }
        this.setTheme();
    }
    toggleColorTheme() {
        this.settings.theme = (this.settings.theme + 1) % THEMES.length;
        this.setTheme();
        this.saveSettings();
    }
    toggleDetails() {
        this.settings.details = (this.settings.details + 1) % 2;
        this.saveSettings();
    }
    getStoredPlayers() {
        const data = localStorage.getItem(PLAYER_KEY);
        if (data) {
            return JSON.parse(data);
        }
        return [];
    }
    storePlayer(name) {
        const players = [name, ...this.getStoredPlayers()].filter((v, i, a) => a.indexOf(v) === i);
        localStorage.setItem(PLAYER_KEY, JSON.stringify(players));
    }
    setTheme() {
        THEMES.forEach(theme => {
            document.body.className = document.body.className.replace(theme, '');
        });
        document.body.classList.add(THEMES[this.settings.theme]);
    }
    saveSettings() {
        localStorage.setItem(APPLICATION_KEY, JSON.stringify(this.settings));
    }
}
ApplicationStateService.ɵfac = function ApplicationStateService_Factory(t) { return new (t || ApplicationStateService)(); };
ApplicationStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApplicationStateService, factory: ApplicationStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/bot.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/bot.service.ts ***!
  \************************************************/
/*! exports provided: PLAYER_NAME, PLAYER_DELAY, PLAYER_DELAY_FAST, BotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_NAME", function() { return PLAYER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_DELAY", function() { return PLAYER_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_DELAY_FAST", function() { return PLAYER_DELAY_FAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotService", function() { return BotService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const PLAYER_NAME = 'phil';
const PLAYER_DELAY = 1000;
const PLAYER_DELAY_FAST = 500;
const MAX_LEVEL = 20;
const PLAYER_LEVEL = 9;
class BotService {
    calculateMultiTarget(targets) {
        const random = Math.floor(Math.random() * targets.length);
        return this.calculateTarget(targets[random]);
    }
    calculateTarget(target) {
        let actual = Math.floor(Math.random() * MAX_LEVEL) + 1;
        actual = target === 20 ? (actual + 3) : actual;
        if (actual <= PLAYER_LEVEL) {
            return target;
        }
        else {
            const upOrBottomLine = Math.floor(Math.random() * 3);
            const mistakeLevel = ((actual - PLAYER_LEVEL) > 4 ? 4 : (actual - PLAYER_LEVEL)) - 1;
            if (mistakeLevel === 3) {
                return 0;
            }
            return TARGET_MATRIX[target][mistakeLevel][upOrBottomLine] - 1;
        }
    }
    isDoublePoint() {
        return Math.floor(Math.random() * 100) < 15;
    }
    isTriplePoint() {
        return Math.floor(Math.random() * 100) < 5;
    }
}
BotService.ɵfac = function BotService_Factory(t) { return new (t || BotService)(); };
BotService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BotService, factory: BotService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BotService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
const TARGET_MATRIX = [
    [
        [20, 18, 5],
        [5, 4, 12],
        [12, 13, 7]
    ],
    [
        [15, 17, 10],
        [10, 3, 6],
        [6, 19, 9]
    ],
    [
        [17, 19, 2],
        [2, 7, 15],
        [15, 16, 5]
    ],
    [
        [18, 13, 1],
        [1, 6, 20],
        [20, 10, 8]
    ],
    [
        [12, 20, 9],
        [9, 1, 14],
        [14, 18, 2]
    ],
    [
        [13, 10, 4],
        [4, 15, 18],
        [18, 2, 8]
    ],
    [
        [19, 16, 8],
        [3, 8, 17],
        [17, 11, 1]
    ],
    [
        [16, 11, 7],
        [7, 14, 9],
        [19, 9, 6]
    ],
    [
        [14, 12, 11],
        [11, 5, 20],
        [8, 20, 10]
    ],
    [
        [6, 15, 13],
        [13, 2, 4],
        [4, 17, 11]
    ],
    [
        [8, 14, 16],
        [16, 9, 12],
        [7, 12, 10]
    ],
    [
        [9, 5, 14],
        [14, 20, 11],
        [11, 1, 15]
    ],
    [
        [4, 6, 18],
        [18, 10, 15],
        [1, 15, 16]
    ],
    [
        [11, 9, 16],
        [8, 12, 5],
        [16, 5, 15]
    ],
    [
        [10, 2, 6],
        [6, 17, 13],
        [13, 3, 14]
    ],
    [
        [7, 8, 11],
        [19, 11, 14],
        [3, 14, 13]
    ],
    [
        [2, 3, 15],
        [15, 19, 7],
        [10, 7, 12]
    ],
    [
        [1, 4, 20],
        [20, 13, 6],
        [5, 6, 19]
    ],
    [
        [3, 7, 17],
        [17, 16, 8],
        [2, 8, 18]
    ],
    [
        [5, 1, 12],
        [12, 18, 9],
        [9, 4, 19]
    ],
    [
        [20, 3, 6],
        [1, 19, 11],
        [18, 7, 8]
    ]
];


/***/ }),

/***/ "./src/app/shared/services/dialog.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/dialog.service.ts ***!
  \***************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~components/dialog/dialog.component */ "./src/app/shared/components/dialog/dialog.component.ts");
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~components/confirm-dialog/confirm-dialog.component */ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~components/game-statistics-dialog/game-statistics-dialog.component */ "./src/app/shared/components/game-statistics-dialog/game-statistics-dialog.component.ts");
/* harmony import */ var _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~components/game-history-dialog/game-history-dialog.component */ "./src/app/shared/components/game-history-dialog/game-history-dialog.component.ts");
/* harmony import */ var _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~components/game-type-statistics-dialog/game-type-statistics-dialog.component */ "./src/app/shared/components/game-type-statistics-dialog/game-type-statistics-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");








class DialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog(title = '', content = '', players = []) {
        return this.dialog.open(_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"], {
            panelClass: 'success-dialog',
            data: { title, content, players },
        });
    }
    openGameStatisticsDialog(statistics) {
        return this.dialog.open(_components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_3__["GameStatisticsDialogComponent"], {
            data: { statistics },
        });
    }
    openGameHistory(statistics) {
        return this.dialog.open(_components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_4__["GameHistoryDialogComponent"], {
            data: { statistics },
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '100%',
            width: '100%'
        });
    }
    openGameTypeStatistics(statistics) {
        return this.dialog.open(_components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_5__["GameTypeStatisticsDialogComponent"], {
            data: { statistics },
        });
    }
    openErrorDialog(title = '', content = '') {
        return this.dialog.open(_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"], {
            panelClass: 'error-dialog',
            data: { title, content, players: [] },
        });
    }
    openConfirmDialog(title = '', content = '') {
        return this.dialog.open(_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
            panelClass: 'confirm-dialog',
            data: { title, content, players: [] },
        });
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/game.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/game.service.ts ***!
  \*************************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GameService {
    constructor() {
        this.players = [];
        this.actualFieldIndex = 0;
        this.victoryFirst = true;
        this.numbs = [];
    }
    toggleVictoryFirst() {
        this.victoryFirst = !this.victoryFirst;
    }
    isTheLastThrow() {
        return this.actualThrow === 3;
    }
    getActualPlayer() {
        return this.players[this.actualPlayerIndex];
    }
    getActivePlayers() {
        return this.players.filter(p => !p.isInactive());
    }
    getNextPlayer() {
        let index = this.actualPlayerIndex + 1 === this.players.length ? 0 : this.actualPlayerIndex + 1;
        while (this.players[index].isInactive()) {
            index = index + 1 === this.players.length ? 0 : index + 1;
        }
        return this.players[index];
    }
    getPreviousPlayer() {
        let index = this.actualPlayerIndex === 0 ? this.players.length - 1 : this.actualPlayerIndex - 1;
        while (this.players[index].isInactive()) {
            index = index === 0 ? this.players.length - 1 : index - 1;
        }
        return this.players[index];
    }
    nextPlayer() {
        if (this.isActualPlayerTheLast()) {
            this.nextRound();
        }
        this.actualPlayerIndex = (this.actualPlayerIndex + 1) % this.getNumberOfPlayers();
        this.actualThrow = 0;
    }
    getNumberOfPlayers() {
        return this.players.length;
    }
    getTheFirstPlayer() {
        return this.players[0];
    }
    isTheFirstPlayer(player) {
        return player.id === this.getTheFirstPlayer().id;
    }
    isActualPlayerIsTheFirst() {
        return this.isTheFirstPlayer(this.getActualPlayer());
    }
    getTheLastPlayer() {
        return this.players[this.getNumberOfPlayers() - 1];
    }
    isTheLastPlayer(player) {
        return player.id === this.getTheLastPlayer().id;
    }
    isActualPlayerTheLast() {
        return this.isTheLastPlayer(this.getActualPlayer());
    }
    getTheBestPlayers() {
        const activePlayers = this.getActivePlayers();
        const list = activePlayers.length ? activePlayers : this.players;
        let max = list[0].score;
        list.forEach(p => {
            max = p.score > max ? p.score : max;
        });
        return list.filter(p => p.score === max);
    }
    getTheWorstPlayers() {
        const activePlayers = this.getActivePlayers();
        const list = activePlayers.length ? activePlayers : this.players;
        let min = list[0].score;
        list.forEach(p => {
            min = p.score < min ? p.score : min;
        });
        return list.filter(p => p.score === min);
    }
    isTheBestPlayer(actPlayer) {
        const best = this.getTheBestPlayers();
        return actPlayer.score === ((best && best.length) ? best[0].score : 0);
    }
    isTheWorstPlayer(actPlayer) {
        let min = this.players[0].score;
        this.players.forEach(player => {
            min = player.score < min ? player.score : min;
        });
        return actPlayer.score === min;
    }
    nextRound() {
        this.round++;
    }
    resetScore() {
        this.players.forEach(player => player.reset());
        this.actualPlayerIndex = 0;
        this.actualThrow = 0;
        this.round = 0;
    }
    rotatePlayers() {
        this.players.push(this.players.shift());
    }
    clone() {
        const game = new GameService();
        game.actualPlayerIndex = this.actualPlayerIndex;
        game.actualThrow = this.actualThrow;
        game.actualFieldIndex = this.actualFieldIndex;
        game.round = this.round;
        game.numbs = this.numbs.map(n => n);
        const players = [];
        this.players.forEach(player => {
            players.push(player.clone());
        });
        game.players = players;
        return game;
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/sound.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/sound.service.ts ***!
  \**************************************************/
/*! exports provided: SoundService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundService", function() { return SoundService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SoundService {
    no() {
        this.play('oh_no.mp3');
    }
    play(soundFileName) {
        this.audioElement.src = `assets/sounds/${soundFileName}`;
        this.audioElement.play();
    }
}
SoundService.ɵfac = function SoundService_Factory(t) { return new (t || SoundService)(); };
SoundService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SoundService, factory: SoundService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SoundService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/statistics.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/statistics.service.ts ***!
  \*******************************************************/
/*! exports provided: STAT_NAME_SEPARATOR, StatisticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAT_NAME_SEPARATOR", function() { return STAT_NAME_SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsService", function() { return StatisticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~services/storage.service */ "./src/app/shared/services/storage.service.ts");



const STAT_NAME_SEPARATOR = '____';
const STATISTICS_STORAGE_KEY = 'statistics';
class StatisticsService {
    constructor(storageService) {
        this.storageService = storageService;
    }
    saveStatistics(statistics) {
        const stat = this.storageService.getObject(STATISTICS_STORAGE_KEY);
        if (stat) {
            stat.push(statistics);
            this.storageService.setObject(STATISTICS_STORAGE_KEY, stat);
        }
        else {
            this.storageService.setObject(STATISTICS_STORAGE_KEY, [statistics]);
        }
    }
    getGameStatistics(gameName) {
        const statistics = this.storageService.getObject(STATISTICS_STORAGE_KEY);
        return gameName ? statistics.filter(i => i.g === gameName) : statistics;
    }
    getPlayerStatistics(playerName, gameName) {
        const playerStat = this.storageService.getObject(STATISTICS_STORAGE_KEY).filter(i => i.l.some(p => p.indexOf(playerName) !== -1) ||
            i.w.some(p => p.indexOf(playerName) !== -1));
        return gameName ? playerStat.filter(i => i.g === gameName) : playerStat;
    }
    getGameTypeStatistics() {
        const stat = this.storageService.getObject(STATISTICS_STORAGE_KEY);
        const games = [];
        stat.forEach(s => {
            let type = games.find(g => g.name === s.g);
            if (!type) {
                type = { name: s.g, count: 0 };
                games.push(type);
            }
            type.count++;
        });
        return games;
    }
    printStatistics() {
        console.log(JSON.stringify(this.storageService.getObject(STATISTICS_STORAGE_KEY)));
    }
}
StatisticsService.ɵfac = function StatisticsService_Factory(t) { return new (t || StatisticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"])); };
StatisticsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StatisticsService, factory: StatisticsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StorageService {
    constructor() {
        this.storage = localStorage;
    }
    hasItem(key) {
        return !!this.getItem(key);
    }
    getItem(key) {
        return this.storage.getItem(key);
    }
    getObject(key) {
        return JSON.parse(this.getItem(key));
    }
    setItem(key, value) {
        this.storage.setItem(key, value);
    }
    setObject(key, value) {
        this.setItem(key, JSON.stringify(value));
    }
    removeItem(key) {
        this.storage.removeItem(key);
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~components/dialog/dialog.component */ "./src/app/shared/components/dialog/dialog.component.ts");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");
/* harmony import */ var _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~components/player-settings/player-settings.component */ "./src/app/shared/components/player-settings/player-settings.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~components/confirm-dialog/confirm-dialog.component */ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/game-statistics-dialog/game-statistics-dialog.component */ "./src/app/shared/components/game-statistics-dialog/game-statistics-dialog.component.ts");
/* harmony import */ var _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~components/game-history-dialog/game-history-dialog.component */ "./src/app/shared/components/game-history-dialog/game-history-dialog.component.ts");
/* harmony import */ var _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/game-type-statistics-dialog/game-type-statistics-dialog.component */ "./src/app/shared/components/game-type-statistics-dialog/game-type-statistics-dialog.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/menu/menu.component */ "./src/app/shared/components/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_shanghai_number_plate_shanghai_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate-shanghai/number-plate-shanghai.component */ "./src/app/shared/components/number-plate-shanghai/number-plate-shanghai.component.ts");



















const components = [_components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_6__["NumberPlateComponent"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["GameToolbarComponent"], _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_11__["GameStatisticsDialogComponent"], _components_number_plate_shanghai_number_plate_shanghai_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateShanghaiComponent"],
    _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_7__["PlayerSettingsComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_9__["PlayerScoreComponent"], _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateVisualComponent"],
    _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_12__["GameHistoryDialogComponent"], _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_13__["GameTypeStatisticsDialogComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"]];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_6__["NumberPlateComponent"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["GameToolbarComponent"], _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_11__["GameStatisticsDialogComponent"], _components_number_plate_shanghai_number_plate_shanghai_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateShanghaiComponent"],
        _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_7__["PlayerSettingsComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_9__["PlayerScoreComponent"], _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateVisualComponent"],
        _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_12__["GameHistoryDialogComponent"], _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_13__["GameTypeStatisticsDialogComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_6__["NumberPlateComponent"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["GameToolbarComponent"], _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_11__["GameStatisticsDialogComponent"], _components_number_plate_shanghai_number_plate_shanghai_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateShanghaiComponent"],
        _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_7__["PlayerSettingsComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_9__["PlayerScoreComponent"], _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateVisualComponent"],
        _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_12__["GameHistoryDialogComponent"], _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_13__["GameTypeStatisticsDialogComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]],
                declarations: components,
                exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], ...components],
                entryComponents: [_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_11__["GameStatisticsDialogComponent"],
                    _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_12__["GameHistoryDialogComponent"], _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_13__["GameTypeStatisticsDialogComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/x01/models/x01.settings.model.ts":
/*!**************************************************!*\
  !*** ./src/app/x01/models/x01.settings.model.ts ***!
  \**************************************************/
/*! exports provided: X01Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X01Settings", function() { return X01Settings; });
class X01Settings {
    constructor() {
        this.startValue = 201;
        this.start = 1;
        this.checkout = 2;
    }
    isNormalStart() {
        return this.start === 1;
    }
    isDoubleStart() {
        return this.start === 2;
    }
    isTripleStart() {
        return this.start === 3;
    }
    isNormalCheckout() {
        return this.checkout === 1;
    }
    isDoubleCheckout() {
        return this.checkout === 2;
    }
    isTripleCheckout() {
        return this.checkout === 3;
    }
    isHighScoreGame() {
        return this.checkout === 4;
    }
    setStart(start) {
        this.start = start;
    }
    setCheckout(checkout) {
        this.checkout = checkout;
    }
    setStartValue(startValue) {
        this.startValue = startValue;
    }
}


/***/ }),

/***/ "./src/app/x01/x01.component.ts":
/*!**************************************!*\
  !*** ./src/app/x01/x01.component.ts ***!
  \**************************************/
/*! exports provided: X01Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X01Component", function() { return X01Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~models/playground.model */ "./src/app/shared/models/playground.model.ts");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-animation */ "./src/app/route-animation.ts");
/* harmony import */ var _models_x01_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/x01.settings.model */ "./src/app/x01/models/x01.settings.model.ts");
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~services/bot.service */ "./src/app/shared/services/bot.service.ts");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/sound.service */ "./src/app/shared/services/sound.service.ts");
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~services/statistics.service */ "./src/app/shared/services/statistics.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");





















function X01Component_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.settings.setStartValue(101); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "101 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.settings.setStartValue(201); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "201 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.settings.setStartValue(301); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "301 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.settings.setStartValue(501); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "501 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.settings.setStartValue(701); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "701 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.settings.setStartValue(901); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "901 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Check In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.settings.setStart(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Normal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.settings.setStart(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Double ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.settings.setStart(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Triple ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Check Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.settings.setCheckout(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Single ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.settings.setCheckout(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Double ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.settings.setCheckout(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Triple ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.settings.setCheckout(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "High Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "X01")("playground", ctx_r60.playground)("rules", "All players start with 301/501 points and attempt to reach zero. If a player scores more " + "than the total required to reach zero, the player \u201Cbusts\u201D and the score returns to the score that " + "was existing at the start of the turn.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r60.settings.startValue === 101 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r60.settings.startValue === 201 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r60.settings.startValue === 301 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r60.settings.startValue === 501 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r60.settings.startValue === 701 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r60.settings.startValue === 901 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r60.settings.start === 1 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r60.settings.start === 2 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r60.settings.start === 3 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r60.settings.checkout === 1 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r60.settings.checkout === 2 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r60.settings.checkout === 3 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r60.settings.checkout === 4 ? "primary" : "");
} }
function X01Component_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 9);
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r61.playground)("info", ctx_r61.getInfo());
} }
function X01Component_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r80 = ctx.$implicit;
    const i_r81 = ctx.index;
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r81 === ctx_r79.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r80)("hasContent", false);
} }
function X01Component_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, X01Component_div_4_div_1_Template, 2, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r62.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r62.game.players);
} }
function X01Component_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 13);
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r63.playground);
} }
function X01Component_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 13);
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r64.playground);
} }
class X01Component extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super(application, game, route, dialogService, soundService, botService, statisticsService, 'x01');
        this.settings = new _models_x01_settings_model__WEBPACK_IMPORTED_MODULE_3__["X01Settings"]();
    }
    calculatePoints(player, fieldIndex, score) {
        const validStart = !player.first || this.settings.isNormalStart()
            || (player.first
                && ((this.settings.isDoubleStart() && this.multiplier === 2)
                    || (this.settings.isTripleStart() && this.multiplier === 3)));
        if (validStart) {
            const actualScore = score * this.multiplier;
            player.first = false;
            player.score -= actualScore;
        }
    }
    checkPlayerState(player) {
        let next = false;
        if ((this.settings.isHighScoreGame() && player.score <= 0) ||
            ((player.score === 0 && (this.settings.isNormalCheckout()
                || (this.settings.isDoubleCheckout() && this.multiplier === 2)
                || (this.settings.isTripleCheckout() && this.multiplier === 3))))) {
            player.setWin();
            next = true;
        }
        else if (player.score <= 0
            || (this.settings.isDoubleCheckout() && player.score < 2)
            || (this.settings.isTripleCheckout() && player.score < 3)) {
            player.throws.forEach(t => player.score += t);
            next = true;
            this.dialogService.openErrorDialog(`${this.game.getActualPlayer().name} busted!`);
        }
        if (this.game.isTheLastThrow() || next) {
            this.game.nextPlayer();
        }
    }
    customReset() {
        this.game.players.forEach(player => player.score = this.settings.startValue);
    }
    getGameConfig() {
        return this.settings.startValue + '';
    }
    botThrow() {
        let target = Math.floor(Math.random() * 10) + 10;
        if (!this.settings.isHighScoreGame()) {
            const player = this.game.getActualPlayer();
            if (player.score <= 20) {
                if (this.settings.isNormalCheckout()) {
                    target = player.score - 1;
                }
                else if (this.settings.isDoubleCheckout() && (player.score % 2) === 0) {
                    target = player.score / 2 - 1;
                    this.doublePoint();
                }
                else if (this.settings.isDoubleCheckout() && (player.score % 2) === 1) {
                    target = 0;
                }
                else if (this.settings.isTripleCheckout() && (player.score % 3) === 0) {
                    target = player.score / 3 - 1;
                    this.triplePoint();
                }
                else if (this.settings.isTripleCheckout() && (player.score % 3) === 1) {
                    target = 0;
                }
                else if (this.settings.isTripleCheckout() && (player.score % 3) === 2) {
                    target = 1;
                }
            }
        }
        else {
            if (this.botService.isDoublePoint()) {
                this.doublePoint();
            }
            else if (this.botService.isTriplePoint()) {
                this.triplePoint();
            }
        }
        const index = this.botService.calculateTarget(target);
        setTimeout(() => {
            this.throwNumber([this.isFieldEnabled(index) ? _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(index) : 0,
                _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(index)]);
        }, _services_bot_service__WEBPACK_IMPORTED_MODULE_4__["PLAYER_DELAY"]);
    }
    getInfo() {
        return this.game.getActualPlayer().score;
    }
}
X01Component.ɵfac = function X01Component_Factory(t) { return new (t || X01Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_4__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_10__["StatisticsService"])); };
X01Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: X01Component, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", "info", 4, "ngIf"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground", 4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], [3, "playground", "info"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"], [3, "playground"]], template: function X01Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, X01Component_app_settings_1_Template, 35, 16, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, X01Component_app_game_toolbar_3_Template, 1, 2, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, X01Component_div_4_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, X01Component_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, X01Component_app_number_plate_6_Template, 1, 1, "app-number-plate", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](X01Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './x01.component.html',
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"] }, { type: _services_bot_service__WEBPACK_IMPORTED_MODULE_4__["BotService"] }, { type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_10__["StatisticsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/x01/x01.module.ts":
/*!***********************************!*\
  !*** ./src/app/x01/x01.module.ts ***!
  \***********************************/
/*! exports provided: X01Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X01Module", function() { return X01Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _x01_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./x01.component */ "./src/app/x01/x01.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






class X01Module {
}
X01Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: X01Module });
X01Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function X01Module_Factory(t) { return new (t || X01Module)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: '', component: _x01_component__WEBPACK_IMPORTED_MODULE_2__["X01Component"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](X01Module, { declarations: [_x01_component__WEBPACK_IMPORTED_MODULE_2__["X01Component"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](X01Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: '', component: _x01_component__WEBPACK_IMPORTED_MODULE_2__["X01Component"] }
                    ])
                ],
                declarations: [_x01_component__WEBPACK_IMPORTED_MODULE_2__["X01Component"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    appVersion: __webpack_require__(/*! ../../package.json */ "./package.json").version,
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Development\darts-scoreboard-ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map