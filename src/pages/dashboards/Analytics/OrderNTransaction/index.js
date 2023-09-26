import React from 'react';
import AppCard from '@crema/core/AppCard';
import TransactionTable from './TransactionTable';
import AppSelect from '@crema/core/AppSelect';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import styles from "./index.module.scss";

const OrderNTransaction = ({transactionData}) => {
  const handleSelectionType = (data) => {
    console.log('row: ', data);
  };
  const {messages} = useIntl();
  return (
    <AppCard
      cardBodyClass='px-0'
      heightFull
      title={messages['dashboard.analytics.ordersTransaction']}
      action={
        <AppSelect
          selectBoxClass={styles.appSelectBox}
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleSelectionType}
        />
      }>
      <TransactionTable transactionData={transactionData} />
    </AppCard>
  );
};

export default OrderNTransaction;

OrderNTransaction.propTypes = {
  transactionData: PropTypes.array,
};
