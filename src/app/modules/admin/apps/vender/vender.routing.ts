import { Route } from '@angular/router';
import { VenderlistComponent } from './venderlist/venderlist.component';
import { AddvenderComponent } from './addvender/addvender.component';

export const Routes: Route[] = [
    {
        path     : 'list',
        component: VenderlistComponent,
    },
    {
        path:'add',
        component:AddvenderComponent,
    },
    {
        path:'edit/:Id',
        component:AddvenderComponent,
    }
];