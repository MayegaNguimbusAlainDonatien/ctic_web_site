import React from 'react';
import {AiOutlineSearch, AiOutlineEdit, AiOutlineCamera} from 'react-icons/ai';
import IntlMessages from '../../../../utility/IntlMessages';

export const aboutUsData = [
  {
    alias: 'branding',
    title: <IntlMessages id='extra.branding' />,
    avatarColor: '#006d75',
    icon: <AiOutlineEdit color='#fff' />,
    content: <IntlMessages id='extra.brandingContent' />,
  },
  {
    alias: 'photography',
    title: <IntlMessages id='extra.photography' />,
    avatarColor: '#f5222d',
    icon: <AiOutlineCamera color='#fff' />,
    content: <IntlMessages id='extra.brandingContent' />,
  },
  {
    alias: 'seo',
    title: <IntlMessages id='extra.seo' />,
    avatarColor: '#1890ff',
    icon: <AiOutlineSearch color='#fff' />,
    content: <IntlMessages id='extra.brandingContent' />,
  },
];

export const teamData = [
  {
    id: 444,
    name: 'Asantha Powel',
    position: 'CEO',
    image: '/assets/images/teamImages/User1.png',
  },
  {
    id: 111,
    name: 'Johna Taylor',
    position: 'CTO',
    image: '/assets/images/teamImages/User4.png',
  },
  {
    id: 222,
    name: 'Nick Campbell',
    position: 'General Manager',
    image: '/assets/images/teamImages/User3.png',
  },
  {
    id: 333,
    name: 'Johna Taylor',
    position: 'CFO',
    image: '/assets/images/teamImages/User5.png',
  },
  {
    id: 555,
    name: 'Ricardo Johnson',
    position: 'Director',
    image: '/assets/images/teamImages/User2.png',
  },
  {
    id: 666,
    name: 'Johnson Lopez',
    position: 'Technical Advisor',
    image: '/assets/images/teamImages/User6.png',
  },
];
