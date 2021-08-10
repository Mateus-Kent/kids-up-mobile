import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ChooseImgSvg from '../../assets/ChooseImage.svg';

import { styles } from './styles'

import { NotificationBar } from '../../components/Bar/NotificationBar';
import { ButtonChoose } from '../../components/ButtonChoose';

import { useNavigation } from '@react-navigation/native';

export function Become(){

  const navigation = useNavigation()

  return(
  <LinearGradient style={styles.container} 
  colors={['#2D9CDB', '#2F80ED']}>

  <NotificationBar />

  <Text style={styles.title}>KIDS UP</Text>

  <Text style={styles.text}>
  Um novo meio de {'\n'} 
  comunicação entre pais e{'\n'} 
  professores
  </Text>

  <ChooseImgSvg style={styles.Svg}/>
  
  <ButtonChoose navigation={navigation} />

  </LinearGradient>
  );
}