"use strict";
var router_1 = require('@angular/router');
var rules_component_1 = require('./components/rules/rules.component');
var home_component_1 = require("./components/home/home.component");
var parameters_component_1 = require("./components/parameters/parameters.component");
exports.routes = [
    {
        path: 'Home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'Rules',
        component: rules_component_1.RulesComponent
    },
    {
        path: 'Parameters',
        component: parameters_component_1.ParametersComponent
    },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map