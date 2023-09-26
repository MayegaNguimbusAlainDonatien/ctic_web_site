import React, {useState} from 'react';
import PropTypes from 'prop-types';
// import {isBreakPointDown} from '@crema/utility/Utils';
import {ListGroup} from 'react-bootstrap';
import clsx from 'clsx';
import styles from './index.module.scss';
// const getData = (data) => {
//   if (isBreakPointDown('xl')) {
//     return data.slice(0, 5);
//   } else {
//     return data.slice(0, 6);
//   }
// };

const TaskList = (props) => {
  const {todayTaskData} = props;
  const [taskList, handleList] = useState(todayTaskData);

  const handleChange = (e, task) => {
    task.isChecked = e.target.checked;
    const list = todayTaskData.map((item) =>
      item.id === task.id ? task : item,
    );
    handleList(list);
  };

  return (
    <ListGroup>
      {taskList.map((task) => {
        return (
          <div key={task.id} className='d-flex align-items-start ps-2 pt-2'>
            <input
              type='checkbox'
              className={clsx(styles.checkbox,'mt-1')}
              checked={task.isChecked}
              onChange={(e) => handleChange(e, task)}
            />
            <div className={styles.taskDetails}>
              <h3>{task.task}</h3>
              <p>{task.date}</p>
            </div>
          </div>
        );
      })}
    </ListGroup>
  );
};

export default TaskList;

TaskList.defaultProps = {
  todayTaskData: [],
};

TaskList.propTypes = {
  todayTaskData: PropTypes.array,
};
