import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-bootstrap';
import clsx from 'clsx';
import styles from './index.module.scss';

const SuggestionItem = ({item}) => {
  return (
    <div className={clsx(styles.suggestionItem, 'd-flex item-hover')}>
      <Image
        className={styles.suggestionAvatar}
        src={item.thumb}
        alt={item.name}
      />
      <div className={styles.suggestionItemContent}>
        <h4>{item.name}</h4>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default SuggestionItem;

SuggestionItem.propTypes = {
  item: PropTypes.object,
};
