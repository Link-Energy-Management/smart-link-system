import { Component } from '@angular/core';
import { SnackbarService } from '../../../@core/utils/snackbar.service';

@Component({
  selector: 'ngx-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent {
  isStarred: boolean = false;

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
