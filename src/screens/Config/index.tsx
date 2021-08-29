import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from "react-native";

import { styles } from "./styles";

import { ButtonPattern } from "../../components/ButtonPattern";
import { WhiteButton } from "../../components/WhiteButton";

type ConfigProps = {
  navigation: any
  }

export function Config({ navigation }: ConfigProps) {
  return (
    <LinearGradient style={styles.container} colors={["#2D9CDB", "#2F80ED"]}>
      <View style={styles.viewBar}>
        <Text style={styles.title}>Configurações</Text>
      </View>

      <View style={styles.ViewContainer}>
        <ButtonPattern marginBottom={18} onPress={() => navigation.navigate('EditProfile')} >Alterar perfil</ButtonPattern>

        <ButtonPattern marginBottom={100} onPress={() => navigation.navigate('ChangePassword')}>Alterar senha</ButtonPattern>

        <WhiteButton marginBottom={18}>Suporte</WhiteButton>

        <Text style={styles.textGray}>KIDS UP</Text>
        <Text style={styles.textGray}>Versão 0.0.1a</Text>
      </View>
    </LinearGradient>
  );
}
