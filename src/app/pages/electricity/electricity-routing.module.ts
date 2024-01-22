import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { ElectricityComponent } from './electricity.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

const routes: Routes = [
  {
    path: '',
    component: ElectricityComponent,
    children: [
      {
        path: 'accounts',
        component: AccountsComponent
      },
      {
        path: 'accounts/:id',
        component: AccountDetailsComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectricityRoutingModule { }
