import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";

import { NotificationBar } from "../../components/Bar/NotificationBar";
import { ButtonPattern } from "../../components/ButtonPattern";

import { useNavigation } from "@react-navigation/native";

export function Choose() {
  const navigation = useNavigation();

  return (
    <LinearGradient style={styles.container} colors={["#2D9CDB", "#2F80ED"]}>
      <NotificationBar />

      <Text style={styles.title}>KIDS UP</Text>

      <Text style={styles.text}>
        Um novo meio de {"\n"}
        comunicação entre pais e{"\n"}
        professores
      </Text>

      <View style={styles.ViewContainer}>
        <Text style={styles.caption}>Registrar</Text>

        <ButtonPattern marginBottom={18} navigation={navigation}>
          Sou responsável
        </ButtonPattern>

        <ButtonPattern navigation={navigation}>Sou funcionário</ButtonPattern>
      </View>
    </LinearGradient>
  );
}
