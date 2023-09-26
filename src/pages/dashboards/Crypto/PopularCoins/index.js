import AppCard from '@crema/core/AppCard';
import React from 'react';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import PopularCoinsTable from './PopularCoinsTable';
const PopularCoins = ({data}) => {
  console.log(data, 'coinss');
  const {messages} = useIntl();
  return (
    <AppCard heightFull cardBodyClass='px-0'
      title={messages['dashboard.popularCoins']}
      action={messages['common.viewAll']}>
      <PopularCoinsTable coinsData={data} />
    </AppCard>
  );
};

export default PopularCoins;
PopularCoins.defaultProps = {
  popularCoins: [],
};

PopularCoins.propTypes = {
  popularCoins: PropTypes.array,
};
