import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import {
  onDeleteSelectedTasks,
  onUpdateTaskLabels,
} from '../../../../../redux/actions/ToDoApp';
import {useDispatch, useSelector} from 'react-redux';
import AppsDeleteIcon from '@crema/core/AppsDeleteIcon';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom';
import {MdLabelOutline} from 'react-icons/md';
import {Dropdown} from "react-bootstrap";
import AppIconBtn from "@crema/core/AppIconBtn";
import styles from '../index.module.scss';
import clsx from "clsx";

const CheckedTasksActions = ({checkedTasks, setCheckedTasks, page}) => {
  const {pathname} = useLocation();
  const path = pathname.split('/');
  const dispatch = useDispatch();

  const labelList = useSelector(({todoApp}) => todoApp.labelList);

  const onDeleteTasks = () => {
    dispatch(
      onDeleteSelectedTasks(
        checkedTasks,
        path[path.length - 2],
        path[path.length - 1],
        page,
      ),
    );
    setCheckedTasks([]);
  };

  const onSelectLabel = ({key}) => {
    dispatch(onUpdateTaskLabels(checkedTasks, key));
    setCheckedTasks([]);
  };

  return (
    <>
      <span className={styles.todoHeaderCheckedAction}>
        <div className='mx-1'>
          <AppsDeleteIcon
            smallBtn
            deleteAction={onDeleteTasks}
            deleteTitle={<IntlMessages id='todo.deleteMessage' />}
          />
        </div>

        <div className='mx-1'>
          <Dropdown>
            <Dropdown.Toggle
              className={clsx(
                styles.dropdownToggleBtn,
                'p-0 bg-transparent border-0 d-flex align-items-center shadow-none',
              )} variant="success" id="dropdown-basic">
                <AppIconBtn
                  smallBtn
                  title={<IntlMessages id='common.label' />}
                >
                  <MdLabelOutline />
                </AppIconBtn>
            </Dropdown.Toggle>

            <Dropdown.Menu onClick={onSelectLabel}>
                  {labelList.map((label) => {
                    return (
                      <Dropdown.Item className={styles.labelItems} href="#/action-1" key={label.id} value={label.id}>
                        {label.name}
                      </Dropdown.Item>
                    );
                  })}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </span>
    </>
  );
};

export default CheckedTasksActions;

CheckedTasksActions.propTypes = {
  checkedTasks: PropTypes.array.isRequired,
  setCheckedTasks: PropTypes.func,
  page: PropTypes.number.isRequired,
};
