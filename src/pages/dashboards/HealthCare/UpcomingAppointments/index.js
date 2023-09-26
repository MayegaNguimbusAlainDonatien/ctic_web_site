import React from 'react';
import {useIntl} from 'react-intl';
import AppCard from '@crema/core/AppCard';
import AppMenu from '@crema/core/AppMenu';
import AppointmentCell from './AppointmentCell';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import AppScrollbar from '@crema/core/AppScrollbar';
import {ListGroup} from "react-bootstrap";

const UpcomingAppointments = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      cardBodyClass='px-0'
      title={messages['healthCare.upcomingAppointments']}
      action={<AppMenu />}>
      <AppScrollbar className={styles.upComingAppointScrollbar}>
        <ListGroup className='border-0'>
          {data.map((appointment) => (
            <AppointmentCell key={appointment.id} appointment={appointment} />
          ))}
        </ListGroup>
      </AppScrollbar>
    </AppCard>
  );
};

export default UpcomingAppointments;

UpcomingAppointments.defaultProps = {
  data: [],
};

UpcomingAppointments.propTypes = {
  data: PropTypes.array,
};
