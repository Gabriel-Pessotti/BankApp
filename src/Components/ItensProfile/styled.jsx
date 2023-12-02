import styled from 'styled-components/native';

export const View = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 10px;
`;

export const ViewIcon = styled.View`
  gap: 10px;
  flex-direction: row;
  align-items: center;
`;
export const ButtonIcon = styled.View`
  background-color: ${({theme}) => theme.Colors.whiteOff};
  border-radius: 55px;
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.Colors.black};
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;
