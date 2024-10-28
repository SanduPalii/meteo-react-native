import { requestBackgroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Address, Coordinates, HomeProps, WeatherData } from '~/components/modules/type';
import MeteoAPI from '~/components/api/meteo';
import { useFonts } from 'expo-font';
import Home from '../components/Home';
import ImgBg from '~/components/styles/ImageBackground.style';
import { Alert } from 'react-native';

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

  async function fetchCoordsByCity(city: HomeProps) {
    try {
      const coordsResponse = await MeteoAPI.fetchCoordsByCity(city);
      setCoordinates(coordsResponse);
    } catch (err: string | unknown) {
      if (typeof err === 'string') {
        Alert.alert('Aouch!', err);
      }
    }
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
    <ImgBg>
      {isFontLoaded && <Home city={city} weather={weather} onSubmitSearch={fetchCoordsByCity} />}
    </ImgBg>
  );
}
