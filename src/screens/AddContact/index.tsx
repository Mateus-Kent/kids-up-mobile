import React, { useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from "react-native";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

import { ButtonPattern } from "../../components/ButtonPattern";
import { Input } from "../../components/Input";

type AddContactProps = {
  navigation: any;
};

export function AddContact({ navigation }: AddContactProps) {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data: any) {}

  return (
    <LinearGradient style={styles.container} colors={["#2D9CDB", "#2F80ED"]}>
      <AntDesign
        name="left"
        size={24}
        color="#fff"
        style={styles.icon}
        onPress={() => navigation.navigate("Config")}
      />
      <View style={styles.viewBar}>
        <Text style={styles.title}>Adicionar um contato</Text>
      </View>

      <View style={styles.ViewContainer}>
        <Text style={styles.blackText}>Coloque o email do contato</Text>

        <Text style={styles.textOpacity}>
        {"     "}Adicione o novo contato{"\n"}
          digitando o email dele abaixo
        </Text>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name={"password"}
            placeholder="email@provedor.com"
            marginBottom={70}
          />
        </Form>

        <ButtonPattern>Adicionar contato</ButtonPattern>
      </View>
    </LinearGradient>
  );
}
