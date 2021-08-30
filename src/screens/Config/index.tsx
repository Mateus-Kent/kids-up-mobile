import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

import { ButtonPattern } from "../../components/ButtonPattern";
import { SupportButton } from "../../components/SupportButton";

type ConfigProps = {
  navigation: any;
};

export function Config({ navigation }: ConfigProps) {
  return (
    <LinearGradient style={styles.container} colors={["#2D9CDB", "#2F80ED"]}>
      <AntDesign
        name="left"
        size={24}
        color="#fff"
        style={styles.icon}
        onPress={() => navigation.navigate("MainScreen")}
      />

      <View style={styles.viewBar}>
        <Text style={styles.title}>Configurações</Text>
      </View>

      <View style={styles.ViewContainer}>
        <ButtonPattern
          marginBottom={18}
          onPress={() => navigation.navigate("EditProfile")}
        >
          Alterar perfil
        </ButtonPattern>

        <ButtonPattern
          marginBottom={100}
          onPress={() => navigation.navigate("ChangePassword")}
        >
          Alterar senha
        </ButtonPattern>

        <SupportButton marginBottom={18}>Suporte</SupportButton>

        <Text style={styles.textGray}>KIDS UP</Text>
        <Text style={styles.textGray}>Versão 0.0.1a</Text>
      </View>
    </LinearGradient>
  );
}
