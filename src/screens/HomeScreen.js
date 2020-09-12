import React from "react";
import {  StyleSheet  , View , TouchableOpacity , ImageBackground , Image,  StatusBar,
  Dimensions } from "react-native";
import { Block, Button, Text, theme } from "galio-framework";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { height, width } = Dimensions.get("screen");


import lenkitTheme from "../../constants/Theme";

const HomeScreen = ({navigation}) => {
    // console.log(props.navigation);
  return ( 
      // <View style={styles.container}>
      //  <ImageBackground source={require('../../assets/lenkit-first.jpeg')} style={styles.image}>
      //          {/* <Text style={styles.text}>Welcome To Linkit</Text> */}
         
      //       <TouchableOpacity style={styles.button} onPress={() =>
      //                      navigation.navigate('Components')          }>


                            
      //           <Text style={styles.btnText}>Join Now!</Text>
      //       </TouchableOpacity>
                
            
      //       </ImageBackground>
      //   </View>

      <Block flex style={styles.container}> 
      <StatusBar hidden />
      <Block flex center>
      <ImageBackground
          source={require('../../assets/del_man.jpeg')}
          style={{ height, width, zIndex: 1 }}
        />
      </Block>
      {/* <Block center>
        <Image source={require('../../assets/linket_final.png')} style={styles.logo} />
      </Block> */}
      <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{ zIndex: 2 }}>
            <Block style={styles.title}>
             
              <Block>
                
              </Block>
            
            </Block>
            <Block center>
              <Button
                style={styles.button}
                color={lenkitTheme.COLORS.SECONDARY}
                onPress={() => navigation.navigate("Track")}
                textStyle={{ color: lenkitTheme.COLORS.WHITE }}
              >
                Get Started
              </Button>
            </Block>
        </Block>
      </Block>
    </Block>


    );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    backgroundColor: "#990000",
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%'
  },
  title: {
    marginTop:'80%'
  },
  subTitle: {
    marginTop: 20,
    color:theme.COLORS.BLACK,
  }
});
export default HomeScreen;
