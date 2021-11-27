import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PlayWithGradients from "../../Components/PlayWithGradients/PlayWithGradients";

const Home = () => {
  return (
    <View>
      {/* <Text
        style={{
          fontFamily: "Nunito_700Bold",
          fontSize: 40,
        }}
      >
        Rajat
      </Text>
      <TouchableOpacity
        onPress={() => alert("Hello, world!")}
        style={{ backgroundColor: "blue" }}
      >
        <Text style={{ fontSize: 20, color: "#fff" }}>Pick a photo</Text>
      </TouchableOpacity>

    <Text style={{ fontFamily: "Nunito_900Black_Italic" }}>mn Nunito</Text>*/}
      <PlayWithGradients />
    </View>
  );
};

export default Home;
