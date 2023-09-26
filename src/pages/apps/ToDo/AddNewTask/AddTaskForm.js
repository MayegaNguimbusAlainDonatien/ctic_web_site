import React, {useState} from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import {useDispatch, useSelector} from 'react-redux';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import AppRowContainer from '@crema/core/AppRowContainer';
import styles from './index.module.scss';
import {onCreateTask} from '../../../../redux/actions';
import moment from 'moment';
import {useAuthUser} from '@crema/utility/AuthHooks';
import {Button, Col, Form, Image} from "react-bootstrap";
import clsx from "clsx";

//
// const DatePicker = require("react-bootstrap-date-picker");
const AddTaskForm = ({onCloseAddTask, selectedDate}) => {
  const labelList = useSelector(({todoApp}) => todoApp.labelList);
  const [validated, setValidated] = useState(false);

  const priorityList = useSelector(({todoApp}) => todoApp.priorityList);

  const staffList = useSelector(({todoApp}) => todoApp.staffList);
  const {user} = useAuthUser();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const staff = staffList.find((staff) => staff.id === +values.staffList);

    const priority = priorityList.find(
      (label) => +values.priorityList === label.id,
    );
    const label = labelList.filter((label) => +values.labelList === label.id);

    const newTask = {
      ...values,
      id: Math.floor(Math.random() * 1000000),
      isStarred: false,
      hasAttachments: false,
      sentAt: '10.30am',
      isRead: true,
      folderValue: 120,
      createdBy: {
        name: user.displayName ? user.displayName : 'user',
        image: user.photoURL ? user.photoURL : '/assets/images/dummy2.jpg',
      },
      scheduleDate: moment(values.scheduleDate).format('lll'),
      assignedTo: staff,
      createdOn: moment().format('ll'),
      status: 1,
      comments: [],
      label: label,
      priority: priority,
    };
    console.log(newTask);
    dispatch(onCreateTask(newTask));
    onCloseAddTask();
    setValidated(true);
  };


  const {messages} = useIntl();

  return (
    <Form noValidate validated={validated}
      className={styles.todoAddTaskForm}
      name='basic'
      initialValues={{
        scheduleDate: selectedDate ? moment(selectedDate, 'YYYY-MM-DD') : '',
      }}
          onSubmit={onFinish}>
      <div className={styles.todoModalContent}>
        <Form.Group className={styles.formGroup} controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            name='title'
            className={styles.todoAddTaskInput}
            placeholder={messages['todo.taskTitle']}
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <AppRowContainer>
          <Col xs={12} sm={6} md={3}>
            <Form.Group className={styles.formGroup}>
              <Form.Select name='staffList' placeholder={messages['common.staff']}>
                {staffList.map((staff) => {
                  return (
                    <option value={staff.id} key={staff.id}>
                      <div className={styles.todoSelectRow}>
                        {staff.image ? (
                            <Image className={styles.todoSelectAvatar} src={staff.image} roundedCircle />
                        ) : (
                          <span className={styles.todoSelectAvatar}>
                            {staff.name.toUpperCase()}
                          </span>
                        )}
                        <span className={clsx(styles.todoSelectName, 'text-truncate')}>
                          {staff.name}
                        </span>
                      </div>
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Form.Group className={styles.formGroup} name='scheduleDate'>
              {/*<DatePicker className={styles.addTaskFormDate} />*/}
            </Form.Group>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Form.Group className={styles.formGroup} name='priorityList'>
              <Form.Select placeholder={messages['common.priority']}>
                {priorityList.map((priority) => {
                  return (
                    <option value={priority.id} key={priority.id}>
                      {priority.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Form.Group className={styles.formGroup} name='labelList'>
              <Form.Select
                placeholder={messages['common.label']}
                mode='multiple'
                maxTagCount={2}>
                {labelList.map((label) => {
                  return (
                    <option value={label.id} key={label.id}>
                      {label.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Col>
        </AppRowContainer>

        <Form.Group className={styles.formGroup} name='description'>
          <Form.Control as="textarea"
                        placeholder={messages['common.description']}
                        autoSize={{minRows: 3, maxRows: 5}} />
        </Form.Group>
      </div>

      <div className={styles.todoModalFooter}>
        <Button className={styles.todoModalBtn} type='primary' htmlType='submit'>
          <IntlMessages id='common.save' />
        </Button>
      </div>
    </Form>
  );
};

export default AddTaskForm;

AddTaskForm.propTypes = {
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func,
  taskLabels: PropTypes.array.isRequired,
  setTaskLabels: PropTypes.func,
  isSubmitting: PropTypes.bool,
  onCloseAddTask: PropTypes.func,
  selectedDate: PropTypes.any,
};
