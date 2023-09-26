import React from 'react';
import {Dropdown} from 'react-bootstrap';
import {AiOutlineMore} from 'react-icons/ai';
import AppIconBtn from '@crema/core/AppIconBtn';
import styles from '../index.module.scss';
import clsx from 'clsx';

const options = ['View Order', 'Edit', 'Delete'];

const OrderActions = () => {
  return (
    <>
      <Dropdown align='end'>
        <Dropdown.Toggle
          id='dropdown-basic'
          className={clsx(
            styles.dropdownToggleBtn,
            'p-0 bg-transparent border-0 d-flex align-items-center shadow-none',
          )}>
          <AppIconBtn smallBtn className={styles.appIconBtn}>
            <AiOutlineMore />
          </AppIconBtn>
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles.appDropdownMenu}>
          {options.map((option) => (
            <Dropdown.Item key={option} style={{fontSize: 14}}>
              {option}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
export default OrderActions;
