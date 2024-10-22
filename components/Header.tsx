import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Txt } from './Txt';
import { useRouter } from 'expo-router';
import { HomeProps } from './modules/type';

const Header = ({ city }: HomeProps) => {
  const router = useRouter();
  const backToIndex = () => {
    router.push('/');
  };
  return (
    <View className="flex-row justify-evenly">
      <TouchableOpacity onPress={backToIndex} className="w-20">
        <Txt>{'<'}</Txt>
      </TouchableOpacity>
      <View className="mr-20">
        <Txt>{city.toUpperCase()}</Txt>
        <Txt className="text-xl">7 day forecasts</Txt>
      </View>
      <View />
    </View>
  );
};

export default Header;
