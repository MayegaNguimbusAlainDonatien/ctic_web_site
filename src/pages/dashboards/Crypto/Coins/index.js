import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';
import CoinCard from './coinCard';
import {useIntl} from 'react-intl';
import AppRowContainer from '@crema/core/AppRowContainer';

const Coins = ({coinsData}) => {
  const {messages} = useIntl();

  const heading = {
    bitcoin: messages['dashboard.bitcoinPrice'],
    litecoin: messages['dashboard.litecoinPrice'],
    etherium: messages['dashboard.etheriumPrice'],
    ripple: messages['dashboard.ripplePrice'],
  };
  return (
    <>
      <p className='fw-bold fs-6 text'>{messages['dashboard.coins']}</p>
      <AppRowContainer>
        <Col xs={12} sm={6}>
          <CoinCard
            icon={'/assets/images/bitcoin.svg'}
            data={coinsData.bitcoin}
            heading={heading.bitcoin}
            bgColor='#9E49E6'
          />
        </Col>
        <Col xs={12} sm={6}>
          <CoinCard
            icon={'/assets/images/etherium.svg'}
            data={coinsData.etherium}
            heading={heading.etherium}
            bgColor='#0A8FDC'
          />
        </Col>
        <Col xs={12} sm={6}>
          <CoinCard
            icon={'/assets/images/litcoin.svg'}
            data={coinsData.liteCoin}
            heading={heading.litecoin}
            bgColor='#FFA940'
          />
        </Col>
        <Col xs={12} sm={6}>
          <CoinCard
            icon={'/assets/images/ripple.svg'}
            data={coinsData.ripple}
            heading={heading.ripple}
            bgColor='#F44D50'
          />
        </Col>
      </AppRowContainer>
    </>
  );
};
export default Coins;
Coins.propTypes = {
  coinsData: PropTypes.object,
};
