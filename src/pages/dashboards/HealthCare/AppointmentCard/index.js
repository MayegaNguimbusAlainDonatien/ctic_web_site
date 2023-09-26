import React from 'react';
import AppCard from '@crema/core/AppCard';
import Graph from './Graph';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import {AiOutlineArrowUp} from 'react-icons/ai';
import clsx from 'clsx';

const AppointmentCard = ({data}) => {
  return (
    <AppCard style={{backgroundColor: data.color, color: 'white'}}>
      <div className='d-flex'>
        <div
          className={clsx(
            styles.appointmentContentItem,
            'd-flex flex-column w-50',
          )}>
          <span className='mb-2'>
            <img src={data.icon} alt={data.name} />
          </span>
          <p className='text-truncate'>{data.name}</p>
          <h3>{data.value}</h3>
        </div>
        <div
          className={clsx(
            styles.appointmentContentItem,
            'd-flex flex-column w-50 align-items-end',
          )}>
          <div className='d-flex align-items-center'>
            <AiOutlineArrowUp className={styles.appointmentArrowIcon} />
            <span>{data.chartValue}</span>
          </div>
          <h5 className='text-truncate'>{data.chartTime}</h5>
          <Graph data={data.chartData} />
        </div>
      </div>
    </AppCard>
  );
};

export default AppointmentCard;

AppointmentCard.defaultProps = {
  data: {},
};

AppointmentCard.propTypes = {
  data: PropTypes.object,
};
