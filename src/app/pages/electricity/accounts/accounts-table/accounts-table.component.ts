import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyElement } from '../../../companies/companies-table/companies-table.component';

@Component({
  selector: 'ngx-accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.scss']
})
export class AccountsTableComponent {
  searchText: string = '';
  displayedColumns: string[] = ['name', 'country', 'phone', 'website', 'type'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  companies: CompanyElement[] = [
    {
      name: 'MORA',
      country: 'USA',
      phone: '123-456-7890',
      website: 'www.mora.com',
      type: 'Active',
    },
    {
      name: 'XKING',
      country: 'Canada',
      phone: '987-654-3210',
      website: 'www.xking.com',
      type: 'Active',
    },
    {
      name: 'Power Associates',
      country: 'UK',
      phone: '456-789-0123',
      website: 'www.powerassociates.com',
      type: 'Inactive',
    },
    {
      name: 'Moore International',
      country: 'Australia',
      phone: '789-012-3456',
      website: 'www.mooreint.com',
      type: 'Active',
    },
    {
      name: 'ProGen',
      country: 'Germany',
      phone: '234-567-8901',
      website: 'www.progen.com',
      type: 'Inactive',
    },
    {
      name: 'Lockhead',
      country: 'France',
      phone: '567-890-1234',
      website: 'www.lockhead.com',
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
    private router: Router,
    private route: ActivatedRoute
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
    this.router.navigate([route], { relativeTo: this.route });
  }
}
