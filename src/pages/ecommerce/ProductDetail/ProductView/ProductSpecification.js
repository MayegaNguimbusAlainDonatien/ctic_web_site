import React from 'react';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const productSpecification = [
  {
    id: 1,
    title: 'Brand',
    desc: 'JBL',
  },
  {
    id: 2,
    title: 'Model Number',
    desc: 'SH12',
  },
  {
    id: 3,
    title: 'Color',
    desc: 'Red',
  },
  {
    id: 4,
    title: 'Headphone Type',
    desc: 'Wireless over the head',
  },
  {
    id: 5,
    title: 'Inline Remote',
    desc: 'No',
  },
  {
    id: 6,
    title: 'Sales Package',
    desc: '1 SH12 HEADPHONE',
  },
  {
    id: 7,
    title: 'Connectivity',
    desc: 'Bluetooth',
  },
];

const ProductSpecification = () => {
  return (
    <div
      className={clsx(styles.productDetailSpecification, 'position-relative')}>
      <h3 className={styles.productDetailItemTitle}>Specification</h3>
      <AppRowContainer className='mt-0'>
        {productSpecification.map((data) => (
          <div key={data.id}>
            <Col xs={4} className='m-0'>
              <p className={styles.textSec}> {data.title}</p>
            </Col>
            <Col xs={8} className='m-0'>
              <p> {data.desc}</p>
            </Col>
          </div>
        ))}
      </AppRowContainer>
    </div>
  );
};

export default ProductSpecification;
