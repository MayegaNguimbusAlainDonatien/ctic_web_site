import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import clsx from 'clsx';

const CremaCard = (props) => {
  const {data, bgColor, icon} = props;

  return (
    <AppCard heightFull style={{backgroundColor: bgColor}}>
      <div
        className={clsx(
          styles.cremaCardHeader,
          'd-flex align-items-center mt-1',
        )}>
        <div
          className={clsx(styles.cremaUserInfo, 'd-flex align-items-center')}>
          <div className={styles.cremaLogo}>
            <img alt='logo' src={data.image} />
          </div>
          <div className={styles.cremaUserInfoContent}>
            <h4
              className={clsx(
                styles.cremaTitle,
                'text-truncate text-uppercase',
              )}>
              {data.name}
            </h4>
            <p className='text-truncate'>{data.id}</p>
          </div>
        </div>
        <span className={styles.cremaSocialLink}>{icon}</span>
      </div>

      <p className={styles.cremaPara}>{data.desc}</p>
    </AppCard>
  );
};

export default CremaCard;

CremaCard.defaultProps = {
  bgColor: '',
};

CremaCard.propTypes = {
  data: PropTypes.object.isRequired,
  bgColor: PropTypes.string,
  icon: PropTypes.any,
};
