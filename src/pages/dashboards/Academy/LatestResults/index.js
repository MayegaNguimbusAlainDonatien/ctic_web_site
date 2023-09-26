import React from 'react';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {ListGroup, ProgressBar} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const getColor = (percentage) => {
  if (percentage < 50) {
    return 'danger';
  }
  return '';
};

const ResultItem = ({result}) => {
  return (
    <ListGroup.Item
      className={clsx(
        styles.latestResultItem,
        'd-flex align-items-center flex-wrap position-relative border-0',
      )}>
      <div
        className={clsx(
          styles.latestResultFirstItems,
          'd-flex align-items-center',
        )}>
        <h3 className='text-truncate'>{result.chapter}</h3>
        <p className='text-truncate'>- {result.topic}</p>
      </div>
      <div
        className={clsx(
          styles.latestResultSecondItems,
          'd-flex align-items-center',
        )}>
        <ProgressBar
          className={styles.anaProgressBar}
          now={result.percentage}
          variant={getColor(result.percentage)}
        />
        <span className={styles.percentage}>{result.percentage}%</span>
      </div>
    </ListGroup.Item>
  );
};

const LatestResults = ({latestResults}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      heightFull
      title={messages['academy.latestResults']}
      cardBodyClass='px-0'>
      <ListGroup className='border-0'>
        {latestResults.map((data, index) => (
          <ResultItem key={index} result={data} />
        ))}
      </ListGroup>
    </AppCard>
  );
};

export default LatestResults;

LatestResults.propTypes = {
  latestResults: PropTypes.array,
};

ResultItem.propTypes = {
  result: PropTypes.object,
};
