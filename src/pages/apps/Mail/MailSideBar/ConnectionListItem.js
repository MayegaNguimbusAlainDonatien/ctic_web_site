import React, {useState} from 'react';
import ChatWindow from './ChatWindow';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import clsx from 'clsx';

const ConnectionListItem = (props) => {
  const {connection} = props;
  const [isOpenChat, setOpenChat] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpenChat(true)}
        key={connection.id}
        className={clsx(
          styles.mailConnectionListItem,
          'd-flex align-items-start justify-content-start',
        )}>
        <img
          width='40'
          height='40'
          className={clsx(styles.avatar, 'bg-info rounded-circle')}
          alt='Remy Sharp'
          src={connection.image}
        />
        <div className='position-relative'>
          <p className={clsx(styles.mailConnectionTitle, 'mb-0')}>
            {connection.name}
          </p>
          <p>{connection.status}</p>
        </div>
      </div>

      {isOpenChat ? (
        <ChatWindow
          setOpenChat={setOpenChat}
          isOpenChat={isOpenChat}
          connection={connection}
        />
      ) : null}
    </>
  );
};

export default ConnectionListItem;

ConnectionListItem.defaultProps = {
  connection: null,
};

ConnectionListItem.propTypes = {
  connection: PropTypes.object,
};
