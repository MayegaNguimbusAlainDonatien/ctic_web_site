import React from 'react';
import AppCard from '@crema/core/AppCard';
import MapView from './MapView';
import clsx from 'clsx';
import styles from './index.module.scss';
import AppRowContainer from '@crema/core/AppRowContainer';
import {ListGroup, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';

const CountryCell = ({data}) => (
  <div
    className={clsx(
      styles.siteVisitorCell,
      'd-flex align-items-center overflow-hidden item-hover',
    )}>
    <span className={styles.countriesThumb}>
      <img src={data.icon} alt='icon' />
    </span>
    <h6 className='flex-grow-1 flex-shrink-1 text-truncate'>{data.country}</h6>
    <span className={styles.visitorsCount}>{data.value}</span>
  </div>
);

CountryCell.propTypes = {
  data: PropTypes.object,
};

const SiteVisitors = ({siteVisitorsData}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      cardBodyClass='px-0'
      heightFull
      title={messages['eCommerce.siteVisitorsStatistics']}>
      <AppRowContainer>
        <Col xs={12} md={4} xl={4} xxl={3}>
          <h3 className={styles.siteVisitorTitle}>
            {messages['eCommerce.countries']}
          </h3>
          <ListGroup>
            {siteVisitorsData.map((data) => (
              <CountryCell key={data.id} data={data} />
            ))}
          </ListGroup>
        </Col>
        <Col xs={12} md={4} xl={4} xxl={6}>
          <MapView />
        </Col>
        <Col xs={12} md={4} xl={4} xxl={3}>
          <h3 className={styles.siteVisitorTitle}>
            {messages['eCommerce.countries']}
          </h3>
          <ListGroup>
            {siteVisitorsData.map((data) => (
              <CountryCell key={data.id} data={data} />
            ))}
          </ListGroup>
        </Col>
      </AppRowContainer>
    </AppCard>
  );
};

export default SiteVisitors;

SiteVisitors.propTypes = {
  siteVisitorsData: PropTypes.array,
};
