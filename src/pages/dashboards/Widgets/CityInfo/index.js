import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import clsx from 'clsx';
import './index.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CityInfo = (props) => {
  const {cityData} = props;

  return (
    <AppCard heightFull cardBodyClass='p-0'>
      <Slider
        className={clsx(styles.cityInfoSlideCard, 'position-relative h-100')}
        {...settings}>
        {cityData.map((city) => {
          return (
            <div key={city.id} className='h-100 position-relative text-center'>
              <img
                className={clsx(
                  styles.cityInfoSlideImg,
                  'position-absolute w-100 h-100',
                )}
                src={city.image}
                alt='building'
              />
              <div
                className={clsx(
                  styles.cityInfoSlideImgContent,
                  'w-100 h-100 d-flex flex-column position-relative',
                )}>
                <h3>{city.name}</h3>

                <div className='mt-auto'>
                  <p className='mb-0'>{city.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </AppCard>
  );
};

export default CityInfo;

CityInfo.defaultProps = {
  cityData: [],
};

CityInfo.propTypes = {
  cityData: PropTypes.array,
};
