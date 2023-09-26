import styles from '../../Invoice1/index.module.scss';

const InvoiceColumns = [
  {
    title: 'Item & Description',
    dataIndex: 'item',
    key: 'item',
    render: (item, record) => (
      <>
        <h6>{item}</h6>
        {record.desc ? (
          <p className={styles.invoiceTruncateView}>
            <span className='text-truncate'>{record.desc}</span>
          </p>
        ) : null}
      </>
    ),
  },
  {
    title: 'Assignment Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
];

export default InvoiceColumns;
