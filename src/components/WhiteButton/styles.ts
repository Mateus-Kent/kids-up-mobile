import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
 button: {
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  borderRadius: 8,
  backgroundColor: '#FFF',
  height: 60,
  width: '100%',
  borderColor: '#2F80ED',
  borderWidth: 3,
  borderStyle: 'solid',
  position: 'relative',
 },
 text: {
 color: '#2F80ED',
 textAlign: 'center',
 fontFamily: theme.fonts.title600,
 fontSize: 18,
 },
 info: {
  position: 'absolute',
  right: '85%'
 }
});