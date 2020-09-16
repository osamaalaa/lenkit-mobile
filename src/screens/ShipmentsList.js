import React from 'react';
import { ImageBackground ,View,ScrollView   , StyleSheet , TouchableOpacity,Image,Dimensions} from 'react-native';
import axios from 'axios';
import { Block, Button, Text, theme } from "galio-framework";
const { height, width } = Dimensions.get("screen");
import lenkitTheme from "../../constants/Theme";
import { ListItem, Avatar } from 'react-native-elements'

export default class ShipmentList extends React.Component{
     list = [
        {
          name: 'Shipment one',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Vice President'
        },
        {
          name: 'Shipment Two',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Vice Chairman'
        },
        {
            name: 'Chris Three',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
          },
          {
            name: 'Amy Four',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
          },
          {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
          },
          {
              name: 'Chris Jackson',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              subtitle: 'Vice Chairman'
            },
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
              },
              {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
              },
              {
                  name: 'Chris Jackson',
                  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  subtitle: 'Vice Chairman'
                },
                {
                    name: 'Amy Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Vice President'
                  },
                  {
                    name: 'Chris Jackson',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Vice Chairman'
                  },
                  {
                      name: 'Chris Jackson',
                      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                      subtitle: 'Vice Chairman'
                    },
                    {
                        name: 'Amy Farha',
                        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        subtitle: 'Vice President'
                      },
                      {
                        name: 'Chris Jackson',
                        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                        subtitle: 'Vice Chairman'
                      },
                      {
                          name: 'Chris Jackson',
                          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                          subtitle: 'Vice Chairman'
                        },
      ];



  render(){
      

        return (
            
            <ScrollView  style={styles.container}>
            {
              this.list.map((l, i) => (
                <ListItem key={i} bottomDivider>
                  <Avatar source={{uri: l.avatar_url}} />
                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              ))
            }
          </ScrollView >
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    backgroundColor: 'white',
   
    
    },

});

