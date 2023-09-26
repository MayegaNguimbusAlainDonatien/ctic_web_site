import React, {useState} from 'react';

import {Button, Form} from 'react-bootstrap';

const EditCustomer = () => {
  const [validated, setValidated] = useState(false);

  const onSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    console.log('Success:');
    setValidated(true);
  };

  return (
    <Form
      // className='edit-customer-form'
      name='basic'
      initialValues={{remember: true}}
      noValidate
      validated={validated}
      onSubmit={onSubmit}>
      <Form.Group controlId='validationCustom01' className='mb-2'>
        <Form.Control name='name' placeholder='Name' type='text' required />
        <Form.Control.Feedback type='invalid'>
          Please input your name!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId='validationCustom02' className='mb-2'>
        <Form.Control name='email' placeholder='Email' type='email' required />
        <Form.Control.Feedback type='invalid'>
          Please input your email!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId='validationCustom03' className='mb-2'>
        <Form.Control
          as='textarea'
          rows={2}
          name='address'
          placeholder='Address'
          required
        />
        <Form.Control.Feedback type='invalid'>
          Please input your address!
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant='primary' type='submit'>
        Save
      </Button>
    </Form>
  );
};

export default EditCustomer;
