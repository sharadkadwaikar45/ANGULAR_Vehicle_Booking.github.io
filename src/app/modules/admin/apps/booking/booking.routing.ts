import { Route } from '@angular/router';
import { BookingListComponent } from './booking-list/booking-list.component';

export const Routes: Route[] = [
    {
        path     : 'list',
        component: BookingListComponent,
    },
];