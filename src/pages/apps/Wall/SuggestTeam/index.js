import React from 'react';
import AppCard from '@crema/core/AppCard';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import styles from './index.module.scss';
import {Image, Button} from 'react-bootstrap';
import {AiOutlineLike} from 'react-icons/ai';
import clsx from 'clsx';

const SuggestTeam = ({data}) => {
  const {icon, title, subTitle, mediaImg} = data;
  const {messages} = useIntl();

  return (
    <AppCard
      className={clsx(styles.suggestTeamCard, 'mb-4')}
      cardBodyClass='p-0'
      title={messages['wall.suggestTeams']}
      action={
        <a
          className={clsx(styles.viewAll, 'text-danger text-decoration-none')}
          href='#/'>
          {messages['common.viewAll']}
        </a>
      }
      footer={
        <Button key={1} className={styles.suggestTeamBtn}>
          <AiOutlineLike />
          <IntlMessages id='wall.likeTeam' />
        </Button>
      }>
      <div className={styles.bodyWrapper}>
        <div
          className={clsx(styles.suggestTeamUser, 'd-flex align-items-center')}>
          <Image roundedCircle src={icon} alt='Face Book' />
          <div className={styles.suggestTeamUserContent}>
            <h4>{title}</h4>
            <p>{subTitle}</p>
          </div>
        </div>
        <div className={clsx(styles.suggestTeamThumb, 'w-100')}>
          <img src={mediaImg} alt='F man' />
        </div>
      </div>
    </AppCard>
  );
};

export default SuggestTeam;

SuggestTeam.propTypes = {
  data: PropTypes.object,
};
