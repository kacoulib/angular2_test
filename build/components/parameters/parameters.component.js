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
var common_1 = require('@angular/common');
var User = (function () {
    function User() {
    }
    return User;
}());
var ParametersComponent = (function () {
    function ParametersComponent(fb) {
        var _this = this;
        this.emailStrength = 0;
        this.username = fb.control('', common_1.Validators.required);
        this.email = fb.control('', common_1.Validators.required);
        this.userForm = fb.group({
            username: this.username,
            email: this.email
        });
        // we subscribe to every email change
        this.email.valueChanges.subscribe(function (newValue) {
            _this.emailStrength = newValue.length;
        });
        this.user = new User;
    }
    ParametersComponent.prototype.register = function () {
        this.user.username = this.userForm.value.username;
        this.user.email = this.userForm.value.email;
        console.log(this.user);
    };
    ParametersComponent = __decorate([
        core_1.Component({
            selector: 'app-parameters',
            templateUrl: './app/components/parameters/parameters.html'
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], ParametersComponent);
    return ParametersComponent;
}());
exports.ParametersComponent = ParametersComponent;
//# sourceMappingURL=parameters.component.js.map