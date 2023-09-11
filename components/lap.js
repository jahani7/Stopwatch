import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { Colors } from "../utilities/styles";

export default function Lap({ results }) {
  const padoTwo = (numbers) => (numbers <= 9 ? `0${numbers} ` : numbers);
  const dispalyTime = (centiseconds) => {
    let minutes = 0;
    let seconds = 0;

    if (centiseconds < 0) {
      centiseconds = 0;
    }

    let remaincentiseconds = centiseconds % 100;
    seconds = (centiseconds - remaincentiseconds) / 100;

    let remainSeconds = seconds % 60;
    seconds = (seconds - remainSeconds) / 60;

    return `${padoTwo(minutes)}: ${padoTwo(remainSeconds)} :  ${padoTwo(
      remaincentiseconds
    )}`;
  };

  return (
    <View style={styles.Conatainer}>
      <View style={styles.titleContainer}>
        <Text style={{ color: Colors.colors5 }}>LAP TIME</Text>
        <Text style={{ color: Colors.colors5 }}>LAP NO</Text>
      </View>
      <FlatList
        data={results}
        renderItem={(item) => {
          console.log(item);
          return (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                width: "90%",
                marginVertical: 10,
              }}
            >
              <Text style={{ color: "white" }}>{dispalyTime(item.item)}</Text>
              <Text style={{ color: "white" }}>
                {results.length - item.index}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  Conatainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: Colors.colors4,
    paddingVertical: 10,
  },
});
