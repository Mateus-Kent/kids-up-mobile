import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

type AddProps = {
  navigation: any;
};

export function AddPersonButton({ navigation }: AddProps) {
  return (
    <RectButton
      style={styles.add}
      onPress={() => navigation.navigate("AddContact")}
    >
      <Ionicons name="md-person-add-outline" size={24} color="#fff" />
    </RectButton>
  );
}
