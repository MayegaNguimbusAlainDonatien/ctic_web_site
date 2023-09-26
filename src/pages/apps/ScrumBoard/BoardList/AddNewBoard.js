import React, {useState} from 'react';

import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {Button, Form, Modal} from 'react-bootstrap';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import styles from './index.module.scss';

const AddNewBoard = ({
  isModalVisible,
  handleCancel,
  onAddBoard,
  selectedBoard,
  handleOk,
}) => {
  const [boardName, setBoardName] = useState(() =>
    selectedBoard ? selectedBoard.name : '',
  );

  const onClickAddButton = () => {
    if (boardName !== '') {
      onAddBoard(boardName);
      setBoardName('');
      handleCancel();
    }
  };
  const {messages} = useIntl();

  return (
    <Modal
      show={isModalVisible}
      // onOk={handleOk}
      centered
      onHide={handleCancel}>
      <Modal.Header closeButton>
        <Modal.Title>{messages['scrumboard.addNewBoard']}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AppCard cardBodyClass='p-0'>
          <Form.Control
            placeholder='Basic usage'
            label={<IntlMessages id='scrumboard.boardTitle' />}
            value={boardName}
            onChange={(event) => setBoardName(event.target.value)}
          />
        </AppCard>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type='primary'
          className={styles.scrumAddBoardCardFooterBtn}
          onClick={onClickAddButton}>
          <IntlMessages id='common.add' />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddNewBoard;

AddNewBoard.defaultProps = {
  selectedBoard: null,
};

AddNewBoard.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  onAddBoard: PropTypes.func,
  handleOk: PropTypes.func,
  selectedBoard: PropTypes.node,
};
