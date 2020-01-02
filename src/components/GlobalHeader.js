import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Header, Body, Left, Right } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { bindActionCreators } from "redux";
import * as reduxActions from "../redux/actions/actions";
import { connect } from "react-redux";
import Modal from "react-native-modal";
import DrawerView from "./DrawerView";
import LinearGradient from "react-native-linear-gradient";
class GlobalHeader extends Component {
  state = {
    visible: false
  };
  hideDrawer = () => {
    this.setState({ visible: false });
  };
  render() {
    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Dimensions.get("window").height;

    return (
      <LinearGradient
        colors={["#eb2874", "#eb274b"]}
        style={{
          //  width: "100%",
          height: 60
          // flex: 1
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1.1, y: 0 }}
      >
        <Header
          style={{
            backgroundColor: this.props.backgroundColor,
            elevation: this.props.elevation,
            borderBottomWidth: 0,
            height: 60
          }}
        >
          <Left style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                width: "20%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10
              }}
              onPress={() => this.props.navigation.goBack()}
            >
              {this.props.arrow === true ? (
                <View style={styles.arrowView}>
                  <FontAwesome
                    name={"chevron-left"}
                    size={this.props.Arrowsize ? this.props.Arrowsize : 20}
                    color={
                      this.props.arrowcolor ? this.props.arrowcolor : "white"
                    }
                  />
                </View>
              ) : this.props.RedDrawerIcon === true ? (
                <TouchableOpacity
                  style={styles.arrowView}
                  onPress={() => this.setState({ visible: true })}
                >
                  <Image
                    source={require("../../assets/images/barsred.png")}
                    style={{
                      width: 10,
                      height: 18
                    }}
                  />
                </TouchableOpacity>
              ) : this.props.BlueDrawerIcon === true ? (
                <TouchableOpacity
                  style={styles.arrowView}
                  onPress={() => this.setState({ visible: true })}
                >
                  <Image
                    source={require("../../assets/images/barsblue.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      tintColor: "white"
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              ) : null}
            </TouchableOpacity>
          </Left>

          <Body
            style={
              this.props.twoWords === 1
                ? { flex: 2, alignItems: "center" }
                : { flex: 2, alignItems: "center" }
            }
          >
            {this.props.headingText !== "" ? (
              <Text numberOfLines={1} style={[styles.Text, { color: "white" }]}>
                {this.props.headingText}
              </Text>
            ) : null}
          </Body>

          <Right
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
              // paddingLeft: 10
            }}
          >
            {this.props.RightCart == true ? (
              <MaterialCommunityIcons
                name="message-text-outline"
                size={25}
                color={"white"}
              />
            ) : null}
          </Right>
          <Modal
            isVisible={this.state.visible}
            onBackdropPress={this.hideDrawer}
            onBackButtonPress={this.hideDrawer}
            style={{
              backgroundColor: "transparent",
              margin: 0
            }}
            animationInTiming={800}
            animationOutTiming={800}
            animationOut="slideOutLeft"
            animationIn="slideInLeft"
          >
            <View style={{ width: deviceWidth * 0.73, height: "100%" }}>
              <DrawerView
                hideDrawer={this.hideDrawer}
                navigation={this.props.navigation}
              />
            </View>
          </Modal>
        </Header>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  avatarImage: {
    width: 40,
    height: 40,
    alignSelf: "flex-end",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    // overflow: "hidden",
    backgroundColor: "red"
  },
  arrowView: {
    width: 35,
    height: 35,
    borderRadius: 35,
    // backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 4
  },
  searchImage: {
    width: 20,
    height: 20,
    tintColor: "white",
    alignSelf: "flex-end"
  },
  Text: {
    fontSize: 15,
    fontWeight: "bold"
  }
});

const mapStateToProps = state => ({
  reduxState: state.reducers
});

const mapDispatchToProps = dispatch => ({
  reduxActions: bindActionCreators(reduxActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);
