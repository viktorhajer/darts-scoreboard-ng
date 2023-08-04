"use strict";
(self["webpackChunkdarts_scoreboard_ng"] = self["webpackChunkdarts_scoreboard_ng"] || []).push([["main"],{

/***/ 99893:
/*!***********************************!*\
  !*** ./src/app/app-game-types.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
const routes = [{
  path: 'x01',
  data: {
    name: 'Classic X01',
    color: '#009688',
    icon: 'emoji_food_beverage',
    bot: true
  }
}, {
  path: 'cricket',
  data: {
    name: 'Ultimate Cricket',
    color: '#0a756b',
    icon: 'sports_cricket'
  }
}, {
  path: 'around-clock',
  data: {
    name: 'Around The Clock',
    color: '#0f5851',
    icon: 'cached',
    bot: true
  }
}, {
  path: 'shanghai',
  data: {
    name: 'Shanghai, Halve It',
    color: '#0f5851',
    icon: 'emoji_symbols'
  }
}, {
  path: 'fives',
  data: {
    name: 'Fives',
    color: '#009688',
    icon: 'add_box'
  }
}, {
  path: 'hare-and-hound',
  data: {
    name: 'Hare and Hound',
    color: '#0a756b',
    icon: 'cruelty_free'
  }
}, {
  path: 'knockout',
  data: {
    name: 'Knockout',
    color: '#009688',
    icon: 'sports_mma'
  }
}, {
  path: 'killer',
  data: {
    name: 'Killer',
    color: '#0a756b',
    icon: 'gps_fixed'
  }
}, {
  path: 'capture-the-flag',
  data: {
    name: 'Capture the Flag',
    color: '#0a756b',
    icon: 'flag'
  }
}, {
  path: 'duel',
  data: {
    name: 'Duel',
    color: '#0a756b',
    icon: 'emoji_events'
  }
}, {
  path: 'imitator',
  data: {
    name: 'Imitator',
    color: '#0a756b',
    icon: 'group'
  }
}, {
  path: 'scam',
  data: {
    name: 'Scam',
    color: '#0a756b',
    icon: 'group_work',
    bot: true
  }
}];

/***/ }),

/***/ 87983:
/*!********************************!*\
  !*** ./src/app/app-routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _shared_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/menu/menu.component */ 13686);
/* harmony import */ var _x01_x01_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./x01/x01.module */ 18465);
/* harmony import */ var _cricket_cricket_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cricket/cricket.module */ 50925);
/* harmony import */ var _aroundclock_around_clock_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aroundclock/around-clock.module */ 87837);
/* harmony import */ var _shanghai_shanghai_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shanghai/shanghai.module */ 71134);
/* harmony import */ var _killer_killer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./killer/killer.module */ 67301);
/* harmony import */ var _fives_fives_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fives/fives.module */ 78375);
/* harmony import */ var _hare_and_hound_hare_and_hound_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hare-and-hound/hare-and-hound.module */ 98451);
/* harmony import */ var _knockout_knockout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./knockout/knockout.module */ 97399);
/* harmony import */ var _capture_the_flag_capture_the_flag_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./capture-the-flag/capture-the-flag.module */ 53091);
/* harmony import */ var _imitator_imitator_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./imitator/imitator.module */ 87597);
/* harmony import */ var _scam_scam_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scam/scam.module */ 85781);
/* harmony import */ var _duel_duel_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./duel/duel.module */ 90260);













const routes = [{
  path: '',
  component: _shared_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent
}, {
  path: 'x01',
  loadChildren: () => _x01_x01_module__WEBPACK_IMPORTED_MODULE_1__.X01Module
}, {
  path: 'cricket',
  loadChildren: () => _cricket_cricket_module__WEBPACK_IMPORTED_MODULE_2__.CricketModule
}, {
  path: 'around-clock',
  loadChildren: () => _aroundclock_around_clock_module__WEBPACK_IMPORTED_MODULE_3__.AroundClockModule
}, {
  path: 'shanghai',
  loadChildren: () => _shanghai_shanghai_module__WEBPACK_IMPORTED_MODULE_4__.ShanghaiModule
}, {
  path: 'fives',
  loadChildren: () => _fives_fives_module__WEBPACK_IMPORTED_MODULE_6__.FivesModule
}, {
  path: 'hare-and-hound',
  loadChildren: () => _hare_and_hound_hare_and_hound_module__WEBPACK_IMPORTED_MODULE_7__.HareAndHoundModule
}, {
  path: 'knockout',
  loadChildren: () => _knockout_knockout_module__WEBPACK_IMPORTED_MODULE_8__.KnockoutModule
}, {
  path: 'killer',
  loadChildren: () => _killer_killer_module__WEBPACK_IMPORTED_MODULE_5__.KillerModule
}, {
  path: 'capture-the-flag',
  loadChildren: () => _capture_the_flag_capture_the_flag_module__WEBPACK_IMPORTED_MODULE_9__.CaptureTheFlagModule
}, {
  path: 'duel',
  loadChildren: () => _duel_duel_module__WEBPACK_IMPORTED_MODULE_12__.DuelModule
}, {
  path: 'imitator',
  loadChildren: () => _imitator_imitator_module__WEBPACK_IMPORTED_MODULE_10__.ImitatorModule
}, {
  path: 'scam',
  loadChildren: () => _scam_scam_module__WEBPACK_IMPORTED_MODULE_11__.ScamModule
}, {
  path: '**',
  redirectTo: ''
}];

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route-animation */ 56067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~services/application-state.service */ 12711);
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~services/sound.service */ 34431);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 57822);






const _c0 = ["audioElement"];
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
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_1__.ApplicationStateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_2__.SoundService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  viewQuery: function AppComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.audioElementRef = _t.first);
    }
  },
  decls: 9,
  vars: 7,
  consts: [["audioElement", ""], ["outlet", "outlet"], [1, "theme-chooser"], [1, "button", "icon", 3, "click"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "audio", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "router-outlet", null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2)(6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() {
        return ctx.application.toggleDetails();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "track_changes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mobile", ctx.application.isMobile)("detailed", ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@routeAnimations", _r1 && _r1.isActivated && _r1.activatedRoute);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("primary", ctx.application.settings.details);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
  styles: [".theme-chooser[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIudGhlbWUtY2hvb3NlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: [_route_animation__WEBPACK_IMPORTED_MODULE_0__.slideInAnimation]
  }
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing */ 87983);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);








class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_2__.routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 71655:
/*!*******************************************************!*\
  !*** ./src/app/aroundclock/around-clock.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AroundClockComponent": () => (/* binding */ AroundClockComponent)
/* harmony export */ });
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground.model */ 37954);
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../route-animation */ 56067);
/* harmony import */ var _models_around_clock_state_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/around-clock.state.model */ 72079);
/* harmony import */ var _models_around_clock_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/around-clock.settings.model */ 38154);
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~services/bot.service */ 93030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/application-state.service */ 12711);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/game.service */ 59208);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~services/dialog.service */ 74564);
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/sound.service */ 34431);
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/statistics.service */ 17036);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ 25513);
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ 61868);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~components/settings/settings.component */ 33668);
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/player-score/player-score.component */ 99078);
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ 16218);




















function AroundClockComponent_app_settings_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-settings", 4)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r5.settings.toggleJump());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, " Enable Jump ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r7.settings.togglePunishment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, " Punishment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r8.settings.toggleSaboteur());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, " Saboteur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r9.settings.togglePromoter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, " Promoter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r10.settings.toggleTreeLives());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, " Tree Lives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r11.settings.toggleFiveLives());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](15, " Five Lives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r12.settings.toggleSevenLives());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17, " Seven Lives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r13.settings.toggleTenLives());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19, " Ten Lives ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](20, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r14.settings.toggleFirstDeath());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22, " First Death ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r15.settings.togglePalFirst());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, " Pal First ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r16.settings.setFavorite());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26, " FAV ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r17.settings.setInverseFavorite());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, " iFAV ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](29, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31, "Field's order");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r18.settings.setStyle(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33, " Ascending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r19.settings.setStyle(4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](35, " Descending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r20.settings.setStyle(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](37, " Clockwise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r21.settings.setStyle(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39, " RClockwise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r22.settings.setStyle(8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](41, " TripleClock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r23.settings.setStyle(9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](43, " ZoneClock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](44, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r24.settings.setStyle(3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](45, " Random ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r25.settings.setStyle(6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](47, " Random11 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r26.settings.setStyle(5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](49, " Recurrence ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](50, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r27.settings.setStyle(7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](51, " Pirate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r0.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.jump);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.punishment);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.saboteur);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.promoter);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.life === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.life === 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.life === 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.life === 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.firstDeath);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.palFirst);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.style == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.style == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.style == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.style == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.style == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.style == 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.style == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.style == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.style == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.style == 7);
  }
}
function AroundClockComponent_app_game_toolbar_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-game-toolbar", 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r1.playground);
  }
}
function AroundClockComponent_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-player-score", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r29 = ctx.$implicit;
    const i_r30 = ctx.index;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMapInterpolate2"]("player\n        ", i_r30 === ctx_r28.game.actualPlayerIndex ? "highlighted" : "", "\n        ", ctx_r28.settings.life !== 0 && player_r29.isInactive() ? "inactive" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("player", player_r29)("scoreDisplayed", false)("lifeDisplayed", ctx_r28.settings.life !== 0)("hasContent", false);
  }
}
function AroundClockComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AroundClockComponent_div_4_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r31.toggleHiddenInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, AroundClockComponent_div_4_div_3_Template, 2, 8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("hidden", ctx_r2.hiddenInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r2.getDistanceFromRandom());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.game.players);
  }
}
function AroundClockComponent_app_number_plate_visual_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-number-plate-visual", 4);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r3.playground);
  }
}
function AroundClockComponent_app_number_plate_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-number-plate", 4);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r4.playground);
  }
}
class AroundClockComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground {
  constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
    super('Around The Clock', application, game, route, dialogService, soundService, botService, statisticsService, 'around-clock', 2);
    this.hiddenInfo = true;
    this.settings = new _models_around_clock_settings_model__WEBPACK_IMPORTED_MODULE_3__.AroundClockSettings();
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
    if (this.settings.fields.length - 1 < state.actFieldIndex) {
      player.setWin();
    } else if (this.game.isTheLastThrow()) {
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
      } else if (!!activePlayers.length) {
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
    } else if (target === index && this.botService.isTriplePoint()) {
      this.triplePoint();
    }
    setTimeout(() => {
      this.throwNumber([this.isFieldEnabled(index) ? _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground.getFieldValueFromIndex(index) : 0, _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground.getFieldValueFromIndex(index)]);
    }, _services_bot_service__WEBPACK_IMPORTED_MODULE_4__.PLAYER_DELAY);
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
      return this.game.players.filter(p => p !== this.game.getActualPlayer()).some(p => fieldIndex === this.getFieldIndex(this.getPlayerState(p).actFieldIndex));
    }
    return false;
  }
  getFieldNote(fieldIndex) {
    const owners = this.game.players.filter(p => this.getFieldIndex(this.getPlayerState(p).actFieldIndex) === fieldIndex).map(p => p.name.substr(0, 1));
    return !!owners.length ? owners.join(',') : '';
  }
  customReset() {
    this.game.players.forEach(player => {
      player.life = this.settings.life;
      player.state = new _models_around_clock_state_model__WEBPACK_IMPORTED_MODULE_2__.AroundClockState();
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
        if (this.getFieldIndex(otherPlayerState.actFieldIndex) === realFieldIndex && (!targetedField || this.settings.palFirst && otherPlayerState.actFieldIndex != 0)) {
          if (this.settings.saboteur) {
            hasChanges = true;
            otherPlayerState.decreaseActFieldIndex(this.settings.jump ? originalMulti : 1);
          } else if (otherPlayerState.actFieldIndex !== this.settings.fields.length - 1) {
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
AroundClockComponent.ɵfac = function AroundClockComponent_Factory(t) {
  return new (t || AroundClockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__.ApplicationStateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_8__.SoundService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_4__.BotService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_9__.StatisticsService));
};
AroundClockComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: AroundClockComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
  decls: 7,
  vars: 7,
  consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 4, "ngIf"], [3, "playground"], [1, "button", "shortmedium", 3, "click"], [1, "player_container"], [1, "hidden-info", 3, "click"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "scoreDisplayed", "lifeDisplayed", "hasContent"]],
  template: function AroundClockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, AroundClockComponent_app_settings_1_Template, 52, 41, "app-settings", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, AroundClockComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, AroundClockComponent_div_4_Template, 4, 4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, AroundClockComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, AroundClockComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDivider, _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_10__.NumberPlateComponent, _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_11__.GameToolbarComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__.SettingsComponent, _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_13__.PlayerScoreComponent, _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_14__.NumberPlateVisualComponent],
  encapsulation: 2,
  data: {
    animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__.slideInAnimation]
  }
});

/***/ }),

/***/ 87837:
/*!****************************************************!*\
  !*** ./src/app/aroundclock/around-clock.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AroundClockModule": () => (/* binding */ AroundClockModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _around_clock_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./around-clock.component */ 71655);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





class AroundClockModule {}
AroundClockModule.ɵfac = function AroundClockModule_Factory(t) {
  return new (t || AroundClockModule)();
};
AroundClockModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AroundClockModule
});
AroundClockModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{
    path: '',
    component: _around_clock_component__WEBPACK_IMPORTED_MODULE_0__.AroundClockComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AroundClockModule, {
    declarations: [_around_clock_component__WEBPACK_IMPORTED_MODULE_0__.AroundClockComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 38154:
/*!*******************************************************************!*\
  !*** ./src/app/aroundclock/models/around-clock.settings.model.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AroundClockSettings": () => (/* binding */ AroundClockSettings)
/* harmony export */ });
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground.model */ 37954);

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
    return [...Array(_models_playground_model__WEBPACK_IMPORTED_MODULE_0__.FIELDS_COUNT).keys()];
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
    for (let i = size - 1; i >= 0; i--) {
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
      } else {
        fields[random] = 20;
      }
    }
    return fields;
  }
  static getRecurrence() {
    let fields = AroundClockSettings.getBaseFields();
    const randomFields = [];
    for (let i = fields.length - 1; i >= 0; i--) {
      const random = Math.floor(Math.random() * fields.length);
      randomFields.push(fields[random]);
    }
    return randomFields;
  }
}

/***/ }),

/***/ 72079:
/*!****************************************************************!*\
  !*** ./src/app/aroundclock/models/around-clock.state.model.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AroundClockState": () => (/* binding */ AroundClockState)
/* harmony export */ });
/* harmony import */ var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground-state.model */ 31822);

class AroundClockState extends _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__.PlaygroundState {
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

/***/ 37399:
/*!****************************************************************!*\
  !*** ./src/app/capture-the-flag/capture-the-flag.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaptureTheFlagComponent": () => (/* binding */ CaptureTheFlagComponent)
/* harmony export */ });
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground.model */ 37954);
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../route-animation */ 56067);
/* harmony import */ var _models_capture_the_flag_state_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/capture-the-flag.state.model */ 49348);
/* harmony import */ var _models_capture_the_flag_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/capture-the-flag.settings.model */ 42968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~services/application-state.service */ 12711);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/game.service */ 59208);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/dialog.service */ 74564);
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~services/sound.service */ 34431);
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/bot.service */ 93030);
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/statistics.service */ 17036);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ 25513);
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ 61868);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~components/settings/settings.component */ 33668);
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/player-score/player-score.component */ 99078);
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ 16218);


















function CaptureTheFlagComponent_app_settings_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-settings", 4)(1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CaptureTheFlagComponent_app_settings_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r5.settings.randomCity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "City (5) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CaptureTheFlagComponent_app_settings_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r7.settings.randomCountry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Country (10) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CaptureTheFlagComponent_app_settings_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r8.settings.randomContinent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Contin. (20) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CaptureTheFlagComponent_app_settings_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r9.settings.toggleNoScore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, "No score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r0.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.style === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.style === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.style === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.noScore);
  }
}
function CaptureTheFlagComponent_app_game_toolbar_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-game-toolbar", 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r1.playground);
  }
}
function CaptureTheFlagComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-player-score", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMapInterpolate1"]("player ", i_r12 === ctx_r10.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("player", player_r11);
  }
}
function CaptureTheFlagComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CaptureTheFlagComponent_div_4_div_1_Template, 2, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.game.players);
  }
}
function CaptureTheFlagComponent_app_number_plate_visual_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-number-plate-visual", 4);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r3.playground);
  }
}
function CaptureTheFlagComponent_app_number_plate_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-number-plate", 4);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r4.playground);
  }
}
class CaptureTheFlagComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground {
  constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
    super('Capture the Flag', application, game, route, dialogService, soundService, botService, statisticsService, 'ctf');
    this.settings = new _models_capture_the_flag_settings_model__WEBPACK_IMPORTED_MODULE_3__.CaptureTheFlagSettings();
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
    } else if (fieldIndex === 20) {
      state.increaseFieldCount(this.settings.fields[this.game.actualFieldIndex], 3);
      player.score += this.settings.noScore ? 1 : this.settings.fields[this.game.actualFieldIndex] + 1;
      this.checkWinner(player);
      this.game.actualFieldIndex++;
    }
  }
  checkPlayerState(player) {
    if (this.game.actualFieldIndex === this.settings.fields.length) {
      this.game.players.forEach(p => p.setWin(this.game.isTheBestPlayer(p)));
    } else if (this.game.isTheLastThrow()) {
      this.game.nextPlayer();
    }
  }
  getFieldValue(player, fieldIndex) {
    const fieldCount = this.getPlayerState(player).getFieldCount(fieldIndex);
    if (fieldCount === 0) {
      return '○○○';
    } else {
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
    this.game.players.forEach(player => player.state = new _models_capture_the_flag_state_model__WEBPACK_IMPORTED_MODULE_2__.CaptureTheFlagState());
    if (this.settings.style === 0) {
      this.settings.randomCity();
    } else if (this.settings.style === 1) {
      this.settings.randomCountry();
    } else {
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
CaptureTheFlagComponent.ɵfac = function CaptureTheFlagComponent_Factory(t) {
  return new (t || CaptureTheFlagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_4__.ApplicationStateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_5__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_7__.SoundService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_8__.BotService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_9__.StatisticsService));
};
CaptureTheFlagComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: CaptureTheFlagComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
  decls: 7,
  vars: 7,
  consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 4, "ngIf"], [3, "playground"], [1, "button", "shortmedium", 3, "click"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player"]],
  template: function CaptureTheFlagComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CaptureTheFlagComponent_app_settings_1_Template, 9, 9, "app-settings", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, CaptureTheFlagComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, CaptureTheFlagComponent_div_4_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, CaptureTheFlagComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, CaptureTheFlagComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_10__.NumberPlateComponent, _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_11__.GameToolbarComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__.SettingsComponent, _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_13__.PlayerScoreComponent, _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_14__.NumberPlateVisualComponent],
  encapsulation: 2,
  data: {
    animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__.slideInAnimation]
  }
});

/***/ }),

/***/ 53091:
/*!*************************************************************!*\
  !*** ./src/app/capture-the-flag/capture-the-flag.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaptureTheFlagModule": () => (/* binding */ CaptureTheFlagModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _capture_the_flag_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capture-the-flag.component */ 37399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





class CaptureTheFlagModule {}
CaptureTheFlagModule.ɵfac = function CaptureTheFlagModule_Factory(t) {
  return new (t || CaptureTheFlagModule)();
};
CaptureTheFlagModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: CaptureTheFlagModule
});
CaptureTheFlagModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{
    path: '',
    component: _capture_the_flag_component__WEBPACK_IMPORTED_MODULE_1__.CaptureTheFlagComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CaptureTheFlagModule, {
    declarations: [_capture_the_flag_component__WEBPACK_IMPORTED_MODULE_1__.CaptureTheFlagComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 42968:
/*!****************************************************************************!*\
  !*** ./src/app/capture-the-flag/models/capture-the-flag.settings.model.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaptureTheFlagSettings": () => (/* binding */ CaptureTheFlagSettings)
/* harmony export */ });
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground.model */ 37954);

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
    return [...Array(_models_playground_model__WEBPACK_IMPORTED_MODULE_0__.FIELDS_COUNT).keys()];
  }
  static getRandom(size) {
    let fields = CaptureTheFlagSettings.getBaseFields();
    if (!size) {
      size = fields.length;
    }
    const randomFields = [];
    for (let i = size - 1; i >= 0; i--) {
      const random = Math.floor(Math.random() * fields.length);
      if (fields[random] === 20) {
        i++;
      } else {
        randomFields.push(fields[random]);
        fields = [...fields.slice(0, random), ...fields.slice(random + 1)];
      }
    }
    return randomFields.sort((a, b) => Number(a) - Number(b));
  }
}

/***/ }),

/***/ 49348:
/*!*************************************************************************!*\
  !*** ./src/app/capture-the-flag/models/capture-the-flag.state.model.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaptureTheFlagState": () => (/* binding */ CaptureTheFlagState)
/* harmony export */ });
/* harmony import */ var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground-state.model */ 31822);

class CaptureTheFlagState extends _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__.PlaygroundState {
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

/***/ 51282:
/*!**********************************************!*\
  !*** ./src/app/cricket/cricket.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CricketComponent": () => (/* binding */ CricketComponent)
/* harmony export */ });
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground.model */ 37954);
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../route-animation */ 56067);
/* harmony import */ var _models_cricet_settings_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/cricet.settings.model */ 75630);
/* harmony import */ var _models_cricet_state_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/cricet.state.model */ 57351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~services/application-state.service */ 12711);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/game.service */ 59208);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/dialog.service */ 74564);
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~services/sound.service */ 34431);
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/bot.service */ 93030);
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/statistics.service */ 17036);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ 25513);
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ 61868);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~components/settings/settings.component */ 33668);
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/player-score/player-score.component */ 99078);
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ 16218);



















function CricketComponent_app_settings_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_button_3_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r9);
      const i_r7 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r8.settings.setNumber(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const numb_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r5.settings.isFieldAllowed(i_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", numb_r6 === 21 ? "B" : numb_r6, " ");
  }
}
function CricketComponent_app_settings_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-settings", 4)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, CricketComponent_app_settings_1_button_3_Template, 2, 3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r10.settings.top());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Top");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r12.settings.bottom());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, "Bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r13.settings.left());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r14.settings.right());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Right");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r15.settings.black());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "Black");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r16.settings.white());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, "White");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r17.settings.high());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r18.settings.small());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20, "Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r19.settings.odd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22, "Odd");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r20.settings.even());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, "Even");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r21.settings.prime());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26, "Prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r22.settings.notPrime());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, "Not prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r23.settings.cross());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30, "Cross");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r24.settings.randomize(6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32, "Random 06");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r25.settings.randomize(12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34, "Random 12");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r26.settings.all());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](37, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39, "Style");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r27.settings.setStyle(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](41, "Classic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r28.settings.setStyle(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](43, "Cut-Throat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](44, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r29.settings.setStyle(3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](45, "No Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r30.settings.setStyle(4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](47, "Black Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r0.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.settings.getNumbers());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.style == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.style == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.style == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.style == 4);
  }
}
function CricketComponent_app_game_toolbar_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-game-toolbar", 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r1.playground);
  }
}
function CricketComponent_div_4_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const field_r35 = ctx.$implicit;
    const player_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMapInterpolate2"]("field ", ctx_r34.isActiveField(player_r32, field_r35) && ctx_r34.settings.isBlackOutGame() ? "active" : "", " ", !ctx_r34.isFieldDoneForPlayer(player_r32, field_r35) ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", field_r35 === 20 ? "B" : field_r35 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r34.getFieldValue(player_r32, field_r35));
  }
}
function CricketComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function CricketComponent_div_4_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r38);
      const player_r32 = restoredCtx.$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r37.changePlayerToDisplay(player_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "app-player-score", 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, CricketComponent_div_4_div_1_div_3_Template, 4, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const player_r32 = ctx.$implicit;
    const i_r33 = ctx.index;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMapInterpolate1"]("player ", i_r33 === ctx_r31.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("player", player_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r31.settings.fields);
  }
}
function CricketComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CricketComponent_div_4_div_1_Template, 4, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.game.players);
  }
}
function CricketComponent_app_number_plate_visual_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-number-plate-visual", 4);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r3.playground);
  }
}
function CricketComponent_app_number_plate_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-number-plate", 4);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r4.playground);
  }
}
class CricketComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground {
  constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
    super('Ultimate Cricket', application, game, route, dialogService, soundService, botService, statisticsService, 'cricket');
    this.settings = new _models_cricet_settings_model__WEBPACK_IMPORTED_MODULE_2__.CricketSettings();
  }
  calculatePoints(player, fieldIndex, score) {
    if (this.settings.fields.indexOf(fieldIndex) !== -1 && !this.isFieldClosed(fieldIndex)) {
      const playerFieldCount = this.getPlayerState(player).getFieldCount(fieldIndex);
      if (!this.settings.isBlackOutGame() || this.settings.fields[this.getPlayerState(player).getActFieldIndex()] === fieldIndex || this.isFieldDoneForPlayer(player, fieldIndex)) {
        if (this.isFieldClosedForOthers(player, fieldIndex) && playerFieldCount + this.multiplier > 3) {
          this.getPlayerState(player).setFieldCount(fieldIndex, 3);
        } else {
          let multiplier = this.multiplier;
          if (playerFieldCount < 3 && playerFieldCount + this.multiplier >= 3) {
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
    this.game.players.forEach(p => p.setWin(this.isPlayerDone(p) && (!punishStyle && this.game.isTheBestPlayer(p) || punishStyle && this.game.isTheWorstPlayer(p))));
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
    } else if (playerFieldCount > 3 && !punishStyle && !this.settings.isNoScoreGame()) {
      return this.getFieldScore(player, fieldIndex) + '';
    } else if (playerFieldCount === 3 || (punishStyle || this.settings.isNoScoreGame()) && playerFieldCount > 3) {
      str += '●●●';
    } else {
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
    return this.isFieldEnabled(fieldIndex) && !this.isFieldDoneForPlayer(this.getPlayerToDisplay(), fieldIndex);
  }
  isSecondaryField(fieldIndex) {
    return this.isFieldEnabled(fieldIndex) && this.isFieldDoneForPlayer(this.getPlayerToDisplay(), fieldIndex);
  }
  getFieldNote(fieldIndex) {
    if (this.isPrimaryField(fieldIndex)) {
      const playerFieldCount = this.getPlayerState(this.getPlayerToDisplay()).getFieldCount(fieldIndex);
      const remaining = ''.padStart(3 - playerFieldCount, '●');
      return remaining + '\n' + this.game.players.filter(p => this.isFieldDoneForPlayer(p, fieldIndex)).map(p => p.name.substr(0, 1)).join(',').toUpperCase();
    } else if (this.isSecondaryField(fieldIndex)) {
      return this.game.players.filter(p => !this.isFieldDoneForPlayer(p, fieldIndex)).map(p => p.name.substr(0, 1)).join(',').toUpperCase();
    }
    return '';
  }
  customReset() {
    this.game.players.forEach(player => player.state = new _models_cricet_state_model__WEBPACK_IMPORTED_MODULE_3__.CricketState());
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
    } else if (this.settings.isScoreGame()) {
      total = this.getPlayerTotalForScoreGame(player);
    }
    return total;
  }
  getPlayerTotalForScoreGame(player) {
    let total = 0;
    this.settings.fields.forEach(fieldIndex => {
      if (this.isFieldDoneForPlayer(player, fieldIndex)) {
        total += (this.getPlayerState(player).getFieldCount(fieldIndex) - 3) * _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground.getFieldValueFromIndex(fieldIndex);
      }
    }, this);
    return total;
  }
  getPlayerTotalForPunishGame(player) {
    let total = 0;
    this.settings.fields.forEach(fieldIndex => {
      total += this.getPlayerState(player).getPunishCount(fieldIndex) * _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground.getFieldValueFromIndex(fieldIndex);
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
      return (this.getPlayerState(player).getFieldCount(fieldIndex) - 3) * _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground.getFieldValueFromIndex(fieldIndex);
    }
    return 0;
  }
  getPunishScore(player, fieldIndex) {
    return this.getPlayerState(player).getPunishCount(fieldIndex) * _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground.getFieldValueFromIndex(fieldIndex);
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
CricketComponent.ɵfac = function CricketComponent_Factory(t) {
  return new (t || CricketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_4__.ApplicationStateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_5__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_7__.SoundService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_8__.BotService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_9__.StatisticsService));
};
CricketComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: CricketComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
  decls: 7,
  vars: 7,
  consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 4, "ngIf"], [3, "playground"], ["class", "button", 3, "primary", "click", 4, "ngFor", "ngForOf"], [1, "button", "shortmedium", 3, "click"], [1, "button", 3, "click"], [1, "player_container"], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "player"], [1, "field-set"], [3, "class", 4, "ngFor", "ngForOf"], [1, "small"]],
  template: function CricketComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CricketComponent_app_settings_1_Template, 48, 10, "app-settings", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, CricketComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, CricketComponent_div_4_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, CricketComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, CricketComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDivider, _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_10__.NumberPlateComponent, _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_11__.GameToolbarComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__.SettingsComponent, _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_13__.PlayerScoreComponent, _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_14__.NumberPlateVisualComponent],
  encapsulation: 2,
  data: {
    animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__.slideInAnimation]
  }
});

/***/ }),

/***/ 50925:
/*!*******************************************!*\
  !*** ./src/app/cricket/cricket.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CricketModule": () => (/* binding */ CricketModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _cricket_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cricket.component */ 51282);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





class CricketModule {}
CricketModule.ɵfac = function CricketModule_Factory(t) {
  return new (t || CricketModule)();
};
CricketModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: CricketModule
});
CricketModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{
    path: '',
    component: _cricket_component__WEBPACK_IMPORTED_MODULE_0__.CricketComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CricketModule, {
    declarations: [_cricket_component__WEBPACK_IMPORTED_MODULE_0__.CricketComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 75630:
/*!*********************************************************!*\
  !*** ./src/app/cricket/models/cricet.settings.model.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CricketSettings": () => (/* binding */ CricketSettings)
/* harmony export */ });
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
  black() {
    this.setAllowedField([20, 18, 13, 10, 2, 3, 7, 8, 14, 12, 21]);
  }
  white() {
    this.setAllowedField([1, 4, 6, 15, 17, 19, 16, 11, 9, 5, 21]);
  }
  cross() {
    this.setAllowedField([5, 20, 1, 19, 3, 17, 14, 8, 11, 6, 13, 10, 21]);
  }
  top() {
    this.setAllowedField([14, 9, 12, 5, 20, 1, 18, 4, 13, 21]);
  }
  bottom() {
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
      numbers[i] = i + 1;
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

/***/ 57351:
/*!******************************************************!*\
  !*** ./src/app/cricket/models/cricet.state.model.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CricketState": () => (/* binding */ CricketState)
/* harmony export */ });
/* harmony import */ var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground-state.model */ 31822);

class CricketState extends _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__.PlaygroundState {
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

/***/ 2466:
/*!****************************************!*\
  !*** ./src/app/duel/duel.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DuelComponent": () => (/* binding */ DuelComponent)
/* harmony export */ });
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground.model */ 37954);
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../route-animation */ 56067);
/* harmony import */ var _models_duel_settings_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/duel.settings.model */ 38153);
/* harmony import */ var _models_duel_state_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/duel.state.model */ 48326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~services/application-state.service */ 12711);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/game.service */ 59208);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/dialog.service */ 74564);
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~services/sound.service */ 34431);
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/bot.service */ 93030);
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/statistics.service */ 17036);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ 25513);
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ 61868);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~components/settings/settings.component */ 33668);
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/player-score/player-score.component */ 99078);
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ 16218);






















function DuelComponent_app_settings_1_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_button_23_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r9);
      const i_r7 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r8.settings.setNumber(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const numb_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r5.settings.isFieldAllowed(i_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", numb_r6 === 21 ? "B" : numb_r6, " ");
  }
}
function DuelComponent_app_settings_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-settings", 4)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 5)(4, "mat-form-field", 6)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Life limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function DuelComponent_app_settings_1_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r10.settings.startPoint = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "mat-form-field", 6)(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function DuelComponent_app_settings_1_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r12.settings.targetPoint = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "mat-form-field", 6)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "Punishment");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function DuelComponent_app_settings_1_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r13.settings.punishment = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r14.settings.toggleHandOver());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, "Hand Over");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](19, "br")(20, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22, "Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](23, DuelComponent_app_settings_1_button_23_Template, 2, 3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](24, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r15.settings.top());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26, "Top");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r16.settings.bottom());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, "Bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r17.settings.left());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30, "Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r18.settings.right());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32, "Right");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r19.settings.black());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34, "Black");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r20.settings.white());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36, "White");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r21.settings.high());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](38, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](39, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r22.settings.small());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](40, "Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](41, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r23.settings.odd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](42, "Odd");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r24.settings.even());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](44, "Even");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r25.settings.prime());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](46, "Prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r26.settings.notPrime());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](48, "Not prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r27.settings.cross());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](50, "Cross");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r28.settings.randomize(6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](52, "Random 06");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r29.settings.randomize(12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](54, "Random 12");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](55, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r30.settings.all());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](56, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r0.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r0.settings.startPoint);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r0.settings.targetPoint);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r0.settings.punishment);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.handover ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.settings.getNumbers());
  }
}
function DuelComponent_app_game_toolbar_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-game-toolbar", 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r1.playground);
  }
}
function DuelComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-player-score", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r32 = ctx.$implicit;
    const i_r33 = ctx.index;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMapInterpolate2"]("player ", i_r33 === ctx_r31.game.actualPlayerIndex ? "highlighted" : "", " ", ctx_r31.isInactive(player_r32) ? "inactive" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("player", player_r32)("hasContent", false);
  }
}
function DuelComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, DuelComponent_div_4_div_1_Template, 2, 6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.game.players);
  }
}
function DuelComponent_app_number_plate_visual_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-number-plate-visual", 4);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r3.playground);
  }
}
function DuelComponent_app_number_plate_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-number-plate", 4);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r4.playground);
  }
}
class DuelComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground {
  constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
    super('Duel', application, game, route, dialogService, soundService, botService, statisticsService, 'duel', 2);
    this.settings = new _models_duel_settings_model__WEBPACK_IMPORTED_MODULE_2__.DuelSettings();
  }
  calculatePoints(player, fieldIndex, score) {
    const state = this.getPlayerState(player);
    const actualScore = score * this.multiplier;
    if (score === 0) {
      player.score -= this.settings.punishment;
    } else if (state.ownFields.some(i => i === fieldIndex)) {
      player.score += actualScore;
    } else if (this.isNotOwnField(fieldIndex)) {
      player.score -= actualScore;
      if (this.settings.handover) {
        const player = this.game.players.find(p => p != this.game.getActualPlayer() && this.getPlayerState(p).ownFields.some(i => i === fieldIndex));
        if (player) {
          player.score += actualScore;
        }
      }
    } else {
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
    } else {
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
    return this.settings.isFieldAllowed(fieldIndex) && !this.game.players.some(p => this.getPlayerState(p).ownFields.some(i => i === fieldIndex));
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
      player.state = new _models_duel_state_model__WEBPACK_IMPORTED_MODULE_3__.DuelState();
      player.score = this.settings.startPoint;
    });
  }
  getGameConfig() {
    return this.settings.fields.length + ',' + this.settings.targetPoint + ',' + this.settings.startPoint;
  }
  isNotOwnField(fieldIndex) {
    return !this.settings.isFieldAllowed(fieldIndex) || this.game.players.some(p => p != this.game.getActualPlayer() && this.getPlayerState(p).ownFields.some(i => i === fieldIndex));
  }
}
DuelComponent.ɵfac = function DuelComponent_Factory(t) {
  return new (t || DuelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_4__.ApplicationStateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_5__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_7__.SoundService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_8__.BotService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_9__.StatisticsService));
};
DuelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: DuelComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
  decls: 7,
  vars: 7,
  consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 4, "ngIf"], [3, "playground"], [1, "field-set"], ["appearance", "outline", 1, "big"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], [1, "button", "shortmedium", 3, "click"], ["class", "button", 3, "primary", "click", 4, "ngFor", "ngForOf"], [1, "button", 3, "click"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]],
  template: function DuelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, DuelComponent_app_settings_1_Template, 57, 7, "app-settings", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, DuelComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, DuelComponent_div_4_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, DuelComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, DuelComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDivider, _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_10__.NumberPlateComponent, _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_11__.GameToolbarComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__.SettingsComponent, _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_13__.PlayerScoreComponent, _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_14__.NumberPlateVisualComponent],
  encapsulation: 2,
  data: {
    animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__.slideInAnimation]
  }
});

/***/ }),

/***/ 90260:
/*!*************************************!*\
  !*** ./src/app/duel/duel.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DuelModule": () => (/* binding */ DuelModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _duel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./duel.component */ 2466);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





class DuelModule {}
DuelModule.ɵfac = function DuelModule_Factory(t) {
  return new (t || DuelModule)();
};
DuelModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: DuelModule
});
DuelModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{
    path: '',
    component: _duel_component__WEBPACK_IMPORTED_MODULE_0__.DuelComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DuelModule, {
    declarations: [_duel_component__WEBPACK_IMPORTED_MODULE_0__.DuelComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 38153:
/*!****************************************************!*\
  !*** ./src/app/duel/models/duel.settings.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DuelSettings": () => (/* binding */ DuelSettings)
/* harmony export */ });
/* harmony import */ var _cricket_models_cricet_settings_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../cricket/models/cricet.settings.model */ 75630);

class DuelSettings extends _cricket_models_cricet_settings_model__WEBPACK_IMPORTED_MODULE_0__.CricketSettings {
  constructor() {
    super();
    this.black();
    this.startPoint = 30;
    this.targetPoint = 200;
    this.punishment = 10;
    this.handover = true;
  }
  toggleHandOver() {
    this.handover = !this.handover;
  }
}

/***/ }),

/***/ 48326:
/*!*************************************************!*\
  !*** ./src/app/duel/models/duel.state.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DuelState": () => (/* binding */ DuelState)
/* harmony export */ });
/* harmony import */ var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground-state.model */ 31822);

class DuelState extends _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__.PlaygroundState {
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

/***/ 17166:
/*!******************************************!*\
  !*** ./src/app/fives/fives.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FivesComponent": () => (/* binding */ FivesComponent)
/* harmony export */ });
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground.model */ 37954);
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../route-animation */ 56067);
/* harmony import */ var _models_fives_settings_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/fives.settings.model */ 82877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~services/application-state.service */ 12711);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~services/game.service */ 59208);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/dialog.service */ 74564);
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/sound.service */ 34431);
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~services/bot.service */ 93030);
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/statistics.service */ 17036);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ 25513);
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ 61868);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/settings/settings.component */ 33668);
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~components/player-score/player-score.component */ 99078);
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ 16218);


















function FivesComponent_app_settings_1_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function FivesComponent_app_settings_1_button_8_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9);
      const divider_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r8.settings.setDivider(divider_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const divider_r7 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("primary", ctx_r5.settings.divider === divider_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](divider_r7);
  }
}
function FivesComponent_app_settings_1_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function FivesComponent_app_settings_1_button_12_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const limit_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r11.settings.setLimit(limit_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const limit_r10 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("primary", ctx_r6.settings.limit === limit_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](limit_r10);
  }
}
function FivesComponent_app_settings_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-settings", 4)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function FivesComponent_app_settings_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r13.settings.toggleNoCheat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, " No Cheat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, FivesComponent_app_settings_1_button_8_Template, 2, 3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "Limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, FivesComponent_app_settings_1_button_12_Template, 2, 3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("playground", ctx_r0.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("primary", ctx_r0.settings.noCheat);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r0.settings.getSelectableDividers());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r0.settings.getSelectableLimits());
  }
}
function FivesComponent_app_game_toolbar_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-game-toolbar", 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("playground", ctx_r1.playground);
  }
}
function FivesComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-player-score", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMapInterpolate1"]("player ", i_r17 === ctx_r15.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("player", player_r16)("hasContent", false);
  }
}
function FivesComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, FivesComponent_div_4_div_1_Template, 2, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r2.game.players);
  }
}
function FivesComponent_app_number_plate_visual_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-number-plate-visual", 4);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("playground", ctx_r3.playground);
  }
}
function FivesComponent_app_number_plate_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-number-plate", 4);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("playground", ctx_r4.playground);
  }
}
class FivesComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground {
  constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
    super('Fives', application, game, route, dialogService, soundService, botService, statisticsService, 'fives');
    this.settings = new _models_fives_settings_model__WEBPACK_IMPORTED_MODULE_2__.FivesSettings();
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
        player.score -= sum / this.settings.divider;
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
      const mod = this.settings.divider - this.game.getActualPlayer().getThrowsTotal() % this.settings.divider;
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
FivesComponent.ɵfac = function FivesComponent_Factory(t) {
  return new (t || FivesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_3__.ApplicationStateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_4__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_6__.SoundService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_7__.BotService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_8__.StatisticsService));
};
FivesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: FivesComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]],
  decls: 7,
  vars: 7,
  consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 4, "ngIf"], [3, "playground"], [1, "button", "big", 3, "click"], ["class", "button", 3, "primary", "click", 4, "ngFor", "ngForOf"], [1, "button", 3, "click"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]],
  template: function FivesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, FivesComponent_app_settings_1_Template, 13, 5, "app-settings", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, FivesComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, FivesComponent_div_4_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, FivesComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, FivesComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_9__.NumberPlateComponent, _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_10__.GameToolbarComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__.SettingsComponent, _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_12__.PlayerScoreComponent, _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_13__.NumberPlateVisualComponent],
  encapsulation: 2,
  data: {
    animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__.slideInAnimation]
  }
});

/***/ }),

/***/ 78375:
/*!***************************************!*\
  !*** ./src/app/fives/fives.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FivesModule": () => (/* binding */ FivesModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _fives_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fives.component */ 17166);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





class FivesModule {}
FivesModule.ɵfac = function FivesModule_Factory(t) {
  return new (t || FivesModule)();
};
FivesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: FivesModule
});
FivesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{
    path: '',
    component: _fives_component__WEBPACK_IMPORTED_MODULE_0__.FivesComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FivesModule, {
    declarations: [_fives_component__WEBPACK_IMPORTED_MODULE_0__.FivesComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 82877:
/*!******************************************************!*\
  !*** ./src/app/fives/models/fives.settings.model.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FivesSettings": () => (/* binding */ FivesSettings)
/* harmony export */ });
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

/***/ 12822:
/*!************************************************************!*\
  !*** ./src/app/hare-and-hound/hare-and-hound.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HareAndHoundComponent": () => (/* binding */ HareAndHoundComponent)
/* harmony export */ });
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground.model */ 37954);
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../route-animation */ 56067);
/* harmony import */ var _models_hare_and_hound_settings_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/hare-and-hound.settings.model */ 96903);
/* harmony import */ var _models_hare_and_hound_state_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/hare-and-hound.state.model */ 90444);
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~services/statistics.service */ 17036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/application-state.service */ 12711);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/game.service */ 59208);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~services/dialog.service */ 74564);
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/sound.service */ 34431);
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/bot.service */ 93030);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ 25513);
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ 61868);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~components/settings/settings.component */ 33668);
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/player-score/player-score.component */ 99078);
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ 16218);



















function HareAndHoundComponent_app_settings_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function HareAndHoundComponent_app_settings_1_button_3_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8);
      const start_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r7.settings.setHoundStart(start_r6 - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const start_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r5.settings.houndStartIndex + 1 === start_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](start_r6);
  }
}
function HareAndHoundComponent_app_settings_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-settings", 4)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Hound start position");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, HareAndHoundComponent_app_settings_1_button_3_Template, 2, 3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r0.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.settings.getSelectableHoundStart());
  }
}
function HareAndHoundComponent_app_game_toolbar_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-game-toolbar", 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r1.playground);
  }
}
function HareAndHoundComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-player-score", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMapInterpolate1"]("player ", i_r11 === ctx_r9.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("player", player_r10)("hasContent", false);
  }
}
function HareAndHoundComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, HareAndHoundComponent_div_4_div_1_Template, 2, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.game.players);
  }
}
function HareAndHoundComponent_app_number_plate_visual_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-number-plate-visual", 4);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r3.playground);
  }
}
function HareAndHoundComponent_app_number_plate_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-number-plate", 4);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r4.playground);
  }
}
class HareAndHoundComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground {
  constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
    super('Hare and Hound', application, game, route, dialogService, soundService, botService, statisticsService, 'hare-hound', 2, 2);
    this.settings = new _models_hare_and_hound_settings_model__WEBPACK_IMPORTED_MODULE_2__.HareAndHoundSettings();
  }
  calculatePoints(player, fieldIndex, score) {
    const state = this.getPlayerState(player);
    if (this.isFieldEnabled(fieldIndex, state.actFieldIndex)) {
      state.increaseActFieldIndex(this.multiplier);
      if (state.actFieldIndex >= _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.FIELDS_COUNT - 1) {
        state.actFieldIndex = state.actFieldIndex - (_models_playground_model__WEBPACK_IMPORTED_MODULE_0__.FIELDS_COUNT - 1);
      }
      player.score -= this.multiplier;
    }
  }
  checkPlayerState(player) {
    player.setWin(this.isHare() && player.score <= 0 || !this.isHare() && player.score + this.settings.getHareStartIndex() <= this.game.players.find(p => this.isHare(p)).score);
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
    const owners = this.game.players.filter(p => this.getFieldIndex(this.getPlayerState(p).actFieldIndex) === fieldIndex).map(p => p.name.substr(0, 1));
    return !!owners.length ? owners.join(',') : '';
  }
  getFieldIcon(fieldIndex) {
    if (!this.isPrimaryField(fieldIndex) && !this.isSecondaryField(fieldIndex)) {
      return '';
    }
    return this.isHare() && this.isPrimaryField(fieldIndex) || this.isSecondaryField(fieldIndex) && !this.isHare() ? 'favorite' : 'directions_run';
  }
  customReset() {
    this.game.players.forEach((player, index) => {
      player.score = _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.FIELDS_COUNT - 1;
      if (index === 0) {
        player.state = new _models_hare_and_hound_state_model__WEBPACK_IMPORTED_MODULE_3__.HareAndHoundState(this.settings.getHareStartIndex());
      } else {
        player.state = new _models_hare_and_hound_state_model__WEBPACK_IMPORTED_MODULE_3__.HareAndHoundState(0);
      }
    });
  }
  decoratePlayerStat(player) {
    return player.name + _services_statistics_service__WEBPACK_IMPORTED_MODULE_4__.STAT_NAME_SEPARATOR + `${this.isHare(player) ? '0' : '1'}`;
  }
  getGameConfig() {
    return 20 - _models_hare_and_hound_settings_model__WEBPACK_IMPORTED_MODULE_2__.HareAndHoundSettings.getBaseFields().indexOf(this.settings.houndStartIndex) + '';
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
HareAndHoundComponent.ɵfac = function HareAndHoundComponent_Factory(t) {
  return new (t || HareAndHoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__.ApplicationStateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_8__.SoundService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_9__.BotService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_4__.StatisticsService));
};
HareAndHoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: HareAndHoundComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
  decls: 7,
  vars: 7,
  consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 4, "ngIf"], [3, "playground"], ["class", "button", 3, "primary", "click", 4, "ngFor", "ngForOf"], [1, "button", 3, "click"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]],
  template: function HareAndHoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, HareAndHoundComponent_app_settings_1_Template, 4, 2, "app-settings", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, HareAndHoundComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, HareAndHoundComponent_div_4_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, HareAndHoundComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, HareAndHoundComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_10__.NumberPlateComponent, _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_11__.GameToolbarComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__.SettingsComponent, _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_13__.PlayerScoreComponent, _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_14__.NumberPlateVisualComponent],
  encapsulation: 2,
  data: {
    animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__.slideInAnimation]
  }
});

/***/ }),

/***/ 98451:
/*!*********************************************************!*\
  !*** ./src/app/hare-and-hound/hare-and-hound.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HareAndHoundModule": () => (/* binding */ HareAndHoundModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _hare_and_hound_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hare-and-hound.component */ 12822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





class HareAndHoundModule {}
HareAndHoundModule.ɵfac = function HareAndHoundModule_Factory(t) {
  return new (t || HareAndHoundModule)();
};
HareAndHoundModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: HareAndHoundModule
});
HareAndHoundModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{
    path: '',
    component: _hare_and_hound_component__WEBPACK_IMPORTED_MODULE_1__.HareAndHoundComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HareAndHoundModule, {
    declarations: [_hare_and_hound_component__WEBPACK_IMPORTED_MODULE_1__.HareAndHoundComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 96903:
/*!************************************************************************!*\
  !*** ./src/app/hare-and-hound/models/hare-and-hound.settings.model.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HareAndHoundSettings": () => (/* binding */ HareAndHoundSettings)
/* harmony export */ });
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

/***/ 90444:
/*!*********************************************************************!*\
  !*** ./src/app/hare-and-hound/models/hare-and-hound.state.model.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HareAndHoundState": () => (/* binding */ HareAndHoundState)
/* harmony export */ });
/* harmony import */ var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground-state.model */ 31822);

class HareAndHoundState extends _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__.PlaygroundState {
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

/***/ 75034:
/*!************************************************!*\
  !*** ./src/app/imitator/imitator.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImitatorComponent": () => (/* binding */ ImitatorComponent)
/* harmony export */ });
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground.model */ 37954);
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../route-animation */ 56067);
/* harmony import */ var _models_imitator_settings_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/imitator.settings.model */ 52711);
/* harmony import */ var _models_imitator_state_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/imitator.state.model */ 34435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~services/application-state.service */ 12711);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/game.service */ 59208);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/dialog.service */ 74564);
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~services/sound.service */ 34431);
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/bot.service */ 93030);
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/statistics.service */ 17036);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ 25513);
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ 61868);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~components/settings/settings.component */ 33668);
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/player-score/player-score.component */ 99078);
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ 16218);


















function ImitatorComponent_app_settings_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-settings", 5)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Number of Round");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r5.settings.setRound(3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, " 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r7.settings.setRound(5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r8.settings.setRound(10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, " 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r9.settings.setRound(15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, " 15 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r10.settings.setRound(20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, " 20 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r0.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.round === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.round === 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.round === 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.round === 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.round === 20);
  }
}
function ImitatorComponent_app_game_toolbar_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-game-toolbar", 7);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r1.playground)("reversRound", ctx_r1.settings.round);
  }
}
function ImitatorComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-player-score", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMapInterpolate1"]("player ", i_r13 === ctx_r11.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("player", player_r12)("hasContent", false);
  }
}
function ImitatorComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ImitatorComponent_div_4_div_1_Template, 2, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.game.players);
  }
}
function ImitatorComponent_app_number_plate_visual_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-number-plate-visual", 5);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r3.playground);
  }
}
function ImitatorComponent_app_number_plate_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-number-plate", 5);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r4.playground);
  }
}
class ImitatorComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground {
  constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
    super('Imitator', application, game, route, dialogService, soundService, botService, statisticsService, 'imitator');
    this.nextEnabled = false;
    this.settings = new _models_imitator_settings_model__WEBPACK_IMPORTED_MODULE_2__.ImitatorSettings();
  }
  calculatePoints(player, fieldIndex, score) {
    const state = this.getPlayerState(player);
    if (this.game.actualThrow === 1) {
      state.punished = fieldIndex !== state.actFieldIndex;
    } else if (this.game.actualThrow === 2) {
      const newScore = state.punished && score === 0 ? 25 : score;
      player.score += (state.punished ? newScore * -1 : newScore) * this.multiplier;
    } else {
      this.game.nextPlayer();
      const newFieldIndex = score === 0 ? Math.floor(Math.random() * 20) : fieldIndex;
      this.getPlayerState(this.game.getActualPlayer()).actFieldIndex = newFieldIndex;
    }
  }
  isPrimaryField(fieldIndex) {
    return this.game.actualThrow === 0 && this.getPlayerState(this.game.getActualPlayer()).actFieldIndex === fieldIndex;
  }
  checkPlayerState(player) {
    if (this.game.isTheLastPlayer(player) && this.game.round + 1 === this.settings.round && this.game.actualThrow === 2) {
      this.game.players.forEach(p => p.setWin(this.game.isTheBestPlayer(p)));
    }
  }
  customReset() {
    this.game.players.forEach(player => player.state = new _models_imitator_state_model__WEBPACK_IMPORTED_MODULE_3__.ImitatorState());
  }
  getGameConfig() {
    return this.settings.round + '';
  }
}
ImitatorComponent.ɵfac = function ImitatorComponent_Factory(t) {
  return new (t || ImitatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_4__.ApplicationStateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_5__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_7__.SoundService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_8__.BotService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_9__.StatisticsService));
};
ImitatorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: ImitatorComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
  decls: 7,
  vars: 7,
  consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], [3, "playground", "reversRound", 4, "ngIf"], ["class", "player_container", 4, "ngIf"], [3, "playground"], [1, "button", 3, "click"], [3, "playground", "reversRound"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]],
  template: function ImitatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ImitatorComponent_app_settings_1_Template, 13, 11, "app-settings", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ImitatorComponent_app_game_toolbar_3_Template, 1, 2, "app-game-toolbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ImitatorComponent_div_4_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, ImitatorComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, ImitatorComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_10__.NumberPlateComponent, _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_11__.GameToolbarComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__.SettingsComponent, _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_13__.PlayerScoreComponent, _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_14__.NumberPlateVisualComponent],
  encapsulation: 2,
  data: {
    animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__.slideInAnimation]
  }
});

/***/ }),

/***/ 87597:
/*!*********************************************!*\
  !*** ./src/app/imitator/imitator.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImitatorModule": () => (/* binding */ ImitatorModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _imitator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imitator.component */ 75034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





class ImitatorModule {}
ImitatorModule.ɵfac = function ImitatorModule_Factory(t) {
  return new (t || ImitatorModule)();
};
ImitatorModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ImitatorModule
});
ImitatorModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{
    path: '',
    component: _imitator_component__WEBPACK_IMPORTED_MODULE_1__.ImitatorComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ImitatorModule, {
    declarations: [_imitator_component__WEBPACK_IMPORTED_MODULE_1__.ImitatorComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 52711:
/*!************************************************************!*\
  !*** ./src/app/imitator/models/imitator.settings.model.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImitatorSettings": () => (/* binding */ ImitatorSettings)
/* harmony export */ });
class ImitatorSettings {
  constructor() {
    this.round = 5;
  }
  setRound(r) {
    this.round = r;
  }
}

/***/ }),

/***/ 34435:
/*!*********************************************************!*\
  !*** ./src/app/imitator/models/imitator.state.model.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImitatorState": () => (/* binding */ ImitatorState)
/* harmony export */ });
/* harmony import */ var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground-state.model */ 31822);

class ImitatorState extends _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__.PlaygroundState {
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

/***/ 15838:
/*!********************************************!*\
  !*** ./src/app/killer/killer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KillerComponent": () => (/* binding */ KillerComponent)
/* harmony export */ });
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground.model */ 37954);
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../route-animation */ 56067);
/* harmony import */ var _models_killer_state_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/killer.state.model */ 3102);
/* harmony import */ var _models_killer_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/killer.settings.model */ 81932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~services/application-state.service */ 12711);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/game.service */ 59208);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/dialog.service */ 74564);
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~services/sound.service */ 34431);
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/bot.service */ 93030);
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/statistics.service */ 17036);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ 25513);
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ 61868);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~components/settings/settings.component */ 33668);
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/player-score/player-score.component */ 99078);
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ 16218);






















function KillerComponent_app_settings_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-settings", 4)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 5)(4, "mat-form-field", 6)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Life limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function KillerComponent_app_settings_1_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r5.settings.numberOfLives = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "mat-form-field", 6)(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "Boarding");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function KillerComponent_app_settings_1_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r7.settings.boardingLimit = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function KillerComponent_app_settings_1_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r8.settings.toggleSuicide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "Suicide");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r0.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r0.settings.numberOfLives);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r0.settings.boardingLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.suicide);
  }
}
function KillerComponent_app_game_toolbar_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-game-toolbar", 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r1.playground);
  }
}
function KillerComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-player-score", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMapInterpolate2"]("player ", i_r11 === ctx_r9.game.actualPlayerIndex ? "highlighted" : "", " ", player_r10.isInactive() ? "inactive" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("player", player_r10)("scoreDisplayed", false)("lifeDisplayed", true)("highlighted", ctx_r9.getPlayerState(player_r10).killer);
  }
}
function KillerComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, KillerComponent_div_4_div_1_Template, 2, 8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.game.players);
  }
}
function KillerComponent_app_number_plate_visual_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-number-plate-visual", 4);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r3.playground);
  }
}
function KillerComponent_app_number_plate_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-number-plate", 4);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r4.playground);
  }
}
const DANGER_ZONE_ICON = 'sentiment_very_dissatisfied';
class KillerComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground {
  constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
    super('Killer', application, game, route, dialogService, soundService, botService, statisticsService, 'killer', 2);
    this.settings = new _models_killer_settings_model__WEBPACK_IMPORTED_MODULE_3__.KillerSettings();
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
    } else {
      if (state.killer) {
        if (this.settings.suicide && fieldIndex === state.actField && this.multiplier > 1) {
          player.life = 0;
          this.extraEndingMsg = 'SUICIDE!!!';
        } else if (fieldIndex === state.actField) {
          player.life = Number(player.life) + Number(this.multiplier);
          if (player.life > this.settings.numberOfLives) {
            player.life = this.settings.numberOfLives;
          }
        } else {
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
      } else if (fieldIndex === state.actField) {
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
    return fieldIndex === 20 ? 'B' : fieldIndex + 1 + '';
  }
  customReset() {
    this.game.players.forEach(player => {
      player.state = new _models_killer_state_model__WEBPACK_IMPORTED_MODULE_2__.KillerState(this.settings.boardingLimit);
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
    return this.game.players.filter(p => !p.isInactive()).map(p => this.getPlayerState(p).actField);
  }
}
KillerComponent.ɵfac = function KillerComponent_Factory(t) {
  return new (t || KillerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_4__.ApplicationStateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_5__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_7__.SoundService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_8__.BotService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_9__.StatisticsService));
};
KillerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: KillerComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
  decls: 7,
  vars: 7,
  consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 4, "ngIf"], [3, "playground"], [1, "field-set"], ["appearance", "outline", 1, "big"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], [1, "button", "shortmedium", 3, "click"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "scoreDisplayed", "lifeDisplayed", "highlighted"]],
  template: function KillerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, KillerComponent_app_settings_1_Template, 15, 5, "app-settings", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, KillerComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, KillerComponent_div_4_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, KillerComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, KillerComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDivider, _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_10__.NumberPlateComponent, _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_11__.GameToolbarComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__.SettingsComponent, _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_13__.PlayerScoreComponent, _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_14__.NumberPlateVisualComponent],
  encapsulation: 2,
  data: {
    animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__.slideInAnimation]
  }
});

/***/ }),

/***/ 67301:
/*!*****************************************!*\
  !*** ./src/app/killer/killer.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KillerModule": () => (/* binding */ KillerModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _killer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./killer.component */ 15838);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





class KillerModule {}
KillerModule.ɵfac = function KillerModule_Factory(t) {
  return new (t || KillerModule)();
};
KillerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: KillerModule
});
KillerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{
    path: '',
    component: _killer_component__WEBPACK_IMPORTED_MODULE_0__.KillerComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](KillerModule, {
    declarations: [_killer_component__WEBPACK_IMPORTED_MODULE_0__.KillerComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 81932:
/*!********************************************************!*\
  !*** ./src/app/killer/models/killer.settings.model.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KillerSettings": () => (/* binding */ KillerSettings)
/* harmony export */ });
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

/***/ 3102:
/*!*****************************************************!*\
  !*** ./src/app/killer/models/killer.state.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KillerState": () => (/* binding */ KillerState)
/* harmony export */ });
/* harmony import */ var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground-state.model */ 31822);

class KillerState extends _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__.PlaygroundState {
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

/***/ 9499:
/*!************************************************!*\
  !*** ./src/app/knockout/knockout.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnockoutComponent": () => (/* binding */ KnockoutComponent)
/* harmony export */ });
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground.model */ 37954);
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../route-animation */ 56067);
/* harmony import */ var _models_knockout_settings_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/knockout.settings.model */ 85117);
/* harmony import */ var _models_knockout_state_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/knockout.state.model */ 50733);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~services/application-state.service */ 12711);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/game.service */ 59208);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/dialog.service */ 74564);
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~services/sound.service */ 34431);
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/bot.service */ 93030);
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/statistics.service */ 17036);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ 25513);
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ 61868);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~components/settings/settings.component */ 33668);
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/player-score/player-score.component */ 99078);
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ 16218);





















function KnockoutComponent_app_settings_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-settings", 5)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 6)(4, "mat-form-field", 7)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Life limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function KnockoutComponent_app_settings_1_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r5.settings.numberOfLives = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function KnockoutComponent_app_settings_1_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r7.settings.toggleKiller());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, " Below the belt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r0.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx_r0.settings.numberOfLives);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.killer);
  }
}
function KnockoutComponent_app_game_toolbar_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-game-toolbar", 10);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r1.playground)("info", ctx_r1.getInfo());
  }
}
function KnockoutComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-player-score", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMapInterpolate2"]("player ", i_r10 === ctx_r8.game.actualPlayerIndex ? "highlighted" : "", " ", player_r9.isInactive() ? "inactive" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("player", player_r9)("scoreDisplayed", true)("lifeDisplayed", true)("hasContent", false);
  }
}
function KnockoutComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, KnockoutComponent_div_4_div_1_Template, 2, 8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.game.players);
  }
}
function KnockoutComponent_app_number_plate_visual_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-number-plate-visual", 5);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r3.playground);
  }
}
function KnockoutComponent_app_number_plate_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-number-plate", 5);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r4.playground);
  }
}
class KnockoutComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground {
  constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
    super('Knockout', application, game, route, dialogService, soundService, botService, statisticsService, 'knockout', 2);
    this.settings = new _models_knockout_settings_model__WEBPACK_IMPORTED_MODULE_2__.KnockoutSettings();
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
      } else if (this.settings.killer && score !== 0 && score === player.getThrowsTotal() && player.throwsHistory[player.throwsHistory.length - 1].score !== 0) {
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
      player.state = new _models_knockout_state_model__WEBPACK_IMPORTED_MODULE_3__.KnockoutState();
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
KnockoutComponent.ɵfac = function KnockoutComponent_Factory(t) {
  return new (t || KnockoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_4__.ApplicationStateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_5__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_7__.SoundService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_8__.BotService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_9__.StatisticsService));
};
KnockoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: KnockoutComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
  decls: 7,
  vars: 7,
  consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], [3, "playground", "info", 4, "ngIf"], ["class", "player_container", 4, "ngIf"], [3, "playground"], [1, "field-set"], ["appearance", "outline", 1, "big"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], [1, "button", "big", 3, "click"], [3, "playground", "info"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "scoreDisplayed", "lifeDisplayed", "hasContent"]],
  template: function KnockoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, KnockoutComponent_app_settings_1_Template, 11, 4, "app-settings", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, KnockoutComponent_app_game_toolbar_3_Template, 1, 2, "app-game-toolbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, KnockoutComponent_div_4_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, KnockoutComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, KnockoutComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_10__.NumberPlateComponent, _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_11__.GameToolbarComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__.SettingsComponent, _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_13__.PlayerScoreComponent, _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_14__.NumberPlateVisualComponent],
  encapsulation: 2,
  data: {
    animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__.slideInAnimation]
  }
});

/***/ }),

/***/ 97399:
/*!*********************************************!*\
  !*** ./src/app/knockout/knockout.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnockoutModule": () => (/* binding */ KnockoutModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _knockout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knockout.component */ 9499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





class KnockoutModule {}
KnockoutModule.ɵfac = function KnockoutModule_Factory(t) {
  return new (t || KnockoutModule)();
};
KnockoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: KnockoutModule
});
KnockoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{
    path: '',
    component: _knockout_component__WEBPACK_IMPORTED_MODULE_1__.KnockoutComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](KnockoutModule, {
    declarations: [_knockout_component__WEBPACK_IMPORTED_MODULE_1__.KnockoutComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 85117:
/*!************************************************************!*\
  !*** ./src/app/knockout/models/knockout.settings.model.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnockoutSettings": () => (/* binding */ KnockoutSettings)
/* harmony export */ });
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

/***/ 50733:
/*!*********************************************************!*\
  !*** ./src/app/knockout/models/knockout.state.model.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnockoutState": () => (/* binding */ KnockoutState)
/* harmony export */ });
/* harmony import */ var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground-state.model */ 31822);

class KnockoutState extends _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__.PlaygroundState {
  constructor(score = 0) {
    super();
    this.score = score;
  }
  clone() {
    return new KnockoutState(this.score);
  }
}

/***/ }),

/***/ 63806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);







const materialImports = [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDividerModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule];
class MaterialModule {}
MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};
MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [materialImports, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDividerModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MaterialModule, {
    imports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDividerModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule],
    exports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDividerModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__.MatAutocompleteModule]
  });
})();

/***/ }),

/***/ 56067:
/*!************************************!*\
  !*** ./src/app/route-animation.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slideInAnimation": () => (/* binding */ slideInAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 24851);

const slideInAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routeAnimations', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  position: 'relative'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%'
})], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  left: '-100%'
})], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  left: '100%'
}))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  left: '0%'
}))], {
  optional: true
})]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
  optional: true
})])]);

/***/ }),

/***/ 68190:
/*!****************************************************!*\
  !*** ./src/app/scam/models/scam.settings.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScamSettings": () => (/* binding */ ScamSettings)
/* harmony export */ });
/* harmony import */ var _cricket_models_cricet_settings_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../cricket/models/cricet.settings.model */ 75630);

class ScamSettings extends _cricket_models_cricet_settings_model__WEBPACK_IMPORTED_MODULE_0__.CricketSettings {
  constructor() {
    super();
    this.stopper = false;
    this.punishment = true;
    this.reverse = false;
    this.punishmentValue = 25;
    this.promoter = true;
    this.style = 1;
    this.all();
  }
  toggleStopper() {
    this.promoter = true;
    this.stopper = !this.stopper;
    if (this.stopper) {
      this.punishment = false;
    }
  }
  toggleReverse() {
    this.reverse = !this.reverse;
  }
  togglePunishment() {
    this.punishment = !this.punishment;
  }
  togglePromoter() {
    this.stopper = false;
    this.promoter = !this.promoter;
  }
}

/***/ }),

/***/ 56503:
/*!*************************************************!*\
  !*** ./src/app/scam/models/scam.state.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScamState": () => (/* binding */ ScamState)
/* harmony export */ });
/* harmony import */ var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground-state.model */ 31822);

class ScamState extends _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__.PlaygroundState {
  constructor() {
    super();
    this.ownFields = [];
  }
  clone() {
    const state = new ScamState();
    state.ownFields = [...this.ownFields];
    return state;
  }
}

/***/ }),

/***/ 15753:
/*!****************************************!*\
  !*** ./src/app/scam/scam.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScamComponent": () => (/* binding */ ScamComponent)
/* harmony export */ });
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground.model */ 37954);
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../route-animation */ 56067);
/* harmony import */ var _models_scam_settings_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/scam.settings.model */ 68190);
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~services/bot.service */ 93030);
/* harmony import */ var _models_scam_state_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/scam.state.model */ 56503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/application-state.service */ 12711);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/game.service */ 59208);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~services/dialog.service */ 74564);
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/sound.service */ 34431);
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/statistics.service */ 17036);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ 25513);
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ 61868);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~components/settings/settings.component */ 33668);
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/player-score/player-score.component */ 99078);
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ 16218);




















function ScamComponent_app_settings_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_button_3_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r9);
      const i_r7 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r8.settings.setNumber(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const numb_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r5.settings.isFieldAllowed(i_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", numb_r6 === 21 ? "B" : numb_r6, " ");
  }
}
function ScamComponent_app_settings_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-settings", 4)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ScamComponent_app_settings_1_button_3_Template, 2, 3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r10.settings.top());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Top");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r12.settings.bottom());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, "Bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r13.settings.left());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r14.settings.right());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Right");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r15.settings.black());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "Black");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r16.settings.white());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, "White");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r17.settings.high());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r18.settings.small());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20, "Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r19.settings.odd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22, "Odd");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r20.settings.even());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, "Even");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r21.settings.prime());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26, "Prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r22.settings.notPrime());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, "Not prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r23.settings.cross());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30, "Cross");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r24.settings.randomize(6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32, "Random 06");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r25.settings.randomize(12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34, "Random 12");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r26.settings.all());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](37, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39, "Style");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r27.settings.setStyle(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](41, "Classic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r28.settings.toggleStopper());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](43, "Stopper ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](44, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r29.settings.setStyle(3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](45, "No Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r30.settings.togglePunishment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r31.settings.togglePromoter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](49, " Promoter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r0.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.settings.getNumbers());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.style == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.stopper);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.style == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.punishment);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Punish(", ctx_r0.getPunishValue(), ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.promoter);
  }
}
function ScamComponent_app_game_toolbar_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-game-toolbar", 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r1.playground);
  }
}
function ScamComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-player-score", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r33 = ctx.$implicit;
    const i_r34 = ctx.index;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMapInterpolate1"]("player ", i_r34 === ctx_r32.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("player", player_r33)("hasContent", false)("highlighted", ctx_r32.settings.stopper && ctx_r32.game.isTheFirstPlayer(player_r33))("scoreDisplayed", !ctx_r32.settings.stopper || !ctx_r32.game.isTheFirstPlayer(player_r33));
  }
}
function ScamComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ScamComponent_div_4_div_1_Template, 2, 7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.game.players);
  }
}
function ScamComponent_app_number_plate_visual_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-number-plate-visual", 4);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r3.playground);
  }
}
function ScamComponent_app_number_plate_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-number-plate", 4);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r4.playground);
  }
}
class ScamComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground {
  constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
    super('Scam', application, game, route, dialogService, soundService, botService, statisticsService, 'scam', 2);
    this.settings = new _models_scam_settings_model__WEBPACK_IMPORTED_MODULE_2__.ScamSettings();
  }
  calculatePoints(player, fieldIndex, score) {
    const state = this.getPlayerState(player);
    if (!!this.game.numbs[fieldIndex]) {
      if (this.settings.stopper && this.game.isTheFirstPlayer(player)) {
        this.game.numbs[fieldIndex] = 0;
      } else if (this.settings.stopper) {
        player.score += (this.settings.isNoScoreGame() ? 1 : score) * this.multiplier * (this.settings.reverse ? -1 : 1);
      } else {
        state.ownFields.push(fieldIndex);
        player.score += (this.settings.isNoScoreGame() ? 1 : score) * this.multiplier * (this.settings.reverse ? -1 : 1);
        this.game.numbs[fieldIndex] = 0;
      }
    } else {
      const newScore = score === 0 ? this.settings.punishmentValue : score;
      const scr = (this.settings.isNoScoreGame() ? 1 : newScore) * this.multiplier;
      if (this.settings.punishment && (this.settings.stopper && !this.game.isTheFirstPlayer(player) || !this.settings.stopper)) {
        player.score -= scr;
      }
      if (this.settings.promoter) {
        const owner = this.game.players.find(p => this.getPlayerState(p).ownFields.some(i => i === fieldIndex));
        if (owner && owner.name !== player.name) {
          owner.score += scr;
        }
      }
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
    this.game.players.forEach(player => {
      player.state = new _models_scam_state_model__WEBPACK_IMPORTED_MODULE_4__.ScamState();
    });
    this.game.numbs = this.settings.numbs.map(i => i ? 1 : 0);
    this.settings.fields.forEach(f => this.settings.numbs[f] = true);
  }
  getGameConfig() {
    return this.settings.fields.length + '';
  }
  getFieldNote(fieldIndex) {
    const player = this.game.players.find(p => this.getPlayerState(p).ownFields.some(i => i === fieldIndex));
    if (player) {
      return player.name.substr(0, 1).toUpperCase();
    }
    return '';
  }
  botThrow() {
    let fields = [...Array(_models_playground_model__WEBPACK_IMPORTED_MODULE_0__.FIELDS_COUNT).keys()];
    if (this.settings.reverse) {
      fields.reverse();
    }
    fields = fields.filter(index => this.game.numbs[index]).slice(-4).slice(0, 3);
    const index = this.botService.calculateMultiTarget(fields);
    if (this.botService.isDoublePoint()) {
      this.doublePoint();
    } else if (this.botService.isTriplePoint()) {
      this.triplePoint();
    }
    setTimeout(() => {
      this.throwNumber([this.isFieldEnabled(index) ? _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground.getFieldValueFromIndex(index) : 0, _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground.getFieldValueFromIndex(index)]);
    }, _services_bot_service__WEBPACK_IMPORTED_MODULE_3__.PLAYER_DELAY_FAST);
  }
  getPunishValue() {
    return this.settings.isNoScoreGame() ? 1 : 25;
  }
}
ScamComponent.ɵfac = function ScamComponent_Factory(t) {
  return new (t || ScamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__.ApplicationStateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_8__.SoundService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_3__.BotService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_9__.StatisticsService));
};
ScamComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: ScamComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
  decls: 7,
  vars: 7,
  consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 4, "ngIf"], [3, "playground"], ["class", "button", 3, "primary", "click", 4, "ngFor", "ngForOf"], [1, "button", "shortmedium", 3, "click"], [1, "button", 3, "click"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent", "highlighted", "scoreDisplayed"]],
  template: function ScamComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ScamComponent_app_settings_1_Template, 50, 13, "app-settings", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ScamComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ScamComponent_div_4_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, ScamComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, ScamComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDivider, _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_10__.NumberPlateComponent, _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_11__.GameToolbarComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__.SettingsComponent, _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_13__.PlayerScoreComponent, _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_14__.NumberPlateVisualComponent],
  encapsulation: 2,
  data: {
    animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__.slideInAnimation]
  }
});

/***/ }),

/***/ 85781:
/*!*************************************!*\
  !*** ./src/app/scam/scam.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScamModule": () => (/* binding */ ScamModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _scam_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scam.component */ 15753);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





class ScamModule {}
ScamModule.ɵfac = function ScamModule_Factory(t) {
  return new (t || ScamModule)();
};
ScamModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ScamModule
});
ScamModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{
    path: '',
    component: _scam_component__WEBPACK_IMPORTED_MODULE_0__.ScamComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ScamModule, {
    declarations: [_scam_component__WEBPACK_IMPORTED_MODULE_0__.ScamComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 22779:
/*!************************************************************!*\
  !*** ./src/app/shanghai/models/shanghai.settings.model.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShanghaiSettings": () => (/* binding */ ShanghaiSettings)
/* harmony export */ });
class ShanghaiSettings {
  constructor() {
    this.numbs = [];
    this.fields = [];
    this.noScore = false;
    this.halveIt = true;
    this.resetIt = false;
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
    if (this.halveIt) {
      this.resetIt = false;
    }
  }
  toggleResetIt() {
    this.resetIt = !this.resetIt;
    if (this.resetIt) {
      this.halveIt = false;
    }
  }
  getNumbers() {
    const numbers = [];
    for (let i = 0; i < 21; i++) {
      numbers[i] = i + 1;
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

/***/ 7411:
/*!*********************************************************!*\
  !*** ./src/app/shanghai/models/shanghai.state.model.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShanghaiState": () => (/* binding */ ShanghaiState)
/* harmony export */ });
/* harmony import */ var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground-state.model */ 31822);

class ShanghaiState extends _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__.PlaygroundState {
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

/***/ 69276:
/*!************************************************!*\
  !*** ./src/app/shanghai/shanghai.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShanghaiComponent": () => (/* binding */ ShanghaiComponent)
/* harmony export */ });
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground.model */ 37954);
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../route-animation */ 56067);
/* harmony import */ var _models_shanghai_settings_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/shanghai.settings.model */ 22779);
/* harmony import */ var _models_shanghai_state_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/shanghai.state.model */ 7411);
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~services/statistics.service */ 17036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/application-state.service */ 12711);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/game.service */ 59208);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~services/dialog.service */ 74564);
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/sound.service */ 34431);
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~services/bot.service */ 93030);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ 25513);
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ 61868);
/* harmony import */ var _components_number_plate_shanghai_number_plate_shanghai_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~components/number-plate-shanghai/number-plate-shanghai.component */ 77107);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/settings/settings.component */ 33668);
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~components/player-score/player-score.component */ 99078);




















function ShanghaiComponent_app_settings_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_button_3_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r9);
      const i_r7 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r8.settings.setNumber(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const numb_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r5.settings.numbs[i_r7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", numb_r6 === 21 ? "B" : numb_r6, " ");
  }
}
function ShanghaiComponent_app_settings_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-settings", 5)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ShanghaiComponent_app_settings_1_button_3_Template, 2, 3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r10.settings.randomize());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Randomize");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r12.settings.toggleNoScore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, "No score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r13.settings.toggleHalveIt());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "Halve It ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r14.settings.toggleResetIt());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Reset It ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r0.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.settings.getNumbers());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.noScore);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.halveIt);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("primary", ctx_r0.settings.resetIt);
  }
}
function ShanghaiComponent_app_game_toolbar_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-game-toolbar", 5);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r1.playground);
  }
}
function ShanghaiComponent_div_4_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const field_r19 = ctx.$implicit;
    const player_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMapInterpolate2"]("field ", ctx_r18.isActiveField(field_r19) ? "active" : "", " ", ctx_r18.isFieldDoneForPlayer(field_r19) ? "" : "highlighted", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", field_r19 === 20 ? "B" : field_r19 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r18.getFieldValue(player_r16, field_r19));
  }
}
function ShanghaiComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "app-player-score", 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ShanghaiComponent_div_4_div_1_div_3_Template, 4, 6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const player_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMapInterpolate1"]("player ", i_r17 === ctx_r15.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("player", player_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r15.settings.fields);
  }
}
function ShanghaiComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ShanghaiComponent_div_4_div_1_Template, 4, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.game.players);
  }
}
function ShanghaiComponent_app_number_plate_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-number-plate", 5);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r3.playground);
  }
}
function ShanghaiComponent_app_number_plate_shanghai_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-number-plate-shanghai", 14);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("playground", ctx_r4.playground)("actualIndex", ctx_r4.getActualFieldIndex());
  }
}
class ShanghaiComponent extends _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground {
  constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
    super('Shanghai / Halve It', application, game, route, dialogService, soundService, botService, statisticsService, 'shanghai');
    this.settings = new _models_shanghai_settings_model__WEBPACK_IMPORTED_MODULE_2__.ShanghaiSettings();
  }
  calculatePoints(player, fieldIndex, score) {
    const state = this.getPlayerState(player);
    if (this.isActiveField(fieldIndex)) {
      state.increaseFieldCount(fieldIndex, 1);
      state.increaseFieldScore(fieldIndex, this.multiplier);
      if (this.settings.noScore) {
        player.score += this.multiplier;
      } else {
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
        if (t.score === _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground.getFieldValueFromIndex(fieldIndex)) {
          multi *= t.multi + 1;
        }
      }
      if (multi === 1 && this.settings.halveIt) {
        player.score = Math.round(player.score / 2);
      } else if (multi === 1 && this.settings.resetIt) {
        player.score = 0;
      }
      player.setWin(multi === 24);
      if (player.win) {
        this.extraEndingMsg = 'SHANGHAI!!!';
      }
    }
    const gameEnded = this.game.round === this.settings.fields.length - 1 && this.game.isActualPlayerTheLast() && this.game.isTheLastThrow();
    if (gameEnded) {
      this.game.players.forEach(p => p.setWin(this.game.isTheBestPlayer(p)));
    } else if (this.game.isTheLastThrow()) {
      this.game.nextPlayer();
    }
  }
  getFieldValue(player, fieldIndex) {
    const fieldCount = this.getPlayerState(player).getFieldCount(fieldIndex);
    if (fieldCount === 0) {
      return '○○○';
    } else {
      let str = '' + this.getPlayerState(player).getFieldScore(fieldIndex) * _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground.getFieldValueFromIndex(fieldIndex);
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
    this.game.players.forEach(player => player.state = new _models_shanghai_state_model__WEBPACK_IMPORTED_MODULE_3__.ShanghaiState());
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
    return player.name + _services_statistics_service__WEBPACK_IMPORTED_MODULE_4__.STAT_NAME_SEPARATOR + player.score + (player.win && this.extraEndingMsg ? '/s' : '');
  }
  getGameConfig() {
    return this.settings.fields.length + ',' + (this.settings.halveIt ? '1' : '0') + '-' + (this.settings.resetIt ? '1' : '0');
  }
}
ShanghaiComponent.ɵfac = function ShanghaiComponent_Factory(t) {
  return new (t || ShanghaiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__.ApplicationStateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_8__.SoundService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_9__.BotService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_4__.StatisticsService));
};
ShanghaiComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: ShanghaiComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
  decls: 7,
  vars: 7,
  consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 4, "ngIf"], [3, "playground", "actualIndex", 4, "ngIf"], [3, "playground"], ["class", "button", 3, "primary", "click", 4, "ngFor", "ngForOf"], [1, "button", "shortmedium", 3, "click"], [1, "button", 3, "click"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player"], [1, "field-set"], [1, "small"], [3, "playground", "actualIndex"]],
  template: function ShanghaiComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ShanghaiComponent_app_settings_1_Template, 13, 8, "app-settings", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ShanghaiComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ShanghaiComponent_div_4_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, ShanghaiComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, ShanghaiComponent_app_number_plate_shanghai_6_Template, 1, 2, "app-number-plate-shanghai", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDivider, _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_10__.NumberPlateComponent, _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_11__.GameToolbarComponent, _components_number_plate_shanghai_number_plate_shanghai_component__WEBPACK_IMPORTED_MODULE_12__.NumberPlateShanghaiComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__.SettingsComponent, _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__.PlayerScoreComponent],
  encapsulation: 2,
  data: {
    animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__.slideInAnimation]
  }
});

/***/ }),

/***/ 71134:
/*!*********************************************!*\
  !*** ./src/app/shanghai/shanghai.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShanghaiModule": () => (/* binding */ ShanghaiModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shanghai_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shanghai.component */ 69276);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





class ShanghaiModule {}
ShanghaiModule.ɵfac = function ShanghaiModule_Factory(t) {
  return new (t || ShanghaiModule)();
};
ShanghaiModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ShanghaiModule
});
ShanghaiModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{
    path: '',
    component: _shanghai_component__WEBPACK_IMPORTED_MODULE_0__.ShanghaiComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ShanghaiModule, {
    declarations: [_shanghai_component__WEBPACK_IMPORTED_MODULE_0__.ShanghaiComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 59077:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogComponent": () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~services/application-state.service */ 12711);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);





function ConfirmDialogComponent_mat_dialog_content_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-content", 5)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.data.content);
  }
}
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
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) {
  return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_0__.ApplicationStateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
};
ConfirmDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ConfirmDialogComponent,
  selectors: [["ng-component"]],
  decls: 10,
  vars: 4,
  consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], ["class", "body-2", 4, "ngIf"], [1, "button", "primary", 3, "click"], [1, "button", 3, "click"], [1, "body-2"]],
  template: function ConfirmDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ConfirmDialogComponent_mat_dialog_content_4_Template, 3, 1, "mat-dialog-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-dialog-actions")(6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_6_listener() {
        return ctx.confirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "OK");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_8_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mobile", ctx.application.isMobile);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.data.content);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions],
  styles: [".dialog-container[_ngcontent-%COMP%] {\n  width: 50vw;\n  text-align: center;\n  padding: 20px 0;\n}\n.dialog-container.mobile[_ngcontent-%COMP%] {\n  width: auto;\n}\n.dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 75px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7QUFDSjtBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUFKO0FBR0U7RUFDRSxtQkFBQTtBQURKO0FBSUU7RUFDRSw2QkFBQTtBQUZKO0FBSUk7RUFDRSxXQUFBO0FBRk4iLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuXHJcbiAgJi5tb2JpbGUge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuc3VidGl0bGUtMSB7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIG1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgbWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 22324:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/dialog/dialog.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogComponent": () => (/* binding */ DialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 57822);





function DialogComponent_mat_dialog_content_4_div_3_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DialogComponent_mat_dialog_content_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DialogComponent_mat_dialog_content_4_div_3_mat_icon_3_Template, 2, 0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const player_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("winner", player_r2.win);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r3 + 1, ". ", player_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", player_r2.win);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r2.score);
  }
}
function DialogComponent_mat_dialog_content_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 4)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DialogComponent_mat_dialog_content_4_div_3_Template, 6, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.data.players);
  }
}
class DialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  close() {
    this.dialogRef.close();
  }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) {
  return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
};
DialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DialogComponent,
  selectors: [["ng-component"]],
  decls: 8,
  vars: 3,
  consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], ["class", "body-2", 4, "ngIf"], [1, "button", "primary", 3, "mat-dialog-close"], [1, "body-2"], ["class", "score-line", 3, "winner", 4, "ngFor", "ngForOf"], [1, "score-line"], ["color", "warn", 4, "ngIf"], ["color", "warn"]],
  template: function DialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DialogComponent_mat_dialog_content_4_Template, 4, 2, "mat-dialog-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions")(6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ok");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.data.content || !!ctx.data.players.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
  styles: [".dialog-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding-bottom: 25px;\n  min-width: 280px;\n}\n.dialog-container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  white-space: nowrap;\n}\n.dialog-container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-size: 50px;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   .score-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n}\n.dialog-container[_ngcontent-%COMP%]   .score-line.winner[_ngcontent-%COMP%] {\n  background: var(--basic_1);\n}\n.dialog-container[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 30px;\n  padding: 0;\n  margin: 0;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtBQUNKO0FBRUU7RUFDRSxxQkFBQTtBQUFKO0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBRko7QUFLRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUhKO0FBS0k7RUFDRSwwQkFBQTtBQUhOO0FBUUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFOSjtBQVNFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFQSjtBQVVFO0VBQ0UsbUJBQUE7QUFSSjtBQVdFO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtBQVRKIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1jb250YWluZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgbWluLXdpZHRoOiAyODBweDtcclxuXHJcbiAgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcblxyXG4gIHRkIHtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB9XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5zdWJ0aXRsZS0xIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLnNjb3JlLWxpbmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICYud2lubmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFzaWNfMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLnBsYXllciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIG1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgbWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTAuNXJlbTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 69420:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/game-history-dialog/game-history-dialog.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameHistoryDialogComponent": () => (/* binding */ GameHistoryDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~services/statistics.service */ 17036);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);






function GameHistoryDialogComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 7, stat_r1.s, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 10, ctx_r0.getDuration(stat_r1), "mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](stat_r1.g);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](stat_r1.c);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](stat_r1.r + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.getPlayers(stat_r1.w));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.getPlayers(stat_r1.l));
  }
}
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
      const pna = p.split(_services_statistics_service__WEBPACK_IMPORTED_MODULE_0__.STAT_NAME_SEPARATOR);
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
    return _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.appVersion ? _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.appVersion : '';
  }
}
GameHistoryDialogComponent.ɵfac = function GameHistoryDialogComponent_Factory(t) {
  return new (t || GameHistoryDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
};
GameHistoryDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: GameHistoryDialogComponent,
  selectors: [["ng-component"]],
  decls: 27,
  vars: 3,
  consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], [1, "app-version"], [1, "body-2"], ["cellpadding", "0", "cellspacing", "0", 1, "statistics-table"], [4, "ngFor", "ngForOf"], [1, "button", "primary", 3, "mat-dialog-close"]],
  template: function GameHistoryDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "History");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-dialog-content", 3)(7, "table", 4)(8, "tr")(9, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Duration");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Config");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Round");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Winner(s)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Loser(s)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, GameHistoryDialogComponent_tr_23_Template, 17, 13, "tr", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-dialog-actions")(25, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Ok");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("v", ctx.getAppVersion(), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.data.statistics);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: [".dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n}\n.dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%]   .app-version[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 12px;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n.dialog-container[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%] {\n  height: 85vh;\n  max-height: unset !important;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 0 1rem 0;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.2rem;\n  font-weight: normal;\n  font-size: 13px;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS1oaXN0b3J5LWRpYWxvZy9nYW1lLWhpc3RvcnktZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsZ0JBQUE7QUFESjtBQUdJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFETjtBQUtFO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtBQUhKO0FBTUU7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7QUFKSjtBQU9FO0VBQ0UsZ0JBQUE7QUFMSjtBQU9JO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBTE47QUFPTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUxSO0FBUU07RUFDRSxnQkFBQTtBQU5SIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1jb250YWluZXIge1xyXG5cclxuICAuc3VidGl0bGUtMSB7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG5cclxuICAgIC5hcHAtdmVyc2lvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHRvcDogMTBweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTAuNXJlbTtcclxuICB9XHJcblxyXG4gIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA4NXZoO1xyXG4gICAgbWF4LWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIG1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAgIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuXHJcbiAgICAgIHRoLCB0ZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGg6Zmlyc3QtY2hpbGQsIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 77420:
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/game-statistics-dialog/game-statistics-dialog.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameStatisticsDialogComponent": () => (/* binding */ GameStatisticsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);




function GameStatisticsDialogComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r1.n);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r1.w);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r1.l);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r1.l + stat_r1.w);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.getRatio(stat_r1), " %");
  }
}
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
GameStatisticsDialogComponent.ɵfac = function GameStatisticsDialogComponent_Factory(t) {
  return new (t || GameStatisticsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
};
GameStatisticsDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GameStatisticsDialogComponent,
  selectors: [["ng-component"]],
  decls: 21,
  vars: 2,
  consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], [1, "body-2"], ["cellpadding", "0", "cellspacing", "0", 1, "statistics-table"], [4, "ngFor", "ngForOf"], [1, "button", "primary", 3, "mat-dialog-close"]],
  template: function GameStatisticsDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Statistics");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content", 2)(5, "table", 3)(6, "tr")(7, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Player");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Wins");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Loses");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "All");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Rate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, GameStatisticsDialogComponent_tr_17_Template, 11, 5, "tr", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-dialog-actions")(19, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ok");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.statistics);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions],
  styles: [".dialog-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 0 1rem 0;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.2rem;\n  font-weight: normal;\n  font-size: 13px;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS1zdGF0aXN0aWNzLWRpYWxvZy9nYW1lLXN0YXRpc3RpY3MtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSjtBQUVFO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtBQUFKO0FBR0U7RUFFRSxnQkFBQTtBQUZKO0FBSUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQUlNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRlI7QUFLTTtFQUNFLGdCQUFBO0FBSFIiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLnN1YnRpdGxlLTEge1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICB9XHJcblxyXG4gIG1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XHJcbiAgfVxyXG5cclxuICBtYXQtZGlhbG9nLWNvbnRlbnQge1xyXG5cclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG5cclxuICAgICAgdGgsIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aDpmaXJzdC1jaGlsZCwgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 61868:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/game-toolbar/game-toolbar.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameToolbarComponent": () => (/* binding */ GameToolbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~services/application-state.service */ 12711);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~services/dialog.service */ 74564);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 57822);





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
  showConfirmation(content, callback) {
    if (this.playground.gameHistory.length) {
      this.dialogService.openConfirmDialog('Confirmation', content).afterClosed().subscribe(data => {
        if (data) {
          callback();
        }
      });
    } else {
      callback();
    }
  }
  getRound() {
    const round = this.playground.game.round;
    return this.reversRound ? this.reversRound - round : round + 1;
  }
}
GameToolbarComponent.ɵfac = function GameToolbarComponent_Factory(t) {
  return new (t || GameToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_0__.ApplicationStateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__.DialogService));
};
GameToolbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: GameToolbarComponent,
  selectors: [["app-game-toolbar"]],
  inputs: {
    playground: "playground",
    reversRound: "reversRound",
    info: "info"
  },
  decls: 13,
  vars: 0,
  consts: [[1, "toolbar"], [1, "button", "icon-button", 3, "click"]],
  template: function GameToolbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_1_listener() {
        return ctx.quit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_4_listener() {
        return ctx.showSettings();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "build");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_7_listener() {
        return ctx.newGame();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "refresh");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_10_listener() {
        return ctx.undo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "undo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
  styles: [".toolbar[_ngcontent-%COMP%] {\n  display: flex;\n}\n.toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 2px 2px 0 2px;\n  flex: 1;\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10b29sYmFyL2dhbWUtdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjtBQUNFO0VBQ0UscUJBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDJweCAycHggMCAycHg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5866:
/*!********************************************************************************************************!*\
  !*** ./src/app/shared/components/game-type-statistics-dialog/game-type-statistics-dialog.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameTypeStatisticsDialogComponent": () => (/* binding */ GameTypeStatisticsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);




function GameTypeStatisticsDialogComponent_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r1.count);
  }
}
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
GameTypeStatisticsDialogComponent.ɵfac = function GameTypeStatisticsDialogComponent_Factory(t) {
  return new (t || GameTypeStatisticsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
};
GameTypeStatisticsDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GameTypeStatisticsDialogComponent,
  selectors: [["ng-component"]],
  decls: 15,
  vars: 2,
  consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], [1, "body-2"], ["cellpadding", "0", "cellspacing", "0", 1, "statistics-table"], [4, "ngFor", "ngForOf"], [1, "button", "primary", 3, "mat-dialog-close"]],
  template: function GameTypeStatisticsDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Most Popular Games");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content", 2)(5, "table", 3)(6, "tr")(7, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Game title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Count");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GameTypeStatisticsDialogComponent_tr_11_Template, 5, 2, "tr", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-dialog-actions")(13, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ok");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.statistics);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions],
  styles: [".dialog-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 0 1rem 0;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.2rem;\n  font-weight: normal;\n  font-size: 13px;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10eXBlLXN0YXRpc3RpY3MtZGlhbG9nL2dhbWUtdHlwZS1zdGF0aXN0aWNzLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0FBQ0o7QUFFRTtFQUNFLDZCQUFBO0VBQ0Esc0JBQUE7QUFBSjtBQUdFO0VBQ0UsZ0JBQUE7QUFESjtBQUdJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBRE47QUFHTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURSO0FBSU07RUFDRSxnQkFBQTtBQUZSIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1jb250YWluZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5zdWJ0aXRsZS0xIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgfVxyXG5cclxuICBtYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgbWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG5cclxuICAgICAgdGgsIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aDpmaXJzdC1jaGlsZCwgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 13686:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/menu/menu.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _app_game_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-game-types */ 99893);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~services/dialog.service */ 74564);
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~services/statistics.service */ 17036);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~services/application-state.service */ 12711);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);








const _c0 = function (a0) {
  return [a0];
};
function MenuComponent_div_4_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 8)(1, "div", 9)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const g_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const k_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate2"]("button gameSelectBox ", "menu-button-" + k_r1 + "" + i_r4, " ", g_r3.data.bot ? "hasBot" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, "/" + g_r3.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](g_r3.data.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](g_r3.data.icon);
  }
}
function MenuComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MenuComponent_div_4_button_1_Template, 6, 9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const k_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.getGameList().slice(k_r1 * 3, k_r1 * 3 + 3));
  }
}
const _c1 = function () {
  return [0, 1, 2, 3];
};
class MenuComponent {
  constructor(router, dialog, statisticsService, applicationStateService) {
    this.router = router;
    this.dialog = dialog;
    this.statisticsService = statisticsService;
    this.applicationStateService = applicationStateService;
  }
  randomGame() {
    const random = Math.floor(Math.random() * _app_game_types__WEBPACK_IMPORTED_MODULE_0__.routes.length);
    this.router.navigate(['/' + _app_game_types__WEBPACK_IMPORTED_MODULE_0__.routes[random].path]);
  }
  getGameList() {
    return _app_game_types__WEBPACK_IMPORTED_MODULE_0__.routes.filter(r => !!r.data);
  }
  openGameTypeStatistics() {
    this.dialog.openGameTypeStatistics(this.statisticsService.getGameTypeStatistics());
    // this.statisticsService.printStatistics();
  }

  openGameStatistics() {
    this.dialog.openGameHistory(this.statisticsService.getGameStatistics());
  }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) {
  return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_2__.StatisticsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_3__.ApplicationStateService));
};
MenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: MenuComponent,
  selectors: [["ng-component"]],
  decls: 12,
  vars: 2,
  consts: [["id", "menu_title"], [3, "click"], ["id", "menu"], ["class", "button-line", 4, "ngFor", "ngForOf"], [1, "version"], [1, "button", "primary", "icon", 3, "click"], [1, "button-line"], [3, "routerLink", "class", 4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "menu-item-container"], [1, "title"]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_h1_click_1_listener() {
        return ctx.randomGame();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Select Game!");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MenuComponent_div_4_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_6_listener() {
        return ctx.openGameTypeStatistics();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "stars");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_9_listener() {
        return ctx.openGameStatistics();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "history");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
  styles: ["#menu_title[_ngcontent-%COMP%] {\n  padding: 50px;\n  text-align: center;\n  cursor: pointer;\n}\n\n#menu[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n#menu[_ngcontent-%COMP%]   .button-line[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: center;\n}\n#menu[_ngcontent-%COMP%]   .menu-item-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100%;\n}\n#menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%] {\n  height: 190px;\n  width: 190px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0;\n  margin: 0;\n  color: var(--text_color);\n}\n#menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  width: 60px;\n  height: 60px;\n}\n#menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  white-space: pre;\n  text-align: center;\n  padding: 10px;\n  line-height: 25px;\n  letter-spacing: 1px;\n  font-weight: normal;\n  width: 170px;\n  margin: 0 0 25px 0;\n  background: rgba(0, 0, 0, 0.1);\n}\n#menu[_ngcontent-%COMP%]   .hasBot[_ngcontent-%COMP%]:after {\n  content: \"B\";\n  position: relative;\n  top: 72px;\n  right: 12px;\n  margin: -4px;\n}\n#menu[_ngcontent-%COMP%]   .menu-button-00[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_1a), var(--menu_1b));\n}\n#menu[_ngcontent-%COMP%]   .menu-button-01[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_3a), var(--menu_3b));\n}\n#menu[_ngcontent-%COMP%]   .menu-button-02[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_2a), var(--menu_2b));\n}\n#menu[_ngcontent-%COMP%]   .menu-button-10[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_2a), var(--menu_2b));\n}\n#menu[_ngcontent-%COMP%]   .menu-button-11[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_1a), var(--menu_1b));\n}\n#menu[_ngcontent-%COMP%]   .menu-button-12[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_3a), var(--menu_3b));\n}\n#menu[_ngcontent-%COMP%]   .menu-button-20[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_1a), var(--menu_1b));\n}\n#menu[_ngcontent-%COMP%]   .menu-button-21[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_3a), var(--menu_3b));\n}\n#menu[_ngcontent-%COMP%]   .menu-button-22[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_2a), var(--menu_2b));\n}\n#menu[_ngcontent-%COMP%]   .menu-button-30[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_2a), var(--menu_2b));\n}\n#menu[_ngcontent-%COMP%]   .menu-button-31[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_1a), var(--menu_1b));\n}\n#menu[_ngcontent-%COMP%]   .menu-button-32[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_3a), var(--menu_3b));\n}\n\n.version[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 5px;\n}\n\n@media screen and (max-width: 570px) {\n  #menu_title[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  #menu[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n  #menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%] {\n    width: calc(35vw - 20px);\n    height: calc(35vw - 20px);\n  }\n  #menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: calc(19vw - 28px);\n    width: auto;\n    height: auto;\n  }\n  #menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 10px;\n    text-align: center;\n    padding: 4px;\n    letter-spacing: 0px;\n    width: calc(35vw - 28px);\n    margin: 0 0 12px 0;\n    line-height: 20px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  #menu[_ngcontent-%COMP%]   .hasBot[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtBQURKO0FBR0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFETjtBQUlJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFGTjtBQU1FO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSko7QUFPRTtFQUNFLGtFQUFBO0FBTEo7QUFRRTtFQUNFLGtFQUFBO0FBTko7QUFTRTtFQUNFLGtFQUFBO0FBUEo7QUFVRTtFQUNFLGtFQUFBO0FBUko7QUFXRTtFQUNFLGtFQUFBO0FBVEo7QUFZRTtFQUNFLGtFQUFBO0FBVko7QUFhRTtFQUNFLGtFQUFBO0FBWEo7QUFjRTtFQUNFLGtFQUFBO0FBWko7QUFlRTtFQUNFLGtFQUFBO0FBYko7QUFnQkU7RUFDRSxrRUFBQTtBQWRKO0FBaUJFO0VBQ0Usa0VBQUE7QUFmSjtBQWtCRTtFQUNFLGtFQUFBO0FBaEJKOztBQW9CQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQWpCRjs7QUFxQkE7RUFDRTtJQUNFLGFBQUE7RUFsQkY7RUFxQkE7SUFDRSxjQUFBO0VBbkJGO0VBcUJFO0lBQ0Usd0JBQUE7SUFDQSx5QkFBQTtFQW5CSjtFQXFCSTtJQUNFLDRCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFuQk47RUFzQkk7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLHVCQUFBO0VBcEJOO0VBd0JFO0lBQ0UsYUFBQTtFQXRCSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiI21lbnVfdGl0bGUge1xuICBwYWRkaW5nOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI21lbnUge1xuICB3aWR0aDogMTAwdnc7XG5cbiAgLmJ1dHRvbi1saW5lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5tZW51LWl0ZW0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5nYW1lU2VsZWN0Qm94IHtcbiAgICBoZWlnaHQ6IDE5MHB4O1xuICAgIHdpZHRoOiAxOTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHZhcigtLXRleHRfY29sb3IpO1xuXG4gICAgbWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIHdpZHRoOiAxNzBweDtcbiAgICAgIG1hcmdpbjogMCAwIDI1cHggMDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG4gIH1cblxuICAuaGFzQm90OmFmdGVyIHtcbiAgICBjb250ZW50OiAnQic7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNzJweDtcbiAgICByaWdodDogMTJweDtcbiAgICBtYXJnaW46IC00cHg7XG4gIH1cblxuICAubWVudS1idXR0b24tMDAge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8xYSksIHZhcigtLW1lbnVfMWIpKTtcbiAgfVxuXG4gIC5tZW51LWJ1dHRvbi0wMSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1tZW51XzNhKSwgdmFyKC0tbWVudV8zYikpO1xuICB9XG5cbiAgLm1lbnUtYnV0dG9uLTAyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLW1lbnVfMmEpLCB2YXIoLS1tZW51XzJiKSk7XG4gIH1cblxuICAubWVudS1idXR0b24tMTAge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8yYSksIHZhcigtLW1lbnVfMmIpKTtcbiAgfVxuXG4gIC5tZW51LWJ1dHRvbi0xMSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1tZW51XzFhKSwgdmFyKC0tbWVudV8xYikpO1xuICB9XG5cbiAgLm1lbnUtYnV0dG9uLTEyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLW1lbnVfM2EpLCB2YXIoLS1tZW51XzNiKSk7XG4gIH1cblxuICAubWVudS1idXR0b24tMjAge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8xYSksIHZhcigtLW1lbnVfMWIpKTtcbiAgfVxuXG4gIC5tZW51LWJ1dHRvbi0yMSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1tZW51XzNhKSwgdmFyKC0tbWVudV8zYikpO1xuICB9XG5cbiAgLm1lbnUtYnV0dG9uLTIyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLW1lbnVfMmEpLCB2YXIoLS1tZW51XzJiKSk7XG4gIH1cblxuICAubWVudS1idXR0b24tMzAge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8yYSksIHZhcigtLW1lbnVfMmIpKTtcbiAgfVxuXG4gIC5tZW51LWJ1dHRvbi0zMSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1tZW51XzFhKSwgdmFyKC0tbWVudV8xYikpO1xuICB9XG5cbiAgLm1lbnUtYnV0dG9uLTMyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLW1lbnVfM2EpLCB2YXIoLS1tZW51XzNiKSk7XG4gIH1cbn1cblxuLnZlcnNpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDVweDtcbiAgLy9jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIDQwMCk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3MHB4KSB7XG4gICNtZW51X3RpdGxlIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgI21lbnUge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuXG4gICAgLmdhbWVTZWxlY3RCb3gge1xuICAgICAgd2lkdGg6IGNhbGMoMzV2dyAtIDIwcHgpO1xuICAgICAgaGVpZ2h0OiBjYWxjKDM1dncgLSAyMHB4KTtcblxuICAgICAgbWF0LWljb24ge1xuICAgICAgICBmb250LXNpemU6IGNhbGMoMTl2dyAtIDI4cHgpO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgICAgICB3aWR0aDogY2FsYygzNXZ3IC0gMjhweCk7XG4gICAgICAgIG1hcmdpbjogMCAwIDEycHggMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5oYXNCb3Q6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 77107:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/number-plate-shanghai/number-plate-shanghai.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberPlateShanghaiComponent": () => (/* binding */ NumberPlateShanghaiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~services/game.service */ 59208);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~services/dialog.service */ 74564);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~services/application-state.service */ 12711);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);





function NumberPlateShanghaiComponent_div_4_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NumberPlateShanghaiComponent_div_4_button_1_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const j_r3 = restoredCtx.$implicit;
      const k_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.throwNumber(j_r3 + k_r1 * 3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const j_r3 = ctx.$implicit;
    const k_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", j_r3 + k_r1 * 3, " ");
  }
}
const _c0 = function () {
  return [1, 2, 3];
};
function NumberPlateShanghaiComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NumberPlateShanghaiComponent_div_4_button_1_Template, 2, 1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
  }
}
const _c1 = function () {
  return [0, 1, 2];
};
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
    this.dialogService.openConfirmDialog('Confirmation', 'Are you sure?').afterClosed().subscribe(data => {
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
NumberPlateShanghaiComponent.ɵfac = function NumberPlateShanghaiComponent_Factory(t) {
  return new (t || NumberPlateShanghaiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationStateService));
};
NumberPlateShanghaiComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: NumberPlateShanghaiComponent,
  selectors: [["app-number-plate-shanghai"]],
  inputs: {
    actualIndex: "actualIndex",
    playground: "playground"
  },
  decls: 10,
  vars: 3,
  consts: [[1, "side-right"], [1, "numbers"], ["class", "button-line", 4, "ngFor", "ngForOf"], [1, "button-line"], [1, "button", "number", "next", 3, "click"], [1, "button", "number", 3, "click"], ["class", "button number primary", 3, "click", 4, "ngFor", "ngForOf"], [1, "button", "number", "primary", 3, "click"]],
  template: function NumberPlateShanghaiComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NumberPlateShanghaiComponent_div_4_Template, 2, 2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NumberPlateShanghaiComponent_Template_button_click_6_listener() {
        return ctx.next();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NumberPlateShanghaiComponent_Template_button_click_8_listener() {
        return ctx.win();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " S ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Field: ", ctx.actualIndex + 1, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
  styles: [".side-right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-flow: row wrap;\n  height: 90vh;\n  margin-top: 20px;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  margin: 2px;\n  font-size: 14px;\n  height: 26vw;\n  width: 26vw;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 5px;\n  font-size: 30px;\n}\n.side-right[_ngcontent-%COMP%]   .number.next[_ngcontent-%COMP%] {\n  width: calc(52vw + 4px);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlLXNoYW5naGFpL251bWJlci1wbGF0ZS1zaGFuZ2hhaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSjtBQUNJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFDTjtBQUVJO0VBQ0UsdUJBQUE7QUFBTiIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlLXJpZ2h0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gIC5udW1iZXIge1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDI2dnc7XHJcbiAgICB3aWR0aDogMjZ2dztcclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLm5leHQge1xyXG4gICAgICB3aWR0aDogY2FsYyg1MnZ3ICsgNHB4KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 16218:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberPlateVisualComponent": () => (/* binding */ NumberPlateVisualComponent)
/* harmony export */ });
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground.model */ 37954);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ 17659);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~services/game.service */ 59208);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~services/application-state.service */ 12711);







const ARC_WIDTH = 0.295;
class NumberPlateVisualComponent {
  constructor(game, application) {
    this.game = game;
    this.application = application;
    this.numbers = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
    this.ngUnsubscribeHasChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  ngOnInit() {
    this.drawTable();
    this.playground.hasChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribeHasChange)).subscribe(flag => this.drawTable());
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
    d3__WEBPACK_IMPORTED_MODULE_1__.select('#darts-table-plate svg').remove();
    const svg = d3__WEBPACK_IMPORTED_MODULE_1__.select('#darts-table-plate').append('svg').attr('width', '98%').attr('height', '98%').attr('viewBox', '0 0 330 330');
    const numbers = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
    const bullIndex = this.getFieldIndex(25);
    /*if (this.playground.zeroEnabled) {
      this.drawArcPosition(svg, 20, 25, 30, 'field-color primary');
      this.drawText(svg, '0', 0, 25, 23, -1, 1,
        'number-text', () => this.throwZero());
    }*/
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
    } else if (this.playground.isSecondaryField(fieldIndex)) {
      return 'accent';
    } else if (this.playground.isAlertField(fieldIndex)) {
      return 'alert';
    } else if (!this.playground.isFieldEnabled(fieldIndex)) {
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
      this.playground.throwNumber([this.playground.isFieldEnabled(fieldIndex) ? _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground.getFieldValueFromIndex(fieldIndex) : 0, _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground.getFieldValueFromIndex(fieldIndex)]);
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
    svg.append('text').attr('x', x).attr('y', y).attr('dy', '1em').attr('text-anchor', 'middle').attr('transform', 'rotate(' + rotate + ', 165, 165)').attr('class', `field_${fieldIndex}_${multi} ${className}`).text(text).on('click', () => onclick ? onclick() : this.throwNumber(fieldIndex, multi));
  }
  drawArc(svg, innerRadius, outerRadius, startAngle, endAngle, styleClass, fieldIndex, multi) {
    svg.append('path').attr('transform', 'translate(165, 165)').attr('d', d3__WEBPACK_IMPORTED_MODULE_1__.arc().innerRadius(innerRadius).outerRadius(outerRadius).startAngle(startAngle).endAngle(endAngle)).attr('class', `field_${fieldIndex}_${multi} ${styleClass} ${this.getNumberColor(fieldIndex)}`).on('click', () => this.throwNumber(fieldIndex, multi));
  }
  drawArcPosition(svg, radius, x, y, styleClass) {
    svg.append('path').attr('transform', 'translate(' + x + ', ' + y + ')').attr('d', d3__WEBPACK_IMPORTED_MODULE_1__.arc().innerRadius(0).outerRadius(radius).startAngle(0).endAngle(Math.PI * 4)).attr('class', styleClass).on('click', () => this.throwZero());
  }
  getFieldIndex(field) {
    return field === 25 ? 20 : field - 1;
  }
}
NumberPlateVisualComponent.ɵfac = function NumberPlateVisualComponent_Factory(t) {
  return new (t || NumberPlateVisualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_2__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_3__.ApplicationStateService));
};
NumberPlateVisualComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: NumberPlateVisualComponent,
  selectors: [["app-number-plate-visual"]],
  inputs: {
    playground: "playground"
  },
  decls: 7,
  vars: 2,
  consts: [[1, "side-right_visual"], ["id", "darts-table-plate"], [1, "buttons"], [1, "button", "number", 3, "disabled", "click"], [1, "button", "number", "zero", 3, "disabled", "click"]],
  template: function NumberPlateVisualComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NumberPlateVisualComponent_Template_button_click_3_listener() {
        return ctx.next();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NumberPlateVisualComponent_Template_button_click_5_listener() {
        return ctx.throwZero();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.playground.nextEnabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.playground.zeroEnabled);
    }
  },
  styles: [".side-right_visual {\n  width: 100vw;\n}\n.side-right_visual h1 {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  top: -65px;\n}\n.side-right_visual #darts-table-plate {\n  width: 100%;\n  text-align: center;\n}\n.side-right_visual #darts-table-plate .number-text, .side-right_visual #darts-table-plate .field-note {\n  font-family: sans-serif;\n  font-weight: bold;\n  font-size: 11px;\n}\n.side-right_visual #darts-table-plate .number-text.disabled, .side-right_visual #darts-table-plate .field-note.disabled {\n  opacity: 0.3;\n}\n.side-right_visual #darts-table-plate .number-text.smaller, .side-right_visual #darts-table-plate .field-note.smaller {\n  font-size: 8px;\n}\n.side-right_visual #darts-table-plate .field-note {\n  font-size: 6px;\n}\n.side-right_visual #darts-table-plate path, .side-right_visual #darts-table-plate text {\n  cursor: pointer;\n}\n.side-right_visual #darts-table-plate .field-color.disabled, .side-right_visual #darts-table-plate .field-color-m.disabled {\n  opacity: 0.4;\n}\n.side-right_visual #darts-table-plate .field-color.clicked, .side-right_visual #darts-table-plate .field-color-m.clicked {\n  animation-name: field-clicked;\n  animation-duration: 200ms;\n}\n.side-right_visual .buttons {\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n}\n.side-right_visual button {\n  margin-right: 3px;\n  width: 60px;\n  height: 38px;\n}\n.side-right_visual button.zero {\n  width: 44px;\n}\n\n@keyframes field-clicked {\n  0% {\n    fill: var(--text_color);\n  }\n  100% {\n    fill: var(--table_normal_primary);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlLXZpc3VhbC9udW1iZXItcGxhdGUtdmlzdWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBQUo7QUFFSTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQU47QUFFTTtFQUNFLFlBQUE7QUFBUjtBQUdNO0VBQ0UsY0FBQTtBQURSO0FBS0k7RUFDRSxjQUFBO0FBSE47QUFNSTtFQUNFLGVBQUE7QUFKTjtBQVFNO0VBQ0UsWUFBQTtBQU5SO0FBU007RUFDRSw2QkFBQTtFQUNBLHlCQUFBO0FBUFI7QUFZRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFWSjtBQWFFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVhKO0FBYUk7RUFDRSxXQUFBO0FBWE47O0FBZ0JBO0VBQ0U7SUFDRSx1QkFBQTtFQWJGO0VBZUE7SUFDRSxpQ0FBQTtFQWJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZS1yaWdodF92aXN1YWwge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuXHJcbiAgaDEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0b3A6IC02NXB4O1xyXG4gIH1cclxuXHJcbiAgI2RhcnRzLXRhYmxlLXBsYXRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5udW1iZXItdGV4dCwgLmZpZWxkLW5vdGUge1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuXHJcbiAgICAgICYuZGlzYWJsZWQge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zbWFsbGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5maWVsZC1ub3RlIHtcclxuICAgICAgZm9udC1zaXplOiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgcGF0aCwgdGV4dCB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZmllbGQtY29sb3IsIC5maWVsZC1jb2xvci1tIHtcclxuICAgICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmNsaWNrZWQge1xyXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmaWVsZC1jbGlja2VkO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMjAwbXM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idXR0b25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG5cclxuICAgICYuemVybyB7XHJcbiAgICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmaWVsZC1jbGlja2VkIHtcclxuICAwJSB7XHJcbiAgICBmaWxsOiB2YXIoLS10ZXh0X2NvbG9yKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBmaWxsOiB2YXIoLS10YWJsZV9ub3JtYWxfcHJpbWFyeSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 25513:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/number-plate/number-plate.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberPlateComponent": () => (/* binding */ NumberPlateComponent)
/* harmony export */ });
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground.model */ 37954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~services/game.service */ 59208);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~services/application-state.service */ 12711);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 57822);






function NumberPlateComponent_ng_container_1_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.playground.getFieldIcon(i_r3 - 1));
  }
}
function NumberPlateComponent_ng_container_1_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.playground.getFieldNote(i_r3 - 1));
  }
}
function NumberPlateComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NumberPlateComponent_ng_container_1_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const i_r3 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.throwNumber(i_r3 - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NumberPlateComponent_ng_container_1_mat_icon_2_Template, 2, 1, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NumberPlateComponent_ng_container_1_p_3_Template, 2, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("button number ", ctx_r0.getNumberColor(i_r3 - 1), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.isNumberDisabled(i_r3 - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.playground.getFieldIcon(i_r3 - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.playground.getFieldNote(i_r3 - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r3);
  }
}
function NumberPlateComponent_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.playground.getFieldIcon(20));
  }
}
function NumberPlateComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.playground.getFieldNote(20));
  }
}
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
    } else if (this.playground.isSecondaryField(fieldIndex)) {
      return 'accent';
    }
    return '';
  }
  isNumberDisabled(fieldIndex) {
    return !this.playground.isFieldEnabled(fieldIndex) && !this.getNumberColor(fieldIndex);
  }
  throwNumber(fieldIndex) {
    this.playground.throwNumber([this.playground.isFieldEnabled(fieldIndex) ? _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground.getFieldValueFromIndex(fieldIndex) : 0, _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground.getFieldValueFromIndex(fieldIndex)]);
  }
}
NumberPlateComponent.ɵfac = function NumberPlateComponent_Factory(t) {
  return new (t || NumberPlateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_1__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationStateService));
};
NumberPlateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: NumberPlateComponent,
  selectors: [["app-number-plate"]],
  inputs: {
    playground: "playground"
  },
  decls: 19,
  vars: 17,
  consts: [[1, "side-right"], [4, "ngFor", "ngForOf"], [3, "disabled", "click"], [4, "ngIf"], ["class", "field-note", 4, "ngIf"], [1, "field-number"], [1, "button", "number", 3, "disabled", "click"], [1, "field-note"]],
  template: function NumberPlateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NumberPlateComponent_ng_container_1_Template, 6, 7, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_2_listener() {
        return ctx.throwNumber(20);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NumberPlateComponent_mat_icon_3_Template, 2, 1, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NumberPlateComponent_p_4_Template, 2, 1, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Bull");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_7_listener() {
        return ctx.playground.doublePoint();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "2x");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_10_listener() {
        return ctx.playground.triplePoint();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "3x");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_13_listener() {
        return ctx.playground.skip();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_16_listener() {
        return ctx.playground.throwNumber([0, 0]);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.getNumbers());
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("button number ", ctx.getNumberColor(20), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isNumberDisabled(20));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.playground.getFieldIcon(20));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.playground.getFieldNote(20));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("primary", ctx.playground.multiplier === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.playground.multiEnabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("primary", ctx.playground.multiplier === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.playground.multiEnabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.playground.nextEnabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.playground.zeroEnabled);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
  styles: [".side-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: wrap row;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  margin: 2px;\n  font-size: 14px;\n  width: calc(20% - 6px);\n  height: 18vw;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .field-number[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .field-note[_ngcontent-%COMP%] {\n  font-size: 9px;\n  width: 13vw;\n  overflow: hidden;\n  word-break: normal;\n  white-space: pre-line;\n  line-height: 16px;\n  text-align: right;\n  position: absolute;\n  margin: 4px 7px 0 0;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .field-note-bottom[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 13vw;\n  overflow: hidden;\n  word-break: normal;\n  white-space: pre-line;\n  line-height: 16px;\n  text-align: left;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlL251bWJlci1wbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDRSxlQUFBO0FBQ047QUFFSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFOO0FBR0k7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRE47QUFJSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUZOO0FBTUU7RUFDRSxZQUFBO0FBSkoiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZS1yaWdodCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZmxvdzogd3JhcCByb3c7XHJcblxyXG4gIC5udW1iZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDUgLSA2cHgpO1xyXG4gICAgaGVpZ2h0OiAxOHZ3O1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5maWVsZC1udW1iZXIge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5maWVsZC1ub3RlIHtcclxuICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgIHdpZHRoOiAxM3Z3O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB3b3JkLWJyZWFrOiBub3JtYWw7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG1hcmdpbjogNHB4IDdweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpZWxkLW5vdGUtYm90dG9tIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB3aWR0aDogMTN2dztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgd29yZC1icmVhazogbm9ybWFsO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm51bWJlcjpkaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 99078:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/player-score/player-score.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerScoreComponent": () => (/* binding */ PlayerScoreComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~services/application-state.service */ 12711);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 57822);




function PlayerScoreComponent_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "offline_bolt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PlayerScoreComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx_r1.player.getThrowsTotal() ? "0" : ctx_r1.player.getThrowsTotal());
  }
}
function PlayerScoreComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.player.score);
  }
}
function PlayerScoreComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Life: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.player.life);
  }
}
class PlayerScoreComponent {
  constructor(application) {
    this.application = application;
    this.hasContent = true;
    this.scoreDisplayed = true;
    this.lifeDisplayed = false;
    this.highlighted = false;
  }
}
PlayerScoreComponent.ɵfac = function PlayerScoreComponent_Factory(t) {
  return new (t || PlayerScoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_0__.ApplicationStateService));
};
PlayerScoreComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PlayerScoreComponent,
  selectors: [["app-player-score"]],
  inputs: {
    player: "player",
    hasContent: "hasContent",
    scoreDisplayed: "scoreDisplayed",
    lifeDisplayed: "lifeDisplayed",
    highlighted: "highlighted"
  },
  decls: 16,
  vars: 10,
  consts: [[1, "player_info"], [1, "name"], [4, "ngIf"], [1, "shoot-score"], [1, "shoots"], [1, "shoot"], ["class", "shoot total", 4, "ngIf"], ["class", "score", 4, "ngIf"], [1, "clear"], [1, "shoot", "total"], [1, "score"]],
  template: function PlayerScoreComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PlayerScoreComponent_mat_icon_2_Template, 2, 0, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, PlayerScoreComponent_div_12_Template, 2, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PlayerScoreComponent_div_13_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, PlayerScoreComponent_div_14_Template, 4, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("player_info_visual", !ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.highlighted);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.player.name, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx.player.throws[0] ? "-" : ctx.player.throws[0]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx.player.throws[1] ? "-" : ctx.player.throws[1]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx.player.throws[2] ? "-" : ctx.player.throws[2]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.scoreDisplayed);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.scoreDisplayed);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lifeDisplayed);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
  styles: [".player_info {\n  height: 45px;\n  padding-left: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: calc(100% - 10px);\n}\n.player_info .name {\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: calc(5px + 1vw);\n}\n.player_info .name mat-icon {\n  margin-right: 10px;\n  font-size: calc(20px + 1vw);\n}\n.player_info .shoot-score {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 12px;\n}\n.player_info .shoots {\n  display: flex;\n  justify-content: flex-end;\n}\n.player_info .shoots .shoot {\n  margin: 0.1vw;\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 4vw;\n  height: 3vw;\n  font-size: calc(6px + 1vw);\n}\n.player_info .shoots .shoot.total {\n  margin-left: 10px;\n}\n.player_info .score {\n  font-size: 3.2vw;\n  letter-spacing: 0.5vw;\n  font-weight: bold;\n  margin-left: 20px;\n  text-align: right;\n  white-space: nowrap;\n  width: 25px;\n}\n.player_info .score label {\n  font-size: 1vw;\n  letter-spacing: 0.2vw;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNjb3JlL3BsYXllci1zY29yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFDSjtBQUNJO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtBQUNOO0FBR0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBRko7QUFJSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQUZOO0FBSU07RUFDRSxpQkFBQTtBQUZSO0FBT0U7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBTEo7QUFPSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUxOIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXllcl9pbmZvIHtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xyXG5cclxuICAubmFtZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGZvbnQtc2l6ZTogY2FsYyg1cHggKyAxdncpO1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IGNhbGMoMjBweCArIDF2dyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2hvb3Qtc2NvcmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuc2hvb3RzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgIC5zaG9vdCB7XHJcbiAgICAgIG1hcmdpbjogMC4xdnc7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiA0dnc7XHJcbiAgICAgIGhlaWdodDogM3Z3O1xyXG4gICAgICBmb250LXNpemU6IGNhbGMoNnB4ICsgMXZ3KTtcclxuXHJcbiAgICAgICYudG90YWwge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2NvcmUge1xyXG4gICAgZm9udC1zaXplOiAzLjJ2dztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjV2dztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMjVweDtcclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ydnc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 85941:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/player-settings/player-settings.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerSettingsComponent": () => (/* binding */ PlayerSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~services/application-state.service */ 12711);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 59121);









function PlayerSettingsComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r4, " ");
  }
}
function PlayerSettingsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayerSettingsComponent_div_13_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const player_r5 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.playground.removePlayer(player_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "remove_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const player_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](player_r5.name);
  }
}
class PlayerSettingsComponent {
  constructor(application) {
    this.application = application;
    this.storedPlayers = [];
    this.storedPlayers = this.application.getStoredPlayers();
  }
  getOptions() {
    return this.storedPlayers.filter(o => this.playground.game.players.map(p => p.name).indexOf(o) === -1);
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
PlayerSettingsComponent.ɵfac = function PlayerSettingsComponent_Factory(t) {
  return new (t || PlayerSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_0__.ApplicationStateService));
};
PlayerSettingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PlayerSettingsComponent,
  selectors: [["app-player-settings"]],
  inputs: {
    playground: "playground"
  },
  decls: 14,
  vars: 5,
  consts: [[1, "add-player"], ["appearance", "outline", 1, "big"], ["type", "text", "matInput", "", "placeholder", "Enter name", 3, "disabled", "matAutocomplete"], ["playerNameInput", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 3, "disabled", "click"], [1, "player-table"], ["class", "player-row", 4, "ngFor", "ngForOf"], [3, "value"], [1, "player-row"], [1, "player-name"], ["mat-icon-button", "", 3, "click"]],
  template: function PlayerSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Player name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-autocomplete", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function PlayerSettingsComponent_Template_mat_autocomplete_optionSelected_6_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.playerSelected($event, _r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PlayerSettingsComponent_mat_option_8_Template, 2, 2, "mat-option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayerSettingsComponent_Template_button_click_9_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.addPlayer(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "add_circle");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PlayerSettingsComponent_div_13_Template, 6, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.playground.canAddPlayer())("matAutocomplete", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getOptions());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.playground.canAddPlayer());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.playground.game.players);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocompleteTrigger],
  styles: [".add-player[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.player-table[_ngcontent-%COMP%] {\n  width: 60.8vw;\n}\n.player-table[_ngcontent-%COMP%]   .player-row[_ngcontent-%COMP%] {\n  height: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n  font-weight: bold;\n  border-radius: 4px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNldHRpbmdzL3BsYXllci1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7QUFBRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLXBsYXllciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnBsYXllci10YWJsZSAge1xyXG4gIHdpZHRoOiA2MC44dnc7XHJcbiAgLnBsYXllci1yb3cge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 33668:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/settings/settings.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~services/dialog.service */ 74564);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~components/player-settings/player-settings.component */ 85941);




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
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
  return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_0__.DialogService));
};
SettingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SettingsComponent,
  selectors: [["app-settings"]],
  inputs: {
    playground: "playground"
  },
  ngContentSelectors: _c0,
  decls: 18,
  vars: 2,
  consts: [[1, "settings"], [3, "playground"], [1, "button", "shortmedium", 3, "click"], ["color", "primary", 1, "button", "shortmedium", 3, "click"]],
  template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Players");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-player-settings", 1)(6, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_9_listener() {
        return ctx.openStatistics();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Rank");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_11_listener() {
        return ctx.openHistory();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "History");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_14_listener() {
        return ctx.playground.newGame();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Start");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_16_listener() {
        return ctx.playground.quit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.playground.gameTitle, " Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("playground", ctx.playground);
    }
  },
  dependencies: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDivider, _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_1__.PlayerSettingsComponent],
  styles: [".settings {\n  padding: 10px;\n  width: calc(100vw - 20px);\n  height: calc(100vh - 20px);\n  overflow: auto;\n}\n.settings h2 {\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  margin-left: 5px;\n}\n.settings mat-divider {\n  clear: both;\n  margin: 5px 0;\n}\n.settings .field-set {\n  display: flex;\n}\n.settings .field-set mat-form-field {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7QUFESjtBQUdJO0VBQ0Usa0JBQUE7QUFETiIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR0aW5ncyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogY2FsYygxMDB2dyAtIDIwcHgpO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIwcHgpO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICBoMiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG5cclxuICBtYXQtZGl2aWRlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgfVxyXG5cclxuICAuZmllbGQtc2V0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 29294:
/*!*************************************************************!*\
  !*** ./src/app/shared/models/application-settings.model.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationSettings": () => (/* binding */ ApplicationSettings)
/* harmony export */ });
class ApplicationSettings {
  constructor() {
    this.theme = 0;
    this.details = 0;
  }
}

/***/ }),

/***/ 84814:
/*!****************************************************!*\
  !*** ./src/app/shared/models/field-value.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldValue": () => (/* binding */ FieldValue)
/* harmony export */ });
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

/***/ 28530:
/*!********************************************************!*\
  !*** ./src/app/shared/models/game-statistics.model.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameStatistics": () => (/* binding */ GameStatistics)
/* harmony export */ });
class GameStatistics {}

/***/ }),

/***/ 39969:
/*!***********************************************!*\
  !*** ./src/app/shared/models/player.model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
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

/***/ 31822:
/*!*********************************************************!*\
  !*** ./src/app/shared/models/playground-state.model.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaygroundState": () => (/* binding */ PlaygroundState)
/* harmony export */ });
/* harmony import */ var _field_value_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field-value.model */ 84814);

class PlaygroundState {
  getFieldValue(list, fieldIndex) {
    const filtered = list.filter(f => f.field === fieldIndex);
    if (filtered.length === 0) {
      list.push(new _field_value_model__WEBPACK_IMPORTED_MODULE_0__.FieldValue(fieldIndex, 0));
    }
    return list.filter(f => f.field === fieldIndex)[0];
  }
  isInactive() {
    return false;
  }
}

/***/ }),

/***/ 37954:
/*!***************************************************!*\
  !*** ./src/app/shared/models/playground.model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FIELDS_COUNT": () => (/* binding */ FIELDS_COUNT),
/* harmony export */   "Playground": () => (/* binding */ Playground)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uuid */ 62535);
/* harmony import */ var _player_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.model */ 39969);
/* harmony import */ var _throw_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./throw.model */ 67060);
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~services/statistics.service */ 17036);
/* harmony import */ var _models_game_statistics_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~models/game-statistics.model */ 28530);
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~services/bot.service */ 93030);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/application-state.service */ 12711);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/game.service */ 59208);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~services/dialog.service */ 74564);
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/sound.service */ 34431);















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
    this.hasChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(Date.now());
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
      actualPlayer.addThrowHistory(new _throw_model__WEBPACK_IMPORTED_MODULE_1__.Throw(score, this.multiplier, this.game.actualThrow));
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
        if (this.game.victoryFirst || this.game.getNumberOfPlayers() - winners.length <= 1 || !this.game.victoryFirst) {
          const content = this.extraEndingMsg ? this.extraEndingMsg : 'Round: #' + (this.game.round + 1);
          this.finishStatistics();
          this.dialogService.openDialog('Game Over!', content, this.getTheFinalResult());
          this.newGame(true);
          gameEnded = true;
        } else {
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
      if (!gameEnded && this.game.getActualPlayer().name.toLowerCase().indexOf(_services_bot_service__WEBPACK_IMPORTED_MODULE_4__.PLAYER_NAME) !== -1) {
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
      this.game.players.push(new _player_model__WEBPACK_IMPORTED_MODULE_0__.Player((0,uuid__WEBPACK_IMPORTED_MODULE_10__["default"])(), name.value));
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
      } else {
        msg += this.minimumNumberOfPlayers ? ').' : '.';
      }
      this.dialogService.openErrorDialog('Error!', msg);
    } else if (this.settingsOpen) {
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
    return player.name + _services_statistics_service__WEBPACK_IMPORTED_MODULE_2__.STAT_NAME_SEPARATOR + player.score;
  }
  getGameConfig() {
    return '';
  }
  botThrow() {}
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
    winners = winners.sort((p1, p2) => p1.winDateTime < p2.winDateTime ? -1 : 1).slice(0, 1).map(p => p.clone());
    const losers = this.game.players.filter(p => !winners.some(w => w.id === p.id)).map(p => {
      const c = p.clone();
      c.win = false;
      return c;
    });
    return [...winners, ...losers];
  }
  startStatistics() {
    this.gameStatistics = new _models_game_statistics_model__WEBPACK_IMPORTED_MODULE_3__.GameStatistics();
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
      const name = p.split(_services_statistics_service__WEBPACK_IMPORTED_MODULE_2__.STAT_NAME_SEPARATOR)[0];
      let player = players.find(pl => pl.n === name);
      if (!player) {
        player = {
          n: name,
          w: 0,
          l: 0
        };
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
    return players.length >= this.minimumNumberOfPlayers && (!this.maximumNumberOfPlayers || players.length <= this.maximumNumberOfPlayers);
  }
  saveGameInHistory() {
    this.gameHistory.push(this.game.clone());
  }
}
Playground.ɵfac = function Playground_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinvalidFactory"]();
};
Playground.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineDirective"]({
  type: Playground
});

/***/ }),

/***/ 67060:
/*!**********************************************!*\
  !*** ./src/app/shared/models/throw.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Throw": () => (/* binding */ Throw)
/* harmony export */ });
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

/***/ 12711:
/*!**************************************************************!*\
  !*** ./src/app/shared/services/application-state.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationStateService": () => (/* binding */ ApplicationStateService)
/* harmony export */ });
/* harmony import */ var _models_application_settings_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/application-settings.model */ 29294);
/* harmony import */ var _theme_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme.constant */ 25805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



const APPLICATION_KEY = 'ApplicationSettings';
const PLAYER_KEY = 'Players';
class ApplicationStateService {
  constructor() {
    this.availableThemes = [_theme_constant__WEBPACK_IMPORTED_MODULE_1__.theme];
    this.settings = new _models_application_settings_model__WEBPACK_IMPORTED_MODULE_0__.ApplicationSettings();
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
ApplicationStateService.ɵfac = function ApplicationStateService_Factory(t) {
  return new (t || ApplicationStateService)();
};
ApplicationStateService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ApplicationStateService,
  factory: ApplicationStateService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 93030:
/*!************************************************!*\
  !*** ./src/app/shared/services/bot.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BotService": () => (/* binding */ BotService),
/* harmony export */   "PLAYER_DELAY": () => (/* binding */ PLAYER_DELAY),
/* harmony export */   "PLAYER_DELAY_FAST": () => (/* binding */ PLAYER_DELAY_FAST),
/* harmony export */   "PLAYER_NAME": () => (/* binding */ PLAYER_NAME)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

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
    actual = target === 20 ? actual + 3 : actual;
    if (actual <= PLAYER_LEVEL) {
      return target;
    } else {
      const upOrBottomLine = Math.floor(Math.random() * 3);
      const mistakeLevel = (actual - PLAYER_LEVEL > 4 ? 4 : actual - PLAYER_LEVEL) - 1;
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
BotService.ɵfac = function BotService_Factory(t) {
  return new (t || BotService)();
};
BotService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: BotService,
  factory: BotService.ɵfac,
  providedIn: 'root'
});
const TARGET_MATRIX = [[[20, 18, 5], [5, 4, 12], [12, 13, 7]], [[15, 17, 10], [10, 3, 6], [6, 19, 9]], [[17, 19, 2], [2, 7, 15], [15, 16, 5]], [[18, 13, 1], [1, 6, 20], [20, 10, 8]], [[12, 20, 9], [9, 1, 14], [14, 18, 2]], [[13, 10, 4], [4, 15, 18], [18, 2, 8]], [[19, 16, 8], [3, 8, 17], [17, 11, 1]], [[16, 11, 7], [7, 14, 9], [19, 9, 6]], [[14, 12, 11], [11, 5, 20], [8, 20, 10]], [[6, 15, 13], [13, 2, 4], [4, 17, 11]], [[8, 14, 16], [16, 9, 12], [7, 12, 10]], [[9, 5, 14], [14, 20, 11], [11, 1, 15]], [[4, 6, 18], [18, 10, 15], [1, 15, 16]], [[11, 9, 16], [8, 12, 5], [16, 5, 15]], [[10, 2, 6], [6, 17, 13], [13, 3, 14]], [[7, 8, 11], [19, 11, 14], [3, 14, 13]], [[2, 3, 15], [15, 19, 7], [10, 7, 12]], [[1, 4, 20], [20, 13, 6], [5, 6, 19]], [[3, 7, 17], [17, 16, 8], [2, 8, 18]], [[5, 1, 12], [12, 18, 9], [9, 4, 19]], [[20, 3, 6], [1, 19, 11], [18, 7, 8]]];

/***/ }),

/***/ 74564:
/*!***************************************************!*\
  !*** ./src/app/shared/services/dialog.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogService": () => (/* binding */ DialogService)
/* harmony export */ });
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~components/dialog/dialog.component */ 22324);
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~components/confirm-dialog/confirm-dialog.component */ 59077);
/* harmony import */ var _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~components/game-statistics-dialog/game-statistics-dialog.component */ 77420);
/* harmony import */ var _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~components/game-history-dialog/game-history-dialog.component */ 69420);
/* harmony import */ var _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~components/game-type-statistics-dialog/game-type-statistics-dialog.component */ 5866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);







class DialogService {
  constructor(dialog) {
    this.dialog = dialog;
  }
  openDialog(title = '', content = '', players = []) {
    return this.dialog.open(_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DialogComponent, {
      panelClass: 'success-dialog',
      data: {
        title,
        content,
        players
      }
    });
  }
  openGameStatisticsDialog(statistics) {
    return this.dialog.open(_components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_2__.GameStatisticsDialogComponent, {
      data: {
        statistics
      },
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%'
    });
  }
  openGameHistory(statistics) {
    return this.dialog.open(_components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_3__.GameHistoryDialogComponent, {
      data: {
        statistics
      },
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%'
    });
  }
  openGameTypeStatistics(statistics) {
    return this.dialog.open(_components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_4__.GameTypeStatisticsDialogComponent, {
      data: {
        statistics
      },
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%'
    });
  }
  openErrorDialog(title = '', content = '') {
    return this.dialog.open(_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DialogComponent, {
      panelClass: 'error-dialog',
      data: {
        title,
        content,
        players: []
      }
    });
  }
  openConfirmDialog(title = '', content = '') {
    return this.dialog.open(_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent, {
      panelClass: 'confirm-dialog',
      data: {
        title,
        content,
        players: []
      }
    });
  }
}
DialogService.ɵfac = function DialogService_Factory(t) {
  return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
};
DialogService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: DialogService,
  factory: DialogService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 59208:
/*!*************************************************!*\
  !*** ./src/app/shared/services/game.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameService": () => (/* binding */ GameService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

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
    return actPlayer.score === (best && best.length ? best[0].score : 0);
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
GameService.ɵfac = function GameService_Factory(t) {
  return new (t || GameService)();
};
GameService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: GameService,
  factory: GameService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 34431:
/*!**************************************************!*\
  !*** ./src/app/shared/services/sound.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoundService": () => (/* binding */ SoundService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class SoundService {
  no() {
    // this.play('oh_no.mp3');
  }
  play(soundFileName) {
    this.audioElement.src = `assets/sounds/${soundFileName}`;
    this.audioElement.play();
  }
}
SoundService.ɵfac = function SoundService_Factory(t) {
  return new (t || SoundService)();
};
SoundService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: SoundService,
  factory: SoundService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 17036:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/statistics.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STAT_NAME_SEPARATOR": () => (/* binding */ STAT_NAME_SEPARATOR),
/* harmony export */   "StatisticsService": () => (/* binding */ StatisticsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~services/storage.service */ 1303);


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
    } else {
      this.storageService.setObject(STATISTICS_STORAGE_KEY, [statistics]);
    }
  }
  getGameStatistics(gameName) {
    let statistics = this.storageService.getObject(STATISTICS_STORAGE_KEY);
    if (!statistics) {
      statistics = [];
    }
    return gameName ? statistics.filter(i => i.g === gameName) : statistics;
  }
  getPlayerStatistics(playerName, gameName) {
    const playerStat = this.storageService.getObject(STATISTICS_STORAGE_KEY).filter(i => i.l.some(p => p.indexOf(playerName) !== -1) || i.w.some(p => p.indexOf(playerName) !== -1));
    return gameName ? playerStat.filter(i => i.g === gameName) : playerStat;
  }
  getGameTypeStatistics() {
    let statistics = this.storageService.getObject(STATISTICS_STORAGE_KEY);
    const games = [];
    if (!statistics) {
      statistics = [];
    }
    statistics.forEach(s => {
      let type = games.find(g => g.name === s.g);
      if (!type) {
        type = {
          name: s.g,
          count: 0
        };
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
StatisticsService.ɵfac = function StatisticsService_Factory(t) {
  return new (t || StatisticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService));
};
StatisticsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: StatisticsService,
  factory: StatisticsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1303:
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

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
StorageService.ɵfac = function StorageService_Factory(t) {
  return new (t || StorageService)();
};
StorageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: StorageService,
  factory: StorageService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../material.module */ 63806);
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~components/dialog/dialog.component */ 22324);
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ 61868);
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ 25513);
/* harmony import */ var _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~components/player-settings/player-settings.component */ 85941);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~components/settings/settings.component */ 33668);
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~components/player-score/player-score.component */ 99078);
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~components/confirm-dialog/confirm-dialog.component */ 59077);
/* harmony import */ var _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~components/game-statistics-dialog/game-statistics-dialog.component */ 77420);
/* harmony import */ var _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~components/game-history-dialog/game-history-dialog.component */ 69420);
/* harmony import */ var _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~components/game-type-statistics-dialog/game-type-statistics-dialog.component */ 5866);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/menu/menu.component */ 13686);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ 16218);
/* harmony import */ var _components_number_plate_shanghai_number_plate_shanghai_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/number-plate-shanghai/number-plate-shanghai.component */ 77107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);


















const components = [_components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_3__.NumberPlateComponent, _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_2__.GameToolbarComponent, _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_8__.GameStatisticsDialogComponent, _components_number_plate_shanghai_number_plate_shanghai_component__WEBPACK_IMPORTED_MODULE_13__.NumberPlateShanghaiComponent, _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__.DialogComponent, _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_4__.PlayerSettingsComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__.SettingsComponent, _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_6__.PlayerScoreComponent, _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialogComponent, _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_12__.NumberPlateVisualComponent, _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_9__.GameHistoryDialogComponent, _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_10__.GameTypeStatisticsDialogComponent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__.MenuComponent];
class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_3__.NumberPlateComponent, _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_2__.GameToolbarComponent, _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_8__.GameStatisticsDialogComponent, _components_number_plate_shanghai_number_plate_shanghai_component__WEBPACK_IMPORTED_MODULE_13__.NumberPlateShanghaiComponent, _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__.DialogComponent, _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_4__.PlayerSettingsComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__.SettingsComponent, _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_6__.PlayerScoreComponent, _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialogComponent, _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_12__.NumberPlateVisualComponent, _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_9__.GameHistoryDialogComponent, _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_10__.GameTypeStatisticsDialogComponent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__.MenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_3__.NumberPlateComponent, _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_2__.GameToolbarComponent, _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_8__.GameStatisticsDialogComponent, _components_number_plate_shanghai_number_plate_shanghai_component__WEBPACK_IMPORTED_MODULE_13__.NumberPlateShanghaiComponent, _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__.DialogComponent, _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_4__.PlayerSettingsComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__.SettingsComponent, _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_6__.PlayerScoreComponent, _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialogComponent, _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_12__.NumberPlateVisualComponent, _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_9__.GameHistoryDialogComponent, _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_10__.GameTypeStatisticsDialogComponent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__.MenuComponent]
  });
})();

/***/ }),

/***/ 25805:
/*!***********************************!*\
  !*** ./src/app/theme.constant.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "theme": () => (/* binding */ theme)
/* harmony export */ });
const theme = {
  properties: {}
};

/***/ }),

/***/ 82261:
/*!**************************************************!*\
  !*** ./src/app/x01/models/x01.settings.model.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X01Settings": () => (/* binding */ X01Settings)
/* harmony export */ });
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

/***/ 24334:
/*!**************************************!*\
  !*** ./src/app/x01/x01.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X01Component": () => (/* binding */ X01Component)
/* harmony export */ });
/* harmony import */ var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~models/playground.model */ 37954);
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../route-animation */ 56067);
/* harmony import */ var _models_x01_settings_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/x01.settings.model */ 82261);
/* harmony import */ var _services_bot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~services/bot.service */ 93030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_application_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~services/application-state.service */ 12711);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~services/game.service */ 59208);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~services/dialog.service */ 74564);
/* harmony import */ var _services_sound_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~services/sound.service */ 34431);
/* harmony import */ var _services_statistics_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~services/statistics.service */ 17036);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~components/number-plate/number-plate.component */ 25513);
/* harmony import */ var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~components/game-toolbar/game-toolbar.component */ 61868);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~components/settings/settings.component */ 33668);
/* harmony import */ var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~components/player-score/player-score.component */ 99078);
/* harmony import */ var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~components/number-plate-visual/number-plate-visual.component */ 16218);



















function X01Component_app_settings_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-settings", 5)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r5.settings.setStartValue(101));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "101 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r7.settings.setStartValue(201));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "201 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r8.settings.setStartValue(301));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "301 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r9.settings.setStartValue(501));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "501 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r10.settings.setStartValue(701));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "701 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r11.settings.setStartValue(901));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "901 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r12.settings.toggleSaboteur());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, " Saboteur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r13.settings.togglePunishment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, " Punishment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, "Check In");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r14.settings.setStart(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24, "Normal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r15.settings.setStart(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26, "Double ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r16.settings.setStart(3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, "Triple ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, "Check Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r17.settings.setCheckout(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33, "Single ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r18.settings.setCheckout(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35, "Double ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r19.settings.setCheckout(3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37, "Triple ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r20.settings.setCheckout(4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](39, "High Score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("playground", ctx_r0.playground);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("primary", ctx_r0.settings.startValue === 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("primary", ctx_r0.settings.startValue === 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("primary", ctx_r0.settings.startValue === 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("primary", ctx_r0.settings.startValue === 501);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("primary", ctx_r0.settings.startValue === 701);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("primary", ctx_r0.settings.startValue === 901);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("primary", ctx_r0.settings.saboteur);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("primary", ctx_r0.settings.punishment);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("primary", ctx_r0.settings.start === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("primary", ctx_r0.settings.start === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("primary", ctx_r0.settings.start === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("primary", ctx_r0.settings.checkout === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("primary", ctx_r0.settings.checkout === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("primary", ctx_r0.settings.checkout === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("primary", ctx_r0.settings.checkout === 4);
  }
}
function X01Component_app_game_toolbar_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-game-toolbar", 8);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("playground", ctx_r1.playground)("info", ctx_r1.getInfo());
  }
}
function X01Component_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "app-player-score", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const player_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMapInterpolate1"]("player ", i_r23 === ctx_r21.game.actualPlayerIndex ? "highlighted" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("player", player_r22)("hasContent", false);
  }
}
function X01Component_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, X01Component_div_4_div_1_Template, 2, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r2.game.players);
  }
}
function X01Component_app_number_plate_visual_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-number-plate-visual", 5);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("playground", ctx_r3.playground);
  }
}
function X01Component_app_number_plate_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-number-plate", 5);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("playground", ctx_r4.playground);
  }
}
class X01Component extends _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground {
  constructor(application, game, route, dialogService, soundService, botService, statisticsService) {
    super('X01', application, game, route, dialogService, soundService, botService, statisticsService, 'x01');
    this.settings = new _models_x01_settings_model__WEBPACK_IMPORTED_MODULE_2__.X01Settings();
  }
  calculatePoints(player, fieldIndex, score) {
    const validStart = !player.first || this.settings.isNormalStart() || player.first && (this.settings.isDoubleStart() && this.multiplier === 2 || this.settings.isTripleStart() && this.multiplier === 3);
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
        } else {
          player.score = this.settings.startValue;
        }
      });
    }
    if (this.settings.isHighScoreGame() && player.score <= 0 || player.score === 0 && (this.settings.isNormalCheckout() || this.settings.isDoubleCheckout() && this.multiplier === 2 || this.settings.isTripleCheckout() && this.multiplier === 3)) {
      player.setWin();
      next = true;
    } else if (player.score <= 0 || this.settings.isDoubleCheckout() && player.score < 2 || this.settings.isTripleCheckout() && player.score < 3) {
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
        } else if (this.settings.isDoubleCheckout() && player.score % 2 === 0) {
          target = player.score / 2 - 1;
          this.doublePoint();
        } else if (this.settings.isDoubleCheckout() && player.score % 2 === 1) {
          target = 0;
        } else if (this.settings.isTripleCheckout() && player.score % 3 === 0) {
          target = player.score / 3 - 1;
          this.triplePoint();
        } else if (this.settings.isTripleCheckout() && player.score % 3 === 1) {
          target = 0;
        } else if (this.settings.isTripleCheckout() && player.score % 3 === 2) {
          target = 1;
        }
      }
    } else {
      if (this.botService.isDoublePoint()) {
        this.doublePoint();
      } else if (this.botService.isTriplePoint()) {
        this.triplePoint();
      }
    }
    const index = this.botService.calculateTarget(target);
    setTimeout(() => {
      this.throwNumber([this.isFieldEnabled(index) ? _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground.getFieldValueFromIndex(index) : 0, _models_playground_model__WEBPACK_IMPORTED_MODULE_0__.Playground.getFieldValueFromIndex(index)]);
    }, _services_bot_service__WEBPACK_IMPORTED_MODULE_3__.PLAYER_DELAY);
  }
  getInfo() {
    return this.game.getActualPlayer().score;
  }
  isPrimaryField(fieldIndex) {
    return true;
  }
}
X01Component.ɵfac = function X01Component_Factory(t) {
  return new (t || X01Component)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_4__.ApplicationStateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_5__.GameService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_7__.SoundService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_3__.BotService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_8__.StatisticsService));
};
X01Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: X01Component,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]],
  decls: 7,
  vars: 7,
  consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], [3, "playground", "info", 4, "ngIf"], ["class", "player_container", 4, "ngIf"], [3, "playground"], [1, "button", 3, "click"], [1, "button", "shortmedium", 3, "click"], [3, "playground", "info"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]],
  template: function X01Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, X01Component_app_settings_1_Template, 40, 31, "app-settings", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, X01Component_app_game_toolbar_3_Template, 1, 2, "app-game-toolbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, X01Component_div_4_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, X01Component_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, X01Component_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("detailed", ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && !ctx.application.settings.details);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.settingsOpen && ctx.application.settings.details);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_9__.NumberPlateComponent, _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_10__.GameToolbarComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__.SettingsComponent, _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_12__.PlayerScoreComponent, _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_13__.NumberPlateVisualComponent],
  encapsulation: 2,
  data: {
    animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__.slideInAnimation]
  }
});

/***/ }),

/***/ 18465:
/*!***********************************!*\
  !*** ./src/app/x01/x01.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X01Module": () => (/* binding */ X01Module)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _x01_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./x01.component */ 24334);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





class X01Module {}
X01Module.ɵfac = function X01Module_Factory(t) {
  return new (t || X01Module)();
};
X01Module.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: X01Module
});
X01Module.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{
    path: '',
    component: _x01_component__WEBPACK_IMPORTED_MODULE_0__.X01Component
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](X01Module, {
    declarations: [_x01_component__WEBPACK_IMPORTED_MODULE_0__.X01Component],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  appVersion: (__webpack_require__(/*! ../../package.json */ 4147).version),
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"darts-scoreboard-ng","version":"2.8","license":"MIT","author":{"name":"Viktor Hajer","email":"viktor.hajer@gmail.com"},"description":"See Readme","homepage":"https://github.com/viktorhajer/darts-scoreboard-ng#readme","bugs":{"url":"https://github.com/viktorhajer/darts-scoreboard-ng/issues"},"scripts":{"ng":"ng","start":"ng serve","build":"ng build","eslint":"eslint src/**/*.ts"},"private":false,"dependencies":{"@angular/animations":"^15.2.4","@angular/cdk":"^15.0.0","@angular/common":"^15.2.4","@angular/compiler":"^15.2.4","@angular/core":"^15.2.4","@angular/forms":"^15.2.4","@angular/material":"^15.0.0","@angular/platform-browser":"^15.2.4","@angular/platform-browser-dynamic":"^15.2.4","@angular/router":"^15.2.4","d3":"^7.3.0","rxjs":"~6.5.4","tslib":"^2.0.0","zone.js":"~0.11.4"},"devDependencies":{"@angular-devkit/build-angular":"^15.2.4","@angular/cli":"^15.2.4","@angular/compiler-cli":"^15.2.4","@angular/language-service":"^15.2.4","@types/node":"12.12.47","@types/d3":"^7.1.0","@typescript-eslint/eslint-plugin":"^2.19.2","@typescript-eslint/eslint-plugin-tslint":"^2.19.2","@typescript-eslint/parser":"^2.19.2","eslint":"^6.8.0","ts-node":"~8.3.0","tslint":"~6.1.0","typescript":"~4.9.5"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map