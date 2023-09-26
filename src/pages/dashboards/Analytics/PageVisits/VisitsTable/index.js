import React from 'react';
import PropTypes from 'prop-types';
import AppTable from '@crema/core/AppTableContainer/AppTable';
import {AiOutlineCaretDown, AiOutlineCaretUp} from 'react-icons/ai';

const columns = [
  {
    title: 'Page name',
    dataIndex: 'page',
    align: 'left',
  },
  {
    title: 'Page Views',
    dataIndex: 'pageView',
    align: 'right',
    render: (text) => (
      <>
        <AiOutlineCaretUp className='text-success' />
        <span className='ms-2'>{text}</span>
      </>
    ),
  },
  {
    title: 'Unique Visitors',
    dataIndex: 'visitors',
    align: 'right',
    render: (text) => (
      <>
        <AiOutlineCaretDown className='text-danger' />
        <span className='ms-2'>{text}</span>
      </>
    ),
  },
];

const VisitsTable = ({visitsData}) => {
  return <AppTable columns={columns} data={visitsData} />;
};

export default VisitsTable;

VisitsTable.defaultProps = {
  visitsData: [],
};

VisitsTable.propTypes = {
  visitsData: PropTypes.array,
};
