import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "../utilities/styles";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const { height, width } = Dimensions.get("screen");

export default function Controller({
  isRunning,
  handleStart,
  handleLap,
  handleStop,
}) {
  return (
    <View style={styles.Conatainer}>
      <TouchableOpacity
        onPress={handleStop}
        style={[styles.buttonContainer, { backgroundColor: Colors.colors4 }]}
      >
        <FontAwesome name="stop" size={14} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleStart}
        style={[styles.buttonContainer, { backgroundColor: Colors.colors2 }]}
      >
        <FontAwesome
          name={isRunning ? "pause" : "play"}
          size={14}
          color={Colors.colors3}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleLap}
        style={[styles.buttonContainer, { backgroundColor: Colors.colors4 }]}
      >
        <Entypo name="controller-next" size={14} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Conatainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: width,
  },
  buttonContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
