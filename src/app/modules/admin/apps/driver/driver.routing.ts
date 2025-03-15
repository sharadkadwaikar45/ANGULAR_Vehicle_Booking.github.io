import { Route } from '@angular/router';
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
        path     :'edit/:Id',
        component:AddDriverComponent,
    },
    {
        path     :'view/:Id',
        component: ViewDriverComponent,
    }
];