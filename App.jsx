/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';

import Routes from './src/Routes';
import {colors} from './src/Components/Theme/colors';
import {View} from './src/Pages/OnBoarding/styled';
import {Text} from './src/Components/Top/styled';

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

  // Define um estado inicializando enquanto o Firebase conecta
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(true);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // cancela a inscrição ao desmontar
  }, []);

  const onAuthStateChanged = user => {
    // setUser(user);
    if (initializing) setInitializing(false);
  };

  if (initializing) return null;

  return (
    <ThemeProvider theme={colors}>
      <NavigationContainer>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent={true}
        />
        {user ? (
          <Routes />
        ) : (
          <View>
            <Text>Login</Text>
          </View>
        )}
      </NavigationContainer>
    </ThemeProvider>
  );
}
