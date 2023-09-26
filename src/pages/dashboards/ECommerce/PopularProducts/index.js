import React from 'react';
import AppCard from '@crema/core/AppCard';
import ProductCell from './ProductCell';
import styles from './index.module.scss';
import {ListGroup} from 'react-bootstrap';
import PropTypes from 'prop-types';
import AppScrollbar from '@crema/core/AppScrollbar';
import {useIntl} from 'react-intl';

const PopularProducts = ({popularProducts}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      cardBodyClass='px-0'
      className='no-card-space-ltr-rtl'
      title={messages['eCommerce.popularProducts']}>
      <AppScrollbar className={styles.popularProductScrollbar}>
        <ListGroup className={styles.popularList}>
          {popularProducts.map((data, index) => (
            <ProductCell key={'product-' + index} data={data} />
          ))}
        </ListGroup>
      </AppScrollbar>
    </AppCard>
  );
};

export default PopularProducts;

PopularProducts.propTypes = {
  popularProducts: PropTypes.array,
};
