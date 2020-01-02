import React from "react";
import { View, ImageBackground, Animated, Text } from "react-native";

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          // justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          paddingTop: 130
        }}
      >
        <Text>hello </Text>
      </View>
    );
  }
}
