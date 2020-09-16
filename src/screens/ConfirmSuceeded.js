import React from 'react';
import {ImageBackgroun,dAppRegistry, SectionList,TextInput,Dimensions,View ,Text , StyleSheet , TouchableOpacity,Image} from 'react-native';
import axios from 'axios';
import lenkitTheme from "../../constants/Theme";
import { Picker } from 'react-native-picker-dropdown'
// import { Picker } from '@react-native-community/picker'
import { Input } from 'react-native-elements';
const { height, width } = Dimensions.get("screen");
import {Toast, Block, Button, theme } from "galio-framework";

import {
  Dropdown }
  from 'react-native-material-dropdown';

export default class ConfirmSuceeded extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      language: 'js',
     country: 'uk',
   
    
    }
    this.onCityChange = this.handleCityChange.bind(this)
    this.onSendingWayChange = this.handleSendingWayChange.bind(this)
  }

  handleCityChange(language) {
    this.setState({ language })
  }
  handleSendingWayChange(country) {
    this.setState({ country })
  }




  
  render(){
    return (
    
      <View style={styles.container}>
     <Text style={styles.header}>YOUR SHIPMENT</Text>
 {/* <Image
        style={styles.tinyLogo}
        source={require('../../assets/Logistic-11-128.png')}
      /> */}
  
          
    {/* ---------------------Submit--------------------------------------------------- */}

    <TouchableOpacity style={styles.confirmbutton} onPress={() => 
                   this.props.navigation.navigate("NewShipmentScreen")
                    }
                           
                            >
                <Text style={styles.confirmbtnText}>CONFIRM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelbutton} 
                          onPress={() => 
                            
                            this.props.navigation.navigate("Track")
                         }
                           
                            >
                <Text style={styles.confirmbtnText}>CANCEL</Text>
            </TouchableOpacity>
          


   </View>
  
    );
  }
};

const styles = StyleSheet.create({
    cancelbutton: {
        // width: 300,
        marginTop: 20,
      //   marginLeft: 110,
        backgroundColor: "#990000",
        padding: 15,
        borderRadius: 10,
        top:10,
        marginLeft:200,
      },
      confirmbutton: {
        // width: 300,
        marginTop: 20,
      //   marginLeft: 110,
        backgroundColor: "#990000",
        padding: 15,
        borderRadius: 10,
        top:85,
        marginLeft:-200,
      },
      confirmbtnText: {
        color: "white",
        fontSize: 20,
        justifyContent: "center",
        textAlign: "center",
      },

    backIcon:{
    top:-79,
    height:height-theme.SIZES.BASE*51,
    width: width - theme.SIZES.BASE * 18,
    left:-15,
  },
 
  nextIcon:{
    top:5,
    // height:height-theme.SIZES.BASE*52,
    width: width - theme.SIZES.BASE * 21,
    height:height*0.1,
    
  },
  tinyLogo:{
  // width: 220,
  // height: 220,
   top:-50,
   height:height-theme.SIZES.BASE*43,
   width: width - theme.SIZES.BASE * 12,
 },
  header:{ 
    color:"#990000",
    fontSize:30,
    textAlign: "center",
    fontWeight:"bold",
    marginBottom:550,

  },
  
  inputStyle: {
    // width: 400,
    // height: 40,
    height:height-theme.SIZES.BASE*53,
   width: width - theme.SIZES.BASE * 2,
    paddingHorizontal: 20,
    paddingVertical: 1,
    borderRadius: 10,
    backgroundColor: '#990000',
    color: '#fff',
    fontSize:18,
    margin:10
  
  },
  inputStyle2 :{
   
    color: '#990000',
    
  
  
  },
  Sendwaylabel:{
  
    color:"#A2AAAE",
    fontSize:17,
    left:14,
  }, 
  
  PickerSender:{
    // top:5,
    // color: '#990000',
    
      alignSelf: 'stretch',
      backgroundColor: '#990000',
      paddingHorizontal: 20,
      paddingVertical: 1,
      margin: 10,
      borderRadius: 10,
      
    },
    pickerText: {
      color: 'white',
     
    },
   
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor:"#fff",
    justifyContent: 'center',
    alignItems: 'center',
   },
   InputsContainer:{
    flex: 1,
    paddingTop: 22,
    backgroundColor:"#fff",
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
   },
   sectionHeader: {
     paddingTop: 2,
     paddingLeft: 10,
     paddingRight: 10,
     paddingBottom: 2,
     fontSize: 14,
     fontWeight: 'bold',
     backgroundColor: 'rgba(247,247,247,1.0)',
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
});

