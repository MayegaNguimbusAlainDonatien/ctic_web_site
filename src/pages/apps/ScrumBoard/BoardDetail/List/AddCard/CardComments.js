import React, {useState} from 'react';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {Button, Form, Image} from 'react-bootstrap';
import AppScrollbar from '@crema/core/AppScrollbar';
import {FiSend} from 'react-icons/fi';
import clsx from 'clsx';
import IntlMessages from '@crema/utility/IntlMessages';
import styles from './index.module.scss';

const CardComments = (props) => {
  const {comments, onAddNewComment} = props;
  const [comment, setComment] = useState('');

  const onAddComment = () => {
    onAddNewComment(comment);
    setComment('');
  };

  const {messages} = useIntl();

  const getCommentCell = (item, index, isPreviousSender) => {
    return (
      <div
        className={clsx(
          styles.scrumBoardCardCommentItem,
          isPreviousSender && styles.scrumBoardCardCommentItemPrevious,
        )}
        key={index}>
        {item.sender.image ? (
          <Image
            roundedCircle
            src={item.sender.image}
            className={styles.scrumBoardCardCommentItemUserAvatar}
          />
        ) : (
          <div className={styles.scrumBoardCardCommentItemUserAvatar}>
            {item.sender.name.charAt(0).toUpperCase()}
          </div>
        )}
        <div className={styles.scrumBoardCardCommentItemUserContent}>
          <span className={styles.scrumBoardCardCommentItemUserDate}>
            {item.date}
          </span>
          <div
            className={clsx(
              styles.scrumBoardCardCommentArea,
              'd-inline-block position-relative',
            )}>
            <p>{item.comment}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={clsx(styles.scrumBoardCardCommentView, 'd-flex flex-column')}>
      <h4 className={clsx(styles.scrumBoardCardCommentTitle, 'mb-3')}>
        <IntlMessages id='common.comments' />
      </h4>
        {comments && comments.length > 0 ? (
          <AppScrollbar className={styles.scrumBoardCardCommentScroll}>
            <div
              className={clsx(styles.scrumBoardCardComment, 'position-relative')}>
              {comments.map((item, index) =>
                getCommentCell(
                  item,
                  index,
                  index > 0 && comments[index - 1].sender.id === item.sender.id,
                ),
              )}
            </div>
          </AppScrollbar>
        ) : null}

      <div
        className={clsx(
          styles.scrumBoardCardCommentFooter,
          'position-relative mt-auto d-flex align-items-center',
        )}>
        <Form.Control
          className={styles.scrumBoardCardCommentTextArea}
          as='textarea'
          // onKeyDown={onAddComment}
          value={comment}
          placeholder={messages['common.pressEnter']}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          className={clsx(
            styles.btnCircle,
            'd-flex flex-column align-items-center justify-content-center',
          )}
          variant='primary'
          disabled={!comment}
          onClick={onAddComment}>
          <FiSend />
        </Button>
      </div>
    </div>
  );
};

export default CardComments;

CardComments.defaultProps = {
  comments: [],
};

CardComments.propTypes = {
  comments: PropTypes.array,
  onAddNewComment: PropTypes.func,
};
