import React from "react";
import { Linking, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { Octicons } from "@expo/vector-icons";

type ButtonProps = {
  children: String;
  marginBottom?: number;
};

export function SupportButton({ children, marginBottom, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => Linking.openURL('mailto:contato@kidsup.com.br?subject=Email para suporte&body=')}
      style={[styles.button, { marginBottom }]}
      {...rest}
    >
      <Octicons name="info" style={[styles.info]} size={24} color="#2F80ED" />

      <Text style={styles.text}> {children} </Text>
    </TouchableOpacity>
  );
}
