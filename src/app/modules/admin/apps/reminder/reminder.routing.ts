import { Route } from '@angular/router';
import { ReminderListComponent } from './reminder-list/reminder-list.component';

export const Routes: Route[] = [
    {
        path     : 'list',
        component: ReminderListComponent,
    },
];