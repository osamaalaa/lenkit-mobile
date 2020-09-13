import React from "react";
import {  StyleSheet  , View , TouchableOpacity , ImageBackground , Image,  StatusBar,
  Dimensions } from "react-native";
import { Block, Button, Text, theme } from "galio-framework";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { Font } from 'expo';
const { height, width } = Dimensions.get("screen");


import lenkitTheme from "../../constants/Theme";


const HomeScreen = ({navigation}) => {
  const [isLoaded] = useFonts({
    "fontawesome" : require("C:/Users/IT Land 02/Desktop/Lenkit 13-9-2020/lenkit-mobile/assets/fonts/fontawesome.ttf"),
    "Raleway-Black" : require("C:/Users/IT Land 02/Desktop/Lenkit 13-9-2020/lenkit-mobile/assets/fonts/Raleway-Black.ttf"),
    "Raleway-SemiBold" : require("C:/Users/IT Land 02/Desktop/Lenkit 13-9-2020/lenkit-mobile/assets/fonts/Raleway-SemiBold.ttf"),
    "Raleway-Medium" : require("C:/Users/IT Land 02/Desktop/Lenkit 13-9-2020/lenkit-mobile/assets/fonts/Raleway-Medium.ttf"),

    
    "argon": require("C:/Users/IT Land 02/Desktop/Lenkit 13-9-2020/lenkit-mobile/assets/fonts/argon.ttf"),
   "SourceSansPro-SemiBold" : require("C:/Users/IT Land 02/Desktop/Lenkit 13-9-2020/lenkit-mobile/assets/fonts/SourceSansPro-SemiBold.ttf"),
   "SourceSansPro-ExtraLightItalic" :
    require("C:/Users/IT Land 02/Desktop/Lenkit 13-9-2020/lenkit-mobile/assets/fonts/SourceSansPro-ExtraLightItalic.ttf"),
  
    
  });
    // console.log(props.navigation);
    if (!isLoaded) {
      return <AppLoading />;
    } else {return ( 
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
      {/* <ImageBackground
          source={require('../../assets/linket_finalTinyLogo.png')}
          style={styles.img}
          
        /> */}
         <Image
        style={styles.tinyLogo}
        source={require('../../assets/linket_finalTinyLogo.png')}
      />
      </Block>
      {/* <Block center>
        <Image source={require('../../assets/linket_final.png')} style={styles.logo} />
      </Block> */}
      <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{ zIndex: 2 }}>
            <Block style={styles.title}>
               <Text  style={styles.subTitle} italic>Welcome To Linkit</Text> 
              <Block>
            {/* <Text style={{ fontFamily: "fontawesome" }}>Hello World</Text> */}
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
    }
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.WHITE
  },
  tinyLogo:{
     width: 400,
    height: 200,
    top:200,
    
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
    // marginTop: 20,
    top:-160,
    color:"#C81717",      
    left:1,
    fontSize:37,
    fontWeight:"bold",
    fontFamily:"monospace",

  }
});
export default HomeScreen;
