/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab3Screen';
import {colores, styles} from '../theme/appTheme';
import StackNavigator from './StackNavigator';
import {Text, Platform} from 'react-native';
import TopTabNavigator from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabsAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <BottomTabsAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.prymary,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = 'T';
          switch (route.name) {
            case 'TopTabNavigator':
              iconName = 'apps-outline';
              break;
            case 'Tab1Screen':
              iconName = 'shapes-outline';
              break;
            case 'Stack':
              iconName = 'people-outline';
              break;
            default:
              break;
          }
          return <Icon name={iconName} color="white" size={20} />;
        },
      })}>
      <BottomTabsAndroid.Screen
        name="TopTabNavigator"
        options={{title: 'Tab1'}}
        component={TopTabNavigator}
      />
      <BottomTabsAndroid.Screen
        name="Tab1Screen"
        options={{title: 'Tab2'}}
        component={Tab1Screen}
      />
      <BottomTabsAndroid.Screen
        name="Stack"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabsAndroid.Navigator>
  );
}

const BottomTabsIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabsIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: colores.prymary,
        style: {
          borderTopColor: colores.prymary,
          elevation: 0,
          borderTopWidth: 0,
        },
        labelStyle: {
          fontSize: 15,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = 'T';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'Stack':
              iconName = 'STK';
              break;
            default:
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <BottomTabsIOS.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={TopTabNavigator}
      />
      <BottomTabsIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={Tab2Screen}
      />
      <BottomTabsIOS.Screen
        name="Stack"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottomTabsIOS.Navigator>
  );
};

export default Tabs;
