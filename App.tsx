import { StyleSheet, LogBox } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./src/navigation/HomeStack";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import RootNavigation from "./src/navigation/RootNavigation";

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
