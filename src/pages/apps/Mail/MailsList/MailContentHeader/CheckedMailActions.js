import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import {
  onUpdateMailFolders,
  onUpdateMailLabels,
} from '../../../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {Dropdown} from 'react-bootstrap';
import {BiArchiveIn} from 'react-icons/bi';
import {HiOutlineFolderRemove} from 'react-icons/hi';
import {MdLabelOutline} from 'react-icons/md';
import {AiOutlineDelete, AiOutlineInfoCircle} from 'react-icons/ai';
import AppIconBtn from '@crema/core/AppIconBtn';
import styles from '../index.module.scss';
import clsx from 'clsx';

const CheckedMailActions = (props) => {
  const {checkedMails, setCheckedMails} = props;
  const dispatch = useDispatch();

  const labelList = useSelector(({mailApp}) => mailApp.labelList);

  const folderList = useSelector(({mailApp}) => mailApp.folderList);

  const onChangeMailFolder = ({key}) => {
    dispatch(onUpdateMailFolders(checkedMails, key));
    setCheckedMails([]);
  };

  const onSelectLabel = ({key}) => {
    const labelType = labelList.find(
      (label) => label.id.toString() === key.toString(),
    );
    dispatch(onUpdateMailLabels(checkedMails, labelType));
    setCheckedMails([]);
  };

  return (
    <div className={clsx(styles.mailCheckedAction, 'd-flex align-items-center me-1')}>
      <AppIconBtn
        smallBtn
        title={<IntlMessages id='common.archive' />}
        onClick={() => onChangeMailFolder(127)}>
        <BiArchiveIn />
      </AppIconBtn>

      <AppIconBtn
        smallBtn
        title={<IntlMessages id='common.reportSpam' />}
        onClick={() => onChangeMailFolder(125)}>
        <AiOutlineInfoCircle />
      </AppIconBtn>

      <AppIconBtn
        smallBtn
        title={<IntlMessages id='common.trash' />}
        onClick={() => onChangeMailFolder(126)}>
        <AiOutlineDelete />
      </AppIconBtn>

      <Dropdown>
        <Dropdown.Toggle
          variant='success'
          className={clsx(
            styles.dropdownToggleBtn,
            'p-0 bg-transparent border-0 d-flex align-items-center shadow-none',
          )}>
          <AppIconBtn smallBtn title={<IntlMessages id='common.label' />}>
            <MdLabelOutline />
          </AppIconBtn>
        </Dropdown.Toggle>
        <Dropdown.Menu onClick={onSelectLabel}>
          {labelList.map((label) => {
            return (
              <Dropdown.Item href='#/action-1' value={label.id} key={label.id}>
                {label.name}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle
          className={clsx(
            styles.dropdownToggleBtn,
            'p-0 bg-transparent border-0 d-flex align-items-center shadow-none',
          )}>
          <AppIconBtn smallBtn title={<IntlMessages id='common.moveTo' />}>
            <HiOutlineFolderRemove />
          </AppIconBtn>
        </Dropdown.Toggle>
        <Dropdown.Menu onClick={onChangeMailFolder}>
          {folderList.map((folder) => {
            return <Dropdown.Item key={folder.id}>{folder.name}</Dropdown.Item>;
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default CheckedMailActions;

CheckedMailActions.defaultProps = {
  checkedMails: [],
};

CheckedMailActions.propTypes = {
  checkedMails: PropTypes.array.isRequired,
  setCheckedMails: PropTypes.func,
};
