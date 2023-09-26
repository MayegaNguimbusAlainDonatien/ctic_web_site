import React from 'react';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/utility/IntlMessages';
import {MdAdd} from 'react-icons/md';
import AppCard from '@crema/core/AppCard';
import clsx from 'clsx';
import styles from './index.module.scss';

const AddCardButton = (props) => {
  return (
    <AppCard
      className={styles.scrumBoardAddBtnCard}
      onClick={() => props.t(props.laneId)}>
      <div className='d-flex align-items-center'>
        <div
          className={clsx(
            styles.scrumBoardAddBtnCardUserAvatar,
            'd-flex align-items-center flex-column justify-content-center',
          )}>
          <MdAdd className={styles.scrumBoardAddBtnCardUserAddIcon} />
        </div>
        <div className={styles.scrumBoardAddBtnCardUserText}>
          <IntlMessages id='scrumboard.addACard' />
        </div>
      </div>
    </AppCard>
  );
};

export default AddCardButton;

AddCardButton.propTypes = {
  t: PropTypes.func,
  laneId: PropTypes.number.isRequired,
};
