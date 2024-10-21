import React from 'react';
import '../global.css';
import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Forecasts" options={{ headerShown: false }} />
    </Stack>
  );
};
export default Layout;
