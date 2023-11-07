import React from 'react';
import SplashScreen from "react-native-splash-screen";

import * as Styled from './styled';

const SplashScreenComponent = () => {
    SplashScreen.show();
  
  
  return (
    <Styled.Container>
      <Styled.Text>
      Carregando...
      </Styled.Text>
    </Styled.Container>
  );
};



export default SplashScreenComponent;



