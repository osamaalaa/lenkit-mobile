import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import  {ArButton} from "../../components/index";
import  {ArIcon} from "../../components/index";
import  {ArInput} from "../../components/index";

import lenkitTheme from "../../constants/Theme";

const { width, height } = Dimensions.get("screen");

const TrackShip = ()=>{


        return (
            <Block flex middle>
            <StatusBar hidden />
            <ImageBackground
              source={require('../../assets/lenkit-first.jpeg')}
              style={{ width, height, zIndex: 1 }}
            >
              <Block flex middle>
                <Block style={styles.registerContainer}>
                  <Block flex={0.25} middle style={styles.socialConnect}>
                    <Text color="#8898AA" size={12}>
                      Sign up with
                    </Text>
                    <Block row style={{ marginTop: theme.SIZES.BASE }}>
                      <ArButton style={{ ...styles.socialButtons, marginRight: 30 }}>
                        <Block row>
                          <ArIcon
                            name="logo-github"
                            family="Ionicon"
                            size={14}
                            color={"black"}
                            style={{ marginTop: 2, marginRight: 5 }}
                          />
                          <Text style={styles.socialTextButtons}>GITHUB</Text>
                        </Block>
                      </ArButton>
                      <ArButton style={styles.socialButtons}>
                        <Block row>
                          <ArIcon
                            name="logo-google"
                            family="Ionicon"
                            size={14}
                            color={"black"}
                            style={{ marginTop: 2, marginRight: 5 }}
                          />
                          <Text style={styles.socialTextButtons}>GOOGLE</Text>
                        </Block>
                      </ArButton>
                    </Block>
                  </Block>
                  <Block flex>
                    <Block flex={0.17} middle>
                      <Text color="#8898AA" size={12}>
                        Or sign up the classic way
                      </Text>
                    </Block>
                    <Block flex center>
                      <KeyboardAvoidingView
                        style={{ flex: 1 }}
                        behavior="padding"
                        enabled
                      >
                        <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                          <ArInput
                            borderless
                            placeholder="Name"
                            iconContent={
                              <ArIcon
                                size={16}
                                color={lenkitTheme.COLORS.ICON}
                                name="hat-3"
                                family="ArgonExtra"
                                style={styles.inputIcons}
                              />
                            }
                          />
                        </Block>
                        <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                          <ArInput
                            borderless
                            placeholder="Email"
                            iconContent={
                              <ArIcon
                                size={16}
                                color={lenkitTheme.COLORS.ICON}
                                name="ic_mail_24px"
                                family="ArgonExtra"
                                style={styles.inputIcons}
                              />
                            }
                          />
                        </Block>
                        <Block width={width * 0.8}>
                          <ArInput
                            password
                            borderless
                            placeholder="Password"
                            iconContent={
                              <ArIcon
                                size={16}
                                color={lenkitTheme.COLORS.ICON}
                                name="padlock-unlocked"
                                family="ArgonExtra"
                                style={styles.inputIcons}
                              />
                            }
                          />
                          <Block row style={styles.passwordCheck}>
                            <Text size={12} color={lenkitTheme.COLORS.MUTED}>
                              password strength:
                            </Text>
                            <Text bold size={12} color={lenkitTheme.COLORS.SUCCESS}>
                              {" "}
                              strong
                            </Text>
                          </Block>
                        </Block>
                        <Block row width={width * 0.75}>
                          <Checkbox
                            checkboxStyle={{
                              borderWidth: 3
                            }}
                            color={lenkitTheme.COLORS.PRIMARY}
                            label="I agree with the"
                          />
                          <ArButton
                            style={{ width: 100 }}
                            color="transparent"
                            textStyle={{
                              color: lenkitTheme.COLORS.PRIMARY,
                              fontSize: 14
                            }}
                          >
                            Privacy Policy
                          </ArButton>
                        </Block>
                        <Block middle>
                          <ArButton color="primary" style={styles.createButton}>
                            <Text bold size={14} color={lenkitTheme.COLORS.WHITE}>
                              CREATE ACCOUNT
                            </Text>
                          </ArButton>
                        </Block>
                      </KeyboardAvoidingView>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </ImageBackground>
          </Block> )
};

const styles = StyleSheet.create({
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
      backgroundColor: lenkitTheme.COLORS.WHITE,
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
    }
  });

export default TrackShip;