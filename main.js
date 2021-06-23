(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\nx-mis-web-syncfusion\src\main.ts */"zUnb");


/***/ }),

/***/ "0edb":
/*!***********************************************************!*\
  !*** ./src/app/user-interface/layout/layout.component.ts ***!
  \***********************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = [[["", "id", "nav"]], [["", "id", "main"]]];
const _c1 = ["#nav", "#main"];
class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], ngContentSelectors: _c1, decls: 5, vars: 0, consts: [[1, "app-layout"], [1, "app-layout__nav"], [1, "app-layout__main"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aside", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".app-layout[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  max-width: 100vw;\n}\n.app-layout[_ngcontent-%COMP%]   .app-layout__nav[_ngcontent-%COMP%] {\n  width: 5vw;\n  height: 100vh;\n  box-shadow: 0 5vw 10px lightgray;\n}\n.app-layout[_ngcontent-%COMP%]   .app-layout__main[_ngcontent-%COMP%] {\n  width: 95vw;\n  height: 100vh;\n  max-height: 100vh;\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FBQ1I7QUFFSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFSIiwiZmlsZSI6ImxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtbGF5b3V0IHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcclxuXHJcbiAgICAmIC5hcHAtbGF5b3V0X19uYXYge1xyXG4gICAgICAgIHdpZHRoOiA1dnc7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDV2dyAxMHB4IGxpZ2h0Z3JheTtcclxuICAgIH1cclxuXHJcbiAgICAmIC5hcHAtbGF5b3V0X19tYWluIHtcclxuICAgICAgICB3aWR0aDogOTV2dztcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "AytR":
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

/***/ "CqJD":
/*!*******************************************************!*\
  !*** ./src/app/syncfusion-chart/pie/pie.component.ts ***!
  \*******************************************************/
/*! exports provided: PieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieComponent", function() { return PieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-angular-charts */ "0jTc");


class PieComponent {
    constructor() { }
    ngOnInit() {
        this.chartLabel = {
            visible: true,
            position: 'Inside',
            name: this.labelName
        };
        this.legend = {
            visible: true,
            position: 'Bottom',
            height: '8%',
            width: '35%'
        };
        this.tooltip = {
            enable: true,
            format: '${point.x}: <b>${point.y}%</b>'
        };
    }
}
PieComponent.ɵfac = function PieComponent_Factory(t) { return new (t || PieComponent)(); };
PieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PieComponent, selectors: [["app-pie"]], inputs: { dataSource: "dataSource", xName: "xName", yName: "yName", title: "title", labelName: "labelName", innerRadius: "innerRadius" }, decls: 3, vars: 8, consts: [[3, "title", "legendSettings", "tooltip"], ["type", "Pie", 3, "dataSource", "xName", "yName", "dataLabel", "innerRadius"]], template: function PieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ejs-accumulationchart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "e-accumulation-series-collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "e-accumulation-series", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("legendSettings", ctx.legend)("tooltip", ctx.tooltip);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("xName", ctx.xName)("yName", ctx.yName)("dataLabel", ctx.chartLabel)("innerRadius", ctx.innerRadius);
    } }, directives: [_syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__["AccumulationChartComponent"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__["AccumulationSeriesCollectionDirective"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__["AccumulationSeriesDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "QVCV":
/*!***********************************************************************!*\
  !*** ./src/app/syncfusion-chart/line-series/line-series.component.ts ***!
  \***********************************************************************/
/*! exports provided: LineSeriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineSeriesComponent", function() { return LineSeriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-angular-charts */ "0jTc");


class LineSeriesComponent {
    constructor() { }
    ngOnInit() {
        this.xAxis = {
            valueType: 'Category'
        };
        this.yAxis = {
            labelFormat: '{value}'
        };
        this.chartTitle = 'Sales Analysis';
        this.legend = {
            visible: true
        };
        this.markerSettings = {
            visible: true,
            dataLabel: {
                visible: true
            }
        };
        this.tooltipSettings = {
            enable: true
        };
    }
}
LineSeriesComponent.ɵfac = function LineSeriesComponent_Factory(t) { return new (t || LineSeriesComponent)(); };
LineSeriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LineSeriesComponent, selectors: [["app-line-series"]], inputs: { dataSource: "dataSource" }, decls: 3, vars: 8, consts: [[3, "titleStyle", "primaryXAxis", "primaryYAxis", "title", "legendSettings", "tooltip"], ["type", "Line", "xName", "month", "yName", "sales", "name", "Sales", 3, "dataSource", "marker"]], template: function LineSeriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ejs-chart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "e-series-collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "e-series", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleStyle", ctx.titleStyle)("primaryXAxis", ctx.xAxis)("primaryYAxis", ctx.yAxis)("title", ctx.chartTitle)("legendSettings", ctx.legend)("tooltip", ctx.tooltipSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("marker", ctx.markerSettings);
    } }, directives: [_syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__["SeriesCollectionDirective"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__["SeriesDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaW5lLXNlcmllcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_interface_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-interface/layout/layout.component */ "0edb");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'nx-mis-web-syncfusion';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [["id", "nav"], ["id", "main"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_user_interface_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _syncfusion_chart_syncfusion_chart_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syncfusion-chart/syncfusion-chart.module */ "j8yS");
/* harmony import */ var _user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-interface/user-interface.module */ "oJEO");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _nx_review_dashboard_nx_review_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nx-review-dashboard/nx-review-dashboard.component */ "ZbL9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _syncfusion_chart_syncfusion_chart_module__WEBPACK_IMPORTED_MODULE_1__["SyncfusionChartModule"],
            _user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_2__["UserInterfaceModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
        _nx_review_dashboard_nx_review_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["NxReviewDashboardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _syncfusion_chart_syncfusion_chart_module__WEBPACK_IMPORTED_MODULE_1__["SyncfusionChartModule"],
        _user_interface_user_interface_module__WEBPACK_IMPORTED_MODULE_2__["UserInterfaceModule"]] }); })();


/***/ }),

/***/ "ZbL9":
/*!**********************************************************************!*\
  !*** ./src/app/nx-review-dashboard/nx-review-dashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: NxReviewDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxReviewDashboardComponent", function() { return NxReviewDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_interface_sub_layout_sub_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-interface/sub-layout/sub-layout.component */ "lqlA");
/* harmony import */ var _syncfusion_chart_line_series_line_series_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../syncfusion-chart/line-series/line-series.component */ "QVCV");
/* harmony import */ var _syncfusion_chart_pie_pie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../syncfusion-chart/pie/pie.component */ "CqJD");




class NxReviewDashboardComponent {
    constructor() {
        this.dataSource = [
            { month: 'Jan', sales: 31 },
            { month: 'Feb', sales: 35 },
            { month: 'Mar', sales: 21 },
            { month: 'Apr', sales: 41 },
            { month: 'May', sales: 55 },
            { month: 'Jun', sales: 58 }
        ];
        this.pieDataSource = [
            { name: 'Plant Issue', value: 37, text: '37%' },
            { name: 'Leak Test Failure', value: 33, text: '33%' },
            { name: 'Air Chamber Leakage', value: 17, text: '17%' },
            { name: 'Paint Rundown', value: 13, text: '13%' },
        ];
    }
    ngOnInit() {
    }
}
NxReviewDashboardComponent.ɵfac = function NxReviewDashboardComponent_Factory(t) { return new (t || NxReviewDashboardComponent)(); };
NxReviewDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NxReviewDashboardComponent, selectors: [["app-nx-review-dashboard"]], decls: 19, vars: 6, consts: [["id", "header"], [2, "margin-left", "1em"], ["id", "main"], [1, "chart-row"], [1, "chart-tile"], ["xName", "month", "yName", "year", 3, "dataSource"], ["xName", "name", "yName", "value", "title", "Rejections", "labelName", "text", "innerRadius", "60%", 3, "dataSource"]], template: function NxReviewDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-sub-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "NX Review Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-line-series", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pie", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-line-series", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-line-series", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-pie", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-line-series", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.pieDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.pieDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
    } }, directives: [_user_interface_sub_layout_sub_layout_component__WEBPACK_IMPORTED_MODULE_1__["SubLayoutComponent"], _syncfusion_chart_line_series_line_series_component__WEBPACK_IMPORTED_MODULE_2__["LineSeriesComponent"], _syncfusion_chart_pie_pie_component__WEBPACK_IMPORTED_MODULE_3__["PieComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJueC1yZXZpZXctZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "g/Dx":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 11, vars: 0, consts: [["src", "../../../assets/icons/nav-bar/logo.png", "alt", "", 1, "logo"], [1, "list"], ["routerLink", "/nx-review-dashboard"], ["src", "../../assets/icons/nav-bar/dashboard.png", "alt", "", 1, "icon"], ["src", "../../assets/icons/nav-bar/downtime.png", "alt", "", 1, "icon"], ["src", "../../assets/icons/nav-bar/rejection.png", "alt", "", 1, "icon"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".icon[_ngcontent-%COMP%] {\n  width: 2vw;\n  height: 2vw;\n  margin-top: 4vw;\n  cursor: pointer;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 5vw;\n  height: 5vw;\n  padding: 1.25vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcclxuICAgIHdpZHRoOiAydnc7XHJcbiAgICBoZWlnaHQ6IDJ2dztcclxuICAgIG1hcmdpbi10b3A6IDR2dztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgd2lkdGg6IDV2dztcclxuICAgIGhlaWdodDogNXZ3O1xyXG4gICAgcGFkZGluZzogMS4yNXZ3O1xyXG59Il19 */"] });


/***/ }),

/***/ "j8yS":
/*!*************************************************************!*\
  !*** ./src/app/syncfusion-chart/syncfusion-chart.module.ts ***!
  \*************************************************************/
/*! exports provided: SyncfusionChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncfusionChartModule", function() { return SyncfusionChartModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-angular-charts */ "0jTc");
/* harmony import */ var _line_series_line_series_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line-series/line-series.component */ "QVCV");
/* harmony import */ var _pie_pie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pie/pie.component */ "CqJD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class SyncfusionChartModule {
}
SyncfusionChartModule.ɵfac = function SyncfusionChartModule_Factory(t) { return new (t || SyncfusionChartModule)(); };
SyncfusionChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SyncfusionChartModule });
SyncfusionChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__["LineSeriesService"],
        _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__["CategoryService"],
        _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__["LegendService"],
        _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__["DataLabelService"],
        _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__["TooltipService"],
        _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__["PieSeriesService"],
        _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__["AccumulationDataLabelService"],
        _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__["AccumulationLegendService"],
        _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__["AccumulationTooltipService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__["ChartModule"],
            _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__["AccumulationChartModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SyncfusionChartModule, { declarations: [_line_series_line_series_component__WEBPACK_IMPORTED_MODULE_2__["LineSeriesComponent"],
        _pie_pie_component__WEBPACK_IMPORTED_MODULE_3__["PieComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__["ChartModule"],
        _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_1__["AccumulationChartModule"]], exports: [_line_series_line_series_component__WEBPACK_IMPORTED_MODULE_2__["LineSeriesComponent"],
        _pie_pie_component__WEBPACK_IMPORTED_MODULE_3__["PieComponent"]] }); })();


/***/ }),

/***/ "lqlA":
/*!*******************************************************************!*\
  !*** ./src/app/user-interface/sub-layout/sub-layout.component.ts ***!
  \*******************************************************************/
/*! exports provided: SubLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubLayoutComponent", function() { return SubLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = [[["", "id", "header"]], [["", "id", "main"]]];
const _c1 = ["#header", "#main"];
class SubLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
SubLayoutComponent.ɵfac = function SubLayoutComponent_Factory(t) { return new (t || SubLayoutComponent)(); };
SubLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubLayoutComponent, selectors: [["app-sub-layout"]], ngContentSelectors: _c1, decls: 6, vars: 0, consts: [[1, "sub-layout"], [1, "shadow"], [1, "sub-layout__header"], [1, "sub-layout__main"]], template: function SubLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".sub-layout[_ngcontent-%COMP%]   .sub-layout__header[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 0 0 10px lightgrey;\n  height: 5vw;\n  max-height: 5vw;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n.sub-layout[_ngcontent-%COMP%]   .sub-layout__main[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 95vh;\n  overflow: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdWItbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksV0FBQTtFQUNBLDhCQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQUZSO0FBS0k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUhSIiwiZmlsZSI6InN1Yi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ViLWxheW91dCB7XHJcbiAgICAmIC5zdWItbGF5b3V0X19oZWFkZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IGxpZ2h0Z3JleTtcclxuXHJcbiAgICAgICAgaGVpZ2h0OiA1dnc7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNXZ3O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmIC5zdWItbGF5b3V0X19tYWluIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA5NXZoO1xyXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "oJEO":
/*!*********************************************************!*\
  !*** ./src/app/user-interface/user-interface.module.ts ***!
  \*********************************************************/
/*! exports provided: UserInterfaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterfaceModule", function() { return UserInterfaceModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout.component */ "0edb");
/* harmony import */ var _sub_layout_sub_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sub-layout/sub-layout.component */ "lqlA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class UserInterfaceModule {
}
UserInterfaceModule.ɵfac = function UserInterfaceModule_Factory(t) { return new (t || UserInterfaceModule)(); };
UserInterfaceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: UserInterfaceModule });
UserInterfaceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UserInterfaceModule, { declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
        _sub_layout_sub_layout_component__WEBPACK_IMPORTED_MODULE_2__["SubLayoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
        _sub_layout_sub_layout_component__WEBPACK_IMPORTED_MODULE_2__["SubLayoutComponent"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nx_review_dashboard_nx_review_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nx-review-dashboard/nx-review-dashboard.component */ "ZbL9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _nx_review_dashboard_nx_review_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["NxReviewDashboardComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map