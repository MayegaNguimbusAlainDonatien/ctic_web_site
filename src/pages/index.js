import {errorPagesConfigs} from './errorPages';
import {authRouteConfig} from './auth';
import {initialUrl} from '../shared/constants/AppConst';
import {Redirect} from 'react-router-dom';
import Error403 from './errorPages/Error403';
import React from 'react';
import {samplePagesConfigs} from './sample';
import {appsConfig} from './apps';
import {dashBoardConfigs} from './dashboards';
import {componentConfigs} from './components';
import {thirdPartyConfigs} from './thirdParty';
import {extraPagesConfigs} from './extraPages';
import {userListPageConfigs} from './userList';
import {userPagesConfig} from './userPages';
import {ecommerceConfig} from './ecommerce';
import { servicesConfig } from './management';

const authorizedStructure = {
  fallbackPath: '/signin',
  unAuthorizedComponent: <Error403 />,
  routes: [
    ...samplePagesConfigs,
    ...dashBoardConfigs,
    ...appsConfig,
    ...componentConfigs,
    ...thirdPartyConfigs,
    ...extraPagesConfigs,
    ...errorPagesConfigs,
    ...userListPageConfigs,
    ...userPagesConfig,
    ...ecommerceConfig,
    ...servicesConfig,
  ],
};

const unAuthorizedStructure = {
  fallbackPath: initialUrl,
  routes: authRouteConfig,
};

const anonymousStructure = {
  routes: errorPagesConfigs.concat([
    {
      path: '/',
      exact: true,
      component: () => <Redirect to={initialUrl} />,
    },
  ]),
};

export {authorizedStructure, unAuthorizedStructure, anonymousStructure};
