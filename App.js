import React from 'react';
import {StatusBar} from 'react-native'
import RootNavigator from './src/navigation/RootNavigator'

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <RootNavigator />
    </>
  );
};

export default App