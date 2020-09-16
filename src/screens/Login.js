
// import React, {useState} from 'react';

// import {Slider, Text, StyleSheet, View, TextInput , Image , TouchableOpacity , Button} from 'react-native';

import LoginComp from '../../components/LoginComp';

import React from 'react';
import axios from 'axios';
import {BackAndroid,Slider, Text, StyleSheet, View, TextInput , Image , TouchableOpacity , Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ValidationComponent from 'react-native-form-validator';
export default class LoginScreen extends React.Component{
     
  state={
    user_email:"",
    user_password:"",
  }
  
   emailvalidation='';
   passvalidtation='';
   storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      console.log("Inside Store Data Errror" ,error.message)
    }
  }
  validateEmail=(user_email)=>{
              if(user_email=="")
              {           this.emailvalidation="Enter Email";
                          console.log("Email empty");
                          return false;
              }
              else
              {
                  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    if (reg.test(user_email) === false) 
                    {
                   console.log("Email is Not Correct");
                   this.emailvalidation="Email is Not Correct";
                      return false;
            
            
                    }
                    else
                    {
                      console.log("Email is  Correct");
                      return true;
                    }

              }
  }


  validatePassword=(user_password)=>{
    if(user_password=="")
    {           this.passvalidtation="Enter Password";
                 console.log("PAss is  emptty");
                return false;
    }
    else
    {
         console.log("PAss is  Correct");
         return true

    }
}

  async onLoginPressed() {
    let Emailvalidationflag=this.validateEmail(this.state.user_email);
    let passvalidationflag=this.validatePassword(this.state.user_password);
    if(Emailvalidationflag && passvalidationflag)
    {let data={
      user_email:this.state.user_email,
      user_password:this.state.user_password,
    }
    console.log("in");
    console.log("state",this.state);
    try {
      const response = await axios.post(
        'http://192.168.1.2:4700/admin/login',data
      );
      // alert(JSON.stringify(response.data.usertoken))
      if(JSON.stringify(response.data.Message).replace(/\"/g, "")==="You Logged In Successfully")
      {
          const AccessToken= JSON.stringify(response.data.usertoken).replace(/\"/g, "")
          this.storeData(AccessToken)
          
         
            
        this.props.navigation.navigate("Test")
      }
     
      
    } catch (error) {
      // handle error
      console.log("Errror" ,error.message)
      alert("Wrong Password Or E-mail");
    }
    }
    else
    {
             console.log("no thing")    
             console.log("emailvalidation",this.emailvalidation)
             console.log("passvalidtation",this.passvalidtation);
    }
  }
  render(){

    return (
        
      //  <LoginComp />
      <View style={styles.container}>
         <Image
        style={styles.tinyLogo}
        source={require('../../assets/linket_finalTinyLogo.png')}
      />
      
        <View>
          <TextInput 
         
          placeholder="Enter Email" style={styles.inputStyle} 
          onChangeText={(text) => this.setState({user_email: text})}
          autoCompleteType="email"
          />
          <Text style={styles.errormessage}>{this.emailvalidation}</Text>
            
          <TextInput
          
            secureTextEntry={true}
            placeholder="Enter Password"
            style={styles.inputStyle}
            autoCompleteType="password"
            onChangeText={(text) => this.setState({user_password: text})}
          />
          <Text style={styles.errormessage}>{this.passvalidtation}</Text>

            <TouchableOpacity style={styles.button} onPress={() =>
                              this.onLoginPressed()
                          //  this.props.navigation.navigate('Test')
                           
                           } >
                <Text style={styles.btnText}>Sign in</Text>
            </TouchableOpacity>
            {/* <Text>
            {this.getErrorMessages()}
          </Text> */}
        </View>
     
      </View>
      // <Button  title="Press Me" style={styles.button}/>
    
      );
  }//endrender
}//end class

const styles = StyleSheet.create({
  errormessage:{
    color:"red",
    marginLeft:30
    
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  button: {
    // width: 300,
    marginTop: 20,
  //   marginLeft: 110,
    backgroundColor: "#990000",
    padding: 15,
    borderRadius: 50,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  formLabel: {
      // margin: 50,
    fontSize: 20,
    color: 'white',
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#990000',
    color: '#fff',
    fontSize:18
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 40,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  tinyLogo:{
    width: 370,
   height: 200,
   top:-50,
   
 },
    logo: {
      width: 100,
      height: 100,
    },
    
});