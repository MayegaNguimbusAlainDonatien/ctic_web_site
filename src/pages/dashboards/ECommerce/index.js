import React, { useEffect } from 'react';
import AppRowContainer from '@crema/core/AppRowContainer';
import { Col } from 'react-bootstrap';
import SalesState from './SalesState';
import AppInfoView from '@crema/core/AppInfoView';
import { useDispatch, useSelector } from 'react-redux';
import { onGetECommerceData } from '../../../redux/actions/Dashboard';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import styles from "./index.module.scss";
import SaleStatics from './SaleStatics';
import Application from './Application';
import ReportCard from './ReportCard';
import RecentOrders from './RecentOrders';
import Revenue from './Revenue';
import MarketingCampaign from './MarketingCampaign';
import NotificationsEcom from './Notifications';
import NewCustomers from './NewCustomers';
import PopularProducts from './PopularProducts';
import SiteVisitors from './SiteVisitors';
import Browser from './Browser';
import TimeLine from 'pages/components/Timeline';
import Crossfade from 'pages/components/Carousels/Crossfade';

const ECommerce = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetECommerceData());
  }, [dispatch]);

  const ecommerceData = useSelector(({ dashboard }) => dashboard.ecommerceData);

  return (
    <>
      <AppPageMetadata title='CTIC WELCOME PAGE' />
      {ecommerceData ? (
        <AppRowContainer>
          <Col xs={12} sm={12} lg={12} key={'c4'}>
            <Crossfade />
          </Col>
          {ecommerceData.salesState.map((data) => (
            <Col xs={12} sm={6} lg={3} key={'a' + data.id}>
              <SalesState data={data} />
            </Col>
          ))}
          <Col xs={12} key={'a'}>
            <div className={styles.componentDisplay}>
              <h1>Procédure de voyage</h1>
              <p>Nous détaillons ci dee suite la procédure de voyage des différents candidats</p>
            </div>
          </Col>
          <Col xs={12} key={'a'}>
            <TimeLine />
          </Col>
          <Col xs={12} key={'a'}>
            <div className={styles.componentDisplay}>
              <h1 className={styles.TitleText}>ITEM TITLE</h1>
              <p>
                Nous détaillons ci dee suite la procédure de voyage des différents candidats
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </Col>

          <Col xs={12} md={6} lg={4} key={'a'}>
            <div className={styles.componentDisplay}>
              <div className={styles.componentImg}>
                <img style={{ width: "4rem", height: "4rem", margin: "0px", padding: "0px" }} src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(135).webp" alt="icon title" />
              </div>
              <h1 className={styles.TitleText}>ITEM TITLE</h1>
              <h5>
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} key={'a'}>
            <div className={styles.componentDisplay}>
              <div className={styles.componentImg}>
                <img style={{ width: "4rem", height: "4rem", margin: "0px", padding: "0px" }} src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(135).webp" alt="icon title" />
              </div>
              <h1 className={styles.TitleText}>ITEM TITLE</h1>
              <h5>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} key={'a'}>
            <div className={styles.componentDisplay}>
              <div className={styles.componentImg}>
                <img style={{ width: "4rem", height: "4rem", margin: "0px", padding: "0px" }} src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(135).webp" alt="icon title" />
              </div>
              <h1 className={styles.TitleText}>ITEM TITLE</h1>
              <h5>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Col>
        </AppRowContainer>
      ) : null}
      <AppInfoView />
    </>
  );
};

export default ECommerce;

{/* <Col xs={12} lg={9} key={'b'}>
            <SaleStatics />
          </Col>
          <Col xs={12} lg={3} key={'c'}>
            <Application />
          </Col>

          {ecommerceData.reportCards.map((reportVal) => (
            <Col xs={12} lg={4} key={'d' + reportVal.id + Math.random()}>
              <ReportCard data={reportVal} />
            </Col>
          ))}

          <Col xs={12} lg={9} key={'e'}>
            <RecentOrders recentOrders={ecommerceData.recentOrders} />
          </Col>
          <Col xs={12} lg={3} key={'f'}>
            <Revenue />
          </Col>

          <Col xs={12} lg={6} key={'g'}>
            <MarketingCampaign
              marketingCampaign={ecommerceData.marketingCampaign}
            />
          </Col>
          <Col xs={12} lg={6} key={'h'}>
            <NotificationsEcom notifications={ecommerceData.notifications} />
          </Col>

          <Col xs={12} lg={6} key={'i'}>
            <NewCustomers newCustomers={ecommerceData.newCustomers} />
          </Col>
          <Col xs={12} lg={6} key={'j'}>
            <PopularProducts popularProducts={ecommerceData.popularProducts} />
          </Col>

          <Col xs={12} lg={9} key={'k'}>
            <SiteVisitors siteVisitorsData={ecommerceData.siteVisitors} />
          </Col>
          <Col xs={12} lg={3} key={'l'}>
            <Browser browserData={ecommerceData.browser} />
          </Col> */}