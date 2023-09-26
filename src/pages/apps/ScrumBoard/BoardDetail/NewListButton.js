import React from 'react';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/utility/IntlMessages';
import {MdAdd} from 'react-icons/md';
import AppCard from '@crema/core/AppCard';
import clsx from 'clsx';
import styles from './index.module.scss';

const NewListButton = (props) => {
  const {onClick} = props;

  return (
    <AppCard className={clsx(styles.scrumBoardAddListCard, 'p-0')}>
      <div className='d-flex align-items-center'>
        <span
          className={clsx(
            styles.scrumBoardAddIcon,
            'd-flex align-items-center justify-content-center',
          )}
          onClick={onClick}>
          <MdAdd />
        </span>
        <p className={clsx(styles.scrumBoardAddText, 'mb-0')}>
          <IntlMessages id='scrumboard.addAList' />
        </p>
      </div>
    </AppCard>
  );
};

export default NewListButton;

NewListButton.propTypes = {
  onClick: PropTypes.func,
};
