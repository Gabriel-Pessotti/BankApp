import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Top from '../../Components/Top';
import {Input} from '../../Components/Inputs';
import Money from '../../Assets/svg/money';
import Button from '../../Components/Button';
import {Dialog} from 'react-native-paper';
import UpLoad from '../../Assets/svg/upload';
import TransferStatusModal from '../../Components/TransferStatus';

import * as Styled from './styled';

export default function Detail() {
  const navigation = useNavigation();
  const [showModal, setShowModal] = React.useState(false); 
  const routes = useRoute();
  const [transferAmount, setTransferAmount] = useState('');
  const user = routes.params.item;
  const [data, setData] = useState([]);
  const [uid, setUid] = useState();

  const schema = yup.object().shape({
    Amount: yup.string().required('inform the transfer amount'),
  });

  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({
    defaultValues: {
      Amount: '',
      description: '',
    },
    resolver: yupResolver(schema),
  });
  const amount = watch('Amount');

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(async coisa => {
      setUid(coisa.uid);
    });
    getInfo();
    return subscriber;
  }, [uid]);

  const getInfo = async () => {
    try {
      if (uid) {
        const getPerson = await firestore()
          .collection('Infos')
          .where('uid', '==', uid)
          .get();

        if (!getPerson.empty) {
          const backInfos = getPerson.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setData(backInfos[0]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleAmountChange = formattedValue => {
    
    const numericValue = formattedValue.replace(/[^0-9,.]/g, '');

    const sanitizedValue = numericValue.replace(',', '.');

    const floatValue = parseFloat(sanitizedValue);


    if (!isNaN(floatValue) && isFinite(floatValue)) {
      setShowModal(true);
      setTransferAmount(floatValue);
    } else {
      console.log('Por favor, insira um valor numérico válido.');
    }
  };

  const [statusModalVisible, setStatusModalVisible] = React.useState(false);
  const [statusMessage, setStatusMessage] = React.useState('');

  const handleTransfer = async () => {
    try {
      const Money = parseFloat(data.Balance) - parseFloat(transferAmount);
      if (Money >= 0) {
        await firestore().collection('Infos').doc(data.id).update({
          Balance: Money,
        });
        setStatusMessage('Transferência concluída com sucesso!');
        setStatusModalVisible(true);
        receive();
      } else {
        setStatusMessage('Falha na transferência. Saldo insuficiente.');
        setStatusModalVisible(true);
      }
    } catch (error) {
      setStatusMessage('Erro na transferência. Tente novamente mais tarde.');
      setStatusModalVisible(true);
    }
  };
  const receive = async () => {
    try {
      const Money = parseFloat(user.Balance) + parseFloat(transferAmount);
      await firestore().collection('Infos').doc(user.id).update({
        Balance: Money,
      });
    } catch (error) {
      console.error('Erro durante a atualização do saldo:', error);
    }
  };

  return (
    <Styled.Container>
      <Top onPress={() => navigation.navigate('SendMoney')} text="Send Money" />
      <Styled.Header></Styled.Header>

      <Styled.ViewPic>
        {user?.Foto ? <Styled.Picture source={{uri: user?.Foto}} /> : null}
        <Styled.Name>{user?.fullName}</Styled.Name>
        <Styled.TextBank>BIT • Banco IT Lean</Styled.TextBank>
      </Styled.ViewPic>

      <Styled.ViewInput>
        {!showModal && (
          <Styled.ViewMoney>
            <Money />
          </Styled.ViewMoney>
        )}
        <Input
          title="Amount:"
          placeholder=""
          colorPlaceholder="#000"
          name="Amount"
          heigth="72px"
          fontSize="25px"
          control={control}
          errors={errors}
          keyboardType="numeric"
          mask={value => {
            const numericValue = value.replace(/[^0-9]/g, '');

            if (numericValue !== '') {
              const floatValue = parseFloat(numericValue);
              return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(floatValue / 100);
            }

            return '';
          }}
        />
      </Styled.ViewInput>
      <Styled.ViewMessage>
        <Input
          title="Message:"
          placeholder="Thank you for your cooperation :)"
          colorPlaceholder="#000"
          name="description"
          heigth="132px"
          control={control}
          errors={errors}
        />
      </Styled.ViewMessage>
      <Styled.ViewButton>
        <Button
          onPress={() => handleAmountChange(amount)}
          name="Send Money"
          background="#4F3D56"
          height="46px"
          onp
        />
      </Styled.ViewButton>

      <Dialog
        visible={showModal}
        onDismiss={() => setShowModal(false)}
        style={{zIndex: 3}}>
        <Dialog.Content>
          <Styled.Logo>
            <UpLoad />
          </Styled.Logo>
          <Styled.Text variant="bodyMedium">Total transfer</Styled.Text>
          <Styled.TextValue>${transferAmount}</Styled.TextValue>
          <Styled.SubTitle>Transfer detail</Styled.SubTitle>
          <Styled.Description>
            <Styled.TextFormat>From</Styled.TextFormat>
            <Styled.TextBold>BIT • Banco IT Lean</Styled.TextBold>
          </Styled.Description>
          <Styled.Description>
            <Styled.TextFormat>To</Styled.TextFormat>
            <Styled.TextBold>BIT • Banco IT Lean</Styled.TextBold>
          </Styled.Description>
          <Styled.Description>
            <Styled.TextFormat>Transfer</Styled.TextFormat>
            <Styled.TextBold>$154,42</Styled.TextBold>
          </Styled.Description>
          <Styled.Description>
            <Styled.TextFormat>Admin fee</Styled.TextFormat>
            <Styled.TextBold>Free</Styled.TextBold>
          </Styled.Description>
          <Styled.Separation></Styled.Separation>
          <Styled.Description>
            <Styled.TextFormat>Total transfer</Styled.TextFormat>
            <Styled.TextBold>${transferAmount}</Styled.TextBold>
          </Styled.Description>
        </Dialog.Content>

        <Styled.ButtonModal>
          <Styled.ButtonCancel>
            <Button
              name="Cancel"
              color="#4F3D56"
              onPress={() => setShowModal(false)}
            />
          </Styled.ButtonCancel>
          <Styled.ButtonConfirm>
            <Button
              name="Confirm"
              background="#4F3D56"
              onPress={() => handleTransfer()}
            />
          </Styled.ButtonConfirm>
        </Styled.ButtonModal>
      </Dialog>

      <TransferStatusModal
        visible={statusModalVisible}
        onDismiss={() => setStatusModalVisible(false)}
        statusMessage={statusMessage}
        isSuccess={statusMessage.includes('sucesso')} 
      />
    </Styled.Container>
  );
}
