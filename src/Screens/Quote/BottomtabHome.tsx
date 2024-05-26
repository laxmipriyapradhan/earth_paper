import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabInteface, tabConfig, tabLabels} from './config';

import innerStyles from './styles';

import SVG from '../../assets/SVG';

// import {MainRoutes} from '../Routes/Routes';
import Home from '../Home/Home';
import Quotes from '../Quotes/Quotes';
import Proposal from '../Proposal/Proposal';
import Settings from '../Settings/Settings';
// import {AppFonts} from '../Utils';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={tabConfig}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: (props: tabLabels) => (
            <Text style={innerStyles(props).tabText}>Home</Text>
          ),
          tabBarIcon: (props: TabInteface) => (
            <View style={innerStyles(props).iconContainer}>
              {props.focused ? <SVG.HomeFilled /> : <SVG.HomeUnfilled />}
            </View>
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Quotes"
        options={{
          tabBarLabel: (props: tabLabels) => (
            <Text style={innerStyles(props).tabText}>Quotes</Text>
          ),
          tabBarIcon: (props: TabInteface) => (
            <View style={innerStyles(props).iconContainer}>
              {props.focused ? <SVG.QuoteFilled /> : <SVG.QuoteUnfilled />}
            </View>
          ),
        }}
        component={Quotes}
      />
      <Tab.Screen
        name="Proposal"
        options={{
          tabBarLabel: (props: tabLabels) => (
            <Text style={innerStyles(props).tabText}>Proposal</Text>
          ),
          tabBarIcon: (props: TabInteface) => (
            <View style={innerStyles(props).iconContainer}>
              {props.focused ? (
                <SVG.ProposalFilled />
              ) : (
                <SVG.ProposalsUnfilled />
              )}
            </View>
          ),
        }}
        component={Proposal}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarLabel: (props: tabLabels) => (
            <Text style={innerStyles(props).tabText}>Settings</Text>
          ),
          tabBarIcon: (props: TabInteface) => (
            <View style={innerStyles(props).iconContainer}>
              {props.focused ? (
                <SVG.SettingsFilled />
              ) : (
                <SVG.SettingsUnfilled />
              )}
            </View>
          ),
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
