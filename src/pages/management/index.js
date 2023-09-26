import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

export const servicesConfig = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/admin/management',
    component: React.lazy(() => import('./params/index')),
  },
];
