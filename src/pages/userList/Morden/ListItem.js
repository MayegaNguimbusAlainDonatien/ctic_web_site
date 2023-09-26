import React from 'react';
import {Button, Card, Tooltip, OverlayTrigger} from 'react-bootstrap';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {AiOutlineBook, AiOutlineMore, AiOutlineShareAlt} from 'react-icons/ai';
import styles from './index.module.scss';
import clsx from 'clsx';

const ListItem = (props) => {
  const {user} = props;

  return (
    <Card className={clsx(styles.userMordenCard, 'item-hover')}>
      <div className='d-flex flex-column flex-sm-row'>
        <div className={styles.userMordenThumb}>
          <img src={user.image} alt='user' />
        </div>

        <div className={styles.userMordenContent}>
          <div
            className={clsx(
              styles.userMordenHeader,
              'd-flex flex-column flex-sm-row',
            )}>
            <h3>{user.name}</h3>

            <div
              className={clsx(
                styles.userMordenHeaderAction,
                'd-flex align-items-center justify-content-between justify-content-sm-end',
              )}>
              <span
                className={clsx(
                  styles.userMordenHeaderActionItem,
                  'ms-3 me-3 position-relative',
                )}>
                <OverlayTrigger
                  overlay={
                    <Tooltip id='tooltip-1'>
                      <IntlMessages id='common.share' />
                    </Tooltip>
                  }>
                  <span className='d-inline-block'>
                    <AiOutlineShareAlt className={styles.pointer} />
                  </span>
                </OverlayTrigger>
              </span>

              <span
                className={clsx(
                  styles.userMordenHeaderActionItem,
                  'ms-3 me-3',
                )}>
                <OverlayTrigger
                  placement='top'
                  overlay={
                    <Tooltip id='tooltip-2'>
                      <IntlMessages id='common.bookmark' />
                    </Tooltip>
                  }>
                  <span className='d-inline-block'>
                    <AiOutlineBook className={styles.pointer} />
                  </span>
                </OverlayTrigger>
              </span>

              <span
                className={clsx(
                  styles.userMordenHeaderActionItem,
                  'ms-3 me-3',
                )}>
                <OverlayTrigger
                  placement='top'
                  overlay={
                    <Tooltip id='tooltip-3'>
                      <IntlMessages id='common.more' />
                    </Tooltip>
                  }>
                  <span className='d-inline-block'>
                    <AiOutlineMore className={styles.pointer} />
                  </span>
                </OverlayTrigger>
              </span>
            </div>
          </div>

          <p className={clsx(styles.userMordenPara, 'mb-3')}>
            {user.information}
          </p>

          <div className='d-flex flex-column flex-wrap flex-md-row align-items-md-center justify-content-md-between'>
            <div className={styles.useMordenFooterChipView}>
              {user.skills.map((skill, index) => {
                return (
                  <span
                    key={index}
                    // className={clsx('user-morden-footer-chip', {dark :  theme.palette.type === 'dark'})}
                    className={styles.userMordenFooterChip}>
                    {skill}
                  </span>
                );
              })}
            </div>

            <div className='position-relative'>
              <Button type='primary' className={styles.userMordenFooterHireBtn}>
                <IntlMessages id='common.hire' />
              </Button>
              <Button
                variant='contained'
                className={styles.userMordenFooterRemoveBtn}>
                <IntlMessages id='mailApp.remove' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ListItem;

ListItem.propTypes = {
  user: PropTypes.object.isRequired,
};
