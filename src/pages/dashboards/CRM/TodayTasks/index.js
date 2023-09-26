import React from 'react';
import TaskList from './TaskList';
// import DateSelector from './DateSelector';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import styles from './index.module.scss';
import {useIntl} from 'react-intl';
import clsx from 'clsx';
import IntlMessages from '@crema/utility/IntlMessages';
import AppScrollbar from '@crema/core/AppScrollbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const TodayTasks = (props) => {
  const {todayTaskData} = props;
  const {messages} = useIntl();

  return (
    <AppCard
      title={messages['dashboard.todayTasks']}
      heightFull
      action={
        <div className={clsx(styles.action, 'd-flex')}>
          <a href='#' className='text-danger text-decoration-none'>
            <IntlMessages id='common.createTask' />
          </a>
          <a href='#' className='text-danger text-decoration-none'>
            <IntlMessages id='common.viewAll' />
          </a>
        </div>
      }>
      <AppRowContainer>
        <Col xs={12} md={6} xxl={7}>
          <AppScrollbar className={styles.todayTaskScrollbar}>
            <TaskList todayTaskData={todayTaskData} />
          </AppScrollbar>
        </Col>

        <Col xs={12} md={6} xxl={5}>
          <div className={clsx(styles.dateCalendar, 'd-flex')}>
            <Calendar />
          </div>
        </Col>
      </AppRowContainer>
    </AppCard>
  );
};

export default TodayTasks;

TodayTasks.defaultProps = {
  todayTaskData: [],
};

TodayTasks.propTypes = {
  todayTaskData: PropTypes.array,
};
