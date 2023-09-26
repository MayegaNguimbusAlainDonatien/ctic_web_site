import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {AiOutlineDelete} from 'react-icons/ai';
import {Button, Form} from 'react-bootstrap';
import AppIconButton from '@crema/core/AppIconBtn';
import clsx from 'clsx';
import styles from './index.module.scss';

const CardCheckedList = (props) => {
  const {
    onAddNewCheckedItem,
    checkedList,
    onSetCheckedItemText,
    onDeleteCheckedItem,
  } = props;

  return (
    <div className='mb-4'>
      <div
        className={clsx(
          styles.scrumBoardCardCheckListHeader,
          'mb-3 d-flex align-items-center',
        )}>
        <h4>
          <IntlMessages id='scrumboard.checkedLists' />
        </h4>

        <Button variant='primary' onClick={() => onAddNewCheckedItem()}>
          <IntlMessages id='scrumboard.addNew' />
        </Button>
      </div>

      {checkedList.map((checkedItem) => {
        return (
          <div
            className={clsx(
              styles.scrumBoardCardCheckListItem,
              'd-flex align-items-center mb-3',
            )}
            key={checkedItem.id}>
            <Form.Check
              className={styles.scrumBoardCardCheckListItemCheckBox}
            />
            <Form.Control
              className='w-100'
              value={checkedItem.title}
              onChange={(e) =>
                onSetCheckedItemText(e.target.value, checkedItem.id)
              }
            />
            <div className='ms-2'>
              <AppIconButton smallBtn onClick={() => onDeleteCheckedItem(checkedItem.id)}>
                <AiOutlineDelete />
              </AppIconButton>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardCheckedList;

CardCheckedList.defaultProps = {
  checkedList: [],
};

CardCheckedList.propTypes = {
  onAddNewCheckedItem: PropTypes.func,
  checkedList: PropTypes.array,
  onSetCheckedItemText: PropTypes.func,
  onDeleteCheckedItem: PropTypes.func,
};
