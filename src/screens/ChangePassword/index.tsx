import React, { useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from "react-native";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";

import { styles } from "./styles";

import { ButtonPattern } from "../../components/ButtonPattern";
import { Input } from "../../components/Input";

export function ChangePassword() {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data: any) {}

  return (
    <LinearGradient style={styles.container} colors={["#2D9CDB", "#2F80ED"]}>
      <View style={styles.viewBar}>
        <Text style={styles.title}>Alterar senha</Text>
      </View>

      <View style={styles.ViewContainer}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Text style={styles.label}>Nova senha</Text>
          <Input name={"password"} placeholder="******" marginBottom={30} />

          <Text style={styles.label}>Confirme a nova senha</Text>
          <Input name={"confirm"} placeholder="******" marginBottom={40} />
        </Form>

        <ButtonPattern>Salvar</ButtonPattern>
      </View>
    </LinearGradient>
  );
}
