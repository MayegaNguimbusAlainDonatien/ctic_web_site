import React, {useState} from 'react';
import AddNewTag from './AddNewTag';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import {Button} from 'react-bootstrap';
import {AiOutlineClose} from 'react-icons/ai';
import styles from './index.module.scss';
import clsx from 'clsx';

const colorList = [
  {id: 9001, color: '#1890ff'},
  {id: 9002, color: '#f5222d'},
  {id: 9003, color: '#52c41a'},
  {id: 9004, color: '#fa8c16'},
  {id: 9005, color: '#08979c'},
  {id: 9006, color: '#1890ff'},
];

const AddTags = (props) => {
  const {data} = props;

  const [tags, setTags] = useState(data);

  const handleDelete = (tagToDelete) => () => {
    setTags((tags) => tags.filter((tag) => tag.id !== tagToDelete.id));
    console.log('Deleted');
  };

  const onAddNewTag = (newTag) => {
    let tag = {
      label: newTag,
      key: Math.floor(Math.random() * 10000),
      color: colorList[Math.floor(Math.random() * colorList.length)].color,
    };
    setTags((tags) => tags.concat(tag));
  };

  const {messages} = useIntl();

  return (
    <AppCard heightFull title={messages['dashboard.addTags']}>
      <div className={clsx(styles.addTagsContent, 'p-2')}>
        <div className='d-flex align-items-center flex-wrap'>
          {tags.map((item) => {
            return (
              <span
                key={item.id}
                id={item.id}
                className={clsx(styles.tagBadge, 'm-2')}
                style={{backgroundColor: item.color}}>
                <span>{item.label}</span>
                <Button
                  onClick={handleDelete(item)}
                  className={clsx(
                    styles.tagBadgeBtn,
                    'd-inline-flex align-items-center justify-content-center',
                  )}>
                  <AiOutlineClose />
                </Button>
              </span>
            );
          })}
        </div>

        <AddNewTag onAddNewTag={onAddNewTag} />
      </div>
    </AppCard>
  );
};

export default AddTags;

AddTags.defaultProps = {
  data: [],
};

AddTags.propTypes = {
  data: PropTypes.array,
};
