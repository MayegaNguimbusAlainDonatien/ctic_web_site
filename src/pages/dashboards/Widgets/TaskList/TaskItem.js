import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const TaskItem = (props) => {
  const {item} = props;

  return (
    <ListGroup.Item
      key={item.id}
      className={clsx(
        styles.taskItem,
        'item-hover d-flex flex-column border-0 align-items-start',
      )}>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </ListGroup.Item>
  );
};

export default TaskItem;

TaskItem.propTypes = {
  item: PropTypes.object.isRequired,
};
