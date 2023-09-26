import React from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import IncomeGraph from './IncomeGraph';
import WebTrafficGraph from './WebTrafficGraph';
import RevenueGrowthGraph from './RevenueGrowthGraph';
import AppCard from '@crema/core/AppCard';

const StatsCardWithGraph = ({
  data,
  text,
  bgColor,
  headingColor,
  valueColor,
  type,
}) => {
  const onGetGraph = () => {
    switch (type) {
      case 'incomeGraph':
        return <IncomeGraph data={data.graphData} />;

      case 'trafficGraph':
        return <WebTrafficGraph data={data.graphData} />;

      case 'revenueGrowth':
        return <RevenueGrowthGraph data={data.graphData} />;

      default:
        return <IncomeGraph data={data.graphData} />;
    }
  };
  console.log(text, bgColor, headingColor, valueColor);

  return (
    <AppCard cardBodyClass='py-0' className='overflow-hidden'>
      <div className='position-relattive'>
        <div className='position-absolute top-0 start-0 mx-3 mt-3'>
          <p className='fw-bold mb-4' style={{color: headingColor}}>
            {text}
          </p>
          <h2 className='fw-bold' style={{color: valueColor}}>
            {data.value}
          </h2>
        </div>
        <div className={styles.StatsCardGraph}>{onGetGraph()}</div>
      </div>
    </AppCard>
  );
};
export default StatsCardWithGraph;
StatsCardWithGraph.propTypes = {
  text: PropTypes.any.isRequired,
  bgColor: PropTypes.string,
  data: PropTypes.object,
  type: PropTypes.string,
  headingColor: PropTypes.string,
  valueColor: PropTypes.string,
};
