import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

import defaultProfile from "../../assets/defaultProfile.png";

import { SendButton } from "../../components/SendButton";
import { InputMessage } from "../../components/InputMessage";
import { Form } from "@unform/mobile";

type ConfigProps = {
  navigation: any;
};

export function Chat({ navigation }: ConfigProps) {
  return (
    <KeyboardAvoidingView style={styles.keyBoard}>
      <LinearGradient style={styles.container} colors={["#2D9CDB", "#2F80ED"]}>
        <View style={styles.infoProfile}>
          <AntDesign
            name="left"
            size={24}
            color="#fff"
            style={styles.icon}
            onPress={() => navigation.navigate("MainScreen")}
          />

          <Image source={defaultProfile} style={styles.profilePic} />

          <Text style={styles.text}>Bruno Rezende</Text>
        </View>

        <View style={styles.ViewContainer}>
          <Form
            style={styles.SendMessage}
            onSubmit={() => {
              console.log("fodasse");
            }}
          >
            <InputMessage
              name={"Message"}
              placeholder={"Digite sua mensagem"}
            />

            <SendButton />
          </Form>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}
