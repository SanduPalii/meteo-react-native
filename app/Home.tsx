import { View, Text } from 'react-native';
import React from 'react';
import MeteoBasic from '~/components/MeteoBasic';
import { getWeatherInterpretation } from '~/utils/meteo-utils';
import MeteoAdvanced from '~/components/MeteoAdvanced';
import { HomeProps } from '~/components/modules/type';

function Home({ weather, city }: HomeProps) {
  if (!weather || !weather.current_weather) {
    return <Text>Loading...</Text>;
  }

  const currentWeather = weather.current_weather;
  const currentInterpretation = getWeatherInterpretation(currentWeather.weathercode);

  return (
    <>
      <View className="h-2/5 ">
        <MeteoBasic
          city={city}
          interpretation={currentInterpretation}
          temperature={Math.round(currentWeather.temperature)}
        />
      </View>
      <View className="h-2/5 ">
        <Text className="text-2xl color-blue-100">Search Bar</Text>
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
