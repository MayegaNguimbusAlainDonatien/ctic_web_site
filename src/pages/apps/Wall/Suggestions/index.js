import React from 'react';
import AppList from '@crema/core/AppList';
import AppCard from '@crema/core/AppCard';
import SuggestionItem from './SuggestionItem';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const Suggestions = ({suggestions}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='position-relative'
      title={messages['wall.suggestions']}
      footer={
        <div className={styles.suggestionBtn}>
          <span className={styles.suggestionAction} key={1}>
            View More
          </span>
        </div>
      }>
      <AppList
        data={suggestions}
        className={styles.listWrapper}
        renderItem={(item, index) => <SuggestionItem key={index} item={item} />}
      />
    </AppCard>
  );
};

export default Suggestions;

Suggestions.propTypes = {
  suggestions: PropTypes.array,
};
