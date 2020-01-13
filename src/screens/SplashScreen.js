import React from "react";
import {
  View,
  ImageBackground,
  Animated,
  Text,
  Image,
  StatusBar
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import AsyncStorage from "@react-native-community/async-storage";

export default class SplashScreen extends React.Component {
  componentDidMount() {
    AsyncStorage.getItem("isfirstTime", (error, resulr) => {
      if (error) {
        alert("run")

      } else {
        if (resulr == null) {
          AsyncStorage.setItem("isfirstTime", JSON.stringify(true), () => {
          })
        } else {
          this.props.navigation.navigate("Login")
        }
        // AsyncStorage.removeItem("isfirstTime", (err, result) => {
        //   if(err){

        //   }else{
        //     alert("run2")

        //   }
        // })

      }

    })
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          // justifyContent: "center",
          // alignItems: "center",
          backgroundColor: "white"
          // paddingTop: 130,
        }}
      >
        <StatusBar hidden={true} />
        <View
          style={{
            width: "100%",
            // alignItems: "center",
            height: "100%"
          }}
        >
          <Onboarding
            subtitle={false}
            pages={[
              {
                backgroundColor: "green",
                image: (
                  <Image
                    source={require("../../assets/images/splash1(3).jpeg")}
                    // resizeMode="contain"
                    resizeMode="cover"
                    style={{ width: "100%", height: "100%" }}
                  />
                )
              },
              {
                backgroundColor: "blue",
                image: (
                  <Image
                    source={require("../../assets/images/splash1(2).jpeg")}
                    resizeMode="cover"
                    // style={{ width: 150, height: 150, alignSelf: "center" }}
                    style={{ width: "100%", height: "100%" }}
                  />
                )
              },

              {
                backgroundColor: "red",
                image: (
                  <Image
                    source={require("../../assets/images/splash1(1).jpeg")}
                    // resizeMode="contain"
                    resizeMode="cover"
                    // style={{ width: 150, height: 150 }}
                    style={{ width: "100%", height: "100%" }}
                  />
                )
              }
            ]}
            //  style={{ backgroundColor: "red" }}
            bottomBarColor="#eb274b"
            bottomBarHighlight={false}
            controlStatusBa={false}
            // bottomBarHeight={100}
            //   bottomBarWidth={50}
            // transitionAnimationDuration={2000}
            imageContainerStyles={{ paddingBottom: 20 }}
            onSkip={() => this.props.navigation.navigate("Login")}
            onDone={() => this.props.navigation.navigate("Login")}
          />
        </View>
      </View>
    );
  }
}
