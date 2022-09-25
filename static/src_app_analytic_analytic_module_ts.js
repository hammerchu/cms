"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_analytic_analytic_module_ts"],{

/***/ 7189:
/*!*****************************************************!*\
  !*** ./src/app/analytic/analytic-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticPageRoutingModule": () => (/* binding */ AnalyticPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _analytic_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytic.page */ 3131);




const routes = [
    {
        path: '',
        component: _analytic_page__WEBPACK_IMPORTED_MODULE_0__.AnalyticPage
    }
];
let AnalyticPageRoutingModule = class AnalyticPageRoutingModule {
};
AnalyticPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AnalyticPageRoutingModule);



/***/ }),

/***/ 5639:
/*!*********************************************!*\
  !*** ./src/app/analytic/analytic.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticPageModule": () => (/* binding */ AnalyticPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _analytic_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytic-routing.module */ 7189);
/* harmony import */ var _analytic_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytic.page */ 3131);







let AnalyticPageModule = class AnalyticPageModule {
};
AnalyticPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _analytic_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnalyticPageRoutingModule
        ],
        declarations: [_analytic_page__WEBPACK_IMPORTED_MODULE_1__.AnalyticPage]
    })
], AnalyticPageModule);



/***/ }),

/***/ 3131:
/*!*******************************************!*\
  !*** ./src/app/analytic/analytic.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticPage": () => (/* binding */ AnalyticPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _analytic_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytic.page.html?ngResource */ 9059);
/* harmony import */ var _analytic_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytic.page.scss?ngResource */ 7343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AnalyticPage = class AnalyticPage {
    constructor() { }
    ngOnInit() {
    }
};
AnalyticPage.ctorParameters = () => [];
AnalyticPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-analytic',
        template: _analytic_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_analytic_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AnalyticPage);



/***/ }),

/***/ 7343:
/*!********************************************************!*\
  !*** ./src/app/analytic/analytic.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmFseXRpYy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9059:
/*!********************************************************!*\
  !*** ./src/app/analytic/analytic.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Analytic</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_analytic_analytic_module_ts.js.map