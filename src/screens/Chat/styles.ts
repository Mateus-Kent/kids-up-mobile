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
  alignItems: 'flex-start',
  width: '100%',
  position: 'relative',
 },
 infoProfile: {
  flex: 1,
  alignItems: 'center',
  paddingHorizontal: 16,
  paddingTop: 12,
  flexDirection: 'row',
  justifyContent: 'center',
 },
 icon: {
  marginRight: 16
 },
 profilePic: {
  width: 55,
  height: 55,
  borderRadius: 50,
  marginRight: 17,
 },
 text: {
  fontFamily: theme.fonts.title600,
  fontSize: 18,
  color: '#fff'
 },
 ViewContainer: {
  height: '83%',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  width: '100%',
  backgroundColor: "#fff",
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: 16,
 },
 ViewMessage: {
 height: '88%',
 width: '90%',
 flexDirection: 'column'
 },
 Message: {
 flexDirection: 'row',
 width: '100%',
 marginBottom: 22
 },
 MessageGrayDirection: {
  justifyContent: 'flex-start',
 },
 MessageBlueDirection: {
  justifyContent: 'flex-end',
 },
 SendMessage: {
  justifyContent: 'space-between',
  width: '90%',
  flexDirection: 'row',
 }
});