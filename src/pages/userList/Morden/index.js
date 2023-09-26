import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onGetUserList} from '../../../redux/actions/UserList';
import ListItem from './ListItem';
import AppList from '@crema/core/AppList';
import AppInfoView from '@crema/core/AppInfoView';

const Modern = () => {
  const dispatch = useDispatch();

  const usersList = useSelector(({userList}) => userList.usersList);

  useEffect(() => {
    dispatch(onGetUserList());
  }, [dispatch]);

  return (
    <div className='flex-grow-1'>
      {usersList ? (
        <AppList
          interval={120}
          type='top'
          data={usersList}
          renderItem={(user) => {
            return <ListItem user={user} key={user.id} />;
          }}
        />
      ) : null}
      <AppInfoView />
    </div>
  );
};

export default Modern;
