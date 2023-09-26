import React from 'react';
import PropTypes from 'prop-types';
import {MdLabelOutline} from 'react-icons/md';
import styles from '../index.module.scss';

const Labels = ({labels}) => {
  return (
    <div className={styles.todoListItemLabelGroup}>
      {labels.map((label, index) => {
        return (
            <span key={index}
              className={styles.todoListItemLabelGroupItem}
              style={{color: label.color}}>
              <MdLabelOutline />
            </span>
        );
      })}
    </div>
  );
};

export default Labels;

Labels.propTypes = {
  labels: PropTypes.array.isRequired,
};
