import React from 'react';
import PropTypes from 'prop-types';
import WhatsHappenItem from './WhatsHappenItem';
import {useIntl} from 'react-intl';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import clsx from 'clsx';

const WhatsHappen = ({whatsHappen}) => {
  const {messages} = useIntl();

  return (
    <AppCard
      className='mb-4'
      title={messages['wall.whatsHappening']}
      action={
        <a
          className={clsx(styles.viewAll, 'text-danger text-decoration-none')}
          href='#/'>
          {messages['common.viewAll']}
        </a>
      }>
      <div className={styles.whatHappenWrapper}>
        {whatsHappen.map((data) => (
          <WhatsHappenItem data={data} key={data.id} />
        ))}
      </div>
    </AppCard>
  );
};

export default WhatsHappen;

WhatsHappen.propTypes = {
  whatsHappen: PropTypes.array,
};
