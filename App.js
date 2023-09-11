import { View, Text, Image } from "react-native";
import Home from "./components/Home";
import React, { useEffect, useState } from "react";
import loading from "./assets/stopwatch.png";
export default function App() {
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
  return (
    <View style={{ flex: 1 }}>
      <Home />
    </View>
  );
}
