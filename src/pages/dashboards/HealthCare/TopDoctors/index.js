import React from 'react';
import {useIntl} from 'react-intl';
import AppCard from '@crema/core/AppCard';
import AppMenu from '@crema/core/AppMenu';
import DoctorCell from './DoctorCell';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import AppScrollbar from '@crema/core/AppScrollbar';
import {ListGroup} from "react-bootstrap";

const TopDoctors = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      cardBodyClass='px-0'
      title={messages['healthCare.topDoctors']}
      action={<AppMenu />}>
      <AppScrollbar className={styles.topDrScrollbar}>
        <ListGroup className='border-0'>
          {data.map((doctor) => (
            <DoctorCell key={doctor.id} doctor={doctor} />
          ))}
        </ListGroup>
      </AppScrollbar>
    </AppCard>
  );
};

export default TopDoctors;

TopDoctors.defaultProps = {
  data: [],
};

TopDoctors.propTypes = {
  data: PropTypes.array,
};
