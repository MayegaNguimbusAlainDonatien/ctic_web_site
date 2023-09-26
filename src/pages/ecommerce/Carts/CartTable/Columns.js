import React from 'react';
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineCloseCircle,
} from 'react-icons/ai';
import styles from '../index.module.scss';
import clsx from 'clsx';

const Columns = (onIncrement, onDecrement, onRemoveItem) => [
  {
    title: 'Product',
    dataIndex: 'image',
    key: 'image',
    render: (item, product) => (
      <div className='d-flex align-items-center'>
        <img className={styles.Avatar} src={product.image} />
        <div className={styles.cartUserInfo}>
          <h3 className={clsx(styles.heading, 'text-truncate')}>
            {product.title}
          </h3>
          <p>Brand: {product.brand}</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Unit Price',
    dataIndex: 'price',
    key: 'price',
    render: (item, product) => <>${+product.mrp - +product.discount}</>,
  },
  {
    title: 'QTY',
    dataIndex: 'count',
    key: 'count',
    render: (count, product) => (
      <div
        className={clsx(
          styles.cartIncDec,
          'd-flex align-items-center justify-content-center',
        )}>
        <AiOutlinePlus
          style={{fontSize: 18, cursor: 'pointer'}}
          onClick={() => onIncrement(product)}
        />
        <span>{count}</span>
        <AiOutlineMinus
          style={{fontSize: 18, cursor: 'pointer'}}
          onClick={() => onDecrement(product)}
        />
      </div>
    ),
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    render: (item, product) => (
      <>${(+product.mrp - +product.discount) * +product.count}</>
    ),
  },
  {
    title: '',
    dataIndex: 'close',
    key: 'close',
    render: (_, record) => (
      <span onClick={() => onRemoveItem(record)}>
        <AiOutlineCloseCircle style={{fontSize: 18, cursor: 'pointer'}} />
      </span>
    ),
  },
];

export default Columns;
