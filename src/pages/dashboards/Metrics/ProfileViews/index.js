import React from 'react';
import ProfileViewsGraph from './ProfileViewsGraph';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';

const ProfileViews = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard cardBodyClass='d-flex flex-column' heightFull>
      <h3 className='mb-1 fs-5'>{data.views}</h3>
      <p className='fs-7 text-muted mb-0'>{messages['dashboard.profileViews']}</p>
      <div className='mt-auto'>
        <ProfileViewsGraph data={data.graphData} />
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
