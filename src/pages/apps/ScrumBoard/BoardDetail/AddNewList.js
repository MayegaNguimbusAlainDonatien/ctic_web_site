import React, {useState} from 'react';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/utility/IntlMessages';
import {RiCloseLine} from 'react-icons/ri';
import {MdAdd} from 'react-icons/md';
import {Button, Form} from 'react-bootstrap';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import AppIconButton from '@crema/core/AppIconBtn';
import clsx from 'clsx';
import styles from './index.module.scss';

const AddNewList = (props) => {
  const {onAdd, onCancel} = props;

  const [listName, setListName] = useState('');

  const onClickAddButton = () => {
    if (listName !== '') {
      onAdd(listName);
      setListName('');
    }
  };

  const {messages} = useIntl();

  return (
    <AppCard className={clsx(styles.scrumBoardAddListCard, 'p-0')}>
      <div className='d-flex align-items-center'>
        <span
          className={clsx(
            styles.scrumBoardAddIcon,
            'd-flex align-items-center justify-content-center',
          )}>
          <MdAdd />
        </span>
        <p className={clsx(styles.scrumBoardAddText, 'mb-0')}>
          <IntlMessages id='scrumboard.addAList' />
        </p>
        <span className={styles.scrumBoardAddAlose}>
          <AppIconButton onClick={onCancel} smallBtn>
            <RiCloseLine />
          </AppIconButton>
        </span>
      </div>
      <div
        className={clsx(
          styles.scrumBoardAddListFormFiled,
          'd-flex flex-column align-items-start',
        )}>
        <Form.Control
          placeholder={messages['scrumboard.cardTitle']}
          value={listName}
          onChange={(event) => setListName(event.target.value)}
        />
        <Button
          variant='primary'
          className={styles.scrumBoardAddListBtn}
          onClick={() => onClickAddButton()}>
          <IntlMessages id='common.add' />
        </Button>
      </div>
    </AppCard>
  );
};

export default AddNewList;

AddNewList.propTypes = {
  onCancel: PropTypes.func,
  onAdd: PropTypes.func,
};
