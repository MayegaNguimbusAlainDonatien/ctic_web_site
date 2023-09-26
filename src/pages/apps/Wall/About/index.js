import React from 'react';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import AppCard from '@crema/core/AppCard';
import AppList from '@crema/core/AppList';
import AppIconButton from '@crema/core/AppIconBtn';
import IntlMessages from '@crema/utility/IntlMessages';
import {AiOutlineUser, AiOutlineEdit, AiOutlineMail} from 'react-icons/ai';
import {BiPhone, BiErrorCircle} from 'react-icons/bi';
import {FiThumbsUp} from 'react-icons/fi';
import {MdPublic} from 'react-icons/md';
import styles from './index.module.scss';
import clsx from 'clsx';

const getIconByName = (iconName) => {
  switch (iconName) {
    case 'person':
      return <AiOutlineUser />;
    case 'phone':
      return <BiPhone />;
    case 'email':
      return <AiOutlineMail />;
    case 'error':
      return <BiErrorCircle />;
    case 'thumb':
      return <FiThumbsUp />;
    case 'public':
      return <MdPublic />;
  }
};

const AboutItem = ({item}) => {
  const getLinkAddress = () => {
    switch (item.linkType) {
      case 'link': {
        return <a href={item.text}>{item.text}</a>;
      }
      case 'phone': {
        return <a href={`tel:${item.text}`}>{item.text}</a>;
      }
      case 'email': {
        return <a href={`mailto:${item.text}`}>{item.text}</a>;
      }
      default:
        return <p>{item.text}</p>;
    }
  };

  return (
    <div className={clsx(styles.wallAboutItem, 'd-flex align-items-center')}>
      <span className={styles.wallAboutItemIcon}>
        {getIconByName(item.icon)}
      </span>
      {getLinkAddress()}
      <span className={styles.wallAboutBtnView}>
        <AppIconButton smallBtn
          className={clsx(styles.wallAboutBtn, 'ms-2')}
          title={<IntlMessages id='common.edit' />}>
          <AiOutlineEdit />
        </AppIconButton>
      </span>
    </div>
  );
};

const About = ({about}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      className='mb-4'
      title={messages['wall.about']}
      action={<a href='#/'>{messages['common.editPageInfo']}</a>}>
      <AppList
        data={about}
        renderItem={(data, index) => <AboutItem key={index} item={data} />}
      />
    </AppCard>
  );
};

export default About;

About.propTypes = {
  about: PropTypes.array.isRequired,
};
AboutItem.propTypes = {
  item: PropTypes.object.isRequired,
};
