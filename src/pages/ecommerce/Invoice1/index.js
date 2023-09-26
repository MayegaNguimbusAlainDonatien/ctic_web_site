import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import Header from './Header';
import InvoiceTable from './InvoiceTable';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import AppAnimateGroup from '@crema/core/AppAnimateGroup';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import clsx from 'clsx';

const Invoice1 = () => {
  return (
    <AppAnimateGroup type='bottom'>
      <AppPageMetadata title='Invoices' />
      <div
        className={clsx(
          styles.invoice,
          'd-flex flex-column align-items-center',
        )}
        key='invoice1'>
        <div className={clsx(styles.invoiceContainer, 'w-100')}>
          <AppCard className={clsx(styles.invoiceCard, 'no-card-space')}>
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

export default Invoice1;
