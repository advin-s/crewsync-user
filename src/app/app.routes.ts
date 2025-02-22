import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'**',
        component:EmptyRouteComponent
    }
];
