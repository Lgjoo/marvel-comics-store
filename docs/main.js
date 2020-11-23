(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/variables.service */ "./src/app/services/variables.service.ts");
/* harmony import */ var _services_comics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/comics.service */ "./src/app/services/comics.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_lateral_menu_lateral_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu-lateral/menu-lateral.component */ "./src/app/components/menu-lateral/menu-lateral.component.ts");
/* harmony import */ var _components_busca_busca_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/busca/busca.component */ "./src/app/components/busca/busca.component.ts");
/* harmony import */ var _components_finalizacao_finalizacao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/finalizacao/finalizacao.component */ "./src/app/components/finalizacao/finalizacao.component.ts");
/* harmony import */ var _components_listar_comics_listar_comics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/listar-comics/listar-comics.component */ "./src/app/components/listar-comics/listar-comics.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");










class AppComponent {
    constructor(variables, comics) {
        this.variables = variables;
        this.comics = comics;
    }
    /**
     * Listener para monitorar o scroll e realizar o infinite loading
     */
    onscroll(event) {
        let target = event.target.scrollingElement;
        let posAtual = target.scrollTop;
        let maxScroll = target.scrollTopMax;
        if (posAtual > maxScroll * 0.9 && !this.variables.getCarregandoMaisComics()) {
            this.variables.setCarregandoMaisComics(true);
            this.comics.getComics(this.variables.getTituloBusca(), this.variables.getComics().length).subscribe(comics => {
                this.variables.setComics(comics.data.results, false);
                this.variables.setCarregandoMaisComics(false);
            });
        }
    }
    ngOnInit() {
        this.variables.setCarregandoComics(true);
        this.variables.setTituloBusca('');
        this.comics.getComics().subscribe(comics => {
            this.variables.setComics(comics.data.results, true);
            this.variables.setCarregandoComics(false);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_comics_service__WEBPACK_IMPORTED_MODULE_2__["ComicsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler($event) { return ctx.onscroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 10, vars: 4, consts: [[1, "container-fluid", "p-0", "m-0", "flex-grow-1"], [3, "aberto", "lado"], [1, "col"], [1, "row", "justify-content-between"], [1, "col", "m-0", "mb-4", "p-0"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-menu-lateral", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-busca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-menu-lateral", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-finalizacao");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-listar-comics", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("aberto", ctx.variables.getMenuBuscaAberto())("lado", "esquerda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("aberto", ctx.variables.getMenuCarrinhoAberto())("lado", "direita");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_menu_lateral_menu_lateral_component__WEBPACK_IMPORTED_MODULE_4__["MenuLateralComponent"], _components_busca_busca_component__WEBPACK_IMPORTED_MODULE_5__["BuscaComponent"], _components_finalizacao_finalizacao_component__WEBPACK_IMPORTED_MODULE_6__["FinalizacaoComponent"], _components_listar_comics_listar_comics_component__WEBPACK_IMPORTED_MODULE_7__["ListarComicsComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"] }, { type: _services_comics_service__WEBPACK_IMPORTED_MODULE_2__["ComicsService"] }]; }, { onscroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_lateral_menu_lateral_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu-lateral/menu-lateral.component */ "./src/app/components/menu-lateral/menu-lateral.component.ts");
/* harmony import */ var _components_listar_comics_listar_comics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/listar-comics/listar-comics.component */ "./src/app/components/listar-comics/listar-comics.component.ts");
/* harmony import */ var _components_comic_comic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/comic/comic.component */ "./src/app/components/comic/comic.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/detalhes/detalhes.component */ "./src/app/components/detalhes/detalhes.component.ts");
/* harmony import */ var _components_busca_busca_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/busca/busca.component */ "./src/app/components/busca/busca.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_finalizacao_finalizacao_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/finalizacao/finalizacao.component */ "./src/app/components/finalizacao/finalizacao.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_menu_lateral_menu_lateral_component__WEBPACK_IMPORTED_MODULE_5__["MenuLateralComponent"],
        _components_listar_comics_listar_comics_component__WEBPACK_IMPORTED_MODULE_6__["ListarComicsComponent"],
        _components_comic_comic_component__WEBPACK_IMPORTED_MODULE_7__["ComicComponent"],
        _components_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_9__["DetalhesComponent"],
        _components_busca_busca_component__WEBPACK_IMPORTED_MODULE_10__["BuscaComponent"],
        _components_finalizacao_finalizacao_component__WEBPACK_IMPORTED_MODULE_12__["FinalizacaoComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _components_menu_lateral_menu_lateral_component__WEBPACK_IMPORTED_MODULE_5__["MenuLateralComponent"],
                    _components_listar_comics_listar_comics_component__WEBPACK_IMPORTED_MODULE_6__["ListarComicsComponent"],
                    _components_comic_comic_component__WEBPACK_IMPORTED_MODULE_7__["ComicComponent"],
                    _components_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_9__["DetalhesComponent"],
                    _components_busca_busca_component__WEBPACK_IMPORTED_MODULE_10__["BuscaComponent"],
                    _components_finalizacao_finalizacao_component__WEBPACK_IMPORTED_MODULE_12__["FinalizacaoComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/busca/busca.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/busca/busca.component.ts ***!
  \*****************************************************/
/*! exports provided: BuscaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscaComponent", function() { return BuscaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/variables.service */ "./src/app/services/variables.service.ts");
/* harmony import */ var src_app_services_comics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/comics.service */ "./src/app/services/comics.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





/**
 * Componente que mostra as opções de busca da aplicação
 */
class BuscaComponent {
    constructor(variables, comics) {
        this.variables = variables;
        this.comics = comics;
        this.tituloComic = '';
    }
    ngOnInit() {
    }
    /**
     * Método para realizar a busca na API utilizando o título desejado
     */
    buscarComics() {
        this.variables.setTituloBusca(this.tituloComic);
        this.variables.setCarregandoComics(true);
        this.comics.getComics(this.tituloComic).subscribe(comics => {
            this.variables.setComics(comics.data.results, true);
            this.variables.setCarregandoComics(false);
            this.variables.setMenuBuscaAberto(false);
        });
    }
}
BuscaComponent.ɵfac = function BuscaComponent_Factory(t) { return new (t || BuscaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_comics_service__WEBPACK_IMPORTED_MODULE_2__["ComicsService"])); };
BuscaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuscaComponent, selectors: [["app-busca"]], decls: 10, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "col"], [1, "my-2"], [1, "input-group", "py-3"], ["type", "text", "placeholder", "T\u00EDtulos", "aria-label", "T\u00EDtulos", "aria-describedby", "botaoBusca", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", "id", "botaoBusca", 1, "btn", "btn-outline-danger", 3, "click"], [1, "fas", "fa-search", "fa-md"]], template: function BuscaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pesquisar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuscaComponent_Template_input_ngModelChange_6_listener($event) { return ctx.tituloComic = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuscaComponent_Template_button_click_8_listener() { return ctx.buscarComics(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tituloComic);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVzY2EvYnVzY2EuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuscaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-busca',
                templateUrl: './busca.component.html',
                styleUrls: ['./busca.component.css']
            }]
    }], function () { return [{ type: src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"] }, { type: src_app_services_comics_service__WEBPACK_IMPORTED_MODULE_2__["ComicsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/comic/comic.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/comic/comic.component.ts ***!
  \*****************************************************/
/*! exports provided: ComicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicComponent", function() { return ComicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../detalhes/detalhes.component */ "./src/app/components/detalhes/detalhes.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/variables.service */ "./src/app/services/variables.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = ["selfClosingAlert"];
function ComicComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Raro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComicComponent_ngb_alert_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function ComicComponent_ngb_alert_17_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.mensagem = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.mensagem, "\n");
} }
/**
 * Componente que exibe a HQ na lista de HQs
 */
class ComicComponent {
    constructor(modalService, variables) {
        this.modalService = modalService;
        this.variables = variables;
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.mensagem = '';
        this.modalOptions = {
            size: 'xl',
            centered: true
        };
    }
    ngOnInit() {
        this._success.subscribe(message => this.mensagem = message);
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(5000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
    }
    /**
     * Método que abre os detalhes da HQ
     *
     * @param comic HQ
     */
    abreDetalhes(comic) {
        const modalDetalhe = this.modalService.open(_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_3__["DetalhesComponent"], this.modalOptions);
        modalDetalhe.componentInstance.comic = comic;
    }
    /**
     * Método que insere a HQ no pedido
     *
     * @param comic HQ
     */
    insereCarrinho(comic) {
        this.variables.insereComicPedido(comic);
        this._success.next('Inserido no carrinho');
    }
    /**
     * Método que troca o label do botão ao passar o mouse por cima
     *
     * @param mouseHover mouse está em cima do botão ou não
     * @param event evento da ação
     */
    changeLabelBotaoComprar(mouseHover, event) {
        document.getElementById(event.target.id).innerHTML = mouseHover
            ? 'Comprar'
            : this.variables.getPrice(this.comic);
    }
}
ComicComponent.ɵfac = function ComicComponent_Factory(t) { return new (t || ComicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_5__["VariablesService"])); };
ComicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComicComponent, selectors: [["app-comic"]], viewQuery: function ComicComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert = _t.first);
    } }, inputs: { comic: "comic" }, decls: 18, vars: 7, consts: [[1, "card", "m-3", "comicContainer", "border-0"], [1, "row", "comicImageArea", "align-items-center"], [1, "col", "comicImage", 3, "src"], [1, "col"], [1, "row", "justify-content-center", "align-items-center", "comicTitleArea"], [1, "card-title", "text-center", "my-1"], [1, "col-12", "text-center"], ["class", "raro mx-1", 4, "ngIf"], [1, "row"], [1, "col-lg-6", "col-sm-12", "text-center"], [1, "btn", "btn-outline-info", "mt-2", 3, "click"], [1, "btn", "btn-outline-danger", "mt-2", 3, "id", "mouseover", "mouseout", "click"], ["class", "alerta text-center", "type", "success", 3, "closed", 4, "ngIf"], [1, "raro", "mx-1"], ["type", "success", 1, "alerta", "text-center", 3, "closed"], ["selfClosingAlert", ""]], template: function ComicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ComicComponent_div_9_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComicComponent_Template_a_click_12_listener() { return ctx.abreDetalhes(ctx.comic); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Detalhes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function ComicComponent_Template_a_mouseover_15_listener($event) { return ctx.changeLabelBotaoComprar(true, $event); })("mouseout", function ComicComponent_Template_a_mouseout_15_listener($event) { return ctx.changeLabelBotaoComprar(false, $event); })("click", function ComicComponent_Template_a_click_15_listener() { return ctx.insereCarrinho(ctx.comic); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ComicComponent_ngb_alert_17_Template, 3, 1, "ngb-alert", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.comic.thumbnail.path + "." + ctx.comic.thumbnail.extension, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx.comic.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comic.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comic.raro);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "botaoComprarComic" + ctx.comic.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.variables.getPrice(ctx.comic));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mensagem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAlert"]], styles: [".comicContainer[_ngcontent-%COMP%] {\r\n    width: 15vw;\r\n}\r\n\r\n.comicImageArea[_ngcontent-%COMP%] {\r\n    height: 35vh;\r\n}\r\n\r\n.comicImage[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    object-fit: contain;\r\n    object-position: center;\r\n}\r\n\r\n.comicTitleArea[_ngcontent-%COMP%] {\r\n    height: 10vh;\r\n}\r\n\r\n.raro[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-size: 0.75em;\r\n    border: 2px #F0131E solid;\r\n    border-radius: 25%;\r\n    padding: 0.05em;\r\n    color: #F0131E;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    line-height: 1em;\r\n    max-height: 2em;\r\n    -webkit-line-clamp: 2;\r\n    -webkit-box-orient: vertical;\r\n}\r\n\r\n.alerta[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    z-index: 100;\r\n}\r\n\r\n@media only screen and (max-width: 540px) {\r\n    .comicContainer[_ngcontent-%COMP%] {\r\n        width: 40vw;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 541px) and (max-width: 960px) {\r\n    .comicContainer[_ngcontent-%COMP%] {\r\n        width: 25vw;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21pYy9jb21pYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21pYy9jb21pYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbWljQ29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxNXZ3O1xyXG59XHJcblxyXG4uY29taWNJbWFnZUFyZWEge1xyXG4gICAgaGVpZ2h0OiAzNXZoO1xyXG59XHJcblxyXG4uY29taWNJbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb21pY1RpdGxlQXJlYSB7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbn1cclxuXHJcbi5yYXJvIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgYm9yZGVyOiAycHggI0YwMTMxRSBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcclxuICAgIHBhZGRpbmc6IDAuMDVlbTtcclxuICAgIGNvbG9yOiAjRjAxMzFFO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIG1heC1oZWlnaHQ6IDJlbTtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn1cclxuXHJcbi5hbGVydGEge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xyXG4gICAgLmNvbWljQ29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogNDB2dztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NDFweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAuY29taWNDb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comic',
                templateUrl: './comic.component.html',
                styleUrls: ['./comic.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }, { type: src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_5__["VariablesService"] }]; }, { comic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selfClosingAlert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['selfClosingAlert', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/detalhes/detalhes.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/detalhes/detalhes.component.ts ***!
  \***********************************************************/
/*! exports provided: DetalhesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhesComponent", function() { return DetalhesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/variables.service */ "./src/app/services/variables.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function DetalhesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Raro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetalhesComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "N\u00BA edi\u00E7\u00E3o:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.comic.issueNumber);
} }
function DetalhesComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Descri\u00E7\u00E3o:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.comic.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DetalhesComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "N\u00BA p\u00E1ginas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.comic.pageCount);
} }
function DetalhesComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "S\u00E9rie:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.comic.series.name);
} }
function DetalhesComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cole\u00E7\u00F5es:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.comic.collections.join(", "));
} }
function DetalhesComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Criadores:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.getCriadores(ctx_r6.comic.creators.items));
} }
function DetalhesComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Personagens:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.getPersonagens(ctx_r7.comic.characters.items));
} }
function DetalhesComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hist\u00F3rias:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.getHistorias(ctx_r8.comic.stories.items));
} }
function DetalhesComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Eventos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.comic.events.items.join(", "));
} }
/**
 * Componente de detalhes da HQ
 */
class DetalhesComponent {
    constructor(activeModal, variables) {
        this.activeModal = activeModal;
        this.variables = variables;
    }
    ngOnInit() {
    }
    /**
     * Método que insere a HQ no pedido
     */
    comprarComic() {
        this.variables.insereComicPedido(this.comic);
        this.activeModal.close();
    }
    /**
     * Método que retorna todos os criadores da HQ numa string
     *
     * @param criadores criadores da HQ
     */
    getCriadores(criadores) {
        let resultado = [];
        criadores.forEach(criador => {
            resultado.push(criador.name + ' - ' + criador.role);
        });
        return resultado.join(', ');
    }
    /**
     * Método que retorna todos os personagens da HQ numa string
     *
     * @param personagens personagens da HQ
     */
    getPersonagens(personagens) {
        let resultado = [];
        personagens.forEach(personagem => {
            resultado.push(personagem.name);
        });
        return resultado.join(', ');
    }
    /**
     * Método que retorna todas as histórias da HQ numa string
     *
     * @param historias histórias da HQ
     */
    getHistorias(historias) {
        let resultado = [];
        historias.forEach(historia => {
            resultado.push(historia.name);
        });
        return resultado.join(', ');
    }
}
DetalhesComponent.ɵfac = function DetalhesComponent_Factory(t) { return new (t || DetalhesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"])); };
DetalhesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetalhesComponent, selectors: [["app-detalhes"]], inputs: { comic: "comic" }, decls: 26, vars: 13, consts: [[1, "modal-header", "align-items-center"], [1, "modal-title"], ["class", "raro mx-1", 4, "ngIf"], ["aria-label", "Close", 1, "close", 3, "click"], [1, "fas", "fa-times", "fa-lg"], [1, "modal-body"], [1, "row"], [1, "col-4"], [1, "comicImageArea", "align-items-center"], [1, "col", "p-0", "comicImage", 3, "src"], [1, "col-8", "listaDetalhes"], ["class", "text-justify", 4, "ngIf"], [1, "modal-footer", "align-items-center"], [1, "tituloDetalhe"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [1, "raro", "mx-1"], [1, "text-justify"], [3, "innerHTML"]], template: function DetalhesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetalhesComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalhesComponent_Template_a_click_4_listener() { return ctx.activeModal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DetalhesComponent_p_12_Template, 4, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DetalhesComponent_p_13_Template, 4, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DetalhesComponent_p_14_Template, 4, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DetalhesComponent_p_15_Template, 4, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DetalhesComponent_p_16_Template, 4, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DetalhesComponent_p_17_Template, 4, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DetalhesComponent_p_18_Template, 4, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DetalhesComponent_p_19_Template, 4, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DetalhesComponent_p_20_Template, 4, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalhesComponent_Template_button_click_24_listener() { return ctx.comprarComic(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Comprar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comic.raro);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comic.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.comic.thumbnail.path + "." + ctx.comic.thumbnail.extension, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comic.issueNumber != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comic.description != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comic.pageCount != null && ctx.comic.pageCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comic.series != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comic.collections.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comic.creators.items.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comic.characters.items.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comic.stories.items.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comic.events.items.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.variables.getPrice(ctx.comic));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".close[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.comicImageArea[_ngcontent-%COMP%] {\r\n    max-height: 100%;\r\n}\r\n\r\n.comicImage[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    object-fit: contain;\r\n    object-position: center;\r\n}\r\n\r\n.listaDetalhes[_ngcontent-%COMP%] {\r\n    overflow-y: scroll;\r\n    max-height: 60vh;\r\n}\r\n\r\n.tituloDetalhe[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    padding-right: 1em;\r\n}\r\n\r\n.raro[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-size: 0.75em;\r\n    border: 2px #F0131E solid;\r\n    border-radius: 25%;\r\n    padding: 0.05em;\r\n    color: #F0131E;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhbGhlcy9kZXRhbGhlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RldGFsaGVzL2RldGFsaGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvc2Uge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29taWNJbWFnZUFyZWEge1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbWljSW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGlzdGFEZXRhbGhlcyB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MHZoO1xyXG59XHJcblxyXG4udGl0dWxvRGV0YWxoZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG59XHJcblxyXG4ucmFybyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIGJvcmRlcjogMnB4ICNGMDEzMUUgc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgICBwYWRkaW5nOiAwLjA1ZW07XHJcbiAgICBjb2xvcjogI0YwMTMxRTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalhesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detalhes',
                templateUrl: './detalhes.component.html',
                styleUrls: ['./detalhes.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }, { type: src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"] }]; }, { comic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/finalizacao/finalizacao.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/finalizacao/finalizacao.component.ts ***!
  \*****************************************************************/
/*! exports provided: FinalizacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalizacaoComponent", function() { return FinalizacaoComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/variables.service */ "./src/app/services/variables.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");









const _c0 = ["selfClosingAlert"];
function FinalizacaoComponent_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Raro");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FinalizacaoComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, FinalizacaoComponent_div_6_div_7_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FinalizacaoComponent_div_6_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const comic_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.mudaQuantidade(comic_r3, comic_r3.quantidade - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FinalizacaoComponent_div_6_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const comic_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.mudaQuantidade(comic_r3, comic_r3.quantidade + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FinalizacaoComponent_div_6_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const comic_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.variables.removeComicPedido(comic_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comic_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", comic_r3.thumbnail.path + "." + comic_r3.thumbnail.extension, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", comic_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", comic_r3.raro);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](comic_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", comic_r3.quantidade);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getPrecoTotal(comic_r3, ctx_r0.variables.getPrice(comic_r3)));
} }
function FinalizacaoComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FinalizacaoComponent_div_13_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const cupom_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.removeCupomPedido(cupom_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cupom_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"](" ", cupom_r9.id, " - ", cupom_r9.codigo, "(", ctx_r1.getRaridadeCupom(cupom_r9.raro), " - ", ctx_r1.getDescontoCupom(cupom_r9.desconto), ") ");
} }
function FinalizacaoComponent_ngb_alert_19_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-alert", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function FinalizacaoComponent_ngb_alert_19_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.mensagem = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.mensagem, "\n");
} }
/**
 * Componente da finalização do pedido
 */
class FinalizacaoComponent {
    constructor(variables) {
        this.variables = variables;
        this.comics = [];
        this.codigoCupom = '';
        this.cuponsPedido = [];
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.mensagem = '';
    }
    ngOnInit() {
        this.comics = this.variables.getComicsPedido();
        this._success.subscribe(message => this.mensagem = message);
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(5000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
    }
    /**
     * Método que altera a quantidade de uma HQ no pedido
     *
     * @param comic HQ
     * @param quantidade quantidade no pedido
     */
    mudaQuantidade(comic, quantidade) {
        if (quantidade < 1) {
            quantidade = 1;
        }
        comic.quantidade = quantidade;
    }
    /**
     * Método que retorna o preço da HQ formatado
     *
     * @param comic HQ
     * @param precoUnitario Preço da HQ
     */
    getPrecoTotal(comic, precoUnitario) {
        let precoTotal = 0;
        precoTotal = parseFloat(precoUnitario.replace('$', '')) * comic.quantidade;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatCurrency"])(precoTotal, 'en-us', '$');
    }
    /**
     * Método que calcula o total do pedido considerando cupons
     */
    getTotalPedido() {
        let total = 0;
        this.comics.forEach(comic => {
            let precoComic = comic.preco * comic.quantidade;
            this.cuponsPedido.forEach(cupom => {
                if (comic.raro) {
                    if (cupom.raro) {
                        precoComic -= precoComic * (cupom.desconto / 100);
                    }
                }
                else {
                    precoComic -= precoComic * (cupom.desconto / 100);
                }
            });
            total += precoComic;
        });
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatCurrency"])(total, 'en-us', '$');
    }
    /**
     * Método que realiza o checkout do pedido
     */
    fazerCheckoutPedido() {
        if (this.comics.length > 0) {
            this.variables.setComicsPedido([]);
            this.variables.setMenuCarrinhoAberto(false);
            this.cuponsPedido.forEach(cupom => {
                this.variables.cupomUtilizado(cupom);
            });
            this.cuponsPedido = [];
            this.comics = [];
            this._success.next('Obrigado por comprar conosco!');
        }
    }
    /**
     * Método que insere um cupom no pedido
     */
    inserirCupom() {
        let cupons = this.variables.getCuponsDisponiveis();
        let cupomInserido = cupons.find(cupom => cupom.codigo == this.codigoCupom);
        let cupomJaInserido = this.cuponsPedido.find(cupom => cupom.id == cupomInserido.id);
        if (cupomInserido !== undefined && cupomJaInserido === undefined) {
            this.codigoCupom = '';
            this.cuponsPedido.push(cupomInserido);
        }
    }
    getRaridadeCupom(raro) {
        return raro ? 'Raro' : 'Comum';
    }
    getDescontoCupom(desconto) {
        return desconto.toPrecision(2) + '%';
    }
    /**
     * Método que retira um cupom do pedido
     *
     * @param cupom Cupom
     */
    removeCupomPedido(cupom) {
        let indexCupom = this.cuponsPedido.findIndex(cupomPedido => cupomPedido.id == cupom.id);
        this.cuponsPedido.splice(indexCupom, 1);
    }
}
FinalizacaoComponent.ɵfac = function FinalizacaoComponent_Factory(t) { return new (t || FinalizacaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"])); };
FinalizacaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FinalizacaoComponent, selectors: [["app-finalizacao"]], viewQuery: function FinalizacaoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert = _t.first);
    } }, decls: 20, vars: 5, consts: [[1, "container-fluid"], [1, "row"], [1, "col", "text-right", "p-2"], [1, "my-2"], [1, "listaComicsPedido", "p-0", "m-0"], ["class", "card mb-3", 4, "ngFor", "ngForOf"], [1, "input-group", "my-2"], ["type", "text", "placeholder", "Cupom", "aria-label", "Cupom", "aria-describedby", "inserirCupom", 1, "form-control", "text-right", 3, "ngModel", "ngModelChange"], ["id", "inserirCupom", 1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [1, "listaCuponsPedido", "p-0", "m-0"], ["class", "card mb-1", 4, "ngFor", "ngForOf"], [1, "my-3"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "fas", "fa-dollar-sign", "pr-2"], ["class", "alerta text-center", "type", "success", 3, "closed", 4, "ngIf"], [1, "card", "mb-3"], [1, "row", "no-gutters"], [1, "col-md-4"], [1, "card-img", 3, "src"], [1, "col-md-8"], [1, "card-body"], [1, "card-title"], ["class", "raro mx-1", 4, "ngIf"], [1, "input-group", "mb-3"], ["id", "buttonMaisMenosQuantidade", 1, "input-group-prepend"], ["type", "text", "placeholder", "Quantidade", "aria-label", "Quantidade", "aria-describedby", "buttonMaisMenosQuantidade", "disabled", "", 1, "form-control", "text-right", 3, "ngModel"], ["id", "buttonMaisMenosQuantidade", 1, "input-group-append"], [1, "btn", "btn-outline-danger", "py-1", "px-2", "border-0", 3, "click"], [1, "fas", "fa-trash", "fa-md"], [1, "raro", "mx-1"], [1, "card", "mb-1"], [1, "card-body", "align-items-center"], [1, "card-title", "p-0", "m-0"], ["type", "success", 1, "alerta", "text-center", 3, "closed"], ["selfClosingAlert", ""]], template: function FinalizacaoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Seu pedido");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FinalizacaoComponent_div_6_Template, 21, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FinalizacaoComponent_Template_input_ngModelChange_8_listener($event) { return ctx.codigoCupom = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FinalizacaoComponent_Template_button_click_10_listener() { return ctx.inserirCupom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Inserir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, FinalizacaoComponent_div_13_Template, 6, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FinalizacaoComponent_Template_button_click_16_listener() { return ctx.fazerCheckoutPedido(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, FinalizacaoComponent_ngb_alert_19_Template, 3, 1, "ngb-alert", 15);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.comics);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.codigoCupom);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cuponsPedido);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total do pedido: ", ctx.getTotalPedido(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mensagem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlert"]], styles: [".listaComicsPedido[_ngcontent-%COMP%] {\r\n    max-height: 40vh;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    line-height: 1em;\r\n    max-height: 2em;\r\n    -webkit-line-clamp: 2;\r\n    -webkit-box-orient: vertical;\r\n}\r\n\r\n.raro[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-size: 0.75em;\r\n    border: 2px #F0131E solid;\r\n    border-radius: 25%;\r\n    padding: 0.05em;\r\n    color: #F0131E;\r\n}\r\n\r\n.listaCuponsPedido[_ngcontent-%COMP%] {\r\n    max-height: 15vh;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.alerta[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    z-index: 100;\r\n}\r\n\r\n@media only screen and (max-width: 540px) {\r\n    .listaComicsPedido[_ngcontent-%COMP%] {\r\n        max-height: 30vh;\r\n    }\r\n\r\n    .listaCuponsPedido[_ngcontent-%COMP%] {\r\n        max-height: 10vh;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 541px) and (max-width: 960px) {\r\n    .listaComicsPedido[_ngcontent-%COMP%] {\r\n        max-height: 35vh;\r\n    }\r\n\r\n    .listaCuponsPedido[_ngcontent-%COMP%] {\r\n        max-height: 15vh;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maW5hbGl6YWNhby9maW5hbGl6YWNhby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxPQUFPO0lBQ1AsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmluYWxpemFjYW8vZmluYWxpemFjYW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0YUNvbWljc1BlZGlkbyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MHZoO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIG1heC1oZWlnaHQ6IDJlbTtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn1cclxuXHJcbi5yYXJvIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgYm9yZGVyOiAycHggI0YwMTMxRSBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcclxuICAgIHBhZGRpbmc6IDAuMDVlbTtcclxuICAgIGNvbG9yOiAjRjAxMzFFO1xyXG59XHJcblxyXG4ubGlzdGFDdXBvbnNQZWRpZG8ge1xyXG4gICAgbWF4LWhlaWdodDogMTV2aDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLmFsZXJ0YSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbiAgICAubGlzdGFDb21pY3NQZWRpZG8ge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDMwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3RhQ3Vwb25zUGVkaWRvIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMHZoO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU0MXB4KSBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgIC5saXN0YUNvbWljc1BlZGlkbyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgIH1cclxuXHJcbiAgICAubGlzdGFDdXBvbnNQZWRpZG8ge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE1dmg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FinalizacaoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-finalizacao',
                templateUrl: './finalizacao.component.html',
                styleUrls: ['./finalizacao.component.css']
            }]
    }], function () { return [{ type: src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_4__["VariablesService"] }]; }, { selfClosingAlert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['selfClosingAlert', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/**
 * Componente do footer da aplicação
 */
class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col", "text-center"], [1, "m-0", "text-light"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dados cedidos pela Marvel. \u00A9 2014 Marvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 0;\r\n    background-color: #F0131E;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMDEzMUU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/variables.service */ "./src/app/services/variables.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a0, a1) { return { "fa-angle-left": a0, "fa-angle-right": a1 }; };
/**
 * Componente do header da aplicação
 */
class HeaderComponent {
    constructor(variables, modalService) {
        this.variables = variables;
        this.modalService = modalService;
        this.modalOptions = {
            size: 'md',
            centered: true
        };
    }
    ngOnInit() {
    }
    toggleMenuBusca() {
        this.variables.setMenuBuscaAberto(!this.variables.getMenuBuscaAberto());
    }
    toggleMenuCarrinho() {
        this.variables.setMenuCarrinhoAberto(!this.variables.getMenuCarrinhoAberto());
    }
    /**
     * Método que abre modal para login
     */
    abrirLogin() {
        this.modalService.open(_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], this.modalOptions);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 15, vars: 5, consts: [[1, "container-fluid", "p-3", "sticky-top", "header"], [1, "row", "align-items-center"], [1, "col-4", "text-left"], ["id", "buttonMenuCarrinho", 1, "botaoMenuLateral", "p-1", "btn", "btn-outline-light", "border-0", 3, "click"], [1, "fas", "fa-search", "fa-lg"], [1, "fas", "fa-md", "ml-1", 3, "ngClass"], [1, "col-4", "text-center", "text-light", "texto-logo"], [1, "col-4", "text-right"], ["id", "buttonLogin", 1, "botaoMenuLateral", "p-1", "mr-2", "btn", "btn-outline-light", "border-0", 3, "click"], [1, "fas", "fa-user", "fa-lg"], [1, "badge", "badge-pill", "badge-light", "mr-1"], [1, "fas", "fa-shopping-cart", "fa-lg"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_3_listener() { return ctx.toggleMenuBusca(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " MARVEL COMICS STORE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_9_listener() { return ctx.abrirLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() { return ctx.toggleMenuCarrinho(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.variables.getMenuBuscaAberto(), !ctx.variables.getMenuBuscaAberto()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.variables.getComicsPedido().length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".header[_ngcontent-%COMP%] {\r\n    background-color: #F0131E;\r\n}\r\n\r\n#buttonMenuBusca[_ngcontent-%COMP%], #buttonMenuCarrinho[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.texto-logo[_ngcontent-%COMP%] {\r\n    font-family: 'badaboomBB', Arial, Helvetica, sans-serif;\r\n    font-size: 3em;\r\n}\r\n\r\n@media only screen and (max-width: 540px) {\r\n    .texto-logo[_ngcontent-%COMP%] {\r\n        font-size: 1.2em;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 541px) and (max-width: 960px) {\r\n    .texto-logo[_ngcontent-%COMP%] {\r\n        font-size: 1.8em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVEQUF1RDtJQUN2RCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwMTMxRTtcclxufVxyXG5cclxuI2J1dHRvbk1lbnVCdXNjYSxcclxuI2J1dHRvbk1lbnVDYXJyaW5obyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0by1sb2dvIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnYmFkYWJvb21CQicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xyXG4gICAgLnRleHRvLWxvZ28ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQxcHgpIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgLnRleHRvLWxvZ28ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _services_variables_service__WEBPACK_IMPORTED_MODULE_2__["VariablesService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/listar-comics/listar-comics.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/listar-comics/listar-comics.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListarComicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarComicsComponent", function() { return ListarComicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/variables.service */ "./src/app/services/variables.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _comic_comic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comic/comic.component */ "./src/app/components/comic/comic.component.ts");





function ListarComicsComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ListarComicsComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nenhuma HQ foi encontrada.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ListarComicsComponent_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-comic", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const comic_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comic", comic_r6);
} }
function ListarComicsComponent_ng_container_3_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListarComicsComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListarComicsComponent_ng_container_3_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListarComicsComponent_ng_container_3_ng_container_2_div_2_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.comics);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.variables.getCarregandoMaisComics())("ngIfElse", ctx_r3.setComics());
} }
function ListarComicsComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListarComicsComponent_ng_container_3_ng_container_1_Template, 3, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListarComicsComponent_ng_container_3_ng_container_2_Template, 3, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.comics.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.comics.length > 0);
} }
/**
 * Componente de listagem das HQs retornadas pela API
 */
class ListarComicsComponent {
    constructor(variables) {
        this.variables = variables;
        this.comics = [];
    }
    ngOnInit() {
        this.setComics();
    }
    setComics() {
        this.comics = this.variables.getComics();
    }
}
ListarComicsComponent.ɵfac = function ListarComicsComponent_Factory(t) { return new (t || ListarComicsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"])); };
ListarComicsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListarComicsComponent, selectors: [["app-listar-comics"]], decls: 4, vars: 3, consts: [[1, "container-fluid"], [1, "row", "justify-content-around"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], [1, "fas", "fa-circle-notch", "fa-spin", "fa-5x", "vermelhoMarvel", "my-5", "mx-2"], [1, "my-5", "mx-2", "text-center"], [4, "ngFor", "ngForOf"], ["class", "col-12 text-center mt-2 mb-5", 4, "ngIf", "ngIfElse"], [3, "comic"], [1, "col-12", "text-center", "mt-2", "mb-5"], [1, "fas", "fa-circle-notch", "fa-spin", "fa-2x", "vermelhoMarvel"]], template: function ListarComicsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListarComicsComponent_ng_container_2_Template, 2, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListarComicsComponent_ng_container_3_Template, 3, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.variables.getCarregandoComics())("ngIfElse", ctx.setComics());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.variables.getCarregandoComics());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _comic_comic_component__WEBPACK_IMPORTED_MODULE_3__["ComicComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0YXItY29taWNzL2xpc3Rhci1jb21pY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpc3Rhci1jb21pY3MvbGlzdGFyLWNvbWljcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListarComicsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-listar-comics',
                templateUrl: './listar-comics.component.html',
                styleUrls: ['./listar-comics.component.css']
            }]
    }], function () { return [{ type: src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_1__["VariablesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function LoginComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_7_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.usuarioLogin = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_7_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.senhaLogin = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.usuarioLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.senhaLogin);
} }
function LoginComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ol\u00E1 ", ctx_r1.usuarioLogin, ", tenha boas compras!");
} }
function LoginComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.logarUsuario(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Entrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.deslogarUsuario(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sair");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
/**
 * Componente de login do usuário
 */
class LoginComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.usuarioLogin = '';
        this.senhaLogin = '';
        this.logado = false;
    }
    ngOnInit() {
        let usuarioSenha = localStorage.getItem('usuarioSenha');
        if (usuarioSenha != null) {
            this.logado = true;
            let usuarioSenhaParsed = JSON.parse(usuarioSenha);
            this.usuarioLogin = usuarioSenhaParsed.usuario;
        }
    }
    logarUsuario() {
        let usuarioSenha = {
            usuario: this.usuarioLogin,
            senha: this.senhaLogin
        };
        localStorage.setItem('usuarioSenha', JSON.stringify(usuarioSenha));
    }
    deslogarUsuario() {
        this.usuarioLogin = '';
        localStorage.removeItem('usuarioSenha');
        this.logado = false;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 12, vars: 4, consts: [[1, "modal-header", "align-items-center"], [1, "modal-title"], ["aria-label", "Close", 1, "close", 3, "click"], [1, "fas", "fa-times", "fa-lg"], [1, "modal-body"], [1, "row"], ["class", "col", 4, "ngIf"], [1, "modal-footer", "align-items-center", "justify-content-center"], ["type", "button", "class", "btn btn-outline-danger", 3, "click", 4, "ngIf"], [1, "col"], [1, "input-group", "my-2"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], [1, "fas", "fa-user", "fa-lg"], ["type", "text", "placeholder", "Usu\u00E1rio", "aria-label", "Usu\u00E1rio", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "basic-addon2", 1, "input-group-text"], [1, "fas", "fa-key", "fa-lg"], ["type", "password", "placeholder", "Senha", "aria-label", "Senha", "aria-describedby", "basic-addon2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_3_listener() { return ctx.activeModal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_div_7_Template, 11, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_button_10_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_button_11_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.logado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.logado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logado);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/menu-lateral/menu-lateral.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/menu-lateral/menu-lateral.component.ts ***!
  \*******************************************************************/
/*! exports provided: MenuLateralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLateralComponent", function() { return MenuLateralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0, a1, a2) { return { "menuAberto": a0, "esquerda": a1, "direita": a2 }; };
const _c1 = ["*"];
/**
 * Componente dos menus laterais
 */
class MenuLateralComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuLateralComponent.ɵfac = function MenuLateralComponent_Factory(t) { return new (t || MenuLateralComponent)(); };
MenuLateralComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuLateralComponent, selectors: [["app-menu-lateral"]], inputs: { aberto: "aberto", lado: "lado" }, ngContentSelectors: _c1, decls: 2, vars: 5, consts: [[1, "menuLateral", "shadow", 3, "ngClass"]], template: function MenuLateralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c0, ctx.aberto, ctx.lado == "esquerda", ctx.lado == "direita"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".menuLateral[_ngcontent-%COMP%] {\r\n    transition: all 0.5s ease-in-out;\r\n    height: 100%;\r\n    width: 33vw;\r\n    position: fixed;\r\n    background-color: white;\r\n    z-index: 99;\r\n}\r\n\r\n.direita[_ngcontent-%COMP%] {\r\n    margin-right: -33vw;\r\n    right: 0;\r\n}\r\n\r\n.menuAberto.direita[_ngcontent-%COMP%] {\r\n    margin-right: 0em;\r\n}\r\n\r\n.esquerda[_ngcontent-%COMP%] {\r\n    margin-left: -33vw;\r\n    left: 0;\r\n}\r\n\r\n.menuAberto.esquerda[_ngcontent-%COMP%] {\r\n    margin-left: 0em;\r\n}\r\n\r\n@media only screen and (max-width: 540px) {\r\n    .menuLateral[_ngcontent-%COMP%] {\r\n        width: 100vw;\r\n    }\r\n    \r\n    .direita[_ngcontent-%COMP%] {\r\n        margin-right: -100vw;\r\n    }\r\n    \r\n    .esquerda[_ngcontent-%COMP%] {\r\n        margin-left: -100vw;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 541px) and (max-width: 960px) {\r\n    .menuLateral[_ngcontent-%COMP%] {\r\n        width: 66vw;\r\n    }\r\n    \r\n    .direita[_ngcontent-%COMP%] {\r\n        margin-right: -66vw;\r\n    }\r\n    \r\n    .esquerda[_ngcontent-%COMP%] {\r\n        margin-left: -66vw;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LWxhdGVyYWwvbWVudS1sYXRlcmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztBQUNYOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51LWxhdGVyYWwvbWVudS1sYXRlcmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudUxhdGVyYWwge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMzN2dztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogOTk7XHJcbn1cclxuXHJcbi5kaXJlaXRhIHtcclxuICAgIG1hcmdpbi1yaWdodDogLTMzdnc7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLm1lbnVBYmVydG8uZGlyZWl0YSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBlbTtcclxufVxyXG5cclxuLmVzcXVlcmRhIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzN2dztcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5tZW51QWJlcnRvLmVzcXVlcmRhIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwZW07XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcclxuICAgIC5tZW51TGF0ZXJhbCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGlyZWl0YSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTAwdnc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5lc3F1ZXJkYSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMDB2dztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NDFweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAubWVudUxhdGVyYWwge1xyXG4gICAgICAgIHdpZHRoOiA2NnZ3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGlyZWl0YSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNjZ2dztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmVzcXVlcmRhIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTY2dnc7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuLateralComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-lateral',
                templateUrl: './menu-lateral.component.html',
                styleUrls: ['./menu-lateral.component.css']
            }]
    }], function () { return []; }, { aberto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lado: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/comics.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/comics.service.ts ***!
  \********************************************/
/*! exports provided: ComicsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicsService", function() { return ComicsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_3__);






/**
 * Serviço de controle das HQs
 */
class ComicsService {
    constructor(http) {
        this.http = http;
        this.comicsUrl = 'https://gateway.marvel.com:443/v1/public/comics?';
        this.publicKey = 'dadf708548c33c0f35097c1274a3775e';
        this.privateKey = '88fd93f2455f0ef672734efb5f9b6efed8349fee';
        this.requisicaoEmAndamento = false;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.idTerminadoRaridade = Math.floor(Math.random() * 10);
    }
    /**
     * Método de requisição das HQs
     *
     * @param titulo título a ser buscado
     * @param offset caso esteja carregando mais HQs, seta a partir de qual deve retornar
     */
    getComics(titulo = '', offset = 0) {
        let url = this.comicsUrl;
        if (titulo.length > 0) {
            url += 'titleStartsWith=' + encodeURI(titulo) + '&';
        }
        if (offset != 0) {
            url += 'offset=' + offset + '&';
        }
        if (!this.requisicaoEmAndamento) {
            this.requisicaoEmAndamento = true;
            return this.http.get(url + this.getParams())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(dados => {
                this.requisicaoEmAndamento = false;
                dados.data.results.forEach(dado => {
                    if (dado.id.toString().endsWith(this.idTerminadoRaridade.toString())) {
                        dado.raro = true;
                    }
                    else {
                        dado.raro = false;
                    }
                    let preco = dado.prices.find(preco => preco.type == 'printPrice');
                    if (!!preco) {
                        dado.preco = preco.price;
                    }
                    else {
                        dado.preco = 0.0;
                    }
                });
                return dados;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
                console.log(error);
                return [];
            }));
        }
    }
    /**
     * Método gerador dos paramêtros necessários para comunicação com API da Marvel
     */
    getParams() {
        let ts = new Date().getTime();
        let hash = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_3__["Md5"].hashStr(ts + this.privateKey + this.publicKey);
        let params = 'ts=' + ts + '&apikey=' + this.publicKey + '&hash=' + hash;
        return params;
    }
}
ComicsService.ɵfac = function ComicsService_Factory(t) { return new (t || ComicsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ComicsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ComicsService, factory: ComicsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComicsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/cupons.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/cupons.service.ts ***!
  \********************************************/
/*! exports provided: CuponsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuponsService", function() { return CuponsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



/**
 * Serviço de controle dos cupons
 */
class CuponsService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Método de requisição dos cupons
     */
    getCupons() {
        return this.http.get('assets/mocks/cupons.json');
    }
}
CuponsService.ɵfac = function CuponsService_Factory(t) { return new (t || CuponsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CuponsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CuponsService, factory: CuponsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CuponsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/variables.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/variables.service.ts ***!
  \***********************************************/
/*! exports provided: VariablesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesService", function() { return VariablesService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cupons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cupons.service */ "./src/app/services/cupons.service.ts");




/**
 * Serviço de controle das variáveis
 */
class VariablesService {
    constructor(cupons) {
        this.cupons = cupons;
        this.menuBuscaAberto = false;
        this.menuCarrinhoAberto = false;
        this.carregandoComics = false;
        this.carregandoMaisComics = false;
        this.comics = [];
        this.tituloBusca = '';
        this.comicsPedido = [];
        this.cuponsDisponiveis = [];
        this.cupons.getCupons().subscribe(cuponsImportados => {
            this.cuponsDisponiveis = cuponsImportados.cupons;
        });
    }
    getMenuBuscaAberto() {
        return this.menuBuscaAberto;
    }
    setMenuBuscaAberto(aberto) {
        if (this.menuCarrinhoAberto && aberto) {
            this.menuCarrinhoAberto = false;
        }
        this.menuBuscaAberto = aberto;
    }
    getMenuCarrinhoAberto() {
        return this.menuCarrinhoAberto;
    }
    setMenuCarrinhoAberto(aberto) {
        if (this.menuBuscaAberto && aberto) {
            this.menuBuscaAberto = false;
        }
        this.menuCarrinhoAberto = aberto;
    }
    getCarregandoComics() {
        return this.carregandoComics;
    }
    setCarregandoComics(carregando) {
        this.carregandoComics = carregando;
    }
    getComics() {
        return this.comics;
    }
    setComics(comics, novaConsulta = true) {
        if (novaConsulta) {
            this.comics = comics;
        }
        else {
            this.comics = this.comics.concat(comics);
        }
    }
    getPrice(comic) {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatCurrency"])(comic.preco, 'en-us', '$');
    }
    getCarregandoMaisComics() {
        return this.carregandoMaisComics;
    }
    setCarregandoMaisComics(carregando) {
        this.carregandoMaisComics = carregando;
    }
    getTituloBusca() {
        return this.tituloBusca;
    }
    setTituloBusca(titulo) {
        this.tituloBusca = titulo;
    }
    getComicsPedido() {
        return this.comicsPedido;
    }
    setComicsPedido(comics) {
        this.comicsPedido = comics;
    }
    insereComicPedido(comic) {
        let indexComic = this.comicsPedido.findIndex(comicPedido => comicPedido.id == comic.id);
        if (indexComic > -1) {
            this.comicsPedido[indexComic].quantidade++;
        }
        else {
            comic.quantidade = 1;
            this.comicsPedido.push(comic);
        }
    }
    removeComicPedido(comic) {
        let indexComic = this.comicsPedido.findIndex(comicPedido => comicPedido.id == comic.id);
        if (indexComic > -1) {
            this.comicsPedido.splice(indexComic, 1);
        }
    }
    /**
     * Método para pegar os cupons disponíveis, retirando os já utilizados pelo usuário em outras compras
     */
    getCuponsDisponiveis() {
        let cuponsUtilizados = JSON.parse(localStorage.getItem('cuponsUtilizados')) || [];
        this.cuponsDisponiveis = this.cuponsDisponiveis.filter(cupom => {
            if (cuponsUtilizados.find(cupomUtilizado => cupomUtilizado.id == cupom.id) === undefined) {
                return cupom;
            }
        });
        return this.cuponsDisponiveis;
    }
    /**
     * Método que grava o cupom utilizado na compra para não ser mais utilizado
     *
     * @param cupom cupom utilizado na compra
     */
    cupomUtilizado(cupom) {
        let cuponsUtilizados = JSON.parse(localStorage.getItem('cuponsUtilizados')) || [];
        cuponsUtilizados.push(cupom);
        localStorage.setItem('cuponsUtilizados', JSON.stringify(cuponsUtilizados));
    }
}
VariablesService.ɵfac = function VariablesService_Factory(t) { return new (t || VariablesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_cupons_service__WEBPACK_IMPORTED_MODULE_2__["CuponsService"])); };
VariablesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VariablesService, factory: VariablesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VariablesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _cupons_service__WEBPACK_IMPORTED_MODULE_2__["CuponsService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\Angular\marvel-comics-store\marvel-comic-store\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map