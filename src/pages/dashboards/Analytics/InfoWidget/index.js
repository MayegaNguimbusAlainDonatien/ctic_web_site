import React from 'react';
import AppCard from '@crema/core/AppCard';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import clsx from 'clsx';

const InfoWidget = ({data}) => {
  return (
    <AppCard cardBodyClass='px-2' heightFull>
      <div className='flex-grow-1 d-flex flex-column align-items-center justify-content-center'>
        <div className={styles.anaInfoWidgetImg}>
          <img src={data.icon} alt='icon' />
        </div>
        <div
          className={clsx(
            styles.anaInfoWidgetContent,
            'w-100 text-center overflow-hidden',
          )}>
          <h3>{data.count}</h3>
          <p className='text-truncate'>{data.details}</p>
        </div>
      </div>
    </AppCard>
  );
};

export default InfoWidget;

InfoWidget.propTypes = {
  data: PropTypes.object,
};
