import React from 'react';
import {useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import CheckedMailActions from './CheckedMailActions';
import AppsPagination from '@crema/core/AppsPagination';
import {Form, InputGroup, FormControl} from 'react-bootstrap';
import {Search} from 'react-bootstrap-icons';
import styles from '../index.module.scss';
import MoreOptions from './MoreOptions';
import {useIntl} from 'react-intl';
import clsx from 'clsx';

const MailContentHeader = (props) => {
  const {path, checkedMails, setCheckedMails, page, onChange} = props;

  const mailList = useSelector(({mailApp}) => mailApp.mailList);

  const totalMails = useSelector(({mailApp}) => mailApp.totalMails);

  const onHandleMasterCheckbox = (event) => {
    if (event.target.checked) {
      const mailIds = mailList.map((mail) => mail.id);
      setCheckedMails(mailIds);
    } else {
      setCheckedMails([]);
    }
  };

  const {messages} = useIntl();

  return (
    <>
      <div className='d-flex flex-row align-items-center'>
        <Form.Check
          color='primary'
          checked={
            mailList.length > 0 && checkedMails.length === mailList.length
          }
          onChange={onHandleMasterCheckbox}
        />

        <InputGroup className={styles.mailSearch}>
          <FormControl
            className={styles.searchInput}
            placeholder={
              checkedMails.length > 0 ? null : messages['common.searchHere']
            }
            aria-label={
              checkedMails.length > 0 ? null : messages['common.searchHere']
            }
            aria-describedby='basic-addon2'
          />
          <InputGroup.Text className={styles.searchBtn} id='basic-addon2'>
            <Search />
          </InputGroup.Text>
        </InputGroup>
        {checkedMails.length > 0 ? (
          <CheckedMailActions
            checkedMails={checkedMails}
            setCheckedMails={setCheckedMails}
          />
        ) : null}

        <MoreOptions
          checkedMails={checkedMails}
          setCheckedMails={setCheckedMails}
          path={path}
        />
      </div>
      {mailList.length > 0 ? (
        <AppsPagination
          className={clsx(
            styles.mailContentHeaderPagination,
            'ms-auto d-flex align-items-center',
          )}
          count={totalMails}
          page={page}
          onChange={onChange}
        />
      ) : null}
    </>
  );
};

export default withRouter(MailContentHeader);

MailContentHeader.defaultProps = {
  checkedMails: [],
  page: 0,
};

MailContentHeader.propTypes = {
  checkedMails: PropTypes.array,
  setCheckedMails: PropTypes.func,
  page: PropTypes.number,
  onChange: PropTypes.func,
  path: PropTypes.any,
};
