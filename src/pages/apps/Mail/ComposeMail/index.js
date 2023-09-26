import React, {useState} from 'react';
import moment from 'moment';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {Button, Form, InputGroup, Modal} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {Envelope} from 'react-bootstrap-icons';
import ReactQuill from 'react-quill';
import '../../../../shared/styles/vendors/ql-editor.css';
import IntlMessages from '@crema/utility/IntlMessages';
import {onComposeMail} from '../../../../redux/actions';
import AppScrollbar from '@crema/core/AppScrollbar';
import styles from './index.module.scss';

export const isValidEmail = (value) => {
  return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
};

const ComposeMail = (props) => {
  const {isComposeMail, onCloseComposeMail} = props;
  const dispatch = useDispatch();

  const [isShowBcc, onShowBcc] = useState(false);

  const [isShowCC, onShowCC] = useState(false);

  const {messages} = useIntl();
  const {pathname} = useLocation();

  const onFinish = (values) => {
    const mail = {
      id: Math.floor(Math.random()) * 1000,
      isChecked: false,
      isStarred: false,
      label: {
        id: 211,
        name: 'Crema',
        alias: 'crema',
        icon: <Envelope />,
      },
      sender: {
        name: values.displayName ? values.displayName : values.username,
        email: values.username,
        profilePic: '',
      },
      hasAttachments: false,
      isRead: true,
      folderValue: 122,
      sentOn: moment().format('llll'),
      description: values.content ? values.content : 'No Message',
      subject: values.subject !== '' ? values.subject : 'No Subject',
    };
    console.log('Success:', values);
    dispatch(onComposeMail(mail, pathname));
    onCloseComposeMail(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal
      size='lg'
      show={isComposeMail}
      onHide={() => onCloseComposeMail(false)}>
      <Modal.Header className={styles.closeBtn} closeButton>
        <Modal.Title>{<IntlMessages id='Compose Mail' />}</Modal.Title>
      </Modal.Header>
      <AppScrollbar className={styles.mailModalScrollbar}>
        <Form
          className='w-100 h-100 d-flex flex-column'
          name='basic'
          initialValues={{remember: true}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <div className={styles.mailModalContent}>
            <InputGroup className={styles.formGroup} hasValidation>
              <Form.Control
                name='mail'
                className={styles.mailInput}
                placeholder={messages['common.to']}
                aria-describedby='basic-addon2'
              />
              <InputGroup.Text
                id='basic-addon2'
                onClick={() => onShowCC(!isShowCC)}
                className={styles.btnCC}>
                <IntlMessages id='common.cc' />
              </InputGroup.Text>
              <InputGroup.Text
                id='basic-addon2'
                className={styles.btnBCC}
                onClick={() => onShowBcc(!isShowBcc)}>
                <IntlMessages id='common.bcc' />
              </InputGroup.Text>
              <Form.Control.Feedback type='invalid'>
                Please input your username!
              </Form.Control.Feedback>
            </InputGroup>

            {isShowCC ? (
              <Form.Group hasValidation className={styles.formGroup}>
                <Form.Control
                  name='cc'
                  type='email'
                  placeholder={messages['common.cc']}
                />
                <Form.Control.Feedback type='invalid'>
                  Please input your cc!
                </Form.Control.Feedback>
              </Form.Group>
            ) : null}

            {isShowBcc ? (
              <Form.Group hasValidation className={styles.formGroup}>
                <Form.Control
                  name='bcc'
                  type='email'
                  placeholder={messages['common.bcc']}
                />
                <Form.Control.Feedback type='invalid'>
                  Please input your bcc!
                </Form.Control.Feedback>
              </Form.Group>
            ) : null}
            <Form.Group hasValidation className={styles.formGroup}>
              <Form.Control
                name='subject'
                placeholder={messages['common.subject']}></Form.Control>
              <Form.Control.Feedback type='invalid'>
                Please input your Subject!
              </Form.Control.Feedback>
            </Form.Group>
            <ReactQuill
              theme='snow'
              className={styles.mailModalTextarea}
              placeholder={messages['common.writeContent']}
            />
          </div>

          <div className={styles.mailModalFooter}>
            <Button
              varient='primary'
              className={styles.mailModalBtn}
              htmlType='submit'>
              <IntlMessages id='common.send' />
            </Button>
          </div>
        </Form>
      </AppScrollbar>
    </Modal>
  );
};

export default ComposeMail;

ComposeMail.defaultProps = {
  connection: null,
};

ComposeMail.propTypes = {
  isComposeMail: PropTypes.bool.isRequired,
  onCloseComposeMail: PropTypes.func.isRequired,
};
