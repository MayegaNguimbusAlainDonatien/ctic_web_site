import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
const BuySellForm = ({formData}) => {
  const {messages} = useIntl();
  const [form, setForm] = useState({
    value: formData.value,
    price: formData.price,
    amount: formData.amount,
  });
  return (
    <Form>
      <p className='text-end text-muted mb-1 me-1'>
        {messages['dashboard.btc']}
      </p>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Control
          type='text'
          placeholder='Volume'
          onChange={(e) => {
            setForm({...form, value: e.target.value});
          }}
          value={form.value}
        />
      </Form.Group>
      <p className='text-end text-muted mb-1 me-1'>
        {messages['dashboard.btc']}
      </p>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Control
          type='text'
          placeholder='Price'
          onChange={(e) => {
            setForm({...form, price: e.target.value});
          }}
          value={form.price}
        />
      </Form.Group>
      <p className='text-end text-muted mb-1 me-1'>
        {messages['dashboard.btc']}
      </p>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Control
          type='text'
          placeholder='Amount'
          onChange={(e) => {
            setForm({...form, amount: e.target.value});
          }}
          value={form.amount}
        />
      </Form.Group>
    </Form>
  );
};

export default BuySellForm;
BuySellForm.propTypes = {
  formData: PropTypes.object,
};
