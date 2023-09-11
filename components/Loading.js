import { View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import loading from "../assets/stopwatch.png";

export default function Loading() {
  const [isReady, setisReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setisReady(true);
    }, 2000);
  }, []);
  if (!isReady) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1f2633",
        }}
      >
        <Image source={loading} style={{ width: 200, height: 200 }} />
      </View>
    );
  }
}
