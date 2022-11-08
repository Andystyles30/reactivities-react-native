import React from 'react';

import {Image, View} from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import * as screens from 'constants/routeNames';
// import Message from '../common/Message';
import styles from './styles';
import {NavigationProps} from 'types/navigationProps';

type Props = {
  onSubmit: () => void;
  onChange: ({name, value}: any) => void;
  // form: any;
  loading: boolean;
  // error?: any;
  // errors?: any;
} & NavigationProps;

const RegisterComponent = ({
  navigation,
  onSubmit,
  onChange,
  // form,
  loading,
}: // error,
// errors,
Props) => {
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <View>
        <View style={styles.form}>
          {/* {error?.error && (
            <Message retry danger retryFn={onSubmit} message={error?.error} />
          )} */}
          <Input
            label="Display Name"
            iconPosition="right"
            placeholder="Enter Display Name"
            // error={errors.userName || error?.username?.[0]}
            onChangeText={value => {
              onChange({name: 'displayName', value});
            }}
          />

          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            onChangeText={value => {
              onChange({name: 'username', value});
            }}
            // error={errors.firstName || error?.first_name?.[0]}
          />

          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            // error={errors.email || error?.email?.[0]}
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureEntry={true}
            iconPosition="right"
            // error={errors.password || error?.password?.[0]}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />

          <CustomButton
            loading={loading}
            onPress={onSubmit}
            disabled={loading}
            primary
            title="Create Account"
          />

          <View style={styles.createSection}>
            <CustomButton
              onPress={() => {
                navigation.navigate(screens.LOGIN);
              }}
              rose
              title="Back to Login"
              loading={false}
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
