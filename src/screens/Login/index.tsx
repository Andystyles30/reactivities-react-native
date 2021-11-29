import LoginComponent from 'components/Login';
import React from 'react';
import {NavigationProps} from 'types/navigationProps';

const Login = ({navigation}: NavigationProps) => {
  return <LoginComponent navigation={navigation} />;
};

export default Login;
