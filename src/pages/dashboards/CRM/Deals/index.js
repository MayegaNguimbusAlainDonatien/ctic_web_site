import React, {useState} from 'react';
import DealsTable from './DealsTable';
import IntlMessages from '@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import AppSelect from '@crema/core/AppSelect';
import styles from './index.module.scss';

const Deals = (props) => {
  const {dealsTableData} = props;
  const [tableData, setTableData] = useState(dealsTableData);

  const handleChange = (value) => {
    if (value === messages['dashboard.allDeals']) {
      setTableData(dealsTableData);
    } else if (value === messages['todo.completed']) {
      setTableData(
        dealsTableData.filter((data) => data.progress === 'Approved'),
      );
    } else {
      setTableData(
        dealsTableData.filter((data) => data.progress === 'Pending'),
      );
    }
  };

  const {messages} = useIntl();

  return (
    <AppCard cardBodyClass='px-0'
      title={
        <div className='d-flex align-items-center'>
          <h3 className={styles.dealsTitle}>
            <IntlMessages id='dashboard.deals' />
          </h3>
          <AppSelect
            menus={[
              messages['dashboard.allDeals'],
              messages['todo.completed'],
              messages['common.pending'],
            ]}
            defaultValue={messages['dashboard.allDeals']}
            onChange={handleChange}
          />
        </div>
      }
      action={
        <a href='#' className='text-danger text-decoration-none'>
          {messages['common.viewAll']}
        </a>
      }
      heightFull>
      <DealsTable dealsTableData={tableData} />
    </AppCard>
  );
};

export default Deals;

Deals.defaultProps = {
  dealsTableData: [],
};

Deals.propTypes = {
  dealsTableData: PropTypes.array,
};
