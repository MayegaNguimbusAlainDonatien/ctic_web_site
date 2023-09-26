import React from 'react';
import invoiceData from '@crema/services/db/extraPages/invoice/invoiceData';
import InvoiceColumns from './InvoiceColumns';
import AppTable from '@crema/core/AppTableContainer/AppTable';

const InvoiceTable = () => {
  return <AppTable data={invoiceData.products} columns={InvoiceColumns} />;
};

export default InvoiceTable;
