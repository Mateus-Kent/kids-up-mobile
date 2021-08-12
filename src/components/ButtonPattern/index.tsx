import React from "react";
import { Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";

type ButtonProps = {
  children: String;
  marginBottom?: number;
  navigation: any;
  onPress?: any;
};

export function ButtonPattern({
  children,
  marginBottom,
  navigation,
}: ButtonProps) {
  return (
    <RectButton
      style={[styles.button, { marginBottom }]}
      onPress={() => navigation.navigate("Signin")}
    >
      <Text style={styles.text}> {children} </Text>
    </RectButton>
  );
}
