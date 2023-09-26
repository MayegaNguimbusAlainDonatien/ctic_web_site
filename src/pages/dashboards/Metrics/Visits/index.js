import React, {useState} from 'react';
import AppCard from '@crema/core/AppCard';
import VisitsGraph from './VisitsGraph';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import AppSelect from '@crema/core/AppSelect';
import styles from './index.module.scss'
import clsx from 'clsx'

const Visits = ({data}) => {
  const [graphData, setGraphData] = useState(data.graphData.dataOne);

  const handleWeekChange = (value) => {
    switch (value.target.value) {
      case 'This Week':
        setGraphData(data.graphData.dataTwo);
        break;
      case 'Last Weeks':
        setGraphData(data.graphData.dataOne);
        break;
      case 'Last Month':
        setGraphData(data.graphData.dataThree);
        break;
      default:
        setGraphData(data.graphData.dataOne);
    }
  };

  const {messages} = useIntl();
  return (
    <AppCard
      title={messages['dashboard.visits']}
      action={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleWeekChange}
        />
      }
      
      footer={
        <div className={clsx(styles.VisitsFooter,'d-flex align-tems-center justify-content-between')}>
          <p className='fs-7 mb-0'>
            {messages['common.new']}
            <span className='ms-2 text-primary'>{data.new}</span>
          </p>
          <p className='fs-7 mb-0'>
            {messages['common.returning']}
            <span className='ms-2 text-primary'>{data.returning}</span>
          </p>
        </div>
      }>
      <VisitsGraph data={graphData} />
    </AppCard>
  );
};
export default Visits;

Visits.defaultProps = {
  data: {
    new: 0,
    returning: 0,
    graphData: {
      dataOne: [],
      dataTwo: [],
      dataThree: [],
    },
  },
};

Visits.propTypes = {
  data: PropTypes.object,
};
