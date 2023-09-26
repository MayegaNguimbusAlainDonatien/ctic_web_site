import React from 'react';
import GraphFile from './GraphFile';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import clsx from 'clsx';
import {BsArrowDown, BsArrowUp} from 'react-icons/bs';

const FloatingGraphs = ({data, title}) => {
  return (
    <AppCard className='overflow-hidden'>
      <p
        className={clsx(
          styles.floatingGraphCardTitleValue,
          'text-muted fs-7 text-center',
        )}>
        {title}
      </p>
      <h3 className='d-flex justify-content-center align-items-center'>
        <span className='px-2'>{data.value}</span>
        {data.change > 0 ? (
          <span
            className={clsx(
              styles.floatingGraphCardTitleGrowthValue,
              'd-flex align-items-center text-success mt-1',
            )}>
            <span className='mb-1 ms-1'>
              <BsArrowUp />
            </span>
            <span className='mb-1 ms-1'>{data.change}</span>
          </span>
        ) : (
          <span
            className={clsx(
              styles.floatingGraphCardTitleGrowthValue,
              'd-flex align-items-center text-danger mt-1',
            )}>
            <span className='pb-1'>
              <BsArrowDown />
            </span>
            <span className='mb-1 ms-1'>{data.change}</span>
          </span>
        )}
      </h3>
      <div className={styles.FloatingGraphSpacing}>
        <GraphFile
          data={data.graphData}
          strokeColor={data.strokeColor}
          areaColor={data.areaColor}
        />
      </div>
    </AppCard>
  );
};

export default FloatingGraphs;

FloatingGraphs.defaultProps = {
  title: '',
  data: {
    value: '',
    change: 0,
    strokeColor: '#4299E1',
    areaColor: '#90CDF4',
    graphData: [],
  },
};

FloatingGraphs.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
};
