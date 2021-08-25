import { StyleSheet } from 'react-native'

import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
 container: {
  flex: 2,
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
 },
 title: {
  fontSize: 45,
  color: '#fff',
  fontFamily: theme.fonts.title700,
  marginTop: 35,
  marginBottom: 20
 },
 ViewContainer: {
  flex: 3,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  width: '100%',
  backgroundColor: "#fff",
  paddingBottom: 77,
  paddingTop: 37,
  paddingHorizontal: 45,
  alignItems: 'center',
  justifyContent: 'space-between',
 },
 caption: {
  fontSize: 32,
  color: '#000',
  fontFamily: theme.fonts.title700,
 },
 formPhoto: {
  alignItems: 'center',
  justifyContent: 'center',
 },
 subtitle:{
  fontFamily: theme.fonts.title600,
  marginBottom: 30,
  marginTop: 11,
  fontSize: 16
 },
 label: {
  fontSize: 14,
  fontFamily: theme.fonts.title600,
  color: '#000',
  marginLeft: 4
 },
});