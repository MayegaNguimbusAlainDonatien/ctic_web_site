import React from 'react';
import {useDispatch} from 'react-redux';
import {onUpdateSelectedTask} from '../../../../../redux/actions';
import {useHistory} from 'react-router-dom';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppsStarredIcon from '@crema/core/AppsStarredIcon';
import StatusToggleButton from './StatusToggleButton';
import AppsDeleteIcon from '@crema/core/AppsDeleteIcon';
import {BiArrowBack} from 'react-icons/bi';
import AppIconBtn from "@crema/core/AppIconBtn";
import styles from '../index.module.scss';

const TaskDetailHeader = (props) => {
  const {selectedTask} = props;
  const dispatch = useDispatch();

  const history = useHistory();

  const onClickBackButton = () => {
    history.goBack();
  };

  const onChangeStarred = (checked) => {
    const task = selectedTask;
    task.isStarred = checked;
    dispatch(onUpdateSelectedTask(task));
  };

  const onDeleteTask = () => {
    const task = selectedTask;
    task.folderValue = 126;
    dispatch(onUpdateSelectedTask(task));
    history.goBack();
  };

  return (
    <>
      <AppIconBtn
        smallBtn
        className={styles.todoDetailArrow}
        title={<IntlMessages id='common.back' />}
        onClick={onClickBackButton}
      >
        <BiArrowBack />
      </AppIconBtn>

      <StatusToggleButton selectedTask={selectedTask} />

      <span className={styles.todoDetailHeaderStarIcon}>
        <AppsStarredIcon smallBtn item={selectedTask} onChange={onChangeStarred} />
      </span>

      <div className={styles.todoDetailHeaderDeleteIcon}>
        <AppsDeleteIcon
          smallBtn
          deleteAction={onDeleteTask}
          deleteTitle={<IntlMessages id='todo.deleteMessage' />}
        />
      </div>
    </>
  );
};

export default TaskDetailHeader;

TaskDetailHeader.propTypes = {
  selectedTask: PropTypes.object.isRequired,
};
