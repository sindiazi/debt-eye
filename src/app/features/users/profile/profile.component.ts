import {Component, inject, InjectionToken, OnInit} from '@angular/core';
import {ProfileService} from '../servies/profile.service';
import {DebtEyeUser} from '../model/user-model';
import {Observable, of} from 'rxjs';
import {AsyncPipe, CommonModule, NgIf} from '@angular/common';
import {ADMIN_API_KEY} from '../user-routes';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  readonly profileService: ProfileService = inject(ProfileService);
  userProfile$: Observable<DebtEyeUser> = of({} as DebtEyeUser);
  adminKey = inject(ADMIN_API_KEY);

  ngOnInit(): void {
    this.userProfile$ = this.profileService.getProfile('sindiazi');
  }
}
