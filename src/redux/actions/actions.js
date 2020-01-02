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

// export const checkProducts = () => async dispatch => {
//   AsyncStorage.getItem("products").then(products => {
//     var products = JSON.parse(products);
//     if (!products) {
//       AsyncStorage.setItem("products", JSON.stringify(productsArray));
//     }
//   });
// };
// export const getProducts = () => async dispatch => {
//   AsyncStorage.getItem("products").then(products => {
//     var products = JSON.parse(products);
//     if (products) {
//       dispatch({
//         type: actionTypes.SET_PRODUCTS,
//         payload: products
//       });
//     }
//   });
// };

// export const giveReview = productData => async dispatch => {};
// export const addToCart = (
//   navigation,
//   product,
//   cart,
//   quantity
// ) => async dispatch => {
//   let cartProducts = [...cart.products],
//     subTotal = cart.subTotal;

//   if (cartProducts.length > 0) {
//     let notUpdated = false;
//     for (let i = 0; i < cartProducts.length; i++) {
//       notUpdated = true;
//       if (product.itemId === cartProducts[i].itemId) {
//         cartProducts[i] = { ...cartProducts[i], quantity: quantity };
//         notUpdated = false;
//         break;
//       }
//     }
//     if (notUpdated) cartProducts.push({ ...product, quantity: quantity });
//   } else {
//     cartProducts.push({ ...product, quantity: quantity });
//   }
//   subTotal =
//     subTotal +
//     (product.price * quantity -
//       product.discount * ((product.price * quantity) / 100));

//   dispatch({
//     type: actionTypes.SET_CART_PRODUCTS,
//     payload: { cartProducts, subTotal }
//   });

//   navigation.navigate("Home");
// };
// export const deleteFromCart = (cart, productIndex) => async dispatch => {
//   let cartProducts = [...cart.products],
//     subTotal = cart.subTotal;
//   subTotal =
//     subTotal -
//     (cart.products[productIndex].price * cart.products[productIndex].quantity -
//       cart.products[productIndex].discount *
//         ((cart.products[productIndex].price *
//           cart.products[productIndex].quantity) /
//           100));

//   cartProducts.splice(productIndex, 1);

//   dispatch({
//     type: actionTypes.SET_CART_PRODUCTS,
//     payload: { cartProducts, subTotal }
//   });
// };

// export const setShipmentAddress = (
//   navigation,
//   shipmentAddress
// ) => async dispatch => {
//   dispatch({
//     type: actionTypes.SET_SHIPMENT_ADDRESS,
//     payload: shipmentAddress
//   });
//   navigation.navigate("Payment");
// };

// export const setPaymentMethod = (
//   navigation,
//   paymentMethod
// ) => async dispatch => {
//   dispatch({
//     type: actionTypes.SET_PAYMENT_METHOD,
//     payload: paymentMethod
//   });
//   navigation.navigate("Summary");
// };
// export const placeOrder = (navigation, cart) => async dispatch => {
//   dispatch({
//     type: actionTypes.CLEAR_CART
//   });
//   alert("Your Order Is Placed");
//   navigation.navigate("Home");
// };
// export const getSuggestion = (userData, image) => async dispatch => {
//   dispatch({ type: actionTypes.START_LOADING });

//   let data = new FormData();
//   data.append("file", {
//     uri: image.path,
//     name: "khan",
//     type: "image/jpg"
//   });

//   axios
//     .post(server + "api/upload", data, {
//       headers: {
//         "Content-type": "multipart/form-data",
//         Authorization:
//           "bearer " +
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI1ZGY3YjdhMzNlYjQ2MTEzYzgxNjkwNjMiLCJpYXQiOjE1NzY1MjQ0NDJ9.kxXL0-mTUQvQMyUQy70_UNTU1A5xeW3QwGoAt4xAkj8"
//       }
//     })
//     .then(response => {
//       if (response.status == 200) {
//         dispatch({
//           type: actionTypes.SET_AI_DATA,
//           payload: response.data
//         });
//         dispatch({ type: actionTypes.NOT_LOADING });
//       } else {
//         alert("Some Error Occured");
//         dispatch({ type: actionTypes.NOT_LOADING });
//       }
//     })
//     .catch(error => {
//       // console.log("NO", error);
//       dispatch({ type: actionTypes.NOT_LOADING });
//       alert("Some Error Occured");
//     });
// };
