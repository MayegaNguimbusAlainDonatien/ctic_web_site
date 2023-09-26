import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import {AiFillYoutube, AiOutlineGoogle, AiOutlineTwitter} from 'react-icons/ai';
import {FaFacebookF, FaVimeoV} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';
import {GrLinkedinOption} from 'react-icons/gr';
import {ImTumblr} from 'react-icons/im';
import AppGrid from '@crema/core/AppGrid';
import styles from './index.module.scss';
import clsx from 'clsx';

const Share = ({data}) => {
  const getIconByName = (icon) => {
    switch (icon) {
      case 'facebook':
        return <FaFacebookF />;
      case 'twitter':
        return <AiOutlineTwitter />;
      case 'dribbble':
        return <FiDribbble />;
      case 'vimeo':
        return <FaVimeoV />;
      case 'tumblr':
        return <ImTumblr />;
      case 'youtube':
        return <AiFillYoutube />;
      case 'linkedin':
        return <GrLinkedinOption />;
      case 'google':
        return <AiOutlineGoogle />;
      default:
        return <AiOutlineGoogle />;
    }
  };

  return (
    <AppCard title='Share' heightFull>
      <AppGrid
        data={data}
        itemPadding={5}
        responsive={{
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 4,
        }}
        renderItem={(data, index) => (
          <div
            style={{backgroundColor: data.color, color: 'white', width: '100%'}}
            key={index}
            className={clsx(styles.shareBadge, 'd-flex align-items-center')}>
            {getIconByName(data.icon)}
            <span className='ms-1'>{data.value}</span>
          </div>
        )}
      />
    </AppCard>
  );
};

export default Share;

Share.propTypes = {
  data: PropTypes.array.isRequired,
};
