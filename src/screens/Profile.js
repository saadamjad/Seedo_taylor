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
import { bindActionCreators } from "redux";
import * as reduxActions from "../redux/actions/actions";
import { connect } from "react-redux";

class Profile extends React.Component {
  state = {
    LocalBrand: [
      {
        ProductName: "Shirts",

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
            //   BlueDrawerIcon={true}
            // backgroundColor={this.props.reduxState.theme.backgroundColor}
            // RightCart={true}
            headingText="Profile"
            arrow={true}
          />
          <View
            style={{
              marginTop: 20,
              height: 120,
              width: 120,
              borderRadius: 120,
              alignSelf: "center",
              borderWidth: 0.5,
              borderColor: "#dbdbdb"
            }}
          >
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: "#fe92b9",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                right: 0,
                bottom: 0,
                backgroundColor: "#fe92b9"
              }}
            >
              <FontAwesome name="camera" size={15} color={"white"} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 22,
              color: "black",
              marginTop: 20
            }}
          >
            {" "}
            User name{" "}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              color: "#bababa",
              marginTop: 5
            }}
          >
            {" "}
            {this.props.reduxState.userData.fullName}{" "}
          </Text>
          <View
            style={{
              marginTop: 5,
              width: "90%",
              alignSelf: "center",
              // borderWidth: 0.5,
              height: "100%"
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: "#959595",
                  fontWeight: "400",
                  marginVertical: 5
                }}
              >
                {" "}
                Name{" "}
              </Text>
              <Text style={{ fontSize: 13, color: "#b7b7b7", marginLeft: 3 }}>
                {" "}
                {this.props.reduxState.userData.fullName}
              </Text>
            </View>

            <View
              style={{
                marginTop: 10
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#959595",
                  fontWeight: "400",
                  marginVertical: 5
                }}
              >
                {" "}
                Email{" "}
              </Text>
              <Text style={{ fontSize: 13, color: "#b7b7b7", marginLeft: 3 }}>
                {" "}
                {this.props.reduxState.userData.emailAddress}
              </Text>
            </View>

            <TouchableOpacity
              style={{
                width: "80%",
                alignSelf: "center",
                marginTop: 100
              }}
              onPress={() => this.props.navigation.navigate("CheckOut")}
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
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  reduxState: state.reducers
});

const mapDispatchToProps = dispatch => ({
  reduxActions: bindActionCreators(reduxActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
