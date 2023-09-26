import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import {Button} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const TotalBalance = ({totalBalanceData}) => {
  console.log('totalBalanceData:', totalBalanceData);

  const {messages} = useIntl();

  return (
    <>
      <h2 className='fs-6 fw-bold text-uppercase mb-3'>
        {messages['dashboard.totalBalance']}
      </h2>
      <AppCard>
        <div className={styles.totalBalance}>
          <div
            className={clsx(
              styles.totalBalanceHeader,
              'd-flex justify-content-between flex-wrap'
            )}>
            <div className='d-flex flex-column pd-0'>
              <h3 className='fs-5 mb-0'>${totalBalanceData.balance}</h3>
              <span className='text-muted'>
                {messages['dashboard.avlBalance']}
              </span>
            </div>
            <div className='d-flex flex-row bd-highlight'>
              <Button
                className={clsx(
                  styles.btnTotalBalance,
                  'fw-bold px-4 text-uppercase text-primary text-center me-1 ms-1',
                )}
                size='sm'
                variant='light'>
                Send
              </Button>
              <Button
                className={clsx(
                  'fw-bold text-uppercase',
                  styles.btnTotalBalance,
                )}
                size='sm'
                variant='primary'>
                Receive
              </Button>
            </div>
          </div>

          <p className='text-muted fs-7 mb-3'>
            {messages['dashboard.buyCurrency']}
          </p>
          <div className='d-flex justify-content-between pd-0'>
            {totalBalanceData.coins.map((coin) => (
              <div className='d-flex flex-column p-0' key={coin.id}>
                <h3 className='text-primary fs-5  mb-0'>{coin.value}</h3>
                <p className='fs-7 text-muted mb-1'>{coin.name}</p>
              </div>
            ))}
          </div>
        </div>
      </AppCard>
    </>
  );
};

export default TotalBalance;

TotalBalance.defaultProps = {
  totalBalanceData: {
    balance: '',
    coins: [],
  },
};

TotalBalance.propTypes = {
  totalBalanceData: PropTypes.object,
};
