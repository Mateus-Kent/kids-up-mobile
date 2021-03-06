import { StyleSheet } from 'react-native'

import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
 button1: {
  height: 50,
  width: 239,
  backgroundColor: '#FEFEFE',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
  marginBottom: 15,
 },
 button2: {
  height: 50,
  width: 239,
  backgroundColor: '#FEFEFE',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
  marginBottom: 40,
 },
 textButton: {
  fontSize: 18,
  fontFamily: theme.fonts.title600
 }
});