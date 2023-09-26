import React, {useState} from 'react';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import AppMedialViewer from '@crema/core/AppMedialViewer';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import styles from './index.module.scss';

const Photos = ({photos}) => {
  const [index, setIndex] = useState(-1);

  const onClose = () => {
    setIndex(-1);
  };

  const {messages} = useIntl();

  return (
    <AppCard className='mb-4' title={messages['wall.photos']}>
      <AppRowContainer className={styles.photoRow}>
        {photos.map((photo, index) => (
          <Col xs={12} sm={6} lg={4} key={index}>
            <img
              onClick={() => setIndex(index)}
              className={clsx(styles.photoAvatar, 'card-hover d-block w-100')}
              key={index}
              src={photo.thumb}
              alt='user'
            />
          </Col>
        ))}
      </AppRowContainer>

      <span className={clsx(styles.photosLink, 'd-block text-center')}>
        View More
      </span>
      <AppMedialViewer
        index={index}
        medias={photos.map((data) => {
          return {
            url: data.thumb,
            mime_type: 'image/*',
          };
        })}
        onClose={onClose}
      />
    </AppCard>
  );
};

export default Photos;

Photos.propTypes = {
  photos: PropTypes.array,
};
