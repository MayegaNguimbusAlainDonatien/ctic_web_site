import React, {useState} from 'react';
import AppCard from '@crema/core/AppCard';
import {useDispatch, useSelector} from 'react-redux';
import {useDropzone} from 'react-dropzone';
import AppList from '@crema/core/AppList';
import {onCreateNewPost} from '../../../../redux/actions/Wall';
import {useIntl} from 'react-intl';
import {Image, Form, InputGroup, Button} from 'react-bootstrap';
import {
  AiOutlineSend,
  AiOutlineSmile,
  AiOutlineVideoCamera,
} from 'react-icons/ai';
import styles from './index.module.scss';
import clsx from 'clsx';
import {IoImageOutline} from 'react-icons/io5';
import {BiUser} from 'react-icons/bi';

const CreatePost = () => {
  const dispatch = useDispatch();

  const {wallData} = useSelector(({wall}) => wall);
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState([]);

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*, .pdf',
    multiple: true,
    onDrop: (acceptedFiles) => {
      const files = acceptedFiles.map((file) => {
        return {
          id: Math.floor(Math.random() * 10000),
          path: file.path,
          metaData: {type: file.type, size: file.size},
          preview: URL.createObjectURL(file),
        };
      });
      onAddAttachments(files);
    },
  });

  const onAddAttachments = (files) => {
    setAttachments([...attachments, ...files]);
  };

  const handlePostSubmit = () => {
    const post = {
      message,
      attachments,
      owner: {
        name: wallData.name,
        profilePic: wallData.profilePic,
        id: wallData.id,
      },
    };

    dispatch(onCreateNewPost(post));
    setAttachments([]);
    setMessage('');
  };

  const {messages} = useIntl();

  return (
    <AppCard
      className='mb-4 position-relative'
      title={messages['wall.createPost']}>
      <div className='d-flex'>
        <Image
          className={styles.img}
          roundedCircle
          src={wallData.profilePic}
          alt={wallData.name}
        />
        <div className={styles.createPostMainContent}>
          <InputGroup>
            <Form.Control
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.createPostInput}
              placeholder="What's in your mind?"
            />
            <InputGroup.Text className={clsx(styles.inputGroupText, 'p-0')}>
              <span
                {...getRootProps()}
                className={clsx(
                  styles.createPostActionBtn,
                  'd-flex flex-column align-items-center justify-content-center',
                )}>
                <input {...getInputProps()} />
                <IoImageOutline />
              </span>
            </InputGroup.Text>
            <InputGroup.Text className={clsx(styles.inputGroupText, 'p-0')}>
              <span
                className={clsx(
                  styles.createPostActionBtn,
                  'd-flex flex-column align-items-center justify-content-center',
                )}>
                <AiOutlineVideoCamera />
              </span>
            </InputGroup.Text>
            <InputGroup.Text className={clsx(styles.inputGroupText, 'p-0')}>
              <span
                className={clsx(
                  styles.createPostActionBtn,
                  'd-flex flex-column align-items-center justify-content-center',
                )}>
                <AiOutlineSmile />
              </span>
            </InputGroup.Text>
            <InputGroup.Text className={clsx(styles.inputGroupText, 'p-0')}>
              <span
                className={clsx(
                  styles.createPostActionBtn,
                  'd-flex flex-column align-items-center justify-content-center',
                )}>
                <BiUser />
              </span>
            </InputGroup.Text>
            <InputGroup.Text className={clsx(styles.inputGroupText, 'p-0')}>
              <Button
                variant='light'
                disabled={!message.trim() && attachments.length === 0}
                onClick={handlePostSubmit}
                className={clsx(
                  styles.createPostActionBtn,
                  'd-flex flex-column align-items-center justify-content-center',
                )}>
                <AiOutlineSend />
              </Button>
            </InputGroup.Text>
          </InputGroup>
        </div>
      </div>
      {attachments ? (
        <AppList
          className='d-flex flex-wrap flex-row mb-2'
          data={attachments}
          renderItem={(item, index) => (
            <div className='mb-1' key={index}>
              <img
                className={styles.createPostImg}
                src={item.preview}
                alt='upload'
              />
            </div>
          )}
        />
      ) : null}
    </AppCard>
  );
};

export default CreatePost;
