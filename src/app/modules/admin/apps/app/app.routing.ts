import { Route } from '@angular/router';
import { AddappComponent } from './addapp/addapp.component';
import { ApplistComponent } from './applist/applist.component';
import { AppdetailsComponent } from './appdetails/appdetails.component';

export const appRoutes: Route[] = [
    {
        path     : 'addapp',
        component: AddappComponent,
    },
    {
        path     : 'addapp/update/:appId',
        component: AddappComponent,
    },
    {
        path     : 'applist',
        component: ApplistComponent,
    },
    {
        path     : 'appdetails',
        component: AppdetailsComponent,
    },
  
];