import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
// import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from "react-native-linear-gradient";

export default class Button extends React.Component {
  render() {
    return (
      // All PROPS
      //width ,height ,marginTop ,alignSelf,backgroundColor,borderRadius,marginBottom ,textColor ,fontSize,fontWeight ,CartImage

      /* <GloabalButton
         //textColor
        // backgroundColor={'red'}
        text={'Place Order'}
        //borderWidth
        NoteImage={true}
        EditImage={true}
        CartImage={true}
        // navigateTo={ ()=> this.props.navigation.navigate('SignUp')}
        /> */
      this.props.linearGradient ? (
        <TouchableOpacity
          style={{
            width: this.props.width ? this.props.width : "90%",

            height: this.props.height ? this.props.height : 45,
            marginTop: this.props.marginTop ? this.props.marginTop : 10,

            overflow: "hidden",
            alignSelf: this.props.alignSelf ? this.props.alignSelf : "center",
            borderWidth: this.props.borderWidth ? this.props.borderWidth : 0,
            borderColor: "#8bd4ff",
            // backgroundColor: this.props.backgroundColor
            //   ? this.props.backgroundColor
            //   : "#4fbdff",

            borderRadius: this.props.borderRadius
              ? this.props.borderRadius
              : 20,
            height: 43,
            shadowOffset: {
              width: 0,
              height: 4
            },
            shadowOpacity: 0.52,
            shadowRadius: 5,

            elevation: 2,

            marginBottom: this.props.marginBottom ? this.props.marginBottom : 2
          }}
          onPress={() =>
            this.props.submit
              ? this.props.submit()
              : this.props.navigation.navigate(this.props.navigateTo)
          }
          // disabled={this.props.disabled ? this.props.disabled : false}
        >
          <LinearGradient
            colors={["#25aeff", "#5ec3ff", "#85d1ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              width: "100%",
              height: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {this.props.CartImage ? (
              <View
                style={{
                  width: 40,
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  source={require("../../assets/images/cart.png")}
                  style={{ width: "50%", height: "50%" }}
                  resizeMode="contain"
                />
              </View>
            ) : this.props.NoteImage ? (
              <View
                style={{
                  width: 40,
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  source={require("../../assets/images/edit.png")}
                  style={{ width: "50%", height: "50%" }}
                  resizeMode="contain"
                />
              </View>
            ) : this.props.EditImage ? (
              <View
                style={{
                  width: 35,
                  height: 35,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  source={require("../../assets/images/pen.png")}
                  style={{ width: "50%", height: "50%" }}
                  resizeMode="contain"
                />
              </View>
            ) : null}

            <Text
              style={{
                color: this.props.textColor ? this.props.textColor : "white",

                fontSize: this.props.fontSize ? this.props.fontSize : 15,
                marginLeft: 1,
                fontWeight: this.props.fontWeight ? this.props.fontWeight : null
              }}
            >
              {this.props.text}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            width: this.props.width ? this.props.width : "90%",
            flexDirection: "row",

            height: this.props.height ? this.props.height : 45,
            marginTop: this.props.marginTop ? this.props.marginTop : 10,
            alignItems: "center",
            justifyContent: "center",

            alignSelf: this.props.alignSelf ? this.props.alignSelf : "center",
            borderWidth: this.props.borderWidth ? this.props.borderWidth : 0,
            borderColor: "#8bd4ff",
            backgroundColor: this.props.backgroundColor
              ? this.props.backgroundColor
              : "#4fbdff",

            borderRadius: this.props.borderRadius
              ? this.props.borderRadius
              : 20,
            height: 43,
            shadowOffset: {
              width: 0,
              height: 4
            },
            shadowOpacity: 0.52,
            shadowRadius: 5,

            elevation: 2,

            marginBottom: this.props.marginBottom ? this.props.marginBottom : 2
          }}
          onPress={() =>
            this.props.submit
              ? this.props.submit()
              : this.props.navigation.navigate(this.props.navigateTo)
          }
          // disabled={this.props.disabled ? this.props.disabled : false}
        >
          {/* 
            {this.props.Image?} */}

          {this.props.CartImage ? (
            <View
              style={{
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                source={require("../../assets/images/cart.png")}
                style={{ width: "50%", height: "50%" }}
                resizeMode="contain"
              />
            </View>
          ) : this.props.NoteImage ? (
            <View
              style={{
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                source={require("../../assets/images/edit.png")}
                style={{ width: "50%", height: "50%" }}
                resizeMode="contain"
              />
            </View>
          ) : this.props.EditImage ? (
            <View
              style={{
                width: 35,
                height: 35,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                source={require("../../assets/images/pen.png")}
                style={{ width: "50%", height: "50%" }}
                resizeMode="contain"
              />
            </View>
          ) : null}

          <Text
            style={{
              color: this.props.textColor ? this.props.textColor : "white",

              fontSize: this.props.fontSize ? this.props.fontSize : 15,
              marginLeft: 1,
              fontWeight: this.props.fontWeight ? this.props.fontWeight : null
            }}
          >
            {this.props.text}
          </Text>
        </TouchableOpacity>
      )
    );
  }
}
