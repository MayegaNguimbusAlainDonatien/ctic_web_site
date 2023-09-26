import React from 'react';
import PropTypes from 'prop-types';
import {Button, Form} from 'react-bootstrap';
import {AiOutlineEdit} from 'react-icons/ai';
import clsx from 'clsx';
import styles from '../index.module.scss';

const AddressCell = ({address, selectedAddress, setSelectAddress}) => {
  const isActive = selectedAddress.id === address.id;
  return (
    <div
      onClick={() => setSelectAddress(address)}
      className={clsx(styles.deliveryAddressCell, 'item-hover')}>
      <div
        className={clsx(
          styles.deliveryAddressRow,
          'd-flex flex-column position-relative flex-sm-row align-items-sm-center',
        )}>
        <Form.Check
          type='radio'
          className={clsx(styles.deliveryRadio, 'p-0')}
          checked={isActive}
          label={address.name}
        />
        <p className='mb-0'>{address.mobile}</p>
        {isActive ? (
          <Button className={styles.deliveryEditBtn} size='small'>
            <AiOutlineEdit />
          </Button>
        ) : null}
      </div>
      <div className={styles.deliveryAddressItem}>
        {address.addressLine}, {address.city}, {address.pin}
      </div>
      {isActive ? (
        <div className={styles.deliveryAddressItem}>
          <Button type='primary' className={styles.btn}>
            Deliver Here
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default AddressCell;

AddressCell.defaultProps = {};

AddressCell.propTypes = {
  address: PropTypes.object.isRequired,
  selectedAddress: PropTypes.object.isRequired,
  setSelectAddress: PropTypes.func.isRequired,
};
