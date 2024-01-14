import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface CompanyElement {
  name: string;
  country: string;
  phone: string;
  website: string;
  type: string;
}

@Component({
  selector: 'ngx-companies-table',
  templateUrl: './companies-table.component.html',
  styleUrls: ['./companies-table.component.scss']
})
export class CompaniesTableComponent {
  searchText: string = '';
  displayedColumns: string[] = ['name', 'country', 'phone', 'website', 'type'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  companies: CompanyElement[] = [
    {
      name: 'Company A',
      country: 'USA',
      phone: '123-456-7890',
      website: 'www.companya.com',
      type: 'Active',
    },
    {
      name: 'Company B',
      country: 'Canada',
      phone: '987-654-3210',
      website: 'www.companyb.com',
      type: 'Active',
    },
    {
      name: 'Company C',
      country: 'UK',
      phone: '456-789-0123',
      website: 'www.companyc.com',
      type: 'Inactive',
    },
    {
      name: 'Company D',
      country: 'Australia',
      phone: '789-012-3456',
      website: 'www.companyd.com',
      type: 'Active',
    },
    {
      name: 'Company E',
      country: 'Germany',
      phone: '234-567-8901',
      website: 'www.companye.com',
      type: 'Inactive',
    },
    {
      name: 'Company F',
      country: 'France',
      phone: '567-890-1234',
      website: 'www.companyf.com',
      type: 'Active',
    },
    {
      name: 'Company G',
      country: 'Japan',
      phone: '345-678-9012',
      website: 'www.companyg.com',
      type: 'Inactive',
    },
    {
      name: 'Company H',
      country: 'Brazil',
      phone: '678-901-2345',
      website: 'www.companyh.com',
      type: 'Active',
    },
    {
      name: 'Company I',
      country: 'India',
      phone: '876-543-2109',
      website: 'www.companyi.com',
      type: 'Inactive',
    },
    {
      name: 'Company J',
      country: 'China',
      phone: '987-654-3210',
      website: 'www.companyj.com',
      type: 'Active',
    },
  ];

  constructor(
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource<any>(this.companies);
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
