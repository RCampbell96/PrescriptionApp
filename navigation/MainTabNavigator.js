import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MedicationsScreen from '../screens/MedicationsScreen';
import ListsScreen from '../screens/ListsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? 'ios-home' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const MedicationsStack = createStackNavigator(
  {
    Medications: MedicationsScreen,
  },
  config
);

MedicationsStack.navigationOptions = {
  tabBarLabel: 'Medication Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-medical' : 'md-medical'} />
  ),
};

MedicationsStack.path = '';

const ListsStack = createStackNavigator(
  {
    Lists: ListsScreen,
  },
  config
);

ListsStack.navigationOptions = {
  tabBarLabel: 'Medication List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-list-box-outline' : 'md-list-box'} />
  ),
};

ListsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  MedicationsStack,
  ListsStack,
});

tabNavigator.path = '';

export default tabNavigator;
