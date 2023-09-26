import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {useIntl} from 'react-intl';
import BuySellForm from './buySellForm';
import styles from './index.module.scss';
import clsx from 'clsx';

const BuySell = ({buySell}) => {
  const [key, setKey] = useState('Buy');
  const {messages} = useIntl();
  console.log(buySell);
  return (
    <>
      <AppCard
        heightFull
        title={
          <Tabs
            id='buySell'
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className='mb-3 fw-bold'>
            <Tab
              tabClassName={clsx(styles.tab, 'border-0')}
              eventKey='Buy'
              title={messages['common.buy']}
            />
            <Tab
              tabClassName={clsx(styles.tab, 'border-0')}
              eventKey='Sell'
              title={messages['common.sell']}
            />
          </Tabs>
        }
        footerClass={clsx(styles.buySellBuyNow, 'text-danger mb-0')}
        footer={<p>{messages['dashboard.buyNow']}</p>}>
        {key === 'Buy' ? (
          <>
            <BuySellForm formData={buySell.buyData} />
          </>
        ) : (
          <>
            <BuySellForm formData={buySell.sellData} />
          </>
        )}
      </AppCard>
    </>
  );
};

export default BuySell;
BuySell.propTypes = {
  buySell: PropTypes.object,
};
