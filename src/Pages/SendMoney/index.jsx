import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

import Top from '../../Components/Top';

import * as Styled from './styled';

export default function SendMoney() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [uid, setUid] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(async (user) => {
      setUid(user?.uid);
    });
    doidera();
    return subscriber;
  }, [uid]);

  const doidera = async () => {
    try {
      if (uid) {
        const infoData = await firestore().collection('Infos').get();
        const filteredData = infoData.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter((item) => item.uid !== uid); 
        setData(filteredData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({ item }) => (
    <Styled.View onPress={() => navigation.navigate('Detail', { item: item })}>
      <Styled.ViewPic>
        {item?.Foto ? <Styled.Picture source={{ uri: item?.Foto }} /> : null}
        <Styled.Texts>
          <Styled.Name>{item.fullName}</Styled.Name>
          <Styled.TextBank>BIT • Banco IT Lean</Styled.TextBank>
        </Styled.Texts>
      </Styled.ViewPic>
    </Styled.View>
  );

  return (
    <Styled.Container>
      <Styled.Header>
        <Top onPress={() => navigation.navigate('home')} text="Send Money" />
      </Styled.Header>

      <Styled.FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </Styled.Container>
  );
}
