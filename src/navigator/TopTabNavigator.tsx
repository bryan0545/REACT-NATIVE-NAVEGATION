import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContatsScreen from './ContatsScreen';
import AlbumsScreen from './AlbumsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores} from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{
        paddingTop: top,
      }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        pressColor: colores.prymary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colores.prymary,
        },
        style: {
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = 'T';
          switch (route.name) {
            case 'ChatScreen':
              iconName = 'chatbubbles-outline';
              break;
            case 'ContatsScreen':
              iconName = 'person-outline';
              break;
            case 'AlbumsScreen':
              iconName = 'images-outline';
              break;
            default:
              break;
          }
          return <Icon name={iconName} color={color} size={20} />;
        },
      })}>
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContatsScreen" component={ContatsScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
