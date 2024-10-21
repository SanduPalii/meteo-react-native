import { requestBackgroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Address, Coordinates, WeatherData } from '~/components/modules/type';
import MeteoAPI from '~/components/api/meteo';
import { useFonts } from 'expo-font';
import Home from './Home';
import bgImage from 'assets/background.png';
import { ImageBackground, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Txt } from '~/components/Txt';

export default function App() {
  const [coordinates, setCoordinates] = useState<Coordinates>();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [city, setCity] = useState<Address>();
  const [isFontLoaded] = useFonts({ 'Alata-Regular': require('~/assets/fonts/Alata-Regular.ttf') });

  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherByCoords(coordinates);
      fetchCityByCoords(coordinates);
    }
  }, [coordinates]);

  async function fetchWeatherByCoords(coords: Coordinates) {
    const weatherResponse = await MeteoAPI.fetchWeatherByCoords(coords);
    setWeather(weatherResponse);
  }

  async function fetchCityByCoords(coords: Coordinates) {
    const cityResponse = await MeteoAPI.fetchCityByCoords(coords);
    setCity(cityResponse);
  }

  async function getUserCoordinates() {
    const { status } = await requestBackgroundPermissionsAsync();
    if (status === 'granted') {
      const location = await getCurrentPositionAsync();
      setCoordinates({ lat: location.coords.latitude, lng: location.coords.longitude });
    } else {
      setCoordinates({ lat: 60.99, lng: 24.45 });
    }
  }

  return (
    <ImageBackground
      imageStyle={{ opacity: 0.75 }}
      source={bgImage}
      resizeMode="cover"
      className="flex-1 bg-black">
      <SafeAreaProvider>
        <SafeAreaView className="flex-1 p-5">
          {isFontLoaded && <Home city={city} weather={weather} />}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
