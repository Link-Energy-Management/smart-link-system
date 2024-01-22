import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent {
  searchText: string = '';
  displayedColumns: string[] = ['name', 'country', 'phone', 'type'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  contacts: any[] = [
    {
      name: 'Contact A',
      country: 'USA',
      phone: '123-456-7890',
      website: 'www.Contacta.com',
      type: 'Active',
    },
    {
      name: 'Contact B',
      country: 'Canada',
      phone: '987-654-3210',
      website: 'www.Contactb.com',
      type: 'Active',
    },
    {
      name: 'Contact C',
      country: 'UK',
      phone: '456-789-0123',
      website: 'www.Contactc.com',
      type: 'Inactive',
    },
    {
      name: 'Contact D',
      country: 'Australia',
      phone: '789-012-3456',
      website: 'www.Contactd.com',
      type: 'Active',
    },
    {
      name: 'Contact E',
      country: 'Germany',
      phone: '234-567-8901',
      website: 'www.Contacte.com',
      type: 'Inactive',
    },
    {
      name: 'Contact F',
      country: 'France',
      phone: '567-890-1234',
      website: 'www.Contactf.com',
      type: 'Active',
    },
    {
      name: 'Contact G',
      country: 'Japan',
      phone: '345-678-9012',
      website: 'www.Contactg.com',
      type: 'Inactive',
    },
    {
      name: 'Contact H',
      country: 'Brazil',
      phone: '678-901-2345',
      website: 'www.Contacth.com',
      type: 'Active',
    },
    {
      name: 'Contact I',
      country: 'India',
      phone: '876-543-2109',
      website: 'www.Contacti.com',
      type: 'Inactive',
    },
    {
      name: 'Contact J',
      country: 'China',
      phone: '987-654-3210',
      website: 'www.Contactj.com',
      type: 'Active',
    },
  ];

  constructor(
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource<any>(this.contacts);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter() {
    this.dataSource.filter = this.searchText.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
