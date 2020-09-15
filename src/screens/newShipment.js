import React from 'react';
import {ImageBackgroun,dAppRegistry, SectionList,TextInput,View ,Text , StyleSheet , TouchableOpacity,Image,Dimensions} from 'react-native';
import axios from 'axios';
const { height, width } = Dimensions.get("screen");
import lenkitTheme from "../../constants/Theme";
import { Picker } from 'react-native-picker-dropdown'
import { Input } from 'react-native-elements';

import {
  Dropdown }
  from 'react-native-material-dropdown';

export default class NewShipment extends React.Component{
  constructor(props){
    super(props);
    this.state = { language: 'js'  }
    this.onValueChange = this.handleValueChange.bind(this)
  }

  handleValueChange(language) {
    this.setState({ language })
  }




  
  render(){
    return (
      <View style={styles.container}>
     <Text style={styles.Sendwaylabel}>Sending Way</Text>
         <Picker style={styles.PickerSender}
          selectedValue={this.state.language}
          onValueChange={this.onValueChange}
          mode="dialog"
          textStyle={styles.pickerText}
        >
          
          <Picker.Item label="Drop Off" value="drop off" />
          <Picker.Item label="Pick Up" value="pick up" />
        </Picker>
        <Text style={styles.errormessage}>{this.emailvalidation}</Text>

     

      <Text style={styles.Sendwaylabel}>Choose Youur City </Text>
         <Picker style={styles.PickerSender}
          selectedValue={this.state.language}
          onValueChange={this.onValueChange}
          mode="dialog"
          textStyle={styles.pickerText}
        >
          
          <Picker.Item label="Alexandria" value="Alexandria" />
          <Picker.Item label="Cairo" value="Cairo" />
        </Picker>
        <Text style={styles.errormessage}>{this.emailvalidation}</Text>
        <Input
        style={styles.inputStyle2}
        placeholder='Please Enter Address of the Sender '
        onChangeText={value => this.setState({ comment: value })}
      />
      <Text style={styles.errormessage}>{this.emailvalidation}</Text>
      <TextInput 
         
         placeholder="Please EntAddress of the Sender"
          style={styles.inputStyle} 
         onChangeText={(text) => this.setState({user_email: text})}
         autoCompleteType="email"
         />
{/* <Input
  placeholder='INPUT WITH ERROR MESSAGE'
  errorStyle={{ color: 'red' }}
  errorMessage='ENTER A VALID ERROR HERE'
/> */}

{/* <Input placeholder="Password" secureTextEntry={true} /> */}
     
      </View>
    );
  }
};

const styles = StyleSheet.create({
  inputStyle: {
    marginTop: 20,
    width: 400,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 0,
    backgroundColor: '#fff',
    color: '#990000',
    fontSize:18,
   borderColor:"#0C0B0B",
   borderWidth:1,
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
    top:5,
    color: '#990000',
  },
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor:"#fff"
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

