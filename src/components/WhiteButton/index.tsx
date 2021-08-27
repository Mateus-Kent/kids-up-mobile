import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { Octicons } from "@expo/vector-icons";

type ButtonProps = {
  children: String;
  marginBottom?: number;
};

export function WhiteButton({ children, marginBottom, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity  activeOpacity={0.5} style={[styles.button, { marginBottom }]} {...rest}>
      <Octicons name="info" size={24} color="#2F80ED" />

      <Text style={styles.text}> {children} </Text>
    </TouchableOpacity>
  );
}
