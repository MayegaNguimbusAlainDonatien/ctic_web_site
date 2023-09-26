import React from 'react';
import PropTypes from 'prop-types';
import AppMenu from '@crema/core/AppMenu';
import clsx from 'clsx';
import styles from './index.module.scss';

const CustomerItem = ({item}) => {
  const getStatusColor = () => {
    if (item.orders === 0) {
      return '#F84E4E';
    } else if (item.orders > 0) {
      return '#43C888';
    }
  };

  return (
    <div
      className={clsx(
        styles.customItem,
        'd-flex align-items-center flex-nowrap item-hover',
      )}>
      <img
        width='48px'
        height='48px'
        className='bg-info rounded-circle me-3'
        src={item.image}
      />
      <div className={styles.contentArea}>
        <h3>{item.name}</h3>
        <p>{item.message}</p>
      </div>
      <div
        className={clsx(styles.contentAreaAction, 'd-flex align-items-center')}>
        <span
          className={styles.badgeRoot}
          style={{
            color: getStatusColor(),
            backgroundColor: getStatusColor() + '44',
          }}>
          {item.orders} orders
        </span>
        <AppMenu />
      </div>
    </div>
  );
};

export default CustomerItem;

CustomerItem.propTypes = {
  item: PropTypes.object.isRequired,
};
