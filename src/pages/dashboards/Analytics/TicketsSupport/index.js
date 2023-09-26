import React from 'react';

import AppCard from '@crema/core/AppCard';
import PropTypes from 'prop-types';
import {Accordion, ProgressBar} from 'react-bootstrap';
import {AiOutlineClockCircle} from 'react-icons/ai';
import styles from './index.module.scss';
import clsx from 'clsx';

const genExtra = ({data}) => (
  <>
    <span> {data.opened} Open</span>
  </>
);

const TicketsSupport = ({tickets}) => {
  return (
    <AppCard
      className='overflow-hidden'
      cardBodyClass='px-0 pt-0'
      footer={
        <div className={styles.anaTicketSupportAction}>
          <AiOutlineClockCircle style={{fontSize: 16}} />
          <span className='ms-2'>Last update 30 min ago</span>
        </div>
      }>
      <Accordion defaultActiveKey='1'>
        {tickets.map((data, index) => (
          <Accordion.Item
            className={clsx(
              styles.anaAccordionItem,
              'border-end-0 border-start-0 border-top-0',
            )}
            eventKey={data.id}
            key={index}>
            <Accordion.Header className={styles.anaAccordionHeader}>
              <span
                className={clsx(
                  styles.anaAccordionHeaderInner,
                  'w-100 d-flex justify-content-between ps-2',
                )}>
                {data.name}
                {genExtra({data})}
              </span>
            </Accordion.Header>
            <Accordion.Body className='pt-0'>
              <div className='w-100'>
                <div className={styles.ticketSupportCollapseItem}>
                  <span className='mb-1 d-inline-block'>Open</span>
                  <div className='d-flex align-items-center'>
                    <ProgressBar
                      className={styles.anaProgressBar}
                      now={data.overAllPercentage.open}
                      variant='success'
                    />
                    <span className='ms-2'>{data.overAllPercentage.open}</span>
                  </div>
                </div>
                <div className={styles.ticketSupportCollapseItem}>
                  <span className='mb-1 d-inline-block'>Closed</span>
                  <div className='d-flex align-items-center'>
                    <ProgressBar
                      className={styles.anaProgressBar}
                      now={data.overAllPercentage.close}
                      variant='danger'
                    />
                    <span className='ms-2'>{data.overAllPercentage.close}</span>
                  </div>
                </div>
                <div className={styles.ticketSupportCollapseItem}>
                  <span className='mb-1 d-inline-block'>On Hold</span>
                  <div className='d-flex align-items-center'>
                    <ProgressBar
                      className={styles.anaProgressBar}
                      now={data.overAllPercentage.hold}
                      variant='warning'
                    />
                    <span className='ms-2'>{data.overAllPercentage.hold}</span>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </AppCard>
  );
};

export default TicketsSupport;

TicketsSupport.propTypes = {
  tickets: PropTypes.array,
};
