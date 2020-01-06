import ActionType from "./actionType";
// import { Post, Get } from "../../utils/api-call";
import { actionDispatch } from "../../utils/return-obj";
import * as firebase from "firebase";

// import { ToastError } from "../../containers/serviceType";

export const Login = (loginData, history) => {
  console.log(loginData, "Login");
  return dispatch => {
    // dispatch(actionDispatch(ActionType.Login));
    firebase.auth().signInWithEmailAndPassword(loginData.email, loginData.password)
      .then((success) => {
        dispatch(
          actionDispatch(
            ActionType.Login_SUCCESS,
            localStorage.setItem("Login", true)
          )
        );
        history.push("/admin/dashboard")
        // console.log("success", success)
      })
      .catch(function (error) {
        var errorMessage = error.message;
        console.log(errorMessage)
        actionDispatch(
          ActionType.Login_SUCCESS,
          localStorage.setItem("Login", false)
        )
      });
  }
}

// Add Products

export const AddProduct = (data, history) => {
  console.log(data, "Login");
  return dispatch => {
    // dispatch(actionDispatch(ActionType.Login));
    let db = firebase.firestore();
    db.collection("allProducts").add(data)
      .then(function (docRef) {
        // console.log("Document written with ID: ", docRef.id);
        alert("Successfully Added")
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

  }
}