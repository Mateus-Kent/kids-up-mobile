import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {View, Text } from 'react-native';

import { styles } from './styles'

import { ButtonPattern } from '../../components/ButtonPattern';

export function Signin(){
 return(
<LinearGradient style={styles.container} 
colors={['#2D9CDB', '#2F80ED']}
>

 <Text style={styles.title}>Kids up</Text>

<View style={styles.ViewContainer} >
 <Text style={styles.caption}>Registrar </Text>

<ButtonPattern  marginBottom={20} >
 Próximo
</ButtonPattern> 

<Text>Já possui uma conta? <Text>Entre</Text> </Text>

</View>

</LinearGradient>
 );
}