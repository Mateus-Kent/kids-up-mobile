import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

export function ButtonPattern() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#2F80ED", "#6312C9"]}
    >

    </LinearGradient>
  );
}
