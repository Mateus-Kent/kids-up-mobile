import React from "react";
import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";

import { Feather } from "@expo/vector-icons";

export function EditButton() {
  return (
    <RectButton style={styles.container}>
      <Feather name="edit-2" size={24} color="#fff" />
    </RectButton>
  );
}
