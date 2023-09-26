import React, {useState} from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {Form} from 'react-bootstrap';
import {AiOutlineCheck, AiOutlineClose} from 'react-icons/ai';
import styles from './index.module.scss';
import {useIntl} from 'react-intl';

const AddNewTag = (props) => {
  const {onAddNewTag} = props;
  const [newTag, setNewTag] = useState('');

  const [isAddNewTag, setAddNewTag] = useState(false);

  const onAddTag = () => {
    onAddNewTag(newTag);
    setNewTag('');
    setAddNewTag(false);
  };
  const {messages} = useIntl();

  return (
    <>
      {isAddNewTag ? (
        <div className='d-flex align-items-center m-2'>
          <Form.Control
            placeholder={messages['common.tag']}
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
          />
          <span className={styles.tagCheck}>
            <AiOutlineCheck onClick={onAddTag} className='pointer' />
          </span>
          <span className={styles.tagClose}>
            <AiOutlineClose
              onClick={() => setAddNewTag(false)}
              className='pointer'
            />
          </span>
        </div>
      ) : (
        <span
          className={styles.addNewTagLink}
          onClick={() => setAddNewTag(true)}>
          <IntlMessages id='dashboard.addNewTag' />
        </span>
      )}
    </>
  );
};

export default AddNewTag;

AddNewTag.propTypes = {
  onAddNewTag: PropTypes.func,
};
