import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import {Button, Image, ListGroup} from "react-bootstrap";
import clsx from "clsx";

const DoctorCell = ({doctor}) => {
  return (
    <ListGroup.Item className={clsx(styles.doctorCell, 'd-flex align-items-center border-0')}>
      <Image className={styles.doctorAvatar} src={doctor.profile_pic} roundedCircle />
      <div className={styles.doctorContent}>
        <h5>{doctor.name}</h5>
        <p>{doctor.speciality}</p>
      </div>
      <div className={clsx(styles.doctorAction, 'd-flex align-items-center')}>
        {doctor.scheduled ? (
          <Button variant="outline-secondary">Remove</Button>
        ) : (
          <Button variant="outline-primary">Schedule</Button>
        )}
      </div>
    </ListGroup.Item>
  );
};

export default DoctorCell;

DoctorCell.propTypes = {
  doctor: PropTypes.object.isRequired,
};
