import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import ActiveUsersGraph from './ActiveUsersGraph';
import ExtraRevenueGraph from './ExtraRevenueGraph';
import TrafficRaiseGraph from './TrafficRaiseGraph';
import LessOrdersGraph from './LessOrdersGraph';
import styles from './index.module.scss'
import clsx from 'clsx'
const ComparisonCard = ({
  data,
  text,
  bgColor,
  headingColor,
  valueColor,
  type,
}) => {
  const onGetGraph = () => {
    switch (type) {
      case 'activeUsers':
        return <ActiveUsersGraph data={data.graphData} />;

      case 'extraRevenue':
        return <ExtraRevenueGraph data={data.graphData} />;

      case 'trafficRaise':
        return <TrafficRaiseGraph data={data.graphData} />;

      case 'lessOrders':
        return <LessOrdersGraph data={data.graphData} />;

      default:
        return <ActiveUsersGraph data={data.graphData} />;
    }
  
  };
  console.log(bgColor)
  return (
    <AppCard cardBodyClass='py-0 px-0' className='overflow-hidden'>
      <div className='position-relative'>
        <div className={clsx(styles.comparisonContent,'position-absolute top-0 start-0 px-4')}>
          <p className={clsx(styles.comparisonText,'fw-bold mb-3')} style={{color:headingColor}}>{text}</p>
          <h2 className='fw-bold' style={{color:valueColor}}>{data.value}</h2>
        </div>
        <div className={clsx(styles.comparsionGraph,'pt-3')}>
            {onGetGraph()}
        </div>
      </div>
    </AppCard>
  );
};

export default ComparisonCard

ComparisonCard.propTypes = {
    text: PropTypes.any.isRequired,
    bgColor: PropTypes.string,
    data: PropTypes.object,
    type: PropTypes.string,
    headingColor: PropTypes.string,
    valueColor: PropTypes.string,
  };