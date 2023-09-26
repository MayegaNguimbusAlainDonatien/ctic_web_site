import React from 'react';
import PropTypes from 'prop-types';
import VisitorsGraph from './VisitorsGraph';
import {useIntl} from 'react-intl';
import AppCard from '@crema/core/AppCard';
import {Link} from 'react-router-dom';
import styles from './index.module.scss';

const ActiveVisitors = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard cardBodyClass='p-0'>
      <div className={styles.activeVisitorGraphWrap}>
        <div className={styles.activeVisitorGraphHeader}>
          <h3>{messages['dashboard.analytics.activeVisitors']}</h3>
          <p>{messages['dashboard.analytics.pageViewPerMinutes']}</p>
        </div>
        <div className='mt-auto'>
          <VisitorsGraph data={data.graphData} />
        </div>
      </div>
      <div className={styles.activeVisitorContent}>
        <div>
          <div className={styles.activeVisitorContentHeader}>
            <h3>{data.value}</h3>
            <span style={{color: data.growth > 0.0 ? '#198754' : '#dc3545'}}>
              {data.growth}% Then yesterday
            </span>
          </div>
          <p>{data.slug}</p>
        </div>
        <div className='text-end'>
          <Link className={styles.activeVisitorLink} underline='none' to='#'>
            View Report
          </Link>
        </div>
      </div>
    </AppCard>
  );
};

export default ActiveVisitors;

ActiveVisitors.defaultProps = {};

ActiveVisitors.propTypes = {
  data: PropTypes.object,
};
