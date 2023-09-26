import React from 'react';
import {useDropzone} from 'react-dropzone';
import PropTypes from 'prop-types';
import {IoMdAttach} from 'react-icons/io';
import {AiOutlineDelete} from 'react-icons/ai';
import AppIconButton from '@crema/core/AppIconBtn';
import clsx from 'clsx';
import styles from './index.module.scss';

const CardHeader = (props) => {
  const {onClickDeleteIcon, board, list, onAddAttachments} = props;
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      const files = acceptedFiles.map((file) => {
        return {
          id: Math.floor(Math.random() * 10000),
          file,
          preview: URL.createObjectURL(file),
        };
      });
      onAddAttachments(files);
    },
  });

  return (
    <div
      className={clsx(
        styles.scrumBoardCardHeader,
        'd-flex align-items-center justify-content-between w-100',
      )}>
      <h3 className='text-truncate'>
        {board.name} &gt; {list.name}
      </h3>
      <div className='d-flex align-items-center'>
        <div className='mx-1'>
          <AppIconButton smallBtn>
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <IoMdAttach/>
            </div>
          </AppIconButton>
        </div>

        <div className='mx-1'>
          <AppIconButton smallBtn onClick={onClickDeleteIcon}>
            <AiOutlineDelete/>
          </AppIconButton>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;

CardHeader.propTypes = {
  onClickDeleteIcon: PropTypes.func,
  onAddAttachments: PropTypes.func,
  list: PropTypes.object,
  board: PropTypes.object,
};
