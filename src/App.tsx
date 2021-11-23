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

// import React from 'react';
// import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
// import {Text} from './components/Text';
// // Import our icon component
// import {MaterialIcon} from './components/Icon';

// const App = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView style={styles.container}>
//         <Text>This font-weight is 'regular' </Text>
//         <Text style={styles.boldFont}>This font-weight is 'bold' </Text>
//         {/* Add icons here */}
//         <MaterialIcon size="large" color="purple" name="eye-outline" />
//         <MaterialIcon size="extraLarge" color="black" name="github" />
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   boldFont: {
//     fontFamily: 'Nunito-Bold',
//   },
// });

// export default App;
