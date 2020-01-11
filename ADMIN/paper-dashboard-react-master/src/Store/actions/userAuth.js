import ActionType from "./actionType";
// import { Post, Get } from "../../utils/api-call";
import { actionDispatch } from "../../utils/return-obj";
import * as firebase from "firebase";

// import { ToastError } from "../../containers/serviceType";

export const Login = (loginData, history) => {
  console.log(loginData, "Login");
  return dispatch => {
    // dispatch(actionDispatch(ActionType.Login));
    firebase
      .auth()
      .signInWithEmailAndPassword(loginData.email, loginData.password)
      .then(success => {
        dispatch(
          actionDispatch(
            ActionType.Login_SUCCESS,
            localStorage.setItem("Login", true)
          )
        );
        history.push("/admin/dashboard");
        // console.log("success", success)
      })
      .catch(function(error) {
        var errorMessage = error.message;
        console.log(errorMessage);
        actionDispatch(
          ActionType.Login_SUCCESS,
          localStorage.setItem("Login", false)
        );
      });
  };
};

// Add Products

export const AddProduct = (data, history) => {
  console.log(data, "Login");
  return dispatch => {
    let db = firebase.firestore();
    db.collection("allProducts")
      .add(data)
      .then(function(docRef) {
        alert("Successfully Added");
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };
};

export const GetProduct = () => {
  return dispatch => {
    let db = firebase.firestore();
    let allData = [];
    db.collection("allProducts").onSnapshot(snapshot => {
      console.log(snapshot);
      snapshot.forEach(val => {
        allData.push(val.data());
      });
      dispatch({
        type: ActionType.GET_PRODUCTS,
        payload: allData
      });
      console.log(allData);
    });
    // .then(function (doc) {
    //   console.log(doc)
    //   alert("Successfully Got")
    // })
    // .catch(function (error) {
    //   console.error("Error adding document: ", error);
    // });
  };
};
