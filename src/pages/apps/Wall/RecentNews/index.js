import React from 'react';
import AppCard from '@crema/core/AppCard';
import AppList from '@crema/core/AppList';
import NewsItem from './NewsItem';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const RecentNews = ({recentNews}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='position-relative'
      title={messages['wall.recentNews']}
      footer={
        <div className={styles.recentNewsMoreBtn}>
          <span key={1} className={styles.recentNewsLink}>
            View More
          </span>
        </div>
      }>
      <AppList
        className={styles.listWrapper}
        data={recentNews}
        renderItem={(item, index) => <NewsItem key={index} item={item} />}
      />
    </AppCard>
  );
};

export default RecentNews;

RecentNews.propTypes = {
  recentNews: PropTypes.array,
};
