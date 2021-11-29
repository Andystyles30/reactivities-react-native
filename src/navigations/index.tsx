import React, {useContext} from 'react';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import {GlobalContext} from 'context/Provider';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
    authDispatch,
  } = useContext(GlobalContext);

  var ww = 'ss';
  authDispatch(ww);
  return <>{isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}</>;
};

export default AppNavContainer;
