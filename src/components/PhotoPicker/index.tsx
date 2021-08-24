import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

import { styles } from "./styles";
import { View } from "react-native";

export function PhotoPicker() {
  return (
    <View style={styles.centralize}> 
    <RectButton
    style={styles.container}>
      <FontAwesome name="camera" size={45} color="#A8A8A8" />
    </RectButton>
    </View>
  );
}
