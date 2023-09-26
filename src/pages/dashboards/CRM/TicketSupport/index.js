import React from 'react';
import TicketSupportTable from './TicketSupportTable';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';

const TicketSupport = (props) => {
  const {ticketSupportData} = props;
  const {messages} = useIntl();

  return (
    <AppCard cardBodyClass='px-0'
      title={messages['dashboard.latestTicketSupport']}
      action={<a href='#' className='text-danger text-decoration-none text-nowrap'>{messages['common.viewAll']}</a>}>
      <TicketSupportTable ticketSupportData={ticketSupportData} />
    </AppCard>
  );
};

export default TicketSupport;

TicketSupport.defaultProps = {
  ticketSupportData: [],
};

TicketSupport.propTypes = {
  ticketSupportData: PropTypes.array,
};
