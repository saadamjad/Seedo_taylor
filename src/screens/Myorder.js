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
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
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
            headingText="MY ORDERS"
            arrow={true}
            navigation={this.props.navigation}
          />

          {this.state.MyOrder.map((Item, i) => {
            return (
              <TouchableOpacity
                style={{
                  width: "90%",
                  backgroundColor: "#ffff",
                  alignSelf: "center",
                  borderRadius: 10,
                  marginVertical: 8,
                  paddingVertical: 15,
                  overflow: "hidden",
                  flexDirection: "row",
                  elevation: 4,
                  height: 125
                }}
              >
                <View
                  style={{
                    width: "30%",
                    borderWidth: 0,
                    alignItems: "center",
                    height: "100%",
                    justifyContent: "center"
                  }}
                >
                  <Image
                    source={Item.image}
                    style={{ width: "90%", height: "90%" }}
                    resizeMode="contain"
                  />
                </View>
                <View
                  style={{
                    width: "50%",
                    borderWidth: 0,
                    paddingLeft: 5,
                    justifyContent: "center"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#585858",
                      marginVertical: 5,
                      fontWeight: "bold"
                    }}
                  >
                    Order # {Item.OrderID}
                  </Text>
                </View>
                <View
                  style={{
                    width: "20%",
                    borderWidth: 0,
                    paddingLeft: 5,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <FontAwesome5 name="arrow-right" size={20} color={"black"} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    position: "absolute",
                    right: 10,
                    top: 10
                  }}
                >
                  <Text
                    style={{
                      color:
                        Item.Status == "Pending"
                          ? "red"
                          : Item.Status == "Delivered"
                          ? "blue"
                          : Item.Status == "Cancelled"
                          ? "black"
                          : null
                    }}
                  >
                    {" "}
                    {Item.Status}{" "}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
