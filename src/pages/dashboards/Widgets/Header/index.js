import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import {Button} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const Header = () => {
  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      className={clsx(styles.headerImgCard, 'position-relative')}
      title={messages['dashboard.jombie']}>
      <div
        className={clsx(styles.headerImgContent, 'd-flex flex-column h-100')}>
        <p>
          <IntlMessages id='dashboard.jombieContent' />
        </p>

        <div className='d-flex align-items-center'>
          <Button type='primary' className={styles.headerImgBtn}>
            <IntlMessages id='dashboard.getStarted' />
          </Button>
          <Button className={clsx(styles.headerImgBtn, 'btn-white-outline')}>
            <IntlMessages id='dashboard.readMore' />
          </Button>
        </div>
      </div>
    </AppCard>
  );
};

export default Header;
