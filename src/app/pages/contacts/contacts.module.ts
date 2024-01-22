import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactsTableComponent } from './contacts-table/contacts-table.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactsTableComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,

    NbCardModule,
    NbSelectModule,
    NbIconModule,
    MatTableModule,
    MatPaginatorModule,
    NbInputModule,
    NbButtonModule
  ]
})
export class ContactsModule { }
