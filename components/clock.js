import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Colors } from "../utilities/styles";

const { height, width } = Dimensions.get("screen");

export default function Clock({ time }) {
  const padTwo = (number) => (number <= 9 ? `0${number}` : number); // Fixed the typo in the function name and the template string.

  const displayTime = (centiseconds) => {
    let minutes = 0;
    let seconds = 0;

    if (centiseconds < 0) {
      centiseconds = 0;
    }
    if (centiseconds < 100) {
      return {
        minutes: "00",
        seconds: "00",
        centiseconds: padTwo(centiseconds), // Return centiseconds as a padded string.
      };
    }
    let remainCentiseconds = centiseconds % 100;
    seconds = (centiseconds - remainCentiseconds) / 100;

    if (seconds < 60) {
      return {
        minutes: "00",
        seconds: padTwo(seconds), // Pad seconds to have two digits.
        centiseconds: padTwo(remainCentiseconds), // Pad centiseconds.
      };
    }
    let remainSeconds = seconds % 60;
    minutes = (seconds - remainSeconds) / 60;

    return {
      minutes: padTwo(minutes), // Pad minutes.
      seconds: padTwo(remainSeconds), // Pad seconds.
      centiseconds: padTwo(remainCentiseconds), // Pad centiseconds.
    };
  };

  const formattedTime = displayTime(time);

  return (
    <View style={styles.container}>
      <View style={styles.roundContainer}>
        <Text style={{ color: Colors.colors5 }}>STOPWATCH</Text>
        <View style={styles.counterContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.timetext}>{formattedTime.minutes}</Text>
            <Text style={{ color: Colors.colors5 }}>MM</Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.timetext}>{formattedTime.seconds}</Text>
            <Text style={{ color: Colors.colors5 }}>ss</Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.timetext}>{formattedTime.centiseconds}</Text>
            <Text style={{ color: Colors.colors5 }}>CS</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  roundContainer: {
    backgroundColor: Colors.colors4,
    height: width - 100,
    width: width - 100,
    alignItems: "center",
    borderRadius: (width - 100) / 2, // Use radius half of the width for a perfect circle.
    justifyContent: "space-around",
  },
  counterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  timetext: {
    fontSize: 30,
    color: Colors.colors5,
  },
  innerContainer: {
    alignItems: "center",
  },
});
