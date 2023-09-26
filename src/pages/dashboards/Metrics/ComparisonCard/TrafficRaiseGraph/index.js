import React from 'react';
import {Line, LineChart, ResponsiveContainer} from 'recharts';
import PropTypes from 'prop-types';

const TrafficRaiseGraph = ({data}) => {
  return (
    <div
      className='position-relative'
      style={{
        '& .containerGraph': {
          width: '100%',
        },
      }}>
      <ResponsiveContainer height={200} className='containerGraph'>
        <LineChart data={data}>
          <Line
            type='monotone'
            dataKey='traffic'
            stroke='#4299E1'
            strokeWidth={4}
            dot={{r: 4}}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrafficRaiseGraph;

TrafficRaiseGraph.defaultProps = {
  data: [],
};

TrafficRaiseGraph.propTypes = {
  data: PropTypes.array,
};
