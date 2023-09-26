import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import Header from './Header';
import InvoiceTable from './InvoiceTable';
import AppCard from '@crema/core/AppCard';
import styles from '../Invoice1/index.module.scss';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import clsx from 'clsx';

const Invoice2 = () => {
  return (
    <AppAnimateGroup type='bottom'>
      <AppPageMetadata title='Invoice' />
      <div
        className={clsx(
          styles.invoice,
          'd-flex flex-column align-items-center',
        )}
        key='invoice2'>
        <div className={clsx(styles.invoiceContainer, 'w-100')}>
          <AppCard className={clsx(styles.invoiceCard, 'p-0')}>
            <Header />
            <InvoiceTable />
          </AppCard>
          <h4 className={styles.invoiceFooterTitle}>
            <IntlMessages id='invoice.thankYou' />
          </h4>
        </div>
      </div>
    </AppAnimateGroup>
  );
};

export default Invoice2;
