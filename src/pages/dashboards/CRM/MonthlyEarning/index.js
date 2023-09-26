import React from 'react';
import EarningGraph from './EarningGraph';
import PropTypes from 'prop-types';
import Categories from './Categories';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import {ListGroup} from 'react-bootstrap';
import {useIntl} from 'react-intl';
import clsx from 'clsx';

export const MonthlyEarning = ({earningGraphData}) => {
  const {messages} = useIntl();
  return (
    <AppCard heightFull title={messages['dashboard.earningInMonth']}>
      <div className={styles.earningGraph}>
        <EarningGraph earningGraphData={earningGraphData} />
      </div>

      <div className={clsx(styles.earningListView, 'pt-2 mt-2')}>
        <ListGroup>
          {earningGraphData.map((category) => {
            if (category.name !== '') {
              return <Categories category={category} key={category.name} />;
            }
            return null;
          })}
        </ListGroup>
      </div>
    </AppCard>
  );
};

export default MonthlyEarning;

MonthlyEarning.defaultProps = {
  earningGraphData: [],
};

MonthlyEarning.propTypes = {
  earningGraphData: PropTypes.array,
};
