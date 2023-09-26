import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {onUpdateSelectedTask} from '../../../../../redux/actions';
import {Form} from "react-bootstrap";
import styles from '../index.module.scss';

const TaskStatus = ({selectedTask}) => {
  const statusList = useSelector(({todoApp}) => todoApp.statusList);

  const dispatch = useDispatch();

  const onChangeStatus = (value) => {
    selectedTask.status = value;
    dispatch(onUpdateSelectedTask(selectedTask));
  };

  const {messages} = useIntl();

  return (
    <Form.Select
      className={styles.todoDetailSelectBox}
      onChange={(value) => onChangeStatus(value)}
      value={selectedTask.status}
      placeholder={messages['common.status']}>
      {statusList.map((status) => {
        return (
          <option className={styles.todoDetailSelectOption} key={status.type} value={status.type}>
            {status.name}
          </option>
        );
      })}
    </Form.Select>
  );
};

export default TaskStatus;

TaskStatus.propTypes = {
  selectedTask: PropTypes.object.isRequired,
};
