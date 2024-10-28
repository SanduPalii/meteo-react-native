import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Txt } from './Txt';
import Clock from './Clock';
import { useRouter } from 'expo-router';

export interface MeteoProps {
  temperature: number;
  interpretation: any;
  city: string;
  dailyWeather: any;
}

const MeteoBasic = ({ temperature, interpretation, city, dailyWeather }: MeteoProps) => {
  const router = useRouter();
  const navigateToForecasts = () => {
    router.push({
      pathname: '/Forecasts',
      params: { city, interpretation, temperature, ...dailyWeather },
    });
  };
  // console.log(typeof interpretation);

  return (
    <>
      <View className="items-end">
        <Clock />
      </View>
      <View>
        <Txt>{city}</Txt>
      </View>
      <View className="items-end">
        <Txt className="-rotate-90 text-xl">Sunny</Txt>
      </View>
      <View className="flex-row items-baseline justify-between">
        <TouchableOpacity onPress={navigateToForecasts}>
          <Txt className="text-10xl">{temperature}°</Txt>
        </TouchableOpacity>
        <Image source={interpretation.image} className="h-40 w-40" />
      </View>
    </>
  );
};

export default MeteoBasic;
