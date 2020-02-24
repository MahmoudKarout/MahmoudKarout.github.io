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
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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

      this.title = 'portfolio';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 472,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg", "right"], ["href", "#", 1, "navbar-brand"], ["width", "100", "height", "100", "src", "assets/logo.png"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], ["width", "40", "height", "25", "src", "assets/collapse.png"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "active"], ["href", "#about", 1, "nav-link"], ["id", "numb_color"], [1, "nav-item"], ["href", "#experience", 1, "nav-link"], ["href", "#projects", 1, "nav-link"], ["href", "#contact", 1, "nav-link"], [1, "icon-bar"], ["href", "mailto:mahmoudtkarout@gmail.com"], ["width", "18", "height", "18", "viewBox", "0 0 25 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "linker"], ["d", "M12.5 2.08333C18.2437 2.08333 22.9167 6.75625 22.9167 12.5C22.9167 18.2437 18.2437 22.9167 12.5 22.9167C6.75625 22.9167 2.08333 18.2437 2.08333 12.5C2.08333 6.75625 6.75625 2.08333 12.5 2.08333ZM12.5 0C5.59688 0 0 5.59688 0 12.5C0 19.4031 5.59688 25 12.5 25C19.4031 25 25 19.4031 25 12.5C25 5.59688 19.4031 0 12.5 0ZM12.5219 18.5667C8.45208 18.5667 6.25 16.0271 6.25 12.7479C6.25 9.24479 8.73021 6.43333 13.1646 6.43333C16.401 6.43333 18.75 8.53646 18.75 11.4344C18.75 15.9719 13.3698 17.1698 13.6396 14.5812C13.2708 15.1594 12.674 15.8073 11.5292 15.8073C10.2198 15.8073 9.40417 14.849 9.40417 13.3042C9.40417 10.9896 10.926 9.03333 12.7271 9.03333C13.5906 9.03333 14.1844 9.48958 14.4333 10.1896L14.675 9.33958H15.8927C15.7656 9.77292 14.6833 13.7812 14.6833 13.7812C14.3469 15.1698 15.3865 15.1938 16.3104 14.4563C18.0448 13.1125 18.1333 9.59792 15.7906 8.13229C13.2792 6.62708 7.56458 7.55833 7.56458 12.6604C7.56458 15.5833 9.62292 17.5469 12.6833 17.5469C14.474 17.5469 15.5698 17.0625 16.4833 16.5323L17.0958 17.4167C16.2042 17.9187 14.7719 18.5667 12.5219 18.5667ZM11.301 11.1156C10.9292 11.8135 10.6885 12.7177 10.6885 13.4198C10.6885 15.3 12.5229 15.3115 13.424 13.5448C13.7948 12.8187 14.0344 11.8927 14.0344 11.1854C14.0344 9.66667 12.2135 9.39687 11.301 11.1156Z", "fill", "#8C8C8C"], ["href", "https://twitter.com/mahmoud_karout1", "target", "_blank"], ["width", "18", "height", "18", "viewBox", "0 0 25 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M25 2.36772C24.0802 2.76969 23.0917 3.0404 22.0542 3.16243C23.1135 2.53794 23.9271 1.5484 24.3094 0.369155C23.3187 0.947498 22.2208 1.36792 21.0521 1.59454C20.1177 0.613208 18.7833 0 17.3083 0C13.9969 0 11.5635 3.04143 12.3115 6.19873C8.05 5.98851 4.27083 3.97867 1.74062 0.923913C0.396875 3.19319 1.04375 6.16181 3.32708 7.66509C2.4875 7.63843 1.69583 7.41181 1.00521 7.03343C0.948958 9.37244 2.65208 11.5607 5.11875 12.0478C4.39687 12.2406 3.60625 12.2857 2.80208 12.1339C3.45417 14.1397 5.34792 15.5988 7.59375 15.6399C5.4375 17.3041 2.72083 18.0476 0 17.7317C2.26979 19.1643 4.96667 20 7.8625 20C17.3854 20 22.7656 12.0826 22.4406 4.98154C23.4427 4.26887 24.3125 3.37982 25 2.36772Z", "fill", "#8C8C8C"], ["href", "https://www.instagram.com/mahmoudkarout/", "target", "_blank"], ["width", "18", "height", "18", "viewBox", "0 0 25 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12.5 2.25312C15.8375 2.25312 16.2333 2.26562 17.5521 2.32604C20.9396 2.48021 22.5219 4.0875 22.676 7.45C22.7365 8.76771 22.7479 9.16354 22.7479 12.501C22.7479 15.8396 22.7354 16.2344 22.676 17.5521C22.5208 20.9115 20.9427 22.5219 17.5521 22.676C16.2333 22.7365 15.8396 22.749 12.5 22.749C9.1625 22.749 8.76667 22.7365 7.44896 22.676C4.05312 22.5208 2.47917 20.9062 2.325 17.551C2.26458 16.2333 2.25208 15.8385 2.25208 12.5C2.25208 9.1625 2.26562 8.76771 2.325 7.44896C2.48021 4.0875 4.05833 2.47917 7.44896 2.325C8.76771 2.26562 9.1625 2.25312 12.5 2.25312ZM12.5 0C9.10521 0 8.68021 0.0145833 7.34687 0.075C2.80729 0.283333 0.284375 2.80208 0.0760417 7.34583C0.0145833 8.68021 0 9.10521 0 12.5C0 15.8948 0.0145833 16.3208 0.075 17.6542C0.283333 22.1937 2.80208 24.7167 7.34583 24.925C8.68021 24.9854 9.10521 25 12.5 25C15.8948 25 16.3208 24.9854 17.6542 24.925C22.1896 24.7167 24.7188 22.1979 24.924 17.6542C24.9854 16.3208 25 15.8948 25 12.5C25 9.10521 24.9854 8.68021 24.925 7.34687C24.7208 2.81146 22.199 0.284375 17.6552 0.0760417C16.3208 0.0145833 15.8948 0 12.5 0V0ZM12.5 6.08125C8.95521 6.08125 6.08125 8.95521 6.08125 12.5C6.08125 16.0448 8.95521 18.9198 12.5 18.9198C16.0448 18.9198 18.9188 16.0458 18.9188 12.5C18.9188 8.95521 16.0448 6.08125 12.5 6.08125ZM12.5 16.6667C10.199 16.6667 8.33333 14.8021 8.33333 12.5C8.33333 10.199 10.199 8.33333 12.5 8.33333C14.801 8.33333 16.6667 10.199 16.6667 12.5C16.6667 14.8021 14.801 16.6667 12.5 16.6667ZM19.1729 4.32812C18.3438 4.32812 17.6719 5 17.6719 5.82812C17.6719 6.65625 18.3438 7.32812 19.1729 7.32812C20.001 7.32812 20.6719 6.65625 20.6719 5.82812C20.6719 5 20.001 4.32812 19.1729 4.32812Z", "fill", "#8C8C8C"], ["href", "https://www.linkedin.com/in/mahmoudkarout/", "target", "_blank"], ["d", "M5.1875 2.71739C5.1875 4.21848 4.03125 5.43478 2.60417 5.43478C1.17708 5.43478 0.0208333 4.21848 0.0208333 2.71739C0.0208333 1.21739 1.17708 0 2.60417 0C4.03125 0 5.1875 1.21739 5.1875 2.71739ZM5.20833 7.6087H0V25H5.20833V7.6087ZM13.5229 7.6087H8.34792V25H13.524V15.8707C13.524 10.7946 19.8042 10.3793 19.8042 15.8707V25H25V13.988C25 5.42283 15.7063 5.73478 13.5229 9.95109V7.6087Z", "fill", "#8C8C8C"], ["href", "https://github.com/MahmoudKarout", "target", "_blank"], ["d", "M12.5 0C5.59792 0 0 5.73837 0 12.816C0 18.4785 3.58125 23.2824 8.54896 24.9773C9.17292 25.0959 9.375 24.6986 9.375 24.3611V21.9752C5.89792 22.7505 5.17396 20.4629 5.17396 20.4629C4.60521 18.9816 3.78542 18.5875 3.78542 18.5875C2.65104 17.7918 3.87187 17.8089 3.87187 17.8089C5.12708 17.8986 5.7875 19.13 5.7875 19.13C6.90208 21.0887 8.71146 20.5227 9.425 20.1948C9.53646 19.3671 9.86042 18.8011 10.2188 18.4817C7.44271 18.156 4.52396 17.057 4.52396 12.1474C4.52396 10.7473 5.0125 9.60453 5.81146 8.70741C5.68229 8.3838 5.25417 7.07977 5.93333 5.31544C5.93333 5.31544 6.98333 4.97154 9.37187 6.62908C10.3687 6.34499 11.4375 6.20295 12.5 6.19761C13.5625 6.20295 14.6323 6.34499 15.6312 6.62908C18.0177 4.97154 19.0656 5.31544 19.0656 5.31544C19.7458 7.08084 19.3177 8.38487 19.1885 8.70741C19.9906 9.60453 20.475 10.7484 20.475 12.1474C20.475 17.0698 17.551 18.1539 14.7677 18.4711C15.2156 18.8684 15.625 19.648 15.625 20.8442V24.3611C15.625 24.7018 15.825 25.1023 16.4594 24.9763C21.4229 23.2792 25 18.4764 25 12.816C25 5.73837 19.4031 0 12.5 0Z", "fill", "#8C8C8C"], [1, "vl"], [2, "height", "100vh", "overflow", "hidden"], ["id", "home", 1, "row", "w-50", "h-50", "my-auto", "mx-auto"], ["id", "intro", 1, "container", "my-auto"], ["id", "description", 1, "lead"], [1, "skeuText"], [1, "skeuUnderlineUncolored"], ["id", "selfDescription"], ["id", "description"], ["onclick", "window.location.href = 'https://github.com/MahmoudKarout/CV/raw/master/Mahmoud%20Karout_CV.pdf';", 1, "gradient_button"], ["id", "about", 2, "height", "100vh", "overflow", "hidden"], [1, "container", "my-auto", "w-100"], [1, "row"], [1, "col-sm-5"], [1, "col-sm-7"], [1, "display-4", "skeuUnderlineUncolored"], ["id", "description", 2, "width", "100%", "margin-top", "45px"], [1, "container", 2, "margin-top", "30px"], [1, "col-5"], ["width", "18", "height", "18", "viewBox", "0 0 15 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["filter", "url(#filter0_d)"], ["d", "M12 6.26795C13.3333 7.03775 13.3333 8.96225 12 9.73205L3 14.9282C1.66667 15.698 0 14.7358 0 13.1962L0 2.80385C0 1.26425 1.66667 0.301996 3 1.0718L12 6.26795Z", "fill", "black"], ["id", "filter0_d", "x", "0", "y", "0.800903", "width", "15", "height", "16.3983", "filterUnits", "userSpaceOnUse", "color-interpolation-filters", "sRGB"], ["flood-opacity", "0", "result", "BackgroundImageFix"], ["in", "SourceAlpha", "type", "matrix", "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"], ["dx", "1", "dy", "1"], ["stdDeviation", "0.5"], ["type", "matrix", "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"], ["mode", "normal", "in2", "BackgroundImageFix", "result", "effect1_dropShadow"], ["mode", "normal", "in", "SourceGraphic", "in2", "effect1_dropShadow", "result", "shape"], ["id", "description-list"], [1, "col"], ["id", "experience", 2, "height", "100vh", "overflow", "hidden"], [1, "container"], [1, "display-4", "skeuText"], [1, "container", "experienceBox"], [1, "col-12"], [1, "companyName"], [1, "jobTitle"], [1, "col-6"], [1, "dateStamp"], [1, "row", "w-100"], [1, "col-1", "w-100", 2, "padding-right", "unset !important"], ["width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["id", "filter0_d", "x", "0", "y", "0.800903", "width", "20", "height", "20", "filterUnits", "userSpaceOnUse", "color-interpolation-filters", "sRGB"], [1, "col-11", 2, "padding", "unset !important"], [1, "jobDescription"], ["id", "projects", 2, "height", "100vh", "overflow", "hidden"], [1, "col-sm-4"], [1, "col-sm-8"], [1, "container", "h-100", "experienceBox"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["alt", "First slide", "src", "assets/Shoplifting_Smart_Stores_Using_Adversarial_Machine_Learning6.pdf", "type", "application/pdf", 1, "d-block", "w-100"], [1, "carousel-item"], ["alt", "Second slide", "src", "https://www.youtube.com/embed/mJ35X2LRd9Q", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "d-block", "w-100"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["id", "contact", 2, "height", "100vh", "overflow", "hidden"], [1, "col-sm-6"], ["onclick", "window.location.href = 'mailto:mahmoudtkarout@gmail.com';", 1, "gradient_button"], ["id", "sticky-footer", 1, "py-4", "text-white-50", 2, "z-index", "10001", "background-color", "#8C8C8C !important"], [1, "container", "text-center", 2, "background-color", "8C8C8C !important"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "01. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "02. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "03. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "04. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "svg", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "svg", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "svg", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "section", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Hi my name is, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Mahmoud Karout .");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " I am a Software Developer based in Lebanon, Beirut specializing in building high-quality websites and applications.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "section", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "About Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Hello! I'm Mahmoud Karout, a Software Developer based in Beirut, Lebanon who enjoys building things that live on the internet. I develop websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "I am a hard-working and passionate fresh graduate from the American University of Beirut, aiming to secure an opportunity where I can mobilize my skills acquired through past experiences and self-study in the area of software development, towards advancing your organisation\u2019s growth. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Here are a few technologies I've been working with recently: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "svg", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "filter", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "feFlood", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "feColorMatrix", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "feOffset", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "feGaussianBlur", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "feColorMatrix", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "feBlend", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "feBlend", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Flutter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "svg", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "filter", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "feFlood", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "feColorMatrix", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "feOffset", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "feGaussianBlur", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "feColorMatrix", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "feBlend", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "feBlend", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " JavaScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "svg", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "filter", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "feFlood", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "feColorMatrix", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "feOffset", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "feGaussianBlur", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "feColorMatrix", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "feBlend", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "feBlend", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Node.js");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "svg", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "filter", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "feFlood", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "feColorMatrix", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "feOffset", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "feGaussianBlur", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "feColorMatrix", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "feBlend", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "feBlend", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " TypeScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "svg", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "filter", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "feFlood", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "feColorMatrix", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "feOffset", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "feGaussianBlur", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "feColorMatrix", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "feBlend", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "feBlend", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "svg", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "filter", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "feFlood", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "feColorMatrix", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "feOffset", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "feGaussianBlur", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "feColorMatrix", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "feBlend", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "feBlend", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "section", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "My Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "p", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Web Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "@ Entrepreneur Venture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "June 2018 - Jan 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "svg", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "filter", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "feFlood", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "feColorMatrix", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "feOffset", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "feGaussianBlur", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "feColorMatrix", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "feBlend", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "feBlend", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " Worked with a team of three developers to build a company directory website for the MENA region using ASP.net MVC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "svg", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "filter", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "feFlood", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "feColorMatrix", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "feOffset", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "feGaussianBlur", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "feColorMatrix", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "feBlend", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "feBlend", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " Designed the database using Microsoft SQL ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "svg", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "filter", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "feFlood", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "feColorMatrix", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "feOffset", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "feGaussianBlur", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "feColorMatrix", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "feBlend", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "feBlend", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, " Helped the team to overcome many problems ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "p", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Web Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "@ AUB's IT Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "p", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Jan 2018 - May 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "svg", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "filter", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "feFlood", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "feColorMatrix", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "feOffset", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "feGaussianBlur", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "feColorMatrix", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "feBlend", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "feBlend", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " Worked in agile with a small team of student web developers to help the Chemistry department to digitize their work ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "svg", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "filter", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "feFlood", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "feColorMatrix", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "feOffset", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "feGaussianBlur", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "feColorMatrix", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "feBlend", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "feBlend", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " Designed and developed a user friendly website using ASP.net MVC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "svg", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "filter", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "feFlood", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "feColorMatrix", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "feOffset", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "feGaussianBlur", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "feColorMatrix", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "feBlend", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "feBlend", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, " Managed to help the department increase their productivity by organizing their storage rooms, and labs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "section", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "p", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "p", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "FYP | Adversarial Machine Learning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "p", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "June 2018 - Jan 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "svg", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "filter", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "feFlood", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "feColorMatrix", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "feOffset", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "feGaussianBlur", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "feColorMatrix", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "feBlend", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "feBlend", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, " Adversarial Machine Learning algorithm that tricks Google\u2019s Artificial Intelligence \u201CTensorFlow\u201D image classifier by generating an undetectable patch. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "svg", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](346, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "filter", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "feFlood", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "feColorMatrix", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "feOffset", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "feGaussianBlur", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "feColorMatrix", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "feBlend", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "feBlend", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, " Accepted as a full paper to IEEE AICCSA 2019 in Abu Dhabi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "svg", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "filter", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](366, "feFlood", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](367, "feColorMatrix", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](368, "feOffset", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](369, "feGaussianBlur", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "feColorMatrix", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "feBlend", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "feBlend", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, " Paper And Testing Video ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "ol", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](378, "li", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "li", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "embed", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](384, "iframe", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "a", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](386, "span", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "a", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](390, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "p", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Ethical Hacking Workshop by Riemer Brown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](398, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "p", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "Jult 2018 - Sept 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "svg", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](407, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "filter", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](410, "feFlood", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](411, "feColorMatrix", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](412, "feOffset", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](413, "feGaussianBlur", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](414, "feColorMatrix", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](415, "feBlend", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](416, "feBlend", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, " Learned several Kali Linux hacking tools ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "svg", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](424, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "filter", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](427, "feFlood", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](428, "feColorMatrix", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](429, "feOffset", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](430, "feGaussianBlur", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](431, "feColorMatrix", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](432, "feBlend", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "feBlend", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, " Managed to find website vulnerabilities and loopholes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "svg", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](441, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "filter", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](444, "feFlood", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](445, "feColorMatrix", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](446, "feOffset", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](447, "feGaussianBlur", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](448, "feColorMatrix", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](449, "feBlend", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](450, "feBlend", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, " Learned to crack wi-fi passwords ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "section", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "p", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "What's Next?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](461, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "I am currently looking for freelance or full-time job , my inbox is always open. Whether for a potential project or not");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "button", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "Contact Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "footer", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "Copyright \xA9 Mahmoud Karout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](471, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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
    /*! /Users/mahmoud/Files/portfolio/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map