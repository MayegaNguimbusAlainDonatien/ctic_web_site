import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {Rating} from 'react-simple-star-rating';
import styles from './index.module.scss';

const Header = ({product}) => {
  const shareUrl = 'http://crema-react.firebaseapp.com/';

  return (
    <div
      className={clsx(
        styles.productDetailHeader,
        'position-relative d-flex align-items-center',
      )}>
      <div
        className={clsx(styles.productDetailHeaderInfo, 'position-relative')}>
        <h3>{product.title}</h3>
        <div className='d-flex align-items-center flex-wrap'>
          <Rating initialValue={product.rating} transition size={18} />
          <span className={styles.productReviewText}>
            {product.reviews + ' reviews'}
          </span>

          <span>
            SKU : <span className={styles.productMbText}>MB023</span>
          </span>
        </div>
      </div>

      <div className={clsx(styles.productDetailSocial, 'd-flex')}>
        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        <FacebookShareButton url={shareUrl} className={styles.headerIcon}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  product: PropTypes.object,
};
