import React, {useEffect} from 'react';
import MailsList from './MailsList';
import {
  onGetConnectionList,
  onGetMailFolderList,
  onGetMailLabelList,
} from '../../../redux/actions/MailApp';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import AppsContainer from '@crema/core/AppsContainer';
import MailSidebar from './MailSideBar';
import {useIntl} from 'react-intl';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import MailDetail from './MailDetail';

const Mail = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetMailLabelList());
    dispatch(onGetMailFolderList());
    dispatch(onGetConnectionList());
  }, [dispatch]);

  const onGetMainComponent = () => {
    if (props.match.params.id) {
      return <MailDetail />;
    } else {
      return <MailsList />;
    }
  };

  const {messages} = useIntl();
  return (
    <AppsContainer
      title={messages['mailApp.mail']}
      sidebarContent={<MailSidebar />}>
      <AppPageMetadata title='Mail App' />
      {onGetMainComponent()}
    </AppsContainer>
  );
};

export default Mail;

Mail.defaultProps = {
  match: null,
};

Mail.propTypes = {
  match: PropTypes.object,
};
