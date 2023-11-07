import React, {useEffect} from 'react';

import {StatusBar} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';

import Routes from './src/Routes';
import {colors} from './src/Components/Theme/colors';

export default function App() {
  return (
    <ThemeProvider theme={colors}>
      <NavigationContainer>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent={true}
        />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
