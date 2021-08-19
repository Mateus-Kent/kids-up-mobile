import React from "react";
import { Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./styles";

type ButtonProps = {
  children: String;
  marginBottom?: number;
} & RectButtonProps

export function ButtonPattern({
  children,
  marginBottom,
  ...rest
}: ButtonProps) {
  return (
    <RectButton
      style={[styles.button, { marginBottom }]}
      {...rest}
    >
      <Text style={styles.text}> {children} </Text>
    </RectButton>
  );
}
