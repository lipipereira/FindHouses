import React from 'react';
import { StatusBar } from 'react-native';
import { SectionView, SectionText, SectionImage } from './styles';
import Splash from '../../assets/img/login.jpg'

export const SplashScreen = () => {
  return(
    <SectionView>
      <StatusBar translucent backgroundColor="transparent"/>
      <SectionImage source={Splash} resizeMode="contain" />
      <SectionText>I´M GONNA BE THE KING OF THE PIRATES!!!</SectionText>
      <SectionText>Eu vou ser o proximo rei dos piratas!!!</SectionText>
    </SectionView>
  );
};


