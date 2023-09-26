import React from 'react';
import {useHistory, withRouter} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Priority from './Priority';
import AppsStarredIcon from '@crema/core/AppsStarredIcon';
import styles from './index.module.scss';
import moment from 'moment';
import {AiOutlineCheck} from 'react-icons/ai';
import {Image} from "react-bootstrap";

const TaskListItemMobile = ({
  task,
  checkedTasks,
  onChangeCheckedTasks,
  match,
  onChangeStarred,
}) => {
  const history = useHistory();

  const onViewTaskDetail = (task) => {
    history.push(`/apps/todo/${match.params.name}/${task.id}`);
  };

  return (
    <div
      key={task.id}
      className={clsx(styles.todoListMobileItem, checkedTasks.includes(task.id) ? styles.checked : '',)}
      onClick={() => onViewTaskDetail(task)}>
      <div className={styles.todoListMobileMainContent}>
        <div
          className={clsx(styles.todoListMobileView, checkedTasks.includes(task.id) ? styles.checked : '', )}
          onClick={(event) => {
            event.stopPropagation();
            onChangeCheckedTasks(!checkedTasks.includes(task.id), task.id);
          }}>
          {checkedTasks.includes(task.id) ? (
            <AiOutlineCheck />
          ) : (
            <Image  className={styles.todoListMobileAvatar}
                    src={task?.assignedTo?.image} roundedCircle />
          )}
        </div>

        <div className={styles.todoListMobileContent}>
          <span className={styles.todoListMobileTitle}>
            <span className='text-truncate'>{task.title}</span>

            {task.priority ? (
              <span className={styles.todoListMobilePriority}>
                <Priority priority={task.priority} />
              </span>
            ) : null}
          </span>
          <p className='text-truncate'>{task.content}</p>
        </div>
      </div>

      <div className={styles.todoListMobileAction}>
        <span className={styles.todoListMobileDate}>
          {moment(task.scheduleDate).format('HH:mm A')}
        </span>
        <span
          className={styles.todoListStarMobile}
          onClick={(event) => event.stopPropagation()}>
          <AppsStarredIcon smallBtn item={task} onChange={onChangeStarred} />
        </span>
      </div>
    </div>
  );
};

export default withRouter(TaskListItemMobile);

TaskListItemMobile.defaultProps = {
  checkedTasks: [],
};

TaskListItemMobile.propTypes = {
  task: PropTypes.object.isRequired,
  checkedTasks: PropTypes.array,
  onChangeStarred: PropTypes.func,
  match: PropTypes.object,
  onChangeCheckedTasks: PropTypes.func,
};
