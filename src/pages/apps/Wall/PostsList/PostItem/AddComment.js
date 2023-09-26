import React, {useState} from 'react';
import {onAddNewComment} from '../../../../../redux/actions/Wall';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {Form, Image, InputGroup} from 'react-bootstrap';
import {AiOutlineSmile} from 'react-icons/ai';
import styles from '../index.module.scss';
import {MdOutlineAttachFile} from 'react-icons/md';
import clsx from 'clsx';

const AddComment = ({postId, wallData}) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  const submitComment = (event) => {
    if (event.key === 'Enter') {
      const newComment = {
        author: {
          name: wallData.name,
          profilePic: wallData.profilePic,
          id: wallData.id,
        },
        comment,
      };
      dispatch(onAddNewComment(postId, newComment));
      setComment('');
    }
  };

  return (
    <div className={clsx(styles.addComment, 'd-flex justify-content-between')}>
      <Image
        roundedCircle
        className={styles.postItemAvatar}
        src={wallData.profilePic}
      />
      <div className={clsx(styles.addCommentUser, 'd-flex')}>
        <div className={styles.addCommentUserInfo}>
          <InputGroup>
            <Form.Control
              className={clsx(
                styles.addCommentInput,
                'd-flex align-items-center',
              )}
              placeholder='Write a comment'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyPress={submitComment}
            />
            <InputGroup.Text className={clsx(styles.inputGroupText, 'p-0')}>
              <span
                className={clsx(
                  styles.createPostActionBtn,
                  'd-flex flex-column align-items-center justify-content-center',
                )}>
                <AiOutlineSmile />
              </span>
            </InputGroup.Text>
            <InputGroup.Text className={clsx(styles.inputGroupText, 'p-0')}>
              <span
                className={clsx(
                  styles.createPostActionBtn,
                  'd-flex flex-column align-items-center justify-content-center',
                )}>
                <MdOutlineAttachFile />
              </span>
            </InputGroup.Text>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default AddComment;

AddComment.propTypes = {
  postId: PropTypes.number,
  wallData: PropTypes.object,
};
