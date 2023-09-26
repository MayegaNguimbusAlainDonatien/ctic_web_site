import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onUpdateSelectedTask} from '../../../../../redux/actions/ToDoApp';
import moment from 'moment';
import {useAuthUser} from '@crema/utility/AuthHooks';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import Labels from '../../TasksList/TaskListItem/Labels';
import ChangeStaff from './ChangeStaff';
import AssignedStaff from './AssignedStaff';
import DatePicker from './DatePicker';
import TaskStatus from './TaskStatus';
import TaskPriority from './TaskPriority';
import TaskCreatedByInfo from './TaskCreatedByInfo';
import TaskLabel from './TaskLabel';
import {FiSend} from 'react-icons/fi';
import {AiOutlineCheckCircle, AiOutlineEdit} from 'react-icons/ai';
import CommentsList from './CommentsList';
import {Button, Form} from "react-bootstrap";
import AppIconBtn from "@crema/core/AppIconBtn";
import styles from '../index.module.scss';
import clsx from "clsx";

const TaskDetailBody = (props) => {
  const {selectedTask} = props;

  const dispatch = useDispatch();

  const {user} = useAuthUser();

  const staffList = useSelector(({todoApp}) => todoApp.staffList);

  const [isEdit, setEdit] = useState(false);

  const [title, setTitle] = useState(selectedTask.title);
  const [content, setContent] = useState(selectedTask.content);

  const [comment, setComment] = useState('');

  const [scheduleDate, setScheduleDate] = useState(
    moment(selectedTask.scheduleDate).format('YYYY/MM/DD'),
  );

  const [selectedStaff, setStaff] = useState(selectedTask.assignedTo);

  const inputLabel = React.useRef(null);

  const [labelWidth, setLabelWidth] = React.useState(0);

  useEffect(() => {
    setLabelWidth(60);
  }, []);

  const onClickEditButton = () => {
    setEdit(true);
  };

  const onDoneEditing = () => {
    const task = selectedTask;
    task.content = content;
    task.title = title;
    task.scheduleDate = scheduleDate;
    task.assignedTo = selectedStaff;
    dispatch(onUpdateSelectedTask(task));
    console.log('onDoneEditing: ', task);
    setEdit(!isEdit);
  };

  const onAddComments = () => {
    let task = selectedTask;
    task.comments = task.comments.concat({
      comment: comment,
      name: user.displayName ? user.displayName : 'User',
      image: user.photoURL,
      date: moment().format('ll'),
    });
    dispatch(onUpdateSelectedTask(task));
    setComment('');
  };

  const handleStaffChange = (value) => {
    const newStaff = staffList.find((staff) => staff.id === value);
    setStaff((staff) => {
      return {...staff, ...newStaff};
    });
  };

  const {messages} = useIntl();

  return (
    <div className={styles.todoDetailContent}>
      <div className={styles.todoDetailContentHeader}>
        <div className={styles.todoDetailContentHeaderLeft}>
          {isEdit ? (
            <Form.Control type="text"
                          style={{maxWidth: 200, marginRight: 20, marginBottom: 10,}}
                          placeholder={messages['todo.taskTitle']}
                          onChange={({target: {value}}) => setTitle(value)} />
          ) : (
            <h2 className='text-truncate'>{selectedTask.title}</h2>
          )}

          <div className={clsx(styles.todoDetailContentHeaderLabel, 'd-flex align-items-center')}>
            {selectedTask.label ? <Labels labels={selectedTask.label} /> : null}
          </div>

          <div className={styles.todoDetailContentHeaderTag}>
            <span
              className={styles.todoDetailContentHeaderTagBtn}
              style={{
                color: selectedTask.priority.color,
                backgroundColor: selectedTask.priority.color + '10',
              }}>
              {selectedTask.priority.name}
            </span>
          </div>
        </div>

        <TaskCreatedByInfo
          createdBy={selectedTask.createdBy}
          createdOn={selectedTask.createdOn}
        />
      </div>

      <div className={styles.todoDetailStaffEdit}>
        <div className={styles.todoDetailStaffRow}>
          {isEdit ? (
            <>
              <div className={styles.todoDetailStaff}>
                <ChangeStaff
                  inputLabel={inputLabel}
                  labelWidth={labelWidth}
                  selectedStaff={selectedStaff}
                  handleStaffChange={handleStaffChange}
                />
              </div>
              <DatePicker
                scheduleDate={scheduleDate}
                setScheduleDate={setScheduleDate}
              />
            </>
          ) : (
            <AssignedStaff assignedStaff={selectedTask.assignedTo} />
          )}
        </div>

        <div className={styles.todoDetailStaffEditBtnView}>
          {!isEdit ? (
            <AppIconBtn
              smallBtn
              onClick={onClickEditButton}
            >
              <AiOutlineEdit />
            </AppIconBtn>
          ) : (
            <AppIconBtn
              smallBtn
              onClick={onDoneEditing}
            >
              <AiOutlineCheckCircle />
            </AppIconBtn>
          )}
        </div>
      </div>

      <div className={styles.todoDetailDivider} />

      {!isEdit ? (
        <p className={styles.todoDetailPara}>{content}</p>
      ) : (
        <div className={styles.todoDetailTextareaForm}>
          <Form.Control as="textarea" rows={3}
                        placeholder={messages['common.description']}
                        onChange={({target: {value}}) => setContent(value)} />
        </div>
      )}

      <div className={styles.todoDetailStatusPri}>
        <div className={styles.todoDetailStatus}>
          <TaskStatus selectedTask={selectedTask} />
        </div>

        <div className={styles.todoDetailStatus}>
          <TaskPriority selectedTask={selectedTask} />
        </div>
        <div className={styles.todoDetailStatus}>
          <TaskLabel selectedTask={selectedTask} />
        </div>
      </div>

      <div className={styles.todoDetailDivider} />

      <CommentsList comments={selectedTask.comments} />

      <div className={clsx(styles.todoDetailTextareaForm, styles.todoDetailFooter,)}>
        <Form.Control as="textarea"
                      placeholder={messages['common.writeComment']}
                      value={comment}
                      onChange={({target: {value}}) => setComment(value)} />
        <Button
          shape='circle'
          type='primary'
          className={styles.todoDetailBtn}
          disabled={!comment}
          onClick={onAddComments}>
          <FiSend />
        </Button>
      </div>
    </div>
  );
};

export default TaskDetailBody;

TaskDetailBody.propTypes = {
  selectedTask: PropTypes.object.isRequired,
};
