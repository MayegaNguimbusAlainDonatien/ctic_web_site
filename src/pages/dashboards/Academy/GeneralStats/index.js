import React from 'react';
import AppCard from '@crema/core/AppCard';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

import {BiBasket} from 'react-icons/bi';
import {FcGraduationCap} from 'react-icons/fc';
import {GiBookshelf} from 'react-icons/gi';
import {FcReading} from 'react-icons/fc';
import clsx from 'clsx';

const getIcon = (iconType) => {
  switch (iconType) {
    case 'BiBasket':
      return <BiBasket color='#9E49E6' className='icon' />;
    case 'FcGraduationCap':
      return <FcGraduationCap color='#0A8FDC' className='icon' />;
    case 'GiBookshelf':
      return <GiBookshelf color='#49BD65' className='icon' />;
    default:
      return <FcReading color='#9E49E6' className='icon' />;
  }
};
const GeneralStats = ({stats}) => {
  return (
    <AppCard heightFull>
      <div className='d-flex align-items-center'>
        <div
          className={clsx(
            styles.generalStatsAvatar,
            'd-flex align-items-center justify-content-center rounded-circle',
          )}
          style={{backgroundColor: stats.bgcolor}}>
          {getIcon(stats.icon)}
        </div>
        <div
          className={clsx(
            styles.generalStatsContent,
            'd-flex align-items-center justify-content-between flex-row',
          )}>
          <div>
            <h3>{stats.count}</h3>
            <p className='text-truncate'>{stats.title}</p>
          </div>
          <span
            style={{backgroundColor: stats.bgcolor, color: stats.badgeColor}}
            className={clsx(
              styles.generalStatsBadge,
              'text-center',
            )}>
            {stats.new}
          </span>
        </div>
      </div>
    </AppCard>
  );
};

export default GeneralStats;

GeneralStats.defaultProps = {};

GeneralStats.propTypes = {
  stats: PropTypes.object,
};
