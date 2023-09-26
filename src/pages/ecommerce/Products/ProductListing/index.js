import React, {useEffect} from 'react';
import AppsHeader from '@crema/core/AppsContainer/AppsHeader';
import ProductHeader from '../ProductHeader';
import {useDispatch, useSelector} from 'react-redux';
import {VIEW_TYPE} from '../../../../redux/reducers/Ecommerce';
import ProductGrid from './ProductGrid/index';
import {onGetEcommerceData, setFilters} from '../../../../redux/actions';
import ProductList from './ProductList';
import AppsContent from '@crema/core/AppsContainer/AppsContent';
import styles from './index.module.scss';
import clsx from 'clsx';

const ProductListing = () => {
  const {viewType} = useSelector(({ecommerce}) => ecommerce);
  const dispatch = useDispatch();

  const {ecommerceList, filterData} = useSelector(({ecommerce}) => ecommerce);
  const {loading} = useSelector(({common}) => common);

  console.log('ecommerceList', ecommerceList);
  const searchProduct = (title) => {
    dispatch(setFilters({...filterData, title}));
  };
  useEffect(() => {
    dispatch(onGetEcommerceData(filterData));
  }, [dispatch, filterData]);

  return (
    <div className='position-relative d-flex flex-column h-100'>
      <AppsHeader>
        <ProductHeader viewType={viewType} onChange={searchProduct} />
      </AppsHeader>

      <AppsContent>
        <div
          className={clsx(styles.productListMainContent, 'd-flex flex-column')}>
          {viewType === VIEW_TYPE.GRID ? (
            <ProductGrid ecommerceList={ecommerceList} loading={loading} />
          ) : (
            <ProductList ecommerceList={ecommerceList} loading={loading} />
          )}
        </div>
      </AppsContent>
    </div>
  );
};

export default ProductListing;
