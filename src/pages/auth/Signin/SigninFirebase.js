import React from 'react';
import { Link, useHistory, his } from 'react-router-dom';
import { useIntl } from 'react-intl';
import IntlMessages from '@crema/utility/IntlMessages';
import { useAuthMethod } from '@crema/utility/AuthHooks';
import { AiOutlineGoogle } from 'react-icons/ai';
import styles from './index.module.scss';
import clsx from 'clsx';
import AppIconBtn from '@crema/core/AppIconBtn';
import { Button, Col, Form, Row, FloatingLabel } from 'react-bootstrap';
import * as formik from 'formik';
import * as yup from 'yup';

const SigninFirebase = () => {
  const { Formik } = formik;
  const { messages } = useIntl();

  const schema = yup.object({
    email: yup
      .string()
      .email("email incorrecte")
      .required("veuillez insérer un email"),
    password: yup
      .string()
      .max(12, "12 caractères au plus")
      .min(6, "6 caractères au moins")
      .required("password requis"),
    terms: yup
      .bool()
      .required()
      .oneOf([true], 'Terms must be accepted'),
  });

  const history = useHistory();

  const onGoToForgetPassword = () => {
    history.push('/forget-password', { tab: 'firebase' });
  };

  const { signInWithEmailAndPassword, signInWithPopup } = useAuthMethod();

  return (
    <div className='flex-grow-1 d-flex flex-column'>
      <div className='flex-grow-1 d-flex flex-column mb-3'>
        <Formik
          validationSchema={schema}
          onSubmit={({ email, password }, { setSubmitting }) => {
            setSubmitting(true);
            signInWithEmailAndPassword({ email, password });
            setSubmitting(false);
          }}

          initialValues={{
            email: '',
            password: '',
            terms: false
          }}
        >
          {({ isSubmitting, handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">

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

              </Row>

              <Form.Group className="mb-3">
                <Form.Check
                  required
                  name="terms"
                  label="Agree to terms and conditions"
                  onChange={handleChange}
                  isInvalid={!!errors.terms}
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
                <IntlMessages id='common.login' />
              </Button>
            </Form>
          )
          }
        </Formik >
      </div>

      <div className='mb-3 mb-lg-4 text-black-50'>
        <span className='m-1'>
          <IntlMessages id='common.dontHaveAccount' />
        </span>
        <span className={styles.signLink}>
          <Link to='/signup'>
            <IntlMessages id='common.signup' />
          </Link>
        </span>
      </div>
      <div className='mb-3 text-black-50'>
        <Form.Text
          className={clsx(
            styles.forgetLink,
            'd-block text-end text-primary',
          )}
          onClick={onGoToForgetPassword}>
          <IntlMessages id='common.forgetPassword' />
        </Form.Text>
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
    </div>
  );
}

export default SigninFirebase;