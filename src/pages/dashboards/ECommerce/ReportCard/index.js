import React from 'react';
import StaticsGraph from './StaticsGraph';
import AppCard from '@crema/core/AppCard';
import {ArrowUp, ArrowDown} from 'react-bootstrap-icons';
import styles from './index.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const ReportCard = ({data}) => {
  return (
    <AppCard className='overflow-hidden' heightFull>
      <div className='d-flex'>
        <div className={clsx(styles.reportContent, 'flex-grow-1')}>
          <h3>{data.value}</h3>
          <p>{data.type}</p>
        </div>
        <div className={styles.reChartContainer}>
          <StaticsGraph
            id={data.id}
            graphData={data.graphData}
            growth={data.growth}
            strokeColor={data.strokeColor}
          />
          <div
            className={clsx(
              styles.reChartAction,
              'd-flex align-items-center justify-content-center',
            )}
            style={{color: data.strokeColor}}>
            {data.growth > 0 ? (
              <ArrowUp color={data.strokeColor} />
            ) : (
              <ArrowDown color={data.strokeColor} />
            )}
            {data.growth}
          </div>
        </div>
      </div>
    </AppCard>
  );
};

export default ReportCard;

ReportCard.propTypes = {
  data: PropTypes.object,
};
