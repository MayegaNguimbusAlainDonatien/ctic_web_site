import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import {Form, Image} from "react-bootstrap";
import styles from '../index.module.scss';


const ChangeStaff = ({handleStaffChange, selectedStaff}) => {
  const staffList = useSelector(({todoApp}) => todoApp.staffList);

  const {messages} = useIntl();
  return (
      <Form.Select
        value={selectedStaff?.id}
        placeholder={messages['common.staff']}
        onSelect={handleStaffChange}
        style={{minWidth: 150}}>
        {staffList.map((staff) => {
          return (
            <option value={staff.id.toString()} key={staff.id}>
              <div className='d-flex align-items-center'>
                {staff.image ? (
                  <Image className={styles.todoChStaffAvatar} src={staff.image} roundedCircle />
                ) : (
                  <span className={styles.todoChStaffAvatar}>
                    {staff.name.toUpperCase()}
                  </span>
                )}
                <span>{staff.name}</span>
              </div>
            </option>
          );
        })}
      </Form.Select>
  );
};

export default ChangeStaff;

ChangeStaff.defaultProps = {
  inputLabel: null,
  labelWidth: 0,
};

ChangeStaff.propTypes = {
  handleStaffChange: PropTypes.func,
  selectedStaff: PropTypes.object,
};
