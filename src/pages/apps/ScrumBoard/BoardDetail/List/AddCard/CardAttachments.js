import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import moment from 'moment';
import PropTypes from 'prop-types';
import {AiOutlineDelete} from 'react-icons/ai';
import {BiCloudDownload} from 'react-icons/bi';
import AppIconButton from '@crema/core/AppIconBtn';
import clsx from 'clsx';
import styles from './index.module.scss';

const CardAttachments = (props) => {
  const {attachments, onDeleteAttachment} = props;

  return (
    <>
      <h4 className={styles.scrumBoardAttachmentTitle}>
        <IntlMessages id='common.attachments'/>
      </h4>

      {attachments ? (
        <div
          className={clsx(styles.scrumBoardAttachment, 'd-flex flex-wrap')}>
          {attachments.map((attachment) => {
            const {file} = attachment;
            return (
              <div
                className={styles.scrumBoardAttachmentItems}
                key={attachment.id}>
                <div
                  className={clsx(
                    styles.scrumBoardAttachmentCard,
                    'w-100 overflow-hidden',
                  )}>
                  <div className='w-100 position-relative'>
                    <img
                      className={clsx(
                        styles.scrumBoardAttachmentImg,
                        'w-100',
                      )}
                      src={attachment.preview}
                      alt='attachment'
                    />

                    <div
                      className={clsx(
                        styles.scrumBoardAttachmentItemsAction,
                        'd-flex align-items-start justify-content-end position-absolute w-100 h-100',
                      )}>
                      <AppIconButton smallBtn>
                        <BiCloudDownload/>
                      </AppIconButton>
                      <AppIconButton smallBtn
                                     onClick={() => onDeleteAttachment(attachment.id)}>
                        <AiOutlineDelete/>
                      </AppIconButton>
                    </div>
                  </div>

                  <div className={styles.scrumBoardAttachmentContent}>
                        <span
                          className={clsx(
                            styles.scrumBoardAttachmentFileName,
                            'text-truncate',
                          )}>
                          {file.name}
                        </span>
                    <div
                      className={clsx(
                        styles.scrumBoardAttachmentFileTime,
                        'position-relative',
                      )}>
                          <span>
                            {
                              moment(file.lastModified)
                                .format('ll')
                                .split(',')[0]
                            }
                          </span>
                      <span>
                            <IntlMessages id='common.at'/>
                          </span>
                      <span>{moment(file.lastModified).format('LT')}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default CardAttachments;

CardAttachments.defaultProps = {
  attachments: [],
};

CardAttachments.propTypes = {
  attachments: PropTypes.array,
  onDeleteAttachment: PropTypes.func,
};
