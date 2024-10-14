import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Stack from './src/navigators/Stack';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      {/*This is a container that manages the navigation tree and state. */}
      {/* it says that we have selected routes in the app and you can move in any of this container */}
      {/* act as a context provider */}
      {/* manages the navigation state of the entire application, ensuring that the navigation history is preserved */}
      <Stack />
    </NavigationContainer>
  );
};

export default App;
