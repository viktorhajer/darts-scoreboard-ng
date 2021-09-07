function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
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


    var _killer_killer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./killer/killer.module */
    "./src/app/killer/killer.module.ts");
    /* harmony import */


    var _fives_fives_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fives/fives.module */
    "./src/app/fives/fives.module.ts");
    /* harmony import */


    var _hare_and_hound_hare_and_hound_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./hare-and-hound/hare-and-hound.module */
    "./src/app/hare-and-hound/hare-and-hound.module.ts");
    /* harmony import */


    var _knockout_knockout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./knockout/knockout.module */
    "./src/app/knockout/knockout.module.ts");
    /* harmony import */


    var _conqueror_conqueror_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./conqueror/conqueror.module */
    "./src/app/conqueror/conqueror.module.ts");
    /* harmony import */


    var _imitator_imitator_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./imitator/imitator.module */
    "./src/app/imitator/imitator.module.ts");
    /* harmony import */


    var _scam_scam_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./scam/scam.module */
    "./src/app/scam/scam.module.ts");
    /* harmony import */


    var _duel_duel_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./duel/duel.module */
    "./src/app/duel/duel.module.ts");

    var routes = [{
      path: '',
      component: _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__["MenuComponent"]
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
        name: 'Around The Clock / Nine Lives'
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
      path: 'fives',
      data: {
        name: 'Fives'
      },
      loadChildren: function loadChildren() {
        return _fives_fives_module__WEBPACK_IMPORTED_MODULE_6__["FivesModule"];
      }
    }, {
      path: 'hare-and-hound',
      data: {
        name: 'Hare and Hound'
      },
      loadChildren: function loadChildren() {
        return _hare_and_hound_hare_and_hound_module__WEBPACK_IMPORTED_MODULE_7__["HareAndHoundModule"];
      }
    }, {
      path: 'knockout',
      data: {
        name: 'Knockout'
      },
      loadChildren: function loadChildren() {
        return _knockout_knockout_module__WEBPACK_IMPORTED_MODULE_8__["KnockoutModule"];
      }
    }, {
      path: 'killer',
      data: {
        name: 'Killer'
      },
      loadChildren: function loadChildren() {
        return _killer_killer_module__WEBPACK_IMPORTED_MODULE_5__["KillerModule"];
      }
    }, {
      path: 'conqueror',
      data: {
        name: 'Conqueror'
      },
      loadChildren: function loadChildren() {
        return _conqueror_conqueror_module__WEBPACK_IMPORTED_MODULE_9__["ConquerorModule"];
      }
    }, {
      path: 'duel',
      data: {
        name: 'Duel'
      },
      loadChildren: function loadChildren() {
        return _duel_duel_module__WEBPACK_IMPORTED_MODULE_12__["DuelModule"];
      }
    }, {
      path: 'imitator',
      data: {
        name: 'Imitator'
      },
      loadChildren: function loadChildren() {
        return _imitator_imitator_module__WEBPACK_IMPORTED_MODULE_10__["ImitatorModule"];
      }
    }, {
      path: 'scam',
      data: {
        name: 'Scam'
      },
      loadChildren: function loadChildren() {
        return _scam_scam_module__WEBPACK_IMPORTED_MODULE_11__["ScamModule"];
      }
    }, {
      path: '**',
      redirectTo: ''
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


    var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./route-animation */
    "./src/app/route-animation.ts");
    /* harmony import */


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _services_sound_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ~services/sound.service */
    "./src/app/shared/services/sound.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var _c0 = ["audioElement"];

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(applicationStateService, soundService) {
        _classCallCheck(this, AppComponent);

        this.applicationStateService = applicationStateService;
        this.soundService = soundService;
        document.addEventListener('touchmove', function (event) {
          if (event.scale !== 1) {
            event.preventDefault();
          }
        }, {
          passive: false
        });
      }

      _createClass(AppComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.soundService.audioElement = this.audioElementRef.nativeElement;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_3__["SoundService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.audioElementRef = _t.first);
        }
      },
      decls: 9,
      vars: 1,
      consts: [["audioElement", ""], ["outlet", "outlet"], [1, "theme-chooser"], ["mat-icon-button", "", "color", "primary", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "audio", null, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() {
            return ctx.applicationStateService.toggleDarkTheme();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "brightness_1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", _r1 && _r1.isActivated && _r1.activatedRoute);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]],
      styles: [".theme-chooser[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXERldmVsb3BtZW50XFxkYXJ0cy1zY29yZWJvYXJkLW5nL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRoZW1lLWNob29zZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG4iLCIudGhlbWUtY2hvb3NlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufSJdfQ== */"],
      data: {
        animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: 'app.component.html',
          styleUrls: ['./app.component.scss'],
          animations: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]]
        }]
      }], function () {
        return [{
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationStateService"]
        }, {
          type: _services_sound_service__WEBPACK_IMPORTED_MODULE_3__["SoundService"]
        }];
      }, {
        audioElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['audioElement']
        }]
      });
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


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
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
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]],
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
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]],
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


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");
    /* harmony import */


    var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../route-animation */
    "./src/app/route-animation.ts");
    /* harmony import */


    var _models_around_clock_state_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./models/around-clock.state.model */
    "./src/app/aroundclock/models/around-clock.state.model.ts");
    /* harmony import */


    var _models_around_clock_settings_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./models/around-clock.settings.model */
    "./src/app/aroundclock/models/around-clock.settings.model.ts");
    /* harmony import */


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _services_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ~services/sound.service */
    "./src/app/shared/services/sound.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function AroundClockComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r103.settings.toggleJump();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Enable Jump ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r105.settings.togglePunishment();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Punishment ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r106.settings.toggleSaboteur();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Saboteur ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r107.settings.togglePromoter();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Promoter ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r108.settings.toggleNineLives();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Nine Lives ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r109.settings.toggleFiveLives();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Five Lives ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r110.settings.toggleSevenLives();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Seven Lives ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r111.settings.toggleTenLives();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Ten Lives ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Field's order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r112.settings.setStyle(0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Ascending ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r113.settings.setStyle(4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Descending ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r114.settings.setStyle(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Clockwise ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r115.settings.setStyle(2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Anticlockwise ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r116.settings.setStyle(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Random ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r117.settings.setStyle(6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Random11 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r118.settings.setStyle(5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Recurrence ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_38_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r119.settings.setStyle(7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Pirate ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Around The Clock")("playground", ctx_r99.playground)("rules", "The object of this popular game is to be the first player to hit every number on the board " + "from 1-20. The numbers must be hit in order, and players alternate after three throws. The player " + "must hit each number in turn and cannot proceed until to the next number until the number is hit. " + "The winner is the player who hist all the numbers in order first.\n\nNine Lives: Each player gets three " + "lives. I do not know why the game is called 9 lives but you only get 3. Maybe it is because if you " + "miss with three darts you lose a life and 3 x 3 = 9");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r99.settings.jump ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r99.settings.punishment ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r99.settings.saboteur ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r99.settings.promoter ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r99.settings.life === 3 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r99.settings.life === 5 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r99.settings.life === 7 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r99.settings.life === 10 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r99.settings.style == 0 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r99.settings.style == 4 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r99.settings.style == 1 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r99.settings.style == 2 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r99.settings.style == 3 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r99.settings.style == 6 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r99.settings.style == 5 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r99.settings.style == 7 ? "primary" : "");
      }
    }

    function AroundClockComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 7);
      }

      if (rf & 2) {
        var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r100.playground);
      }
    }

    function AroundClockComponent_ng_container_4_div_3_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Life: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var player_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r121.life);
      }
    }

    function AroundClockComponent_ng_container_4_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AroundClockComponent_ng_container_4_div_3_ng_container_2_Template, 5, 1, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r121 = ctx.$implicit;
        var i_r122 = ctx.index;

        var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player\n        ", i_r122 === ctx_r120.game.actualPlayerIndex ? "highlighted" : "", "\n        ", ctx_r120.settings.life !== 0 && player_r121.isInactive() ? "inactive" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r121)("scoreDisplayed", false)("hasContent", ctx_r120.settings.life !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r120.settings.life !== 0);
      }
    }

    function AroundClockComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_ng_container_4_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126);

          var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r125.toggleHiddenInfo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AroundClockComponent_ng_container_4_div_3_Template, 3, 8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", ctx_r101.hiddenInfo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r101.getDistanceFromRandom());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r101.game.players);
      }
    }

    function AroundClockComponent_app_number_plate_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 7);
      }

      if (rf & 2) {
        var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r102.playground);
      }
    }

    var AroundClockComponent =
    /*#__PURE__*/
    function (_models_playground_mo) {
      _inherits(AroundClockComponent, _models_playground_mo);

      var _super = _createSuper(AroundClockComponent);

      function AroundClockComponent(application, game, route, dialogService, soundService) {
        var _this;

        _classCallCheck(this, AroundClockComponent);

        _this = _super.call(this, application, game, route, dialogService, soundService);
        _this.hiddenInfo = true;
        _this.settings = new _models_around_clock_settings_model__WEBPACK_IMPORTED_MODULE_4__["AroundClockSettings"]();
        return _this;
      }

      _createClass(AroundClockComponent, [{
        key: "calculatePoints",
        value: function calculatePoints(player, fieldIndex, score, scoreReal) {
          var _this2 = this;

          var state = this.getPlayerState(player);
          var originalMulti = this.multiplier;

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

          if ((this.settings.saboteur || this.settings.promoter) && scoreReal !== 0) {
            var realFieldIndex = scoreReal === 25 ? 20 : scoreReal - 1;
            this.game.players.filter(function (p) {
              return p.id !== player.id;
            }).forEach(function (otherPlayer) {
              var otherPlayerState = _this2.getPlayerState(otherPlayer);

              if (_this2.getFieldIndex(otherPlayerState.actFieldIndex) === realFieldIndex && score === 0) {
                if (_this2.settings.saboteur) {
                  otherPlayerState.decreaseActFieldIndex(_this2.settings.jump ? originalMulti : 1);
                } else {
                  otherPlayerState.increaseActFieldIndex(_this2.settings.jump ? originalMulti : 1);

                  if (otherPlayerState.actFieldIndex >= _this2.settings.fields.length) {
                    otherPlayerState.actFieldIndex = _this2.settings.fields.length - 1;
                  }
                }
              }
            });
          }
        }
      }, {
        key: "checkPlayerState",
        value: function checkPlayerState(player) {
          var state = this.getPlayerState(player);

          if (this.settings.fields.length - 1 < state.actFieldIndex) {
            player.setWin();
          } else if (this.game.isTheLastThrow()) {
            if (this.settings.punishment || this.settings.life !== 0) {
              var multi = 0;

              for (var i = 0; i < 3; i++) {
                var t = player.throwsHistory[player.throwsHistory.length - i - 1];
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

          if (this.settings.life !== 0 && this.game.players.length > 1) {
            var activePlayers = this.game.players.filter(function (p) {
              return !p.isInactive();
            });

            if (activePlayers.length === 1) {
              activePlayers[0].setWin(true);
            } else if (!!activePlayers.length) {
              while (this.game.getActualPlayer().isInactive()) {
                this.game.nextPlayer();
              }
            }
          }
        }
      }, {
        key: "getDistanceFromRandom",
        value: function getDistanceFromRandom() {
          if (this.settings.style === 3) {
            var bullPos = this.settings.fields.findIndex(function (f) {
              return f === 20;
            });
            var playerPos = this.getPlayerState(this.game.getActualPlayer()).actFieldIndex;
            var diff = bullPos - playerPos;
            return diff >= 0 ? diff + '' : '';
          }

          return '';
        }
      }, {
        key: "toggleHiddenInfo",
        value: function toggleHiddenInfo() {
          this.hiddenInfo = !this.hiddenInfo;
        }
      }, {
        key: "isFieldEnabled",
        value: function isFieldEnabled(fieldIndex) {
          return fieldIndex === this.getFieldIndex(this.getPlayerState(this.game.getActualPlayer()).actFieldIndex);
        }
      }, {
        key: "isPrimaryField",
        value: function isPrimaryField(fieldIndex) {
          return this.isFieldEnabled(fieldIndex);
        }
      }, {
        key: "isSecondaryField",
        value: function isSecondaryField(fieldIndex) {
          var _this3 = this;

          if (!this.isFieldEnabled(fieldIndex)) {
            return this.game.players.filter(function (p) {
              return p !== _this3.game.getActualPlayer();
            }).some(function (p) {
              return fieldIndex === _this3.getFieldIndex(_this3.getPlayerState(p).actFieldIndex);
            });
          }

          return false;
        }
      }, {
        key: "getFieldNote",
        value: function getFieldNote(fieldIndex) {
          var _this4 = this;

          var owners = this.game.players.filter(function (p) {
            return _this4.getFieldIndex(_this4.getPlayerState(p).actFieldIndex) === fieldIndex;
          }).map(function (p) {
            return p.name;
          });
          return !!owners.length ? owners.join(' ') : '';
        }
      }, {
        key: "customReset",
        value: function customReset() {
          var _this5 = this;

          this.game.players.forEach(function (player) {
            player.life = _this5.settings.life;
            player.state = new _models_around_clock_state_model__WEBPACK_IMPORTED_MODULE_3__["AroundClockState"]();
          });
          this.settings.setStyle();
        }
      }, {
        key: "getFieldIndex",
        value: function getFieldIndex(index) {
          return this.settings.fields[index];
        }
      }]);

      return AroundClockComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    AroundClockComponent.ɵfac = function AroundClockComponent_Factory(t) {
      return new (t || AroundClockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]));
    };

    AroundClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AroundClockComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 4,
      consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], [3, "playground"], [1, "hidden-info", 3, "click"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "scoreDisplayed", "hasContent"], [1, "score"]],
      template: function AroundClockComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AroundClockComponent_app_settings_1_Template, 40, 19, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AroundClockComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AroundClockComponent_ng_container_4_Template, 4, 4, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AroundClockComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateComponent"]],
      encapsulation: 2,
      data: {
        animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AroundClockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './around-clock.component.html',
          animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
        }]
      }], function () {
        return [{
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]
        }, {
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]
        }, {
          type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]
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
  "./src/app/aroundclock/models/around-clock.settings.model.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/aroundclock/models/around-clock.settings.model.ts ***!
    \*******************************************************************/

  /*! exports provided: AroundClockSettings */

  /***/
  function srcAppAroundclockModelsAroundClockSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AroundClockSettings", function () {
      return AroundClockSettings;
    });
    /* harmony import */


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");

    var AroundClockSettings =
    /*#__PURE__*/
    function () {
      function AroundClockSettings() {
        _classCallCheck(this, AroundClockSettings);

        this.style = 0;
        this.jump = true;
        this.punishment = true;
        this.life = 0;
        this.saboteur = false;
        this.fields = AroundClockSettings.getBaseFields();
      }

      _createClass(AroundClockSettings, [{
        key: "setStyle",
        value: function setStyle(style) {
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
              this.fields = [].concat(_toConsumableArray(AroundClockSettings.getBaseFields().reverse().slice(1)), [20]);
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
      }, {
        key: "toggleJump",
        value: function toggleJump() {
          this.jump = !this.jump;
        }
      }, {
        key: "togglePunishment",
        value: function togglePunishment() {
          this.punishment = !this.punishment;
        }
      }, {
        key: "toggleNineLives",
        value: function toggleNineLives() {
          this.life = this.life === 3 ? 0 : 3;
        }
      }, {
        key: "toggleFiveLives",
        value: function toggleFiveLives() {
          this.life = this.life === 5 ? 0 : 5;
        }
      }, {
        key: "toggleSevenLives",
        value: function toggleSevenLives() {
          this.life = this.life === 7 ? 0 : 7;
        }
      }, {
        key: "toggleTenLives",
        value: function toggleTenLives() {
          this.life = this.life === 10 ? 0 : 10;
        }
      }, {
        key: "toggleSaboteur",
        value: function toggleSaboteur() {
          this.saboteur = !this.saboteur;

          if (this.saboteur) {
            this.promoter = false;
          }
        }
      }, {
        key: "togglePromoter",
        value: function togglePromoter() {
          this.promoter = !this.promoter;

          if (this.promoter) {
            this.saboteur = false;
          }
        }
      }], [{
        key: "getBaseFields",
        value: function getBaseFields() {
          return _toConsumableArray(Array(_models_playground_model__WEBPACK_IMPORTED_MODULE_0__["FIELDS_COUNT"]).keys());
        }
      }, {
        key: "getClockFields",
        value: function getClockFields() {
          return [0, 17, 3, 12, 5, 9, 14, 1, 16, 2, 18, 6, 15, 7, 10, 13, 8, 11, 4, 19, 20];
        }
      }, {
        key: "getAnticlockFields",
        value: function getAnticlockFields() {
          return [4, 11, 8, 13, 10, 7, 15, 6, 18, 2, 16, 1, 14, 9, 5, 12, 3, 17, 0, 19, 20];
        }
      }, {
        key: "getRandom",
        value: function getRandom(size) {
          var fields = AroundClockSettings.getBaseFields();

          if (!size) {
            size = fields.length;
          }

          var randomFields = [];

          for (var i = size - 1; i >= 0; i--) {
            var random = Math.floor(Math.random() * fields.length);
            randomFields.push(fields[random]);
            fields = [].concat(_toConsumableArray(fields.slice(0, random)), _toConsumableArray(fields.slice(random + 1)));
          }

          return randomFields;
        }
      }, {
        key: "getPirate",
        value: function getPirate() {
          var fields = AroundClockSettings.getRandom();

          for (var i = 0; i < 4; i++) {
            var random = Math.floor(Math.random() * fields.length);

            if (fields[random] === 20) {
              i--;
            } else {
              fields[random] = 20;
            }
          }

          return fields;
        }
      }, {
        key: "getRecurrence",
        value: function getRecurrence() {
          var fields = AroundClockSettings.getBaseFields();
          var randomFields = [];

          for (var i = fields.length - 1; i >= 0; i--) {
            var random = Math.floor(Math.random() * fields.length);
            randomFields.push(fields[random]);
          }

          return randomFields;
        }
      }]);

      return AroundClockSettings;
    }();
    /***/

  },

  /***/
  "./src/app/aroundclock/models/around-clock.state.model.ts":
  /*!****************************************************************!*\
    !*** ./src/app/aroundclock/models/around-clock.state.model.ts ***!
    \****************************************************************/

  /*! exports provided: AroundClockState */

  /***/
  function srcAppAroundclockModelsAroundClockStateModelTs(module, __webpack_exports__, __webpack_require__) {
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

      var _super2 = _createSuper(AroundClockState);

      function AroundClockState() {
        var _this6;

        _classCallCheck(this, AroundClockState);

        _this6 = _super2.call(this);
        _this6.actFieldIndex = 0;
        return _this6;
      }

      _createClass(AroundClockState, [{
        key: "increaseActFieldIndex",
        value: function increaseActFieldIndex(value) {
          this.actFieldIndex += value ? value : 1;
        }
      }, {
        key: "decreaseActFieldIndex",
        value: function decreaseActFieldIndex() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          this.actFieldIndex -= value;

          if (this.actFieldIndex < 0) {
            this.actFieldIndex = 0;
          }
        }
      }, {
        key: "clone",
        value: function clone() {
          var state = new AroundClockState();
          state.actFieldIndex = this.actFieldIndex;
          return state;
        }
      }]);

      return AroundClockState;
    }(_models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__["PlaygroundState"]);
    /***/

  },

  /***/
  "./src/app/components/menu/menu.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/menu/menu.component.ts ***!
    \***************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function MenuComponent_div_4_button_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var g_r5 = ctx.$implicit;
        var i_r6 = ctx.index;

        var k_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("gameSelectBox ", "menu-button-" + k_r3 + "" + i_r6, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "/" + g_r5.path));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r5.data.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r5.data.name);
      }
    }

    function MenuComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_div_4_button_1_Template, 5, 8, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var k_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.getGameList().slice(k_r3 * 3, k_r3 * 3 + 3));
      }
    }

    var _c1 = function _c1() {
      return [0, 1, 2, 3];
    };

    var routes = [{
      path: 'x01',
      data: {
        name: 'Classic X01',
        color: '#009688',
        icon: 'emoji_food_beverage'
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
        icon: 'cached'
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
      path: 'conqueror',
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
        icon: 'group_work'
      }
    }];

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent(router) {
        _classCallCheck(this, MenuComponent);

        this.router = router;
      }

      _createClass(MenuComponent, [{
        key: "randomGame",
        value: function randomGame() {
          var random = Math.floor(Math.random() * routes.length);
          this.router.navigate(['/' + routes[random].path]);
        }
      }, {
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
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["ng-component"]],
      decls: 7,
      vars: 2,
      consts: [["id", "menu_title"], [3, "click"], ["id", "menu"], ["class", "button-line", 4, "ngFor", "ngForOf"], [1, "version"], [1, "button-line"], ["mat-raised-button", "", 3, "routerLink", "class", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "routerLink"], [1, "title"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_h1_click_1_listener() {
            return ctx.randomGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select Game!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MenuComponent_div_4_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "v1.58");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      styles: ["#menu_title[_ngcontent-%COMP%] {\n  padding: 50px;\n  text-align: center;\n  cursor: pointer;\n}\n\n#menu[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n\n#menu[_ngcontent-%COMP%]   .button-line[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n#menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%] {\n  margin: 1px;\n  height: 200px;\n  width: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  width: 60px;\n  height: 60px;\n}\n\n#menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  white-space: pre;\n  text-align: left;\n  padding: 10px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  line-height: 25px;\n  letter-spacing: 1px;\n  font-weight: normal;\n  width: calc(100% - 20px);\n}\n\n.version[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRUo7O0FEQ0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ047O0FERUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUNBTjs7QURJQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWVudV90aXRsZSB7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI21lbnUge1xuICB3aWR0aDogMTAwdnc7XG5cbiAgLmJ1dHRvbi1saW5lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5nYW1lU2VsZWN0Qm94IHtcbiAgICBtYXJnaW46IDFweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBtYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgfVxuICB9XG59XG4udmVyc2lvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogNXB4O1xufVxuIiwiI21lbnVfdGl0bGUge1xuICBwYWRkaW5nOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI21lbnUge1xuICB3aWR0aDogMTAwdnc7XG59XG4jbWVudSAuYnV0dG9uLWxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNtZW51IC5nYW1lU2VsZWN0Qm94IHtcbiAgbWFyZ2luOiAxcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jbWVudSAuZ2FtZVNlbGVjdEJveCBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbiNtZW51IC5nYW1lU2VsZWN0Qm94IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG59XG5cbi52ZXJzaW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiA1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/conqueror/conqueror.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/conqueror/conqueror.component.ts ***!
    \**************************************************/

  /*! exports provided: ConquerorComponent */

  /***/
  function srcAppConquerorConquerorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConquerorComponent", function () {
      return ConquerorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");
    /* harmony import */


    var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../route-animation */
    "./src/app/route-animation.ts");
    /* harmony import */


    var _models_conqueror_state_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./models/conqueror.state.model */
    "./src/app/conqueror/models/conqueror.state.model.ts");
    /* harmony import */


    var _models_conqueror_settings_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./models/conqueror.settings.model */
    "./src/app/conqueror/models/conqueror.settings.model.ts");
    /* harmony import */


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _services_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ~services/sound.service */
    "./src/app/shared/services/sound.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function ConquerorComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConquerorComponent_app_settings_1_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r204);

          var ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r203.settings.randomCity();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "City (5) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConquerorComponent_app_settings_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r204);

          var ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r205.settings.randomCountry();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Country (10) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConquerorComponent_app_settings_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r204);

          var ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r206.settings.randomContinent();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Continent (20) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConquerorComponent_app_settings_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r204);

          var ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r207.settings.toggleNoScore();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No score ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Capture the Flag")("playground", ctx_r199.playground)("rules", "N\xF6vekv\u0151 sorrendben j\xF6nnek a mez\u0151k, a j\xE1t\xE9kosoknak el kell foglalni \u0151ket. Ez t\xF6rt\xE9nhet \xFAgy," + " hogy h\xE1romszor eltal\xE1lja a j\xE1t\xE9kos vagy dob egyetlen dupla bullt. Ha a j\xE1t\xE9kos elfoglalta a mez\u0151t, " + "akkor No score eset\xE9n 1 pontot kap, egy\xE9bk\xE9nt megkapja a mez\u0151 \xE9rt\xE9k\xE9t \xE9s megny\xEDlik a k\xF6vetkez\u0151 mez\u0151." + "A j\xE1t\xE9k a bull mez\u0151 elfoglal\xE1s\xE1ig tart. A v\xE9g\xE9n az nyer, akinek a legt\xF6bb pontja van. D\xF6ntetlen " + "lehets\xE9ges.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r199.settings.style === 0 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r199.settings.style === 1 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r199.settings.style === 2 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r199.settings.noScore ? "primary" : "");
      }
    }

    function ConquerorComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 7);
      }

      if (rf & 2) {
        var ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r200.playground);
      }
    }

    function ConquerorComponent_ng_container_4_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var field_r212 = ctx.$implicit;

        var player_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("field ", ctx_r211.isActiveField(field_r212) ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r212 === 20 ? "B" : field_r212 + 1, ": ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r211.getFieldValue(player_r209, field_r212));
      }
    }

    function ConquerorComponent_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConquerorComponent_ng_container_4_div_1_div_3_Template, 4, 5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r209 = ctx.$implicit;
        var i_r210 = ctx.index;

        var ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r210 === ctx_r208.game.actualPlayerIndex ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r209);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r208.settings.fields);
      }
    }

    function ConquerorComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConquerorComponent_ng_container_4_div_1_Template, 4, 5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r201.game.players);
      }
    }

    function ConquerorComponent_app_number_plate_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 7);
      }

      if (rf & 2) {
        var ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r202.playground);
      }
    }

    var ConquerorComponent =
    /*#__PURE__*/
    function (_models_playground_mo2) {
      _inherits(ConquerorComponent, _models_playground_mo2);

      var _super3 = _createSuper(ConquerorComponent);

      function ConquerorComponent(application, game, route, dialogService, soundService) {
        var _this7;

        _classCallCheck(this, ConquerorComponent);

        _this7 = _super3.call(this, application, game, route, dialogService, soundService);
        _this7.settings = new _models_conqueror_settings_model__WEBPACK_IMPORTED_MODULE_4__["ConquerorSettings"]();
        return _this7;
      }

      _createClass(ConquerorComponent, [{
        key: "calculatePoints",
        value: function calculatePoints(player, fieldIndex, score) {
          var state = this.getPlayerState(player);

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
      }, {
        key: "checkPlayerState",
        value: function checkPlayerState(player) {
          var _this8 = this;

          if (this.game.actualFieldIndex === this.settings.fields.length) {
            this.game.players.forEach(function (p) {
              return p.setWin(_this8.game.isTheBestPlayer(p));
            });
          } else if (this.game.isTheLastThrow()) {
            this.game.nextPlayer();
          }
        }
      }, {
        key: "getFieldValue",
        value: function getFieldValue(player, fieldIndex) {
          var fieldCount = this.getPlayerState(player).getFieldCount(fieldIndex);

          if (fieldCount === 0) {
            return '○○○';
          } else {
            var str = '';

            for (var i = 0; i < Math.min(fieldCount, 3); i++) {
              str += '●';
            }

            for (var _i = fieldCount; _i < 3; _i++) {
              str += '○';
            }

            return str;
          }
        }
      }, {
        key: "customReset",
        value: function customReset() {
          this.game.actualFieldIndex = 0;
          this.game.players.forEach(function (player) {
            return player.state = new _models_conqueror_state_model__WEBPACK_IMPORTED_MODULE_3__["ConquerorState"]();
          });
          this.settings.randomCity();
        }
      }, {
        key: "customSettingsValidation",
        value: function customSettingsValidation() {
          return this.settings.fields.length > 0;
        }
      }, {
        key: "isActiveField",
        value: function isActiveField(fieldIndex) {
          return this.settings.fields[this.game.actualFieldIndex] === fieldIndex;
        }
      }, {
        key: "isFieldEnabled",
        value: function isFieldEnabled(fieldIndex) {
          return fieldIndex === 20 || this.settings.fields.indexOf(fieldIndex) === this.game.actualFieldIndex;
        }
      }, {
        key: "isPrimaryField",
        value: function isPrimaryField(fieldIndex) {
          return this.isFieldEnabled(fieldIndex);
        }
      }, {
        key: "getFieldNote",
        value: function getFieldNote(fieldIndex) {
          var _this9 = this;

          var player = this.game.players.find(function (player) {
            return _this9.getPlayerState(player).getFieldCount(fieldIndex) >= 3;
          });
          return player ? player.name : '';
        }
      }, {
        key: "getTheFinalResult",
        value: function getTheFinalResult() {
          var winners = this.game.players.filter(function (p) {
            return p.win;
          });

          if (!winners.length) {
            return [];
          }

          var max = winners[0].score;
          winners.forEach(function (p) {
            max = p.score > max ? p.score : max;
          });
          winners = winners.filter(function (p) {
            return p.score === max;
          }).map(function (p) {
            return p.clone();
          });
          var losers = this.game.players.filter(function (p) {
            return !winners.some(function (w) {
              return w.id === p.id;
            });
          }).map(function (p) {
            var c = p.clone();
            c.win = false;
            return c;
          });
          return [].concat(_toConsumableArray(winners), _toConsumableArray(losers));
        }
      }, {
        key: "checkWinner",
        value: function checkWinner(player) {
          var total = this.settings.fields.length;
          var sum = player.score;

          if (!this.settings.noScore) {
            total = this.settings.fields.reduce(function (a, b) {
              return a + b;
            }, 0);
          }

          if (sum > Math.floor(total / 2)) {
            player.setWin(true);
          }
        }
      }]);

      return ConquerorComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    ConquerorComponent.ɵfac = function ConquerorComponent_Factory(t) {
      return new (t || ConquerorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]));
    };

    ConquerorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConquerorComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 4,
      consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player"], [1, "field-set"], [1, "small"]],
      template: function ConquerorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConquerorComponent_app_settings_1_Template, 9, 7, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConquerorComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConquerorComponent_ng_container_4_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConquerorComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_15__["NumberPlateComponent"]],
      encapsulation: 2,
      data: {
        animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConquerorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './conqueror.component.html',
          animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
        }]
      }], function () {
        return [{
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]
        }, {
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]
        }, {
          type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/conqueror/conqueror.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/conqueror/conqueror.module.ts ***!
    \***********************************************/

  /*! exports provided: ConquerorModule */

  /***/
  function srcAppConquerorConquerorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConquerorModule", function () {
      return ConquerorModule;
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


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _conqueror_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./conqueror.component */
    "./src/app/conqueror/conqueror.component.ts");

    var ConquerorModule = function ConquerorModule() {
      _classCallCheck(this, ConquerorModule);
    };

    ConquerorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ConquerorModule
    });
    ConquerorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ConquerorModule_Factory(t) {
        return new (t || ConquerorModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _conqueror_component__WEBPACK_IMPORTED_MODULE_3__["ConquerorComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConquerorModule, {
        declarations: [_conqueror_component__WEBPACK_IMPORTED_MODULE_3__["ConquerorComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConquerorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _conqueror_component__WEBPACK_IMPORTED_MODULE_3__["ConquerorComponent"]
          }])],
          declarations: [_conqueror_component__WEBPACK_IMPORTED_MODULE_3__["ConquerorComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/conqueror/models/conqueror.settings.model.ts":
  /*!**************************************************************!*\
    !*** ./src/app/conqueror/models/conqueror.settings.model.ts ***!
    \**************************************************************/

  /*! exports provided: ConquerorSettings */

  /***/
  function srcAppConquerorModelsConquerorSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConquerorSettings", function () {
      return ConquerorSettings;
    });
    /* harmony import */


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");

    var ConquerorSettings =
    /*#__PURE__*/
    function () {
      function ConquerorSettings() {
        _classCallCheck(this, ConquerorSettings);

        this.noScore = false;
        this.fields = [];
        this.noScore = false;
        this.randomCity();
      }

      _createClass(ConquerorSettings, [{
        key: "randomCity",
        value: function randomCity() {
          this.style = 0;
          this.fields = ConquerorSettings.getRandom(5);
          this.fields[this.fields.length] = 20;
        }
      }, {
        key: "randomCountry",
        value: function randomCountry() {
          this.style = 1;
          this.fields = ConquerorSettings.getRandom(10);
          this.fields[this.fields.length] = 20;
        }
      }, {
        key: "randomContinent",
        value: function randomContinent() {
          this.style = 2;
          this.fields = ConquerorSettings.getRandom(20);
          this.fields[this.fields.length] = 20;
        }
      }, {
        key: "toggleNoScore",
        value: function toggleNoScore() {
          this.noScore = !this.noScore;
        }
      }], [{
        key: "getBaseFields",
        value: function getBaseFields() {
          return _toConsumableArray(Array(_models_playground_model__WEBPACK_IMPORTED_MODULE_0__["FIELDS_COUNT"]).keys());
        }
      }, {
        key: "getRandom",
        value: function getRandom(size) {
          var fields = ConquerorSettings.getBaseFields();

          if (!size) {
            size = fields.length;
          }

          var randomFields = [];

          for (var i = size - 1; i >= 0; i--) {
            var random = Math.floor(Math.random() * fields.length);

            if (fields[random] === 20) {
              i++;
            } else {
              randomFields.push(fields[random]);
              fields = [].concat(_toConsumableArray(fields.slice(0, random)), _toConsumableArray(fields.slice(random + 1)));
            }
          }

          return randomFields.sort(function (a, b) {
            return Number(a) - Number(b);
          });
        }
      }]);

      return ConquerorSettings;
    }();
    /***/

  },

  /***/
  "./src/app/conqueror/models/conqueror.state.model.ts":
  /*!***********************************************************!*\
    !*** ./src/app/conqueror/models/conqueror.state.model.ts ***!
    \***********************************************************/

  /*! exports provided: ConquerorState */

  /***/
  function srcAppConquerorModelsConquerorStateModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConquerorState", function () {
      return ConquerorState;
    });
    /* harmony import */


    var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ~models/playground-state.model */
    "./src/app/shared/models/playground-state.model.ts");

    var ConquerorState =
    /*#__PURE__*/
    function (_models_playground_st2) {
      _inherits(ConquerorState, _models_playground_st2);

      var _super4 = _createSuper(ConquerorState);

      function ConquerorState() {
        var _this10;

        _classCallCheck(this, ConquerorState);

        _this10 = _super4.call(this);
        _this10.fieldCount = [];
        _this10.actFieldIndex = 0;
        return _this10;
      }

      _createClass(ConquerorState, [{
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
          var state = new ConquerorState();
          state.actFieldIndex = this.actFieldIndex;
          this.fieldCount.forEach(function (fv) {
            return state.fieldCount.push(fv.clone());
          });
          return state;
        }
      }]);

      return ConquerorState;
    }(_models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__["PlaygroundState"]);
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


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");
    /* harmony import */


    var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../route-animation */
    "./src/app/route-animation.ts");
    /* harmony import */


    var _models_cricet_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./models/cricet.settings.model */
    "./src/app/cricket/models/cricet.settings.model.ts");
    /* harmony import */


    var _models_cricet_state_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./models/cricet.state.model */
    "./src/app/cricket/models/cricet.state.model.ts");
    /* harmony import */


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _services_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ~services/sound.service */
    "./src/app/shared/services/sound.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function CricketComponent_app_settings_1_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

          var i_r67 = ctx.index;

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r68.settings.setNumber(i_r67);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var numb_r66 = ctx.$implicit;
        var i_r67 = ctx.index;

        var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r65.settings.isFieldAllowed(i_r67) ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r66 === 21 ? "B" : numb_r66, " ");
      }
    }

    function CricketComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fields");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CricketComponent_app_settings_1_button_3_Template, 2, 2, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r70.settings.upper();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Upper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r72.settings.lower();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lower");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r73.settings.left();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r74.settings.right();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r75.settings.odd();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Odd");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r76.settings.even();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Even");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r77.settings.prime();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Prime");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r78.settings.notPrime();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Not prime");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r79.settings.randomize(5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Random 05");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r80.settings.randomize(10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Random 10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r81.settings.randomize(15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Random 15");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r82.settings.all();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "All");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r83.settings.small();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r84.settings.high();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "High");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r85.settings.star();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_38_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r86.settings.cross();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cross");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Style");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_43_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r87.settings.setStyle(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Classic ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_45_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r88.settings.setStyle(2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Cut-Throat ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_47_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r89.settings.setStyle(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "No Score ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_49_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r90.settings.setStyle(4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Black Out ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Ultimate Cricket")("playground", ctx_r61.playground)("rules", "The objective shall be to 'own' or 'close' certain numbers on the board, and to achieve " + "the highest point score. The player or team to do so first, shall be the winner.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r61.settings.getNumbers());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r61.settings.style == 1 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r61.settings.style == 2 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r61.settings.style == 3 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r61.settings.style == 4 ? "primary" : "");
      }
    }

    function CricketComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 10);
      }

      if (rf & 2) {
        var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r62.playground);
      }
    }

    function CricketComponent_ng_container_4_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var field_r95 = ctx.$implicit;

        var player_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("field ", ctx_r94.isActiveField(player_r92, field_r95) && ctx_r94.settings.isBlackOutGame() ? "active" : "", " ", !ctx_r94.isFieldDoneForPlayer(player_r92, field_r95) ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r95 === 20 ? "B" : field_r95 + 1, ": ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r94.getFieldValue(player_r92, field_r95));
      }
    }

    function CricketComponent_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_ng_container_4_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98);

          var player_r92 = ctx.$implicit;

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r97.changePlayerToDisplay(player_r92);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CricketComponent_ng_container_4_div_1_div_3_Template, 4, 6, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r92 = ctx.$implicit;
        var i_r93 = ctx.index;

        var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r93 === ctx_r91.game.actualPlayerIndex ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r91.settings.fields);
      }
    }

    function CricketComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CricketComponent_ng_container_4_div_1_Template, 4, 5, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r63.game.players);
      }
    }

    function CricketComponent_app_number_plate_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 10);
      }

      if (rf & 2) {
        var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r64.playground);
      }
    }

    var CricketComponent =
    /*#__PURE__*/
    function (_models_playground_mo3) {
      _inherits(CricketComponent, _models_playground_mo3);

      var _super5 = _createSuper(CricketComponent);

      function CricketComponent(application, game, route, dialogService, soundService) {
        var _this11;

        _classCallCheck(this, CricketComponent);

        _this11 = _super5.call(this, application, game, route, dialogService, soundService);
        _this11.settings = new _models_cricet_settings_model__WEBPACK_IMPORTED_MODULE_3__["CricketSettings"]();
        return _this11;
      }

      _createClass(CricketComponent, [{
        key: "calculatePoints",
        value: function calculatePoints(player, fieldIndex, score) {
          if (this.settings.fields.indexOf(fieldIndex) !== -1 && !this.isFieldClosed(fieldIndex)) {
            var playerFieldCount = this.getPlayerState(player).getFieldCount(fieldIndex);

            if (!this.settings.isBlackOutGame() || this.settings.fields[this.getPlayerState(player).getActFieldIndex()] === fieldIndex || this.isFieldDoneForPlayer(player, fieldIndex)) {
              if (this.isFieldClosedForOthers(player, fieldIndex) && playerFieldCount + this.multiplier > 3) {
                this.getPlayerState(player).setFieldCount(fieldIndex, 3);
              } else {
                var multiplier = this.multiplier;

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
      }, {
        key: "checkPlayerState",
        value: function checkPlayerState(player) {
          var _this12 = this;

          this.game.players.forEach(function (p) {
            return p.score = _this12.getPlayerTotal(p);
          });
          var punishStyle = this.settings.isPunishGame() || this.settings.isBlackOutGame();
          this.game.players.forEach(function (p) {
            return p.setWin(_this12.isPlayerDone(p) && (!punishStyle && _this12.game.isTheBestPlayer(p) || punishStyle && _this12.game.isTheWorstPlayer(p)));
          });

          if (this.game.isTheLastThrow()) {
            this.game.nextPlayer();
          }
        }
      }, {
        key: "getFieldValue",
        value: function getFieldValue(player, fieldIndex) {
          var score = this.getPunishScore(player, fieldIndex);
          var punishStyle = this.settings.isPunishGame() || this.settings.isBlackOutGame();
          var playerFieldCount = this.getPlayerState(player).getFieldCount(fieldIndex);
          var str = '';

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
            for (var i = 0; i < playerFieldCount; i++) {
              str += '●';
            }
          }

          return str;
        }
      }, {
        key: "isActiveField",
        value: function isActiveField(player, fieldIndex) {
          return this.settings.fields[this.getPlayerState(player).getActFieldIndex()] === fieldIndex;
        }
      }, {
        key: "isFieldDoneForPlayer",
        value: function isFieldDoneForPlayer(player, fieldIndex) {
          return this.getPlayerState(player).getFieldCount(fieldIndex) >= 3;
        }
      }, {
        key: "isFieldEnabled",
        value: function isFieldEnabled(fieldIndex) {
          if (this.settings.isNoScoreGame()) {
            return this.settings.fields.indexOf(fieldIndex) !== -1 && !this.isFieldDoneForPlayer(this.getPlayerToDisplay(), fieldIndex);
          }

          return this.settings.fields.indexOf(fieldIndex) !== -1 && !this.isFieldClosed(fieldIndex);
        }
      }, {
        key: "isPrimaryField",
        value: function isPrimaryField(fieldIndex) {
          return this.isFieldEnabled(fieldIndex) && !this.isFieldDoneForPlayer(this.getPlayerToDisplay(), fieldIndex);
        }
      }, {
        key: "isSecondaryField",
        value: function isSecondaryField(fieldIndex) {
          return this.isFieldEnabled(fieldIndex) && this.isFieldDoneForPlayer(this.getPlayerToDisplay(), fieldIndex);
        }
      }, {
        key: "getFieldNote",
        value: function getFieldNote(fieldIndex) {
          var _this13 = this;

          if (this.isPrimaryField(fieldIndex)) {
            var playerFieldCount = this.getPlayerState(this.getPlayerToDisplay()).getFieldCount(fieldIndex);
            var remaining = ''.padStart(3 - playerFieldCount, '●');
            return remaining + '\n' + this.game.players.filter(function (p) {
              return _this13.isFieldDoneForPlayer(p, fieldIndex);
            }).map(function (p) {
              return p.name.substr(0, 1);
            }).join(',').toUpperCase();
          } else if (this.isSecondaryField(fieldIndex)) {
            return this.game.players.filter(function (p) {
              return !_this13.isFieldDoneForPlayer(p, fieldIndex);
            }).map(function (p) {
              return p.name.substr(0, 1);
            }).join(',').toUpperCase();
          }

          return '';
        }
      }, {
        key: "customReset",
        value: function customReset() {
          this.game.players.forEach(function (player) {
            return player.state = new _models_cricet_state_model__WEBPACK_IMPORTED_MODULE_4__["CricketState"]();
          });
        }
      }, {
        key: "customSettingsValidation",
        value: function customSettingsValidation() {
          return this.settings.fields.length > 0;
        }
      }, {
        key: "changePlayerToDisplay",
        value: function changePlayerToDisplay(player) {
          var _this14 = this;

          this.playerToDisplay = player;
          setTimeout(function () {
            return _this14.playerToDisplay = null;
          }, 1500);
        }
      }, {
        key: "getPlayerToDisplay",
        value: function getPlayerToDisplay() {
          return !!this.playerToDisplay ? this.playerToDisplay : this.game.getActualPlayer();
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
          var _this15 = this;

          var total = 0;
          this.settings.fields.forEach(function (fieldIndex) {
            if (_this15.isFieldDoneForPlayer(player, fieldIndex)) {
              total += (_this15.getPlayerState(player).getFieldCount(fieldIndex) - 3) * _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex);
            }
          }, this);
          return total;
        }
      }, {
        key: "getPlayerTotalForPunishGame",
        value: function getPlayerTotalForPunishGame(player) {
          var _this16 = this;

          var total = 0;
          this.settings.fields.forEach(function (fieldIndex) {
            total += _this16.getPlayerState(player).getPunishCount(fieldIndex) * _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex);
          }, this);
          return total;
        }
      }, {
        key: "punishPlayers",
        value: function punishPlayers(fieldIndex) {
          var _this17 = this;

          this.game.players.forEach(function (player) {
            if (!_this17.isFieldDoneForPlayer(player, fieldIndex)) {
              _this17.getPlayerState(player).setPunishCount(fieldIndex, _this17.getPlayerState(player).getPunishCount(fieldIndex) + _this17.multiplier);
            }
          }, this);
        }
      }, {
        key: "getFieldScore",
        value: function getFieldScore(player, fieldIndex) {
          if (this.isFieldDoneForPlayer(player, fieldIndex)) {
            return (this.getPlayerState(player).getFieldCount(fieldIndex) - 3) * _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex);
          }

          return 0;
        }
      }, {
        key: "getPunishScore",
        value: function getPunishScore(player, fieldIndex) {
          return this.getPlayerState(player).getPunishCount(fieldIndex) * _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex);
        }
      }, {
        key: "isFieldClosed",
        value: function isFieldClosed(fieldIndex) {
          var _this18 = this;

          var closed = true;
          this.game.players.forEach(function (player) {
            closed = closed && _this18.isFieldDoneForPlayer(player, fieldIndex);
          }, this);
          return closed;
        }
      }, {
        key: "isFieldClosedForOthers",
        value: function isFieldClosedForOthers(player, fieldIndex) {
          var _this19 = this;

          var closed = true;
          this.game.players.forEach(function (p) {
            if (p.id !== player.id) {
              closed = closed && _this19.isFieldDoneForPlayer(p, fieldIndex);
            }
          }, this);
          return closed;
        }
      }, {
        key: "isPlayerDone",
        value: function isPlayerDone(player) {
          var _this20 = this;

          var done = true;
          this.settings.fields.forEach(function (fieldIndex) {
            done = done && _this20.isFieldDoneForPlayer(player, fieldIndex);
          });
          return done;
        }
      }]);

      return CricketComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    CricketComponent.ɵfac = function CricketComponent_Factory(t) {
      return new (t || CricketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]));
    };

    CricketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CricketComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 4,
      consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "click"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], [3, "playground"], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "player"], [1, "field-set"], [3, "class", 4, "ngFor", "ngForOf"], [1, "small"]],
      template: function CricketComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CricketComponent_app_settings_1_Template, 51, 8, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CricketComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CricketComponent_ng_container_4_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CricketComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateComponent"]],
      encapsulation: 2,
      data: {
        animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CricketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './cricket.component.html',
          animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
        }]
      }], function () {
        return [{
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]
        }, {
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]
        }, {
          type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]
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
  "./src/app/cricket/models/cricet.settings.model.ts":
  /*!*********************************************************!*\
    !*** ./src/app/cricket/models/cricet.settings.model.ts ***!
    \*********************************************************/

  /*! exports provided: CricketSettings */

  /***/
  function srcAppCricketModelsCricetSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CricketSettings", function () {
      return CricketSettings;
    });

    var CricketSettings =
    /*#__PURE__*/
    function () {
      function CricketSettings() {
        _classCallCheck(this, CricketSettings);

        this.fields = [14, 15, 16, 17, 18, 19, 20];
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

      _createClass(CricketSettings, [{
        key: "randomize",
        value: function randomize(maxField) {
          for (var i = 0; i < this.numbs.length; i++) {
            this.numbs[i] = false;
          }

          while (this.numbs.filter(function (n) {
            return !!n;
          }).length !== maxField) {
            this.numbs[Math.floor(Math.random() * 21)] = true;
          }

          this.numbs[this.numbs.length - 1] = true;
          this.initFields();
        }
      }, {
        key: "all",
        value: function all() {
          this.setAllowedField([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]);
        }
      }, {
        key: "small",
        value: function small() {
          this.setAllowedField([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21]);
        }
      }, {
        key: "high",
        value: function high() {
          this.setAllowedField([11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]);
        }
      }, {
        key: "star",
        value: function star() {
          this.setAllowedField([20, 9, 14, 13, 4, 16, 7, 2, 15, 21]);
        }
      }, {
        key: "cross",
        value: function cross() {
          this.setAllowedField([20, 3, 11, 6, 21]);
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
        key: "left",
        value: function left() {
          this.setAllowedField([12, 9, 14, 11, 8, 16, 7, 5, 19, 21]);
        }
      }, {
        key: "right",
        value: function right() {
          this.setAllowedField([1, 18, 4, 13, 6, 10, 15, 2, 17, 21]);
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
        key: "prime",
        value: function prime() {
          this.setAllowedField([2, 3, 5, 7, 11, 13, 17, 19, 21]);
        }
      }, {
        key: "notPrime",
        value: function notPrime() {
          this.setAllowedField([1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21]);
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
        key: "isFieldAllowed",
        value: function isFieldAllowed(field) {
          return !!this.numbs[field];
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
              this.fields.push(i);
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
          var _this21 = this;

          for (var i = 0; i < this.numbs.length; i++) {
            this.numbs[i] = false;
          }

          fields.forEach(function (f) {
            return _this21.numbs[f - 1] = true;
          });
          this.initFields();
        }
      }]);

      return CricketSettings;
    }();
    /***/

  },

  /***/
  "./src/app/cricket/models/cricet.state.model.ts":
  /*!******************************************************!*\
    !*** ./src/app/cricket/models/cricet.state.model.ts ***!
    \******************************************************/

  /*! exports provided: CricketState */

  /***/
  function srcAppCricketModelsCricetStateModelTs(module, __webpack_exports__, __webpack_require__) {
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

      var _super6 = _createSuper(CricketState);

      function CricketState() {
        var _this22;

        _classCallCheck(this, CricketState);

        _this22 = _super6.call(this);
        _this22.fieldCount = [];
        _this22.punishCount = [];
        _this22.actFieldIndex = 0;
        return _this22;
      }

      _createClass(CricketState, [{
        key: "getFieldCount",
        value: function getFieldCount(fieldIndex) {
          return this.getFieldValue(this.fieldCount, fieldIndex).value;
        }
      }, {
        key: "setFieldCount",
        value: function setFieldCount(fieldIndex, value) {
          this.getFieldValue(this.fieldCount, fieldIndex).value = value;
        }
      }, {
        key: "getPunishCount",
        value: function getPunishCount(fieldIndex) {
          return this.getFieldValue(this.punishCount, fieldIndex).value;
        }
      }, {
        key: "setPunishCount",
        value: function setPunishCount(fieldIndex, value) {
          this.getFieldValue(this.punishCount, fieldIndex).value = value;
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
          var state = new CricketState();
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
  "./src/app/duel/duel.component.ts":
  /*!****************************************!*\
    !*** ./src/app/duel/duel.component.ts ***!
    \****************************************/

  /*! exports provided: DuelComponent */

  /***/
  function srcAppDuelDuelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DuelComponent", function () {
      return DuelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");
    /* harmony import */


    var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../route-animation */
    "./src/app/route-animation.ts");
    /* harmony import */


    var _models_duel_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./models/duel.settings.model */
    "./src/app/duel/models/duel.settings.model.ts");
    /* harmony import */


    var _models_duel_state_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./models/duel.state.model */
    "./src/app/duel/models/duel.state.model.ts");
    /* harmony import */


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _services_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ~services/sound.service */
    "./src/app/shared/services/sound.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function DuelComponent_app_settings_1_button_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_button_18_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r267);

          var i_r265 = ctx.index;

          var ctx_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r266.settings.setNumber(i_r265);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var numb_r264 = ctx.$implicit;
        var i_r265 = ctx.index;

        var ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r263.settings.isFieldAllowed(i_r265) ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r264 === 21 ? "B" : numb_r264, " ");
      }
    }

    function DuelComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DuelComponent_app_settings_1_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269);

          var ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r268.settings.startPoint = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Boarding");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DuelComponent_app_settings_1_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269);

          var ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r270.settings.targetPoint = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269);

          var ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r271.settings.toggleHandOver();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Hand Over");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Fields");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DuelComponent_app_settings_1_button_18_Template, 2, 2, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269);

          var ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r272.settings.upper();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Upper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269);

          var ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r273.settings.lower();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Lower");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269);

          var ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r274.settings.left();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269);

          var ctx_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r275.settings.right();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269);

          var ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r276.settings.odd();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Odd");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269);

          var ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r277.settings.even();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Even");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269);

          var ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r278.settings.prime();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Prime");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269);

          var ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r279.settings.notPrime();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Not prime");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_38_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269);

          var ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r280.settings.randomize(5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Random 05");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_40_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269);

          var ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r281.settings.randomize(10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Random 10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_42_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269);

          var ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r282.settings.randomize(15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Random 15");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_44_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269);

          var ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r283.settings.all();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "All");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_47_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269);

          var ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r284.settings.small();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_49_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269);

          var ctx_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r285.settings.high();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "High");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_51_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269);

          var ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r286.settings.star();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_53_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r269);

          var ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r287.settings.cross();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Cross");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Duel")("playground", ctx_r259.playground)("rules", "....");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r259.settings.startPoint);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r259.settings.targetPoint);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r259.settings.handover ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r259.settings.getNumbers());
      }
    }

    function DuelComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 13);
      }

      if (rf & 2) {
        var ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r260.playground);
      }
    }

    function DuelComponent_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r289 = ctx.$implicit;
        var i_r290 = ctx.index;

        var ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player ", i_r290 === ctx_r288.game.actualPlayerIndex ? "highlighted" : "", " ", ctx_r288.isInactive(player_r289) ? "inactive" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r289)("hasContent", false);
      }
    }

    function DuelComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DuelComponent_ng_container_4_div_1_Template, 2, 6, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r261.game.players);
      }
    }

    function DuelComponent_app_number_plate_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 13);
      }

      if (rf & 2) {
        var ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r262.playground);
      }
    }

    var DuelComponent =
    /*#__PURE__*/
    function (_models_playground_mo4) {
      _inherits(DuelComponent, _models_playground_mo4);

      var _super7 = _createSuper(DuelComponent);

      function DuelComponent(application, game, route, dialogService, soundService) {
        var _this23;

        _classCallCheck(this, DuelComponent);

        _this23 = _super7.call(this, application, game, route, dialogService, soundService, 2);
        _this23.settings = new _models_duel_settings_model__WEBPACK_IMPORTED_MODULE_3__["DuelSettings"]();
        return _this23;
      }

      _createClass(DuelComponent, [{
        key: "calculatePoints",
        value: function calculatePoints(player, fieldIndex, score) {
          var _this24 = this;

          var state = this.getPlayerState(player);
          var actualScore = score * this.multiplier;

          if (state.ownFields.some(function (i) {
            return i === fieldIndex;
          })) {
            player.score += actualScore;
          } else if (this.isSecondaryField(fieldIndex)) {
            player.score -= actualScore;

            if (this.settings.handover) {
              var _player = this.game.players.find(function (p) {
                return p != _this24.game.getActualPlayer() && _this24.getPlayerState(p).ownFields.some(function (i) {
                  return i === fieldIndex;
                });
              });

              if (_player) {
                _player.score += actualScore;
              }
            }
          } else {
            state.ownFields.push(fieldIndex);
          }
        }
      }, {
        key: "checkPlayerState",
        value: function checkPlayerState(player) {
          var _this25 = this;

          this.game.players.forEach(function (p) {
            return p.setWin(p.score >= _this25.settings.targetPoint);
          });
          var activePlayers = this.game.players.filter(function (p) {
            return !_this25.isInactive(p);
          });

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
      }, {
        key: "isInactive",
        value: function isInactive(player) {
          return player.score <= 0;
        }
      }, {
        key: "isPrimaryField",
        value: function isPrimaryField(fieldIndex) {
          var state = this.getPlayerState(this.game.getActualPlayer());
          return state.ownFields.some(function (i) {
            return i === fieldIndex;
          });
        }
      }, {
        key: "isSecondaryField",
        value: function isSecondaryField(fieldIndex) {
          var _this26 = this;

          return !this.settings.isFieldAllowed(fieldIndex) || this.game.players.some(function (p) {
            return p != _this26.game.getActualPlayer() && _this26.getPlayerState(p).ownFields.some(function (i) {
              return i === fieldIndex;
            });
          });
        }
      }, {
        key: "customReset",
        value: function customReset() {
          var _this27 = this;

          this.game.players.forEach(function (player) {
            player.state = new _models_duel_state_model__WEBPACK_IMPORTED_MODULE_4__["DuelState"]();
            player.score = _this27.settings.startPoint;
          });
        }
      }]);

      return DuelComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    DuelComponent.ɵfac = function DuelComponent_Factory(t) {
      return new (t || DuelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]));
    };

    DuelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DuelComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 4,
      consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], [1, "field-set"], ["appearance", "outline", 1, "big"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "click"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]],
      template: function DuelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DuelComponent_app_settings_1_Template, 55, 7, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DuelComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DuelComponent_ng_container_4_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DuelComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_17__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_18__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_19__["NumberPlateComponent"]],
      encapsulation: 2,
      data: {
        animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DuelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './duel.component.html',
          animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
        }]
      }], function () {
        return [{
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]
        }, {
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]
        }, {
          type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/duel/duel.module.ts":
  /*!*************************************!*\
    !*** ./src/app/duel/duel.module.ts ***!
    \*************************************/

  /*! exports provided: DuelModule */

  /***/
  function srcAppDuelDuelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DuelModule", function () {
      return DuelModule;
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


    var _duel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./duel.component */
    "./src/app/duel/duel.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var DuelModule = function DuelModule() {
      _classCallCheck(this, DuelModule);
    };

    DuelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DuelModule
    });
    DuelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DuelModule_Factory(t) {
        return new (t || DuelModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _duel_component__WEBPACK_IMPORTED_MODULE_2__["DuelComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DuelModule, {
        declarations: [_duel_component__WEBPACK_IMPORTED_MODULE_2__["DuelComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DuelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _duel_component__WEBPACK_IMPORTED_MODULE_2__["DuelComponent"]
          }])],
          declarations: [_duel_component__WEBPACK_IMPORTED_MODULE_2__["DuelComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/duel/models/duel.settings.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/duel/models/duel.settings.model.ts ***!
    \****************************************************/

  /*! exports provided: DuelSettings */

  /***/
  function srcAppDuelModelsDuelSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DuelSettings", function () {
      return DuelSettings;
    });
    /* harmony import */


    var _cricket_models_cricet_settings_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../cricket/models/cricet.settings.model */
    "./src/app/cricket/models/cricet.settings.model.ts");

    var DuelSettings =
    /*#__PURE__*/
    function (_cricket_models_crice) {
      _inherits(DuelSettings, _cricket_models_crice);

      var _super8 = _createSuper(DuelSettings);

      function DuelSettings() {
        var _this28;

        _classCallCheck(this, DuelSettings);

        _this28 = _super8.call(this);

        _this28.star();

        _this28.startPoint = 30;
        _this28.targetPoint = 200;
        _this28.handover = true;
        return _this28;
      }

      _createClass(DuelSettings, [{
        key: "star",
        value: function star() {
          this.setAllowedField([20, 1, 4, 13, 6, 15, 2, 3, 19, 16, 8, 14, 9]);
        }
      }, {
        key: "cross",
        value: function cross() {
          this.setAllowedField([5, 20, 18, 4, 6, 10, 2, 17, 7, 16, 11, 14]);
        }
      }, {
        key: "toggleHandOver",
        value: function toggleHandOver() {
          this.handover = !this.handover;
        }
      }]);

      return DuelSettings;
    }(_cricket_models_cricet_settings_model__WEBPACK_IMPORTED_MODULE_0__["CricketSettings"]);
    /***/

  },

  /***/
  "./src/app/duel/models/duel.state.model.ts":
  /*!*************************************************!*\
    !*** ./src/app/duel/models/duel.state.model.ts ***!
    \*************************************************/

  /*! exports provided: DuelState */

  /***/
  function srcAppDuelModelsDuelStateModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DuelState", function () {
      return DuelState;
    });
    /* harmony import */


    var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ~models/playground-state.model */
    "./src/app/shared/models/playground-state.model.ts");

    var DuelState =
    /*#__PURE__*/
    function (_models_playground_st4) {
      _inherits(DuelState, _models_playground_st4);

      var _super9 = _createSuper(DuelState);

      function DuelState() {
        var _this29;

        _classCallCheck(this, DuelState);

        _this29 = _super9.call(this);
        _this29.ownFields = [];
        return _this29;
      }

      _createClass(DuelState, [{
        key: "clone",
        value: function clone() {
          var state = new DuelState();
          state.ownFields = _toConsumableArray(this.ownFields);
          return state;
        }
      }]);

      return DuelState;
    }(_models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__["PlaygroundState"]);
    /***/

  },

  /***/
  "./src/app/fives/fives.component.ts":
  /*!******************************************!*\
    !*** ./src/app/fives/fives.component.ts ***!
    \******************************************/

  /*! exports provided: FivesComponent */

  /***/
  function srcAppFivesFivesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivesComponent", function () {
      return FivesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");
    /* harmony import */


    var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../route-animation */
    "./src/app/route-animation.ts");
    /* harmony import */


    var _models_fives_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./models/fives.settings.model */
    "./src/app/fives/models/fives.settings.model.ts");
    /* harmony import */


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _services_sound_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ~services/sound.service */
    "./src/app/shared/services/sound.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function FivesComponent_app_settings_1_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FivesComponent_app_settings_1_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r169);

          var divider_r167 = ctx.$implicit;

          var ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r168.settings.setDivider(divider_r167);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var divider_r167 = ctx.$implicit;

        var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r165.settings.divider === divider_r167 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](divider_r167);
      }
    }

    function FivesComponent_app_settings_1_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FivesComponent_app_settings_1_button_12_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r172);

          var limit_r170 = ctx.$implicit;

          var ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r171.settings.setLimit(limit_r170);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var limit_r170 = ctx.$implicit;

        var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r166.settings.limit === limit_r170 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](limit_r170);
      }
    }

    function FivesComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FivesComponent_app_settings_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r174);

          var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r173.settings.toggleNoCheat();
        });

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
      }

      if (rf & 2) {
        var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Fives")("playground", ctx_r161.playground)("rules", "The idea of the game to throw three darts into the board, in turn, to score a number that " + "is divisible by five. The higher the number you score, the more points you can score. For every five " + "scored, one point is awarded. E.g. if a player scores fifteen then he or she gains three points.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r161.settings.noCheat ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r161.settings.getSelectableDividers());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r161.settings.getSelectableLimits());
      }
    }

    function FivesComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 8);
      }

      if (rf & 2) {
        var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r162.playground);
      }
    }

    function FivesComponent_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r176 = ctx.$implicit;
        var i_r177 = ctx.index;

        var ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r177 === ctx_r175.game.actualPlayerIndex ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r176)("hasContent", false);
      }
    }

    function FivesComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FivesComponent_ng_container_4_div_1_Template, 2, 5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r163.game.players);
      }
    }

    function FivesComponent_app_number_plate_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 8);
      }

      if (rf & 2) {
        var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r164.playground);
      }
    }

    var FivesComponent =
    /*#__PURE__*/
    function (_models_playground_mo5) {
      _inherits(FivesComponent, _models_playground_mo5);

      var _super10 = _createSuper(FivesComponent);

      function FivesComponent(application, game, route, dialogService, soundService) {
        var _this30;

        _classCallCheck(this, FivesComponent);

        _this30 = _super10.call(this, application, game, route, dialogService, soundService);
        _this30.settings = new _models_fives_settings_model__WEBPACK_IMPORTED_MODULE_3__["FivesSettings"]();
        return _this30;
      }

      _createClass(FivesComponent, [{
        key: "isPrimaryField",
        value: function isPrimaryField(fieldIndex) {
          if (this.game.actualThrow === 2) {
            var mod = this.settings.divider - this.game.getActualPlayer().getThrowsTotal() % this.settings.divider;
            var max = mod + this.settings.divider;
            var all = [mod];

            while (max <= 20) {
              all.push(max);
              max += this.settings.divider;
            }

            return all.some(function (f) {
              return f === fieldIndex + 1;
            });
          }

          return false;
        }
      }, {
        key: "customReset",
        value: function customReset() {
          var _this31 = this;

          this.game.players.forEach(function (player) {
            return player.score = _this31.settings.limit;
          });
        }
      }, {
        key: "calculatePoints",
        value: function calculatePoints(player, fieldIndex, score) {
          if (this.game.isTheLastThrow()) {
            var sum = 0;

            for (var i = 0; i < 3; i++) {
              var t = player.throwsHistory[player.throwsHistory.length - i - 1];
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
      }, {
        key: "checkPlayerState",
        value: function checkPlayerState(player) {
          this.game.players.forEach(function (p) {
            return p.setWin(p.score <= 0);
          });

          if (this.game.isTheLastThrow()) {
            this.game.nextPlayer();
          }
        }
      }]);

      return FivesComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    FivesComponent.ɵfac = function FivesComponent_Factory(t) {
      return new (t || FivesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_8__["SoundService"]));
    };

    FivesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FivesComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 4,
      consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]],
      template: function FivesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FivesComponent_app_settings_1_Template, 13, 6, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FivesComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FivesComponent_ng_container_4_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FivesComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_15__["NumberPlateComponent"]],
      encapsulation: 2,
      data: {
        animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FivesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './fives.component.html',
          animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
        }]
      }], function () {
        return [{
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationStateService"]
        }, {
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]
        }, {
          type: _services_sound_service__WEBPACK_IMPORTED_MODULE_8__["SoundService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/fives/fives.module.ts":
  /*!***************************************!*\
    !*** ./src/app/fives/fives.module.ts ***!
    \***************************************/

  /*! exports provided: FivesModule */

  /***/
  function srcAppFivesFivesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivesModule", function () {
      return FivesModule;
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


    var _fives_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./fives.component */
    "./src/app/fives/fives.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var FivesModule = function FivesModule() {
      _classCallCheck(this, FivesModule);
    };

    FivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FivesModule
    });
    FivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FivesModule_Factory(t) {
        return new (t || FivesModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _fives_component__WEBPACK_IMPORTED_MODULE_2__["FivesComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FivesModule, {
        declarations: [_fives_component__WEBPACK_IMPORTED_MODULE_2__["FivesComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _fives_component__WEBPACK_IMPORTED_MODULE_2__["FivesComponent"]
          }])],
          declarations: [_fives_component__WEBPACK_IMPORTED_MODULE_2__["FivesComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/fives/models/fives.settings.model.ts":
  /*!******************************************************!*\
    !*** ./src/app/fives/models/fives.settings.model.ts ***!
    \******************************************************/

  /*! exports provided: FivesSettings */

  /***/
  function srcAppFivesModelsFivesSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivesSettings", function () {
      return FivesSettings;
    });

    var FivesSettings =
    /*#__PURE__*/
    function () {
      function FivesSettings() {
        _classCallCheck(this, FivesSettings);

        this.divider = 5;
        this.limit = 20;
        this.noCheat = true;
      }

      _createClass(FivesSettings, [{
        key: "getSelectableDividers",
        value: function getSelectableDividers() {
          return [3, 4, 5, 6, 7, 8, 10];
        }
      }, {
        key: "getSelectableLimits",
        value: function getSelectableLimits() {
          return [10, 20, 30, 50, 100];
        }
      }, {
        key: "setDivider",
        value: function setDivider(value) {
          this.divider = value;
        }
      }, {
        key: "setLimit",
        value: function setLimit(value) {
          this.limit = value;
        }
      }, {
        key: "toggleNoCheat",
        value: function toggleNoCheat() {
          this.noCheat = !this.noCheat;
        }
      }]);

      return FivesSettings;
    }();
    /***/

  },

  /***/
  "./src/app/hare-and-hound/hare-and-hound.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/hare-and-hound/hare-and-hound.component.ts ***!
    \************************************************************/

  /*! exports provided: HareAndHoundComponent */

  /***/
  function srcAppHareAndHoundHareAndHoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HareAndHoundComponent", function () {
      return HareAndHoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");
    /* harmony import */


    var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../route-animation */
    "./src/app/route-animation.ts");
    /* harmony import */


    var _models_hare_and_hound_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./models/hare-and-hound.settings.model */
    "./src/app/hare-and-hound/models/hare-and-hound.settings.model.ts");
    /* harmony import */


    var _models_hare_and_hound_state_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./models/hare-and-hound.state.model */
    "./src/app/hare-and-hound/models/hare-and-hound.state.model.ts");
    /* harmony import */


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _services_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ~services/sound.service */
    "./src/app/shared/services/sound.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function HareAndHoundComponent_app_settings_1_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HareAndHoundComponent_app_settings_1_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r185);

          var start_r183 = ctx.$implicit;

          var ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r184.settings.setHoundStart(start_r183 - 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var start_r183 = ctx.$implicit;

        var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r182.settings.houndStartIndex + 1 === start_r183 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](start_r183);
      }
    }

    function HareAndHoundComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hound start position");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HareAndHoundComponent_app_settings_1_button_3_Template, 2, 2, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Hare and Hound")("playground", ctx_r178.playground)("rules", "The frist player is the hare, and his opponent is the hound in pursuit. The hare must travel " + "clockwise around the board starting at 20. The hare wins by returning to 20 before the hound catches " + "up with him. The hound usually starts from either 12 or 5, depending on the preference of the " + "players. The hound wins by overtaking the hare.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r178.settings.getSelectableHoundStart());
      }
    }

    function HareAndHoundComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 8);
      }

      if (rf & 2) {
        var ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r179.playground);
      }
    }

    function HareAndHoundComponent_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r187 = ctx.$implicit;
        var i_r188 = ctx.index;

        var ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r188 === ctx_r186.game.actualPlayerIndex ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r187)("hasContent", false);
      }
    }

    function HareAndHoundComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HareAndHoundComponent_ng_container_4_div_1_Template, 2, 5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r180.game.players);
      }
    }

    function HareAndHoundComponent_app_number_plate_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 8);
      }

      if (rf & 2) {
        var ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r181.playground);
      }
    }

    var HareAndHoundComponent =
    /*#__PURE__*/
    function (_models_playground_mo6) {
      _inherits(HareAndHoundComponent, _models_playground_mo6);

      var _super11 = _createSuper(HareAndHoundComponent);

      function HareAndHoundComponent(application, game, route, dialogService, soundService) {
        var _this32;

        _classCallCheck(this, HareAndHoundComponent);

        _this32 = _super11.call(this, application, game, route, dialogService, soundService, 2, 2);
        _this32.settings = new _models_hare_and_hound_settings_model__WEBPACK_IMPORTED_MODULE_3__["HareAndHoundSettings"]();
        return _this32;
      }

      _createClass(HareAndHoundComponent, [{
        key: "calculatePoints",
        value: function calculatePoints(player, fieldIndex, score) {
          var state = this.getPlayerState(player);

          if (this.isFieldEnabled(fieldIndex, state.actFieldIndex)) {
            state.increaseActFieldIndex(this.multiplier);

            if (state.actFieldIndex >= _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["FIELDS_COUNT"] - 1) {
              state.actFieldIndex = state.actFieldIndex - (_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["FIELDS_COUNT"] - 1);
            }

            player.score -= this.multiplier;
          }
        }
      }, {
        key: "checkPlayerState",
        value: function checkPlayerState(player) {
          var _this33 = this;

          player.setWin(this.isHare() && player.score <= 0 || !this.isHare() && player.score + this.settings.getHareStartIndex() <= this.game.players.find(function (p) {
            return _this33.isHare(p);
          }).score);

          if (!player.win && this.game.isTheLastThrow()) {
            this.game.nextPlayer();
          }
        }
      }, {
        key: "isFieldEnabled",
        value: function isFieldEnabled(fieldIndex, actFieldIndex) {
          if (!actFieldIndex) {
            actFieldIndex = this.getPlayerState(this.game.getActualPlayer()).actFieldIndex;
          }

          return fieldIndex === this.getFieldIndex(actFieldIndex);
        }
      }, {
        key: "isPrimaryField",
        value: function isPrimaryField(fieldIndex) {
          return this.isFieldEnabled(fieldIndex);
        }
      }, {
        key: "isSecondaryField",
        value: function isSecondaryField(fieldIndex) {
          var _this34 = this;

          if (!this.isFieldEnabled(fieldIndex)) {
            return this.game.players.some(function (p) {
              return fieldIndex === _this34.getFieldIndex(_this34.getPlayerState(p).actFieldIndex);
            });
          }

          return false;
        }
      }, {
        key: "getFieldNote",
        value: function getFieldNote(fieldIndex) {
          var _this35 = this;

          var owners = this.game.players.filter(function (p) {
            return _this35.getFieldIndex(_this35.getPlayerState(p).actFieldIndex) === fieldIndex;
          }).map(function (p) {
            return p.name;
          });
          return !!owners.length ? owners.join(' ') : '';
        }
      }, {
        key: "getFieldIcon",
        value: function getFieldIcon(fieldIndex) {
          if (!this.isPrimaryField(fieldIndex) && !this.isSecondaryField(fieldIndex)) {
            return '';
          }

          return this.isHare() && this.isPrimaryField(fieldIndex) || this.isSecondaryField(fieldIndex) && !this.isHare() ? 'favorite' : 'directions_run';
        }
      }, {
        key: "customReset",
        value: function customReset() {
          var _this36 = this;

          this.game.players.forEach(function (player, index) {
            player.score = _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["FIELDS_COUNT"] - 1;

            if (index === 0) {
              player.state = new _models_hare_and_hound_state_model__WEBPACK_IMPORTED_MODULE_4__["HareAndHoundState"](_this36.settings.getHareStartIndex());
            } else {
              player.state = new _models_hare_and_hound_state_model__WEBPACK_IMPORTED_MODULE_4__["HareAndHoundState"](0);
            }
          });
        }
      }, {
        key: "getFieldIndex",
        value: function getFieldIndex(index) {
          return this.settings.getFields()[index];
        }
      }, {
        key: "isHare",
        value: function isHare(player) {
          if (!player) {
            player = this.game.getActualPlayer();
          }

          return this.game.players.map(function (p) {
            return p.id;
          }).indexOf(player.id) === 0;
        }
      }]);

      return HareAndHoundComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    HareAndHoundComponent.ɵfac = function HareAndHoundComponent_Factory(t) {
      return new (t || HareAndHoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]));
    };

    HareAndHoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HareAndHoundComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 4,
      consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]],
      template: function HareAndHoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HareAndHoundComponent_app_settings_1_Template, 4, 4, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HareAndHoundComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HareAndHoundComponent_ng_container_4_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HareAndHoundComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_15__["NumberPlateComponent"]],
      encapsulation: 2,
      data: {
        animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HareAndHoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './hare-and-hound.component.html',
          animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
        }]
      }], function () {
        return [{
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]
        }, {
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]
        }, {
          type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/hare-and-hound/hare-and-hound.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/hare-and-hound/hare-and-hound.module.ts ***!
    \*********************************************************/

  /*! exports provided: HareAndHoundModule */

  /***/
  function srcAppHareAndHoundHareAndHoundModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HareAndHoundModule", function () {
      return HareAndHoundModule;
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


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _hare_and_hound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./hare-and-hound.component */
    "./src/app/hare-and-hound/hare-and-hound.component.ts");

    var HareAndHoundModule = function HareAndHoundModule() {
      _classCallCheck(this, HareAndHoundModule);
    };

    HareAndHoundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HareAndHoundModule
    });
    HareAndHoundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HareAndHoundModule_Factory(t) {
        return new (t || HareAndHoundModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _hare_and_hound_component__WEBPACK_IMPORTED_MODULE_3__["HareAndHoundComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HareAndHoundModule, {
        declarations: [_hare_and_hound_component__WEBPACK_IMPORTED_MODULE_3__["HareAndHoundComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HareAndHoundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _hare_and_hound_component__WEBPACK_IMPORTED_MODULE_3__["HareAndHoundComponent"]
          }])],
          declarations: [_hare_and_hound_component__WEBPACK_IMPORTED_MODULE_3__["HareAndHoundComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/hare-and-hound/models/hare-and-hound.settings.model.ts":
  /*!************************************************************************!*\
    !*** ./src/app/hare-and-hound/models/hare-and-hound.settings.model.ts ***!
    \************************************************************************/

  /*! exports provided: HareAndHoundSettings */

  /***/
  function srcAppHareAndHoundModelsHareAndHoundSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HareAndHoundSettings", function () {
      return HareAndHoundSettings;
    });

    var HareAndHoundSettings =
    /*#__PURE__*/
    function () {
      function HareAndHoundSettings() {
        _classCallCheck(this, HareAndHoundSettings);

        this.houndStartIndex = 13;
        this.hareStartIndex = 19;
      }

      _createClass(HareAndHoundSettings, [{
        key: "getSelectableHoundStart",
        value: function getSelectableHoundStart() {
          return [7, 16, 8, 11, 14, 9, 12, 5, 20];
        }
      }, {
        key: "setHoundStart",
        value: function setHoundStart(value) {
          this.houndStartIndex = value;
        }
      }, {
        key: "getFields",
        value: function getFields() {
          var index = HareAndHoundSettings.getBaseFields().indexOf(this.houndStartIndex);
          return [].concat(_toConsumableArray(HareAndHoundSettings.getBaseFields().slice(index)), _toConsumableArray(HareAndHoundSettings.getBaseFields().slice(0, index)));
        }
      }, {
        key: "getHareStartIndex",
        value: function getHareStartIndex() {
          return this.getFields().indexOf(this.hareStartIndex);
        }
      }], [{
        key: "getBaseFields",
        value: function getBaseFields() {
          return [19, 0, 17, 3, 12, 5, 9, 14, 1, 16, 2, 18, 6, 15, 7, 10, 13, 8, 11, 4];
        }
      }]);

      return HareAndHoundSettings;
    }();
    /***/

  },

  /***/
  "./src/app/hare-and-hound/models/hare-and-hound.state.model.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/hare-and-hound/models/hare-and-hound.state.model.ts ***!
    \*********************************************************************/

  /*! exports provided: HareAndHoundState */

  /***/
  function srcAppHareAndHoundModelsHareAndHoundStateModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HareAndHoundState", function () {
      return HareAndHoundState;
    });
    /* harmony import */


    var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ~models/playground-state.model */
    "./src/app/shared/models/playground-state.model.ts");

    var HareAndHoundState =
    /*#__PURE__*/
    function (_models_playground_st5) {
      _inherits(HareAndHoundState, _models_playground_st5);

      var _super12 = _createSuper(HareAndHoundState);

      function HareAndHoundState(actFieldIndex) {
        var _this37;

        _classCallCheck(this, HareAndHoundState);

        _this37 = _super12.call(this);
        _this37.actFieldIndex = actFieldIndex;
        return _this37;
      }

      _createClass(HareAndHoundState, [{
        key: "increaseActFieldIndex",
        value: function increaseActFieldIndex(value) {
          this.actFieldIndex += value ? value : 1;
        }
      }, {
        key: "decreaseActFieldIndex",
        value: function decreaseActFieldIndex() {
          this.actFieldIndex--;

          if (this.actFieldIndex < 0) {
            this.actFieldIndex = 0;
          }
        }
      }, {
        key: "clone",
        value: function clone() {
          return new HareAndHoundState(this.actFieldIndex);
        }
      }]);

      return HareAndHoundState;
    }(_models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__["PlaygroundState"]);
    /***/

  },

  /***/
  "./src/app/imitator/imitator.component.ts":
  /*!************************************************!*\
    !*** ./src/app/imitator/imitator.component.ts ***!
    \************************************************/

  /*! exports provided: ImitatorComponent */

  /***/
  function srcAppImitatorImitatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImitatorComponent", function () {
      return ImitatorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");
    /* harmony import */


    var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../route-animation */
    "./src/app/route-animation.ts");
    /* harmony import */


    var _models_imitator_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./models/imitator.settings.model */
    "./src/app/imitator/models/imitator.settings.model.ts");
    /* harmony import */


    var _models_imitator_state_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./models/imitator.state.model */
    "./src/app/imitator/models/imitator.state.model.ts");
    /* harmony import */


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _services_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ~services/sound.service */
    "./src/app/shared/services/sound.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function ImitatorComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Number of Round");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r218.settings.setRound(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 3 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r220.settings.setRound(5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " 5 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r221.settings.setRound(10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " 10 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r222.settings.setRound(15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 15 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219);

          var ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r223.settings.setRound(20);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 20 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Imitator")("playground", ctx_r214.playground)("rules", "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r214.settings.round === 3 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r214.settings.round === 5 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r214.settings.round === 10 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r214.settings.round === 15 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r214.settings.round === 20 ? "primary" : "");
      }
    }

    function ImitatorComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 8);
      }

      if (rf & 2) {
        var ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r215.playground)("reversRound", ctx_r215.settings.round);
      }
    }

    function ImitatorComponent_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r225 = ctx.$implicit;
        var i_r226 = ctx.index;

        var ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r226 === ctx_r224.game.actualPlayerIndex ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r225)("hasContent", false);
      }
    }

    function ImitatorComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImitatorComponent_ng_container_4_div_1_Template, 2, 5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r216.game.players);
      }
    }

    function ImitatorComponent_app_number_plate_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 11);
      }

      if (rf & 2) {
        var ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r217.playground);
      }
    }

    var ImitatorComponent =
    /*#__PURE__*/
    function (_models_playground_mo7) {
      _inherits(ImitatorComponent, _models_playground_mo7);

      var _super13 = _createSuper(ImitatorComponent);

      function ImitatorComponent(application, game, route, dialogService, soundService) {
        var _this38;

        _classCallCheck(this, ImitatorComponent);

        _this38 = _super13.call(this, application, game, route, dialogService, soundService);
        _this38.nextEnabled = false;
        _this38.settings = new _models_imitator_settings_model__WEBPACK_IMPORTED_MODULE_3__["ImitatorSettings"]();
        return _this38;
      }

      _createClass(ImitatorComponent, [{
        key: "calculatePoints",
        value: function calculatePoints(player, fieldIndex, score) {
          var state = this.getPlayerState(player);

          if (this.game.actualThrow === 1) {
            state.punished = fieldIndex !== state.actFieldIndex;
          } else if (this.game.actualThrow === 2) {
            var newScore = state.punished && score === 0 ? 25 : score;
            player.score += (state.punished ? newScore * -1 : newScore) * this.multiplier;
          } else {
            this.game.nextPlayer();
            var newFieldIndex = score === 0 ? Math.floor(Math.random() * 20) : fieldIndex;
            this.getPlayerState(this.game.getActualPlayer()).actFieldIndex = newFieldIndex;
          }
        }
      }, {
        key: "isPrimaryField",
        value: function isPrimaryField(fieldIndex) {
          return this.game.actualThrow === 0 && this.getPlayerState(this.game.getActualPlayer()).actFieldIndex === fieldIndex;
        }
      }, {
        key: "checkPlayerState",
        value: function checkPlayerState(player) {
          var _this39 = this;

          if (this.game.isTheLastPlayer(player) && this.game.round + 1 === this.settings.round && this.game.actualThrow === 2) {
            this.game.players.forEach(function (p) {
              return p.setWin(_this39.game.isTheBestPlayer(p));
            });
          }
        }
      }, {
        key: "customReset",
        value: function customReset() {
          this.game.players.forEach(function (player) {
            return player.state = new _models_imitator_state_model__WEBPACK_IMPORTED_MODULE_4__["ImitatorState"]();
          });
        }
      }]);

      return ImitatorComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    ImitatorComponent.ɵfac = function ImitatorComponent_Factory(t) {
      return new (t || ImitatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]));
    };

    ImitatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImitatorComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 4,
      consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", "reversRound", 4, "ngIf"], [4, "ngIf"], [3, "playground", 4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], [3, "playground", "reversRound"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"], [3, "playground"]],
      template: function ImitatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImitatorComponent_app_settings_1_Template, 13, 8, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImitatorComponent_app_game_toolbar_3_Template, 1, 2, "app-game-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImitatorComponent_ng_container_4_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ImitatorComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_15__["NumberPlateComponent"]],
      encapsulation: 2,
      data: {
        animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImitatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './imitator.component.html',
          animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
        }]
      }], function () {
        return [{
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]
        }, {
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]
        }, {
          type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/imitator/imitator.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/imitator/imitator.module.ts ***!
    \*********************************************/

  /*! exports provided: ImitatorModule */

  /***/
  function srcAppImitatorImitatorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImitatorModule", function () {
      return ImitatorModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _imitator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./imitator.component */
    "./src/app/imitator/imitator.component.ts");

    var ImitatorModule = function ImitatorModule() {
      _classCallCheck(this, ImitatorModule);
    };

    ImitatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ImitatorModule
    });
    ImitatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ImitatorModule_Factory(t) {
        return new (t || ImitatorModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _imitator_component__WEBPACK_IMPORTED_MODULE_3__["ImitatorComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImitatorModule, {
        declarations: [_imitator_component__WEBPACK_IMPORTED_MODULE_3__["ImitatorComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImitatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
            path: '',
            component: _imitator_component__WEBPACK_IMPORTED_MODULE_3__["ImitatorComponent"]
          }])],
          declarations: [_imitator_component__WEBPACK_IMPORTED_MODULE_3__["ImitatorComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/imitator/models/imitator.settings.model.ts":
  /*!************************************************************!*\
    !*** ./src/app/imitator/models/imitator.settings.model.ts ***!
    \************************************************************/

  /*! exports provided: ImitatorSettings */

  /***/
  function srcAppImitatorModelsImitatorSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImitatorSettings", function () {
      return ImitatorSettings;
    });

    var ImitatorSettings =
    /*#__PURE__*/
    function () {
      function ImitatorSettings() {
        _classCallCheck(this, ImitatorSettings);

        this.round = 5;
      }

      _createClass(ImitatorSettings, [{
        key: "setRound",
        value: function setRound(r) {
          this.round = r;
        }
      }]);

      return ImitatorSettings;
    }();
    /***/

  },

  /***/
  "./src/app/imitator/models/imitator.state.model.ts":
  /*!*********************************************************!*\
    !*** ./src/app/imitator/models/imitator.state.model.ts ***!
    \*********************************************************/

  /*! exports provided: ImitatorState */

  /***/
  function srcAppImitatorModelsImitatorStateModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImitatorState", function () {
      return ImitatorState;
    });
    /* harmony import */


    var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ~models/playground-state.model */
    "./src/app/shared/models/playground-state.model.ts");

    var ImitatorState =
    /*#__PURE__*/
    function (_models_playground_st6) {
      _inherits(ImitatorState, _models_playground_st6);

      var _super14 = _createSuper(ImitatorState);

      function ImitatorState() {
        var _this40;

        _classCallCheck(this, ImitatorState);

        _this40 = _super14.call(this);
        _this40.actFieldIndex = Math.floor(Math.random() * 20);
        _this40.punished = false;
        return _this40;
      }

      _createClass(ImitatorState, [{
        key: "clone",
        value: function clone() {
          var state = new ImitatorState();
          state.actFieldIndex = this.actFieldIndex;
          state.punished = this.punished;
          return state;
        }
      }]);

      return ImitatorState;
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


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");
    /* harmony import */


    var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../route-animation */
    "./src/app/route-animation.ts");
    /* harmony import */


    var _models_killer_state_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./models/killer.state.model */
    "./src/app/killer/models/killer.state.model.ts");
    /* harmony import */


    var _models_killer_settings_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./models/killer.settings.model */
    "./src/app/killer/models/killer.settings.model.ts");
    /* harmony import */


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _services_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ~services/sound.service */
    "./src/app/shared/services/sound.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function KillerComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KillerComponent_app_settings_1_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r151);

          var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r150.settings.numberOfLives = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Boarding");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KillerComponent_app_settings_1_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r151);

          var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r152.settings.boardingLimit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KillerComponent_app_settings_1_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r151);

          var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r153.settings.toggleSuicide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Suicide");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Killer")("playground", ctx_r146.playground)("rules", "Firstly each player draws lots i.e. a number between 1 - 20. Each player is then given " + "between 3 & 5 lives. The objective of this game is for each thrower to first hit their own number " + "three times to gain status of KILLER. Once they have achieved this they then can throw for their " + "opponents number in any order they wish. Every time a KILLER status player hits an opponents " + "number the opponent loses a life. KILLERS can also commit SUICIDE by hitting their own number's " + "triple. The winner of this game is the player that remains alive.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r146.settings.numberOfLives);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r146.settings.boardingLimit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r146.settings.suicide ? "primary" : "");
      }
    }

    function KillerComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 10);
      }

      if (rf & 2) {
        var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r147.playground);
      }
    }

    function KillerComponent_ng_container_4_div_1_ng_container_2_ng_container_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Boarding: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var player_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r158.getPlayerState(player_r155).boarding);
      }
    }

    function KillerComponent_ng_container_4_div_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var player_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r157.getPlayerField(player_r155));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", player_r155.life, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r157.getPlayerState(player_r155).killer);
      }
    }

    function KillerComponent_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KillerComponent_ng_container_4_div_1_ng_container_2_Template, 12, 3, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r155 = ctx.$implicit;
        var i_r156 = ctx.index;

        var ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player ", i_r156 === ctx_r154.game.actualPlayerIndex ? "highlighted" : "", " ", player_r155.isInactive() ? "inactive" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r155)("scoreDisplayed", false)("highlighted", ctx_r154.getPlayerState(player_r155).killer);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r154.getPlayerField(player_r155) !== "0");
      }
    }

    function KillerComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KillerComponent_ng_container_4_div_1_Template, 3, 8, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r148.game.players);
      }
    }

    function KillerComponent_app_number_plate_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 10);
      }

      if (rf & 2) {
        var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r149.playground);
      }
    }

    var DANGER_ZONE_ICON = 'sentiment_very_dissatisfied';

    var KillerComponent =
    /*#__PURE__*/
    function (_models_playground_mo8) {
      _inherits(KillerComponent, _models_playground_mo8);

      var _super15 = _createSuper(KillerComponent);

      function KillerComponent(application, game, route, dialogService, soundService) {
        var _this41;

        _classCallCheck(this, KillerComponent);

        _this41 = _super15.call(this, application, game, route, dialogService, soundService, 2);
        _this41.settings = new _models_killer_settings_model__WEBPACK_IMPORTED_MODULE_4__["KillerSettings"]();
        _this41.nextEnabled = false;
        _this41.zeroEnabled = false;
        _this41.multiEnabled = false;
        return _this41;
      }

      _createClass(KillerComponent, [{
        key: "calculatePoints",
        value: function calculatePoints(player, fieldIndex, score) {
          var _this42 = this;

          var state = this.getPlayerState(player);

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
                this.game.players.filter(function (p) {
                  return p.id !== player.id && !p.isInactive();
                }).forEach(function (p) {
                  var s = _this42.getPlayerState(p);

                  if (fieldIndex === s.actField) {
                    p.life -= _this42.multiplier;

                    _this42.soundService.no();

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
      }, {
        key: "checkPlayerState",
        value: function checkPlayerState(player) {
          if (this.game.round !== 0) {
            var activePlayers = this.game.players.filter(function (p) {
              return !p.isInactive();
            });
            this.game.players.forEach(function (p) {
              return p.setWin(1 === activePlayers.length && !p.isInactive());
            });
          }

          if (this.game.round === 0 || this.game.isTheLastThrow()) {
            this.game.nextPlayer();
          }

          while (this.game.getActualPlayer().isInactive()) {
            this.game.nextPlayer();
          }
        }
      }, {
        key: "isFieldEnabled",
        value: function isFieldEnabled(fieldIndex) {
          if (this.game.round === 0) {
            return fieldIndex !== 20 && !this.getAllEnabledFields().some(function (f) {
              return f === fieldIndex;
            });
          }

          return this.getAllEnabledFields().some(function (f) {
            return f === fieldIndex;
          });
        }
      }, {
        key: "isPrimaryField",
        value: function isPrimaryField(fieldIndex) {
          if (this.game.round === 0) {
            return this.isFieldEnabled(fieldIndex);
          }

          var state = this.getPlayerState(this.game.getActualPlayer());

          if (state.killer) {
            return this.isFieldEnabled(fieldIndex) && !this.isSecondaryField(fieldIndex);
          }

          return state.actField === fieldIndex;
        }
      }, {
        key: "isSecondaryField",
        value: function isSecondaryField(fieldIndex) {
          var state = this.getPlayerState(this.game.getActualPlayer());

          if (state.killer) {
            return state.actField === fieldIndex;
          }

          return false;
        }
      }, {
        key: "getFieldIcon",
        value: function getFieldIcon(fieldIndex) {
          var _this43 = this;

          if (this.game.players.some(function (p) {
            var state = _this43.getPlayerState(p);

            return !p.isInactive() && p.life <= 3 && state.actField === fieldIndex;
          })) {
            return DANGER_ZONE_ICON;
          }

          return '';
        }
      }, {
        key: "getFieldNote",
        value: function getFieldNote(fieldIndex) {
          var owner = this.game.players.find(function (p) {
            return p.state.actField === fieldIndex;
          });
          return owner ? "".concat(owner.name, "(").concat(owner.life, ")") : '';
        }
      }, {
        key: "getPlayerField",
        value: function getPlayerField(player) {
          var fieldIndex = this.getPlayerState(player).actField;
          return fieldIndex === 20 ? 'B' : fieldIndex + 1 + '';
        }
      }, {
        key: "customReset",
        value: function customReset() {
          var _this44 = this;

          this.game.players.forEach(function (player) {
            player.state = new _models_killer_state_model__WEBPACK_IMPORTED_MODULE_3__["KillerState"](_this44.settings.boardingLimit);
            player.life = _this44.settings.numberOfLives;
          });
        }
      }, {
        key: "customSettingsValidation",
        value: function customSettingsValidation() {
          return this.settings.numberOfLives > 0 && this.settings.boardingLimit > 0;
        }
      }, {
        key: "getAllEnabledFields",
        value: function getAllEnabledFields() {
          var _this45 = this;

          return this.game.players.filter(function (p) {
            return !p.isInactive();
          }).map(function (p) {
            return _this45.getPlayerState(p).actField;
          });
        }
      }]);

      return KillerComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    KillerComponent.ɵfac = function KillerComponent_Factory(t) {
      return new (t || KillerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]));
    };

    KillerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KillerComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 4,
      consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], [1, "field-set"], ["appearance", "outline", 1, "big"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "scoreDisplayed", "highlighted"], [1, "score"], [1, "clear"], [1, "line"]],
      template: function KillerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KillerComponent_app_settings_1_Template, 15, 6, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KillerComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KillerComponent_ng_container_4_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, KillerComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_17__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_18__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_19__["NumberPlateComponent"]],
      encapsulation: 2,
      data: {
        animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KillerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './killer.component.html',
          animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
        }]
      }], function () {
        return [{
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]
        }, {
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]
        }, {
          type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]
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
  "./src/app/killer/models/killer.settings.model.ts":
  /*!********************************************************!*\
    !*** ./src/app/killer/models/killer.settings.model.ts ***!
    \********************************************************/

  /*! exports provided: KillerSettings */

  /***/
  function srcAppKillerModelsKillerSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KillerSettings", function () {
      return KillerSettings;
    });

    var KillerSettings =
    /*#__PURE__*/
    function () {
      function KillerSettings() {
        _classCallCheck(this, KillerSettings);

        this.suicide = false;
        this.numberOfLives = 7;
        this.boardingLimit = 3;
      }

      _createClass(KillerSettings, [{
        key: "toggleSuicide",
        value: function toggleSuicide() {
          this.suicide = !this.suicide;
        }
      }]);

      return KillerSettings;
    }();
    /***/

  },

  /***/
  "./src/app/killer/models/killer.state.model.ts":
  /*!*****************************************************!*\
    !*** ./src/app/killer/models/killer.state.model.ts ***!
    \*****************************************************/

  /*! exports provided: KillerState */

  /***/
  function srcAppKillerModelsKillerStateModelTs(module, __webpack_exports__, __webpack_require__) {
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
    function (_models_playground_st7) {
      _inherits(KillerState, _models_playground_st7);

      var _super16 = _createSuper(KillerState);

      function KillerState() {
        var _this46;

        var boarding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;

        _classCallCheck(this, KillerState);

        _this46 = _super16.call(this);
        _this46.boarding = boarding;
        _this46.actField = -1;
        _this46.killer = false;
        return _this46;
      }

      _createClass(KillerState, [{
        key: "clone",
        value: function clone() {
          var state = new KillerState(this.boarding);
          state.actField = this.actField;
          state.killer = this.killer;
          return state;
        }
      }]);

      return KillerState;
    }(_models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__["PlaygroundState"]);
    /***/

  },

  /***/
  "./src/app/knockout/knockout.component.ts":
  /*!************************************************!*\
    !*** ./src/app/knockout/knockout.component.ts ***!
    \************************************************/

  /*! exports provided: KnockoutComponent */

  /***/
  function srcAppKnockoutKnockoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KnockoutComponent", function () {
      return KnockoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");
    /* harmony import */


    var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../route-animation */
    "./src/app/route-animation.ts");
    /* harmony import */


    var _models_knockout_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./models/knockout.settings.model */
    "./src/app/knockout/models/knockout.settings.model.ts");
    /* harmony import */


    var _models_knockout_state_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./models/knockout.state.model */
    "./src/app/knockout/models/knockout.state.model.ts");
    /* harmony import */


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _services_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ~services/sound.service */
    "./src/app/shared/services/sound.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function KnockoutComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KnockoutComponent_app_settings_1_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194);

          var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r193.settings.numberOfLives = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KnockoutComponent_app_settings_1_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r194);

          var ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r195.settings.toggleKiller();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Below the belt ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Knockout")("playground", ctx_r189.playground)("rules", "The player selected to throw first must throw as many points as possible. The player next in " + "line then must throw a higher score than the player throwing before him, if he fails to throw a " + "higher score a ring is put around their score, once you have 3 rings next to your name, you drop " + "out of the game.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r189.settings.numberOfLives);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r189.settings.killer ? "primary" : "");
      }
    }

    function KnockoutComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 11);
      }

      if (rf & 2) {
        var ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r190.playground)("info", ctx_r190.getInfo());
      }
    }

    function KnockoutComponent_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

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
      }

      if (rf & 2) {
        var player_r197 = ctx.$implicit;
        var i_r198 = ctx.index;

        var ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player ", i_r198 === ctx_r196.game.actualPlayerIndex ? "highlighted" : "", " ", player_r197.isInactive() ? "inactive" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r197)("scoreDisplayed", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", player_r197.life, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", player_r197.score, " ");
      }
    }

    function KnockoutComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KnockoutComponent_ng_container_4_div_1_Template, 10, 8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r191.game.players);
      }
    }

    function KnockoutComponent_app_number_plate_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 16);
      }

      if (rf & 2) {
        var ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r192.playground);
      }
    }

    var KnockoutComponent =
    /*#__PURE__*/
    function (_models_playground_mo9) {
      _inherits(KnockoutComponent, _models_playground_mo9);

      var _super17 = _createSuper(KnockoutComponent);

      function KnockoutComponent(application, game, route, dialogService, soundService) {
        var _this47;

        _classCallCheck(this, KnockoutComponent);

        _this47 = _super17.call(this, application, game, route, dialogService, soundService, 2);
        _this47.settings = new _models_knockout_settings_model__WEBPACK_IMPORTED_MODULE_3__["KnockoutSettings"]();
        return _this47;
      }

      _createClass(KnockoutComponent, [{
        key: "calculatePoints",
        value: function calculatePoints(player, fieldIndex, score) {
          player.score = player.getThrowsTotal();
        }
      }, {
        key: "checkPlayerState",
        value: function checkPlayerState(player) {
          if (this.game.isTheLastThrow()) {
            var score = this.getPlayerState(player).score;

            if (score > player.getThrowsTotal()) {
              player.life--;
              this.soundService.no();
            } else if (this.settings.killer && score !== 0 && score === player.getThrowsTotal()) {
              this.game.getPreviousPlayer().life--;
              this.soundService.no();
            }

            this.getPlayerState(this.game.getNextPlayer()).score = player.getThrowsTotal();
            var activePlayers = this.game.getActivePlayers();
            this.game.players.forEach(function (p) {
              return p.setWin(1 === activePlayers.length && !p.isInactive());
            });
            this.game.nextPlayer();
          }

          while (this.game.getActualPlayer().isInactive()) {
            this.game.nextPlayer();
          }
        }
      }, {
        key: "customReset",
        value: function customReset() {
          var _this48 = this;

          this.game.players.forEach(function (player) {
            player.state = new _models_knockout_state_model__WEBPACK_IMPORTED_MODULE_4__["KnockoutState"]();
            player.life = _this48.settings.numberOfLives;
          });
        }
      }, {
        key: "customSettingsValidation",
        value: function customSettingsValidation() {
          return this.settings.numberOfLives > 0;
        }
      }, {
        key: "getInfo",
        value: function getInfo() {
          var player = this.game.getActualPlayer();
          var state = this.getPlayerState(player);
          return (state.score ? state.score : 0) - (this.game.actualThrow === 0 ? 0 : player.score);
        }
      }]);

      return KnockoutComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    KnockoutComponent.ɵfac = function KnockoutComponent_Factory(t) {
      return new (t || KnockoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]));
    };

    KnockoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KnockoutComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 4,
      consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", "info", 4, "ngIf"], [4, "ngIf"], [3, "playground", 4, "ngIf"], [3, "title", "playground", "rules"], [1, "field-set"], ["appearance", "outline", 1, "big"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 1, "button", "medium", 3, "color", "click"], [3, "playground", "info"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "scoreDisplayed"], [1, "clear"], [1, "score"], [3, "playground"]],
      template: function KnockoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KnockoutComponent_app_settings_1_Template, 10, 5, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KnockoutComponent_app_game_toolbar_3_Template, 1, 2, "app-game-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KnockoutComponent_ng_container_4_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, KnockoutComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_17__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__["NumberPlateComponent"]],
      encapsulation: 2,
      data: {
        animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KnockoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './knockout.component.html',
          animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
        }]
      }], function () {
        return [{
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]
        }, {
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]
        }, {
          type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/knockout/knockout.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/knockout/knockout.module.ts ***!
    \*********************************************/

  /*! exports provided: KnockoutModule */

  /***/
  function srcAppKnockoutKnockoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KnockoutModule", function () {
      return KnockoutModule;
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


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _knockout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./knockout.component */
    "./src/app/knockout/knockout.component.ts");

    var KnockoutModule = function KnockoutModule() {
      _classCallCheck(this, KnockoutModule);
    };

    KnockoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: KnockoutModule
    });
    KnockoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function KnockoutModule_Factory(t) {
        return new (t || KnockoutModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _knockout_component__WEBPACK_IMPORTED_MODULE_3__["KnockoutComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](KnockoutModule, {
        declarations: [_knockout_component__WEBPACK_IMPORTED_MODULE_3__["KnockoutComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KnockoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _knockout_component__WEBPACK_IMPORTED_MODULE_3__["KnockoutComponent"]
          }])],
          declarations: [_knockout_component__WEBPACK_IMPORTED_MODULE_3__["KnockoutComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/knockout/models/knockout.settings.model.ts":
  /*!************************************************************!*\
    !*** ./src/app/knockout/models/knockout.settings.model.ts ***!
    \************************************************************/

  /*! exports provided: KnockoutSettings */

  /***/
  function srcAppKnockoutModelsKnockoutSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KnockoutSettings", function () {
      return KnockoutSettings;
    });

    var KnockoutSettings =
    /*#__PURE__*/
    function () {
      function KnockoutSettings() {
        _classCallCheck(this, KnockoutSettings);

        this.numberOfLives = 5;
        this.killer = true;
      }

      _createClass(KnockoutSettings, [{
        key: "toggleKiller",
        value: function toggleKiller() {
          this.killer = !this.killer;
        }
      }]);

      return KnockoutSettings;
    }();
    /***/

  },

  /***/
  "./src/app/knockout/models/knockout.state.model.ts":
  /*!*********************************************************!*\
    !*** ./src/app/knockout/models/knockout.state.model.ts ***!
    \*********************************************************/

  /*! exports provided: KnockoutState */

  /***/
  function srcAppKnockoutModelsKnockoutStateModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KnockoutState", function () {
      return KnockoutState;
    });
    /* harmony import */


    var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ~models/playground-state.model */
    "./src/app/shared/models/playground-state.model.ts");

    var KnockoutState =
    /*#__PURE__*/
    function (_models_playground_st8) {
      _inherits(KnockoutState, _models_playground_st8);

      var _super18 = _createSuper(KnockoutState);

      function KnockoutState() {
        var _this49;

        var score = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        _classCallCheck(this, KnockoutState);

        _this49 = _super18.call(this);
        _this49.score = score;
        return _this49;
      }

      _createClass(KnockoutState, [{
        key: "clone",
        value: function clone() {
          return new KnockoutState(this.score);
        }
      }]);

      return KnockoutState;
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
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");

    var materialImports = [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"]];

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
      imports: [materialImports, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"]],
        exports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"]]
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
  "./src/app/route-animation.ts":
  /*!************************************!*\
    !*** ./src/app/route-animation.ts ***!
    \************************************/

  /*! exports provided: slideInAnimation */

  /***/
  function srcAppRouteAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideInAnimation", function () {
      return slideInAnimation;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      position: 'relative'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      left: '-100%'
    })], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      left: '100%'
    }))], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      left: '0%'
    }))], {
      optional: true
    })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), {
      optional: true
    })])]);
    /***/
  },

  /***/
  "./src/app/scam/models/scam.settings.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/scam/models/scam.settings.model.ts ***!
    \****************************************************/

  /*! exports provided: ScamSettings */

  /***/
  function srcAppScamModelsScamSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScamSettings", function () {
      return ScamSettings;
    });
    /* harmony import */


    var _cricket_models_cricet_settings_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../cricket/models/cricet.settings.model */
    "./src/app/cricket/models/cricet.settings.model.ts");

    var ScamSettings =
    /*#__PURE__*/
    function (_cricket_models_crice2) {
      _inherits(ScamSettings, _cricket_models_crice2);

      var _super19 = _createSuper(ScamSettings);

      function ScamSettings() {
        var _this50;

        _classCallCheck(this, ScamSettings);

        _this50 = _super19.call(this);
        _this50.stopper = false;
        _this50.style = 1;

        _this50.all();

        return _this50;
      }

      _createClass(ScamSettings, [{
        key: "toggleStopper",
        value: function toggleStopper() {
          this.stopper = !this.stopper;
        }
      }]);

      return ScamSettings;
    }(_cricket_models_cricet_settings_model__WEBPACK_IMPORTED_MODULE_0__["CricketSettings"]);
    /***/

  },

  /***/
  "./src/app/scam/scam.component.ts":
  /*!****************************************!*\
    !*** ./src/app/scam/scam.component.ts ***!
    \****************************************/

  /*! exports provided: ScamComponent */

  /***/
  function srcAppScamScamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScamComponent", function () {
      return ScamComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");
    /* harmony import */


    var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../route-animation */
    "./src/app/route-animation.ts");
    /* harmony import */


    var _models_scam_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./models/scam.settings.model */
    "./src/app/scam/models/scam.settings.model.ts");
    /* harmony import */


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _services_sound_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ~services/sound.service */
    "./src/app/shared/services/sound.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function ScamComponent_app_settings_1_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r235);

          var i_r233 = ctx.index;

          var ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r234.settings.setNumber(i_r233);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var numb_r232 = ctx.$implicit;
        var i_r233 = ctx.index;

        var ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r231.settings.isFieldAllowed(i_r233) ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r232 === 21 ? "B" : numb_r232, " ");
      }
    }

    function ScamComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fields");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScamComponent_app_settings_1_button_3_Template, 2, 2, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          var ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r236.settings.upper();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Upper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          var ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r238.settings.lower();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lower");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          var ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r239.settings.left();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          var ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r240.settings.right();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          var ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r241.settings.odd();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Odd");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          var ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r242.settings.even();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Even");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          var ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r243.settings.prime();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Prime");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          var ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r244.settings.notPrime();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Not prime");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          var ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r245.settings.randomize(5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Random 05");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          var ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r246.settings.randomize(10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Random 10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          var ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r247.settings.randomize(15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Random 15");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          var ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r248.settings.all();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "All");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          var ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r249.settings.small();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          var ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r250.settings.high();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "High");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          var ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r251.settings.star();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_38_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          var ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r252.settings.cross();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cross");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Style");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_43_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          var ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r253.settings.setStyle(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Classic ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_45_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          var ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r254.settings.setStyle(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "No Score ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_47_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          var ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r255.settings.toggleStopper();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Stopper ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Scam")("playground", ctx_r227.playground)("rules", "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r227.settings.getNumbers());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r227.settings.style == 1 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r227.settings.style == 3 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r227.settings.stopper ? "primary" : "");
      }
    }

    function ScamComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 10);
      }

      if (rf & 2) {
        var ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r228.playground);
      }
    }

    function ScamComponent_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r257 = ctx.$implicit;
        var i_r258 = ctx.index;

        var ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r258 === ctx_r256.game.actualPlayerIndex ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r257)("hasContent", false)("highlighted", ctx_r256.settings.stopper && ctx_r256.game.isTheFirstPlayer(player_r257))("scoreDisplayed", !ctx_r256.settings.stopper || !ctx_r256.game.isTheFirstPlayer(player_r257));
      }
    }

    function ScamComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScamComponent_ng_container_4_div_1_Template, 2, 7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r229.game.players);
      }
    }

    function ScamComponent_app_number_plate_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 10);
      }

      if (rf & 2) {
        var ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r230.playground);
      }
    }

    var ScamComponent =
    /*#__PURE__*/
    function (_models_playground_mo10) {
      _inherits(ScamComponent, _models_playground_mo10);

      var _super20 = _createSuper(ScamComponent);

      function ScamComponent(application, game, route, dialogService, soundService) {
        var _this51;

        _classCallCheck(this, ScamComponent);

        _this51 = _super20.call(this, application, game, route, dialogService, soundService, 2);
        _this51.settings = new _models_scam_settings_model__WEBPACK_IMPORTED_MODULE_3__["ScamSettings"]();
        return _this51;
      }

      _createClass(ScamComponent, [{
        key: "calculatePoints",
        value: function calculatePoints(player, fieldIndex, score) {
          if (this.isFieldEnabled(fieldIndex)) {
            if (this.settings.stopper && this.game.isTheFirstPlayer(player)) {
              this.game.numbs[fieldIndex] = 0;
            } else if (this.settings.stopper) {
              player.score += (this.settings.isNoScoreGame() ? 1 : score) * this.multiplier;
            } else {
              player.score += (this.settings.isNoScoreGame() ? 1 : score) * this.multiplier;
              this.game.numbs[fieldIndex] = 0;
            }
          }
        }
      }, {
        key: "checkPlayerState",
        value: function checkPlayerState(player) {
          var _this52 = this;

          if (!this.game.numbs.find(function (n) {
            return n;
          })) {
            this.game.players.forEach(function (p) {
              return p.setWin(_this52.game.isTheBestPlayer(p));
            });
          }

          if (this.game.isTheLastThrow()) {
            this.game.nextPlayer();
          }
        }
      }, {
        key: "isFieldEnabled",
        value: function isFieldEnabled(fieldIndex) {
          return !!this.game.numbs[fieldIndex];
        }
      }, {
        key: "customReset",
        value: function customReset() {
          var _this53 = this;

          this.game.numbs = this.settings.numbs.map(function (i) {
            return i ? 1 : 0;
          });
          this.settings.fields.forEach(function (f) {
            return _this53.settings.numbs[f] = true;
          });
        }
      }]);

      return ScamComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    ScamComponent.ɵfac = function ScamComponent_Factory(t) {
      return new (t || ScamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_8__["SoundService"]));
    };

    ScamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ScamComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 4,
      consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "click"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent", "highlighted", "scoreDisplayed"]],
      template: function ScamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScamComponent_app_settings_1_Template, 49, 7, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScamComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ScamComponent_ng_container_4_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ScamComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_15__["NumberPlateComponent"]],
      encapsulation: 2,
      data: {
        animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './scam.component.html',
          animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
        }]
      }], function () {
        return [{
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationStateService"]
        }, {
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]
        }, {
          type: _services_sound_service__WEBPACK_IMPORTED_MODULE_8__["SoundService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/scam/scam.module.ts":
  /*!*************************************!*\
    !*** ./src/app/scam/scam.module.ts ***!
    \*************************************/

  /*! exports provided: ScamModule */

  /***/
  function srcAppScamScamModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScamModule", function () {
      return ScamModule;
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


    var _scam_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./scam.component */
    "./src/app/scam/scam.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ScamModule = function ScamModule() {
      _classCallCheck(this, ScamModule);
    };

    ScamModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ScamModule
    });
    ScamModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ScamModule_Factory(t) {
        return new (t || ScamModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _scam_component__WEBPACK_IMPORTED_MODULE_2__["ScamComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScamModule, {
        declarations: [_scam_component__WEBPACK_IMPORTED_MODULE_2__["ScamComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScamModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _scam_component__WEBPACK_IMPORTED_MODULE_2__["ScamComponent"]
          }])],
          declarations: [_scam_component__WEBPACK_IMPORTED_MODULE_2__["ScamComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shanghai/models/shanghai.settings.model.ts":
  /*!************************************************************!*\
    !*** ./src/app/shanghai/models/shanghai.settings.model.ts ***!
    \************************************************************/

  /*! exports provided: ShanghaiSettings */

  /***/
  function srcAppShanghaiModelsShanghaiSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShanghaiSettings", function () {
      return ShanghaiSettings;
    });

    var ShanghaiSettings =
    /*#__PURE__*/
    function () {
      function ShanghaiSettings() {
        _classCallCheck(this, ShanghaiSettings);

        this.numbs = [];
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

      _createClass(ShanghaiSettings, [{
        key: "randomize",
        value: function randomize() {
          for (var i = 0; i < this.numbs.length; i++) {
            this.numbs[i] = false;
          }

          for (var _i2 = 0; _i2 < 8; _i2++) {
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
              this.fields.push(i);
            }
          }
        }
      }]);

      return ShanghaiSettings;
    }();
    /***/

  },

  /***/
  "./src/app/shanghai/models/shanghai.state.model.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shanghai/models/shanghai.state.model.ts ***!
    \*********************************************************/

  /*! exports provided: ShanghaiState */

  /***/
  function srcAppShanghaiModelsShanghaiStateModelTs(module, __webpack_exports__, __webpack_require__) {
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
    function (_models_playground_st9) {
      _inherits(ShanghaiState, _models_playground_st9);

      var _super21 = _createSuper(ShanghaiState);

      function ShanghaiState() {
        var _this54;

        _classCallCheck(this, ShanghaiState);

        _this54 = _super21.call(this);
        _this54.fieldCount = [];
        _this54.fieldScore = [];
        return _this54;
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
          var state = new ShanghaiState();
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


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");
    /* harmony import */


    var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../route-animation */
    "./src/app/route-animation.ts");
    /* harmony import */


    var _models_shanghai_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./models/shanghai.settings.model */
    "./src/app/shanghai/models/shanghai.settings.model.ts");
    /* harmony import */


    var _models_shanghai_state_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./models/shanghai.state.model */
    "./src/app/shanghai/models/shanghai.state.model.ts");
    /* harmony import */


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _services_sound_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ~services/sound.service */
    "./src/app/shared/services/sound.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function ShanghaiComponent_app_settings_1_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r135);

          var i_r133 = ctx.index;

          var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r134.settings.setNumber(i_r133);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var numb_r132 = ctx.$implicit;
        var i_r133 = ctx.index;

        var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r131.settings.numbs[i_r133] ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r132 === 21 ? "B" : numb_r132, " ");
      }
    }

    function ShanghaiComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fields");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShanghaiComponent_app_settings_1_button_3_Template, 2, 2, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r137);

          var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r136.settings.randomize();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Randomize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r137);

          var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r138.settings.toggleNoScore();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No score ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r137);

          var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r139.settings.toggleHalveIt();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Halve It ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Shanghai / Halve It")("playground", ctx_r127.playground)("rules", " Players start by throwing at the number 1 on the board. The object is to hit a single," + "treble and double (in any order). This first player to hit a single, treble and double wins. If no" + "player achieves this on number 1, the play moves to number 2 and so on until someone wins.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r127.settings.getNumbers());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r127.settings.noScore ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r127.settings.halveIt ? "primary" : "");
      }
    }

    function ShanghaiComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 10);
      }

      if (rf & 2) {
        var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r128.playground);
      }
    }

    function ShanghaiComponent_ng_container_4_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var field_r144 = ctx.$implicit;

        var player_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("field ", ctx_r143.isActiveField(field_r144) ? "active" : "", " ", ctx_r143.isFieldDoneForPlayer(field_r144) ? "" : "highlighted", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r144 === 20 ? "B" : field_r144 + 1, ": ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r143.getFieldValue(player_r141, field_r144));
      }
    }

    function ShanghaiComponent_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShanghaiComponent_ng_container_4_div_1_div_3_Template, 4, 6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r141 = ctx.$implicit;
        var i_r142 = ctx.index;

        var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r142 === ctx_r140.game.actualPlayerIndex ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r141);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r140.settings.fields);
      }
    }

    function ShanghaiComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShanghaiComponent_ng_container_4_div_1_Template, 4, 5, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r129.game.players);
      }
    }

    function ShanghaiComponent_app_number_plate_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 10);
      }

      if (rf & 2) {
        var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r130.playground);
      }
    }

    var ShanghaiComponent =
    /*#__PURE__*/
    function (_models_playground_mo11) {
      _inherits(ShanghaiComponent, _models_playground_mo11);

      var _super22 = _createSuper(ShanghaiComponent);

      function ShanghaiComponent(application, game, route, dialogService, soundService) {
        var _this55;

        _classCallCheck(this, ShanghaiComponent);

        _this55 = _super22.call(this, application, game, route, dialogService, soundService);
        _this55.settings = new _models_shanghai_settings_model__WEBPACK_IMPORTED_MODULE_3__["ShanghaiSettings"]();
        return _this55;
      }

      _createClass(ShanghaiComponent, [{
        key: "calculatePoints",
        value: function calculatePoints(player, fieldIndex, score) {
          var state = this.getPlayerState(player);

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
      }, {
        key: "checkPlayerState",
        value: function checkPlayerState(player) {
          var _this56 = this;

          // Shanghai rule
          if (this.game.isTheLastThrow()) {
            var multi = 1;
            var fieldIndex = this.settings.fields[this.game.round];

            for (var i = 0; i < 3; i++) {
              var t = player.throwsHistory[player.throwsHistory.length - i - 1];

              if (t.score === _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex)) {
                multi *= t.multi + 1;
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

          var gameEnded = this.game.round === this.settings.fields.length - 1 && this.game.isActualPlayerTheLast() && this.game.isTheLastThrow();

          if (gameEnded) {
            this.game.players.forEach(function (p) {
              return p.setWin(_this56.game.isTheBestPlayer(p));
            });
          } else if (this.game.isTheLastThrow()) {
            this.game.nextPlayer();
          }
        }
      }, {
        key: "getFieldValue",
        value: function getFieldValue(player, fieldIndex) {
          var fieldCount = this.getPlayerState(player).getFieldCount(fieldIndex);

          if (fieldCount === 0) {
            return '○○○';
          } else {
            var str = '' + this.getPlayerState(player).getFieldScore(fieldIndex) * _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex);

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
        key: "customReset",
        value: function customReset() {
          this.game.players.forEach(function (player) {
            return player.state = new _models_shanghai_state_model__WEBPACK_IMPORTED_MODULE_4__["ShanghaiState"]();
          });
        }
      }, {
        key: "customSettingsValidation",
        value: function customSettingsValidation() {
          return this.settings.fields.length > 0;
        }
      }, {
        key: "isActiveField",
        value: function isActiveField(fieldIndex) {
          return this.settings.fields[this.game.round] === fieldIndex;
        }
      }, {
        key: "isFieldDoneForPlayer",
        value: function isFieldDoneForPlayer(fieldIndex) {
          return this.settings.fields.indexOf(fieldIndex) < this.game.round;
        }
      }, {
        key: "isFieldEnabled",
        value: function isFieldEnabled(fieldIndex) {
          return this.settings.fields.indexOf(fieldIndex) === this.game.round;
        }
      }, {
        key: "isPrimaryField",
        value: function isPrimaryField(fieldIndex) {
          return this.isFieldEnabled(fieldIndex);
        }
      }, {
        key: "getTheFinalResult",
        value: function getTheFinalResult() {
          var winners = this.game.players.filter(function (p) {
            return p.win;
          });

          if (!winners.length) {
            return [];
          }

          var max = winners[0].score;
          winners.forEach(function (p) {
            max = p.score > max ? p.score : max;
          });
          winners = winners.filter(function (p) {
            return p.score === max;
          }).map(function (p) {
            return p.clone();
          });
          var losers = this.game.players.filter(function (p) {
            return !winners.some(function (w) {
              return w.id === p.id;
            });
          }).map(function (p) {
            var c = p.clone();
            c.win = false;
            return c;
          });
          return [].concat(_toConsumableArray(winners), _toConsumableArray(losers));
        }
      }]);

      return ShanghaiComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    ShanghaiComponent.ɵfac = function ShanghaiComponent_Factory(t) {
      return new (t || ShanghaiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]));
    };

    ShanghaiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShanghaiComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 4,
      consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", "class", "button", 3, "color", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "button", "big", "capitalize", 3, "click"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player"], [1, "field-set"], [1, "small"]],
      template: function ShanghaiComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShanghaiComponent_app_settings_1_Template, 11, 6, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShanghaiComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShanghaiComponent_ng_container_4_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShanghaiComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateComponent"]],
      encapsulation: 2,
      data: {
        animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShanghaiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './shanghai.component.html',
          animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
        }]
      }], function () {
        return [{
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]
        }, {
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]
        }, {
          type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]
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
  "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ConfirmDialogComponent */

  /***/
  function srcAppSharedComponentsConfirmDialogConfirmDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
      return ConfirmDialogComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ConfirmDialogComponent_mat_dialog_content_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-content", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r15.data.content);
      }
    }

    var ConfirmDialogComponent =
    /*#__PURE__*/
    function () {
      function ConfirmDialogComponent(dialogRef, data) {
        _classCallCheck(this, ConfirmDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(ConfirmDialogComponent, [{
        key: "cancel",
        value: function cancel() {
          this.dialogRef.close(false);
        }
      }, {
        key: "confirm",
        value: function confirm() {
          this.dialogRef.close(true);
        }
      }]);

      return ConfirmDialogComponent;
    }();

    ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) {
      return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
    };

    ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ConfirmDialogComponent,
      selectors: [["ng-component"]],
      decls: 10,
      vars: 4,
      consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], ["class", "body-2", 4, "ngIf"], ["mat-raised-button", "", 3, "color", "click"], [1, "body-2"]],
      template: function ConfirmDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ConfirmDialogComponent_mat_dialog_content_4_Template, 3, 1, "mat-dialog-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_6_listener() {
            return ctx.confirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_8_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.data.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "secondary");
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"]],
      styles: [".dialog-container[_ngcontent-%COMP%] {\n  width: 50vw;\n  text-align: center;\n}\n.dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvRDpcXERldmVsb3BtZW50XFxkYXJ0cy1zY29yZWJvYXJkLW5nL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGNvbmZpcm0tZGlhbG9nXFxjb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxtQkFBQTtBQ0FKO0FER0U7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctY29udGFpbmVyIHtcclxuICB3aWR0aDogNTB2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5zdWJ0aXRsZS0xIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgbWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICBtYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xyXG4gIH1cclxufVxyXG4iLCIuZGlhbG9nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MHZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGlhbG9nLWNvbnRhaW5lciAuc3VidGl0bGUtMSB7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfirmDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          templateUrl: 'confirm-dialog.component.html',
          styleUrls: ['confirm-dialog.component.scss']
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
  "./src/app/shared/components/darts-table/darts-table-dialog.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/shared/components/darts-table/darts-table-dialog.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: DartsTableDialogComponent */

  /***/
  function srcAppSharedComponentsDartsTableDartsTableDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DartsTableDialogComponent", function () {
      return DartsTableDialogComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DartsTableDialogComponent_div_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }

      if (rf & 2) {
        var f_r14 = ctx.$implicit;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("clip darts-table-field-", f_r14, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r13.isPrimary(f_r14))("secondary", ctx_r13.isSecondary(f_r14));
      }
    }

    var DartsTableDialogComponent =
    /*#__PURE__*/
    function () {
      function DartsTableDialogComponent(dialogRef, data) {
        _classCallCheck(this, DartsTableDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(DartsTableDialogComponent, [{
        key: "isPrimary",
        value: function isPrimary(index) {
          return this.data.primary.some(function (p) {
            return p === index;
          });
        }
      }, {
        key: "isSecondary",
        value: function isSecondary(index) {
          return this.data.secondary.some(function (p) {
            return p === index;
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return DartsTableDialogComponent;
    }();

    DartsTableDialogComponent.ɵfac = function DartsTableDialogComponent_Factory(t) {
      return new (t || DartsTableDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    DartsTableDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DartsTableDialogComponent,
      selectors: [["ng-component"]],
      decls: 62,
      vars: 1,
      consts: [[1, "dialog-container", "darts-table-container"], [1, "body-2", 3, "click"], ["viewBox", "0 0 600 600"], ["stroke", "#000", "stroke-width", "28", "ry", "255.21392", "rx", "255.21392", "id", "svg_1", "cy", "299.99999", "cx", "300", "opacity", "NaN", "fill", "#ffffaa"], ["stroke", "#000", "stroke-width", "5", "fill-opacity", "0", "ry", "234.85655", "rx", "234.85655", "id", "svg_44", "cy", "299.99999", "cx", "300.00001", "opacity", "NaN", "fill", "#ffffaa"], ["stroke", "#000", "stroke-width", "14", "ry", "17.42588", "rx", "17.42588", "id", "svg_2", "cy", "300", "cx", "300", "opacity", "NaN", "fill", "#ffffff"], ["transform", "rotate(-9 300 300)", "id", "svg_7", "y2", "543.61446", "x2", "300", "y1", "56.38556", "x1", "300", "stroke-width", "5", "stroke", "#000", "fill", "none"], ["transform", "rotate(27 300 300)", "id", "svg_8", "y2", "543.61446", "x2", "300", "y1", "56.38556", "x1", "300", "stroke-width", "5", "stroke", "#000", "fill", "none"], ["transform", "rotate(63 300.741 300)", "id", "svg_9", "y2", "543.61443", "x2", "300.74077", "y1", "56.38553", "x1", "300.74077", "stroke-width", "5", "stroke", "#000", "fill", "none"], ["transform", "rotate(135 300 300)", "id", "svg_10", "y2", "543.61445", "x2", "300.00003", "y1", "56.38555", "x1", "300.00003", "stroke-width", "5", "stroke", "#000", "fill", "none"], ["transform", "rotate(99 300 300)", "id", "svg_11", "y2", "543.61444", "x2", "300.00002", "y1", "56.38554", "x1", "300.00002", "stroke-width", "5", "stroke", "#000", "fill", "none"], ["transform", "rotate(45 300 300)", "stroke", "#000", "id", "svg_16", "y2", "543.61444", "x2", "300.00002", "y1", "56.38554", "x1", "300.00002", "stroke-width", "5", "fill", "none"], ["transform", "rotate(9 300 300)", "id", "svg_17", "y2", "543.61446", "x2", "300.00001", "y1", "56.38556", "x1", "300.00001", "stroke-width", "5", "stroke", "#000", "fill", "none"], ["transform", "rotate(82 300.741 300)", "id", "svg_18", "y2", "543.61443", "x2", "300.74077", "y1", "56.38553", "x1", "300.74077", "stroke-width", "5", "stroke", "#000", "fill", "none"], ["transform", "rotate(117 300 300)", "id", "svg_19", "y2", "543.61444", "x2", "300.00002", "y1", "56.38554", "x1", "300.00002", "stroke-width", "5", "stroke", "#000", "fill", "none"], ["transform", "rotate(153 300 300)", "id", "svg_20", "y2", "543.61445", "x2", "300.00003", "y1", "56.38555", "x1", "300.00003", "stroke-width", "5", "stroke", "#000", "fill", "none"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_21", "y", "101.43315", "x", "282.14266", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_22", "y", "112.14756", "x", "353.57205", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_23", "y", "142.1479", "x", "403.57262", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_24", "y", "186.43412", "x", "459.28754", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_25", "y", "245.72052", "x", "479.28777", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_26", "y", "312.14984", "x", "500.71658", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_27", "y", "374.29341", "x", "480.71635", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_28", "y", "430.72262", "x", "452.1446", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_29", "y", "477.15173", "x", "417.1442", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_30", "y", "506.43778", "x", "347.1434", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_31", "y", "518.58076", "x", "289.2856", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_32", "y", "508.58065", "x", "216.42762", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_33", "y", "477.15172", "x", "169.28422", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_34", "y", "431.43692", "x", "110.71213", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_35", "y", "372.15053", "x", "90.71191", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_36", "y", "306.43548", "x", "72.14025", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_37", "y", "244.29192", "x", "83.56896", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_38", "y", "185.71982", "x", "122.14082", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_39", "y", "140.71931", "x", "162.14128", "stroke", "#000", "fill", "#000000"], ["font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_40", "y", "112.14755", "x", "227.85631", "stroke", "#000", "fill", "#000000"], ["stroke-opacity", "0", "font-style", "normal", "font-weight", "bold", 0, "xml", "space", "preserve", "text-anchor", "start", "font-family", "sans-serif", "font-size", "30", "id", "svg_41", "y", "310.35406", "x", "289.21193", "stroke", "#0f0f00", "fill", "#ffffff"], ["stroke", "#000", "stroke-width", "5", "fill-opacity", "0", "ry", "148.78414", "rx", "148.78414", "id", "svg_46", "cy", "299.99999", "cx", "300", "opacity", "NaN", "fill", "#ffffaa"], ["stroke", "#000", "stroke-width", "5", "fill-opacity", "0", "ry", "139.85547", "rx", "139.85547", "id", "svg_47", "cy", "299.99998", "cx", "300.00001", "opacity", "NaN", "fill", "#ffffaa"], [3, "class", "primary", "secondary", 4, "ngFor", "ngForOf"]],
      template: function DartsTableDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-dialog-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DartsTableDialogComponent_Template_mat_dialog_content_click_1_listener() {
            return ctx.close();
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.field);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".darts-table-container[_ngcontent-%COMP%]   .clip[_ngcontent-%COMP%], .darts-table-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: calc(100vw - 40px);\n  height: calc(100vw - 40px);\n  position: absolute;\n  top: 20px;\n  left: 20px;\n}\n.darts-table-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: grayscale(60%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .clip[_ngcontent-%COMP%] {\n  background: #f0280f;\n  opacity: 0.6;\n}\n.darts-table-container[_ngcontent-%COMP%]   .clip.primary[_ngcontent-%COMP%] {\n  background: #1133ee;\n}\n.darts-table-container[_ngcontent-%COMP%]   .clip.secondary[_ngcontent-%COMP%] {\n  background: #d3e531;\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-2[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(50% 53.5%, 44% 89%, 56% 89%);\n          clip-path: polygon(50% 53.5%, 44% 89%, 56% 89%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-16[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(51.2% 53.7%, 56% 89%, 68% 85%);\n          clip-path: polygon(51.2% 53.7%, 56% 89%, 68% 85%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-1[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(52.2% 53%, 68% 85%, 78% 78%);\n          clip-path: polygon(52.2% 53%, 68% 85%, 78% 78%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-14[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(52.8% 52%, 78% 78%, 85% 68%);\n          clip-path: polygon(52.8% 52%, 78% 78%, 85% 68%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-9[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(53% 51%, 85% 68%, 89% 56%);\n          clip-path: polygon(53% 51%, 85% 68%, 89% 56%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-5[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(53% 50%, 89% 56%, 89% 44%);\n          clip-path: polygon(53% 50%, 89% 56%, 89% 44%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-12[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(53% 49%, 89% 45%, 85% 32%);\n          clip-path: polygon(53% 49%, 89% 45%, 85% 32%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-3[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(53% 47.9%, 86% 32%, 78% 22%);\n          clip-path: polygon(53% 47.9%, 86% 32%, 78% 22%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-17[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(52.2% 47%, 78.3% 22%, 67.2% 15%);\n          clip-path: polygon(52.2% 47%, 78.3% 22%, 67.2% 15%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-0[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(51% 47%, 68% 15%, 56% 11%);\n          clip-path: polygon(51% 47%, 68% 15%, 56% 11%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-19[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(50% 47%, 56.5% 11%, 43.2% 11%);\n          clip-path: polygon(50% 47%, 56.5% 11%, 43.2% 11%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-4[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(32% 15%, 49% 47%, 44% 11%);\n          clip-path: polygon(32% 15%, 49% 47%, 44% 11%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-11[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(22% 22%, 47.8% 47%, 32% 15%);\n          clip-path: polygon(22% 22%, 47.8% 47%, 32% 15%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-8[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(15% 32%, 47% 47.8%, 22% 22%);\n          clip-path: polygon(15% 32%, 47% 47.8%, 22% 22%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-13[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(11% 44%, 46.2% 48.8%, 15% 32%);\n          clip-path: polygon(11% 44%, 46.2% 48.8%, 15% 32%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-10[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(11% 56%, 47% 50%, 11% 44%);\n          clip-path: polygon(11% 56%, 47% 50%, 11% 44%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-7[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(15% 68%, 47% 51%, 11% 55%);\n          clip-path: polygon(15% 68%, 47% 51%, 11% 55%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-15[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(22% 78%, 47% 52.2%, 15% 68%);\n          clip-path: polygon(22% 78%, 47% 52.2%, 15% 68%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-6[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(32% 85%, 47.8% 53%, 22% 78%);\n          clip-path: polygon(32% 85%, 47.8% 53%, 22% 78%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-18[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(44% 89%, 49% 53%, 32% 85%);\n          clip-path: polygon(44% 89%, 49% 53%, 32% 85%);\n}\n.darts-table-container[_ngcontent-%COMP%]   .darts-table-field-20[_ngcontent-%COMP%] {\n  -webkit-clip-path: circle(3.7% at 50% 50%);\n          clip-path: circle(3.7% at 50% 50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGFydHMtdGFibGUvRDpcXERldmVsb3BtZW50XFxkYXJ0cy1zY29yZWJvYXJkLW5nL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGRhcnRzLXRhYmxlXFxkYXJ0cy10YWJsZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RhcnRzLXRhYmxlL2RhcnRzLXRhYmxlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQUo7QURHRTtFQUNFLHNCQUFBO0FDREo7QURJRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FESUk7RUFDRSxtQkFBQTtBQ0ZOO0FES0k7RUFDRSxtQkFBQTtBQ0hOO0FET0U7RUFDRSx1REFBQTtVQUFBLCtDQUFBO0FDTEo7QURRRTtFQUNFLHlEQUFBO1VBQUEsaURBQUE7QUNOSjtBRFNFO0VBQ0UsdURBQUE7VUFBQSwrQ0FBQTtBQ1BKO0FEVUU7RUFDRSx1REFBQTtVQUFBLCtDQUFBO0FDUko7QURXRTtFQUNFLHFEQUFBO1VBQUEsNkNBQUE7QUNUSjtBRFlFO0VBQ0UscURBQUE7VUFBQSw2Q0FBQTtBQ1ZKO0FEYUU7RUFDRSxxREFBQTtVQUFBLDZDQUFBO0FDWEo7QURjRTtFQUNFLHVEQUFBO1VBQUEsK0NBQUE7QUNaSjtBRGVFO0VBQ0UsMkRBQUE7VUFBQSxtREFBQTtBQ2JKO0FEZ0JFO0VBQ0UscURBQUE7VUFBQSw2Q0FBQTtBQ2RKO0FEaUJFO0VBQ0UseURBQUE7VUFBQSxpREFBQTtBQ2ZKO0FEa0JFO0VBQ0UscURBQUE7VUFBQSw2Q0FBQTtBQ2hCSjtBRG1CRTtFQUNFLHVEQUFBO1VBQUEsK0NBQUE7QUNqQko7QURvQkU7RUFDRSx1REFBQTtVQUFBLCtDQUFBO0FDbEJKO0FEcUJFO0VBQ0UseURBQUE7VUFBQSxpREFBQTtBQ25CSjtBRHNCRTtFQUNFLHFEQUFBO1VBQUEsNkNBQUE7QUNwQko7QUR1QkU7RUFDRSxxREFBQTtVQUFBLDZDQUFBO0FDckJKO0FEd0JFO0VBQ0UsdURBQUE7VUFBQSwrQ0FBQTtBQ3RCSjtBRHlCRTtFQUNFLHVEQUFBO1VBQUEsK0NBQUE7QUN2Qko7QUQwQkU7RUFDRSxxREFBQTtVQUFBLDZDQUFBO0FDeEJKO0FEMkJFO0VBQ0UsMENBQUE7VUFBQSxrQ0FBQTtBQ3pCSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RhcnRzLXRhYmxlL2RhcnRzLXRhYmxlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXJ0cy10YWJsZS1jb250YWluZXIge1xyXG4gIC5jbGlwLCBzdmcge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0MHB4KTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2dyAtIDQwcHgpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSg2MCUpO1xyXG4gIH1cclxuXHJcbiAgLmNsaXAge1xyXG4gICAgYmFja2dyb3VuZDogI2YwMjgwZjtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuXHJcbiAgICAmLnByaW1hcnkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMTEzM2VlO1xyXG4gICAgfVxyXG5cclxuICAgICYuc2Vjb25kYXJ5IHtcclxuICAgICAgYmFja2dyb3VuZDogI2QzZTUzMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0yIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgNTMuNSUsIDQ0JSA4OSUsIDU2JSA4OSUpO1xyXG4gIH1cclxuXHJcbiAgLmRhcnRzLXRhYmxlLWZpZWxkLTE2IHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MS4yJSA1My43JSwgNTYlIDg5JSwgNjglIDg1JSk7XHJcbiAgfVxyXG5cclxuICAuZGFydHMtdGFibGUtZmllbGQtMSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTIuMiUgNTMlLCA2OCUgODUlLCA3OCUgNzglKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0xNCB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTIuOCUgNTIlLCA3OCUgNzglLCA4NSUgNjglKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC05IHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MyUgNTElLCA4NSUgNjglLCA4OSUgNTYlKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC01IHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MyUgNTAlLCA4OSUgNTYlLCA4OSUgNDQlKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0xMiB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTMlIDQ5JSwgODklIDQ1JSwgODUlIDMyJSk7XHJcbiAgfVxyXG5cclxuICAuZGFydHMtdGFibGUtZmllbGQtMyB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTMlIDQ3LjklLCA4NiUgMzIlLCA3OCUgMjIlKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0xNyB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTIuMiUgNDclLCA3OC4zJSAyMi4wJSwgNjcuMiUgMTUlKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0wIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MSUgNDclLCA2OCUgMTUlLCA1NiUgMTElKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0xOSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDQ3JSwgNTYuNSUgMTElLCA0My4yJSAxMSUpO1xyXG4gIH1cclxuXHJcbiAgLmRhcnRzLXRhYmxlLWZpZWxkLTQge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDMyJSAxNSUsIDQ5JSA0NyUsIDQ0JSAxMSUpO1xyXG4gIH1cclxuXHJcbiAgLmRhcnRzLXRhYmxlLWZpZWxkLTExIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigyMiUgMjIlLCA0Ny44JSA0NyUsIDMyJSAxNSUpO1xyXG4gIH1cclxuXHJcbiAgLmRhcnRzLXRhYmxlLWZpZWxkLTgge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDE1JSAzMiUsIDQ3JSA0Ny44JSwgMjIlIDIyJSk7XHJcbiAgfVxyXG5cclxuICAuZGFydHMtdGFibGUtZmllbGQtMTMge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDExJSA0NCUsIDQ2LjIlIDQ4LjglLCAxNSUgMzIlKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0xMCB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTElIDU2JSwgNDclIDUwJSwgMTElIDQ0JSk7XHJcbiAgfVxyXG5cclxuICAuZGFydHMtdGFibGUtZmllbGQtNyB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTUlIDY4JSwgNDclIDUxJSwgMTElIDU1JSk7XHJcbiAgfVxyXG5cclxuICAuZGFydHMtdGFibGUtZmllbGQtMTUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDIyJSA3OCUsIDQ3JSA1Mi4yJSwgMTUlIDY4JSk7XHJcbiAgfVxyXG5cclxuICAuZGFydHMtdGFibGUtZmllbGQtNiB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMzIlIDg1JSwgNDcuOCUgNTMlLCAyMiUgNzglKTtcclxuICB9XHJcblxyXG4gIC5kYXJ0cy10YWJsZS1maWVsZC0xOCB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNDQlIDg5JSwgNDklIDUzJSwgMzIlIDg1JSk7XHJcbiAgfVxyXG5cclxuICAuZGFydHMtdGFibGUtZmllbGQtMjAge1xyXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMy43JSBhdCA1MCUgNTAlKTtcclxuICB9XHJcbn1cclxuIiwiLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuY2xpcCwgLmRhcnRzLXRhYmxlLWNvbnRhaW5lciBzdmcge1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDQwcHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwdncgLSA0MHB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDIwcHg7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIGltZyB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDYwJSk7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5jbGlwIHtcbiAgYmFja2dyb3VuZDogI2YwMjgwZjtcbiAgb3BhY2l0eTogMC42O1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuY2xpcC5wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogIzExMzNlZTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmNsaXAuc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogI2QzZTUzMTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTIge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDUzLjUlLCA0NCUgODklLCA1NiUgODklKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTE2IHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUxLjIlIDUzLjclLCA1NiUgODklLCA2OCUgODUlKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTEge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTIuMiUgNTMlLCA2OCUgODUlLCA3OCUgNzglKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTE0IHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUyLjglIDUyJSwgNzglIDc4JSwgODUlIDY4JSk7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5kYXJ0cy10YWJsZS1maWVsZC05IHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUzJSA1MSUsIDg1JSA2OCUsIDg5JSA1NiUpO1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuZGFydHMtdGFibGUtZmllbGQtNSB7XG4gIGNsaXAtcGF0aDogcG9seWdvbig1MyUgNTAlLCA4OSUgNTYlLCA4OSUgNDQlKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTEyIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUzJSA0OSUsIDg5JSA0NSUsIDg1JSAzMiUpO1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuZGFydHMtdGFibGUtZmllbGQtMyB7XG4gIGNsaXAtcGF0aDogcG9seWdvbig1MyUgNDcuOSUsIDg2JSAzMiUsIDc4JSAyMiUpO1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuZGFydHMtdGFibGUtZmllbGQtMTcge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTIuMiUgNDclLCA3OC4zJSAyMiUsIDY3LjIlIDE1JSk7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5kYXJ0cy10YWJsZS1maWVsZC0wIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUxJSA0NyUsIDY4JSAxNSUsIDU2JSAxMSUpO1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuZGFydHMtdGFibGUtZmllbGQtMTkge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDQ3JSwgNTYuNSUgMTElLCA0My4yJSAxMSUpO1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuZGFydHMtdGFibGUtZmllbGQtNCB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigzMiUgMTUlLCA0OSUgNDclLCA0NCUgMTElKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTExIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDIyJSAyMiUsIDQ3LjglIDQ3JSwgMzIlIDE1JSk7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5kYXJ0cy10YWJsZS1maWVsZC04IHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDE1JSAzMiUsIDQ3JSA0Ny44JSwgMjIlIDIyJSk7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5kYXJ0cy10YWJsZS1maWVsZC0xMyB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigxMSUgNDQlLCA0Ni4yJSA0OC44JSwgMTUlIDMyJSk7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5kYXJ0cy10YWJsZS1maWVsZC0xMCB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigxMSUgNTYlLCA0NyUgNTAlLCAxMSUgNDQlKTtcbn1cbi5kYXJ0cy10YWJsZS1jb250YWluZXIgLmRhcnRzLXRhYmxlLWZpZWxkLTcge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMTUlIDY4JSwgNDclIDUxJSwgMTElIDU1JSk7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5kYXJ0cy10YWJsZS1maWVsZC0xNSB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigyMiUgNzglLCA0NyUgNTIuMiUsIDE1JSA2OCUpO1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuZGFydHMtdGFibGUtZmllbGQtNiB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigzMiUgODUlLCA0Ny44JSA1MyUsIDIyJSA3OCUpO1xufVxuLmRhcnRzLXRhYmxlLWNvbnRhaW5lciAuZGFydHMtdGFibGUtZmllbGQtMTgge1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNDQlIDg5JSwgNDklIDUzJSwgMzIlIDg1JSk7XG59XG4uZGFydHMtdGFibGUtY29udGFpbmVyIC5kYXJ0cy10YWJsZS1maWVsZC0yMCB7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDMuNyUgYXQgNTAlIDUwJSk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DartsTableDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: 'darts-table-dialog.component.html',
          styleUrls: ['darts-table-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/dialog/dialog.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/dialog/dialog.component.ts ***!
    \**************************************************************/

  /*! exports provided: DialogComponent */

  /***/
  function srcAppSharedComponentsDialogDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function DialogComponent_mat_dialog_content_4_div_3_mat_icon_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function DialogComponent_mat_dialog_content_4_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DialogComponent_mat_dialog_content_4_div_3_mat_icon_3_Template, 2, 0, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r10 = ctx.$implicit;
        var i_r11 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("winner", player_r10.win);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", i_r11 + 1, ". ", player_r10.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", player_r10.win);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](player_r10.score);
      }
    }

    function DialogComponent_mat_dialog_content_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-content", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DialogComponent_mat_dialog_content_4_div_3_Template, 6, 6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.data.content);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.data.players);
      }
    }

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
      vars: 3,
      consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], ["class", "body-2", 4, "ngIf"], ["mat-button", "", 3, "mat-dialog-close"], [1, "body-2"], ["class", "score-line", 3, "winner", 4, "ngFor", "ngForOf"], [1, "score-line"], ["color", "warn", 4, "ngIf"], ["color", "warn"]],
      template: function DialogComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.data.content || !!ctx.data.players.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      styles: [".dialog-container[_ngcontent-%COMP%] {\n  width: 50vw;\n  text-align: center;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-size: 50px;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   .score-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n}\n.dialog-container[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 30px;\n  padding: 0;\n  margin: 0;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxkaWFsb2dcXGRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQUo7QURHRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0RKO0FES0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNISjtBRE1FO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNKSjtBRE9FO0VBQ0UsbUJBQUE7QUNMSjtBRFFFO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctY29udGFpbmVyIHtcclxuICB3aWR0aDogNTB2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5zdWJ0aXRsZS0xIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLnNjb3JlLWxpbmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5wbGF5ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBtYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIG1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XHJcbiAgfVxyXG59XHJcbiIsIi5kaWFsb2ctY29udGFpbmVyIHtcbiAgd2lkdGg6IDUwdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1pY29uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmRpYWxvZy1jb250YWluZXIgLnN1YnRpdGxlLTEge1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmRpYWxvZy1jb250YWluZXIgLnNjb3JlLWxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uZGlhbG9nLWNvbnRhaW5lciAucGxheWVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XG59Il19 */"]
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
  "./src/app/shared/components/game-rules/game-rules.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/game-rules/game-rules.component.ts ***!
    \**********************************************************************/

  /*! exports provided: GameRulesComponent */

  /***/
  function srcAppSharedComponentsGameRulesGameRulesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameRulesComponent", function () {
      return GameRulesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["*"];

    var GameRulesComponent = function GameRulesComponent() {
      _classCallCheck(this, GameRulesComponent);
    };

    GameRulesComponent.ɵfac = function GameRulesComponent_Factory(t) {
      return new (t || GameRulesComponent)();
    };

    GameRulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameRulesComponent,
      selectors: [["app-game-rules"]],
      ngContentSelectors: _c0,
      decls: 6,
      vars: 0,
      consts: [["id", "rules"]],
      template: function GameRulesComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      styles: ["#rules[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n#rules[_ngcontent-%COMP%]   details[_ngcontent-%COMP%] {\n  transition: all 400ms ease-in-out;\n  overflow: hidden;\n  padding: 5px;\n}\n#rules[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:visited, #rules[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  border: none;\n  outline: none;\n}\n#rules[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-details-marker {\n  display: none;\n}\n#rules[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  white-space: pre-line;\n  word-break: break-word;\n  padding: 12px;\n}\n#rules[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]:not([open]) {\n  height: 1.25em;\n}\n#rules[_ngcontent-%COMP%]   details[open][_ngcontent-%COMP%] {\n  height: 11em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS1ydWxlcy9EOlxcRGV2ZWxvcG1lbnRcXGRhcnRzLXNjb3JlYm9hcmQtbmcvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZ2FtZS1ydWxlc1xcZ2FtZS1ydWxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS1ydWxlcy9nYW1lLXJ1bGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGO0FEQ0U7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0NOO0FERUk7RUFDRSxhQUFBO0FDQU47QURHSTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDRE47QURLRTtFQUNFLGNBQUE7QUNISjtBRE1FO0VBQ0UsWUFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS1ydWxlcy9nYW1lLXJ1bGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3J1bGVzIHtcclxuICBtYXJnaW46IDEwcHggMDtcclxuXHJcbiAgZGV0YWlscyB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgIDp2aXNpdGVkLCA6Zm9jdXMge1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgOjotd2Via2l0LWRldGFpbHMtbWFya2VyIHtcclxuICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZXRhaWxzOm5vdChbb3Blbl0pIHtcclxuICAgIGhlaWdodDogMS4yNWVtO1xyXG4gIH1cclxuXHJcbiAgZGV0YWlsc1tvcGVuXSB7XHJcbiAgICBoZWlnaHQ6IDExZW07XHJcbiAgfVxyXG59XHJcbiIsIiNydWxlcyB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuI3J1bGVzIGRldGFpbHMge1xuICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZS1pbi1vdXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDVweDtcbn1cbiNydWxlcyBkZXRhaWxzIDp2aXNpdGVkLCAjcnVsZXMgZGV0YWlscyA6Zm9jdXMge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4jcnVsZXMgZGV0YWlscyA6Oi13ZWJraXQtZGV0YWlscy1tYXJrZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuI3J1bGVzIGRldGFpbHMgcCB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgcGFkZGluZzogMTJweDtcbn1cbiNydWxlcyBkZXRhaWxzOm5vdChbb3Blbl0pIHtcbiAgaGVpZ2h0OiAxLjI1ZW07XG59XG4jcnVsZXMgZGV0YWlsc1tvcGVuXSB7XG4gIGhlaWdodDogMTFlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameRulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game-rules',
          templateUrl: './game-rules.component.html',
          styleUrls: ['./game-rules.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/game-toolbar/game-toolbar.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/game-toolbar/game-toolbar.component.ts ***!
    \**************************************************************************/

  /*! exports provided: GameToolbarComponent */

  /***/
  function srcAppSharedComponentsGameToolbarGameToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var GameToolbarComponent =
    /*#__PURE__*/
    function () {
      function GameToolbarComponent(route, dialogService) {
        _classCallCheck(this, GameToolbarComponent);

        this.route = route;
        this.dialogService = dialogService;
      }

      _createClass(GameToolbarComponent, [{
        key: "quit",
        value: function quit() {
          var _this57 = this;

          this.showConfirmation('Are you sure you want to navigate away from this page?', function () {
            _this57.route.navigate(['/']);

            _this57.playground.game.resetScore();

            _this57.playground.multiplier = 1;
            _this57.playground.extraEndingMsg = '';
          });
        }
      }, {
        key: "newGame",
        value: function newGame() {
          var _this58 = this;

          this.showConfirmation('Are you sure you want to start a new game?', function () {
            _this58.playground.newGame(true);
          });
        }
      }, {
        key: "showSettings",
        value: function showSettings() {
          var _this59 = this;

          this.showConfirmation('Are you sure you want to navigate to the settings page?', function () {
            _this59.playground.reset();

            _this59.playground.settingsOpen = true;
          });
        }
      }, {
        key: "undo",
        value: function undo() {
          this.playground.undo();
        }
      }, {
        key: "showTable",
        value: function showTable() {
          var enabledFields = [];
          var primaryFields = [];
          var secondaryFields = [];

          for (var i = 0; i <= 20; i++) {
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
      }, {
        key: "getInfo",
        value: function getInfo() {
          return this.info || this.info === 0 ? this.info : this.getRound();
        }
      }, {
        key: "showConfirmation",
        value: function showConfirmation(content, callback) {
          if (this.playground.gameHistory.length) {
            this.dialogService.openConfirmDialog('Confirmation', content).afterClosed().subscribe(function (data) {
              if (data) {
                callback();
              }
            });
          } else {
            callback();
          }
        }
      }, {
        key: "getRound",
        value: function getRound() {
          var round = this.playground.game.round;
          return this.reversRound ? this.reversRound - round : round + 1;
        }
      }]);

      return GameToolbarComponent;
    }();

    GameToolbarComponent.ɵfac = function GameToolbarComponent_Factory(t) {
      return new (t || GameToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]));
    };

    GameToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameToolbarComponent,
      selectors: [["app-game-toolbar"]],
      inputs: {
        playground: "playground",
        reversRound: "reversRound",
        info: "info"
      },
      decls: 17,
      vars: 1,
      consts: [[1, "toolbar"], [1, "buttons"], ["mat-raised-button", "", 3, "click"], [1, "round-info", 3, "click"], [1, "clear"]],
      template: function GameToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_2_listener() {
            return ctx.quit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_5_listener() {
            return ctx.newGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_8_listener() {
            return ctx.showSettings();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_11_listener() {
            return ctx.undo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "undo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_div_click_14_listener() {
            return ctx.showTable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 4);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getInfo(), ".");
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      styles: [".toolbar[_ngcontent-%COMP%] {\n  display: flex;\n}\n.toolbar[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-evenly;\n}\n.toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: calc(50% - 10px);\n  height: calc(50% - 10px);\n  margin: 0;\n}\n.toolbar[_ngcontent-%COMP%]   .round-info[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  width: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 90px;\n  border-radius: 8px;\n  margin: 5px 5px 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10b29sYmFyL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxnYW1lLXRvb2xiYXJcXGdhbWUtdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10b29sYmFyL2dhbWUtdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNDSjtBREVFO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLFNBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2dhbWUtdG9vbGJhci9nYW1lLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgLmJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgIGhlaWdodDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5yb3VuZC1pbmZvIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbjogNXB4IDVweCA1cHggMDtcclxuICB9XHJcbn1cclxuIiwiLnRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnRvb2xiYXIgLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi50b29sYmFyIGJ1dHRvbiB7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuICBoZWlnaHQ6IGNhbGMoNTAlIC0gMTBweCk7XG4gIG1hcmdpbjogMDtcbn1cbi50b29sYmFyIC5yb3VuZC1pbmZvIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogNXB4IDVweCA1cHggMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game-toolbar',
          templateUrl: './game-toolbar.component.html',
          styleUrls: ['./game-toolbar.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]
        }];
      }, {
        playground: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        reversRound: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        info: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/number-plate/number-plate.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/number-plate/number-plate.component.ts ***!
    \**************************************************************************/

  /*! exports provided: NumberPlateComponent */

  /***/
  function srcAppSharedComponentsNumberPlateNumberPlateComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function NumberPlateComponent_button_1_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.playground.getFieldIcon(i_r19 - 1));
      }
    }

    function NumberPlateComponent_button_1_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.playground.getFieldNote(i_r19 - 1));
      }
    }

    function NumberPlateComponent_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var i_r19 = ctx.$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.throwNumber(i_r19 - 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NumberPlateComponent_button_1_mat_icon_2_Template, 2, 1, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NumberPlateComponent_button_1_p_3_Template, 2, 1, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r19 = ctx.$implicit;

        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r16.getNumberColor(i_r19 - 1))("disabled", ctx_r16.isNumberDisabled(i_r19 - 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r19, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.playground.getFieldIcon(i_r19 - 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.playground.getFieldNote(i_r19 - 1));
      }
    }

    function NumberPlateComponent_mat_icon_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.playground.getFieldIcon(20));
      }
    }

    function NumberPlateComponent_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.playground.getFieldNote(20));
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
      }, {
        key: "getNumberColor",
        value: function getNumberColor(fieldIndex) {
          if (this.playground.isPrimaryField(fieldIndex)) {
            return 'primary';
          } else if (this.playground.isSecondaryField(fieldIndex)) {
            return 'accent';
          }

          return '';
        }
      }, {
        key: "isNumberDisabled",
        value: function isNumberDisabled(fieldIndex) {
          return !this.playground.isFieldEnabled(fieldIndex) && !this.getNumberColor(fieldIndex);
        }
      }, {
        key: "throwNumber",
        value: function throwNumber(fieldIndex) {
          this.playground.throwNumber([this.playground.isFieldEnabled(fieldIndex) ? _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex) : 0, _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex)]);
        }
      }]);

      return NumberPlateComponent;
    }();

    NumberPlateComponent.ɵfac = function NumberPlateComponent_Factory(t) {
      return new (t || NumberPlateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]));
    };

    NumberPlateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NumberPlateComponent,
      selectors: [["app-number-plate"]],
      inputs: {
        playground: "playground"
      },
      decls: 14,
      vars: 11,
      consts: [[1, "side-right"], ["mat-raised-button", "", "class", "number", 3, "color", "disabled", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "number", 3, "color", "disabled", "click"], [4, "ngIf"], ["class", "field-note", 4, "ngIf"], ["mat-raised-button", "", 1, "number", 3, "disabled", "click"], [1, "field-note"]],
      template: function NumberPlateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NumberPlateComponent_button_1_Template, 4, 5, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_2_listener() {
            return ctx.throwNumber(20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Bull ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NumberPlateComponent_mat_icon_4_Template, 2, 1, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NumberPlateComponent_p_5_Template, 2, 1, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_6_listener() {
            return ctx.playground.doublePoint();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Double");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_8_listener() {
            return ctx.playground.triplePoint();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Triple");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_10_listener() {
            return ctx.playground.skip();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_12_listener() {
            return ctx.playground.throwNumber([0, 0]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
      styles: [".number[_ngcontent-%COMP%] {\n  float: left;\n  margin: 0.1vw;\n  font-size: calc(10px + 0.8vw + 0.8vh);\n  height: 19.4vh;\n  width: 13.7vw;\n}\n.number[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 5px;\n  font-size: 30px;\n}\n.number[_ngcontent-%COMP%]   .field-note[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 7px;\n  font-size: 12px;\n  width: 48px;\n  overflow: hidden;\n  word-break: normal;\n  white-space: pre-line;\n  line-height: 16px;\n  text-align: right;\n}\n.number[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxudW1iZXItcGxhdGVcXG51bWJlci1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlL251bWJlci1wbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURJQTtFQUNFLFlBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL251bWJlci1wbGF0ZS9udW1iZXItcGxhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubnVtYmVyIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDAuMXZ3O1xyXG4gIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMC44dncgKyAwLjh2aCk7XHJcbiAgaGVpZ2h0OiAxOS40dmg7XHJcbiAgd2lkdGg6IDEzLjd2dztcclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZpZWxkLW5vdGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubnVtYmVyOmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuIiwiLm51bWJlciB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAuMXZ3O1xuICBmb250LXNpemU6IGNhbGMoMTBweCArIDAuOHZ3ICsgMC44dmgpO1xuICBoZWlnaHQ6IDE5LjR2aDtcbiAgd2lkdGg6IDEzLjd2dztcbn1cbi5udW1iZXIgbWF0LWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4ubnVtYmVyIC5maWVsZC1ub3RlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiA3cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5udW1iZXI6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberPlateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-number-plate',
          templateUrl: './number-plate.component.html',
          styleUrls: ['./number-plate.component.scss']
        }]
      }], function () {
        return [{
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
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
  "./src/app/shared/components/player-score/player-score.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/player-score/player-score.component.ts ***!
    \**************************************************************************/

  /*! exports provided: PlayerScoreComponent */

  /***/
  function srcAppSharedComponentsPlayerScorePlayerScoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerScoreComponent", function () {
      return PlayerScoreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function PlayerScoreComponent_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "offline_bolt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PlayerScoreComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
      }
    }

    function PlayerScoreComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
      }
    }

    function PlayerScoreComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.player.score);
      }
    }

    var _c0 = ["*"];

    var PlayerScoreComponent = function PlayerScoreComponent() {
      _classCallCheck(this, PlayerScoreComponent);

      this.hasContent = true;
      this.scoreDisplayed = true;
      this.highlighted = false;
    };

    PlayerScoreComponent.ɵfac = function PlayerScoreComponent_Factory(t) {
      return new (t || PlayerScoreComponent)();
    };

    PlayerScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlayerScoreComponent,
      selectors: [["app-player-score"]],
      inputs: {
        player: "player",
        hasContent: "hasContent",
        scoreDisplayed: "scoreDisplayed",
        highlighted: "highlighted"
      },
      ngContentSelectors: _c0,
      decls: 19,
      vars: 9,
      consts: [[1, "player_info"], [1, "name"], [4, "ngIf"], [1, "shoots"], [1, "shoot"], [1, "shoot", "total"], [1, "clear"], ["class", "line", 4, "ngIf"], ["class", "score", 4, "ngIf"], [1, "line"], [1, "score"]],
      template: function PlayerScoreComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.highlighted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.player.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!ctx.player["throws"][0] ? "-" : ctx.player["throws"][0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!ctx.player["throws"][1] ? "-" : ctx.player["throws"][1]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!ctx.player["throws"][2] ? "-" : ctx.player["throws"][2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!ctx.player.getThrowsTotal() ? "0" : ctx.player.getThrowsTotal());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasContent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scoreDisplayed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scoreDisplayed);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]],
      styles: [".player_info {\n  padding: 1vw;\n}\n.player_info .line {\n  margin: 1vw 0;\n}\n.player_info .small {\n  font-size: calc(0.6vw + 0.5vh);\n  font-weight: bold;\n}\n.player_info .name {\n  font-size: calc(5px + 1vw);\n  display: flex;\n  align-items: center;\n}\n.player_info .name mat-icon {\n  margin-right: 10px;\n  font-size: calc(20px + 1vw);\n}\n.player_info .shoots {\n  display: flex;\n  justify-content: flex-end;\n}\n.player_info .shoots .shoot {\n  margin: 0.1vw;\n  border-radius: 0.5vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 3vw;\n  height: 3vw;\n  font-size: calc(6px + 1vw);\n}\n.player_info .shoots .shoot.total {\n  margin-left: 10px;\n}\n.player_info .score {\n  font-size: 3.2vw;\n  letter-spacing: 0.5vw;\n  font-weight: bold;\n  float: right;\n}\n.player_info .score label {\n  font-size: 1vw;\n  letter-spacing: 0.2vw;\n}\n.player_info .note {\n  font-size: 2vw;\n  margin-right: 10px;\n  float: right;\n}\n.player_info .note label {\n  font-size: 1.5vw;\n}\n.player_info .field-set {\n  display: flex;\n  flex-flow: row wrap;\n}\n.player_info .field {\n  font-size: calc(0.7vw + 0.7vh);\n  width: 70px;\n  opacity: 0.4;\n}\n.player_info .field.highlighted, .player_info .field.active {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNjb3JlL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxwbGF5ZXItc2NvcmVcXHBsYXllci1zY29yZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNjb3JlL3BsYXllci1zY29yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtBQ0NKO0FERUU7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FDQUo7QURHRTtFQUNFLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDREo7QURFSTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7QUNBTjtBRElFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDRko7QURJSTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ0ZOO0FESU07RUFDRSxpQkFBQTtBQ0ZSO0FET0U7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDTEo7QURPSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ0xOO0FEU0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDUEo7QURTSTtFQUNFLGdCQUFBO0FDUE47QURVRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ1JKO0FEVUU7RUFDRSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDUko7QURVSTtFQUNFLFVBQUE7QUNSTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BsYXllci1zY29yZS9wbGF5ZXItc2NvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheWVyX2luZm8ge1xyXG4gIHBhZGRpbmc6IDF2dztcclxuXHJcbiAgLmxpbmUge1xyXG4gICAgbWFyZ2luOiAxdncgMDtcclxuICB9XHJcblxyXG4gIC5zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IGNhbGMoMC42dncgKyAwLjV2aCk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogY2FsYyg1cHggKyAxdncpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAxdncpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNob290cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAuc2hvb3Qge1xyXG4gICAgICBtYXJnaW46IDAuMXZ3O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjV2dztcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAzdnc7XHJcbiAgICAgIGhlaWdodDogM3Z3O1xyXG4gICAgICBmb250LXNpemU6IGNhbGMoNnB4ICsgMXZ3KTtcclxuXHJcbiAgICAgICYudG90YWwge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2NvcmUge1xyXG4gICAgZm9udC1zaXplOiAzLjJ2dztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjV2dztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJ2dztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ub3RlIHtcclxuICAgIGZvbnQtc2l6ZTogMi4wdnc7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZmllbGQtc2V0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIH1cclxuICAuZmllbGQge1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDAuN3Z3ICsgMC43dmgpO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcblxyXG4gICAgJi5oaWdobGlnaHRlZCwgJi5hY3RpdmUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucGxheWVyX2luZm8ge1xuICBwYWRkaW5nOiAxdnc7XG59XG4ucGxheWVyX2luZm8gLmxpbmUge1xuICBtYXJnaW46IDF2dyAwO1xufVxuLnBsYXllcl9pbmZvIC5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogY2FsYygwLjZ2dyArIDAuNXZoKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucGxheWVyX2luZm8gLm5hbWUge1xuICBmb250LXNpemU6IGNhbGMoNXB4ICsgMXZ3KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wbGF5ZXJfaW5mbyAubmFtZSBtYXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAxdncpO1xufVxuLnBsYXllcl9pbmZvIC5zaG9vdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnBsYXllcl9pbmZvIC5zaG9vdHMgLnNob290IHtcbiAgbWFyZ2luOiAwLjF2dztcbiAgYm9yZGVyLXJhZGl1czogMC41dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogM3Z3O1xuICBoZWlnaHQ6IDN2dztcbiAgZm9udC1zaXplOiBjYWxjKDZweCArIDF2dyk7XG59XG4ucGxheWVyX2luZm8gLnNob290cyAuc2hvb3QudG90YWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5wbGF5ZXJfaW5mbyAuc2NvcmUge1xuICBmb250LXNpemU6IDMuMnZ3O1xuICBsZXR0ZXItc3BhY2luZzogMC41dnc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbG9hdDogcmlnaHQ7XG59XG4ucGxheWVyX2luZm8gLnNjb3JlIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxdnc7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJ2dztcbn1cbi5wbGF5ZXJfaW5mbyAubm90ZSB7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5wbGF5ZXJfaW5mbyAubm90ZSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS41dnc7XG59XG4ucGxheWVyX2luZm8gLmZpZWxkLXNldCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG59XG4ucGxheWVyX2luZm8gLmZpZWxkIHtcbiAgZm9udC1zaXplOiBjYWxjKDAuN3Z3ICsgMC43dmgpO1xuICB3aWR0aDogNzBweDtcbiAgb3BhY2l0eTogMC40O1xufVxuLnBsYXllcl9pbmZvIC5maWVsZC5oaWdobGlnaHRlZCwgLnBsYXllcl9pbmZvIC5maWVsZC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerScoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-player-score',
          templateUrl: './player-score.component.html',
          styleUrls: ['./player-score.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, {
        player: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hasContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scoreDisplayed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        highlighted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/player-settings/player-settings.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/shared/components/player-settings/player-settings.component.ts ***!
    \********************************************************************************/

  /*! exports provided: PlayerSettingsComponent */

  /***/
  function srcAppSharedComponentsPlayerSettingsPlayerSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerSettingsComponent", function () {
      return PlayerSettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function PlayerSettingsComponent_mat_option_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r30, " ");
      }
    }

    function PlayerSettingsComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerSettingsComponent_div_13_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var player_r31 = ctx.$implicit;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.playground.removePlayer(player_r31);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "remove_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r31.name);
      }
    }

    var PlayerSettingsComponent =
    /*#__PURE__*/
    function () {
      function PlayerSettingsComponent(application) {
        _classCallCheck(this, PlayerSettingsComponent);

        this.application = application;
        this.storedPlayers = [];
        this.storedPlayers = this.application.getStoredPlayers();
      }

      _createClass(PlayerSettingsComponent, [{
        key: "getOptions",
        value: function getOptions() {
          var _this60 = this;

          return this.storedPlayers.filter(function (o) {
            return _this60.playground.game.players.map(function (p) {
              return p.name;
            }).indexOf(o) === -1;
          });
        }
      }, {
        key: "addPlayer",
        value: function addPlayer(playerNameInput) {
          this.playground.addPlayer(playerNameInput);
          this.storedPlayers = this.application.getStoredPlayers();
        }
      }, {
        key: "playerSelected",
        value: function playerSelected(event, playerNameInput) {
          this.playground.addPlayer(event.option);
          this.storedPlayers = this.application.getStoredPlayers();
          playerNameInput.value = '';
          playerNameInput.blur();
        }
      }]);

      return PlayerSettingsComponent;
    }();

    PlayerSettingsComponent.ɵfac = function PlayerSettingsComponent_Factory(t) {
      return new (t || PlayerSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationStateService"]));
    };

    PlayerSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Player name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function PlayerSettingsComponent_Template_mat_autocomplete_optionSelected_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return ctx.playerSelected($event, _r26);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PlayerSettingsComponent_mat_option_8_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerSettingsComponent_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return ctx.addPlayer(_r26);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "add_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlayerSettingsComponent_div_13_Template, 6, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playground.canAddPlayer())("matAutocomplete", _r27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getOptions());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playground.canAddPlayer());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.playground.game.players);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]],
      styles: [".add-player[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.player-table[_ngcontent-%COMP%] {\n  width: 60.8vw;\n}\n\n.player-table[_ngcontent-%COMP%]   .player-row[_ngcontent-%COMP%] {\n  height: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n  font-weight: bold;\n  border-radius: 6px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNldHRpbmdzL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxwbGF5ZXItc2V0dGluZ3NcXHBsYXllci1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNldHRpbmdzL3BsYXllci1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FEQUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNldHRpbmdzL3BsYXllci1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtcGxheWVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucGxheWVyLXRhYmxlICB7XHJcbiAgd2lkdGg6IDYwLjh2dztcclxuICAucGxheWVyLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG59XHJcbiIsIi5hZGQtcGxheWVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnBsYXllci10YWJsZSB7XG4gIHdpZHRoOiA2MC44dnc7XG59XG4ucGxheWVyLXRhYmxlIC5wbGF5ZXItcm93IHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-player-settings',
          templateUrl: './player-settings.component.html',
          styleUrls: ['./player-settings.component.scss']
        }]
      }], function () {
        return [{
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationStateService"]
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
  "./src/app/shared/components/settings/settings.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/components/settings/settings.component.ts ***!
    \******************************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppSharedComponentsSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_game_rules_game_rules_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~components/game-rules/game-rules.component */
    "./src/app/shared/components/game-rules/game-rules.component.ts");
    /* harmony import */


    var _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ~components/player-settings/player-settings.component */
    "./src/app/shared/components/player-settings/player-settings.component.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var _c0 = ["*"];

    var SettingsComponent = function SettingsComponent() {
      _classCallCheck(this, SettingsComponent);
    };

    SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)();
    };

    SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["app-settings"]],
      inputs: {
        playground: "playground",
        title: "title",
        rules: "rules"
      },
      ngContentSelectors: _c0,
      decls: 15,
      vars: 3,
      consts: [[1, "settings"], [3, "playground"], ["mat-raised-button", "", 1, "button", "big", 3, "click"]],
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_11_listener() {
            return ctx.playground.newGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_13_listener() {
            return ctx.playground.quit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.rules);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx.playground);
        }
      },
      directives: [_components_game_rules_game_rules_component__WEBPACK_IMPORTED_MODULE_1__["GameRulesComponent"], _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_2__["PlayerSettingsComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
      styles: [".settings {\n  padding: 2vh 2vw;\n}\n.settings h2 {\n  display: flex;\n  align-items: center;\n}\n.settings mat-divider {\n  clear: both;\n  margin: 5px 0;\n}\n.settings .field-set {\n  display: flex;\n  justify-content: space-between;\n}\n.settings .button, .settings mat-form-field {\n  margin: 3px;\n  height: 45px;\n}\n.settings .button.big, .settings mat-form-field.big {\n  width: 30.4vw;\n}\n.settings .button.medium, .settings mat-form-field.medium {\n  width: 20.2vw;\n}\n.settings .button.shortmedium, .settings mat-form-field.shortmedium {\n  width: 15vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2V0dGluZ3MvRDpcXERldmVsb3BtZW50XFxkYXJ0cy1zY29yZWJvYXJkLW5nL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHNldHRpbmdzXFxzZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNBSjtBREdFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDREo7QURJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRko7QURJSTtFQUNFLGFBQUE7QUNGTjtBREtJO0VBQ0UsYUFBQTtBQ0hOO0FETUk7RUFDRSxXQUFBO0FDSk4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR0aW5ncyB7XHJcbiAgcGFkZGluZzogMnZoIDJ2dztcclxuXHJcbiAgaDIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBtYXQtZGl2aWRlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgfVxyXG5cclxuICAuZmllbGQtc2V0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLCBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuXHJcbiAgICAmLmJpZyB7XHJcbiAgICAgIHdpZHRoOiAzMC40dnc7XHJcbiAgICB9XHJcblxyXG4gICAgJi5tZWRpdW0ge1xyXG4gICAgICB3aWR0aDogMjAuMnZ3O1xyXG4gICAgfVxyXG5cclxuICAgICYuc2hvcnRtZWRpdW0ge1xyXG4gICAgICB3aWR0aDogMTV2dztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnNldHRpbmdzIHtcbiAgcGFkZGluZzogMnZoIDJ2dztcbn1cbi5zZXR0aW5ncyBoMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2V0dGluZ3MgbWF0LWRpdmlkZXIge1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luOiA1cHggMDtcbn1cbi5zZXR0aW5ncyAuZmllbGQtc2V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnNldHRpbmdzIC5idXR0b24sIC5zZXR0aW5ncyBtYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogM3B4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG4uc2V0dGluZ3MgLmJ1dHRvbi5iaWcsIC5zZXR0aW5ncyBtYXQtZm9ybS1maWVsZC5iaWcge1xuICB3aWR0aDogMzAuNHZ3O1xufVxuLnNldHRpbmdzIC5idXR0b24ubWVkaXVtLCAuc2V0dGluZ3MgbWF0LWZvcm0tZmllbGQubWVkaXVtIHtcbiAgd2lkdGg6IDIwLjJ2dztcbn1cbi5zZXR0aW5ncyAuYnV0dG9uLnNob3J0bWVkaXVtLCAuc2V0dGluZ3MgbWF0LWZvcm0tZmllbGQuc2hvcnRtZWRpdW0ge1xuICB3aWR0aDogMTV2dztcbn0iXX0= */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-settings',
          templateUrl: './settings.component.html',
          styleUrls: ['./settings.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], null, {
        playground: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rules: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/models/application-settings.model.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/models/application-settings.model.ts ***!
    \*************************************************************/

  /*! exports provided: ApplicationSettings */

  /***/
  function srcAppSharedModelsApplicationSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationSettings", function () {
      return ApplicationSettings;
    });

    var ApplicationSettings = function ApplicationSettings() {
      _classCallCheck(this, ApplicationSettings);

      this.darkTheme = 0;
    };
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
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        _classCallCheck(this, Player);

        this.id = id;
        this.name = name;
        this.score = 0;
        this["throws"] = [];
        this.win = false;
        this.winDateTime = 0;
        this.first = true;
        this.life = 1;
      }

      _createClass(Player, [{
        key: "setWin",
        value: function setWin() {
          var win = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          this.win = win;
          this.winDateTime = win ? new Date().getTime() : 0;
        }
      }, {
        key: "getThrowsTotal",
        value: function getThrowsTotal() {
          return this["throws"].reduce(function (a, b) {
            return a + b;
          }, 0);
        }
      }, {
        key: "addThrowHistory",
        value: function addThrowHistory(thr) {
          this.throwsHistory.push(thr);
        }
      }, {
        key: "isInactive",
        value: function isInactive() {
          return this.life <= 0;
        }
      }, {
        key: "reset",
        value: function reset() {
          this.score = 0;
          this["throws"] = [];
          this.throwsHistory = [];
          this.win = false;
          this.winDateTime = 0;
          this.first = true;
        }
      }, {
        key: "clone",
        value: function clone() {
          var player = new Player(this.id, this.name);
          player.score = this.score;
          player.life = this.life;
          player["throws"] = [];
          this["throws"].forEach(function (t) {
            player["throws"].push(t);
          });
          player.throwsHistory = this.throwsHistory;
          player.win = this.win;
          player.winDateTime = this.winDateTime;
          player.first = this.first;
          player.throwsHistory = [];
          this.throwsHistory.forEach(function (_throws) {
            player.throwsHistory.push(_throws.clone());
          });

          if (this.state) {
            player.state = this.state.clone();
          }

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
      function PlaygroundState() {
        _classCallCheck(this, PlaygroundState);
      }

      _createClass(PlaygroundState, [{
        key: "getFieldValue",
        value: function getFieldValue(list, fieldIndex) {
          var filtered = list.filter(function (f) {
            return f.field === fieldIndex;
          });

          if (filtered.length === 0) {
            list.push(new _field_value_model__WEBPACK_IMPORTED_MODULE_0__["FieldValue"](fieldIndex, 0));
          }

          return list.filter(function (f) {
            return f.field === fieldIndex;
          })[0];
        }
      }, {
        key: "isInactive",
        value: function isInactive() {
          return false;
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

  /*! exports provided: FIELDS_COUNT, Playground */

  /***/
  function srcAppSharedModelsPlaygroundModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FIELDS_COUNT", function () {
      return FIELDS_COUNT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Playground", function () {
      return Playground;
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

    var FIELDS_COUNT = 21;
    var MAXIMUM_NUMBER_OF_PLAYERS = 6;

    var Playground =
    /*#__PURE__*/
    function () {
      function Playground(application, game, route, dialogService, soundService) {
        var minimumNumberOfPlayers = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
        var maximumNumberOfPlayers = arguments.length > 6 ? arguments[6] : undefined;

        _classCallCheck(this, Playground);

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

      _createClass(Playground, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.settingsOpen = true;
          this.extraEndingMsg = '';
        }
      }, {
        key: "throwNumber",
        value: function throwNumber(args) {
          var _this61 = this;

          var score = args[0];
          var scoreReal = args[1];

          if (this.throwEnabled) {
            this.saveGameInHistory();
            this.throwEnabled = false;

            if (score === 25 && this.multiplier === 3) {
              this.multiplier = 1;
            }

            var actualPlayer = this.game.getActualPlayer();
            var fieldIndex = score === 25 ? 20 : score - 1;
            actualPlayer.addThrowHistory(new _throw_model__WEBPACK_IMPORTED_MODULE_2__["Throw"](score, this.multiplier, this.game.actualThrow));

            if (this.game.actualThrow === 0) {
              actualPlayer["throws"] = [];
            }

            actualPlayer["throws"][this.game.actualThrow] = score * this.multiplier;
            this.game.actualThrow++;
            this.calculatePoints(actualPlayer, fieldIndex, score, scoreReal);
            this.checkPlayerState(actualPlayer);
            this.multiplier = 1;
            var winners = this.game.players.filter(function (p) {
              return p.win;
            });

            if (winners.length > 0) {
              if (this.game.victoryFirst || this.game.getNumberOfPlayers() - winners.length <= 1 || !this.game.victoryFirst) {
                if (!this.extraEndingMsg) {
                  this.extraEndingMsg = 'Round: #' + (this.game.round + 1);
                }

                this.dialogService.openDialog('Game Over!', this.extraEndingMsg, this.getTheFinalResult());
                this.newGame(true);
              } else {
                while (this.game.getActualPlayer().win) {
                  this.game.nextPlayer();
                }
              }
            }

            var activePlayers = this.game.players.filter(function (p) {
              return !_this61.getPlayerState(p) || !_this61.getPlayerState(p).isInactive();
            });

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
      }, {
        key: "getPlayerState",
        value: function getPlayerState(player) {
          return player.state;
        }
      }, {
        key: "canAddPlayer",
        value: function canAddPlayer() {
          return this.game.getNumberOfPlayers() < MAXIMUM_NUMBER_OF_PLAYERS;
        }
      }, {
        key: "addPlayer",
        value: function addPlayer(name) {
          if (!!name.value.trim().length && !this.game.players.some(function (p) {
            return p.name === name.value;
          })) {
            this.game.players.push(new _player_model__WEBPACK_IMPORTED_MODULE_1__["Player"](Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(), name.value));
            this.application.storePlayer(name.value);
          }

          name.value = '';
        }
      }, {
        key: "removePlayer",
        value: function removePlayer(player) {
          this.game.players = this.game.players.filter(function (p) {
            return p !== player;
          });
        }
      }, {
        key: "newGame",
        value: function newGame() {
          var rotate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.settingsOpen = !this.playerSettingsValidation() || !this.customSettingsValidation();

          if (!this.playerSettingsValidation()) {
            this.dialogService.openErrorDialog('Error!', 'Number of players are incorrect.');
          } else if (this.settingsOpen) {
            this.dialogService.openErrorDialog('Error!', 'Settings is incorrect.');
          }

          if (rotate) {
            this.game.rotatePlayers();
          }

          this.reset();
        }
      }, {
        key: "triplePoint",
        value: function triplePoint() {
          this.multiplier = this.multiplier === 3 ? 1 : 3;
        }
      }, {
        key: "doublePoint",
        value: function doublePoint() {
          this.multiplier = this.multiplier === 2 ? 1 : 2;
        }
      }, {
        key: "undo",
        value: function undo() {
          if (this.gameHistory.length > 0) {
            this.game = this.gameHistory.pop();
          }
        }
      }, {
        key: "skip",
        value: function skip() {
          var actThrow = this.game.actualThrow;
          this.throwNumber([0, 0]);

          if (actThrow !== 2) {
            this.skip();
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          this.gameHistory = [];
          this.game.resetScore();
          this.multiplier = 1;
          this.extraEndingMsg = '';
          this.game.actualFieldIndex = 0;
          this.customReset();
        }
      }, {
        key: "quit",
        value: function quit() {
          this.reset();
          this.route.navigate(['/']);
        }
      }, {
        key: "customSettingsValidation",
        value: function customSettingsValidation() {
          return true;
        }
      }, {
        key: "isFieldEnabled",
        value: function isFieldEnabled(fieldIndex) {
          return true;
        }
      }, {
        key: "isPrimaryField",
        value: function isPrimaryField(fieldIndex) {
          return false;
        }
      }, {
        key: "isSecondaryField",
        value: function isSecondaryField(fieldIndex) {
          return false;
        }
      }, {
        key: "getFieldIcon",
        value: function getFieldIcon(fieldIndex) {
          return '';
        }
      }, {
        key: "getFieldNote",
        value: function getFieldNote(fieldIndex) {
          return '';
        }
      }, {
        key: "getTheFinalResult",
        value: function getTheFinalResult() {
          var winners = this.game.players.filter(function (p) {
            return p.win;
          });
          winners = winners.sort(function (p1, p2) {
            return p1.winDateTime < p2.winDateTime ? -1 : 1;
          }).slice(0, 1).map(function (p) {
            return p.clone();
          });
          var losers = this.game.players.filter(function (p) {
            return !winners.some(function (w) {
              return w.id === p.id;
            });
          }).map(function (p) {
            var c = p.clone();
            c.win = false;
            return c;
          });
          return [].concat(_toConsumableArray(winners), _toConsumableArray(losers));
        }
      }, {
        key: "playerSettingsValidation",
        value: function playerSettingsValidation() {
          var players = [];
          this.game.players.forEach(function (player) {
            if (player.name.length !== 0) {
              players.push(player);
            }
          });
          this.game.players = players;
          return players.length >= this.minimumNumberOfPlayers && (!this.maximumNumberOfPlayers || players.length <= this.maximumNumberOfPlayers);
        }
      }, {
        key: "saveGameInHistory",
        value: function saveGameInHistory() {
          this.gameHistory.push(this.game.clone());
        }
      }], [{
        key: "getFieldValueFromIndex",
        value: function getFieldValueFromIndex(fieldIndex) {
          return fieldIndex === 20 ? 25 : fieldIndex + 1;
        }
      }]);

      return Playground;
    }();

    Playground.ɵfac = function Playground_Factory(t) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinvalidFactory"]();
    };

    Playground.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: Playground
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
      function Throw(score, multi, order) {
        _classCallCheck(this, Throw);

        this.score = score;
        this.multi = multi;
        this.order = order;
        this.field = this.score === 25 ? 'B' : this.score + '';
      }

      _createClass(Throw, [{
        key: "clone",
        value: function clone() {
          return new Throw(this.score, this.multi, this.order);
        }
      }]);

      return Throw;
    }();
    /***/

  },

  /***/
  "./src/app/shared/services/application-state.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/services/application-state.service.ts ***!
    \**************************************************************/

  /*! exports provided: ApplicationStateService */

  /***/
  function srcAppSharedServicesApplicationStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationStateService", function () {
      return ApplicationStateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_application_settings_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~models/application-settings.model */
    "./src/app/shared/models/application-settings.model.ts");
    /* harmony import */


    var _services_sound_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ~services/sound.service */
    "./src/app/shared/services/sound.service.ts");

    var APPLICATION_KEY = 'ApplicationSettings';
    var PLAYER_KEY = 'Players';

    var ApplicationStateService =
    /*#__PURE__*/
    function () {
      function ApplicationStateService(soundService) {
        _classCallCheck(this, ApplicationStateService);

        this.soundService = soundService;
        this.settings = new _models_application_settings_model__WEBPACK_IMPORTED_MODULE_1__["ApplicationSettings"]();
        var data = localStorage.getItem(APPLICATION_KEY);

        if (data) {
          this.settings = JSON.parse(data);
        }

        this.setTheme();
      }

      _createClass(ApplicationStateService, [{
        key: "toggleDarkTheme",
        value: function toggleDarkTheme() {
          this.soundService.fart();
          this.settings.darkTheme = (this.settings.darkTheme + 1) % 3;
          this.setTheme();
          this.saveSettings();
        }
      }, {
        key: "getStoredPlayers",
        value: function getStoredPlayers() {
          var data = localStorage.getItem(PLAYER_KEY);

          if (data) {
            return JSON.parse(data);
          }

          return [];
        }
      }, {
        key: "storePlayer",
        value: function storePlayer(name) {
          var players = [name].concat(_toConsumableArray(this.getStoredPlayers())).filter(function (v, i, a) {
            return a.indexOf(v) === i;
          });
          localStorage.setItem(PLAYER_KEY, JSON.stringify(players));
        }
      }, {
        key: "setTheme",
        value: function setTheme() {
          document.body.className = document.body.className.replace('dark-theme', '');
          document.body.className = document.body.className.replace('dark-red', '');

          if (this.settings.darkTheme === 1) {
            document.body.classList.add('dark-theme');
          } else if (this.settings.darkTheme === 2) {
            document.body.classList.add('dark-red');
          }
        }
      }, {
        key: "saveSettings",
        value: function saveSettings() {
          localStorage.setItem(APPLICATION_KEY, JSON.stringify(this.settings));
        }
      }]);

      return ApplicationStateService;
    }();

    ApplicationStateService.ɵfac = function ApplicationStateService_Factory(t) {
      return new (t || ApplicationStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_2__["SoundService"]));
    };

    ApplicationStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApplicationStateService,
      factory: ApplicationStateService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_sound_service__WEBPACK_IMPORTED_MODULE_2__["SoundService"]
        }];
      }, null);
    })();
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


    var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~components/dialog/dialog.component */
    "./src/app/shared/components/dialog/dialog.component.ts");
    /* harmony import */


    var _components_darts_table_darts_table_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ~components/darts-table/darts-table-dialog.component */
    "./src/app/shared/components/darts-table/darts-table-dialog.component.ts");
    /* harmony import */


    var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ~components/confirm-dialog/confirm-dialog.component */
    "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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
          return this.dialog.open(_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"], {
            panelClass: 'success-dialog',
            data: {
              title: title,
              content: content,
              players: players
            }
          });
        }
      }, {
        key: "openErrorDialog",
        value: function openErrorDialog() {
          var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          return this.dialog.open(_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"], {
            panelClass: 'error-dialog',
            data: {
              title: title,
              content: content,
              players: []
            }
          });
        }
      }, {
        key: "openConfirmDialog",
        value: function openConfirmDialog() {
          var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          return this.dialog.open(_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
            panelClass: 'confirm-dialog',
            data: {
              title: title,
              content: content,
              players: []
            }
          });
        }
      }, {
        key: "openDartsTable",
        value: function openDartsTable(fieldIndexes, primaryFieldIndexes, secondaryFields) {
          return this.dialog.open(_components_darts_table_darts_table_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DartsTableDialogComponent"], {
            data: {
              field: fieldIndexes,
              primary: primaryFieldIndexes,
              secondary: secondaryFields
            }
          });
        }
      }]);

      return DialogService;
    }();

    DialogService.ɵfac = function DialogService_Factory(t) {
      return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
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
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
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

    var GameService =
    /*#__PURE__*/
    function () {
      function GameService() {
        _classCallCheck(this, GameService);

        this.players = [];
        this.actualFieldIndex = 0;
        this.victoryFirst = true;
        this.numbs = [];
      }

      _createClass(GameService, [{
        key: "toggleVictoryFirst",
        value: function toggleVictoryFirst() {
          this.victoryFirst = !this.victoryFirst;
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
        key: "getActivePlayers",
        value: function getActivePlayers() {
          return this.players.filter(function (p) {
            return !p.isInactive();
          });
        }
      }, {
        key: "getNextPlayer",
        value: function getNextPlayer() {
          var index = this.actualPlayerIndex + 1 === this.players.length ? 0 : this.actualPlayerIndex + 1;

          while (this.players[index].isInactive()) {
            index = index + 1 === this.players.length ? 0 : index + 1;
          }

          return this.players[index];
        }
      }, {
        key: "getPreviousPlayer",
        value: function getPreviousPlayer() {
          var index = this.actualPlayerIndex === 0 ? this.players.length - 1 : this.actualPlayerIndex - 1;

          while (this.players[index].isInactive()) {
            index = index === 0 ? this.players.length - 1 : index - 1;
          }

          return this.players[index];
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
          var max = this.players[0].score;
          this.players.forEach(function (player) {
            max = player.score > max ? player.score : max;
          });
          return actPlayer.score === max;
        }
      }, {
        key: "isTheWorstPlayer",
        value: function isTheWorstPlayer(actPlayer) {
          var min = this.players[0].score;
          this.players.forEach(function (player) {
            min = player.score < min ? player.score : min;
          });
          return actPlayer.score === min;
        }
      }, {
        key: "nextRound",
        value: function nextRound() {
          this.round++;
        }
      }, {
        key: "resetScore",
        value: function resetScore() {
          this.players.forEach(function (player) {
            return player.reset();
          });
          this.actualPlayerIndex = 0;
          this.actualThrow = 0;
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
          game.actualFieldIndex = this.actualFieldIndex;
          game.round = this.round;
          game.numbs = this.numbs.map(function (n) {
            return n;
          });
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
  "./src/app/shared/services/sound.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/services/sound.service.ts ***!
    \**************************************************/

  /*! exports provided: SoundService */

  /***/
  function srcAppSharedServicesSoundServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SoundService", function () {
      return SoundService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SoundService =
    /*#__PURE__*/
    function () {
      function SoundService() {
        _classCallCheck(this, SoundService);
      }

      _createClass(SoundService, [{
        key: "fart",
        value: function fart() {
          this.play('perfect-fart.mp3');
        }
      }, {
        key: "no",
        value: function no() {
          this.play('oh_no.mp3');
        }
      }, {
        key: "play",
        value: function play(soundFileName) {
          this.audioElement.src = "assets/sounds/".concat(soundFileName);
          this.audioElement.play();
        }
      }]);

      return SoundService;
    }();

    SoundService.ɵfac = function SoundService_Factory(t) {
      return new (t || SoundService)();
    };

    SoundService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SoundService,
      factory: SoundService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SoundService, [{
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


    var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ~components/dialog/dialog.component */
    "./src/app/shared/components/dialog/dialog.component.ts");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");
    /* harmony import */


    var _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ~components/player-settings/player-settings.component */
    "./src/app/shared/components/player-settings/player-settings.component.ts");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_game_rules_game_rules_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ~components/game-rules/game-rules.component */
    "./src/app/shared/components/game-rules/game-rules.component.ts");
    /* harmony import */


    var _components_darts_table_darts_table_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~components/darts-table/darts-table-dialog.component */
    "./src/app/shared/components/darts-table/darts-table-dialog.component.ts");
    /* harmony import */


    var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ~components/confirm-dialog/confirm-dialog.component */
    "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");

    var components = [_components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_6__["NumberPlateComponent"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["GameToolbarComponent"], _components_game_rules_game_rules_component__WEBPACK_IMPORTED_MODULE_10__["GameRulesComponent"], _components_darts_table_darts_table_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DartsTableDialogComponent"], _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_7__["PlayerSettingsComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_9__["PlayerScoreComponent"], _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmDialogComponent"]];

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
        declarations: [_components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_6__["NumberPlateComponent"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["GameToolbarComponent"], _components_game_rules_game_rules_component__WEBPACK_IMPORTED_MODULE_10__["GameRulesComponent"], _components_darts_table_darts_table_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DartsTableDialogComponent"], _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_7__["PlayerSettingsComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_9__["PlayerScoreComponent"], _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmDialogComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_6__["NumberPlateComponent"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["GameToolbarComponent"], _components_game_rules_game_rules_component__WEBPACK_IMPORTED_MODULE_10__["GameRulesComponent"], _components_darts_table_darts_table_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DartsTableDialogComponent"], _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_7__["PlayerSettingsComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_9__["PlayerScoreComponent"], _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmDialogComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]],
          declarations: components,
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]].concat(components),
          entryComponents: [_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _components_darts_table_darts_table_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DartsTableDialogComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/x01/models/x01.settings.model.ts":
  /*!**************************************************!*\
    !*** ./src/app/x01/models/x01.settings.model.ts ***!
    \**************************************************/

  /*! exports provided: X01Settings */

  /***/
  function srcAppX01ModelsX01SettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "X01Settings", function () {
      return X01Settings;
    });

    var X01Settings =
    /*#__PURE__*/
    function () {
      function X01Settings() {
        _classCallCheck(this, X01Settings);

        this.startValue = 201;
        this.start = 1;
        this.checkout = 2;
      }

      _createClass(X01Settings, [{
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

      return X01Settings;
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


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");
    /* harmony import */


    var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../route-animation */
    "./src/app/route-animation.ts");
    /* harmony import */


    var _models_x01_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./models/x01.settings.model */
    "./src/app/x01/models/x01.settings.model.ts");
    /* harmony import */


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _services_sound_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ~services/sound.service */
    "./src/app/shared/services/sound.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function X01Component_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.settings.setStartValue(101);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "101 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.settings.setStartValue(201);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "201 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.settings.setStartValue(301);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "301 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r48.settings.setStartValue(501);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "501 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r49.settings.setStartValue(701);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "701 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.settings.setStartValue(901);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "901 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Check In");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r51.settings.setStart(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Single ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.settings.setStart(2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Double ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r53.settings.setStart(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Triple ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Check Out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r54.settings.setCheckout(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Single ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r55.settings.setCheckout(2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Double ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r56.settings.setCheckout(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Triple ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r57.settings.setCheckout(4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "None ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "X01")("playground", ctx_r40.playground)("rules", "All players start with 301/501 points and attempt to reach zero. If a player scores more " + "than the total required to reach zero, the player \u201Cbusts\u201D and the score returns to the score that " + "was existing at the start of the turn.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r40.settings.startValue === 101 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r40.settings.startValue === 201 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r40.settings.startValue === 301 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r40.settings.startValue === 501 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r40.settings.startValue === 701 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r40.settings.startValue === 901 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r40.settings.start === 1 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r40.settings.start === 2 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r40.settings.start === 3 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r40.settings.checkout === 1 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r40.settings.checkout === 2 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r40.settings.checkout === 3 ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r40.settings.checkout === 4 ? "primary" : "");
      }
    }

    function X01Component_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 8);
      }

      if (rf & 2) {
        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r41.playground);
      }
    }

    function X01Component_ng_container_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r59 = ctx.$implicit;
        var i_r60 = ctx.index;

        var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r60 === ctx_r58.game.actualPlayerIndex ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r59)("hasContent", false);
      }
    }

    function X01Component_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, X01Component_ng_container_4_div_1_Template, 2, 5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r42.game.players);
      }
    }

    function X01Component_app_number_plate_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 8);
      }

      if (rf & 2) {
        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r43.playground);
      }
    }

    var X01Component =
    /*#__PURE__*/
    function (_models_playground_mo12) {
      _inherits(X01Component, _models_playground_mo12);

      var _super23 = _createSuper(X01Component);

      function X01Component(application, game, route, dialogService, soundService) {
        var _this62;

        _classCallCheck(this, X01Component);

        _this62 = _super23.call(this, application, game, route, dialogService, soundService);
        _this62.settings = new _models_x01_settings_model__WEBPACK_IMPORTED_MODULE_3__["X01Settings"]();
        return _this62;
      }

      _createClass(X01Component, [{
        key: "calculatePoints",
        value: function calculatePoints(player, fieldIndex, score) {
          var validStart = !player.first || this.settings.isNormalStart() || player.first && (this.settings.isDoubleStart() && this.multiplier === 2 || this.settings.isTripleStart() && this.multiplier === 3);

          if (validStart) {
            var actualScore = score * this.multiplier;
            player.first = false;
            player.score -= actualScore;
          }
        }
      }, {
        key: "checkPlayerState",
        value: function checkPlayerState(player) {
          var next = false;

          if (this.settings.isHighScoreGame() && player.score <= 0 || player.score === 0 && (this.settings.isNormalCheckout() || this.settings.isDoubleCheckout() && this.multiplier === 2 || this.settings.isTripleCheckout() && this.multiplier === 3)) {
            player.setWin();
            next = true;
          } else if (player.score <= 0 || this.settings.isDoubleCheckout() && player.score < 2 || this.settings.isTripleCheckout() && player.score < 3) {
            player["throws"].forEach(function (t) {
              return player.score += t;
            });
            next = true;
            this.dialogService.openErrorDialog("".concat(this.game.getActualPlayer().name, " busted!"));
          }

          if (this.game.isTheLastThrow() || next) {
            this.game.nextPlayer();
          }
        }
      }, {
        key: "customReset",
        value: function customReset() {
          var _this63 = this;

          this.game.players.forEach(function (player) {
            return player.score = _this63.settings.startValue;
          });
        }
      }]);

      return X01Component;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    X01Component.ɵfac = function X01Component_Factory(t) {
      return new (t || X01Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_8__["SoundService"]));
    };

    X01Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: X01Component,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 4,
      consts: [["id", "playgroundContent"], [3, "title", "playground", "rules", 4, "ngIf"], [1, "side-left"], [3, "playground", 4, "ngIf"], [4, "ngIf"], [3, "title", "playground", "rules"], ["mat-raised-button", "", 1, "button", 3, "color", "click"], ["mat-raised-button", "", 1, "button", "shortmedium", 3, "color", "click"], [3, "playground"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]],
      template: function X01Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, X01Component_app_settings_1_Template, 35, 16, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, X01Component_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, X01Component_ng_container_4_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, X01Component_app_number_plate_5_Template, 1, 1, "app-number-plate", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsOpen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_14__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_15__["NumberPlateComponent"]],
      encapsulation: 2,
      data: {
        animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](X01Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './x01.component.html',
          animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
        }]
      }], function () {
        return [{
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationStateService"]
        }, {
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]
        }, {
          type: _services_sound_service__WEBPACK_IMPORTED_MODULE_8__["SoundService"]
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

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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