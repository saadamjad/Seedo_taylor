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

class Home extends React.Component {
  state = {
    LocalBrand: {}
  };
  componentWillMount() {
    // console.warn("sss", this.props.navigation);
    if (
      this.props.reduxState.measurements &&
      this.props.reduxState.measurements !== {}
    ) {
      this.setState({
        LocalBrand: this.props.reduxState.measurements
      });
    }
  }

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
                  this.props.navigation.navigate("Specialinstructions", {
                    index: data
                  })
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
                    source={{ uri: Item.allImages[0].path }}
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
                    {Item.productName}
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
                    {Item.description}
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

const mapStateToProps = state => ({
  reduxState: state.reducers
});

const mapDispatchToProps = dispatch => ({
  reduxActions: bindActionCreators(reduxActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
