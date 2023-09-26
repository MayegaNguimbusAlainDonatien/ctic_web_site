import React from 'react';
import AccountGraph from './AccountGraph';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';

const YourAccount = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard heightFull={true}
      titleClass='mb-1'
      title={messages['dashboard.yourAccount']}
      cardBodyClass='d-flex flex-column'>
      <div className='mt-auto'>
        <AccountGraph data={data} />
      </div>
    </AppCard>
  );
};

export default YourAccount;

YourAccount.defaultProps = {
  data: [],
};

YourAccount.propTypes = {
  data: PropTypes.array,
};
