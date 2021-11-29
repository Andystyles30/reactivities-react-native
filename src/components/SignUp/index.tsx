import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
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
  form: any;
  loading: boolean;
  error?: any;
  errors?: any;
} & NavigationProps;

const RegisterComponent = ({
  navigation,
  onSubmit,
  onChange,
  // form,
  loading,
  error,
  errors,
}: Props) => {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <View>
        {/* <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text> */}

        <View style={styles.form}>
          {/* {error?.error && (
            <Message retry danger retryFn={onSubmit} message={error?.error} />
          )} */}
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            // error={errors.userName || error?.username?.[0]}
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
          />

          <Input
            label="First name"
            iconPosition="right"
            placeholder="Enter First name"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            // error={errors.firstName || error?.first_name?.[0]}
          />
          <Input
            label="Last Name"
            iconPosition="right"
            placeholder="Enter Last name"
            // error={errors.lastName || error?.last_name?.[0]}
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
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
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry(prev => !prev);
                }}>
                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
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