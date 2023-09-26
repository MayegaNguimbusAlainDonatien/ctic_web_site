import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onGetCryptoData} from '../../../redux/actions';
import AppAnimate from '@crema/core/AppAnimate';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import AppInfoView from '@crema/core/AppInfoView';
import TotalBalance from './TotalBalance';
import Coins from './Coins';
import BuySell from './BuySell';
import BtcVolumeCurrency from './BTCVolumeByCurrency';
import PopularCoins from './PopularCoins';
import LatestNews from './LatestNews';
import CryptoMarketactivity from './CryptoMarketActivity';
import Bitcoin from './Bitcoin';
const Crypto = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetCryptoData());
  }, [dispatch]);

  const cryptoData = useSelector(({dashboard}) => dashboard.cryptoData);
  console.log(cryptoData, 'asd');
  return (
    <>
      {cryptoData ? (
        <AppAnimate animation='transition.slideUpIn' delay={200}>
          <AppRowContainer>
            <Col xs={12} lg={5}>
              <TotalBalance totalBalanceData={cryptoData.totalBalanceData} />
            </Col>

            <Col xs={12} lg={7}>
              <Coins coinsData={cryptoData.coinsData} />
            </Col>

            <Col xs={12} lg={8}>
              <Bitcoin
                graphData={cryptoData.coinGraphData}
                data={cryptoData.coinsData}
              />
            </Col>

            <Col xs={12} lg={4}>
              <BuySell buySell={cryptoData.buySell} />
            </Col>

            <Col xs={12} lg={4}>
              <BtcVolumeCurrency data={cryptoData.btcChartData} />
            </Col>

            <Col xs={12} lg={8}>
              <PopularCoins data={cryptoData.popularCoins} />
            </Col>

            <Col xs={12} lg={6}>
              <LatestNews data={cryptoData.newsData} />
            </Col>

            <Col xs={12} lg={6}>
              <CryptoMarketactivity
                marketGraphData={cryptoData.marketGraphData}
              />
            </Col>
          </AppRowContainer>
        </AppAnimate>
      ) : null}

      <AppInfoView />
    </>
  );
};
export default Crypto;
