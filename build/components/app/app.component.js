"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var matrix_service_1 = require('./../../services/matrix.service');
var AppComponent = (function () {
    function AppComponent(matrixService) {
        this.matrixService = matrixService;
        this.matrix = [];
        this.status = 0;
        this.number = 100;
        this.img = 'http://lorempicsum.com/futurama/400/200/1';
    }
    AppComponent.prototype.getMatrix = function () {
        var _this = this;
        this.matrixService.getMatrix().then(function (matrix) { return _this.matrix = matrix; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getMatrix();
    };
    AppComponent.prototype.switchLed = function () {
        this.status = (this.status + 1) % 2;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-pw',
            templateUrl: './components/app/app.html',
            providers: [matrix_service_1.MatrixService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [matrix_service_1.MatrixService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map