import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
// import StackNavigator from './src/navigator/StackNavigator';
import MenuLateral from './src/navigator/MenuLateral';
// import Tabs from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <MenuLateral />
      {/* <StackNavigator /> */}
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};

export default App;
