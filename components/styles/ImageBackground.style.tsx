import { ImageBackground } from 'react-native';
import bgImage from '../../assets/background.png';
import React, { ReactNode } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

interface ImgBgProps {
  children?: ReactNode;
  //If you want to allow multiple children in your component,
  //ReactNode instead of ReactElement for the children prop.
}

const ImgBg: React.FC<ImgBgProps> = ({ children }) => {
  return (
    <ImageBackground
      imageStyle={{ opacity: 0.75 }}
      source={bgImage}
      resizeMode="cover"
      className="flex-1 bg-black">
      <SafeAreaProvider>
        <SafeAreaView className="flex-1 p-5">{children}</SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default ImgBg;
