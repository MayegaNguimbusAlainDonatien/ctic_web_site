import React from 'react';
import {useIntl} from 'react-intl';
import AppCard from '@crema/core/AppCard';
import VisitsGraph from './VisitsGraph';
import AppMenu from '@crema/core/AppMenu';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const CancelVisits = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      className='overflow-hidden'
      title={messages['healthCare.cancelledVisits']}
      action={<AppMenu />}>
      <div className='d-flex align-items-center mb-4'>
        <span className={styles.cancelVisitsNumber}>32</span>
        <span className={styles.cancelArrowIcon}>
          <img src={'/assets/images/dashboard/decries_icon.png'} alt='down' />
        </span>
      </div>
      <div className={styles.cancelVisitsGraph}>
        <VisitsGraph data={data} />
      </div>
    </AppCard>
  );
};

export default CancelVisits;

CancelVisits.defaultProps = {
  data: [],
};

CancelVisits.propTypes = {
  data: PropTypes.array,
};
