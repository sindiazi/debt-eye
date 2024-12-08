import {Route, Routes} from '@angular/router';
import {RouterShellComponent} from './router-shell/router-shell.component';

export const SHELL_ROUTES = [
  {
    path: '',
    component: RouterShellComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../features/home/home-routes').then(m => m.HOME_ROUTES),
      },
      {
        path: 'users',
        loadChildren: () => import('../features/users/user-routes').then(m => m.USER_ROUTES)
      },
      {
        path: '**',
        loadChildren: () => import('../features/home/home-routes').then(m => m.HOME_ROUTES),
      }
    ]
  },
]
