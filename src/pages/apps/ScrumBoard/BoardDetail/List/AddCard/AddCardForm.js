import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import CardAttachments from './CardAttachments';
import CardCheckedList from './CardCheckedList';
import CardComments from './CardComments';
import {useIntl} from 'react-intl';
import moment from 'moment';
import PropTypes from 'prop-types';
import {Button, Col, Form} from 'react-bootstrap';
import AppRowContainer from '@crema/core/AppRowContainer';
import {useDispatch, useSelector} from 'react-redux';
import {onAddNewCard, onEditCardDetails} from '../../../../../../redux/actions';
import AppScrollbar from '@crema/core/AppScrollbar';
import clsx from 'clsx';
import styles from './index.module.scss';
import Select from 'react-select';

const AddCardForm = (props) => {
  const {
    board,
    list,
    checkedList,
    setCheckedList,
    comments,
    setComments,
    authUser,
    attachments,
    setAttachments,
    selectedMembers,
    setMembersList,
    selectedCard,
    onCloseAddCard,
    isSubmitting,
  } = props;
  console.log(
    'selectedMembers',
    selectedCard?.label.map((data) => data.id),
  );
  const {messages} = useIntl();

  const labelList = useSelector(({scrumboardApp}) => scrumboardApp.labelList);

  const memberList = useSelector(({scrumboardApp}) => scrumboardApp.memberList);

  const dispatch = useDispatch();

  console.log('board, list: ', board, list);
  const onDeleteCheckedItem = (id) => {
    const updatedList = checkedList.filter((item) => item.id !== id);
    setCheckedList(updatedList);
  };

  const onAddNewCheckedItem = () => {
    const item = {
      id: Math.floor(Math.random() * 1000),
      title: '',
    };
    const updatedList = checkedList.concat(item);
    setCheckedList(updatedList);
  };

  const onSetCheckedItemText = (title, id) => {
    const updatedList = checkedList.map((item) => {
      if (item.id === id) {
        item.title = title;
        return item;
      } else {
        return item;
      }
    });
    setCheckedList(updatedList);
  };

  const onAddNewComment = (comment) => {
    setComments(
      comments.concat({
        comment: comment,
        sender: {
          id: authUser.id,
          name: authUser.displayName ? authUser.displayName : 'User',
          image: authUser.photoURL,
        },
        date: moment().format('ll'),
      }),
    );
  };

  const onDeleteAttachment = (id) => {
    const updatedAttachments = attachments.filter(
      (attachment) => attachment.id !== id,
    );
    setAttachments(updatedAttachments);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const onFinish = (values) => {
    if (selectedCard) {
      const editedCard = {
        ...selectedCard,
        comments: comments,
        ...values,
        attachments: attachments,
        members: selectedMembers,
        label: values.members,
        checkedList: checkedList.filter((item) => item.title !== ''),
      };
      dispatch(onEditCardDetails(board, list, editedCard));
    } else {
      const newCard = {
        id: Math.floor(Math.random() * 1000),
        attachments: attachments,
        checkedList: [],
        comments: comments,
        ...values,
        label: values.members,
        members: selectedMembers,
      };
      dispatch(onAddNewCard(board, list, newCard));
    }
  };

  return (
    <Form
      className='w-100 h-100 d-flex flex-column'
      noValidate
      autoComplete='off'
      onFinish={onFinish}>
      <AppScrollbar
        className={clsx(
          styles.scrumBoardAddCardFormScroll,
          'd-flex flex-column',
        )}>
        <div
          className={clsx(
            styles.scrumBoardAddCardFormContent,
            'd-flex flex-column',
          )}>
          <AppRowContainer gutter={8}>
            <Col xs={12} md={8}>
              <Form.Control
                name='title'
                defaultValue={selectedCard?.title}
                placeholder={messages['common.title']}
              />
            </Col>

            <Col xs={12} md={4}>
              <Form.Control
                type='date'
                name='date'
                defaultValue={
                  selectedCard && selectedCard.date
                    ? new Date(selectedCard.date).toISOString().split('T')[0]
                    : ''
                }
              />
            </Col>

            <Col xs={12}>
              <Form.Control
                as='textarea'
                name='desc'
                defaultValue={selectedCard?.desc}
                autoSize={{minRows: 3, maxRows: 5}}
                placeholder={messages['common.description']}
              />
            </Col>

            <Col xs={12} lg={6}>
              <Select
                defaultValue={selectedCard?.label}
                isMulti
                options={labelList}
              />
            </Col>

            <Col xs={12} lg={6}>
              <Select
                defaultValue={selectedCard?.members}
                isMulti
                options={memberList}
              />
            </Col>

            {attachments && attachments.length > 0 ? (
              <Col xs={12}>
                <CardAttachments
                  attachments={attachments}
                  onDeleteAttachment={onDeleteAttachment}
                />
              </Col>
            ) : null }

            {selectedCard ? (
              <Col xs={12}>
                <CardCheckedList
                  onAddNewCheckedItem={onAddNewCheckedItem}
                  checkedList={checkedList}
                  onDeleteCheckedItem={onDeleteCheckedItem}
                  onSetCheckedItemText={onSetCheckedItemText}
                />
              </Col>
            ) : null}
          </AppRowContainer>
        </div>

          <CardComments comments={comments} onAddNewComment={onAddNewComment}/>
      </AppScrollbar>
      <div className={styles.scrumBoardAddCardFormFooter}>
        <Button variant='primary' onClick={onCloseAddCard}>
          <IntlMessages id='common.cancel'/>
        </Button>
        <Button variant='primary' disabled={isSubmitting}>
          <IntlMessages id='common.done'/>
        </Button>
      </div>
    </Form>
  );
};

export default AddCardForm;

AddCardForm.defaultProps = {
  comments: [],
  attachments: [],
  selectedLabels: [],
  selectedMembers: [],
  isSubmitting: false,
};

AddCardForm.propTypes = {
  board: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func,
  checkedList: PropTypes.array.isRequired,
  setCheckedList: PropTypes.func,
  comments: PropTypes.array,
  setComments: PropTypes.func,
  authUser: PropTypes.object.isRequired,
  attachments: PropTypes.array,
  setAttachments: PropTypes.func,
  selectedLabels: PropTypes.array,
  setSelectedLabels: PropTypes.func,
  selectedMembers: PropTypes.array,
  setMembersList: PropTypes.func,
  onCloseAddCard: PropTypes.func,
  selectedCard: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool,
};
