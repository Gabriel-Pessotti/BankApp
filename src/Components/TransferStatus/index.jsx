/* eslint-disable react/prop-types */
import React from 'react';
import { Dialog } from 'react-native-paper';
import * as Styled from './styled'; // Certifique-se de importar os estilos necessários
import SucessLogo from '../../Assets/svg/sucessLogo';
import { useNavigation } from '@react-navigation/native';
import FailLogo from '../../Assets/svg/failLogo';
import Button from '../Button';

const TransferStatusModal = ({ visible, onDismiss, statusMessage, isSuccess }) => {
  const navigation = useNavigation();

  return (
    <Dialog visible={visible} onDismiss={onDismiss} style={{ zIndex: 3 }}>
      <Dialog.Content>
        <Styled.Logo>
          {isSuccess ? <SucessLogo /> : <FailLogo />}
        </Styled.Logo>
        <Styled.Text variant="bodyMedium">{statusMessage}</Styled.Text>
        <Styled.Button>
          <Styled.ButtonConfirm>
            <Button
              name="Continue"
              background="#4F3D56"
              onPress={() => navigation.navigate('home')}
            />
          </Styled.ButtonConfirm>
        </Styled.Button>
      </Dialog.Content>
    </Dialog>
  );
};

export default TransferStatusModal;
