import React from 'react';
import firebase from '@react-native-firebase/app';

import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';

import Routes from './src/Routes';
import {colors} from './src/Components/Theme/colors';

export default function App() {
  const firebaseConfig = {
    apiKey: 'AIzaSyBFhSh4aJkKOAdX-QT8NhUJ-fc3Ty1-PkU',
    projectId: '303558338488',
    appId: '1:303558338488:android:40e3616ce63e820d52114d',
    databaseURL: '',
    messagingSenderId: '',
    storageBucket: '',
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

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
