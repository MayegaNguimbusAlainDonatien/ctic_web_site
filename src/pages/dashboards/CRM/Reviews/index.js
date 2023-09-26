import React from 'react';
import ReviewsGraph from './ReviewsGraph';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import IntlMessages from '@crema/utility/IntlMessages';
import clsx from 'clsx';

const Reviews = ({reviewGraphData}) => {
  return (
    <AppCard className={clsx(styles.reviewsCard, 'overflow-hidden')}>
      <div className={clsx(styles.reviewsContent, 'd-flex flex-column')}>
        <h3>
          <IntlMessages id='common.reviews' />
        </h3>
        <h4>34,042</h4>
        <p>
          <IntlMessages id='dashboard.reviewText' />
        </p>
      </div>
      <div className='mb-n5'>
        <ReviewsGraph reviewGraphData={reviewGraphData} />
      </div>
    </AppCard>
  );
};

export default Reviews;

Reviews.defaultProps = {
  reviewGraphData: [],
};

Reviews.propTypes = {
  reviewGraphData: PropTypes.array,
};
