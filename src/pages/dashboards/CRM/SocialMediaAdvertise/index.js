import React from 'react';
import SocialMediaGraph from './SocialMediaGraph';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import {useIntl} from 'react-intl';
import clsx from 'clsx';

const SocialMediaAdvertise = (props) => {
  const {socialMediaData} = props;
  const {messages} = useIntl();

  return (
    <AppCard heightFull title={messages['dashboard.socialMedia']}>
      <SocialMediaGraph socialMediaData={socialMediaData} />
      <div
        className={clsx(
          styles.socialMediaAdvertise,
          'd-flex justify-content-between mb-1 ms-n2 me-n2',
        )}>
        {socialMediaData.map((item) => {
          return (
            <div
              className={clsx(styles.socialMediaAdvertiseItem, 'ms-2 me-2')}
              key={item.id}>
              <h4 style={{color: item.color}}>{item.revenue}</h4>
              <p>{item.name.toUpperCase()}</p>
              <span
                className={styles.socialMediaAdvertiseItemValue}
                style={{color: item.changeColor}}>
                {item.change}
              </span>
            </div>
          );
        })}
      </div>
    </AppCard>
  );
};

export default SocialMediaAdvertise;

SocialMediaAdvertise.defaultProps = {
  socialMediaData: [],
};

SocialMediaAdvertise.propTypes = {
  socialMediaData: PropTypes.array,
};
