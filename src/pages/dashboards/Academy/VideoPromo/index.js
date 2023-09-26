import React from 'react';
import AppCard from '@crema/core/AppCard';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import {AiOutlineClockCircle, AiOutlineCloudDownload} from 'react-icons/ai';

import {Button, Tabs, Tab} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const tabs = [
  {id: 1, title: 'Class Detail', slug: 'class'},
  {id: 2, title: 'Assignments', slug: 'assignments'},
  {id: 3, title: 'Projects', slug: 'projects'},
  {id: 4, title: 'Exams', slug: 'exams'},
];

const VideoPromo = ({videoPromo}) => {
  function callback(key) {
    console.log(key);
  }
  return (
    <AppCard heightFull className='position-relative overflow-hidden'>
      <div className={clsx(styles.reactPlayerView, 'position-relative')}>
        <ReactPlayer
          className='w-100'
          controls={true}
          url='https://www.youtube.com/embed/X1dz0xRbSJc'
        />
      </div>
      <div className={styles.videoPromo}>
        <div className={clsx(styles.videoPromoHeader, 'd-flex mb-1')}>
          <div
            className={clsx(
              styles.videoPromoHeaderContent,
              'flex-grow-1 me-2 mb-2',
            )}>
            <h3>{videoPromo.title}</h3>
            <p>
              <span
                className={clsx(styles.borderRightBefore, 'position-relative')}>
                {videoPromo.owner}
              </span>
              <span
                className={clsx(styles.borderRightBefore, 'position-relative')}>
                {videoPromo.category}
              </span>
              <span className={styles.textPrimary}>+ Follow Mentor</span>
            </p>
          </div>
          <div className='d-flex align-items-center mb-2'>
            <span
              className={clsx(
                styles.videoPromoHeaderIcon,
                'd-flex align-items-center justify-content-center',
              )}>
              <AiOutlineClockCircle />
            </span>
            <span
              className={clsx(
                styles.videoPromoHeaderIcon,
                styles.cloud,
                'd-flex align-items-center justify-content-center',
              )}>
              <AiOutlineCloudDownload />
            </span>
          </div>
        </div>

        <Tabs
          className={styles.tabs}
          defaultActiveKey='1'
          onChange={callback}>
          {tabs.map((item, index) => (
            <Tab title={item.title} key={index} tabClassName={styles.tab}>
              {item.slug}
            </Tab>
          ))}
        </Tabs>

        {videoPromo.assignments.map((item, index) => (
          <div className={styles.videoTabsContent} key={index}>
            <h4>{`${index + 1}. ${item.title} `}</h4>
            <p>{item.desc}</p>
            <div className={clsx(styles.videoTabsAction, 'd-flex flex-wrap')}>
              <div
                className={clsx(
                  styles.videoTabsActionLeft,
                  'd-flex align-items-center mb-2',
                )}>
                <Button
                  className={styles.btnOutline}
                  style={{fontSize: 10, whiteSpace: 'nowrap'}}>
                  See Calendar
                </Button>
                <Button
                  size='small'
                  style={{fontSize: 10, whiteSpace: 'nowrap'}}
                  variant='primary'>
                  View details
                </Button>
              </div>
              <div
                className={clsx(
                  styles.videoTabsActionRight,
                  'd-flex align-items-center mb-2',
                )}>
                <span>{item.students} Students enrolled</span>
                <span className={styles.textSecondary}>
                  {item.daysLeft} Days left
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppCard>
  );
};

export default VideoPromo;

VideoPromo.propTypes = {
  videoPromo: PropTypes.object,
};
