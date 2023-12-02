import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.Colors.whiteColor};
  padding-left: 20px;
  padding-right: 20px;
`;
export const Header = styled.View``;

export const ViewPic = styled.View`
  margin-top: 10px;
  align-items: center;
`;
export const Picture = styled.Image`
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 40px;
`;
export const Name = styled.Text`
  color: ${({theme}) => theme.Colors.blackLight};
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.09px;
`;
export const TextBank = styled.Text`
  color: ${({theme}) => theme.Colors.grayWak};
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.07px;
`;

export const ViewInput = styled.View``;
export const ViewMoney = styled.View`
  border-radius: 20px;
  margin-top: 10px;
  position: absolute;
  justify-content: center;
  height: 100%;
  right: 5px;
  z-index: 1;
`;
export const ViewMessage = styled.View`
  margin-top: 30px;
`;
export const ViewButton = styled.View`
  width: 100%;
  position: absolute;
  bottom: 5px;
  margin-left: 20px;
`;
export const ViewModal = styled.View``;
export const Logo = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 30px;
`;
export const Text = styled.Text`
  color: ${({theme}) => theme.Colors.grayWak};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.08px;
  margin-top: 30px;
`;
export const TextValue = styled.Text`
  color: ${({theme}) => theme.Colors.blackLight};
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: 0.5px;
  margin-top: 15px;
`;
export const SubTitle = styled.Text`
  color: ${({theme}) => theme.Colors.blackLight};
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.08px;
`;

export const Description = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;
export const TextFormat = styled.Text`
  color: ${({theme}) => theme.Colors.grayWak};
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.07px;
`;
export const TextBold = styled.Text`
  color: ${({theme}) => theme.Colors.blackLight};
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.07px;
`;
export const Separation = styled.View`
  width: 100%;
  height: 0.5px;
  background-color: ${({theme}) => theme.Colors.grayWak};
`;
export const ButtonModal = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
`;
export const ButtonCancel = styled.View`
  width: 45%;
`;
export const ButtonConfirm = styled.View`
  width: 45%;
`;
