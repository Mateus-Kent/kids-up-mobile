import React, { useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from "react-native";
import { Form } from "@unform/mobile";

import { styles } from "./styles";

import { PhotoPicker } from "../../components/PhotoPicker";
import { Input } from "../../components/Input";
import { ButtonPattern } from "../../components/ButtonPattern";

import { FormHandles } from "@unform/core";

type SelectProps = {
  navigation: any;
};

export function SelectPhoto({ navigation }: SelectProps) {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data: any) {}

  return (
    <LinearGradient style={styles.container} colors={["#2D9CDB", "#2F80ED"]}>
      <Text style={styles.title}>KIDS UP</Text>

      <View style={styles.ViewContainer}>
        <Text style={styles.caption}>Registrar</Text>

        <Form ref={formRef} onSubmit={handleSubmit} style={styles.formPhoto}>
          <PhotoPicker />
          <Text style={styles.subtitle}>Sua foto</Text>

          <Input
            name={"username"}
            placeholder="nome de usuário"
          />
        </Form>

        <ButtonPattern
          marginBottom={20}
          onPress={() => navigation.navigate("MainScreen")}
        >
          Próximo
        </ButtonPattern>
      </View>
    </LinearGradient>
  );
}
