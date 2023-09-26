import React from 'react';
// import moment from 'moment';
import PropTypes from 'prop-types';
import {Form} from "react-bootstrap";
import clsx from "clsx";
import styles from '../index.module.scss';

// const DatePicker = require("react-bootstrap-date-picker");

const DatePickers = (props) => {
  // const {scheduleDate, setScheduleDate} = props;

  return (
    <Form.Group className={clsx(styles.todoDetailDatepicker, 'mb-3')}>
      {/*<DatePicker*/}
      {/*  defaultValue={moment(scheduleDate, 'YYYY-MM-DD')}*/}
      {/*  onChange={(value) =>*/}
      {/*    setScheduleDate(moment(value).format('YYYY/MM/DD'))*/}
      {/*  }*/}
      {/*/>*/}
    </Form.Group>
  );
};

export default DatePickers;

DatePickers.propTypes = {
  scheduleDate: PropTypes.any,
  setScheduleDate: PropTypes.func,
};
