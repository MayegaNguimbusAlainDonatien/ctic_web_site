import React from 'react';
import AppSelect from '@crema/core/AppSelect';
import AppCard from '@crema/core/AppCard';
import GradeGraph from './GradeGraph';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const AverageGrades = ({grades}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      className='d-flex flex-column overflow-hidden'
      title={messages['academy.averageGrade']}
      action={
        <div className='position-relative d-inline-flex'>
          <div className='mx-1'>
            <AppSelect
              menus={[2020, 2021, 2018]}
              defaultValue={2020}
              onChange={() => {}}
            />
          </div>
          <div className='mx-1'>
            <AppSelect
              menus={['All Months', 'Jan', 'Feb']}
              defaultValue={'All Months'}
              onChange={() => {}}
            />
          </div>
        </div>
      }>
      <div className={styles.averageGradesGraphView}>
        <GradeGraph grades={grades} />
      </div>
    </AppCard>
  );
};

export default AverageGrades;

AverageGrades.propTypes = {
  grades: PropTypes.array,
};
