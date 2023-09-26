import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  onAddNewBoard,
  onEditBoardDetail,
  onGetBoardList,
} from '../../../../redux/actions';
import {useHistory} from 'react-router-dom';
import AddNewBoard from './AddNewBoard';
import IntlMessages from '@crema/utility/IntlMessages';
import BoardItem from './BoardItem';
import AddBoardButton from './AddBoardButton';
import AppInfoView from '@crema/core/AppInfoView';
import styles from './index.module.scss';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import clsx from 'clsx';

const BoardList = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const boardList = useSelector(({scrumboardApp}) => scrumboardApp.boardList);

  const [selectedBoard, setSelectedBoard] = useState(null);

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    dispatch(onGetBoardList());
  }, [dispatch]);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const onEditButtonClick = (board) => {
    setSelectedBoard(board);
    setIsModalVisible(true);
  };

  const onAddBoard = (name) => {
    if (selectedBoard) {
      const board = {...selectedBoard, name};
      dispatch(onEditBoardDetail(board));
    } else {
      dispatch(onAddNewBoard({name}));
    }
  };

  const onViewBoardDetail = (board) => {
    history.push(`/apps/scrum-board/${board.id}`);
  };

  const showModal = () => {
    setSelectedBoard(null);
    setIsModalVisible(true);
  };

  return (
    <>
      <div className='pt-3 d-flex flex-column'>
        <div className={clsx(styles.scrumBoardHeader, 'text-center')}>
          <h2>
            <IntlMessages id='scrumboard.scrumboardApp' />
          </h2>
        </div>
        <AppRowContainer className='justify-content-center'>
          {boardList && boardList.length > 0
            ? boardList.map((board) => {
                return (
                  <Col xs={12} sm={6} md={4} lg={3} key={board.id}>
                    <BoardItem
                      board={board}
                      onEditButtonClick={onEditButtonClick}
                      onViewBoardDetail={onViewBoardDetail}
                    />
                  </Col>
                );
              })
            : null}
          <Col xs={12} sm={6} md={4} lg={3}>
            <AddBoardButton onAddButtonClick={showModal} />
          </Col>
        </AppRowContainer>
      </div>

      {isModalVisible ? (
        <AddNewBoard
          isModalVisible={isModalVisible}
          handleCancel={handleCancel}
          onAddBoard={onAddBoard}
          handleOk={handleOk}
          selectedBoard={selectedBoard}
        />
      ) : null}
      <AppInfoView />
    </>
  );
};

export default BoardList;
