import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../screens/Main';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
