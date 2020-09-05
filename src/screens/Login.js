
import React, {useState} from 'react';

import {Slider, Text, StyleSheet, View, TextInput , Image , TouchableOpacity , Button} from 'react-native';

import LoginComp from '../../components/LoginComp';

const LoginScreen = ()=>{
    const [value, setValue] = useState(0);
    return (
        
       <LoginComp />
      // <Button  title="Press Me" style={styles.button}/>
    
      );
};

const styles = StyleSheet.create({
      // osama: 
      button: {
        // width: 300,
        marginLeft: 10,
      //   marginLeft: 110,
      
      }
  
  });
  
export default LoginScreen;