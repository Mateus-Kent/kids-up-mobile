import React, { useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image } from "react-native";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

import defaultProfile from "../../assets/defaultProfile.png";

import { ButtonPattern } from "../../components/ButtonPattern";
import { Input } from "../../components/Input";
import { EditButton } from "../../components/EditButton";

export function EditProfile() {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data: any) {}

  return (
    <LinearGradient style={styles.container} colors={["#2D9CDB", "#2F80ED"]}>
      <AntDesign name="left" size={24} color="#fff" style={styles.icon} />
      <View style={styles.viewBar}>
        <Text style={styles.title}>Alterar perfil</Text>
      </View>

      <View style={styles.ViewContainer}>
        <View style={styles.ViewPic}>
          <Image source={defaultProfile} style={styles.profilePic} />
          <EditButton />
        </View>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Text style={styles.label}>Alterar Nome</Text>
          <Input name={"name"} placeholder="Mateus Kent" marginBottom={22} />

          <Text style={styles.label}>Telefone</Text>
          <Input
            name={"phone"}
            placeholder="(11) 4201-7647"
            marginBottom={50}
          />
        </Form>

        <ButtonPattern>Salvar</ButtonPattern>
      </View>
    </LinearGradient>
  );
}
