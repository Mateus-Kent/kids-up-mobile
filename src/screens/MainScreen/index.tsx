import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, ScrollView } from "react-native";

import { styles } from "./styles";

import { ConfigIcon } from "../../components/ConfigIcon";
import {ChatContainer} from "../../components/ChatContainer";

export function MainScreen() {
  return (
    <LinearGradient style={styles.container} colors={["#2D9CDB", "#2F80ED"]}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scroll2}>
        <View style={styles.viewBar}>
          <Text style={styles.title}>Conversas</Text>

          <ConfigIcon />
        </View>

        <View style={styles.ViewContainer}>

          <ChatContainer />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
