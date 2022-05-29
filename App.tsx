import React from 'react';
import AppLoading from 'expo-app-loading';
import { Details } from './src/screens/Details';
import { ThemeProvider } from 'styled-components';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo'

import theme from './src/global/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium, 
    Archivo_600SemiBold
  });
  
  if(!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
          <Details></Details>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}


