import React from 'react';
import {useDispatch} from 'react-redux';
import {setViewType} from '../../../../redux/actions/Ecommerce';
import {VIEW_TYPE} from '../../../../redux/reducers/Ecommerce';
import PropTypes from 'prop-types';
import {AiOutlineAppstore, AiOutlineUnorderedList} from 'react-icons/ai';
import clsx from 'clsx';
import styles from './index.module.scss';
import {Button, Form, InputGroup} from 'react-bootstrap';
import {Search} from 'react-bootstrap-icons';

const ProductHeader = ({onChange, viewType}) => {
  const dispatch = useDispatch();

  return (
    <div
      className={clsx(styles.productHeader, 'd-flex align-items-center w-100')}>
      <div
        className={clsx(
          styles.productHeaderLeft,
          'd-flex align-items-center w-100 overflow-hidden',
        )}>
        <h3>Watches</h3>
        <span className='d-none d-sm-block text-truncate'>
          (Showing 1 – 40 products of 93,723 products)
        </span>
      </div>
      <div className='d-flex align-items-center'>
        <InputGroup className={styles.productHeaderSearch}>
          <Form.Control
            className={styles.searchInput}
            placeholder='Search here'
            onChange={(e) => onChange(e.target.value)}
          />
          <InputGroup.Text id='basic-addon2' className={styles.searchBtn}>
            <Search />
          </InputGroup.Text>
        </InputGroup>

        <Button
          variant='outline-light'
          className={clsx(
            styles.productHeaderBtn,
            viewType === VIEW_TYPE.LIST ? styles.active : '',
            'd-flex align-items-center',
          )}
          onClick={() => dispatch(setViewType(VIEW_TYPE.LIST))}>
          <AiOutlineUnorderedList />
        </Button>
        <Button
          variant='outline-light'
          className={clsx(
            styles.productHeaderBtn,
            viewType === VIEW_TYPE.GRID ? styles.active : '',
            'd-flex align-items-center',
          )}
          onClick={() => dispatch(setViewType(VIEW_TYPE.GRID))}>
          <AiOutlineAppstore />
        </Button>
      </div>
    </div>
  );
};

export default ProductHeader;

ProductHeader.propTypes = {
  viewType: PropTypes.any,
  onChange: PropTypes.func,
};
