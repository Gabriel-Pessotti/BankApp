/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import fireStore from '@react-native-firebase/firestore';
import {ActivityIndicator} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as Styled from './styled';

export default function Loading() {
  const navigation = useNavigation();
  const route = useRoute();
  const fullName = route.params.fullName;
  const UrlPhoto ='https://static.vecteezy.com/system/resources/previews/008/844/895/non_2x/user-icon-design-free-png.png'
  const [id, setId] = useState()
  
  useEffect(() => {    
   if(id){
    sendName()
   }
  }, [id]);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(async (loggedInUser) => {
      if (loggedInUser) {
        await AsyncStorage.setItem('token', JSON.stringify(loggedInUser.uid));
       setId(loggedInUser);
      } else {
        await AsyncStorage.removeItem('user');
      }
    });
    return subscriber;
  }, []);

  const sendName = () => {
    fireStore()
      .collection('Infos')
      .add({fullName: fullName, Balance: 15000, uid:id.uid, Foto: UrlPhoto })
      .then(() => console.log('Successfully'),
      navigation.navigate('Home'))
      .catch(erro => console.error(erro, 'aki'));
  };

  return (
    <Styled.Container>
      <ActivityIndicator size={50} color={'purple'} />
    </Styled.Container>
  );
}
