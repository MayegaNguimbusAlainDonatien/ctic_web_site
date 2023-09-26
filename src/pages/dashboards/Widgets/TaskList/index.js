import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import {Button} from 'react-bootstrap';
import {AiOutlineClose} from 'react-icons/ai';
import styles from './index.module.scss';
import AppScrollbar from '@crema/core/AppScrollbar';
import AppList from '@crema/core/AppList';

const TaskList = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      className='no-card-space-ltr-rtl'
      title={messages['dashboard.taskList']}
      action={
        <Button className='close-btn'>
          <AiOutlineClose size={20} />
        </Button>
      }>
      <AppScrollbar className={styles.taskListScrollbar}>
        <AppList
          data={data}
          renderItem={(item) => {
            return <TaskItem key={item.id} item={item} />;
          }}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default TaskList;

TaskList.defaultProps = {
  data: [],
};

TaskList.propTypes = {
  data: PropTypes.array,
};
