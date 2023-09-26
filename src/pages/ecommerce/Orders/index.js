import React, {useEffect, useState} from 'react';
import OrderTable from './OrderTable';
import AppsContainer from '@crema/core/AppsContainer';
import {useIntl} from 'react-intl';
import {useDispatch, useSelector} from 'react-redux';
import {getRecentOrders} from '../../../redux/actions';
import AppsHeader from '@crema/core/AppsContainer/AppsHeader';
import AppsContent from '@crema/core/AppsContainer/AppsContent';
import AppsPagination from '@crema/core/AppsPagination';
import AppInfoView from '@crema/core/AppInfoView';
import {Button, Form} from 'react-bootstrap';
import styles from './index.module.scss';
import {Link} from 'react-router-dom';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import clsx from 'clsx';

const Orders = () => {
  const {messages} = useIntl();
  const dispatch = useDispatch();
  const {recentOrders, orderCount} = useSelector(({ecommerce}) => ecommerce);
  const {loading} = useSelector(({common}) => common);
  const [page, setPage] = useState(0);
  const [search, setSearchQuery] = useState('');

  const onChange = (page) => {
    setPage(page);
  };
  useEffect(() => {
    dispatch(getRecentOrders(search, page));
  }, [dispatch, search, page]);

  const onSearchOrder = (e) => {
    setSearchQuery(e.target.value);
    setPage(0);
  };
  return (
    <>
      <AppPageMetadata title='Orders' />
      <AppsContainer
        title={messages['eCommerce.recentOrders']}
        type='bottom'
        fullView>
        <AppsHeader>
          <div className='d-flex flex-row align-items-center w-100 justify-content-between'>
            <div className={styles.orderHeaderInputView}>
              <Form.Control
                id='user-name'
                placeholder='Search'
                onChange={onSearchOrder}
              />
            </div>
            <div
              className={clsx(
                styles.orderHeaderRight,
                'd-flex flex-row align-items-center',
              )}>
              <Button type='primary'>
                <Link className={styles.link} to='/ecommerce/products'>
                  Continue Shopping
                </Link>
              </Button>

              <AppsPagination
                className={clsx(
                  styles.orderHeaderPagination,
                  'd-none d-md-block',
                )}
                pageSize={10}
                count={orderCount}
                page={page}
                onChange={onChange}
              />
            </div>
          </div>
        </AppsHeader>

        <AppsContent
          style={{
            paddingTop: 10,
            paddingBottom: 10,
          }}>
          <OrderTable loading={loading} orderData={recentOrders} />
        </AppsContent>

        <AppsPagination
          className={clsx(styles.orderHeaderPagination, 'd-md-none d-block')}
          pageSize={10}
          count={orderCount}
          page={page}
          onChange={onChange}
        />
      </AppsContainer>
      <AppInfoView />
    </>
  );
};

export default Orders;
