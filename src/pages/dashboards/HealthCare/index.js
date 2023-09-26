import React, {useEffect} from 'react';
import AppRowContainer from '@crema/core/AppRowContainer';
import DrCard from './DrCard';
import healthCareData from '@crema/services/db/dashboard/healthCare';
import AppInfoView from '@crema/core/AppInfoView';
import {useDispatch, useSelector} from 'react-redux';
import {onGetHCData} from '../../../redux/actions/Dashboard';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import {Col} from 'react-bootstrap';
import HospitalActivity from './HospitalActivity';
import ProfileCard from './ProfileCard';
import AppointmentCard from './AppointmentCard';
import RecentPatients from './RecentPatients';
import HeartRate from "./HeartRate";
import YourActivity from "./YourActivity";
import HospitalStatics from "./HospitalStatics";
import TopDoctors from "./TopDoctors";
import UpcomingAppointments from "./UpcomingAppointments";
import Notifications from "./Notifications";
import HealthStatics from "./HealthStatics";
import NewPatients from "./NewPatients";
import CancelVisits from "./CancelVisits";
import InfoWidget from "./InfoWidget";

const HealthCare = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetHCData());
  }, [dispatch]);

  const {healthCare} = useSelector(({dashboard}) => dashboard);

  return (
    <>
      <AppPageMetadata title='Health Care Dashboard' />
      {healthCare ? (
        <AppRowContainer>
          {healthCareData.salesState.map((data, index) => (
            <Col xs={12} sm={6} lg={3} key={'a' + index}>
              <DrCard data={data} />
            </Col>
          ))}
          <Col xs={12} sm={12} lg={6} key={'b'}>
            <HospitalActivity data={healthCareData.hospitalActivity} />
          </Col>
          <Col xs={12} sm={6} lg={3} key={'c'}>
            <ProfileCard />
          </Col>
          <Col xs={12} sm={6} lg={3} className='mb-0' key={'d'}>
            <AppRowContainer>
              {healthCareData.appointmentCards.map((data, index) => (
                <Col xs={12} key={'e' + index}>
                  <AppointmentCard data={data} />
                </Col>
              ))}
            </AppRowContainer>
          </Col>
          <Col xs={12} sm={6} lg={3} key={'f'}>
            <HeartRate data={healthCareData.heartCard} />
          </Col>
          <Col xs={12} sm={6} lg={3} key={'g'}>
            <YourActivity data={healthCareData.yourActivity} />
          </Col>
          <Col xs={12} sm={6} lg={3} key={'h'}>
            <HeartRate data={healthCareData.temperatureCard} />
          </Col>
          <Col xs={12} sm={6} lg={3} className='mb-0' key={'i'}>
            <AppRowContainer>
              {healthCareData.doses.map((data, index) => (
                <Col xs={12} key={'j' + index}>
                  <HospitalStatics data={data} />
                </Col>
              ))}
            </AppRowContainer>
          </Col>
          <Col xs={12} sm={12} lg={4} key={'k'}>
            <TopDoctors data={healthCareData.topDoctors} />
          </Col>
          <Col xs={12} sm={12} lg={4} key={'l'}>
            <UpcomingAppointments data={healthCareData.upcomingAppointment} />
          </Col>
          <Col xs={12} sm={12} lg={4} key={'o'}>
            <Notifications data={healthCareData.notifications} />
          </Col>
          <Col xs={12} md={12} lg={6} key={'m'}>
            <HealthStatics data={healthCareData.heathStatics} />
          </Col>
          <Col xs={12} sm={6} md={6} lg={3} key={'n'}>
            <NewPatients data={healthCareData.newPatients} />
          </Col>
          <Col xs={12} sm={6} md={6} lg={3} key={'p'}>
            <CancelVisits data={healthCareData.cancelVisits} />
          </Col>
          {healthCareData.hospitalStatics.map((data, index) => (
            <Col xs={12} sm={6} lg={3} key={'q' + index}>
              <HospitalStatics data={data} />
            </Col>
          ))}
          <Col xs={12} sm={12} lg={8} key={'r'}>
            <RecentPatients recentPatients={healthCareData.recentPatients} />
          </Col>
          <Col xs={12} sm={12} lg={4} className='mb-0' key={'s'}>
            <AppRowContainer>
              {healthCareData.bloodCard.map((data, index) => (
                <Col xs={12} sm={6} key={'t' + index}>
                  <InfoWidget data={data} />
                </Col>
              ))}
            </AppRowContainer>
          </Col>
        </AppRowContainer>
      ) : null}
      <AppInfoView />
    </>
  );
};

export default HealthCare;
