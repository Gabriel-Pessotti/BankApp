/* eslint-disable no-unused-vars */
import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Pages/Home";
import { View } from 'react-native'
import Profil from "../Pages/Profil";

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();


export default function Tabs () {
  return (
  <Tab.Navigator
  screenOptions={{
        tabBarActiveTintColor: '#1F2C37',
        tabBarLabelStyle: { fontSize: 13 },

        tabBarStyle: {
          backgroundColor: '#FDFDFD',
          height: 80,
          borderTopColor: 'transparent',
        }
      }}
  >
    <Tab.Screen
      name="home"
      component={Home}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View>
            { focused ? (
              <Ionicons
                name="home"
                size={24}
                color={focused ? '#1F2C37' : '#f8f8f8'}
              />
            ) : (
              <Ionicons
                name="home-outline"
                size={24}
                color={focused ? '#a6a3a3' : '#a6a3a3'}
              />
            )}
          </View>
        ),
      }}
    />

    <Stack.Screen
    name="Profil"
    component={Profil}
    options={{
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <View>
          { focused ? (
            <Ionicons
              name="person"
              size={24}
              color={focused ? '#1F2C37' : '#f8f8f8'}
            />
          ) : (
            <Ionicons
              name="person-outline"
              size={24}
              color={focused ? '#a6a3a3' : '#a6a3a3'}
            />
          )}
        </View>
      ),
    }}
    />    


  </Tab.Navigator>
  )
}


