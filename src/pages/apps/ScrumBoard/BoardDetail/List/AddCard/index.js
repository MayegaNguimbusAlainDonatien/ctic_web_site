import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {onDeleteSelectedCard} from '../../../../../../redux/actions';
import AppConfirmationModal from '@crema/core/AppConfirmationModal';
import IntlMessages from '@crema/utility/IntlMessages';
import CardHeader from './CardHeader';
import PropTypes from 'prop-types';
import AddCardForm from './AddCardForm';
import styles from './index.module.scss';
import {useAuthUser} from '@crema/utility/AuthHooks';
import {Offcanvas} from 'react-bootstrap';

const AddCard = (props) => {
  const {
    isModalVisible,
    handleCancel,
    /*handleOk,*/ board,
    list,
    selectedCard,
  } = props;
  const dispatch = useDispatch();

  const {user} = useAuthUser();

  const [checkedList, setCheckedList] = useState(() =>
    selectedCard ? selectedCard.checkedList : [],
  );

  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const [selectedMembers, setMembersList] = useState(() =>
    selectedCard ? selectedCard.members : [],
  );

  const [selectedLabels, setSelectedLabels] = useState(() =>
    selectedCard ? selectedCard.label : [],
  );

  const [comments, setComments] = useState(() =>
    selectedCard ? selectedCard.comments : [],
  );

  const [attachments, setAttachments] = useState(() =>
    selectedCard ? selectedCard.attachments : [],
  );

  const onAddAttachments = (files) => {
    setAttachments([...attachments, ...files]);
  };

  const onDeleteCard = () => {
    const boardId = board.id;
    const listId = list.id;
    const cardId = selectedCard.id;
    dispatch(onDeleteSelectedCard(boardId, listId, cardId));
    setDeleteDialogOpen(false);
    handleCancel();
  };

  const onClickDeleteIcon = () => {
    if (selectedCard) {
      setDeleteDialogOpen(true);
    } else {
      handleCancel();
    }
  };
  console.log('selectedCard:', selectedCard, isModalVisible);
  return (
    <Offcanvas
      className={styles.addCardDrawer}
      show={isModalVisible}
      placement='end'
      // onOk={handleOk}
      onHide={handleCancel}>
      <Offcanvas.Header className={styles.drawerHeaderWrapper} closeButton>
        <CardHeader
          onAddAttachments={onAddAttachments}
          onClickDeleteIcon={onClickDeleteIcon}
          handleCancel={handleCancel}
          board={board}
          list={list}
        />
      </Offcanvas.Header>
      <Offcanvas.Body>
        <AddCardForm
          board={board}
          list={list}
          checkedList={checkedList}
          handleCancel={handleCancel}
          setCheckedList={setCheckedList}
          comments={comments}
          setComments={setComments}
          authUser={user}
          attachments={attachments}
          setAttachments={setAttachments}
          selectedLabels={selectedLabels}
          setSelectedLabels={setSelectedLabels}
          selectedMembers={selectedMembers}
          setMembersList={setMembersList}
          selectedCard={selectedCard}
          onCloseAddCard={handleCancel}
        />
      </Offcanvas.Body>
      {isDeleteDialogOpen ? (
        <AppConfirmationModal
          open={isDeleteDialogOpen}
          onDeny={setDeleteDialogOpen}
          onConfirm={onDeleteCard}
          title={<IntlMessages id='scrumboard.deleteCard' />}
          dialogTitle={<IntlMessages id='common.deleteItem' />}
        />
      ) : null}
    </Offcanvas>
  );
};

export default AddCard;

AddCard.defaultProps = {
  board: null,
  list: null,
  selectedCard: null,
};

AddCard.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleOk: PropTypes.func.isRequired,
  board: PropTypes.object,
  list: PropTypes.object,
  selectedCard: PropTypes.object,
};
