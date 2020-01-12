import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  I18nManager,
  ScrollView
} from "react-native";
import Loader from "../components/Loader";
import GloabalHeader from "../components/GlobalHeader";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { bindActionCreators } from "redux";
import * as reduxActions from "../redux/actions/actions";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      check: true,
      emailAddress: "saad@gmail.com",
      password: "12345678",
      error: false,
      validEmail: true
    };
  }

  signin = () => {
    if (this.state.emailAddress === "" || this.state.password === "") {
      this.setState({ error: "Kindly Fill All The Fields" });
    } else if (this.state.validEmail === false) {
      this.setState({ error: "Kindly Enter Correct Email" });
    } else {
      this.setState({ error: false });
      let userData = {
        emailAddress: this.state.emailAddress,
        password: this.state.password
      };
      this.props.reduxActions.login(this.props.navigation, userData);
    }
  };

  // componentDidMount() {
  //   I18nManager.forceRTL(true);
  //   this.props.reduxActions.checkUser(this.props.navigation);

  //   // alert("test " + I18nManager.isRTL);
  // }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.props.reduxState.theme.backgroundColor
        }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 25 }}>
          <GloabalHeader
            backgroundColor="white"
            //  RightCart={true}
            // arrow={true}
            arrowcolor={"#eb274b"}
            navigation={this.props.navigation}
          />

          <View
            style={{
              height: "30%",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 30,
              overflow: "hidden"
            }}
          >
            <Image
              source={require("../../assets/images/adamlogo.png")}
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 28,
              color: this.props.reduxState.theme.simpleText,
              paddingVertical: 23
            }}
          >
            Loginnnn
          </Text>
          <View
            style={{
              width: "90%",
              flexDirection: "row",

              alignSelf: "center",
              borderRadius: 20,
              backgroundColor: "#ffffff",
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
            }}
          >
            <Text
              style={{
                width: "10%",
                fontSize: 15,
                color: "#eb274b",
                textAlign: "center",
                fontWeight: "bold",
                textAlignVertical: "center",
                marginLeft: 3
              }}
            >
              @
            </Text>
            <TextInput
              placeholder="enter email"
              style={{ width: "80%" }}
              onChangeText={emailAddress => {
                const emailCheckRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
                this.setState({ emailAddress: emailAddress });
                if (emailCheckRegex.test(String(emailAddress)) === true) {
                  this.setState({ validEmail: true });
                } else if (
                  emailCheckRegex.test(String(emailAddress)) === false
                ) {
                  this.setState({ validEmail: false });
                }
              }}
            />
          </View>

          <View
            style={{
              width: "90%",
              flexDirection: "row",
              marginTop: 12,
              alignSelf: "center",
              borderRadius: 20,
              backgroundColor: "#ffffff",
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
            }}
          >
            <View
              style={{
                width: "10%",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <FontAwesome name={"lock"} size={20} color="#eb274b" />
            </View>
            <TextInput
              placeholder="password"
              style={{
                width: "80%"
                // textAlign: I18nManager.isRTL ? "right" : "left"
              }} //text align because seure entry does not support RTL
              //maxLength={30}
              secureTextEntry={this.state.check}
              onChangeText={password => this.setState({ password: password })}
            />
          </View>
          {/* 
                Button */}
          <TouchableOpacity
            style={{
              width: "80%",
              alignSelf: "center",
              marginTop: 50
            }}
           onPress={() => this.signin()}
            // onPress={() => this.props.navigation.navigate("SignUp")}
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

          {/* <TouchableOpacity
            style={{
              height: 43,
              shadowOffset: {
                width: 0,
                height: 4
              },
              shadowOpacity: 0.52,
              shadowRadius: 5,

              elevation: 2,
              height: 40,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "white",
              marginTop: 20,
              width: "80%",
              borderRadius: 30,
              alignSelf: "center"
            }}
          >
            <View
              style={{
                height: 30,
                width: 30,
                position: "absolute",
                left: 20,
                justifyContent: "center"
              }}
            >
              <Image
                source={require("../../assets/images/facebook.png")}
                style={{ width: "90%", height: "90%" }}
                resizeMode="contain"
              />
            </View>
            <Text style={{ color: "#eb2874" }}>Facebook</Text>
          </TouchableOpacity> */}

          {/* <TouchableOpacity
            style={{
              height: 43,
              shadowOffset: {
                width: 0,
                height: 4
              },
              shadowOpacity: 0.52,
              shadowRadius: 5,

              elevation: 2,
              height: 40,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "white",
              marginTop: 10,
              width: "80%",
              borderRadius: 30,
              alignSelf: "center"
            }}
          >
            <View
              style={{
                height: 30,
                width: 30,
                position: "absolute",
                left: 20,
                justifyContent: "center",
                overflow: "hidden"
              }}
            >
              <Image
                source={require("../../assets/images/gmail3.jpg")}
                style={{ width: "90%", height: "90%" }}
                resizeMode="contain"
              />
            </View>
            <Text style={{ color: "#eb2874" }}>Gmail</Text>
          </TouchableOpacity> */}

          <Text style={{ marginTop: 10, color: "red", textAlign: "center" }}>
            {this.state.error ? this.state.error : null}
          </Text>

          <View
            style={{
              width: "90%",
              marginTop: 15,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",

              alignSelf: "center",
              borderRadius: 20
            }}
          >
            <Text
              style={{
                color: this.props.reduxState.theme.simpleText,
                fontSize: 16
              }}
            >
              newUser
            </Text>
            <Text
              style={{
                color: "#eb274b",
                fontSize: 16,
                marginLeft: 4,
                fontWeight: "bold"
              }}
              onPress={() => {
                // setLang("en");
                // // this.forceUpdate();
                this.props.navigation.navigate("SignUp");
                // this.signin()
              }}
            >
              {/* {strings("login.signup_button")} */}
              Signup
            </Text>
          </View>
        </ScrollView>
        {this.props.reduxState.loading ? <Loader /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    // borderBottomColor: "#000",
    backgroundColor: "white",
    alignSelf: "center",
    width: "90%",
    borderRadius: 15,
    elevation: 1
  }
});
const mapStateToProps = state => ({
  reduxState: state.reducers
});

const mapDispatchToProps = dispatch => ({
  reduxActions: bindActionCreators(reduxActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
