import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { AnimalsComponent } from './animals/animals.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

export const AppRoutes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: DashboardComponent
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
    },
    {
        path: 'usuario',
        canActivate: [AuthGuard],
        component: UserComponent
    },

    {
        path: 'animais',
        canActivate: [AuthGuard],
        component: AnimalsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },

    // ate aqui



    // {
    //     path: 'table',
    //     component: TableComponent
    // },
    // {
    //     path: 'typography',
    //     component: TypographyComponent
    // },
    // {
    //     path: 'icons',
    //     component: IconsComponent
    // },

    // {
    //     path: 'notifications',
    //     component: NotificationsComponent
    // },
    // {
    //     path: 'upgrade',
    //     component: UpgradeComponent
    // }
]
