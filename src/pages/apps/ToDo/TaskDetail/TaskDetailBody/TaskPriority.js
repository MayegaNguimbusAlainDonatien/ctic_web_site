import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {onUpdateSelectedTask} from '../../../../../redux/actions';
import {Form} from "react-bootstrap";
import styles from '../index.module.scss';

const TaskPriority = ({selectedTask}) => {
  const dispatch = useDispatch();
  const priorityList = useSelector(({todoApp}) => todoApp.priorityList);

  const onChangePriority = (value) => {
    selectedTask.priority = priorityList.find(
      (priority) => priority.type === value,
    );
    dispatch(onUpdateSelectedTask(selectedTask));
  };

  const {messages} = useIntl();
  return (
    <Form.Select
      className={styles.todoDetailSelectBox}
      defaultValue={selectedTask.priority?.type}
      placeholder={messages['common.priority']}
      onChange={(value) => onChangePriority(value)}>
      {priorityList.map((priority) => {
        return (
          <option className={styles.todoDetailSelectOption} key={priority.id} value={priority.type}>
            {priority.name}
          </option>
        );
      })}
    </Form.Select>
  );
};

export default TaskPriority;

TaskPriority.propTypes = {
  selectedTask: PropTypes.object.isRequired,
};
