import React from 'react';
import {useSelector} from 'react-redux';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import SelectTasksDropdown from './SelectTasksDropdown';
import CheckedTasksActions from './CheckedTasksActions';
import AppsPagination from '@crema/core/AppsPagination';
import ViewSelectButtons from './ViewSelectButtons';
import {Form, FormControl, InputGroup} from 'react-bootstrap';
import {AiOutlineSearch} from 'react-icons/ai';
import styles from '../index.module.scss';

const TaskContentHeader = (props) => {
  const {
    checkedTasks,
    setCheckedTasks,
    filterText,
    onSetFilterText,
    onChange,
    page,
    pageView,
    onChangePageView,
  } = props;

  const taskList = useSelector(({todoApp}) => todoApp.taskList);

  const totalTasks = useSelector(({todoApp}) => todoApp.totalTasks);

  const onHandleMasterCheckbox = (event) => {
    if (event.target.checked) {
      const taskIds = taskList.map((task) => task.id);
      setCheckedTasks(taskIds);
    } else {
      setCheckedTasks([]);
    }
  };

  const onSelectTasks = (value) => {
    switch (value) {
      case 0:
        setCheckedTasks(taskList.map((task) => task.id));
        break;
      case 1:
        setCheckedTasks([]);
        break;

      case 2:
        setCheckedTasks(
          taskList.filter((task) => task.isStarred).map((task) => task.id),
        );
        break;

      case 3:
        setCheckedTasks(
          taskList.filter((task) => task.hasAttachments).map((task) => task.id),
        );
        break;

      default:
        setCheckedTasks([]);
    }
  };

  const {messages} = useIntl();

  return (
    <>
      <div className={styles.todoContentHeader}>
        <span className={styles.todoContentHeaderCheckboxView}>
          <Form.Check
            color='primary'
            checked={
              taskList.length > 0 && checkedTasks.length === taskList.length
            }
            onChange={onHandleMasterCheckbox}
          />
        </span>

        <SelectTasksDropdown onSelectTasks={onSelectTasks} />

        <span className={styles.todoHeaderCheckedActionView}>
          {checkedTasks.length > 0 ? (
            <CheckedTasksActions
              checkedTasks={checkedTasks}
              setCheckedTasks={setCheckedTasks}
              page={page}
            />
          ) : null}
        </span>
        <InputGroup className={styles.todoSearch}>
          <FormControl
            className={styles.searchInput}
            placeholder={messages['common.searchHere']}
            aria-label='Username'
            aria-describedby='basic-addon1'
            value={filterText}
            onChange={(event) => onSetFilterText(event.target.value)}
          />
          <InputGroup.Text id='basic-addon1' className={styles.searchBtn}>
            <AiOutlineSearch />
          </InputGroup.Text>
        </InputGroup>
        <ViewSelectButtons
          pageView={pageView}
          onChangePageView={onChangePageView}
        />
      </div>
      {pageView === 'list' && taskList.length > 0 ? (
        <AppsPagination
          className={styles.todoContentHeaderPagination}
          count={totalTasks}
          page={page}
          onChange={onChange}
        />
      ) : null}
    </>
  );
};

export default TaskContentHeader;

TaskContentHeader.defaultProps = {
  checkedTasks: [],
  filterText: '',
  page: 0,
};

TaskContentHeader.propTypes = {
  checkedTasks: PropTypes.array,
  setCheckedTasks: PropTypes.func,
  filterText: PropTypes.string,
  onSetFilterText: PropTypes.func,
  page: PropTypes.number,
  onChange: PropTypes.func,
  pageView: PropTypes.string.isRequired,
  onChangePageView: PropTypes.func,
};
