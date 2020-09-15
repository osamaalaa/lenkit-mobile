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
import AsyncStorage from '@react-native-community/async-storage';
import lenkitTheme from "../../constants/Theme";
import AuthService from './auth.service'
import axios from 'axios';
import { AppLoading } from 'expo';

const { width, height } = Dimensions.get("screen");

// import  IconS  from "../../components/Icon";
// import { Icon } from 'galio-framework';
import { Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
class TrackShip extends React.Component {


  
    
    // this.handleChange= this.handleChange.bind(this);
    
    state = {
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
        loginflag:false
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
  let result ='';
  try {
    result = await AsyncStorage.getItem('@storage_Key');
    console.log("already loged in",result)
    if(result!='')
    {this.setState({loginflag:true});
    console.log("Loginflag loged in",this.state.loginflag);
  }
} 
catch (e) {
console.log("no data" ,e.message),
console.log("firstlogin",result)
{this.setState({loginflag:false});
console.log("Loginflag first login",this.state.loginflag);
}


}

 
}
async logout() {
 try
 { ///not Working??
  //  await AsyncStorage.removeItem("@storage_Key");
  AuthService.logout();
   console.log("Buy Buy "),
   this.setState({loginflag:false});
   console.log("loginflag",this.state.loginflag),
    this.props.navigation.navigate("Login")

    return true
 }
 catch (e) {
  console.log("LogOut Error" ,e.message)
  return false
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
   //loged in
   console.log("loginflag inside render Befor Conditionof rendring",this.state.loginflag)
   if(this.state.loginflag===true) {
     

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
              onPress={() => Linking.openURL(`mailto:${this.state.website_e_mail}`)}>
              
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
              <TouchableOpacity style={styles.Instgram} onPress={()=> Linking.openURL(`${this.state.website_facebook}`)}>

              <Image
      style={styles.Icon}
      source={require('../../assets/facebook2.png')}
    />  
</TouchableOpacity>
<TouchableOpacity style={styles.Whatsapp} onPress={()=> Linking.openURL(`whatsapp://send?text=hello&phone=${this.state.website_whatsapp}`)}>

                            <Image
                          
                          style={styles.Icon}
                          source={require('../../assets/whatsapp2.png')}
                        /> 
</TouchableOpacity>



              <Block>
              </Block>
            </Block>
            <Block>
         <Input placeholder="Shipment ID" rounded color={theme.COLORS.ERROR} style={styles.inputShip}  returnKeyLabel = {"next"}
                   onChangeText={(text) => this.setState({shipValue:text})}  />
           <TouchableOpacity style={styles.button} onPress={() => 
                   this._handlePress()
             } >
              
                       <Text style={styles.btnText}>Track your Shipment</Text>
                      </TouchableOpacity>    
                      
                     

                      <TouchableOpacity style={styles.Loginbutton} onPress={() => 
                    //code to remove token from local storage
                    // AsyncStorage.removeItem("@storage_Key"),
                    this.logout()
                  
                  } >
              
                       <Text style={styles.loginbtnText}>Logout</Text>

               </TouchableOpacity> 

               <TouchableOpacity style={styles.startbutton} onPress={() => 
                   
                    this.props.navigation.navigate("Test")
                  
                  } >
              
                       <Text style={styles.loginbtnText}>Ship Now</Text>

               </TouchableOpacity> 
             </Block>
            </ImageBackground>
            </Block>
        </Block>
      </ImageBackground>
    </Block>
  );




              }//end if





             //Not Loged In
              
              else{
            
              




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
                          onPress={() => Linking.openURL(`mailto:${this.state.website_e_mail}`)}>
                          
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
                          <TouchableOpacity style={styles.Instgram} onPress={()=> Linking.openURL(`${this.state.website_facebook}`)}>
           
                          <Image
                  style={styles.Icon}
                  source={require('../../assets/facebook2.png')}
                />  
          </TouchableOpacity>
          <TouchableOpacity style={styles.Whatsapp} onPress={()=> Linking.openURL(`whatsapp://send?text=hello&phone=${this.state.website_whatsapp}`)}>
           
                                        <Image
                                      
                                      style={styles.Icon}
                                      source={require('../../assets/whatsapp2.png')}
                                    /> 
          </TouchableOpacity>
          
          
          
                          <Block>
                          </Block>
                        </Block>
                        <Block>
                     <Input placeholder="Shipment ID" rounded color={theme.COLORS.ERROR} style={styles.inputShip}  returnKeyLabel = {"next"}
                               onChangeText={(text) => this.setState({shipValue:text})}  />
                       <TouchableOpacity style={styles.button} onPress={() => 
                               this._handlePress()
                         } >
                          
                                   <Text style={styles.btnText}>Track your Shipment</Text>
                                  </TouchableOpacity>    
                                  <TouchableOpacity style={styles.Loginbutton} onPress={() => 
                               this.props.navigation.navigate("Login")
                              } >
                          
                                   <Text style={styles.loginbtnText}>Login</Text>
          
                           </TouchableOpacity> 
                         </Block>
                        </ImageBackground>
                        </Block>
                    </Block>
                  </ImageBackground>
                </Block>
              );

                            
              
            }//end render
}


}
const styles = StyleSheet.create({
  LoginText:{

    color: "#990000",
        fontSize: 20,
        marginLeft:-30,
        top:20,
        
  },
        inputShip: {
            paddingTop: 13,
            top: 535 ,
            width: width * 0.7,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100/2,
            marginLeft: 40
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
          marginLeft:346,
          marginTop:5
        },
        Login:{
          marginLeft:346,
          marginTop:60
        },
        facebook:{
          marginLeft:320,
          marginTop:-19
        },
        website_e_mail:{
              marginLeft:10,
              marginTop:10,
              width:150,
        },
        website_phone_number:{
          marginLeft:158,
          marginTop:-18.5
    },
    registerContainer: {
      width: width * 0.9,
      height: height * 0.78,
      backgroundColor: "#fff",
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
      borderColor: "#8898AA",
    
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
        width: width * 0.7,
        marginTop: 85,
        top: 450,
        marginLeft: 40,
        backgroundColor: "#990000",
        padding: 10,
        borderRadius: 50,
      },
      Loginbutton:{
// width: 300,
      width: width * 0.2,
      
      top: -175,
      marginLeft: 300,
      backgroundColor: "white",
      padding: 0,
      // borderRadius: 50,
      },
      btnText: {
        color: "white",
        fontSize: 20,
        justifyContent: "center",
        textAlign: "center",
      },
      loginbtnText:{
        color: "#990000",
        fontSize: 20,
        justifyContent: "center",
        textAlign: "center",
      },
      startbutton:{
        width: width * 0.3,
      
        top: -199,
        marginLeft: 190,
        backgroundColor: "white",
         padding: 0,
      },
  });

export default TrackShip;