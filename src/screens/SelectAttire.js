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

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Item } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { bindActionCreators } from "redux";
import * as reduxActions from "../redux/actions/actions";
import { connect } from "react-redux";
class Home extends React.Component {
  state = {
    LocalBrand: [
      {
        ProductName: "kurta shalwar",

        image: require("../../assets/images/kurta1.jpg")
      },
      {
        ProductName: "Traousers",

        image: require("../../assets/images/trausers.jpeg")
      }
    ],
    Allproducts: []
  };
  componentDidMount() {
    //console.warn("Get Navigation", this.props.navigation);
    this.props.reduxActions.GetProductapp();
  }
  componentWillReceiveProps(props) {
    if (props.reduxState.products) {
      let Allproducts = [];
      props.reduxState.products.filter(val => {
        // let ware = this.props.navigation.state.params.type;
        // console.warn(val.gender == this.props.navigation.state.params.previousType, val.ware, this.props.navigation.state.params.type)

        if (
          val.gender == this.props.navigation.state.params.previousType &&
          val.ware == this.props.navigation.state.params.type
        ) {
          Allproducts.push(val);
        }
      });
      this.setState({
        Allproducts
      });
    }
  }

  goToDetailScreen = val => {
    this.props.reduxActions.ProductDiscription(this.props.navigation, val);
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <GloabalHeader
            navigation={this.props.navigation}
            BlueDrawerIcon={true}
            //  backgroundColor={this.props.reduxState.theme.backgroundColor}
            // RightCart={true}
            headingText="SELECT ATTIRE"
          />

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
              marginVertical: 20,
              flexWrap: "wrap",
              backgroundColor: "white"
            }}
          >
            {this.state.Allproducts.length ? (
              this.state.Allproducts.map((Item, data) => {
                return (
                  <TouchableOpacity
                    style={{
                      elevation: 0,
                      // height: 100,
                      alignSelf: "center",
                      backgroundColor: "white",
                      alignItems: "center",
                      justifyContent: "center",
                      marginVertical: 2,
                      width: 140,
                      borderRadius: 10,
                      // paddingVertical: 10,
                      overflow: "hidden",
                      shadowColor: "#f3f3f3",
                      marginBottom: 17,
                      height: 220,

                      shadowOffset: {
                        width: 0,
                        height: 4
                      },
                      shadowOpacity: 0.52,
                      shadowRadius: 20,

                      elevation: 4
                    }}
                    onPress={() => this.goToDetailScreen(Item)}
                  >
                    <View
                      style={{ height: "100%", width: "100%", borderWidth: 0 }}
                    >
                      <Image
                        source={{ uri: Item.allImages[0].path }}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode="contain"
                      />
                    </View>

                    <Text
                      style={{
                        borderBottomWidth: 1,
                        height: "25%",
                        borderColor: "red",
                        color: "#eb768d"
                        // paddingVertical: 13
                      }}
                    >
                      {Item.productName}
                    </Text>
                  </TouchableOpacity>
                );
              })
            ) : (
              <Text style={{ color: "red", fontSize: 20 }}>
                {" "}
                No Products found{" "}
              </Text>
            )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
