import React from 'react';
import AppCard from '@crema/core/AppCard';
import LineGraph from './LineGraph';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import styles from './index.module.scss'
import clsx from 'clsx'
const MetricTitleLineGraphCard = ({
  title,
  titleColor,
  valueColor,
  differenceColor,
  bgColor,
  data,
  graphColor,
}) => {
    const {messages}=useIntl()
  return (
    <AppCard style={{backgroundColor:bgColor}} className='overflow-hidden'>
      <h3 style={{color:titleColor}} className='mb-2 fw-bold'>
        {title}
      </h3>
      <div className={clsx(styles.MetricLinegGraphContainer,'d-flex flex-row align-items-center')}>
        <h2 style={{color:valueColor}} className={clsx(styles.MetricLineValue,'fw-bold me-auto mb-0')}>
          {data.value}
        </h2>
        <LineGraph data={data.graphData} graphColor={graphColor} />
      </div>
      <p className='fs-7' style={{color:differenceColor}}>
        <span className='me-1'>{data.difference}</span>
        <span className='me-1'>{messages['dashboard.thisMonth']}</span>
        <span className='me-1'>{data.differencePercent}</span>
      </p>
    </AppCard>
  );
};

export default MetricTitleLineGraphCard;

MetricTitleLineGraphCard.defaultProps = {
  bgColor: '',
  titleColor: '',
  valueColor: '',
  data: {
    value: '',
    difference: '',
    differencePercent: '',
    graphData: [],
  },
  differenceColor: '',
  graphColor: '',
};

MetricTitleLineGraphCard.propTypes = {
  title: PropTypes.any.isRequired,
  bgColor: PropTypes.string,
  titleColor: PropTypes.string,
  valueColor: PropTypes.string,
  data: PropTypes.object,
  differenceColor: PropTypes.string,
  graphColor: PropTypes.string,
};