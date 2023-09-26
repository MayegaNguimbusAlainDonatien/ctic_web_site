import React, {useState} from 'react';
import Carousel, {Dots} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {Button} from 'react-bootstrap';
import {addItemToCart, showMessage} from '../../../../redux/actions';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import styles from './index.module.scss';
import clsx from 'clsx';
import './index.scss';

const ProductImageSlide = ({product}) => {
  const [value, setValue] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const slides = product.image.map((data, index) => (
    <img key={index} src={data.src} alt=''/>
  ));
  const onChange = (value) => {
    setValue(value);
  };

  const onAddToCard = () => {
    dispatch(showMessage(product.title + ' added to cart successfully'));
    dispatch(addItemToCart(product));
  };
  const onButNowToCard = () => {
    dispatch(addItemToCart(product));
    history.push('/ecommerce/cart');
  };

  const OnFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className='position-relative'>
      <div className='d-flex position-relative'>
        <Dots
          position='left'
          thumbnails={slides}
          value={value}
          onChange={onChange}
          number={slides.length}
        />
        <Carousel
          position='left'
          value={value}
          slides={slides}
          onChange={onChange}
        />

        <span
          className={clsx(styles.productFavorite, 'position-absolute')}
          onClick={OnFavorite}>
          {isFavorite ? <AiFillHeart/> : <AiOutlineHeart/>}
        </span>
      </div>
      <div
        className={clsx(
          styles.productImageSlideAction,
          'd-flex justify-content-center',
        )}>
        <Button
          variant='primary'
          onClick={onAddToCard}
          className={styles.addToCartBtn}>
          Add to cart
        </Button>
        <Button
          variant='danger'
          style={{width: 140}}
          className='btn-secondary'
          onClick={onButNowToCard}>
          Buy now
        </Button>
      </div>
    </div>
  );
};

export default ProductImageSlide;

ProductImageSlide.propTypes = {
  product: PropTypes.object,
};
