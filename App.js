import { StatusBar } from "expo-status-bar";

import React from "react";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import {
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_900Black_Italic,
} from "@expo-google-fonts/nunito";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";

import Home from "./src/Screens/Home/Home";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontFamily: "Inter_900Black", fontSize: 40 }}>
          Inter Black
        </Text>
        <Text
          style={{
            fontFamily: "Nunito_700Bold",
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          Rajat
        </Text>
        <Text style={styles.paragraph}>mn Nunito</Text>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
  },

  paragraph: {
    fontFamily: "Nunito_900Black_Italic",
    fontWeight: "800",
  },
});
