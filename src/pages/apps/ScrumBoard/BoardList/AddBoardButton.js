import React from 'react';
import {MdAdd} from 'react-icons/md';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import clsx from 'clsx';

const AddBoardButton = ({onAddButtonClick}) => {
  return (
    <AppCard
      className={styles.scrumBoardAddCard}
      onClick={() => onAddButtonClick()}>
      <div
        className={clsx(
          styles.cardBody,
          'd-flex flex-column text-center align-items-center justify-content-center h-100',
        )}>
        <span className={styles.scrumBoardAddCardIcon}>
          <MdAdd />
        </span>
        <p className={styles.scrumBoardCardText}>
          <IntlMessages id='scrumboard.addNewBoard' />
        </p>
      </div>
    </AppCard>
  );
};

export default AddBoardButton;

AddBoardButton.propTypes = {
  onAddButtonClick: PropTypes.func,
};
