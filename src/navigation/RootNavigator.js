import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Platform } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
// Screens:
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MyNetworkScreen from '../screens/MyNetworkScreen';
import PostScreen from '../screens/PostScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import JobsScreen from '../screens/JobsScreen';

// import {Dimensions} from 'react-native'
// const SCREEN_WIDTH = Dimensions.get('window').width

// Icons:


const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Activity') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Workouts') {
              iconName = focused ? 'ios-people' : 'ios-people';
            } else if (route.name === 'Post') {
              iconName = focused ? 'ios-add-outline' : 'ios-add-outline';
            } else if (route.name === 'Live') {
              iconName = focused ? 'notifications' : 'notifications';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-briefcase' : 'ios-briefcase';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'rgba(68, 202, 231, 0.53)',
          style: {
            backgroundColor: 'rgba(74, 93, 116, 0.24)',
            // height: (Platform.OS === 'ios') ? 48 : 50,
            boredRadius: 20,
            borderTopColor: 'transparent',
            elevation: 20,
          }
        }}
      >
        <Tab.Screen name="Activity" component={HomeScreen} />
        <Tab.Screen name="Workouts" component={MyNetworkScreen} />
        <Tab.Screen name="Live" component={PostScreen} />
        <Tab.Screen name="Profile" component={NotificationsScreen} />
        {/* <Tab.Screen name="Jobs" component={JobsScreen} /> */}
      </Tab.Navigator>

    </NavigationContainer>
  );
}
