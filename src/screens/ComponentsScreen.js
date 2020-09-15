import React from 'react';
import { ImageBackground ,View  , StyleSheet , TouchableOpacity,Image,Dimensions} from 'react-native';
import axios from 'axios';
import { Block, Button, Text, theme } from "galio-framework";
const { height, width } = Dimensions.get("screen");
import lenkitTheme from "../../constants/Theme";

export default class ComponentsScreen extends React.Component{

  render(){

        return (
        <View >
        
{/* ------------------------------- new --------------------------------------------------*/}

<Image
        style={styles.newshipment}
        source={require('../../assets/newshipment.png')}
      />
      {/* <Image
        style={styles.tinyadd}
        source={require('../../assets/add.png')}
      /> */}
       <Block center>
              <Button
                style={styles.newshipmentsbutton}
                onPress={() => this.props.navigation.navigate("NewShipmentScreen")}
                textStyle={styles.btnText}
                
                
              >
               New Shipment
              </Button>
            </Block>


{/* ------------------------------------List----------------------------------------------- */}

<Image
        style={styles.shipmentlist}
        source={require('../../assets/delivery-truck.png')}
      />
       <Block center>
              <Button
                style={styles.shipmentsbutton}
                onPress={() => this.props.navigation.navigate("ShipmentsListScreen")}
                textStyle={styles.btnText}
                
                
              >
               View your Shipments
              </Button>
            </Block>
        
      </View> );
  }
};

const styles = StyleSheet.create({
  shipmentsbutton: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    backgroundColor: "#990000",
    top:80,
  },
  newshipmentsbutton: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    backgroundColor: "#990000",
    // top:-20,
    top:90,
  },
  tinyadd:{
    width: 165,
    height: 165,
    top:-68,
    left:187
  },
  newshipment:{
    width: 240,
   height: 240,
   top:96,
   left:80
  },
  shipmentlist:{
    width: 250,
   height: 250,
   top:100,
   left:70
   
 },
  btnText: {
  color: "white",
  fontSize: 20,
  justifyContent: "center",
  textAlign: "center",
  fontWeight:"bold"
      },


});

