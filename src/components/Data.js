import {ReactComponent as CreditCardIcon} from '../svgs/creditcard.svg';
import {ReactComponent as BookIcon} from '../svgs/file.svg';
import {ReactComponent as BriefcaseIcon} from '../svgs/briefcase.svg';
import React from 'react';
const Sublinks = [
  {
    page: 'products',
    links: [
      { label: 'payment', icon: <CreditCardIcon />, url: '/products' },
      { label: 'terminal', icon: <CreditCardIcon />, url: '/products' },
      { label: 'connect', icon: <CreditCardIcon />, url: '/products' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <BookIcon />, url: '/products' },
      { label: 'libraries', icon: <BookIcon />, url: '/products' },
      { label: 'help', icon: <BookIcon />, url: '/products' },
      { label: 'billing', icon: <BookIcon />, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <BriefcaseIcon />, url: '/products' },
      { label: 'customers', icon: <BriefcaseIcon />, url: '/products' },
    ],
  },
];

export default Sublinks;