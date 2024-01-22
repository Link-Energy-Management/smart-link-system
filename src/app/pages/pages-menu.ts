import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'layout-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'ENERGY',
    group: true,
  },
  {
    title: 'Electricity',
    icon: 'flash-outline',
    children: [
      {
        title: 'Accounts',
        link: '/pages/electricity/accounts',
      },
      {
        title: 'Long Term',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Short Term',
        link: '/pages/layout/list',
      },
      {
        title: 'Forecasting',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Position Analysis',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Consumption Patterns',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
      {
        title: 'Meter Data',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
      {
        title: 'Results',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
      {
        title: 'Statements',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title: 'Gas',
    icon: 'sun-outline',
    children: [
      {
        title: 'Accounts',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Markets',
        link: '/pages/forms/inputs',
      },
    ],
  },
  {
    title: 'Carbon',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Accounts',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Markets',
        link: '/pages/ui-features/icons',
      },
    ],
  },
  {
    title: 'CONTACTS',
    group: true,
  },
  {
    title: 'Companies',
    icon: 'briefcase-outline',
    link: '/pages/companies',
  },
  {
    title: 'Contacts',
    icon: 'people-outline',
    link: '/pages/contacts',
  },
];
