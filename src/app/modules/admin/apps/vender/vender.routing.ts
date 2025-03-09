import { Route } from '@angular/router';
import { VenderlistComponent } from './venderlist/venderlist.component';

export const Routes: Route[] = [
    {
        path     : 'list',
        component: VenderlistComponent,
    },
];