import React, {useEffect} from 'react';
import AppRowContainer from '@crema/core/AppRowContainer';
import {useDispatch, useSelector} from 'react-redux';
import {onGetAcademyData} from '../../../redux/actions/Dashboard';
import AppInfoView from '@crema/core/AppInfoView';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import {Col} from 'react-bootstrap';
import GeneralStats from './GeneralStats';
import CourseCategories from './CourseCategories';
import MyProfile from './MyProfile';
import Notifications from './Notifications';
import styles from './index.module.scss';
import MyCourses from './MyCourses';
import CourseDetail from './CourseDetail';
import MyLearning from './MyLearning';
import LatestResults from './LatestResults';
import MyClass from './MyClass';
import VideoPromo from './VideoPromo';
import StudentRankings from './StudentRankings';
import PromoCard from './PromoCard';
import AverageGrades from './AverageGrades';
import RelatedCourses from './RelatedCourses';

const Academy = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetAcademyData());
  }, [dispatch]);

  const {academyData} = useSelector(({dashboard}) => dashboard);

  return (
    <>
      <AppPageMetadata title='Academy Dashboard' />
      {academyData ? (
        <AppRowContainer>
          {academyData.academicStats.map((item, index) => (
            <Col xs={12} sm={6} lg={3} key={'a' + index}>
              <GeneralStats stats={item} />
            </Col>
          ))}
          {academyData.courseCategories.map((data, index) => (
            <Col xs={12} sm={6} lg={3} key={'b' + index}>
              <CourseCategories course={data} />
            </Col>
          ))}

          <Col xs={12} className='mb-0' key={'c'}>
            <AppRowContainer>
              <Col xs={12} sm={6} lg={3}>
                <MyProfile profile={academyData.profile} />
              </Col>

              <Col
                xs={12}
                sm={6}
                lg={3}
                key={'d'}
                className={styles.acaNotificationRoot}>
                <Notifications notifications={academyData.notifications} />
              </Col>

              <Col
                xs={12}
                sm={12}
                lg={6}
                className={styles.myCourseRoot}
                key={'e'}>
                <MyCourses courses={academyData.courses} />
              </Col>
            </AppRowContainer>
          </Col>

          {academyData.courseDetails.map((data, index) => (
            <Col xs={12} sm={12} lg={4} key={'f' + index}>
              <CourseDetail course={data} />
            </Col>
          ))}

          <Col xs={12} sm={12} lg={5} xxl={5} key={'g'}>
            <VideoPromo videoPromo={academyData.videoPromo} />
          </Col>

          <Col xs={12} sm={12} lg={7} xxl={7} className='mb-0' key={'h'}>
            <AppRowContainer>
              <Col xs={12}>
                <MyLearning learningData={academyData.learningData} />
              </Col>
              <Col xs={12} sm={6} xl={6} key={'i'}>
                <LatestResults latestResults={academyData.latestResults} />
              </Col>
              <Col xs={12} sm={6} xl={6} key={'j'}>
                <MyClass classData={academyData.classData} />
              </Col>
            </AppRowContainer>
          </Col>
          <Col xs={12} sm={12} lg={9} key={'k'}>
            <StudentRankings studentRankings={academyData.studentRankings} />
          </Col>
          <Col xs={12} sm={12} lg={3} key={'l'}>
            <PromoCard />
          </Col>
          <Col xs={12} sm={12} lg={6} key={'m'}>
            <AverageGrades grades={academyData.grades} />
          </Col>
          <Col xs={12} sm={12} lg={6} key={'n'}>
            <RelatedCourses relatedCourses={academyData.relatedCourses} />
          </Col>
        </AppRowContainer>
      ) : null}

      <AppInfoView />
    </>
  );
};

export default Academy;
