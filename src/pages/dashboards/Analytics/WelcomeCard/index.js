import React from 'react';
import {useIntl} from 'react-intl';
import AppCard from '@crema/core/AppCard';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

import {HiOutlineMailOpen} from 'react-icons/hi';
import {BiMessageDetail} from 'react-icons/bi';
import {CgFileDocument} from 'react-icons/cg';
import AppScrollbar from '@crema/core/AppScrollbar';
import clsx from 'clsx';

const getWelcomeIcon = (iconType) => {
  switch (iconType) {
    case 'HiOutlineMailOpen':
      return <HiOutlineMailOpen color='#0A8FDC' className='icon' />;
    case 'BiMessageDetail':
      return <BiMessageDetail color='#0A8FDC' className='icon' />;
    default:
      return <CgFileDocument color='#0A8FDC' className='icon' />;
  }
};

const WelcomeCard = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard className={styles.welcomeCard}>
      <div className='flex-grow-1 d-flex flex-column flex-sm-row'>
        <div
          className={clsx(
            styles.welcomeCardContent,
            'd-flex flex-column justify-content-between',
          )}>
          <div className={styles.welcomeCardHeader}>
            <h5>{messages['dashboard.analytics.welcome']}</h5>
            <h3>{messages['dashboard.analytics.eddieMassy']}</h3>
          </div>
          <AppScrollbar scrollToTop className='w-100 h-100 mw-100'>
            <div className={styles.welcomeCardContainer}>
              <div
                className={clsx(
                  styles.welcomeCardRow,
                  'd-flex justify-content-between',
                )}>
                {data.map((item, index) => (
                  <div
                    className={clsx(
                      styles.welcomeCardCol,
                      'd-flex align-items-center',
                    )}
                    key={'box-' + index}>
                    <div className={styles.imgWrapper}>
                      <span className={styles.imgAvatar}>
                        {getWelcomeIcon(item.icon)}
                      </span>
                    </div>
                    <div className={styles.welcomeCardColContent}>
                      <h5 className={styles.specialTitle}>{item.counts}</h5>
                      <p>{item.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AppScrollbar>
        </div>
        <div className={clsx(styles.welcomeImg, 'd-flex align-items-end')}>
          <img alt='welcome' src={'/assets/images/dashboard/welcomImage.svg'} />
        </div>
      </div>
    </AppCard>
  );
};

export default WelcomeCard;

WelcomeCard.defaultProps = {
  data: [],
};

WelcomeCard.propTypes = {
  data: PropTypes.array,
};
