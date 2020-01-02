import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ActivityIndicator
} from "react-native";

import GloabalHeader from "../components/GlobalHeader";

import LinearGradient from "react-native-linear-gradient";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import { Item } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default class Home extends React.Component {
  state = {
    MyOrder: [
      {
        ProductName: "Shirts",
        OrderID: "12345",
        Status: "Pending",

        image: require("../../assets/images/images(3).jpg")
      },
      {
        ProductName: "Shirts",
        OrderID: "777",
        Status: "Delivered",

        image: require("../../assets/images/clothes.png")
      },
      {
        ProductName: "Shirts",
        OrderID: "90909090",
        Status: "Cancelled",

        image: require("../../assets/images/images.jpg")
      },
      {
        ProductName: "Shirts",
        OrderID: "12345",
        Status: "Pending",

        image: require("../../assets/images/images(3).jpg")
      }
    ]
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
          <GloabalHeader
            headingText="Confirm Order"
            arrow={true}
            navigation={this.props.navigation}
          />
          <TouchableOpacity
            style={{
              width: "90%",
              backgroundColor: "#ffff",
              alignSelf: "center",
              borderRadius: 10,
              marginVertical: 8,
              paddingVertical: 15,
              overflow: "hidden",

              elevation: 4,
              height: 285
            }}
          >
            <View
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                alignSelf: "center",

                elevation: 0.5,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Fontisto name={"heart-eyes"} size={30} color="#eb274b" />
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                alignSelf: "center"
              }}
            >
              <Text style={{ color: "black", fontSize: 15, marginTop: 20 }}>
                {" "}
                Thank you for confirming your orders
              </Text>
              <Text
                style={{ color: "#e0e0e0", fontSize: 14, marginVertical: 10 }}
              >
                {" "}
                Your orderno is: 1111223
              </Text>
              <Text
                style={{
                  color: "#e0e0e0",
                  fontSize: 14,
                  textAlign: "center",
                  marginBottom: 20
                }}
              >
                {" "}
                Your orderno is: 1111223 you will recsve an emaail
              </Text>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={() => this.props.navigation.navigate("Home")}
              >
                <Entypo name={"shopping-cart"} color="#eb274b" size={20} />
                <Text
                  style={{ color: "black", fontSize: 14, textAlign: "center" }}
                >
                  {" "}
                  Home
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
