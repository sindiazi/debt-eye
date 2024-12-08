import {Route} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';
import {ProfileService} from './servies/profile.service';
import {InjectionToken} from '@angular/core';

export const ADMIN_API_KEY = new InjectionToken('admin-api-key');
export const USER_ROUTES: Route[] = [
  {
    path: '',
    component: ProfileComponent,
    providers: [
      ProfileService,
      {provide: ADMIN_API_KEY, useValue: '12345'},
    ]
  },
  {path: 'settings', component: SettingsComponent},
];
