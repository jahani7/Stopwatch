import { View, Text, StyleSheet, StatusBar } from "react-native";
import React, { useRef, useState, useCallback } from "react";
import Clock from "./clock";
import Lap from "./lap";
import Controller from "./controller";
import { Colors } from "../utilities/styles";
export default function () {
  const [time, setTime] = useState(0);
  const [isRunning, setisRunning] = useState(false);
  const [results, setResults] = useState([]);
  const timer = useRef(null);

  const handleStart = useCallback(() => {
    if (!isRunning) {
      const interval = setInterval(() => {
        setTime((previousTime) => previousTime + 100);
      }, 1000);
      timer.current = interval;
    } else {
      clearInterval(timer.current);
    }
    setisRunning((previousState) => !previousState);
  }, [isRunning]);
  const handleLap = useCallback(() => {
    if (isRunning) {
      setResults((previousState) => [time, ...previousState]);
    }
  }, [isRunning, time]);
  const handleStop = useCallback(() => {
    if (isRunning) {
      setResults([]);
      setTime(0);
      clearInterval(timer.current);
      setisRunning(false);
    }
  }, [isRunning]);
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        hidden={false}
        barStyle={"light-content"}
      />
      <View style={{ flex: 50 }}>
        <Clock time={time} />
      </View>
      <View style={{ flex: 38 }}>
        <Lap results={results} />
      </View>
      <View style={{ flex: 12 }}>
        <Controller
          isRunning={isRunning}
          handleStart={handleStart}
          handleLap={handleLap}
          handleStop={handleStop}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colors1,
    justifyContent: "center",
    alignItems: "center",
  },
});
