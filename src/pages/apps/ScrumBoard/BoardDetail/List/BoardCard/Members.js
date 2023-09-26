import React from 'react';
import PropTypes from 'prop-types';
import {OverlayTrigger, Tooltip, Image} from 'react-bootstrap';
import styles from './index.module.scss';

const Members = (props) => {
  const {members} = props;

  return (
    <div className='d-flex align-items-center'>
      {members.map((member) => {
        return (
          <OverlayTrigger
            overlay={<Tooltip id='button-tooltip-2'>{member.name}</Tooltip>}>
            {member.image ? (
              <Image
                roundedCircle
                className={styles.scrumBoardMemberAvatar}
                src={member.image}
                alt='created'
              />
            ) : (
              <div className={styles.scrumBoardMemberAvatar}>
                {member.name[0].toUpperCase()}
              </div>
            )}
          </OverlayTrigger>
        );
      })}
    </div>
  );
};

export default Members;

Members.propTypes = {
  members: PropTypes.array.isRequired,
};
