import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'nb-e-commerce',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'nb-home',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Feature 1',
    icon: 'nb-star',
    children: [
      {
        title: 'Subfeature',
        link: '/uidemo/pages/extra-components/calendar',
      },
      {
        title: 'Stepper',
        link: '/uidemo/pages/extra-components/stepper',
      },
      {
        title: 'List',
        link: '/uidemo/pages/extra-components/list',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/uidemo/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/uidemo/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Logout',
    icon: 'nb-e-commerce',
    link: '/logout',
    home: true,
  },
];
