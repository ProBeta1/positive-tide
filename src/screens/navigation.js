import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Hut from './Hut/Hut';
import Settings from './Settings/Settings';
import Time from './Timeline/Timeline';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Hut"
      activeColor="#009DE0"
      inactiveColor="white"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: '#153745' }}
    >
      <Tab.Screen
        name="Hut"
        component={Hut}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Timeline"
        component={Time}
        options={{
          tabBarLabel: 'Timeline',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="playlist-check" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Nav() {
    return (
        <MyTabs />
    );
  }