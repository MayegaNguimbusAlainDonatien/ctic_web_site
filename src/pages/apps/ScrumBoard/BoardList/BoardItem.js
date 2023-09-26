import React from 'react';
import PropTypes from 'prop-types';
import {BsCardList} from 'react-icons/bs';
import {MdEdit} from 'react-icons/md';
import AppCard from '@crema/core/AppCard';
import clsx from 'clsx';
import styles from './index.module.scss';

const BoardItem = ({board, onEditButtonClick, onViewBoardDetail}) => {
  return (
    <AppCard
      className={clsx(styles.scrumBoardCard, 'd-flex flex-column text-center')}
      key={board.id}
      onClick={() => onViewBoardDetail(board)}>
      <div
        className={clsx(
          styles.cardBody,
          'd-flex flex-column text-center align-items-center justify-content-center h-100',
        )}>
        <div
          className={clsx(
            styles.scrumBoardListIcon,
            'd-flex align-items-center',
          )}>
          <BsCardList />
          <MdEdit onClick={() => onEditButtonClick(board)} />
        </div>
        <p className={styles.scrumBoardCardText}>{board.name}</p>
        <span onClick={(event) => event.stopPropagation()} />
      </div>
    </AppCard>
  );
};

export default BoardItem;

BoardItem.propTypes = {
  board: PropTypes.object.isRequired,
  onEditButtonClick: PropTypes.func.isRequired,
  onViewBoardDetail: PropTypes.func,
};
