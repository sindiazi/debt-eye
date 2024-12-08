import {Routes} from '@angular/router';
import {RouterShellComponent} from './layout/router-shell/router-shell.component';


export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./layout/routes').then(m => m.SHELL_ROUTES)
      }
    ]
  }
];
