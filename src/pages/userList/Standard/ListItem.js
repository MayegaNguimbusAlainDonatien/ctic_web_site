import React from 'react';
import {Button, Card} from 'react-bootstrap';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {FaFacebookF} from 'react-icons/fa';
import {
  AiOutlineGlobal,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineTwitter,
} from 'react-icons/ai';
import styles from './index.module.scss';
import clsx from 'clsx';

const ListItem = (props) => {
  const {user} = props;
  return (
    <Card
      className={clsx(
        styles.userStandardCard,
        'item-hover overflow-hidden p-0',
      )}>
      <div className='d-flex flex-column flex-sm-row'>
        <div
          className={clsx(
            styles.userStandardCardHeader,
            'd-flex flex-column justify-content-center align-items-center',
          )}>
          <div className={styles.userStandardCardHeaderAvatar}>
            <img src={user.image} />
          </div>
          <h3 className='text-truncate'>{user.name}</h3>
          <span
            className={clsx(
              styles.userStandardChip,
              'd-inline-block',
            )}>{`@${user.charge}/Hour`}</span>
        </div>

        <div className={styles.userStandardContent}>
          <div
            className={clsx(
              styles.userStandardContentHeader,
              'd-flex flex-column flex-lg-row align-items-lg-center',
            )}>
            <div
              className={clsx(
                styles.userStandardContentHeaderContact,
                'd-flex flex-wrap justify-content-between',
              )}>
              <div
                className={clsx(
                  styles.userStandardContentHeaderContactItem,
                  'd-flex align-items-center',
                )}>
                <AiOutlineMail />
                <span>{user.email}</span>
              </div>

              <div
                className={clsx(
                  styles.userStandardContentHeaderContactItem,
                  'd-flex align-items-center',
                )}>
                <AiOutlineGlobal />
                <span>{user.website}</span>
              </div>

              <div
                className={clsx(
                  styles.userStandardContentHeaderContactItem,
                  'd-flex align-items-center',
                )}>
                <AiOutlinePhone />
                <span>{user.phone}</span>
              </div>
            </div>

            <div
              className={clsx(
                styles.userStandardContentHeaderSocial,
                'd-flex align-items-center justify-content-between justify-content-sm-start',
              )}>
              <span className={styles.userStandardContentHeaderSocialItem}>
                <FaFacebookF className='pointer' />
              </span>
              <span className={styles.userStandardContentHeaderSocialItem}>
                <AiOutlineLinkedin className='pointer' />
              </span>
              <span className={styles.userStandardContentHeaderSocialItem}>
                <AiOutlineInstagram className='pointer' />
              </span>
              <span className={styles.userStandardContentHeaderSocialItem}>
                <AiOutlineTwitter className='pointer' />
              </span>
            </div>
          </div>

          <p className={clsx(styles.userStandardPara, 'mb-3')}>
            {user.information}
          </p>

          <div className='d-flex flex-column flex-wrap flex-md-row align-items-md-center justify-content-md-between'>
            <div className={styles.userStandardFooterChipView}>
              {user.skills.map((skill, index) => {
                return (
                  <span
                    key={index}
                    // className={clsx('user-morden-footer-chip', {dark :  theme.palette.type === 'dark'})}
                    className={clsx(
                      styles.userStandardFooterChip,
                      'd-inline-block',
                    )}>
                    {skill}
                  </span>
                );
              })}
            </div>

            <div className='position-relative'>
              <Button
                type='primary'
                className={styles.userStandardFooterHireBtn}>
                <IntlMessages id='common.hire' />
              </Button>
              <Button className={styles.userStandardFooterRemoveBtn}>
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
