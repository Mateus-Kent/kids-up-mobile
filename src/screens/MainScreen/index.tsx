import React, { useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";

import { styles } from "./styles";

import { ConfigIcon } from "../../components/ConfigIcon"

export function Login() {
  return (
    <KeyboardAvoidingView style={styles.keyBoard}>
      <LinearGradient style={styles.container} colors={["#2D9CDB", "#2F80ED"]}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scroll2}
        >
         <View>
         <Text style={styles.title}>Conversas</Text>

         <ConfigIcon />
         </View>
         

          <View style={styles.container}>

          </View>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}
