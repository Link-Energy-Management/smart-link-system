import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesTableComponent } from './companies-table/companies-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CompaniesComponent } from './companies.component';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';

@NgModule({
  declarations: [
    CompaniesTableComponent,
    CompaniesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    NbCardModule,
    NbSelectModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,

    CompaniesRoutingModule,

    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

  ]
})
export class CompaniesModule { }
