import React from 'react';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import {BsFillHeartFill, BsChatDots} from 'react-icons/bs';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import styles from './index.module.scss';
import clsx from 'clsx';

const SocialDataCard = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      cardBodyClass='d-flex flex-column justify-content-center'>
      <div className='w-100 d-flex text-center py-3'>
        <div className={clsx(styles.SocialCardLeft, 'px-3 w-50')}>
          <div className={clsx(styles.SocialDataCardIcon, 'text-danger mb-2')}>
            <BsFillHeartFill />
          </div>
          <h3 className='mb-2'>{data.likes}</h3>
          <p className='text-muted fs-7 mb-1'>{messages['common.likes']}</p>
        </div>

        <div className='w-50 px-3'>
          <div className={clsx(styles.SocialDataCardIcon, 'text-primary mb-2')}>
            <BsChatDots />
          </div>
          <h3 className='mb-2'>{data.comments}</h3>
          <p className='text-muted fs-7 mb-1 text-truncate'>
            {messages['common.comments']}
          </p>
        </div>
      </div>
    </AppCard>
  );
};

export default SocialDataCard;

SocialDataCard.defaultProps = {};

SocialDataCard.propTypes = {
  data: PropTypes.object.isRequired,
};
