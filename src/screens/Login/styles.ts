import { StyleSheet } from 'react-native'

import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
 keyBoard: {
  flex: 1,
  width: '100%',
 },
 container: {
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
 },
 scroll: {
  flex: 1,
  width: '100%'
 },
 scroll2: {
  minHeight: '100%',
  width: '100%',
  justifyContent: 'center',
  position: 'relative'
 },
 title: {
  fontSize: 45,
  color: '#fff',
  fontFamily: theme.fonts.title700
 },
 viewTitle: {
  alignItems: 'center',
  paddingBottom: 80,
  paddingHorizontal: 80,
  paddingTop: 80
 },
 caption: {
  fontSize: 32,
  color: '#000',
  fontFamily: theme.fonts.title700,
  marginBottom: 30,
 },
 text: {
  fontSize: 20,
  textAlign: 'center',
  color: '#fff',
  fontFamily: theme.fonts.title600,
  opacity: 0.8
 },
 ViewContainer: {
  flex: 1,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  width: '100%',
  backgroundColor: "#fff",
  paddingHorizontal: 45,
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: 30,
 },
 label: {
  fontSize: 14,
  fontFamily: theme.fonts.title600,
  color: '#000',
  marginLeft: 4
 },
 TextLink: {
  fontSize: 16,
  fontFamily: theme.fonts.title600,
 },
 LinkText: {
  color: '#9600DD'
 }
});