import { Image, View } from 'react-native';
import React from 'react';
import { Txt } from './Txt';
import Clock from './Clock';

interface MeteoProps {
  temperature: number;
  interpretation: any;
  city: string;
}

const MeteoBasic = ({ temperature, interpretation, city }: MeteoProps) => {
  return (
    <>
      <View className="items-end">
        <Clock />
      </View>
      <View>
        <Txt>{city}</Txt>
      </View>
      <View className="items-end">
        <Txt style={{ fontSize: 20, transform: [{ rotate: '-90deg' }] }}>Sunny</Txt>
      </View>
      <View className="flex-row items-baseline justify-between">
        <Txt style={{ fontSize: 150 }}>{temperature}°</Txt>
        <Image source={interpretation.image} className="h-40 w-40" />
      </View>
    </>
  );
};

export default MeteoBasic;
