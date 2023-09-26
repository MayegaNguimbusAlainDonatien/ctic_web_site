import AppCard from '@crema/core/AppCard';
import React from 'react';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import NewsList from './newsList';
const LatestNews = ({data}) => {
  const {messages} = useIntl();
  console.log(data, '123');
  return (
    <AppCard
      titleClass='pb-1'
      title={messages['dashboard.latestNews']}
      action={messages['common.viewAll']}
      actionClass='text-danger'
      heightFull
      >
      <NewsList data={data} />
    </AppCard>
  );
};

export default LatestNews;
LatestNews.propTypes = {
  data: PropTypes.array,
};
