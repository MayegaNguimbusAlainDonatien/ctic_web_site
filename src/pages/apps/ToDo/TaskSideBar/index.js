import React from 'react';
import {useSelector} from 'react-redux';
import AddNewTask from '../AddNewTask';
import IntlMessages from '@crema/utility/IntlMessages';
import AppsSideBarFolderItem from '@crema/core/AppsSideBarFolderItem';
import LabelItem from './LabelItem';
import AppList from '@crema/core/AppList';
import ListEmptyResult from '@crema/core/AppList/ListEmptyResult';
import SidebarPlaceholder from '@crema/core/AppSkeleton/SidebarListSkeleton';
import AppScrollbar from '@crema/core/AppScrollbar';
import styles from './index.module.scss';
import {Button, ListGroup} from "react-bootstrap";
import {AiOutlinePlus} from 'react-icons/ai';

const TaskSideBar = () => {
  const labelList = useSelector(({todoApp}) => todoApp.labelList);

  const folderList = useSelector(({todoApp}) => todoApp.folderList);

  const [isAddTaskOpen, setAddTaskOpen] = React.useState(false);

  const onOpenAddTask = () => {
    setAddTaskOpen(true);
  };

  const onCloseAddTask = () => {
    setAddTaskOpen(false);
  };

  return (
    <>
      <div className={styles.todoSidebarHeader}>
        <Button
          variant="outline-primary"
          onClick={onOpenAddTask}>
          <AiOutlinePlus  />
          <IntlMessages id='todo.addNewTask' />
        </Button>
      </div>

      <AppScrollbar className={styles.todoSidebarScrollbar}>
        <div className={styles.todoSidebarContent}>
          <ListGroup className={styles.todoSidebarList}>
            <AppList
              data={folderList}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={true}
                  placeholder={<SidebarPlaceholder />}
                />
              }
              renderItem={(item) => (
                <AppsSideBarFolderItem
                  key={item.id}
                  item={item}
                  path={`/apps/todo/folder/${item.alias}`}
                />
              )}
            />
          </ListGroup>

          <h5 className={styles.todoSidebarTitle}>Labels</h5>

          <ListGroup className={styles.todoSidebarList} aria-label='main mailbox folders'>
            <AppList
              data={labelList}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={true}
                  placeholder={<SidebarPlaceholder />}
                />
              }
              renderItem={(label) => <LabelItem key={label.id} label={label} />}
            />
          </ListGroup>
        </div>
      </AppScrollbar>

      {isAddTaskOpen ? (
        <AddNewTask
          isAddTaskOpen={isAddTaskOpen}
          onCloseAddTask={onCloseAddTask}
        />
      ) : null}
    </>
  );
};

export default TaskSideBar;
