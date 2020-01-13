import * as actionTypes from "./types";
import AsyncStorage from "@react-native-community/async-storage";
import { NavigationActions, StackActions } from "react-navigation";
import { darkTheme, lightTheme } from "../../constants/theme";
// import { productsArray } from "../../constants/productsArray";
// import server from "../../constants/server";
import axios from "axios";

import firebase from "react-native-firebase";

export const toggleTheme = ThemeDark => async dispatch => {
  if (ThemeDark)
    AsyncStorage.setItem("theme", JSON.stringify(darkTheme)).then(
      asyncResponse => {
        dispatch({
          type: actionTypes.SET_THEME,
          payload: darkTheme
        });
      }
    );
  else
    AsyncStorage.setItem("theme", JSON.stringify(lightTheme)).then(
      asyncResponse => {
        dispatch({
          type: actionTypes.SET_THEME,
          payload: lightTheme
        });
      }
    );
};

export const checkAsyncTheme = () => async dispatch => {
  AsyncStorage.getItem("theme").then(theme => {
    // console.log(theme);
    var theme = JSON.parse(theme);
    if (theme) {
      dispatch({
        type: actionTypes.SET_THEME,
        payload: theme
      });
    } else
      dispatch({
        type: actionTypes.SET_THEME,
        payload: lightTheme
      });
  });
};

export const signup = (navigation, userData) => async dispatch => {
  dispatch({ type: actionTypes.START_LOADING });
  firebase
    .auth()
    .createUserWithEmailAndPassword(userData.emailAddress, userData.password)
    .then(res => {
      console.log("SignUp Response", res);
      const ref = firebase
        .firestore()
        .collection("users")
        .doc(res.user.uid);
      ref.set({
        password: userData.password,
        emailAddress: userData.emailAddress,
        fullName: userData.fullName
      });

      dispatch({
        type: actionTypes.SET_USER_DATA,
        payload: { ...userData, uid: res.user.uid }
      });

      dispatch({ type: actionTypes.NOT_LOADING });

      navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: "Home"
            })
          ]
        })
      );
    })
    .catch(err => {
      dispatch({ type: actionTypes.NOT_LOADING });
      alert(err.message);
    });
};

export const login = (navigation, userData) => async dispatch => {
  dispatch({ type: actionTypes.START_LOADING });
  firebase
    .auth()
    .signInWithEmailAndPassword(userData.emailAddress, userData.password)
    .then(res => {
      console.log("SignIn Response", res);
      const loginRef = firebase
        .firestore()
        .collection("users")
        .doc(res.user.uid);

      loginRef
        .get()
        .then(doc => {
          if (doc.exists) {
            dispatch({
              type: actionTypes.SET_USER_DATA,
              payload: { ...doc.data(), uid: res.user.uid }
            });

            dispatch({ type: actionTypes.NOT_LOADING });

            navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({
                    routeName: "Home"
                  })
                ]
              })
            );
          }
        })
        .catch(error => {
          dispatch({ type: actionTypes.NOT_LOADING });
          console.log("Error getting document:", error.message);
          alert(error.message);
        });
    })
    .catch(err => {
      dispatch({ type: actionTypes.NOT_LOADING });
      // console.log(err.message);
      alert(err.message);
    });
};

export const logout = navigation => async dispatch => {
  firebase
    .auth()
    .signOut()
    .then(res => {
      // console.log(res);
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: "Login"
          })
        ]
      });
      navigation.dispatch(resetAction);
    })
    .catch(err => {
      alert(err.message);
    });
};

export const checkUser = navigation => async dispatch => {
  dispatch({ type: actionTypes.START_LOADING });
  firebase.auth().onAuthStateChanged(async res => {
    console.log(res);
    if (res) {
      const loginRef = firebase
        .firestore()
        .collection("users")
        .doc(res._user.uid);

      loginRef
        .get()
        .then(doc => {
          console.log(doc);
          if (doc.exists) {
            dispatch({
              type: actionTypes.SET_USER_DATA,
              payload: { ...doc.data(), uid: res._user.uid }
            });

            const resetAction = StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({
                  routeName: "Home"
                })
              ]
            });
            navigation.dispatch(resetAction);

            dispatch({ type: actionTypes.NOT_LOADING });
          } else {
            dispatch({ type: actionTypes.NOT_LOADING });
          }
        })
        .catch(error => {
          dispatch({ type: actionTypes.NOT_LOADING });
          console.log("Error getting document:", error.message);
          alert(error.message);
        });
    } else {
      dispatch({ type: actionTypes.NOT_LOADING });
    }
  });
};

export const GetProductapp = navigation => async dispatch => {
  //console.warn("helloo1");
  dispatch({ type: actionTypes.START_LOADING });

  let obj = firebase.firestore();
  obj.collection("allProducts").onSnapshot(objdata => {
    let AllData = [];
    //console.warn(data)
    objdata.forEach(val => {
      AllData.push(val.data());
    });
    // console.warn("ALL DATA ",AllData)
    dispatch({
      type: actionTypes.GET_PRODUCT,
      payload: AllData
    });
  });
};
export const ProductDiscription = (
  navigation,
  desctiption
) => async dispatch => {
  navigation.navigate(
    "PersonalizedScrubSizes"
  );
  dispatch({ type: actionTypes.PRODUCT_DISCRIPTIONS, payload: desctiption });
};

export const emptyMeasurement = (
) => async dispatch => {
  dispatch({ type: actionTypes.EMPTY_MEASUREMENT });
 
};

export const AddOrder = (data, navigation) =>
  async dispatch => {
    let db = firebase.firestore();
    db.collection("Order")
      .add({ ...data, status: "pending" })
      .then(function (docRef) {
        alert("Order Success"); 
        navigation.navigate("ConfirmedOrder")
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  export const GetOrder = navigation => async dispatch => {
    //console.warn("helloo1");
    dispatch({ type: actionTypes.START_LOADING });
  
    let obj = firebase.firestore();
    obj.collection("Order").onSnapshot(objdata => {
      let AllData = [];
      //console.warn(data)
      objdata.forEach(val => {
        AllData.push(val.data());
      });
      // console.warn("ALL DATA ",AllData)
      dispatch({
        type: actionTypes.GET_ORDER,
        payload: AllData
      });
    });
  };


///  ye error q derah hy solve karo?
// ub thek haina hn
