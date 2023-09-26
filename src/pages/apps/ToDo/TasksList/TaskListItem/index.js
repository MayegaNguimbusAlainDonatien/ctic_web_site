import React from 'react';
import {useHistory, withRouter} from 'react-router-dom';
import IntlMessages from '@crema/utility/IntlMessages';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Labels from './Labels';
import Priority from './Priority';
import AppsStarredIcon from '@crema/core/AppsStarredIcon';
import {AiOutlineDelete} from 'react-icons/ai';
import {MdLabelOutline} from 'react-icons/md';
import {onUpdateSelectedTask} from '../../../../../redux/actions';
import {useDispatch} from 'react-redux';
import {Form, Image} from "react-bootstrap";
import AppIconBtn from "@crema/core/AppIconBtn";
import styles from '../index.module.scss';

const TaskListItem = ({
  task,
  onChangeCheckedTasks,
  checkedTasks,
  match,
  onChangeStarred,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onViewTaskDetail = (task) => {
    history.push(`/apps/todo/${match.params.name}/${task.id}`);
  };

  const onDeleteTask = () => {
    task.folderValue = 126;
    dispatch(onUpdateSelectedTask(task));
  };

  return (
    <div
      key={task.id}
      className={clsx(styles.todoListItem, checkedTasks.includes(task.id) ? styles.checked : '',)}
      onClick={() => onViewTaskDetail(task)}>
      <div className={styles.todoListItemLeft}>
        <span
          className={styles.todoListCheckboxView}
          onClick={(event) => event.stopPropagation()}>
          <Form.Check
            checked={checkedTasks.includes(task.id)}
            onChange={(event) => onChangeCheckedTasks(event, task.id)}
            color='primary'
          />
        </span>

        <div className={styles.todoListImgView}>
          <span
            className={styles.todoListStarView}
            onClick={(event) => event.stopPropagation()}>
            <AppsStarredIcon smallBtn item={task} onChange={onChangeStarred} />
          </span>
          <span className={styles.todoListImg}>
            <Image src={task?.assignedTo?.image} roundedCircle />
          </span>
        </div>

        <span className={clsx(styles.todoListTitle, 'text-truncate')}>{task.title}</span>

        {task.priority ? (
          <span className={styles.todoListItemHide}>
            <Priority priority={task.priority} />
          </span>
        ) : null}
      </div>

      <div className={styles.todoListItemRight}>
        {task.label ? <Labels labels={task.label} /> : null}

        <div className={styles.todoListItemRightContent}>
          <span className={clsx(styles.todoListItemHide, styles.todoListScheduleDate, 'text-truncate')} >
            <IntlMessages id='todo.scheduleFor' /> {task.scheduleDate}
          </span>
        </div>

        <div className={styles.todoListItemAction}>
            <AppIconBtn
              smallBtn
              onClick={onDeleteTask}
              title={<IntlMessages id='common.delete' />}
            >
              <AiOutlineDelete />
            </AppIconBtn>
            <AppIconBtn
              smallBtn
              title={<IntlMessages id='common.label' />}
            >
              <MdLabelOutline />
            </AppIconBtn>
        </div>
      </div>
    </div>
  );
};

export default withRouter(TaskListItem);

TaskListItem.defaultProps = {
  checkedTasks: [],
};

TaskListItem.propTypes = {
  task: PropTypes.object.isRequired,
  onChangeCheckedTasks: PropTypes.func,
  checkedTasks: PropTypes.array,
  onChangeStarred: PropTypes.func,
  match: PropTypes.object,
};
