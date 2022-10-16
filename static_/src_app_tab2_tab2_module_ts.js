"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 1748);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 1597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let Tab2Page = class Tab2Page {
    constructor(modal) {
        this.modal = modal;
        this.showAddScreen = false;
        this.showAddContentLogic = false;
    }
    addScreen() {
        this.showAddScreen = true;
        console.log("add new screen");
    }
    addContentLogic() {
        this.showAddContentLogic = true;
        console.log("add new screen logic");
    }
    onWillDismiss($event) {
        this.showAddScreen = false;
        this.showAddContentLogic = false;
        this.modal.dismiss();
        console.log("close modal");
    }
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab2',
        template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 1597:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-content ion-item {\n  --background:transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUFDRiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi1pdGVte1xuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG59XG4iXX0= */";

/***/ }),

/***/ 1748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Screens\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content [fullscreen]=\"true\">\n  <div style=\"width:100%;\">\n\n    <div style=\"width:100%; float:left; margin: 5px;\">\n\n      <ion-card\n        style=\"border-radius: 30px; max-width: 80%; min-height: 500px; background: linear-gradient(297deg, rgb(74, 74, 209) 0%, rgb(9, 5, 48) 100%);\">\n        <ion-card-header>\n          <ion-card-title style=\"font-size: xx-large; margin-left: 30px;\" >\n            <div style=\"position: absolute; right:15px; top: 0px;\">\n              <ion-button shape=\"round\" color=\"light\" (click)=\"addScreen()\">\n                <ion-icon name=\"add-outline\"></ion-icon>\n              </ion-button>\n              <ion-button shape=\"round\" color=\"light\">\n                <ion-icon name=\"create-outline\"></ion-icon>\n              </ion-button>\n            </div>\n            Screens\n          </ion-card-title>\n          <ion-card-subtitle>\n            <ion-chip color=\"dark\">Anytime Fitness</ion-chip>\n            <ion-chip color=\"dark\">Pure Fitness</ion-chip>\n            <ion-chip color=\"dark\">All Kowloon</ion-chip>\n            <ion-chip color=\"dark\"><ion-icon name=\"add-outline\"></ion-icon></ion-chip>\n          </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card\n        style=\"border-radius: 30px; max-width: 80%; min-height: 500px; background: linear-gradient(297deg, rgb(55, 55, 150) 0%, rgb(1, 1, 6) 100%);\">\n        <ion-card-header>\n\n          <ion-card-title style=\"font-size: xx-large; margin-left: 30px;\" >\n            Content Logic<a style=\"color: #333333;\"> (Ads logic)</a>\n            <div style=\"position: absolute; right:15px; top: 1px;\">\n              <ion-button shape=\"round\" color=\"light\" (click)=\"addContentLogic()\">\n                <ion-icon name=\"add-outline\"></ion-icon>\n              </ion-button>\n              <ion-button shape=\"round\" color=\"light\">\n                <ion-icon name=\"create-outline\"></ion-icon>\n              </ion-button>\n            </div>\n          </ion-card-title>\n          <ion-card-subtitle  style=\"color:#999999 ;margin-left: 30px;\">\n            Control what materials to be shown on each screen\n            <!-- <ion-chip color=\"dark\">Anytime Fitness</ion-chip>\n            <ion-chip color=\"dark\">Pure Fitness</ion-chip>\n            <ion-chip color=\"dark\">All Kowloon</ion-chip>\n            <ion-chip color=\"dark\"><ion-icon name=\"add-outline\"></ion-icon></ion-chip> -->\n          </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n\n        </ion-card-content>\n      </ion-card>\n\n    </div>\n\n\n\n  </div>\n\n  <div>\n    <ion-modal [isOpen]=\"showAddScreen\" (willDismiss)=\"onWillDismiss($event)\">\n      <ng-template>\n        <ion-header>\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <ion-button (click)=\"cancel()\">Cancel</ion-button>\n            </ion-buttons>\n            <!-- <ion-title>Welcome</ion-title> -->\n            <ion-buttons slot=\"end\">\n              <ion-button (click)=\"confirm()\" [strong]=\"true\">Confirm</ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-header>\n        <ion-content class=\"ion-padding\">\n          <ion-item style=\"--background:transparent;\">\n            <!-- <ion-label position=\"stacked\">Screen Name</ion-label> -->\n            <ion-input type=\"text\" placeholder=\"Screen Name\" maxlength=\"20\" [(ngModel)]=\"name\"></ion-input>\n          </ion-item>\n          <ion-item style=\"background:transparent;\">\n            <!-- <ion-label position=\"stacked\">Business Name</ion-label> -->\n            <ion-input type=\"text\" placeholder=\"Business Name\" maxlength=\"20\" [(ngModel)]=\"businessName\"></ion-input>\n          </ion-item>\n          <ion-item style=\"background:transparent;\">\n            <!-- <ion-label position=\"stacked\">Location</ion-label> -->\n            <ion-input type=\"text\" placeholder=\"Location\" [(ngModel)]=\"location\"></ion-input>\n          </ion-item>\n          <ion-item style=\"background:transparent;\">\n            <!-- <ion-label position=\"stacked\">Operation Hours</ion-label> -->\n            <ion-input type=\"text\" placeholder=\"Opening time\" [(ngModel)]=\"startTime\"></ion-input>\n            <ion-input type=\"text\" placeholder=\"Closing time\" [(ngModel)]=\"closeTime\"></ion-input>\n\n          </ion-item>\n          <ion-item style=\"background:transparent;\">\n            <!-- <ion-label position=\"stacked\">Description</ion-label> -->\n            <ion-input type=\"text\" placeholder=\"Your name\" [(ngModel)]=\"description\"></ion-input>\n          </ion-item>\n\n          <ion-item style=\"background:transparent;\">\n            <!-- <ion-label position=\"stacked\">Description</ion-label> -->\n            <ion-input type=\"text\" placeholder=\"Screen pin\" [(ngModel)]=\"screenPin\"></ion-input>\n          </ion-item>\n\n          <ion-item style=\"background:transparent; float: left;\">\n            <ion-label position=\"stacked\" style=\"margin-bottom:20px;\">Tags</ion-label>\n            <div>\n\n            <ion-chip style=\"color:black; --background:rgb(32, 124, 230);\">Gym <ion-icon name=\"close-circle-outline\"></ion-icon> </ion-chip>\n            <ion-chip style=\"color:black; --background:rgb(32, 138, 44);\">Central <ion-icon name=\"close-circle-outline\"></ion-icon> </ion-chip>\n            <ion-chip style=\"color:black; --background:antiquewhite;\">Tier 1 <ion-icon name=\"close-circle-outline\"></ion-icon> </ion-chip>\n            <!-- <ion-chip style=\"color:black; --background:#777777;\">Create new tag <ion-icon name=\"add-outline\"></ion-icon> </ion-chip> -->\n            </div>\n          </ion-item>\n          <ion-item style=\"background:transparent; float: left;\">\n            <ion-label position=\"stacked\" style=\"margin-bottom:20px;\">Popular tags</ion-label>\n            <div>\n            <ion-chip style=\"color:black; --background:rgb(67, 121, 184);\"> Cafe  </ion-chip>\n            <ion-chip style=\"color:black; --background:rgb(80, 184, 92);\">WanChai   </ion-chip>\n            <ion-chip style=\"color:black; --background:rgb(174, 130, 74);\">Tier 2  </ion-chip>\n            <ion-chip style=\"color:black; --background:#777777;\">Create new tag  </ion-chip>\n            </div>\n          </ion-item>\n\n\n        </ion-content>\n      </ng-template>\n    </ion-modal>\n  </div>\n\n\n  <div #AddContentLogic>\n    <ion-modal [isOpen]=\"showAddContentLogic\" (willDismiss)=\"onWillDismiss($event)\">\n      <ng-template>\n        <ion-header>\n          <ion-toolbar>\n            <!-- <ion-buttons slot=\"start\">\n              <ion-button (click)=\"cancel()\">Cancel</ion-button>\n            </ion-buttons> -->\n            <ion-title>New content logic</ion-title>\n            <!-- <ion-buttons slot=\"end\">\n              <ion-button (click)=\"confirm()\" [strong]=\"true\">Confirm</ion-button>\n            </ion-buttons> -->\n          </ion-toolbar>\n        </ion-header>\n        <ion-content class=\"ion-padding\">\n\n          <ion-title>Brian pls decide how to add content logic</ion-title>\n          <ion-title>and assign to each screen</ion-title>\n\n        </ion-content>\n      </ng-template>\n    </ion-modal>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map