import React from 'react';
import auth from '@react-native-firebase/auth';

import * as Styled from './styled';

export default function Profil() {
  function handleSignOut() {
    auth()
      .signOut()
      .then(() => {
        console.log('Saiu');
      })
      .catch(error => {
        console.error('Erro ao fazer logout:', error);
      });
  }

  return (
    <Styled.Container>
      <Styled.Header></Styled.Header>
      <Styled.Touch onPress={() => handleSignOut()}>
        <Styled.Texti>Alou</Styled.Texti>
      </Styled.Touch>
    </Styled.Container>
  );
}
