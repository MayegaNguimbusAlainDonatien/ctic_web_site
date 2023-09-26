import React, {useState} from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import {Button} from 'react-bootstrap';
import styles from './index.module.scss';

import {AiOutlineClose} from 'react-icons/ai';
import AppScrollbar from '@crema/core/AppScrollbar';
import AppList from '@crema/core/AppList';

const Categories = (props) => {
  const {messages} = useIntl();
  const data = props.data;

  const [categoryList, handleList] = useState(data);

  const handleChange = (e, category) => {
    category.isChecked = e.target.checked;
    const list = categoryList.map((item) =>
      item.id === category.id ? category : item,
    );
    handleList(list);
  };

  return (
    <AppCard
      heightFull
      title={messages['dashboard.categories']}
      action={
        <Button className='close-btn'>
          <AiOutlineClose size={20} />
        </Button>
      }>
      <AppScrollbar className={styles.categoriesScrollbar}>
        <AppList
          className='pt-0 align-items-center flex-wrap'
          data={categoryList}
          renderItem={(item, index) => (
            <CategoryItem
              id={index}
              key={index}
              item={item}
              handleChange={handleChange}
            />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Categories;

Categories.defaultProps = {
  categoryList: [],
};

Categories.propTypes = {
  categoryList: PropTypes.array,
  data: PropTypes.array,
};
