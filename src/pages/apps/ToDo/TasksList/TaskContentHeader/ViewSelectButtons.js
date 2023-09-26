import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import AppIconBtn from "@crema/core/AppIconBtn";
import {AiOutlineCalendar, AiOutlineBars} from 'react-icons/ai';
import styles from '../index.module.scss';

const ViewSelectButtons = ({pageView, onChangePageView}) => {
  const {messages} = useIntl();
  return (
    <div className={styles.todoViewSelect}>
      <div className='mx-1'>
        <AppIconBtn
          smallBtn
          className={clsx(styles.appIconBtn, pageView === 'calendar' ? styles.active : '', )}
          onClick={() => onChangePageView('calendar')}
          title={messages['sidebar.dataDisplay.calender']}
        >
          <AiOutlineCalendar />
        </AppIconBtn>
      </div>
      <div className='mx-1'>
        <AppIconBtn
          smallBtn
          title={messages['sidebar.ecommerce.listView']}
          className={clsx(styles.appIconBtn, pageView === 'list' ? styles.active : '', )}
          onClick={() => onChangePageView('list')}
        >
          <AiOutlineBars />
        </AppIconBtn>
      </div>

    </div>
  );
};

export default ViewSelectButtons;

ViewSelectButtons.propTypes = {
  pageView: PropTypes.string.isRequired,
  onChangePageView: PropTypes.func,
};
