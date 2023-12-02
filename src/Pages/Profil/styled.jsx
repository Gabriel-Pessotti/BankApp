import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}) => theme.Colors.white};
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
color:  ${({theme}) => theme.Colors.blackLight};
font-size: 18px;
font-weight: 600;
line-height: 26px;
letter-spacing: 0.09px;
`;

export const ViewButton = styled.View`
width: 80%;
margin-left: 40px;
margin-right: 10px;
`;
export const Text  = styled.Text `
color: ${({theme}) => theme.Colors.blackLight};
text-align: center;
font-size: 18px;
font-weight: 600;
line-height: 26px; 
letter-spacing: 0.09px;
`;

