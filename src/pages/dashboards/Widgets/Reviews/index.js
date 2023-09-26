import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from './ReviewItem';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import styles from './index.module.scss';
import AppScrollbar from '@crema/core/AppScrollbar';
import AppList from '@crema/core/AppList';

const Reviews = (props) => {
  const {data} = props;
  const {messages} = useIntl();

  return (
    <AppCard heightFull title={messages['common.reviews']}>
      <AppScrollbar className={styles.reviewScrollbar}>
        <AppList
          data={data}
          renderItem={(item) => {
            return <ReviewItem key={item.id} item={item} />;
          }}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Reviews;

Reviews.defaultProps = {
  data: [],
};

Reviews.propTypes = {
  data: PropTypes.array,
};
