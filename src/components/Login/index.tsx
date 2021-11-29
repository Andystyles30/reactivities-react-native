import Container from 'components/common/Container';
import CustomButton from 'components/common/CustomButton';
import Input from 'components/common/Input';
import * as screens from 'constants/routeNames';
import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {MaterialIcon} from 'components/Icon';
import styles from './styles';
import {NavigationProps} from 'types/navigationProps';

const Login = ({navigation}: NavigationProps) => {
  console.log(navigation);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <Container>
      <Image
        height={70}
        width={70}
        style={styles.logoImage}
        source={require('assets/images/logo.png')}
      />
      <View>
        {/* <Text style={styles.title}>Welcome to Reativities</Text> */}
        {/* <Text style={styles.subTitle}>Log In</Text> */}
        <View style={styles.form}>
          <Input
            label="Username"
            onChangeText={text => setUsername(text)}
            value={username}
            placeholder="Enter Username"
          />
          <Input
            label="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="Enter Password"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={() => {
                  setIsSecureEntry(prev => !prev);
                }}>
                <MaterialIcon
                  size="large"
                  color="grey"
                  name={isSecureEntry ? 'eye-off' : 'eye'}
                />
              </TouchableOpacity>
            }
            iconPosition="right"
          />
          <CustomButton primary title="Log In" loading={false} />
        </View>

        <View style={styles.createSection}>
          <CustomButton
            onPress={() => {
              navigation.navigate(screens.REGISTER);
            }}
            rose
            title="Create New Account"
            loading={false}
          />
        </View>
      </View>
    </Container>
  );
};

export default Login;
