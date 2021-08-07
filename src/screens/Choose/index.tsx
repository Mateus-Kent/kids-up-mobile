import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';

import ChooseImgSvg from '../../../assets/ChooseImage.svg';

import { styles } from './styles'

export function Choose(){
  return(
  <View style={styles.container} >

   <ChooseImgSvg style={styles.Svg}/>

  <Text style={styles.text}>
  Um novo meio de {'\n'} 
  comunicação entre {'\n'} 
  pais e professores
  </Text>
  
  <TouchableOpacity activeOpacity={0.8}  style={styles.button1} >
        <Text style={styles.textButton}>Sou Funcionário</Text>
  </TouchableOpacity>

  <TouchableOpacity activeOpacity={0.8} style={styles.button2} >
      <Text style={styles.textButton}>Sou Responsável</Text>
  </TouchableOpacity>

  </View>
  );
}