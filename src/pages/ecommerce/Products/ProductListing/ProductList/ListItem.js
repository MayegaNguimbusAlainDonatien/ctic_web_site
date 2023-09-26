import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {setCurrentProduct} from '../../../../../redux/actions/Ecommerce';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import {Form} from 'react-bootstrap';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss';
import clsx from 'clsx';
import {Rating} from 'react-simple-star-rating';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ListItem = (props) => {
  const {item} = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const OnFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <AppCard
      className={clsx(styles.productListCard, 'm-2 item-hover')}
      onClick={() => {
        dispatch(setCurrentProduct(item));
        history.push('/ecommerce/product_detail/' + item.id);
      }}>
      <div className='d-flex flex-column flex-sm-row'>
        <div className={styles.productListSlider}>
          <Slider className='slick-slider-global' {...settings}>
            {item.image.map((img) => {
              return (
                <div
                  className={clsx(styles.productListSliderThumb, 'mb-2')}
                  key={img.id}>
                  <div className={styles.productImg}>
                    <img src={img.src} alt='watch' />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className={styles.productListSliderContent}>
          <div
            className={clsx(
              styles.productListSliderContentHeader,
              'd-flex align-items-center mb-1',
            )}>
            <h3 className='text-truncate'>{item.title}</h3>

            <span
              className={clsx(styles.productListFavorChecked, 'd-block')}
              onClick={OnFavorite}>
              {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
            </span>
          </div>

          <p className={styles.productListCardContentPara}>
            {item.description}
          </p>

          <div
            className={clsx(styles.productListPrice, 'd-flex flex-wrap mb-2')}>
            <div className={clsx(styles.productListPriceItem, 'mb-1')}>
              <span className={styles.productListPriceItemText}>
                <IntlMessages id='ecommerce.exclusivePrice' />:
              </span>
              <span className={clsx(styles.productListPriceItemValue, 'ms-2')}>
                ${+item.mrp - Math.round((+item.mrp * +item.discount) / 100)}
              </span>
            </div>
            <div className={clsx(styles.productListPriceItem, 'mb-1')}>
              <IntlMessages id='ecommerce.mrp' />:
              <span className='text-decoration-line-through'>${item.mrp}</span>
            </div>
            <div
              className={clsx(
                styles.productListPriceItem,
                styles.green,
                'mb-1',
              )}>
              {item.discount}% <IntlMessages id='ecommerce.off' />
            </div>
          </div>

          <div
            className={clsx(
              styles.productListAction,
              'd-flex justify-content-between align-items-center',
            )}>
            <div
              className={clsx(
                styles.productListActionItem,
                styles.addToCom,
                'd-flex align-items-center',
              )}>
              <Form.Check />
              <span>
                <IntlMessages id='ecommerce.addToCompare' />
              </span>
            </div>
            <div
              className={clsx(
                styles.productListActionItem,
                'd-flex align-items-center',
              )}>
              <Rating initialValue={item.rating} transition size={18} />
              <span>{`(${item.reviews})`}</span>
            </div>
          </div>
        </div>
      </div>
    </AppCard>
  );
};

export default ListItem;

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};
