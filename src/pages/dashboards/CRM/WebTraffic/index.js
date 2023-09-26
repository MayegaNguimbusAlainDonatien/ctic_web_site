import React from 'react';
import WebTrafficGraph from './WebTrafficGraph';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import {useIntl} from 'react-intl';
import IntlMessages from '@crema/utility/IntlMessages';
import clsx from 'clsx';

const WebTraffic = ({websiteTrafficData}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className={styles.webTrafficCard}
      title={messages['dashboard.websiteTraffic']}>
      <WebTrafficGraph websiteTrafficData={websiteTrafficData} />
      <div className='d-flex justify-content-between mb-1 pt-4'>
        <div className={styles.webTrafficItem}>
          <h4 style={{color: '#ff4d4f'}}>1,265</h4>
          <p className='mb-0'>
            <IntlMessages id='common.subscribers' />
          </p>
        </div>
        <div className={styles.webTrafficItem}>
          <h4 style={{color: 'rgb(115, 115, 115)'}}>2021</h4>
        </div>
        <div className={styles.webTrafficItem}>
          <h4 style={{color: '#69c0ff'}}>12,432</h4>
          <p className='mb-0'>
            <IntlMessages id='common.newUsers' />
          </p>
        </div>
      </div>
    </AppCard>
  );
};

export default WebTraffic;

WebTraffic.defaultProps = {
  websiteTrafficData: [],
};

WebTraffic.propTypes = {
  websiteTrafficData: PropTypes.array,
};
