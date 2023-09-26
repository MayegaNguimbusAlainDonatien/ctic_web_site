import AppScrollbar from '@crema/core/AppScrollbar';
import React from 'react';
import PropTypes from 'prop-types';
import AppList from '@crema/core/AppList';
import {Image} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const NewsList = ({data}) => {
  console.log(data, 'sa');
  return (
    <AppScrollbar>
      <AppList
        data={data}
        renderItem={(news) => {
          return (
            <div
              className={clsx(
                styles.newsContainer,
                'd-sm-flex justify-content-sm-between',
              )}>
              <div className='d-flex flex-column flex-grow-1 me-sm-1 mb-2'>
                <div className='d-flex flex-row mb-1'>
                  <p className='text-muted fs-7 mb-0'>{news.created}</p>
                  <p
                    className={clsx(
                      styles.newsHeading,
                      'text-primary fs-7 mb-0',
                    )}>
                    {news.by}
                  </p>
                </div>
                <p className='fs-7 mb-0'>{news.news}</p>
              </div>
              <Image
                className={clsx(styles.newsImage)}
                src={news.image}
                rounded
              />
            </div>
          );
        }}
      />
    </AppScrollbar>
  );
};

export default NewsList;

NewsList.propTypes = {
  data: PropTypes.array,
};
