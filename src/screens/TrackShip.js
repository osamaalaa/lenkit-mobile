import React  from "react";


import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView , 
  TextInput,
  Image,
  Linking 
} from "react-native";
import { Block, Checkbox, Text, theme , Input} from "galio-framework";

import lenkitTheme from "../../constants/Theme";

import axios from 'axios';
import { AppLoading } from 'expo';

const { width, height } = Dimensions.get("screen");

// import  IconS  from "../../components/Icon";
// import { Icon } from 'galio-framework';
import { Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
class TrackShip extends React.Component {

constructor(props) {
    super(props);
    // this.handleChange= this.handleChange.bind(this);

    this.state = {
        shipValue: '',
        fontLoaded: false,
        Data:[],
        website_e_mail:'',
        website_phone_number: '',
        website_whatsapp: '',
        website_instagram: '',
        website_twitter: '',
        website_facebook: '',
        // isFontLoaded: false
    
      }
  }

  async componentDidMount(){
  try {
    const response = await axios.get(
      'http://192.168.1.2:4700/admin/website-info'
    );
    
 
   //alert(JSON.stringify(response.data[0].website_e_mail));
  // alert(JSON.stringify(response.data[0].website_e_mail).replace(/\"/g, ""));
 // this.setState({Data:JSON.stringify(response.data[0])})
 this.setState({
  website_e_mail:JSON.stringify(response.data[0].website_e_mail).replace(/\"/g, ""),
  website_phone_number:JSON.stringify(response.data[0].website_phone_number).replace(/\"/g, ""),
  website_instagram:JSON.stringify(response.data[0].website_instagram).replace(/\"/g, ""),
  website_facebook:JSON.stringify(response.data[0].website_facebook).replace(/\"/g, ""),
  website_whatsapp:JSON.stringify(response.data[0].website_whatsapp).replace(/\"/g, ""),

})
 
  //console.log("data",this.state.website_e_mail)
  } catch (error) {
    // handle error
    console.log("osamaerr")
    alert(error.message);
  }
}
// For Font Test
// async componentWillMount() {
//   await Font.loadAsync({ 'MaterialIcons': require('@expo/vector-icons/fonts/MaterialIcons.ttf') })
//   this.setState({ isFontLoaded: true })
// }

 _handlePress = async () => {
    try {
      const response = await axios.get(
        'http://192.168.1.2:4700/admin/website-info'
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
   
  // if(this.state.isFontLoaded) {
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
          source={require('../../assets/t2.jpeg')}
          style={styles.img}
        >
              <Block flex={0.1} style={styles.socialConnect}>

                <Text  color="white" size={15} style={styles.website_e_mail}
                onPress={() => Linking.openURL('http://google.com')}>
                
                <Image
        style={styles.mailIcon}
        source={require('../../assets/mail6.png')}
      />
                {"  "+this.state.website_e_mail}
                </Text>
       
                <Text color="white" size={15} style={styles.website_phone_number}
                onPress={() => Linking.openURL(`tel:${this.state.website_phone_number}`)}>
                            <Image
        style={styles.Icon}
        source={require('../../assets/phone2.png')}
      />
                  {"  "+this.state.website_phone_number}
               
                </Text>

                {/* **************************** 3ICons *****************************/}
                <Text color="white" size={15} style={styles.Instgram}
                onPress={() => Linking.openURL(`${this.state.website_instagram}`)}>
                            <Image
        style={styles.Icon}
        source={require('../../assets/instagram-sketched.png')}
      />
                  {"  "}
               
                </Text>

                
                <Text color="white" size={15} style={styles.Whatsapp}
                onPress={() => Linking.openURL(`${this.state.website_facebook}`)}>
                             <Image
        style={styles.Icon}
        source={require('../../assets/facebook.png')}
      />
       {"  "}
                            <Image
                            
        style={styles.Icon}
        source={require('../../assets/whatsapp2.png')}
      />
                  {"  "}
                
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
                 <Input placeholder="Shipment ID" rounded color={theme.COLORS.ERROR} style={styles.inputShip}  returnKeyLabel = {"next"}
                     onChangeText={(text) => this.setState({shipValue:text})}  />
                 {/* <TextInput ref= {(el) => { osama = el; }} onchangeText = {osama => onChangeText(osama)} value={osama} /> */}
                 <TouchableOpacity style={styles.button} onPress={() => 
                     this._handlePress()
               } >
                
                         <Text style={styles.btnText}>Track your Shipment</Text>

                 </TouchableOpacity>    
                 {/* <Text>{osama}</Text> */}


              </Block>
              </ImageBackground>

          </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
              } //endif

              // else{
              //   return (
              //     <AppLoading
              //       startAsync={this._cacheResourcesAsync}
              //       onFinish={() => this.setState({ isReady: true })}
              //       onError={console.warn}
              //     />
              //   ); }
                
              //     }
  
}



const styles = StyleSheet.create({
   
        inputShip: {
            paddingTop: 13,
            top: 535 ,
            width: width * 0.8,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100/2,
            marginLeft: 10
        },
        img:{
          width: width * 0.9,
           height:660,
           zIndex: 1
        },
        Icon:{
          width: 15,
          height: 15,
          top:-10,
         
        },
        mailIcon:{
          width: 20,
          height: 20,
          top:-10,
        },
        Instgram:{
          marginLeft:346,
          marginTop:-19
        },
        Whatsapp:{
          marginLeft:300,
          marginTop:-19
        },
        facebook:{
          marginLeft:346,
          marginTop:-19
        },
        website_e_mail:{
              marginLeft:10,
              marginTop:10,
              width:150,
        },
        website_phone_number:{
          marginLeft:150,
          marginTop:-18.5
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
        width: width * 0.9,
        marginTop: 85,
        top: 450,
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