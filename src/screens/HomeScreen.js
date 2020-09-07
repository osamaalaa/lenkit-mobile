import React from "react";
import { Text, StyleSheet , Button , View , TouchableOpacity , ImageBackground} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
    // console.log(props.navigation);
  return ( 
  <View style={styles.container}>
       <ImageBackground source={require('../../assets/lenkit-first.jpeg')} style={styles.image}>
               {/* <Text style={styles.text}>Welcome To Linkit</Text> */}
         
            <TouchableOpacity style={styles.button} onPress={() =>
                           navigation.navigate('Components')          }>


                            
                <Text style={styles.btnText}>Join Now!</Text>
            </TouchableOpacity>
                
            
            </ImageBackground>
        </View>
    );
};


const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    margin: 30
  },
  button: {
    width: 200,
    marginTop: 600,
    marginLeft: 110,
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
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
    container: {
        flex: 1,
        flexDirection: "column"
      }
});
export default HomeScreen;
