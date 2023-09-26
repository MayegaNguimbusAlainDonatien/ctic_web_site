import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import styles from './index.module.scss';

const LabelItem = ({label}) => {
  return (
    <div key={label.id} className={styles.todoLabelItem}>
      <NavLink to={`/apps/todo/label/${label.alias}`}>
        <span className={styles.todoDots} style={{backgroundColor: label.color}} />
        {label.name}
      </NavLink>
    </div>
  );
};

export default LabelItem;

LabelItem.propTypes = {
  label: PropTypes.object.isRequired,
};
