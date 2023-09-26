import React from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import { useSidebarContext } from '../../../../utility/AppContextProvider/SidebarContextProvider';
import clsx from 'clsx';

const AppLogo = ({ hasSidebarColor }) => {
  const { sidebarColorSet } = useSidebarContext();
  return (
    <div className={clsx(styles.appLogo, 'app-logo')}>
      {hasSidebarColor && sidebarColorSet.mode === 'dark' ? (
        <>
          <img className='d-none d-sm-block' src='/assets/images/logo_ctic/logo_CTIC.png' alt='ctic-logo' />
        </>
      ) : (
        <>
          <img className='d-none d-sm-block' src='/assets/images/logo_ctic/logo_CTIC.png' alt='ctic-logo' />
        </>
      )}
    </div>
  );
};

export default AppLogo;

AppLogo.propTypes = {
  hasSidebarColor: PropTypes.bool,
};
