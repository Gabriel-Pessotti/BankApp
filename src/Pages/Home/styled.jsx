import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.Colors.whiteColor};
  padding-left: 20px;
  padding-right: 20px;
`;
export const Header = styled.View``;
export const ViewPic = styled.View`
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
export const TextWelcome = styled.Text`
  color: ${({theme}) => theme.Colors.grayWak};
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.06px;
`;
export const Picture = styled.Image`
  width: 70px;
  height: 70px;
  object-fit: contain;
  border-radius: 40px;
`;
export const TextsTop = styled.View``;
export const Name = styled.Text`
  color: ${({theme}) => theme.Colors.blackLight};
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.09px;
`;
export const ViewCard = styled.View`
  width: 100%;
  margin-top: 5px;
`;
export const Informs = styled.View`
position: absolute;
width: 100%;
align-items: center;
top: 5px;
`;
export const TitleCard = styled.Text`
color: ${({theme}) => theme.Colors.whiteColor};
position: absolute;
text-align: center;
font-size: 14px;
font-weight: 500;
line-height: 22px;
letter-spacing: 0.5px;
`;
export const Balance = styled.Text`
  position: absolute;
  margin-top: 110px;
  margin-left: 10px;
  color: ${({theme}) => theme.Colors.white};
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.12px;
`;
export const ButtonsCard = styled.View`
  gap: 5px;
`;
export const Cards = styled.View`
  width: 100%;
  height: 140px;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
`;
export const SecondLineCards = styled.View`
  width: 100%;
  height: 140px;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
`;
