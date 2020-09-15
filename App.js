import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from './src/screens/Login';
import * as React from 'react';
import { View, Text } from 'react-native';
import Components from './src/screens/ComponentsScreen'
import TrackShip from './src/screens/TrackShip';
import NewShipment from './src/screens/newShipment';
import ShipmentsList from './src/screens/ShipmentsList';
import { useFonts } from '@use-expo/font';

const navigator = createStackNavigator(

  {
    Home: HomeScreen,
    Login: LoginScreen,
    Test: Components,
    Track: TrackShip,
    NewShipmentScreen:NewShipment,
    ShipmentsListScreen:ShipmentsList
  },
  {
    initialRouteName: "Home",
    headerMode: 'none',  
    defaultNavigationOptions: {
      title: "Lenkit" 
    }
  },

  {
    headerShown: false
  }

);


export default createAppContainer(navigator);
