function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
  "./package.json":
  /*!**********************!*\
    !*** ./package.json ***!
    \**********************/

  /*! exports provided: name, version, license, author, description, homepage, bugs, scripts, private, dependencies, devDependencies, default */

  /***/
  function packageJson(module) {
    module.exports = JSON.parse("{\"name\":\"darts-scoreboard-ng\",\"version\":\"2.5.6\",\"license\":\"MIT\",\"author\":{\"name\":\"Viktor Hajer\",\"email\":\"viktor.hajer@gmail.com\"},\"description\":\"See Readme\",\"homepage\":\"https://github.com/viktorhajer/darts-scoreboard-ng#readme\",\"bugs\":{\"url\":\"https://github.com/viktorhajer/darts-scoreboard-ng/issues\"},\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build\",\"eslint\":\"eslint src/**/*.ts\"},\"private\":false,\"dependencies\":{\"@angular/animations\":\"~9.0.0\",\"@angular/cdk\":\"^9.0.0\",\"@angular/common\":\"~9.0.0\",\"@angular/compiler\":\"~9.0.0\",\"@angular/core\":\"~9.0.0\",\"@angular/forms\":\"~9.0.0\",\"@angular/material\":\"^9.0.0\",\"@angular/platform-browser\":\"~9.0.0\",\"@angular/platform-browser-dynamic\":\"~9.0.0\",\"@angular/router\":\"~9.0.0\",\"@types/d3\":\"^7.1.0\",\"d3\":\"^7.3.0\",\"rxjs\":\"~6.5.4\",\"tslib\":\"^1.10.0\",\"zone.js\":\"~0.10.2\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.900.1\",\"@angular/cli\":\"~9.0.1\",\"@angular/compiler-cli\":\"~9.0.0\",\"@angular/language-service\":\"~9.0.0\",\"@types/node\":\"12.12.47\",\"@typescript-eslint/eslint-plugin\":\"^2.19.2\",\"@typescript-eslint/eslint-plugin-tslint\":\"^2.19.2\",\"@typescript-eslint/parser\":\"^2.19.2\",\"eslint\":\"^6.8.0\",\"ts-node\":\"~8.3.0\",\"tslint\":\"~5.18.0\",\"typescript\":\"~3.7.5\"}}");
    /***/
  },

  /***/
  "./src/app/app-game-types.ts":
  /*!***********************************!*\
    !*** ./src/app/app-game-types.ts ***!
    \***********************************/

  /*! exports provided: routes */

  /***/
  function srcAppAppGameTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });

    var routes = [{
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


    var _shared_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./shared/components/menu/menu.component */
    "./src/app/shared/components/menu/menu.component.ts");
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


    var _capture_the_flag_capture_the_flag_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./capture-the-flag/capture-the-flag.module */
    "./src/app/capture-the-flag/capture-the-flag.module.ts");
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
      component: _shared_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__["MenuComponent"]
    }, {
      path: 'x01',
      loadChildren: function loadChildren() {
        return _x01_x01_module__WEBPACK_IMPORTED_MODULE_1__["X01Module"];
      }
    }, {
      path: 'cricket',
      loadChildren: function loadChildren() {
        return _cricket_cricket_module__WEBPACK_IMPORTED_MODULE_2__["CricketModule"];
      }
    }, {
      path: 'around-clock',
      loadChildren: function loadChildren() {
        return _aroundclock_around_clock_module__WEBPACK_IMPORTED_MODULE_3__["AroundClockModule"];
      }
    }, {
      path: 'shanghai',
      loadChildren: function loadChildren() {
        return _shanghai_shanghai_module__WEBPACK_IMPORTED_MODULE_4__["ShanghaiModule"];
      }
    }, {
      path: 'fives',
      loadChildren: function loadChildren() {
        return _fives_fives_module__WEBPACK_IMPORTED_MODULE_6__["FivesModule"];
      }
    }, {
      path: 'hare-and-hound',
      loadChildren: function loadChildren() {
        return _hare_and_hound_hare_and_hound_module__WEBPACK_IMPORTED_MODULE_7__["HareAndHoundModule"];
      }
    }, {
      path: 'knockout',
      loadChildren: function loadChildren() {
        return _knockout_knockout_module__WEBPACK_IMPORTED_MODULE_8__["KnockoutModule"];
      }
    }, {
      path: 'killer',
      loadChildren: function loadChildren() {
        return _killer_killer_module__WEBPACK_IMPORTED_MODULE_5__["KillerModule"];
      }
    }, {
      path: 'capture-the-flag',
      loadChildren: function loadChildren() {
        return _capture_the_flag_capture_the_flag_module__WEBPACK_IMPORTED_MODULE_9__["CaptureTheFlagModule"];
      }
    }, {
      path: 'duel',
      loadChildren: function loadChildren() {
        return _duel_duel_module__WEBPACK_IMPORTED_MODULE_12__["DuelModule"];
      }
    }, {
      path: 'imitator',
      loadChildren: function loadChildren() {
        return _imitator_imitator_module__WEBPACK_IMPORTED_MODULE_10__["ImitatorModule"];
      }
    }, {
      path: 'scam',
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


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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
      vars: 3,
      consts: [["audioElement", ""], ["outlet", "outlet"], [1, "theme-chooser"], [1, "button", "icon", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "audio", null, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() {
            return ctx.applicationStateService.toggleDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "track_changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", _r1 && _r1.isActivated && _r1.activatedRoute);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx.applicationStateService.settings.details);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
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


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing */
    "./src/app/app-routing.ts");

    var AppModule =
    /*#__PURE__*/
    _createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_6__["routes"]), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_6__["routes"]), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
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


    var _services_bot_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~services/bot.service */
    "./src/app/shared/services/bot.service.ts");
    /* harmony import */


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _services_sound_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ~services/sound.service */
    "./src/app/shared/services/sound.service.ts");
    /* harmony import */


    var _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~services/statistics.service */
    "./src/app/shared/services/statistics.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ~components/number-plate-visual/number-plate-visual.component */
    "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function AroundClockComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r124.settings.toggleJump();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Enable Jump ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r126.settings.togglePunishment();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Punishment ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r127.settings.toggleSaboteur();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Saboteur ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r128.settings.togglePromoter();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Promoter ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r129.settings.toggleTreeLives();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Tree Lives ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r130.settings.toggleFiveLives();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Five Lives ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r131.settings.toggleSevenLives();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Seven Lives ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r132.settings.toggleTenLives();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Ten Lives ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r133.settings.toggleFirstDeath();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " First Death ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r134.settings.togglePalFirst();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Pal First ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r135.settings.setFavorite();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " FAV ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r136.settings.setInverseFavorite();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " iFAV ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Field's order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r137.settings.setStyle(0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Ascending ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r138.settings.setStyle(4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Descending ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r139.settings.setStyle(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Clockwise ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_38_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r140.settings.setStyle(2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Anticlockwise ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_40_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r141.settings.setStyle(8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " TripleClock ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_42_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r142.settings.setStyle(9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " ZoneClock ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_44_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r143.settings.setStyle(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Random ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_46_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r144.settings.setStyle(6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Random11 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_48_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r145.settings.setStyle(5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Recurrence ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_app_settings_1_Template_button_click_50_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

          var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r146.settings.setStyle(7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Pirate ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r119.playground);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r119.settings.jump);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r119.settings.punishment);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r119.settings.saboteur);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r119.settings.promoter);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r119.settings.life === 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r119.settings.life === 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r119.settings.life === 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r119.settings.life === 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r119.settings.firstDeath);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r119.settings.palFirst);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r119.settings.style == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r119.settings.style == 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r119.settings.style == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r119.settings.style == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r119.settings.style == 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r119.settings.style == 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r119.settings.style == 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r119.settings.style == 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r119.settings.style == 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r119.settings.style == 7);
      }
    }

    function AroundClockComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 4);
      }

      if (rf & 2) {
        var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r120.playground);
      }
    }

    function AroundClockComponent_div_4_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r148 = ctx.$implicit;
        var i_r149 = ctx.index;

        var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player\n        ", i_r149 === ctx_r147.game.actualPlayerIndex ? "highlighted" : "", "\n        ", ctx_r147.settings.life !== 0 && player_r148.isInactive() ? "inactive" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r148)("scoreDisplayed", false)("lifeDisplayed", ctx_r147.settings.life !== 0)("hasContent", false);
      }
    }

    function AroundClockComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AroundClockComponent_div_4_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r151);

          var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r150.toggleHiddenInfo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AroundClockComponent_div_4_div_3_Template, 2, 8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r121.application.settings.details);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", ctx_r121.hiddenInfo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r121.getDistanceFromRandom());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r121.game.players);
      }
    }

    function AroundClockComponent_app_number_plate_visual_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 4);
      }

      if (rf & 2) {
        var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r122.playground);
      }
    }

    function AroundClockComponent_app_number_plate_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 4);
      }

      if (rf & 2) {
        var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r123.playground);
      }
    }

    var AroundClockComponent =
    /*#__PURE__*/
    function (_models_playground_mo) {
      _inherits(AroundClockComponent, _models_playground_mo);

      var _super = _createSuper(AroundClockComponent);

      function AroundClockComponent(application, game, route, dialogService, soundService, botService, statisticsService) {
        var _this;

        _classCallCheck(this, AroundClockComponent);

        _this = _super.call(this, 'Around The Clock', application, game, route, dialogService, soundService, botService, statisticsService, 'around-clock', 2);
        _this.hiddenInfo = true;
        _this.settings = new _models_around_clock_settings_model__WEBPACK_IMPORTED_MODULE_4__["AroundClockSettings"]();
        return _this;
      }

      _createClass(AroundClockComponent, [{
        key: "calculatePoints",
        value: function calculatePoints(player, fieldIndex, score, scoreReal) {
          var state = this.getPlayerState(player);
          var originalMulti = this.multiplier;
          var targetedField = this.getFieldIndex(state.actFieldIndex) === fieldIndex;
          var hasChanges = this.handlePromoterSaboteur(player, scoreReal, originalMulti, targetedField);

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

          if (this.settings.firstDeath) {
            var activePlayers = this.game.players.filter(function (p) {
              return !p.isInactive();
            });

            if (activePlayers.length < this.game.players.length) {
              this.getTheBestPlayers().forEach(function (p) {
                return p.setWin(true);
              });
            }
          }

          if (this.settings.life !== 0 && this.game.players.length > 1) {
            var _activePlayers = this.game.players.filter(function (p) {
              return !p.isInactive();
            });

            if (_activePlayers.length === 1) {
              _activePlayers[0].setWin(true);
            } else if (!!_activePlayers.length) {
              while (this.game.getActualPlayer().isInactive()) {
                this.game.nextPlayer();
              }
            }
          }
        }
      }, {
        key: "botThrow",
        value: function botThrow() {
          var _this2 = this;

          var state = this.getPlayerState(this.game.getActualPlayer());
          var target = this.getFieldIndex(state.actFieldIndex);
          var index = this.botService.calculateTarget(target);

          if (target === index && this.botService.isDoublePoint()) {
            this.doublePoint();
          } else if (target === index && this.botService.isTriplePoint()) {
            this.triplePoint();
          }

          setTimeout(function () {
            _this2.throwNumber([_this2.isFieldEnabled(index) ? _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(index) : 0, _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(index)]);
          }, _services_bot_service__WEBPACK_IMPORTED_MODULE_5__["PLAYER_DELAY"]);
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
          var _this3 = this;

          return this.game.players.some(function (p) {
            return _this3.getFieldIndex(_this3.getPlayerState(p).actFieldIndex) === fieldIndex;
          });
        }
      }, {
        key: "isPrimaryField",
        value: function isPrimaryField(fieldIndex) {
          return fieldIndex === this.getFieldIndex(this.getPlayerState(this.game.getActualPlayer()).actFieldIndex);
        }
      }, {
        key: "isSecondaryField",
        value: function isSecondaryField(fieldIndex) {
          var _this4 = this;

          if (!this.isPrimaryField(fieldIndex)) {
            return this.game.players.filter(function (p) {
              return p !== _this4.game.getActualPlayer();
            }).some(function (p) {
              return fieldIndex === _this4.getFieldIndex(_this4.getPlayerState(p).actFieldIndex);
            });
          }

          return false;
        }
      }, {
        key: "getFieldNote",
        value: function getFieldNote(fieldIndex) {
          var _this5 = this;

          var owners = this.game.players.filter(function (p) {
            return _this5.getFieldIndex(_this5.getPlayerState(p).actFieldIndex) === fieldIndex;
          }).map(function (p) {
            return p.name.substr(0, 1);
          });
          return !!owners.length ? owners.join(',') : '';
        }
      }, {
        key: "customReset",
        value: function customReset() {
          var _this6 = this;

          this.game.players.forEach(function (player) {
            player.life = _this6.settings.life;
            player.state = new _models_around_clock_state_model__WEBPACK_IMPORTED_MODULE_3__["AroundClockState"]();
          });
          this.settings.setStyle();
        }
      }, {
        key: "decoratePlayerStat",
        value: function decoratePlayerStat(player) {
          return player.name;
        }
      }, {
        key: "getTheBestPlayers",
        value: function getTheBestPlayers() {
          var _this7 = this;

          var activePlayers = this.game.players.filter(function (p) {
            return !p.isInactive();
          });
          var max = 0;
          activePlayers.forEach(function (p) {
            var index = _this7.getPlayerState(p).actFieldIndex;

            max = index > max ? index : max;
          });
          return activePlayers.filter(function (p) {
            return _this7.getPlayerState(p).actFieldIndex === max;
          });
        }
      }, {
        key: "getFieldIndex",
        value: function getFieldIndex(index) {
          return this.settings.fields[index];
        }
      }, {
        key: "handlePromoterSaboteur",
        value: function handlePromoterSaboteur(player, scoreReal, originalMulti, targetedField) {
          var _this8 = this;

          var hasChanges = false;

          if ((this.settings.saboteur || this.settings.promoter) && scoreReal !== 0) {
            var realFieldIndex = scoreReal === 25 ? 20 : scoreReal - 1;
            this.game.players.filter(function (p) {
              return p.id !== player.id;
            }).forEach(function (otherPlayer) {
              var otherPlayerState = _this8.getPlayerState(otherPlayer);

              if (_this8.getFieldIndex(otherPlayerState.actFieldIndex) === realFieldIndex && (!targetedField || _this8.settings.palFirst && otherPlayerState.actFieldIndex != 0)) {
                if (_this8.settings.saboteur) {
                  hasChanges = true;
                  otherPlayerState.decreaseActFieldIndex(_this8.settings.jump ? originalMulti : 1);
                } else if (otherPlayerState.actFieldIndex !== _this8.settings.fields.length - 1) {
                  otherPlayerState.increaseActFieldIndex(_this8.settings.jump ? originalMulti : 1);

                  if (otherPlayerState.actFieldIndex >= _this8.settings.fields.length) {
                    otherPlayerState.actFieldIndex = _this8.settings.fields.length - 1;
                  }

                  hasChanges = true;
                }
              }
            });
          }

          return hasChanges;
        }
      }]);

      return AroundClockComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    AroundClockComponent.ɵfac = function AroundClockComponent_Factory(t) {
      return new (t || AroundClockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_10__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_5__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"]));
    };

    AroundClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AroundClockComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 7,
      consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], [1, "button", "shortmedium", 3, "click"], [1, "player_container"], [1, "hidden-info", 3, "click"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "scoreDisplayed", "lifeDisplayed", "hasContent"]],
      template: function AroundClockComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AroundClockComponent_app_settings_1_Template, 52, 41, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AroundClockComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AroundClockComponent_div_4_Template, 4, 6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AroundClockComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AroundClockComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__["NumberPlateComponent"]],
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
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationStateService"]
        }, {
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"]
        }, {
          type: _services_sound_service__WEBPACK_IMPORTED_MODULE_10__["SoundService"]
        }, {
          type: _services_bot_service__WEBPACK_IMPORTED_MODULE_5__["BotService"]
        }, {
          type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"]
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

    var AroundClockModule =
    /*#__PURE__*/
    _createClass(function AroundClockModule() {
      _classCallCheck(this, AroundClockModule);
    });

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
        this.firstDeath = true;
        this.punishment = true;
        this.life = 0;
        this.promoter = false;
        this.saboteur = true;
        this.palFirst = false;
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
      }, {
        key: "toggleFirstDeath",
        value: function toggleFirstDeath() {
          this.firstDeath = !this.firstDeath;
        }
      }, {
        key: "togglePalFirst",
        value: function togglePalFirst() {
          this.palFirst = !this.palFirst;
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
        key: "toggleTreeLives",
        value: function toggleTreeLives() {
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
      }, {
        key: "setFavorite",
        value: function setFavorite() {
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
      }, {
        key: "setInverseFavorite",
        value: function setInverseFavorite() {
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
        key: "getTripleClockFields",
        value: function getTripleClockFields() {
          return [0, 12, 14, 2, 15, 13, 4, 17, 5, 1, 18, 7, 8, 19, 3, 9, 16, 6, 10, 11, 20];
        }
      }, {
        key: "getZoneClockFields",
        value: function getZoneClockFields() {
          return [0, 12, 17, 9, 3, 1, 5, 2, 14, 15, 16, 7, 18, 10, 6, 20, 13, 19, 8, 4, 11];
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
        var _this9;

        _classCallCheck(this, AroundClockState);

        _this9 = _super2.call(this);
        _this9.actFieldIndex = 0;
        return _this9;
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
  "./src/app/capture-the-flag/capture-the-flag.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/capture-the-flag/capture-the-flag.component.ts ***!
    \****************************************************************/

  /*! exports provided: CaptureTheFlagComponent */

  /***/
  function srcAppCaptureTheFlagCaptureTheFlagComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CaptureTheFlagComponent", function () {
      return CaptureTheFlagComponent;
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


    var _models_capture_the_flag_state_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./models/capture-the-flag.state.model */
    "./src/app/capture-the-flag/models/capture-the-flag.state.model.ts");
    /* harmony import */


    var _models_capture_the_flag_settings_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./models/capture-the-flag.settings.model */
    "./src/app/capture-the-flag/models/capture-the-flag.settings.model.ts");
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


    var _services_bot_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ~services/bot.service */
    "./src/app/shared/services/bot.service.ts");
    /* harmony import */


    var _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~services/statistics.service */
    "./src/app/shared/services/statistics.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ~components/number-plate-visual/number-plate-visual.component */
    "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function CaptureTheFlagComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureTheFlagComponent_app_settings_1_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r235);

          var ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r234.settings.randomCity();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "City (5) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureTheFlagComponent_app_settings_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r235);

          var ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r236.settings.randomCountry();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Country (10) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureTheFlagComponent_app_settings_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r235);

          var ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r237.settings.randomContinent();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contin. (20) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaptureTheFlagComponent_app_settings_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r235);

          var ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r238.settings.toggleNoScore();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No score ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r229.playground);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r229.settings.style === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r229.settings.style === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r229.settings.style === 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r229.settings.noScore);
      }
    }

    function CaptureTheFlagComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 4);
      }

      if (rf & 2) {
        var ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r230.playground);
      }
    }

    function CaptureTheFlagComponent_div_4_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var field_r243 = ctx.$implicit;

        var player_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("field ", ctx_r242.isActiveField(field_r243) ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r243 === 20 ? "B" : field_r243 + 1, ": ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r242.getFieldValue(player_r240, field_r243));
      }
    }

    function CaptureTheFlagComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CaptureTheFlagComponent_div_4_div_1_div_3_Template, 4, 5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r240 = ctx.$implicit;
        var i_r241 = ctx.index;

        var ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r241 === ctx_r239.game.actualPlayerIndex ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r240);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r239.settings.fields);
      }
    }

    function CaptureTheFlagComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CaptureTheFlagComponent_div_4_div_1_Template, 4, 5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r231.application.settings.details);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r231.game.players);
      }
    }

    function CaptureTheFlagComponent_app_number_plate_visual_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 4);
      }

      if (rf & 2) {
        var ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r232.playground);
      }
    }

    function CaptureTheFlagComponent_app_number_plate_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 4);
      }

      if (rf & 2) {
        var ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r233.playground);
      }
    }

    var CaptureTheFlagComponent =
    /*#__PURE__*/
    function (_models_playground_mo2) {
      _inherits(CaptureTheFlagComponent, _models_playground_mo2);

      var _super3 = _createSuper(CaptureTheFlagComponent);

      function CaptureTheFlagComponent(application, game, route, dialogService, soundService, botService, statisticsService) {
        var _this10;

        _classCallCheck(this, CaptureTheFlagComponent);

        _this10 = _super3.call(this, 'Capture the Flag', application, game, route, dialogService, soundService, botService, statisticsService, 'ctf');
        _this10.settings = new _models_capture_the_flag_settings_model__WEBPACK_IMPORTED_MODULE_4__["CaptureTheFlagSettings"]();
        return _this10;
      }

      _createClass(CaptureTheFlagComponent, [{
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
          var _this11 = this;

          if (this.game.actualFieldIndex === this.settings.fields.length) {
            this.game.players.forEach(function (p) {
              return p.setWin(_this11.game.isTheBestPlayer(p));
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
            return player.state = new _models_capture_the_flag_state_model__WEBPACK_IMPORTED_MODULE_3__["CaptureTheFlagState"]();
          });

          if (this.settings.style === 0) {
            this.settings.randomCity();
          } else if (this.settings.style === 1) {
            this.settings.randomCountry();
          } else {
            this.settings.randomContinent();
          }
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
          var _this12 = this;

          var player = this.game.players.find(function (player) {
            return _this12.getPlayerState(player).getFieldCount(fieldIndex) >= 3;
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
        key: "getGameConfig",
        value: function getGameConfig() {
          return this.settings.fields.length + '';
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

      return CaptureTheFlagComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    CaptureTheFlagComponent.ɵfac = function CaptureTheFlagComponent_Factory(t) {
      return new (t || CaptureTheFlagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"]));
    };

    CaptureTheFlagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CaptureTheFlagComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 7,
      consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], [1, "button", "shortmedium", 3, "click"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player"], [1, "field-set"], [1, "small"]],
      template: function CaptureTheFlagComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CaptureTheFlagComponent_app_settings_1_Template, 9, 9, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CaptureTheFlagComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CaptureTheFlagComponent_div_4_Template, 2, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CaptureTheFlagComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CaptureTheFlagComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateComponent"]],
      encapsulation: 2,
      data: {
        animation: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaptureTheFlagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './capture-the-flag.component.html',
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
        }, {
          type: _services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"]
        }, {
          type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/capture-the-flag/capture-the-flag.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/capture-the-flag/capture-the-flag.module.ts ***!
    \*************************************************************/

  /*! exports provided: CaptureTheFlagModule */

  /***/
  function srcAppCaptureTheFlagCaptureTheFlagModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CaptureTheFlagModule", function () {
      return CaptureTheFlagModule;
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


    var _capture_the_flag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./capture-the-flag.component */
    "./src/app/capture-the-flag/capture-the-flag.component.ts");

    var CaptureTheFlagModule =
    /*#__PURE__*/
    _createClass(function CaptureTheFlagModule() {
      _classCallCheck(this, CaptureTheFlagModule);
    });

    CaptureTheFlagModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CaptureTheFlagModule
    });
    CaptureTheFlagModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CaptureTheFlagModule_Factory(t) {
        return new (t || CaptureTheFlagModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _capture_the_flag_component__WEBPACK_IMPORTED_MODULE_3__["CaptureTheFlagComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CaptureTheFlagModule, {
        declarations: [_capture_the_flag_component__WEBPACK_IMPORTED_MODULE_3__["CaptureTheFlagComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaptureTheFlagModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _capture_the_flag_component__WEBPACK_IMPORTED_MODULE_3__["CaptureTheFlagComponent"]
          }])],
          declarations: [_capture_the_flag_component__WEBPACK_IMPORTED_MODULE_3__["CaptureTheFlagComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/capture-the-flag/models/capture-the-flag.settings.model.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/capture-the-flag/models/capture-the-flag.settings.model.ts ***!
    \****************************************************************************/

  /*! exports provided: CaptureTheFlagSettings */

  /***/
  function srcAppCaptureTheFlagModelsCaptureTheFlagSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CaptureTheFlagSettings", function () {
      return CaptureTheFlagSettings;
    });
    /* harmony import */


    var _models_playground_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ~models/playground.model */
    "./src/app/shared/models/playground.model.ts");

    var CaptureTheFlagSettings =
    /*#__PURE__*/
    function () {
      function CaptureTheFlagSettings() {
        _classCallCheck(this, CaptureTheFlagSettings);

        this.noScore = false;
        this.fields = [];
        this.noScore = false;
        this.randomCountry();
      }

      _createClass(CaptureTheFlagSettings, [{
        key: "randomCity",
        value: function randomCity() {
          this.style = 0;
          this.fields = CaptureTheFlagSettings.getRandom(5);
          this.fields[this.fields.length] = 20;
        }
      }, {
        key: "randomCountry",
        value: function randomCountry() {
          this.style = 1;
          this.fields = CaptureTheFlagSettings.getRandom(10);
          this.fields[this.fields.length] = 20;
        }
      }, {
        key: "randomContinent",
        value: function randomContinent() {
          this.style = 2;
          this.fields = CaptureTheFlagSettings.getRandom(20);
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
          var fields = CaptureTheFlagSettings.getBaseFields();

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

      return CaptureTheFlagSettings;
    }();
    /***/

  },

  /***/
  "./src/app/capture-the-flag/models/capture-the-flag.state.model.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/capture-the-flag/models/capture-the-flag.state.model.ts ***!
    \*************************************************************************/

  /*! exports provided: CaptureTheFlagState */

  /***/
  function srcAppCaptureTheFlagModelsCaptureTheFlagStateModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CaptureTheFlagState", function () {
      return CaptureTheFlagState;
    });
    /* harmony import */


    var _models_playground_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ~models/playground-state.model */
    "./src/app/shared/models/playground-state.model.ts");

    var CaptureTheFlagState =
    /*#__PURE__*/
    function (_models_playground_st2) {
      _inherits(CaptureTheFlagState, _models_playground_st2);

      var _super4 = _createSuper(CaptureTheFlagState);

      function CaptureTheFlagState() {
        var _this13;

        _classCallCheck(this, CaptureTheFlagState);

        _this13 = _super4.call(this);
        _this13.fieldCount = [];
        _this13.actFieldIndex = 0;
        return _this13;
      }

      _createClass(CaptureTheFlagState, [{
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
          var state = new CaptureTheFlagState();
          state.actFieldIndex = this.actFieldIndex;
          this.fieldCount.forEach(function (fv) {
            return state.fieldCount.push(fv.clone());
          });
          return state;
        }
      }]);

      return CaptureTheFlagState;
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


    var _services_bot_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ~services/bot.service */
    "./src/app/shared/services/bot.service.ts");
    /* harmony import */


    var _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~services/statistics.service */
    "./src/app/shared/services/statistics.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ~components/number-plate-visual/number-plate-visual.component */
    "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function CricketComponent_app_settings_1_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

          var i_r87 = ctx.index;

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r88.settings.setNumber(i_r87);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var numb_r86 = ctx.$implicit;
        var i_r87 = ctx.index;

        var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r85.settings.isFieldAllowed(i_r87));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r86 === 21 ? "B" : numb_r86, " ");
      }
    }

    function CricketComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fields");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CricketComponent_app_settings_1_button_3_Template, 2, 3, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r90.settings.upper();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Upper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r92.settings.lower();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lower");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r93.settings.left();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r94.settings.right();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r95.settings.odd();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Odd");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r96.settings.even();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Even");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r97.settings.prime();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Prime");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r98.settings.notPrime();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Not prime");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r99.settings.randomize(5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Random 05");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r100.settings.randomize(10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Random 10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r101.settings.randomize(15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Random 15");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r102.settings.small();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r103.settings.high();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "High");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r104.settings.star();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r105.settings.cross();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cross");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r106.settings.all();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "All");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Style");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_40_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r107.settings.setStyle(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Classic ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_42_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r108.settings.setStyle(2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cut-Throat ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_44_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r109.settings.setStyle(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "No Score ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_app_settings_1_Template_button_click_46_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r110.settings.setStyle(4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Black Out ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r80.playground);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r80.settings.getNumbers());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r80.settings.style == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r80.settings.style == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r80.settings.style == 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r80.settings.style == 4);
      }
    }

    function CricketComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 4);
      }

      if (rf & 2) {
        var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r81.playground);
      }
    }

    function CricketComponent_div_4_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var field_r115 = ctx.$implicit;

        var player_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("field ", ctx_r114.isActiveField(player_r112, field_r115) && ctx_r114.settings.isBlackOutGame() ? "active" : "", " ", !ctx_r114.isFieldDoneForPlayer(player_r112, field_r115) ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r115 === 20 ? "B" : field_r115 + 1, ": ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r114.getFieldValue(player_r112, field_r115));
      }
    }

    function CricketComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CricketComponent_div_4_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118);

          var player_r112 = ctx.$implicit;

          var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r117.changePlayerToDisplay(player_r112);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CricketComponent_div_4_div_1_div_3_Template, 4, 6, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r112 = ctx.$implicit;
        var i_r113 = ctx.index;

        var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r113 === ctx_r111.game.actualPlayerIndex ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r111.settings.fields);
      }
    }

    function CricketComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CricketComponent_div_4_div_1_Template, 4, 5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r82.application.settings.details);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r82.game.players);
      }
    }

    function CricketComponent_app_number_plate_visual_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 4);
      }

      if (rf & 2) {
        var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r83.playground);
      }
    }

    function CricketComponent_app_number_plate_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 4);
      }

      if (rf & 2) {
        var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r84.playground);
      }
    }

    var CricketComponent =
    /*#__PURE__*/
    function (_models_playground_mo3) {
      _inherits(CricketComponent, _models_playground_mo3);

      var _super5 = _createSuper(CricketComponent);

      function CricketComponent(application, game, route, dialogService, soundService, botService, statisticsService) {
        var _this14;

        _classCallCheck(this, CricketComponent);

        _this14 = _super5.call(this, 'Ultimate Cricket', application, game, route, dialogService, soundService, botService, statisticsService, 'cricket');
        _this14.settings = new _models_cricet_settings_model__WEBPACK_IMPORTED_MODULE_3__["CricketSettings"]();
        return _this14;
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
          var _this15 = this;

          this.game.players.forEach(function (p) {
            return p.score = _this15.getPlayerTotal(p);
          });
          var punishStyle = this.settings.isPunishGame() || this.settings.isBlackOutGame();
          this.game.players.forEach(function (p) {
            return p.setWin(_this15.isPlayerDone(p) && (!punishStyle && _this15.game.isTheBestPlayer(p) || punishStyle && _this15.game.isTheWorstPlayer(p)));
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
          var _this16 = this;

          if (this.isPrimaryField(fieldIndex)) {
            var playerFieldCount = this.getPlayerState(this.getPlayerToDisplay()).getFieldCount(fieldIndex);
            var remaining = ''.padStart(3 - playerFieldCount, '●');
            return remaining + '\n' + this.game.players.filter(function (p) {
              return _this16.isFieldDoneForPlayer(p, fieldIndex);
            }).map(function (p) {
              return p.name.substr(0, 1);
            }).join(',').toUpperCase();
          } else if (this.isSecondaryField(fieldIndex)) {
            return this.game.players.filter(function (p) {
              return !_this16.isFieldDoneForPlayer(p, fieldIndex);
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
          var _this17 = this;

          this.playerToDisplay = player;
          setTimeout(function () {
            return _this17.playerToDisplay = null;
          }, 1500);
        }
      }, {
        key: "decoratePlayerStat",
        value: function decoratePlayerStat(player) {
          return player.name;
        }
      }, {
        key: "getGameConfig",
        value: function getGameConfig() {
          return this.settings.fields.length + ',' + this.settings.style;
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
          var _this18 = this;

          var total = 0;
          this.settings.fields.forEach(function (fieldIndex) {
            if (_this18.isFieldDoneForPlayer(player, fieldIndex)) {
              total += (_this18.getPlayerState(player).getFieldCount(fieldIndex) - 3) * _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex);
            }
          }, this);
          return total;
        }
      }, {
        key: "getPlayerTotalForPunishGame",
        value: function getPlayerTotalForPunishGame(player) {
          var _this19 = this;

          var total = 0;
          this.settings.fields.forEach(function (fieldIndex) {
            total += _this19.getPlayerState(player).getPunishCount(fieldIndex) * _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex);
          }, this);
          return total;
        }
      }, {
        key: "punishPlayers",
        value: function punishPlayers(fieldIndex) {
          var _this20 = this;

          this.game.players.forEach(function (player) {
            if (!_this20.isFieldDoneForPlayer(player, fieldIndex)) {
              _this20.getPlayerState(player).setPunishCount(fieldIndex, _this20.getPlayerState(player).getPunishCount(fieldIndex) + _this20.multiplier);
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
          var _this21 = this;

          var closed = true;
          this.game.players.forEach(function (player) {
            closed = closed && _this21.isFieldDoneForPlayer(player, fieldIndex);
          }, this);
          return closed;
        }
      }, {
        key: "isFieldClosedForOthers",
        value: function isFieldClosedForOthers(player, fieldIndex) {
          var _this22 = this;

          var closed = true;
          this.game.players.forEach(function (p) {
            if (p.id !== player.id) {
              closed = closed && _this22.isFieldDoneForPlayer(p, fieldIndex);
            }
          }, this);
          return closed;
        }
      }, {
        key: "isPlayerDone",
        value: function isPlayerDone(player) {
          var _this23 = this;

          var done = true;
          this.settings.fields.forEach(function (fieldIndex) {
            done = done && _this23.isFieldDoneForPlayer(player, fieldIndex);
          });
          return done;
        }
      }]);

      return CricketComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    CricketComponent.ɵfac = function CricketComponent_Factory(t) {
      return new (t || CricketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"]));
    };

    CricketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CricketComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 7,
      consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], ["class", "button", 3, "primary", "click", 4, "ngFor", "ngForOf"], [1, "button", "shortmedium", 3, "click"], [1, "button", 3, "click"], [1, "player_container"], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "player"], [1, "field-set"], [3, "class", 4, "ngFor", "ngForOf"], [1, "small"]],
      template: function CricketComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CricketComponent_app_settings_1_Template, 48, 10, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CricketComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CricketComponent_div_4_Template, 2, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CricketComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CricketComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_18__["NumberPlateComponent"]],
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
        }, {
          type: _services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"]
        }, {
          type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"]
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

    var CricketModule =
    /*#__PURE__*/
    _createClass(function CricketModule() {
      _classCallCheck(this, CricketModule);
    });

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
          var _this24 = this;

          for (var i = 0; i < this.numbs.length; i++) {
            this.numbs[i] = false;
          }

          fields.forEach(function (f) {
            return _this24.numbs[f - 1] = true;
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
        var _this25;

        _classCallCheck(this, CricketState);

        _this25 = _super6.call(this);
        _this25.fieldCount = [];
        _this25.punishCount = [];
        _this25.actFieldIndex = 0;
        return _this25;
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


    var _services_bot_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ~services/bot.service */
    "./src/app/shared/services/bot.service.ts");
    /* harmony import */


    var _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~services/statistics.service */
    "./src/app/shared/services/statistics.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ~components/number-plate-visual/number-plate-visual.component */
    "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function DuelComponent_app_settings_1_button_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r302 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_button_23_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r302);

          var i_r300 = ctx.index;

          var ctx_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r301.settings.setNumber(i_r300);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var numb_r299 = ctx.$implicit;
        var i_r300 = ctx.index;

        var ctx_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r298.settings.isFieldAllowed(i_r300));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r299 === 21 ? "B" : numb_r299, " ");
      }
    }

    function DuelComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r304 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DuelComponent_app_settings_1_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304);

          var ctx_r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r303.settings.startPoint = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Boarding");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DuelComponent_app_settings_1_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304);

          var ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r305.settings.targetPoint = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Punishment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DuelComponent_app_settings_1_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304);

          var ctx_r306 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r306.settings.punishment = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304);

          var ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r307.settings.toggleHandOver();
        });

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304);

          var ctx_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r308.settings.upper();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Upper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304);

          var ctx_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r309.settings.lower();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lower");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304);

          var ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r310.settings.left();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304);

          var ctx_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r311.settings.right();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304);

          var ctx_r312 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r312.settings.odd();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Odd");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304);

          var ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r313.settings.even();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Even");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304);

          var ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r314.settings.prime();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Prime");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_39_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304);

          var ctx_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r315.settings.notPrime();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Not prime");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_41_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304);

          var ctx_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r316.settings.randomize(5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Random 05");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_43_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304);

          var ctx_r317 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r317.settings.randomize(10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Random 10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_45_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304);

          var ctx_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r318.settings.randomize(15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Random 15");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_47_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304);

          var ctx_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r319.settings.small();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_49_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304);

          var ctx_r320 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r320.settings.high();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "High");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_51_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304);

          var ctx_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r321.settings.star();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_53_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304);

          var ctx_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r322.settings.cross();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Cross");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DuelComponent_app_settings_1_Template_button_click_55_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r304);

          var ctx_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r323.settings.all();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "All");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r293.playground);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r293.settings.startPoint);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r293.settings.targetPoint);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r293.settings.punishment);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r293.settings.handover ? "primary" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r293.settings.getNumbers());
      }
    }

    function DuelComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 4);
      }

      if (rf & 2) {
        var ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r294.playground);
      }
    }

    function DuelComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r325 = ctx.$implicit;
        var i_r326 = ctx.index;

        var ctx_r324 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player ", i_r326 === ctx_r324.game.actualPlayerIndex ? "highlighted" : "", " ", ctx_r324.isInactive(player_r325) ? "inactive" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r325)("hasContent", false);
      }
    }

    function DuelComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DuelComponent_div_4_div_1_Template, 2, 6, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r295.application.settings.details);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r295.game.players);
      }
    }

    function DuelComponent_app_number_plate_visual_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 4);
      }

      if (rf & 2) {
        var ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r296.playground);
      }
    }

    function DuelComponent_app_number_plate_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 4);
      }

      if (rf & 2) {
        var ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r297.playground);
      }
    }

    var DuelComponent =
    /*#__PURE__*/
    function (_models_playground_mo4) {
      _inherits(DuelComponent, _models_playground_mo4);

      var _super7 = _createSuper(DuelComponent);

      function DuelComponent(application, game, route, dialogService, soundService, botService, statisticsService) {
        var _this26;

        _classCallCheck(this, DuelComponent);

        _this26 = _super7.call(this, 'Duel', application, game, route, dialogService, soundService, botService, statisticsService, 'duel', 2);
        _this26.settings = new _models_duel_settings_model__WEBPACK_IMPORTED_MODULE_3__["DuelSettings"]();
        return _this26;
      }

      _createClass(DuelComponent, [{
        key: "calculatePoints",
        value: function calculatePoints(player, fieldIndex, score) {
          var _this27 = this;

          var state = this.getPlayerState(player);
          var actualScore = score * this.multiplier;

          if (score === 0) {
            player.score -= this.settings.punishment;
          } else if (state.ownFields.some(function (i) {
            return i === fieldIndex;
          })) {
            player.score += actualScore;
          } else if (this.isNotOwnField(fieldIndex)) {
            player.score -= actualScore;

            if (this.settings.handover) {
              var _player = this.game.players.find(function (p) {
                return p != _this27.game.getActualPlayer() && _this27.getPlayerState(p).ownFields.some(function (i) {
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
          var _this28 = this;

          this.game.players.forEach(function (p) {
            return p.setWin(p.score >= _this28.settings.targetPoint);
          });
          var activePlayers = this.game.players.filter(function (p) {
            return !_this28.isInactive(p);
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
          return this.getPlayerState(this.game.getActualPlayer()).ownFields.some(function (i) {
            return i === fieldIndex;
          });
        }
      }, {
        key: "isSecondaryField",
        value: function isSecondaryField(fieldIndex) {
          var _this29 = this;

          return this.settings.isFieldAllowed(fieldIndex) && !this.game.players.some(function (p) {
            return _this29.getPlayerState(p).ownFields.some(function (i) {
              return i === fieldIndex;
            });
          });
        }
      }, {
        key: "isAlertField",
        value: function isAlertField(fieldIndex) {
          var _this30 = this;

          return this.game.players.some(function (p) {
            return p != _this30.game.getActualPlayer() && _this30.getPlayerState(p).ownFields.some(function (i) {
              return i === fieldIndex;
            });
          });
        }
      }, {
        key: "getFieldNote",
        value: function getFieldNote(fieldIndex) {
          var _this31 = this;

          var player = this.game.players.find(function (p) {
            return _this31.getPlayerState(p).ownFields.some(function (i) {
              return i === fieldIndex;
            });
          });

          if (player) {
            return player.name.substr(0, 1).toUpperCase();
          }

          return '';
        }
      }, {
        key: "customReset",
        value: function customReset() {
          var _this32 = this;

          this.game.players.forEach(function (player) {
            player.state = new _models_duel_state_model__WEBPACK_IMPORTED_MODULE_4__["DuelState"]();
            player.score = _this32.settings.startPoint;
          });
        }
      }, {
        key: "getGameConfig",
        value: function getGameConfig() {
          return this.settings.fields.length + ',' + this.settings.targetPoint + ',' + this.settings.startPoint;
        }
      }, {
        key: "isNotOwnField",
        value: function isNotOwnField(fieldIndex) {
          var _this33 = this;

          return !this.settings.isFieldAllowed(fieldIndex) || this.game.players.some(function (p) {
            return p != _this33.game.getActualPlayer() && _this33.getPlayerState(p).ownFields.some(function (i) {
              return i === fieldIndex;
            });
          });
        }
      }]);

      return DuelComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    DuelComponent.ɵfac = function DuelComponent_Factory(t) {
      return new (t || DuelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"]));
    };

    DuelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DuelComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 7,
      consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], [1, "field-set"], ["appearance", "outline", 1, "big"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], [1, "button", "shortmedium", 3, "click"], ["class", "button", 3, "primary", "click", 4, "ngFor", "ngForOf"], [1, "button", 3, "click"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]],
      template: function DuelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DuelComponent_app_settings_1_Template, 57, 7, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DuelComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DuelComponent_div_4_Template, 2, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DuelComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DuelComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_19__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_20__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_21__["NumberPlateComponent"]],
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
        }, {
          type: _services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"]
        }, {
          type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"]
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

    var DuelModule =
    /*#__PURE__*/
    _createClass(function DuelModule() {
      _classCallCheck(this, DuelModule);
    });

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
        var _this34;

        _classCallCheck(this, DuelSettings);

        _this34 = _super8.call(this);

        _this34.star();

        _this34.startPoint = 30;
        _this34.targetPoint = 200;
        _this34.punishment = 10;
        _this34.handover = true;
        return _this34;
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
        var _this35;

        _classCallCheck(this, DuelState);

        _this35 = _super9.call(this);
        _this35.ownFields = [];
        return _this35;
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


    var _services_bot_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ~services/bot.service */
    "./src/app/shared/services/bot.service.ts");
    /* harmony import */


    var _services_statistics_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ~services/statistics.service */
    "./src/app/shared/services/statistics.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
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


    var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ~components/number-plate-visual/number-plate-visual.component */
    "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function FivesComponent_app_settings_1_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FivesComponent_app_settings_1_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r197);

          var divider_r195 = ctx.$implicit;

          var ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r196.settings.setDivider(divider_r195);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var divider_r195 = ctx.$implicit;

        var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r193.settings.divider === divider_r195);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](divider_r195);
      }
    }

    function FivesComponent_app_settings_1_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FivesComponent_app_settings_1_button_12_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r200);

          var limit_r198 = ctx.$implicit;

          var ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r199.settings.setLimit(limit_r198);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var limit_r198 = ctx.$implicit;

        var ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r194.settings.limit === limit_r198);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](limit_r198);
      }
    }

    function FivesComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FivesComponent_app_settings_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r202);

          var ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r201.settings.toggleNoCheat();
        });

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
      }

      if (rf & 2) {
        var ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r188.playground);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r188.settings.noCheat);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r188.settings.getSelectableDividers());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r188.settings.getSelectableLimits());
      }
    }

    function FivesComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 4);
      }

      if (rf & 2) {
        var ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r189.playground);
      }
    }

    function FivesComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r204 = ctx.$implicit;
        var i_r205 = ctx.index;

        var ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r205 === ctx_r203.game.actualPlayerIndex ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r204)("hasContent", false);
      }
    }

    function FivesComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FivesComponent_div_4_div_1_Template, 2, 5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r190.application.settings.details);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r190.game.players);
      }
    }

    function FivesComponent_app_number_plate_visual_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 4);
      }

      if (rf & 2) {
        var ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r191.playground);
      }
    }

    function FivesComponent_app_number_plate_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 4);
      }

      if (rf & 2) {
        var ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r192.playground);
      }
    }

    var FivesComponent =
    /*#__PURE__*/
    function (_models_playground_mo5) {
      _inherits(FivesComponent, _models_playground_mo5);

      var _super10 = _createSuper(FivesComponent);

      function FivesComponent(application, game, route, dialogService, soundService, botService, statisticsService) {
        var _this36;

        _classCallCheck(this, FivesComponent);

        _this36 = _super10.call(this, 'Fives', application, game, route, dialogService, soundService, botService, statisticsService, 'fives');
        _this36.settings = new _models_fives_settings_model__WEBPACK_IMPORTED_MODULE_3__["FivesSettings"]();
        return _this36;
      }

      _createClass(FivesComponent, [{
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
      }, {
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
          var _this37 = this;

          this.game.players.forEach(function (player) {
            return player.score = _this37.settings.limit;
          });
        }
      }, {
        key: "getGameConfig",
        value: function getGameConfig() {
          return this.settings.divider + ',' + this.settings.limit;
        }
      }]);

      return FivesComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    FivesComponent.ɵfac = function FivesComponent_Factory(t) {
      return new (t || FivesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_8__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_9__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_10__["StatisticsService"]));
    };

    FivesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FivesComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 7,
      consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], [1, "button", 3, "click"], ["class", "button", 3, "primary", "click", 4, "ngFor", "ngForOf"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]],
      template: function FivesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FivesComponent_app_settings_1_Template, 13, 5, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FivesComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FivesComponent_div_4_Template, 2, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FivesComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FivesComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateComponent"]],
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
        }, {
          type: _services_bot_service__WEBPACK_IMPORTED_MODULE_9__["BotService"]
        }, {
          type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_10__["StatisticsService"]
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

    var FivesModule =
    /*#__PURE__*/
    _createClass(function FivesModule() {
      _classCallCheck(this, FivesModule);
    });

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


    var _services_statistics_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~services/statistics.service */
    "./src/app/shared/services/statistics.service.ts");
    /* harmony import */


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _services_sound_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ~services/sound.service */
    "./src/app/shared/services/sound.service.ts");
    /* harmony import */


    var _services_bot_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~services/bot.service */
    "./src/app/shared/services/bot.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ~components/number-plate-visual/number-plate-visual.component */
    "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function HareAndHoundComponent_app_settings_1_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HareAndHoundComponent_app_settings_1_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r214);

          var start_r212 = ctx.$implicit;

          var ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r213.settings.setHoundStart(start_r212 - 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var start_r212 = ctx.$implicit;

        var ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r211.settings.houndStartIndex + 1 === start_r212);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](start_r212);
      }
    }

    function HareAndHoundComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hound start position");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HareAndHoundComponent_app_settings_1_button_3_Template, 2, 3, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r206.playground);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r206.settings.getSelectableHoundStart());
      }
    }

    function HareAndHoundComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 4);
      }

      if (rf & 2) {
        var ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r207.playground);
      }
    }

    function HareAndHoundComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r216 = ctx.$implicit;
        var i_r217 = ctx.index;

        var ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r217 === ctx_r215.game.actualPlayerIndex ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r216)("hasContent", false);
      }
    }

    function HareAndHoundComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HareAndHoundComponent_div_4_div_1_Template, 2, 5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r208.application.settings.details);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r208.game.players);
      }
    }

    function HareAndHoundComponent_app_number_plate_visual_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 4);
      }

      if (rf & 2) {
        var ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r209.playground);
      }
    }

    function HareAndHoundComponent_app_number_plate_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 4);
      }

      if (rf & 2) {
        var ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r210.playground);
      }
    }

    var HareAndHoundComponent =
    /*#__PURE__*/
    function (_models_playground_mo6) {
      _inherits(HareAndHoundComponent, _models_playground_mo6);

      var _super11 = _createSuper(HareAndHoundComponent);

      function HareAndHoundComponent(application, game, route, dialogService, soundService, botService, statisticsService) {
        var _this38;

        _classCallCheck(this, HareAndHoundComponent);

        _this38 = _super11.call(this, 'Hare and Hound', application, game, route, dialogService, soundService, botService, statisticsService, 'hare-hound', 2, 2);
        _this38.settings = new _models_hare_and_hound_settings_model__WEBPACK_IMPORTED_MODULE_3__["HareAndHoundSettings"]();
        return _this38;
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
          var _this39 = this;

          player.setWin(this.isHare() && player.score <= 0 || !this.isHare() && player.score + this.settings.getHareStartIndex() <= this.game.players.find(function (p) {
            return _this39.isHare(p);
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
          var _this40 = this;

          if (!this.isFieldEnabled(fieldIndex)) {
            return this.game.players.some(function (p) {
              return fieldIndex === _this40.getFieldIndex(_this40.getPlayerState(p).actFieldIndex);
            });
          }

          return false;
        }
      }, {
        key: "getFieldNote",
        value: function getFieldNote(fieldIndex) {
          var _this41 = this;

          var owners = this.game.players.filter(function (p) {
            return _this41.getFieldIndex(_this41.getPlayerState(p).actFieldIndex) === fieldIndex;
          }).map(function (p) {
            return p.name.substr(0, 1);
          });
          return !!owners.length ? owners.join(',') : '';
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
          var _this42 = this;

          this.game.players.forEach(function (player, index) {
            player.score = _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["FIELDS_COUNT"] - 1;

            if (index === 0) {
              player.state = new _models_hare_and_hound_state_model__WEBPACK_IMPORTED_MODULE_4__["HareAndHoundState"](_this42.settings.getHareStartIndex());
            } else {
              player.state = new _models_hare_and_hound_state_model__WEBPACK_IMPORTED_MODULE_4__["HareAndHoundState"](0);
            }
          });
        }
      }, {
        key: "decoratePlayerStat",
        value: function decoratePlayerStat(player) {
          return player.name + _services_statistics_service__WEBPACK_IMPORTED_MODULE_5__["STAT_NAME_SEPARATOR"] + "".concat(this.isHare(player) ? '0' : '1');
        }
      }, {
        key: "getGameConfig",
        value: function getGameConfig() {
          return 20 - _models_hare_and_hound_settings_model__WEBPACK_IMPORTED_MODULE_3__["HareAndHoundSettings"].getBaseFields().indexOf(this.settings.houndStartIndex) + '';
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
      return new (t || HareAndHoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_10__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_11__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_5__["StatisticsService"]));
    };

    HareAndHoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HareAndHoundComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 7,
      consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], ["class", "button", 3, "primary", "click", 4, "ngFor", "ngForOf"], [1, "button", 3, "click"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]],
      template: function HareAndHoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HareAndHoundComponent_app_settings_1_Template, 4, 2, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HareAndHoundComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HareAndHoundComponent_div_4_Template, 2, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HareAndHoundComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HareAndHoundComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateComponent"]],
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
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationStateService"]
        }, {
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"]
        }, {
          type: _services_sound_service__WEBPACK_IMPORTED_MODULE_10__["SoundService"]
        }, {
          type: _services_bot_service__WEBPACK_IMPORTED_MODULE_11__["BotService"]
        }, {
          type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_5__["StatisticsService"]
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

    var HareAndHoundModule =
    /*#__PURE__*/
    _createClass(function HareAndHoundModule() {
      _classCallCheck(this, HareAndHoundModule);
    });

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
          return [7, 16, 8, 11, 14, 9, 12, 5];
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
        var _this43;

        _classCallCheck(this, HareAndHoundState);

        _this43 = _super12.call(this);
        _this43.actFieldIndex = actFieldIndex;
        return _this43;
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


    var _services_bot_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ~services/bot.service */
    "./src/app/shared/services/bot.service.ts");
    /* harmony import */


    var _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~services/statistics.service */
    "./src/app/shared/services/statistics.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ~components/number-plate-visual/number-plate-visual.component */
    "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function ImitatorComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Number of Round");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r251);

          var ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r250.settings.setRound(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 3 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r251);

          var ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r252.settings.setRound(5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " 5 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r251);

          var ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r253.settings.setRound(10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " 10 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r251);

          var ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r254.settings.setRound(15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 15 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImitatorComponent_app_settings_1_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r251);

          var ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r255.settings.setRound(20);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 20 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r245.playground);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r245.settings.round === 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r245.settings.round === 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r245.settings.round === 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r245.settings.round === 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r245.settings.round === 20);
      }
    }

    function ImitatorComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 7);
      }

      if (rf & 2) {
        var ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r246.playground)("reversRound", ctx_r246.settings.round);
      }
    }

    function ImitatorComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r257 = ctx.$implicit;
        var i_r258 = ctx.index;

        var ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r258 === ctx_r256.game.actualPlayerIndex ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r257)("hasContent", false);
      }
    }

    function ImitatorComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImitatorComponent_div_4_div_1_Template, 2, 5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r247.application.settings.details);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r247.game.players);
      }
    }

    function ImitatorComponent_app_number_plate_visual_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 5);
      }

      if (rf & 2) {
        var ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r248.playground);
      }
    }

    function ImitatorComponent_app_number_plate_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 5);
      }

      if (rf & 2) {
        var ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r249.playground);
      }
    }

    var ImitatorComponent =
    /*#__PURE__*/
    function (_models_playground_mo7) {
      _inherits(ImitatorComponent, _models_playground_mo7);

      var _super13 = _createSuper(ImitatorComponent);

      function ImitatorComponent(application, game, route, dialogService, soundService, botService, statisticsService) {
        var _this44;

        _classCallCheck(this, ImitatorComponent);

        _this44 = _super13.call(this, 'Imitator', application, game, route, dialogService, soundService, botService, statisticsService, 'imitator');
        _this44.nextEnabled = false;
        _this44.settings = new _models_imitator_settings_model__WEBPACK_IMPORTED_MODULE_3__["ImitatorSettings"]();
        return _this44;
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
          var _this45 = this;

          if (this.game.isTheLastPlayer(player) && this.game.round + 1 === this.settings.round && this.game.actualThrow === 2) {
            this.game.players.forEach(function (p) {
              return p.setWin(_this45.game.isTheBestPlayer(p));
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
      }, {
        key: "getGameConfig",
        value: function getGameConfig() {
          return this.settings.round + '';
        }
      }]);

      return ImitatorComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    ImitatorComponent.ɵfac = function ImitatorComponent_Factory(t) {
      return new (t || ImitatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"]));
    };

    ImitatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImitatorComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 7,
      consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], [3, "playground", "reversRound", 4, "ngIf"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], [1, "button", 3, "click"], [3, "playground", "reversRound"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]],
      template: function ImitatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImitatorComponent_app_settings_1_Template, 13, 11, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImitatorComponent_app_game_toolbar_3_Template, 1, 2, "app-game-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImitatorComponent_div_4_Template, 2, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ImitatorComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ImitatorComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateComponent"]],
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
        }, {
          type: _services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"]
        }, {
          type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"]
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

    var ImitatorModule =
    /*#__PURE__*/
    _createClass(function ImitatorModule() {
      _classCallCheck(this, ImitatorModule);
    });

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
        var _this46;

        _classCallCheck(this, ImitatorState);

        _this46 = _super14.call(this);
        _this46.actFieldIndex = Math.floor(Math.random() * 20);
        _this46.punished = false;
        return _this46;
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


    var _services_bot_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ~services/bot.service */
    "./src/app/shared/services/bot.service.ts");
    /* harmony import */


    var _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~services/statistics.service */
    "./src/app/shared/services/statistics.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ~components/number-plate-visual/number-plate-visual.component */
    "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function KillerComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KillerComponent_app_settings_1_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r178);

          var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r177.settings.numberOfLives = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Boarding");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KillerComponent_app_settings_1_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r178);

          var ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r179.settings.boardingLimit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KillerComponent_app_settings_1_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r178);

          var ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r180.settings.toggleSuicide();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Suicide");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r172.playground);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r172.settings.numberOfLives);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r172.settings.boardingLimit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r172.settings.suicide);
      }
    }

    function KillerComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 4);
      }

      if (rf & 2) {
        var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r173.playground);
      }
    }

    function KillerComponent_div_4_div_1_ng_container_2_ng_container_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Boarding: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var player_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r185.getPlayerState(player_r182).boarding);
      }
    }

    function KillerComponent_div_4_div_1_ng_container_2_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, KillerComponent_div_4_div_1_ng_container_2_ng_container_11_Template, 4, 1, "ng-container", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var player_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r184.getPlayerField(player_r182));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", player_r182.life, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r184.getPlayerState(player_r182).killer);
      }
    }

    function KillerComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KillerComponent_div_4_div_1_ng_container_2_Template, 12, 3, "ng-container", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r182 = ctx.$implicit;
        var i_r183 = ctx.index;

        var ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player ", i_r183 === ctx_r181.game.actualPlayerIndex ? "highlighted" : "", " ", player_r182.isInactive() ? "inactive" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r182)("scoreDisplayed", false)("highlighted", ctx_r181.getPlayerState(player_r182).killer);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r181.getPlayerField(player_r182) !== "0");
      }
    }

    function KillerComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KillerComponent_div_4_div_1_Template, 3, 8, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r174.application.settings.details);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r174.game.players);
      }
    }

    function KillerComponent_app_number_plate_visual_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 4);
      }

      if (rf & 2) {
        var ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r175.playground);
      }
    }

    function KillerComponent_app_number_plate_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 4);
      }

      if (rf & 2) {
        var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r176.playground);
      }
    }

    var DANGER_ZONE_ICON = 'sentiment_very_dissatisfied';

    var KillerComponent =
    /*#__PURE__*/
    function (_models_playground_mo8) {
      _inherits(KillerComponent, _models_playground_mo8);

      var _super15 = _createSuper(KillerComponent);

      function KillerComponent(application, game, route, dialogService, soundService, botService, statisticsService) {
        var _this47;

        _classCallCheck(this, KillerComponent);

        _this47 = _super15.call(this, 'Killer', application, game, route, dialogService, soundService, botService, statisticsService, 'killer', 2);
        _this47.settings = new _models_killer_settings_model__WEBPACK_IMPORTED_MODULE_4__["KillerSettings"]();
        _this47.nextEnabled = false;
        _this47.zeroEnabled = false;
        _this47.multiEnabled = false;
        return _this47;
      }

      _createClass(KillerComponent, [{
        key: "calculatePoints",
        value: function calculatePoints(player, fieldIndex, score) {
          var _this48 = this;

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
                  var s = _this48.getPlayerState(p);

                  if (fieldIndex === s.actField) {
                    p.life -= _this48.multiplier;

                    _this48.soundService.no();

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
          var _this49 = this;

          if (this.game.players.some(function (p) {
            var state = _this49.getPlayerState(p);

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

          if (owner) {
            var shortName = owner.name.substr(0, 1);
            var boarding = owner.state.boarding;

            if (owner.state.killer) {
              return "".concat(shortName, ": ").concat(owner.life);
            }

            return "".concat(shortName, ": ").concat(boarding + ' - ' + owner.life);
          }

          return '';
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
          var _this50 = this;

          this.game.players.forEach(function (player) {
            player.state = new _models_killer_state_model__WEBPACK_IMPORTED_MODULE_3__["KillerState"](_this50.settings.boardingLimit);
            player.life = _this50.settings.numberOfLives;
          });
        }
      }, {
        key: "customSettingsValidation",
        value: function customSettingsValidation() {
          return this.settings.numberOfLives > 0 && this.settings.boardingLimit > 0;
        }
      }, {
        key: "decoratePlayerStat",
        value: function decoratePlayerStat(player) {
          return player.name;
        }
      }, {
        key: "getGameConfig",
        value: function getGameConfig() {
          return this.settings.boardingLimit + ',' + this.settings.numberOfLives;
        }
      }, {
        key: "getAllEnabledFields",
        value: function getAllEnabledFields() {
          var _this51 = this;

          return this.game.players.filter(function (p) {
            return !p.isInactive();
          }).map(function (p) {
            return _this51.getPlayerState(p).actField;
          });
        }
      }]);

      return KillerComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    KillerComponent.ɵfac = function KillerComponent_Factory(t) {
      return new (t || KillerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"]));
    };

    KillerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KillerComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 7,
      consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], [1, "field-set"], ["appearance", "outline", 1, "big"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], [1, "button", "shortmedium", 3, "click"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "scoreDisplayed", "highlighted"], [4, "ngIf"], [1, "score"], [1, "clear"], [1, "line"]],
      template: function KillerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KillerComponent_app_settings_1_Template, 15, 5, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KillerComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KillerComponent_div_4_Template, 2, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, KillerComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, KillerComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDivider"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_19__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_20__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_21__["NumberPlateComponent"]],
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
        }, {
          type: _services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"]
        }, {
          type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"]
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

    var KillerModule =
    /*#__PURE__*/
    _createClass(function KillerModule() {
      _classCallCheck(this, KillerModule);
    });

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
        var _this52;

        var boarding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;

        _classCallCheck(this, KillerState);

        _this52 = _super16.call(this);
        _this52.boarding = boarding;
        _this52.actField = -1;
        _this52.killer = false;
        return _this52;
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


    var _services_bot_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ~services/bot.service */
    "./src/app/shared/services/bot.service.ts");
    /* harmony import */


    var _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~services/statistics.service */
    "./src/app/shared/services/statistics.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ~components/number-plate-visual/number-plate-visual.component */
    "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function KnockoutComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KnockoutComponent_app_settings_1_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r224);

          var ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r223.settings.numberOfLives = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KnockoutComponent_app_settings_1_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r224);

          var ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r225.settings.toggleKiller();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Below the belt ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r218.playground);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r218.settings.numberOfLives);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r218.settings.killer);
      }
    }

    function KnockoutComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 10);
      }

      if (rf & 2) {
        var ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r219.playground)("info", ctx_r219.getInfo());
      }
    }

    function KnockoutComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r227 = ctx.$implicit;
        var i_r228 = ctx.index;

        var ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("player ", i_r228 === ctx_r226.game.actualPlayerIndex ? "highlighted" : "", " ", player_r227.isInactive() ? "inactive" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r227)("scoreDisplayed", true)("lifeDisplayed", true)("hasContent", false);
      }
    }

    function KnockoutComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KnockoutComponent_div_4_div_1_Template, 2, 8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r220.application.settings.details);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r220.game.players);
      }
    }

    function KnockoutComponent_app_number_plate_visual_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 5);
      }

      if (rf & 2) {
        var ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r221.playground);
      }
    }

    function KnockoutComponent_app_number_plate_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 5);
      }

      if (rf & 2) {
        var ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r222.playground);
      }
    }

    var KnockoutComponent =
    /*#__PURE__*/
    function (_models_playground_mo9) {
      _inherits(KnockoutComponent, _models_playground_mo9);

      var _super17 = _createSuper(KnockoutComponent);

      function KnockoutComponent(application, game, route, dialogService, soundService, botService, statisticsService) {
        var _this53;

        _classCallCheck(this, KnockoutComponent);

        _this53 = _super17.call(this, 'Knockout', application, game, route, dialogService, soundService, botService, statisticsService, 'knockout', 2);
        _this53.settings = new _models_knockout_settings_model__WEBPACK_IMPORTED_MODULE_3__["KnockoutSettings"]();
        return _this53;
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
            } else if (this.settings.killer && score !== 0 && score === player.getThrowsTotal() && player.throwsHistory[player.throwsHistory.length - 1].score !== 0) {
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
          var _this54 = this;

          this.game.players.forEach(function (player) {
            player.state = new _models_knockout_state_model__WEBPACK_IMPORTED_MODULE_4__["KnockoutState"]();
            player.life = _this54.settings.numberOfLives;
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
      }, {
        key: "decoratePlayerStat",
        value: function decoratePlayerStat(player) {
          return player.name;
        }
      }]);

      return KnockoutComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    KnockoutComponent.ɵfac = function KnockoutComponent_Factory(t) {
      return new (t || KnockoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"]));
    };

    KnockoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KnockoutComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 7,
      consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], [3, "playground", "info", 4, "ngIf"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], [1, "field-set"], ["appearance", "outline", 1, "big"], ["type", "number", "matInput", "", 3, "ngModel", "ngModelChange"], [1, "button", "medium", 3, "click"], [3, "playground", "info"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "scoreDisplayed", "lifeDisplayed", "hasContent"]],
      template: function KnockoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KnockoutComponent_app_settings_1_Template, 11, 4, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KnockoutComponent_app_game_toolbar_3_Template, 1, 2, "app-game-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KnockoutComponent_div_4_Template, 2, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, KnockoutComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, KnockoutComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_17__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_18__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_19__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_20__["NumberPlateComponent"]],
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
        }, {
          type: _services_bot_service__WEBPACK_IMPORTED_MODULE_10__["BotService"]
        }, {
          type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_11__["StatisticsService"]
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

    var KnockoutModule =
    /*#__PURE__*/
    _createClass(function KnockoutModule() {
      _classCallCheck(this, KnockoutModule);
    });

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
        var _this55;

        var score = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        _classCallCheck(this, KnockoutState);

        _this55 = _super18.call(this);
        _this55.score = score;
        return _this55;
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

    var MaterialModule =
    /*#__PURE__*/
    _createClass(function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    });

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
        var _this56;

        _classCallCheck(this, ScamSettings);

        _this56 = _super19.call(this);
        _this56.stopper = false;
        _this56.punishment = true;
        _this56.reverse = false;
        _this56.punishmentValue = 25;
        _this56.style = 1;

        _this56.all();

        return _this56;
      }

      _createClass(ScamSettings, [{
        key: "toggleStopper",
        value: function toggleStopper() {
          this.stopper = !this.stopper;
        }
      }, {
        key: "toggleReverse",
        value: function toggleReverse() {
          this.reverse = !this.reverse;
        }
      }, {
        key: "togglePunishment",
        value: function togglePunishment() {
          this.punishment = !this.punishment;
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


    var _services_bot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ~services/bot.service */
    "./src/app/shared/services/bot.service.ts");
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


    var _services_statistics_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ~services/statistics.service */
    "./src/app/shared/services/statistics.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
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


    var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ~components/number-plate-visual/number-plate-visual.component */
    "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function ScamComponent_app_settings_1_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r268 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r268);

          var i_r266 = ctx.index;

          var ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r267.settings.setNumber(i_r266);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var numb_r265 = ctx.$implicit;
        var i_r266 = ctx.index;

        var ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r264.settings.isFieldAllowed(i_r266));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r265 === 21 ? "B" : numb_r265, " ");
      }
    }

    function ScamComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fields");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScamComponent_app_settings_1_button_3_Template, 2, 3, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r269.settings.upper();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Upper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r271.settings.lower();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lower");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r272.settings.left();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r273.settings.right();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r274.settings.odd();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Odd");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r275.settings.even();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Even");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r276.settings.prime();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Prime");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r277.settings.notPrime();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Not prime");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r278.settings.randomize(5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Random 05");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r279.settings.randomize(10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Random 10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r280.settings.randomize(15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Random 15");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r281.settings.small();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r282.settings.high();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "High");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r283.settings.star();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r284.settings.cross();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cross");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r285.settings.all();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "All");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Style");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_40_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r286.settings.setStyle(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Classic ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_42_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r287.settings.toggleStopper();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Stopper ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_44_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r288.settings.setStyle(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "No Score ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScamComponent_app_settings_1_Template_button_click_46_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270);

          var ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r289.settings.togglePunishment();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Punish(25) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r259.playground);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r259.settings.getNumbers());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r259.settings.style == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r259.settings.stopper);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r259.settings.style == 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r259.settings.punishment);
      }
    }

    function ScamComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 4);
      }

      if (rf & 2) {
        var ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r260.playground);
      }
    }

    function ScamComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r291 = ctx.$implicit;
        var i_r292 = ctx.index;

        var ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r292 === ctx_r290.game.actualPlayerIndex ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r291)("hasContent", false)("highlighted", ctx_r290.settings.stopper && ctx_r290.game.isTheFirstPlayer(player_r291))("scoreDisplayed", !ctx_r290.settings.stopper || !ctx_r290.game.isTheFirstPlayer(player_r291));
      }
    }

    function ScamComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScamComponent_div_4_div_1_Template, 2, 7, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r261.application.settings.details);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r261.game.players);
      }
    }

    function ScamComponent_app_number_plate_visual_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 4);
      }

      if (rf & 2) {
        var ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r262.playground);
      }
    }

    function ScamComponent_app_number_plate_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 4);
      }

      if (rf & 2) {
        var ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r263.playground);
      }
    }

    var ScamComponent =
    /*#__PURE__*/
    function (_models_playground_mo10) {
      _inherits(ScamComponent, _models_playground_mo10);

      var _super20 = _createSuper(ScamComponent);

      function ScamComponent(application, game, route, dialogService, soundService, botService, statisticsService) {
        var _this57;

        _classCallCheck(this, ScamComponent);

        _this57 = _super20.call(this, 'Scam', application, game, route, dialogService, soundService, botService, statisticsService, 'scam', 2);
        _this57.settings = new _models_scam_settings_model__WEBPACK_IMPORTED_MODULE_3__["ScamSettings"]();
        return _this57;
      }

      _createClass(ScamComponent, [{
        key: "calculatePoints",
        value: function calculatePoints(player, fieldIndex, score) {
          if (!!this.game.numbs[fieldIndex]) {
            if (this.settings.stopper && this.game.isTheFirstPlayer(player)) {
              this.game.numbs[fieldIndex] = 0;
            } else if (this.settings.stopper) {
              player.score += (this.settings.isNoScoreGame() ? 1 : score) * this.multiplier * (this.settings.reverse ? -1 : 1);
            } else {
              player.score += (this.settings.isNoScoreGame() ? 1 : score) * this.multiplier * (this.settings.reverse ? -1 : 1);
              this.game.numbs[fieldIndex] = 0;
            }
          } else if (this.settings.punishment && (this.settings.stopper && !this.game.isTheFirstPlayer(player) || !this.settings.stopper)) {
            var newScore = score === 0 ? this.settings.punishmentValue : score;
            var scr = (this.settings.isNoScoreGame() ? 1 : newScore) * this.multiplier;
            player.score -= scr;
          }
        }
      }, {
        key: "checkPlayerState",
        value: function checkPlayerState(player) {
          if (!this.game.numbs.some(function (n) {
            return n;
          })) {
            var bests = this.game.getTheBestPlayers();
            this.game.players.forEach(function (p) {
              return p.setWin(bests.some(function (b) {
                return b.name === p.name;
              }));
            });
          }

          if (this.game.isTheLastThrow()) {
            this.game.nextPlayer();
          }
        }
      }, {
        key: "isPrimaryField",
        value: function isPrimaryField(fieldIndex) {
          return !!this.game.numbs[fieldIndex];
        }
      }, {
        key: "isAlertField",
        value: function isAlertField(fieldIndex) {
          return this.settings.punishment && !this.game.numbs[fieldIndex];
        }
      }, {
        key: "isFieldEnabled",
        value: function isFieldEnabled(fieldIndex) {
          return this.settings.punishment || !!this.game.numbs[fieldIndex];
        }
      }, {
        key: "customReset",
        value: function customReset() {
          var _this58 = this;

          this.game.numbs = this.settings.numbs.map(function (i) {
            return i ? 1 : 0;
          });
          this.settings.fields.forEach(function (f) {
            return _this58.settings.numbs[f] = true;
          });
        }
      }, {
        key: "getGameConfig",
        value: function getGameConfig() {
          return this.settings.fields.length + '';
        }
      }, {
        key: "botThrow",
        value: function botThrow() {
          var _this59 = this;

          var fields = _toConsumableArray(Array(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["FIELDS_COUNT"]).keys());

          if (this.settings.reverse) {
            fields.reverse();
          }

          fields = fields.filter(function (index) {
            return _this59.game.numbs[index];
          }).slice(-4).slice(0, 3);
          var index = this.botService.calculateMultiTarget(fields);

          if (this.botService.isDoublePoint()) {
            this.doublePoint();
          } else if (this.botService.isTriplePoint()) {
            this.triplePoint();
          }

          setTimeout(function () {
            _this59.throwNumber([_this59.isFieldEnabled(index) ? _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(index) : 0, _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(index)]);
          }, _services_bot_service__WEBPACK_IMPORTED_MODULE_4__["PLAYER_DELAY_FAST"]);
        }
      }]);

      return ScamComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    ScamComponent.ɵfac = function ScamComponent_Factory(t) {
      return new (t || ScamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_4__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_10__["StatisticsService"]));
    };

    ScamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ScamComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 7,
      consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], ["class", "button", 3, "primary", "click", 4, "ngFor", "ngForOf"], [1, "button", "shortmedium", 3, "click"], [1, "button", 3, "click"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent", "highlighted", "scoreDisplayed"]],
      template: function ScamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScamComponent_app_settings_1_Template, 48, 10, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScamComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ScamComponent_div_4_Template, 2, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ScamComponent_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ScamComponent_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateComponent"]],
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
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]
        }, {
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]
        }, {
          type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]
        }, {
          type: _services_bot_service__WEBPACK_IMPORTED_MODULE_4__["BotService"]
        }, {
          type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_10__["StatisticsService"]
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

    var ScamModule =
    /*#__PURE__*/
    _createClass(function ScamModule() {
      _classCallCheck(this, ScamModule);
    });

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
        this.halveIt = true;
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
        var _this60;

        _classCallCheck(this, ShanghaiState);

        _this60 = _super21.call(this);
        _this60.fieldCount = [];
        _this60.fieldScore = [];
        return _this60;
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


    var _services_statistics_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~services/statistics.service */
    "./src/app/shared/services/statistics.service.ts");
    /* harmony import */


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _services_sound_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ~services/sound.service */
    "./src/app/shared/services/sound.service.ts");
    /* harmony import */


    var _services_bot_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~services/bot.service */
    "./src/app/shared/services/bot.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ~components/game-toolbar/game-toolbar.component */
    "./src/app/shared/components/game-toolbar/game-toolbar.component.ts");
    /* harmony import */


    var _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ~components/player-score/player-score.component */
    "./src/app/shared/components/player-score/player-score.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");
    /* harmony import */


    var _components_number_plate_shanghai_number_plate_shanghai_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ~components/number-plate-shanghai/number-plate-shanghai.component */
    "./src/app/shared/components/number-plate-shanghai/number-plate-shanghai.component.ts");

    function ShanghaiComponent_app_settings_1_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161);

          var i_r159 = ctx.index;

          var ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r160.settings.setNumber(i_r159);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var numb_r158 = ctx.$implicit;
        var i_r159 = ctx.index;

        var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r157.settings.numbs[i_r159]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", numb_r158 === 21 ? "B" : numb_r158, " ");
      }
    }

    function ShanghaiComponent_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fields");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShanghaiComponent_app_settings_1_button_3_Template, 2, 3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r162.settings.randomize();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Randomize");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r164.settings.toggleNoScore();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No score ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShanghaiComponent_app_settings_1_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r165.settings.toggleHalveIt();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Halve It ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r152.playground);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r152.settings.getNumbers());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r152.settings.noScore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r152.settings.halveIt);
      }
    }

    function ShanghaiComponent_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 5);
      }

      if (rf & 2) {
        var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r153.playground);
      }
    }

    function ShanghaiComponent_div_4_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var field_r170 = ctx.$implicit;

        var player_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("field ", ctx_r169.isActiveField(field_r170) ? "active" : "", " ", ctx_r169.isFieldDoneForPlayer(field_r170) ? "" : "highlighted", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r170 === 20 ? "B" : field_r170 + 1, ": ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r169.getFieldValue(player_r167, field_r170));
      }
    }

    function ShanghaiComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-player-score", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShanghaiComponent_div_4_div_1_div_3_Template, 4, 6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r167 = ctx.$implicit;
        var i_r168 = ctx.index;

        var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r168 === ctx_r166.game.actualPlayerIndex ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r167);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r166.settings.fields);
      }
    }

    function ShanghaiComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShanghaiComponent_div_4_div_1_Template, 4, 5, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r154.application.settings.details);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r154.game.players);
      }
    }

    function ShanghaiComponent_app_number_plate_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 5);
      }

      if (rf & 2) {
        var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r155.playground);
      }
    }

    function ShanghaiComponent_app_number_plate_shanghai_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-shanghai", 14);
      }

      if (rf & 2) {
        var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r156.playground)("actualIndex", ctx_r156.getActualFieldIndex());
      }
    }

    var ShanghaiComponent =
    /*#__PURE__*/
    function (_models_playground_mo11) {
      _inherits(ShanghaiComponent, _models_playground_mo11);

      var _super22 = _createSuper(ShanghaiComponent);

      function ShanghaiComponent(application, game, route, dialogService, soundService, botService, statisticsService) {
        var _this61;

        _classCallCheck(this, ShanghaiComponent);

        _this61 = _super22.call(this, 'Shanghai / Halve It', application, game, route, dialogService, soundService, botService, statisticsService, 'shanghai');
        _this61.settings = new _models_shanghai_settings_model__WEBPACK_IMPORTED_MODULE_3__["ShanghaiSettings"]();
        return _this61;
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
          var _this62 = this;

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
              return p.setWin(_this62.game.isTheBestPlayer(p));
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
        key: "getActualFieldIndex",
        value: function getActualFieldIndex() {
          return this.settings.fields[this.game.round];
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
      }, {
        key: "decoratePlayerStat",
        value: function decoratePlayerStat(player) {
          return player.name + _services_statistics_service__WEBPACK_IMPORTED_MODULE_5__["STAT_NAME_SEPARATOR"] + player.score + (player.win && this.extraEndingMsg ? '/s' : '');
        }
      }, {
        key: "getGameConfig",
        value: function getGameConfig() {
          return this.settings.fields.length + ',' + (this.settings.halveIt ? '1' : '0');
        }
      }]);

      return ShanghaiComponent;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    ShanghaiComponent.ɵfac = function ShanghaiComponent_Factory(t) {
      return new (t || ShanghaiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_10__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_11__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_5__["StatisticsService"]));
    };

    ShanghaiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShanghaiComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 7,
      consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground", "actualIndex", 4, "ngIf"], [3, "playground"], ["class", "button", 3, "primary", "click", 4, "ngFor", "ngForOf"], [1, "button", "shortmedium", 3, "click"], [1, "button", 3, "click"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player"], [1, "field-set"], [1, "small"], [3, "playground", "actualIndex"]],
      template: function ShanghaiComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShanghaiComponent_app_settings_1_Template, 11, 6, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShanghaiComponent_app_game_toolbar_3_Template, 1, 1, "app-game-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShanghaiComponent_div_4_Template, 2, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShanghaiComponent_app_number_plate_5_Template, 1, 1, "app-number-plate", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ShanghaiComponent_app_number_plate_shanghai_6_Template, 1, 2, "app-number-plate-shanghai", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["GameToolbarComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_16__["PlayerScoreComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateComponent"], _components_number_plate_shanghai_number_plate_shanghai_component__WEBPACK_IMPORTED_MODULE_18__["NumberPlateShanghaiComponent"]],
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
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationStateService"]
        }, {
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_7__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"]
        }, {
          type: _services_sound_service__WEBPACK_IMPORTED_MODULE_10__["SoundService"]
        }, {
          type: _services_bot_service__WEBPACK_IMPORTED_MODULE_11__["BotService"]
        }, {
          type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_5__["StatisticsService"]
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

    var ShanghaiModule =
    /*#__PURE__*/
    _createClass(function ShanghaiModule() {
      _classCallCheck(this, ShanghaiModule);
    });

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

    function ConfirmDialogComponent_mat_dialog_content_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-content", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.data.content);
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
      vars: 2,
      consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], ["class", "body-2", 4, "ngIf"], [1, "button", "primary", 3, "click"], [1, "button", 3, "click"], [1, "body-2"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);

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
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"]],
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


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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
        var player_r4 = ctx.$implicit;
        var i_r5 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("winner", player_r4.win);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", i_r5 + 1, ". ", player_r4.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", player_r4.win);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](player_r4.score);
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
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.data.content);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.data.players);
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
      consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], ["class", "body-2", 4, "ngIf"], [1, "button", "primary", 3, "mat-dialog-close"], [1, "body-2"], ["class", "score-line", 3, "winner", 4, "ngFor", "ngForOf"], [1, "score-line"], ["color", "warn", 4, "ngIf"], ["color", "warn"]],
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
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
      styles: [".dialog-container[_ngcontent-%COMP%] {\n  width: 70vw;\n}\n.dialog-container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  white-space: nowrap;\n}\n.dialog-container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-size: 50px;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   .score-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n}\n.dialog-container[_ngcontent-%COMP%]   .score-line.winner[_ngcontent-%COMP%] {\n  background: var(--basic_1);\n}\n.dialog-container[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 30px;\n  padding: 0;\n  margin: 0;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxkaWFsb2dcXGRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBRENFO0VBQ0UsbUJBQUE7QUNDSjtBREVFO0VBQ0UscUJBQUE7QUNBSjtBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FES0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNISjtBREtJO0VBQ0UsMEJBQUE7QUNITjtBRFFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDTko7QURTRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDUEo7QURVRTtFQUNFLG1CQUFBO0FDUko7QURXRTtFQUNFLDZCQUFBO0VBQ0Esc0JBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDcwdnc7XHJcblxyXG4gIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG5cclxuICB0ZCB7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgfVxyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICAuc3VidGl0bGUtMSB7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5zY29yZS1saW5lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAmLndpbm5lciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhc2ljXzEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5wbGF5ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBtYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIG1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XHJcbiAgfVxyXG59XHJcbiIsIi5kaWFsb2ctY29udGFpbmVyIHtcbiAgd2lkdGg6IDcwdnc7XG59XG4uZGlhbG9nLWNvbnRhaW5lciB0ZDpmaXJzdC1jaGlsZCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZGlhbG9nLWNvbnRhaW5lciB0ZCB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1pY29uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmRpYWxvZy1jb250YWluZXIgLnN1YnRpdGxlLTEge1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmRpYWxvZy1jb250YWluZXIgLnNjb3JlLWxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uZGlhbG9nLWNvbnRhaW5lciAuc2NvcmUtbGluZS53aW5uZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYXNpY18xKTtcbn1cbi5kaWFsb2ctY29udGFpbmVyIC5wbGF5ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWFjdGlvbnMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLWJvdHRvbTogLTAuNXJlbTtcbn0iXX0= */"]
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
  "./src/app/shared/components/game-history-dialog/game-history-dialog.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/shared/components/game-history-dialog/game-history-dialog.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: GameHistoryDialogComponent */

  /***/
  function srcAppSharedComponentsGameHistoryDialogGameHistoryDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameHistoryDialogComponent", function () {
      return GameHistoryDialogComponent;
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


    var _services_statistics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ~services/statistics.service */
    "./src/app/shared/services/statistics.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GameHistoryDialogComponent_tr_23_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var stat_r11 = ctx.$implicit;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 7, stat_r11.s, "medium"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 10, ctx_r10.getDuration(stat_r11), "mm:ss"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r11.g);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r11.c);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r11.r + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.getPlayers(stat_r11.w));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.getPlayers(stat_r11.l));
      }
    }

    var GameHistoryDialogComponent =
    /*#__PURE__*/
    function () {
      function GameHistoryDialogComponent(dialogRef, data) {
        _classCallCheck(this, GameHistoryDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        data.statistics.sort(function (a, b) {
          return new Date(b.s).getTime() - new Date(a.s).getTime();
        });
      }

      _createClass(GameHistoryDialogComponent, [{
        key: "getDuration",
        value: function getDuration(stat) {
          return new Date(new Date(stat.f).getTime() - new Date(stat.s).getTime());
        }
      }, {
        key: "getPlayers",
        value: function getPlayers(players) {
          return players.map(function (p) {
            var pna = p.split(_services_statistics_service__WEBPACK_IMPORTED_MODULE_2__["STAT_NAME_SEPARATOR"]);
            var result = pna[0];

            if (pna.length === 2) {
              result += '(' + pna[1] + ')';
            }

            return result;
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }, {
        key: "getAppVersion",
        value: function getAppVersion() {
          return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appVersion ? _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appVersion : '';
        }
      }]);

      return GameHistoryDialogComponent;
    }();

    GameHistoryDialogComponent.ɵfac = function GameHistoryDialogComponent_Factory(t) {
      return new (t || GameHistoryDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
    };

    GameHistoryDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GameHistoryDialogComponent,
      selectors: [["ng-component"]],
      decls: 27,
      vars: 3,
      consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], [1, "body-2"], ["cellpadding", "0", "cellspacing", "0", 1, "statistics-table"], [4, "ngFor", "ngForOf"], [1, "button", "primary", 3, "mat-dialog-close"]],
      template: function GameHistoryDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("v", ctx.getAppVersion(), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.statistics);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: [".dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: space-between;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n.dialog-container[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%] {\n  height: 85vh;\n  max-height: unset !important;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 0 1rem 0;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.2rem;\n  font-weight: normal;\n  font-size: 13px;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS1oaXN0b3J5LWRpYWxvZy9EOlxcRGV2ZWxvcG1lbnRcXGRhcnRzLXNjb3JlYm9hcmQtbmcvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZ2FtZS1oaXN0b3J5LWRpYWxvZ1xcZ2FtZS1oaXN0b3J5LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS1oaXN0b3J5LWRpYWxvZy9nYW1lLWhpc3RvcnktZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0RKO0FESUU7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0FDRko7QURLRTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtBQ0hKO0FETUU7RUFDRSxrQkFBQTtBQ0pKO0FETUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNKTjtBRE1NO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDSlI7QURPTTtFQUNFLGdCQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9nYW1lLWhpc3RvcnktZGlhbG9nL2dhbWUtaGlzdG9yeS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWNvbnRhaW5lciB7XHJcblxyXG4gIC5zdWJ0aXRsZS0xIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIG1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XHJcbiAgfVxyXG5cclxuICAubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogODV2aDtcclxuICAgIG1heC1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBtYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxuICAgIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuXHJcbiAgICAgIHRoLCB0ZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGg6Zmlyc3QtY2hpbGQsIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5kaWFsb2ctY29udGFpbmVyIC5zdWJ0aXRsZS0xIHtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XG59XG4uZGlhbG9nLWNvbnRhaW5lciAubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgaGVpZ2h0OiA4NXZoO1xuICBtYXgtaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAwIDFyZW0gMDtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctY29udGVudCB0YWJsZSB0aCwgLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHRhYmxlIHRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctY29udGVudCB0YWJsZSB0aDpmaXJzdC1jaGlsZCwgLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameHistoryDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          templateUrl: 'game-history-dialog.component.html',
          styleUrls: ['game-history-dialog.component.scss']
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
  "./src/app/shared/components/game-statistics-dialog/game-statistics-dialog.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/shared/components/game-statistics-dialog/game-statistics-dialog.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: GameStatisticsDialogComponent */

  /***/
  function srcAppSharedComponentsGameStatisticsDialogGameStatisticsDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameStatisticsDialogComponent", function () {
      return GameStatisticsDialogComponent;
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

    function GameStatisticsDialogComponent_tr_17_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var stat_r9 = ctx.$implicit;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r9.n);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r9.w);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r9.l);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r9.l + stat_r9.w);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r8.getRatio(stat_r9), " %");
      }
    }

    var GameStatisticsDialogComponent =
    /*#__PURE__*/
    function () {
      function GameStatisticsDialogComponent(dialogRef, data) {
        var _this63 = this;

        _classCallCheck(this, GameStatisticsDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        data.statistics.sort(function (a, b) {
          return _this63.getRatio(b) - _this63.getRatio(a);
        });
      }

      _createClass(GameStatisticsDialogComponent, [{
        key: "getRatio",
        value: function getRatio(stat) {
          return Math.round(stat.w / (stat.w + stat.l) * 100);
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return GameStatisticsDialogComponent;
    }();

    GameStatisticsDialogComponent.ɵfac = function GameStatisticsDialogComponent_Factory(t) {
      return new (t || GameStatisticsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
    };

    GameStatisticsDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GameStatisticsDialogComponent,
      selectors: [["ng-component"]],
      decls: 21,
      vars: 2,
      consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], [1, "body-2"], ["cellpadding", "0", "cellspacing", "0", 1, "statistics-table"], [4, "ngFor", "ngForOf"], [1, "button", "primary", 3, "mat-dialog-close"]],
      template: function GameStatisticsDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.statistics);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]],
      styles: [".dialog-container[_ngcontent-%COMP%] {\n  width: 73vw;\n}\n.dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  height: 64vh;\n  overflow-y: scroll;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 0 1rem 0;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.2rem;\n  font-weight: normal;\n  font-size: 13px;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS1zdGF0aXN0aWNzLWRpYWxvZy9EOlxcRGV2ZWxvcG1lbnRcXGRhcnRzLXNjb3JlYm9hcmQtbmcvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZ2FtZS1zdGF0aXN0aWNzLWRpYWxvZ1xcZ2FtZS1zdGF0aXN0aWNzLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS1zdGF0aXN0aWNzLWRpYWxvZy9nYW1lLXN0YXRpc3RpY3MtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLDZCQUFBO0VBQ0Esc0JBQUE7QUNBSjtBREdFO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0FDRko7QURJSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0ZOO0FESU07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNGUjtBREtNO0VBQ0UsZ0JBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2dhbWUtc3RhdGlzdGljcy1kaWFsb2cvZ2FtZS1zdGF0aXN0aWNzLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctY29udGFpbmVyIHtcclxuICB3aWR0aDogNzN2dztcclxuXHJcbiAgLnN1YnRpdGxlLTEge1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICBtYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgbWF0LWRpYWxvZy1jb250ZW50IHtcclxuXHJcbiAgICBoZWlnaHQ6IDY0dmg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG5cclxuICAgICAgdGgsIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aDpmaXJzdC1jaGlsZCwgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmRpYWxvZy1jb250YWluZXIge1xuICB3aWR0aDogNzN2dztcbn1cbi5kaWFsb2ctY29udGFpbmVyIC5zdWJ0aXRsZS0xIHtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHtcbiAgaGVpZ2h0OiA2NHZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWNvbnRlbnQgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDAgMXJlbSAwO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHRhYmxlIHRoLCAuZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWNvbnRlbnQgdGFibGUgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1jb250ZW50IHRhYmxlIHRoOmZpcnN0LWNoaWxkLCAuZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWNvbnRlbnQgdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameStatisticsDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          templateUrl: 'game-statistics-dialog.component.html',
          styleUrls: ['game-statistics-dialog.component.scss']
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


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var GameToolbarComponent =
    /*#__PURE__*/
    function () {
      function GameToolbarComponent(route, application, dialogService) {
        _classCallCheck(this, GameToolbarComponent);

        this.route = route;
        this.application = application;
        this.dialogService = dialogService;
      }

      _createClass(GameToolbarComponent, [{
        key: "quit",
        value: function quit() {
          var _this64 = this;

          this.showConfirmation('Are you sure you want to navigate away from this page?', function () {
            _this64.route.navigate(['/']);

            _this64.playground.game.resetScore();

            _this64.playground.multiplier = 1;
            _this64.playground.extraEndingMsg = '';
          });
        }
      }, {
        key: "newGame",
        value: function newGame() {
          var _this65 = this;

          this.showConfirmation('Are you sure you want to start a new game?', function () {
            _this65.playground.newGame(true);
          });
        }
      }, {
        key: "showSettings",
        value: function showSettings() {
          var _this66 = this;

          this.showConfirmation('Are you sure you want to navigate to the settings page?', function () {
            _this66.playground.reset();

            _this66.playground.settingsOpen = true;
          });
        }
      }, {
        key: "undo",
        value: function undo() {
          this.playground.undo();
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
      return new (t || GameToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]));
    };

    GameToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameToolbarComponent,
      selectors: [["app-game-toolbar"]],
      inputs: {
        playground: "playground",
        reversRound: "reversRound",
        info: "info"
      },
      decls: 16,
      vars: 3,
      consts: [[1, "toolbar"], [1, "button", "icon-button", 3, "click"], [1, "round-info"], [1, "theme-chooser"], [1, "button", "primary", "icon", 3, "click"]],
      template: function GameToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_1_listener() {
            return ctx.newGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_4_listener() {
            return ctx.undo();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_10_listener() {
            return ctx.quit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameToolbarComponent_Template_button_click_13_listener() {
            return ctx.showSettings();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("detailed", ctx.application.settings.details);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getInfo(), "\n");
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      styles: [".toolbar[_ngcontent-%COMP%] {\n  display: flex;\n}\n.toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 2px 2px 0 2px;\n  flex: 1;\n  height: 60px;\n}\n.round-info[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 50px;\n  left: 10px;\n  font-size: 8em;\n  opacity: 0.3;\n  width: 30vw;\n  line-height: 150px;\n  text-align: center;\n  text-shadow: 0px 3px 1px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);\n}\n.round-info.detailed[_ngcontent-%COMP%] {\n  width: 30vw;\n}\n.theme-chooser[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10b29sYmFyL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxnYW1lLXRvb2xiYXJcXGdhbWUtdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10b29sYmFyL2dhbWUtdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBRENFO0VBQ0UscUJBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQ0NKO0FER0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZHQUFBO0FDQUY7QURFRTtFQUNFLFdBQUE7QUNBSjtBRElBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10b29sYmFyL2dhbWUtdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAycHggMnB4IDAgMnB4O1xyXG4gICAgZmxleDogMTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5yb3VuZC1pbmZvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiA4ZW07XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAzcHggMXB4IHJnYigwIDAgMCAvIDIwJSksIDBweCAycHggMnB4IHJnYigwIDAgMCAvIDE0JSksIDBweCAxcHggNXB4IHJnYigwIDAgMCAvIDEyJSk7XHJcblxyXG4gICYuZGV0YWlsZWQge1xyXG4gICAgd2lkdGg6IDMwdnc7XHJcbiAgfVxyXG59XHJcblxyXG4udGhlbWUtY2hvb3NlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiA0NXB4O1xyXG59XHJcblxyXG4iLCIudG9vbGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udG9vbGJhciBidXR0b24ge1xuICBtYXJnaW46IDJweCAycHggMCAycHg7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLnJvdW5kLWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTBweDtcbiAgbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiA4ZW07XG4gIG9wYWNpdHk6IDAuMztcbiAgd2lkdGg6IDMwdnc7XG4gIGxpbmUtaGVpZ2h0OiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogMHB4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLnJvdW5kLWluZm8uZGV0YWlsZWQge1xuICB3aWR0aDogMzB2dztcbn1cblxuLnRoZW1lLWNob29zZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNDVweDtcbn0iXX0= */"]
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
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationStateService"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]
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
  "./src/app/shared/components/game-type-statistics-dialog/game-type-statistics-dialog.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/shared/components/game-type-statistics-dialog/game-type-statistics-dialog.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: GameTypeStatisticsDialogComponent */

  /***/
  function srcAppSharedComponentsGameTypeStatisticsDialogGameTypeStatisticsDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameTypeStatisticsDialogComponent", function () {
      return GameTypeStatisticsDialogComponent;
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

    function GameTypeStatisticsDialogComponent_tr_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var stat_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r13.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stat_r13.count);
      }
    }

    var GameTypeStatisticsDialogComponent =
    /*#__PURE__*/
    function () {
      function GameTypeStatisticsDialogComponent(dialogRef, data) {
        _classCallCheck(this, GameTypeStatisticsDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        data.statistics.sort(function (a, b) {
          return b.count - a.count;
        });
      }

      _createClass(GameTypeStatisticsDialogComponent, [{
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return GameTypeStatisticsDialogComponent;
    }();

    GameTypeStatisticsDialogComponent.ɵfac = function GameTypeStatisticsDialogComponent_Factory(t) {
      return new (t || GameTypeStatisticsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
    };

    GameTypeStatisticsDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GameTypeStatisticsDialogComponent,
      selectors: [["ng-component"]],
      decls: 15,
      vars: 2,
      consts: [[1, "dialog-container"], ["mat-dialog-title", "", 1, "subtitle-1"], [1, "body-2"], ["cellpadding", "0", "cellspacing", "0", 1, "statistics-table"], [4, "ngFor", "ngForOf"], [1, "button", "primary", 3, "mat-dialog-close"]],
      template: function GameTypeStatisticsDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.statistics);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]],
      styles: [".dialog-container[_ngcontent-%COMP%] {\n  width: 73vw;\n}\n.dialog-container[_ngcontent-%COMP%]   .subtitle-1[_ngcontent-%COMP%] {\n  line-height: 1em;\n  margin-bottom: 1rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  margin-bottom: -0.5rem;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%] {\n  height: 64vh;\n  overflow-y: scroll;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 0 1rem 0;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.2rem;\n  font-weight: normal;\n  font-size: 13px;\n}\n.dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .dialog-container[_ngcontent-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10eXBlLXN0YXRpc3RpY3MtZGlhbG9nL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxnYW1lLXR5cGUtc3RhdGlzdGljcy1kaWFsb2dcXGdhbWUtdHlwZS1zdGF0aXN0aWNzLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ2FtZS10eXBlLXN0YXRpc3RpY3MtZGlhbG9nL2dhbWUtdHlwZS1zdGF0aXN0aWNzLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBRENFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0FDQUo7QURHRTtFQUVFLFlBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FESUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNGTjtBRElNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRlI7QURLTTtFQUNFLGdCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9nYW1lLXR5cGUtc3RhdGlzdGljcy1kaWFsb2cvZ2FtZS10eXBlLXN0YXRpc3RpY3MtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1jb250YWluZXIge1xyXG4gIHdpZHRoOiA3M3Z3O1xyXG5cclxuICAuc3VidGl0bGUtMSB7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIG1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XHJcbiAgfVxyXG5cclxuICBtYXQtZGlhbG9nLWNvbnRlbnQge1xyXG5cclxuICAgIGhlaWdodDogNjR2aDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcblxyXG4gICAgICB0aCwgdGQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoOmZpcnN0LWNoaWxkLCB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuZGlhbG9nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA3M3Z3O1xufVxuLmRpYWxvZy1jb250YWluZXIgLnN1YnRpdGxlLTEge1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmRpYWxvZy1jb250YWluZXIgbWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWNvbnRlbnQge1xuICBoZWlnaHQ6IDY0dmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctY29udGVudCB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMCAxcmVtIDA7XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWNvbnRlbnQgdGFibGUgdGgsIC5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctY29udGVudCB0YWJsZSB0ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uZGlhbG9nLWNvbnRhaW5lciBtYXQtZGlhbG9nLWNvbnRlbnQgdGFibGUgdGg6Zmlyc3QtY2hpbGQsIC5kaWFsb2ctY29udGFpbmVyIG1hdC1kaWFsb2ctY29udGVudCB0YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameTypeStatisticsDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          templateUrl: 'game-type-statistics-dialog.component.html',
          styleUrls: ['game-type-statistics-dialog.component.scss']
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
  "./src/app/shared/components/menu/menu.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/components/menu/menu.component.ts ***!
    \**********************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppSharedComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _app_game_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../app-game-types */
    "./src/app/app-game-types.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _services_statistics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ~services/statistics.service */
    "./src/app/shared/services/statistics.service.ts");
    /* harmony import */


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function MenuComponent_div_4_button_1_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var g_r45 = ctx.$implicit;
        var i_r46 = ctx.index;

        var k_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("button gameSelectBox ", "menu-button-" + k_r43 + "" + i_r46, " ", g_r45.data.bot ? "hasBot" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "/" + g_r45.path));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r45.data.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r45.data.icon);
      }
    }

    function MenuComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_div_4_button_1_Template, 6, 9, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var k_r43 = ctx.$implicit;

        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r42.getGameList().slice(k_r43 * 3, k_r43 * 3 + 3));
      }
    }

    var _c1 = function _c1() {
      return [0, 1, 2, 3];
    };

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent(router, dialog, statisticsService, applicationStateService) {
        _classCallCheck(this, MenuComponent);

        this.router = router;
        this.dialog = dialog;
        this.statisticsService = statisticsService;
        this.applicationStateService = applicationStateService;
      }

      _createClass(MenuComponent, [{
        key: "randomGame",
        value: function randomGame() {
          var random = Math.floor(Math.random() * _app_game_types__WEBPACK_IMPORTED_MODULE_1__["routes"].length);
          this.router.navigate(['/' + _app_game_types__WEBPACK_IMPORTED_MODULE_1__["routes"][random].path]);
        }
      }, {
        key: "getGameList",
        value: function getGameList() {
          return _app_game_types__WEBPACK_IMPORTED_MODULE_1__["routes"].filter(function (r) {
            return !!r.data;
          });
        }
      }, {
        key: "openGameTypeStatistics",
        value: function openGameTypeStatistics() {
          this.dialog.openGameTypeStatistics(this.statisticsService.getGameTypeStatistics()); // this.statisticsService.printStatistics();
        }
      }, {
        key: "openGameStatistics",
        value: function openGameStatistics() {
          this.dialog.openGameHistory(this.statisticsService.getGameStatistics());
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_4__["StatisticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["ng-component"]],
      decls: 12,
      vars: 2,
      consts: [["id", "menu_title"], [3, "click"], ["id", "menu"], ["class", "button-line", 4, "ngFor", "ngForOf"], [1, "version"], [1, "button", "primary", "icon", 3, "click"], [1, "button-line"], [3, "routerLink", "class", 4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "menu-item-container"], [1, "title"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_6_listener() {
            return ctx.openGameTypeStatistics();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "stars");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_9_listener() {
            return ctx.openGameStatistics();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "history");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["#menu_title[_ngcontent-%COMP%] {\n  padding: 50px;\n  text-align: center;\n  cursor: pointer;\n}\n\n#menu[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n\n#menu[_ngcontent-%COMP%]   .button-line[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n#menu[_ngcontent-%COMP%]   .menu-item-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100%;\n}\n\n#menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%] {\n  height: 190px;\n  width: 190px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0;\n  margin: 0;\n  color: var(--text_color);\n}\n\n#menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  width: 60px;\n  height: 60px;\n}\n\n#menu[_ngcontent-%COMP%]   .gameSelectBox[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  white-space: pre;\n  text-align: center;\n  padding: 10px;\n  line-height: 25px;\n  letter-spacing: 1px;\n  font-weight: normal;\n  width: 170px;\n  margin: 0 0 25px 0;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n#menu[_ngcontent-%COMP%]   .hasBot[_ngcontent-%COMP%]:after {\n  content: \"B\";\n  position: relative;\n  top: 72px;\n  right: 12px;\n  margin: -4px;\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-00[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_1a), var(--menu_1b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-01[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_3a), var(--menu_3b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-02[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_2a), var(--menu_2b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-10[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_2a), var(--menu_2b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-11[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_1a), var(--menu_1b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-12[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_3a), var(--menu_3b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-20[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_1a), var(--menu_1b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-21[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_3a), var(--menu_3b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-22[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_2a), var(--menu_2b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-30[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_2a), var(--menu_2b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-31[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_1a), var(--menu_1b));\n}\n\n#menu[_ngcontent-%COMP%]   .menu-button-32[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, var(--menu_3a), var(--menu_3b));\n}\n\n.version[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS9EOlxcRGV2ZWxvcG1lbnRcXGRhcnRzLXNjb3JlYm9hcmQtbmcvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtBQ0RKOztBREdJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRE47O0FESUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ0ZOOztBRE1FO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSko7O0FET0U7RUFDRSxrRUFBQTtBQ0xKOztBRFFFO0VBQ0Usa0VBQUE7QUNOSjs7QURTRTtFQUNFLGtFQUFBO0FDUEo7O0FEVUU7RUFDRSxrRUFBQTtBQ1JKOztBRFdFO0VBQ0Usa0VBQUE7QUNUSjs7QURZRTtFQUNFLGtFQUFBO0FDVko7O0FEYUU7RUFDRSxrRUFBQTtBQ1hKOztBRGNFO0VBQ0Usa0VBQUE7QUNaSjs7QURlRTtFQUNFLGtFQUFBO0FDYko7O0FEZ0JFO0VBQ0Usa0VBQUE7QUNkSjs7QURpQkU7RUFDRSxrRUFBQTtBQ2ZKOztBRGtCRTtFQUNFLGtFQUFBO0FDaEJKOztBRG9CQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2pCRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtZW51X3RpdGxlIHtcbiAgcGFkZGluZzogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNtZW51IHtcbiAgd2lkdGg6IDEwMHZ3O1xuXG4gIC5idXR0b24tbGluZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAubWVudS1pdGVtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuZ2FtZVNlbGVjdEJveCB7XG4gICAgaGVpZ2h0OiAxOTBweDtcbiAgICB3aWR0aDogMTkwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0X2NvbG9yKTtcblxuICAgIG1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICB3aWR0aDogMTcwcHg7XG4gICAgICBtYXJnaW46IDAgMCAyNXB4IDA7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgfVxuICB9XG5cbiAgLmhhc0JvdDphZnRlciB7XG4gICAgY29udGVudDogJ0InO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDcycHg7XG4gICAgcmlnaHQ6IDEycHg7XG4gICAgbWFyZ2luOiAtNHB4O1xuICB9XG5cbiAgLm1lbnUtYnV0dG9uLTAwIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLW1lbnVfMWEpLCB2YXIoLS1tZW51XzFiKSk7XG4gIH1cblxuICAubWVudS1idXR0b24tMDEge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8zYSksIHZhcigtLW1lbnVfM2IpKTtcbiAgfVxuXG4gIC5tZW51LWJ1dHRvbi0wMiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1tZW51XzJhKSwgdmFyKC0tbWVudV8yYikpO1xuICB9XG5cbiAgLm1lbnUtYnV0dG9uLTEwIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLW1lbnVfMmEpLCB2YXIoLS1tZW51XzJiKSk7XG4gIH1cblxuICAubWVudS1idXR0b24tMTEge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8xYSksIHZhcigtLW1lbnVfMWIpKTtcbiAgfVxuXG4gIC5tZW51LWJ1dHRvbi0xMiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1tZW51XzNhKSwgdmFyKC0tbWVudV8zYikpO1xuICB9XG5cbiAgLm1lbnUtYnV0dG9uLTIwIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLW1lbnVfMWEpLCB2YXIoLS1tZW51XzFiKSk7XG4gIH1cblxuICAubWVudS1idXR0b24tMjEge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8zYSksIHZhcigtLW1lbnVfM2IpKTtcbiAgfVxuXG4gIC5tZW51LWJ1dHRvbi0yMiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1tZW51XzJhKSwgdmFyKC0tbWVudV8yYikpO1xuICB9XG5cbiAgLm1lbnUtYnV0dG9uLTMwIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLW1lbnVfMmEpLCB2YXIoLS1tZW51XzJiKSk7XG4gIH1cblxuICAubWVudS1idXR0b24tMzEge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8xYSksIHZhcigtLW1lbnVfMWIpKTtcbiAgfVxuXG4gIC5tZW51LWJ1dHRvbi0zMiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1tZW51XzNhKSwgdmFyKC0tbWVudV8zYikpO1xuICB9XG59XG5cbi52ZXJzaW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiA1cHg7XG4gIC8vY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCA0MDApO1xufVxuIiwiI21lbnVfdGl0bGUge1xuICBwYWRkaW5nOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI21lbnUge1xuICB3aWR0aDogMTAwdnc7XG59XG4jbWVudSAuYnV0dG9uLWxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNtZW51IC5tZW51LWl0ZW0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuI21lbnUgLmdhbWVTZWxlY3RCb3gge1xuICBoZWlnaHQ6IDE5MHB4O1xuICB3aWR0aDogMTkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0X2NvbG9yKTtcbn1cbiNtZW51IC5nYW1lU2VsZWN0Qm94IG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuI21lbnUgLmdhbWVTZWxlY3RCb3ggLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB3aWR0aDogMTcwcHg7XG4gIG1hcmdpbjogMCAwIDI1cHggMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuI21lbnUgLmhhc0JvdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiQlwiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNzJweDtcbiAgcmlnaHQ6IDEycHg7XG4gIG1hcmdpbjogLTRweDtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0wMCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8xYSksIHZhcigtLW1lbnVfMWIpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0wMSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8zYSksIHZhcigtLW1lbnVfM2IpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0wMiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8yYSksIHZhcigtLW1lbnVfMmIpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0xMCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8yYSksIHZhcigtLW1lbnVfMmIpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0xMSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8xYSksIHZhcigtLW1lbnVfMWIpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0xMiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8zYSksIHZhcigtLW1lbnVfM2IpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0yMCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8xYSksIHZhcigtLW1lbnVfMWIpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0yMSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8zYSksIHZhcigtLW1lbnVfM2IpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0yMiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8yYSksIHZhcigtLW1lbnVfMmIpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0zMCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8yYSksIHZhcigtLW1lbnVfMmIpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0zMSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8xYSksIHZhcigtLW1lbnVfMWIpKTtcbn1cbiNtZW51IC5tZW51LWJ1dHRvbi0zMiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbWVudV8zYSksIHZhcigtLW1lbnVfM2IpKTtcbn1cblxuLnZlcnNpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDVweDtcbn0iXX0= */"]
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]
        }, {
          type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_4__["StatisticsService"]
        }, {
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/number-plate-shanghai/number-plate-shanghai.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/shared/components/number-plate-shanghai/number-plate-shanghai.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: NumberPlateShanghaiComponent */

  /***/
  function srcAppSharedComponentsNumberPlateShanghaiNumberPlateShanghaiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberPlateShanghaiComponent", function () {
      return NumberPlateShanghaiComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NumberPlateShanghaiComponent_div_4_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateShanghaiComponent_div_4_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var j_r51 = ctx.$implicit;

          var k_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.throwNumber(j_r51 + k_r49 * 3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var j_r51 = ctx.$implicit;

        var k_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", j_r51 + k_r49 * 3, " ");
      }
    }

    var _c0 = function _c0() {
      return [1, 2, 3];
    };

    function NumberPlateShanghaiComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NumberPlateShanghaiComponent_div_4_button_1_Template, 2, 1, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1() {
      return [0, 1, 2];
    };

    var NumberPlateShanghaiComponent =
    /*#__PURE__*/
    function () {
      function NumberPlateShanghaiComponent(game, dialogService, application) {
        _classCallCheck(this, NumberPlateShanghaiComponent);

        this.game = game;
        this.dialogService = dialogService;
        this.application = application;
      }

      _createClass(NumberPlateShanghaiComponent, [{
        key: "next",
        value: function next() {
          this.playground.skip();
        }
      }, {
        key: "win",
        value: function win() {
          var _this67 = this;

          this.dialogService.openConfirmDialog('Confirmation', 'Are you sure?').afterClosed().subscribe(function (data) {
            if (data) {
              var score = _this67.actualIndex + 1;

              _this67.playground.throwNumber([score, score]);

              _this67.playground.doublePoint();

              _this67.playground.throwNumber([score, score]);

              _this67.playground.triplePoint();

              _this67.playground.throwNumber([score, score]);
            }
          });
        }
      }, {
        key: "throwNumber",
        value: function throwNumber(count) {
          var score = this.actualIndex + 1;

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
      }]);

      return NumberPlateShanghaiComponent;
    }();

    NumberPlateShanghaiComponent.ɵfac = function NumberPlateShanghaiComponent_Factory(t) {
      return new (t || NumberPlateShanghaiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationStateService"]));
    };

    NumberPlateShanghaiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NumberPlateShanghaiComponent_div_4_Template, 2, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateShanghaiComponent_Template_button_click_6_listener() {
            return ctx.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateShanghaiComponent_Template_button_click_8_listener() {
            return ctx.win();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Shanghai ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Field: ", ctx.actualIndex + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: [".side-right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-flow: row wrap;\n  height: 90vh;\n  margin-top: 20px;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  margin: 0.1vw;\n  font-size: calc(11px + 0.8vw + 0.8vh);\n  height: 20vw;\n  width: 20vw;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 5px;\n  font-size: 30px;\n}\n.side-right[_ngcontent-%COMP%]   .number.next[_ngcontent-%COMP%] {\n  width: 40vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlLXNoYW5naGFpL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxudW1iZXItcGxhdGUtc2hhbmdoYWlcXG51bWJlci1wbGF0ZS1zaGFuZ2hhaS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlLXNoYW5naGFpL251bWJlci1wbGF0ZS1zaGFuZ2hhaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7QURDSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDQ047QURFSTtFQUNFLFdBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL251bWJlci1wbGF0ZS1zaGFuZ2hhaS9udW1iZXItcGxhdGUtc2hhbmdoYWkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZS1yaWdodCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGhlaWdodDogOTB2aDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAubnVtYmVyIHtcclxuICAgIG1hcmdpbjogMC4xdnc7XHJcbiAgICBmb250LXNpemU6IGNhbGMoMTFweCArIDAuOHZ3ICsgMC44dmgpO1xyXG4gICAgaGVpZ2h0OiAyMHZ3O1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcblxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTBweDtcclxuICAgICAgbGVmdDogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5uZXh0IHtcclxuICAgICAgd2lkdGg6IDQwdnc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5zaWRlLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGhlaWdodDogOTB2aDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5zaWRlLXJpZ2h0IC5udW1iZXIge1xuICBtYXJnaW46IDAuMXZ3O1xuICBmb250LXNpemU6IGNhbGMoMTFweCArIDAuOHZ3ICsgMC44dmgpO1xuICBoZWlnaHQ6IDIwdnc7XG4gIHdpZHRoOiAyMHZ3O1xufVxuLnNpZGUtcmlnaHQgLm51bWJlciBtYXQtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5zaWRlLXJpZ2h0IC5udW1iZXIubmV4dCB7XG4gIHdpZHRoOiA0MHZ3O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberPlateShanghaiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-number-plate-shanghai',
          templateUrl: './number-plate-shanghai.component.html',
          styleUrls: ['./number-plate-shanghai.component.scss']
        }]
      }], function () {
        return [{
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]
        }, {
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationStateService"]
        }];
      }, {
        actualIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        playground: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: NumberPlateVisualComponent */

  /***/
  function srcAppSharedComponentsNumberPlateVisualNumberPlateVisualComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberPlateVisualComponent", function () {
      return NumberPlateVisualComponent;
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


    var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/src/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~services/game.service */
    "./src/app/shared/services/game.service.ts");
    /* harmony import */


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");

    var ARC_WIDTH = 0.295;

    var NumberPlateVisualComponent =
    /*#__PURE__*/
    function () {
      function NumberPlateVisualComponent(game, application) {
        _classCallCheck(this, NumberPlateVisualComponent);

        this.game = game;
        this.application = application;
        this.numbers = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
        this.ngUnsubscribeHasChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(NumberPlateVisualComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this68 = this;

          this.drawTable();
          this.playground.hasChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribeHasChange)).subscribe(function (flag) {
            return _this68.drawTable();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.ngUnsubscribeHasChange.next();
          this.ngUnsubscribeHasChange.complete();
        }
      }, {
        key: "next",
        value: function next() {
          this.playground.skip();
          this.drawTable();
        }
      }, {
        key: "drawTable",
        value: function drawTable() {
          var _this69 = this;

          d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#darts-table-plate svg').remove();
          var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#darts-table-plate').append('svg').attr('width', '98%').attr('height', '98%').attr('viewBox', '0 0 330 330');
          var numbers = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
          var bullIndex = this.getFieldIndex(25);

          if (this.playground.zeroEnabled) {
            this.drawArcPosition(svg, 20, 25, 30, 'field-color primary');
            this.drawText(svg, '0', 0, 25, 23, -1, 1, 'number-text', function () {
              return _this69.throwZero();
            });
          }

          this.drawArc(svg, 0, 165, 0, Math.PI * 4, 'field-inactive', -1, 1);
          this.drawArc(svg, 0, 19, 0, Math.PI * 4, 'field-color-m', bullIndex, 2);
          this.drawArc(svg, 20, 49, 0, Math.PI * 4, 'field-color', bullIndex, 1);

          for (var i = 0; i < numbers.length; i++) {
            var fieldIndex = this.getFieldIndex(numbers[i]);
            var colorSlice = 'field-color';
            var colorSliceMulti = 'field-color-m';
            var startAngle = i * Math.PI / 10 - ARC_WIDTH / 2;
            var endAngle = startAngle + ARC_WIDTH;
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
      }, {
        key: "getNumberColor",
        value: function getNumberColor(fieldIndex) {
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
      }, {
        key: "isNumberDisabled",
        value: function isNumberDisabled(fieldIndex) {
          return !this.playground.isFieldEnabled(fieldIndex) && !this.getNumberColor(fieldIndex);
        }
      }, {
        key: "throwNumber",
        value: function throwNumber(fieldIndex, multi) {
          if (!this.isNumberDisabled(fieldIndex)) {
            if (multi === 2) {
              this.playground.doublePoint();
            }

            if (multi === 3) {
              this.playground.triplePoint();
            }

            this.playground.throwNumber([this.playground.isFieldEnabled(fieldIndex) ? _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex) : 0, _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(fieldIndex)]);
          }

          this.drawTable();
          document.querySelector("path.field_".concat(fieldIndex, "_").concat(multi)).classList.add('clicked');
        }
      }, {
        key: "throwZero",
        value: function throwZero() {
          if (this.playground.zeroEnabled) {
            this.playground.throwNumber([0, 0]);
            this.drawTable();
          }
        }
      }, {
        key: "drawText",
        value: function drawText(svg, text, rotate, x, y, fieldIndex, multi, className, onclick) {
          var _this70 = this;

          svg.append('text').attr('x', x).attr('y', y).attr('dy', '1em').attr('text-anchor', 'middle').attr('transform', 'rotate(' + rotate + ', 165, 165)').attr('class', "field_".concat(fieldIndex, "_").concat(multi, " ").concat(className)).text(text).on('click', function () {
            return onclick ? onclick() : _this70.throwNumber(fieldIndex, multi);
          });
        }
      }, {
        key: "drawArc",
        value: function drawArc(svg, innerRadius, outerRadius, startAngle, endAngle, styleClass, fieldIndex, multi) {
          var _this71 = this;

          svg.append('path').attr('transform', 'translate(165, 165)').attr('d', d3__WEBPACK_IMPORTED_MODULE_2__["arc"]().innerRadius(innerRadius).outerRadius(outerRadius).startAngle(startAngle).endAngle(endAngle)).attr('class', "field_".concat(fieldIndex, "_").concat(multi, " ").concat(styleClass, " ").concat(this.getNumberColor(fieldIndex))).on('click', function () {
            return _this71.throwNumber(fieldIndex, multi);
          });
        }
      }, {
        key: "drawArcPosition",
        value: function drawArcPosition(svg, radius, x, y, styleClass) {
          var _this72 = this;

          svg.append('path').attr('transform', 'translate(' + x + ', ' + y + ')').attr('d', d3__WEBPACK_IMPORTED_MODULE_2__["arc"]().innerRadius(0).outerRadius(radius).startAngle(0).endAngle(Math.PI * 4)).attr('class', styleClass).on('click', function () {
            return _this72.throwZero();
          });
        }
      }, {
        key: "getFieldIndex",
        value: function getFieldIndex(field) {
          return field === 25 ? 20 : field - 1;
        }
      }]);

      return NumberPlateVisualComponent;
    }();

    NumberPlateVisualComponent.ɵfac = function NumberPlateVisualComponent_Factory(t) {
      return new (t || NumberPlateVisualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationStateService"]));
    };

    NumberPlateVisualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NumberPlateVisualComponent,
      selectors: [["app-number-plate-visual"]],
      inputs: {
        playground: "playground"
      },
      decls: 6,
      vars: 3,
      consts: [[1, "side-right_visual"], ["id", "darts-table-plate"], [1, "button", "number", 3, "disabled", "click"]],
      template: function NumberPlateVisualComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateVisualComponent_Template_button_click_4_listener() {
            return ctx.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.playground.gameTitle, " / ", ctx.game.round + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playground.nextEnabled);
        }
      },
      styles: [".side-right_visual {\n  width: 98vw;\n  top: 85px;\n  right: 0;\n  position: absolute;\n}\n.side-right_visual h1 {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  top: -65px;\n}\n.side-right_visual #darts-table-plate {\n  width: 100%;\n  text-align: center;\n}\n.side-right_visual #darts-table-plate .number-text, .side-right_visual #darts-table-plate .field-note {\n  font-family: sans-serif;\n  font-weight: bold;\n  font-size: 11px;\n}\n.side-right_visual #darts-table-plate .number-text.disabled, .side-right_visual #darts-table-plate .field-note.disabled {\n  opacity: 0.3;\n}\n.side-right_visual #darts-table-plate .number-text.smaller, .side-right_visual #darts-table-plate .field-note.smaller {\n  font-size: 8px;\n}\n.side-right_visual #darts-table-plate .field-note {\n  font-size: 6px;\n}\n.side-right_visual #darts-table-plate path, .side-right_visual #darts-table-plate text {\n  cursor: pointer;\n}\n.side-right_visual #darts-table-plate .field-color.disabled, .side-right_visual #darts-table-plate .field-color-m.disabled {\n  opacity: 0.4;\n}\n.side-right_visual #darts-table-plate .field-color.clicked, .side-right_visual #darts-table-plate .field-color-m.clicked {\n  -webkit-animation-name: field-clicked;\n          animation-name: field-clicked;\n  -webkit-animation-duration: 200ms;\n          animation-duration: 200ms;\n}\n.side-right_visual button {\n  margin-right: 15px;\n  width: 120px;\n  height: 100px;\n  position: absolute;\n  right: 0px;\n  top: -70px;\n}\n@-webkit-keyframes field-clicked {\n  0% {\n    fill: var(--text_color);\n  }\n  100% {\n    fill: var(--table_normal_primary);\n  }\n}\n@keyframes field-clicked {\n  0% {\n    fill: var(--text_color);\n  }\n  100% {\n    fill: var(--table_normal_primary);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlLXZpc3VhbC9EOlxcRGV2ZWxvcG1lbnRcXGRhcnRzLXNjb3JlYm9hcmQtbmcvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbnVtYmVyLXBsYXRlLXZpc3VhbFxcbnVtYmVyLXBsYXRlLXZpc3VhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlLXZpc3VhbC9udW1iZXItcGxhdGUtdmlzdWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0o7QURFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUk7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FOO0FERU07RUFDRSxZQUFBO0FDQVI7QURHTTtFQUNFLGNBQUE7QUNEUjtBREtJO0VBQ0UsY0FBQTtBQ0hOO0FETUk7RUFDRSxlQUFBO0FDSk47QURRTTtFQUNFLFlBQUE7QUNOUjtBRFNNO0VBQ0UscUNBQUE7VUFBQSw2QkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUNQUjtBRFlFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNWSjtBRGNBO0VBQ0U7SUFDRSx1QkFBQTtFQ1hGO0VEYUE7SUFDRSxpQ0FBQTtFQ1hGO0FBQ0Y7QURLQTtFQUNFO0lBQ0UsdUJBQUE7RUNYRjtFRGFBO0lBQ0UsaUNBQUE7RUNYRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlLXZpc3VhbC9udW1iZXItcGxhdGUtdmlzdWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtcmlnaHRfdmlzdWFsIHtcclxuICB3aWR0aDogOTh2dztcclxuICB0b3A6IDg1cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBoMSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRvcDogLTY1cHg7XHJcbiAgfVxyXG5cclxuICAjZGFydHMtdGFibGUtcGxhdGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLm51bWJlci10ZXh0LCAuZmllbGQtbm90ZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG5cclxuICAgICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnNtYWxsZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZpZWxkLW5vdGUge1xyXG4gICAgICBmb250LXNpemU6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICBwYXRoLCB0ZXh0IHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5maWVsZC1jb2xvciwgLmZpZWxkLWNvbG9yLW0ge1xyXG4gICAgICAmLmRpc2FibGVkIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY2xpY2tlZCB7XHJcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZpZWxkLWNsaWNrZWQ7XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMDBtcztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgdG9wOiAtNzBweDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmllbGQtY2xpY2tlZCB7XHJcbiAgMCUge1xyXG4gICAgZmlsbDogdmFyKC0tdGV4dF9jb2xvcik7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgZmlsbDogdmFyKC0tdGFibGVfbm9ybWFsX3ByaW1hcnkpO1xyXG4gIH1cclxufVxyXG4iLCIuc2lkZS1yaWdodF92aXN1YWwge1xuICB3aWR0aDogOTh2dztcbiAgdG9wOiA4NXB4O1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnNpZGUtcmlnaHRfdmlzdWFsIGgxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IC02NXB4O1xufVxuLnNpZGUtcmlnaHRfdmlzdWFsICNkYXJ0cy10YWJsZS1wbGF0ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2lkZS1yaWdodF92aXN1YWwgI2RhcnRzLXRhYmxlLXBsYXRlIC5udW1iZXItdGV4dCwgLnNpZGUtcmlnaHRfdmlzdWFsICNkYXJ0cy10YWJsZS1wbGF0ZSAuZmllbGQtbm90ZSB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLnNpZGUtcmlnaHRfdmlzdWFsICNkYXJ0cy10YWJsZS1wbGF0ZSAubnVtYmVyLXRleHQuZGlzYWJsZWQsIC5zaWRlLXJpZ2h0X3Zpc3VhbCAjZGFydHMtdGFibGUtcGxhdGUgLmZpZWxkLW5vdGUuZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjM7XG59XG4uc2lkZS1yaWdodF92aXN1YWwgI2RhcnRzLXRhYmxlLXBsYXRlIC5udW1iZXItdGV4dC5zbWFsbGVyLCAuc2lkZS1yaWdodF92aXN1YWwgI2RhcnRzLXRhYmxlLXBsYXRlIC5maWVsZC1ub3RlLnNtYWxsZXIge1xuICBmb250LXNpemU6IDhweDtcbn1cbi5zaWRlLXJpZ2h0X3Zpc3VhbCAjZGFydHMtdGFibGUtcGxhdGUgLmZpZWxkLW5vdGUge1xuICBmb250LXNpemU6IDZweDtcbn1cbi5zaWRlLXJpZ2h0X3Zpc3VhbCAjZGFydHMtdGFibGUtcGxhdGUgcGF0aCwgLnNpZGUtcmlnaHRfdmlzdWFsICNkYXJ0cy10YWJsZS1wbGF0ZSB0ZXh0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNpZGUtcmlnaHRfdmlzdWFsICNkYXJ0cy10YWJsZS1wbGF0ZSAuZmllbGQtY29sb3IuZGlzYWJsZWQsIC5zaWRlLXJpZ2h0X3Zpc3VhbCAjZGFydHMtdGFibGUtcGxhdGUgLmZpZWxkLWNvbG9yLW0uZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uc2lkZS1yaWdodF92aXN1YWwgI2RhcnRzLXRhYmxlLXBsYXRlIC5maWVsZC1jb2xvci5jbGlja2VkLCAuc2lkZS1yaWdodF92aXN1YWwgI2RhcnRzLXRhYmxlLXBsYXRlIC5maWVsZC1jb2xvci1tLmNsaWNrZWQge1xuICBhbmltYXRpb24tbmFtZTogZmllbGQtY2xpY2tlZDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMDBtcztcbn1cbi5zaWRlLXJpZ2h0X3Zpc3VhbCBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IC03MHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGZpZWxkLWNsaWNrZWQge1xuICAwJSB7XG4gICAgZmlsbDogdmFyKC0tdGV4dF9jb2xvcik7XG4gIH1cbiAgMTAwJSB7XG4gICAgZmlsbDogdmFyKC0tdGFibGVfbm9ybWFsX3ByaW1hcnkpO1xuICB9XG59Il19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberPlateVisualComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-number-plate-visual',
          templateUrl: './number-plate-visual.component.html',
          styleUrls: ['./number-plate-visual.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]
        }, {
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationStateService"]
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


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function NumberPlateComponent_ng_container_1_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.playground.getFieldIcon(i_r17 - 1));
      }
    }

    function NumberPlateComponent_ng_container_1_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.playground.getFieldNote(i_r17 - 1));
      }
    }

    function NumberPlateComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_ng_container_1_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var i_r17 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.throwNumber(i_r17 - 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NumberPlateComponent_ng_container_1_mat_icon_2_Template, 2, 1, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NumberPlateComponent_ng_container_1_p_3_Template, 2, 1, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var i_r17 = ctx.$implicit;

        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button number ", ctx_r14.getNumberColor(i_r17 - 1), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r14.isNumberDisabled(i_r17 - 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.playground.getFieldIcon(i_r17 - 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.playground.getFieldNote(i_r17 - 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r17);
      }
    }

    function NumberPlateComponent_mat_icon_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.playground.getFieldIcon(20));
      }
    }

    function NumberPlateComponent_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.playground.getFieldNote(20));
      }
    }

    var NumberPlateComponent =
    /*#__PURE__*/
    function () {
      function NumberPlateComponent(game, application) {
        _classCallCheck(this, NumberPlateComponent);

        this.game = game;
        this.application = application;
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
      return new (t || NumberPlateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationStateService"]));
    };

    NumberPlateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NumberPlateComponent_ng_container_1_Template, 6, 7, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_2_listener() {
            return ctx.throwNumber(20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NumberPlateComponent_mat_icon_3_Template, 2, 1, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NumberPlateComponent_p_4_Template, 2, 1, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bull");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_7_listener() {
            return ctx.playground.doublePoint();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_10_listener() {
            return ctx.playground.triplePoint();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "3x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_13_listener() {
            return ctx.playground.skip();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NumberPlateComponent_Template_button_click_16_listener() {
            return ctx.playground.throwNumber([0, 0]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
      styles: [".side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  float: left;\n  margin: 0.1vw;\n  font-size: calc(11px + 0.8vw + 0.8vh);\n  height: 19.4vh;\n  width: 15.3vw;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .field-number[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .field-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 13vw;\n  overflow: hidden;\n  word-break: normal;\n  white-space: pre-line;\n  line-height: 16px;\n  text-align: right;\n  position: absolute;\n  margin: 4px 7px 0 0;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]   .field-note-bottom[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 13vw;\n  overflow: hidden;\n  word-break: normal;\n  white-space: pre-line;\n  line-height: 16px;\n  text-align: left;\n}\n.side-right[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.side-right.detailed[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  width: 13.7vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxudW1iZXItcGxhdGVcXG51bWJlci1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlL251bWJlci1wbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDQUo7QURFSTtFQUNFLGVBQUE7QUNBTjtBREdJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRE47QURJSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNGTjtBREtJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSE47QURPRTtFQUNFLFlBQUE7QUNMSjtBRFNJO0VBQ0UsYUFBQTtBQ1BOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbnVtYmVyLXBsYXRlL251bWJlci1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlLXJpZ2h0IHtcclxuICAubnVtYmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMC4xdnc7XHJcbiAgICBmb250LXNpemU6IGNhbGMoMTFweCArIDAuOHZ3ICsgMC44dmgpO1xyXG4gICAgaGVpZ2h0OiAxOS40dmg7XHJcbiAgICB3aWR0aDogMTUuM3Z3O1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5maWVsZC1udW1iZXIge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5maWVsZC1ub3RlIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB3aWR0aDogMTN2dztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgd29yZC1icmVhazogbm9ybWFsO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBtYXJnaW46IDRweCA3cHggMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5maWVsZC1ub3RlLWJvdHRvbSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgd2lkdGg6IDEzdnc7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcclxuICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5udW1iZXI6ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuXHJcbiAgJi5kZXRhaWxlZCB7XHJcbiAgICAubnVtYmVyIHtcclxuICAgICAgd2lkdGg6IDEzLjd2dztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnNpZGUtcmlnaHQgLm51bWJlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwLjF2dztcbiAgZm9udC1zaXplOiBjYWxjKDExcHggKyAwLjh2dyArIDAuOHZoKTtcbiAgaGVpZ2h0OiAxOS40dmg7XG4gIHdpZHRoOiAxNS4zdnc7XG59XG4uc2lkZS1yaWdodCAubnVtYmVyIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLnNpZGUtcmlnaHQgLm51bWJlciAuZmllbGQtbnVtYmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zaWRlLXJpZ2h0IC5udW1iZXIgLmZpZWxkLW5vdGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAxM3Z3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogNHB4IDdweCAwIDA7XG59XG4uc2lkZS1yaWdodCAubnVtYmVyIC5maWVsZC1ub3RlLWJvdHRvbSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEzdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zaWRlLXJpZ2h0IC5udW1iZXI6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4uc2lkZS1yaWdodC5kZXRhaWxlZCAubnVtYmVyIHtcbiAgd2lkdGg6IDEzLjd2dztcbn0iXX0= */"]
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
        }, {
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationStateService"]
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


    var _services_application_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~services/application-state.service */
    "./src/app/shared/services/application-state.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function PlayerScoreComponent_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "offline_bolt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PlayerScoreComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!ctx_r35.player.getThrowsTotal() ? "0" : ctx_r35.player.getThrowsTotal());
      }
    }

    function PlayerScoreComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
      }
    }

    function PlayerScoreComponent_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "application.settings.details"]);
      }
    }

    function PlayerScoreComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
      }
    }

    function PlayerScoreComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.player.score);
      }
    }

    function PlayerScoreComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Life: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r40.player.life);
      }
    }

    function PlayerScoreComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r41.player.life, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r41.player.score, " ");
      }
    }

    var _c0 = ["*"];

    var PlayerScoreComponent =
    /*#__PURE__*/
    _createClass(function PlayerScoreComponent(application) {
      _classCallCheck(this, PlayerScoreComponent);

      this.application = application;
      this.hasContent = true;
      this.scoreDisplayed = true;
      this.lifeDisplayed = false;
      this.highlighted = false;
    });

    PlayerScoreComponent.ɵfac = function PlayerScoreComponent_Factory(t) {
      return new (t || PlayerScoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationStateService"]));
    };

    PlayerScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlayerScoreComponent,
      selectors: [["app-player-score"]],
      inputs: {
        player: "player",
        hasContent: "hasContent",
        scoreDisplayed: "scoreDisplayed",
        lifeDisplayed: "lifeDisplayed",
        highlighted: "highlighted"
      },
      ngContentSelectors: _c0,
      decls: 20,
      vars: 14,
      consts: [[1, "player_info"], [1, "name"], [4, "ngIf"], [1, "shoots"], [1, "shoot"], ["class", "shoot total", 4, "ngIf"], [1, "clear"], ["class", "line", 4, "ngIf"], ["class", "line-space", 4, "ngIf"], ["class", "score", 4, "ngIf"], [1, "shoot", "total"], [1, "line"], [1, "line-space"], [1, "score"]],
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("player_info_visual", !ctx.application.settings.details);

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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
      styles: [".player_info {\n  padding: 1vw;\n}\n.player_info.player_info_visual {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.player_info.player_info_visual .name {\n  margin-right: 10px;\n  width: 80px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.player_info.player_info_visual .score {\n  margin-left: 20px;\n  width: 150px;\n  white-space: nowrap;\n}\n.player_info .line {\n  margin: 1vw 0;\n}\n.player_info .line-space {\n  margin: 1.5vw 0;\n}\n.player_info .small {\n  font-size: calc(0.6vw + 0.5vh);\n  font-weight: bold;\n}\n.player_info .name {\n  font-size: calc(5px + 1vw);\n  display: flex;\n  align-items: center;\n}\n.player_info .name mat-icon {\n  margin-right: 10px;\n  font-size: calc(20px + 1vw);\n}\n.player_info .shoots {\n  display: flex;\n  justify-content: flex-end;\n}\n.player_info .shoots .shoot {\n  margin: 0.1vw;\n  border-radius: 0.5vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 4vw;\n  height: 3vw;\n  font-size: calc(6px + 1vw);\n}\n.player_info .shoots .shoot.total {\n  margin-left: 10px;\n}\n.player_info .score {\n  font-size: 3.2vw;\n  letter-spacing: 0.5vw;\n  font-weight: bold;\n  float: right;\n}\n.player_info .score label {\n  font-size: 1vw;\n  letter-spacing: 0.2vw;\n}\n.player_info .note {\n  font-size: 2vw;\n  margin-right: 10px;\n  float: right;\n}\n.player_info .note label {\n  font-size: 1.5vw;\n}\n.player_info .field-set {\n  display: flex;\n  flex-flow: row wrap;\n}\n.player_info .field {\n  font-size: calc(0.7vw + 0.7vh);\n  width: 70px;\n  opacity: 0.4;\n}\n.player_info .field.highlighted, .player_info .field.active {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNjb3JlL0Q6XFxEZXZlbG9wbWVudFxcZGFydHMtc2NvcmVib2FyZC1uZy9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxwbGF5ZXItc2NvcmVcXHBsYXllci1zY29yZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxheWVyLXNjb3JlL3BsYXllci1zY29yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ047QURFSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQU47QURJRTtFQUNFLGFBQUE7QUNGSjtBREtFO0VBQ0UsZUFBQTtBQ0hKO0FETUU7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FDSko7QURPRTtFQUNFLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDTEo7QURNSTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7QUNKTjtBRFFFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDTko7QURRSTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ05OO0FEUU07RUFDRSxpQkFBQTtBQ05SO0FEV0U7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDVEo7QURXSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ1ROO0FEYUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDWEo7QURhSTtFQUNFLGdCQUFBO0FDWE47QURjRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ1pKO0FEY0U7RUFDRSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWko7QURjSTtFQUNFLFVBQUE7QUNaTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BsYXllci1zY29yZS9wbGF5ZXItc2NvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheWVyX2luZm8ge1xyXG4gIHBhZGRpbmc6IDF2dztcclxuXHJcbiAgJi5wbGF5ZXJfaW5mb192aXN1YWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuXHJcbiAgICAuc2NvcmUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxpbmUge1xyXG4gICAgbWFyZ2luOiAxdncgMDtcclxuICB9XHJcblxyXG4gIC5saW5lLXNwYWNlIHtcclxuICAgIG1hcmdpbjogMS41dncgMDtcclxuICB9XHJcblxyXG4gIC5zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IGNhbGMoMC42dncgKyAwLjV2aCk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogY2FsYyg1cHggKyAxdncpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAxdncpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNob290cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAuc2hvb3Qge1xyXG4gICAgICBtYXJnaW46IDAuMXZ3O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjV2dztcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiA0dnc7XHJcbiAgICAgIGhlaWdodDogM3Z3O1xyXG4gICAgICBmb250LXNpemU6IGNhbGMoNnB4ICsgMXZ3KTtcclxuXHJcbiAgICAgICYudG90YWwge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2NvcmUge1xyXG4gICAgZm9udC1zaXplOiAzLjJ2dztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjV2dztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJ2dztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ub3RlIHtcclxuICAgIGZvbnQtc2l6ZTogMi4wdnc7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZmllbGQtc2V0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIH1cclxuICAuZmllbGQge1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDAuN3Z3ICsgMC43dmgpO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcblxyXG4gICAgJi5oaWdobGlnaHRlZCwgJi5hY3RpdmUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucGxheWVyX2luZm8ge1xuICBwYWRkaW5nOiAxdnc7XG59XG4ucGxheWVyX2luZm8ucGxheWVyX2luZm9fdmlzdWFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBsYXllcl9pbmZvLnBsYXllcl9pbmZvX3Zpc3VhbCAubmFtZSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnBsYXllcl9pbmZvLnBsYXllcl9pbmZvX3Zpc3VhbCAuc2NvcmUge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnBsYXllcl9pbmZvIC5saW5lIHtcbiAgbWFyZ2luOiAxdncgMDtcbn1cbi5wbGF5ZXJfaW5mbyAubGluZS1zcGFjZSB7XG4gIG1hcmdpbjogMS41dncgMDtcbn1cbi5wbGF5ZXJfaW5mbyAuc21hbGwge1xuICBmb250LXNpemU6IGNhbGMoMC42dncgKyAwLjV2aCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBsYXllcl9pbmZvIC5uYW1lIHtcbiAgZm9udC1zaXplOiBjYWxjKDVweCArIDF2dyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGxheWVyX2luZm8gLm5hbWUgbWF0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgMXZ3KTtcbn1cbi5wbGF5ZXJfaW5mbyAuc2hvb3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5wbGF5ZXJfaW5mbyAuc2hvb3RzIC5zaG9vdCB7XG4gIG1hcmdpbjogMC4xdnc7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDR2dztcbiAgaGVpZ2h0OiAzdnc7XG4gIGZvbnQtc2l6ZTogY2FsYyg2cHggKyAxdncpO1xufVxuLnBsYXllcl9pbmZvIC5zaG9vdHMgLnNob290LnRvdGFsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ucGxheWVyX2luZm8gLnNjb3JlIHtcbiAgZm9udC1zaXplOiAzLjJ2dztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXZ3O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnBsYXllcl9pbmZvIC5zY29yZSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBsZXR0ZXItc3BhY2luZzogMC4ydnc7XG59XG4ucGxheWVyX2luZm8gLm5vdGUge1xuICBmb250LXNpemU6IDJ2dztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4ucGxheWVyX2luZm8gLm5vdGUgbGFiZWwge1xuICBmb250LXNpemU6IDEuNXZ3O1xufVxuLnBsYXllcl9pbmZvIC5maWVsZC1zZXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuLnBsYXllcl9pbmZvIC5maWVsZCB7XG4gIGZvbnQtc2l6ZTogY2FsYygwLjd2dyArIDAuN3ZoKTtcbiAgd2lkdGg6IDcwcHg7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5wbGF5ZXJfaW5mbyAuZmllbGQuaGlnaGxpZ2h0ZWQsIC5wbGF5ZXJfaW5mbyAuZmllbGQuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */"],
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
      }], function () {
        return [{
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationStateService"]
        }];
      }, {
        player: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hasContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scoreDisplayed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lifeDisplayed: [{
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
        var option_r28 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r28, " ");
      }
    }

    function PlayerSettingsComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerSettingsComponent_div_13_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var player_r29 = ctx.$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.playground.removePlayer(player_r29);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "remove_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r29.name);
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
          var _this73 = this;

          return this.storedPlayers.filter(function (o) {
            return _this73.playground.game.players.map(function (p) {
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
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Player name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function PlayerSettingsComponent_Template_mat_autocomplete_optionSelected_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return ctx.playerSelected($event, _r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PlayerSettingsComponent_mat_option_8_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerSettingsComponent_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return ctx.addPlayer(_r24);
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
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.playground.canAddPlayer())("matAutocomplete", _r25);

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


    var _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~services/dialog.service */
    "./src/app/shared/services/dialog.service.ts");
    /* harmony import */


    var _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ~components/player-settings/player-settings.component */
    "./src/app/shared/components/player-settings/player-settings.component.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

    var _c0 = ["*"];

    var SettingsComponent =
    /*#__PURE__*/
    function () {
      function SettingsComponent(dialogService) {
        _classCallCheck(this, SettingsComponent);

        this.dialogService = dialogService;
      }

      _createClass(SettingsComponent, [{
        key: "openStatistics",
        value: function openStatistics() {
          this.dialogService.openGameStatisticsDialog(this.playground.getGameStatistics());
        }
      }, {
        key: "openHistory",
        value: function openHistory() {
          this.dialogService.openGameHistory(this.playground.getGameHistory());
        }
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"]));
    };

    SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["app-settings"]],
      inputs: {
        playground: "playground"
      },
      ngContentSelectors: _c0,
      decls: 18,
      vars: 2,
      consts: [[1, "settings"], [3, "playground"], [1, "button", "shortmedium", 3, "click"], ["color", "primary", 1, "button", "big", 3, "click"], [1, "button", "big", 3, "click"]],
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_9_listener() {
            return ctx.openStatistics();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Player rank");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_11_listener() {
            return ctx.openHistory();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Game history");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_14_listener() {
            return ctx.playground.newGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_16_listener() {
            return ctx.playground.quit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.playground.gameTitle, " Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx.playground);
        }
      },
      directives: [_components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_2__["PlayerSettingsComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"]],
      styles: [".settings {\n  padding: 2vh 2vw;\n  width: 100%;\n}\n.settings h2 {\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  margin-left: 5px;\n}\n.settings mat-divider {\n  clear: both;\n  margin: 5px 0;\n}\n.settings .field-set {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2V0dGluZ3MvRDpcXERldmVsb3BtZW50XFxkYXJ0cy1zY29yZWJvYXJkLW5nL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHNldHRpbmdzXFxzZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURFRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDQUo7QURHRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3Mge1xyXG4gIHBhZGRpbmc6IDJ2aCAydnc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGgyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcblxyXG4gIG1hdC1kaXZpZGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICB9XHJcblxyXG4gIC5maWVsZC1zZXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbn1cclxuIiwiLnNldHRpbmdzIHtcbiAgcGFkZGluZzogMnZoIDJ2dztcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2V0dGluZ3MgaDIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uc2V0dGluZ3MgbWF0LWRpdmlkZXIge1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luOiA1cHggMDtcbn1cbi5zZXR0aW5ncyAuZmllbGQtc2V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdfQ== */"],
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
      }], function () {
        return [{
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"]
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

    var ApplicationSettings =
    /*#__PURE__*/
    _createClass(function ApplicationSettings() {
      _classCallCheck(this, ApplicationSettings);

      this.theme = 0;
      this.details = 0;
    });
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
  "./src/app/shared/models/game-statistics.model.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/models/game-statistics.model.ts ***!
    \********************************************************/

  /*! exports provided: GameStatistics */

  /***/
  function srcAppSharedModelsGameStatisticsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameStatistics", function () {
      return GameStatistics;
    });

    var GameStatistics =
    /*#__PURE__*/
    _createClass(function GameStatistics() {
      _classCallCheck(this, GameStatistics);
    });
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


    var _services_statistics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ~services/statistics.service */
    "./src/app/shared/services/statistics.service.ts");
    /* harmony import */


    var _models_game_statistics_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ~models/game-statistics.model */
    "./src/app/shared/models/game-statistics.model.ts");
    /* harmony import */


    var _services_bot_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~services/bot.service */
    "./src/app/shared/services/bot.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FIELDS_COUNT = 21;
    var MAXIMUM_NUMBER_OF_PLAYERS = 6;

    var Playground =
    /*#__PURE__*/
    function () {
      function Playground(gameTitle, application, game, route, dialogService, soundService, botService, statisticsService, gameName) {
        var minimumNumberOfPlayers = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 1;
        var maximumNumberOfPlayers = arguments.length > 10 ? arguments[10] : undefined;

        _classCallCheck(this, Playground);

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

      _createClass(Playground, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.settingsOpen = true;
          this.extraEndingMsg = '';
        }
      }, {
        key: "throwNumber",
        value: function throwNumber(args) {
          var _this74 = this;

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
            var gameEnded = false;
            this.multiplier = 1;
            var winners = this.game.players.filter(function (p) {
              return p.win;
            });

            if (winners.length > 0) {
              if (this.game.victoryFirst || this.game.getNumberOfPlayers() - winners.length <= 1 || !this.game.victoryFirst) {
                var content = this.extraEndingMsg ? this.extraEndingMsg : 'Round: #' + (this.game.round + 1);
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

            var activePlayers = this.game.players.filter(function (p) {
              return !_this74.getPlayerState(p) || !_this74.getPlayerState(p).isInactive();
            });

            if (!activePlayers.length) {
              var _content = this.extraEndingMsg ? this.extraEndingMsg : 'Round: #' + (this.game.round + 1);

              this.finishStatistics();
              this.dialogService.openDialog('Game Over!', _content, this.getTheFinalResult());
              this.newGame(true);
              gameEnded = true;
            }

            this.throwEnabled = true;

            if (!gameEnded && this.game.getActualPlayer().name.toLowerCase().indexOf(_services_bot_service__WEBPACK_IMPORTED_MODULE_5__["PLAYER_NAME"]) !== -1) {
              this.botThrow();
            }
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
            var msg = 'Number of players are incorrect.';

            if (this.minimumNumberOfPlayers) {
              msg += " (minimum: ".concat(this.minimumNumberOfPlayers);
            }

            if (this.maximumNumberOfPlayers) {
              msg += (this.minimumNumberOfPlayers ? ', ' : ' (') + "maximum: ".concat(this.maximumNumberOfPlayers, ").");
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
            this.hasChanges.next(Date.now());
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
          this.startStatistics();
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
        key: "isAlertField",
        value: function isAlertField(fieldIndex) {
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
        key: "decoratePlayerStat",
        value: function decoratePlayerStat(player) {
          return player.name + _services_statistics_service__WEBPACK_IMPORTED_MODULE_3__["STAT_NAME_SEPARATOR"] + player.score;
        }
      }, {
        key: "getGameConfig",
        value: function getGameConfig() {
          return '';
        }
      }, {
        key: "botThrow",
        value: function botThrow() {}
      }, {
        key: "getGameStatistics",
        value: function getGameStatistics() {
          var _this75 = this;

          var statistics = this.statisticsService.getGameStatistics(this.playground.gameName);
          var players = [];
          statistics.forEach(function (stat) {
            _this75.parseStatistics(stat, 'l', players);

            _this75.parseStatistics(stat, 'w', players);
          });
          return players;
        }
      }, {
        key: "getGameHistory",
        value: function getGameHistory() {
          return this.statisticsService.getGameStatistics(this.playground.gameName);
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
        key: "startStatistics",
        value: function startStatistics() {
          this.gameStatistics = new _models_game_statistics_model__WEBPACK_IMPORTED_MODULE_4__["GameStatistics"]();
          this.gameStatistics.s = new Date().toISOString();
          this.gameStatistics.g = this.gameName;
        }
      }, {
        key: "finishStatistics",
        value: function finishStatistics() {
          var _this76 = this;

          this.gameStatistics.f = new Date().toISOString();
          this.gameStatistics.w = this.game.players.filter(function (p) {
            return p.win;
          }).map(function (p) {
            return _this76.decoratePlayerStat(p);
          });
          this.gameStatistics.l = this.game.players.filter(function (p) {
            return !p.win;
          }).map(function (p) {
            return _this76.decoratePlayerStat(p);
          });
          this.gameStatistics.r = this.game.round;
          this.gameStatistics.c = this.getGameConfig();
          this.statisticsService.saveStatistics(this.gameStatistics);
        }
      }, {
        key: "parseStatistics",
        value: function parseStatistics(stat, field, players) {
          stat[field].forEach(function (p) {
            var name = p.split(_services_statistics_service__WEBPACK_IMPORTED_MODULE_3__["STAT_NAME_SEPARATOR"])[0];
            var player = players.find(function (pl) {
              return pl.n === name;
            });

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
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinvalidFactory"]();
    };

    Playground.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
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


    var _theme_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../theme.constant */
    "./src/app/theme.constant.ts");

    var APPLICATION_KEY = 'ApplicationSettings';
    var PLAYER_KEY = 'Players';

    var ApplicationStateService =
    /*#__PURE__*/
    function () {
      function ApplicationStateService() {
        _classCallCheck(this, ApplicationStateService);

        this.availableThemes = [_theme_constant__WEBPACK_IMPORTED_MODULE_2__["theme"]];
        this.settings = new _models_application_settings_model__WEBPACK_IMPORTED_MODULE_1__["ApplicationSettings"]();
        var data = localStorage.getItem(APPLICATION_KEY);

        if (data) {
          this.settings = JSON.parse(data);
        } // this.setTheme();

      }

      _createClass(ApplicationStateService, [{
        key: "toggleColorTheme",
        value: function toggleColorTheme() {
          this.settings.theme = (this.settings.theme + 1) % this.availableThemes.length;
          this.setTheme();
          this.saveSettings();
        }
      }, {
        key: "toggleDetails",
        value: function toggleDetails() {
          this.settings.details = (this.settings.details + 1) % 2;
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
          var _this77 = this;

          if (this.settings.theme >= this.availableThemes.length) {
            this.settings.theme = 0;
          }

          Object.keys(this.availableThemes[this.settings.theme].properties).forEach(function (property) {
            document.documentElement.style.setProperty(property, _this77.availableThemes[_this77.settings.theme].properties[property]);
          });
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
      return new (t || ApplicationStateService)();
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
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/bot.service.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/services/bot.service.ts ***!
    \************************************************/

  /*! exports provided: PLAYER_NAME, PLAYER_DELAY, PLAYER_DELAY_FAST, BotService */

  /***/
  function srcAppSharedServicesBotServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PLAYER_NAME", function () {
      return PLAYER_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PLAYER_DELAY", function () {
      return PLAYER_DELAY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PLAYER_DELAY_FAST", function () {
      return PLAYER_DELAY_FAST;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotService", function () {
      return BotService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PLAYER_NAME = 'phil';
    var PLAYER_DELAY = 1000;
    var PLAYER_DELAY_FAST = 500;
    var MAX_LEVEL = 20;
    var PLAYER_LEVEL = 9;

    var BotService =
    /*#__PURE__*/
    function () {
      function BotService() {
        _classCallCheck(this, BotService);
      }

      _createClass(BotService, [{
        key: "calculateMultiTarget",
        value: function calculateMultiTarget(targets) {
          var random = Math.floor(Math.random() * targets.length);
          return this.calculateTarget(targets[random]);
        }
      }, {
        key: "calculateTarget",
        value: function calculateTarget(target) {
          var actual = Math.floor(Math.random() * MAX_LEVEL) + 1;
          actual = target === 20 ? actual + 3 : actual;

          if (actual <= PLAYER_LEVEL) {
            return target;
          } else {
            var upOrBottomLine = Math.floor(Math.random() * 3);
            var mistakeLevel = (actual - PLAYER_LEVEL > 4 ? 4 : actual - PLAYER_LEVEL) - 1;

            if (mistakeLevel === 3) {
              return 0;
            }

            return TARGET_MATRIX[target][mistakeLevel][upOrBottomLine] - 1;
          }
        }
      }, {
        key: "isDoublePoint",
        value: function isDoublePoint() {
          return Math.floor(Math.random() * 100) < 15;
        }
      }, {
        key: "isTriplePoint",
        value: function isTriplePoint() {
          return Math.floor(Math.random() * 100) < 5;
        }
      }]);

      return BotService;
    }();

    BotService.ɵfac = function BotService_Factory(t) {
      return new (t || BotService)();
    };

    BotService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BotService,
      factory: BotService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BotService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();

    var TARGET_MATRIX = [[[20, 18, 5], [5, 4, 12], [12, 13, 7]], [[15, 17, 10], [10, 3, 6], [6, 19, 9]], [[17, 19, 2], [2, 7, 15], [15, 16, 5]], [[18, 13, 1], [1, 6, 20], [20, 10, 8]], [[12, 20, 9], [9, 1, 14], [14, 18, 2]], [[13, 10, 4], [4, 15, 18], [18, 2, 8]], [[19, 16, 8], [3, 8, 17], [17, 11, 1]], [[16, 11, 7], [7, 14, 9], [19, 9, 6]], [[14, 12, 11], [11, 5, 20], [8, 20, 10]], [[6, 15, 13], [13, 2, 4], [4, 17, 11]], [[8, 14, 16], [16, 9, 12], [7, 12, 10]], [[9, 5, 14], [14, 20, 11], [11, 1, 15]], [[4, 6, 18], [18, 10, 15], [1, 15, 16]], [[11, 9, 16], [8, 12, 5], [16, 5, 15]], [[10, 2, 6], [6, 17, 13], [13, 3, 14]], [[7, 8, 11], [19, 11, 14], [3, 14, 13]], [[2, 3, 15], [15, 19, 7], [10, 7, 12]], [[1, 4, 20], [20, 13, 6], [5, 6, 19]], [[3, 7, 17], [17, 16, 8], [2, 8, 18]], [[5, 1, 12], [12, 18, 9], [9, 4, 19]], [[20, 3, 6], [1, 19, 11], [18, 7, 8]]];
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


    var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ~components/confirm-dialog/confirm-dialog.component */
    "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ~components/game-statistics-dialog/game-statistics-dialog.component */
    "./src/app/shared/components/game-statistics-dialog/game-statistics-dialog.component.ts");
    /* harmony import */


    var _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ~components/game-history-dialog/game-history-dialog.component */
    "./src/app/shared/components/game-history-dialog/game-history-dialog.component.ts");
    /* harmony import */


    var _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ~components/game-type-statistics-dialog/game-type-statistics-dialog.component */
    "./src/app/shared/components/game-type-statistics-dialog/game-type-statistics-dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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
        key: "openGameStatisticsDialog",
        value: function openGameStatisticsDialog(statistics) {
          return this.dialog.open(_components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_3__["GameStatisticsDialogComponent"], {
            data: {
              statistics: statistics
            }
          });
        }
      }, {
        key: "openGameHistory",
        value: function openGameHistory(statistics) {
          return this.dialog.open(_components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_4__["GameHistoryDialogComponent"], {
            data: {
              statistics: statistics
            },
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '100%',
            width: '100%'
          });
        }
      }, {
        key: "openGameTypeStatistics",
        value: function openGameTypeStatistics(statistics) {
          return this.dialog.open(_components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_5__["GameTypeStatisticsDialogComponent"], {
            data: {
              statistics: statistics
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
          return this.dialog.open(_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
            panelClass: 'confirm-dialog',
            data: {
              title: title,
              content: content,
              players: []
            }
          });
        }
      }]);

      return DialogService;
    }();

    DialogService.ɵfac = function DialogService_Factory(t) {
      return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]));
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
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
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
        key: "getTheBestPlayers",
        value: function getTheBestPlayers() {
          var activePlayers = this.getActivePlayers();
          var list = activePlayers.length ? activePlayers : this.players;
          var max = list[0].score;
          list.forEach(function (p) {
            max = p.score > max ? p.score : max;
          });
          return list.filter(function (p) {
            return p.score === max;
          });
        }
      }, {
        key: "getTheWorstPlayers",
        value: function getTheWorstPlayers() {
          var activePlayers = this.getActivePlayers();
          var list = activePlayers.length ? activePlayers : this.players;
          var min = list[0].score;
          list.forEach(function (p) {
            min = p.score < min ? p.score : min;
          });
          return list.filter(function (p) {
            return p.score === min;
          });
        }
      }, {
        key: "isTheBestPlayer",
        value: function isTheBestPlayer(actPlayer) {
          var best = this.getTheBestPlayers();
          return actPlayer.score === (best && best.length ? best[0].score : 0);
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
        key: "no",
        value: function no() {// this.play('oh_no.mp3');
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
  "./src/app/shared/services/statistics.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/services/statistics.service.ts ***!
    \*******************************************************/

  /*! exports provided: STAT_NAME_SEPARATOR, StatisticsService */

  /***/
  function srcAppSharedServicesStatisticsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STAT_NAME_SEPARATOR", function () {
      return STAT_NAME_SEPARATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatisticsService", function () {
      return StatisticsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ~services/storage.service */
    "./src/app/shared/services/storage.service.ts");

    var STAT_NAME_SEPARATOR = '____';
    var STATISTICS_STORAGE_KEY = 'statistics';

    var StatisticsService =
    /*#__PURE__*/
    function () {
      function StatisticsService(storageService) {
        _classCallCheck(this, StatisticsService);

        this.storageService = storageService;
      }

      _createClass(StatisticsService, [{
        key: "saveStatistics",
        value: function saveStatistics(statistics) {
          var stat = this.storageService.getObject(STATISTICS_STORAGE_KEY);

          if (stat) {
            stat.push(statistics);
            this.storageService.setObject(STATISTICS_STORAGE_KEY, stat);
          } else {
            this.storageService.setObject(STATISTICS_STORAGE_KEY, [statistics]);
          }
        }
      }, {
        key: "getGameStatistics",
        value: function getGameStatistics(gameName) {
          var statistics = this.storageService.getObject(STATISTICS_STORAGE_KEY);
          return gameName ? statistics.filter(function (i) {
            return i.g === gameName;
          }) : statistics;
        }
      }, {
        key: "getPlayerStatistics",
        value: function getPlayerStatistics(playerName, gameName) {
          var playerStat = this.storageService.getObject(STATISTICS_STORAGE_KEY).filter(function (i) {
            return i.l.some(function (p) {
              return p.indexOf(playerName) !== -1;
            }) || i.w.some(function (p) {
              return p.indexOf(playerName) !== -1;
            });
          });
          return gameName ? playerStat.filter(function (i) {
            return i.g === gameName;
          }) : playerStat;
        }
      }, {
        key: "getGameTypeStatistics",
        value: function getGameTypeStatistics() {
          var stat = this.storageService.getObject(STATISTICS_STORAGE_KEY);
          var games = [];
          stat.forEach(function (s) {
            var type = games.find(function (g) {
              return g.name === s.g;
            });

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
      }, {
        key: "printStatistics",
        value: function printStatistics() {
          console.log(JSON.stringify(this.storageService.getObject(STATISTICS_STORAGE_KEY)));
        }
      }]);

      return StatisticsService;
    }();

    StatisticsService.ɵfac = function StatisticsService_Factory(t) {
      return new (t || StatisticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]));
    };

    StatisticsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StatisticsService,
      factory: StatisticsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/storage.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/services/storage.service.ts ***!
    \****************************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppSharedServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StorageService =
    /*#__PURE__*/
    function () {
      function StorageService() {
        _classCallCheck(this, StorageService);

        this.storage = localStorage;
      }

      _createClass(StorageService, [{
        key: "hasItem",
        value: function hasItem(key) {
          return !!this.getItem(key);
        }
      }, {
        key: "getItem",
        value: function getItem(key) {
          return this.storage.getItem(key);
        }
      }, {
        key: "getObject",
        value: function getObject(key) {
          return JSON.parse(this.getItem(key));
        }
      }, {
        key: "setItem",
        value: function setItem(key, value) {
          this.storage.setItem(key, value);
        }
      }, {
        key: "setObject",
        value: function setObject(key, value) {
          this.setItem(key, JSON.stringify(value));
        }
      }, {
        key: "removeItem",
        value: function removeItem(key) {
          this.storage.removeItem(key);
        }
      }]);

      return StorageService;
    }();

    StorageService.ɵfac = function StorageService_Factory(t) {
      return new (t || StorageService)();
    };

    StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StorageService,
      factory: StorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
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


    var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ~components/confirm-dialog/confirm-dialog.component */
    "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ~components/game-statistics-dialog/game-statistics-dialog.component */
    "./src/app/shared/components/game-statistics-dialog/game-statistics-dialog.component.ts");
    /* harmony import */


    var _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ~components/game-history-dialog/game-history-dialog.component */
    "./src/app/shared/components/game-history-dialog/game-history-dialog.component.ts");
    /* harmony import */


    var _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ~components/game-type-statistics-dialog/game-type-statistics-dialog.component */
    "./src/app/shared/components/game-type-statistics-dialog/game-type-statistics-dialog.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ~components/menu/menu.component */
    "./src/app/shared/components/menu/menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ~components/number-plate-visual/number-plate-visual.component */
    "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
    /* harmony import */


    var _components_number_plate_shanghai_number_plate_shanghai_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ~components/number-plate-shanghai/number-plate-shanghai.component */
    "./src/app/shared/components/number-plate-shanghai/number-plate-shanghai.component.ts");

    var components = [_components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_6__["NumberPlateComponent"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["GameToolbarComponent"], _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_11__["GameStatisticsDialogComponent"], _components_number_plate_shanghai_number_plate_shanghai_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateShanghaiComponent"], _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_7__["PlayerSettingsComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_9__["PlayerScoreComponent"], _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateVisualComponent"], _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_12__["GameHistoryDialogComponent"], _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_13__["GameTypeStatisticsDialogComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"]];

    var SharedModule =
    /*#__PURE__*/
    _createClass(function SharedModule() {
      _classCallCheck(this, SharedModule);
    });

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_6__["NumberPlateComponent"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["GameToolbarComponent"], _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_11__["GameStatisticsDialogComponent"], _components_number_plate_shanghai_number_plate_shanghai_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateShanghaiComponent"], _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_7__["PlayerSettingsComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_9__["PlayerScoreComponent"], _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateVisualComponent"], _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_12__["GameHistoryDialogComponent"], _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_13__["GameTypeStatisticsDialogComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_6__["NumberPlateComponent"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["GameToolbarComponent"], _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_11__["GameStatisticsDialogComponent"], _components_number_plate_shanghai_number_plate_shanghai_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateShanghaiComponent"], _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _components_player_settings_player_settings_component__WEBPACK_IMPORTED_MODULE_7__["PlayerSettingsComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_9__["PlayerScoreComponent"], _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateVisualComponent"], _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_12__["GameHistoryDialogComponent"], _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_13__["GameTypeStatisticsDialogComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]],
          declarations: components,
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]].concat(components),
          entryComponents: [_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _components_game_statistics_dialog_game_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_11__["GameStatisticsDialogComponent"], _components_game_history_dialog_game_history_dialog_component__WEBPACK_IMPORTED_MODULE_12__["GameHistoryDialogComponent"], _components_game_type_statistics_dialog_game_type_statistics_dialog_component__WEBPACK_IMPORTED_MODULE_13__["GameTypeStatisticsDialogComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/theme.constant.ts":
  /*!***********************************!*\
    !*** ./src/app/theme.constant.ts ***!
    \***********************************/

  /*! exports provided: theme */

  /***/
  function srcAppThemeConstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "theme", function () {
      return theme;
    });

    var theme = {
      properties: {}
    };
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
        this.punishment = false;
        this.saboteur = true;
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
      }, {
        key: "togglePunishment",
        value: function togglePunishment() {
          this.punishment = !this.punishment;

          if (this.punishment) {
            this.saboteur = false;
          }
        }
      }, {
        key: "toggleSaboteur",
        value: function toggleSaboteur() {
          this.saboteur = !this.saboteur;

          if (this.saboteur) {
            this.punishment = false;
          }
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


    var _services_bot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ~services/bot.service */
    "./src/app/shared/services/bot.service.ts");
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


    var _services_statistics_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ~services/statistics.service */
    "./src/app/shared/services/statistics.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ~components/settings/settings.component */
    "./src/app/shared/components/settings/settings.component.ts");
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


    var _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ~components/number-plate-visual/number-plate-visual.component */
    "./src/app/shared/components/number-plate-visual/number-plate-visual.component.ts");
    /* harmony import */


    var _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ~components/number-plate/number-plate.component */
    "./src/app/shared/components/number-plate/number-plate.component.ts");

    function X01Component_app_settings_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-settings", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r61.settings.setStartValue(101);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "101 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r63.settings.setStartValue(201);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "201 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r64.settings.setStartValue(301);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "301 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r65.settings.setStartValue(501);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "501 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r66.settings.setStartValue(701);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "701 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r67.settings.setStartValue(901);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "901 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r68.settings.toggleSaboteur();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Saboteur ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r69.settings.togglePunishment();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Punishment ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Check In");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r70.settings.setStart(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Normal ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r71.settings.setStart(2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Double ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r72.settings.setStart(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Triple ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Check Out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r73.settings.setCheckout(1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Single ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r74.settings.setCheckout(2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Double ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r75.settings.setCheckout(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Triple ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function X01Component_app_settings_1_Template_button_click_38_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r76.settings.setCheckout(4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "High Score ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r56.playground);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r56.settings.startValue === 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r56.settings.startValue === 201);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r56.settings.startValue === 301);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r56.settings.startValue === 501);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r56.settings.startValue === 701);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r56.settings.startValue === 901);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r56.settings.saboteur);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r56.settings.punishment);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r56.settings.start === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r56.settings.start === 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r56.settings.start === 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r56.settings.checkout === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r56.settings.checkout === 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r56.settings.checkout === 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("primary", ctx_r56.settings.checkout === 4);
      }
    }

    function X01Component_app_game_toolbar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-toolbar", 8);
      }

      if (rf & 2) {
        var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r57.playground)("info", ctx_r57.getInfo());
      }
    }

    function X01Component_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-player-score", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var player_r78 = ctx.$implicit;
        var i_r79 = ctx.index;

        var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("player ", i_r79 === ctx_r77.game.actualPlayerIndex ? "highlighted" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", player_r78)("hasContent", false);
      }
    }

    function X01Component_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, X01Component_div_4_div_1_Template, 2, 5, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visual", !ctx_r58.application.settings.details);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r58.game.players);
      }
    }

    function X01Component_app_number_plate_visual_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate-visual", 5);
      }

      if (rf & 2) {
        var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r59.playground);
      }
    }

    function X01Component_app_number_plate_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-number-plate", 5);
      }

      if (rf & 2) {
        var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playground", ctx_r60.playground);
      }
    }

    var X01Component =
    /*#__PURE__*/
    function (_models_playground_mo12) {
      _inherits(X01Component, _models_playground_mo12);

      var _super23 = _createSuper(X01Component);

      function X01Component(application, game, route, dialogService, soundService, botService, statisticsService) {
        var _this78;

        _classCallCheck(this, X01Component);

        _this78 = _super23.call(this, 'X01', application, game, route, dialogService, soundService, botService, statisticsService, 'x01');
        _this78.settings = new _models_x01_settings_model__WEBPACK_IMPORTED_MODULE_3__["X01Settings"]();
        return _this78;
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
          var _this79 = this;

          var next = false;

          if (this.settings.saboteur || this.settings.punishment) {
            this.game.players.filter(function (p) {
              return p.id !== player.id && p.score === player.score;
            }).forEach(function (p) {
              if (_this79.settings.saboteur) {
                p.score = _this79.settings.startValue;
              } else {
                player.score = _this79.settings.startValue;
              }
            });
          }

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
          var _this80 = this;

          this.game.players.forEach(function (player) {
            return player.score = _this80.settings.startValue;
          });
        }
      }, {
        key: "getGameConfig",
        value: function getGameConfig() {
          return this.settings.startValue + '';
        }
      }, {
        key: "botThrow",
        value: function botThrow() {
          var _this81 = this;

          var target = Math.floor(Math.random() * 10) + 10;

          if (!this.settings.isHighScoreGame()) {
            var player = this.game.getActualPlayer();

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

          var index = this.botService.calculateTarget(target);
          setTimeout(function () {
            _this81.throwNumber([_this81.isFieldEnabled(index) ? _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(index) : 0, _models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"].getFieldValueFromIndex(index)]);
          }, _services_bot_service__WEBPACK_IMPORTED_MODULE_4__["PLAYER_DELAY"]);
        }
      }, {
        key: "getInfo",
        value: function getInfo() {
          return this.game.getActualPlayer().score;
        }
      }, {
        key: "isPrimaryField",
        value: function isPrimaryField(fieldIndex) {
          return true;
        }
      }]);

      return X01Component;
    }(_models_playground_model__WEBPACK_IMPORTED_MODULE_1__["Playground"]);

    X01Component.ɵfac = function X01Component_Factory(t) {
      return new (t || X01Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bot_service__WEBPACK_IMPORTED_MODULE_4__["BotService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_statistics_service__WEBPACK_IMPORTED_MODULE_10__["StatisticsService"]));
    };

    X01Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: X01Component,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 7,
      consts: [["id", "playgroundContent"], [3, "playground", 4, "ngIf"], [1, "side-left"], [3, "playground", "info", 4, "ngIf"], ["class", "player_container", 3, "visual", 4, "ngIf"], [3, "playground"], [1, "button", 3, "click"], [1, "button", "shortmedium", 3, "click"], [3, "playground", "info"], [1, "player_container"], [3, "class", 4, "ngFor", "ngForOf"], [3, "player", "hasContent"]],
      template: function X01Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, X01Component_app_settings_1_Template, 40, 31, "app-settings", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, X01Component_app_game_toolbar_3_Template, 1, 2, "app-game-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, X01Component_div_4_Template, 2, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, X01Component_app_number_plate_visual_5_Template, 1, 1, "app-number-plate-visual", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, X01Component_app_number_plate_6_Template, 1, 1, "app-number-plate", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _components_game_toolbar_game_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["GameToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _components_player_score_player_score_component__WEBPACK_IMPORTED_MODULE_15__["PlayerScoreComponent"], _components_number_plate_visual_number_plate_visual_component__WEBPACK_IMPORTED_MODULE_16__["NumberPlateVisualComponent"], _components_number_plate_number_plate_component__WEBPACK_IMPORTED_MODULE_17__["NumberPlateComponent"]],
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
          type: _services_application_state_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationStateService"]
        }, {
          type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]
        }, {
          type: _services_sound_service__WEBPACK_IMPORTED_MODULE_9__["SoundService"]
        }, {
          type: _services_bot_service__WEBPACK_IMPORTED_MODULE_4__["BotService"]
        }, {
          type: _services_statistics_service__WEBPACK_IMPORTED_MODULE_10__["StatisticsService"]
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

    var X01Module =
    /*#__PURE__*/
    _createClass(function X01Module() {
      _classCallCheck(this, X01Module);
    });

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
      appVersion: __webpack_require__(
      /*! ../../package.json */
      "./package.json").version,
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