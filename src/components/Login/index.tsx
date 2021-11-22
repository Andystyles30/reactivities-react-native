import Container from 'components/common/Container';
import CustomButton from 'components/common/CustomButton';
import Input from 'components/common/Input';
import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';

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
        // error={'this field is required'}
      />
      <Input
        label="Password"
        onChangeText={text => setPassword(text)}
        value={password}
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
      />
      <CustomButton primary title="Login" loading={false} />
    </Container>
  );
};

export default Login;
