import React, {useState} from 'react';
import moment from 'moment';
import IntlMessages from '@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {Button, Form, InputGroup} from 'react-bootstrap';
import {useIntl} from 'react-intl';
import ReactQuill from 'react-quill';
import '../../../../../shared/styles/vendors/ql-editor.css';
import {generateUniqueID} from '@crema/utility/Utils';
import {senders} from '@crema/services/db/apps/mail/mailList';
import AppIconBtn from '@crema/core/AppIconBtn';
import {AiOutlineDelete} from 'react-icons/ai';
import styles from '../index.module.scss';

const ReplyMail = (props) => {
  const [isShowCC, onShowCC] = useState(false);
  const [isShowBcc, onShowBcc] = useState(false);

  const {messages} = useIntl();
  const {message, isForward, index, onSubmitMail, onDeleteDraft} = props;

  const onFinish = (values) => {
    onSubmitMail(
      {
        messageId: generateUniqueID(),
        sender: getSender(),
        description: values.description,
        to: [message.sender],
        cc: values.cc,
        bcc: values.bcc,
        isStarred: false,
        sentOn: moment().format('lll'),
      },
      index,
    );
  };

  const getSender = () => {
    if (message.sender.id === senders[0].id) {
      return message.to[0];
    } else {
      return message.sender;
    }
  };
  return (
    <Form
      className={styles.mailDetailForm}
      name='basic'
      initialValues={{
        username: isForward ? '' : getSender().email,
        ...message,
        description: '',
      }}
      onFinish={onFinish}>
      <InputGroup className={styles.formGroup} hasValidation>
        <Form.Control
          name='mail'
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
          className={styles.btnCC}
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

      <ReactQuill
        theme='snow'
        className={styles.mailDetailTextarea}
        placeholder={messages['common.writeContent']}
      />

      <div className='d-flex align-items-center mt-3'>
        <Button
          variant='outline-primary'
          htmlType='submit'
          className={styles.mailDetailBtn}>
          <IntlMessages id='common.send' />
        </Button>
        <div className='ms-auto'>
          <AppIconBtn
            title={<IntlMessages id='common.trash' />}
            onClick={onDeleteDraft}
          >
            <AiOutlineDelete />
          </AppIconBtn>
        </div>
      </div>
    </Form>
  );
};

export default ReplyMail;

ReplyMail.propTypes = {
  message: PropTypes.object.isRequired,
  onSubmitMail: PropTypes.func,
  onDeleteDraft: PropTypes.func,
  isForward: PropTypes.bool,
  index: PropTypes.number,
};
