import RegisterComponent from 'components/SignUp';
import React, {useState} from 'react';
import {NavigationProps} from 'types/navigationProps';

const Register = ({navigation}: NavigationProps) => {
  const [form, setForm] = useState({
    displayName: '',
    username: '',
    email: '',
    password: '',
  });
  const [, setErrors] = useState({});

  const onChange = ({name, value}: {name: string; value: string}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This field needs min 6 characters'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    if (!form.displayName) {
      setErrors(prev => {
        return {...prev, displayName: 'Please add a display name'};
      });
      if (!form.username) {
        setErrors(prev => {
          return {...prev, userName: 'Please add a username'};
        });
      }
      if (!form.email) {
        setErrors(prev => {
          return {...prev, email: 'Please add a email'};
        });
      }
      if (!form.password) {
        setErrors(prev => {
          return {...prev, password: 'Please add a password'};
        });
      }
    }
  };

  return (
    <RegisterComponent
      navigation={navigation}
      onSubmit={onSubmit}
      onChange={onChange}
      loading={false}
    />
  );
};

export default Register;
