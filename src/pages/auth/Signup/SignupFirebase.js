import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import IntlMessages from '@crema/utility/IntlMessages';
import { useIntl } from 'react-intl';
import { useAuthMethod } from '@crema/utility/AuthHooks';
import { AiOutlineGoogle } from 'react-icons/ai';
import AppIconBtn from "@crema/core/AppIconBtn";
import { Button, Form, FloatingLabel, Row, Col } from 'react-bootstrap';
import styles from "./index.module.scss";
import clsx from 'clsx';
import * as formik from 'formik';
import * as yup from 'yup';

const SignupFirebase = () => {
  const { Formik } = formik;
  const { messages } = useIntl();
  const { createUserWithEmailAndPassword, signInWithPopup } = useAuthMethod();

  const schema = yup.object({
    name: yup
      .string()
      .required("veuillez insérer un nom"),
    email: yup
      .string()
      .email("email incorrecte")
      .required("veuillez insérer un email"),
    password: yup
      .string()
      .max(12, "12 caractères au plus")
      .min(6, "6 caractères au moins")
      .required("password requis"),
    confirmPassword: yup
      .string()
      .max(12, "12 caractères au plus")
      .min(6, "6 caractères au moins")
      .required("password de confirmation requis"),
    terms: yup
      .bool()
      .required()
      .oneOf([true], 'Terms must be accepted'),
  });

  return (
    <div className='flex-grow-1 d-flex flex-column'>
      <div className='flex-grow-1 d-flex flex-column mb-3'>
        <Formik
          validationSchema={schema}
          onSubmit={({ name, email, password }, { setSubmitting }) => {
            setSubmitting(true);
            createUserWithEmailAndPassword({ name, email, password });
            setSubmitting(false);
          }}

          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            terms: false
          }}
        >
          {({ isSubmitting, handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">

                <Form.Group as={Col} xs="12" controlId="validationName">
                  <FloatingLabel
                    controlId="floatingName"
                    label={messages['common.name']}
                    className={styles.floatingSize}
                  >
                    <Form.Control
                      className={styles.bordered}
                      required
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      isValid={touched.name && !errors.name}
                      isInvalid={touched.name && !!errors.name}
                      feedback={errors.name}
                      feedbackType="invalid"
                      id="validationName"
                      placeholder={messages['common.name']}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} xs="12" controlId="validationEmail">
                  <FloatingLabel
                    controlId="floatingEmail"
                    label={messages['common.email']}
                    className={styles.floatingSize}
                  >
                    <Form.Control
                      className={styles.bordered}
                      required
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                      isInvalid={touched.name && !!errors.email}
                      feedback={errors.email}
                      feedbackType="invalid"
                      id="validationEmail"
                      placeholder={messages['common.email']}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} xs="12" controlId="validationPassword">
                  <FloatingLabel
                    controlId="floatingPassword"
                    label={messages['common.password']}
                    className={styles.floatingSize}
                  >
                    <Form.Control
                      className={styles.bordered}
                      required
                      type="text"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      isValid={touched.password && !errors.password}
                      isInvalid={touched.name && !!errors.password}
                      feedback={errors.password}
                      feedbackType="invalid"
                      id="validationPassword"
                      placeholder={messages['common.password']}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} xs="12" controlId="validationConfirmPassword">
                  <FloatingLabel
                    controlId="floatingConfirmPassword"
                    label={"confirm password"}
                    className={styles.floatingSize}
                  >
                    <Form.Control
                      className={styles.bordered}
                      required
                      type="text"
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      isValid={touched.confirmPassword && !errors.confirmPassword}
                      isInvalid={touched.name && !!errors.confirmPassword}
                      feedback={errors.confirmPassword}
                      feedbackType="invalid"
                      id="validationConfirmPassword"
                      placeholder={"confirm password"}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    name="terms"
                    label="Agree to terms and conditions"
                    onChange={handleChange}
                    isInvalid={touched.name && !!errors.terms}
                    feedback={errors.terms}
                    feedbackType="invalid"
                    id="validationTerms"
                  />
                </Form.Group>

                <Button
                  variant='primary'
                  type='submit'
                  disabled={isSubmitting}
                  className={styles.signBtn}>
                  <IntlMessages id='common.signup' />
                </Button>
              </Row>
            </Form>)}
        </Formik>
      </div>

      <div className='mb-3 mb-lg-4 text-black-50'>
        <span className='m-1'>
          <IntlMessages id='You have an account?' />
        </span>
        <span className={styles.signLink}>
          <Link to='/signin'>
            <IntlMessages id='signin' />
          </Link>
        </span>
      </div>

      <div
        className={clsx(
          styles.signFooter,
          'd-flex align-items-center justify-content-between mt-auto',
        )}>
        <p className='mb-0'>
          <IntlMessages id='common.orLoginWith' />
        </p>
        <div className='d-flex align-items-center'>
          <AppIconBtn
            style={{
              p: 2,
              '& svg': { fontSize: 18 },
            }}
            onClick={() => signInWithPopup('google')}>
            <AiOutlineGoogle />
          </AppIconBtn>
        </div>
      </div>
    </div >
  );
};

export default SignupFirebase;


