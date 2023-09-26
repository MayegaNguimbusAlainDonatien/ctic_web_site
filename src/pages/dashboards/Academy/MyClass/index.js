import AppCard from '@crema/core/AppCard';
import React from 'react';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {ListGroup, ProgressBar} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const ClassItem = ({item}) => {
  return (
    <ListGroup.Item
      key={item.id}
      className={clsx(
        styles.myClassItem,
        'd-flex align-items-center border-0',
      )}>
      <div
        className={clsx(
          styles.myClassThumb,
          'd-flex align-items-center justify-content-center',
        )}>
        <img alt='' src={item.icon} />
      </div>
      <div className={clsx(styles.myClassContent, 'flex-grow-1')}>
        <div className='d-flex align-items-center'>
          <h3 className='mb-0 d-inline-block'>{item.name}</h3>
          <span className={clsx(styles.myClassPercent, 'ms-auto')}>
            {item.percent}%
          </span>
        </div>
        <div className='mt-1'>
          <ProgressBar className={styles.anaProgressBar} now={item.percent} />
        </div>
      </div>
    </ListGroup.Item>
  );
};

const MyClass = ({classData}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      cardBodyClass='px-0'
      title={messages['academy.myClass']}>
      <ListGroup className='border-0'>
        {classData.map((data, index) => (
          <ClassItem key={index} item={data} />
        ))}
      </ListGroup>
    </AppCard>
  );
};

export default MyClass;

MyClass.propTypes = {
  classData: PropTypes.array,
};

ClassItem.propTypes = {
  item: PropTypes.object,
};
