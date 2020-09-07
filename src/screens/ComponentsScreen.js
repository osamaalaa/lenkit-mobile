import React from 'react';
import { ImageBackground ,View , Text , StyleSheet , TouchableOpacity} from 'react-native';
import axios from 'axios';

const ComponentsScreen = ()=>{

  const osamaGetData = async () => {
    try {
      const response = await axios.get(
        'http://192.168.1.5:4000/admin/website-info'
      );
      alert(JSON.stringify(response.data));
    } catch (error) {
      // handle error
      console.log("osamaerr")
      alert(error.message);
    }
  };
        return (
        <View style={styles.container}>
        <ImageBackground source={require('../../assets/lenkit-first.jpeg')} style={styles.image}>
          {/* <Text style={styles.text}>Inside</Text> */}
          <TouchableOpacity style={styles.button} onPress={osamaGetData} >
                <Text style={styles.btnText}>GetData</Text>
            </TouchableOpacity>


        </ImageBackground>
      </View> )
};

const styles = StyleSheet.create({

    textStyle: {
        fontSize: 30 
    },
    container: {
        flex: 1,
        flexDirection: "column"
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold"
      } ,
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


});

export default ComponentsScreen;