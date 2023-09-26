import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import {Image} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';
const CoinCard = (props) => {
  const {icon, bgColor, data, heading} = props;

  return (
    <AppCard>
      <div className='d-flex align-center'>
        <Image
          src={icon}
          style={{
            background: bgColor,            
          }}
          roundedCircle
          className={styles.imgCoins}
        />
        <div className='mb-0 flex-grow-1'>
          <p className='text-muted fs-7 text mb-2 '>{heading}</p>
          <div className='d-flex mb-0 fw-bold '>
            <p className={clsx('fs-6 mb-0',styles.coinsPrice)}>${data.price}</p>
            <span
              className={clsx(
                `fs-6 text mb-0   ${
                  data.increment > 0 ? 'text-success' : 'text-danger  '
                }`,
                styles.coinsIncrement,
              )}>
              {data.increment}%
            </span>
          </div>
        </div>
      </div>
    </AppCard>
  );
};

export default CoinCard;

CoinCard.propTypes = {
  icon: PropTypes.string,
  bgColor: PropTypes.string,
  data: PropTypes.object,
  heading: PropTypes.any.isRequired,
};
