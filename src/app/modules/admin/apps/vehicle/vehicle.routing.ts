import { Route } from '@angular/router';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';

export const Routes: Route[] = [
    {
        path     : 'list',
        component: VehicleListComponent,
    },
    {
        path     :'add',
        component: AddVehicleComponent,
    },
    {
        path     :'edit/:Id',
        component:AddVehicleComponent
    },
    {
        path     :'view/:id',
        component:ViewVehicleComponent
    }
];