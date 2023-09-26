import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup, Form} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const CategoryItem = (props) => {
  const {item, handleChange} = props;
  return (
    <ListGroup.Item
      key={item.id}
      className={clsx(
        styles.categoryItem,
        'position-relative d-flex w-50 justify-content-start item-hover border-0',
      )}>
      <Form.Check
        className={styles.checkBox}
        color='primary'
        checked={item.isChecked}
        onChange={(e) => handleChange(e, item)}
      />
      <span style={{color: `${!item.isChecked ? 'text.secondary' : ''}`}}>
        {item.name}
      </span>
    </ListGroup.Item>
  );
};

export default CategoryItem;

CategoryItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
