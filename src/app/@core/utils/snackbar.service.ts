import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private snackbarConfig: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
  };

  constructor(
    private snackBar: MatSnackBar
  ) { }

  open(message: string, action: string): void {
    const snackBarRef = this.snackBar.open(message, action, this.snackbarConfig);
    snackBarRef.afterDismissed().subscribe(() => {
      console.log('Snackbar was dismissed.');
    });
  }

  // Method to close the currently displayed snackbar
  closeSnackbar(): void {
    this.snackBar.dismiss();
  }

}
