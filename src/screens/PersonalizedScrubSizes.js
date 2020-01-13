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
import SmartGallery from "react-native-smart-gallery";
import ImageZoom from "react-native-image-pan-zoom";

class Home extends React.Component {
  state = {
    LocalBrand: {}
  };
  componentDidMount() {
    // console.warn("sss", this.props.navigation);
    if (
      this.props.reduxState.productsDiscriptions &&
      this.props.reduxState.productsDiscriptions !== {}
    ) {
      this.setState({
        LocalBrand: this.props.reduxState.productsDiscriptions
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
        {this.props.reduxState.productsDiscriptions &&
        this.props.reduxState.productsDiscriptions !== {} ? (
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
          >
            <GloabalHeader
              navigation={this.props.navigation}
              BlueDrawerIcon={true}
              //  backgroundColor={this.props.reduxState.theme.backgroundColor}
              // RightCart={true}
              headingText="Personalized ScrubSizes"
            />

            <View
              style={{
                elevation: 0,
                // height: 100,
                alignSelf: "center",
                backgroundColor: "white",
                // alignItems: "center",
                justifyContent: "center",
                marginVertical: 2,
                width: "90%",
                borderRadius: 10,
                //paddingVertical: 10,
                overflow: "hidden",
                shadowColor: "#f3f3f3",
                marginBottom: 17,
                height: 400,

                shadowOffset: {
                  width: 0,
                  height: 4
                },
                shadowOpacity: 0.52,
                shadowRadius: 20,

                elevation: 4
              }}
              onPress={() => this.props.navigation.navigate("")}
            >
              <View
                style={{
                  height: "100%",
                  width: "100%",
                  borderWidth: 0,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <SmartGallery
                  images={[
                    // Can be used with different image object fieldnames.
                    // Ex. source, source.uri, uri, URI, url, URL
                    {
                      uri:
                        this.state.LocalBrand &&
                        this.state.LocalBrand.allImages &&
                        this.state.LocalBrand.allImages.length &&
                        this.state.LocalBrand.allImages[0].path
                    }
                  ]}
                  // onEndReached={() => {
                  //     // add more images when scroll reaches end
                  // }}
                  style={{ width: "100%", height: "100%" }}
                  loadMinimal={false}
                  //  loadMinimalSize={2}
                  // Turning this off will make it feel faster
                  // and prevent the scroller to slow down
                  // on fast swipes.
                  sensitiveScroll={true}
                  resizeMode="stretch"
                />
              </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              {this.state.LocalBrand &&
                this.state.LocalBrand.allImages &&
                this.state.LocalBrand.allImages.length &&
                this.state.LocalBrand.allImages.map(val => (
                  <View
                    style={{
                      width: 60,
                      height: 70,
                      borderWidth: 1,
                      borderColor: "#e4e4e4",
                      borderRightWidth: 1,
                      marginRight: 10
                    }}
                  >
                    <Image
                      source={{ uri: val.path }}
                      style={{ width: "100%", height: "100%" }}
                      resizeMode="cover"
                    />
                  </View>
                ))}
              {/* <View
              style={{
                width: 60,
                height: 70,
                borderWidth: 1,

                borderColor: "#e4e4e4"
              }}
            ></View> */}
            </View>

            <View style={{ paddingLeft: 5, paddingRight: 5 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "300",
                  color: "black",
                  marginLeft: 10
                }}
              >
                {this.state.LocalBrand && this.state.LocalBrand.productName}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "300",
                  color: "black"
                }}
              >
                {" "}
                Rs. {this.state.LocalBrand && this.state.LocalBrand.price}
              </Text>
              <Text>
                {" "}
                {this.state.LocalBrand &&
                  this.state.LocalBrand.description}{" "}
              </Text>

              <View
                style={{
                  paddingVertical: 20,
                  justifyContent: "center",
                  paddingHorizontal: 10,
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: "#060606",
                  marginVertical: 20
                }}
              >
                <Text style={{ color: "black", fontSize: 18 }}> Total </Text>
                <View style={{ position: "absolute", right: 0 }}>
                  <Text>
                    {" "}
                    Rs : {this.state.LocalBrand && this.state.LocalBrand.price}
                  </Text>
                  <Text style={{ color: "#a5a5a5", fontSize: 10 }}>
                    {" "}
                    (inclusive all taxes )
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  width: "80%",
                  alignSelf: "center"
                }}
                onPress={() => this.props.navigation.navigate("Measurements")}
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
        ) : (
          <Text>Please Select Item</Text>
        )}
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
