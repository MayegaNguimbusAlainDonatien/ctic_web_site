import React from 'react';
import PropTypes from 'prop-types';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import styles from './AuthWrapper.module.scss';
import AppInfoView from '@crema/core/AppInfoView';
import AppLogo from '@crema/core/AppLayout/components/AppLogo';
import { Card } from 'react-bootstrap';
import clsx from 'clsx';

const AuthWrapper = ({ children }) => {
  return (
    <AppAnimateGroup
      type='scale'
      animateStyle={{ flex: 1 }}
      delay={0}
      interval={10}
      duration={200}>
      <div
        className='flex-grow-1 d-flex flex-column justify-content-center align-items-center'
        key={'wrap'}>
        <Card className={clsx(styles.authCard, 'd-flex flex-row')}>
          <div className={clsx(styles.authMainContent, 'd-flex flex-column')}>
            <div className='mb-3 mb-md-4 d-flex justify-content-center'>
              <AppLogo />
            </div>
            {children}
          </div>
          <div
            className={clsx(
              styles.authWelAction,
              'd-none d-sm-flex flex-sm-column justify-content-sm-center align-items-sm-center',
            )}>
            <div className={styles.authWelContent}>
              <h2 className='fw-bold text-black mb-3'>Welcome to C.T.I.C !</h2>
              <p>
                we are all immigrants, it is the place of birth that changes
              </p>
            </div>
          </div>
        </Card>
      </div>
      <AppInfoView />
    </AppAnimateGroup>
  );
};

export default AuthWrapper;

AuthWrapper.propTypes = {
  children: PropTypes.node,
};
