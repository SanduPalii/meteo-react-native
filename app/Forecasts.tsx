import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import Header from '../components/Header';
import ImgBg from '~/components/styles/ImageBackground.style';
import ForecastListItem from '~/components/ForecastListItem';
import { View } from 'react-native';

export interface RouteParams {
  city: string;
}

type RootStackParamList = {
  Forecasts: RouteParams;
};

const Forecasts = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Forecasts'>>();
  const { city } = route.params;

  //   const forecastList = <View>{}</View>;

  return (
    <ImgBg>
      <Header city={city} />
      <ForecastListItem
        image={require('../assets/meteo_img/clouds.png')}
        day={'MON'}
        date={'03/11'}
        temperature={'3'}
      />
    </ImgBg>
  );
};

export default Forecasts;
