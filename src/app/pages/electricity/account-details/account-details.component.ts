import { Component } from '@angular/core';
import { SnackbarService } from '../../../@core/utils/snackbar.service';

@Component({
  selector: 'ngx-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent {
  isStarred: boolean = false;
  accounts: any[] = [
    { id: 1, name: 'Building XY-2', balance: 1000 },
    { id: 2, name: 'Floor 5', balance: 2000 },
    { id: 3, name: 'Site 12', balance: 3000 },
  ];
  constructor(
    private snackbarService: SnackbarService
  ) {
  }

  toggleStar(): void {
    this.isStarred = !this.isStarred;
    this.snackbarService.closeSnackbar();
    if (this.isStarred) {
      this.snackbarService.open('Account starred.', 'Dismiss');
    } else {
      this.snackbarService.open('Account unstarred.', 'Dismiss');
    }
  }


}
