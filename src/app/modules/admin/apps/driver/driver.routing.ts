import { Route } from '@angular/router';
import { BookedDriverComponent } from './booked-driver/booked-driver.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { ViewDriverComponent } from './view-driver/view-driver.component';

export const Routes: Route[] = [
    {
        path     : 'list',
        component: DriverListComponent,
    },
    {
        path     :'add',
        component: AddDriverComponent,
    },
    {
        path     :'edit/:id',
        component:AddDriverComponent,
    },
    {
        path     :'view/:id',
        component: ViewDriverComponent,
    },
    {
        path     : 'booked_driver',
        component: BookedDriverComponent,
    },
];