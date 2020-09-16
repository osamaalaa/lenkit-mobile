import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from './src/screens/Login';
import * as React from 'react';
import { View, Text } from 'react-native';
import Components from './src/screens/ComponentsScreen'
import TrackShip from './src/screens/TrackShip';
import NewShipment from './src/screens/newShipment';
<<<<<<< HEAD
import ReceiverInfo from './src/screens/ReceiverInfo'
import ShipmentsList from './src/screens/ShipmentsList';
import ShipmentInfo from './src/screens/ShipmentInfo'
import ConfirmSuceeded from './src/screens/ConfirmSuceeded'
import ToastNotification from 'react-native-toast-notification'

=======
import ShipmentsList from './src/screens/ShipmentsList';
>>>>>>> dc6e8872e4f0242520acf03fa11f0371b0f0700d
import { useFonts } from '@use-expo/font';

const navigator = createStackNavigator(

  {
    Home: HomeScreen,
    Login: LoginScreen,
    Test: Components,
    Track: TrackShip,
    NewShipmentScreen:NewShipment,
<<<<<<< HEAD
    ShipmentsListScreen:ShipmentsList,
    RecieverInfoScreen:ReceiverInfo,
    ShipmentInfoScreen:ShipmentInfo,
    ConfirmSuceededScreen:ConfirmSuceeded,
=======
    ShipmentsListScreen:ShipmentsList
>>>>>>> dc6e8872e4f0242520acf03fa11f0371b0f0700d
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
