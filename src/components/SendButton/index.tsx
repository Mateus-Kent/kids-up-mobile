import React from "react";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";

import SendSvg from "../../assets/Send.svg";

export function SendButton() {
  return (
    <RectButton style={styles.add}>
       <SendSvg />
    </RectButton>
  );
}
