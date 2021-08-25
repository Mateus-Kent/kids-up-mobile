import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

export function AddPersonButton() {
  return (
    <RectButton style={styles.add}>
      <Ionicons name="md-person-add-outline" size={24} color="#fff" />
    </RectButton>
  );
}
