import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
const HomeScreen = () => {
  return (
    <View style={styles.main}>
      <View style={tw`pt-5 px-5`}>
        <Image
          source={{ uri: "https://links.papareact.com/gzs" }}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />

        <NavOptions />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: { backgroundColor: "white", flex: 1 },
});
