import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './style';

export function ButtonChoose({...rest}){

const navigation = useNavigation()

function handleBecome(){
  navigation.navigate('Choose');
}

 return(
  <View>
  <RectButton  style={styles.button1} {...rest}> 
        <Text style={styles.textButton}>Entrar</Text>
  </RectButton>

  <RectButton
   style={styles.button2} {...rest}
   onPress={handleBecome}
   >
      <Text style={styles.textButton}>Registrar</Text>
  </RectButton>
  </View>
 );
}