import { StyleSheet } from 'react-native'

import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
 },
 viewBar: {
  flex: 1,
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 50,
  paddingHorizontal: 32
 },
 title: {
  fontSize: 28,
  color: '#fff',
  fontFamily: theme.fonts.title700,
 },
 ViewContainer: {
  flex: 3,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  width: '100%',
  backgroundColor: "#fff",
  paddingHorizontal: 45,
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: 30,
 },
 textGray: {
  color: 'rgba(0, 0, 0, 0.45)',
  fontFamily: theme.fonts.title500,
  fontSize: 20
 }
});