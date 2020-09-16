import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from './src/screens/Login';
import * as React from 'react';
import { View, Text } from 'react-native';
import Components from './src/screens/ComponentsScreen'
import TrackShip from './src/screens/TrackShip';
import NewShipment from './src/screens/newShipment';
import ReceiverInfo from './src/screens/ReceiverInfo'
import ShipmentsList from './src/screens/ShipmentsList';
import ShipmentInfo from './src/screens/ShipmentInfo'
import ConfirmSuceeded from './src/screens/ConfirmSuceeded'
import ToastNotification from 'react-native-toast-notification'

import { useFonts } from '@use-expo/font';

const navigator = createStackNavigator(

  {
    Home: HomeScreen,
    Login: LoginScreen,
    Test: Components,
    Track: TrackShip,
    NewShipmentScreen:NewShipment,
    ShipmentsListScreen:ShipmentsList,
    RecieverInfoScreen:ReceiverInfo,
    ShipmentInfoScreen:ShipmentInfo,
    ConfirmSuceededScreen:ConfirmSuceeded,
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
