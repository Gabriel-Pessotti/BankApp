import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './tabs';

import OnBoarding from '../Pages/OnBoarding';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Enter from '../Pages/Enter';
import Splash from '../Pages/Splash';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Enter"
        component={Enter}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}
