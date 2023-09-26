import React from 'react';
import AppCard from '@crema/core/AppCard';
import CustomerItem from './CustomerItem';
import styles from './index.module.scss';
import {ListGroup} from 'react-bootstrap';
import PropTypes from 'prop-types';
import AppScrollbar from '@crema/core/AppScrollbar';
import {useIntl} from 'react-intl';

const NewCustomers = (props) => {
  const {messages} = useIntl();
  return (
    <AppCard cardBodyClass='px-0'
      title={messages['eCommerce.newCustomers']}>
      <AppScrollbar className={styles.customerScrollbar}>
        <ListGroup>
          {props.newCustomers.map((item) => (
            <CustomerItem key={item.id} item={item} />
          ))}
        </ListGroup>
      </AppScrollbar>
    </AppCard>
  );
};

export default NewCustomers;

NewCustomers.propTypes = {
  newCustomers: PropTypes.array,
};
