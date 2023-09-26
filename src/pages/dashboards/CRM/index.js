import React, {useEffect} from 'react';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import TotalRevenue from './TotalRevenue';
import AppInfoView from '@crema/core/AppInfoView';
import {useDispatch, useSelector} from 'react-redux';
import {onGetCrmData} from '../../../redux/actions/Dashboard';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import WebTraffic from './WebTraffic';
import Reviews from './Reviews';
import QuickStats from './QuickStats';
import Statistics from './Statistics';
import MonthlyEarning from './MonthlyEarning';
import SocialMediaAdvertise from './SocialMediaAdvertise';
import TicketSupport from './TicketSupport';
import GoalProgress from './GoalProgress';
import Deals from './Deals';
import TodayTasks from './TodayTasks';

const CRM = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetCrmData());
  }, [dispatch]);

  const crmData = useSelector(({dashboard}) => dashboard.crmData);

  return (
    <>
      <AppPageMetadata title='CRM Dashboard' />
      {crmData ? (
        <AppRowContainer delay={150}>
          <Col xs={12} lg={5} key={'b'}>
            <TotalRevenue revenueData={crmData.revenueData} />
          </Col>
          <Col xs={12} lg={7} className='mb-0' key={'a'}>
            <QuickStats quickStatsData={crmData.quickStatsData} />
          </Col>
          <Col xs={12} lg={8} key={'c'}>
            <Statistics
              clientsData={crmData.statisticsGraph.clientsData}
              incomeData={crmData.statisticsGraph.incomeData}
              projectData={crmData.statisticsGraph.projectData}
            />
          </Col>
          <Col xs={12} lg={4} key={'d'}>
            <MonthlyEarning earningGraphData={crmData.earningGraphData} />
          </Col>
          <Col xs={12} lg={4} key={'e'}>
            <SocialMediaAdvertise socialMediaData={crmData.socialMediaData} />
          </Col>
          <Col xs={12} lg={8} key={'f'}>
            <TodayTasks todayTaskData={crmData.todayTaskData} />
          </Col>
          <Col xs={12} lg={8} key={'g'}>
            <Deals dealsTableData={crmData.dealsTableData} />
          </Col>
          <Col xs={12} lg={4} key={'h'}>
            <GoalProgress progressGraphData={crmData.progressGraphData} />
          </Col>
          <Col xs={12} lg={5} key={'i'}>
            <WebTraffic websiteTrafficData={crmData.websiteTrafficData} />
            <Reviews reviewGraphData={crmData.reviewGraphData} />
          </Col>
          <Col xs={12} lg={7} key={'j'}>
            <TicketSupport ticketSupportData={crmData.ticketSupportData} />
          </Col>
        </AppRowContainer>
      ) : null}

      <AppInfoView />
    </>
  );
};

export default CRM;
