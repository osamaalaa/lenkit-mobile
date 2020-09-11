import React  from "react";


import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView , 
  TextInput
} from "react-native";
import { Block, Checkbox, Text, theme , Input} from "galio-framework";

import lenkitTheme from "../../constants/Theme";

import axios from 'axios';

const { width, height } = Dimensions.get("screen");

import  IconS  from "../../components/Icon";

class TrackShip extends React.Component {

constructor(props) {
    super(props);
    // this.handleChange= this.handleChange.bind(this);

    this.state = {
        shipValue: '',
        fontLoaded: false,
    
      }
  }


 _handlePress = async () => {
    try {
      const response = await axios.get(
        'http://192.168.1.5:4700/admin/website-info'
      );
      alert(JSON.stringify(response.data));
      console.log(this.state.shipValue)
    } catch (error) {
      // handle error
      console.log("osamaerr")
      alert(error.message);
    }
  };

render() {
   
    return (
        <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={require('../../assets/splash.png')}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>

            <ImageBackground
          source={require('../../assets/lenkit-first.jpeg')}
          style={{ width, height, zIndex: 1 }}
        >
              <Block flex={0.1} style={styles.socialConnect}>
                <Text color="white" size={12}>
                  Lenkit@Lenkit.com
                </Text>
                {/* <IconS
                        name="logo-google"
                        family="ArgonExtra"
                        size={14}
                        color={"black"}
                        style={{ marginTop: 2, marginRight: 5 }}
                      /> */}
    
              </Block>
             

              <Block>
                 <Input placeholder="Track Your Ship" rounded color={theme.COLORS.SUCCESS} style={styles.inputShip}  returnKeyLabel = {"next"}
                     onChangeText={(text) => this.setState({shipValue:text})} />
                 {/* <TextInput ref= {(el) => { osama = el; }} onchangeText = {osama => onChangeText(osama)} value={osama} /> */}
                 <TouchableOpacity style={styles.button} onPress={() => 
                     this._handlePress()
               } >
                
                         <Text style={styles.btnText}>GetData</Text>

                 </TouchableOpacity>    
                 {/* <Text>{osama}</Text> */}


              </Block>
              </ImageBackground>

          </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}



const styles = StyleSheet.create({
   
        inputShip: {
            paddingTop: 13,
            top: 300 ,
            width: width * 0.9,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100/2,
        },
        

    registerContainer: {
      width: width * 0.9,
      height: height * 0.78,
      backgroundColor: "#F4F5F7",
      borderRadius: 4,
      shadowColor: lenkitTheme.COLORS.BLACK,
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowRadius: 8,
      shadowOpacity: 0.1,
      elevation: 1,
      overflow: "hidden"
    },
    socialConnect: {
      backgroundColor: "#990000",
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: "#8898AA"
    },
    socialButtons: {
      width: 120,
      height: 40,
      backgroundColor: "#fff",
      shadowColor: lenkitTheme.COLORS.BLACK,
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowRadius: 8,
      shadowOpacity: 0.1,
      elevation: 1
    },
    socialTextButtons: {
      color: lenkitTheme.COLORS.PRIMARY,
      fontWeight: "800",
      fontSize: 14
    },
    inputIcons: {
      marginRight: 12
    },
    passwordCheck: {
      paddingLeft: 15,
      paddingTop: 13,
      paddingBottom: 30
    },
    createButton: {
      width: width * 0.5,
      marginTop: 25
    },
      button: {
        // width: 300,
        marginTop: 20,
        top: 400,
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
      }
  });

export default TrackShip;