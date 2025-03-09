import { Route } from '@angular/router';
import { BookingListComponent } from './booking-list/booking-list.component';
import { AddBookingComponent } from './add-booking/add-booking.component';

export const Routes: Route[] = [
    {
        path     : 'list',
        component: BookingListComponent,
    },
    {
        path     : 'edit/:id',
        component: AddBookingComponent,
    },
];