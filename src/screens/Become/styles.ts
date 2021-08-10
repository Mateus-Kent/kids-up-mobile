import { StyleSheet } from 'react-native'

import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 },
 Svg:{
  marginBottom: 40,
 },
 title:{
  fontSize: 45,
  color: '#fff',
  marginTop: 44,
  fontFamily: theme.fonts.title700
 },
 text: {
  fontSize: 20,
  textAlign: 'center',
  marginBottom: 45,
  color: '#fff',
  fontFamily: theme.fonts.title600,
  opacity: 0.8
 }
});