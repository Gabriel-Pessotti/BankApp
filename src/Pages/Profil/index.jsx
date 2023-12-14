import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { Dialog } from 'react-native-paper';

import Button from '../../Components/Button';
import Top from '../../Components/Top';
import ListProfile from '../../Components/ListProfile';

import * as Styled from './styled';
import { colors } from '../../Components/Theme/colors';

export default function Profil() {
  const navigation = useNavigation();
  const [showModal, setShowModal] = React.useState(false);
  const [data, setData] = useState();
  const [uid, setUid] = useState();

  useEffect(() => {
    const fetchData = async () => {
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

    const subscriber = auth().onAuthStateChanged(async item => {
      setUid(item?.uid); 
      await fetchData();

    });
    

    return subscriber;
  }, [uid]);

  const handleSignOut = () => {
    auth().signOut();
    navigation.navigate('Login');
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <Top onPress={() => navigation.navigate('home')} text="Profile" />
      </Styled.Header>

      <Styled.ViewPic>
        {data?.Foto ? <Styled.Picture source={{ uri: data?.Foto }} /> : null}
        <Styled.Name>{data?.fullName}</Styled.Name>
      </Styled.ViewPic>

      <ListProfile />
      <Styled.ViewButton>
        <Button
          onPress={() => setShowModal(true)}
          name="Logout"
          color="red"
          background={'transparent'}
        ></Button>
      </Styled.ViewButton>
      <Dialog visible={showModal} onDismiss={() => setShowModal(false)}>
        <Dialog.Title>Log Out</Dialog.Title>
        <Dialog.Content>
          <Styled.Text variant="bodyMedium">
            Are you sure want to Log Out?
          </Styled.Text>
        </Dialog.Content>
        <Button
          name="Cancel"
          color={colors.Colors.purpleBold}
          onPress={() => setShowModal(false)}
        />
        <Button
          name="Log-Out"
          color="red"
          whidth={180}
          onPress={handleSignOut}
        />
      </Dialog>
    </Styled.Container>
  );
}
