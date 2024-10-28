import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import Header from '../components/Header';
import ImgBg from '~/components/styles/ImageBackground.style';
import ForecastListItem from '~/components/ForecastListItem';
import { View } from 'react-native';
import { DAYS, getWeatherInterpretation } from '~/utils/meteo-utils';
import { Txt } from '~/components/Txt';

export interface RouteParams {
  city: string;
  time: string;
  weathercode: string;
  temperature_2m_max: string;
  image: any;
}

type RootStackParamList = {
  Forecasts: RouteParams;
};

const Forecasts = () => {
  //   const { params } = useRoute<RouteProp<RootStackParamList, 'Forecasts'>>();
  const { params } = useRoute<RouteProp<RootStackParamList, 'Forecasts'>>();
  if (!params || !params.time || params.time.length === 0) {
    return <Txt>Loading...</Txt>; // Show loading or fallback UI
  }
  const times = params.time ? params.time.split(',') : [];
  const forecastList = (
    <View className="mt-12 p-10">
      {times.map((t, index) => {
        const weatherCode = params.weathercode.split(',')[index];
        const imageData = getWeatherInterpretation(parseInt(weatherCode, 10));
        const image = imageData ? imageData.image : '';
        const temperatureData = params.temperature_2m_max;
        const temperature = temperatureData.split(',')[index];
        const date = new Date(t);
        const dayOfTheWeek = DAYS[date.getDay()];
        const formateDate = date.toLocaleDateString('default', {
          day: 'numeric',
          month: 'numeric',
        });

        return (
          <ForecastListItem
            key={t}
            image={image}
            day={dayOfTheWeek}
            date={formateDate}
            temperature={parseInt(temperature).toFixed(0)}
          />
        );
      })}
    </View>
  );

  return (
    <ImgBg>
      <Header city={params.city} />
      {forecastList}
    </ImgBg>
  );
};

export default Forecasts;
