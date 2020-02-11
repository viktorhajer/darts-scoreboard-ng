function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.ts":
  /*!********************************!*\
    !*** ./src/app/app-routing.ts ***!
    \********************************/

  /*! exports provided: routes */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony import */


    var _components_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/menu.component */
    "./src/app/components/menu.component.ts");
    /* harmony import */


    var _x01_x01_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./x01/x01.module */
    "./src/app/x01/x01.module.ts");
    /* harmony import */


    var _cricket_cricket_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cricket/cricket.module */
    "./src/app/cricket/cricket.module.ts");
    /* harmony import */


    var _aroundclock_around_clock_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./aroundclock/around-clock.module */
    "./src/app/aroundclock/around-clock.module.ts");
    /* harmony import */


    var _shanghai_shanghai_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shanghai/shanghai.module */
    "./src/app/shanghai/shanghai.module.ts");
    /* harmony import */


    var _chase_dragon_chase_dragon_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chase-dragon/chase-dragon.module */
    "./src/app/chase-dragon/chase-dragon.module.ts");
    /* harmony import */


    var _killer_killer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./killer/killer.module */
    "./src/app/killer/killer.module.ts");

    var routes = [{
      path: '',
      component: _components_menu_component__WEBPACK_IMPORTED_MODULE_0__["MenuComponent"]
    }, {
      path: 'menu',
      component: _components_menu_component__WEBPACK_IMPORTED_MODULE_0__["MenuComponent"]
    }, {
      path: 'x01',
      data: {
        name: 'Classic X01'
      },
      loadChildren: function loadChildren() {
        return _x01_x01_module__WEBPACK_IMPORTED_MODULE_1__["X01Module"];
      }
    }, {
      path: 'cricket',
      data: {
        name: 'Ultimate Cricket'
      },
      loadChildren: function loadChildren() {
        return _cricket_cricket_module__WEBPACK_IMPORTED_MODULE_2__["CricketModule"];
      }
    }, {
      path: 'around-clock',
      data: {
        name: 'Around The Clock'
      },
      loadChildren: function loadChildren() {
        return _aroundclock_around_clock_module__WEBPACK_IMPORTED_MODULE_3__["AroundClockModule"];
      }
    }, {
      path: 'shanghai',
      data: {
        name: 'Shanghai / Halve It'
      },
      loadChildren: function loadChildren() {
        return _shanghai_shanghai_module__WEBPACK_IMPORTED_MODULE_4__["ShanghaiModule"];
      }
    }, {
      path: 'chase-dragon',
      data: {
        name: 'Chase the Dragon'
      },
      loadChildren: function loadChildren() {
        return _chase_dragon_chase_dragon_module__WEBPACK_IMPORTED_MODULE_5__["ChaseDragonModule"];
      }
    }, {
      path: 'killer',
      data: {
        name: 'Killer'
      },
      loadChildren: function loadChildren() {
        return _killer_killer_module__WEBPACK_IMPORTED_MODULE_6__["KillerModule"];
      }
    }];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: 'app.component.html',
          styles: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _components_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/menu.component */
    "./src/app/components/menu.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing */
    "./src/app/app-routing.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_7__["routes"]), _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"], _components_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_7__["routes"]), _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"], _components_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/aroundclock/around-clock.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/aroundclock/around-clock.component.ts ***!
    \*******************************************************/

  /*! exports provided: AroundClockComponent */

  /***/
  function srcAppAroundclockAroundClockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AroundClockComponent", function () {
      return AroundClockComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_state_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./models/state.model */
    "./src/app/aroundclock/models/state.model.ts");
    /* harmony import */


    var _models_settings_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./models/settings.model */
    "./src/app/aroundclock/models/settings.model.ts");
    /* harmony import */


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_game_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ~components/game-toolbar.component */
    "./src/app/shared/components/game-toolbar.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_number_plate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~components/number-plate.component */
    "./src/app/shared/components/number-plate.component.ts");

    function AroundClockComponent_app_game_toolbar_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 6);
      }

      if (rf & 2) {
        var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r90.playground);
      }
    }

    function AroundClockComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
      }
    }

    function AroundClockComponent_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Field: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r96 = ctx.$implicit;
        var i_r97 = ctx.index;

        var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r97 === ctx_r95.game.actualPlayerIndex ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r96.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!player_r96.throws[2] ? "-" : player_r96.throws[2]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!player_r96.throws[1] ? "-" : player_r96.throws[1]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!player_r96.throws[0] ? "-" : player_r96.throws[0]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r95.getActualField(player_r96));
      }
    }

    function AroundClockComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AroundClockComponent_ng_container_4_div_1_Template, 20, 8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r92.game.players);
      }
    }

    function AroundClockComponent_div_5_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_div_5_button_5_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

          var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r101.addPlayer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Player");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AroundClockComponent_div_5_button_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Player");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AroundClockComponent_div_5_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AroundClockComponent_div_5_div_8_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106);

          var player_r103 = ctx.$implicit;
          return player_r103.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_div_5_div_8_Template_button_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106);

          var player_r103 = ctx.$implicit;

          var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r107.removePlayer(player_r103);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " -");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r103 = ctx.$implicit;
        var i_r104 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Player #", i_r104 + 1, " name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", player_r103.name);
      }
    }

    function AroundClockComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Around The Clock Settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Players");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AroundClockComponent_div_5_button_5_Template, 2, 0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AroundClockComponent_div_5_button_6_Template, 2, 0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AroundClockComponent_div_5_div_8_Template, 6, 2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_div_5_Template_button_click_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109);

          var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r108.settings.toggleJump();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Enable Jump ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_div_5_Template_button_click_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109);

          var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r110.newGame();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Save and Start");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_div_5_Template_button_click_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109);

          var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r111.quit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r93.game.canAddPlayer());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r93.game.canAddPlayer());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r93.game.players);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left shortmedium ", ctx_r93.settings.jump ? "highlighted" : "", "");
      }
    }

    function AroundClockComponent_app_number_plate_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 6);
      }

      if (rf & 2) {
        var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r94.playground);
      }
    }

    var AroundClockComponent =
    /*#__PURE__*/
    function (_models_playground_mo) {
      _inherits(AroundClockComponent, _models_playground_mo);

      function AroundClockComponent(game, route, dialogService) {
        var _this;

        _classCallCheck(this, AroundClockComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(AroundClockComponent).call(this, game, route, dialogService));
        _this.settings = new _models_settings_model__WEBPACK_IMPORTED_MODULE_2__["Settings"]();
        return _this;
      }

      _createClass(AroundClockComponent, [{
        key: "customReset",
        value: function customReset() {
          var _this2 = this;

          this.state = [];
          this.game.players.forEach(function (player) {
            return _this2.state.push(new _models_state_model__WEBPACK_IMPORTED_MODULE_1__["AroundClockState"](player));
          }, this);
        }
      }, {
        key: "validateSettings",
        value: function validateSettings() {
          return this.settings.fields.length > 0;
        }
      }, {
        key: "calculatePoints",
        value: function calculatePoints(score) {
          var player = this.game.getActualPlayer();
          var field = score === 25 ? 'B' : score + '';
          var state = this.getPlayerState(player);

          if (this.settings.fields[state.getActFieldIndex()] === field) {
            // last throw
            if (state.actFieldIndex >= this.settings.fields.length - this.game.multiplier) {
              this.game.multiplier = this.game.multiplier === 1 ? 1 : this.settings.fields.length - (state.actFieldIndex + 1);
            }

            state.increaseActFieldIndex(this.settings.jump ? this.game.multiplier : 1);

            if (state.actFieldIndex >= this.settings.fields.length) {
              state.actFieldIndex = this.settings.fields.length;
            }
          }

          player.score++;
          return Promise.resolve();
        }
      }, {
        key: "checkPlayerState",
        value: function checkPlayerState() {
          var player = this.game.getActualPlayer();

          if (this.settings.fields.length - 1 < this.getPlayerState(player).getActFieldIndex()) {
            player.win = true;
          } else if (this.game.actualThrow === 3) {
            this.game.nextPlayer();
          }

          return Promise.resolve();
        }
      }, {
        key: "isFieldEnabledToThrow",
        value: function isFieldEnabledToThrow(field) {
          var fieldStr = field + '';

          if (field === 25) {
            fieldStr = 'B';
          }

          return this.settings.fields.indexOf(fieldStr) === this.getPlayerState(this.game.getActualPlayer()).getActFieldIndex();
        }
      }, {
        key: "isHighlighted",
        value: function isHighlighted(field) {
          return this.isFieldEnabledToThrow(field);
        }
      }, {
        key: "isSecondHighlighted",
        value: function isSecondHighlighted(field) {
          var _this3 = this;

          var ret = false;

          if (!this.isFieldEnabledToThrow(field)) {
            var fieldStr = field + '';

            if (field === 25) {
              fieldStr = 'B';
            }

            this.game.players.forEach(function (player) {
              if (player !== _this3.game.getActualPlayer()) {
                ret = _this3.settings.fields.indexOf(fieldStr) === _this3.getPlayerState(player).getActFieldIndex();

                if (ret) {
                  return;
                }
              }
            });
          }

          return ret;
        }
      }, {
        key: "getActualField",
        value: function getActualField(player) {
          return this.settings.fields[this.getPlayerState(player).getActFieldIndex()];
        }
      }, {
        key: "isLastRound",
        value: function isLastRound() {
          return false;
        }
      }, {
        key: "canBeDraw",
        value: function canBeDraw() {
          return false;
        }
      }, {
        key: "getPlayerState",
        value: function getPlayerState(player) {
          return this.state.filter(function (s) {
            return s.player.id === player.id;
          })[0];
        }
      }]);

      return AroundClockComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_3__["PlaygroundModel"]);

    AroundClockComponent.ɵfac = function AroundClockComponent_Factory(t) {
      return new (t || AroundClockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]));
    };

    AroundClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AroundClockComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 5,
      consts: [["id", "playgroundContent"], [1, "left", "side_left"], [3, "playground", 4, "ngIf"], ["class", "clear", 4, "ngIf"], [4, "ngIf"], ["class", "settings", 4, "ngIf"], [3, "playground"], [1, "clear"], [3, "class", 4, "ngFor", "ngForOf"], [1, "player_info"], [1, "name", "left"], [1, "shoots", "right"], [1, "shoot"], [1, "point", "right"], [1, "settings"], ["mat-button", "", "class", "button left big", 3, "click", 4, "ngIf"], ["mat-button", "", "class", "button left big inactive", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-button", "", 3, "click"], [1, "clear", "space"], ["mat-button", "", 1, "button", "left", "big", 3, "click"], ["mat-button", "", 1, "button", "left", "big", "inactive"], ["name", "input", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-button", "", 1, "button", "small", 3, "click"]],
      template: function AroundClockComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AroundClockComponent_app_game_toolbar_2_Template, 1, 1, "app-game-toolbar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AroundClockComponent_div_3_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AroundClockComponent_ng_container_4_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AroundClockComponent_div_5_Template, 18, 6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AroundClockComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_game_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _components_number_plate_component__WEBPACK_IMPORTED_MODULE_11__["NumberPlateComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AroundClockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './around-clock.component.html'
        }]
      }], function () {
        return [{
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/aroundclock/around-clock.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/aroundclock/around-clock.module.ts ***!
    \****************************************************/

  /*! exports provided: AroundClockModule */

  /***/
  function srcAppAroundclockAroundClockModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AroundClockModule", function () {
      return AroundClockModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _around_clock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./around-clock.component */
    "./src/app/aroundclock/around-clock.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AroundClockModule = function AroundClockModule() {
      _classCallCheck(this, AroundClockModule);
    };

    AroundClockModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AroundClockModule
    });
    AroundClockModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AroundClockModule_Factory(t) {
        return new (t || AroundClockModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _around_clock_component__WEBPACK_IMPORTED_MODULE_2__["AroundClockComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AroundClockModule, {
        declarations: [_around_clock_component__WEBPACK_IMPORTED_MODULE_2__["AroundClockComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AroundClockModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _around_clock_component__WEBPACK_IMPORTED_MODULE_2__["AroundClockComponent"]
          }])],
          declarations: [_around_clock_component__WEBPACK_IMPORTED_MODULE_2__["AroundClockComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/aroundclock/models/settings.model.ts":
  /*!******************************************************!*\
    !*** ./src/app/aroundclock/models/settings.model.ts ***!
    \******************************************************/

  /*! exports provided: Settings */

  /***/
  function srcAppAroundclockModelsSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Settings", function () {
      return Settings;
    });

    var Settings =
    /*#__PURE__*/
    function () {
      function Settings() {
        _classCallCheck(this, Settings);

        this.jump = true;
        this.fields = [];

        for (var i = 0; i < 21; i++) {
          var nm = i === 20 ? 'B' : i + 1 + '';
          this.fields.push(nm);
        }
      }

      _createClass(Settings, [{
        key: "toggleJump",
        value: function toggleJump() {
          this.jump = !this.jump;
        }
      }]);

      return Settings;
    }();
    /***/

  },

  /***/
  "./src/app/aroundclock/models/state.model.ts":
  /*!***************************************************!*\
    !*** ./src/app/aroundclock/models/state.model.ts ***!
    \***************************************************/

  /*! exports provided: AroundClockState */

  /***/
  function srcAppAroundclockModelsStateModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AroundClockState", function () {
      return AroundClockState;
    });
    /* harmony import */


    var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ~models/playground-state.model */
    "./src/app/shared/models/playground-state.model.ts");

    var AroundClockState =
    /*#__PURE__*/
    function (_models_playground_st) {
      _inherits(AroundClockState, _models_playground_st);

      function AroundClockState(player) {
        var _this4;

        _classCallCheck(this, AroundClockState);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(AroundClockState).call(this, player));
        _this4.actFieldIndex = 0;
        return _this4;
      }

      _createClass(AroundClockState, [{
        key: "getActFieldIndex",
        value: function getActFieldIndex() {
          return this.actFieldIndex;
        }
      }, {
        key: "increaseActFieldIndex",
        value: function increaseActFieldIndex(value) {
          this.actFieldIndex += value ? value : 1;
        }
      }, {
        key: "clone",
        value: function clone() {
          var state = new AroundClockState(this.player);
          state.actFieldIndex = this.actFieldIndex;
          return state;
        }
      }]);

      return AroundClockState;
    }(_models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__["PlaygroundState"]);
    /***/

  },

  /***/
  "./src/app/chase-dragon/chase-dragon.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/chase-dragon/chase-dragon.component.ts ***!
    \********************************************************/

  /*! exports provided: ChaseDragonComponent */

  /***/
  function srcAppChaseDragonChaseDragonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChaseDragonComponent", function () {
      return ChaseDragonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_state_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./models/state.model */
    "./src/app/chase-dragon/models/state.model.ts");
    /* harmony import */


    var _models_settings_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./models/settings.model */
    "./src/app/chase-dragon/models/settings.model.ts");
    /* harmony import */


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_game_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ~components/game-toolbar.component */
    "./src/app/shared/components/game-toolbar.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_number_plate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~components/number-plate.component */
    "./src/app/shared/components/number-plate.component.ts");

    function ChaseDragonComponent_app_game_toolbar_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 6);
      }

      if (rf & 2) {
        var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r144.playground);
      }
    }

    function ChaseDragonComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
      }
    }

    function ChaseDragonComponent_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Field: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r150 = ctx.$implicit;
        var i_r151 = ctx.index;

        var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r151 === ctx_r149.game.actualPlayerIndex ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r150.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!player_r150.throws[2] ? "-" : player_r150.throws[2]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!player_r150.throws[1] ? "-" : player_r150.throws[1]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!player_r150.throws[0] ? "-" : player_r150.throws[0]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r149.getActualField(player_r150));
      }
    }

    function ChaseDragonComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChaseDragonComponent_ng_container_4_div_1_Template, 20, 8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r146.game.players);
      }
    }

    function ChaseDragonComponent_div_5_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChaseDragonComponent_div_5_button_5_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r156);

          var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r155.addPlayer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Player");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChaseDragonComponent_div_5_button_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Player");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChaseDragonComponent_div_5_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChaseDragonComponent_div_5_div_8_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r160);

          var player_r157 = ctx.$implicit;
          return player_r157.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChaseDragonComponent_div_5_div_8_Template_button_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r160);

          var player_r157 = ctx.$implicit;

          var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r161.removePlayer(player_r157);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " -");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r157 = ctx.$implicit;
        var i_r158 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Player #", i_r158 + 1, " name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", player_r157.name);
      }
    }

    function ChaseDragonComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Chase the Dragon Settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Players");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChaseDragonComponent_div_5_button_5_Template, 2, 0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChaseDragonComponent_div_5_button_6_Template, 2, 0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChaseDragonComponent_div_5_div_8_Template, 6, 2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChaseDragonComponent_div_5_Template_button_click_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r162.settings.toggleLong();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Long Dragon ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChaseDragonComponent_div_5_Template_button_click_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r164.newGame();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Save and Start");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChaseDragonComponent_div_5_Template_button_click_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r165.quit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r147.game.canAddPlayer());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r147.game.canAddPlayer());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r147.game.players);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left medium ", ctx_r147.settings.long ? "highlighted" : "", "");
      }
    }

    function ChaseDragonComponent_app_number_plate_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 6);
      }

      if (rf & 2) {
        var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r148.playground);
      }
    }

    var ChaseDragonComponent =
    /*#__PURE__*/
    function (_models_playground_mo2) {
      _inherits(ChaseDragonComponent, _models_playground_mo2);

      function ChaseDragonComponent(game, route, dialogService) {
        var _this5;

        _classCallCheck(this, ChaseDragonComponent);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(ChaseDragonComponent).call(this, game, route, dialogService));
        _this5.settings = new _models_settings_model__WEBPACK_IMPORTED_MODULE_2__["Settings"]();
        return _this5;
      }

      _createClass(ChaseDragonComponent, [{
        key: "customReset",
        value: function customReset() {
          var _this6 = this;

          this.state = [];
          this.game.players.forEach(function (player) {
            return _this6.state.push(new _models_state_model__WEBPACK_IMPORTED_MODULE_1__["ChaseDragonState"](player));
          }, this);
        }
      }, {
        key: "validateSettings",
        value: function validateSettings() {
          return this.settings.fields.length > 0;
        }
      }, {
        key: "calculatePoints",
        value: function calculatePoints(score) {
          var player = this.game.getActualPlayer();
          var field = score === 25 ? 'B' : score + '';
          var state = this.getPlayerState(player);

          if (this.settings.fields[state.getActFieldIndex()] === field) {
            state.increaseActFieldIndex(1);

            if (state.actFieldIndex === this.settings.fields.length) {
              state.actFieldIndex--;
              state.bullCount++;
            }
          }

          player.score++;
          return Promise.resolve();
        }
      }, {
        key: "checkPlayerState",
        value: function checkPlayerState() {
          var player = this.game.getActualPlayer();
          var state = this.getPlayerState(player);

          if (this.settings.fields.length - 1 === state.getActFieldIndex() && state.bullCount === 2) {
            player.win = true;
          } else if (this.game.actualThrow === 3) {
            this.game.nextPlayer();
          }

          return Promise.resolve();
        }
      }, {
        key: "isFieldEnabledToThrow",
        value: function isFieldEnabledToThrow(field) {
          var fieldStr = field + '';

          if (field === 25) {
            fieldStr = 'B';
          }

          return this.settings.fields.indexOf(fieldStr) === this.getPlayerState(this.game.getActualPlayer()).getActFieldIndex();
        }
      }, {
        key: "isHighlighted",
        value: function isHighlighted(field) {
          return this.isFieldEnabledToThrow(field);
        }
      }, {
        key: "isSecondHighlighted",
        value: function isSecondHighlighted(field) {
          var _this7 = this;

          var ret = false;

          if (!this.isFieldEnabledToThrow(field)) {
            var fieldStr = field + '';

            if (field === 25) {
              fieldStr = 'B';
            }

            this.game.players.forEach(function (player) {
              if (player !== _this7.game.getActualPlayer()) {
                ret = _this7.settings.fields.indexOf(fieldStr) === _this7.getPlayerState(player).getActFieldIndex();

                if (ret) {
                  return;
                }
              }
            });
          }

          return ret;
        }
      }, {
        key: "getActualField",
        value: function getActualField(player) {
          return this.settings.fields[this.getPlayerState(player).getActFieldIndex()];
        }
      }, {
        key: "isLastRound",
        value: function isLastRound() {
          return false;
        }
      }, {
        key: "canBeDraw",
        value: function canBeDraw() {
          return false;
        }
      }, {
        key: "getPlayerState",
        value: function getPlayerState(player) {
          return this.state.filter(function (s) {
            return s.player.id === player.id;
          })[0];
        }
      }]);

      return ChaseDragonComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_3__["PlaygroundModel"]);

    ChaseDragonComponent.ɵfac = function ChaseDragonComponent_Factory(t) {
      return new (t || ChaseDragonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]));
    };

    ChaseDragonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChaseDragonComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 5,
      consts: [["id", "playgroundContent"], [1, "left", "side_left"], [3, "playground", 4, "ngIf"], ["class", "clear", 4, "ngIf"], [4, "ngIf"], ["class", "settings", 4, "ngIf"], [3, "playground"], [1, "clear"], [3, "class", 4, "ngFor", "ngForOf"], [1, "player_info"], [1, "name", "left"], [1, "shoots", "right"], [1, "shoot"], [1, "point", "right"], [1, "settings"], ["mat-button", "", "class", "button left big", 3, "click", 4, "ngIf"], ["mat-button", "", "class", "button left big inactive", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-button", "", 3, "click"], [1, "clear", "space"], ["mat-button", "", 1, "button", "left", "big", 3, "click"], ["mat-button", "", 1, "button", "left", "big", "inactive"], ["name", "input", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-button", "", 1, "button", "small", 3, "click"]],
      template: function ChaseDragonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChaseDragonComponent_app_game_toolbar_2_Template, 1, 1, "app-game-toolbar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChaseDragonComponent_div_3_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChaseDragonComponent_ng_container_4_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChaseDragonComponent_div_5_Template, 18, 6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChaseDragonComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_game_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _components_number_plate_component__WEBPACK_IMPORTED_MODULE_11__["NumberPlateComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChaseDragonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './chase-dragon.component.html'
        }]
      }], function () {
        return [{
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/chase-dragon/chase-dragon.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/chase-dragon/chase-dragon.module.ts ***!
    \*****************************************************/

  /*! exports provided: ChaseDragonModule */

  /***/
  function srcAppChaseDragonChaseDragonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChaseDragonModule", function () {
      return ChaseDragonModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _chase_dragon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chase-dragon.component */
    "./src/app/chase-dragon/chase-dragon.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ChaseDragonModule = function ChaseDragonModule() {
      _classCallCheck(this, ChaseDragonModule);
    };

    ChaseDragonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChaseDragonModule
    });
    ChaseDragonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ChaseDragonModule_Factory(t) {
        return new (t || ChaseDragonModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _chase_dragon_component__WEBPACK_IMPORTED_MODULE_2__["ChaseDragonComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChaseDragonModule, {
        declarations: [_chase_dragon_component__WEBPACK_IMPORTED_MODULE_2__["ChaseDragonComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChaseDragonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _chase_dragon_component__WEBPACK_IMPORTED_MODULE_2__["ChaseDragonComponent"]
          }])],
          declarations: [_chase_dragon_component__WEBPACK_IMPORTED_MODULE_2__["ChaseDragonComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/chase-dragon/models/settings.model.ts":
  /*!*******************************************************!*\
    !*** ./src/app/chase-dragon/models/settings.model.ts ***!
    \*******************************************************/

  /*! exports provided: Settings */

  /***/
  function srcAppChaseDragonModelsSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Settings", function () {
      return Settings;
    });

    var Settings =
    /*#__PURE__*/
    function () {
      function Settings() {
        _classCallCheck(this, Settings);

        this.long = false;
        this.setFields();
      }

      _createClass(Settings, [{
        key: "toggleLong",
        value: function toggleLong() {
          this.long = !this.long;
          this.setFields();
        }
      }, {
        key: "setFields",
        value: function setFields() {
          this.fields = [];

          for (var i = this.long ? 9 : 14; i < 21; i++) {
            this.fields.push(i === 20 ? 'B' : i + 1 + '');
          }
        }
      }]);

      return Settings;
    }();
    /***/

  },

  /***/
  "./src/app/chase-dragon/models/state.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/chase-dragon/models/state.model.ts ***!
    \****************************************************/

  /*! exports provided: ChaseDragonState */

  /***/
  function srcAppChaseDragonModelsStateModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChaseDragonState", function () {
      return ChaseDragonState;
    });
    /* harmony import */


    var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ~models/playground-state.model */
    "./src/app/shared/models/playground-state.model.ts");

    var ChaseDragonState =
    /*#__PURE__*/
    function (_models_playground_st2) {
      _inherits(ChaseDragonState, _models_playground_st2);

      function ChaseDragonState(player) {
        var _this8;

        _classCallCheck(this, ChaseDragonState);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(ChaseDragonState).call(this, player));
        _this8.actFieldIndex = 0;
        _this8.bullCount = 0;
        return _this8;
      }

      _createClass(ChaseDragonState, [{
        key: "getActFieldIndex",
        value: function getActFieldIndex() {
          return this.actFieldIndex;
        }
      }, {
        key: "increaseActFieldIndex",
        value: function increaseActFieldIndex(value) {
          this.actFieldIndex += value ? value : 1;
        }
      }, {
        key: "clone",
        value: function clone() {
          var state = new ChaseDragonState(this.player);
          state.actFieldIndex = this.actFieldIndex;
          state.bullCount = this.bullCount;
          return state;
        }
      }]);

      return ChaseDragonState;
    }(_models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__["PlaygroundState"]);
    /***/

  },

  /***/
  "./src/app/components/menu.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/components/menu.component.ts ***!
    \**********************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppComponentsMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _x01_x01_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../x01/x01.module */
    "./src/app/x01/x01.module.ts");
    /* harmony import */


    var _cricket_cricket_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cricket/cricket.module */
    "./src/app/cricket/cricket.module.ts");
    /* harmony import */


    var _aroundclock_around_clock_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../aroundclock/around-clock.module */
    "./src/app/aroundclock/around-clock.module.ts");
    /* harmony import */


    var _shanghai_shanghai_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shanghai/shanghai.module */
    "./src/app/shanghai/shanghai.module.ts");
    /* harmony import */


    var _chase_dragon_chase_dragon_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../chase-dragon/chase-dragon.module */
    "./src/app/chase-dragon/chase-dragon.module.ts");
    /* harmony import */


    var _killer_killer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../killer/killer.module */
    "./src/app/killer/killer.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function MenuComponent_button_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var g_r195 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "/" + g_r195.path));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r195.data.name);
      }
    }

    var routes = [{
      path: 'x01',
      data: {
        name: 'Classic X01'
      },
      loadChildren: function loadChildren() {
        return _x01_x01_module__WEBPACK_IMPORTED_MODULE_1__["X01Module"];
      }
    }, {
      path: 'cricket',
      data: {
        name: 'Ultimate Cricket'
      },
      loadChildren: function loadChildren() {
        return _cricket_cricket_module__WEBPACK_IMPORTED_MODULE_2__["CricketModule"];
      }
    }, {
      path: 'around-clock',
      data: {
        name: 'Around The Clock'
      },
      loadChildren: function loadChildren() {
        return _aroundclock_around_clock_module__WEBPACK_IMPORTED_MODULE_3__["AroundClockModule"];
      }
    }, {
      path: 'shanghai',
      data: {
        name: 'Shanghai / Halve It'
      },
      loadChildren: function loadChildren() {
        return _shanghai_shanghai_module__WEBPACK_IMPORTED_MODULE_4__["ShanghaiModule"];
      }
    }, {
      path: 'chase-dragon',
      data: {
        name: 'Chase the Dragon'
      },
      loadChildren: function loadChildren() {
        return _chase_dragon_chase_dragon_module__WEBPACK_IMPORTED_MODULE_5__["ChaseDragonModule"];
      }
    }, {
      path: 'killer',
      data: {
        name: 'Killer'
      },
      loadChildren: function loadChildren() {
        return _killer_killer_module__WEBPACK_IMPORTED_MODULE_6__["KillerModule"];
      }
    }];

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent() {
        _classCallCheck(this, MenuComponent);
      }

      _createClass(MenuComponent, [{
        key: "getGameList",
        value: function getGameList() {
          return routes.filter(function (r) {
            return !!r.data;
          });
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)();
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["ng-component"]],
      decls: 4,
      vars: 1,
      consts: [[1, "gameSelectBoxTitle"], ["id", "gameSelectContainer"], ["mat-button", "", "class", "gameSelectBox", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "gameSelectBox", 3, "routerLink"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select Game!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MenuComponent_button_3_Template, 2, 4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getGameList());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './menu.component.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cricket/cricket.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/cricket/cricket.component.ts ***!
    \**********************************************/

  /*! exports provided: CricketComponent */

  /***/
  function srcAppCricketCricketComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CricketComponent", function () {
      return CricketComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_state_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./models/state.model */
    "./src/app/cricket/models/state.model.ts");
    /* harmony import */


    var _models_settings_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./models/settings.model */
    "./src/app/cricket/models/settings.model.ts");
    /* harmony import */


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_game_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ~components/game-toolbar.component */
    "./src/app/shared/components/game-toolbar.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_number_plate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~components/number-plate.component */
    "./src/app/shared/components/number-plate.component.ts");

    function CricketComponent_app_game_toolbar_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 6);
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r50.playground);
      }
    }

    function CricketComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
      }
    }

    function CricketComponent_ng_container_4_div_1_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var field_r60 = ctx.$implicit;

        var player_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("field left ", ctx_r58.isActiveField(player_r56, field_r60) && ctx_r58.settings.isBlackOutGame() ? "active" : "", " ", ctx_r58.isFieldDoneForPlayer(player_r56, field_r60) ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r60, ": ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r58.getFieldValue(player_r56, field_r60));
      }
    }

    function CricketComponent_ng_container_4_div_1_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r56.score);
      }
    }

    function CricketComponent_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CricketComponent_ng_container_4_div_1_div_19_Template, 4, 6, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CricketComponent_ng_container_4_div_1_div_20_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r56 = ctx.$implicit;
        var i_r57 = ctx.index;

        var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r57 === ctx_r55.game.actualPlayerIndex ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r56.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r56.getThrowsTotal());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r56.throws[2]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r56.throws[1]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r56.throws[0]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r55.settings.fields);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r55.settings.isNoScoreGame());
      }
    }

    function CricketComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CricketComponent_ng_container_4_div_1_Template, 22, 10, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r52.game.players);
      }
    }

    function CricketComponent_div_5_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_div_5_button_5_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r67.addPlayer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Player");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CricketComponent_div_5_button_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Player");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CricketComponent_div_5_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CricketComponent_div_5_div_8_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

          var player_r69 = ctx.$implicit;
          return player_r69.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_div_5_div_8_Template_button_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

          var player_r69 = ctx.$implicit;

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r73.removePlayer(player_r69);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " -");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r69 = ctx.$implicit;
        var i_r70 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Player #", i_r70 + 1, " name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", player_r69.name);
      }
    }

    function CricketComponent_div_5_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_div_5_button_12_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var i_r75 = ctx.index;

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r76.settings.setNumber(i_r75);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var numb_r74 = ctx.$implicit;
        var i_r75 = ctx.index;

        var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left ", ctx_r66.settings.numbs[i_r75] ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r74 === 21 ? "B" : numb_r74, " ");
      }
    }

    function CricketComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cricket Settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Players");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CricketComponent_div_5_button_5_Template, 2, 0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CricketComponent_div_5_button_6_Template, 2, 0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CricketComponent_div_5_div_8_Template, 6, 2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Fields");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CricketComponent_div_5_button_12_Template, 2, 4, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_div_5_Template_button_click_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r78.settings.upper();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Upper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_div_5_Template_button_click_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r80.settings.lower();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lower");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_div_5_Template_button_click_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r81.settings.odd();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Odd");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_div_5_Template_button_click_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r82.settings.even();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Even");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_div_5_Template_button_click_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r83.settings.randomize();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Random");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Style");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_div_5_Template_button_click_26_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r84.settings.setStyle(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Classic ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_div_5_Template_button_click_28_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r85.settings.setStyle(2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cut-Throat ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_div_5_Template_button_click_30_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r86.settings.setStyle(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "No Score ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_div_5_Template_button_click_32_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r87.settings.setStyle(4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Black Out ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_div_5_Template_button_click_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r88.newGame();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Save and Start");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_div_5_Template_button_click_37_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r89.quit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r53.game.canAddPlayer());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r53.game.canAddPlayer());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r53.game.players);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r53.settings.getNumbers());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left shortmedium ", ctx_r53.settings.style == 1 ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left shortmedium ", ctx_r53.settings.style == 2 ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left shortmedium ", ctx_r53.settings.style == 3 ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left shortmedium ", ctx_r53.settings.style == 4 ? "highlighted" : "", "");
      }
    }

    function CricketComponent_app_number_plate_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 6);
      }

      if (rf & 2) {
        var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r54.playground);
      }
    }

    var CricketComponent =
    /*#__PURE__*/
    function (_models_playground_mo3) {
      _inherits(CricketComponent, _models_playground_mo3);

      function CricketComponent(game, route, dialogService) {
        var _this9;

        _classCallCheck(this, CricketComponent);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(CricketComponent).call(this, game, route, dialogService));
        _this9.settings = new _models_settings_model__WEBPACK_IMPORTED_MODULE_2__["Settings"]();
        return _this9;
      }

      _createClass(CricketComponent, [{
        key: "customReset",
        value: function customReset() {
          var _this10 = this;

          this.state = [];
          this.game.players.forEach(function (player) {
            return _this10.state.push(new _models_state_model__WEBPACK_IMPORTED_MODULE_1__["CricketState"](player));
          }, this);
        }
      }, {
        key: "validateSettings",
        value: function validateSettings() {
          return this.settings.fields.length > 0;
        }
      }, {
        key: "calculatePoints",
        value: function calculatePoints(score) {
          var player = this.game.getActualPlayer();
          this.updateField(player, score);
          return Promise.resolve();
        }
      }, {
        key: "checkPlayerState",
        value: function checkPlayerState() {
          var _this11 = this;

          var player = this.game.getActualPlayer();
          this.game.players.forEach(function (p) {
            p.score = _this11.getPlayerTotal(p);
          }, this);
          var punishStyle = this.settings.isPunishGame() || this.settings.isBlackOutGame();
          player.win = this.isPlayerDone(player) && (!punishStyle && this.game.isTheBestPlayer(player) || punishStyle && this.game.isTheWorstPlayer(player));

          if (this.game.actualThrow === 3) {
            this.game.nextPlayer();
          }

          return Promise.resolve();
        }
      }, {
        key: "getFieldValue",
        value: function getFieldValue(player, field) {
          var score = this.getPunishScore(player, field);
          var punishStyle = this.settings.isPunishGame() || this.settings.isBlackOutGame();
          var playerFieldCount = this.getPlayerState(player).getFieldCount(field);
          var str = '';

          if (punishStyle && score !== 0) {
            str += score;
          }

          if (playerFieldCount === 0 && str.length === 0) {
            return '○';
          } else if (playerFieldCount > 3 && !punishStyle && !this.settings.isNoScoreGame()) {
            return this.getFieldScore(player, field) + '';
          } else if (playerFieldCount === 3 || (punishStyle || this.settings.isNoScoreGame()) && playerFieldCount > 3) {
            str += '●●●';
          } else {
            for (var i = 0; i < playerFieldCount; i++) {
              str += '●';
            }
          }

          return str;
        }
      }, {
        key: "isFieldDoneForPlayer",
        value: function isFieldDoneForPlayer(player, field) {
          return this.getPlayerState(player).getFieldCount(field) >= 3;
        }
      }, {
        key: "isActiveField",
        value: function isActiveField(player, field) {
          return this.settings.fields[this.getPlayerState(player).getActFieldIndex()] === field;
        }
      }, {
        key: "isFieldEnabledToThrow",
        value: function isFieldEnabledToThrow(field) {
          var fieldStr = field + '';

          if (field === 25) {
            fieldStr = 'B';
          }

          return this.settings.fields.indexOf(fieldStr) !== -1 && !this.isFieldClosed(fieldStr);
        }
      }, {
        key: "isHighlighted",
        value: function isHighlighted(field) {
          return false;
        }
      }, {
        key: "isSecondHighlighted",
        value: function isSecondHighlighted(field) {
          return false;
        }
      }, {
        key: "isLastRound",
        value: function isLastRound() {
          return false;
        }
      }, {
        key: "canBeDraw",
        value: function canBeDraw() {
          return false;
        }
      }, {
        key: "getPlayerTotal",
        value: function getPlayerTotal(player) {
          var total = 0;

          if (this.settings.isPunishGame() || this.settings.isBlackOutGame()) {
            total = this.getPlayerTotalForPunishGame(player);
          } else if (this.settings.isScoreGame()) {
            total = this.getPlayerTotalForScoreGame(player);
          }

          return total;
        }
      }, {
        key: "getPlayerTotalForScoreGame",
        value: function getPlayerTotalForScoreGame(player) {
          var _this12 = this;

          var total = 0;
          this.settings.fields.forEach(function (field) {
            if (_this12.isFieldDoneForPlayer(player, field)) {
              total += (_this12.getPlayerState(player).getFieldCount(field) - 3) * _this12.getFieldValueAsNumber(field);
            }
          }, this);
          return total;
        }
      }, {
        key: "getPlayerTotalForPunishGame",
        value: function getPlayerTotalForPunishGame(player) {
          var _this13 = this;

          var total = 0;
          this.settings.fields.forEach(function (field) {
            total += _this13.getPlayerState(player).getPunishCount(field) * _this13.getFieldValueAsNumber(field);
          }, this);
          return total;
        }
      }, {
        key: "updateField",
        value: function updateField(player, score) {
          var field = score === 25 ? 'B' : score + '';

          if (this.settings.fields.indexOf(field) !== -1 && !this.isFieldClosed(field)) {
            var playerFieldCount = this.getPlayerState(player).getFieldCount(field);

            if (!this.settings.isBlackOutGame() || this.settings.fields[this.getPlayerState(player).getActFieldIndex()] === field || this.isFieldDoneForPlayer(player, field)) {
              if (this.isFieldClosedForOthers(player, field) && playerFieldCount + this.game.multiplier > 3) {
                this.getPlayerState(player).setFieldCount(field, 3);
              } else {
                var multiplier = this.game.multiplier + 0;

                if (playerFieldCount < 3 && playerFieldCount + this.game.multiplier >= 3) {
                  multiplier = (playerFieldCount + this.game.multiplier) % 3;
                }

                this.getPlayerState(player).setFieldCount(field, playerFieldCount + this.game.multiplier);
                this.game.multiplier = multiplier;
              }
            }

            if (this.isFieldDoneForPlayer(player, field)) {
              if (this.settings.isBlackOutGame()) {
                if (this.settings.fields[this.getPlayerState(player).getActFieldIndex()] === field) {
                  this.getPlayerState(player).increaseActFieldIndex();
                }
              }

              this.punishPlayers(field);
            }
          }
        }
      }, {
        key: "punishPlayers",
        value: function punishPlayers(field) {
          var _this14 = this;

          this.game.players.forEach(function (player) {
            if (!_this14.isFieldDoneForPlayer(player, field)) {
              _this14.getPlayerState(player).setPunishCount(field, _this14.getPlayerState(player).getPunishCount(field) + _this14.game.multiplier);
            }
          }, this);
        }
      }, {
        key: "getFieldScore",
        value: function getFieldScore(player, field) {
          if (this.isFieldDoneForPlayer(player, field)) {
            return (this.getPlayerState(player).getFieldCount(field) - 3) * this.getFieldValueAsNumber(field);
          }

          return 0;
        }
      }, {
        key: "getPunishScore",
        value: function getPunishScore(player, field) {
          return this.getPlayerState(player).getPunishCount(field) * this.getFieldValueAsNumber(field);
        }
      }, {
        key: "isFieldClosed",
        value: function isFieldClosed(field) {
          var _this15 = this;

          var closed = true;
          this.game.players.forEach(function (player) {
            closed = closed && _this15.isFieldDoneForPlayer(player, field);
          }, this);
          return closed;
        }
      }, {
        key: "isFieldClosedForOthers",
        value: function isFieldClosedForOthers(player, field) {
          var _this16 = this;

          var closed = true;
          this.game.players.forEach(function (p) {
            if (p.id !== player.id) {
              closed = closed && _this16.isFieldDoneForPlayer(p, field);
            }
          }, this);
          return closed;
        }
      }, {
        key: "isPlayerDone",
        value: function isPlayerDone(player) {
          var _this17 = this;

          var done = true;
          this.settings.fields.forEach(function (field) {
            done = done && _this17.isFieldDoneForPlayer(player, field);
          });
          return done;
        }
      }, {
        key: "getPlayerState",
        value: function getPlayerState(player) {
          return this.state.filter(function (s) {
            return s.player.id === player.id;
          })[0];
        }
      }]);

      return CricketComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_3__["PlaygroundModel"]);

    CricketComponent.ɵfac = function CricketComponent_Factory(t) {
      return new (t || CricketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]));
    };

    CricketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CricketComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 5,
      consts: [["id", "playgroundContent"], [1, "left", "side_left"], [3, "playground", 4, "ngIf"], ["class", "clear", 4, "ngIf"], [4, "ngIf"], ["class", "settings", 4, "ngIf"], [3, "playground"], [1, "clear"], [3, "class", 4, "ngFor", "ngForOf"], [1, "player_info"], [1, "name", "left"], [1, "shoots", "right"], [1, "shoot", "total"], [1, "shoot"], [1, "line"], ["class", "point right", 4, "ngIf"], [1, "small"], [1, "point", "right"], [1, "settings"], ["mat-button", "", "class", "button left big", 3, "click", 4, "ngIf"], ["mat-button", "", "class", "button left big inactive", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-button", "", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "button", "left", "capitalize", 3, "click"], ["mat-button", "", 3, "click"], [1, "clear", "space"], ["mat-button", "", 1, "button", "left", "big", 3, "click"], ["mat-button", "", 1, "button", "left", "big", "inactive"], ["name", "input", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-button", "", 1, "button", "small", 3, "click"]],
      template: function CricketComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CricketComponent_app_game_toolbar_2_Template, 1, 1, "app-game-toolbar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CricketComponent_div_3_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CricketComponent_ng_container_4_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CricketComponent_div_5_Template, 39, 16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CricketComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_game_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _components_number_plate_component__WEBPACK_IMPORTED_MODULE_11__["NumberPlateComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CricketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './cricket.component.html'
        }]
      }], function () {
        return [{
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cricket/cricket.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/cricket/cricket.module.ts ***!
    \*******************************************/

  /*! exports provided: CricketModule */

  /***/
  function srcAppCricketCricketModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CricketModule", function () {
      return CricketModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _cricket_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cricket.component */
    "./src/app/cricket/cricket.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var CricketModule = function CricketModule() {
      _classCallCheck(this, CricketModule);
    };

    CricketModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CricketModule
    });
    CricketModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CricketModule_Factory(t) {
        return new (t || CricketModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _cricket_component__WEBPACK_IMPORTED_MODULE_2__["CricketComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CricketModule, {
        declarations: [_cricket_component__WEBPACK_IMPORTED_MODULE_2__["CricketComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CricketModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _cricket_component__WEBPACK_IMPORTED_MODULE_2__["CricketComponent"]
          }])],
          declarations: [_cricket_component__WEBPACK_IMPORTED_MODULE_2__["CricketComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cricket/models/settings.model.ts":
  /*!**************************************************!*\
    !*** ./src/app/cricket/models/settings.model.ts ***!
    \**************************************************/

  /*! exports provided: Settings */

  /***/
  function srcAppCricketModelsSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Settings", function () {
      return Settings;
    });

    var Settings =
    /*#__PURE__*/
    function () {
      function Settings() {
        _classCallCheck(this, Settings);

        this.fields = ['15', '16', '17', '18', '19', '20', 'B'];
        this.numbs = [];
        this.style = 2;
        var defaultSet = false;

        for (var i = 0; i < 21; i++) {
          this.numbs[i] = defaultSet;

          if (i === 13) {
            defaultSet = true;
          }
        }

        this.initFields();
      }

      _createClass(Settings, [{
        key: "randomize",
        value: function randomize() {
          for (var i = 0; i < this.numbs.length; i++) {
            this.numbs[i] = false;
          }

          for (var _i = 0; _i < 7; _i++) {
            this.numbs[Math.floor(Math.random() * 21)] = true;
          }

          this.initFields();
        }
      }, {
        key: "upper",
        value: function upper() {
          this.setAllowedField([14, 9, 12, 5, 20, 1, 18, 4, 13, 21]);
        }
      }, {
        key: "lower",
        value: function lower() {
          this.setAllowedField([10, 15, 2, 17, 3, 19, 7, 16, 8, 21]);
        }
      }, {
        key: "odd",
        value: function odd() {
          this.setAllowedField([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]);
        }
      }, {
        key: "even",
        value: function even() {
          this.setAllowedField([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21]);
        }
      }, {
        key: "getNumbers",
        value: function getNumbers() {
          var numbers = [];

          for (var i = 0; i < 21; i++) {
            numbers[i] = i + 1;
          }

          return numbers;
        }
      }, {
        key: "setNumber",
        value: function setNumber(i) {
          this.numbs[i] = !this.numbs[i];
          this.initFields();
        }
      }, {
        key: "setStyle",
        value: function setStyle(style) {
          this.style = style;
        }
      }, {
        key: "initFields",
        value: function initFields() {
          this.fields = [];

          for (var i = 0; i < 21; i++) {
            if (this.numbs[i]) {
              this.fields.push(i === 20 ? 'B' : i + 1 + '');
            }
          }
        }
      }, {
        key: "isScoreGame",
        value: function isScoreGame() {
          return this.style === 1;
        }
      }, {
        key: "isPunishGame",
        value: function isPunishGame() {
          return this.style === 2;
        }
      }, {
        key: "isNoScoreGame",
        value: function isNoScoreGame() {
          return this.style === 3;
        }
      }, {
        key: "isBlackOutGame",
        value: function isBlackOutGame() {
          return this.style === 4;
        }
      }, {
        key: "setAllowedField",
        value: function setAllowedField(fields) {
          var _this18 = this;

          for (var i = 0; i < this.numbs.length; i++) {
            this.numbs[i] = false;
          }

          fields.forEach(function (f) {
            return _this18.numbs[f - 1] = true;
          });
          this.initFields();
        }
      }]);

      return Settings;
    }();
    /***/

  },

  /***/
  "./src/app/cricket/models/state.model.ts":
  /*!***********************************************!*\
    !*** ./src/app/cricket/models/state.model.ts ***!
    \***********************************************/

  /*! exports provided: CricketState */

  /***/
  function srcAppCricketModelsStateModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CricketState", function () {
      return CricketState;
    });
    /* harmony import */


    var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ~models/playground-state.model */
    "./src/app/shared/models/playground-state.model.ts");

    var CricketState =
    /*#__PURE__*/
    function (_models_playground_st3) {
      _inherits(CricketState, _models_playground_st3);

      function CricketState(player) {
        var _this19;

        _classCallCheck(this, CricketState);

        _this19 = _possibleConstructorReturn(this, _getPrototypeOf(CricketState).call(this, player));
        _this19.fieldCount = [];
        _this19.punishCount = [];
        _this19.actFieldIndex = 0;
        return _this19;
      }

      _createClass(CricketState, [{
        key: "getFieldCount",
        value: function getFieldCount(field) {
          return this.getFieldValue(this.fieldCount, field).value;
        }
      }, {
        key: "setFieldCount",
        value: function setFieldCount(field, value) {
          this.getFieldValue(this.fieldCount, field).value = value;
        }
      }, {
        key: "getPunishCount",
        value: function getPunishCount(field) {
          return this.getFieldValue(this.punishCount, field).value;
        }
      }, {
        key: "setPunishCount",
        value: function setPunishCount(field, value) {
          this.getFieldValue(this.punishCount, field).value = value;
        }
      }, {
        key: "getActFieldIndex",
        value: function getActFieldIndex() {
          return this.actFieldIndex;
        }
      }, {
        key: "increaseActFieldIndex",
        value: function increaseActFieldIndex() {
          this.actFieldIndex++;
        }
      }, {
        key: "clone",
        value: function clone() {
          var state = new CricketState(this.player);
          state.actFieldIndex = this.actFieldIndex;
          this.fieldCount.forEach(function (fv) {
            return state.fieldCount.push(fv.clone());
          });
          this.punishCount.forEach(function (fv) {
            return state.punishCount.push(fv.clone());
          });
          return state;
        }
      }]);

      return CricketState;
    }(_models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__["PlaygroundState"]);
    /***/

  },

  /***/
  "./src/app/killer/killer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/killer/killer.component.ts ***!
    \********************************************/

  /*! exports provided: KillerComponent */

  /***/
  function srcAppKillerKillerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KillerComponent", function () {
      return KillerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_state_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./models/state.model */
    "./src/app/killer/models/state.model.ts");
    /* harmony import */


    var _models_settings_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./models/settings.model */
    "./src/app/killer/models/settings.model.ts");
    /* harmony import */


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_game_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ~components/game-toolbar.component */
    "./src/app/shared/components/game-toolbar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _components_number_plate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~components/number-plate.component */
    "./src/app/shared/components/number-plate.component.ts");

    function KillerComponent_app_game_toolbar_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 6);
      }

      if (rf & 2) {
        var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r166.playground);
      }
    }

    function KillerComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
      }
    }

    function KillerComponent_ng_container_4_div_1_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Field: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r174.getPlayerField(player_r172));
      }
    }

    function KillerComponent_ng_container_4_div_1_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
      }
    }

    function KillerComponent_ng_container_4_div_1_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Boarding: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r176.getBoarding(player_r172));
      }
    }

    function KillerComponent_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, KillerComponent_ng_container_4_div_1_div_15_Template, 4, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, KillerComponent_ng_container_4_div_1_div_16_Template, 1, 0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Life: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, KillerComponent_ng_container_4_div_1_div_21_Template, 4, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r172 = ctx.$implicit;
        var i_r173 = ctx.index;

        var ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate3"]("player ", i_r173 === ctx_r171.game.actualPlayerIndex ? "highlighted" : "", " ", ctx_r171.isDead(player_r172) ? "inactive" : "", " ", ctx_r171.isKiller(player_r172) ? "highlighted2" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r172.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!player_r172.throws[2] ? "-" : player_r172.throws[2]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!player_r172.throws[1] ? "-" : player_r172.throws[1]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!player_r172.throws[0] ? "-" : player_r172.throws[0]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r171.getPlayerField(player_r172) !== "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r171.getPlayerField(player_r172) !== "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r171.getLife(player_r172));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r171.isKiller(player_r172));
      }
    }

    function KillerComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KillerComponent_ng_container_4_div_1_Template, 23, 13, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r168.game.players);
      }
    }

    function KillerComponent_div_5_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KillerComponent_div_5_button_5_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r183);

          var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r182.addPlayer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Player");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function KillerComponent_div_5_button_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Player");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function KillerComponent_div_5_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KillerComponent_div_5_div_8_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r187);

          var player_r184 = ctx.$implicit;
          return player_r184.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KillerComponent_div_5_div_8_Template_button_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r187);

          var player_r184 = ctx.$implicit;

          var ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r188.removePlayer(player_r184);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " -");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r184 = ctx.$implicit;
        var i_r185 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Player #", i_r185 + 1, " name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", player_r184.name);
      }
    }

    function KillerComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Killer Game Settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Players");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, KillerComponent_div_5_button_5_Template, 2, 0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, KillerComponent_div_5_button_6_Template, 2, 0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, KillerComponent_div_5_div_8_Template, 6, 2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Life limit: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KillerComponent_div_5_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190);

          var ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r189.settings.numberOfLives = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Boarding: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KillerComponent_div_5_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190);

          var ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r191.settings.boardingLimit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KillerComponent_div_5_Template_button_click_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190);

          var ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r192.newGame();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Save and Start");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KillerComponent_div_5_Template_button_click_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190);

          var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r193.quit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r169.game.canAddPlayer());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r169.game.canAddPlayer());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r169.game.players);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r169.settings.numberOfLives);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r169.settings.boardingLimit);
      }
    }

    function KillerComponent_app_number_plate_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 6);
      }

      if (rf & 2) {
        var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r170.playground);
      }
    }

    var KillerComponent =
    /*#__PURE__*/
    function (_models_playground_mo4) {
      _inherits(KillerComponent, _models_playground_mo4);

      function KillerComponent(game, route, dialogService) {
        var _this20;

        _classCallCheck(this, KillerComponent);

        _this20 = _possibleConstructorReturn(this, _getPrototypeOf(KillerComponent).call(this, game, route, dialogService));
        _this20.settings = new _models_settings_model__WEBPACK_IMPORTED_MODULE_2__["Settings"]();
        _this20.nextEnabled = false;
        _this20.zeroEnabled = false;
        _this20.multiEnabled = false;
        return _this20;
      }

      _createClass(KillerComponent, [{
        key: "customReset",
        value: function customReset() {
          var _this21 = this;

          this.state = [];
          this.game.players.forEach(function (player) {
            _this21.state.push(new _models_state_model__WEBPACK_IMPORTED_MODULE_1__["KillerState"](player, _this21.settings.numberOfLives, _this21.settings.boardingLimit));
          }, this);
        }
      }, {
        key: "customNext",
        value: function customNext() {
          while (this.getPlayerState(this.game.getActualPlayer()).isDead()) {
            this.game.nextPlayer();
          }
        }
      }, {
        key: "validateSettings",
        value: function validateSettings() {
          return this.settings.fields.length > 0;
        }
      }, {
        key: "calculatePoints",
        value: function calculatePoints(score) {
          var _this22 = this;

          var player = this.game.getActualPlayer();
          var state = this.getPlayerState(player);

          if (this.game.round === 0) {
            state.actField = score;
            player.score = score;

            if (this.game.isActualPlayerTheLast()) {
              this.nextEnabled = true;
              this.zeroEnabled = true;
              this.multiEnabled = true;
            }
          } else {
            if (state.killer) {
              if (score === state.actField) {
                state.life = Number(state.life) + Number(this.game.multiplier);

                if (state.life > this.settings.numberOfLives) {
                  state.life = this.settings.numberOfLives;
                }
              } else {
                this.game.players.filter(function (p) {
                  return p.id !== player.id && !_this22.getPlayerState(p).isDead();
                }).forEach(function (p) {
                  var s = _this22.getPlayerState(p);

                  if (s.actField === score) {
                    s.life -= _this22.game.multiplier;

                    if (s.life < 0) {
                      s.life = 0;
                    }
                  }
                });
              }
            } else if (score === state.actField) {
              state.boarding -= this.game.multiplier;

              if (state.boarding <= 0) {
                state.boarding = 0;
              }

              state.killer = state.boarding === 0;
            }
          }

          return Promise.resolve();
        }
      }, {
        key: "checkPlayerState",
        value: function checkPlayerState() {
          var _this23 = this;

          if (this.game.round !== 0) {
            var actualPlayer = this.game.getActualPlayer();
            actualPlayer.win = !this.game.players.some(function (p) {
              return p.id !== actualPlayer.id && !_this23.getPlayerState(p).isDead();
            });
          }

          if (this.game.round === 0 || this.game.actualThrow === 3) {
            this.game.nextPlayer();
          }

          while (this.getPlayerState(this.game.getActualPlayer()).isDead()) {
            this.game.nextPlayer();
          }

          return Promise.resolve();
        }
      }, {
        key: "isFieldEnabledToThrow",
        value: function isFieldEnabledToThrow(field) {
          if (this.game.round === 0) {
            return !this.getAllEnabledFields().some(function (f) {
              return f === field;
            });
          }

          return this.getAllEnabledFields().some(function (f) {
            return f === field;
          });
        }
      }, {
        key: "isHighlighted",
        value: function isHighlighted(field) {
          if (this.game.round === 0) {
            return this.isFieldEnabledToThrow(field);
          }

          var state = this.getPlayerState(this.game.getActualPlayer());

          if (state.killer) {
            return this.isFieldEnabledToThrow(field) && !this.isSecondHighlighted(field);
          }

          return state.actField === field;
        }
      }, {
        key: "isSecondHighlighted",
        value: function isSecondHighlighted(field) {
          var state = this.getPlayerState(this.game.getActualPlayer());

          if (state.killer) {
            return state.actField === field;
          }

          return false;
        }
      }, {
        key: "getPlayerField",
        value: function getPlayerField(player) {
          var score = this.getPlayerState(player).actField;
          return score === 25 ? 'B' : score + '';
        }
      }, {
        key: "getLife",
        value: function getLife(player) {
          return this.getPlayerState(player).life;
        }
      }, {
        key: "getBoarding",
        value: function getBoarding(player) {
          return this.getPlayerState(player).boarding;
        }
      }, {
        key: "isKiller",
        value: function isKiller(player) {
          return this.getPlayerState(player).killer;
        }
      }, {
        key: "isDead",
        value: function isDead(player) {
          return this.getPlayerState(player).isDead();
        }
      }, {
        key: "isLastRound",
        value: function isLastRound() {
          return false;
        }
      }, {
        key: "canBeDraw",
        value: function canBeDraw() {
          return false;
        }
      }, {
        key: "getAllEnabledFields",
        value: function getAllEnabledFields() {
          var _this24 = this;

          return this.game.players.filter(function (p) {
            return !_this24.getPlayerState(p).isDead();
          }).map(function (p) {
            return _this24.getPlayerState(p).actField;
          });
        }
      }, {
        key: "getPlayerState",
        value: function getPlayerState(player) {
          return this.state.filter(function (s) {
            return s.player.id === player.id;
          })[0];
        }
      }]);

      return KillerComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_3__["PlaygroundModel"]);

    KillerComponent.ɵfac = function KillerComponent_Factory(t) {
      return new (t || KillerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]));
    };

    KillerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KillerComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 5,
      consts: [["id", "playgroundContent"], [1, "left", "side_left"], [3, "playground", 4, "ngIf"], ["class", "clear", 4, "ngIf"], [4, "ngIf"], ["class", "settings", 4, "ngIf"], [3, "playground"], [1, "clear"], [3, "class", 4, "ngFor", "ngForOf"], [1, "player_info"], [1, "name", "left"], [1, "shoots", "right"], [1, "shoot"], ["class", "point right", 4, "ngIf"], [1, "point2", "right"], ["class", "point2 right", 4, "ngIf"], [1, "point", "right"], [1, "settings"], ["mat-button", "", "class", "button left big", 3, "click", 4, "ngIf"], ["mat-button", "", "class", "button left big inactive", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["name", "input", "type", "number", 3, "ngModel", "ngModelChange"], [1, "clear", "space"], ["mat-button", "", 1, "button", "left", "big", 3, "click"], ["mat-button", "", 1, "button", "left", "big", "inactive"], ["name", "input", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-button", "", 1, "button", "small", 3, "click"]],
      template: function KillerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KillerComponent_app_game_toolbar_2_Template, 1, 1, "app-game-toolbar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KillerComponent_div_3_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KillerComponent_ng_container_4_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, KillerComponent_div_5_Template, 22, 5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, KillerComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_game_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _components_number_plate_component__WEBPACK_IMPORTED_MODULE_11__["NumberPlateComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KillerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './killer.component.html'
        }]
      }], function () {
        return [{
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/killer/killer.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/killer/killer.module.ts ***!
    \*****************************************/

  /*! exports provided: KillerModule */

  /***/
  function srcAppKillerKillerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KillerModule", function () {
      return KillerModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _killer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./killer.component */
    "./src/app/killer/killer.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var KillerModule = function KillerModule() {
      _classCallCheck(this, KillerModule);
    };

    KillerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: KillerModule
    });
    KillerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function KillerModule_Factory(t) {
        return new (t || KillerModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _killer_component__WEBPACK_IMPORTED_MODULE_2__["KillerComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](KillerModule, {
        declarations: [_killer_component__WEBPACK_IMPORTED_MODULE_2__["KillerComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KillerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _killer_component__WEBPACK_IMPORTED_MODULE_2__["KillerComponent"]
          }])],
          declarations: [_killer_component__WEBPACK_IMPORTED_MODULE_2__["KillerComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/killer/models/settings.model.ts":
  /*!*************************************************!*\
    !*** ./src/app/killer/models/settings.model.ts ***!
    \*************************************************/

  /*! exports provided: Settings */

  /***/
  function srcAppKillerModelsSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Settings", function () {
      return Settings;
    });

    var Settings = function Settings() {
      _classCallCheck(this, Settings);

      this.numberOfLives = 7;
      this.boardingLimit = 3;
      this.fields = [];

      for (var i = 0; i < 21; i++) {
        this.fields.push(i === 20 ? 'B' : i + 1 + '');
      }
    };
    /***/

  },

  /***/
  "./src/app/killer/models/state.model.ts":
  /*!**********************************************!*\
    !*** ./src/app/killer/models/state.model.ts ***!
    \**********************************************/

  /*! exports provided: KillerState */

  /***/
  function srcAppKillerModelsStateModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KillerState", function () {
      return KillerState;
    });
    /* harmony import */


    var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ~models/playground-state.model */
    "./src/app/shared/models/playground-state.model.ts");

    var KillerState =
    /*#__PURE__*/
    function (_models_playground_st4) {
      _inherits(KillerState, _models_playground_st4);

      function KillerState(player) {
        var _this25;

        var life = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
        var boarding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

        _classCallCheck(this, KillerState);

        _this25 = _possibleConstructorReturn(this, _getPrototypeOf(KillerState).call(this, player));
        _this25.life = life;
        _this25.boarding = boarding;
        _this25.actField = 0;
        _this25.killer = false;
        return _this25;
      }

      _createClass(KillerState, [{
        key: "isDead",
        value: function isDead() {
          return this.life <= 0;
        }
      }, {
        key: "clone",
        value: function clone() {
          var state = new KillerState(this.player);
          state.actField = this.actField;
          state.life = this.life;
          state.boarding = this.boarding;
          state.killer = this.killer;
          state.dead = this.dead;
          return state;
        }
      }]);

      return KillerState;
    }(_models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__["PlaygroundState"]);
    /***/

  },

  /***/
  "./src/app/material.module.ts":
  /*!************************************!*\
    !*** ./src/app/material.module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var materialImports = [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [materialImports, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]],
        exports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: materialImports,
          exports: materialImports
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shanghai/models/settings.model.ts":
  /*!***************************************************!*\
    !*** ./src/app/shanghai/models/settings.model.ts ***!
    \***************************************************/

  /*! exports provided: Settings */

  /***/
  function srcAppShanghaiModelsSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Settings", function () {
      return Settings;
    });

    var Settings =
    /*#__PURE__*/
    function () {
      function Settings() {
        _classCallCheck(this, Settings);

        this.numbs = [];
        this.numberOfMaxFields = 8;
        this.fields = [];
        this.noScore = false;
        this.halveIt = false;
        var defaultSet = true;

        for (var i = 0; i < 21; i++) {
          this.numbs[i] = defaultSet;

          if (i === 19) {
            defaultSet = false;
          }
        }

        this.initFields();
      }

      _createClass(Settings, [{
        key: "randomize",
        value: function randomize() {
          for (var i = 0; i < this.numbs.length; i++) {
            this.numbs[i] = false;
          }

          for (var _i2 = 0; _i2 < this.numberOfMaxFields; _i2++) {
            var rand = Math.floor(Math.random() * 21);

            while (this.numbs[rand]) {
              rand = Math.floor(Math.random() * 21);
            }

            this.numbs[rand] = true;
          }

          this.initFields();
        }
      }, {
        key: "toggleNoScore",
        value: function toggleNoScore() {
          this.noScore = !this.noScore;
        }
      }, {
        key: "toggleHalveIt",
        value: function toggleHalveIt() {
          this.halveIt = !this.halveIt;
        }
      }, {
        key: "getNumbers",
        value: function getNumbers() {
          var numbers = [];

          for (var i = 0; i < 21; i++) {
            numbers[i] = i + 1;
          }

          return numbers;
        }
      }, {
        key: "setNumber",
        value: function setNumber(i) {
          this.numbs[i] = !this.numbs[i];
          this.initFields();
        }
      }, {
        key: "initFields",
        value: function initFields() {
          this.fields = [];

          for (var i = 0; i < 21; i++) {
            if (this.numbs[i]) {
              this.fields.push(i === 20 ? 'B' : i + 1 + '');
            }
          }
        }
      }]);

      return Settings;
    }();
    /***/

  },

  /***/
  "./src/app/shanghai/models/state.model.ts":
  /*!************************************************!*\
    !*** ./src/app/shanghai/models/state.model.ts ***!
    \************************************************/

  /*! exports provided: ShanghaiState */

  /***/
  function srcAppShanghaiModelsStateModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShanghaiState", function () {
      return ShanghaiState;
    });
    /* harmony import */


    var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ~models/playground-state.model */
    "./src/app/shared/models/playground-state.model.ts");

    var ShanghaiState =
    /*#__PURE__*/
    function (_models_playground_st5) {
      _inherits(ShanghaiState, _models_playground_st5);

      function ShanghaiState(player) {
        var _this26;

        _classCallCheck(this, ShanghaiState);

        _this26 = _possibleConstructorReturn(this, _getPrototypeOf(ShanghaiState).call(this, player));
        _this26.fieldCount = [];
        _this26.fieldScore = [];
        return _this26;
      }

      _createClass(ShanghaiState, [{
        key: "getFieldCount",
        value: function getFieldCount(field) {
          return this.getFieldValue(this.fieldCount, field).value;
        }
      }, {
        key: "increaseFieldCount",
        value: function increaseFieldCount(field, value) {
          this.getFieldValue(this.fieldCount, field).value += value;
        }
      }, {
        key: "getFieldScore",
        value: function getFieldScore(field) {
          return this.getFieldValue(this.fieldScore, field).value;
        }
      }, {
        key: "increaseFieldScore",
        value: function increaseFieldScore(field, value) {
          this.getFieldValue(this.fieldScore, field).value += value;
        }
      }, {
        key: "clone",
        value: function clone() {
          var state = new ShanghaiState(this.player);
          this.fieldCount.forEach(function (fv) {
            return state.fieldCount.push(fv.clone());
          });
          this.fieldScore.forEach(function (fv) {
            return state.fieldScore.push(fv.clone());
          });
          return state;
        }
      }]);

      return ShanghaiState;
    }(_models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__["PlaygroundState"]);
    /***/

  },

  /***/
  "./src/app/shanghai/shanghai.component.ts":
  /*!************************************************!*\
    !*** ./src/app/shanghai/shanghai.component.ts ***!
    \************************************************/

  /*! exports provided: ShanghaiComponent */

  /***/
  function srcAppShanghaiShanghaiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShanghaiComponent", function () {
      return ShanghaiComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_state_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./models/state.model */
    "./src/app/shanghai/models/state.model.ts");
    /* harmony import */


    var _models_settings_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./models/settings.model */
    "./src/app/shanghai/models/settings.model.ts");
    /* harmony import */


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_game_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ~components/game-toolbar.component */
    "./src/app/shared/components/game-toolbar.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_number_plate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~components/number-plate.component */
    "./src/app/shared/components/number-plate.component.ts");

    function ShanghaiComponent_app_game_toolbar_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 6);
      }

      if (rf & 2) {
        var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r112.playground);
      }
    }

    function ShanghaiComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
      }
    }

    function ShanghaiComponent_ng_container_4_div_1_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var field_r121 = ctx.$implicit;

        var player_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("field left ", ctx_r120.isActiveField(field_r121) ? "active" : "", " ", ctx_r120.isDoneField(field_r121) ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r121, ": ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r120.getFieldValue(player_r118, field_r121));
      }
    }

    function ShanghaiComponent_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ShanghaiComponent_ng_container_4_div_1_div_19_Template, 4, 6, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r118 = ctx.$implicit;
        var i_r119 = ctx.index;

        var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r119 === ctx_r117.game.actualPlayerIndex ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r118.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!player_r118.getThrowsTotal() ? "-" : player_r118.getThrowsTotal());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!player_r118.throws[2] ? "-" : player_r118.throws[2]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!player_r118.throws[1] ? "-" : player_r118.throws[1]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!player_r118.throws[0] ? "-" : player_r118.throws[0]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r117.settings.fields);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r118.score);
      }
    }

    function ShanghaiComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShanghaiComponent_ng_container_4_div_1_Template, 23, 10, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r114.game.players);
      }
    }

    function ShanghaiComponent_div_5_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_div_5_button_5_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r128);

          var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r127.addPlayer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Player");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ShanghaiComponent_div_5_button_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Player");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ShanghaiComponent_div_5_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShanghaiComponent_div_5_div_8_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132);

          var player_r129 = ctx.$implicit;
          return player_r129.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_div_5_div_8_Template_button_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132);

          var player_r129 = ctx.$implicit;

          var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r133.removePlayer(player_r129);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " -");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r129 = ctx.$implicit;
        var i_r130 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Player #", i_r130 + 1, " name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", player_r129.name);
      }
    }

    function ShanghaiComponent_div_5_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_div_5_button_12_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r137);

          var i_r135 = ctx.index;

          var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r136.settings.setNumber(i_r135);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var numb_r134 = ctx.$implicit;
        var i_r135 = ctx.index;

        var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left ", ctx_r126.settings.numbs[i_r135] ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r134 === 21 ? "B" : numb_r134, " ");
      }
    }

    function ShanghaiComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Shanghai Settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Players");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShanghaiComponent_div_5_button_5_Template, 2, 0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ShanghaiComponent_div_5_button_6_Template, 2, 0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ShanghaiComponent_div_5_div_8_Template, 6, 2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Fields");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ShanghaiComponent_div_5_button_12_Template, 2, 4, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_div_5_Template_button_click_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139);

          var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r138.settings.randomize();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Randomize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_div_5_Template_button_click_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139);

          var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r140.settings.toggleNoScore();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "No score ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_div_5_Template_button_click_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139);

          var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r141.settings.toggleHalveIt();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Halve It ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_div_5_Template_button_click_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139);

          var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r142.newGame();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Save and Start");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_div_5_Template_button_click_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139);

          var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r143.quit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r115.game.canAddPlayer());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r115.game.canAddPlayer());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r115.game.players);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r115.settings.getNumbers());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left shortmedium ", ctx_r115.settings.noScore ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left shortmedium ", ctx_r115.settings.halveIt ? "highlighted" : "", "");
      }
    }

    function ShanghaiComponent_app_number_plate_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 6);
      }

      if (rf & 2) {
        var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r116.playground);
      }
    }

    var ShanghaiComponent =
    /*#__PURE__*/
    function (_models_playground_mo5) {
      _inherits(ShanghaiComponent, _models_playground_mo5);

      function ShanghaiComponent(game, route, dialogService) {
        var _this27;

        _classCallCheck(this, ShanghaiComponent);

        _this27 = _possibleConstructorReturn(this, _getPrototypeOf(ShanghaiComponent).call(this, game, route, dialogService));
        _this27.settings = new _models_settings_model__WEBPACK_IMPORTED_MODULE_2__["Settings"]();
        _this27.nextEnabled = false;
        return _this27;
      }

      _createClass(ShanghaiComponent, [{
        key: "customReset",
        value: function customReset() {
          var _this28 = this;

          this.state = [];
          this.game.players.forEach(function (player) {
            return _this28.state.push(new _models_state_model__WEBPACK_IMPORTED_MODULE_1__["ShanghaiState"](player));
          }, this);
        }
      }, {
        key: "validateSettings",
        value: function validateSettings() {
          return this.settings.fields.length > 0;
        }
      }, {
        key: "calculatePoints",
        value: function calculatePoints(score) {
          var player = this.game.getActualPlayer();
          var state = this.getPlayerState(player);
          var field = score === 25 ? 'B' : score + '';

          if (this.isActiveField(field)) {
            state.increaseFieldCount(field, 1);
            state.increaseFieldScore(field, this.game.multiplier);

            if (this.settings.noScore) {
              player.score++;
            } else {
              player.score += this.getFieldValueAsNumber(field) * this.game.multiplier;
            }
          }

          return Promise.resolve();
        }
      }, {
        key: "checkPlayerState",
        value: function checkPlayerState() {
          var _this29 = this;

          var player = this.game.getActualPlayer(); // Shanghai rule

          if (this.game.actualThrow === 3) {
            var multi = 1;

            for (var i = 0; i < 3; i++) {
              var t = player.throwsHistory[player.throwsHistory.length - i - 1];

              if (t.field === this.getPreviousField()) {
                multi *= t.multi + 1;
              }
            }

            if (multi === 1 && this.settings.halveIt) {
              player.score = Math.round(player.score / 2);
            }

            player.win = multi === 24;

            if (player.win) {
              this.game.extraEndingMsg = 'SHANGHAI!!!';
            }
          }

          var gameEnded = this.game.round === this.settings.fields.length - 1 && this.game.isActualPlayerTheLast() && this.game.isTheLastThrow();

          if (gameEnded) {
            this.game.players.forEach(function (p) {
              p.win = _this29.game.isTheBestPlayer(p);

              if (p.win) {
                return;
              }
            }, this);
          } else if (this.game.actualThrow === 3) {
            this.game.nextPlayer();
          }

          return Promise.resolve();
        }
      }, {
        key: "getFieldValue",
        value: function getFieldValue(player, field) {
          var fieldCount = this.getPlayerState(player).getFieldCount(field);

          if (fieldCount === 0) {
            return '○○○';
          } else {
            var str = '' + this.getPlayerState(player).getFieldScore(field) * this.getFieldValueAsNumber(field);

            for (var i = 0; i < fieldCount; i++) {
              str += '●';
            }

            for (var _i3 = fieldCount; _i3 < 3; _i3++) {
              str += '○';
            }

            return str;
          }
        }
      }, {
        key: "isActiveField",
        value: function isActiveField(field) {
          return this.settings.fields[this.game.round] === field;
        }
      }, {
        key: "isDoneField",
        value: function isDoneField(field) {
          return this.settings.fields.indexOf(field) < this.game.round;
        }
      }, {
        key: "isFieldEnabledToThrow",
        value: function isFieldEnabledToThrow(field) {
          var fieldStr = field + '';

          if (field === 25) {
            fieldStr = 'B';
          }

          return this.settings.fields.indexOf(fieldStr) === this.game.round;
        }
      }, {
        key: "isHighlighted",
        value: function isHighlighted(field) {
          return false;
        }
      }, {
        key: "isSecondHighlighted",
        value: function isSecondHighlighted(field) {
          return false;
        }
      }, {
        key: "isLastRound",
        value: function isLastRound() {
          return this.game.round === this.settings.fields.length - 1;
        }
      }, {
        key: "canBeDraw",
        value: function canBeDraw() {
          return true;
        }
      }, {
        key: "getPreviousField",
        value: function getPreviousField() {
          return this.settings.fields[this.game.round > 0 ? this.game.round : 0];
        }
      }, {
        key: "getPlayerState",
        value: function getPlayerState(player) {
          return this.state.filter(function (s) {
            return s.player.id === player.id;
          })[0];
        }
      }]);

      return ShanghaiComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_3__["PlaygroundModel"]);

    ShanghaiComponent.ɵfac = function ShanghaiComponent_Factory(t) {
      return new (t || ShanghaiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]));
    };

    ShanghaiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShanghaiComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 5,
      consts: [["id", "playgroundContent"], [1, "left", "side_left"], [3, "playground", 4, "ngIf"], ["class", "clear", 4, "ngIf"], [4, "ngIf"], ["class", "settings", 4, "ngIf"], [3, "playground"], [1, "clear"], [3, "class", 4, "ngFor", "ngForOf"], [1, "player_info"], [1, "name", "left"], [1, "shoots", "right"], [1, "shoot", "total"], [1, "shoot"], [1, "line"], [1, "point", "right"], [1, "small"], [1, "settings"], ["mat-button", "", "class", "button left big", 3, "click", 4, "ngIf"], ["mat-button", "", "class", "button left big inactive", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-button", "", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "button", "left", "big", "capitalize", 3, "click"], ["mat-button", "", 3, "click"], [1, "clear", "space"], ["mat-button", "", 1, "button", "left", "big", 3, "click"], ["mat-button", "", 1, "button", "left", "big", "inactive"], ["name", "input", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-button", "", 1, "button", "small", 3, "click"]],
      template: function ShanghaiComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShanghaiComponent_app_game_toolbar_2_Template, 1, 1, "app-game-toolbar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShanghaiComponent_div_3_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShanghaiComponent_ng_container_4_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShanghaiComponent_div_5_Template, 24, 10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ShanghaiComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_game_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _components_number_plate_component__WEBPACK_IMPORTED_MODULE_11__["NumberPlateComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShanghaiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './shanghai.component.html'
        }]
      }], function () {
        return [{
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shanghai/shanghai.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/shanghai/shanghai.module.ts ***!
    \*********************************************/

  /*! exports provided: ShanghaiModule */

  /***/
  function srcAppShanghaiShanghaiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShanghaiModule", function () {
      return ShanghaiModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shanghai_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shanghai.component */
    "./src/app/shanghai/shanghai.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ShanghaiModule = function ShanghaiModule() {
      _classCallCheck(this, ShanghaiModule);
    };

    ShanghaiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ShanghaiModule
    });
    ShanghaiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ShanghaiModule_Factory(t) {
        return new (t || ShanghaiModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _shanghai_component__WEBPACK_IMPORTED_MODULE_2__["ShanghaiComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShanghaiModule, {
        declarations: [_shanghai_component__WEBPACK_IMPORTED_MODULE_2__["ShanghaiComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShanghaiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _shanghai_component__WEBPACK_IMPORTED_MODULE_2__["ShanghaiComponent"]
          }])],
          declarations: [_shanghai_component__WEBPACK_IMPORTED_MODULE_2__["ShanghaiComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/dialog.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/components/dialog.component.ts ***!
    \*******************************************************/

  /*! exports provided: DialogComponent */

  /***/
  function srcAppSharedComponentsDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
      return DialogComponent;
    });
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var DialogComponent =
    /*#__PURE__*/
    function () {
      function DialogComponent(dialogRef, data) {
        _classCallCheck(this, DialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(DialogComponent, [{
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return DialogComponent;
    }();

    DialogComponent.ɵfac = function DialogComponent_Factory(t) {
      return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
    };

    DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DialogComponent,
      selectors: [["ng-component"]],
      decls: 8,
      vars: 2,
      consts: [[1, "dialog-container", "evo-typography"], ["mat-dialog-title", "", 1, "subtitle-1"], [1, "body-2"], ["mat-button", "", 3, "mat-dialog-close"]],
      template: function DialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-dialog-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.content, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]],
      styles: [".dialog-container[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-size: 50px;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvRDpcXERldmVsb3BtZW50XFxkYXJ0cy1zY29yZWJvYXJkLW5nL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREdFO0VBQ0UsbUJBQUE7QUNESjtBRElFO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLnN1YnRpdGxlLTEge1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICBtYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIG1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XHJcbiAgfVxyXG59XHJcbiIsIi5kaWFsb2ctY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1pY29uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmRpYWxvZy1jb250YWluZXIgLnN1YnRpdGxlLTEge1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          templateUrl: 'dialog.component.html',
          styleUrls: ['dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/game-toolbar.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/components/game-toolbar.component.ts ***!
    \*************************************************************/

  /*! exports provided: GameToolbarComponent */

  /***/
  function srcAppSharedComponentsGameToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameToolbarComponent", function () {
      return GameToolbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var GameToolbarComponent =
    /*#__PURE__*/
    function () {
      function GameToolbarComponent(game, route) {
        _classCallCheck(this, GameToolbarComponent);

        this.game = game;
        this.route = route;
      }

      _createClass(GameToolbarComponent, [{
        key: "quit",
        value: function quit() {
          this.route.navigate(['/menu']);
          this.game.resetScore();
        }
      }, {
        key: "showSettings",
        value: function showSettings() {
          this.playground.reset();
          this.playground.settingsOpen = true;
        }
      }]);

      return GameToolbarComponent;
    }();

    GameToolbarComponent.ɵfac = function GameToolbarComponent_Factory(t) {
      return new (t || GameToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    GameToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameToolbarComponent,
      selectors: [["app-game-toolbar"]],
      inputs: {
        playground: "playground"
      },
      decls: 11,
      vars: 1,
      consts: [[1, "toolbar"], ["mat-button", "", 1, "button", 3, "click"], [1, "button"]],
      template: function GameToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_1_listener($event) {
            return ctx.quit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " MAIN ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_3_listener($event) {
            return ctx.playground.newGame(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " NEW ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_5_listener($event) {
            return ctx.showSettings();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " BACK ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_7_listener($event) {
            return ctx.playground.undo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " UNDO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.game.round + 1, ".");
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game-toolbar',
          templateUrl: './game-toolbar.component.html'
        }]
      }], function () {
        return [{
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        playground: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/number-plate.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/components/number-plate.component.ts ***!
    \*************************************************************/

  /*! exports provided: NumberPlateComponent */

  /***/
  function srcAppSharedComponentsNumberPlateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberPlateComponent", function () {
      return NumberPlateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function NumberPlateComponent_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_button_1_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var i_r39 = ctx.$implicit;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r40.playground.isFieldEnabledToThrow(i_r39) ? ctx_r40.playground.throwNumber(i_r39) : ctx_r40.playground.throwNumber(0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r39 = ctx.$implicit;

        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("number ", ctx_r34.playground.isHighlighted(i_r39) ? "highlighted" : ctx_r34.playground.isSecondHighlighted(i_r39) ? "highlighted2" : !ctx_r34.playground.isFieldEnabledToThrow(i_r39) ? "inactive" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r39);
      }
    }

    function NumberPlateComponent_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_button_4_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r42.playground.doublePoint();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Double");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("number ", ctx_r35.game.multiplier === 2 ? "highlighted" : "", "");
      }
    }

    function NumberPlateComponent_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_button_5_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.playground.triplePoint();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Triple");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("number ", ctx_r36.game.multiplier === 3 ? "highlighted" : "", "");
      }
    }

    function NumberPlateComponent_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_button_6_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.playground.skip();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NumberPlateComponent_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_button_7_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r48.playground.throwNumber(0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var NumberPlateComponent =
    /*#__PURE__*/
    function () {
      function NumberPlateComponent(game) {
        _classCallCheck(this, NumberPlateComponent);

        this.game = game;
      }

      _createClass(NumberPlateComponent, [{
        key: "getNumbers",
        value: function getNumbers() {
          var numbers = [];

          for (var i = 1; i <= 20; i++) {
            numbers[i - 1] = i;
          }

          return numbers;
        }
      }]);

      return NumberPlateComponent;
    }();

    NumberPlateComponent.ɵfac = function NumberPlateComponent_Factory(t) {
      return new (t || NumberPlateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]));
    };

    NumberPlateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NumberPlateComponent,
      selectors: [["app-number-plate"]],
      inputs: {
        playground: "playground"
      },
      decls: 8,
      vars: 8,
      consts: [[1, "right", "side_right"], ["mat-button", "", 3, "class", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "click"], ["mat-button", "", 3, "class", "click", 4, "ngIf"], ["mat-button", "", "class", "number", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "number", 3, "click"]],
      template: function NumberPlateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NumberPlateComponent_button_1_Template, 2, 4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_2_listener($event) {
            return ctx.playground.isFieldEnabledToThrow(25) ? ctx.playground.throwNumber(25) : ctx.playground.throwNumber(0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bull");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NumberPlateComponent_button_4_Template, 2, 3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NumberPlateComponent_button_5_Template, 2, 3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NumberPlateComponent_button_6_Template, 2, 0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NumberPlateComponent_button_7_Template, 2, 0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getNumbers());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("number ", ctx.playground.isHighlighted(25) ? "highlighted" : ctx.playground.isSecondHighlighted(25) ? "highlighted2" : !ctx.playground.isFieldEnabledToThrow(25) ? "inactive" : "", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playground && ctx.playground.multiEnabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playground && ctx.playground.multiEnabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playground && ctx.playground.nextEnabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playground && ctx.playground.zeroEnabled);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberPlateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-number-plate',
          templateUrl: './number-plate.component.html'
        }]
      }], function () {
        return [{
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]
        }];
      }, {
        playground: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/models/field-value.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/models/field-value.model.ts ***!
    \****************************************************/

  /*! exports provided: FieldValue */

  /***/
  function srcAppSharedModelsFieldValueModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FieldValue", function () {
      return FieldValue;
    });

    var FieldValue =
    /*#__PURE__*/
    function () {
      function FieldValue(field, value) {
        _classCallCheck(this, FieldValue);

        this.field = field;
        this.value = value;
      }

      _createClass(FieldValue, [{
        key: "clone",
        value: function clone() {
          return new FieldValue(this.field, this.value);
        }
      }]);

      return FieldValue;
    }();
    /***/

  },

  /***/
  "./src/app/shared/models/player.model.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/models/player.model.ts ***!
    \***********************************************/

  /*! exports provided: Player */

  /***/
  function srcAppSharedModelsPlayerModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Player", function () {
      return Player;
    });

    var Player =
    /*#__PURE__*/
    function () {
      function Player(id) {
        _classCallCheck(this, Player);

        this.name = '';
        this.score = 0;
        this.throws = [];
        this.win = false;
        this.first = true;
        this.id = id;
      }

      _createClass(Player, [{
        key: "getThrowsTotal",
        value: function getThrowsTotal() {
          return this.throws.reduce(function (a, b) {
            return a + b;
          }, 0);
        }
      }, {
        key: "addThrowHistory",
        value: function addThrowHistory(thr) {
          this.throwsHistory.push(thr);
        }
      }, {
        key: "reset",
        value: function reset() {
          this.score = 0;
          this.throws = [];
          this.throwsHistory = [];
          this.win = false;
          this.first = true;
        }
      }, {
        key: "clone",
        value: function clone() {
          var player = new Player(this.id);
          player.name = this.name;
          player.score = this.score;
          player.throws = [];
          this.throws.forEach(function (t) {
            player.throws.push(t);
          });
          player.throwsHistory = this.throwsHistory;
          player.win = this.win;
          player.first = this.first;
          player.throwsHistory = [];
          this.throwsHistory.forEach(function (throws) {
            player.throwsHistory.push(throws.clone());
          });
          return player;
        }
      }]);

      return Player;
    }();
    /***/

  },

  /***/
  "./src/app/shared/models/playground-state.model.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/models/playground-state.model.ts ***!
    \*********************************************************/

  /*! exports provided: PlaygroundState */

  /***/
  function srcAppSharedModelsPlaygroundStateModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaygroundState", function () {
      return PlaygroundState;
    });
    /* harmony import */


    var _field_value_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./field-value.model */
    "./src/app/shared/models/field-value.model.ts");

    var PlaygroundState =
    /*#__PURE__*/
    function () {
      function PlaygroundState(player) {
        _classCallCheck(this, PlaygroundState);

        this.player = player;
      }

      _createClass(PlaygroundState, [{
        key: "getFieldValue",
        value: function getFieldValue(list, field) {
          var filtered = list.filter(function (f) {
            return f.field === field;
          });

          if (filtered.length === 0) {
            list.push(new _field_value_model__WEBPACK_IMPORTED_MODULE_0__["FieldValue"](field, 0));
          }

          return list.filter(function (f) {
            return f.field === field;
          })[0];
        }
      }]);

      return PlaygroundState;
    }();
    /***/

  },

  /***/
  "./src/app/shared/models/playground.model.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/models/playground.model.ts ***!
    \***************************************************/

  /*! exports provided: PlaygroundModel */

  /***/
  function srcAppSharedModelsPlaygroundModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaygroundModel", function () {
      return PlaygroundModel;
    });
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/index.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _player_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./player.model */
    "./src/app/shared/models/player.model.ts");
    /* harmony import */


    var _throw_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./throw.model */
    "./src/app/shared/models/throw.model.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");

    var PlaygroundModel =
    /*#__PURE__*/
    function () {
      function PlaygroundModel(game, route, dialogService) {
        _classCallCheck(this, PlaygroundModel);

        this.game = game;
        this.route = route;
        this.dialogService = dialogService;
        this.throwEnabled = true;
        this.settingsOpen = true;
        this.nextEnabled = true;
        this.zeroEnabled = true;
        this.multiEnabled = true;
        this.stateHistory = [];
        this.playground = this;
      }

      _createClass(PlaygroundModel, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.settingsOpen = true;

          if (this.game.players.length === 0) {
            this.addPlayer();
          }
        }
      }, {
        key: "throwNumber",
        value: function throwNumber(score) {
          var _this30 = this;

          if (this.throwEnabled) {
            this.save();
            this.throwEnabled = false;

            if (score === 25 && this.game.multiplier === 3) {
              this.game.multiplier = 1;
            }

            var actualPlayer = this.game.getActualPlayer();
            actualPlayer.addThrowHistory(new _throw_model__WEBPACK_IMPORTED_MODULE_2__["Throw"](score, this.game.multiplier, this.game.actualThrow));

            if (this.game.actualThrow === 0) {
              actualPlayer.throws = [];
            }

            actualPlayer.throws[this.game.actualThrow] = score * this.game.multiplier;
            this.game.actualThrow++;
            this.calculatePoints(score).then(function () {
              return _this30.checkPlayerState();
            }).then(function () {
              _this30.game.multiplier = 1;

              _this30.game.players.forEach(function (player) {
                if (player.win) {
                  _this30.dialogService.openDialog(_this30.game.extraEndingMsg, _this30.canBeDraw() && _this30.game.isDraw() ? 'End in a Draw' : "".concat(player.name, " is the winner!"), _this30.game.clone().players);

                  _this30.newGame(true);
                }
              });

              _this30.throwEnabled = true;
            });
          }
        }
      }, {
        key: "triplePoint",
        value: function triplePoint() {
          this.game.multiplier = this.game.multiplier === 3 ? 1 : 3;
        }
      }, {
        key: "doublePoint",
        value: function doublePoint() {
          this.game.multiplier = this.game.multiplier === 2 ? 1 : 2;
        }
      }, {
        key: "newGame",
        value: function newGame() {
          var rotate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.settingsOpen = !this.validatePlayerSettings() || !this.validateSettings();
          this.reset();

          if (rotate) {
            this.game.rotatePlayers();
          }
        }
      }, {
        key: "addPlayer",
        value: function addPlayer() {
          var player = new _player_model__WEBPACK_IMPORTED_MODULE_1__["Player"](Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])());
          player.name = 'Player ' + (this.game.players.length + 1);
          this.game.players.push(player);
        }
      }, {
        key: "removePlayer",
        value: function removePlayer(player) {
          if (this.game.players.length > 1) {
            this.game.players = this.game.players.filter(function (p) {
              return p !== player;
            });
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          this.gameHistory = [];
          this.game.resetScore();
          this.stateHistory = [];
          this.customReset();
        }
      }, {
        key: "busted",
        value: function busted() {
          this.dialogService.openDialog('Game Over', "".concat(this.game.getActualPlayer().name, " busted!"));
        }
      }, {
        key: "getFieldValueAsNumber",
        value: function getFieldValueAsNumber(field) {
          return field === 'B' ? 25 : parseInt(field, 10);
        }
      }, {
        key: "undo",
        value: function undo() {
          if (this.gameHistory.length > 0) {
            this.game = this.gameHistory.pop();

            if (this.stateHistory.length > 0) {
              this.state = this.stateHistory.pop();
            }
          }
        }
      }, {
        key: "skip",
        value: function skip() {
          if (!(this.game.isActualPlayerTheLast() && this.isLastRound())) {
            this.save();
            this.game.nextPlayer();
            this.customNext();
          }
        }
      }, {
        key: "quit",
        value: function quit() {
          this.route.navigate(['/menu']);
          this.game.resetScore();
        }
      }, {
        key: "customNext",
        value: function customNext() {// should be implemented
        }
      }, {
        key: "validatePlayerSettings",
        value: function validatePlayerSettings() {
          var players = [];
          this.game.players.forEach(function (player) {
            if (player.name.length !== 0) {
              players.push(player);
            }
          });
          this.game.players = players;
          return players.length !== 0;
        }
      }, {
        key: "save",
        value: function save() {
          this.gameHistory.push(this.game.clone());

          if (this.state) {
            var state = [];
            this.state.forEach(function (s) {
              return state.push(s.clone());
            });
            this.stateHistory.push(state);
          }
        }
      }]);

      return PlaygroundModel;
    }();

    PlaygroundModel.ɵfac = function PlaygroundModel_Factory(t) {
      return new (t || PlaygroundModel)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]));
    };

    PlaygroundModel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: PlaygroundModel
    });
    /***/
  },

  /***/
  "./src/app/shared/models/throw.model.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/models/throw.model.ts ***!
    \**********************************************/

  /*! exports provided: Throw */

  /***/
  function srcAppSharedModelsThrowModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Throw", function () {
      return Throw;
    });

    var Throw =
    /*#__PURE__*/
    function () {
      function Throw(fieldNum, multi, order) {
        _classCallCheck(this, Throw);

        this.fieldNum = fieldNum;
        this.field = fieldNum === 25 ? 'B' : fieldNum + '';
        this.multi = multi;
        this.order = order;
      }

      _createClass(Throw, [{
        key: "clone",
        value: function clone() {
          return new Throw(this.fieldNum, this.multi, this.order);
        }
      }]);

      return Throw;
    }();
    /***/

  },

  /***/
  "./src/app/shared/services/dialog.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/services/dialog.service.ts ***!
    \***************************************************/

  /*! exports provided: DialogService */

  /***/
  function srcAppSharedServicesDialogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogService", function () {
      return DialogService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~components/dialog.component */
    "./src/app/shared/components/dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var DialogService =
    /*#__PURE__*/
    function () {
      function DialogService(dialog) {
        _classCallCheck(this, DialogService);

        this.dialog = dialog;
      }

      _createClass(DialogService, [{
        key: "openDialog",
        value: function openDialog() {
          var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var players = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          return this.dialog.open(_components_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"], {
            panelClass: 'success-dialog',
            data: {
              title: title,
              content: content,
              players: players
            }
          });
        }
      }]);

      return DialogService;
    }();

    DialogService.ɵfac = function DialogService_Factory(t) {
      return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DialogService,
      factory: DialogService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/game.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/game.service.ts ***!
    \*************************************************/

  /*! exports provided: GameService */

  /***/
  function srcAppSharedServicesGameServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameService", function () {
      return GameService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MAXIMUM_NUMBER_OF_PLAYERS = 6;

    var GameService =
    /*#__PURE__*/
    function () {
      function GameService() {
        _classCallCheck(this, GameService);

        this.players = [];
      }

      _createClass(GameService, [{
        key: "canAddPlayer",
        value: function canAddPlayer() {
          return this.players.length < MAXIMUM_NUMBER_OF_PLAYERS;
        }
      }, {
        key: "isTheFirstThrow",
        value: function isTheFirstThrow() {
          return this.actualThrow === 1;
        }
      }, {
        key: "isTheLastThrow",
        value: function isTheLastThrow() {
          return this.actualThrow === 3;
        }
      }, {
        key: "getActualPlayer",
        value: function getActualPlayer() {
          return this.players[this.actualPlayerIndex];
        }
      }, {
        key: "nextPlayer",
        value: function nextPlayer() {
          if (this.isActualPlayerTheLast()) {
            this.nextRound();
          }

          this.actualPlayerIndex = (this.actualPlayerIndex + 1) % this.getNumberOfPlayers();
          this.actualThrow = 0;
        }
      }, {
        key: "getNumberOfPlayers",
        value: function getNumberOfPlayers() {
          return this.players.length;
        }
      }, {
        key: "getTheFirstPlayer",
        value: function getTheFirstPlayer() {
          return this.players[0];
        }
      }, {
        key: "isTheFirstPlayer",
        value: function isTheFirstPlayer(player) {
          return player.id === this.getTheFirstPlayer().id;
        }
      }, {
        key: "isActualPlayerIsTheFirst",
        value: function isActualPlayerIsTheFirst() {
          return this.isTheFirstPlayer(this.getActualPlayer());
        }
      }, {
        key: "getTheLastPlayer",
        value: function getTheLastPlayer() {
          return this.players[this.getNumberOfPlayers() - 1];
        }
      }, {
        key: "isTheLastPlayer",
        value: function isTheLastPlayer(player) {
          return player.id === this.getTheLastPlayer().id;
        }
      }, {
        key: "isActualPlayerTheLast",
        value: function isActualPlayerTheLast() {
          return this.isTheLastPlayer(this.getActualPlayer());
        }
      }, {
        key: "isTheBestPlayer",
        value: function isTheBestPlayer(actPlayer) {
          var bestPlayer = true;
          this.players.forEach(function (player) {
            bestPlayer = bestPlayer && actPlayer.score >= player.score;
          });
          return bestPlayer;
        }
      }, {
        key: "isTheWorstPlayer",
        value: function isTheWorstPlayer(actPlayer) {
          var lastPlayer = true;
          this.players.forEach(function (player) {
            lastPlayer = lastPlayer && actPlayer.score <= player.score;
          });
          return lastPlayer;
        }
      }, {
        key: "isDraw",
        value: function isDraw() {
          var winners = this.players.filter(function (player) {
            return player.win;
          });

          if (winners.length > 0) {
            return this.players.filter(function (player) {
              return player.id !== winners[0].id && player.score === winners[0].score;
            }).length > 0;
          }

          return false;
        }
      }, {
        key: "nextRound",
        value: function nextRound() {
          this.round++;
        }
      }, {
        key: "reset",
        value: function reset() {
          this.resetScore();
          this.players = [];
        }
      }, {
        key: "resetScore",
        value: function resetScore() {
          this.extraEndingMsg = '';
          this.players.forEach(function (player) {
            return player.reset();
          });
          this.actualPlayerIndex = 0;
          this.actualThrow = 0;
          this.multiplier = 1;
          this.round = 0;
        }
      }, {
        key: "rotatePlayers",
        value: function rotatePlayers() {
          this.players.push(this.players.shift());
        }
      }, {
        key: "clone",
        value: function clone() {
          var game = new GameService();
          game.actualPlayerIndex = this.actualPlayerIndex;
          game.actualThrow = this.actualThrow;
          game.multiplier = this.multiplier;
          game.extraEndingMsg = this.extraEndingMsg;
          game.round = this.round;
          var players = [];
          this.players.forEach(function (player) {
            players.push(player.clone());
          });
          game.players = players;
          return game;
        }
      }]);

      return GameService;
    }();

    GameService.ɵfac = function GameService_Factory(t) {
      return new (t || GameService)();
    };

    GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GameService,
      factory: GameService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _components_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ~components/dialog.component */
    "./src/app/shared/components/dialog.component.ts");
    /* harmony import */


    var _components_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~components/game-toolbar.component */
    "./src/app/shared/components/game-toolbar.component.ts");
    /* harmony import */


    var _components_number_plate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ~components/number-plate.component */
    "./src/app/shared/components/number-plate.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_number_plate_component__WEBPACK_IMPORTED_MODULE_6__["NumberPlateComponent"], _components_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["GameToolbarComponent"], _components_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _components_number_plate_component__WEBPACK_IMPORTED_MODULE_6__["NumberPlateComponent"], _components_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["GameToolbarComponent"], _components_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]],
          declarations: [_components_number_plate_component__WEBPACK_IMPORTED_MODULE_6__["NumberPlateComponent"], _components_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["GameToolbarComponent"], _components_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _components_number_plate_component__WEBPACK_IMPORTED_MODULE_6__["NumberPlateComponent"], _components_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["GameToolbarComponent"], _components_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
          entryComponents: [_components_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/x01/models/settings.model.ts":
  /*!**********************************************!*\
    !*** ./src/app/x01/models/settings.model.ts ***!
    \**********************************************/

  /*! exports provided: Settings */

  /***/
  function srcAppX01ModelsSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Settings", function () {
      return Settings;
    });

    var Settings =
    /*#__PURE__*/
    function () {
      function Settings() {
        _classCallCheck(this, Settings);

        this.startValue = 301;
        this.start = 1;
        this.checkout = 1;
      }

      _createClass(Settings, [{
        key: "isNormalStart",
        value: function isNormalStart() {
          return this.start === 1;
        }
      }, {
        key: "isDoubleStart",
        value: function isDoubleStart() {
          return this.start === 2;
        }
      }, {
        key: "isTripleStart",
        value: function isTripleStart() {
          return this.start === 3;
        }
      }, {
        key: "isNormalCheckout",
        value: function isNormalCheckout() {
          return this.checkout === 1;
        }
      }, {
        key: "isDoubleCheckout",
        value: function isDoubleCheckout() {
          return this.checkout === 2;
        }
      }, {
        key: "isTripleCheckout",
        value: function isTripleCheckout() {
          return this.checkout === 3;
        }
      }, {
        key: "isHighScoreGame",
        value: function isHighScoreGame() {
          return this.checkout === 4;
        }
      }, {
        key: "setStart",
        value: function setStart(start) {
          this.start = start;
        }
      }, {
        key: "setCheckout",
        value: function setCheckout(checkout) {
          this.checkout = checkout;
        }
      }, {
        key: "setStartValue",
        value: function setStartValue(startValue) {
          this.startValue = startValue;
        }
      }]);

      return Settings;
    }();
    /***/

  },

  /***/
  "./src/app/x01/x01.component.ts":
  /*!**************************************!*\
    !*** ./src/app/x01/x01.component.ts ***!
    \**************************************/

  /*! exports provided: X01Component */

  /***/
  function srcAppX01X01ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "X01Component", function () {
      return X01Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_settings_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./models/settings.model */
    "./src/app/x01/models/settings.model.ts");
    /* harmony import */


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_game_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ~components/game-toolbar.component */
    "./src/app/shared/components/game-toolbar.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_number_plate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ~components/number-plate.component */
    "./src/app/shared/components/number-plate.component.ts");

    function X01Component_app_game_toolbar_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 6);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r0.playground);
      }
    }

    function X01Component_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
      }
    }

    function X01Component_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r6 = ctx.$implicit;
        var i_r7 = ctx.index;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r7 === ctx_r5.game.actualPlayerIndex ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r6.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r6.getThrowsTotal());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r6.throws[2]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r6.throws[1]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r6.throws[0]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r6.score);
      }
    }

    function X01Component_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, X01Component_ng_container_4_div_1_Template, 22, 9, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.game.players);
      }
    }

    function X01Component_div_5_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_div_5_button_5_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.addPlayer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Player");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function X01Component_div_5_button_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Player");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function X01Component_div_5_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function X01Component_div_5_div_8_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var player_r13 = ctx.$implicit;
          return player_r13.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_div_5_div_8_Template_button_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var player_r13 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.removePlayer(player_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " -");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r13 = ctx.$implicit;
        var i_r14 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Player #", i_r14 + 1, " name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", player_r13.name);
      }
    }

    function X01Component_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "X01 Settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Players");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, X01Component_div_5_button_5_Template, 2, 0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, X01Component_div_5_button_6_Template, 2, 0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, X01Component_div_5_div_8_Template, 6, 2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Games");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_div_5_Template_button_click_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.settings.setStartValue(101);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "101 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_div_5_Template_button_click_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.settings.setStartValue(201);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "201 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_div_5_Template_button_click_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.settings.setStartValue(301);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "301 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_div_5_Template_button_click_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.settings.setStartValue(501);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "501 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_div_5_Template_button_click_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.settings.setStartValue(701);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "701 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_div_5_Template_button_click_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.settings.setStartValue(901);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "901 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Start");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_div_5_Template_button_click_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.settings.setStart(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Single ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_div_5_Template_button_click_29_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.settings.setStart(2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Double ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_div_5_Template_button_click_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.settings.setStart(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Triple ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Checkout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_div_5_Template_button_click_36_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.settings.setCheckout(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Single ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_div_5_Template_button_click_38_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.settings.setCheckout(2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Double ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_div_5_Template_button_click_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.settings.setCheckout(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Triple ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_div_5_Template_button_click_42_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.settings.setCheckout(4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "None ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_div_5_Template_button_click_45_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.newGame();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Save and Start");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_div_5_Template_button_click_47_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.quit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.game.canAddPlayer());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.game.canAddPlayer());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.game.players);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left ", ctx_r3.settings.startValue == 101 ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left ", ctx_r3.settings.startValue == 201 ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left ", ctx_r3.settings.startValue == 301 ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left ", ctx_r3.settings.startValue == 501 ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left ", ctx_r3.settings.startValue == 701 ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left ", ctx_r3.settings.startValue == 901 ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left shortmedium ", ctx_r3.settings.start == 1 ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left shortmedium ", ctx_r3.settings.start == 2 ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left shortmedium ", ctx_r3.settings.start == 3 ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left shortmedium ", ctx_r3.settings.checkout == 1 ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left shortmedium ", ctx_r3.settings.checkout == 2 ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left shortmedium ", ctx_r3.settings.checkout == 3 ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button left shortmedium ", ctx_r3.settings.checkout == 4 ? "highlighted" : "", "");
      }
    }

    function X01Component_app_number_plate_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 6);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r4.playground);
      }
    }

    var X01Component =
    /*#__PURE__*/
    function (_models_playground_mo6) {
      _inherits(X01Component, _models_playground_mo6);

      function X01Component(game, route, dialogService) {
        var _this31;

        _classCallCheck(this, X01Component);

        _this31 = _possibleConstructorReturn(this, _getPrototypeOf(X01Component).call(this, game, route, dialogService));
        _this31.settings = new _models_settings_model__WEBPACK_IMPORTED_MODULE_1__["Settings"]();
        return _this31;
      }

      _createClass(X01Component, [{
        key: "customReset",
        value: function customReset() {
          var _this32 = this;

          this.game.players.forEach(function (player) {
            return player.score = _this32.settings.startValue;
          });
        }
      }, {
        key: "validateSettings",
        value: function validateSettings() {
          return true;
        }
      }, {
        key: "calculatePoints",
        value: function calculatePoints(score) {
          var player = this.game.getActualPlayer();
          var actualScore = score * this.game.multiplier;
          var validStart = !player.first || this.settings.isNormalStart() || player.first && (this.settings.isDoubleStart() && this.game.multiplier === 2 || this.settings.isTripleStart() && this.game.multiplier === 3);

          if (validStart) {
            player.first = false;
            return this.countDown(player, actualScore);
          } else {
            return Promise.resolve();
          }
        }
      }, {
        key: "countDown",
        value: function countDown(player, score) {
          return new Promise(function (resolve, reject) {
            var id = setInterval(function () {
              if (score === 0) {
                clearInterval(id);
                resolve();
              } else if (player.score < 0) {
                player.score -= score;
                score = 0;
              } else {
                player.score--;
                score--;
              }
            }, 5);
          });
        }
      }, {
        key: "checkPlayerState",
        value: function checkPlayerState() {
          var player = this.game.getActualPlayer();
          var next = false;

          if (this.settings.isHighScoreGame() && player.score <= 0 || player.score === 0 && (this.settings.isNormalCheckout() || this.settings.isDoubleCheckout() && this.game.multiplier === 2 || this.settings.isTripleCheckout() && this.game.multiplier === 3)) {
            player.win = true;
            next = true;
          } else if (player.score <= 0 || this.settings.isDoubleCheckout() && player.score < 2 || this.settings.isTripleCheckout() && player.score < 3) {
            player.throws.forEach(function (t) {
              return player.score += t;
            });
            next = true;
            this.busted();
          }

          if (this.game.actualThrow === 3 || next) {
            this.game.nextPlayer();
          }

          return Promise.resolve();
        }
      }, {
        key: "isFieldEnabledToThrow",
        value: function isFieldEnabledToThrow(field) {
          return true;
        }
      }, {
        key: "isHighlighted",
        value: function isHighlighted(field) {
          return false;
        }
      }, {
        key: "isSecondHighlighted",
        value: function isSecondHighlighted(field) {
          return false;
        }
      }, {
        key: "isLastRound",
        value: function isLastRound() {
          return false;
        }
      }, {
        key: "canBeDraw",
        value: function canBeDraw() {
          return false;
        }
      }]);

      return X01Component;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_2__["PlaygroundModel"]);

    X01Component.ɵfac = function X01Component_Factory(t) {
      return new (t || X01Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]));
    };

    X01Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: X01Component,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 5,
      consts: [["id", "playgroundContent"], [1, "left", "side_left"], [3, "playground", 4, "ngIf"], ["class", "clear", 4, "ngIf"], [4, "ngIf"], ["class", "settings", 4, "ngIf"], [3, "playground"], [1, "clear"], [3, "class", 4, "ngFor", "ngForOf"], [1, "player_info"], [1, "name", "left"], [1, "shoots", "right"], [1, "shoot", "total"], [1, "shoot"], [1, "line"], [1, "point", "left"], [1, "settings"], ["mat-button", "", "class", "button left big", 3, "click", 4, "ngIf"], ["mat-button", "", "class", "button left big inactive", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-button", "", 3, "click"], [1, "clear", "space"], ["mat-button", "", 1, "button", "left", "big", 3, "click"], ["mat-button", "", 1, "button", "left", "big", "inactive"], ["name", "input", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-button", "", 1, "button", "small", 3, "click"]],
      template: function X01Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, X01Component_app_game_toolbar_2_Template, 1, 1, "app-game-toolbar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, X01Component_div_3_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, X01Component_ng_container_4_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, X01Component_div_5_Template, 49, 42, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, X01Component_app_number_plate_6_Template, 1, 1, "app-number-plate", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_game_toolbar_component__WEBPACK_IMPORTED_MODULE_7__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _components_number_plate_component__WEBPACK_IMPORTED_MODULE_10__["NumberPlateComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](X01Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './x01.component.html'
        }]
      }], function () {
        return [{
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/x01/x01.module.ts":
  /*!***********************************!*\
    !*** ./src/app/x01/x01.module.ts ***!
    \***********************************/

  /*! exports provided: X01Module */

  /***/
  function srcAppX01X01ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "X01Module", function () {
      return X01Module;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _x01_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./x01.component */
    "./src/app/x01/x01.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var X01Module = function X01Module() {
      _classCallCheck(this, X01Module);
    };

    X01Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: X01Module
    });
    X01Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function X01Module_Factory(t) {
        return new (t || X01Module)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _x01_component__WEBPACK_IMPORTED_MODULE_2__["X01Component"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](X01Module, {
        declarations: [_x01_component__WEBPACK_IMPORTED_MODULE_2__["X01Component"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](X01Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _x01_component__WEBPACK_IMPORTED_MODULE_2__["X01Component"]
          }])],
          declarations: [_x01_component__WEBPACK_IMPORTED_MODULE_2__["X01Component"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Development\darts-scoreboard-ng\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map