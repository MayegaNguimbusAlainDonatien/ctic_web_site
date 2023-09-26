import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const NewsItem = ({item}) => {
  return (
    <div className={clsx(styles.recentNewsItem, 'd-flex item-hover')}>
      <Image
        roundedCircle
        className={styles.recentNewsAvatar}
        src={item.user.profilePic}
      />
      <div className={styles.recentNewsItemContent}>
        <h4>{item.title}</h4>
        <p>
          {item.desc}
          <span className={clsx(styles.recentNewsItemLink, 'ms-2')}>
            Read More
          </span>
        </p>
      </div>
    </div>
  );
};

export default NewsItem;

NewsItem.propTypes = {
  item: PropTypes.object,
};
