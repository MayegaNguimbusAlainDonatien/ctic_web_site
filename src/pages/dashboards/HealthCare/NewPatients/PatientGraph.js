import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const PatientGraph = ({data}) => {
  return (
    <ResponsiveContainer width='100%' height={230}>
      <AreaChart data={data} margin={{top: 50, right: 0, left: 0, bottom: 0}}>
        <defs>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop
              className={styles.patientsGraphColor}
              offset='5%'
              stopOpacity={0.1}
            />
            <stop
              offset='95%'
              className={styles.patientsGraphColor}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <Tooltip labelStyle={{color: 'black'}} />
        <CartesianGrid
          strokeDasharray='2 10'
          horizontal={false}
          vertical={false}
        />
        <Area
          type='monotone'
          dataKey='number'
          className={styles.patientsGraphColor}
          strokeWidth={3}
          fillOpacity={1}
          fill='url(#colorPv)'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PatientGraph;

PatientGraph.defaultProps = {
  data: [],
};

PatientGraph.propTypes = {
  data: PropTypes.array,
};
