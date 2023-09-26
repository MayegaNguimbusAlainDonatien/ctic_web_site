import React from 'react';
import PropTypes from 'prop-types';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import clsx from 'clsx';
import styles from './index.module.scss';

const Labels = ({labels}) => {
  return (
    <div
      className={clsx(styles.scrumBoardLabelFlex, 'd-flex align-items-center')}>
      {labels.map((label) => {
        return (
          <OverlayTrigger
            placement='top'
            key={label.id}
            overlay={<Tooltip id='button-tooltip-3'>{label.name}</Tooltip>}>
            <span
              className={styles.scrumBoardLabel}
              key={label.id}
              style={{backgroundColor: label.color}}
            />
          </OverlayTrigger>
        );
      })}
    </div>
  );
};

export default Labels;

Labels.propTypes = {
  labels: PropTypes.array.isRequired,
};
