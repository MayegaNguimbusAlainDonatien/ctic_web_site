import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import React from 'react';
import PropTypes from 'prop-types';

const MarketGraph = ({marketGraphData}) => {
  return (
    <div className='position-relative'>
      <ResponsiveContainer height={300} width='100%'>
        <BarChart barSize={8} barGap={3} data={marketGraphData}>
          <XAxis dataKey='month' axisLine={false} tickLine={false} />
          <YAxis hide />
          <CartesianGrid strokeDasharray='3 3' vertical={false} />
          <Bar dataKey='low' stackId='a' fill='#319795' />
          <Bar dataKey='medium' stackId='a' fill='#4C51BF' />
          <Bar dataKey='high' stackId='a' fill='#E53E3E' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketGraph;

MarketGraph.defaultProps = {
  marketGraphData: [],
};

MarketGraph.propTypes = {
  marketGraphData: PropTypes.array,
};
