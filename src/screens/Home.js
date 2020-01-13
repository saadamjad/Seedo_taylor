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

import { bindActionCreators } from "redux";
import * as reduxActions from "../redux/actions/actions";

import { connect } from "react-redux";
import Slideshow from "react-native-image-slider-show";

class Home extends React.Component {
  state = {
    search: "",
    Jackets: true,
    Pents: false,
    Shirts: false,
    Shoes: false,
    Winter: false,

    position: 1,
    interval: null,
    dataSource: [
      {
        title: "Title 1",
        caption: "Caption 1",
        url:
          "http://anokhidukan.com/wp-content/uploads/2018/08/7C01665D-C694-4285-9F84-41C97853023B.jpeg"
      },
      {
        title: "Title 2",
        caption: "Caption 2",
        url:
          "https://www.gossipmint.com/wp-content/uploads/2018/02/Women-Clothing-Brand-Pakistan-723x469.jpg"
      },
      {
        title: "Title 3",
        caption: "Caption 3",
        url:
          "https://pkvogue.com/wp-content/uploads/2019/01/Colors-Men-Shalwar-Kameez-Design-2019-11.jpg"
      },
      {
        title: "Title 4",
        caption: "Caption 4",
        url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-bQ96QtsY-FMoO0TbXQXSRLgcl_kKZlF94EeiDeSBWvn2QbOH9w&s"
      },
      {
        title: "Title 5",
        caption: "Caption 5",
        url:
          "https://www.merapk.com/wp-content/uploads/2019/03/luxury-pret-272x231.jpg"
      }
    ],

    LocalBrand: [
      {
        ProductName: "Male",

        image: require("../../assets/images/images(3).jpg")
      },
      {
        ProductName: "Female",

        image: require("../../assets/images/femailll.jpg")
      }
    ]
  };

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.dataSource.length
              ? 0
              : this.state.position + 1
        });
      }, 3000)
    });
  }
  componentDidMount() {
    // console.warn("hello",this.props.navigation)
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <GloabalHeader
          navigation={this.props.navigation}
          BlueDrawerIcon={true}
          //  backgroundColor={this.props.reduxState.theme.backgroundColor}
          // RightCart={true}
          headingText="Make Your selection"
        />

        <Slideshow
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })}
        />
        {/* </View> */}

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
          {this.state.LocalBrand.map((Item, data) => {
            return (
              <TouchableOpacity
                style={{
                  elevation: 0,
                  // height: 100,
                  alignSelf: "center",
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: 30,
                  width: 150,
                  borderRadius: 10,
                  paddingVertical: 10,
                  overflow: "hidden",
                  shadowColor: "#f3f3f3",
                  marginBottom: 17,
                  height: 170,

                  shadowOffset: {
                    width: 0,
                    height: 4
                  },
                  shadowOpacity: 0.52,
                  shadowRadius: 20,

                  elevation: 4
                }}
                onPress={() =>
                  this.props.navigation.navigate("SelectCategory", {
                    type: Item.ProductName
                  })
                }
              >
                <View style={{ height: "80%", width: "100%", borderWidth: 0 }}>
                  <Image
                    source={(source = Item.image)}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="contain"
                  />
                </View>

                <Text
                  style={{
                    borderBottomWidth: 1,
                    paddingVertical: 5,
                    height: "20%",
                    borderColor: "red",
                    color: "#eb768d"
                  }}
                >
                  {Item.ProductName}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
