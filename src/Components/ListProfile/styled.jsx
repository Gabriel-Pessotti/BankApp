import styled from 'styled-components/native';

export const ContainerGeral = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background: ${({theme}) => theme.Colors.white};
`;
export const ViewGlobal = styled.View`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;
export const ViewHeader = styled.View`
margin-top: 50px;
align-items: center;
`;
export const TextBold = styled.Text`
color: ${({theme}) => theme.Colors.grayWak};
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 22px; 
letter-spacing: 0.07px;

margin-top: 35px;
text-align: center;
`;
export const ViewButtonFooter = styled.View`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
`;