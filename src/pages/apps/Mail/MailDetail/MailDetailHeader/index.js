import React from 'react';
import {
  onUpdateMailFolders,
  onUpdateSelectedMail,
} from '../../../../../redux/actions/MailApp';
import {useDispatch, useSelector} from 'react-redux';
import IntlMessages from '@crema/utility/IntlMessages';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Dropdown} from 'react-bootstrap';
import {BiArchiveIn} from 'react-icons/bi';
import {BiArrowBack} from 'react-icons/bi';
import {HiOutlineMailOpen} from 'react-icons/hi';
import {FiMoreVertical} from 'react-icons/fi';
import {MdLabelOutline} from 'react-icons/md';
import {AiOutlineDelete, AiOutlineInfoCircle} from 'react-icons/ai';
import AppIconBtn from '@crema/core/AppIconBtn';
import styles from '../index.module.scss';
import clsx from 'clsx';

const MailDetailHeader = (props) => {
  const {selectedMail} = props;
  const dispatch = useDispatch();

  const history = useHistory();

  const labelList = useSelector(({mailApp}) => mailApp.labelList);

  const onClickBackButton = () => {
    history.goBack();
  };

  const onSelectLabel = ({key}) => {
    const mail = selectedMail;
    const labelType = labelList.find(
      (label) => label.id.toString() === key.toString(),
    );
    mail.label = labelType;
    dispatch(onUpdateSelectedMail(mail));
  };

  const onChangeMailFolder = (type) => {
    dispatch(onUpdateMailFolders([selectedMail.id], type));
  };

  const onChangeReadStatus = () => {
    const mail = selectedMail;
    mail.isRead = false;
    dispatch(onUpdateSelectedMail(mail));
    history.goBack();
  };

  const onChangeStarredStatus = () => {
    const mail = selectedMail;
    mail.isStarred = !mail.isStarred;
    dispatch(onUpdateSelectedMail(mail));
  };

  if (!selectedMail) return null;
  return (
    <>
      <AppIconBtn
        smallBtn
        className={styles.mailDetailArrow}
        title={<IntlMessages id='common.back' />}
        onClick={onClickBackButton}>
        <BiArrowBack />
      </AppIconBtn>
      <h5 className='mb-0 text-truncate'>
        {selectedMail.subject ? selectedMail.subject : null}
      </h5>
      <div className={clsx(styles.mailDetailHeader, 'd-flex align-items-center')}>
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

        <AppIconBtn
          smallBtn
          title={<IntlMessages id='mailApp.markAsUnread' />}
          onClick={() => onChangeReadStatus()}>
          <HiOutlineMailOpen />
        </AppIconBtn>

        <Dropdown>
          <AppIconBtn
            smallBtn title={<IntlMessages id='common.label' />}>
            <MdLabelOutline />
          </AppIconBtn>
          <Dropdown.Menu onClick={onSelectLabel}>
            {labelList.map((label) => {
              return (
                <Dropdown.Item value={label.id} key={label.id}>
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
            <AppIconBtn
              smallBtn title={<IntlMessages id='common.more' />}>
              <FiMoreVertical />
            </AppIconBtn>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={onChangeReadStatus}>
              <IntlMessages id='mailApp.markAsUnread' />
            </Dropdown.Item>
            <Dropdown.Item onClick={onChangeStarredStatus}>
              {selectedMail.isStarred ? (
                <IntlMessages id='mailApp.markAsNotImportant' />
              ) : (
                <IntlMessages id='mailApp.markAsImportant' />
              )}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
};

export default MailDetailHeader;

MailDetailHeader.propTypes = {
  selectedMail: PropTypes.object.isRequired,
};
