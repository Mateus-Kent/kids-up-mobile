import React from "react";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";
import MenuSvg  from "../../assets/Menu.svg";

type ButtonProps = {
  navigation: any;
  handleOnTapRegister?: any;
};


export function ConfigIcon({ navigation }: ButtonProps) {

  return (
    <RectButton style={styles.container} onPress={() => navigation.navigate("Config")}>
     <MenuSvg  />
    </RectButton>
  );
}
