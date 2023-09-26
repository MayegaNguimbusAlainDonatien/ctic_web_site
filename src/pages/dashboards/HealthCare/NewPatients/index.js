import React from 'react';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import PatientGraph from './PatientGraph';
import AppMenu from '@crema/core/AppMenu';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const NewPatients = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      className='overflow-hidden'
      title={messages['healthCare.newPatient']}
      action={<AppMenu />}>
      <div className='d-flex align-items-center mb-4'>
        <span className={styles.patientsNumber}>214</span>
        <span className={styles.patientsArrowIcon}>
          <img
            src={'/assets/images/dashboard/metrics_icon_active.png'}
            alt='down'
          />
        </span>
      </div>
      <div className={styles.patientsGraph}>
        <PatientGraph data={data} />
      </div>
    </AppCard>
  );
};

export default NewPatients;

NewPatients.defaultProps = {
  data: [],
};

NewPatients.propTypes = {
  data: PropTypes.array,
};
