import React from 'react';
import MessageItem from '@crema/core/AppHeaderMessages/MessageItem';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import {Button} from 'react-bootstrap';

import {AiOutlineClose} from 'react-icons/ai';
import AppList from '@crema/core/AppList';

const Messages = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      title={messages['dashboard.messages']}
      action={
        <Button className='close-btn'>
          <AiOutlineClose size={20} />
        </Button>
      }>
      <AppList
        styles={{margin: '0 -20px'}}
        data={data}
        renderItem={(item) => {
          return <MessageItem key={item.id} item={item} />;
        }}
      />
    </AppCard>
  );
};

export default Messages;

Messages.defaultProps = {
  data: [],
};

Messages.propTypes = {
  data: PropTypes.array,
};
