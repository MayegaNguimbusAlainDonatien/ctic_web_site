import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import {Button, Card} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const Introduction = () => {
  return (
    <Card className={clsx(styles.cardBody, 'overflow-hidden')}>
      <div className='d-flex flex-column flex-md-row'>
        <div className={styles.aboutImg}>
          <img
            src={'/assets/images/AboutUs.png'}
            alt='about us'
            title='aboutUs'
          />
        </div>
        <div className={styles.aboutImgContent}>
          <h2>
            <IntlMessages id='extra.aboutUs' />
          </h2>
          <p>
            <IntlMessages id='extra.aboutContent' />
          </p>
          <div
            className={clsx(
              styles.aboutBtnView,
              'd-flex align-items-center flex-wrap',
            )}>
            <Button type='primary' className={styles.btn}>
              <IntlMessages id='extra.contactUs' />
            </Button>
            <Button className={clsx(styles.btn, styles.aboutReadBtn)}>
              <IntlMessages id='dashboard.readMore' />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Introduction;
