import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
 container: {
  height: 58,
  width: 230,
  backgroundColor: '#2F80ED',
  borderRadius: 9,
  borderTopRightRadius: 0,
  position: 'relative'
 },
 message: {
  fontSize: 12,
  fontFamily: theme.fonts.title500,
  color: '#fff',
  paddingTop: 15,
  paddingLeft: 15,
 },
 hour: {
  fontSize: 12,
  fontFamily: theme.fonts.title500,
  color: '#fff',
  position: 'absolute',
  left: '78%',
  top: '64%'
 }
});