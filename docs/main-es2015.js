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

module.exports = JSON.parse("{\"name\":\"darts-scoreboard-ng\",\"version\":\"2.3.11\",\"license\":\"MIT\",\"author\":{\"name\":\"Viktor Hajer\",\"email\":\"viktor.hajer@gmail.com\"},\"description\":\"See Readme\",\"homepage\":\"https://github.com/viktorhajer/darts-scoreboard-ng#readme\",\"bugs\":{\"url\":\"https://github.com/viktorhajer/darts-scoreboard-ng/issues\"},\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build\",\"eslint\":\"eslint src/**/*.ts\"},\"private\":false,\"dependencies\":{\"@angular/animations\":\"~9.0.0\",\"@angular/cdk\":\"^9.0.0\",\"@angular/common\":\"~9.0.0\",\"@angular/compiler\":\"~9.0.0\",\"@angular/core\":\"~9.0.0\",\"@angular/forms\":\"~9.0.0\",\"@angular/material\":\"^9.0.0\",\"@angular/platform-browser\":\"~9.0.0\",\"@angular/platform-browser-dynamic\":\"~9.0.0\",\"@angular/router\":\"~9.0.0\",\"rxjs\":\"~6.5.4\",\"tslib\":\"^1.10.0\",\"zone.js\":\"~0.10.2\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.900.1\",\"@angular/cli\":\"~9.0.1\",\"@angular/compiler-cli\":\"~9.0.0\",\"@angular/language-service\":\"~9.0.0\",\"@types/node\":\"12.12.47\",\"@typescript-eslint/eslint-plugin\":\"^2.19.2\",\"@typescript-eslint/eslint-plugin-tslint\":\"^2.19.2\",\"@typescript-eslint/parser\":\"^2.19.2\",\"eslint\":\"^6.8.0\",\"ts-node\":\"~8.3.0\",\"tslint\":\"~5.18.0\",\"typescript\":\"~3.7.5\"}}");

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








const _c0 = ["audioElement"];
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
    } }, decls: 12, vars: 2, consts: [["audioElement", ""], ["outlet", "outlet"], [1, "theme-chooser"], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-icon-button", "", 3, "color", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", _r1 && _r1.isActivated && _r1.activatedRoute);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.applicationStateService.settings.details ? "primary" : "accent");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: [".theme-chooser[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXERldmVsb3BtZW50XFxkYXJ0cy1zY29yZWJvYXJkLW5nL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRoZW1lLWNob29zZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG4iLCIudGhlbWUtY2hvb3NlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufSJdfQ== */"], data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]] } });
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
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");





















function AroundClockComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r116.settings.toggleJump(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Enable Jump ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r118.settings.togglePunishment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Punishment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r119.settings.toggleSaboteur(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Saboteur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r120.settings.togglePromoter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Promoter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r121.settings.toggleTreeLives(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Tree Lives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r122.settings.toggleFiveLives(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Five Lives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r123.settings.toggleSevenLives(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Seven Lives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r124.settings.toggleTenLives(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Ten Lives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r125.settings.toggleFirstDeath(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " First Death ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r126.settings.togglePalFirst(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Pal First ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Field's order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r127.settings.setStyle(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Ascending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r128.settings.setStyle(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Descending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r129.settings.setStyle(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Clockwise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r130.settings.setStyle(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Anticlockwise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r131.settings.setStyle(8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " TripleClock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r132.settings.setStyle(9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " ZoneClock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r133.settings.setStyle(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Random ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r134.settings.setStyle(6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Random11 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r135.settings.setStyle(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Recurrence ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r136.settings.setStyle(7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Pirate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Around The Clock")("playground", ctx_r112.playground)("rules", "The object of this popular game is to be the first player to hit every number on the board " + "from 1-20. The numbers must be hit in order, and players alternate after three throws. The player " + "must hit each number in turn and cannot proceed until to the next number until the number is hit. " + "The winner is the player who hist all the numbers in order first.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r112.settings.jump ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r112.settings.punishment ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r112.settings.saboteur ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r112.settings.promoter ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r112.settings.life === 3 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r112.settings.life === 5 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r112.settings.life === 7 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r112.settings.life === 10 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r112.settings.firstDeath ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r112.settings.palFirst ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r112.settings.style == 0 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r112.settings.style == 4 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r112.settings.style == 1 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r112.settings.style == 2 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r112.settings.style == 8 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r112.settings.style == 9 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r112.settings.style == 3 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r112.settings.style == 6 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r112.settings.style == 5 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r112.settings.style == 7 ? "primary" : "");
} }
function AroundClockComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 7);
} if (rf & 2) {
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r113.playground);
} }
function AroundClockComponent_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r138 = ctx.$implicit;
    const i_r139 = ctx.index;
    const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player\n        ", i_r139 === ctx_r137.game.actualPlayerIndex ? "highlighted" : "", "\n        ", ctx_r137.settings.life !== 0 && player_r138.isInactive() ? "inactive" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r138)("scoreDisplayed", false)("lifeDisplayed", ctx_r137.settings.life !== 0)("hasContent", false);
} }
function AroundClockComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_ng_container_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r141); const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r140.toggleHiddenInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AroundClockComponent_ng_container_4_div_3_Template, 2, 8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", ctx_r114.hiddenInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r114.getDistanceFromRandom());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r114.game.players);
} }
function AroundClockComponent_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 7);
} if (rf & 2) {
    const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r115.playground);
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
            .filter(p => this.getFieldIndex(this.getPlayerState(p).actFieldIndex) === fieldIndex).map(p => p.name);
        return !!owners.length ? owners.join(' ') : '';
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
AroundClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AroundClockComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 6, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], [3, "playground"], [1, "hidden-info", 3, "click"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "scoreDisplayed", "lifeDisplayed", "hasContent"]], template: function AroundClockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AroundClockComponent_app_settings_1_Template, 48, 23, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AroundClockComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AroundClockComponent_ng_container_4_Template, 4, 4, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AroundClockComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDivider"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_17__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");



















function CaptureTheFlagComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureTheFlagComponent_app_settings_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219); const ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r218.settings.randomCity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "City (5) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureTheFlagComponent_app_settings_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219); const ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r220.settings.randomCountry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Country (10) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureTheFlagComponent_app_settings_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219); const ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r221.settings.randomContinent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Continent (20) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureTheFlagComponent_app_settings_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219); const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r222.settings.toggleNoScore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Capture the Flag")("playground", ctx_r214.playground)("rules", "N\u00F6vekv\u0151 sorrendben j\u00F6nnek a mez\u0151k, a j\u00E1t\u00E9kosoknak el kell foglalni \u0151ket. Ez t\u00F6rt\u00E9nhet \u00FAgy," + " hogy h\u00E1romszor eltal\u00E1lja a j\u00E1t\u00E9kos vagy dob egyetlen dupla bullt. Ha a j\u00E1t\u00E9kos elfoglalta a mez\u0151t, " + "akkor No score eset\u00E9n 1 pontot kap, egy\u00E9bk\u00E9nt megkapja a mez\u0151 \u00E9rt\u00E9k\u00E9t \u00E9s megny\u00EDlik a k\u00F6vetkez\u0151 mez\u0151." + "A j\u00E1t\u00E9k a bull mez\u0151 elfoglal\u00E1s\u00E1ig tart. A v\u00E9g\u00E9n az nyer, akinek a legt\u00F6bb pontja van. D\u00F6ntetlen " + "lehets\u00E9ges.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r214.settings.style === 0 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r214.settings.style === 1 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r214.settings.style === 2 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r214.settings.noScore ? "primary" : "");
} }
function CaptureTheFlagComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 7);
} if (rf & 2) {
    const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r215.playground);
} }
function CaptureTheFlagComponent_ng_container_4_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r227 = ctx.$implicit;
    const player_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("field ", ctx_r226.isActiveField(field_r227) ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r227 === 20 ? "B" : field_r227 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r226.getFieldValue(player_r224, field_r227));
} }
function CaptureTheFlagComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CaptureTheFlagComponent_ng_container_4_div_1_div_3_Template, 4, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r224 = ctx.$implicit;
    const i_r225 = ctx.index;
    const ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r225 === ctx_r223.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r223.settings.fields);
} }
function CaptureTheFlagComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CaptureTheFlagComponent_ng_container_4_div_1_Template, 4, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r216.game.players);
} }
function CaptureTheFlagComponent_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 7);
} if (rf & 2) {
    const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r217.playground);
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
CaptureTheFlagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaptureTheFlagComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 6, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player"], [1, "field-set"], [1, "small"]], template: function CaptureTheFlagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CaptureTheFlagComponent_app_settings_1_Template, 9, 7, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CaptureTheFlagComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CaptureTheFlagComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CaptureTheFlagComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");




















function CricketComponent_app_settings_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const i_r80 = ctx.index; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r81.settings.setNumber(i_r80); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const numb_r79 = ctx.$implicit;
    const i_r80 = ctx.index;
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r78.settings.isFieldAllowed(i_r80) ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r79 === 21 ? "B" : numb_r79, " ");
} }
function CricketComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CricketComponent_app_settings_1_button_3_Template, 2, 2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.settings.upper(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Upper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.settings.lower(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lower");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.settings.left(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.settings.right(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.settings.odd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Odd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.settings.even(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Even");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r90.settings.prime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.settings.notPrime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Not prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.settings.randomize(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Random 05");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r93.settings.randomize(10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Random 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.settings.randomize(15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Random 15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r95.settings.small(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r96.settings.high(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.settings.star(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.settings.cross(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cross");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r99.settings.all(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r100.settings.setStyle(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Classic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r101.settings.setStyle(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cut-Throat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r102.settings.setStyle(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "No Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r103.settings.setStyle(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Black Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Ultimate Cricket")("playground", ctx_r74.playground)("rules", "The objective shall be to 'own' or 'close' certain numbers on the board, and to achieve " + "the highest point score. The player or team to do so first, shall be the winner.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r74.settings.getNumbers());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r74.settings.style == 1 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r74.settings.style == 2 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r74.settings.style == 3 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r74.settings.style == 4 ? "primary" : "");
} }
function CricketComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 10);
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r75.playground);
} }
function CricketComponent_ng_container_4_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r108 = ctx.$implicit;
    const player_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("field ", ctx_r107.isActiveField(player_r105, field_r108) && ctx_r107.settings.isBlackOutGame() ? "active" : "", " ", !ctx_r107.isFieldDoneForPlayer(player_r105, field_r108) ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r108 === 20 ? "B" : field_r108 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r107.getFieldValue(player_r105, field_r108));
} }
function CricketComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_ng_container_4_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const player_r105 = ctx.$implicit; const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r110.changePlayerToDisplay(player_r105); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CricketComponent_ng_container_4_div_1_div_3_Template, 4, 6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r105 = ctx.$implicit;
    const i_r106 = ctx.index;
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r106 === ctx_r104.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r104.settings.fields);
} }
function CricketComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CricketComponent_ng_container_4_div_1_Template, 4, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r76.game.players);
} }
function CricketComponent_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 10);
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r77.playground);
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
CricketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CricketComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 6, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "click"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], [3, "playground"], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "player"], [1, "field-set"], [3, "class", 4, "ngFor", "ngForOf"], [1, "small"]], template: function CricketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CricketComponent_app_settings_1_Template, 48, 8, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CricketComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CricketComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CricketComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_17__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");























function DuelComponent_app_settings_1_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r284); const i_r282 = ctx.index; const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r283.settings.setNumber(i_r282); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const numb_r281 = ctx.$implicit;
    const i_r282 = ctx.index;
    const ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r280.settings.isFieldAllowed(i_r282) ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r281 === 21 ? "B" : numb_r281, " ");
} }
function DuelComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DuelComponent_app_settings_1_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r286); const ctx_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r285.settings.startPoint = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DuelComponent_app_settings_1_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r286); const ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r287.settings.targetPoint = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Punishment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DuelComponent_app_settings_1_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r286); const ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r288.settings.punishment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r286); const ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r289.settings.toggleHandOver(); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r286); const ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r290.settings.upper(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Upper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r286); const ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r291.settings.lower(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lower");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r286); const ctx_r292 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r292.settings.left(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r286); const ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r293.settings.right(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r286); const ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r294.settings.odd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Odd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r286); const ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r295.settings.even(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Even");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r286); const ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r296.settings.prime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r286); const ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r297.settings.notPrime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Not prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r286); const ctx_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r298.settings.randomize(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Random 05");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r286); const ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r299.settings.randomize(10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Random 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r286); const ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r300.settings.randomize(15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Random 15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r286); const ctx_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r301.settings.small(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r286); const ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r302.settings.high(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r286); const ctx_r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r303.settings.star(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r286); const ctx_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r304.settings.cross(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Cross");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r286); const ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r305.settings.all(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Duel")("playground", ctx_r276.playground)("rules", "....");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r276.settings.startPoint);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r276.settings.targetPoint);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r276.settings.punishment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r276.settings.handover ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r276.settings.getNumbers());
} }
function DuelComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 13);
} if (rf & 2) {
    const ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r277.playground);
} }
function DuelComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r307 = ctx.$implicit;
    const i_r308 = ctx.index;
    const ctx_r306 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player ", i_r308 === ctx_r306.game.actualPlayerIndex ? "highlighted" : "", " ", ctx_r306.isInactive(player_r307) ? "inactive" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r307)("hasContent", false);
} }
function DuelComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DuelComponent_ng_container_4_div_1_Template, 2, 6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r278.game.players);
} }
function DuelComponent_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 13);
} if (rf & 2) {
    const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r279.playground);
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
DuelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DuelComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 6, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], [1, "field-set"], ["appearance", "outline", 1, "big"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "click"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]], template: function DuelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DuelComponent_app_settings_1_Template, 57, 8, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DuelComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DuelComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DuelComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_19__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_20__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_21__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");



















function FivesComponent_app_settings_1_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FivesComponent_app_settings_1_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r184); const divider_r182 = ctx.$implicit; const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r183.settings.setDivider(divider_r182); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const divider_r182 = ctx.$implicit;
    const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r180.settings.divider === divider_r182 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](divider_r182);
} }
function FivesComponent_app_settings_1_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FivesComponent_app_settings_1_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r187); const limit_r185 = ctx.$implicit; const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r186.settings.setLimit(limit_r185); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const limit_r185 = ctx.$implicit;
    const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r181.settings.limit === limit_r185 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](limit_r185);
} }
function FivesComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FivesComponent_app_settings_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189); const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r188.settings.toggleNoCheat(); });
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
    const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Fives")("playground", ctx_r176.playground)("rules", "The idea of the game to throw three darts into the board, in turn, to score a number that " + "is divisible by five. The higher the number you score, the more points you can score. For every five " + "scored, one point is awarded. E.g. if a player scores fifteen then he or she gains three points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r176.settings.noCheat ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r176.settings.getSelectableDividers());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r176.settings.getSelectableLimits());
} }
function FivesComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 8);
} if (rf & 2) {
    const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r177.playground);
} }
function FivesComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r191 = ctx.$implicit;
    const i_r192 = ctx.index;
    const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r192 === ctx_r190.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r191)("hasContent", false);
} }
function FivesComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FivesComponent_ng_container_4_div_1_Template, 2, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r178.game.players);
} }
function FivesComponent_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 8);
} if (rf & 2) {
    const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r179.playground);
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
FivesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FivesComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 6, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]], template: function FivesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FivesComponent_app_settings_1_Template, 13, 6, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FivesComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FivesComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FivesComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");




















function HareAndHoundComponent_app_settings_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HareAndHoundComponent_app_settings_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r200); const start_r198 = ctx.$implicit; const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r199.settings.setHoundStart(start_r198 - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const start_r198 = ctx.$implicit;
    const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r197.settings.houndStartIndex + 1 === start_r198 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](start_r198);
} }
function HareAndHoundComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hound start position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HareAndHoundComponent_app_settings_1_button_3_Template, 2, 2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Hare and Hound")("playground", ctx_r193.playground)("rules", "The frist player is the hare, and his opponent is the hound in pursuit. The hare must travel " + "clockwise around the board starting at 20. The hare wins by returning to 20 before the hound catches " + "up with him. The hound usually starts from either 12 or 5, depending on the preference of the " + "players. The hound wins by overtaking the hare.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r193.settings.getSelectableHoundStart());
} }
function HareAndHoundComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 8);
} if (rf & 2) {
    const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r194.playground);
} }
function HareAndHoundComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r202 = ctx.$implicit;
    const i_r203 = ctx.index;
    const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r203 === ctx_r201.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r202)("hasContent", false);
} }
function HareAndHoundComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HareAndHoundComponent_ng_container_4_div_1_Template, 2, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r195.game.players);
} }
function HareAndHoundComponent_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 8);
} if (rf & 2) {
    const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r196.playground);
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
            .map(p => p.name);
        return !!owners.length ? owners.join(' ') : '';
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
HareAndHoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HareAndHoundComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 6, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]], template: function HareAndHoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HareAndHoundComponent_app_settings_1_Template, 4, 4, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HareAndHoundComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HareAndHoundComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HareAndHoundComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");



















function ImitatorComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Number of Round");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r234); const ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r233.settings.setRound(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r234); const ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r235.settings.setRound(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r234); const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r236.settings.setRound(10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r234); const ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r237.settings.setRound(15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 15 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r234); const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r238.settings.setRound(20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 20 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Imitator")("playground", ctx_r229.playground)("rules", "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r229.settings.round === 3 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r229.settings.round === 5 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r229.settings.round === 10 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r229.settings.round === 15 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r229.settings.round === 20 ? "primary" : "");
} }
function ImitatorComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 8);
} if (rf & 2) {
    const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r230.playground)("reversRound", ctx_r230.settings.round);
} }
function ImitatorComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r240 = ctx.$implicit;
    const i_r241 = ctx.index;
    const ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r241 === ctx_r239.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r240)("hasContent", false);
} }
function ImitatorComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImitatorComponent_ng_container_4_div_1_Template, 2, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r231.game.players);
} }
function ImitatorComponent_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 11);
} if (rf & 2) {
    const ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r232.playground);
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
ImitatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImitatorComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 6, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", "reversRound", 4, "ngIf"], [4, "ngIf"], [3, "playground", 4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], [3, "playground", "reversRound"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"], [3, "playground"]], template: function ImitatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImitatorComponent_app_settings_1_Template, 13, 8, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImitatorComponent_app_game_toolbar_3_Template, 1, 2, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImitatorComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ImitatorComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 5);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");























function KillerComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KillerComponent_app_settings_1_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r166); const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r165.settings.numberOfLives = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KillerComponent_app_settings_1_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r166); const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r167.settings.boardingLimit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KillerComponent_app_settings_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r166); const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r168.settings.toggleSuicide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Suicide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Killer")("playground", ctx_r161.playground)("rules", "Firstly each player draws lots i.e. a number between 1 - 20. Each player is then given " + "between 3 & 5 lives. The objective of this game is for each thrower to first hit their own number " + "three times to gain status of KILLER. Once they have achieved this they then can throw for their " + "opponents number in any order they wish. Every time a KILLER status player hits an opponents " + "number the opponent loses a life. KILLERS can also commit SUICIDE by hitting their own number's " + "triple. The winner of this game is the player that remains alive.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r161.settings.numberOfLives);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r161.settings.boardingLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r161.settings.suicide ? "primary" : "");
} }
function KillerComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 10);
} if (rf & 2) {
    const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r162.playground);
} }
function KillerComponent_ng_container_4_div_1_ng_container_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Boarding: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const player_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r173.getPlayerState(player_r170).boarding);
} }
function KillerComponent_ng_container_4_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, KillerComponent_ng_container_4_div_1_ng_container_2_ng_container_11_Template, 4, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const player_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r172.getPlayerField(player_r170));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", player_r170.life, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r172.getPlayerState(player_r170).killer);
} }
function KillerComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KillerComponent_ng_container_4_div_1_ng_container_2_Template, 12, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r170 = ctx.$implicit;
    const i_r171 = ctx.index;
    const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player ", i_r171 === ctx_r169.game.actualPlayerIndex ? "highlighted" : "", " ", player_r170.isInactive() ? "inactive" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r170)("scoreDisplayed", false)("highlighted", ctx_r169.getPlayerState(player_r170).killer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r169.getPlayerField(player_r170) !== "0");
} }
function KillerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KillerComponent_ng_container_4_div_1_Template, 3, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r163.game.players);
} }
function KillerComponent_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 10);
} if (rf & 2) {
    const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r164.playground);
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
        return owner ? `${owner.name}(${owner.life})` : '';
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
KillerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KillerComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 6, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], [1, "field-set"], ["appearance", "outline", 1, "big"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "scoreDisplayed", "highlighted"], [1, "score"], [1, "clear"], [1, "line"]], template: function KillerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KillerComponent_app_settings_1_Template, 15, 6, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KillerComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KillerComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, KillerComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_19__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_20__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_21__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");






















function KnockoutComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KnockoutComponent_app_settings_1_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r209); const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r208.settings.numberOfLives = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KnockoutComponent_app_settings_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r209); const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r210.settings.toggleKiller(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Below the belt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Knockout")("playground", ctx_r204.playground)("rules", "The player selected to throw first must throw as many points as possible. The player next in " + "line then must throw a higher score than the player throwing before him, if he fails to throw a " + "higher score a ring is put around their score, once you have 3 rings next to your name, you drop " + "out of the game.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r204.settings.numberOfLives);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r204.settings.killer ? "primary" : "");
} }
function KnockoutComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 11);
} if (rf & 2) {
    const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r205.playground)("info", ctx_r205.getInfo());
} }
function KnockoutComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r212 = ctx.$implicit;
    const i_r213 = ctx.index;
    const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player ", i_r213 === ctx_r211.game.actualPlayerIndex ? "highlighted" : "", " ", player_r212.isInactive() ? "inactive" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r212)("scoreDisplayed", true)("lifeDisplayed", true)("hasContent", false);
} }
function KnockoutComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KnockoutComponent_ng_container_4_div_1_Template, 2, 8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r206.game.players);
} }
function KnockoutComponent_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 14);
} if (rf & 2) {
    const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r207.playground);
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
KnockoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KnockoutComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 6, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", "info", 4, "ngIf"], [4, "ngIf"], [3, "playground", 4, "ngIf"], [3, "title", "playground", "rules"], [1, "field-set"], ["appearance", "outline", 1, "big"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 1, "button", "medium", 3, "color", "click"], [3, "playground", "info"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "scoreDisplayed", "lifeDisplayed", "hasContent"], [3, "playground"]], template: function KnockoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KnockoutComponent_app_settings_1_Template, 11, 5, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KnockoutComponent_app_game_toolbar_3_Template, 1, 2, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KnockoutComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, KnockoutComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 5);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_19__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_20__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
        this.punishment = false;
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
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");




















function ScamComponent_app_settings_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r250); const i_r248 = ctx.index; const ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r249.settings.setNumber(i_r248); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const numb_r247 = ctx.$implicit;
    const i_r248 = ctx.index;
    const ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r246.settings.isFieldAllowed(i_r248) ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r247 === 21 ? "B" : numb_r247, " ");
} }
function ScamComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScamComponent_app_settings_1_button_3_Template, 2, 2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r251.settings.upper(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Upper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r253.settings.lower(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lower");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r254.settings.left(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r255.settings.right(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r256.settings.odd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Odd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r257.settings.even(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Even");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r258.settings.prime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r259.settings.notPrime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Not prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r260.settings.randomize(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Random 05");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r261.settings.randomize(10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Random 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r262.settings.randomize(15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Random 15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r263.settings.small(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r264.settings.high(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r265.settings.star(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r266.settings.cross(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cross");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r267.settings.all(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r268.settings.setStyle(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Classic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r269.settings.toggleStopper(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Stopper ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r270.settings.toggleReverse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Reverse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r271.settings.setStyle(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "No Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r272.settings.togglePunishment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Punish(25) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Scam")("playground", ctx_r242.playground)("rules", "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r242.settings.getNumbers());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r242.settings.style == 1 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r242.settings.stopper ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r242.settings.reverse ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r242.settings.style == 3 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r242.settings.punishment ? "primary" : "");
} }
function ScamComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 10);
} if (rf & 2) {
    const ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r243.playground);
} }
function ScamComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r274 = ctx.$implicit;
    const i_r275 = ctx.index;
    const ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r275 === ctx_r273.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r274)("hasContent", false)("highlighted", ctx_r273.settings.stopper && ctx_r273.game.isTheFirstPlayer(player_r274))("scoreDisplayed", !ctx_r273.settings.stopper || !ctx_r273.game.isTheFirstPlayer(player_r274));
} }
function ScamComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScamComponent_ng_container_4_div_1_Template, 2, 7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r244.game.players);
} }
function ScamComponent_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 10);
} if (rf & 2) {
    const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r245.playground);
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
    isSecondaryField(fieldIndex) {
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
ScamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScamComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 6, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "click"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent", "highlighted", "scoreDisplayed"]], template: function ScamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScamComponent_app_settings_1_Template, 51, 9, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScamComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ScamComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ScamComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
        this.halveIt = false;
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





















function ShanghaiComponent_app_settings_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r150); const i_r148 = ctx.index; const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r149.settings.setNumber(i_r148); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const numb_r147 = ctx.$implicit;
    const i_r148 = ctx.index;
    const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r146.settings.numbs[i_r148] ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r147 === 21 ? "B" : numb_r147, " ");
} }
function ShanghaiComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShanghaiComponent_app_settings_1_button_3_Template, 2, 2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r152); const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r151.settings.randomize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Randomize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r152); const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r153.settings.toggleNoScore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r152); const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r154.settings.toggleHalveIt(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Halve It ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Shanghai / Halve It")("playground", ctx_r142.playground)("rules", " Players start by throwing at the number 1 on the board. The object is to hit a single," + "treble and double (in any order). This first player to hit a single, treble and double wins. If no" + "player achieves this on number 1, the play moves to number 2 and so on until someone wins.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r142.settings.getNumbers());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r142.settings.noScore ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r142.settings.halveIt ? "primary" : "");
} }
function ShanghaiComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 10);
} if (rf & 2) {
    const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r143.playground);
} }
function ShanghaiComponent_ng_container_4_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r159 = ctx.$implicit;
    const player_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("field ", ctx_r158.isActiveField(field_r159) ? "active" : "", " ", ctx_r158.isFieldDoneForPlayer(field_r159) ? "" : "highlighted", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r159 === 20 ? "B" : field_r159 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r158.getFieldValue(player_r156, field_r159));
} }
function ShanghaiComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShanghaiComponent_ng_container_4_div_1_div_3_Template, 4, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r156 = ctx.$implicit;
    const i_r157 = ctx.index;
    const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r157 === ctx_r155.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r155.settings.fields);
} }
function ShanghaiComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShanghaiComponent_ng_container_4_div_1_Template, 4, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r144.game.players);
} }
function ShanghaiComponent_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 10);
} if (rf & 2) {
    const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r145.playground);
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
ShanghaiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShanghaiComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 6, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "click"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player"], [1, "field-set"], [1, "small"]], template: function ShanghaiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShanghaiComponent_app_settings_1_Template, 11, 6, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShanghaiComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShanghaiComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShanghaiComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_17__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.data.content);
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

/***/ "./src/app/shared/components/darts-table/darts-table-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/darts-table/darts-table-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DartsTableDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DartsTableDialogComponent", function() { return DartsTableDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function DartsTableDialogComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const f_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("clip darts-table-field-", f_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r7.isPrimary(f_r8))("secondary", ctx_r7.isSecondary(f_r8));
} }
class DartsTableDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    isPrimary(index) {
        return this.data.primary.some(p => p === index);
    }
    isSecondary(index) {
        return this.data.secondary.some(p => p === index);
    }
    close() {
        this.dialogRef.close();
    }
}
DartsTableDialogComponent.ɵfac = function DartsTableDialogComponent_Factory(t) { return new (t || DartsTableDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DartsTableDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DartsTableDialogComponent, selectors: [["ng-component"]], decls: 62, vars: 1, consts: [[1, "dialog-container", "darts-table-container"], [1, "body-2", 3, "click"], ["viewBox", "0 0 600 600"], ["stroke", "#000", "stroke-width", "28", "ry", "255.21392", "rx", "255.21392", "id", "svg_1", "cy", "299.99999", "cx", "300", "opacity", "NaN", "fill", "#ffffaa"], ["stroke", "#000", "stroke-width", "5", "fill-opacity", "0", "ry", "234.85655", "rx", "234.85655", "id", "svg_44", "cy", "299.99999", "cx", "300.00001", "opacity", "NaN", "fill", "#ffffaa"], ["stroke", "#000", "stroke-width", "14", "ry", "17.42588", "rx", "17.42588", "id", "svg_2", "cy", "300", "cx", "300", "opacity", "NaN", "fill", "#ffffff"], ["transform", "rotate(-9 300 300)", "id", "svg_7", "y2", "543.61446", "x2", "300", "y1", "56.38556", "x1", "300", "stroke-width", "5", "stroke", "#000", "fill", "none"], ["transform", "rotate(27 300 300)", "id", "svg_8", "y2", "543.61446", "x2", "300", "y1", "56.38556", "x1", "300", "stroke-width", "5", "stroke", "#000", "fill", "none"], ["transform", "rotate(63 300.741 300)", "id", "svg_9", "y2", "543.61443", "x2", "300.74077", "y1", "56.38553", "x1", "300.74077", "stroke-width", "5", "stroke", "#000", "fill", "none"], ["transform", "rotate(135 300 300)", "id", "svg_10", "y2", "543.61445", "x2", "300.00003", "y1", "56.38555", "x1", "300.00003", "stroke-width", "5", "stroke", "#000", "fill", "none"], ["transform", "rotate(99 300 300)", "id", "svg_11", "y2", "543.61444", "x2", "300.00002", "y1", "56.38554", "x1", "300.00002", "stroke-width", "5", "stroke", "#000", "fill", "none"], ["transform", "rotate(45 300 300)", "stroke", "#000", "id", "svg_16", "y2", "543.61444", "x2", "300.00002", "y1", "56.38554", "x1", "300.00002", "stroke-width", "5", "fill", "none"], ["transform", "rotate(9 300 300)", "id", "svg_17", "y2", "543.61446", "x2", "300.00001", "y1", "56.38556", "x1", "300.00001", "stroke-width", "5", "stroke", "#000", "fill", "none"], ["transform", "rotate(82 300.741 300)", "id", "svg_18", "y2", "543.61443", "x2", "300.74077", "y1", "56.38553", "x1", "300.74077", "stroke-width", "5", "stroke", "#000", "fill", "none"], ["transform", "rotate(117 300 300)", "id", "svg_19", "y2", "543.61444", "x2", "300.00002", "y1", "56.38554", "x1", "300.00002", "stroke-width", "5", "stroke", "#000", "fill", "none"], ["transform", "rotate(153 300 300)", "id", "svg_20", "y2", "543.61445", "x2", "300.00003", "y1", "56.38555", "x1", "300.00003", "stroke-width", "5", "stroke", "#000", "fill", "none"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_21", "y", "101.43315", "x", "282.14266", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_22", "y", "112.14756", "x", "353.57205", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_23", "y", "142.1479", "x", "403.57262", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_24", "y", "186.43412", "x", "459.28754", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_25", "y", "245.72052", "x", "479.28777", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_26", "y", "312.14984", "x", "500.71658", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_27", "y", "374.29341", "x", "480.71635", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_28", "y", "430.72262", "x", "452.1446", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_29", "y", "477.15173", "x", "417.1442", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_30", "y", "506.43778", "x", "347.1434", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_31", "y", "518.58076", "x", "289.2856", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_32", "y", "508.58065", "x", "216.42762", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_33", "y", "477.15172", "x", "169.28422", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_34", "y", "431.43692", "x", "110.71213", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_35", "y", "372.15053", "x", "90.71191", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_36", "y", "306.43548", "x", "72.14025", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_37", "y", "244.29192", "x", "83.56896", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_38", "y", "185.71982", "x", "122.14082", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_39", "y", "140.71931", "x", "162.14128", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_40", "y", "112.14755", "x", "227.85631", "stroke", "#000", "fill", "#000000"], ["stroke-opacity", "0", "font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_41", "y", "310.35406", "x", "289.21193", "stroke", "#0f0f00", "fill", "#ffffff"], ["stroke", "#000", "stroke-width", "5", "fill-opacity", "0", "ry", "148.78414", "rx", "148.78414", "id", "svg_46", "cy", "299.99999", "cx", "300", "opacity", "NaN", "fill", "#ffffaa"], ["stroke", "#000", "stroke-width", "5", "fill-opacity", "0", "ry", "139.85547", "rx", "139.85547", "id", "svg_47", "cy", "299.99998", "cx", "300.00001", "opacity", "NaN", "fill", "#ffffaa"], [3, "class", "primary", "secondary", 4, "ngFor", "ngForOf"]], template: function DartsTableDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DartsTableDialogComponent_Template_mat_dialog_content_click_1_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ellipse", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ellipse", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ellipse", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "line", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "line", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "line", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "line", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "line", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "line", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "line", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "line", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "line", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "line", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "text", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "text", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "text", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "text", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "text", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "text", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "text", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "text", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "text", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "text", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "17");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "text", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "text", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "text", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "text", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "text", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "text", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "text", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "text", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "text", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "text", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "text", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "ellipse", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "ellipse", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, DartsTableDialogComponent_div_61_Template, 1, 7, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.field);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".darts-table-container[_ngcontent-%COMP%]   .clip[_ngcontent-%COMP%], .darts-table-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: calc(100vw - 40px);\n  height: calc(100vw - 40px);\n  position: absolute;\n  top: 20px;\n  left: 20px;\n}\n.darts-table-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: grayscale(60%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .clip[_ngcontent-%COMP%] {\n  background: #f0280f;\n  opacity: 0.6;\n}\n.darts-table-container[_ngcontent-%COMP%]   .clip.primary[_ngcontent-%COMP%] {\n  background: #1133ee;\n}\n.darts-table-container[_ngcontent-%COMP%]   .clip.secondary[_ngcontent-%COMP%] {\n  background: #d3e531;\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-2[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(50% 53.5%, 44% 89%, 56% 89%);\n          clip-path: polygon(50% 53.5%, 44% 89%, 56% 89%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-16[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(51.2% 53.7%, 56% 89%, 68% 85%);\n          clip-path: polygon(51.2% 53.7%, 56% 89%, 68% 85%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-1[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(52.2% 53%, 68% 85%, 78% 78%);\n          clip-path: polygon(52.2% 53%, 68% 85%, 78% 78%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-14[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(52.8% 52%, 78% 78%, 85% 68%);\n          clip-path: polygon(52.8% 52%, 78% 78%, 85% 68%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-9[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(53% 51%, 85% 68%, 89% 56%);\n          clip-path: polygon(53% 51%, 85% 68%, 89% 56%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-5[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(53% 50%, 89% 56%, 89% 44%);\n          clip-path: polygon(53% 50%, 89% 56%, 89% 44%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-12[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(53% 49%, 89% 45%, 85% 32%);\n          clip-path: polygon(53% 49%, 89% 45%, 85% 32%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-3[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(53% 47.9%, 86% 32%, 78% 22%);\n          clip-path: polygon(53% 47.9%, 86% 32%, 78% 22%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-17[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(52.2% 47%, 78.3% 22%, 67.2% 15%);\n          clip-path: polygon(52.2% 47%, 78.3% 22%, 67.2% 15%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-0[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(51% 47%, 68% 15%, 56% 11%);\n          clip-path: polygon(51% 47%, 68% 15%, 56% 11%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-19[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(50% 47%, 56.5% 11%, 43.2% 11%);\n          clip-path: polygon(50% 47%, 56.5% 11%, 43.2% 11%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-4[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(32% 15%, 49% 47%, 44% 11%);\n          clip-path: polygon(32% 15%, 49% 47%, 44% 11%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-11[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(22% 22%, 47.8% 47%, 32% 15%);\n          clip-path: polygon(22% 22%, 47.8% 47%, 32% 15%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-8[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(15% 32%, 47% 47.8%, 22% 22%);\n          clip-path: polygon(15% 32%, 47% 47.8%, 22% 22%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-13[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(11% 44%, 46.2% 48.8%, 15% 32%);\n          clip-path: polygon(11% 44%, 46.2% 48.8%, 15% 32%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-10[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(11% 56%, 47% 50%, 11% 44%);\n          clip-path: polygon(11% 56%, 47% 50%, 11% 44%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-7[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(15% 68%, 47% 51%, 11% 55%);\n          clip-path: polygon(15% 68%, 47% 51%, 11% 55%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-15[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(22% 78%, 47% 52.2%, 15% 68%);\n          clip-path: polygon(22% 78%, 47% 52.2%, 15% 68%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-6[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(32% 85%, 47.8% 53%, 22% 78%);\n          clip-path: polygon(32% 85%, 47.8% 53%, 22% 78%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-18[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(44% 89%, 49% 53%, 32% 85%);\n          clip-path: polygon(44% 89%, 49% 53%, 32% 85%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-20[_ngcontent-%COMP%] {\n  -webkit-clip-path: circle(3.7% at 50% 50%);\n          clip-path: circle(3.7% at 50% 50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGFydHMtdGFibGUvRDpcXERldmVsb3BtZW50XFxkYXJ0cy1zY29yZWJvYXJkLW5nL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGRhcnRzLXRhYmxlXFxkYXJ0cy10YWJsZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RhcnRzLXRhYmxlL2RhcnRzLXRhYmxlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQUo7QURHRTtFQUNFLHNCQUFBO0FDREo7QURJRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FESUk7RUFDRSxtQkFBQTtBQ0ZOO0FES0k7RUFDRSxtQkFBQTtBQ0hOO0FET0U7RUFDRSx1REFBQTtVQUFBLCtDQUFBO0FDTEo7QURRRTtFQUNFLHlEQUFBO1VBQUEsaURBQUE7QUNOSjtBRFNFO0VBQ0UsdURBQUE7VUFBQSwrQ0FBQTtBQ1BKO0FEVUU7RUFDRSx1REFBQTtVQUFBLCtDQUFBO0FDUko7QURXRTtFQUNFLHFEQUFBO1VBQUEsNkNBQUE7QUNUSjtBRFlFO0VBQ0UscURBQUE7VUFBQSw2Q0FBQTtBQ1ZKO0FEYUU7RUFDRSxxREFBQTtVQUFBLDZDQUFBO0FDWEo7QURjRTtFQUNFLHVEQUFBO1VBQUEsK0NBQUE7QUNaSjtBRGVFO0VBQ0UsMkRBQUE7VUFBQSxtREFBQTtBQ2JKO0FEZ0JFO0VBQ0UscURBQUE7VUFBQSw2Q0FBQTtBQ2RKO0FEaUJFO0VBQ0UseURBQUE7VUFBQSxpREFBQTtBQ2ZKO0FEa0JFO0VBQ0UscURBQUE7VUFBQSw2Q0FBQTtBQ2hCSjtBRG1CRTtFQUNFLHVEQUFBO1VBQUEsK0NBQUE7QUNqQko7QURvQkU7RUFDRSx1REFBQTtVQUFBLCtDQUFBO0FDbEJKO0FEcUJFO0VBQ0UseURBQUE7VUFBQSxpREFBQTtBQ25CSjtBRHNCRTtFQUNFLHFEQUFBO1VBQUEsNkNBQUE7QUNwQko7QUR1QkU7RUFDRSxxREFBQTtVQUFBLDZDQUFBO0FDckJKO0FEd0JFO0VBQ0UsdURBQUE7VUFBQSwrQ0FBQTtBQ3RCSjtBRHlCRTtFQUNFLHVEQUFBO1VBQUEsK0NBQUE7QUN2Qko7QUQwQkU7RUFDRSxxREFBQTtVQUFBLDZDQUFBO0FDeEJKO0FEMkJFO0VBQ0UsMENBQUE7VUFBQSxrQ0FBQTtBQ3pCSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RhcnRzLXRhYmxlL2RhcnRzLXRhYmxlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXJ0cy10YWJsZS1jb250YWluZXIge1xyXG4gIC5jbGlwLCBzdmcge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0MHB4KTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2dyAtIDQwcHgpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSg2MCUpO1xyXG4gIH1cclxuXHJcbiAgLmNsaXAge1xyXG4gICAgYmFja2dyb3VuZDogI2YwMjgwZjtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuXHJcbiAgICAmLnByaW1hcnkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMTEzM2VlO1xyXG4gICAgfVxyXG5cclxuICAgICYuc2Vjb25kYXJ5IHtcclxuICAgICAgYmFja2dyb3VuZDogI2QzZTUzMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0yIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTMuNSUsIDQ0JSA4OSUsIDU2JSA4OSUpO1xyXG4gIH1cclxuXHJcbiAgLmRhcnRzLXRhYmxlLWZpZWxkLTE2IHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MS4yJSA1My43JSwgNTYlIDg5JSwgNjglIDg1JSk7XHJcbiAgfVxyXG5cclxuICAuZGFydHMtdGFibGUtZmllbGQtMSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTIuMiUgNTMlLCA2OCUgODUlLCA3OCUgNzglKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0xNCB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTIuOCUgNTIlLCA3OCUgNzglLCA4NSUgNjglKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC05IHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MyUgNTElLCA4NSUgNjglLCA4OSUgNTYlKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC01IHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MyUgNTAlLCA4OSUgNTYlLCA4OSUgNDQlKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0xMiB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTMlIDQ5JSwgODklIDQ1JSwgODUlIDMyJSk7XHJcbiAgfVxyXG5cclxuICAuZGFydHMtdGFibGUtZmllbGQtMyB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTMlIDQ3LjklLCA4NiUgMzIlLCA3OCUgMjIlKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0xNyB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTIuMiUgNDclLCA3OC4zJSAyMi4wJSwgNjcuMiUgMTUlKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0wIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MSUgNDclLCA2OCUgMTUlLCA1NiUgMTElKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0xOSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDQ3JSwgNTYuNSUgMTElLCA0My4yJSAxMSUpO1xyXG4gIH1cclxuXHJcbiAgLmRhcnRzLXRhYmxlLWZpZWxkLTQge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDMyJSAxNSUsIDQ5JSA0NyUsIDQ0JSAxMSUpO1xyXG4gIH1cclxuXHJcbiAgLmRhcnRzLXRhYmxlLWZpZWxkLTExIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigyMiUgMjIlLCA0Ny44JSA0NyUsIDMyJSAxNSUpO1xyXG4gIH1cclxuXHJcbiAgLmRhcnRzLXRhYmxlLWZpZWxkLTgge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDE1JSAzMiUsIDQ3JSA0Ny44JSwgMjIlIDIyJSk7XHJcbiAgfVxyXG5cclxuICAuZGFydHMtdGFibGUtZmllbGQtMTMge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDExJSA0NCUsIDQ2LjIlIDQ4LjglLCAxNSUgMzIlKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0xMCB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTElIDU2JSwgNDclIDUwJSwgMTElIDQ0JSk7XHJcbiAgfVxyXG5cclxuICAuZGFydHMtdGFibGUtZmllbGQtNyB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTUlIDY4JSwgNDclIDUxJSwgMTElIDU1JSk7XHJcbiAgfVxyXG5cclxuICAuZGFydHMtdGFibGUtZmllbGQtMTUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDIyJSA3OCUsIDQ3JSA1Mi4yJSwgMTUlIDY4JSk7XHJcbiAgfVxyXG5cclxuICAuZGFydHMtdGFibGUtZmllbGQtNiB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMzIlIDg1JSwgNDcuOCUgNTMlLCAyMiUgNzglKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0xOCB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNDQlIDg5JSwgNDklIDUzJSwgMzIlIDg1JSk7XHJcbiAgfVxyXG5cclxuICAuZGFydHMtdGFibGUtZmllbGQtMjAge1xyXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMy43JSBhdCA1MCUgNTAlKTtcclxuICB9XHJcbn1cclxuIiwiLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuY2xpcCwgLmRhcnRzLXRhYmxlLWNvbnRhaW5lciBzdmcge1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDQwcHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwdncgLSA0MHB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDIwcHg7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIGltZyB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDYwJSk7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5jbGlwIHtcbiAgYmFja2dyb3VuZDogI2YwMjgwZjtcbiAgb3BhY2l0eTogMC42O1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuY2xpcC5wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogIzExMzNlZTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmNsaXAuc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogI2QzZTUzMTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTIge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUzLjUlLCA0NCUgODklLCA1NiUgODklKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTE2IHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUxLjIlIDUzLjclLCA1NiUgODklLCA2OCUgODUlKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTEge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTIuMiUgNTMlLCA2OCUgODUlLCA3OCUgNzglKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTE0IHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUyLjglIDUyJSwgNzglIDc4JSwgODUlIDY4JSk7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5kYXJ0cy10YWJsZS1maWVsZC05IHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUzJSA1MSUsIDg1JSA2OCUsIDg5JSA1NiUpO1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuZGFydHMtdGFibGUtZmllbGQtNSB7XG4gIGNsaXAtcGF0aDogcG9seWdvbig1MyUgNTAlLCA4OSUgNTYlLCA4OSUgNDQlKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTEyIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUzJSA0OSUsIDg5JSA0NSUsIDg1JSAzMiUpO1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuZGFydHMtdGFibGUtZmllbGQtMyB7XG4gIGNsaXAtcGF0aDogcG9seWdvbig1MyUgNDcuOSUsIDg2JSAzMiUsIDc4JSAyMiUpO1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuZGFydHMtdGFibGUtZmllbGQtMTcge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTIuMiUgNDclLCA3OC4zJSAyMiUsIDY3LjIlIDE1JSk7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5kYXJ0cy10YWJsZS1maWVsZC0wIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUxJSA0NyUsIDY4JSAxNSUsIDU2JSAxMSUpO1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuZGFydHMtdGFibGUtZmllbGQtMTkge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDQ3JSwgNTYuNSUgMTElLCA0My4yJSAxMSUpO1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuZGFydHMtdGFibGUtZmllbGQtNCB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigzMiUgMTUlLCA0OSUgNDclLCA0NCUgMTElKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTExIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDIyJSAyMiUsIDQ3LjglIDQ3JSwgMzIlIDE1JSk7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5kYXJ0cy10YWJsZS1maWVsZC04IHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDE1JSAzMiUsIDQ3JSA0Ny44JSwgMjIlIDIyJSk7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5kYXJ0cy10YWJsZS1maWVsZC0xMyB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigxMSUgNDQlLCA0Ni4yJSA0OC44JSwgMTUlIDMyJSk7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5kYXJ0cy10YWJsZS1maWVsZC0xMCB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigxMSUgNTYlLCA0NyUgNTAlLCAxMSUgNDQlKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTcge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMTUlIDY4JSwgNDclIDUxJSwgMTElIDU1JSk7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5kYXJ0cy10YWJsZS1maWVsZC0xNSB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigyMiUgNzglLCA0NyUgNTIuMiUsIDE1JSA2OCUpO1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuZGFydHMtdGFibGUtZmllbGQtNiB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigzMiUgODUlLCA0Ny44JSA1MyUsIDIyJSA3OCUpO1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuZGFydHMtdGFibGUtZmllbGQtMTgge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNDQlIDg5JSwgNDklIDUzJSwgMzIlIDg1JSk7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5kYXJ0cy10YWJsZS1maWVsZC0yMCB7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDMuNyUgYXQgNTAlIDUwJSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DartsTableDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'darts-table-dialog.component.html',
                styleUrls: ['darts-table-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
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
    const player_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("winner", player_r4.win);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", i_r5 + 1, ". ", player_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", player_r4.win);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](player_r4.score);
} }
function DialogComponent_mat_dialog_content_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DialogComponent_mat_dialog_content_4_div_3_Template, 6, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.data.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.data.players);
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
    const stat_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 7, stat_r13.s, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 10, ctx_r12.getDuration(stat_r13), "mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r13.g);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r13.c);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r13.r + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.getPlayers(stat_r13.w));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.getPlayers(stat_r13.l));
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
    const stat_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r11.n);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r11.w);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r11.l);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r11.l + stat_r11.w);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r10.getRatio(stat_r11), " %");
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
    showTable() {
        const enabledFields = [];
        const primaryFields = [];
        const secondaryFields = [];
        for (let i = 0; i <= 20; i++) {
            if (this.playground.isFieldEnabled(i)) {
                enabledFields.push(i);
            }
            if (this.playground.isPrimaryField(i)) {
                primaryFields.push(i);
            }
            if (this.playground.isSecondaryField(i)) {
                secondaryFields.push(i);
            }
        }
        this.dialogService.openDartsTable(enabledFields, primaryFields, secondaryFields);
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
GameToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameToolbarComponent, selectors: [["app-game-toolbar"]], inputs: { playground: "playground", reversRound: "reversRound", info: "info" }, decls: 16, vars: 3, consts: [[1, "toolbar"], ["mat-raised-button", "", 3, "click"], [1, "round-info", 3, "click"], [1, "theme-chooser"], ["mat-icon-button", "", "color", "primary", 3, "click"]], template: function GameToolbarComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_div_click_7_listener() { return ctx.showTable(); });
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
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".toolbar[_ngcontent-%COMP%] {\n  display: flex;\n}\n.toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 2px 2px 0 2px;\n  flex: 1;\n  height: 60px;\n}\n.round-info[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 50px;\n  left: 0;\n  font-size: 10em;\n  opacity: 0.1;\n  width: 22vw;\n  line-height: 150px;\n  text-align: center;\n}\n.round-info.detailed[_ngcontent-%COMP%] {\n  width: 30vw;\n}\n.theme-chooser[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10b29sYmFyL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxnYW1lLXRvb2xiYXJcXGdhbWUtdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10b29sYmFyL2dhbWUtdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBRENFO0VBQ0UscUJBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQ0NKO0FER0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FERUU7RUFDRSxXQUFBO0FDQUo7QURJQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2dhbWUtdG9vbGJhci9nYW1lLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMnB4IDJweCAwIDJweDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucm91bmQtaW5mbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNTBweDtcclxuICBsZWZ0OiAwO1xyXG4gIGZvbnQtc2l6ZTogMTBlbTtcclxuICBvcGFjaXR5OiAwLjE7XHJcbiAgd2lkdGg6IDIydnc7XHJcbiAgbGluZS1oZWlnaHQ6IDE1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgJi5kZXRhaWxlZCB7XHJcbiAgICB3aWR0aDogMzB2dztcclxuICB9XHJcbn1cclxuXHJcbi50aGVtZS1jaG9vc2VyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDc1cHg7XHJcbn1cclxuXHJcbiIsIi50b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi50b29sYmFyIGJ1dHRvbiB7XG4gIG1hcmdpbjogMnB4IDJweCAwIDJweDtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ucm91bmQtaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MHB4O1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDEwZW07XG4gIG9wYWNpdHk6IDAuMTtcbiAgd2lkdGg6IDIydnc7XG4gIGxpbmUtaGVpZ2h0OiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJvdW5kLWluZm8uZGV0YWlsZWQge1xuICB3aWR0aDogMzB2dztcbn1cblxuLnRoZW1lLWNob29zZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNzVweDtcbn0iXX0= */"] });
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
    const stat_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r15.count);
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");









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
    const g_r50 = ctx.$implicit;
    const i_r51 = ctx.index;
    const k_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("gameSelectBox ", "menu-button-" + k_r48 + "" + i_r51, " ", g_r50.data.bot ? "hasBot" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "/" + g_r50.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r50.data.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r50.data.name);
} }
function MenuComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_div_4_button_1_Template, 5, 9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const k_r48 = ctx.$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r47.getGameList().slice(k_r48 * 3, k_r48 * 3 + 3));
} }
const _c1 = function () { return [0, 1, 2, 3]; };
class MenuComponent {
    constructor(router, dialog, statisticsService) {
        this.router = router;
        this.dialog = dialog;
        this.statisticsService = statisticsService;
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
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_4__["StatisticsService"])); };
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["#menu_title[_ngcontent-%COMP%] {\n  padding: 50px;\n  text-align: center;\n  cursor: pointer;\n}\n\n#menu[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n\n#menu[_ngcontent-%COMP%]   .button-line[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n#menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%] {\n  height: 180px;\n  width: 180px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0;\n  padding-top: 15px;\n}\n\n#menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  width: 60px;\n  height: 60px;\n}\n\n#menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  white-space: pre;\n  text-align: left;\n  padding: 10px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  line-height: 25px;\n  letter-spacing: 1px;\n  font-weight: normal;\n  width: calc(100% - 20px);\n}\n\n#menu[_ngcontent-%COMP%]   .hasBot[_ngcontent-%COMP%]:after {\n  content: \"B\";\n  position: relative;\n  top: 66px;\n  right: -44px;\n  margin: -4px;\n}\n\n.version[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS9EOlxcRGV2ZWxvcG1lbnRcXGRhcnRzLXNjb3JlYm9hcmQtbmcvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0VKOztBRENFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NOOztBREVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FDQU47O0FESUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21lbnVfdGl0bGUge1xuICBwYWRkaW5nOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNtZW51IHtcbiAgd2lkdGg6IDEwMHZ3O1xuXG4gIC5idXR0b24tbGluZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuZ2FtZVNlbGVjdEJveCB7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG5cbiAgICBtYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgfVxuICB9XG5cbiAgLmhhc0JvdDphZnRlciB7XG4gICAgY29udGVudDogJ0InO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDY2cHg7XG4gICAgcmlnaHQ6IC00NHB4O1xuICAgIG1hcmdpbjogLTRweDtcbiAgfVxufVxuLnZlcnNpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDVweDtcbn1cbiIsIiNtZW51X3RpdGxlIHtcbiAgcGFkZGluZzogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNtZW51IHtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuI21lbnUgLmJ1dHRvbi1saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jbWVudSAuZ2FtZVNlbGVjdEJveCB7XG4gIGhlaWdodDogMTgwcHg7XG4gIHdpZHRoOiAxODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuI21lbnUgLmdhbWVTZWxlY3RCb3ggbWF0LWljb24ge1xuICBmb250LXNpemU6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4jbWVudSAuZ2FtZVNlbGVjdEJveCAudGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xufVxuI21lbnUgLmhhc0JvdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiQlwiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNjZweDtcbiAgcmlnaHQ6IC00NHB4O1xuICBtYXJnaW46IC00cHg7XG59XG5cbi52ZXJzaW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiA1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] }, { type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_4__["StatisticsService"] }]; }, null); })();


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
    const i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.playground.getFieldIcon(i_r20 - 1));
} }
function NumberPlateComponent_ng_container_1_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.playground.getFieldNote(i_r20 - 1));
} }
function NumberPlateComponent_ng_container_1_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.playground.getFieldNoteBottom(i_r20 - 1));
} }
function NumberPlateComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_ng_container_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const i_r20 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.throwNumber(i_r20 - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NumberPlateComponent_ng_container_1_mat_icon_3_Template, 2, 1, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NumberPlateComponent_ng_container_1_p_4_Template, 2, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NumberPlateComponent_ng_container_1_p_5_Template, 2, 1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r20 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r16.getNumberColor(i_r20 - 1))("disabled", ctx_r16.isNumberDisabled(i_r20 - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r20, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.playground.getFieldIcon(i_r20 - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.playground.getFieldNote(i_r20 - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.playground.getFieldNoteBottom(i_r20 - 1));
} }
function NumberPlateComponent_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.playground.getFieldIcon(20));
} }
function NumberPlateComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.playground.getFieldNote(20));
} }
function NumberPlateComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.playground.getFieldNoteBottom(20));
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
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!ctx_r40.player.getThrowsTotal() ? "0" : ctx_r40.player.getThrowsTotal());
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
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r44.player.score);
} }
function PlayerScoreComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Life: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r45.player.life);
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
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r46.player.life, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r46.player.score, " ");
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
PlayerScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerScoreComponent, selectors: [["app-player-score"]], inputs: { player: "player", hasContent: "hasContent", scoreDisplayed: "scoreDisplayed", lifeDisplayed: "lifeDisplayed", highlighted: "highlighted" }, ngContentSelectors: _c0, decls: 20, vars: 12, consts: [[1, "player_info"], [1, "name"], [4, "ngIf"], [1, "shoots"], [1, "shoot"], ["class", "shoot total", 4, "ngIf"], [1, "clear"], ["class", "line", 4, "ngIf"], ["class", "line-space", 4, "ngIf"], ["class", "score", 4, "ngIf"], [1, "shoot", "total"], [1, "line"], [1, "line-space"], [1, "score"]], template: function PlayerScoreComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".player_info {\n  padding: 1vw;\n}\n.player_info .line {\n  margin: 1vw 0;\n}\n.player_info .line-space {\n  margin: 1.5vw 0;\n}\n.player_info .small {\n  font-size: calc(0.6vw + 0.5vh);\n  font-weight: bold;\n}\n.player_info .name {\n  font-size: calc(5px + 1vw);\n  display: flex;\n  align-items: center;\n}\n.player_info .name mat-icon {\n  margin-right: 10px;\n  font-size: calc(20px + 1vw);\n}\n.player_info .shoots {\n  display: flex;\n  justify-content: flex-end;\n}\n.player_info .shoots .shoot {\n  margin: 0.1vw;\n  border-radius: 0.5vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 3vw;\n  height: 3vw;\n  font-size: calc(6px + 1vw);\n}\n.player_info .shoots .shoot.total {\n  margin-left: 10px;\n}\n.player_info .score {\n  font-size: 3.2vw;\n  letter-spacing: 0.5vw;\n  font-weight: bold;\n  float: right;\n}\n.player_info .score label {\n  font-size: 1vw;\n  letter-spacing: 0.2vw;\n}\n.player_info .note {\n  font-size: 2vw;\n  margin-right: 10px;\n  float: right;\n}\n.player_info .note label {\n  font-size: 1.5vw;\n}\n.player_info .field-set {\n  display: flex;\n  flex-flow: row wrap;\n}\n.player_info .field {\n  font-size: calc(0.7vw + 0.7vh);\n  width: 70px;\n  opacity: 0.4;\n}\n.player_info .field.highlighted, .player_info .field.active {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNjb3JlL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxwbGF5ZXItc2NvcmVcXHBsYXllci1zY29yZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNjb3JlL3BsYXllci1zY29yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtBQ0NKO0FERUU7RUFDRSxlQUFBO0FDQUo7QURHRTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7QUNESjtBRElFO0VBQ0UsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNGSjtBREdJO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtBQ0ROO0FES0U7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNISjtBREtJO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDSE47QURLTTtFQUNFLGlCQUFBO0FDSFI7QURRRTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNOSjtBRFFJO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDTk47QURVRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNSSjtBRFVJO0VBQ0UsZ0JBQUE7QUNSTjtBRFdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDVEo7QURXRTtFQUNFLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNUSjtBRFdJO0VBQ0UsVUFBQTtBQ1ROIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNjb3JlL3BsYXllci1zY29yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGF5ZXJfaW5mbyB7XHJcbiAgcGFkZGluZzogMXZ3O1xyXG5cclxuICAubGluZSB7XHJcbiAgICBtYXJnaW46IDF2dyAwO1xyXG4gIH1cclxuXHJcbiAgLmxpbmUtc3BhY2Uge1xyXG4gICAgbWFyZ2luOiAxLjV2dyAwO1xyXG4gIH1cclxuXHJcbiAgLnNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjZ2dyArIDAuNXZoKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDVweCArIDF2dyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IGNhbGMoMjBweCArIDF2dyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2hvb3RzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgIC5zaG9vdCB7XHJcbiAgICAgIG1hcmdpbjogMC4xdnc7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXZ3O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDN2dztcclxuICAgICAgaGVpZ2h0OiAzdnc7XHJcbiAgICAgIGZvbnQtc2l6ZTogY2FsYyg2cHggKyAxdncpO1xyXG5cclxuICAgICAgJi50b3RhbCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zY29yZSB7XHJcbiAgICBmb250LXNpemU6IDMuMnZ3O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXZ3O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDF2dztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnZ3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5vdGUge1xyXG4gICAgZm9udC1zaXplOiAyLjB2dztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5maWVsZC1zZXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgfVxyXG4gIC5maWVsZCB7XHJcbiAgICBmb250LXNpemU6IGNhbGMoMC43dncgKyAwLjd2aCk7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuXHJcbiAgICAmLmhpZ2hsaWdodGVkLCAmLmFjdGl2ZSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5wbGF5ZXJfaW5mbyB7XG4gIHBhZGRpbmc6IDF2dztcbn1cbi5wbGF5ZXJfaW5mbyAubGluZSB7XG4gIG1hcmdpbjogMXZ3IDA7XG59XG4ucGxheWVyX2luZm8gLmxpbmUtc3BhY2Uge1xuICBtYXJnaW46IDEuNXZ3IDA7XG59XG4ucGxheWVyX2luZm8gLnNtYWxsIHtcbiAgZm9udC1zaXplOiBjYWxjKDAuNnZ3ICsgMC41dmgpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wbGF5ZXJfaW5mbyAubmFtZSB7XG4gIGZvbnQtc2l6ZTogY2FsYyg1cHggKyAxdncpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBsYXllcl9pbmZvIC5uYW1lIG1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IGNhbGMoMjBweCArIDF2dyk7XG59XG4ucGxheWVyX2luZm8gLnNob290cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ucGxheWVyX2luZm8gLnNob290cyAuc2hvb3Qge1xuICBtYXJnaW46IDAuMXZ3O1xuICBib3JkZXItcmFkaXVzOiAwLjV2dztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzdnc7XG4gIGhlaWdodDogM3Z3O1xuICBmb250LXNpemU6IGNhbGMoNnB4ICsgMXZ3KTtcbn1cbi5wbGF5ZXJfaW5mbyAuc2hvb3RzIC5zaG9vdC50b3RhbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnBsYXllcl9pbmZvIC5zY29yZSB7XG4gIGZvbnQtc2l6ZTogMy4ydnc7XG4gIGxldHRlci1zcGFjaW5nOiAwLjV2dztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5wbGF5ZXJfaW5mbyAuc2NvcmUgbGFiZWwge1xuICBmb250LXNpemU6IDF2dztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnZ3O1xufVxuLnBsYXllcl9pbmZvIC5ub3RlIHtcbiAgZm9udC1zaXplOiAydnc7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnBsYXllcl9pbmZvIC5ub3RlIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjV2dztcbn1cbi5wbGF5ZXJfaW5mbyAuZmllbGQtc2V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbn1cbi5wbGF5ZXJfaW5mbyAuZmllbGQge1xuICBmb250LXNpemU6IGNhbGMoMC43dncgKyAwLjd2aCk7XG4gIHdpZHRoOiA3MHB4O1xuICBvcGFjaXR5OiAwLjQ7XG59XG4ucGxheWVyX2luZm8gLmZpZWxkLmhpZ2hsaWdodGVkLCAucGxheWVyX2luZm8gLmZpZWxkLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */"], encapsulation: 2 });
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
    const option_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r33, " ");
} }
function PlayerSettingsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerSettingsComponent_div_13_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const player_r34 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.playground.removePlayer(player_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "remove_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r34.name);
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
        const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Player name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function PlayerSettingsComponent_Template_mat_autocomplete_optionSelected_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.playerSelected($event, _r29); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PlayerSettingsComponent_mat_option_8_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerSettingsComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.addPlayer(_r29); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlayerSettingsComponent_div_13_Template, 6, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playground.canAddPlayer())("matAutocomplete", _r30);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");







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
Playground.ɵfac = function Playground_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinvalidFactory"](); };
Playground.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({ type: Playground });


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
/* harmony import */ var _components_darts_table_darts_table_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~components/darts-table/darts-table-dialog.component */ "./src/app/shared/components/darts-table/darts-table-dialog.component.ts");
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~components/confirm-dialog/confirm-dialog.component */ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~components/game-statistics-dialog/game-statistics-dialog.component */ "./src/app/shared/components/game-statistics-dialog/game-statistics-dialog.component.ts");
/* harmony import */ var _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~components/game-history-dialog/game-history-dialog.component */ "./src/app/shared/components/game-history-dialog/game-history-dialog.component.ts");
/* harmony import */ var _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~components/game-type-statistics-dialog/game-type-statistics-dialog.component */ "./src/app/shared/components/game-type-statistics-dialog/game-type-statistics-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");









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
        return this.dialog.open(_components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_4__["GameStatisticsDialogComponent"], {
            data: { statistics },
        });
    }
    openGameHistory(statistics) {
        return this.dialog.open(_components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_5__["GameHistoryDialogComponent"], {
            data: { statistics },
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '100%',
            width: '100%'
        });
    }
    openGameTypeStatistics(statistics) {
        return this.dialog.open(_components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_6__["GameTypeStatisticsDialogComponent"], {
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
        return this.dialog.open(_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
            panelClass: 'confirm-dialog',
            data: { title, content, players: [] },
        });
    }
    openDartsTable(fieldIndexes, primaryFieldIndexes, secondaryFields) {
        return this.dialog.open(_components_darts_table_darts_table_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DartsTableDialogComponent"], {
            data: { field: fieldIndexes, primary: primaryFieldIndexes, secondary: secondaryFields }
        });
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, null); })();


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
/* harmony import */ var _components_darts_table_darts_table_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~components/darts-table/darts-table-dialog.component */ "./src/app/shared/components/darts-table/darts-table-dialog.component.ts");
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/confirm-dialog/confirm-dialog.component */ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~components/game-statistics-dialog/game-statistics-dialog.component */ "./src/app/shared/components/game-statistics-dialog/game-statistics-dialog.component.ts");
/* harmony import */ var _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/game-history-dialog/game-history-dialog.component */ "./src/app/shared/components/game-history-dialog/game-history-dialog.component.ts");
/* harmony import */ var _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/game-type-statistics-dialog/game-type-statistics-dialog.component */ "./src/app/shared/components/game-type-statistics-dialog/game-type-statistics-dialog.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/menu/menu.component */ "./src/app/shared/components/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");


















const components = [_components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_6__["NumberPlateComponent"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["GameToolbarComponent"], _components_darts_table_darts_table_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DartsTableDialogComponent"], _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_12__["GameStatisticsDialogComponent"],
    _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_7__["PlayerSettingsComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_9__["PlayerScoreComponent"], _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"],
    _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_13__["GameHistoryDialogComponent"], _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_14__["GameTypeStatisticsDialogComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"]];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"]],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_6__["NumberPlateComponent"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["GameToolbarComponent"], _components_darts_table_darts_table_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DartsTableDialogComponent"], _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_12__["GameStatisticsDialogComponent"],
        _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_7__["PlayerSettingsComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_9__["PlayerScoreComponent"], _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"],
        _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_13__["GameHistoryDialogComponent"], _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_14__["GameTypeStatisticsDialogComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_6__["NumberPlateComponent"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["GameToolbarComponent"], _components_darts_table_darts_table_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DartsTableDialogComponent"], _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_12__["GameStatisticsDialogComponent"],
        _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_7__["PlayerSettingsComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_9__["PlayerScoreComponent"], _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"],
        _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_13__["GameHistoryDialogComponent"], _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_14__["GameTypeStatisticsDialogComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"]],
                declarations: components,
                exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], ...components],
                entryComponents: [_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _components_darts_table_darts_table_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DartsTableDialogComponent"], _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_12__["GameStatisticsDialogComponent"],
                    _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_13__["GameHistoryDialogComponent"], _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_14__["GameTypeStatisticsDialogComponent"]]
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
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");




















function X01Component_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.settings.setStartValue(101); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "101 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.settings.setStartValue(201); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "201 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.settings.setStartValue(301); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "301 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.settings.setStartValue(501); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "501 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.settings.setStartValue(701); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "701 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.settings.setStartValue(901); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "901 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Check In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.settings.setStart(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Normal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.settings.setStart(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Double ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.settings.setStart(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Triple ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Check Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.settings.setCheckout(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Single ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.settings.setCheckout(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Double ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.settings.setCheckout(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Triple ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.settings.setCheckout(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "High Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "X01")("playground", ctx_r53.playground)("rules", "All players start with 301/501 points and attempt to reach zero. If a player scores more " + "than the total required to reach zero, the player \u201Cbusts\u201D and the score returns to the score that " + "was existing at the start of the turn.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r53.settings.startValue === 101 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r53.settings.startValue === 201 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r53.settings.startValue === 301 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r53.settings.startValue === 501 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r53.settings.startValue === 701 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r53.settings.startValue === 901 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r53.settings.start === 1 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r53.settings.start === 2 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r53.settings.start === 3 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r53.settings.checkout === 1 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r53.settings.checkout === 2 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r53.settings.checkout === 3 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r53.settings.checkout === 4 ? "primary" : "");
} }
function X01Component_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 8);
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r54.playground);
} }
function X01Component_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r72 = ctx.$implicit;
    const i_r73 = ctx.index;
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r73 === ctx_r71.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r72)("hasContent", false);
} }
function X01Component_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, X01Component_ng_container_4_div_1_Template, 2, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r55.game.players);
} }
function X01Component_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 8);
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r56.playground);
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
}
X01Component.ɵfac = function X01Component_Factory(t) { return new (t || X01Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_4__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_10__["StatisticsService"])); };
X01Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: X01Component, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 6, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]], template: function X01Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, X01Component_app_settings_1_Template, 35, 16, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, X01Component_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, X01Component_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, X01Component_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
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