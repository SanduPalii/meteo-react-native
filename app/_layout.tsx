import React from 'react';
import '../global.css';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack initialRouteName="Forecasts">
      <Stack.Screen name="index" options={{ headerShown: false, animation: 'fade' }} />
      <Stack.Screen name="Forecasts" options={{ headerShown: false }} />
    </Stack>
  );
}
