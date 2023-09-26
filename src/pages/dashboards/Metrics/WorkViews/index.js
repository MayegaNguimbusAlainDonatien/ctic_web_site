import React from 'react';
import WorkViewsGraph from './WorkViewsGraph';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';

const ProfileViews = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard cardBodyClass='d-flex flex-column' heightFull>
      <h3 className='mb-1 fs-5 text-danger'>{data.views}</h3>
      <p className='fs-7 text-muted mb-0'>{messages['dashboard.workViews']}</p>
      <div className='mt-auto'>
        <WorkViewsGraph data={data.graphData} />
      </div>
    </AppCard>
  );
};

export default ProfileViews;

ProfileViews.defaultProps = {
  data: {
    views: '',
    graphData: [],
  },
};

ProfileViews.propTypes = {
  data: PropTypes.object,
};
