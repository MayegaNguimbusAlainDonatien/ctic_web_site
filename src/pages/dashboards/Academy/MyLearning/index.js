import React from 'react';
import AppCard from '@crema/core/AppCard';
import LearningItem from './LearningItem';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {ListGroup} from 'react-bootstrap';

const MyLearning = ({learningData}) => {
  const {messages} = useIntl();
  return (
    <AppCard cardBodyClass='px-0' title={messages['academy.myLearning']}>
      <ListGroup className='border-0 my-3'>
        {learningData.map((data, index) => (
          <LearningItem key={index} course={data} />
        ))}
      </ListGroup>
    </AppCard>
  );
};

export default MyLearning;

MyLearning.propTypes = {
  learningData: PropTypes.array,
};
