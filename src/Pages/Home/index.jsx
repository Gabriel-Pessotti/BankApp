import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { formatCurrency } from './utils'; 
import CardSvg from '../../Assets/svg/cardSvg';
import CardsHome from '../../Components/CardsHome';

import * as Styled from './styled';

export default function Home() {
  const navigation = useNavigation();
  const [data, setData] = useState();
  const [uid, setUid] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(async (item) => {
      setUid(item.uid);
    });
    getInfo();
    return subscriber;
  }, [uid]);

  const getInfo = async () => {
    try {
      if (uid) {
        const infoData = await firestore()
          .collection('Infos')
          .where('uid', '==', uid)
          .get();
        setData(infoData._docs[0]._data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formattedBalance = data?.Balance ? formatCurrency(data.Balance) : '';

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.ViewPic>
          {data?.Foto ? <Styled.Picture source={{ uri: data?.Foto }} /> : null}
          <Styled.TextsTop>
            <Styled.TextWelcome>Welcome back</Styled.TextWelcome>
            <Styled.Name>{data?.fullName}</Styled.Name>
          </Styled.TextsTop>
        </Styled.ViewPic>
      </Styled.Header>
      <Styled.ViewCard>
        <CardSvg />
        <Styled.Informs>
          <Styled.TitleCard>Balance</Styled.TitleCard>
        </Styled.Informs>
        <Styled.Balance>{formattedBalance}</Styled.Balance>
      </Styled.ViewCard>
      <Styled.ButtonsCard>
        <Styled.Cards>
          <CardsHome onPress={() => navigation.navigate('SendMoney')} icon="Send" name="Send Money" subtitle="Make transfer" />
          <CardsHome onPress={() => navigation.navigate('home')} icon="Wallet" name="Pay the bill" subtitle="Lorem ipsum" />
        </Styled.Cards>
        <Styled.SecondLineCards>
          <CardsHome onPress={() => navigation.navigate('home')} icon="Request" name="Request" subtitle="Ask for money" />
          <CardsHome onPress={() => navigation.navigate('Contacts')} icon="Users" name="Contact" subtitle="Take acc to acc" />
        </Styled.SecondLineCards>
      </Styled.ButtonsCard>
    </Styled.Container>
  );
}