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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Item } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default class Home extends React.Component {
  state = {
    LocalBrand: [
      {
        Category: "Fabric + Sample collection",
        Description:
          "aylor’s signature shape embodies the ultimate all-purpose acoustic.",

        image: require("../../assets/images/images(3).jpg")
      }
      //   {
      //     Category: "Share Measurements",
      //     Description:
      //       "aylor’s signature shape embodies the ultimate all-purpose acoustic.",

      //     image: require("../../assets/images/images(3).jpg")
      //   },
      //   {
      //     Category: "Existing Profile",
      //     Description:
      //       "aylor’s signature shape embodies the ultimate all-purpose acoustic.",

      //     image: require("../../assets/images/images(3).jpg")
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
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
          <GloabalHeader
            navigation={this.props.navigation}
            BlueDrawerIcon={true}
            //  backgroundColor={this.props.reduxState.theme.backgroundColor}
            // RightCart={true}
            headingText="MEASUREMENTS"
          />

          {this.state.LocalBrand.map((Item, data) => {
            return (
              <TouchableOpacity
                style={{
                  alignSelf: "center",
                  backgroundColor: "white",

                  justifyContent: "center",

                  width: "92%",
                  borderRadius: 10,
                  flexDirection: "row",

                  overflow: "hidden",
                  shadowColor: "#f3f3f3",
                  marginBottom: 17,
                  height: 160,

                  shadowOffset: {
                    width: 0,
                    height: 4
                  },
                  shadowOpacity: 0.52,
                  shadowRadius: 20,

                  elevation: 4
                }}
                onPress={() =>
                  this.props.navigation.navigate("Specialinstructions")
                }
              >
                <View
                  style={{
                    height: "100%",
                    width: "40%",
                    borderWidth: 0,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Image
                    source={(source = Item.image)}
                    style={{ width: "80%", height: "80%" }}
                    resizeMode="contain"
                  />
                </View>
                <View
                  style={{
                    height: "100%",
                    width: "60%",
                    borderWidth: 0,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text
                    style={{
                      color: "#ea2962",
                      fontSize: 17,
                      //  textAlign: "center",
                      borderBottomWidth: 1,
                      paddingLeft: 5,
                      paddingVertical: 10,
                      borderColor: "#ea2962",
                      width: "90%"
                    }}
                  >
                    {Item.Category}
                  </Text>
                  <Text
                    style={{
                      color: "#100f10",
                      fontSize: 10,
                      width: "90%",
                      paddingLeft: 5,
                      marginTop: 5
                      //  textAlign: "center",
                    }}
                  >
                    {Item.Description}
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
