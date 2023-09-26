import React from 'react';
import ProductSpecification from './ProductSpecification';
import ProductInfo from './ProductInfo';
import DeliveryInfo from './DeliveryInfo';
import Reviews from './Reviews';
import AvailableOffers from './AvailableOffers';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import clsx from 'clsx';

const ProductView = ({product}) => {
  return (
    <div className='position-relative'>
      <h3 className={styles.productViewTitle}>
        ${product.mrp}
        <span className={styles.lineThrough}>
          ${+product.mrp - +product.discount}
        </span>
      </h3>
      <h4 className={styles.stokeSubtitle}>In stock</h4>
      <p className={clsx(styles.textSec, 'mb-0')}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page looking at its layout. The point of using
        Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here, content here, making it look
        like readable English. Many desktop publishing packages and web page
        editors now use..
      </p>
      <hr style={{marginTop: 15, marginBottom: 15}} />
      <AvailableOffers />
      <DeliveryInfo />
      <hr style={{marginTop: 15, marginBottom: 15}} />
      <ProductSpecification />
      <hr style={{marginTop: 15, marginBottom: 15}} />
      <ProductInfo />
      <hr style={{marginTop: 15, marginBottom: 15}} />
      <Reviews />
    </div>
  );
};

export default ProductView;

ProductView.propTypes = {
  product: PropTypes.object,
};
