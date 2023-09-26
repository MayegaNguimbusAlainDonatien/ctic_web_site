import React from 'react';
import PropTypes from 'prop-types';
import StoriesItem from './StoriesItem';
import {useIntl} from 'react-intl';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import clsx from 'clsx';

const Stories = ({stories}) => {
  const {messages} = useIntl();

  return (
    <AppCard
      className='mb-4'
      title={messages['wall.stories']}
      action={
        <a
          className={clsx(styles.viewAll, 'text-danger text-decoration-none')}
          href='#/'>
          {messages['common.viewAll']}
        </a>
      }>
      <div className={clsx(styles.storiesRow, 'd-flex')}>
        {stories.map((data) => (
          <div key={data.id} className={clsx(styles.storiesCol, 'w-50')}>
            <StoriesItem data={data} />
          </div>
        ))}
      </div>
    </AppCard>
  );
};

export default Stories;

Stories.propTypes = {
  stories: PropTypes.array,
};
