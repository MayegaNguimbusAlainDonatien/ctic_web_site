import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import {onUpdateSelectedTask} from '../../../../../redux/actions/ToDoApp';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {CgCheckO} from 'react-icons/cg';
import styles from '../index.module.scss';
import clsx from "clsx";

const StatusToggleButton = ({selectedTask}) => {
  const dispatch = useDispatch();

  const onChangeTaskStatus = (status) => {
    const task = selectedTask;
    task.status = status;
    dispatch(onUpdateSelectedTask(task));
  };

  return (
    <>
      {selectedTask.status === 3 ? (
        <span
          className={clsx(styles.todoDetailStatusBtn, styles.bgColor)}
          onClick={() => onChangeTaskStatus(1)}>
          <CgCheckO className={styles.checkIcon} />
          <IntlMessages id='todo.completed' />
        </span>
      ) : (
        <span
          className={styles.todoDetailStatusBtn}
          onClick={() => onChangeTaskStatus(3)}>
          <CgCheckO className={styles.checkIcon} />
          <IntlMessages id='todo.markAsCompleted' />
        </span>
      )}
    </>
  );
};

export default StatusToggleButton;

StatusToggleButton.propTypes = {
  selectedTask: PropTypes.object.isRequired,
};
