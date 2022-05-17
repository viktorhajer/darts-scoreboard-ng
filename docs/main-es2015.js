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

module.exports = JSON.parse("{\"name\":\"darts-scoreboard-ng\",\"version\":\"2.6\",\"license\":\"MIT\",\"author\":{\"name\":\"Viktor Hajer\",\"email\":\"viktor.hajer@gmail.com\"},\"description\":\"See Readme\",\"homepage\":\"https://github.com/viktorhajer/darts-scoreboard-ng#readme\",\"bugs\":{\"url\":\"https://github.com/viktorhajer/darts-scoreboard-ng/issues\"},\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build\",\"eslint\":\"eslint src/**/*.ts\"},\"private\":false,\"dependencies\":{\"@angular/animations\":\"~9.0.0\",\"@angular/cdk\":\"^9.0.0\",\"@angular/common\":\"~9.0.0\",\"@angular/compiler\":\"~9.0.0\",\"@angular/core\":\"~9.0.0\",\"@angular/forms\":\"~9.0.0\",\"@angular/material\":\"^9.0.0\",\"@angular/platform-browser\":\"~9.0.0\",\"@angular/platform-browser-dynamic\":\"~9.0.0\",\"@angular/router\":\"~9.0.0\",\"@types/d3\":\"^7.1.0\",\"d3\":\"^7.3.0\",\"rxjs\":\"~6.5.4\",\"tslib\":\"^1.10.0\",\"zone.js\":\"~0.10.2\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.900.1\",\"@angular/cli\":\"~9.0.1\",\"@angular/compiler-cli\":\"~9.0.0\",\"@angular/language-service\":\"~9.0.0\",\"@types/node\":\"12.12.47\",\"@typescript-eslint/eslint-plugin\":\"^2.19.2\",\"@typescript-eslint/eslint-plugin-tslint\":\"^2.19.2\",\"@typescript-eslint/parser\":\"^2.19.2\",\"eslint\":\"^6.8.0\",\"ts-node\":\"~8.3.0\",\"tslint\":\"~5.18.0\",\"typescript\":\"~3.7.5\"}}");

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");








const _c0 = ["audioElement"];
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.application.toggleDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "track_changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r2.application.settings.details);
} }
class AppComponent {
    constructor(application, soundService) {
        this.application = application;
        this.soundService = soundService;
        // document.addEventListener('touchmove',  (event: any) => {
        //   if (event.scale !== 1) { event.preventDefault(); }
        // }, { passive: false });
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
    } }, decls: 6, vars: 4, consts: [["audioElement", ""], ["outlet", "outlet"], ["class", "theme-chooser", 4, "ngIf"], [1, "theme-chooser"], [1, "button", "icon", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "audio", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 4, 2, "div", 2);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mobile", ctx.application.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", _r1 && _r1.isActivated && _r1.activatedRoute);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.application.isMobile);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: [".theme-chooser[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXERldmVsb3BtZW50XFxkYXJ0cy1zY29yZWJvYXJkLW5nL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRoZW1lLWNob29zZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG4iLCIudGhlbWUtY2hvb3NlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufSJdfQ== */"], data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]] } });
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
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");





















function AroundClockComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r133.settings.toggleJump(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Enable Jump ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r135.settings.togglePunishment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Punishment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r136.settings.toggleSaboteur(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Saboteur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r137.settings.togglePromoter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Promoter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r138.settings.toggleTreeLives(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Tree Lives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r139.settings.toggleFiveLives(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Five Lives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r140.settings.toggleSevenLives(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Seven Lives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r141.settings.toggleTenLives(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Ten Lives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r142.settings.toggleFirstDeath(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " First Death ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r143.settings.togglePalFirst(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Pal First ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r144.settings.setFavorite(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " FAV ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r145.settings.setInverseFavorite(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " iFAV ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Field's order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r146.settings.setStyle(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Ascending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r147.settings.setStyle(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Descending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r148.settings.setStyle(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Clockwise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r149.settings.setStyle(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Anticlockwise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r150.settings.setStyle(8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " TripleClock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r151.settings.setStyle(9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " ZoneClock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r152.settings.setStyle(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Random ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r153.settings.setStyle(6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Random11 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r154.settings.setStyle(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Recurrence ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r155.settings.setStyle(7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Pirate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r128.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r128.settings.jump);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r128.settings.punishment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r128.settings.saboteur);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r128.settings.promoter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r128.settings.life === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r128.settings.life === 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r128.settings.life === 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r128.settings.life === 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r128.settings.firstDeath);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r128.settings.palFirst);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r128.settings.style == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r128.settings.style == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r128.settings.style == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r128.settings.style == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r128.settings.style == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r128.settings.style == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r128.settings.style == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r128.settings.style == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r128.settings.style == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r128.settings.style == 7);
} }
function AroundClockComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 4);
} if (rf & 2) {
    const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r129.playground);
} }
function AroundClockComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r157 = ctx.$implicit;
    const i_r158 = ctx.index;
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player\n        ", i_r158 === ctx_r156.game.actualPlayerIndex ? "highlighted" : "", "\n        ", ctx_r156.settings.life !== 0 && player_r157.isInactive() ? "inactive" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r157)("scoreDisplayed", false)("lifeDisplayed", ctx_r156.settings.life !== 0)("hasContent", false);
} }
function AroundClockComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_div_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r160); const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r159.toggleHiddenInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AroundClockComponent_div_4_div_3_Template, 2, 8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r130.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", ctx_r130.hiddenInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r130.getDistanceFromRandom());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r130.game.players);
} }
function AroundClockComponent_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 4);
} if (rf & 2) {
    const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r131.playground);
} }
function AroundClockComponent_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 4);
} if (rf & 2) {
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r132.playground);
} }
class AroundClockComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super('Around The Clock', application, game, route, dialogService, soundService, botService, statisticsService, 'around-clock', 2);
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
                        hasChanges = true;
                        otherPlayerState.decreaseActFieldIndex(this.settings.jump ? originalMulti : 1);
                    }
                    else if (otherPlayerState.actFieldIndex !== this.settings.fields.length - 1) {
                        otherPlayerState.increaseActFieldIndex(this.settings.jump ? originalMulti : 1);
                        if (otherPlayerState.actFieldIndex >= this.settings.fields.length) {
                            otherPlayerState.actFieldIndex = this.settings.fields.length - 1;
                        }
                        hasChanges = true;
                    }
                }
            });
        }
        return hasChanges;
    }
}
AroundClockComponent.ɵfac = function AroundClockComponent_Factory(t) { return new (t || AroundClockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_10__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_5__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"])); };
AroundClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AroundClockComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], [1, "button", "shortmedium", 3, "click"], [1, "player_container"], [1, "hidden-info", 3, "click"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "scoreDisplayed", "lifeDisplayed", "hasContent"]], template: function AroundClockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AroundClockComponent_app_settings_1_Template, 52, 41, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AroundClockComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AroundClockComponent_div_4_Template, 4, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AroundClockComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AroundClockComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
            case 10:
                this.fields = AroundClockSettings.getZoneClockFields().reverse();
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
    setInverseFavorite() {
        this.jump = true;
        this.style = 10;
        this.firstDeath = true;
        this.punishment = true;
        this.life = 10;
        this.promoter = false;
        this.saboteur = true;
        this.palFirst = true;
        this.fields = AroundClockSettings.getZoneClockFields().reverse();
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
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");



















function CaptureTheFlagComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureTheFlagComponent_app_settings_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r244); const ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r243.settings.randomCity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "City (5) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureTheFlagComponent_app_settings_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r244); const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r245.settings.randomCountry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Country (10) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureTheFlagComponent_app_settings_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r244); const ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r246.settings.randomContinent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contin. (20) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureTheFlagComponent_app_settings_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r244); const ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r247.settings.toggleNoScore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r238.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r238.settings.style === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r238.settings.style === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r238.settings.style === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r238.settings.noScore);
} }
function CaptureTheFlagComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 4);
} if (rf & 2) {
    const ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r239.playground);
} }
function CaptureTheFlagComponent_div_4_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r252 = ctx.$implicit;
    const player_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("field ", ctx_r251.isActiveField(field_r252) ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r252 === 20 ? "B" : field_r252 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r251.getFieldValue(player_r249, field_r252));
} }
function CaptureTheFlagComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CaptureTheFlagComponent_div_4_div_1_div_3_Template, 4, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r249 = ctx.$implicit;
    const i_r250 = ctx.index;
    const ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r250 === ctx_r248.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r249);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r248.settings.fields);
} }
function CaptureTheFlagComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CaptureTheFlagComponent_div_4_div_1_Template, 4, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r240.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r240.game.players);
} }
function CaptureTheFlagComponent_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 4);
} if (rf & 2) {
    const ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r241.playground);
} }
function CaptureTheFlagComponent_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 4);
} if (rf & 2) {
    const ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r242.playground);
} }
class CaptureTheFlagComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super('Capture the Flag', application, game, route, dialogService, soundService, botService, statisticsService, 'ctf');
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
CaptureTheFlagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaptureTheFlagComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], [1, "button", "shortmedium", 3, "click"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player"], [1, "field-set"], [1, "small"]], template: function CaptureTheFlagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CaptureTheFlagComponent_app_settings_1_Template, 9, 9, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CaptureTheFlagComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CaptureTheFlagComponent_div_4_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CaptureTheFlagComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CaptureTheFlagComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");




















function CricketComponent_app_settings_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98); const i_r96 = ctx.index; const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r97.settings.setNumber(i_r96); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const numb_r95 = ctx.$implicit;
    const i_r96 = ctx.index;
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r94.settings.isFieldAllowed(i_r96));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r95 === 21 ? "B" : numb_r95, " ");
} }
function CricketComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CricketComponent_app_settings_1_button_3_Template, 2, 3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r99.settings.upper(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Upper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r101.settings.lower(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lower");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r102.settings.left(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r103.settings.right(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r104.settings.odd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Odd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r105.settings.even(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Even");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r106.settings.prime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r107.settings.notPrime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Not prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r108.settings.randomize(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Random 05");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r109.settings.randomize(10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Random 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r110.settings.randomize(15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Random 15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.settings.small(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r112.settings.high(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r113.settings.star(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r114.settings.cross(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cross");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r115.settings.all(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r116.settings.setStyle(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Classic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r117.settings.setStyle(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cut-Throat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r118.settings.setStyle(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "No Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r119.settings.setStyle(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Black Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r89.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r89.settings.getNumbers());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r89.settings.style == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r89.settings.style == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r89.settings.style == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r89.settings.style == 4);
} }
function CricketComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 4);
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r90.playground);
} }
function CricketComponent_div_4_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r124 = ctx.$implicit;
    const player_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("field ", ctx_r123.isActiveField(player_r121, field_r124) && ctx_r123.settings.isBlackOutGame() ? "active" : "", " ", !ctx_r123.isFieldDoneForPlayer(player_r121, field_r124) ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r124 === 20 ? "B" : field_r124 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r123.getFieldValue(player_r121, field_r124));
} }
function CricketComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_div_4_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const player_r121 = ctx.$implicit; const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r126.changePlayerToDisplay(player_r121); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CricketComponent_div_4_div_1_div_3_Template, 4, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r121 = ctx.$implicit;
    const i_r122 = ctx.index;
    const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r122 === ctx_r120.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r120.settings.fields);
} }
function CricketComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CricketComponent_div_4_div_1_Template, 4, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r91.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r91.game.players);
} }
function CricketComponent_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 4);
} if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r92.playground);
} }
function CricketComponent_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 4);
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r93.playground);
} }
class CricketComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super('Ultimate Cricket', application, game, route, dialogService, soundService, botService, statisticsService, 'cricket');
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
CricketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CricketComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], ["class", "button", 3, "primary", "click", 4, "ngFor", "ngForOf"], [1, "button", "shortmedium", 3, "click"], [1, "button", 3, "click"], [1, "player_container"], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "player"], [1, "field-set"], [3, "class", 4, "ngFor", "ngForOf"], [1, "small"]], template: function CricketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CricketComponent_app_settings_1_Template, 48, 10, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CricketComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CricketComponent_div_4_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CricketComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CricketComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");























function DuelComponent_app_settings_1_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r311 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r311); const i_r309 = ctx.index; const ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r310.settings.setNumber(i_r309); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const numb_r308 = ctx.$implicit;
    const i_r309 = ctx.index;
    const ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r307.settings.isFieldAllowed(i_r309));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r308 === 21 ? "B" : numb_r308, " ");
} }
function DuelComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r313 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Life limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DuelComponent_app_settings_1_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313); const ctx_r312 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r312.settings.startPoint = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DuelComponent_app_settings_1_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313); const ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r314.settings.targetPoint = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Punishment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DuelComponent_app_settings_1_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313); const ctx_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r315.settings.punishment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313); const ctx_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r316.settings.toggleHandOver(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Hand Over");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DuelComponent_app_settings_1_button_23_Template, 2, 3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313); const ctx_r317 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r317.settings.upper(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Upper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313); const ctx_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r318.settings.lower(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lower");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313); const ctx_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r319.settings.left(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313); const ctx_r320 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r320.settings.right(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313); const ctx_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r321.settings.odd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Odd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313); const ctx_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r322.settings.even(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Even");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313); const ctx_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r323.settings.prime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313); const ctx_r324 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r324.settings.notPrime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Not prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313); const ctx_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r325.settings.randomize(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Random 05");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313); const ctx_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r326.settings.randomize(10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Random 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313); const ctx_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r327.settings.randomize(15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Random 15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313); const ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r328.settings.small(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313); const ctx_r329 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r329.settings.high(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313); const ctx_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r330.settings.star(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313); const ctx_r331 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r331.settings.cross(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Cross");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r313); const ctx_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r332.settings.all(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r302.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r302.settings.startPoint);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r302.settings.targetPoint);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r302.settings.punishment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r302.settings.handover ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r302.settings.getNumbers());
} }
function DuelComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 4);
} if (rf & 2) {
    const ctx_r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r303.playground);
} }
function DuelComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r334 = ctx.$implicit;
    const i_r335 = ctx.index;
    const ctx_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player ", i_r335 === ctx_r333.game.actualPlayerIndex ? "highlighted" : "", " ", ctx_r333.isInactive(player_r334) ? "inactive" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r334)("hasContent", false);
} }
function DuelComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DuelComponent_div_4_div_1_Template, 2, 6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r304.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r304.game.players);
} }
function DuelComponent_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 4);
} if (rf & 2) {
    const ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r305.playground);
} }
function DuelComponent_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 4);
} if (rf & 2) {
    const ctx_r306 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r306.playground);
} }
class DuelComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super('Duel', application, game, route, dialogService, soundService, botService, statisticsService, 'duel', 2);
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
        else if (this.isNotOwnField(fieldIndex)) {
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
        return this.getPlayerState(this.game.getActualPlayer()).ownFields.some(i => i === fieldIndex);
    }
    isSecondaryField(fieldIndex) {
        return this.settings.isFieldAllowed(fieldIndex) &&
            !this.game.players.some(p => this.getPlayerState(p).ownFields.some(i => i === fieldIndex));
    }
    isAlertField(fieldIndex) {
        return this.game.players.some(p => p != this.game.getActualPlayer() && this.getPlayerState(p).ownFields.some(i => i === fieldIndex));
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
    isNotOwnField(fieldIndex) {
        return !this.settings.isFieldAllowed(fieldIndex) ||
            this.game.players.some(p => p != this.game.getActualPlayer() && this.getPlayerState(p).ownFields.some(i => i === fieldIndex));
    }
}
DuelComponent.ɵfac = function DuelComponent_Factory(t) { return new (t || DuelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"])); };
DuelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DuelComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], [1, "field-set"], ["appearance", "outline", 1, "big"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], [1, "button", "shortmedium", 3, "click"], ["class", "button", 3, "primary", "click", 4, "ngFor", "ngForOf"], [1, "button", 3, "click"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]], template: function DuelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DuelComponent_app_settings_1_Template, 57, 7, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DuelComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DuelComponent_div_4_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DuelComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DuelComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_19__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_20__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_21__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");



















function FivesComponent_app_settings_1_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FivesComponent_app_settings_1_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r206); const divider_r204 = ctx.$implicit; const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r205.settings.setDivider(divider_r204); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const divider_r204 = ctx.$implicit;
    const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r202.settings.divider === divider_r204);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](divider_r204);
} }
function FivesComponent_app_settings_1_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FivesComponent_app_settings_1_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r209); const limit_r207 = ctx.$implicit; const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r208.settings.setLimit(limit_r207); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const limit_r207 = ctx.$implicit;
    const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r203.settings.limit === limit_r207);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](limit_r207);
} }
function FivesComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FivesComponent_app_settings_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r211); const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r210.settings.toggleNoCheat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " No Cheat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FivesComponent_app_settings_1_button_8_Template, 2, 3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FivesComponent_app_settings_1_button_12_Template, 2, 3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r197.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r197.settings.noCheat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r197.settings.getSelectableDividers());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r197.settings.getSelectableLimits());
} }
function FivesComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 4);
} if (rf & 2) {
    const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r198.playground);
} }
function FivesComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r213 = ctx.$implicit;
    const i_r214 = ctx.index;
    const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r214 === ctx_r212.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r213)("hasContent", false);
} }
function FivesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FivesComponent_div_4_div_1_Template, 2, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r199.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r199.game.players);
} }
function FivesComponent_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 4);
} if (rf & 2) {
    const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r200.playground);
} }
function FivesComponent_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 4);
} if (rf & 2) {
    const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r201.playground);
} }
class FivesComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super('Fives', application, game, route, dialogService, soundService, botService, statisticsService, 'fives');
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
FivesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FivesComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], [1, "button", "big", 3, "click"], ["class", "button", 3, "primary", "click", 4, "ngFor", "ngForOf"], [1, "button", 3, "click"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]], template: function FivesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FivesComponent_app_settings_1_Template, 13, 5, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FivesComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FivesComponent_div_4_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FivesComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FivesComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");




















function HareAndHoundComponent_app_settings_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HareAndHoundComponent_app_settings_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r223); const start_r221 = ctx.$implicit; const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r222.settings.setHoundStart(start_r221 - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const start_r221 = ctx.$implicit;
    const ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r220.settings.houndStartIndex + 1 === start_r221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](start_r221);
} }
function HareAndHoundComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hound start position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HareAndHoundComponent_app_settings_1_button_3_Template, 2, 3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r215.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r215.settings.getSelectableHoundStart());
} }
function HareAndHoundComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 4);
} if (rf & 2) {
    const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r216.playground);
} }
function HareAndHoundComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r225 = ctx.$implicit;
    const i_r226 = ctx.index;
    const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r226 === ctx_r224.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r225)("hasContent", false);
} }
function HareAndHoundComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HareAndHoundComponent_div_4_div_1_Template, 2, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r217.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r217.game.players);
} }
function HareAndHoundComponent_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 4);
} if (rf & 2) {
    const ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r218.playground);
} }
function HareAndHoundComponent_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 4);
} if (rf & 2) {
    const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r219.playground);
} }
class HareAndHoundComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super('Hare and Hound', application, game, route, dialogService, soundService, botService, statisticsService, 'hare-hound', 2, 2);
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
HareAndHoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HareAndHoundComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], ["class", "button", 3, "primary", "click", 4, "ngFor", "ngForOf"], [1, "button", 3, "click"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]], template: function HareAndHoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HareAndHoundComponent_app_settings_1_Template, 4, 2, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HareAndHoundComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HareAndHoundComponent_div_4_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HareAndHoundComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HareAndHoundComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");



















function ImitatorComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Number of Round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r260); const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r259.settings.setRound(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r260); const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r261.settings.setRound(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r260); const ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r262.settings.setRound(10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r260); const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r263.settings.setRound(15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 15 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r260); const ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r264.settings.setRound(20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 20 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r254.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r254.settings.round === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r254.settings.round === 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r254.settings.round === 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r254.settings.round === 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r254.settings.round === 20);
} }
function ImitatorComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 7);
} if (rf & 2) {
    const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r255.playground)("reversRound", ctx_r255.settings.round);
} }
function ImitatorComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r266 = ctx.$implicit;
    const i_r267 = ctx.index;
    const ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r267 === ctx_r265.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r266)("hasContent", false);
} }
function ImitatorComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImitatorComponent_div_4_div_1_Template, 2, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r256.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r256.game.players);
} }
function ImitatorComponent_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 5);
} if (rf & 2) {
    const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r257.playground);
} }
function ImitatorComponent_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 5);
} if (rf & 2) {
    const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r258.playground);
} }
class ImitatorComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super('Imitator', application, game, route, dialogService, soundService, botService, statisticsService, 'imitator');
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
ImitatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImitatorComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], [3, "playground", "reversRound", 4, "ngIf"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], [1, "button", 3, "click"], [3, "playground", "reversRound"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]], template: function ImitatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImitatorComponent_app_settings_1_Template, 13, 11, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImitatorComponent_app_game_toolbar_3_Template, 1, 2, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImitatorComponent_div_4_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ImitatorComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ImitatorComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");























function KillerComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Life limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KillerComponent_app_settings_1_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r187); const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r186.settings.numberOfLives = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KillerComponent_app_settings_1_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r187); const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r188.settings.boardingLimit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KillerComponent_app_settings_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r187); const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r189.settings.toggleSuicide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Suicide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r181.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r181.settings.numberOfLives);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r181.settings.boardingLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r181.settings.suicide);
} }
function KillerComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 4);
} if (rf & 2) {
    const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r182.playground);
} }
function KillerComponent_div_4_div_1_ng_container_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Boarding: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const player_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r194.getPlayerState(player_r191).boarding);
} }
function KillerComponent_div_4_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Field: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Life: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, KillerComponent_div_4_div_1_ng_container_2_ng_container_11_Template, 4, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const player_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r193.getPlayerField(player_r191));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", player_r191.life, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r193.getPlayerState(player_r191).killer);
} }
function KillerComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KillerComponent_div_4_div_1_ng_container_2_Template, 12, 3, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r191 = ctx.$implicit;
    const i_r192 = ctx.index;
    const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player ", i_r192 === ctx_r190.game.actualPlayerIndex ? "highlighted" : "", " ", player_r191.isInactive() ? "inactive" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r191)("scoreDisplayed", false)("highlighted", ctx_r190.getPlayerState(player_r191).killer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r190.getPlayerField(player_r191) !== "0");
} }
function KillerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KillerComponent_div_4_div_1_Template, 3, 8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r183.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r183.game.players);
} }
function KillerComponent_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 4);
} if (rf & 2) {
    const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r184.playground);
} }
function KillerComponent_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 4);
} if (rf & 2) {
    const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r185.playground);
} }
const DANGER_ZONE_ICON = 'sentiment_very_dissatisfied';
class KillerComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super('Killer', application, game, route, dialogService, soundService, botService, statisticsService, 'killer', 2);
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
KillerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KillerComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], [1, "field-set"], ["appearance", "outline", 1, "big"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], [1, "button", "shortmedium", 3, "click"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "scoreDisplayed", "highlighted"], [4, "ngIf"], [1, "score"], [1, "clear"], [1, "line"]], template: function KillerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KillerComponent_app_settings_1_Template, 15, 5, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KillerComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KillerComponent_div_4_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, KillerComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, KillerComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDivider"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_19__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_20__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_21__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");






















function KnockoutComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KnockoutComponent_app_settings_1_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r233); const ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r232.settings.numberOfLives = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KnockoutComponent_app_settings_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r233); const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r234.settings.toggleKiller(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Below the belt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r227.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r227.settings.numberOfLives);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r227.settings.killer);
} }
function KnockoutComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 10);
} if (rf & 2) {
    const ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r228.playground)("info", ctx_r228.getInfo());
} }
function KnockoutComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r236 = ctx.$implicit;
    const i_r237 = ctx.index;
    const ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player ", i_r237 === ctx_r235.game.actualPlayerIndex ? "highlighted" : "", " ", player_r236.isInactive() ? "inactive" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r236)("scoreDisplayed", true)("lifeDisplayed", true)("hasContent", false);
} }
function KnockoutComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KnockoutComponent_div_4_div_1_Template, 2, 8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r229.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r229.game.players);
} }
function KnockoutComponent_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 5);
} if (rf & 2) {
    const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r230.playground);
} }
function KnockoutComponent_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 5);
} if (rf & 2) {
    const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r231.playground);
} }
class KnockoutComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super('Knockout', application, game, route, dialogService, soundService, botService, statisticsService, 'knockout', 2);
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
KnockoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KnockoutComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], [3, "playground", "info", 4, "ngIf"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], [1, "field-set"], ["appearance", "outline", 1, "big"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], [1, "button", "big", 3, "click"], [3, "playground", "info"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "scoreDisplayed", "lifeDisplayed", "hasContent"]], template: function KnockoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KnockoutComponent_app_settings_1_Template, 11, 4, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KnockoutComponent_app_game_toolbar_3_Template, 1, 2, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KnockoutComponent_div_4_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, KnockoutComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, KnockoutComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_17__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_18__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_19__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_20__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");




















function ScamComponent_app_settings_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r277 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r277); const i_r275 = ctx.index; const ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r276.settings.setNumber(i_r275); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const numb_r274 = ctx.$implicit;
    const i_r275 = ctx.index;
    const ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r273.settings.isFieldAllowed(i_r275));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r274 === 21 ? "B" : numb_r274, " ");
} }
function ScamComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScamComponent_app_settings_1_button_3_Template, 2, 3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279); const ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r278.settings.upper(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Upper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279); const ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r280.settings.lower(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lower");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279); const ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r281.settings.left(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279); const ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r282.settings.right(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279); const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r283.settings.odd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Odd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279); const ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r284.settings.even(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Even");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279); const ctx_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r285.settings.prime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279); const ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r286.settings.notPrime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Not prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279); const ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r287.settings.randomize(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Random 05");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279); const ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r288.settings.randomize(10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Random 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279); const ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r289.settings.randomize(15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Random 15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279); const ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r290.settings.small(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279); const ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r291.settings.high(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279); const ctx_r292 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r292.settings.star(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279); const ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r293.settings.cross(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cross");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279); const ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r294.settings.all(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279); const ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r295.settings.setStyle(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Classic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279); const ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r296.settings.toggleStopper(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Stopper ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279); const ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r297.settings.setStyle(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "No Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279); const ctx_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r298.settings.togglePunishment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Punish(25) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r268.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r268.settings.getNumbers());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r268.settings.style == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r268.settings.stopper);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r268.settings.style == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r268.settings.punishment);
} }
function ScamComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 4);
} if (rf & 2) {
    const ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r269.playground);
} }
function ScamComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r300 = ctx.$implicit;
    const i_r301 = ctx.index;
    const ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r301 === ctx_r299.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r300)("hasContent", false)("highlighted", ctx_r299.settings.stopper && ctx_r299.game.isTheFirstPlayer(player_r300))("scoreDisplayed", !ctx_r299.settings.stopper || !ctx_r299.game.isTheFirstPlayer(player_r300));
} }
function ScamComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScamComponent_div_4_div_1_Template, 2, 7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r270.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r270.game.players);
} }
function ScamComponent_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 4);
} if (rf & 2) {
    const ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r271.playground);
} }
function ScamComponent_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 4);
} if (rf & 2) {
    const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r272.playground);
} }
class ScamComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super('Scam', application, game, route, dialogService, soundService, botService, statisticsService, 'scam', 2);
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
        return !!this.game.numbs[fieldIndex];
    }
    isAlertField(fieldIndex) {
        return this.settings.punishment && !this.game.numbs[fieldIndex];
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
ScamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScamComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], ["class", "button", 3, "primary", "click", 4, "ngFor", "ngForOf"], [1, "button", "shortmedium", 3, "click"], [1, "button", 3, "click"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent", "highlighted", "scoreDisplayed"]], template: function ScamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScamComponent_app_settings_1_Template, 48, 10, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScamComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ScamComponent_div_4_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ScamComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ScamComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");
/* harmony import */ var _components_number_plate_shanghai_number_plate_shanghai_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~components/number-plate-shanghai/number-plate-shanghai.component */ "./src/app/shared/components/number-plate-shanghai/number-plate-shanghai.component.ts");





















function ShanghaiComponent_app_settings_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170); const i_r168 = ctx.index; const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r169.settings.setNumber(i_r168); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const numb_r167 = ctx.$implicit;
    const i_r168 = ctx.index;
    const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r166.settings.numbs[i_r168]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r167 === 21 ? "B" : numb_r167, " ");
} }
function ShanghaiComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShanghaiComponent_app_settings_1_button_3_Template, 2, 3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r172); const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r171.settings.randomize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Randomize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r172); const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r173.settings.toggleNoScore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r172); const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r174.settings.toggleHalveIt(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Halve It ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r161.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r161.settings.getNumbers());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r161.settings.noScore);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r161.settings.halveIt);
} }
function ShanghaiComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 5);
} if (rf & 2) {
    const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r162.playground);
} }
function ShanghaiComponent_div_4_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r179 = ctx.$implicit;
    const player_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("field ", ctx_r178.isActiveField(field_r179) ? "active" : "", " ", ctx_r178.isFieldDoneForPlayer(field_r179) ? "" : "highlighted", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r179 === 20 ? "B" : field_r179 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r178.getFieldValue(player_r176, field_r179));
} }
function ShanghaiComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShanghaiComponent_div_4_div_1_div_3_Template, 4, 6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r176 = ctx.$implicit;
    const i_r177 = ctx.index;
    const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r177 === ctx_r175.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r175.settings.fields);
} }
function ShanghaiComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShanghaiComponent_div_4_div_1_Template, 4, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r163.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r163.game.players);
} }
function ShanghaiComponent_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 5);
} if (rf & 2) {
    const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r164.playground);
} }
function ShanghaiComponent_app_number_plate_shanghai_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-shanghai", 14);
} if (rf & 2) {
    const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r165.playground)("actualIndex", ctx_r165.getActualFieldIndex());
} }
class ShanghaiComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super('Shanghai / Halve It', application, game, route, dialogService, soundService, botService, statisticsService, 'shanghai');
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
ShanghaiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShanghaiComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground", "actualIndex", 4, "ngIf"], [3, "playground"], ["class", "button", 3, "primary", "click", 4, "ngFor", "ngForOf"], [1, "button", "shortmedium", 3, "click"], [1, "button", 3, "click"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player"], [1, "field-set"], [1, "small"], [3, "playground", "actualIndex"]], template: function ShanghaiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShanghaiComponent_app_settings_1_Template, 11, 6, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShanghaiComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShanghaiComponent_div_4_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShanghaiComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ShanghaiComponent_app_number_plate_shanghai_6_Template, 1, 2, "app-number-plate-shanghai", 4);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateComponent"], _components_number_plate_shanghai_number_plate_shanghai_component__WEBPACK_IMPORTED_MODULE_18__["NumberPlateShanghaiComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ConfirmDialogComponent_mat_dialog_content_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.data.content);
} }
class ConfirmDialogComponent {
    constructor(dialogRef, application, data) {
        this.dialogRef = dialogRef;
        this.application = application;
        this.data = data;
    }
    cancel() {
        this.dialogRef.close(false);
    }
    confirm() {
        this.dialogRef.close(true);
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["ng-component"]], decls: 10, vars: 4, consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], ["class", "body-2", 4, "ngIf"], [1, "button", "primary", 3, "click"], [1, "button", 3, "click"], [1, "body-2"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_8_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mobile", ctx.application.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.data.content);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"]], styles: [".dialog-container[_ngcontent-%COMP%] {\n  width: 50vw;\n  text-align: center;\n}\n.dialog-container.mobile[_ngcontent-%COMP%] {\n  width: auto;\n}\n.dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvRDpcXERldmVsb3BtZW50XFxkYXJ0cy1zY29yZWJvYXJkLW5nL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGNvbmZpcm0tZGlhbG9nXFxjb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtBQ0NKO0FERUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQUo7QURHRTtFQUNFLG1CQUFBO0FDREo7QURJRTtFQUNFLDZCQUFBO0VBQ0Esc0JBQUE7QUNGSjtBRElJO0VBQ0UsV0FBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAmLm1vYmlsZSB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcblxyXG4gIC5zdWJ0aXRsZS0xIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgbWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICBtYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuZGlhbG9nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MHZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGlhbG9nLWNvbnRhaW5lci5tb2JpbGUge1xuICB3aWR0aDogYXV0bztcbn1cbi5kaWFsb2ctY29udGFpbmVyIC5zdWJ0aXRsZS0xIHtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWFjdGlvbnMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLWJvdHRvbTogLTAuNXJlbTtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctYWN0aW9ucyBidXR0b24ge1xuICB3aWR0aDogNzVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfirmDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: 'confirm-dialog.component.html',
                styleUrls: ['confirm-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"] }, { type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationStateService"] }, { type: undefined, decorators: [{
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
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






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
    const player_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("winner", player_r7.win);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", i_r8 + 1, ". ", player_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", player_r7.win);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](player_r7.score);
} }
function DialogComponent_mat_dialog_content_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DialogComponent_mat_dialog_content_4_div_3_Template, 6, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.data.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.data.players);
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
DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["ng-component"]], decls: 8, vars: 3, consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], ["class", "body-2", 4, "ngIf"], [1, "button", "primary", 3, "mat-dialog-close"], [1, "body-2"], ["class", "score-line", 3, "winner", 4, "ngFor", "ngForOf"], [1, "score-line"], ["color", "warn", 4, "ngIf"], ["color", "warn"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".dialog-container[_ngcontent-%COMP%] {\n  width: 70vw;\n}\n.dialog-container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  white-space: nowrap;\n}\n.dialog-container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-size: 50px;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   .score-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n}\n.dialog-container[_ngcontent-%COMP%]   .score-line.winner[_ngcontent-%COMP%] {\n  background: var(--basic_1);\n}\n.dialog-container[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 30px;\n  padding: 0;\n  margin: 0;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxkaWFsb2dcXGRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBRENFO0VBQ0UsbUJBQUE7QUNDSjtBREVFO0VBQ0UscUJBQUE7QUNBSjtBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FES0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNISjtBREtJO0VBQ0UsMEJBQUE7QUNITjtBRFFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDTko7QURTRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDUEo7QURVRTtFQUNFLG1CQUFBO0FDUko7QURXRTtFQUNFLDZCQUFBO0VBQ0Esc0JBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDcwdnc7XHJcblxyXG4gIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG5cclxuICB0ZCB7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgfVxyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICAuc3VidGl0bGUtMSB7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5zY29yZS1saW5lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAmLndpbm5lciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhc2ljXzEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5wbGF5ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBtYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIG1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XHJcbiAgfVxyXG59XHJcbiIsIi5kaWFsb2ctY29udGFpbmVyIHtcbiAgd2lkdGg6IDcwdnc7XG59XG4uZGlhbG9nLWNvbnRhaW5lciB0ZDpmaXJzdC1jaGlsZCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZGlhbG9nLWNvbnRhaW5lciB0ZCB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1pY29uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmRpYWxvZy1jb250YWluZXIgLnN1YnRpdGxlLTEge1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmRpYWxvZy1jb250YWluZXIgLnNjb3JlLWxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uZGlhbG9nLWNvbnRhaW5lciAuc2NvcmUtbGluZS53aW5uZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYXNpY18xKTtcbn1cbi5kaWFsb2ctY29udGFpbmVyIC5wbGF5ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWFjdGlvbnMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLWJvdHRvbTogLTAuNXJlbTtcbn0iXX0= */"] });
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
    const stat_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 7, stat_r14.s, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 10, ctx_r13.getDuration(stat_r14), "mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r14.g);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r14.c);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r14.r + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.getPlayers(stat_r14.w));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.getPlayers(stat_r14.l));
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
GameHistoryDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameHistoryDialogComponent, selectors: [["ng-component"]], decls: 27, vars: 3, consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], [1, "body-2"], ["cellpadding", "0", "cellspacing", "0", 1, "statistics-table"], [4, "ngFor", "ngForOf"], [1, "button", "primary", 3, "mat-dialog-close"]], template: function GameHistoryDialogComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: space-between;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n.dialog-container[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%] {\n  height: 85vh;\n  max-height: unset !important;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 0 1rem 0;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.2rem;\n  font-weight: normal;\n  font-size: 13px;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS1oaXN0b3J5LWRpYWxvZy9EOlxcRGV2ZWxvcG1lbnRcXGRhcnRzLXNjb3JlYm9hcmQtbmcvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZ2FtZS1oaXN0b3J5LWRpYWxvZ1xcZ2FtZS1oaXN0b3J5LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS1oaXN0b3J5LWRpYWxvZy9nYW1lLWhpc3RvcnktZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0RKO0FESUU7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0FDRko7QURLRTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtBQ0hKO0FETUU7RUFDRSxrQkFBQTtBQ0pKO0FETUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNKTjtBRE1NO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDSlI7QURPTTtFQUNFLGdCQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9nYW1lLWhpc3RvcnktZGlhbG9nL2dhbWUtaGlzdG9yeS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWNvbnRhaW5lciB7XHJcblxyXG4gIC5zdWJ0aXRsZS0xIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIG1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XHJcbiAgfVxyXG5cclxuICAubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogODV2aDtcclxuICAgIG1heC1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBtYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxuICAgIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuXHJcbiAgICAgIHRoLCB0ZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGg6Zmlyc3QtY2hpbGQsIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5kaWFsb2ctY29udGFpbmVyIC5zdWJ0aXRsZS0xIHtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XG59XG4uZGlhbG9nLWNvbnRhaW5lciAubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgaGVpZ2h0OiA4NXZoO1xuICBtYXgtaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAwIDFyZW0gMDtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctY29udGVudCB0YWJsZSB0aCwgLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHRhYmxlIHRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctY29udGVudCB0YWJsZSB0aDpmaXJzdC1jaGlsZCwgLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */"] });
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
    const stat_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r12.n);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r12.w);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r12.l);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r12.l + stat_r12.w);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r11.getRatio(stat_r12), " %");
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
GameStatisticsDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameStatisticsDialogComponent, selectors: [["ng-component"]], decls: 21, vars: 2, consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], [1, "body-2"], ["cellpadding", "0", "cellspacing", "0", 1, "statistics-table"], [4, "ngFor", "ngForOf"], [1, "button", "primary", 3, "mat-dialog-close"]], template: function GameStatisticsDialogComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: [".dialog-container[_ngcontent-%COMP%] {\n  width: 73vw;\n}\n.dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  height: 64vh;\n  overflow-y: scroll;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 0 1rem 0;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.2rem;\n  font-weight: normal;\n  font-size: 13px;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS1zdGF0aXN0aWNzLWRpYWxvZy9EOlxcRGV2ZWxvcG1lbnRcXGRhcnRzLXNjb3JlYm9hcmQtbmcvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZ2FtZS1zdGF0aXN0aWNzLWRpYWxvZ1xcZ2FtZS1zdGF0aXN0aWNzLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS1zdGF0aXN0aWNzLWRpYWxvZy9nYW1lLXN0YXRpc3RpY3MtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLDZCQUFBO0VBQ0Esc0JBQUE7QUNBSjtBREdFO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0FDRko7QURJSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0ZOO0FESU07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNGUjtBREtNO0VBQ0UsZ0JBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2dhbWUtc3RhdGlzdGljcy1kaWFsb2cvZ2FtZS1zdGF0aXN0aWNzLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctY29udGFpbmVyIHtcclxuICB3aWR0aDogNzN2dztcclxuXHJcbiAgLnN1YnRpdGxlLTEge1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICBtYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgbWF0LWRpYWxvZy1jb250ZW50IHtcclxuXHJcbiAgICBoZWlnaHQ6IDY0dmg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG5cclxuICAgICAgdGgsIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aDpmaXJzdC1jaGlsZCwgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmRpYWxvZy1jb250YWluZXIge1xuICB3aWR0aDogNzN2dztcbn1cbi5kaWFsb2ctY29udGFpbmVyIC5zdWJ0aXRsZS0xIHtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHtcbiAgaGVpZ2h0OiA2NHZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWNvbnRlbnQgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDAgMXJlbSAwO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHRhYmxlIHRoLCAuZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWNvbnRlbnQgdGFibGUgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHRhYmxlIHRoOmZpcnN0LWNoaWxkLCAuZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWNvbnRlbnQgdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"] });
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");







function GameToolbarComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.quit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameToolbarComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.showSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "build");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
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
GameToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameToolbarComponent, selectors: [["app-game-toolbar"]], inputs: { playground: "playground", reversRound: "reversRound", info: "info" }, decls: 18, vars: 5, consts: [[1, "toolbar"], ["class", "button icon-button", 3, "click", 4, "ngIf"], [1, "button", "icon-button", 3, "click"], [1, "round-info"], [1, "theme-chooser"], [1, "button", "primary", "icon", 3, "click"]], template: function GameToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameToolbarComponent_button_1_Template, 3, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameToolbarComponent_button_2_Template, 3, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_3_listener() { return ctx.newGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_6_listener() { return ctx.undo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "undo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_12_listener() { return ctx.quit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_15_listener() { return ctx.showSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "build");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.application.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.application.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getInfo(), "\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".toolbar[_ngcontent-%COMP%] {\n  display: flex;\n}\n.toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 2px 2px 0 2px;\n  flex: 1;\n  height: 60px;\n}\n.round-info[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 50px;\n  left: 10px;\n  font-size: 8em;\n  opacity: 0.3;\n  width: 30vw;\n  line-height: 150px;\n  text-align: center;\n  text-shadow: 0px 3px 1px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);\n}\n.round-info.detailed[_ngcontent-%COMP%] {\n  width: 30vw;\n}\n.theme-chooser[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10b29sYmFyL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxnYW1lLXRvb2xiYXJcXGdhbWUtdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10b29sYmFyL2dhbWUtdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBRENFO0VBQ0UscUJBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQ0NKO0FER0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZHQUFBO0FDQUY7QURFRTtFQUNFLFdBQUE7QUNBSjtBRElBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10b29sYmFyL2dhbWUtdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAycHggMnB4IDAgMnB4O1xyXG4gICAgZmxleDogMTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5yb3VuZC1pbmZvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiA4ZW07XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAzcHggMXB4IHJnYigwIDAgMCAvIDIwJSksIDBweCAycHggMnB4IHJnYigwIDAgMCAvIDE0JSksIDBweCAxcHggNXB4IHJnYigwIDAgMCAvIDEyJSk7XHJcblxyXG4gICYuZGV0YWlsZWQge1xyXG4gICAgd2lkdGg6IDMwdnc7XHJcbiAgfVxyXG59XHJcblxyXG4udGhlbWUtY2hvb3NlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiA0NXB4O1xyXG59XHJcblxyXG4iLCIudG9vbGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udG9vbGJhciBidXR0b24ge1xuICBtYXJnaW46IDJweCAycHggMCAycHg7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLnJvdW5kLWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTBweDtcbiAgbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiA4ZW07XG4gIG9wYWNpdHk6IDAuMztcbiAgd2lkdGg6IDMwdnc7XG4gIGxpbmUtaGVpZ2h0OiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogMHB4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLnJvdW5kLWluZm8uZGV0YWlsZWQge1xuICB3aWR0aDogMzB2dztcbn1cblxuLnRoZW1lLWNob29zZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNDVweDtcbn0iXX0= */"] });
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
    const stat_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r16.count);
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
GameTypeStatisticsDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameTypeStatisticsDialogComponent, selectors: [["ng-component"]], decls: 15, vars: 2, consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], [1, "body-2"], ["cellpadding", "0", "cellspacing", "0", 1, "statistics-table"], [4, "ngFor", "ngForOf"], [1, "button", "primary", 3, "mat-dialog-close"]], template: function GameTypeStatisticsDialogComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: [".dialog-container[_ngcontent-%COMP%] {\n  width: 73vw;\n}\n.dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  height: 64vh;\n  overflow-y: scroll;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 0 1rem 0;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.2rem;\n  font-weight: normal;\n  font-size: 13px;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10eXBlLXN0YXRpc3RpY3MtZGlhbG9nL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxnYW1lLXR5cGUtc3RhdGlzdGljcy1kaWFsb2dcXGdhbWUtdHlwZS1zdGF0aXN0aWNzLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10eXBlLXN0YXRpc3RpY3MtZGlhbG9nL2dhbWUtdHlwZS1zdGF0aXN0aWNzLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBRENFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0FDQUo7QURHRTtFQUVFLFlBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FESUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNGTjtBRElNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRlI7QURLTTtFQUNFLGdCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9nYW1lLXR5cGUtc3RhdGlzdGljcy1kaWFsb2cvZ2FtZS10eXBlLXN0YXRpc3RpY3MtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1jb250YWluZXIge1xyXG4gIHdpZHRoOiA3M3Z3O1xyXG5cclxuICAuc3VidGl0bGUtMSB7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIG1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XHJcbiAgfVxyXG5cclxuICBtYXQtZGlhbG9nLWNvbnRlbnQge1xyXG5cclxuICAgIGhlaWdodDogNjR2aDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcblxyXG4gICAgICB0aCwgdGQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoOmZpcnN0LWNoaWxkLCB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuZGlhbG9nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA3M3Z3O1xufVxuLmRpYWxvZy1jb250YWluZXIgLnN1YnRpdGxlLTEge1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWNvbnRlbnQge1xuICBoZWlnaHQ6IDY0dmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctY29udGVudCB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMCAxcmVtIDA7XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWNvbnRlbnQgdGFibGUgdGgsIC5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctY29udGVudCB0YWJsZSB0ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWNvbnRlbnQgdGFibGUgdGg6Zmlyc3QtY2hpbGQsIC5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctY29udGVudCB0YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */"] });
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
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");









const _c0 = function (a0) { return [a0]; };
function MenuComponent_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const g_r54 = ctx.$implicit;
    const i_r55 = ctx.index;
    const k_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("button gameSelectBox ", "menu-button-" + k_r52 + "" + i_r55, " ", g_r54.data.bot ? "hasBot" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "/" + g_r54.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r54.data.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r54.data.icon);
} }
function MenuComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_div_4_button_1_Template, 6, 9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const k_r52 = ctx.$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r51.getGameList().slice(k_r52 * 3, k_r52 * 3 + 3));
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
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["ng-component"]], decls: 12, vars: 2, consts: [["id", "menu_title"], [3, "click"], ["id", "menu"], ["class", "button-line", 4, "ngFor", "ngForOf"], [1, "version"], [1, "button", "primary", "icon", 3, "click"], [1, "button-line"], [3, "routerLink", "class", 4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "menu-item-container"], [1, "title"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["#menu_title[_ngcontent-%COMP%] {\n  padding: 50px;\n  text-align: center;\n  cursor: pointer;\n}\n\n#menu[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n\n#menu[_ngcontent-%COMP%]   .button-line[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n#menu[_ngcontent-%COMP%]   .menu-item-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100%;\n}\n\n#menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%] {\n  height: 190px;\n  width: 190px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0;\n  margin: 0;\n  color: var(--text_color);\n}\n\n#menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  width: 60px;\n  height: 60px;\n}\n\n#menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  white-space: pre;\n  text-align: center;\n  padding: 10px;\n  line-height: 25px;\n  letter-spacing: 1px;\n  font-weight: normal;\n  width: 170px;\n  margin: 0 0 25px 0;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n#menu[_ngcontent-%COMP%]   .hasBot[_ngcontent-%COMP%]:after {\n  content: \"B\";\n  position: relative;\n  top: 72px;\n  right: 12px;\n  margin: -4px;\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-00[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_1a), var(--menu_1b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-01[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_3a), var(--menu_3b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-02[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_2a), var(--menu_2b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-10[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_2a), var(--menu_2b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-11[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_1a), var(--menu_1b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-12[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_3a), var(--menu_3b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-20[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_1a), var(--menu_1b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-21[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_3a), var(--menu_3b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-22[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_2a), var(--menu_2b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-30[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_2a), var(--menu_2b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-31[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_1a), var(--menu_1b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-32[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_3a), var(--menu_3b));\n}\n\n.version[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 5px;\n}\n\n@media screen and (max-width: 570px) {\n  #menu_title[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #menu[_ngcontent-%COMP%] {\n    padding-top: 45px;\n  }\n  #menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%] {\n    width: calc(35vw - 20px);\n    height: calc(35vw - 20px);\n  }\n  #menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: calc(19vw - 28px);\n    width: auto;\n    height: auto;\n  }\n  #menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 10px;\n    text-align: center;\n    padding: 4px;\n    letter-spacing: 0px;\n    width: calc(35vw - 28px);\n    margin: 0 0 12px 0;\n    line-height: 20px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  #menu[_ngcontent-%COMP%]   .hasBot[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS9EOlxcRGV2ZWxvcG1lbnRcXGRhcnRzLXNjb3JlYm9hcmQtbmcvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtBQ0RKOztBREdJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRE47O0FESUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ0ZOOztBRE1FO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSko7O0FET0U7RUFDRSxrRUFBQTtBQ0xKOztBRFFFO0VBQ0Usa0VBQUE7QUNOSjs7QURTRTtFQUNFLGtFQUFBO0FDUEo7O0FEVUU7RUFDRSxrRUFBQTtBQ1JKOztBRFdFO0VBQ0Usa0VBQUE7QUNUSjs7QURZRTtFQUNFLGtFQUFBO0FDVko7O0FEYUU7RUFDRSxrRUFBQTtBQ1hKOztBRGNFO0VBQ0Usa0VBQUE7QUNaSjs7QURlRTtFQUNFLGtFQUFBO0FDYko7O0FEZ0JFO0VBQ0Usa0VBQUE7QUNkSjs7QURpQkU7RUFDRSxrRUFBQTtBQ2ZKOztBRGtCRTtFQUNFLGtFQUFBO0FDaEJKOztBRG9CQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2pCRjs7QURxQkE7RUFDRTtJQUNFLGFBQUE7RUNsQkY7O0VEcUJBO0lBQ0UsaUJBQUE7RUNsQkY7RURvQkU7SUFDRSx3QkFBQTtJQUNBLHlCQUFBO0VDbEJKO0VEb0JJO0lBQ0UsNEJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQ2xCTjtFRHFCSTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsdUJBQUE7RUNuQk47RUR1QkU7SUFDRSxhQUFBO0VDckJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWVudV90aXRsZSB7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jbWVudSB7XG4gIHdpZHRoOiAxMDB2dztcblxuICAuYnV0dG9uLWxpbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLm1lbnUtaXRlbS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmdhbWVTZWxlY3RCb3gge1xuICAgIGhlaWdodDogMTkwcHg7XG4gICAgd2lkdGg6IDE5MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dF9jb2xvcik7XG5cbiAgICBtYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgd2lkdGg6IDE3MHB4O1xuICAgICAgbWFyZ2luOiAwIDAgMjVweCAwO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIH1cbiAgfVxuXG4gIC5oYXNCb3Q6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICdCJztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA3MnB4O1xuICAgIHJpZ2h0OiAxMnB4O1xuICAgIG1hcmdpbjogLTRweDtcbiAgfVxuXG4gIC5tZW51LWJ1dHRvbi0wMCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1tZW51XzFhKSwgdmFyKC0tbWVudV8xYikpO1xuICB9XG5cbiAgLm1lbnUtYnV0dG9uLTAxIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLW1lbnVfM2EpLCB2YXIoLS1tZW51XzNiKSk7XG4gIH1cblxuICAubWVudS1idXR0b24tMDIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8yYSksIHZhcigtLW1lbnVfMmIpKTtcbiAgfVxuXG4gIC5tZW51LWJ1dHRvbi0xMCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1tZW51XzJhKSwgdmFyKC0tbWVudV8yYikpO1xuICB9XG5cbiAgLm1lbnUtYnV0dG9uLTExIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLW1lbnVfMWEpLCB2YXIoLS1tZW51XzFiKSk7XG4gIH1cblxuICAubWVudS1idXR0b24tMTIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8zYSksIHZhcigtLW1lbnVfM2IpKTtcbiAgfVxuXG4gIC5tZW51LWJ1dHRvbi0yMCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1tZW51XzFhKSwgdmFyKC0tbWVudV8xYikpO1xuICB9XG5cbiAgLm1lbnUtYnV0dG9uLTIxIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLW1lbnVfM2EpLCB2YXIoLS1tZW51XzNiKSk7XG4gIH1cblxuICAubWVudS1idXR0b24tMjIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8yYSksIHZhcigtLW1lbnVfMmIpKTtcbiAgfVxuXG4gIC5tZW51LWJ1dHRvbi0zMCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1tZW51XzJhKSwgdmFyKC0tbWVudV8yYikpO1xuICB9XG5cbiAgLm1lbnUtYnV0dG9uLTMxIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLW1lbnVfMWEpLCB2YXIoLS1tZW51XzFiKSk7XG4gIH1cblxuICAubWVudS1idXR0b24tMzIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8zYSksIHZhcigtLW1lbnVfM2IpKTtcbiAgfVxufVxuXG4udmVyc2lvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogNXB4O1xuICAvL2NvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgNDAwKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTcwcHgpIHtcbiAgI21lbnVfdGl0bGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjbWVudSB7XG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XG5cbiAgICAuZ2FtZVNlbGVjdEJveCB7XG4gICAgICB3aWR0aDogY2FsYygzNXZ3IC0gMjBweCk7XG4gICAgICBoZWlnaHQ6IGNhbGMoMzV2dyAtIDIwcHgpO1xuXG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygxOXZ3IC0gMjhweCk7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDM1dncgLSAyOHB4KTtcbiAgICAgICAgbWFyZ2luOiAwIDAgMTJweCAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmhhc0JvdDphZnRlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIiwiI21lbnVfdGl0bGUge1xuICBwYWRkaW5nOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI21lbnUge1xuICB3aWR0aDogMTAwdnc7XG59XG4jbWVudSAuYnV0dG9uLWxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNtZW51IC5tZW51LWl0ZW0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuI21lbnUgLmdhbWVTZWxlY3RCb3gge1xuICBoZWlnaHQ6IDE5MHB4O1xuICB3aWR0aDogMTkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0X2NvbG9yKTtcbn1cbiNtZW51IC5nYW1lU2VsZWN0Qm94IG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuI21lbnUgLmdhbWVTZWxlY3RCb3ggLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB3aWR0aDogMTcwcHg7XG4gIG1hcmdpbjogMCAwIDI1cHggMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuI21lbnUgLmhhc0JvdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiQlwiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNzJweDtcbiAgcmlnaHQ6IDEycHg7XG4gIG1hcmdpbjogLTRweDtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0wMCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8xYSksIHZhcigtLW1lbnVfMWIpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0wMSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8zYSksIHZhcigtLW1lbnVfM2IpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0wMiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8yYSksIHZhcigtLW1lbnVfMmIpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0xMCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8yYSksIHZhcigtLW1lbnVfMmIpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0xMSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8xYSksIHZhcigtLW1lbnVfMWIpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0xMiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8zYSksIHZhcigtLW1lbnVfM2IpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0yMCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8xYSksIHZhcigtLW1lbnVfMWIpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0yMSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8zYSksIHZhcigtLW1lbnVfM2IpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0yMiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8yYSksIHZhcigtLW1lbnVfMmIpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0zMCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8yYSksIHZhcigtLW1lbnVfMmIpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0zMSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8xYSksIHZhcigtLW1lbnVfMWIpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0zMiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8zYSksIHZhcigtLW1lbnVfM2IpKTtcbn1cblxuLnZlcnNpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTcwcHgpIHtcbiAgI21lbnVfdGl0bGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjbWVudSB7XG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XG4gIH1cbiAgI21lbnUgLmdhbWVTZWxlY3RCb3gge1xuICAgIHdpZHRoOiBjYWxjKDM1dncgLSAyMHB4KTtcbiAgICBoZWlnaHQ6IGNhbGMoMzV2dyAtIDIwcHgpO1xuICB9XG4gICNtZW51IC5nYW1lU2VsZWN0Qm94IG1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IGNhbGMoMTl2dyAtIDI4cHgpO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAjbWVudSAuZ2FtZVNlbGVjdEJveCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgd2lkdGg6IGNhbGMoMzV2dyAtIDI4cHgpO1xuICAgIG1hcmdpbjogMCAwIDEycHggMDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gICNtZW51IC5oYXNCb3Q6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"] });
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
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function NumberPlateShanghaiComponent_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateShanghaiComponent_div_4_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const j_r60 = ctx.$implicit; const k_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.throwNumber(j_r60 + k_r58 * 3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r60 = ctx.$implicit;
    const k_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", j_r60 + k_r58 * 3, " ");
} }
const _c0 = function () { return [1, 2, 3]; };
function NumberPlateShanghaiComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NumberPlateShanghaiComponent_div_4_button_1_Template, 2, 1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return [0, 1, 2]; };
class NumberPlateShanghaiComponent {
    constructor(game, dialogService, application) {
        this.game = game;
        this.dialogService = dialogService;
        this.application = application;
    }
    next() {
        this.playground.skip();
    }
    win() {
        this.dialogService.openConfirmDialog('Confirmation', 'Are you sure?').afterClosed()
            .subscribe(data => {
            if (data) {
                const score = this.actualIndex + 1;
                this.playground.throwNumber([score, score]);
                this.playground.doublePoint();
                this.playground.throwNumber([score, score]);
                this.playground.triplePoint();
                this.playground.throwNumber([score, score]);
            }
        });
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
NumberPlateShanghaiComponent.ɵfac = function NumberPlateShanghaiComponent_Factory(t) { return new (t || NumberPlateShanghaiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationStateService"])); };
NumberPlateShanghaiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NumberPlateShanghaiComponent, selectors: [["app-number-plate-shanghai"]], inputs: { actualIndex: "actualIndex", playground: "playground" }, decls: 10, vars: 3, consts: [[1, "side-right"], [1, "numbers"], ["class", "button-line", 4, "ngFor", "ngForOf"], [1, "button-line"], [1, "button", "number", "next", 3, "click"], [1, "button", "number", 3, "click"], ["class", "button number primary", 3, "click", 4, "ngFor", "ngForOf"], [1, "button", "number", "primary", 3, "click"]], template: function NumberPlateShanghaiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NumberPlateShanghaiComponent_div_4_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateShanghaiComponent_Template_button_click_6_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateShanghaiComponent_Template_button_click_8_listener() { return ctx.win(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Shanghai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Field: ", ctx.actualIndex + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".side-right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-flow: row wrap;\n  height: 90vh;\n  margin-top: 20px;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  margin: 0.1vw;\n  font-size: calc(11px + 0.8vw + 0.8vh);\n  height: 20vw;\n  width: 20vw;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 5px;\n  font-size: 30px;\n}\n.side-right[_ngcontent-%COMP%]   .number.next[_ngcontent-%COMP%] {\n  width: 40vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlLXNoYW5naGFpL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxudW1iZXItcGxhdGUtc2hhbmdoYWlcXG51bWJlci1wbGF0ZS1zaGFuZ2hhaS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlLXNoYW5naGFpL251bWJlci1wbGF0ZS1zaGFuZ2hhaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7QURDSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDQ047QURFSTtFQUNFLFdBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL251bWJlci1wbGF0ZS1zaGFuZ2hhaS9udW1iZXItcGxhdGUtc2hhbmdoYWkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZS1yaWdodCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGhlaWdodDogOTB2aDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAubnVtYmVyIHtcclxuICAgIG1hcmdpbjogMC4xdnc7XHJcbiAgICBmb250LXNpemU6IGNhbGMoMTFweCArIDAuOHZ3ICsgMC44dmgpO1xyXG4gICAgaGVpZ2h0OiAyMHZ3O1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcblxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTBweDtcclxuICAgICAgbGVmdDogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5uZXh0IHtcclxuICAgICAgd2lkdGg6IDQwdnc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5zaWRlLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGhlaWdodDogOTB2aDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5zaWRlLXJpZ2h0IC5udW1iZXIge1xuICBtYXJnaW46IDAuMXZ3O1xuICBmb250LXNpemU6IGNhbGMoMTFweCArIDAuOHZ3ICsgMC44dmgpO1xuICBoZWlnaHQ6IDIwdnc7XG4gIHdpZHRoOiAyMHZ3O1xufVxuLnNpZGUtcmlnaHQgLm51bWJlciBtYXQtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5zaWRlLXJpZ2h0IC5udW1iZXIubmV4dCB7XG4gIHdpZHRoOiA0MHZ3O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberPlateShanghaiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-number-plate-shanghai',
                templateUrl: './number-plate-shanghai.component.html',
                styleUrls: ['./number-plate-shanghai.component.scss']
            }]
    }], function () { return [{ type: _services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"] }, { type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationStateService"] }]; }, { actualIndex: [{
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
        const svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#darts-table-plate').append('svg').attr('width', '94%')
            .attr('height', '94%').attr('viewBox', '0 0 330 330');
        const numbers = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
        const bullIndex = this.getFieldIndex(25);
        if (this.playground.zeroEnabled) {
            this.drawArcPosition(svg, 20, 25, 30, 'field-color primary');
            this.drawText(svg, '0', 0, 25, 23, -1, 1, 'number-text', () => this.throwZero());
        }
        this.drawArc(svg, 0, 165, 0, Math.PI * 4, 'field-inactive', -1, 1);
        this.drawArc(svg, 0, 19, 0, Math.PI * 4, 'field-color-m', bullIndex, 2);
        this.drawArc(svg, 20, 49, 0, Math.PI * 4, 'field-color', bullIndex, 1);
        for (let i = 0; i < numbers.length; i++) {
            const fieldIndex = this.getFieldIndex(numbers[i]);
            const colorSlice = 'field-color';
            const colorSliceMulti = 'field-color-m';
            const startAngle = i * Math.PI / 10 - ARC_WIDTH / 2;
            const endAngle = startAngle + ARC_WIDTH;
            this.drawArc(svg, 50, 84, startAngle, endAngle, colorSliceMulti, fieldIndex, 3);
            this.drawArc(svg, 85, 119, startAngle, endAngle, colorSlice, fieldIndex, 1);
            this.drawArc(svg, 120, 144, startAngle, endAngle, colorSliceMulti, fieldIndex, 2);
            this.drawText(svg, numbers[i] + '', i * 18 - 2, 170, 3, fieldIndex, 1, 'number-text' + ' ' + this.getNumberColor(fieldIndex));
            if (!!this.playground.getFieldNote(fieldIndex)) {
                this.drawText(svg, this.playground.getFieldNote(fieldIndex), i * 18 - 2, 170, 14, fieldIndex, 1, 'field-note');
            }
        }
        this.drawText(svg, '25', 0, 165, 127, bullIndex, 1, 'number-text' + ' ' + this.getNumberColor(bullIndex));
        this.drawText(svg, '50', 0, 165, 158.5, bullIndex, 2, 'number-text' + ' ' + this.getNumberColor(bullIndex));
        if (!!this.playground.getFieldNote(bullIndex)) {
            this.drawText(svg, this.playground.getFieldNote(bullIndex), 0, 165, 193, bullIndex, 1, 'field-note');
        }
        this.drawText(svg, '2x', 0, 165, 28, 19, 2, 'number-text smaller' + ' ' + this.getNumberColor(19));
        this.drawText(svg, '1x', 0, 165, 58, 19, 1, 'number-text smaller' + ' ' + this.getNumberColor(19));
        this.drawText(svg, '3x', 0, 165, 92, 19, 3, 'number-text smaller' + ' ' + this.getNumberColor(19));
    }
    getNumberColor(fieldIndex) {
        if (this.playground.isPrimaryField(fieldIndex)) {
            return 'primary';
        }
        else if (this.playground.isSecondaryField(fieldIndex)) {
            return 'accent';
        }
        else if (this.playground.isAlertField(fieldIndex)) {
            return 'alert';
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
        document.querySelector(`path.field_${fieldIndex}_${multi}`).classList.add('clicked');
    }
    throwZero() {
        if (this.playground.zeroEnabled) {
            this.playground.throwNumber([0, 0]);
            this.drawTable();
        }
    }
    drawText(svg, text, rotate, x, y, fieldIndex, multi, className, onclick) {
        svg.append('text')
            .attr('x', x)
            .attr('y', y)
            .attr('dy', '1em')
            .attr('text-anchor', 'middle')
            .attr('transform', 'rotate(' + rotate + ', 165, 165)')
            .attr('class', `field_${fieldIndex}_${multi} ${className}`)
            .text(text)
            .on('click', () => onclick ? onclick() : this.throwNumber(fieldIndex, multi));
    }
    drawArc(svg, innerRadius, outerRadius, startAngle, endAngle, styleClass, fieldIndex, multi) {
        svg
            .append('path')
            .attr('transform', 'translate(165, 165)')
            .attr('d', d3__WEBPACK_IMPORTED_MODULE_2__["arc"]()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .startAngle(startAngle)
            .endAngle(endAngle))
            .attr('class', `field_${fieldIndex}_${multi} ${styleClass} ${this.getNumberColor(fieldIndex)}`)
            .on('click', () => this.throwNumber(fieldIndex, multi));
    }
    drawArcPosition(svg, radius, x, y, styleClass) {
        svg
            .append('path')
            .attr('transform', 'translate(' + x + ', ' + y + ')')
            .attr('d', d3__WEBPACK_IMPORTED_MODULE_2__["arc"]()
            .innerRadius(0)
            .outerRadius(radius)
            .startAngle(0)
            .endAngle(Math.PI * 4))
            .attr('class', styleClass)
            .on('click', () => this.throwZero());
    }
    getFieldIndex(field) {
        return field === 25 ? 20 : field - 1;
    }
}
NumberPlateVisualComponent.ɵfac = function NumberPlateVisualComponent_Factory(t) { return new (t || NumberPlateVisualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationStateService"])); };
NumberPlateVisualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NumberPlateVisualComponent, selectors: [["app-number-plate-visual"]], inputs: { playground: "playground" }, decls: 6, vars: 3, consts: [[1, "side-right_visual"], ["id", "darts-table-plate"], [1, "button", "number", 3, "disabled", "click"]], template: function NumberPlateVisualComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateVisualComponent_Template_button_click_4_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.playground.gameTitle, " / ", ctx.game.round + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playground.nextEnabled);
    } }, styles: [".side-right_visual {\n  width: 98vw;\n  top: 85px;\n  right: 0;\n  position: absolute;\n}\n.side-right_visual h1 {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  top: -65px;\n}\n.side-right_visual #darts-table-plate {\n  width: 100%;\n  text-align: center;\n}\n.side-right_visual #darts-table-plate .number-text, .side-right_visual #darts-table-plate .field-note {\n  font-family: sans-serif;\n  font-weight: bold;\n  font-size: 11px;\n}\n.side-right_visual #darts-table-plate .number-text.disabled, .side-right_visual #darts-table-plate .field-note.disabled {\n  opacity: 0.3;\n}\n.side-right_visual #darts-table-plate .number-text.smaller, .side-right_visual #darts-table-plate .field-note.smaller {\n  font-size: 8px;\n}\n.side-right_visual #darts-table-plate .field-note {\n  font-size: 6px;\n}\n.side-right_visual #darts-table-plate path, .side-right_visual #darts-table-plate text {\n  cursor: pointer;\n}\n.side-right_visual #darts-table-plate .field-color.disabled, .side-right_visual #darts-table-plate .field-color-m.disabled {\n  opacity: 0.4;\n}\n.side-right_visual #darts-table-plate .field-color.clicked, .side-right_visual #darts-table-plate .field-color-m.clicked {\n  -webkit-animation-name: field-clicked;\n          animation-name: field-clicked;\n  -webkit-animation-duration: 200ms;\n          animation-duration: 200ms;\n}\n.side-right_visual button {\n  margin-right: 15px;\n  width: 120px;\n  height: 100px;\n  position: absolute;\n  right: 0px;\n  top: -70px;\n}\n@-webkit-keyframes field-clicked {\n  0% {\n    fill: var(--text_color);\n  }\n  100% {\n    fill: var(--table_normal_primary);\n  }\n}\n@keyframes field-clicked {\n  0% {\n    fill: var(--text_color);\n  }\n  100% {\n    fill: var(--table_normal_primary);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlLXZpc3VhbC9EOlxcRGV2ZWxvcG1lbnRcXGRhcnRzLXNjb3JlYm9hcmQtbmcvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbnVtYmVyLXBsYXRlLXZpc3VhbFxcbnVtYmVyLXBsYXRlLXZpc3VhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlLXZpc3VhbC9udW1iZXItcGxhdGUtdmlzdWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0o7QURFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUk7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FOO0FERU07RUFDRSxZQUFBO0FDQVI7QURHTTtFQUNFLGNBQUE7QUNEUjtBREtJO0VBQ0UsY0FBQTtBQ0hOO0FETUk7RUFDRSxlQUFBO0FDSk47QURRTTtFQUNFLFlBQUE7QUNOUjtBRFNNO0VBQ0UscUNBQUE7VUFBQSw2QkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUNQUjtBRFlFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNWSjtBRGNBO0VBQ0U7SUFDRSx1QkFBQTtFQ1hGO0VEYUE7SUFDRSxpQ0FBQTtFQ1hGO0FBQ0Y7QURLQTtFQUNFO0lBQ0UsdUJBQUE7RUNYRjtFRGFBO0lBQ0UsaUNBQUE7RUNYRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlLXZpc3VhbC9udW1iZXItcGxhdGUtdmlzdWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtcmlnaHRfdmlzdWFsIHtcclxuICB3aWR0aDogOTh2dztcclxuICB0b3A6IDg1cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBoMSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRvcDogLTY1cHg7XHJcbiAgfVxyXG5cclxuICAjZGFydHMtdGFibGUtcGxhdGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLm51bWJlci10ZXh0LCAuZmllbGQtbm90ZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG5cclxuICAgICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnNtYWxsZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZpZWxkLW5vdGUge1xyXG4gICAgICBmb250LXNpemU6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICBwYXRoLCB0ZXh0IHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5maWVsZC1jb2xvciwgLmZpZWxkLWNvbG9yLW0ge1xyXG4gICAgICAmLmRpc2FibGVkIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY2xpY2tlZCB7XHJcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZpZWxkLWNsaWNrZWQ7XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMDBtcztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgdG9wOiAtNzBweDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmllbGQtY2xpY2tlZCB7XHJcbiAgMCUge1xyXG4gICAgZmlsbDogdmFyKC0tdGV4dF9jb2xvcik7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgZmlsbDogdmFyKC0tdGFibGVfbm9ybWFsX3ByaW1hcnkpO1xyXG4gIH1cclxufVxyXG4iLCIuc2lkZS1yaWdodF92aXN1YWwge1xuICB3aWR0aDogOTh2dztcbiAgdG9wOiA4NXB4O1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnNpZGUtcmlnaHRfdmlzdWFsIGgxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IC02NXB4O1xufVxuLnNpZGUtcmlnaHRfdmlzdWFsICNkYXJ0cy10YWJsZS1wbGF0ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2lkZS1yaWdodF92aXN1YWwgI2RhcnRzLXRhYmxlLXBsYXRlIC5udW1iZXItdGV4dCwgLnNpZGUtcmlnaHRfdmlzdWFsICNkYXJ0cy10YWJsZS1wbGF0ZSAuZmllbGQtbm90ZSB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLnNpZGUtcmlnaHRfdmlzdWFsICNkYXJ0cy10YWJsZS1wbGF0ZSAubnVtYmVyLXRleHQuZGlzYWJsZWQsIC5zaWRlLXJpZ2h0X3Zpc3VhbCAjZGFydHMtdGFibGUtcGxhdGUgLmZpZWxkLW5vdGUuZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjM7XG59XG4uc2lkZS1yaWdodF92aXN1YWwgI2RhcnRzLXRhYmxlLXBsYXRlIC5udW1iZXItdGV4dC5zbWFsbGVyLCAuc2lkZS1yaWdodF92aXN1YWwgI2RhcnRzLXRhYmxlLXBsYXRlIC5maWVsZC1ub3RlLnNtYWxsZXIge1xuICBmb250LXNpemU6IDhweDtcbn1cbi5zaWRlLXJpZ2h0X3Zpc3VhbCAjZGFydHMtdGFibGUtcGxhdGUgLmZpZWxkLW5vdGUge1xuICBmb250LXNpemU6IDZweDtcbn1cbi5zaWRlLXJpZ2h0X3Zpc3VhbCAjZGFydHMtdGFibGUtcGxhdGUgcGF0aCwgLnNpZGUtcmlnaHRfdmlzdWFsICNkYXJ0cy10YWJsZS1wbGF0ZSB0ZXh0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNpZGUtcmlnaHRfdmlzdWFsICNkYXJ0cy10YWJsZS1wbGF0ZSAuZmllbGQtY29sb3IuZGlzYWJsZWQsIC5zaWRlLXJpZ2h0X3Zpc3VhbCAjZGFydHMtdGFibGUtcGxhdGUgLmZpZWxkLWNvbG9yLW0uZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uc2lkZS1yaWdodF92aXN1YWwgI2RhcnRzLXRhYmxlLXBsYXRlIC5maWVsZC1jb2xvci5jbGlja2VkLCAuc2lkZS1yaWdodF92aXN1YWwgI2RhcnRzLXRhYmxlLXBsYXRlIC5maWVsZC1jb2xvci1tLmNsaWNrZWQge1xuICBhbmltYXRpb24tbmFtZTogZmllbGQtY2xpY2tlZDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMDBtcztcbn1cbi5zaWRlLXJpZ2h0X3Zpc3VhbCBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IC03MHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGZpZWxkLWNsaWNrZWQge1xuICAwJSB7XG4gICAgZmlsbDogdmFyKC0tdGV4dF9jb2xvcik7XG4gIH1cbiAgMTAwJSB7XG4gICAgZmlsbDogdmFyKC0tdGFibGVfbm9ybWFsX3ByaW1hcnkpO1xuICB9XG59Il19 */"], encapsulation: 2 });
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
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");







function NumberPlateComponent_ng_container_1_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.playground.getFieldIcon(i_r26 - 1));
} }
function NumberPlateComponent_ng_container_1_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.playground.getFieldNote(i_r26 - 1));
} }
function NumberPlateComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_ng_container_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const i_r26 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.throwNumber(i_r26 - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NumberPlateComponent_ng_container_1_mat_icon_2_Template, 2, 1, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NumberPlateComponent_ng_container_1_p_3_Template, 2, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r26 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button number ", ctx_r23.getNumberColor(i_r26 - 1), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r23.isNumberDisabled(i_r26 - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.playground.getFieldIcon(i_r26 - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.playground.getFieldNote(i_r26 - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r26);
} }
function NumberPlateComponent_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.playground.getFieldIcon(20));
} }
function NumberPlateComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.playground.getFieldNote(20));
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
NumberPlateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NumberPlateComponent, selectors: [["app-number-plate"]], inputs: { playground: "playground" }, decls: 19, vars: 17, consts: [[1, "side-right"], [4, "ngFor", "ngForOf"], [3, "disabled", "click"], [4, "ngIf"], ["class", "field-note", 4, "ngIf"], [1, "field-number"], [1, "button", "number", 3, "disabled", "click"], [1, "field-note"]], template: function NumberPlateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NumberPlateComponent_ng_container_1_Template, 6, 7, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_2_listener() { return ctx.throwNumber(20); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NumberPlateComponent_mat_icon_3_Template, 2, 1, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NumberPlateComponent_p_4_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bull");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_7_listener() { return ctx.playground.doublePoint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_10_listener() { return ctx.playground.triplePoint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "3x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_13_listener() { return ctx.playground.skip(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_16_listener() { return ctx.playground.throwNumber([0, 0]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getNumbers());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button number ", ctx.getNumberColor(20), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isNumberDisabled(20));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playground.getFieldIcon(20));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playground.getFieldNote(20));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx.playground.multiplier === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playground.multiEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx.playground.multiplier === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playground.multiEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playground.nextEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playground.zeroEnabled);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  float: left;\n  margin: 0.1vw;\n  font-size: calc(11px + 0.8vw + 0.8vh);\n  height: 19.4vh;\n  width: 15.3vw;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .field-number[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .field-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 13vw;\n  overflow: hidden;\n  word-break: normal;\n  white-space: pre-line;\n  line-height: 16px;\n  text-align: right;\n  position: absolute;\n  margin: 4px 7px 0 0;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .field-note-bottom[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 13vw;\n  overflow: hidden;\n  word-break: normal;\n  white-space: pre-line;\n  line-height: 16px;\n  text-align: left;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.side-right.detailed[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  width: 13.7vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxudW1iZXItcGxhdGVcXG51bWJlci1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlL251bWJlci1wbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDQUo7QURFSTtFQUNFLGVBQUE7QUNBTjtBREdJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRE47QURJSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNGTjtBREtJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSE47QURPRTtFQUNFLFlBQUE7QUNMSjtBRFNJO0VBQ0UsYUFBQTtBQ1BOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlL251bWJlci1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlLXJpZ2h0IHtcclxuICAubnVtYmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMC4xdnc7XHJcbiAgICBmb250LXNpemU6IGNhbGMoMTFweCArIDAuOHZ3ICsgMC44dmgpO1xyXG4gICAgaGVpZ2h0OiAxOS40dmg7XHJcbiAgICB3aWR0aDogMTUuM3Z3O1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5maWVsZC1udW1iZXIge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5maWVsZC1ub3RlIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB3aWR0aDogMTN2dztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgd29yZC1icmVhazogbm9ybWFsO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBtYXJnaW46IDRweCA3cHggMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5maWVsZC1ub3RlLWJvdHRvbSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgd2lkdGg6IDEzdnc7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5udW1iZXI6ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuXHJcbiAgJi5kZXRhaWxlZCB7XHJcbiAgICAubnVtYmVyIHtcclxuICAgICAgd2lkdGg6IDEzLjd2dztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnNpZGUtcmlnaHQgLm51bWJlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwLjF2dztcbiAgZm9udC1zaXplOiBjYWxjKDExcHggKyAwLjh2dyArIDAuOHZoKTtcbiAgaGVpZ2h0OiAxOS40dmg7XG4gIHdpZHRoOiAxNS4zdnc7XG59XG4uc2lkZS1yaWdodCAubnVtYmVyIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLnNpZGUtcmlnaHQgLm51bWJlciAuZmllbGQtbnVtYmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zaWRlLXJpZ2h0IC5udW1iZXIgLmZpZWxkLW5vdGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAxM3Z3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogNHB4IDdweCAwIDA7XG59XG4uc2lkZS1yaWdodCAubnVtYmVyIC5maWVsZC1ub3RlLWJvdHRvbSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEzdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zaWRlLXJpZ2h0IC5udW1iZXI6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4uc2lkZS1yaWdodC5kZXRhaWxlZCAubnVtYmVyIHtcbiAgd2lkdGg6IDEzLjd2dztcbn0iXX0= */"] });
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
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!ctx_r44.player.getThrowsTotal() ? "0" : ctx_r44.player.getThrowsTotal());
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
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r48.player.score);
} }
function PlayerScoreComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Life: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r49.player.life);
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
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r50.player.life, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r50.player.score, " ");
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".player_info {\n  padding: 1vw;\n}\n.player_info.player_info_visual {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.player_info.player_info_visual .name {\n  margin-right: 10px;\n  width: 80px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.player_info.player_info_visual .score {\n  margin-left: 20px;\n  width: 150px;\n  white-space: nowrap;\n}\n.player_info .line {\n  margin: 1vw 0;\n}\n.player_info .line-space {\n  margin: 1.5vw 0;\n}\n.player_info .small {\n  font-size: calc(0.6vw + 0.5vh);\n  font-weight: bold;\n}\n.player_info .name {\n  font-size: calc(5px + 1vw);\n  display: flex;\n  align-items: center;\n}\n.player_info .name mat-icon {\n  margin-right: 10px;\n  font-size: calc(20px + 1vw);\n}\n.player_info .shoots {\n  display: flex;\n  justify-content: flex-end;\n}\n.player_info .shoots .shoot {\n  margin: 0.1vw;\n  border-radius: 0.5vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 4vw;\n  height: 3vw;\n  font-size: calc(6px + 1vw);\n}\n.player_info .shoots .shoot.total {\n  margin-left: 10px;\n}\n.player_info .score {\n  font-size: 3.2vw;\n  letter-spacing: 0.5vw;\n  font-weight: bold;\n  float: right;\n}\n.player_info .score label {\n  font-size: 1vw;\n  letter-spacing: 0.2vw;\n}\n.player_info .note {\n  font-size: 2vw;\n  margin-right: 10px;\n  float: right;\n}\n.player_info .note label {\n  font-size: 1.5vw;\n}\n.player_info .field-set {\n  display: flex;\n  flex-flow: row wrap;\n}\n.player_info .field {\n  font-size: calc(0.7vw + 0.7vh);\n  width: 70px;\n  opacity: 0.4;\n}\n.player_info .field.highlighted, .player_info .field.active {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNjb3JlL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxwbGF5ZXItc2NvcmVcXHBsYXllci1zY29yZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNjb3JlL3BsYXllci1zY29yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ047QURFSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQU47QURJRTtFQUNFLGFBQUE7QUNGSjtBREtFO0VBQ0UsZUFBQTtBQ0hKO0FETUU7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FDSko7QURPRTtFQUNFLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDTEo7QURNSTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7QUNKTjtBRFFFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDTko7QURRSTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ05OO0FEUU07RUFDRSxpQkFBQTtBQ05SO0FEV0U7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDVEo7QURXSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ1ROO0FEYUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDWEo7QURhSTtFQUNFLGdCQUFBO0FDWE47QURjRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ1pKO0FEY0U7RUFDRSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWko7QURjSTtFQUNFLFVBQUE7QUNaTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BsYXllci1zY29yZS9wbGF5ZXItc2NvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheWVyX2luZm8ge1xyXG4gIHBhZGRpbmc6IDF2dztcclxuXHJcbiAgJi5wbGF5ZXJfaW5mb192aXN1YWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuXHJcbiAgICAuc2NvcmUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxpbmUge1xyXG4gICAgbWFyZ2luOiAxdncgMDtcclxuICB9XHJcblxyXG4gIC5saW5lLXNwYWNlIHtcclxuICAgIG1hcmdpbjogMS41dncgMDtcclxuICB9XHJcblxyXG4gIC5zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IGNhbGMoMC42dncgKyAwLjV2aCk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogY2FsYyg1cHggKyAxdncpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAxdncpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNob290cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAuc2hvb3Qge1xyXG4gICAgICBtYXJnaW46IDAuMXZ3O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjV2dztcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiA0dnc7XHJcbiAgICAgIGhlaWdodDogM3Z3O1xyXG4gICAgICBmb250LXNpemU6IGNhbGMoNnB4ICsgMXZ3KTtcclxuXHJcbiAgICAgICYudG90YWwge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2NvcmUge1xyXG4gICAgZm9udC1zaXplOiAzLjJ2dztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjV2dztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJ2dztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ub3RlIHtcclxuICAgIGZvbnQtc2l6ZTogMi4wdnc7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZmllbGQtc2V0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIH1cclxuICAuZmllbGQge1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDAuN3Z3ICsgMC43dmgpO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcblxyXG4gICAgJi5oaWdobGlnaHRlZCwgJi5hY3RpdmUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucGxheWVyX2luZm8ge1xuICBwYWRkaW5nOiAxdnc7XG59XG4ucGxheWVyX2luZm8ucGxheWVyX2luZm9fdmlzdWFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBsYXllcl9pbmZvLnBsYXllcl9pbmZvX3Zpc3VhbCAubmFtZSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnBsYXllcl9pbmZvLnBsYXllcl9pbmZvX3Zpc3VhbCAuc2NvcmUge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnBsYXllcl9pbmZvIC5saW5lIHtcbiAgbWFyZ2luOiAxdncgMDtcbn1cbi5wbGF5ZXJfaW5mbyAubGluZS1zcGFjZSB7XG4gIG1hcmdpbjogMS41dncgMDtcbn1cbi5wbGF5ZXJfaW5mbyAuc21hbGwge1xuICBmb250LXNpemU6IGNhbGMoMC42dncgKyAwLjV2aCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBsYXllcl9pbmZvIC5uYW1lIHtcbiAgZm9udC1zaXplOiBjYWxjKDVweCArIDF2dyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGxheWVyX2luZm8gLm5hbWUgbWF0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgMXZ3KTtcbn1cbi5wbGF5ZXJfaW5mbyAuc2hvb3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5wbGF5ZXJfaW5mbyAuc2hvb3RzIC5zaG9vdCB7XG4gIG1hcmdpbjogMC4xdnc7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDR2dztcbiAgaGVpZ2h0OiAzdnc7XG4gIGZvbnQtc2l6ZTogY2FsYyg2cHggKyAxdncpO1xufVxuLnBsYXllcl9pbmZvIC5zaG9vdHMgLnNob290LnRvdGFsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ucGxheWVyX2luZm8gLnNjb3JlIHtcbiAgZm9udC1zaXplOiAzLjJ2dztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXZ3O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnBsYXllcl9pbmZvIC5zY29yZSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBsZXR0ZXItc3BhY2luZzogMC4ydnc7XG59XG4ucGxheWVyX2luZm8gLm5vdGUge1xuICBmb250LXNpemU6IDJ2dztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4ucGxheWVyX2luZm8gLm5vdGUgbGFiZWwge1xuICBmb250LXNpemU6IDEuNXZ3O1xufVxuLnBsYXllcl9pbmZvIC5maWVsZC1zZXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuLnBsYXllcl9pbmZvIC5maWVsZCB7XG4gIGZvbnQtc2l6ZTogY2FsYygwLjd2dyArIDAuN3ZoKTtcbiAgd2lkdGg6IDcwcHg7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5wbGF5ZXJfaW5mbyAuZmllbGQuaGlnaGxpZ2h0ZWQsIC5wbGF5ZXJfaW5mbyAuZmllbGQuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */"], encapsulation: 2 });
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
    const option_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r37, " ");
} }
function PlayerSettingsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerSettingsComponent_div_13_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const player_r38 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.playground.removePlayer(player_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "remove_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r38.name);
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
        const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Player name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function PlayerSettingsComponent_Template_mat_autocomplete_optionSelected_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.playerSelected($event, _r33); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PlayerSettingsComponent_mat_option_8_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerSettingsComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.addPlayer(_r33); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlayerSettingsComponent_div_13_Template, 6, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playground.canAddPlayer())("matAutocomplete", _r34);
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





const _c0 = ["*"];
class SettingsComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    openStatistics() {
        this.dialogService.openGameStatisticsDialog(this.playground.getGameStatistics());
    }
    openHistory() {
        this.dialogService.openGameHistory(this.playground.getGameHistory());
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], inputs: { playground: "playground" }, ngContentSelectors: _c0, decls: 18, vars: 2, consts: [[1, "settings"], [3, "playground"], [1, "button", "shortmedium", 3, "click"], ["color", "primary", 1, "button", "big", 3, "click"], [1, "button", "big", 3, "click"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_9_listener() { return ctx.openStatistics(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Player rank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_11_listener() { return ctx.openHistory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Game history");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_14_listener() { return ctx.playground.newGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_16_listener() { return ctx.playground.quit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.playground.gameTitle, " Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx.playground);
    } }, directives: [_components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_2__["PlayerSettingsComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"]], styles: [".settings {\n  padding: 2vh 2vw;\n  width: 100%;\n}\n.settings h2 {\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  margin-left: 5px;\n}\n.settings mat-divider {\n  clear: both;\n  margin: 5px 0;\n}\n.settings .field-set {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2V0dGluZ3MvRDpcXERldmVsb3BtZW50XFxkYXJ0cy1zY29yZWJvYXJkLW5nL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHNldHRpbmdzXFxzZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURFRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDQUo7QURHRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3Mge1xyXG4gIHBhZGRpbmc6IDJ2aCAydnc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGgyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcblxyXG4gIG1hdC1kaXZpZGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICB9XHJcblxyXG4gIC5maWVsZC1zZXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbn1cclxuIiwiLnNldHRpbmdzIHtcbiAgcGFkZGluZzogMnZoIDJ2dztcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2V0dGluZ3MgaDIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uc2V0dGluZ3MgbWF0LWRpdmlkZXIge1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luOiA1cHggMDtcbn1cbi5zZXR0aW5ncyAuZmllbGQtc2V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdfQ== */"], encapsulation: 2 });
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
    constructor(gameTitle, application, game, route, dialogService, soundService, botService, statisticsService, gameName, minimumNumberOfPlayers = 1, maximumNumberOfPlayers) {
        this.gameTitle = gameTitle;
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
    isAlertField(fieldIndex) {
        return false;
    }
    getFieldIcon(fieldIndex) {
        return '';
    }
    getFieldNote(fieldIndex) {
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
/* harmony import */ var _theme_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme.constant */ "./src/app/theme.constant.ts");




const APPLICATION_KEY = 'ApplicationSettings';
const PLAYER_KEY = 'Players';
class ApplicationStateService {
    constructor() {
        this.availableThemes = [_theme_constant__WEBPACK_IMPORTED_MODULE_2__["theme"]];
        this.settings = new _models_application_settings_model__WEBPACK_IMPORTED_MODULE_1__["ApplicationSettings"]();
        this.isMobile = false;
        this.isMobile = window.innerWidth < 450;
        const data = localStorage.getItem(APPLICATION_KEY);
        if (data) {
            this.settings = JSON.parse(data);
        }
        this.settings.details = this.isMobile ? 1 : 0;
        // this.setTheme();
    }
    toggleColorTheme() {
        this.settings.theme = (this.settings.theme + 1) % this.availableThemes.length;
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
        if (this.settings.theme >= this.availableThemes.length) {
            this.settings.theme = 0;
        }
        Object.keys(this.availableThemes[this.settings.theme].properties).forEach(property => {
            document.documentElement.style.setProperty(property, this.availableThemes[this.settings.theme].properties[property]);
        });
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
        // this.play('oh_no.mp3');
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

/***/ "./src/app/theme.constant.ts":
/*!***********************************!*\
  !*** ./src/app/theme.constant.ts ***!
  \***********************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
const theme = {
    properties: {}
};


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
        this.punishment = false;
        this.saboteur = true;
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
    togglePunishment() {
        this.punishment = !this.punishment;
        if (this.punishment) {
            this.saboteur = false;
        }
    }
    toggleSaboteur() {
        this.saboteur = !this.saboteur;
        if (this.saboteur) {
            this.punishment = false;
        }
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
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");




















function X01Component_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.settings.setStartValue(101); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "101 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.settings.setStartValue(201); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "201 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.settings.setStartValue(301); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "301 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.settings.setStartValue(501); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "501 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.settings.setStartValue(701); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "701 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.settings.setStartValue(901); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "901 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.settings.toggleSaboteur(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Saboteur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.settings.togglePunishment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Punishment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Check In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.settings.setStart(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Normal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.settings.setStart(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Double ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.settings.setStart(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Triple ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Check Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r82.settings.setCheckout(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Single ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.settings.setCheckout(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Double ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r84.settings.setCheckout(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Triple ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.settings.setCheckout(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "High Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r65.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r65.settings.startValue === 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r65.settings.startValue === 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r65.settings.startValue === 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r65.settings.startValue === 501);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r65.settings.startValue === 701);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r65.settings.startValue === 901);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r65.settings.saboteur);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r65.settings.punishment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r65.settings.start === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r65.settings.start === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r65.settings.start === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r65.settings.checkout === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r65.settings.checkout === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r65.settings.checkout === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r65.settings.checkout === 4);
} }
function X01Component_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 8);
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r66.playground)("info", ctx_r66.getInfo());
} }
function X01Component_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r87 = ctx.$implicit;
    const i_r88 = ctx.index;
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r88 === ctx_r86.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r87)("hasContent", false);
} }
function X01Component_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, X01Component_div_4_div_1_Template, 2, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r67.application.settings.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r67.game.players);
} }
function X01Component_app_number_plate_visual_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 5);
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r68.playground);
} }
function X01Component_app_number_plate_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 5);
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r69.playground);
} }
class X01Component extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
        super('X01', application, game, route, dialogService, soundService, botService, statisticsService, 'x01');
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
        if (this.settings.saboteur || this.settings.punishment) {
            this.game.players.filter(p => p.id !== player.id && p.score === player.score).forEach(p => {
                if (this.settings.saboteur) {
                    p.score = this.settings.startValue;
                }
                else {
                    player.score = this.settings.startValue;
                }
            });
        }
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
    isPrimaryField(fieldIndex) {
        return true;
    }
}
X01Component.ɵfac = function X01Component_Factory(t) { return new (t || X01Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_4__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_10__["StatisticsService"])); };
X01Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: X01Component, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 7, consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], [3, "playground", "info", 4, "ngIf"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], [1, "button", 3, "click"], [1, "button", "shortmedium", 3, "click"], [3, "playground", "info"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]], template: function X01Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, X01Component_app_settings_1_Template, 40, 31, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, X01Component_app_game_toolbar_3_Template, 1, 2, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, X01Component_div_4_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, X01Component_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, X01Component_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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