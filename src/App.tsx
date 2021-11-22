import React from 'react';
import GlobalProvider from 'context/Provider';
import AppNavContainer from './navigations';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};

export default App;
