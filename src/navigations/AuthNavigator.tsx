import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as screens from 'constants/routeNames';
import React from 'react';
import Login from 'screens/Login';
import Register from 'screens/Register';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={screens.LOGIN}
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={screens.LOGIN} component={Login} />
      <AuthStack.Screen name={screens.REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
