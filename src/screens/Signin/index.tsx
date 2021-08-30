import React, { useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import { Form } from "@unform/mobile";
import { AntDesign } from "@expo/vector-icons";
import { FormHandles } from "@unform/core";

import { styles } from "./styles";

import { ButtonPattern } from "../../components/ButtonPattern";
import { Input } from "../../components/Input";

type SigninProps = {
  navigation: any;
};

export function Signin({ navigation }: SigninProps) {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data: any) {}

  return (
    <KeyboardAvoidingView style={styles.keyBoard}>
      <ScrollView>
        <LinearGradient
          style={styles.container}
          colors={["#2D9CDB", "#2F80ED"]}
        >
          <AntDesign
            name="left"
            size={24}
            color="#fff"
            style={styles.icon}
            onPress={() => navigation.navigate("Become")}
          />

          <Text style={styles.title}>KIDS UP</Text>

          <View style={styles.ViewContainer}>
            <Text style={styles.caption}>Registrar </Text>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <Text style={styles.label}>E-mail</Text>
              <Input
                name={"email"}
                placeholder="email@provedor.com"
                marginBottom={20}
              />

              <Text style={styles.label}>Telefone</Text>
              <Input
                name={"phone"}
                placeholder="(00) 900000-0000"
                marginBottom={20}
              />

              <Text style={styles.label}>Senha</Text>
              <Input
                name={"password"}
                placeholder="*******"
                marginBottom={20}
              />

              <Text style={styles.label}>Confirme sua senha</Text>
              <Input name={"confirm"} placeholder="*******" marginBottom={34} />
            </Form>

            <ButtonPattern
              marginBottom={20}
              onPress={() => navigation.navigate("SelectPhoto")}
            >
              Próximo
            </ButtonPattern>

            <Text>
              Já possui uma conta?{" "}
              <Text
                style={styles.LinkText}
                onPress={() => navigation.navigate("Login")}
              >
                Entre
              </Text>{" "}
            </Text>
          </View>
        </LinearGradient>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
