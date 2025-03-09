import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dashboards.dashboard',
                title: 'Dashboard',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/dashboards/project'
            },
        ]
    },
    {
        id  : 'divider-1',
        type: 'divider'
    },
    
    {
        id      : 'apps',
        title   : 'Applications',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'apps.vender',
                title: 'Vender Management',
                type : 'collapsable',
                icon : 'mat_outline:apps',
                children: [
                    {
                        id   : 'apps.vender.venderlist',
                        title: 'Vender List',
                        type : 'basic',
                        link : '/apps/vender/list'
                    },
                    ]
            },
            {
                id   : 'apps.booking',
                title: 'Booking Management',
                type : 'collapsable',
                icon : 'mat_outline:commute',
                children: [
                    {
                        id   : 'apps.booking.bookingdata',
                        title: 'Booking List',
                        type : 'basic',
                        link : '/apps/booking/list'
                    },
                    ]
            },
            {
                id   : 'apps.driver',
                title: 'Driver Management',
                type : 'collapsable',
                icon : 'mat_outline:filter_tilt_shift',
                children: [
                    {
                        id   : 'apps.driver.list',
                        title: 'Driver List',
                        type : 'basic',
                        link : '/apps/driver/list'
                    },
                    {
                        id   : 'apps.driver.booked_driver',
                        title: 'Booked Driver',
                        type : 'basic',
                        link : '/apps/driver/booked_driver'
                    },
                          ]
            },
            {
                id   : 'apps.vehicle',
                title: 'Vehicle Management',
                type : 'collapsable',
                icon : 'mat_solid:directions_car',
                children: [
                    {
                        id   : 'apps.vehicle.vehical_list',
                        title: 'Vehicle List',
                        type : 'basic',
                        link : '/apps/vehicle/list'
                    },
                          ]
            },
            {
                id   : 'apps.users',
                title: 'Users Management',
                type : 'basic',
                icon : 'mat_outline:people',
                link : '/apps/users/list',
            },
            {
                id   : 'apps.fuels',
                title: 'Fuel Management',
                type : 'basic',
                icon : 'mat_outline:local_gas_station',
                link : '/apps/fuel/list',
            },
            {
                id   : 'apps.reminder',
                title: 'Reminder Management',
                type : 'basic',
                icon : 'mat_outline:add_alarm',
                link : '/apps/reminder/list',
            },
            {
                title: 'Logout',
                type : 'basic',
                icon : 'heroicons_outline:logout',
                link : '/sign-out'
            },
        ]
    },
    {
        id  : 'divider-1',
        type: 'divider'
    },
   
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        tooltip : 'Dashboards',
        type    : 'aside',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'Apps',
        tooltip : 'Apps',
        type    : 'aside',
        icon    : 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
   
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'DASHBOARDS',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'APPS',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id   : 'others',
        title: 'OTHERS',
        type : 'group'
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'User Interface',
        type    : 'aside',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation Features',
        type    : 'aside',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'Apps',
        type    : 'group',
        icon    : 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'group',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'UI',
        type    : 'group',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Misc',
        type    : 'group',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
