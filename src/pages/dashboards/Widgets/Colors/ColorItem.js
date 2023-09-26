import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup, Form} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const ColorItem = (props) => {
  const {item, handleChange} = props;

  return (
    <ListGroup.Item
      key={item.id}
      className={clsx(
        styles.colorItem,
        'item-hover d-flex align-items-center justify-content-start border-0',
      )}>
      <Form.Check
        className={styles.colorCheckBox}
        checked={item.isChecked}
        onChange={(e) => handleChange(e, item)}
      />
      <span style={{color: item.color}}>{item.name}</span>
    </ListGroup.Item>
  );
};

export default ColorItem;

ColorItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleChange: PropTypes.func,
};
