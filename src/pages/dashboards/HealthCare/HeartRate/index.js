import React from 'react';
import AppCard from '@crema/core/AppCard';
import ViewGraph from './ViewGraph';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import clsx from "clsx";

const HeartRate = ({data}) => {
  return (
    <AppCard
      heightFull
      style={{overflow: 'hidden', backgroundColor: data.color, color: 'white'}}>
      <div className={clsx(styles.heartRate, 'd-flex flex-column justify-content-between h-100')}>
        <h3>{data.title}</h3>
        <div className={clsx(styles.heartGraphView, 'd-flex justify-content-end w-100')}>
          <div className={styles.heartGraphItem}>
            <ViewGraph data={data.graphData} />
          </div>
        </div>
        <div className={styles.unitTitle}>
          {data.measurement}
          <span>{data.unit}</span>
        </div>
      </div>
    </AppCard>
  );
};

export default HeartRate;

HeartRate.defaultProps = {
  data: {},
};

HeartRate.propTypes = {
  data: PropTypes.object,
};
