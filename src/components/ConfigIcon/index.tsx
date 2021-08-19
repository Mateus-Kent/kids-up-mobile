import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import MenuSvg  from "../../assets/Menu.svg"

export function ConfigIcon() {

  return (
    <View style={styles.container}>
     <MenuSvg  />
    </View>
  );
}
