import React from 'react';
import PropTypes from 'prop-types';
import {Form} from 'react-bootstrap';
import clsx from 'clsx';
import styles from './index.module.scss';

const CheckedCell = ({selected, data, onChange}) => {
  return (
    <div
      onClick={() => onChange(data.id)}
      className={clsx(
        styles.productSidebarCheckedCell,
        'd-flex align-items-center',
      )}>
      <Form.Check checked={selected.some((item) => item === data.id)} />
      <p className={clsx(styles.checkBoxLabel, 'mb-0')}>{data.name}</p>
    </div>
  );
};

export default CheckedCell;

CheckedCell.propTypes = {
  selected: PropTypes.array,
  data: PropTypes.object,
  onChange: PropTypes.func,
};
