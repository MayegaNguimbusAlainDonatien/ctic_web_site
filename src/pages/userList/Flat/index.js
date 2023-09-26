import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onGetUserList} from '../../../redux/actions/UserList';
import ListItem from './ListItem/index';
import AppList from '@crema/core/AppList';
import AppInfoView from '@crema/core/AppInfoView';

const Flat = () => {
  const dispatch = useDispatch();

  const usersList = useSelector(({userList}) => userList.usersList);

  useEffect(() => {
    dispatch(onGetUserList());
  }, [dispatch]);
  console.log('usersList', usersList);
  return (
    <div className='flex-grow-1'>
      {usersList ? (
        <AppList
          type='top'
          interval={120}
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

export default Flat;
