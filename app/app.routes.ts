import { provideRouter, RouterConfig }  from '@angular/router';

import {AppComponent} from "./app.component";
import { RulesComponent } from './components/rules/rules.component';
import {HomeComponent} from "./components/home/home.component";
import {ParametersComponent} from "./components/parameters/parameters.component";

export const routes:RouterConfig = [
    {
        path: 'Home',
        component: HomeComponent
    },
    {
        path: 'Rules',
        component: RulesComponent
    },
    {
        path: 'Parameters',
        component: ParametersComponent
    },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];