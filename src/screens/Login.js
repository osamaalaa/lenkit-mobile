
// import React, {useState} from 'react';

// import {Slider, Text, StyleSheet, View, TextInput , Image , TouchableOpacity , Button} from 'react-native';

import LoginComp from '../../components/LoginComp';

import React, {useState} from 'react';

import {Slider, Text, StyleSheet, View, TextInput , Image , TouchableOpacity , Button} from 'react-native';
const LoginScreen = ({navigation})=>{
    const [value, setValue] = useState(0);
    return (
        
      //  <LoginComp />
      <View style={styles.container}>
        <Image
              style={styles.tinyLogo}
            source={require('../../assets/lenkit-logo.jpeg')}
         />
        <Text style={styles.formLabel}> Login </Text>
        <View>
          <TextInput placeholder="Enter Email" style={styles.inputStyle} />
          <TextInput
            secureTextEntry={true}
            placeholder="Enter Password"
            style={styles.inputStyle}
          />

            <TouchableOpacity style={styles.button} onPress={() =>
                           navigation.navigate('Test')} >
                <Text style={styles.btnText}>Sign in</Text>
            </TouchableOpacity>
            
        </View>
     
      </View>
      // <Button  title="Press Me" style={styles.button}/>
    
      );
};


const styles = StyleSheet.create({
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
    backgroundColor: "#D84C30",
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
    color: 'black',
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#D84C30',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  tinyLogo: {
      width: 100,
      height: 100,
      borderRadius: 50
    },
    logo: {
      width: 100,
      height: 100,
    },
    
});
  
export default LoginScreen;