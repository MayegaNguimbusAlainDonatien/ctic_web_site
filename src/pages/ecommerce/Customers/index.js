import React, {useEffect, useState} from 'react';
import CustomerTable from './CustomerTable';
import AppsContainer from '@crema/core/AppsContainer';
import {useIntl} from 'react-intl';
import {useDispatch, useSelector} from 'react-redux';
import {getCustomers} from '../../../redux/actions';
import AppsHeader from '@crema/core/AppsContainer/AppsHeader';
import AppsContent from '@crema/core/AppsContainer/AppsContent';
import AppsPagination from '@crema/core/AppsPagination';
import AppInfoView from '@crema/core/AppInfoView';
import {Form, Button, Modal} from 'react-bootstrap';
import styles from './index.module.scss';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import EditCustomer from './EditCustomer';
import clsx from 'clsx';

const Customers = () => {
  const {messages} = useIntl();
  const dispatch = useDispatch();
  const {customers, customerCount} = useSelector(({ecommerce}) => ecommerce);
  const {loading} = useSelector(({common}) => common);
  const [page, setPage] = useState(0);
  const [search, setSearchQuery] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onChange = (page) => {
    setPage(page);
  };
  useEffect(() => {
    dispatch(getCustomers(search, page));
  }, [dispatch, search, page]);

  const onSearchOrder = (e) => {
    setSearchQuery(e.target.value);
    setPage(0);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <AppPageMetadata title='Customers' />
      <AppsContainer
        title={messages['sidebar.ecommerce.customers']}
        fullView
        type='bottom'>
        <AppsHeader key={'wrap'}>
          <div className='d-flex flex-row align-items-center justify-content-between w-100'>
            <div className={styles.customerHeaderInputView}>
              <Form.Control
                id='user-name'
                placeholder='Search'
                onChange={onSearchOrder}
              />
            </div>
            <div
              className={clsx(
                styles.customerHeaderRight,
                'd-flex flex-row align-items-center',
              )}>
              <Button variant='primary' onClick={showModal}>
                Add Customer
              </Button>

              <AppsPagination
                className={clsx(
                  styles.customerHeaderPagination,
                  'd-none d-md-block',
                )}
                pageSize={10}
                count={customerCount}
                page={page}
                onChange={onChange}
              />
            </div>
          </div>
        </AppsHeader>

        <AppsContent
          key={'wrap1'}
          style={{
            paddingTop: 10,
            paddingBottom: 10,
          }}>
          <CustomerTable loading={loading} customers={customers} />
        </AppsContent>

        <AppsPagination
          key={'wrap2'}
          className={clsx(styles.customerFooterPagination, 'd-md-none d-block')}
          pageSize={10}
          count={customerCount}
          page={page}
          onChange={onChange}
        />
      </AppsContainer>

      <Modal show={isModalVisible} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>{messages['ecommerce.addCustomer']}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditCustomer />
        </Modal.Body>
      </Modal>
      <AppInfoView />
    </>
  );
};

export default Customers;
