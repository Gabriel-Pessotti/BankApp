import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding-left: 20px;
  padding-right: 20px;
`;
export const Header = styled.View`
  width: 100%;
  justify-content: center;
  height: 50px;
  margin-top: 30px;
`;
export const Texts = styled.View`
  margin-top: 30px;
`;
export const Title = styled.Text`
  color: ${({theme}) => theme.Colors.blackLight};
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0.12px;
`;
export const SubTitle = styled.Text`
  color: ${({theme}) => theme.Colors.grayBold};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.07px;
`;

export const Inputs = styled.View`
  gap: 16px;
`;
export const ViewInput = styled.View``;
export const ViewSenha = styled.View`
  flex-direction: row;
`;

export const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const TextCheckBox = styled.Text`
  color: ${({theme}) => theme.Colors.blackLight};
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.07px;
`;
export const Forgot = styled.TouchableOpacity`
  position: absolute;
  right: 0;
`;
export const TextForgot = styled.Text`
  color: #57435c;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.07px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  position: absolute;
  right: 5px;
  height: 50px;
  margin-top: 28px;
  justify-content: center;
`;

export const ViewButton = styled.View`
  width: 100%;
  gap: 10px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonLogin = styled.TouchableOpacity``;
export const TextLogin = styled.Text`
  color: #2b7979;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.08px;
`;
export const IconButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.Colors.whiteWeak};
  width: 48px;
  height: 48px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
`;
export const ViewFooterr = styled.View`
margin-top: 50px;
`;
export const Icons = styled.View` 
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 32px;
`;

export const ViewOr = styled.View`
height: 24px;
width: 100%;
justify-content: center;
`;
export const TextOr = styled.Text`
  color: ${({theme}) => theme.Colors.grayligth};
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px; 
  letter-spacing: 0.07px;
`;
export const Terms = styled.View`
width: 100%;
position: absolute;
bottom: 30px;
margin-left: 15px;
`;
export const TextTerms = styled.Text`
color: #78828A;
text-align: center;
font-size: 14px;
font-weight: 500;
line-height: 22px; 
letter-spacing: 0.07px;
`;
