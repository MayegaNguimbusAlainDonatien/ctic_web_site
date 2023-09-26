import { FaRegCalendarAlt, FaRegHospital, FaRegComment, FaRegFolder } from 'react-icons/fa';
import { FiMail, FiMap, FiUsers } from 'react-icons/fi';
import { HiOutlineAcademicCap, HiOutlineChartSquareBar } from 'react-icons/hi';
import { VscAccount } from 'react-icons/vsc';
import {
  RiBarChart2Line,
  RiCustomerService2Line,
  RiDashboardLine,
  RiShieldUserLine,
  RiTodoLine,
} from 'react-icons/ri';
import { BiCartAlt, BiDollar, BiErrorAlt, BiBookReader } from 'react-icons/bi';
import { CgComponents } from 'react-icons/cg';
import {
  BsBriefcase,
  BsCart4,
  BsChatDots,
  BsCurrencyBitcoin,
  BsQuestionDiamond,
} from 'react-icons/bs';
import { DiHtml5Multimedia } from 'react-icons/di';
import {
  MdInvertColors,
  MdOutlineAnalytics,
  MdOutlineContactPhone,
  MdOutlineContactSupport,
  MdOutlineDns,
  MdOutlineManageAccounts,
  MdTimeline,
  MdOutlineAppRegistration,
  MdOutlineSpaceDashboard
} from 'react-icons/md';
import { CgAttachment, CgFeed } from 'react-icons/cg';
import { AiOutlineUnorderedList, AiOutlineHome, AiOutlinePhone } from 'react-icons/ai';
import React from 'react';

const routesConfig = [
  {
    id: 'menu',
    title: 'Side Menu',
    messageId: 'C.T.I.C',
    type: 'group',
    children: [
      {
        id: 'home',
        title: 'homepage',
        messageId: 'Home',
        type: 'item',
        icon: <AiOutlineHome />,
        url: '/homepage',
      },
    ],
  },
  {
    id: 'travelprocess',
    title: 'Travel Process',
    messageId: 'Travel Process',
    type: 'group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        messageId: 'Dashboard',
        type: 'item',
        icon: <MdOutlineSpaceDashboard />,
        url: '/admin/management',
      },
      {
        id: 'form',
        title: 'register form',
        messageId: 'Register Form',
        type: 'item',
        icon: <FaRegFolder />,
        url: '/travel-process/register-form',
      },
      {
        id: 'comments',
        title: 'Comments',
        messageId: 'Comments',
        type: 'item',
        count: 1,
        icon: <FaRegComment />,
        url: '/travel-process/comments',
      },
    ],
  },
  {
    id: 'settings',
    title: 'Settings',
    messageId: 'Settings',
    type: 'group',
    children: [
      {
        id: 'account',
        title: 'Account',
        messageId: 'sidebar.pages.extraPages.account',
        type: 'item',
        icon: <VscAccount />,
        url: '/extra-pages/user-profile',
      },
      {
        id: 'about-us',
        title: 'About Us',
        messageId: 'sidebar.pages.extraPages.aboutUs',
        type: 'item',
        icon: <FiUsers />,
        url: '/extra-pages/about-us',
      },
      {
        id: 'contact-us',
        title: 'Contact Us',
        messageId: 'sidebar.pages.extraPages.contactUs',
        type: 'item',
        icon: <AiOutlinePhone />,
        url: '/extra-pages/contact-us',
      },
      {
        id: 'faq',
        title: 'FAQ',
        messageId: 'sidebar.pages.extraPages.faq',
        type: 'item',
        icon: <BsQuestionDiamond />,
        url: '/extra-pages/faq',
      },
    ],
  },
];
export default routesConfig;
