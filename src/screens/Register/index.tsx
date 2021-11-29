import RegisterComponent from 'components/SignUp';
import React from 'react';
import {NavigationProps} from 'types/navigationProps';

const Register = ({navigation}: NavigationProps) => {
  return <RegisterComponent navigation={navigation} />;
};

export default Register;
