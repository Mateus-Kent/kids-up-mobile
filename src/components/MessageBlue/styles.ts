import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
 container: {
  height: 58,
  width: 230,
  backgroundColor: '#2F80ED',
  borderTopLeftRadius: 9,
  borderBottomLeftRadius: 9,
  borderBottomRightRadius: 9,
  position: 'absolute',
  marginBottom: 22
 },
 message: {
  fontSize: 12,
  fontFamily: theme.fonts.title500,
  color: '#fff'
 },
 hour: {
  fontSize: 12,
  fontFamily: theme.fonts.title500,
  color: '#fff',
  position: 'absolute',
  left: '90%',
  top: '95%'
 }
});