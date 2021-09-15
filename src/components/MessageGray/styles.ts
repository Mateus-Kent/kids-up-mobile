import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
 container: {
  height: 58,
  width: 230,
  backgroundColor: '#EEEDED',
  borderRadius: 9,
  borderTopLeftRadius: 0,
  position: 'relative'
 },
 message: {
  fontSize: 12,
  fontFamily: theme.fonts.title500,
  paddingTop: 15,
  paddingLeft: 15,
 },
 hour: {
  fontSize: 12,
  fontFamily: theme.fonts.title500,
  color: '#000',
  opacity: 0.5,
  position: 'absolute',
  left: '78%',
  top: '64%'
 }
});