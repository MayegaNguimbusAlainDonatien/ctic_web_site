import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import AppCard from '@crema/core/AppCard';
import {AiOutlineRight} from 'react-icons/ai';
import {Button, Form} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const Subscribe = () => {
  const {messages} = useIntl();

  return (
    <AppCard
      heightFull
      className={styles.subCard}
      title={messages['dashboard.subscribe']}>
      <div className='d-flex flex-column'>
        <p className={styles.subText}>
          <IntlMessages id='dashboard.subscribeContent' />
        </p>
        <Form className='mt-auto'>
          <div className='d-flex align-items-center'>
            <div className='w-75'>
              <Form.Control
                className={clsx(styles.subInput, 'w-100')}
                placeholder={messages['common.email']}
                name='email'
              />
            </div>
            <div className={clsx(styles.formBtnField, 'w-25')}>
              <Button type='primary' className='w-100'>
                <AiOutlineRight />
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </AppCard>
  );
};

export default Subscribe;
