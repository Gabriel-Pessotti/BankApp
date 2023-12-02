import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.Colors.whiteColor};
  padding-left: 20px;
  padding-right: 20px;
`;
export const Header = styled.View``;

export const FlatList = styled.FlatList`
`;

export const View = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  justify-content: center;
  margin-top: 20px;
  background-color: ${({theme}) => theme.Colors.whiteWeak};
  border-radius: 24px;
`;

export const ViewPic = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const Picture = styled.Image`
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 40px;
`;
export const Texts = styled.View``;

export const Name = styled.Text`
color:${({theme}) => theme.Colors.blackLight};
font-size: 14px;
font-weight: 600;
line-height: 22px;
letter-spacing: 0.07px;
`;
export const TextBank = styled.Text`
  color: ${({theme}) => theme.Colors.grayWak};
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.06px;
`;
