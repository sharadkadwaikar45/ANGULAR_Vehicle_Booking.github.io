import { Route } from '@angular/router';
import { FuelListComponent } from './fuel-list/fuel-list.component';

export const Routes: Route[] = [
    {
        path     : 'list',
        component: FuelListComponent,
    },
];