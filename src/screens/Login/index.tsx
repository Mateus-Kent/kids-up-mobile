import React, { useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import { Form } from "@unform/mobile";
import { AntDesign } from "@expo/vector-icons";
import { FormHandles } from "@unform/core";

import { styles } from "./styles";

import { ButtonPattern } from "../../components/ButtonPattern";
import { Input } from "../../components/Input";

type LoginProps = {
  navigation: any;
};

export function Login({ navigation }: LoginProps) {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data: any) {}

  return (
    <KeyboardAvoidingView style={styles.keyBoard}>
      <LinearGradient style={styles.container} colors={["#2D9CDB", "#2F80ED"]}>
        <AntDesign name="left" size={24} color="#fff" style={styles.icon} />
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scroll2}
        >
          <View style={styles.viewTitle}>
            <Text style={styles.title}>KIDS UP</Text>
          </View>

          <View style={styles.ViewContainer}>
            <Text style={styles.caption}>Login </Text>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <Text style={styles.label}>E-mail</Text>
              <Input
                name={"email"}
                placeholder="email@provedor.com"
                marginBottom={20}
              />

              <Text style={styles.label}>Senha</Text>
              <Input
                name={"password"}
                placeholder="*******"
                marginBottom={20}
              />
            </Form>

            <ButtonPattern onPress={() => navigation.navigate("MainScreen")}>
              Entrar
            </ButtonPattern>

            <Text>
              Você não possui uma conta?{" "}
              <Text style={styles.LinkText}>Registre-se</Text>{" "}
            </Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}
