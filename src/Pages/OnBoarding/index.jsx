import React from 'react';
import { useNavigation } from '@react-navigation/native';

import AppIntroSlider from 'react-native-app-intro-slider';
import Primary from '../../Assets/svg/primary';
import Secondary from '../../Assets/svg/secondary';
import Terceary from '../../Assets/svg/terceary';

import * as Styled from './styled';
import { colors } from '../../Components/Theme/colors';

export default function OnBoarding() {
  const navigation = useNavigation();
  const slides = [
    {
      key: '1',
      text: 'The best app for\nmanage your\nfinance',
      sub:  'Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient.',
      logo: <Styled.Primary><Primary /></Styled.Primary>,
    },
    {
      key: '2',
      text: 'Simple and easy\nto control your\nmoney',
      sub: 'Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient.',
      logo: <Styled.Secondary><Secondary /></Styled.Secondary>,
    },
    {
      key: '3',
      text: 'Your savings are\nsafe by smat\ninvest',
      sub:  'Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient.',
      logo: <Styled.Terceary><Terceary/></Styled.Terceary>,
    },

  ];
  function carrosel ({item}){
  return (
    <Styled.Container>
      <Styled.ContainerSlide>
        <Styled.Texts>
        <Styled.Text>
        {item.text}
        </Styled.Text>
        <Styled.Sub>
          {item.sub}
        </Styled.Sub>
        </Styled.Texts>
        <Styled.Logo>
        {item.logo}
        </Styled.Logo>
      </Styled.ContainerSlide>
    </Styled.Container>
  );
}
return (
  <AppIntroSlider
    renderItem={carrosel}
    data={slides}
    activeDotStyle={{
      backgroundColor: colors.Colors.white,
      width: 25,
      height: 10,
      bottom: 500,
      

          
    }}
    dotStyle={{
      backgroundColor: colors.Colors.whiteOpacity,
      bottom: 500,
  
    }}
    renderNextButton={() => (
      <Styled.View>
      <Styled.ButtonNext>
        <Styled.TextButton>Continue</Styled.TextButton>
      </Styled.ButtonNext>
      </Styled.View>
    )}
    renderDoneButton={() => (
      <Styled.View>
      <Styled.ButtonNext>
        <Styled.TextButton>Get Started</Styled.TextButton>
      </Styled.ButtonNext>
      </Styled.View>
    )}
    onDone={() => navigation.navigate('Login')}
  />
);
}

