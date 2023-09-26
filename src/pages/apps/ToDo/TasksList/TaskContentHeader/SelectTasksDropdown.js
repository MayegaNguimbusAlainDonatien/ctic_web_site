import React, {useState} from 'react';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {Form} from "react-bootstrap";
import styles from '../index.module.scss';

const SelectTasksDropdown = ({onSelectTasks}) => {
  const [selectedItems, setSelectedItems] = useState(0);

  const onChangeSelectValue = (value) => {
    setSelectedItems(value);
    onSelectTasks(value);
  };

  const {messages} = useIntl();

  return (
    <span className={styles.todoSelectTaskDropdownView}>
      <Form.Select
        value={selectedItems}
        onChange={onChangeSelectValue}
        className={styles.todoSelectTaskDropdown}>
        <option value='0'>{messages['common.all']}</option>
        <option value='1'>{messages['common.none']}</option>
        <option value='2'>{messages['common.starred']}</option>
        <option value='3'>
          {messages['common.attachments']}
        </option>
      </Form.Select>
    </span>
  );
};

export default SelectTasksDropdown;

SelectTasksDropdown.propTypes = {
  onSelectTasks: PropTypes.func,
};
