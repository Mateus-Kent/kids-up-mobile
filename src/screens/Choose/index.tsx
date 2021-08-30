import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

import { ButtonPattern } from "../../components/ButtonPattern";

type ChooseProps = {
  navigation: any;
};

export function Choose({ navigation }: ChooseProps) {
  return (
    <LinearGradient style={styles.container} colors={["#2D9CDB", "#2F80ED"]}>
      <AntDesign name="left" size={24} color="#fff" style={styles.icon} />

      <Text style={styles.title}>KIDS UP</Text>

      <Text style={styles.text}>
        Um novo meio de {"\n"}
        comunicação entre pais e{"\n"}
        professores
      </Text>

      <View style={styles.ViewContainer}>
        <Text style={styles.caption}>Registrar</Text>

        <ButtonPattern
          marginBottom={18}
          onPress={() => navigation.navigate("Signin")}
        >
          Sou responsável
        </ButtonPattern>

        <ButtonPattern onPress={() => navigation.navigate("Signin")}>
          Sou funcionário
        </ButtonPattern>
      </View>
    </LinearGradient>
  );
}
