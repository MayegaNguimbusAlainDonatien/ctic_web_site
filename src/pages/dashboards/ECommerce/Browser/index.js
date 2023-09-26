import React from 'react';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import {ListGroup} from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import clsx from 'clsx';

const BrowserCell = ({item}) => {
  return (
    <div
      className={clsx(
        styles.browserCell,
        'd-flex align-items-center item-hover',
      )}>
      <span className={styles.browserThumb}>
        <img alt='' src={item.icon} />
      </span>

      <div className={clsx(styles.browserContent, 'flex-grow-1')}>
        <h3>{item.name}</h3>
        <p>{item.value}</p>
      </div>
    </div>
  );
};

BrowserCell.propTypes = {
  item: PropTypes.object,
};
const Browser = ({browserData}) => {
  const {messages} = useIntl();
  return (
    <AppCard heightFull title={messages['eCommerce.browser']} cardBodyClass='px-0'>
      <ListGroup>
        {browserData.map((item, index) => (
          <BrowserCell item={item} key={index} />
        ))}
      </ListGroup>
    </AppCard>
  );
};

export default Browser;

Browser.propTypes = {
  browserData: PropTypes.array,
};
