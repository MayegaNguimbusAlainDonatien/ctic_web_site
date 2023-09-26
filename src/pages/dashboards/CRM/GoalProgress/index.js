import React from 'react';
import GoalProgressGraph from './GoalProgressGraph';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import clsx from 'clsx';
import styles from './index.module.scss';
import {useIntl} from 'react-intl';

const GoalProgress = ({progressGraphData}) => {
  const {messages} = useIntl();
  return (
    <AppCard heightFull title={messages['dashboard.goalProgress']}>
      <GoalProgressGraph progressGraphData={progressGraphData} />
      <div className='mt-3 mb-1 ps-2 pe-2 d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center'>
          <span
            className={clsx(styles.dot, 'd-block me-2')}
            style={{backgroundColor: '#0A8FDC'}}
          />
          <p className='mb-0'>
            <IntlMessages id='dashboard.inProgress' />
          </p>
        </div>
        <div className='d-flex align-items-center'>
          <span
            className={clsx(styles.dot, 'd-block me-2')}
            style={{backgroundColor: 'rgb(244, 67, 54)'}}
          />
          <p className='mb-0'>
            <IntlMessages id='common.actual' />
          </p>
        </div>
      </div>
    </AppCard>
  );
};

export default GoalProgress;

GoalProgress.defaultProps = {
  progressGraphData: [],
};

GoalProgress.propTypes = {
  progressGraphData: PropTypes.array,
};
