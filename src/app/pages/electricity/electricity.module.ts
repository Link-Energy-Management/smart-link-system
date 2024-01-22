import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectricityRoutingModule } from './electricity-routing.module';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountsTableComponent } from './accounts/accounts-table/accounts-table.component';
import { ElectricityComponent } from './electricity.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule, NbTabsetModule, NbTagListComponent } from '@nebular/theme';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { NbTagModule } from '@nebular/theme';
import { ProfitCardComponent } from '../dashboard/profit-card/profit-card.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { StatsCardFrontComponent } from '../dashboard/profit-card/front-side/stats-card-front.component';
import { StatsCardBackComponent } from '../dashboard/profit-card/back-side/stats-card-back.component';

@NgModule({
  declarations: [
    AccountsComponent,
    AccountsTableComponent,
    ElectricityComponent,
    AccountDetailsComponent
  ],
  imports: [
    CommonModule,
    ElectricityRoutingModule,
    NbCardModule,
    NbSelectModule,
    NbIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NbInputModule,
    NbButtonModule,
    NbTagModule,
    NbTabsetModule,

    MatMenuModule,
    MatIconModule,
    MatChipsModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,

    DashboardModule
  ]
})
export class ElectricityModule { }
