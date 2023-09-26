import React, {useState} from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {setCurrentProduct} from '../../../../../redux/actions/Ecommerce';
import {useHistory} from 'react-router-dom';
import {AiFillHeart, AiOutlineHeart, AiOutlineStar} from 'react-icons/ai';
import styles from './index.module.scss';
import AppCard from '@crema/core/AppCard';
import clsx from 'clsx';

const GridItem = (props) => {
  const {item} = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const OnFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <AppCard
      className={clsx(styles.productGridCard, 'm-2 item-hover')}
      onClick={() => {
        dispatch(setCurrentProduct(item));
        history.push('/apps/ecommerce/product_detail/' + item.id);
      }}>
      <div
        className={clsx(
          styles.productGridCardHeader,
          'd-flex justify-content-between mt-2',
        )}>
        <span className={styles.productGridCardHeaderBadge}>
          {item.rating}
          <AiOutlineStar />
        </span>

        <div className={styles.productGridCardHeaderThumb}>
          <div className={styles.productGridImg}>
          <img src={item.image[0].src} alt='watch' />
        </div>
        </div>

        <span className={styles.productListFavorChecked} onClick={OnFavorite}>
          {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
        </span>
      </div>

      <h3 className={clsx(styles.productGridCardTitle, 'text-truncate mb-1')}>
        {item.title}
      </h3>

      <p className={clsx(styles.productGridCardPara, 'text-truncate')}>
        {item.description}
      </p>

      <div
        className={clsx(
          styles.productGridAction,
          'd-flex align-items-center justify-content-between ms-n1 me-n2',
        )}>
        <span className={clsx(styles.productGridActionItem, 'pe-1 ps-1 mb-2')}>
          $ {+item.mrp - Math.round((+item.mrp * +item.discount) / 100)}
        </span>
        <span
          className={clsx(
            styles.productGridActionItem,
            styles.cut,
            'pe-1 ps-1 mb-2',
          )}>
          ${item.mrp}
        </span>
        <span
          className={clsx(
            styles.productGridActionItem,
            styles.green,
            'pe-1 ps-1 mb-2',
          )}>
          {item.discount}% <IntlMessages id='ecommerce.off' />
        </span>
      </div>
    </AppCard>
  );
};

export default GridItem;

GridItem.propTypes = {
  item: PropTypes.object.isRequired,
};
