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
import Loader from "../components/Loader";
import GloabalHeader from "../components/GlobalHeader";
// import GloabalButton from "../components/GlobalButton";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { bindActionCreators } from "redux";
import * as reduxActions from "../redux/actions/actions";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";

class Signup extends React.Component {
  state = {
    check: true,
    fullName: "",
    emailAddress: "",
    password: "",
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
    if (
      this.state.fullName === "" ||
      this.state.emailAddress === "" ||
      this.state.password === ""
    ) {
      this.setState({ error: "Kindly Fill All The Fields" });
    } else if (this.state.validEmail === false) {
      this.setState({ error: "Kindly Enter Correct Email" });
    } else {
      this.setState({ error: false });
      let userData = {
        fullName: this.state.fullName,
        emailAddress: this.state.emailAddress,
        password: this.state.password
      };
      this.props.reduxActions.signup(this.props.navigation, userData);
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.props.reduxState.theme.backgroundColor
        }}
      >
        <GloabalHeader
          backgroundColor="white"
          //  RightCart={true}
          arrow={true}
          navigation={this.props.navigation}
          arrowcolor={"#eb274b"}
        />

        <View
          style={{
            height: "30%",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            source={require("../../assets/images/LogoSeedo.jpeg")}
            style={{ width: "70%", height: "100%" }}
            resizeMode="contain"
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 28,
            color: this.props.reduxState.theme.simpleText,

            paddingBottom: 20
          }}
        >
          Register
        </Text>
        <ScrollView>
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
                color="#eb274b"
              />
            </View>

            <TextInput
              placeholder="Full Name"
              style={{ width: "80%" }}
              onChangeText={text => this.setState({ fullName: text })}
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
                style={{ fontSize: 15, color: "#eb274b", fontWeight: "bold" }}
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
              <FontAwesome5 name={"lock"} size={17} color="#eb274b" />
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
                <Entypo name={"eye-with-line"} size={20} color="#eb274b" />
              ) : (
                <Entypo name={"eye"} size={20} color="#eb274b" />
              )}
            </TouchableOpacity>
          </View>

          {/* <GloabalButton
            backgroundColor={"#4fbdff"}
            text={"Signup"}
            // CartImage={true}
            linearGradient={true}
            submit={() => this.onsubmit()}
          /> */}
          <TouchableOpacity
            style={{
              width: "80%",
              alignSelf: "center",
              marginTop: 50
            }}
            onPress={() => this.onsubmit()}
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
                Done{" "}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text style={{ marginTop: 10, color: "red", textAlign: "center" }}>
            {this.state.error ? this.state.error : null}
          </Text>
        </ScrollView>
        {this.props.reduxState.loading ? <Loader /> : null}
      </View>
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
