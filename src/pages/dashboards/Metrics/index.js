import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onGetMetricsData} from '../../../redux/actions';
import AppAnimate from '@crema/core/AppAnimate';
import AppInfoView from '@crema/core/AppInfoView';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import {useIntl} from 'react-intl';
import StatsCard from './StatsCard';
import StatsCardWithGraph from './StatsCardWithGraph';
import ComparisonCard from './ComparisonCard';
import StatsCardSecond from './StatsCardSecond';
import Sales from './Sales';
import YourAccount from './YourAccount';
import EarningInMonth from './EarningInMonth';
import MetricTitleLineGraphCard from './MetricTitleLineGraphCard';
import FloatingGraphs from './FloatingGraphs';
import Visits from './Visits';
import Orders from './Orders';
import Subscriptions from './Subscriptions';
import ProfileViews from './ProfileViews';
import WorkViews from './WorkViews';
import SocialDataCard from './SocialDataCard';
import Stats from './Stats';
import SocialVisitors from './SocialVisitors';
import Share from './Share';
import styles from './index.module.scss';

const Metrics = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetMetricsData());
  }, [dispatch]);
  const {messages} = useIntl();
  const metricsData = useSelector(({dashboard}) => dashboard.metricsData);
  console.log(metricsData);
  return (
    <>
      {metricsData ? (
        <AppAnimate>
          <>
            <h2 className='fw-bold fs-6 mb-3'>
              {messages['dashboard.metrics']}
            </h2>
            <AppRowContainer>
              <Col xs={12} sm={6} lg={3}>
                <StatsCard
                  text={messages['dashboard.ordersThisYear']}
                  value={metricsData.ordersThisYear}
                  bgColor='#dc3545'
                  icon={'/assets/images/metricsIcons/order.svg'}
                />
              </Col>

              <Col xs={12} sm={6} lg={3}>
                <StatsCard
                  text={messages['dashboard.revenueThisYear']}
                  value={metricsData.revenueThisYear}
                  bgColor='#0d6efd'
                  icon={'/assets/images/metricsIcons/revenue.svg'}
                />
              </Col>

              <Col xs={12} sm={6} lg={3}>
                <StatsCard
                  text={messages['dashboard.visitsThisYear']}
                  value={metricsData.visitsThisYear}
                  bgColor='indigo'
                  icon={'/assets/images/metricsIcons/visits.svg'}
                />
              </Col>

              <Col xs={12} sm={6} lg={3}>
                <StatsCard
                  text={messages['dashboard.queriesThisYear']}
                  value={metricsData.queriesThisYear}
                  bgColor={'#198754'}
                  icon={'/assets/images/metricsIcons/querries.svg'}
                />
              </Col>

              <Col xs={12} lg={4}>
                <StatsCardWithGraph
                  text={messages['dashboard.incomeLastYear']}
                  data={metricsData.incomeLastYear}
                  type='incomeGraph'
                  headingColor='text.primary'
                  valueColor='#FFA940'
                />
              </Col>
              <Col xs={12} lg={4}>
                <StatsCardWithGraph
                  text={messages['dashboard.webTraffic']}
                  data={metricsData.websiteTrafficData}
                  bgColor='background.paper'
                  type='trafficGraph'
                  headingColor='text.primary'
                  valueColor='#dc3545'
                />
              </Col>
              <Col xs={12} lg={4}>
                <StatsCardWithGraph
                  text={messages['dashboard.growthInRevenue']}
                  data={metricsData.revenueGrowthData}
                  bgColor='background.paper'
                  type='revenueGrowth'
                  headingColor='text.primary'
                  valueColor='#0d6efd'
                />
              </Col>

              <Col xs={12} lg={3}>
                <ComparisonCard
                  text={messages['dashboard.incrementInUsers']}
                  data={metricsData.incrementActiveUsers}
                  bgColor='background.paper'
                  type='activeUsers'
                  headingColor='text-primary'
                  valueColor='#4299E1'
                />
              </Col>
              <Col xs={12} lg={3}>
                <ComparisonCard
                  text={messages['dashboard.extraRevenue']}
                  data={metricsData.extraRevenue}
                  bgColor='background.paper'
                  type='extraRevenue'
                  headingColor='text-primary'
                  valueColor='indigo'
                />
              </Col>
              <Col xs={12} lg={3}>
                <ComparisonCard
                  text={messages['dashboard.trafficRaise']}
                  data={metricsData.trafficRaise}
                  bgColor='background.paper'
                  type='trafficRaise'
                  headingColor='text-primary'
                  valueColor='#0d6efd'
                />
              </Col>
              <Col xs={12} lg={3}>
                <ComparisonCard
                  text={messages['dashboard.lessOrders']}
                  data={metricsData.lessOrders}
                  bgColor='background.paper'
                  type='lessOrders'
                  headingColor='text-primary'
                  valueColor='#dc3545'
                />
              </Col>
              <Col xs={12} lg={4}>
                <Sales data={metricsData.salesData} />
              </Col>
              <Col xs={12} lg={4}>
                <YourAccount data={metricsData.accountData} />
              </Col>
              <Col xs={12} lg={4}>
                <EarningInMonth data={metricsData.earningInMonth} />
              </Col>
              <Col xs={12} lg={7}>
                <Subscriptions data={metricsData.subscriptionData} />
              </Col>
              <Col xs={12} lg={5}>
                <div className={styles.MetricLineSpace}>
                  <MetricTitleLineGraphCard
                    data={metricsData.metricsLineGraphData}
                    title={messages['dashboard.rides']}
                    titleColor='rgb(73, 80, 87)'
                    valueColor='grey'
                    differenceColor='#dc3545'
                    bgColor='white'
                    graphColor='#4299E1'
                  />
                </div>

                <MetricTitleLineGraphCard
                  data={metricsData.metricsLineGraphData}
                  title={messages['dashboard.visits']}
                  titleColor='white'
                  valueColor='rgb(133, 165, 255)'
                  differenceColor='white'
                  bgColor='rgb(47, 84, 235)'
                  graphColor='#FFFFFF'
                />
              </Col>
              <Col xs={12} sm={6} lg={3}>
                <StatsCardSecond
                  text={messages['dashboard.revenueThisYear']}
                  value={metricsData.revenueThisYear}
                  bgColor='#0d6efd'
                  icon={'/assets/images/metricsIcons/revenue.svg'}
                />
              </Col>
              <Col xs={12} sm={6} lg={3}>
                <StatsCardSecond
                  text={messages['dashboard.ordersThisYear']}
                  value={metricsData.ordersThisYear}
                  bgColor='#dc3545'
                  icon={'/assets/images/metricsIcons/order.svg'}
                />
              </Col>
              <Col xs={12} sm={6} lg={3}>
                <StatsCardSecond
                  text={messages['dashboard.visitsThisYear']}
                  value={metricsData.visitsThisYear}
                  bgColor='indigo'
                  icon={'/assets/images/metricsIcons/visits.svg'}
                />
              </Col>
              <Col xs={12} sm={6} lg={3}>
                <StatsCardSecond
                  text={messages['dashboard.queriesThisYear']}
                  value={metricsData.queriesThisYear}
                  bgColor='#198754'
                  icon={'/assets/images/metricsIcons/querries.svg'}
                />
              </Col>
              <Col xs={12} lg={3}>
                <FloatingGraphs
                  title={messages['dashboard.sales']}
                  data={metricsData.metricsFloatingGraphData.salesData}
                />
              </Col>
              <Col xs={12} lg={3}>
                <FloatingGraphs
                  title={messages['dashboard.clients']}
                  data={metricsData.metricsFloatingGraphData.clientsData}
                />
              </Col>
              <Col xs={12} lg={3}>
                <FloatingGraphs
                  title={messages['dashboard.revenue']}
                  data={metricsData.metricsFloatingGraphData.revenueData}
                />
              </Col>
              <Col xs={12} lg={3}>
                <FloatingGraphs
                  title={messages['dashboard.newUser']}
                  data={metricsData.metricsFloatingGraphData.newUserData}
                />
              </Col>
              <Col xs={12} lg={6}>
                <Visits data={metricsData.visitsData} />
              </Col>
              <Col xs={12} lg={6}>
                <Orders data={metricsData.ordersData} />
              </Col>
              <Col xs={12} lg={6} xl={3}>
                <ProfileViews data={metricsData.profileViewsData} />
              </Col>
              <Col xs={12} lg={6} xl={3}>
                <WorkViews data={metricsData.workViewsData} />
              </Col>
              <Col xs={12} lg={6} xl={3}>
                <SocialDataCard data={metricsData.socialData} />
              </Col>
              <Col xs={12} lg={6} xl={3}>
                <Share data={metricsData.shareData} />
              </Col>
              <Col xs={12} lg={6}>
                <Stats data={metricsData.statsGraph} />
              </Col>
              <Col xs={12} lg={6}>
                <SocialVisitors data={metricsData.socialVisitorsData} />
              </Col>
            </AppRowContainer>
          </>
        </AppAnimate>
      ) : null}
      <AppInfoView />
    </>
  );
};

export default Metrics;
