import { StyleSheet } from 'react-native'

import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative'
 },
 icon: {
  position: 'absolute',
  top: '10%',
  right: '85%',
 },
 title:{
  fontSize: 45,
  color: '#fff',
  marginTop: 44,
  fontFamily: theme.fonts.title700
 },
 caption:{
  fontSize: 32,
  color: '#000',
  fontFamily: theme.fonts.title700,
  marginTop: 30,
  marginBottom: 30,
 },
 text: {
  fontSize: 20,
  textAlign: 'center',
  marginBottom: 45,
  color: '#fff',
  fontFamily: theme.fonts.title600,
  opacity: 0.8
 },
 ViewContainer:{
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  width: '100%',
  backgroundColor:"#fff",
  paddingBottom: 77,
  paddingTop: 62,
  paddingHorizontal: 42,
  alignItems: 'center',
  justifyContent: 'space-between',
 }
});