import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
 button: {
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
  backgroundColor: '#2F80ED',
  height: 60,
  width: '100%'
 },
 text: {
  color: '#fff',
  textAlign: 'center',
 fontFamily: theme.fonts.title600,
 fontSize: 18,
 }
});