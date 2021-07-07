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

/***/ "./src/app/app-routing.ts":
/*!********************************!*\
  !*** ./src/app/app-routing.ts ***!
  \********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _x01_x01_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./x01/x01.module */ "./src/app/x01/x01.module.ts");
/* harmony import */ var _cricket_cricket_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cricket/cricket.module */ "./src/app/cricket/cricket.module.ts");
/* harmony import */ var _aroundclock_around_clock_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aroundclock/around-clock.module */ "./src/app/aroundclock/around-clock.module.ts");
/* harmony import */ var _shanghai_shanghai_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shanghai/shanghai.module */ "./src/app/shanghai/shanghai.module.ts");
/* harmony import */ var _killer_killer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./killer/killer.module */ "./src/app/killer/killer.module.ts");
/* harmony import */ var _fives_fives_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fives/fives.module */ "./src/app/fives/fives.module.ts");
/* harmony import */ var _hare_and_hound_hare_and_hound_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hare-and-hound/hare-and-hound.module */ "./src/app/hare-and-hound/hare-and-hound.module.ts");
/* harmony import */ var _knockout_knockout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./knockout/knockout.module */ "./src/app/knockout/knockout.module.ts");
/* harmony import */ var _conqueror_conqueror_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./conqueror/conqueror.module */ "./src/app/conqueror/conqueror.module.ts");










const routes = [
    { path: '', component: _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__["MenuComponent"] },
    {
        path: 'x01',
        data: { name: 'Classic X01' },
        loadChildren: () => _x01_x01_module__WEBPACK_IMPORTED_MODULE_1__["X01Module"]
    },
    {
        path: 'cricket',
        data: { name: 'Ultimate Cricket' },
        loadChildren: () => _cricket_cricket_module__WEBPACK_IMPORTED_MODULE_2__["CricketModule"]
    },
    {
        path: 'around-clock',
        data: { name: 'Around The Clock / Nine Lives' },
        loadChildren: () => _aroundclock_around_clock_module__WEBPACK_IMPORTED_MODULE_3__["AroundClockModule"]
    },
    {
        path: 'shanghai',
        data: { name: 'Shanghai / Halve It' },
        loadChildren: () => _shanghai_shanghai_module__WEBPACK_IMPORTED_MODULE_4__["ShanghaiModule"]
    },
    {
        path: 'fives',
        data: { name: 'Fives' },
        loadChildren: () => _fives_fives_module__WEBPACK_IMPORTED_MODULE_6__["FivesModule"]
    },
    {
        path: 'hare-and-hound',
        data: { name: 'Hare and Hound' },
        loadChildren: () => _hare_and_hound_hare_and_hound_module__WEBPACK_IMPORTED_MODULE_7__["HareAndHoundModule"]
    },
    {
        path: 'knockout',
        data: { name: 'Knockout' },
        loadChildren: () => _knockout_knockout_module__WEBPACK_IMPORTED_MODULE_8__["KnockoutModule"]
    },
    {
        path: 'killer',
        data: { name: 'Killer' },
        loadChildren: () => _killer_killer_module__WEBPACK_IMPORTED_MODULE_5__["KillerModule"]
    },
    {
        path: 'conqueror',
        data: { name: 'Conqueror' },
        loadChildren: () => _conqueror_conqueror_module__WEBPACK_IMPORTED_MODULE_9__["ConquerorModule"]
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
    } }, decls: 9, vars: 1, consts: [["audioElement", ""], ["outlet", "outlet"], [1, "theme-chooser"], ["mat-icon-button", "", "color", "primary", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "audio", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener($event) { return ctx.applicationStateService.toggleDarkTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", _r1 && _r1.isActivated && _r1.activatedRoute);
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
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing */ "./src/app/app-routing.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_7__["routes"]), _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_7__["routes"]), _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
                ],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
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
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/sound.service */ "./src/app/shared/services/sound.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");


















function AroundClockComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r102.settings.toggleJump(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Enable Jump ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r104.settings.togglePunishment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Punishment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r105.settings.toggleNineLives(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Nine Lives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r106.settings.toggleFiveLives(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Five Lives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r107.settings.toggleSaboteur(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Saboteur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Field's order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r108.settings.setStyle(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Ascending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r109.settings.setStyle(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Descending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r110.settings.setStyle(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Clockwise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.settings.setStyle(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Anticlockwise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r112.settings.setStyle(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Random ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r113.settings.setStyle(6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Random11 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r114.settings.setStyle(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Recurrence ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r115.settings.setStyle(7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Pirate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Around The Clock")("playground", ctx_r98.playground)("rules", "The object of this popular game is to be the first player to hit every number on the board " + "from 1-20. The numbers must be hit in order, and players alternate after three throws. The player " + "must hit each number in turn and cannot proceed until to the next number until the number is hit. " + "The winner is the player who hist all the numbers in order first.\n\nNine Lives: Each player gets three " + "lives. I do not know why the game is called 9 lives but you only get 3. Maybe it is because if you " + "miss with three darts you lose a life and 3 x 3 = 9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r98.settings.jump ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r98.settings.punishment ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r98.settings.nineLives ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r98.settings.fiveLives ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r98.settings.saboteur ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r98.settings.style == 0 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r98.settings.style == 4 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r98.settings.style == 1 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r98.settings.style == 2 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r98.settings.style == 3 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r98.settings.style == 6 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r98.settings.style == 5 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r98.settings.style == 7 ? "primary" : "");
} }
function AroundClockComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 7);
} if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r99.playground);
} }
function AroundClockComponent_ng_container_4_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Life: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const player_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r119.getPlayerState(player_r117).life);
} }
function AroundClockComponent_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AroundClockComponent_ng_container_4_div_3_ng_container_2_Template, 5, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r117 = ctx.$implicit;
    const i_r118 = ctx.index;
    const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r118 === ctx_r116.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r117)("scoreDisplayed", false)("hasContent", ctx_r116.settings.nineLives || ctx_r116.settings.fiveLives);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r116.settings.nineLives || ctx_r116.settings.fiveLives);
} }
function AroundClockComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_ng_container_4_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r121.toggleHiddenInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AroundClockComponent_ng_container_4_div_3_Template, 3, 7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", ctx_r100.hiddenInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r100.getDistanceFromRandom());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r100.game.players);
} }
function AroundClockComponent_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 7);
} if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r101.playground);
} }
class AroundClockComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService) {
        super(application, game, route, dialogService, soundService);
        this.hiddenInfo = true;
        this.settings = new _models_around_clock_settings_model__WEBPACK_IMPORTED_MODULE_4__["AroundClockSettings"]();
    }
    calculatePoints(player, fieldIndex, score, scoreReal) {
        const state = this.getPlayerState(player);
        const originalMulti = this.multiplier;
        if (this.getFieldIndex(state.actFieldIndex) === fieldIndex) {
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
        if (this.settings.saboteur && scoreReal !== 0) {
            const realFieldIndex = scoreReal === 25 ? 20 : scoreReal - 1;
            this.game.players.filter(p => p.id !== player.id).forEach(otherPlayer => {
                const otherPlayerState = this.getPlayerState(otherPlayer);
                if (this.getFieldIndex(otherPlayerState.actFieldIndex) === realFieldIndex && score === 0) {
                    otherPlayerState.decreaseActFieldIndex(this.settings.jump ? originalMulti : 1);
                }
            });
        }
    }
    checkPlayerState(player) {
        const state = this.getPlayerState(player);
        if ((this.settings.fields.length - 1) < state.actFieldIndex) {
            player.setWin();
        }
        else if (this.game.isTheLastThrow()) {
            if (this.settings.punishment || this.settings.nineLives || this.settings.fiveLives) {
                let multi = 0;
                for (let i = 0; i < 3; i++) {
                    const t = player.throwsHistory[player.throwsHistory.length - i - 1];
                    multi += t.score;
                }
                if (multi === 0) {
                    if (this.settings.punishment) {
                        state.decreaseActFieldIndex();
                    }
                    if (this.settings.nineLives || this.settings.fiveLives) {
                        state.life--;
                    }
                }
            }
            this.game.nextPlayer();
        }
        if ((this.settings.nineLives || this.settings.fiveLives) && this.game.players.length > 1) {
            const activePlayers = this.game.players.filter(p => !this.getPlayerState(p).isInactive());
            if (activePlayers.length === 1) {
                activePlayers[0].setWin(true);
            }
            else if (!!activePlayers.length) {
                while (this.getPlayerState(this.game.getActualPlayer()).isInactive()) {
                    this.game.nextPlayer();
                }
            }
        }
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
        return fieldIndex === this.getFieldIndex(this.getPlayerState(this.game.getActualPlayer()).actFieldIndex);
    }
    isPrimaryField(fieldIndex) {
        return this.isFieldEnabled(fieldIndex);
    }
    isSecondaryField(fieldIndex) {
        if (!this.isFieldEnabled(fieldIndex)) {
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
    customReset() {
        const life = this.settings.nineLives ? 3 : 5;
        this.game.players.forEach(player => player.state = new _models_around_clock_state_model__WEBPACK_IMPORTED_MODULE_3__["AroundClockState"](life));
        this.settings.setStyle();
    }
    getFieldIndex(index) {
        return this.settings.fields[index];
    }
}
AroundClockComponent.ɵfac = function AroundClockComponent_Factory(t) { return new (t || AroundClockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"])); };
AroundClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AroundClockComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 4, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], [3, "playground"], [1, "hidden-info", 3, "click"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "scoreDisplayed", "hasContent"], [1, "score"]], template: function AroundClockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AroundClockComponent_app_settings_1_Template, 33, 16, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AroundClockComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AroundClockComponent_ng_container_4_Template, 4, 4, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AroundClockComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AroundClockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './around-clock.component.html',
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"] }]; }, null); })();


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
        this.punishment = true;
        this.nineLives = false;
        this.fiveLives = false;
        this.saboteur = false;
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
            default:
                this.fields = AroundClockSettings.getBaseFields();
        }
    }
    toggleJump() {
        this.jump = !this.jump;
    }
    togglePunishment() {
        this.punishment = !this.punishment;
    }
    toggleNineLives() {
        this.nineLives = !this.nineLives;
        if (this.nineLives) {
            this.fiveLives = false;
        }
    }
    toggleFiveLives() {
        this.fiveLives = !this.fiveLives;
        if (this.fiveLives) {
            this.nineLives = false;
        }
    }
    toggleSaboteur() {
        this.saboteur = !this.saboteur;
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
    constructor(life = 3) {
        super();
        this.life = life;
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
    isInactive() {
        return this.life <= 0;
    }
    clone() {
        const state = new AroundClockState(this.life);
        state.actFieldIndex = this.actFieldIndex;
        return state;
    }
}


/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






const _c0 = function (a0) { return [a0]; };
function MenuComponent_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const g_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const k_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gameSelectBox ", "menu-button-" + k_r3 + "" + i_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "/" + g_r5.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r5.data.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r5.data.name);
} }
function MenuComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_div_4_button_1_Template, 5, 8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const k_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.getGameList().slice(k_r3 * 3, k_r3 * 3 + 3));
} }
const _c1 = function () { return [0, 1, 2]; };
const routes = [
    {
        path: 'x01',
        data: { name: 'Classic X01', color: '#009688', icon: 'emoji_food_beverage' }
    },
    {
        path: 'cricket',
        data: { name: 'Ultimate Cricket', color: '#0a756b', icon: 'sports_cricket' }
    },
    {
        path: 'around-clock',
        data: { name: 'Around The Clock', color: '#0f5851', icon: 'cached' }
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
        data: { name: 'Hare and Hound', color: '#0a756b', icon: 'accessible_forward' }
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
        path: 'conqueror',
        data: { name: 'Capture the Flag', color: '#0a756b', icon: 'flag' }
    }
];
class MenuComponent {
    constructor(router) {
        this.router = router;
    }
    randomGame() {
        const random = Math.floor(Math.random() * routes.length);
        this.router.navigate(['/' + routes[random].path]);
    }
    getGameList() {
        return routes.filter(r => !!r.data);
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["ng-component"]], decls: 7, vars: 2, consts: [["id", "menu_title"], [3, "click"], ["id", "menu"], ["class", "button-line", 4, "ngFor", "ngForOf"], [1, "version"], [1, "button-line"], ["mat-raised-button", "", 3, "routerLink", "class", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "routerLink"], [1, "title"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_h1_click_1_listener($event) { return ctx.randomGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select Game!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MenuComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "v1.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: ["#menu_title[_ngcontent-%COMP%] {\n  padding: 50px;\n  text-align: center;\n  cursor: pointer;\n}\n\n#menu[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n\n#menu[_ngcontent-%COMP%]   .button-line[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n#menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%] {\n  margin: 1px;\n  height: 200px;\n  width: 200px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n#menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  width: 60px;\n  height: 60px;\n}\n\n#menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  white-space: pre;\n  text-align: left;\n  padding: 10px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  line-height: 25px;\n  letter-spacing: 1px;\n  font-weight: normal;\n  width: calc(100% - 20px);\n}\n\n.version[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0VKOztBRENFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURDSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NOOztBREVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FDQU47O0FESUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21lbnVfdGl0bGUge1xuICBwYWRkaW5nOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNtZW51IHtcbiAgd2lkdGg6IDEwMHZ3O1xuXG4gIC5idXR0b24tbGluZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuZ2FtZVNlbGVjdEJveCB7XG4gICAgbWFyZ2luOiAxcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgbWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgIH1cbiAgfVxufVxuLnZlcnNpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDVweDtcbn1cbiIsIiNtZW51X3RpdGxlIHtcbiAgcGFkZGluZzogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNtZW51IHtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuI21lbnUgLmJ1dHRvbi1saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jbWVudSAuZ2FtZVNlbGVjdEJveCB7XG4gIG1hcmdpbjogMXB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI21lbnUgLmdhbWVTZWxlY3RCb3ggbWF0LWljb24ge1xuICBmb250LXNpemU6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4jbWVudSAuZ2FtZVNlbGVjdEJveCAudGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xufVxuXG4udmVyc2lvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/conqueror/conqueror.component.ts":
/*!**************************************************!*\
  !*** ./src/app/conqueror/conqueror.component.ts ***!
  \**************************************************/
/*! exports provided: ConquerorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConquerorComponent", function() { return ConquerorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~models/playground.model */ "./src/app/shared/models/playground.model.ts");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-animation */ "./src/app/route-animation.ts");
/* harmony import */ var _models_conqueror_state_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/conqueror.state.model */ "./src/app/conqueror/models/conqueror.state.model.ts");
/* harmony import */ var _models_conqueror_settings_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/conqueror.settings.model */ "./src/app/conqueror/models/conqueror.settings.model.ts");
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/sound.service */ "./src/app/shared/services/sound.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");

















function ConquerorComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConquerorComponent_app_settings_1_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r199); const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r198.settings.randomCity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "City (5) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConquerorComponent_app_settings_1_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r199); const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r200.settings.randomCountry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Country (10) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConquerorComponent_app_settings_1_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r199); const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r201.settings.randomContinent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Continent (20) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConquerorComponent_app_settings_1_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r199); const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r202.settings.toggleNoScore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Capture the Flag")("playground", ctx_r194.playground)("rules", "N\u00F6vekv\u0151 sorrendben j\u00F6nnek a mez\u0151k, a j\u00E1t\u00E9kosoknak el kell foglalni \u0151ket. Ez t\u00F6rt\u00E9nhet \u00FAgy," + " hogy h\u00E1romszor eltal\u00E1lja a j\u00E1t\u00E9kos vagy dob egyetlen dupla bullt. Ha a j\u00E1t\u00E9kos elfoglalta a mez\u0151t, " + "akkor No score eset\u00E9n 1 pontot kap, egy\u00E9bk\u00E9nt megkapja a mez\u0151 \u00E9rt\u00E9k\u00E9t \u00E9s megny\u00EDlik a k\u00F6vetkez\u0151 mez\u0151." + "A j\u00E1t\u00E9k a bull mez\u0151 elfoglal\u00E1s\u00E1ig tart. A v\u00E9g\u00E9n az nyer, akinek a legt\u00F6bb pontja van. D\u00F6ntetlen " + "lehets\u00E9ges.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r194.settings.style === 0 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r194.settings.style === 1 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r194.settings.style === 2 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r194.settings.noScore ? "primary" : "");
} }
function ConquerorComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 7);
} if (rf & 2) {
    const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r195.playground);
} }
function ConquerorComponent_ng_container_4_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r207 = ctx.$implicit;
    const player_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("field ", ctx_r206.isActiveField(field_r207) ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r207 === 20 ? "B" : field_r207 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r206.getFieldValue(player_r204, field_r207));
} }
function ConquerorComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConquerorComponent_ng_container_4_div_1_div_3_Template, 4, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r204 = ctx.$implicit;
    const i_r205 = ctx.index;
    const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r205 === ctx_r203.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r204);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r203.settings.fields);
} }
function ConquerorComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConquerorComponent_ng_container_4_div_1_Template, 4, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r196.game.players);
} }
function ConquerorComponent_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 7);
} if (rf & 2) {
    const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r197.playground);
} }
class ConquerorComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService) {
        super(application, game, route, dialogService, soundService);
        this.settings = new _models_conqueror_settings_model__WEBPACK_IMPORTED_MODULE_4__["ConquerorSettings"]();
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
        this.game.players.forEach(player => player.state = new _models_conqueror_state_model__WEBPACK_IMPORTED_MODULE_3__["ConquerorState"]());
        this.settings.randomCity();
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
ConquerorComponent.ɵfac = function ConquerorComponent_Factory(t) { return new (t || ConquerorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"])); };
ConquerorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConquerorComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 4, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player"], [1, "field-set"], [1, "small"]], template: function ConquerorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConquerorComponent_app_settings_1_Template, 9, 7, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConquerorComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConquerorComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConquerorComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_15__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConquerorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './conqueror.component.html',
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/conqueror/conqueror.module.ts":
/*!***********************************************!*\
  !*** ./src/app/conqueror/conqueror.module.ts ***!
  \***********************************************/
/*! exports provided: ConquerorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConquerorModule", function() { return ConquerorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _conqueror_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conqueror.component */ "./src/app/conqueror/conqueror.component.ts");






class ConquerorModule {
}
ConquerorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ConquerorModule });
ConquerorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ConquerorModule_Factory(t) { return new (t || ConquerorModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: '', component: _conqueror_component__WEBPACK_IMPORTED_MODULE_3__["ConquerorComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConquerorModule, { declarations: [_conqueror_component__WEBPACK_IMPORTED_MODULE_3__["ConquerorComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConquerorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: '', component: _conqueror_component__WEBPACK_IMPORTED_MODULE_3__["ConquerorComponent"] }
                    ])
                ],
                declarations: [_conqueror_component__WEBPACK_IMPORTED_MODULE_3__["ConquerorComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/conqueror/models/conqueror.settings.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/conqueror/models/conqueror.settings.model.ts ***!
  \**************************************************************/
/*! exports provided: ConquerorSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConquerorSettings", function() { return ConquerorSettings; });
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground.model */ "./src/app/shared/models/playground.model.ts");

class ConquerorSettings {
    constructor() {
        this.noScore = false;
        this.fields = [];
        this.noScore = false;
        this.randomCity();
    }
    randomCity() {
        this.style = 0;
        this.fields = ConquerorSettings.getRandom(5);
        this.fields[this.fields.length] = 20;
    }
    randomCountry() {
        this.style = 1;
        this.fields = ConquerorSettings.getRandom(10);
        this.fields[this.fields.length] = 20;
    }
    randomContinent() {
        this.style = 2;
        this.fields = ConquerorSettings.getRandom(20);
        this.fields[this.fields.length] = 20;
    }
    toggleNoScore() {
        this.noScore = !this.noScore;
    }
    static getBaseFields() {
        return [...Array(_models_playground_model__WEBPACK_IMPORTED_MODULE_0__["FIELDS_COUNT"]).keys()];
    }
    static getRandom(size) {
        let fields = ConquerorSettings.getBaseFields();
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

/***/ "./src/app/conqueror/models/conqueror.state.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/conqueror/models/conqueror.state.model.ts ***!
  \***********************************************************/
/*! exports provided: ConquerorState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConquerorState", function() { return ConquerorState; });
/* harmony import */ var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground-state.model */ "./src/app/shared/models/playground-state.model.ts");

class ConquerorState extends _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__["PlaygroundState"] {
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
        const state = new ConquerorState();
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");


















function CricketComponent_app_settings_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_button_3_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const i_r66 = ctx.index; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r67.settings.setNumber(i_r66); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const numb_r65 = ctx.$implicit;
    const i_r66 = ctx.index;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r64.settings.isFieldAllowed(i_r66) ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r65 === 21 ? "B" : numb_r65, " ");
} }
function CricketComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CricketComponent_app_settings_1_button_3_Template, 2, 2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.settings.upper(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Upper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.settings.lower(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lower");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.settings.left(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.settings.right(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.settings.odd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Odd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.settings.even(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Even");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.settings.prime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.settings.notPrime(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Not prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.settings.randomize(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Random 05");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.settings.randomize(10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Random 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.settings.randomize(15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Random 15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.settings.all(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r82.settings.small(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.settings.high(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r84.settings.star(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.settings.cross(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cross");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.settings.setStyle(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Classic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.settings.setStyle(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Cut-Throat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_47_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.settings.setStyle(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "No Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.settings.setStyle(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Black Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Ultimate Cricket")("playground", ctx_r60.playground)("rules", "The objective shall be to 'own' or 'close' certain numbers on the board, and to achieve " + "the highest point score. The player or team to do so first, shall be the winner.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r60.settings.getNumbers());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r60.settings.style == 1 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r60.settings.style == 2 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r60.settings.style == 3 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r60.settings.style == 4 ? "primary" : "");
} }
function CricketComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 10);
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r61.playground);
} }
function CricketComponent_ng_container_4_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r94 = ctx.$implicit;
    const player_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("field ", ctx_r93.isActiveField(player_r91, field_r94) && ctx_r93.settings.isBlackOutGame() ? "active" : "", " ", !ctx_r93.isFieldDoneForPlayer(player_r91, field_r94) ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r94 === 20 ? "B" : field_r94 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r93.getFieldValue(player_r91, field_r94));
} }
function CricketComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_ng_container_4_div_1_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97); const player_r91 = ctx.$implicit; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r96.changePlayerToDisplay(player_r91); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CricketComponent_ng_container_4_div_1_div_3_Template, 4, 6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r91 = ctx.$implicit;
    const i_r92 = ctx.index;
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r92 === ctx_r90.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r90.settings.fields);
} }
function CricketComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CricketComponent_ng_container_4_div_1_Template, 4, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r62.game.players);
} }
function CricketComponent_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 10);
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r63.playground);
} }
class CricketComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService) {
        super(application, game, route, dialogService, soundService);
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
CricketComponent.ɵfac = function CricketComponent_Factory(t) { return new (t || CricketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"])); };
CricketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CricketComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 4, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "click"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], [3, "playground"], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "player"], [1, "field-set"], [3, "class", 4, "ngFor", "ngForOf"], [1, "small"]], template: function CricketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CricketComponent_app_settings_1_Template, 51, 8, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CricketComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CricketComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CricketComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CricketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './cricket.component.html',
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"] }]; }, null); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");

















function FivesComponent_app_settings_1_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FivesComponent_app_settings_1_button_8_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r165); const divider_r163 = ctx.$implicit; const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r164.settings.setDivider(divider_r163); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const divider_r163 = ctx.$implicit;
    const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r161.settings.divider === divider_r163 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](divider_r163);
} }
function FivesComponent_app_settings_1_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FivesComponent_app_settings_1_button_12_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r168); const limit_r166 = ctx.$implicit; const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r167.settings.setLimit(limit_r166); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const limit_r166 = ctx.$implicit;
    const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r162.settings.limit === limit_r166 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](limit_r166);
} }
function FivesComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FivesComponent_app_settings_1_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r170); const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r169.settings.toggleNoCheat(); });
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
    const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Fives")("playground", ctx_r157.playground)("rules", "The idea of the game to throw three darts into the board, in turn, to score a number that " + "is divisible by five. The higher the number you score, the more points you can score. For every five " + "scored, one point is awarded. E.g. if a player scores fifteen then he or she gains three points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r157.settings.noCheat ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r157.settings.getSelectableDividers());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r157.settings.getSelectableLimits());
} }
function FivesComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 8);
} if (rf & 2) {
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r158.playground);
} }
function FivesComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r172 = ctx.$implicit;
    const i_r173 = ctx.index;
    const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r173 === ctx_r171.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r172)("hasContent", false);
} }
function FivesComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FivesComponent_ng_container_4_div_1_Template, 2, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r159.game.players);
} }
function FivesComponent_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 8);
} if (rf & 2) {
    const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r160.playground);
} }
class FivesComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService) {
        super(application, game, route, dialogService, soundService);
        this.settings = new _models_fives_settings_model__WEBPACK_IMPORTED_MODULE_3__["FivesSettings"]();
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
}
FivesComponent.ɵfac = function FivesComponent_Factory(t) { return new (t || FivesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_8__["SoundService"])); };
FivesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FivesComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 4, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]], template: function FivesComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_15__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FivesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './fives.component.html',
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationStateService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_8__["SoundService"] }]; }, null); })();


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
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/sound.service */ "./src/app/shared/services/sound.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");

















function HareAndHoundComponent_app_settings_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HareAndHoundComponent_app_settings_1_button_3_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r181); const start_r179 = ctx.$implicit; const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r180.settings.setHoundStart(start_r179 - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const start_r179 = ctx.$implicit;
    const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r178.settings.houndStartIndex + 1 === start_r179 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](start_r179);
} }
function HareAndHoundComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hound start position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HareAndHoundComponent_app_settings_1_button_3_Template, 2, 2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Hare and Hound")("playground", ctx_r174.playground)("rules", "The frist player is the hare, and his opponent is the hound in pursuit. The hare must travel " + "clockwise around the board starting at 20. The hare wins by returning to 20 before the hound catches " + "up with him. The hound usually starts from either 12 or 5, depending on the preference of the " + "players. The hound wins by overtaking the hare.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r174.settings.getSelectableHoundStart());
} }
function HareAndHoundComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 8);
} if (rf & 2) {
    const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r175.playground);
} }
function HareAndHoundComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r183 = ctx.$implicit;
    const i_r184 = ctx.index;
    const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r184 === ctx_r182.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r183)("hasContent", false);
} }
function HareAndHoundComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HareAndHoundComponent_ng_container_4_div_1_Template, 2, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r176.game.players);
} }
function HareAndHoundComponent_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 8);
} if (rf & 2) {
    const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r177.playground);
} }
class HareAndHoundComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService) {
        super(application, game, route, dialogService, soundService, 2, 2);
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
HareAndHoundComponent.ɵfac = function HareAndHoundComponent_Factory(t) { return new (t || HareAndHoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"])); };
HareAndHoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HareAndHoundComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 4, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]], template: function HareAndHoundComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_15__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HareAndHoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './hare-and-hound.component.html',
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"] }]; }, null); })();


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
        return [7, 16, 8, 11, 14, 9, 12, 5, 20];
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");





















function KillerComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KillerComponent_app_settings_1_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r147); const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r146.settings.numberOfLives = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KillerComponent_app_settings_1_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r147); const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r148.settings.boardingLimit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KillerComponent_app_settings_1_Template_button_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r147); const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r149.settings.toggleSuicide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Suicide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Killer")("playground", ctx_r142.playground)("rules", "Firstly each player draws lots i.e. a number between 1 - 20. Each player is then given " + "between 3 & 5 lives. The objective of this game is for each thrower to first hit their own number " + "three times to gain status of KILLER. Once they have achieved this they then can throw for their " + "opponents number in any order they wish. Every time a KILLER status player hits an opponents " + "number the opponent loses a life. KILLERS can also commit SUICIDE by hitting their own number's " + "triple. The winner of this game is the player that remains alive.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r142.settings.numberOfLives);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r142.settings.boardingLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r142.settings.suicide ? "primary" : "");
} }
function KillerComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 10);
} if (rf & 2) {
    const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r143.playground);
} }
function KillerComponent_ng_container_4_div_1_ng_container_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Boarding: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const player_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r154.getPlayerState(player_r151).boarding);
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
    const player_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r153.getPlayerField(player_r151));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r153.getPlayerState(player_r151).life, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r153.getPlayerState(player_r151).killer);
} }
function KillerComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KillerComponent_ng_container_4_div_1_ng_container_2_Template, 12, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r151 = ctx.$implicit;
    const i_r152 = ctx.index;
    const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player ", i_r152 === ctx_r150.game.actualPlayerIndex ? "highlighted" : "", " ", ctx_r150.isInactive(player_r151) ? "inactive" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r151)("scoreDisplayed", false)("highlighted", ctx_r150.getPlayerState(player_r151).killer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r150.getPlayerField(player_r151) !== "0");
} }
function KillerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KillerComponent_ng_container_4_div_1_Template, 3, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r144.game.players);
} }
function KillerComponent_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 10);
} if (rf & 2) {
    const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r145.playground);
} }
const DANGER_ZONE_ICON = 'sentiment_very_dissatisfied';
class KillerComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService) {
        super(application, game, route, dialogService, soundService, 2);
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
                    state.life = 0;
                    this.extraEndingMsg = 'SUICIDE!!!';
                }
                else if (fieldIndex === state.actField) {
                    state.life = Number(state.life) + Number(this.multiplier);
                    if (state.life > this.settings.numberOfLives) {
                        state.life = this.settings.numberOfLives;
                    }
                }
                else {
                    this.game.players.filter(p => p.id !== player.id && !this.getPlayerState(p).isInactive()).forEach(p => {
                        const s = this.getPlayerState(p);
                        if (fieldIndex === s.actField) {
                            s.life -= this.multiplier;
                            if (s.life < 0) {
                                s.life = 0;
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
            const activePlayers = this.game.players.filter(p => !this.getPlayerState(p).isInactive());
            this.game.players.forEach(p => p.setWin(1 === activePlayers.length && !this.getPlayerState(p).isInactive()));
        }
        if (this.game.round === 0 || this.game.isTheLastThrow()) {
            this.game.nextPlayer();
        }
        while (this.getPlayerState(this.game.getActualPlayer()).isInactive()) {
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
            return !state.isInactive() && state.life <= 3 && state.actField === fieldIndex;
        })) {
            return DANGER_ZONE_ICON;
        }
        return '';
    }
    getFieldNote(fieldIndex) {
        const owner = this.game.players.find(p => p.state.actField === fieldIndex);
        return owner ? `${owner.name}(${owner.state.life})` : '';
    }
    getPlayerField(player) {
        const fieldIndex = this.getPlayerState(player).actField;
        return fieldIndex === 20 ? 'B' : (fieldIndex + 1) + '';
    }
    isInactive(player) {
        return this.getPlayerState(player).isInactive();
    }
    customReset() {
        this.game.players.forEach(player => player.state = new _models_killer_state_model__WEBPACK_IMPORTED_MODULE_3__["KillerState"](this.settings.numberOfLives, this.settings.boardingLimit));
    }
    customSettingsValidation() {
        return this.settings.numberOfLives > 0 && this.settings.boardingLimit > 0;
    }
    getAllEnabledFields() {
        return this.game.players.filter(p => !this.getPlayerState(p).isInactive())
            .map(p => this.getPlayerState(p).actField);
    }
}
KillerComponent.ɵfac = function KillerComponent_Factory(t) { return new (t || KillerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"])); };
KillerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KillerComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 4, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], [1, "field-set"], ["appearance", "outline", 1, "big"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "scoreDisplayed", "highlighted"], [1, "score"], [1, "clear"], [1, "line"]], template: function KillerComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_17__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_18__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_19__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KillerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './killer.component.html',
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"] }]; }, null); })();


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
    constructor(life = 5, boarding = 3) {
        super();
        this.life = life;
        this.boarding = boarding;
        this.actField = -1;
        this.killer = false;
    }
    isInactive() {
        return this.life <= 0;
    }
    clone() {
        const state = new KillerState(this.life, this.boarding);
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");



















function KnockoutComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KnockoutComponent_app_settings_1_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190); const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r189.settings.numberOfLives = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Knockout")("playground", ctx_r185.playground)("rules", "The player selected to throw first must throw as many points as possible. The player next in " + "line then must throw a higher score than the player throwing before him, if he fails to throw a " + "higher score a ring is put around their score, once you have 3 rings next to your name, you drop " + "out of the game.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r185.settings.numberOfLives);
} }
function KnockoutComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 9);
} if (rf & 2) {
    const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r186.playground);
} }
function KnockoutComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Life: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Score: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r192 = ctx.$implicit;
    const i_r193 = ctx.index;
    const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player ", i_r193 === ctx_r191.game.actualPlayerIndex ? "highlighted" : "", " ", ctx_r191.isInactive(player_r192) ? "inactive" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r192)("scoreDisplayed", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r191.getPlayerState(player_r192).life, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", player_r192.score, " ");
} }
function KnockoutComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KnockoutComponent_ng_container_4_div_1_Template, 10, 8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r187.game.players);
} }
function KnockoutComponent_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 9);
} if (rf & 2) {
    const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r188.playground);
} }
class KnockoutComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService) {
        super(application, game, route, dialogService, soundService, 2);
        this.score = 0;
        this.settings = new _models_knockout_settings_model__WEBPACK_IMPORTED_MODULE_3__["KnockoutSettings"]();
    }
    calculatePoints(player, fieldIndex, score) {
        player.score = player.getThrowsTotal();
    }
    checkPlayerState(player) {
        if (this.game.isTheLastThrow()) {
            if (this.score > player.getThrowsTotal()) {
                this.getPlayerState(player).life--;
            }
            this.score = player.getThrowsTotal();
            const activePlayers = this.game.players.filter(p => !this.getPlayerState(p).isInactive());
            this.game.players.forEach(p => p.setWin(1 === activePlayers.length && !this.getPlayerState(p).isInactive()));
            this.game.nextPlayer();
        }
        while (this.getPlayerState(this.game.getActualPlayer()).isInactive()) {
            this.game.nextPlayer();
        }
    }
    isInactive(player) {
        return this.getPlayerState(player).isInactive();
    }
    customReset() {
        this.game.players.forEach(player => player.state = new _models_knockout_state_model__WEBPACK_IMPORTED_MODULE_4__["KnockoutState"](this.settings.numberOfLives));
        this.score = 0;
    }
    customSettingsValidation() {
        return this.settings.numberOfLives > 0;
    }
}
KnockoutComponent.ɵfac = function KnockoutComponent_Factory(t) { return new (t || KnockoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"])); };
KnockoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KnockoutComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 4, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], [1, "field-set"], ["appearance", "outline", 1, "big"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "scoreDisplayed"], [1, "clear"], [1, "score"]], template: function KnockoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KnockoutComponent_app_settings_1_Template, 8, 4, "app-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KnockoutComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KnockoutComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, KnockoutComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KnockoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './knockout.component.html',
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"] }]; }, null); })();


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
    constructor(life = 5) {
        super();
        this.life = life;
    }
    isInactive() {
        return this.life <= 0;
    }
    clone() {
        return new KnockoutState(this.life);
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
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/sound.service */ "./src/app/shared/services/sound.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");


















function ShanghaiComponent_app_settings_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_button_3_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131); const i_r129 = ctx.index; const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r130.settings.setNumber(i_r129); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const numb_r128 = ctx.$implicit;
    const i_r129 = ctx.index;
    const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r127.settings.numbs[i_r129] ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r128 === 21 ? "B" : numb_r128, " ");
} }
function ShanghaiComponent_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShanghaiComponent_app_settings_1_button_3_Template, 2, 2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r132.settings.randomize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Randomize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r134.settings.toggleNoScore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r133); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r135.settings.toggleHalveIt(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Halve It ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Shanghai / Halve It")("playground", ctx_r123.playground)("rules", " Players start by throwing at the number 1 on the board. The object is to hit a single," + "treble and double (in any order). This first player to hit a single, treble and double wins. If no" + "player achieves this on number 1, the play moves to number 2 and so on until someone wins.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r123.settings.getNumbers());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r123.settings.noScore ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r123.settings.halveIt ? "primary" : "");
} }
function ShanghaiComponent_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 10);
} if (rf & 2) {
    const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r124.playground);
} }
function ShanghaiComponent_ng_container_4_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r140 = ctx.$implicit;
    const player_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("field ", ctx_r139.isActiveField(field_r140) ? "active" : "", " ", ctx_r139.isFieldDoneForPlayer(field_r140) ? "" : "highlighted", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r140 === 20 ? "B" : field_r140 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r139.getFieldValue(player_r137, field_r140));
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
    const player_r137 = ctx.$implicit;
    const i_r138 = ctx.index;
    const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r138 === ctx_r136.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r136.settings.fields);
} }
function ShanghaiComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShanghaiComponent_ng_container_4_div_1_Template, 4, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r125.game.players);
} }
function ShanghaiComponent_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 10);
} if (rf & 2) {
    const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r126.playground);
} }
class ShanghaiComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService) {
        super(application, game, route, dialogService, soundService);
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
}
ShanghaiComponent.ɵfac = function ShanghaiComponent_Factory(t) { return new (t || ShanghaiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"])); };
ShanghaiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShanghaiComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 4, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "button", "big", "capitalize", 3, "click"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player"], [1, "field-set"], [1, "small"]], template: function ShanghaiComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShanghaiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './shanghai.component.html',
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"] }]; }, null); })();


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





function DartsTableDialogComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const f_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("clip darts-table-field-", f_r14, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r13.isPrimary(f_r14));
} }
class DartsTableDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    isPrimary(index) {
        return this.data.primary.some(p => p === index);
    }
    close() {
        this.dialogRef.close();
    }
}
DartsTableDialogComponent.ɵfac = function DartsTableDialogComponent_Factory(t) { return new (t || DartsTableDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DartsTableDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DartsTableDialogComponent, selectors: [["ng-component"]], decls: 4, vars: 1, consts: [[1, "dialog-container", "darts-table-container"], [1, "body-2", 3, "click"], ["src", "assets/darts_table.png"], [3, "class", "primary", 4, "ngFor", "ngForOf"]], template: function DartsTableDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DartsTableDialogComponent_Template_mat_dialog_content_click_1_listener($event) { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DartsTableDialogComponent_div_3_Template, 1, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.field);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".darts-table-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .darts-table-container[_ngcontent-%COMP%]   .clip[_ngcontent-%COMP%] {\n  width: calc(100vw - 100px);\n  height: calc(100vw - 100px);\n  position: absolute;\n  top: 50px;\n  left: 50px;\n}\n.darts-table-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .clip[_ngcontent-%COMP%] {\n  background: #f0280f;\n  opacity: 0.6;\n}\n.darts-table-container[_ngcontent-%COMP%]   .clip.primary[_ngcontent-%COMP%] {\n  background: #1133ee;\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-2[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(50% 53%, 44% 88%, 56% 88%);\n          clip-path: polygon(50% 53%, 44% 88%, 56% 88%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-16[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(50% 51%, 56% 87%, 68% 84%);\n          clip-path: polygon(50% 51%, 56% 87%, 68% 84%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-1[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(50% 51%, 67% 84%, 77% 76%);\n          clip-path: polygon(50% 51%, 67% 84%, 77% 76%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-14[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(50% 51%, 77% 77%, 84% 67%);\n          clip-path: polygon(50% 51%, 77% 77%, 84% 67%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-9[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(50% 51%, 83% 67%, 87% 55%);\n          clip-path: polygon(50% 51%, 83% 67%, 87% 55%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-5[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(51% 50%, 87% 56%, 86% 44%);\n          clip-path: polygon(51% 50%, 87% 56%, 86% 44%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-12[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(51% 50%, 87% 44%, 83% 32%);\n          clip-path: polygon(51% 50%, 87% 44%, 83% 32%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-3[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(51% 49%, 83% 33%, 76% 23%);\n          clip-path: polygon(51% 49%, 83% 33%, 76% 23%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-17[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(51% 49%, 76% 23%, 66% 16%);\n          clip-path: polygon(51% 49%, 76% 23%, 66% 16%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-0[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(50% 49%, 67% 16%, 55% 13%);\n          clip-path: polygon(50% 49%, 67% 16%, 55% 13%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-19[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(50% 48%, 56% 13%, 43% 13%);\n          clip-path: polygon(50% 48%, 56% 13%, 43% 13%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-4[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(32% 17%, 50% 51%, 44% 13%);\n          clip-path: polygon(32% 17%, 50% 51%, 44% 13%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-11[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(22% 24%, 50% 51%, 33% 16%);\n          clip-path: polygon(22% 24%, 50% 51%, 33% 16%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-8[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(15% 33%, 50% 51%, 23% 23%);\n          clip-path: polygon(15% 33%, 50% 51%, 23% 23%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-13[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(12% 45%, 50% 51%, 16% 32%);\n          clip-path: polygon(12% 45%, 50% 51%, 16% 32%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-10[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(13% 57%, 50% 51%, 13% 45%);\n          clip-path: polygon(13% 57%, 50% 51%, 13% 45%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-7[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(16% 68%, 50% 51%, 12% 56%);\n          clip-path: polygon(16% 68%, 50% 51%, 12% 56%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-15[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(23% 77%, 50% 51%, 16% 67%);\n          clip-path: polygon(23% 77%, 50% 51%, 16% 67%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-6[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(33% 84%, 50% 51%, 23% 77%);\n          clip-path: polygon(33% 84%, 50% 51%, 23% 77%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-18[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(44% 88%, 50% 51%, 32% 84%);\n          clip-path: polygon(44% 88%, 50% 51%, 32% 84%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-20[_ngcontent-%COMP%] {\n  -webkit-clip-path: circle(3.7% at 50% 50%);\n          clip-path: circle(3.7% at 50% 50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGFydHMtdGFibGUvRDpcXERldmVsb3BtZW50XFxkYXJ0cy1zY29yZWJvYXJkLW5nL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGRhcnRzLXRhYmxlXFxkYXJ0cy10YWJsZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RhcnRzLXRhYmxlL2RhcnRzLXRhYmxlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQUo7QURHRTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUNESjtBRElFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDRko7QURJSTtFQUNFLG1CQUFBO0FDRk47QURNRTtFQUNFLHFEQUFBO1VBQUEsNkNBQUE7QUNKSjtBRE9FO0VBQ0UscURBQUE7VUFBQSw2Q0FBQTtBQ0xKO0FEUUU7RUFDRSxxREFBQTtVQUFBLDZDQUFBO0FDTko7QURTRTtFQUNFLHFEQUFBO1VBQUEsNkNBQUE7QUNQSjtBRFVFO0VBQ0UscURBQUE7VUFBQSw2Q0FBQTtBQ1JKO0FEV0U7RUFDRSxxREFBQTtVQUFBLDZDQUFBO0FDVEo7QURZRTtFQUNFLHFEQUFBO1VBQUEsNkNBQUE7QUNWSjtBRGFFO0VBQ0UscURBQUE7VUFBQSw2Q0FBQTtBQ1hKO0FEY0U7RUFDRSxxREFBQTtVQUFBLDZDQUFBO0FDWko7QURlRTtFQUNFLHFEQUFBO1VBQUEsNkNBQUE7QUNiSjtBRGdCRTtFQUNFLHFEQUFBO1VBQUEsNkNBQUE7QUNkSjtBRGlCRTtFQUNFLHFEQUFBO1VBQUEsNkNBQUE7QUNmSjtBRGtCRTtFQUNFLHFEQUFBO1VBQUEsNkNBQUE7QUNoQko7QURtQkU7RUFDRSxxREFBQTtVQUFBLDZDQUFBO0FDakJKO0FEb0JFO0VBQ0UscURBQUE7VUFBQSw2Q0FBQTtBQ2xCSjtBRHFCRTtFQUNFLHFEQUFBO1VBQUEsNkNBQUE7QUNuQko7QURzQkU7RUFDRSxxREFBQTtVQUFBLDZDQUFBO0FDcEJKO0FEdUJFO0VBQ0UscURBQUE7VUFBQSw2Q0FBQTtBQ3JCSjtBRHdCRTtFQUNFLHFEQUFBO1VBQUEsNkNBQUE7QUN0Qko7QUR5QkU7RUFDRSxxREFBQTtVQUFBLDZDQUFBO0FDdkJKO0FEMEJFO0VBQ0UsMENBQUE7VUFBQSxrQ0FBQTtBQ3hCSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RhcnRzLXRhYmxlL2RhcnRzLXRhYmxlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXJ0cy10YWJsZS1jb250YWluZXIge1xyXG4gIGltZywgLmNsaXAge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxMDBweCk7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdncgLSAxMDBweCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBsZWZ0OiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gIH1cclxuXHJcbiAgLmNsaXAge1xyXG4gICAgYmFja2dyb3VuZDogI2YwMjgwZjtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuXHJcbiAgICAmLnByaW1hcnkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMTEzM2VlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRhcnRzLXRhYmxlLWZpZWxkLTIge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MyUsIDQ0JSA4OCUsIDU2JSA4OCUpO1xyXG4gIH1cclxuXHJcbiAgLmRhcnRzLXRhYmxlLWZpZWxkLTE2IHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTElLCA1NiUgODclLCA2OCUgODQlKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0xIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTElLCA2NyUgODQlLCA3NyUgNzYlKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0xNCB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUxJSwgNzclIDc3JSwgODQlIDY3JSk7XHJcbiAgfVxyXG5cclxuICAuZGFydHMtdGFibGUtZmllbGQtOSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUxJSwgODMlIDY3JSwgODclIDU1JSk7XHJcbiAgfVxyXG5cclxuICAuZGFydHMtdGFibGUtZmllbGQtNSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTElIDUwJSwgODclIDU2JSwgODYlIDQ0JSk7XHJcbiAgfVxyXG5cclxuICAuZGFydHMtdGFibGUtZmllbGQtMTIge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUxJSA1MCUsIDg3JSA0NCUsIDgzJSAzMiUpO1xyXG4gIH1cclxuXHJcbiAgLmRhcnRzLXRhYmxlLWZpZWxkLTMge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUxJSA0OSUsIDgzJSAzMyUsIDc2JSAyMyUpO1xyXG4gIH1cclxuXHJcbiAgLmRhcnRzLXRhYmxlLWZpZWxkLTE3IHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MSUgNDklLCA3NiUgMjMlLCA2NiUgMTYlKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0wIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNDklLCA2NyUgMTYlLCA1NSUgMTMlKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0xOSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDQ4JSwgNTYlIDEzJSwgNDMlIDEzJSk7XHJcbiAgfVxyXG5cclxuICAuZGFydHMtdGFibGUtZmllbGQtNCB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMzIlIDE3JSwgNTAlIDUxJSwgNDQlIDEzJSk7XHJcbiAgfVxyXG5cclxuICAuZGFydHMtdGFibGUtZmllbGQtMTEge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDIyJSAyNCUsIDUwJSA1MSUsIDMzJSAxNiUpO1xyXG4gIH1cclxuXHJcbiAgLmRhcnRzLXRhYmxlLWZpZWxkLTgge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDE1JSAzMyUsIDUwJSA1MSUsIDIzJSAyMyUpO1xyXG4gIH1cclxuXHJcbiAgLmRhcnRzLXRhYmxlLWZpZWxkLTEzIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigxMiUgNDUlLCA1MCUgNTElLCAxNiUgMzIlKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0xMCB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTMlIDU3JSwgNTAlIDUxJSwgMTMlIDQ1JSk7XHJcbiAgfVxyXG5cclxuICAuZGFydHMtdGFibGUtZmllbGQtNyB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTYlIDY4JSwgNTAlIDUxJSwgMTIlIDU2JSk7XHJcbiAgfVxyXG5cclxuICAuZGFydHMtdGFibGUtZmllbGQtMTUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDIzJSA3NyUsIDUwJSA1MSUsIDE2JSA2NyUpO1xyXG4gIH1cclxuXHJcbiAgLmRhcnRzLXRhYmxlLWZpZWxkLTYge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDMzJSA4NCUsIDUwJSA1MSUsIDIzJSA3NyUpO1xyXG4gIH1cclxuXHJcbiAgLmRhcnRzLXRhYmxlLWZpZWxkLTE4IHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig0NCUgODglLCA1MCUgNTElLCAzMiUgODQlKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0yMCB7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgzLjclIGF0IDUwJSA1MCUpO1xyXG4gIH1cclxufVxyXG4iLCIuZGFydHMtdGFibGUtY29udGFpbmVyIGltZywgLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuY2xpcCB7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTAwcHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwdncgLSAxMDBweCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiA1MHB4O1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciBpbWcge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmNsaXAge1xuICBiYWNrZ3JvdW5kOiAjZjAyODBmO1xuICBvcGFjaXR5OiAwLjY7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5jbGlwLnByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjMTEzM2VlO1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuZGFydHMtdGFibGUtZmllbGQtMiB7XG4gIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTMlLCA0NCUgODglLCA1NiUgODglKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTE2IHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MSUsIDU2JSA4NyUsIDY4JSA4NCUpO1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuZGFydHMtdGFibGUtZmllbGQtMSB7XG4gIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTElLCA2NyUgODQlLCA3NyUgNzYlKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTE0IHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSA1MSUsIDc3JSA3NyUsIDg0JSA2NyUpO1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuZGFydHMtdGFibGUtZmllbGQtOSB7XG4gIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTElLCA4MyUgNjclLCA4NyUgNTUlKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTUge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTElIDUwJSwgODclIDU2JSwgODYlIDQ0JSk7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5kYXJ0cy10YWJsZS1maWVsZC0xMiB7XG4gIGNsaXAtcGF0aDogcG9seWdvbig1MSUgNTAlLCA4NyUgNDQlLCA4MyUgMzIlKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTMge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTElIDQ5JSwgODMlIDMzJSwgNzYlIDIzJSk7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5kYXJ0cy10YWJsZS1maWVsZC0xNyB7XG4gIGNsaXAtcGF0aDogcG9seWdvbig1MSUgNDklLCA3NiUgMjMlLCA2NiUgMTYlKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTAge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDQ5JSwgNjclIDE2JSwgNTUlIDEzJSk7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5kYXJ0cy10YWJsZS1maWVsZC0xOSB7XG4gIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNDglLCA1NiUgMTMlLCA0MyUgMTMlKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTQge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMzIlIDE3JSwgNTAlIDUxJSwgNDQlIDEzJSk7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5kYXJ0cy10YWJsZS1maWVsZC0xMSB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigyMiUgMjQlLCA1MCUgNTElLCAzMyUgMTYlKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTgge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMTUlIDMzJSwgNTAlIDUxJSwgMjMlIDIzJSk7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5kYXJ0cy10YWJsZS1maWVsZC0xMyB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigxMiUgNDUlLCA1MCUgNTElLCAxNiUgMzIlKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTEwIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDEzJSA1NyUsIDUwJSA1MSUsIDEzJSA0NSUpO1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuZGFydHMtdGFibGUtZmllbGQtNyB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigxNiUgNjglLCA1MCUgNTElLCAxMiUgNTYlKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTE1IHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDIzJSA3NyUsIDUwJSA1MSUsIDE2JSA2NyUpO1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuZGFydHMtdGFibGUtZmllbGQtNiB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigzMyUgODQlLCA1MCUgNTElLCAyMyUgNzclKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTE4IHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDQ0JSA4OCUsIDUwJSA1MSUsIDMyJSA4NCUpO1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuZGFydHMtdGFibGUtZmllbGQtMjAge1xuICBjbGlwLXBhdGg6IGNpcmNsZSgzLjclIGF0IDUwJSA1MCUpO1xufSJdfQ== */"] });
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
    const player_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("winner", player_r10.win);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", i_r11 + 1, ". ", player_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", player_r10.win);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](player_r10.score);
} }
function DialogComponent_mat_dialog_content_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DialogComponent_mat_dialog_content_4_div_3_Template, 6, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.data.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.data.players);
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
DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["ng-component"]], decls: 8, vars: 3, consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], ["class", "body-2", 4, "ngIf"], ["mat-button", "", 3, "mat-dialog-close"], [1, "body-2"], ["class", "score-line", 3, "winner", 4, "ngFor", "ngForOf"], [1, "score-line"], ["color", "warn", 4, "ngIf"], ["color", "warn"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: [".dialog-container[_ngcontent-%COMP%] {\n  width: 50vw;\n  text-align: center;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-size: 50px;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   .score-line[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px;\n}\n.dialog-container[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 30px;\n  padding: 0;\n  margin: 0;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxkaWFsb2dcXGRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQUo7QURHRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsYUFBQTtBQ0RKO0FES0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSEo7QURNRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDSko7QURPRTtFQUNFLG1CQUFBO0FDTEo7QURRRTtFQUNFLDZCQUFBO0VBQ0Esc0JBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICAuc3VidGl0bGUtMSB7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5zY29yZS1saW5lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG5cclxuICAucGxheWVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgbWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICBtYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xyXG4gIH1cclxufVxyXG4iLCIuZGlhbG9nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MHZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtaWNvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5kaWFsb2ctY29udGFpbmVyIC5zdWJ0aXRsZS0xIHtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5kaWFsb2ctY29udGFpbmVyIC5zY29yZS1saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmRpYWxvZy1jb250YWluZXIgLnBsYXllciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMzBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xufSJdfQ== */"] });
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

/***/ "./src/app/shared/components/game-rules/game-rules.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/game-rules/game-rules.component.ts ***!
  \**********************************************************************/
/*! exports provided: GameRulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameRulesComponent", function() { return GameRulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class GameRulesComponent {
}
GameRulesComponent.ɵfac = function GameRulesComponent_Factory(t) { return new (t || GameRulesComponent)(); };
GameRulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameRulesComponent, selectors: [["app-game-rules"]], ngContentSelectors: _c0, decls: 6, vars: 0, consts: [["id", "rules"]], template: function GameRulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Click here for rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#rules[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n#rules[_ngcontent-%COMP%]   details[_ngcontent-%COMP%] {\n  -webkit-transition: all 400ms ease-in-out;\n  transition: all 400ms ease-in-out;\n  overflow: hidden;\n  padding: 5px;\n}\n#rules[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:visited, #rules[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  border: none;\n  outline: none;\n}\n#rules[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-details-marker {\n  display: none;\n}\n#rules[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  white-space: pre-line;\n  word-break: break-word;\n  padding: 12px;\n}\n#rules[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]:not([open]) {\n  height: 1.25em;\n}\n#rules[_ngcontent-%COMP%]   details[open][_ngcontent-%COMP%] {\n  height: 11em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS1ydWxlcy9EOlxcRGV2ZWxvcG1lbnRcXGRhcnRzLXNjb3JlYm9hcmQtbmcvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZ2FtZS1ydWxlc1xcZ2FtZS1ydWxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS1ydWxlcy9nYW1lLXJ1bGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGO0FEQ0U7RUFDRSx5Q0FBQTtFQUFBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7QURDSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQ047QURFSTtFQUNFLGFBQUE7QUNBTjtBREdJO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNETjtBREtFO0VBQ0UsY0FBQTtBQ0hKO0FETUU7RUFDRSxZQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9nYW1lLXJ1bGVzL2dhbWUtcnVsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcnVsZXMge1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG5cclxuICBkZXRhaWxzIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlLWluLW91dDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcblxyXG4gICAgOnZpc2l0ZWQsIDpmb2N1cyB7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICA6Oi13ZWJraXQtZGV0YWlscy1tYXJrZXIge1xyXG4gICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgcGFkZGluZzogMTJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRldGFpbHM6bm90KFtvcGVuXSkge1xyXG4gICAgaGVpZ2h0OiAxLjI1ZW07XHJcbiAgfVxyXG5cclxuICBkZXRhaWxzW29wZW5dIHtcclxuICAgIGhlaWdodDogMTFlbTtcclxuICB9XHJcbn1cclxuIiwiI3J1bGVzIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4jcnVsZXMgZGV0YWlscyB7XG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlLWluLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNXB4O1xufVxuI3J1bGVzIGRldGFpbHMgOnZpc2l0ZWQsICNydWxlcyBkZXRhaWxzIDpmb2N1cyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbiNydWxlcyBkZXRhaWxzIDo6LXdlYmtpdC1kZXRhaWxzLW1hcmtlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jcnVsZXMgZGV0YWlscyBwIHtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuI3J1bGVzIGRldGFpbHM6bm90KFtvcGVuXSkge1xuICBoZWlnaHQ6IDEuMjVlbTtcbn1cbiNydWxlcyBkZXRhaWxzW29wZW5dIHtcbiAgaGVpZ2h0OiAxMWVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameRulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-rules',
                templateUrl: './game-rules.component.html',
                styleUrls: ['./game-rules.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






class GameToolbarComponent {
    constructor(route, dialogService) {
        this.route = route;
        this.dialogService = dialogService;
    }
    quit() {
        this.route.navigate(['/']);
        this.playground.game.resetScore();
        this.playground.multiplier = 1;
        this.playground.extraEndingMsg = '';
    }
    showSettings() {
        this.playground.reset();
        this.playground.settingsOpen = true;
    }
    showTable() {
        const enabledFields = [];
        const primaryFields = [];
        for (let i = 0; i <= 20; i++) {
            if (this.playground.isFieldEnabled(i)) {
                enabledFields.push(i);
            }
            if (this.playground.isPrimaryField(i)) {
                primaryFields.push(i);
            }
        }
        this.dialogService.openDartsTable(enabledFields, primaryFields);
    }
}
GameToolbarComponent.ɵfac = function GameToolbarComponent_Factory(t) { return new (t || GameToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"])); };
GameToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameToolbarComponent, selectors: [["app-game-toolbar"]], inputs: { playground: "playground" }, decls: 17, vars: 1, consts: [[1, "toolbar"], [1, "buttons"], ["mat-raised-button", "", 3, "click"], [1, "round-info", 3, "click"], [1, "clear"]], template: function GameToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_2_listener($event) { return ctx.quit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_5_listener($event) { return ctx.playground.newGame(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_8_listener($event) { return ctx.showSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "build");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_11_listener($event) { return ctx.playground.undo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "undo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_div_click_14_listener($event) { return ctx.showTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.playground.game.round + 1, ".");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: [".toolbar[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n.toolbar[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n.toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: calc(50% - 10px);\n  height: calc(50% - 10px);\n  margin: 0;\n}\n.toolbar[_ngcontent-%COMP%]   .round-info[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  width: 100px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 90px;\n  border-radius: 8px;\n  margin: 5px 5px 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10b29sYmFyL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxnYW1lLXRvb2xiYXJcXGdhbWUtdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10b29sYmFyL2dhbWUtdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0NGO0FEQ0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSw4QkFBQTtVQUFBLDZCQUFBO0FDQ0o7QURFRTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxTQUFBO0FDQUo7QURHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9nYW1lLXRvb2xiYXIvZ2FtZS10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIC5idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgICBoZWlnaHQ6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAucm91bmQtaW5mbyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW46IDVweCA1cHggNXB4IDA7XHJcbiAgfVxyXG59XHJcbiIsIi50b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi50b29sYmFyIC5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4udG9vbGJhciBidXR0b24ge1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgaGVpZ2h0OiBjYWxjKDUwJSAtIDEwcHgpO1xuICBtYXJnaW46IDA7XG59XG4udG9vbGJhciAucm91bmQtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDVweCA1cHggNXB4IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-toolbar',
                templateUrl: './game-toolbar.component.html',
                styleUrls: ['./game-toolbar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"] }]; }, { playground: [{
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");







function NumberPlateComponent_button_1_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.playground.getFieldIcon(i_r18 - 1));
} }
function NumberPlateComponent_button_1_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.playground.getFieldNote(i_r18 - 1));
} }
function NumberPlateComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_button_1_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const i_r18 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.throwNumber(i_r18 - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NumberPlateComponent_button_1_mat_icon_2_Template, 2, 1, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NumberPlateComponent_button_1_p_3_Template, 2, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r15.getNumberColor(i_r18 - 1))("disabled", ctx_r15.isNumberDisabled(i_r18 - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r18, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.playground.getFieldIcon(i_r18 - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.playground.getFieldNote(i_r18 - 1));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.playground.getFieldNote(20));
} }
class NumberPlateComponent {
    constructor(game) {
        this.game = game;
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
NumberPlateComponent.ɵfac = function NumberPlateComponent_Factory(t) { return new (t || NumberPlateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"])); };
NumberPlateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NumberPlateComponent, selectors: [["app-number-plate"]], inputs: { playground: "playground" }, decls: 14, vars: 11, consts: [[1, "side-right"], ["mat-raised-button", "", "class", "number", 3, "color", "disabled", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "number", 3, "color", "disabled", "click"], [4, "ngIf"], ["class", "field-note", 4, "ngIf"], ["mat-raised-button", "", 1, "number", 3, "disabled", "click"], [1, "field-note"]], template: function NumberPlateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NumberPlateComponent_button_1_Template, 4, 5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_2_listener($event) { return ctx.throwNumber(20); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Bull ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NumberPlateComponent_mat_icon_4_Template, 2, 1, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NumberPlateComponent_p_5_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_6_listener($event) { return ctx.playground.doublePoint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Double");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_8_listener($event) { return ctx.playground.triplePoint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Triple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_10_listener($event) { return ctx.playground.skip(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_12_listener($event) { return ctx.playground.throwNumber([0, 0]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getNumbers());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.getNumberColor(20))("disabled", ctx.isNumberDisabled(20));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playground.getFieldIcon(20));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playground.getFieldNote(20));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.playground.multiplier === 2 ? "primary" : "")("disabled", !ctx.playground.multiEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.playground.multiplier === 3 ? "primary" : "")("disabled", !ctx.playground.multiEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playground.nextEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playground.zeroEnabled);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".number[_ngcontent-%COMP%] {\n  float: left;\n  margin: 0.1vw;\n  font-size: calc(10px + 0.8vw + 0.8vh);\n  height: 19.4vh;\n  width: 13.7vw;\n}\n.number[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 5px;\n  font-size: 30px;\n}\n.number[_ngcontent-%COMP%]   .field-note[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 7px;\n  font-size: 12px;\n  width: 48px;\n  overflow: hidden;\n  word-break: normal;\n  white-space: pre-line;\n  line-height: 16px;\n  text-align: right;\n}\n.number[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxudW1iZXItcGxhdGVcXG51bWJlci1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlL251bWJlci1wbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURJQTtFQUNFLFlBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL251bWJlci1wbGF0ZS9udW1iZXItcGxhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubnVtYmVyIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDAuMXZ3O1xyXG4gIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMC44dncgKyAwLjh2aCk7XHJcbiAgaGVpZ2h0OiAxOS40dmg7XHJcbiAgd2lkdGg6IDEzLjd2dztcclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZpZWxkLW5vdGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubnVtYmVyOmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuIiwiLm51bWJlciB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAuMXZ3O1xuICBmb250LXNpemU6IGNhbGMoMTBweCArIDAuOHZ3ICsgMC44dmgpO1xuICBoZWlnaHQ6IDE5LjR2aDtcbiAgd2lkdGg6IDEzLjd2dztcbn1cbi5udW1iZXIgbWF0LWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4ubnVtYmVyIC5maWVsZC1ub3RlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiA3cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5udW1iZXI6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberPlateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-number-plate',
                templateUrl: './number-plate.component.html',
                styleUrls: ['./number-plate.component.scss']
            }]
    }], function () { return [{ type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }]; }, { playground: [{
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");




function PlayerScoreComponent_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "offline_bolt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerScoreComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} }
function PlayerScoreComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} }
function PlayerScoreComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r38.player.score);
} }
const _c0 = ["*"];
class PlayerScoreComponent {
    constructor() {
        this.hasContent = true;
        this.scoreDisplayed = true;
        this.highlighted = false;
    }
}
PlayerScoreComponent.ɵfac = function PlayerScoreComponent_Factory(t) { return new (t || PlayerScoreComponent)(); };
PlayerScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerScoreComponent, selectors: [["app-player-score"]], inputs: { player: "player", hasContent: "hasContent", scoreDisplayed: "scoreDisplayed", highlighted: "highlighted" }, ngContentSelectors: _c0, decls: 19, vars: 9, consts: [[1, "player_info"], [1, "name"], [4, "ngIf"], [1, "shoots"], [1, "shoot"], [1, "shoot", "total"], [1, "clear"], ["class", "line", 4, "ngIf"], ["class", "score", 4, "ngIf"], [1, "line"], [1, "score"]], template: function PlayerScoreComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PlayerScoreComponent_div_14_Template, 1, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PlayerScoreComponent_div_16_Template, 1, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PlayerScoreComponent_div_17_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 6);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!ctx.player.getThrowsTotal() ? "0" : ctx.player.getThrowsTotal());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scoreDisplayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scoreDisplayed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: [".player_info {\n  padding: 1vw;\n}\n.player_info .line {\n  margin: 1vw 0;\n}\n.player_info .small {\n  font-size: calc(0.6vw + 0.5vh);\n  font-weight: bold;\n}\n.player_info .name {\n  font-size: calc(5px + 1vw);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.player_info .name mat-icon {\n  margin-right: 10px;\n  font-size: calc(20px + 1vw);\n}\n.player_info .shoots {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.player_info .shoots .shoot {\n  margin: 0.1vw;\n  border-radius: 0.5vw;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 3vw;\n  height: 3vw;\n  font-size: calc(6px + 1vw);\n}\n.player_info .shoots .shoot.total {\n  margin-left: 10px;\n}\n.player_info .score {\n  font-size: 3.2vw;\n  letter-spacing: 0.5vw;\n  font-weight: bold;\n  float: right;\n}\n.player_info .score label {\n  font-size: 1vw;\n  letter-spacing: 0.2vw;\n}\n.player_info .note {\n  font-size: 2vw;\n  margin-right: 10px;\n  float: right;\n}\n.player_info .note label {\n  font-size: 1.5vw;\n}\n.player_info .field-set {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n}\n.player_info .field {\n  font-size: calc(0.7vw + 0.7vh);\n  width: 70px;\n  opacity: 0.4;\n}\n.player_info .field.highlighted, .player_info .field.active {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNjb3JlL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxwbGF5ZXItc2NvcmVcXHBsYXllci1zY29yZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNjb3JlL3BsYXllci1zY29yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtBQ0NKO0FERUU7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FDQUo7QURHRTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0RKO0FERUk7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0FDQU47QURJRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUNGSjtBRElJO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDRk47QURJTTtFQUNFLGlCQUFBO0FDRlI7QURPRTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNMSjtBRE9JO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDTE47QURTRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNQSjtBRFNJO0VBQ0UsZ0JBQUE7QUNQTjtBRFVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FDUko7QURVRTtFQUNFLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNSSjtBRFVJO0VBQ0UsVUFBQTtBQ1JOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNjb3JlL3BsYXllci1zY29yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGF5ZXJfaW5mbyB7XHJcbiAgcGFkZGluZzogMXZ3O1xyXG5cclxuICAubGluZSB7XHJcbiAgICBtYXJnaW46IDF2dyAwO1xyXG4gIH1cclxuXHJcbiAgLnNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjZ2dyArIDAuNXZoKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDVweCArIDF2dyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IGNhbGMoMjBweCArIDF2dyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2hvb3RzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgIC5zaG9vdCB7XHJcbiAgICAgIG1hcmdpbjogMC4xdnc7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXZ3O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDN2dztcclxuICAgICAgaGVpZ2h0OiAzdnc7XHJcbiAgICAgIGZvbnQtc2l6ZTogY2FsYyg2cHggKyAxdncpO1xyXG5cclxuICAgICAgJi50b3RhbCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zY29yZSB7XHJcbiAgICBmb250LXNpemU6IDMuMnZ3O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXZ3O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDF2dztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnZ3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5vdGUge1xyXG4gICAgZm9udC1zaXplOiAyLjB2dztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5maWVsZC1zZXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgfVxyXG4gIC5maWVsZCB7XHJcbiAgICBmb250LXNpemU6IGNhbGMoMC43dncgKyAwLjd2aCk7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuXHJcbiAgICAmLmhpZ2hsaWdodGVkLCAmLmFjdGl2ZSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5wbGF5ZXJfaW5mbyB7XG4gIHBhZGRpbmc6IDF2dztcbn1cbi5wbGF5ZXJfaW5mbyAubGluZSB7XG4gIG1hcmdpbjogMXZ3IDA7XG59XG4ucGxheWVyX2luZm8gLnNtYWxsIHtcbiAgZm9udC1zaXplOiBjYWxjKDAuNnZ3ICsgMC41dmgpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wbGF5ZXJfaW5mbyAubmFtZSB7XG4gIGZvbnQtc2l6ZTogY2FsYyg1cHggKyAxdncpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBsYXllcl9pbmZvIC5uYW1lIG1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IGNhbGMoMjBweCArIDF2dyk7XG59XG4ucGxheWVyX2luZm8gLnNob290cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ucGxheWVyX2luZm8gLnNob290cyAuc2hvb3Qge1xuICBtYXJnaW46IDAuMXZ3O1xuICBib3JkZXItcmFkaXVzOiAwLjV2dztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzdnc7XG4gIGhlaWdodDogM3Z3O1xuICBmb250LXNpemU6IGNhbGMoNnB4ICsgMXZ3KTtcbn1cbi5wbGF5ZXJfaW5mbyAuc2hvb3RzIC5zaG9vdC50b3RhbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnBsYXllcl9pbmZvIC5zY29yZSB7XG4gIGZvbnQtc2l6ZTogMy4ydnc7XG4gIGxldHRlci1zcGFjaW5nOiAwLjV2dztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5wbGF5ZXJfaW5mbyAuc2NvcmUgbGFiZWwge1xuICBmb250LXNpemU6IDF2dztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnZ3O1xufVxuLnBsYXllcl9pbmZvIC5ub3RlIHtcbiAgZm9udC1zaXplOiAydnc7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnBsYXllcl9pbmZvIC5ub3RlIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjV2dztcbn1cbi5wbGF5ZXJfaW5mbyAuZmllbGQtc2V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbn1cbi5wbGF5ZXJfaW5mbyAuZmllbGQge1xuICBmb250LXNpemU6IGNhbGMoMC43dncgKyAwLjd2aCk7XG4gIHdpZHRoOiA3MHB4O1xuICBvcGFjaXR5OiAwLjQ7XG59XG4ucGxheWVyX2luZm8gLmZpZWxkLmhpZ2hsaWdodGVkLCAucGxheWVyX2luZm8gLmZpZWxkLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerScoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player-score',
                templateUrl: './player-score.component.html',
                styleUrls: ['./player-score.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], null, { player: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hasContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scoreDisplayed: [{
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
    const option_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r29, " ");
} }
function PlayerSettingsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerSettingsComponent_div_13_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const player_r30 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.playground.removePlayer(player_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "remove_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r30.name);
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
        const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Player name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function PlayerSettingsComponent_Template_mat_autocomplete_optionSelected_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.playerSelected($event, _r25); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PlayerSettingsComponent_mat_option_8_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerSettingsComponent_Template_button_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.addPlayer(_r25); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlayerSettingsComponent_div_13_Template, 6, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playground.canAddPlayer())("matAutocomplete", _r26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getOptions());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playground.canAddPlayer());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.playground.game.players);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: [".add-player[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.player-table[_ngcontent-%COMP%] {\n  width: 60.8vw;\n}\n\n.player-table[_ngcontent-%COMP%]   .player-row[_ngcontent-%COMP%] {\n  height: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5px 15px;\n  font-weight: bold;\n  border-radius: 6px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNldHRpbmdzL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxwbGF5ZXItc2V0dGluZ3NcXHBsYXllci1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNldHRpbmdzL3BsYXllci1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FEQUU7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNldHRpbmdzL3BsYXllci1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtcGxheWVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucGxheWVyLXRhYmxlICB7XHJcbiAgd2lkdGg6IDYwLjh2dztcclxuICAucGxheWVyLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG59XHJcbiIsIi5hZGQtcGxheWVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnBsYXllci10YWJsZSB7XG4gIHdpZHRoOiA2MC44dnc7XG59XG4ucGxheWVyLXRhYmxlIC5wbGF5ZXItcm93IHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59Il19 */"] });
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
/* harmony import */ var _components_game_rules_game_rules_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~components/game-rules/game-rules.component */ "./src/app/shared/components/game-rules/game-rules.component.ts");
/* harmony import */ var _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~components/player-settings/player-settings.component */ "./src/app/shared/components/player-settings/player-settings.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






const _c0 = ["*"];
class SettingsComponent {
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], inputs: { playground: "playground", title: "title", rules: "rules" }, ngContentSelectors: _c0, decls: 15, vars: 3, consts: [[1, "settings"], [3, "playground"], ["mat-raised-button", "", 1, "button", "big", 3, "click"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-game-rules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Players");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-player-settings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_11_listener($event) { return ctx.playground.newGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_13_listener($event) { return ctx.playground.quit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.rules);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx.playground);
    } }, directives: [_components_game_rules_game_rules_component__WEBPACK_IMPORTED_MODULE_1__["GameRulesComponent"], _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_2__["PlayerSettingsComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".settings {\n  padding: 2vh 2vw;\n}\n.settings h2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.settings mat-divider {\n  clear: both;\n  margin: 5px 0;\n}\n.settings .field-set {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.settings .button, .settings mat-form-field {\n  margin: 3px;\n  height: 45px;\n}\n.settings .button.big, .settings mat-form-field.big {\n  width: 30.4vw;\n}\n.settings .button.medium, .settings mat-form-field.medium {\n  width: 20.2vw;\n}\n.settings .button.shortmedium, .settings mat-form-field.shortmedium {\n  width: 15vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2V0dGluZ3MvRDpcXERldmVsb3BtZW50XFxkYXJ0cy1zY29yZWJvYXJkLW5nL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHNldHRpbmdzXFxzZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGO0FEQ0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDQUo7QURHRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNESjtBRElFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNGSjtBRElJO0VBQ0UsYUFBQTtBQ0ZOO0FES0k7RUFDRSxhQUFBO0FDSE47QURNSTtFQUNFLFdBQUE7QUNKTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdzIHtcclxuICBwYWRkaW5nOiAydmggMnZ3O1xyXG5cclxuICBoMiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIG1hdC1kaXZpZGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICB9XHJcblxyXG4gIC5maWVsZC1zZXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIC5idXR0b24sIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG5cclxuICAgICYuYmlnIHtcclxuICAgICAgd2lkdGg6IDMwLjR2dztcclxuICAgIH1cclxuXHJcbiAgICAmLm1lZGl1bSB7XHJcbiAgICAgIHdpZHRoOiAyMC4ydnc7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zaG9ydG1lZGl1bSB7XHJcbiAgICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuc2V0dGluZ3Mge1xuICBwYWRkaW5nOiAydmggMnZ3O1xufVxuLnNldHRpbmdzIGgyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZXR0aW5ncyBtYXQtZGl2aWRlciB7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDVweCAwO1xufVxuLnNldHRpbmdzIC5maWVsZC1zZXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uc2V0dGluZ3MgLmJ1dHRvbiwgLnNldHRpbmdzIG1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAzcHg7XG4gIGhlaWdodDogNDVweDtcbn1cbi5zZXR0aW5ncyAuYnV0dG9uLmJpZywgLnNldHRpbmdzIG1hdC1mb3JtLWZpZWxkLmJpZyB7XG4gIHdpZHRoOiAzMC40dnc7XG59XG4uc2V0dGluZ3MgLmJ1dHRvbi5tZWRpdW0sIC5zZXR0aW5ncyBtYXQtZm9ybS1maWVsZC5tZWRpdW0ge1xuICB3aWR0aDogMjAuMnZ3O1xufVxuLnNldHRpbmdzIC5idXR0b24uc2hvcnRtZWRpdW0sIC5zZXR0aW5ncyBtYXQtZm9ybS1maWVsZC5zaG9ydG1lZGl1bSB7XG4gIHdpZHRoOiAxNXZ3O1xufSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], null, { playground: [{
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
        this.darkTheme = 0;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




const FIELDS_COUNT = 21;
const MAXIMUM_NUMBER_OF_PLAYERS = 6;
class Playground {
    constructor(application, game, route, dialogService, soundService, minimumNumberOfPlayers = 1, maximumNumberOfPlayers) {
        this.application = application;
        this.game = game;
        this.route = route;
        this.dialogService = dialogService;
        this.soundService = soundService;
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
            this.multiplier = 1;
            const winners = this.game.players.filter(p => p.win);
            if (winners.length > 0) {
                if ((this.game.victoryFirst || this.game.getNumberOfPlayers() - winners.length <= 1) || !this.game.victoryFirst) {
                    if (!this.extraEndingMsg) {
                        this.extraEndingMsg = 'Round: #' + (this.game.round + 1);
                    }
                    this.dialogService.openDialog('Game Over!', this.extraEndingMsg, this.getTheFinalResult());
                    this.newGame(true);
                }
                else {
                    while (this.game.getActualPlayer().win) {
                        this.game.nextPlayer();
                    }
                }
            }
            const activePlayers = this.game.players.filter(p => !this.getPlayerState(p) || !this.getPlayerState(p).isInactive());
            if (!activePlayers.length) {
                if (!this.extraEndingMsg) {
                    this.extraEndingMsg = 'Round: #' + (this.game.round + 1);
                }
                this.dialogService.openDialog('Game Over!', this.extraEndingMsg, this.getTheFinalResult());
                this.newGame(true);
            }
            this.throwEnabled = true;
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
            this.dialogService.openErrorDialog('Error!', 'Number of players are incorrect.');
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
Playground.ɵfac = function Playground_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinvalidFactory"](); };
Playground.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: Playground });


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
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~services/sound.service */ "./src/app/shared/services/sound.service.ts");




const APPLICATION_KEY = 'ApplicationSettings';
const PLAYER_KEY = 'Players';
class ApplicationStateService {
    constructor(soundService) {
        this.soundService = soundService;
        this.settings = new _models_application_settings_model__WEBPACK_IMPORTED_MODULE_1__["ApplicationSettings"]();
        const data = localStorage.getItem(APPLICATION_KEY);
        if (data) {
            this.settings = JSON.parse(data);
        }
        this.setTheme();
    }
    toggleDarkTheme() {
        this.soundService.fart();
        this.settings.darkTheme = (this.settings.darkTheme + 1) % 3;
        this.setTheme();
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
        document.body.className = document.body.className.replace('dark-theme', '');
        document.body.className = document.body.className.replace('dark-red', '');
        if (this.settings.darkTheme === 1) {
            document.body.classList.add('dark-theme');
        }
        else if (this.settings.darkTheme === 2) {
            document.body.classList.add('dark-red');
        }
    }
    saveSettings() {
        localStorage.setItem(APPLICATION_KEY, JSON.stringify(this.settings));
    }
}
ApplicationStateService.ɵfac = function ApplicationStateService_Factory(t) { return new (t || ApplicationStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_2__["SoundService"])); };
ApplicationStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApplicationStateService, factory: ApplicationStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _services_sound_service__WEBPACK_IMPORTED_MODULE_2__["SoundService"] }]; }, null); })();


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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");





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
    openErrorDialog(title = '', content = '') {
        return this.dialog.open(_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"], {
            panelClass: 'error-dialog',
            data: { title, content, players: [] },
        });
    }
    openDartsTable(fieldIndexes, primaryFieldIndexes) {
        return this.dialog.open(_components_darts_table_darts_table_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DartsTableDialogComponent"], {
            data: { field: fieldIndexes, primary: primaryFieldIndexes }
        });
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


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
    isTheBestPlayer(actPlayer) {
        let max = this.players[0].score;
        this.players.forEach(player => {
            max = player.score > max ? player.score : max;
        });
        return actPlayer.score === max;
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
    fart() {
        this.play('perfect-fart.mp3');
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
/* harmony import */ var _components_game_rules_game_rules_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~components/game-rules/game-rules.component */ "./src/app/shared/components/game-rules/game-rules.component.ts");
/* harmony import */ var _components_darts_table_darts_table_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/darts-table/darts-table-dialog.component */ "./src/app/shared/components/darts-table/darts-table-dialog.component.ts");













const components = [_components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_6__["NumberPlateComponent"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["GameToolbarComponent"], _components_game_rules_game_rules_component__WEBPACK_IMPORTED_MODULE_10__["GameRulesComponent"], _components_darts_table_darts_table_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DartsTableDialogComponent"],
    _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_7__["PlayerSettingsComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_9__["PlayerScoreComponent"]];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_6__["NumberPlateComponent"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["GameToolbarComponent"], _components_game_rules_game_rules_component__WEBPACK_IMPORTED_MODULE_10__["GameRulesComponent"], _components_darts_table_darts_table_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DartsTableDialogComponent"],
        _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_7__["PlayerSettingsComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_9__["PlayerScoreComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_6__["NumberPlateComponent"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["GameToolbarComponent"], _components_game_rules_game_rules_component__WEBPACK_IMPORTED_MODULE_10__["GameRulesComponent"], _components_darts_table_darts_table_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DartsTableDialogComponent"],
        _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_7__["PlayerSettingsComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_9__["PlayerScoreComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]],
                declarations: components,
                exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], ...components],
                entryComponents: [_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _components_darts_table_darts_table_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DartsTableDialogComponent"]]
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
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~services/application-state.service */ "./src/app/shared/services/application-state.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~services/dialog.service */ "./src/app/shared/services/dialog.service.ts");
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/sound.service */ "./src/app/shared/services/sound.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~components/settings/settings.component */ "./src/app/shared/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/player-score/player-score.component */ "./src/app/shared/components/player-score/player-score.component.ts");
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ "./src/app/shared/components/number-plate/number-plate.component.ts");

















function X01Component_app_settings_1_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.settings.setStartValue(101); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "101 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.settings.setStartValue(201); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "201 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.settings.setStartValue(301); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "301 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.settings.setStartValue(501); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "501 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.settings.setStartValue(701); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "701 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.settings.setStartValue(901); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "901 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Check In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.settings.setStart(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Single ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.settings.setStart(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Double ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.settings.setStart(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Triple ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Check Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.settings.setCheckout(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Single ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.settings.setCheckout(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Double ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.settings.setCheckout(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Triple ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.settings.setCheckout(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "None ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "X01")("playground", ctx_r39.playground)("rules", "All players start with 301/501 points and attempt to reach zero. If a player scores more " + "than the total required to reach zero, the player \u201Cbusts\u201D and the score returns to the score that " + "was existing at the start of the turn.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r39.settings.startValue === 101 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r39.settings.startValue === 201 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r39.settings.startValue === 301 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r39.settings.startValue === 501 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r39.settings.startValue === 701 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r39.settings.startValue === 901 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r39.settings.start === 1 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r39.settings.start === 2 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r39.settings.start === 3 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r39.settings.checkout === 1 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r39.settings.checkout === 2 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r39.settings.checkout === 3 ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r39.settings.checkout === 4 ? "primary" : "");
} }
function X01Component_app_game_toolbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 8);
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r40.playground);
} }
function X01Component_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r58 = ctx.$implicit;
    const i_r59 = ctx.index;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r59 === ctx_r57.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r58)("hasContent", false);
} }
function X01Component_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, X01Component_ng_container_4_div_1_Template, 2, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r41.game.players);
} }
function X01Component_app_number_plate_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 8);
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r42.playground);
} }
class X01Component extends _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"] {
    constructor(application, game, route, dialogService, soundService) {
        super(application, game, route, dialogService, soundService);
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
}
X01Component.ɵfac = function X01Component_Factory(t) { return new (t || X01Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_8__["SoundService"])); };
X01Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: X01Component, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 4, consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]], template: function X01Component_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_15__["NumberPlateComponent"]], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](X01Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './x01.component.html',
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]],
            }]
    }], function () { return [{ type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationStateService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] }, { type: _services_sound_service__WEBPACK_IMPORTED_MODULE_8__["SoundService"] }]; }, null); })();


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