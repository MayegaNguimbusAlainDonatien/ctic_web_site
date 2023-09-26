import AppCard from '@crema/core/AppCard';
import React from 'react';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import BtcGraph from './BtcGraph';
import styles from './index.module.scss'
import clsx from 'clsx'
const BtcVolumeCurrency = ({data}) => {
  const {messages} = useIntl();
  return (
    <>
      <AppCard
        title={messages['dashboard.btcVolumeByCurency']}
        footer={
          <div className='d-flex flex-row flex-wrap justify-content-between'>
            {data.map((item) => {
              return (
                <>
                  <div className='d-flex flex-column'>
                    <h3
                      className={clsx('mb-0 mx-3 fw-bold text-center',styles.BtcGraphValue)}
                      style={{color: item.color}}>
                      {item.value}
                    </h3>
                    <span className='fs-6 pb-3 text-muted text-center'>
                      {item.name}
                    </span>
                  </div>
                </>
              );
            })}
          </div>
        }>
        <BtcGraph data={data} />
      </AppCard>
    </>
  );
};

export default BtcVolumeCurrency;
BtcVolumeCurrency.defaultProps = {
  data: [],
};

BtcVolumeCurrency.propTypes = {
  data: PropTypes.array,
};
