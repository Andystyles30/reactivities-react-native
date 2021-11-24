import Container from 'components/common/Container';
import CustomButton from 'components/common/CustomButton';
import Input from 'components/common/Input';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {MaterialIcon} from 'components/Icon';
import {StyleSheet} from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <Container>
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
      <CustomButton primary title="Login" loading={false} />
    </Container>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    paddingRight: 3,
  },
});

export default Login;
