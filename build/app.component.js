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
var matrix_service_1 = require('./services/matrix.service');
var user_service_1 = require('./services/user.service');
var nav_component_1 = require('./components/partials/nav.component');
var AppComponent = (function () {
    function AppComponent(matrixService, _userservive) {
        this.matrixService = matrixService;
        this._userservive = _userservive;
        this.matrix = [];
        this.status = 0;
        this.number = 100;
        this.img = 'http://lorempicsum.com/futurama/400/200/1';
    }
    AppComponent.prototype.getList = function () {
        var _this = this;
        this._userservive.list().subscribe(function (data) { return _this.users = JSON.stringify(data); }, function (error) { return console.log(error); }, function () { return console.log("finished"); });
    };
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
            templateUrl: './app/app.html',
            animations: [
                core_1.trigger('elemState', [
                    core_1.state('inactive', core_1.style({
                        backgroundColor: '#eee',
                        transform: 'scale(1)'
                    })),
                    core_1.state('active', core_1.style({
                        backgroundColor: '#cfd8dc',
                        transform: 'scale(1.1)'
                    })),
                    core_1.transition('inactive => active', core_1.animate('100ms ease-in')),
                    core_1.transition('active => inactive', core_1.animate('100ms ease-out'))
                ])
            ],
            providers: [matrix_service_1.MatrixService, user_service_1.UserService],
            directives: [nav_component_1.NavComponent]
        }), 
        __metadata('design:paramtypes', [matrix_service_1.MatrixService, user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map