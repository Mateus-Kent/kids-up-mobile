import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
 container: {
  height: 80,
  width: 329,
  backgroundColor: 'rgba(47, 128, 237, 0.1)',
  borderRadius: 10,
  alignItems: 'center',
  flexDirection: 'row',
  paddingHorizontal: 10
 },
 profilePic: {
  width: 65,
  height: 65,
  borderRadius: 50,
  marginRight: 17,
 },
 name: {
  fontFamily: theme.fonts.title600,
  fontSize: 14
 },
 chatPreview: {
  fontFamily: theme.fonts.title500,
  fontSize: 12,
  opacity: 0.7
 },
 notification: {
  marginLeft: 18,
  fontFamily: theme.fonts.title500,
  alignItems: 'center',
 },
 hour:{
  opacity: 0.5
 },
 number: {
  backgroundColor: '#2F80ED',
  justifyContent: 'center',
  alignItems: 'center',
  height: 24,
  width: 24,
  borderRadius: 50,
 },
 numberNotification: {
  color: '#fff'
 }
});