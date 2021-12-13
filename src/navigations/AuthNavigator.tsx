import {createStackNavigator} from '@react-navigation/stack';
import * as screens from 'constants/routeNames';
import React from 'react';
import Login from 'screens/Login';
import Register from 'screens/Register';
import {TransitionPresets} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={screens.LOGIN}
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <AuthStack.Screen name={screens.LOGIN} component={Login} />
      <AuthStack.Screen name={screens.REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
