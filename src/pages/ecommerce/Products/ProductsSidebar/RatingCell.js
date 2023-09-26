import React from 'react';
import PropTypes from 'prop-types';
import {AiFillStar} from 'react-icons/ai';
import {Form} from 'react-bootstrap';
import clsx from 'clsx';
import styles from './index.module.scss';

const RatingCell = ({selected, data, onChange}) => {
  return (
    <div
      onClick={() => onChange(data)}
      className={clsx(
        styles.productSidebarRatingCell,
        'd-flex align-items-center',
      )}>
      <Form.Check checked={selected.some((item) => item === data)} />
      <p className={clsx(styles.checkBoxLabel, 'mb-0')}>{data}</p>
      <AiFillStar style={{fontSize: 14, marginLeft: 5}} />
    </div>
  );
};

export default RatingCell;

RatingCell.propTypes = {
  selected: PropTypes.any,
  data: PropTypes.any,
  onChange: PropTypes.func,
};
