import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export function MessageBlue() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>A vitória tomou os remédios!</Text>
      <Text style={styles.hour}>20h45</Text>
    </View>
  );
}
