import React from "react";

import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Switch
} from "react-native";
import { bindActionCreators } from "redux";
import * as reduxActions from "../redux/actions/actions";
import { connect } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";
class DrawerView extends React.Component {
  state = {
    switchValue: true
  };
  render() {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: "white"
          }
        ]}
      >
        {/* <View style={styles.View1}> */}
        <LinearGradient
          colors={["#eb2874", "#eb274b"]}
          style={styles.View1}
          start={{ x: 0, y: 0 }}
          end={{ x: 1.1, y: 0 }}
        >
          <View style={styles.ProfilePic}>
            <TouchableOpacity
              style={{
                width: 90,
                height: 90,
                borderRadius: 90,
                borderWidth: 0.5,
                borderColor: "#dcdcdc"
              }}
            >
              <Image
                source={require("../../assets/images/dummyimg(2).png")}
                style={{
                  width: "100%",
                  height: "100%"
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "55%",
              height: "100%",
              justifyContent: "center",
              paddingLeft: 10
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>Peter Malark </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <Text
                style={{ fontSize: 15, color: "black", paddingVertical: 5 }}
                onPress={() => {
                  this.props.hideDrawer();
                  this.props.navigation.navigate("Profile");
                }}
              >
                {" "}
                View Profile{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        {/* </View> */}

        <TouchableOpacity
          style={styles.ContentView}
          onPress={() => {
            this.props.hideDrawer();

            this.props.navigation.navigate("Home");
          }}
        >
          <View style={styles.ContentViewInside1}>
            <FontAwesome name="home" size={15} color={"#797576"} />
          </View>

          <View style={styles.ContentViewInside2}>
            <Text
              style={[
                styles.ContentViewText,
                { color: this.props.reduxState.theme.simpleText }
              ]}
            >
              {" "}
              Home
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ContentView}
          onPress={() => {
            this.props.hideDrawer();

            this.props.navigation.navigate("MyOrder");
          }}
        >
          <View style={styles.ContentViewInside1}>
            <FontAwesome5 name="business-time" size={15} color={"#797576"} />
          </View>

          <View style={styles.ContentViewInside2}>
            <Text
              style={[
                styles.ContentViewText,
                { color: this.props.reduxState.theme.simpleText }
              ]}
            >
              {" "}
              Track Order
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ContentView}
          onPress={() => {
            this.props.hideDrawer();

            this.props.navigation.navigate("Measurements");
          }}
        >
          <View style={styles.ContentViewInside1}>
            <MaterialCommunityIcons
              name="tape-measure"
              size={25}
              style={{ marginRight: 14 }}
              color={"#797576"}
            />
          </View>

          <View style={styles.ContentViewInside2}>
            <Text
              style={[
                styles.ContentViewText,
                { color: this.props.reduxState.theme.simpleText }
              ]}
            >
              {" "}
              Measurements
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            height: 50,
            width: "100%",
            alignSelf: "center",
            borderColor: "#f0f0f0",
            position: "absolute",
            bottom: 5,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            style={{
              width: "100%",
              flexDirection: "row",
              // justifyContent: "center",
              paddingLeft: 30
            }}
            onPress={() => {
              this.props.hideDrawer();
              this.props.reduxActions.logout(this.props.navigation);
            }}
          >
            <Text
              style={[
                styles.ContentViewText,
                { color: this.props.reduxState.theme.simpleText }
              ]}
            >
              {" "}
              Logout{" "}
            </Text>
            <Image
              source={require("../../assets/images/logout.png")}
              style={{
                width: 20,
                height: 20,
                tintColor: this.props.reduxState.theme.simpleText
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "white",
  },
  View1: {
    height: 130,
    width: "100%",
    flexDirection: "row"
  },
  ProfilePic: {
    height: "100%",
    // borderRadius: 100,
    paddingRight: 5,

    borderWidth: 0,
    borderColor: "#81d0ff",
    width: "45%",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  ContentView: {
    paddingLeft: 15,
    height: 40,

    flexDirection: "row",
    width: "100%"
  },
  ContentViewInside1: {
    width: "15%",
    justifyContent: "center",
    borderBottomWidth: 0,
    borderBottomColor: "#796a3f"
  },
  ContentViewInside2: {
    paddingLeft: 0,
    width: "85%",
    borderBottomWidth: 0,
    borderBottomColor: "#796a3f",
    justifyContent: "center"
  },
  ContentViewText: {
    color: "#4e3b00",
    fontSize: 16
  },
  Notification: {
    paddingLeft: 15,
    height: 50,
    flexDirection: "row",
    width: "100%"
  },
  NotificationInside1: {
    width: "15%",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#796a3f"
  },
  NotificationInside2: {
    paddingLeft: 0,
    width: "60%",
    borderBottomWidth: 1,
    borderBottomColor: "#796a3f",
    justifyContent: "center"
  },
  NotificationInside3: {
    width: "25%",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#796a3f"
  }
});

const mapStateToProps = state => ({
  reduxState: state.reducers
});

const mapDispatchToProps = dispatch => ({
  reduxActions: bindActionCreators(reduxActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerView);
