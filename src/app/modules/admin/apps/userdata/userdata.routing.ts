import { Route } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { UserhistoryComponent } from './userhistory/userhistory.component';

export const userRoutes: Route[] = [
    {
        path     : 'list',
        component: UserlistComponent,
    },
    {
        path     : 'history/:userId',
        component: UserhistoryComponent,
    },
    {
        path     : 'userhistory',
        component: UserhistoryComponent,
    },
];