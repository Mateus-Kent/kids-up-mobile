import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

export function ButtonChoose(){
 return(
  <View>
  <TouchableOpacity activeOpacity={0.8}  style={styles.button1} >
        <Text style={styles.textButton}>Sou Funcionário</Text>
  </TouchableOpacity>

  <TouchableOpacity activeOpacity={0.8} style={styles.button2} >
      <Text style={styles.textButton}>Sou Responsável</Text>
  </TouchableOpacity>
  </View>
 );
}