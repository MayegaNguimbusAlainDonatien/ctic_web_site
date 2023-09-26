import React from 'react';
import './index.style.scss';
import AuthWrapper from '../AuthWrapper';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import SignupFirebase from './SignupFirebase';

const Signup = () => {
  return (
    <AuthWrapper>
      <AppPageMetadata title='Sign Up' />
      <SignupFirebase />
    </AuthWrapper>
  );
};

export default Signup;
