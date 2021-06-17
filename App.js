import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
// Screens:
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import MyNetworkScreen from './src/screens/MyNetworkScreen';
import PostScreen from './src/screens/PostScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import JobsScreen from './src/screens/JobsScreen';

// Icons:


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'My Network') {
              iconName = focused ? 'ios-people' : 'ios-people';
            } else if (route.name === 'Post') {
              iconName = focused ? 'ios-add-outline' : 'ios-add-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications';
            } else if (route.name === 'Jobs') {
              iconName = focused ? 'ios-briefcase' : 'ios-briefcase';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Network" component={MyNetworkScreen} />
        <Tab.Screen name="Post" component={PostScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Jobs" component={JobsScreen} />
      </Tab.Navigator>

    </NavigationContainer>
  );
}
