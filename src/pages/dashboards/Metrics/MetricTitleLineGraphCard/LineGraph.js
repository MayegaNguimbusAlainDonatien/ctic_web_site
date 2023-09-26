import React from 'react';
import {Line, LineChart} from 'recharts';
import PropTypes from 'prop-types';


const LineGraph = (props) => {
  const {data, graphColor} = props;

  return (
    <div className='ml-auto mb-2'>
      <LineChart className='lineChart' width={300} height={40} data={data}>
        <Line
          type='monotone'
          dataKey='value'
          stroke={graphColor}
          strokeWidth={5}
          dot={false}
        />
      </LineChart>

      <LineChart width={300} height={40} data={data}>
        <Line
          type='monotone'
          dataKey='value'
          stroke={graphColor}
          strokeWidth={5}
          dot={false}
          strokeDasharray='5 5'
        />
      </LineChart>
      </div>
  );
};

export default LineGraph;

LineGraph.defaultProps = {
  data: [],
  graphColor: '',
};

LineGraph.propTypes = {
  data: PropTypes.array,
  graphColor: PropTypes.string,
};