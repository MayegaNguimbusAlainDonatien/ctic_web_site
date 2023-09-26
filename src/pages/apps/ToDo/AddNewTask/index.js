import React from 'react';
import AddTaskForm from './AddTaskForm';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import AppScrollbar from '@crema/core/AppScrollbar';
import styles from './index.module.scss';
import {Modal} from 'react-bootstrap';

const AddNewTask = ({isAddTaskOpen, selectedDate, onCloseAddTask}) => {
  const {messages} = useIntl();

  return (
    <Modal
      size='lg'
      show={isAddTaskOpen}
      onHide={() => onCloseAddTask(false)}
      className={styles.todoModal}>
      <Modal.Header className={styles.closeBtn} closeButton>
        <Modal.Title>{messages['todo.addNewTask']}</Modal.Title>
      </Modal.Header>
      <AppScrollbar className={styles.todoModalScrollbar}>
        <AddTaskForm
          onCloseAddTask={onCloseAddTask}
          selectedDate={selectedDate}
        />
      </AppScrollbar>
    </Modal>
  );
};

export default AddNewTask;

AddNewTask.propTypes = {
  isAddTaskOpen: PropTypes.bool.isRequired,
  onCloseAddTask: PropTypes.func.isRequired,
  selectedDate: PropTypes.any,
};
