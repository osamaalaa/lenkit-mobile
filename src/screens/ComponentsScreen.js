import React from 'react';
import { ImageBackground ,View , Text , StyleSheet} from 'react-native';
const image = { uri: "https://reactjs.org/logo-og.png" };

const ComponentsScreen = ()=>{

    const greeting = <Text>hii</Text>;
        return (
        // <View>
        
        // <Text style={styles.textStyle}>  This is the components screen</Text>
        //     {greeting}
        // </View>
        <View style={styles.container}>
        <ImageBackground source={require('../../assets/lenkit-first.jpeg')} style={styles.image}>
          <Text style={styles.text}>Inside</Text>
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
      }


});

export default ComponentsScreen;