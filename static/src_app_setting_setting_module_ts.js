"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_setting_setting_module_ts"],{

/***/ 1532:
/*!***************************************************!*\
  !*** ./src/app/setting/setting-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingPageRoutingModule": () => (/* binding */ SettingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.page */ 3396);




const routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_0__.SettingPage
    }
];
let SettingPageRoutingModule = class SettingPageRoutingModule {
};
SettingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingPageRoutingModule);



/***/ }),

/***/ 943:
/*!*******************************************!*\
  !*** ./src/app/setting/setting.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingPageModule": () => (/* binding */ SettingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting-routing.module */ 1532);
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.page */ 3396);







let SettingPageModule = class SettingPageModule {
};
SettingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _setting_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingPageRoutingModule
        ],
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_1__.SettingPage]
    })
], SettingPageModule);



/***/ }),

/***/ 3396:
/*!*****************************************!*\
  !*** ./src/app/setting/setting.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingPage": () => (/* binding */ SettingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _setting_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.page.html?ngResource */ 5731);
/* harmony import */ var _setting_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.page.scss?ngResource */ 8817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let SettingPage = class SettingPage {
    constructor() { }
    ngOnInit() {
    }
};
SettingPage.ctorParameters = () => [];
SettingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-setting',
        template: _setting_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_setting_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingPage);



/***/ }),

/***/ 8817:
/*!******************************************************!*\
  !*** ./src/app/setting/setting.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5nLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5731:
/*!******************************************************!*\
  !*** ./src/app/setting/setting.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Setting</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_setting_setting_module_ts.js.map