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
  ActivityIndicator
} from "react-native";

import GloabalHeader from "../components/GlobalHeader";

import LinearGradient from "react-native-linear-gradient";
import Fontisto from "react-native-vector-icons/Fontisto";

import DatePicker from "react-native-datepicker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TimePicker from "react-native-24h-timepicker";

// import TimePicker from "react-time-picker";
// import { Item } from "native-base";
// import { ScrollView } from "react-native-gesture-handler";

export default class Home extends React.Component {
  state = {
    LocalBrand: [
      {
        Category: "Fabric + Sample collection",
        Description:
          "aylor’s signature shape embodies the ultimate all-purpose acoustic.",

        image: require("../../assets/images/images(3).jpg")
      },
      {
        Category: "Share Measurements",
        Description:
          "aylor’s signature shape embodies the ultimate all-purpose acoustic.",

        image: require("../../assets/images/images(3).jpg")
      },
      {
        Category: "Existing Profile",
        Description:
          "aylor’s signature shape embodies the ultimate all-purpose acoustic.",

        image: require("../../assets/images/images(3).jpg")
      }
    ],
    date: "",
    time: ""
    // picker: false
  };
  DateFunction() {
    return (
      <DatePicker
        style={{ width: 200 }}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: "absolute",
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={date => {
          this.setState({ date: date });
        }}
        minDate="2020-01-01"
        maxDate="2020-05-02"

        // ref={picker => {
        //   this.datePicker = picker;
        // }}

        // onOpenModal={true}
        //  disabled={true}
        // dateTouchBody={true}
      />
    );
  }
  onCancel() {
    this.TimePicker.close();
  }

  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <TimePicker
          ref={ref => {
            this.TimePicker = ref;
          }}
          onCancel={() => this.onCancel()}
          onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
          itemStyle={{ color: "red" }}
          maxHour={12}
        />

        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
          <GloabalHeader
            navigation={this.props.navigation}
            BlueDrawerIcon={true}
            //  backgroundColor={this.props.reduxState.theme.backgroundColor}
            // RightCart={true}
            headingText="SPECIAL INSTRUCTIONS"
          />
          <Text
            style={{
              color: "#ea2962",
              fontSize: 18,
              textAlign: "center",
              borderBottomWidth: 1,
              marginTop: 20,
              paddingLeft: 5,
              paddingVertical: 10,
              borderColor: "#ea2962",
              width: "65%",
              alignSelf: "center"
            }}
          >
            Fabric {"&"} Sample collection
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 10,
              textAlign: "center",
              //   borderBottomWidth: 1,
              paddingLeft: 5,
              paddingVertical: 10,
              //   borderColor: "#ea2962",
              width: "65%",
              alignSelf: "center"
            }}
          >
            select date and time for when a rider is comming to the designated
            address to pickup the sizes from the house
          </Text>
          <View
            style={{
              justifyContent: "center",
              paddingVertical: 10,
              marginVertical: 20,
              paddingLeft: 10,
              paddingRight: 10,
              alignItems: "center"
            }}
          >
            <Text
              style={{
                color: "#ea2962",
                fontSize: 15,
                marginBottom: 10,
                textAlign: "center",
                marginLeft: 10
                // textAlign: "center"
              }}
            >
              select pick-up Date
            </Text>
            {/* <TouchableOpacity
              style={{
                position: "absolute",
                right: 15,
                width: 45,
                height: 45,
                borderRadius: 45,
                backgroundColor: "#ea2962",
                alignItems: "center",
                justifyContent: "center"
              }}
              //   onPress={() => this.DateFunction()}
              onPress={() => this.setState({ picker: !this.state.picker })}
            >
              <Fontisto name={"date"} size={20} color={"white"} />
            </TouchableOpacity>
         */}
            {this.DateFunction()}
          </View>
          {/* 
/// Time */}
          <Text
            style={{
              color: "#ea2962",
              fontSize: 15,
              // marginBottom: 10,
              textAlign: "center",
              marginLeft: 10
              // textAlign: "center"
            }}
          >
            select Time
          </Text>
          <View
            style={{
              justifyContent: "center",
              // paddingVertical: 10,
              //  marginVertical: 20,
              paddingLeft: 10,
              paddingRight: 10,
              alignItems: "center",
              flexDirection: "row",

              marginRight: 10
            }}
          >
            <TouchableOpacity
              style={{
                //  position: "absolute",
                //  right: 15,
                width: 45,
                height: 45,
                borderRadius: 45,
                //  backgroundColor: "#ea2962",
                alignItems: "center",
                justifyContent: "center"
              }}
              onPress={() => this.TimePicker.open()}
            >
              <Fontisto name={"date"} size={20} color={"red"} />
            </TouchableOpacity>
            <Text
              style={{
                color: "#DCD9D9",
                textAlignVertical: "center",
                fontSize: 18,
                width: 160,
                height: 40,
                borderWidth: 1,
                textAlign: "center",
                borderColor: "#959494"
              }}
              // placeholder="ssss"
            >
              {this.state.time}
            </Text>
          </View>

          <Text
            style={{
              color: "#ea2962",
              fontSize: 12,
              marginTop: 20,
              width: "85%",
              alignSelf: "center",
              textAlign: "center"
            }}
          >
            Pickup and delivery servie from 11:Am to 8:PM
          </Text>
          <Text
            style={{
              color: "#ea2962",
              fontSize: 12,
              marginTop: 10,
              width: "85%",
              alignSelf: "center",
              textAlign: "center"
            }}
          >
            Call centre timing from 11:Am to 8:PM
          </Text>
          <Text
            style={{
              color: "#ea2962",
              fontSize: 12,
              marginTop: 10,
              width: "85%",
              alignSelf: "center",
              textAlign: "center"
            }}
          >
            service not operational on sundays
          </Text>
          <TouchableOpacity
            style={{
              width: "80%",
              alignSelf: "center",
              marginTop: 50
            }}
            onPress={() => {
              if (this.state.date === "") {
                alert("  select Date");
              } else if (this.state.time === "") alert("select Time");
              else {
                this.props.navigation.navigate("CheckOut", {
                   index: this.props.navigation.state.params.index,
                   data: {
                      date: this.state.date,
                      time: this.state.time    
                   }
                });
              }
            }}
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
        </ScrollView>
      </View>
    );
  }
}
