import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onGetPostsList} from '../../../../redux/actions';
import AppList from '@crema/core/AppList';
import PostItem from './PostItem';

const PostsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetPostsList());
  }, [dispatch]);

  const {postList, wallData} = useSelector(({wall}) => wall);

  return (
    <AppList
      className='h-auto'
      data={postList}
      renderItem={(post, index) => (
        <PostItem key={index} post={post} wallData={wallData} />
      )}
    />
  );
};

export default PostsList;
