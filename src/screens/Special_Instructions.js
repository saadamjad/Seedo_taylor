import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ScrollView,
  ActivityIndicator
} from "react-native";

import GloabalHeader from "../components/GlobalHeader";

import LinearGradient from "react-native-linear-gradient";
import Fontisto from "react-native-vector-icons/Fontisto";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// import { Item } from "native-base";
// import { ScrollView } from "react-native-gesture-handler";

export default class Home extends React.Component {
  state = {
    LocalBrand: [
      {
        Category: "Fabric + Sample collection",
        Description:
          "aylor’s signature shape embodies the ultimate all-purpose acoustic.",

        image: require("../../assets/images/images(3).jpg")
      },
      {
        Category: "Share Measurements",
        Description:
          "aylor’s signature shape embodies the ultimate all-purpose acoustic.",

        image: require("../../assets/images/images(3).jpg")
      },
      {
        Category: "Existing Profile",
        Description:
          "aylor’s signature shape embodies the ultimate all-purpose acoustic.",

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
            navigation={this.props.navigation}
            BlueDrawerIcon={true}
            //  backgroundColor={this.props.reduxState.theme.backgroundColor}
            // RightCart={true}
            headingText="SPECIAL INSTRUCTIONS"
          />
          <Text
            style={{
              color: "#ea2962",
              fontSize: 18,
              textAlign: "center",
              borderBottomWidth: 1,
              marginTop: 20,
              paddingLeft: 5,
              paddingVertical: 10,
              borderColor: "#ea2962",
              width: "65%",
              alignSelf: "center"
            }}
          >
            Fabric {"&"} Sample collection
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 10,
              textAlign: "center",
              //   borderBottomWidth: 1,
              paddingLeft: 5,
              paddingVertical: 10,
              //   borderColor: "#ea2962",
              width: "65%",
              alignSelf: "center"
            }}
          >
            select date and time for when a rider is comming to the designated
            address to pickup the sizes from the house
          </Text>

          <View
            style={{
              justifyContent: "center",
              paddingVertical: 10,
              marginVertical: 20,
              paddingLeft: 10,
              paddingRight: 10
            }}
          >
            <Text
              style={{
                color: "#ea2962",
                fontSize: 15
                // textAlign: "center"
              }}
            >
              select pick-up Date
            </Text>
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 15,
                width: 45,
                height: 45,
                borderRadius: 45,
                backgroundColor: "#ea2962",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Fontisto name={"date"} size={20} color={"white"} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              paddingVertical: 10,
              //   marginVertical: 20,
              paddingLeft: 10,
              paddingRight: 10
            }}
          >
            <Text
              style={{
                color: "#ea2962",
                fontSize: 15
                // textAlign: "center"
              }}
            >
              select pick-up Time
            </Text>
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 15,
                width: 45,
                height: 45,
                borderRadius: 45,
                backgroundColor: "#ea2962",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <MaterialCommunityIcons
                name={"update"}
                size={20}
                color={"white"}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "#ea2962",
              fontSize: 12,
              marginTop: 20,
              width: "85%",
              alignSelf: "center",
              textAlign: "center"
            }}
          >
            Pickup and delivery servie from 11:Am to 8:PM
          </Text>
          <Text
            style={{
              color: "#ea2962",
              fontSize: 12,
              marginTop: 10,
              width: "85%",
              alignSelf: "center",
              textAlign: "center"
            }}
          >
            Call centre timing from 11:Am to 8:PM
          </Text>
          <Text
            style={{
              color: "#ea2962",
              fontSize: 12,
              marginTop: 10,
              width: "85%",
              alignSelf: "center",
              textAlign: "center"
            }}
          >
            service not operational on sundays
          </Text>
          <TouchableOpacity
            style={{
              width: "80%",
              alignSelf: "center",
              marginTop: 50
            }}
            onPress={() => this.props.navigation.navigate("CheckOut", {index: this.props.navigation.state.params.index})}
          >
            <LinearGradient
              colors={["#eb2874", "#eb274b"]}
              style={{
                alignItems: "center",
                borderRadius: 5,
                height: 50,
                justifyContent: "center"
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.1, y: 0 }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "300",
                  color: "white",
                  marginLeft: 5
                }}
              >
                {" "}
                Next{" "}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
