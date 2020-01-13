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
  SafeAreaView
} from "react-native";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Thumbnail
} from "native-base";
import { CheckBox } from "react-native-elements";
import Loader from "../components/Loader";
import GloabalHeader from "../components/GlobalHeader";

import { bindActionCreators } from "redux";

import LinearGradient from "react-native-linear-gradient";
import * as reduxActions from "../redux/actions/actions";
import { connect } from "react-redux";

class Signup extends React.Component {
  state = {
    check: true,
    firstName: "",
    Lastname: "",
    emailAddress: "",
    password: "",
    StreetAddress: "",
    country: "",
    city: "",
    ContactNo: "",
    checked: true,

    error: false,
    validEmail: false
  };

  emailChange = email => {
    const emailCheckRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    this.setState({ emailAddress: email });
    if (emailCheckRegex.test(String(email)) === true) {
      this.setState({ validEmail: true });
    } else if (emailCheckRegex.test(String(email)) === false) {
      this.setState({ validEmail: false });
    }
  };

  onsubmit = () => {
    let data = this.state.data;
    this.props.reduxActions.AddOrder({...data, user: this.props.reduxState.userData.uid}, this.props.navigation)
    this.props.reduxActions.emptyMeasurement(this.props.navigation.state.params.index)
  };

  componentDidMount() {
    this.setState({ data: this.props.navigation.state.params.data })
    console.warn(this.props.navigation.state.params.data)
  }

  render() {
    let { data } = this.state;
    return (
      <Container
        style={{
          flex: 1
        }}
      >
        <Content>
          <GloabalHeader
            headingText="Review Order"
            arrow={true}
            navigation={this.props.navigation}
          />
          <View style={{ paddingLeft: 10, paddingRight: 10 }}>
            <View
              style={{
                borderBottomWidth: 0.5,
                paddingVertical: 6,
                //   height: "100%",
                borderColor: "#e0e0e0"
              }}
            >
              <Text
                style={{
                  // textAlign: "center",
                  fontSize: 16,
                  color: "black",
                  fontWeight: "500",
                  marginVertical: 5,
                  marginTop: 10,

                  borderColor: "#eeeeee"
                }}
              >
                Shipping Address
              </Text>
              <Text
                style={{
                  // textAlign: "center",
                  fontSize: 13,
                  color: "#c4c4c4",

                  borderColor: "#eeeeee"
                }}
              >
                {data !== undefined && data.StreetAddress}
              </Text>
            </View>

            <View
              style={{
                borderBottomWidth: 0.5,
                marginVertical: 10,
                paddingVertical: 6,
                //   height: "100%",
                borderColor: "#e0e0e0"
              }}
            >
              <Text
                style={{
                  // textAlign: "center",
                  fontSize: 16,
                  color: "black",
                  fontWeight: "500",
                  marginVertical: 5,
                  marginTop: 10,

                  borderColor: "#eeeeee"
                }}
              >
                Billing Address
              </Text>
              <Text
                style={{
                  // textAlign: "center",
                  fontSize: 13,
                  color: "#c4c4c4",

                  borderColor: "#eeeeee"
                }}
              >
                {data !== undefined && data.StreetAddress}
              </Text>
            </View>

            <View
              style={{
                borderBottomWidth: 0.5,
                // marginVertical: 10,
                paddingVertical: 6,
                //   height: "100%",
                borderColor: "#e0e0e0"
              }}
            >
              <Text
                style={{
                  // textAlign: "center",
                  fontSize: 16,
                  color: "black",
                  fontWeight: "500",
                  marginVertical: 5,
                  marginTop: 10,

                  borderColor: "#eeeeee"
                }}
              >
                ContactNo
              </Text>
              <Text
                style={{
                  // textAlign: "center",
                  fontSize: 13,
                  color: "#c4c4c4",

                  borderColor: "#eeeeee"
                }}
              >
                {data !== undefined && data.ContactNo}
              </Text>
            </View>

            <View
              style={{
                // borderBottomWidth: 0.5,
                // marginVertical: 10,
                paddingVertical: 10
                //   height: "100%",
                //  borderColor: "#e0e0e0"
              }}
            >
              <Text
                style={{
                  // textAlign: "center",
                  fontSize: 13,
                  color: "#eb274b",
                  // fontWeight: "500",
                  marginVertical: 5,
                  marginTop: 10,

                  borderColor: "#eeeeee"
                }}
              >
                Free Devilvery within karachi only *
              </Text>
            </View>

            <View
              style={{
                borderBottomWidth: 0.5,
                // marginVertical: 10,
                paddingVertical: 6,
                //   height: "100%",
                borderColor: "#e0e0e0",
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  // textAlign: "center",
                  fontSize: 16,
                  color: "black",
                  fontWeight: "500",
                  marginVertical: 5,
                  marginTop: 10,

                  borderColor: "#eeeeee"
                }}
              >
                {data !== undefined && data.product.productName}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  right: 0,
                  fontSize: 15,
                  textAlign: "right"
                }}
              >
                Rs. {data !== undefined && data.product.price}
              </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 0.5,
                // marginVertical: 10,
                paddingVertical: 6,
                //   height: "100%",
                borderColor: "#e0e0e0",
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  // textAlign: "center",
                  fontSize: 16,
                  color: "black",
                  fontWeight: "500",
                  marginVertical: 5,
                  marginTop: 10,

                  borderColor: "#eeeeee"
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  position: "absolute",
                  right: 0,
                  fontSize: 15,
                  textAlign: "right"
                }}
              >
                Rs. {data !== undefined && data.product.price} {"\n "}{" "}
                <Text
                  style={{
                    fontSize: 12,
                    color: "#e0e0e0",
                    position: "absolute",
                    right: 0
                  }}
                >
                  (inclusive all Taxes)
                </Text>
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: "80%",
                alignSelf: "center",
                marginTop: 20
              }}
              onPress={() => this.onsubmit()}
              // onPress={() => this.props.navigation.navigate("ConfirmedOrder")}
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
                  Confirm Order
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <Text
              style={{ marginTop: 10, color: "black", textAlign: "center" }}
            >
              {this.state.error ? this.state.error : null}
            </Text>
          </View>

          {/* */}
          {/* <ScrollView>
          <View style={styles.item}>
            <View
              style={{
                width: "10%",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <MaterialCommunityIcons
                name={"account"}
                size={20}
                color="#74cbff"
              />
            </View>

            <TextInput
              placeholder="Full Name"
              style={{ width: "80%" }}
              onChangeText={text => this.setState({ firstName: text })}
            />
          </View>

          <View style={styles.item}>
            <View
              style={{
                width: "10%",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text
                style={{ fontSize: 15, color: "#39b5ff", fontWeight: "bold" }}
              >
                @
              </Text>
            </View>

            <TextInput
              placeholder="Email Address"
              style={{ width: "80%" }}
              onChangeText={email => this.emailChange(email)}
            />
          </View>

          <View style={[styles.item]}>
            <View
              style={{
                width: "10%",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <FontAwesome5 name={"lock"} size={17} color="#74cbff" />
            </View>

            <TextInput
              placeholder="Password"
              style={{ width: "80%" }}
              maxLength={30}
              secureTextEntry={this.state.check}
              onChangeText={password => this.setState({ password: password })}
            />
            <TouchableOpacity
              style={{ position: "absolute", right: 15 }}
              onPress={() => this.setState({ check: !this.state.check })}
            >
              {this.state.check ? (
                <Entypo name={"eye-with-line"} size={20} />
              ) : (
                <Entypo name={"eye"} size={20} />
              )}
            </TouchableOpacity>
          </View>

          
        </ScrollView>
        
     */}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    // borderBottomColor: "#000",
    width: "90%",
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "white",
    marginBottom: 5,

    alignSelf: "center",
    borderRadius: 20,
    alignItems: "center",
    height: 38,
    shadowColor: "#f1f1f1",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.52,
    shadowRadius: 5,

    elevation: 5
  }
});
const mapStateToProps = state => ({
  reduxState: state.reducers
});

const mapDispatchToProps = dispatch => ({
  reduxActions: bindActionCreators(reduxActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
