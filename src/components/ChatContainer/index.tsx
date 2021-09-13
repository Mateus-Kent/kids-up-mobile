import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";

import defaultProfile from "../../assets/defaultProfile.png"

type ContainerProps = {
  navigation: any;
  handleOnTapRegister?: any;
};

export function ChatContainer({ navigation }: ContainerProps) {
  return (
    <RectButton
      style={styles.container}
      onPress={() => navigation.navigate("Chat")}
    >
      <View>
     <Image source={defaultProfile} style={styles.profilePic}/>
     </View>

     <View>
       <Text style={styles.name}>Jennifer Lawrence</Text>
       <Text style={styles.chatPreview}>Boa tarde o Eduardo tá...</Text>
     </View>

     <View style={styles.notification}>
       <Text style={styles.hour}>18:31</Text>
       <View style={styles.number}>
         <Text style={styles.numberNotification}>4</Text>
       </View>
     </View>

    </RectButton>
  );
}
