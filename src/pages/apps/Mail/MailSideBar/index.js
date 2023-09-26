import React, {useState} from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import {useSelector} from 'react-redux';
import ComposeMail from '../ComposeMail';
import ConnectionListItem from './ConnectionListItem';
import AppsSideBarFolderItem from '@crema/core/AppsSideBarFolderItem';
import LabelItem from './LabelItem';
import AppList from '@crema/core/AppList';
import ListEmptyResult from '@crema/core/AppList/ListEmptyResult';
import SidebarPlaceholder from '@crema/core/AppSkeleton/SidebarListSkeleton';
import AppScrollbar from '@crema/core/AppScrollbar';
import {Button, ListGroup} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';
import {AiOutlinePlus} from "react-icons/ai";

const MailSidebar = () => {
  const labelList = useSelector(({mailApp}) => mailApp.labelList);

  const connectionList = useSelector(({mailApp}) => mailApp.connectionList);

  const folderList = useSelector(({mailApp}) => mailApp.folderList);

  const [isComposeMail, setComposeMail] = useState(false);

  const onOpenComposeMail = () => {
    setComposeMail(true);
  };

  const onCloseComposeMail = () => {
    setComposeMail(false);
  };
  console.log('folderList', folderList);
  return (
    <>
      {labelList || connectionList || folderList ? (
        <>
          <div className={styles.mailSidebarHeader}>
            <Button variant='outline-primary' onClick={onOpenComposeMail}>
              <AiOutlinePlus/>
              <IntlMessages id='common.compose'/>
            </Button>
          </div>

          <AppScrollbar className={styles.mailSidebarScrollbar}>
            <div className={clsx(styles.mailSidebarContent, 'pb-2')}>
              <ListGroup
                className={clsx(styles.mailSidebarList, 'mb-1')}
                component='nav'
                aria-label='main mailbox folders'>
                <AppList
                  data={folderList}
                  ListEmptyComponent={
                    <ListEmptyResult
                      loading={true}
                      placeholder={<SidebarPlaceholder/>}
                    />
                  }
                  renderItem={(item) => (
                    <AppsSideBarFolderItem
                      key={item.id}
                      item={item}
                      path={`/apps/mail/folder/${item.alias}`}
                    />
                  )}
                />
              </ListGroup>

              <h5 className={styles.mailSidebarTitle}>
                <IntlMessages id='common.labels'/>
              </h5>

              <ListGroup
                className={clsx(styles.mailSidebarList, 'mb-1')}
                component='nav'
                aria-label='main mailbox folders'>
                <AppList
                  data={labelList}
                  ListEmptyComponent={
                    <ListEmptyResult
                      loading={true}
                      placeholder={<SidebarPlaceholder/>}
                    />
                  }
                  renderItem={(label) => (
                    <LabelItem key={label.id} label={label}/>
                  )}
                />
              </ListGroup>
              <h5 className={styles.mailSidebarTitle}>
                <IntlMessages id='common.connections'/>
              </h5>

              <ListGroup>
                <AppList
                  data={connectionList}
                  ListEmptyComponent={
                    <ListEmptyResult
                      loading={true}
                      placeholder={<SidebarPlaceholder/>}
                    />
                  }
                  renderItem={(connection) => {
                    return (
                      <ConnectionListItem
                        connection={connection}
                        key={connection.id}
                      />
                    );
                  }}
                />
              </ListGroup>
            </div>
          </AppScrollbar>
        </>
      ) : null}

      {isComposeMail ? (
        <ComposeMail
          isComposeMail={isComposeMail}
          onCloseComposeMail={onCloseComposeMail}
        />
      ) : null}
    </>
  );
};

export default MailSidebar;
