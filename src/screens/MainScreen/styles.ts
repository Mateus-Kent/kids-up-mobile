import { StyleSheet } from 'react-native'

import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  position: 'relative',
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
 viewBar: {
  flex: 1,
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  paddingVertical: 50,
  paddingHorizontal: 32
 },
 title: {
  fontSize: 35,
  color: '#fff',
  fontFamily: theme.fonts.title700
 },
 ViewContainer: {
  flex: 7,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  width: '100%',
  backgroundColor: "#fff",
  paddingHorizontal: 45,
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: 30,
 }
});