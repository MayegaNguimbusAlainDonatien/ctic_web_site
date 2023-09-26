import React from 'react';
import AppCard from '@crema/core/AppCard';
import AppSelect from '@crema/core/AppSelect';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import MapChart from './MapChart';

const EarningByCountry = ({earningData}) => {
  const handleSelectionType = (data) => {
    console.log('data: ', data);
  };

  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      title={messages['dashboard.analytics.earningByCountries']}
      action={
        <AppSelect
          selectBoxClass={styles.appSelectBox}
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleSelectionType}
        />
      }>
      <div className={styles.countryMapChart}>
        <MapChart />
      </div>

      <div className='d-flex align-items-center flex-wrap justify-content-between'>
        {earningData.map((data) => (
          <div className={styles.earningCountryFooterItem} key={data.id}>
            <h3>${data.amount}</h3>
            <div className='d-flex align-items-center'>
              <span
                className={styles.dot}
                style={{backgroundColor: data.color}}
              />
              <p>{data.country}</p>
            </div>
          </div>
        ))}
      </div>
    </AppCard>
  );
};

export default EarningByCountry;

EarningByCountry.propTypes = {
  earningData: PropTypes.array,
};
