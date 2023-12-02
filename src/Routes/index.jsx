import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './tabs';

import OnBoarding from '../Pages/OnBoarding';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Profil from '../Pages/Profil';
import Loading from '../Pages/Loading';
import SendMoney from '../Pages/SendMoney';
import Detail from '../Pages/Detail';
import Contacts from '../Pages/Contacts';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="">
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
        name="Loading"
        component={Loading}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SendMoney"
        component={SendMoney}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profil"
        component={Profil}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
