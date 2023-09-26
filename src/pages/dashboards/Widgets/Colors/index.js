import React, {useState} from 'react';
import ColorItem from './ColorItem';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import styles from './index.module.scss';
import AppScrollbar from '@crema/core/AppScrollbar';
import AppList from '@crema/core/AppList';

const Colors = ({data}) => {
  const [colorsList, handleList] = useState(data);

  const handleChange = (e, color) => {
    color.isChecked = e.target.checked;
    const list = colorsList.map((item) =>
      item.id === color.id ? color : item,
    );
    handleList(list);
  };
  const {messages} = useIntl();
  return (
    <AppCard heightFull title={messages['dashboard.colors']}>
      <AppScrollbar className={styles.colorsScrollbar}>
        <AppList
          data={data}
          renderItem={(item) => {
            return (
              <ColorItem
                key={item.id}
                item={item}
                handleChange={handleChange}
              />
            );
          }}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Colors;

Colors.defaultProps = {
  data: [],
};

Colors.propTypes = {
  data: PropTypes.array,
};
