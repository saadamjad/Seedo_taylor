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

import GlobalCart from "../components/GlobalCart";

export default class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      jacketsArray: [
        {
          ProductName: "leather jackets",
          ProductDetails: "custom ",
          fullStarColor: "#ffbf00",
          emptyStarColor: "#ffbf00",
          starsvisible: true,
          starSize: 14,
          StarsQuantity: 5,
          giveRating: 4,
          Reviews: "240 Reviews",
          image: require("../../assets/images/dummyimg(11).png")
        },
        {
          ProductName: "leather jackets",
          ProductDetails: "custom ",
          fullStarColor: "#ffbf00",
          emptyStarColor: "#ffbf00",
          starsvisible: true,
          starSize: 14,
          StarsQuantity: 5,
          giveRating: 4,
          Reviews: "240 Reviews",
          image: require("../../assets/images/dummyimg(6).png")
        },
  
        {
          ProductName: "leather jackets",
          ProductDetails: "custom ",
          fullStarColor: "#ffbf00",
          emptyStarColor: "#ffbf00",
          starsvisible: true,
          starSize: 14,
          StarsQuantity: 5,
          giveRating: 4,
          Reviews: "240 Reviews",
          image: require("../../assets/images/dummyimg(4).png")
        },
  
        {
          ProductName: "leather jackets",
          ProductDetails: "custom ",
          fullStarColor: "#ffbf00",
          emptyStarColor: "#ffbf00",
          starsvisible: true,
          starSize: 14,
          StarsQuantity: 5,
          giveRating: 4,
          Reviews: "240 Reviews",
          image: require("../../assets/images/images.jpg")
        },
        {
          ProductName: "leather jackets",
          ProductDetails: "custom ",
          fullStarColor: "#ffbf00",
          emptyStarColor: "#ffbf00",
          starsvisible: true,
          starSize: 14,
          StarsQuantity: 5,
          giveRating: 4,
          Reviews: "240 Reviews",
          image: require("../../assets/images/dummyimg(9).png")
        },
  
        {
          ProductName: "leather jackets",
          ProductDetails: "custom ",
          fullStarColor: "#ffbf00",
          emptyStarColor: "#ffbf00",
          starsvisible: true,
          starSize: 14,
          StarsQuantity: 5,
          giveRating: 4,
          Reviews: "240 Reviews",
          image: require("../../assets/images/clothes.png")
        }
      ]
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <ScrollView style={{width:'100%',backgroundColor:'red',height:200}}  > */}
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            flex: 1
          }}
        >
          {this.state.jacketsArray.map((item, index) => {
            return (
              <GlobalCart
                key={index}
                image={item.image}
                ProductName={item.ProductName}
                ProductDetails={item.ProductDetails}
                fullStarColor={item.fullStarColor}
                emptyStarColor={item.emptyStarColor}
                width={"47%"}
                starsvisible={item.starsvisible}
                starSize={item.starSize}
                StarsQuantity={item.StarsQuantity}
                giveRating={item.giveRating}
                Reviews={"240 Reviews"}
                marginRight={10}
                submit={() => this.props.navigation.navigate("StoreProductDetails")}
              
              />
            );
          })}
        </View>

        {/* </ScrollView> */}
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
