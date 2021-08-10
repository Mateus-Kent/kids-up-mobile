import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './style';

type ButtonProps = {
  navigation: any;
  handleOnTapRegister?: any
}

export function ButtonChoose({ navigation} : ButtonProps){


 return(
  <View>
  <RectButton  style={styles.button1}> 
        <Text style={styles.textButton}>Entrar</Text>
  </RectButton>

  <RectButton
   style={styles.button2}
   onPress={() => navigation.navigate('Choose')}
   >
      <Text style={styles.textButton} >Registrar</Text>
  </RectButton>
  </View>
 );
}