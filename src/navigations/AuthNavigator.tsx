import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LOGIN, REGISTER} from 'constants/routeNames';
import React from 'react';
import {Text, View} from 'react-native';

const Login = () => {
  return (
    <View>
      <Text>Hi from Login</Text>
    </View>
  );
};

const SignUp = () => {
  return (
    <View>
      <Text>Hi from SignUp</Text>
    </View>
  );
};

const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
