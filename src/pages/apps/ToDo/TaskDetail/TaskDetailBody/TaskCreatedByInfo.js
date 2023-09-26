import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {Image} from "react-bootstrap";
import styles from '../index.module.scss';
import clsx from "clsx";

const TaskCreatedByInfo = ({createdBy, createdOn}) => {
  return (
    <div className={styles.todoTaskCrByInfo}>
      {createdBy.image ? (
        <Image src={createdBy.image} className={styles.todoAvatar30} roundedCircle />
      ) : (
        <span className={clsx(styles.todoAvatar30, styles.todoAvatarName, )}>
          {createdBy.name[0]}
        </span>
      )}
      <div className={styles.todoTaskCrByInfoContent}>
        <span className={styles.todoCrByName}>{createdBy.name}</span>
        <p className='mb-0'>
          <span>
            <IntlMessages id='todo.createdThisTask' />
          </span>
          <span className={styles.todoCrOn}>{createdOn}</span>
        </p>
      </div>
    </div>
  );
};

export default TaskCreatedByInfo;

TaskCreatedByInfo.propTypes = {
  createdBy: PropTypes.object.isRequired,
  createdOn: PropTypes.string.isRequired,
};
