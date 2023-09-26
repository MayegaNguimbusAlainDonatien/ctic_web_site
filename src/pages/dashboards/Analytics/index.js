import React, {useEffect} from 'react';
import AppRowContainer from '@crema/core/AppRowContainer';
import AppInfoView from '@crema/core/AppInfoView';
import {useDispatch, useSelector} from 'react-redux';
import {onGetAnalyticsData} from '../../../redux/actions/Dashboard';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import {Col} from 'react-bootstrap';
import WelcomeCard from './WelcomeCard';
import StateCard from './StateCard';
import SalesState from './SalesState';
import VisitorPageView from './VisitorPageView';
import ActiveVisitors from './ActiveVisitors';
import TopSelling from './TopSelling';
import EarningByCountry from './EarningByCountry';
import TicketsSupport from './TicketsSupport';
import InfoWidget from './InfoWidget';
import PageVisits from './PageVisits';
import OrderNTransaction from './OrderNTransaction';
import TrafficSource from './TrafficSource';

const Analytics = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetAnalyticsData());
  }, [dispatch]);

  const analyticsData = useSelector(({dashboard}) => dashboard.analyticsData);

  return (
    <>
      <AppPageMetadata title='Analytics Dashboard' />
      {analyticsData ? (
        <AppRowContainer interval={120} ease={'easeInSine'}>
          <Col xs={12} lg={6} className='mb-0' key={'a'}>
            <AppRowContainer interval={120}>
              <Col xs={12}>
                <WelcomeCard data={analyticsData.welcomeCard} />
              </Col>
              <Col xs={12} sm={6} key={'c'}>
                <StateCard data={analyticsData.revenueCards[0]} />
              </Col>
              <Col xs={12} sm={6} key={'d'}>
                <StateCard data={analyticsData.revenueCards[1]} />
              </Col>
            </AppRowContainer>
          </Col>
          <Col xs={12} lg={6} key={'e'}>
            <SalesState
              salesState={analyticsData.salesState}
              saleChartData={analyticsData.salesChartData}
            />
          </Col>
          <Col xs={12} lg={8} xxl={9} key={'f'}>
            <VisitorPageView data={analyticsData.visitorsPageView} />
          </Col>
          <Col xs={12} lg={4} xxl={3} key={'g'}>
            <ActiveVisitors data={analyticsData.activeVisitors} />
          </Col>
          <Col xs={12} lg={6} key={'h'}>
            <TopSelling products={analyticsData.topSellingProduct} />
          </Col>
          <Col xs={12} lg={6} key={'i'}>
            <EarningByCountry earningData={analyticsData.earningData} />
          </Col>
          <Col xs={12} lg={6} className='mb-0' key={'j'}>
            <AppRowContainer>
              <Col xs={12}>
                <TicketsSupport tickets={analyticsData.tickets} />
              </Col>
              {analyticsData.infoWidgets.map((data, index) => (
                <Col xs={12} sm={4} key={'l' + index}>
                  <InfoWidget data={data} />
                </Col>
              ))}
            </AppRowContainer>
          </Col>
          <Col xs={12} lg={6} key={'m'}>
            <PageVisits pageVisits={analyticsData.pageVisits} />
          </Col>
          <Col xs={12} lg={9} key={'n'}>
            <OrderNTransaction
              transactionData={analyticsData.transactionData}
            />
          </Col>
          <Col xs={12} lg={3} key={'o'}>
            <TrafficSource trafficData={analyticsData.trafficData} />
          </Col>
        </AppRowContainer>
      ) : null}

      <AppInfoView />
    </>
  );
};

export default Analytics;
