import React from 'react';
import StatGraphs from './StatGraphs';
import AppCard from '@crema/core/AppCard';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import clsx from 'clsx';
import {Button} from 'react-bootstrap';

const StateCard = ({data}) => {
  console.log('log', data.growth);
  return (
    <AppCard className={styles.anaStateCard}>
      <div
        className={clsx(
          styles.anaStateContent,
          'flex-grow-1 d-flex flex-column',
        )}>
        <div className='flex-grow-1 d-flex align-items-center'>
          <Button className={styles.btnIcon}>
            <img alt='icon' src={data.icon} />
          </Button>
          <div className='flex-grow-1 position-relative overflow-hidden'>
            <div className={clsx(styles.anaStateHeader, 'text-truncate w-100')}>
              <h3>{data.value}</h3>
              <span style={{color: '#49BD65'}}>+{data.growth}%</span>
            </div>
            <p>{data.type}</p>
          </div>
        </div>
        <div className={styles.anaStateGraphs}>
          <StatGraphs data={data.graphData} strokeColor={data.strokeColor} />
        </div>
      </div>
    </AppCard>
  );
};

export default StateCard;

StateCard.defaultProps = {};

StateCard.propTypes = {
  data: PropTypes.object,
};
