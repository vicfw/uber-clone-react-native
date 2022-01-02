import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import tw from "tailwind-react-native-classnames";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});
