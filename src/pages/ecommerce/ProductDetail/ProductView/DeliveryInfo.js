import React from 'react';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col, Tooltip, Form, OverlayTrigger} from 'react-bootstrap';
import {
  AiOutlineDollar,
  AiOutlineInfoCircle,
  AiOutlineSync,
} from 'react-icons/ai';
import styles from './index.module.scss';
import clsx from 'clsx';

const DeliveryInfo = () => {
  return (
    <AppRowContainer>
      <Col xs={12} sm={6} className='mb-3'>
        <h3 className={styles.productDetailItemTitle}>Deliver to</h3>
        <Form.Control
          className={styles.deliverInput}
          id='delivery-pin-code'
          placeholder='Pin Code'
        />

        <p className={clsx(styles.productDeliveryInfoPara, 'mt-2 mb-1')}>
          Delivery in 5-7 days | <span className={styles.textGreen}>Free</span>
          <span className={styles.textSec}>$40</span>
        </p>
        <p className='mb-0'>If ordered before 2:05 AM </p>
      </Col>

      <Col xs={12} sm={6} className='mb-3'>
        <h3 className={styles.productDetailItemTitle}>Services</h3>

        <div
          className={clsx(
            styles.productDetailService,
            'd-flex align-items-center',
          )}>
          <OverlayTrigger
            placement='top'
            overlay={<Tooltip id='tooltip-1'>Return policy</Tooltip>}>
            <span className='d-inline-block'>
              <AiOutlineSync style={{color: '#0A8FDC', fontSize: 14}} />
            </span>
          </OverlayTrigger>
          <p
            className={clsx(
              styles.productDetailServicePara,
              'd-flex align-items-center mb-0',
            )}>
            30 Day Return Policy
            <OverlayTrigger
              placement='top'
              overlay={<Tooltip id='tooltip-2'>info</Tooltip>}>
              <span className='d-inline-block'>
                <AiOutlineInfoCircle className={styles.infoCircleSvg} />
              </span>
            </OverlayTrigger>
          </p>
        </div>

        <div
          className={clsx(
            styles.productDetailService,
            'd-flex align-items-center',
          )}>
          <OverlayTrigger
            placement='top'
            overlay={<Tooltip id='tooltip-3'>COD Available</Tooltip>}>
            <span className='d-inline-block'>
              <AiOutlineDollar style={{color: '#0A8FDC', fontSize: 14}} />
            </span>
          </OverlayTrigger>

          <p
            className={clsx(
              styles.productDetailServicePara,
              'd-flex align-items-center mb-0',
            )}>
            Cash on Delivery available{' '}
            <OverlayTrigger
              placement='top'
              overlay={<Tooltip id='tooltip-4'>info</Tooltip>}>
              <span className='d-inline-block'>
                <AiOutlineInfoCircle className={styles.infoCircleSvg} />
              </span>
            </OverlayTrigger>
          </p>
        </div>
      </Col>
    </AppRowContainer>
  );
};

export default DeliveryInfo;
