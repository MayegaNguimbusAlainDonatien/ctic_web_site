import React from 'react';
import Slider from 'rc-slider';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import styles from './index.module.scss';
import 'rc-slider/assets/index.css';

const Price = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const {messages} = useIntl();
  return (
    <AppCard title={messages['dashboard.price']}>
      <p className={styles.priceText}>{`$${value[0]}mi - $${value[1]}mi`}</p>

      <Slider range defaultValue={value} onChange={handleChange} />
    </AppCard>
  );
};

export default Price;
