import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {Image} from "react-bootstrap";
import styles from '../index.module.scss';
import clsx from "clsx";

const AssignedStaff = ({assignedStaff}) => {
  return (
    <>
      {assignedStaff ? (
        <div className={styles.todoAssignedStaff}>
          {assignedStaff.image ? (
            <Image  className={styles.todoAvatar36} src={assignedStaff.image} roundedCircle />
          ) : (
            <span className={clsx(styles.todoAvatar36, styles.todoAvatarName,)}>
              {assignedStaff?.name.charAt(0)}
            </span>
          )}
          <div className={styles.todoAssignedStaffInfo}>
            <p>
              <IntlMessages id='todo.assignedTo' />
            </p>
            <p className={styles.todoAssignedStaffTitle}>{assignedStaff.name}</p>
          </div>
        </div>
      ) : (
        <div className={styles.todoAssignedStaff}>
          <Image  className={styles.todoAvatar36} src={'/assets/images/placeholder.jpg'} roundedCircle />
          <div className={styles.todoAssignedStaffInfo}>
            <p className={styles.todoAssignedStaffTitle}>
              <IntlMessages id='todo.currentlyUnassigned' />
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AssignedStaff;

AssignedStaff.defaultProps = {
  assignedStaff: null,
};

AssignedStaff.propTypes = {
  assignedStaff: PropTypes.object,
};
