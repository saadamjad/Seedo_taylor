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

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Item } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default class Home extends React.Component {
  state = {
    LocalBrand: [
      {
        ProductName: "special offer",

        image: require("../../assets/images/kurta1.jpg")
      },
      {
        ProductName: " Daily Wear  ",

        image: require("../../assets/images/Deadpool_Leather_Jacket.jpg")
      },
      {
        ProductName: "Formal Wear  ",

        image: require("../../assets/images/formal.jpg")
      },

      {
        ProductName: "Party Wear ",

        image: require("../../assets/images/partywear.jpg")
      },
      {
        ProductName: "Others",

        image: require("../../assets/images/leatherr.jpg")
      }
      //   {
      //     ProductName: "Waste",

      //     image: require("../../assets/images/dummyimg(6).png")
      //   }
    ]
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <GloabalHeader
            navigation={this.props.navigation}
            BlueDrawerIcon={true}
            //  backgroundColor={this.props.reduxState.theme.backgroundColor}
            // RightCart={true}
            headingText="SELECT Category"
          />

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
              marginVertical: 20,
              flexWrap: "wrap",
              backgroundColor: "white"
            }}
          >
            {this.state.LocalBrand.map((Item, data) => {
              return (
                <TouchableOpacity
                  style={{
                    elevation: 0,
                    // height: 100,
                    alignSelf: "center",
                    backgroundColor: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    marginVertical: 2,
                    width: 140,
                    borderRadius: 10,
                    paddingVertical: 10,
                    overflow: "hidden",
                    shadowColor: "#f3f3f3",
                    marginBottom: 17,
                    height: 220,

                    shadowOffset: {
                      width: 0,
                      height: 4
                    },
                    shadowOpacity: 0.52,
                    shadowRadius: 20,

                    elevation: 4
                  }}
                  onPress={() =>
                    this.props.navigation.navigate("SelectAttaire")
                  }
                >
                  <View
                    style={{
                      height: "75%",
                      width: "100%",
                      borderWidth: 0,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Image
                      source={(source = Item.image)}
                      style={{ width: "70%", height: "80%" }}
                      resizeMode="contain"
                    />
                  </View>

                  <Text
                    style={{
                      borderBottomWidth: 1,
                      height: "25%",
                      borderColor: "red",
                      color: "#eb768d",
                      paddingVertical: 13
                    }}
                  >
                    {Item.ProductName}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}