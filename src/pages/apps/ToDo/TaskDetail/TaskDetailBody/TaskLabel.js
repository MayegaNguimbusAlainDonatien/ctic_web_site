import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onUpdateSelectedTask} from '../../../../../redux/actions';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {Form} from "react-bootstrap";
import styles from "../index.module.scss";

const TaskLabel = ({selectedTask}) => {
  const dispatch = useDispatch();
  const labelList = useSelector(({todoApp}) => todoApp.labelList);

  const onChangePriority = (value) => {
    selectedTask.label = labelList.filter((label) => value.includes(label.id));
    dispatch(onUpdateSelectedTask(selectedTask));
  };

  const {messages} = useIntl();
  return (
    <Form.Select
      className={styles.todoDetailSelectBox}
      placeholder={messages['common.label']}
      maxTagCount={2}
      style={{minWidth: 100}}
      mode='multiple'
      defaultValue={selectedTask.label.map((label) => label.id)}
      onChange={onChangePriority}>
      {labelList.map((label) => {
        return (
          <option className={styles.todoDetailSelectOption} value={label.id} key={label.id}>
            {label.name}
          </option>
        );
      })}
    </Form.Select>
  );
};

export default TaskLabel;

TaskLabel.propTypes = {
  selectedTask: PropTypes.object.isRequired,
};
