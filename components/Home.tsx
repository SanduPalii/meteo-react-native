import { View, Text } from 'react-native';
import React from 'react';
import MeteoBasic from '~/components/MeteoBasic';
import { getWeatherInterpretation } from '~/utils/meteo-utils';
import MeteoAdvanced from '~/components/MeteoAdvanced';
import { HomeProps } from '~/components/modules/type';
import SearchBar from '../components/SearchBar';

function Home({ weather, city, onSubmitSearch }: HomeProps) {
  if (!weather || !weather.current_weather) {
    return <Text>Loading...</Text>;
  }

  const currentWeather = weather.current_weather;
  const currentInterpretation = getWeatherInterpretation(currentWeather.weathercode);

  return (
    <>
      <View className="h-2/5 ">
        <MeteoBasic
          dailyWeather={weather.daily}
          city={city}
          interpretation={currentInterpretation}
          temperature={Math.round(currentWeather.temperature)}
        />
      </View>
      <View className="h-2/5 ">
        <SearchBar onSubmit={onSubmitSearch} />
      </View>
      <View className="h-1/5">
        <MeteoAdvanced
          sunrise={weather.daily.sunrise[0].split('T')[1]}
          sunset={weather.daily.sunset[0].split('T')[1]}
          windspeed={currentWeather.windspeed}
        />
      </View>
    </>
  );
}

export default Home;
