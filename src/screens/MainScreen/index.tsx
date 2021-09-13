import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import { ConfigIcon } from "../../components/ConfigIcon";
import { ChatContainer } from "../../components/ChatContainer";

import { AddPersonButton } from "../../components/AddPersonButton";

export function MainScreen() {
  const navigation = useNavigation();

  return (
    <LinearGradient style={styles.container} colors={["#2D9CDB", "#2F80ED"]}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scroll2}>
        <View style={styles.viewBar}>
          <Text style={styles.title}>Conversas</Text>

          <ConfigIcon navigation={navigation} />
        </View>

        <View style={styles.ViewContainer}>
          <ChatContainer navigation={navigation} />

          <AddPersonButton />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
