import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import StatGraphs from './StatGraphs';
import {Tabs} from 'react-bootstrap';
import AppSelect from '@crema/core/AppSelect';
import styles from './index.module.scss';
import clsx from 'clsx';
import IntlMessages from '@crema/utility/IntlMessages';

export const Statistics = ({clientsData, incomeData, projectData}) => {
  const [projectGraphData, setProjectGraphData] = useState(projectData);
  const [clientsGraphData, setClientsGraphData] = useState(clientsData);
  const [incomeGraphData, setIncomeGraphData] = useState(incomeData);
  const [graphType, setGraphType] = useState('project');
  const {Tab} = Tabs;
  const onSetGraphValue = (data) => {
    switch (graphType) {
      case 'project': {
        setProjectGraphData(data);
        break;
      }
      case 'newClient': {
        setClientsGraphData(data);
        break;
      }
      case 'income': {
        setIncomeGraphData(data);
        break;
      }
      default:
        return null;
    }
  };

  const handleChange = (value) => {
    setGraphType(value);
  };

  const handleYearChange = (event) => {
    let value = event.target.value;
    switch (value) {
      case 2017:
        onSetGraphValue(incomeData);
        break;
      case 2018:
        onSetGraphValue(clientsData);
        break;
      case 2021:
        onSetGraphValue(projectData);
        break;
      default:
        onSetGraphValue(projectData);
    }
  };
  const handleMonthChange = (event) => {
    let value = event.target.value;
    switch (value) {
      case 'June':
        onSetGraphValue(incomeData);
        break;
      case 'July':
        onSetGraphValue(clientsData);
        break;
      case 'August':
        onSetGraphValue(projectData);
        break;
      default:
        onSetGraphValue(projectData);
    }
  };

  return (
    <AppCard
      heightFull cardHeaderClass={styles.cardHeader}
      title={
          <div className={clsx(styles.statisticsHeader, 'd-flex flex-column flex-md-row mb-1')}>
            <h3>
              <IntlMessages id='dashboard.statistics' />
            </h3>

            <div className='ms-md-4 ms-xxl-5'>
              <Tabs
                id='graphType'
                className={styles.tabs}
                activeKey={graphType}
                onSelect={(e) => handleChange(e)}>
                <Tab
                  title={<IntlMessages id='dashboard.project' />}
                  eventKey='project'
                  tabClassName={clsx(styles.tab, 'border-0')}
                />
                <Tab
                  title={<IntlMessages id='dashboard.newClients' />}
                  eventKey='newClient'
                  tabClassName={clsx(styles.tab, 'border-0')}
                />
                <Tab
                  title={<IntlMessages id='dashboard.income' />}
                  eventKey='income'
                  tabClassName={clsx(styles.tab, 'border-0')}
                />
              </Tabs>
            </div>

          </div>
      }
      action={
        <div
          className={clsx(
            styles.statisticsHeaderAction,
            'position-relative d-inline-flex',
          )}>
          <div className='mx-1'>
            <AppSelect selectBoxClass={styles.appSelectBox}
              menus={[2021, 2018, 2017]}
              defaultValue={2021}
              onChange={handleYearChange}
            />
          </div>
          <div className='mx-1'>
            <AppSelect selectBoxClass={styles.appSelectBox}
              menus={['June', 'July', 'August']}
              defaultValue='June'
              onChange={handleMonthChange}
            />
          </div>
        </div>
      }
    >
      <div>
        {graphType === 'project' && <StatGraphs data={projectGraphData} />}
        {graphType === 'newClient' && <StatGraphs data={clientsGraphData} />}
        {graphType === 'income' && <StatGraphs data={incomeGraphData} />}
      </div>
    </AppCard>
  );
};

export default Statistics;

Statistics.defaultProps = {
  clientsData: [],
  incomeData: [],
  projectData: [],
};

Statistics.propTypes = {
  clientsData: PropTypes.array,
  incomeData: PropTypes.array,
  projectData: PropTypes.array,
};
