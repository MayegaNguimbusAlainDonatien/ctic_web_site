import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import {Image} from 'react-bootstrap';
import AppTable from '@crema/core/AppTableContainer/AppTable';

const columns = [
  {
    title: 'No.',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name, data) => (
      <div className={styles.popularCoinsName}>
        <Image
         className={styles.imageCoins}
          roundedCircle
          src={data.image}
          style={{backgroundColor: data.color}}
        />
        <div className={styles.popularCoinsInfoContent}>
          <h3>{name}</h3>
        </div>
      </div>
    ),
  },

  {
    title: 'Market Cap',
    dataIndex: 'marketCap',
    key: 'marketCap',
    align: 'center',
  },
  {
    title: 'Volume 24h',
    dataIndex: 'volume',
    key: 'volume',
    align: 'center',
  },
  {
    title: '24h %',
    dataIndex: 'h',
    key: 'h',
    align: 'center',
  },
];

const PopularCoinsTable = ({coinsData}) => {
  console.log(coinsData, 'dara');
  return <AppTable hoverColor data={coinsData} columns={columns} />;
};

export default PopularCoinsTable;

PopularCoinsTable.defaultProps = {
  coinsData: [],
};

PopularCoinsTable.propTypes = {
  coinsData: PropTypes.array,
};
