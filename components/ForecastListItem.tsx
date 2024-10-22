import { View, Image } from 'react-native';
import React from 'react';
import { Txt } from './Txt';

const ForecastListItem = ({ image, day, date, temperature }: any) => {
  return (
    <View className="flex-row items-center justify-between">
      <Image source={image} className="h-10 w-10" />
      <Txt className="text-xl">{day}</Txt>
      <Txt className="text-xl">{date}</Txt>
      <Txt className="min-w-12 text-xl">{temperature}°</Txt>
    </View>
  );
};

export default ForecastListItem;
