import React from 'react';
import PropTypes from 'prop-types';
import styles from '../index.module.scss';

const Priority = ({priority}) => {
  return (
    <span className={styles.badgePriority} style={{color: priority.color, backgroundColor: `${priority.color}20`}}>
      {priority.name}
    </span>
  );
};

export default Priority;

Priority.propTypes = {
  priority: PropTypes.object.isRequired,
};
