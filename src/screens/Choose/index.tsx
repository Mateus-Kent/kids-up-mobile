import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';

import ChooseImgSvg from '../../assets/ChooseImage.svg';

import { styles } from './styles'

import { NotificationBar } from '../../components/Bar/NotificationBar';
import { ButtonChoose } from '../../components/ButtonChoose';

export function Choose(){
  return(
  <View style={styles.container} >

  <NotificationBar />

  <ChooseImgSvg style={styles.Svg}/>

  <Text style={styles.text}>
  Um novo meio de {'\n'} 
  comunicação entre {'\n'} 
  pais e professores
  </Text>
  
  <ButtonChoose />

  </View>
  );
}