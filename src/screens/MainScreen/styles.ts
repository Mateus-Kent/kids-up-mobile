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
  fontSize: 28,
  color: '#fff',
  fontFamily: theme.fonts.title700
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
});