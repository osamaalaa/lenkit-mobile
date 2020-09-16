import React from 'react';
import {ImageBackgroun,dAppRegistry, SectionList,TextInput,Dimensions,View ,Text , StyleSheet , TouchableOpacity,Image} from 'react-native';
import axios from 'axios';
import lenkitTheme from "../../constants/Theme";
import { Picker } from 'react-native-picker-dropdown'
// import { Picker } from '@react-native-community/picker'
import { Input } from 'react-native-elements';
const { height, width } = Dimensions.get("screen");
import { Block, Button, theme } from "galio-framework";

import {
  Dropdown }
  from 'react-native-material-dropdown';

export default class NewShipment extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      language: 'js',
     country: 'uk' 
    
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
      <>
      <View style={styles.container}>
 <Text style={styles.header}>Sender Information</Text>
 <Image
        style={styles.tinyLogo}
        source={require('../../assets/Logistic-25-128.png')}
      />
  <View style={styles.InputsContainer}>
     <Text style={styles.Sendwaylabel}>Choose Your Sending Way</Text>
                  <Picker style={styles.PickerSender}
           selectedValue={this.state.country}
           onValueChange={this.onSendingWayChange}
          mode="dialog"
           prompt="Choose Your Sending Way"
          textStyle={styles.pickerText}
      

        >
          
          <Picker.Item label="Drop Off" value="drop off" />
          <Picker.Item label="Pick Up" value="pick up" />
        </Picker>
        <Text style={styles.errormessage}>{this.emailvalidation}</Text>
      <Text style={styles.Sendwaylabel}>Choose Your City </Text>
         <Picker style={styles.PickerSender}
          selectedValue={this.state.language}
           onValueChange={this.onCityChange}
          mode="dialog"
          prompt="Choose Your City"
          textStyle={styles.pickerText}
          promptStyle={styles.pickerprompt}
        >
          
          <Picker.Item label="Alexandria" value="Alexandria" />
          <Picker.Item label="Cairo" value="Cairo" />
        </Picker>
        <Text style={styles.errormessage}>{this.emailvalidation}</Text>
       
      
      <TextInput 
         
         placeholder="Please Enter Address of the Sender"
         placeholderTextColor = "white"
         underlineColorAndroid='transparent'
          style={styles.inputStyle} 
         onChangeText={(text) => this.setState({user_email: text})}
        
         />

         {/* next */}
      
</View>

      </View>
         <View
         style={{
           flexDirection: "row",
           justifyContent: "flex-end",
           backgroundColor:"white",
          
         }}
       ><TouchableOpacity  onPress={() => 
                   
        this.props.navigation.navigate("RecieverInfoScreen")
      
      } >

    
     <Image
           style={styles.nextIcon}
           source={require('../../assets/next2.png')}
         />
           

   </TouchableOpacity> 
         
   </View>
   </>
    );
  }
};

const styles = StyleSheet.create({
  nextIcon:{
    top:-27,
    height:height-theme.SIZES.BASE*52,
    width: width - theme.SIZES.BASE * 21,
    
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
    marginBottom:150,

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

