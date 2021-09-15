import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export function MessageGray() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Olá, com está a Vitória?</Text>
      <Text style={styles.hour}>20h45</Text>
    </View>
  );
}
