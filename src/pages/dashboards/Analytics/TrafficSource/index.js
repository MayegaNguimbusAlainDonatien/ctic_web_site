import React from 'react';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import './index.module.scss';
import {Accordion, ProgressBar} from 'react-bootstrap';
import clsx from 'clsx';
import styles from './index.module.scss';

const TrafficSource = ({trafficData}) => {
  const {messages} = useIntl();
  return (
    <AppCard title={messages['dashboard.analytics.trafficSource']}>
      <Accordion defaultActiveKey='1'>
        {trafficData.map((data, index) => (
          <Accordion.Item
            className={clsx(
              styles.trafficAccordionItem,
              'border-end-0 border-start-0 border-top-0',
            )}
            eventKey={data.id}
            key={index}>
            <Accordion.Header className={styles.trafficCollapseHeader}>
              <div className='flex-grow-1 d-flex flex-column'>
                <div
                  className={clsx(
                    styles.trafficCollapseHeaderInner,
                    'd-flex align-items-center justify-content-between',
                  )}>
                  <h3>{data.title}</h3>
                  <span>{data.value}%</span>
                </div>
                <ProgressBar
                  className={styles.trafficProgressBar}
                  now={data.value}
                  variant='primary'
                />
              </div>
            </Accordion.Header>
            <Accordion.Body className={styles.accordionBody}>
              <div
                className={clsx(
                  styles.trafficCollapseContent,
                  'flex-grow-1 d-flex justify-content-end',
                )}>
                <span className={styles.trafficCollapseData}>
                  {data.session}
                </span>
                <span>Session</span>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </AppCard>
  );
};

export default TrafficSource;

TrafficSource.propTypes = {
  trafficData: PropTypes.array,
};
