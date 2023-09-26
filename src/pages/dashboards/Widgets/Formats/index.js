import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import {Form} from 'react-bootstrap';
import styles from './index.module.scss';
import clsx from 'clsx';

const Formats = ({data}) => {
  const {messages} = useIntl();

  return (
    <AppCard heightFull title={messages['dashboard.formats']}>
      <Form
        name='radiogroup'
        defaultValue={data[0].id}
        className={clsx(
          styles.formatRadioGroup,
          'position-relative d-flex align-items-center flex-wrap',
        )}>
        {data.map((item) => {
          return (
            <Form.Check
              className={styles.formatRadio}
              type='radio'
              key={item.id}
              label={item.name}
            />
          );
        })}
      </Form>
    </AppCard>
  );
};

export default Formats;

Formats.defaultProps = {
  data: [],
};

Formats.propTypes = {
  data: PropTypes.array,
};
