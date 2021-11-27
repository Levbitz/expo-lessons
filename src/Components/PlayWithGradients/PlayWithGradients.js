import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

const PlayWithGradients = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.container}>
          <Camera style={styles.camera} type={type}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <Text style={styles.text}> Flip </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>

        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(0,0,0,0.8)", "transparent"]}
          style={styles.background}
        />
        <LinearGradient
          // Button Linear Gradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.button}
        >
          <Text style={styles.text}>Sign in with Facebook</Text>
        </LinearGradient>
      </View>
    </View>
  );
};

export default PlayWithGradients;

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
