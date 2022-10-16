"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 7087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let Tab3Page = class Tab3Page {
    constructor() {
        this.showMain = true;
        this.showSub = false;
    }
    ngOnInit() {
    }
    clickFolder($event) {
        console.log($event.target.id);
        if (this.showMain) {
            this.showMain = false;
            this.showSub = true;
        }
        else {
            this.showMain = true;
            this.showSub = false;
        }
    }
};
Tab3Page.ctorParameters = () => [];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab3',
        template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 7087:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 9769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Materials\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content [fullscreen]=\"true\">\n  <div style=\"width:100%;\">\n\n    <div style=\"width:100%; float:left; margin: 5px;\">\n      <ion-card\n        style=\"border-radius: 30px; max-width: 80%; min-height: 500px; background: linear-gradient(297deg, rgb(56, 187, 115) 0%, rgb(5, 48, 44) 100%);\">\n        <ion-card-header>\n          <ion-card-title style=\"font-size: xx-large; margin-left: 30px;\" *ngIf=\"showMain\">\n            <div style=\"position: absolute; right:15px; top: 0px;\">\n              <ion-button shape=\"round\" color=\"light\">\n                <ion-icon name=\"add-outline\"></ion-icon>\n              </ion-button>\n              <ion-button shape=\"round\" color=\"light\">\n                <ion-icon name=\"create-outline\"></ion-icon>\n              </ion-button>\n            </div>\n            Ads\n          </ion-card-title>\n          <ion-card-title style=\"font-size: xx-large; margin-left: 30px;\" *ngIf=\"showSub\">\n            <div (dblclick)=\"clickFolder($event)\"> Ads</div> / Samsung\n          </ion-card-title>\n          <ion-card-subtitle style=\"color:#999999; margin-left: 30px;\">Upload materials by Drag and drop\n          </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n\n          <div #adsFolders style=\"margin:20px;\" *ngIf=\"showMain\">\n\n            <ion-grid>\n              <ion-row>\n\n                <ion-col>\n                  <div (dblclick)=\"clickFolder($event)\">\n                    <ion-row text-center style=\"border: 0px solid green;margin: 0px; \">\n                      <ion-col style=\"text-align:center; margin: 0px;\">\n                        <ion-icon style=\"font-size:5em; color:aliceblue; margin-bottom: -15px;\" name=\"folder\">\n                        </ion-icon>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row style=\"border: 0px solid green;\">\n                      <ion-col style=\"text-align:center;\">\n                        <ion-label style=\"font-size:larger; color:aliceblue;\">Samsung\n                          <!-- <ion-icon name=\"create-outline\" style=\"font-size:larger; color:aliceblue;\"></ion-icon> -->\n                        </ion-label>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                </ion-col>\n\n                <ion-col>\n                  <div>\n                    <ion-row text-center style=\"border: 0px solid green;margin: 0px; \">\n                      <ion-col style=\"text-align:center; margin: 0px;\">\n\n                        <ion-icon style=\"font-size:5em; color:aliceblue; margin-bottom: -15px;\" name=\"folder\">\n                        </ion-icon>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row style=\"border: 0px solid green;\">\n                      <ion-col style=\"text-align:center;\">\n                        <ion-label style=\"font-size:larger; color:aliceblue;\">Food Panda</ion-label>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                </ion-col>\n\n                <ion-col>\n                  <div>\n                    <ion-row text-center style=\"border: 0px solid green;margin: 0px; \">\n                      <ion-col style=\"text-align:center; margin: 0px;\">\n                        <ion-icon style=\"font-size:5em; color:aliceblue; margin-bottom: -15px;\" name=\"folder\">\n                        </ion-icon>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row style=\"border: 0px solid green;\">\n                      <ion-col style=\"text-align:center;\">\n                        <ion-label style=\"font-size:larger; color:aliceblue;\">Green Common</ion-label>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                </ion-col>\n\n                <ion-col>\n                  <div>\n                    <ion-row text-center style=\"border: 0px solid green;margin: 0px; \">\n                      <ion-col style=\"text-align:center; margin: 0px;\">\n                        <ion-icon style=\"font-size:5em; color:aliceblue; margin-bottom: -15px;\" name=\"folder\">\n                        </ion-icon>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row style=\"border: 0px solid green;\">\n                      <ion-col style=\"text-align:center;\">\n                        <ion-label style=\"font-size:larger; color:aliceblue;\">Lu lu lemon</ion-label>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                </ion-col>\n\n                <ion-col>\n                  <div>\n                    <ion-row text-center style=\"border: 0px solid green;margin: 0px; \">\n                      <ion-col style=\"text-align:center; margin: 0px;\">\n                        <ion-icon style=\"font-size:5em; color:aliceblue; margin-bottom: -15px;\" name=\"folder\">\n                        </ion-icon>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row style=\"border: 0px solid green;\">\n                      <ion-col style=\"text-align:center;\">\n                        <ion-label style=\"font-size:larger; color:aliceblue;\">HSBC</ion-label>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n\n          </div>\n\n          <div #adsSubFolders style=\"margin:20px;\" *ngIf=\"showSub\">\n\n            <ion-grid>\n              <ion-row>\n\n                <ion-col>\n                  <div>\n                    <ion-row text-center style=\"border: 0px solid green;margin: 0px; \">\n                      <ion-col style=\"text-align:center; margin: 0px;\">\n                        <ion-icon style=\"font-size:5em; color:aliceblue; margin-bottom: -15px;\" name=\"folder\">\n                        </ion-icon>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row style=\"border: 0px solid green;\">\n                      <ion-col style=\"text-align:center;\">\n                        <ion-label style=\"font-size:larger; color:aliceblue;\">Samsung-01</ion-label>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                </ion-col>\n\n                <ion-col>\n                  <div>\n                    <ion-row text-center style=\"border: 0px solid green;margin: 0px; \">\n                      <ion-col style=\"text-align:center; margin: 0px;\">\n                        <ion-icon style=\"font-size:5em; color:aliceblue; margin-bottom: -15px;\" name=\"folder\">\n                        </ion-icon>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row style=\"border: 0px solid green;\">\n                      <ion-col style=\"text-align:center;\">\n                        <ion-label style=\"font-size:larger; color:aliceblue;\">Samsung-02</ion-label>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n\n    <div style=\"width:100%; float:left; margin: 5px;\">\n      <ion-card\n        style=\"border-radius: 30px; max-width: 80%; min-height: 500px; background: linear-gradient(297deg, rgb(49, 166, 102) 0%, rgb(2, 27, 24) 100%);\">\n        <ion-card-header>\n          <div style=\"position: absolute; right:15px; top: 15px;\">\n            <ion-button shape=\"round\" color=\"light\">\n              <ion-icon name=\"add-outline\"></ion-icon>\n            </ion-button>\n            <ion-button shape=\"round\" color=\"light\">\n              <ion-icon name=\"create-outline\"></ion-icon>\n            </ion-button>\n          </div>\n          <ion-card-title style=\"font-size: xx-large; margin-left: 30px;\" *ngIf=\"showMain\">\n            In House\n          </ion-card-title>\n          <ion-card-title style=\"font-size: xx-large; margin-left: 30px;\" *ngIf=\"showSub\">\n            <div (dblclick)=\"clickFolder($event)\"> Ads</div> / Samsung\n          </ion-card-title>\n          <ion-card-subtitle style=\"color:#999999; margin-left: 30px;\">Upload materials by Drag and drop\n          </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n\n          <div #adsFolders style=\"margin:20px;\" *ngIf=\"showMain\">\n\n            <ion-grid>\n              <ion-row>\n\n\n\n                <ion-col>\n                  <div>\n                    <ion-row text-center style=\"border: 0px solid green;margin: 0px; \">\n                      <ion-col style=\"text-align:center; margin: 0px;\">\n                        <ion-icon style=\"font-size:5em; color:aliceblue; margin-bottom: -15px;\" name=\"folder\">\n                        </ion-icon>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row style=\"border: 0px solid green;\">\n                      <ion-col style=\"text-align:center;\">\n                        <ion-label style=\"font-size:larger; color:aliceblue;\">HSBC</ion-label>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n\n          </div>\n\n\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n\n\n\n\n\n    <div style=\"width:100%; float:left; margin: 5px;\">\n      <ion-card\n        style=\"border-radius: 30px; max-width: 80%; min-height: 500px; background: linear-gradient(297deg, rgb(42, 142, 87) 0%, rgb(1, 13, 12) 100%);\">\n        <ion-card-header>\n          <div style=\"position: absolute; right:15px; top: 15px;\">\n            <ion-button shape=\"round\" color=\"light\">\n              <ion-icon name=\"add-outline\"></ion-icon>\n            </ion-button>\n            <ion-button shape=\"round\" color=\"light\">\n              <ion-icon name=\"create-outline\"></ion-icon>\n            </ion-button>\n          </div>\n          <ion-card-title style=\"font-size: xx-large; margin-left: 30px;\" *ngIf=\"showMain\">\n            Content\n          </ion-card-title>\n          <ion-card-title style=\"font-size: xx-large; margin-left: 30px;\" *ngIf=\"showSub\">\n            <div (dblclick)=\"clickFolder($event)\"> Ads</div> / Samsung\n          </ion-card-title>\n          <ion-card-subtitle style=\"color:#999999; margin-left: 30px;\">Upload materials by Drag and drop\n          </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n\n          <div #adsFolders style=\"margin:20px;\" *ngIf=\"showMain\">\n\n            <ion-grid>\n              <ion-row>\n\n\n\n                <ion-col>\n                  <div>\n                    <ion-row text-center style=\"border: 0px solid green;margin: 0px; \">\n                      <ion-col style=\"text-align:center; margin: 0px;\">\n                        <ion-icon style=\"font-size:5em; color:aliceblue; margin-bottom: -15px;\" name=\"folder\">\n                        </ion-icon>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row style=\"border: 0px solid green;\">\n                      <ion-col style=\"text-align:center;\">\n                        <ion-label style=\"font-size:larger; color:aliceblue;\">HSBC</ion-label>\n                      </ion-col>\n                    </ion-row>\n                  </div>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n\n          </div>\n\n\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n\n\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map