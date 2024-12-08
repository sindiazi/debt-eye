import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {DebtEyeUser} from '../model/user-model';

@Injectable()
export class ProfileService {

  constructor() {
  }

  getProfile(userName: string): Observable<DebtEyeUser> {
    return of({
      name: 'Sam',
      age: 44,
      email: ''
    });
  }
}
