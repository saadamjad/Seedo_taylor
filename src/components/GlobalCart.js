import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
// import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Entypo from "react-native-vector-icons/Entypo";
import StarRating from "react-native-star-rating";
import CornerLabel from "../components/react-native-smart-corner-label";

export default class GlobalCart extends React.Component {
  render() {
    return (
      // All PROPS
      //         //width ,height ,marginTop ,alignSelf,backgroundColor,borderRadius,marginBottom ,textColor ,fontSize,fontWeight ,CartImage

      //         <GlobalCart
      //         ProductName="leather jackets"
      //         ProductDetails="custom "
      //         fullStarColor="#ffbf00"
      //         emptyStarColor="#ffbf00"
      //   starsvisible={true}
      //        starSize={16}
      //    StarsQuantity={6}
      //          giveRating={4}
      //          Reviews={"240 Reviews"}
      //          marginRight:10

      //         />
      <TouchableOpacity
        style={{
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : "white",
          elevation: this.props.elevation ? this.props.elevation : 0,
          height: this.props.height ? this.props.height : 220,
          alignSelf: this.props.alignSelf ? this.props.alignSelf : "center",
          width: this.props.width ? this.props.width : 180,
          borderRadius: this.props.borderRadius ? this.props.borderRadius : 10,
          overflow: "hidden",
          shadowColor: "#f3f3f3",
          marginRight: this.props.marginRight ? this.props.marginRight : 0,
          shadowOffset: {
            width: 0,
            height: 4
          },
          shadowOpacity: 0.52,
          shadowRadius: 20,

          elevation: 5,
          marginVertical: 16,
          marginHorizontal: 0
        }}
        onPress={() =>
          this.props.submit
            ? this.props.submit()
            : this.props.navigation.navigate(this.props.navigateTo)
        }
      >
        <ImageBackground
          style={{ width: "100%", height: "75%" }}
          source={{ uri: this.props.data.images[0] }}
          resizeMode="cover"
        >
          <View
            style={{
              position: "absolute",
              bottom: 5,
              width: "100%",
              paddingLeft: 10
            }}
          >
            <StarRating
              maxStars={this.props.StarsQuantity}
              rating={this.props.rating}
              // fullStarColor="#ffbf00"
              fullStarColor={this.props.fullStarColor}
              emptyStarColor={this.props.emptyStarColor}
              // emptyStarColor="#ffbf00"
              starSize={14}
              containerStyle={{ alignSelf: "flex-start", marginRight: 10 }}
            />
            <Text style={{ color: "black", fontSize: 10 }}>
              {" "}
              {this.props.data.reviews.length} Reviews
            </Text>

            <Text
              style={{
                position: "absolute",
                right: 20,
                textDecorationLine: "line-through"
              }}
            >
              ${this.props.data.price}
            </Text>
            <View
              style={{
                top: 25,
                position: "absolute",
                right: 10,
                height: 30,
                paddingHorizontal: 10,
                // width: 50,
                borderRadius: 13,
                backgroundColor: "#eb4848",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text
                style={{ color: "white", fontSize: 17, fontWeight: "bold" }}
              >
                $
                {this.props.data.price -
                  this.props.data.discount * (this.props.data.price / 100)}
              </Text>
            </View>
          </View>
        </ImageBackground>

        <View
          style={{
            width: "100%",
            flex: 1,
            // flexDirection: "row",
            justifyContent: "flex-end"
            // height: "100%"
          }}
        >
          <View style={{ width: "70%", paddingLeft: 15 }}>
            <Text style={{ color: "black" }}>{this.props.data.name} </Text>
            {/* <Text style={{ color: "black" }}>{this.props.itemDetails} </Text> */}
          </View>

          {/* <View style={{borderWidth:1, width:'30%',alignItems:"center",justifyContent:"center",backgroundColor:'transparent'}}> */}
          {/* <Entypo
            name={"shopping-cart"}
            size={20}
            color="#6fc8ff"
            style={{ margin: 10 }}
          /> */}
          {/* </View> */}
        </View>
        {this.props.data.discount !== 0 ? (
          <CornerLabel
            cornerRadius={54}
            alignment={"right"}
            style={{ backgroundColor: "#eb4848", height: 24 }}
            textStyle={{ color: "#fff", fontSize: 8 }}
          >
            {this.props.data.discount} % off
          </CornerLabel>
        ) : null}
      </TouchableOpacity>
    );
  }
}
