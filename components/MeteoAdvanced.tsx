import { View } from 'react-native';
import React from 'react';
import { StyledContainer, StyledLabel, StyledValue } from './styles/MeteoAdvanced.style';
import { MeteoAdvancedData } from './modules/type';

const MeteoAdvanced = ({ sunrise, sunset, windspeed }: MeteoAdvancedData) => {
  return (
    <View className="flex-row items-center justify-evenly rounded-2xl border-2 border-white bg-sky-900 pb-10 pt-10">
      <StyledContainer>
        <StyledLabel>Sunset</StyledLabel>
        <StyledValue>{sunset}</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel>Sunrise</StyledLabel>
        <StyledValue>{sunrise}</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel>Windspeed</StyledLabel>
        <StyledValue>{`${windspeed} km/h`}</StyledValue>
      </StyledContainer>
    </View>
  );
};

export default MeteoAdvanced;
