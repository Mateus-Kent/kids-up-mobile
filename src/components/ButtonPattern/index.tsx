import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';


type ViewProps= {
children: String,
marginBottom?: number
}

export function ButtonPattern({ children, marginBottom }: ViewProps,){
 return(
 
<RectButton style={[styles.button, {marginBottom}]} >
  <Text style={styles.text}> { children} </Text>
</RectButton>

);
}