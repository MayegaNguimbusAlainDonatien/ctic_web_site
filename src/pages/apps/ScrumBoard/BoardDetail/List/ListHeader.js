import React, {useState} from 'react';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/utility/IntlMessages';
import AppConfirmationModal from '@crema/core/AppConfirmationModal';
import {HiCheck} from 'react-icons/hi';
import {CgClose} from 'react-icons/cg';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import AppCard from '@crema/core/AppCard';
import AppIconButton from '@crema/core/AppIconBtn';
import {Form} from 'react-bootstrap';
import clsx from 'clsx';
import styles from './index.module.scss';

const ListHeader = (props) => {
  const {name, id, onDelete, updateTitle} = props;

  const [isEditListName, setEditListName] = useState(false);

  const [editedListName, setEditedListName] = useState('');

  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const onDeleteBoardList = () => {
    onDelete(id);
    setDeleteDialogOpen(false);
  };

  const onEditButtonClick = () => {
    setEditedListName(name);
    setEditListName(!isEditListName);
  };

  const onEditListName = () => {
    if (editedListName !== '') {
      updateTitle(editedListName);
      setEditListName(false);
    }
  };

  return (
    <AppCard className={styles.listHeaderCard}>
      <div
        className={clsx(
          styles.scrumBoardListHeaderFlex,
          'd-flex align-items-center',
        )}>
        {!isEditListName ? (
          <>
            <h5>{name}</h5>
            <div
              className={clsx(
                styles.scrumBoardListHeaderFlexAuto,
                'd-flex align-items-center',
              )}>
              <AppIconButton smallBtn onClick={onEditButtonClick}>
                <AiOutlineEdit />
              </AppIconButton>

              <AppIconButton smallBtn onClick={() => setDeleteDialogOpen(true)}>
                <AiOutlineDelete />
              </AppIconButton>
            </div>
          </>
        ) : (
          <>
            <div className={styles.scrumBoardListHeaderInput}>
              <Form.Control
                label={<IntlMessages id='scrumboard.listTitle' />}
                value={editedListName}
                onChange={(event) => setEditedListName(event.target.value)}
              />
            </div>
            <div
              className={clsx(
                styles.scrumBoardListHeaderFlexAuto,
                'd-flex align-items-center',
              )}>
              <AppIconButton smallBtn onClick={onEditListName}>
                <HiCheck />
              </AppIconButton>
              <AppIconButton smallBtn onClick={() => setEditListName(false)}>
                <CgClose />
              </AppIconButton>
            </div>
          </>
        )}
      </div>

      {isDeleteDialogOpen ? (
        <AppConfirmationModal
          open={isDeleteDialogOpen}
          onDeny={setDeleteDialogOpen}
          onConfirm={onDeleteBoardList}
          title={<IntlMessages id='scrumboard.deleteMessage' />}
          dialogTitle={<IntlMessages id='common.deleteItem' />}
        />
      ) : null}
    </AppCard>
  );
};

export default ListHeader;

ListHeader.propTypes = {
  boardId: PropTypes.string.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  onDelete: PropTypes.func,
  updateTitle: PropTypes.func,
};
