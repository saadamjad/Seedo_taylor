import React from "react";

import StackNavigator from "./src/screens/StackNavigator";
import SplashScreen from "./src/screens/SplashScreen";
import store from "./src/redux/store";

import { Provider } from "react-redux";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    );
  }
}
