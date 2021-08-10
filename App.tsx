import React from 'react';
import {useFonts  } from 'expo-font'
import { Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading';

import { Routes} from './src/routes';

export default function App(){
 const [fontsLoaded] = useFonts({
  Poppins_700Bold,
  Poppins_600SemiBold
 });

 if(!fontsLoaded){
  return<AppLoading/>
 }
  return(
   <Routes />
  );
}