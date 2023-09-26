import React from 'react';
import AppCard from '@crema/core/AppCard';
import ProductCell from './ProductCell';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import {ListGroup} from 'react-bootstrap';

const TopSelling = ({products}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      cardBodyClass='px-0'
      heightFull
      title={messages['dashboard.analytics.topSellingProducts']}
      footer={
        <a href='#' className={styles.footerMore} key={1}>
          {'+12 ' + messages['common.more']}
        </a>
      }>
      <ListGroup>
        {products.map((data, index) => (
          <ProductCell key={index} data={data} />
        ))}
      </ListGroup>
    </AppCard>
  );
};

export default TopSelling;

TopSelling.propTypes = {
  products: PropTypes.array,
};
