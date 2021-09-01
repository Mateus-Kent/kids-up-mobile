import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
 container: {
  height: 58,
  width: 230,
  backgroundColor: '#EEEDED',
  borderTopLeftRadius: 9,
  borderBottomLeftRadius: 9,
  borderBottomRightRadius: 9,
  position: 'absolute',
  marginBottom: 22
 },
 message: {
  fontSize: 12,
  fontFamily: theme.fonts.title500
 },
 hour: {
  fontSize: 12,
  fontFamily: theme.fonts.title500,
  color: '#000',
  opacity: 0.5,
  position: 'absolute',
  left: '90%',
  top: '95%'
 }
});