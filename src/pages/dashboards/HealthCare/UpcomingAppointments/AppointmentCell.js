import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import {Image, ListGroup} from 'react-bootstrap';
import clsx from 'clsx';

const AppointmentCell = ({appointment}) => {
  return (
    <ListGroup.Item
      className={clsx(
        styles.appointmentCell,
        'd-flex align-items-center border-0',
      )}>
      <Image
        className={clsx(styles.appointmentCellAvatar, 'me-3')}
        src={appointment.profile_pic}
        roundedCircle
      />
      <div className={styles.appointmentCellContent}>
        <h5>{appointment.name}</h5>
        <p>{appointment.speciality}</p>
      </div>
      <div
        className={clsx(
          styles.appointmentCellWrapper,
          'd-flex align-items-center flex-column',
        )}>
        <p className={clsx(styles.appointmentCellTime, 'mb-0')}>
          {appointment.appointmentTime}
        </p>
        <p className='mb-0'>{appointment.appointmentDate}</p>
      </div>
    </ListGroup.Item>
  );
};

export default AppointmentCell;

AppointmentCell.propTypes = {
  appointment: PropTypes.object.isRequired,
};
