import React, {useEffect, useState} from 'react';
import {useHistory, useLocation, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import MailContentHeader from './MailContentHeader';
import MailListItem from './MailListItem';
import {
  onGetMailList,
  onUpdateMailReadStatus,
  onUpdateMailStarredStatus,
} from '../../../../redux/actions/MailApp';
import AppsPagination from '@crema/core/AppsPagination';
import AppsContent from '@crema/core/AppsContainer/AppsContent';
import AppsHeader from '@crema/core/AppsContainer/AppsHeader';
import AppsFooter from '@crema/core/AppsContainer/AppsFooter';
import AppList from '@crema/core/AppList';
import ListEmptyResult from '@crema/core/AppList/ListEmptyResult';
import EmailListSkeleton from '@crema/core/AppSkeleton/EmailListSkeleton';
import MailListItemMobile from './MailListItemMobile';
import styles from './index.module.scss';

const MailsList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const mailApp = useSelector(({mailApp}) => mailApp);
  const {mailList} = mailApp;
  console.log('mailApp: ', mailApp);
  const labelList = useSelector(({mailApp}) => mailApp.labelList);
  const [page, setPage] = useState(0);

  const {pathname} = useLocation();

  const path = pathname.split('/');

  const loading = useSelector(({common}) => common.loading);

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  useEffect(() => {
    const path = pathname.split('/');
    dispatch(onGetMailList(path[path.length - 2], path[path.length - 1], page));
  }, [dispatch, page, pathname]);

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  const [checkedMails, setCheckedMails] = useState([]);

  const onChange = (page) => {
    setPage(page - 1);
  };

  const onChangeCheckedMails = (checked, id) => {
    if (checked) {
      setCheckedMails(checkedMails.concat(id));
    } else {
      setCheckedMails(checkedMails.filter((mailId) => mailId !== id));
    }
  };

  const onViewMailDetail = (mail) => {
    const changedMailList = [mail.id];
    if (!mail.isRead)
      dispatch(onUpdateMailReadStatus(changedMailList, true, false));
    history.push(`/apps/mail/${params.name}/${mail.id}`);
  };

  const onChangeStarred = (checked, mail) => {
    const selectedIdList = [mail.id];
    dispatch(
      onUpdateMailStarredStatus(selectedIdList, checked, path[path.length - 1]),
    );
  };

  const totalMails = useSelector(({mailApp}) => mailApp.totalMails);

  console.log('totalMails', totalMails, mailList);
  return (
    <>
      <AppsHeader>
        <MailContentHeader
          checkedMails={checkedMails}
          setCheckedMails={setCheckedMails}
          onChange={onChange}
          page={page}
          path={path}
        />
      </AppsHeader>
      <AppsContent>
        <div className={styles.mailBody}>
          <AppList
            data={mailList}
            ListEmptyComponent={
              <ListEmptyResult
                loading={loading}
                placeholder={<EmailListSkeleton />}
              />
            }
            renderItem={(mail) => (
              <MailListItem
                mail={mail}
                key={mail.id}
                labelList={labelList}
                onChangeCheckedMails={onChangeCheckedMails}
                checkedMails={checkedMails}
                onViewMailDetail={onViewMailDetail}
                onChangeStarred={onChangeStarred}
              />
            )}
          />
        </div>
        <div className={styles.mailBodyMobile}>
          <AppList
            data={mailList}
            ListEmptyComponent={
              <ListEmptyResult
                loading={loading}
                placeholder={<EmailListSkeleton />}
              />
            }
            renderItem={(mail) => (
              <MailListItemMobile
                mail={mail}
                key={mail.id}
                labelList={labelList}
                onViewMailDetail={onViewMailDetail}
                onChangeStarred={onChangeStarred}
                checkedMails={checkedMails}
                onChangeCheckedMails={onChangeCheckedMails}
              />
            )}
          />
        </div>
      </AppsContent>
      {mailList.length > 0 ? (
        <div className='d-block d-sm-none'>
          <AppsFooter>
            <AppsPagination
              count={totalMails}
              page={page}
              onChange={onChange}
            />
          </AppsFooter>
        </div>
      ) : null}
    </>
  );
};

export default MailsList;
