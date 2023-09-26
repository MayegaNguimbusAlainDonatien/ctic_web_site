import React from 'react';
import './index.module.scss';
import AuthWrapper from '../AuthWrapper';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import SignInFirebase from './SigninFirebase';

const Signin = () => {
  return (
    <AuthWrapper>
      <AppPageMetadata title='Sign In' />
      <SignInFirebase />
    </AuthWrapper>
  );
};

export default Signin;
