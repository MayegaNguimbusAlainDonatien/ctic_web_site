import React from 'react';
import AppCard from '@crema/core/AppCard';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import clsx from "clsx";

const InfoWidget = ({data}) => {
  return (
    <AppCard heightFull cardBodyClass='px-2'>
      <div className='flex-grow-1 d-flex flex-column align-items-center justify-content-center'>
        <div className={styles.infoWidgetThumb}>
          <img src={data.icon} alt='icon' style={{height: 60, width: 60}} />
        </div>
        <div className={clsx(styles.infoWidgetContent, 'text-center overflow-hidden w-100')}>
          <h3 className='text-truncate'>{data.name}</h3>
          <p style={{color: data.color}}>{data.measurement}</p>
        </div>
      </div>
    </AppCard>
  );
};

export default InfoWidget;

InfoWidget.propTypes = {
  data: PropTypes.object,
};
